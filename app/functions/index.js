import { initializeApp } from "firebase-admin/app";
import { defineSecret } from "firebase-functions/params";
import { onCall, HttpsError } from "firebase-functions/v2/https";

initializeApp();

const githubToken = defineSecret("GITHUB_TOKEN");

const GITHUB_REPO = "OneEightyFirst/noctvale";

const TITLE_PREFIX = {
  rules: "[Playtest · Rules]",
  app: "[Playtest · App]",
};

function trimString(value, maxLength) {
  if (typeof value !== "string") return "";
  return value.trim().slice(0, maxLength);
}

function validatePayload(data) {
  const feedbackType = data?.feedbackType;
  if (feedbackType !== "rules" && feedbackType !== "app") {
    throw new HttpsError("invalid-argument", "Choose rules feedback or app feedback.");
  }

  const title = trimString(data?.title, 200);
  const stepsToReproduce = trimString(data?.stepsToReproduce, 8000);
  const expectedBehavior = trimString(data?.expectedBehavior, 4000);
  const actualBehavior = trimString(data?.actualBehavior, 4000);
  const additionalContext = trimString(data?.additionalContext, 8000);
  const severity = data?.severity;

  if (title.length < 3) {
    throw new HttpsError("invalid-argument", "Title must be at least 3 characters.");
  }

  if (stepsToReproduce.length < 10) {
    throw new HttpsError("invalid-argument", "Steps to reproduce must be at least 10 characters.");
  }

  if (expectedBehavior.length < 3) {
    throw new HttpsError("invalid-argument", "Expected behavior is required.");
  }

  if (actualBehavior.length < 3) {
    throw new HttpsError("invalid-argument", "Actual behavior is required.");
  }

  const allowedSeverities = new Set(["low", "medium", "high"]);
  const normalizedSeverity = allowedSeverities.has(severity) ? severity : "medium";

  return {
    feedbackType,
    title,
    stepsToReproduce,
    expectedBehavior,
    actualBehavior,
    additionalContext,
    severity: normalizedSeverity,
    pageUrl: trimString(data?.pageUrl, 2000),
    reporterEmail: trimString(data?.reporterEmail, 320),
    environment: {
      userAgent: trimString(data?.environment?.userAgent, 1000),
      appVersion: trimString(data?.environment?.appVersion, 80),
      gitSha: trimString(data?.environment?.gitSha, 80),
    },
  };
}

function buildIssueBody(payload, authEmail) {
  const reporter = payload.reporterEmail || authEmail || "Unknown";
  const lines = [
    "## Playtest feedback",
    "",
    `- **Type:** ${payload.feedbackType === "rules" ? "Rules feedback" : "App feedback"}`,
    `- **Reporter:** ${reporter}`,
    `- **Severity:** ${payload.severity}`,
    `- **Submitted:** ${new Date().toISOString()}`,
    `- **Page URL:** ${payload.pageUrl || "n/a"}`,
    "",
    "## Steps to reproduce",
    "",
    payload.stepsToReproduce,
    "",
    "## Expected behavior",
    "",
    payload.expectedBehavior,
    "",
    "## Actual behavior",
    "",
    payload.actualBehavior,
  ];

  if (payload.additionalContext) {
    lines.push("", "## Additional context", "", payload.additionalContext);
  }

  lines.push(
    "",
    "## Environment",
    "",
    `- **App version:** ${payload.environment.appVersion || "unknown"}`,
    `- **Build:** ${payload.environment.gitSha || "unknown"}`,
    `- **User agent:** ${payload.environment.userAgent || "unknown"}`,
  );

  return lines.join("\n");
}

async function createGitHubIssue(token, repo, title, body) {
  const response = await fetch(`https://api.github.com/repos/${repo}/issues`, {
    method: "POST",
    headers: {
      Accept: "application/vnd.github+json",
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json",
      "User-Agent": "noctvale-playtest-feedback",
      "X-GitHub-Api-Version": "2022-11-28",
    },
    body: JSON.stringify({
      title,
      body,
      labels: ["bug", "playtest"],
    }),
  });

  if (response.status === 422) {
    const retryResponse = await fetch(`https://api.github.com/repos/${repo}/issues`, {
      method: "POST",
      headers: {
        Accept: "application/vnd.github+json",
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
        "User-Agent": "noctvale-playtest-feedback",
        "X-GitHub-Api-Version": "2022-11-28",
      },
      body: JSON.stringify({ title, body }),
    });

    if (!retryResponse.ok) {
      const retryError = await retryResponse.text();
      throw new HttpsError("internal", `GitHub issue creation failed: ${retryError.slice(0, 240)}`);
    }

    return retryResponse.json();
  }

  if (!response.ok) {
    const errorText = await response.text();
    throw new HttpsError("internal", `GitHub issue creation failed: ${errorText.slice(0, 240)}`);
  }

  return response.json();
}

export const submitPlaytestFeedback = onCall({ secrets: [githubToken] }, async (request) => {
  if (!request.auth) {
    throw new HttpsError("unauthenticated", "Sign in to submit feedback.");
  }

  const token = githubToken.value();
  if (!token) {
    throw new HttpsError("failed-precondition", "GitHub token is not configured.");
  }

  const payload = validatePayload(request.data ?? {});
  const authEmail = request.auth.token.email ?? "";

  if (payload.reporterEmail && authEmail && payload.reporterEmail !== authEmail) {
    throw new HttpsError("permission-denied", "Reporter email must match your signed-in account.");
  }

  const repo = GITHUB_REPO;
  const issueTitle = `${TITLE_PREFIX[payload.feedbackType]} ${payload.title}`;
  const issueBody = buildIssueBody(payload, authEmail);

  const issue = await createGitHubIssue(token, repo, issueTitle, issueBody);

  return {
    issueUrl: issue.html_url,
    issueNumber: issue.number,
  };
});
