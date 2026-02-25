import fs from "node:fs";
import path from "node:path";

const distDir = path.resolve("dist");
const expected = [
  "index.html",
  path.join("work", "index.html"),
  path.join("studio", "index.html"),
  path.join("toolkit", "index.html"),
  path.join("contact", "index.html"),
];

const missing: string[] = [];

for (const rel of expected) {
  const abs = path.join(distDir, rel);
  if (!fs.existsSync(abs)) {
    missing.push(rel);
  }
}

if (missing.length) {
  console.error("Missing prerendered files:");
  for (const rel of missing) {
    console.error(`- dist/${rel}`);
  }
  process.exit(1);
}

console.log("Prerender check OK.");
