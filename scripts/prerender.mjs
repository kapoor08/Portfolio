import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const distDir = path.resolve(__dirname, "../dist");
const templatePath = path.join(distDir, "index.html");

if (!fs.existsSync(templatePath)) {
  throw new Error("Missing dist/index.html. Run `vite build` first.");
}

const template = fs.readFileSync(templatePath, "utf-8");
const { render } = await import("../dist/entry-server.js");

const routes = ["/", "/work", "/studio", "/toolkit", "/contact"];

for (const route of routes) {
  const { html, helmet } = render(route);

  const headTags = [
    helmet?.title?.toString() ?? "",
    helmet?.meta?.toString() ?? "",
    helmet?.link?.toString() ?? "",
    helmet?.script?.toString() ?? "",
  ].join("");

  const output = template
    .replace('<div id="root"></div>', `<div id="root">${html}</div>`)
    .replace("</head>", `${headTags}</head>`);

  const outDir = route === "/" ? distDir : path.join(distDir, route.slice(1));
  fs.mkdirSync(outDir, { recursive: true });
  fs.writeFileSync(path.join(outDir, "index.html"), output);
  console.log(`Prerendered: ${route}`);
}
