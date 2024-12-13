import axios from "axios";
import { IS_DEVELOPMENT } from "../constants";

const logError = (message: string, data?: any) => {
  if (IS_DEVELOPMENT) {
    console.error(message, data);
  }
};

export const errorInterceptor = (error: unknown) => {
  if (axios.isAxiosError(error)) {
    if (error.response) {
      logError("Response Error:", {
        status: error.response.status,
        data: error.response.data,
        headers: error.response.headers,
      });
    } else if (error.request) {
      logError("Request Error: Request took longer to respond", error.request);
    } else if (error.message) {
      logError("Error Message:", error.message);
    }
  } else {
    logError("Unknown Error:", error);
  }
  return Promise.reject(error);
};
