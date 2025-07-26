// medium/request.ts
import type { RawAxiosRequestConfig } from "axios";
import http from "../infrastructure/http";

interface IMediumService<TReqData = object> {
  method?: "GET" | "POST" | "PUT" | "DELETE" | "PATCH";
  relativePath: string;
  data?: TReqData;
  headers?: Record<string, string>;
  params?: Record<string, unknown>;
  responseType?: "json" | "blob" | "text" | "stream";
  signal?: AbortSignal;
}

const request = async <TResData, TReqData = object>({
  method = "GET",
  relativePath,
  data,
  headers,
  params,
  responseType,
  signal,
}: IMediumService<TReqData>): Promise<TResData> => {
  // Use your deployed Medium API base URL
  const baseApiPath = "https://lakshaykapoor08.vercel.app/api";

  const httpRequest: RawAxiosRequestConfig<TReqData> = {
    data,
    method,
    headers: { ...headers },
    params,
    url: `${baseApiPath}${relativePath}`,
    responseType,
    signal,
  };

  return http<TReqData, TResData>(httpRequest);
};

export default request;
