import type { AxiosRequestConfig } from "axios";

export function axiosToCurl(config: AxiosRequestConfig): string {
  const baseUrl = import.meta.env.VITE_BASE_URL as string;
  const method = config.method?.toUpperCase() || "GET";
  const url = baseUrl + "/" + (config.url || "");
  const headers = config.headers || {};
  const data = config.data ? JSON.stringify(config.data) : "";
  let curl = `curl -X ${method} '${url}'`;

  for (const [key, value] of Object.entries(headers)) {
    curl += ` -H '${key}: ${value}'`;
  }

  if (headers["Content-Type"] === "application/x-www-form-urlencoded" && data) {
    const formattedData = new URLSearchParams(data).toString();
    curl += ` -d '${formattedData}'`;
  } else if (["POST", "PUT", "PATCH", "DELETE"].includes(method) && data) {
    curl += ` -d '${JSON.stringify(data)}'`;
  }

  return curl;
}
