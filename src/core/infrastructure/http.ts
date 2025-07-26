// infrastructure/http.ts
import axios, {
  type AxiosError,
  type AxiosInstance,
  type AxiosResponse,
  type RawAxiosRequestConfig,
} from "axios";

const http = <TReqData, TResData>(
  requestConfig: RawAxiosRequestConfig<TReqData>
): Promise<TResData> => {
  const axiosInstance = axios.create({
    timeout: 30000, // 30 seconds timeout
    headers: {
      "Content-Type": "application/json",
    },
  });

  requestInterceptors(axiosInstance);
  responseInterceptors(axiosInstance);

  return axiosInstance(requestConfig);
};

const requestInterceptors = (axiosInstance: AxiosInstance) => {
  axiosInstance.interceptors.request.use(
    (config) => {
      // Add any global request headers here if needed
      // For Medium API, no special headers are required
      return config;
    },
    (error) => {
      return Promise.reject(error);
    }
  );
};

const responseInterceptors = (axiosInstance: AxiosInstance) => {
  axiosInstance.interceptors.response.use(
    (response: AxiosResponse) => {
      // Return the response data directly for successful responses
      return response.data;
    },
    async (error: AxiosError) => {
      // Enhanced error handling for different scenarios
      if (error.response) {
        // Server responded with error status (4xx, 5xx)
        const errorData = error.response.data as unknown;
        const errorMessage =
          (typeof errorData === "object" &&
          errorData !== null &&
          "message" in errorData
            ? (errorData as { message?: string }).message
            : undefined) ||
          (typeof errorData === "object" &&
          errorData !== null &&
          "error" in errorData
            ? (errorData as { error?: string }).error
            : undefined) ||
          error.response.statusText ||
          `HTTP ${error.response.status} Error`;

        console.error("API Error:", {
          status: error.response.status,
          message: errorMessage,
          url: error.config?.url,
          method: error.config?.method?.toUpperCase(),
          data: errorData,
        });

        // Create a structured error object
        const apiError = {
          statusCode: error.response.status,
          status: "error",
          message: errorMessage,
          error:
            typeof errorData === "object" &&
            errorData !== null &&
            "error" in errorData
              ? (errorData as { error?: string }).error
              : error.response.statusText,
        };

        return Promise.reject(apiError);
      } else if (error.request) {
        // Network error - no response received
        console.error("Network Error:", {
          message: error.message,
          url: error.config?.url,
          method: error.config?.method?.toUpperCase(),
        });

        const networkError = {
          statusCode: 0,
          status: "error",
          message: "Network error - please check your connection",
          error: "NETWORK_ERROR",
        };

        return Promise.reject(networkError);
      } else {
        // Request setup error
        console.error("Request Setup Error:", error.message);

        const setupError = {
          statusCode: 0,
          status: "error",
          message: error.message || "Request setup error",
          error: "REQUEST_SETUP_ERROR",
        };

        return Promise.reject(setupError);
      }
    }
  );
};

export default http;
