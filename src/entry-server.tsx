import { renderToString } from "react-dom/server";
import { HelmetProvider } from "react-helmet-async";
import { StaticRouter } from "react-router";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import AppRoutes from "./AppRoutes";

export function render(url: string) {
  const helmetContext: { helmet?: any } = {};
  const queryClient = new QueryClient();

  const html = renderToString(
    <HelmetProvider context={helmetContext}>
      <QueryClientProvider client={queryClient}>
        <StaticRouter location={url}>
          <AppRoutes />
        </StaticRouter>
      </QueryClientProvider>
    </HelmetProvider>
  );

  return { html, helmet: helmetContext.helmet };
}
