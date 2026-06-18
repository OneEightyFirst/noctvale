// Placeholder for cPanel Setup Node.js App (required startup file).
// The live site is served by Apache from public_html/noctvale after Git deploy.
import { createServer } from "node:http";

const port = process.env.PORT || 3000;

createServer((_req, res) => {
  res.writeHead(200, { "Content-Type": "text/plain" });
  res.end("Noctvale build environment — site served from public_html/noctvale\n");
}).listen(port);
