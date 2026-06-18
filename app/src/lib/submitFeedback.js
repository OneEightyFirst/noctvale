function mapSubmitError(error) {
  const code = error?.code ?? "";
  const message = error?.message ?? "Could not submit feedback.";

  if (code === "functions/unauthenticated") {
    return "Sign in to submit feedback.";
  }

  if (code === "functions/invalid-argument") {
    return message;
  }

  if (code === "functions/failed-precondition") {
    return "Feedback submission is not configured yet. Contact the team.";
  }

  if (code === "functions/unavailable" || code === "functions/internal") {
    return "Feedback service is unavailable. Try again in a moment.";
  }

  return message;
}

export async function submitPlaytestFeedback(payload) {
  const [{ getFunctions, httpsCallable }, { app }] = await Promise.all([
    import("firebase/functions"),
    import("../firebase.js"),
  ]);

  const functions = getFunctions(app);
  const submitPlaytestFeedbackCallable = httpsCallable(functions, "submitPlaytestFeedback");

  try {
    const response = await submitPlaytestFeedbackCallable(payload);
    const data = response.data;

    if (!data?.issueUrl) {
      throw new Error("Feedback was submitted but no issue link was returned.");
    }

    return { issueUrl: data.issueUrl, issueNumber: data.issueNumber };
  } catch (error) {
    throw new Error(mapSubmitError(error));
  }
}
