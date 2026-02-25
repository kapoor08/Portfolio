import fs from "node:fs";
import path from "node:path";
import React from "react";
import { renderToString } from "react-dom/server";
import * as ReactHelmetAsync from "react-helmet-async";
import { StaticRouter } from "react-router";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import AppRoutes from "../src/AppRoutes";

const routes = ["/", "/work", "/studio", "/toolkit", "/contact"];

const distDir = path.resolve("dist");
const templatePath = path.join(distDir, "index.html");

if (!fs.existsSync(templatePath)) {
  throw new Error("Missing dist/index.html. Run `vite build` first.");
}

const template = fs.readFileSync(templatePath, "utf-8");

const renderRoute = (route: string) => {
  const helmetContext: { helmet?: any } = {};
  const queryClient = new QueryClient();

  const app = (
    <ReactHelmetAsync.HelmetProvider context={helmetContext}>
      <QueryClientProvider client={queryClient}>
        <StaticRouter location={route}>
          <AppRoutes />
        </StaticRouter>
      </QueryClientProvider>
    </ReactHelmetAsync.HelmetProvider>
  );

  const appHtml = renderToString(app);
  const { helmet } = helmetContext;

  const headTags = [
    helmet?.title?.toString() ?? "",
    helmet?.meta?.toString() ?? "",
    helmet?.link?.toString() ?? "",
    helmet?.script?.toString() ?? "",
  ].join("");

  return template
    .replace('<div id="root"></div>', `<div id="root">${appHtml}</div>`)
    .replace("</head>", `${headTags}</head>`);
};

for (const route of routes) {
  const html = renderRoute(route);
  const outDir = route === "/" ? distDir : path.join(distDir, route.slice(1));
  fs.mkdirSync(outDir, { recursive: true });
  fs.writeFileSync(path.join(outDir, "index.html"), html);
}
