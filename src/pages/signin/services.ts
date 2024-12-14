import { publicGateway } from "@/lib/axios";
import { ApiResponse } from "@/lib/axios/types";

export interface SigninData {
  accessToken: string;
  refreshToken: string;
}

export const googleSignIn = async (
  idToken: string
): Promise<ApiResponse<SigninData | null>> => {
  return await publicGateway
    .post("/api/v1/auth/signin-with-google/", {
      idToken,
    })
    .then((res) => {
      if (res.status == 200) {
        localStorage.setItem("accessToken", res.data.response.accessToken);
        localStorage.setItem("refreshToken", res.data.response.refreshToken);
      }
      return res.data as ApiResponse<SigninData | null>;
    })
    .catch((_) => {
      return {
        hasError: true,
        message: "Something went wrong",
        response: null,
        statusCode: 500,
      };
    });
};

export const signin = async (
  email: string,
  password: string
): Promise<ApiResponse<SigninData | null>> => {
  return await publicGateway
    .post("/api/v1/auth/user-authentication/", {
      emailOrMuid: email,
      password: password,
    })
    .then((res) => {
      if (res.status == 200) {
        console.log(res.data);
        localStorage.setItem("accessToken", res.data.response.accessToken);
        localStorage.setItem("refreshToken", res.data.response.refreshToken);
      }
      return res.data as ApiResponse<SigninData | null>;
    })
    .catch((err) => {
      if (err.response.status == 401) {
        return {
          hasError: true,
          message: "Invalid email or password",
          response: null,
          statusCode: 401,
        };
      }
      return {
        hasError: true,
        message: "Something went wrong",
        response: null,
        statusCode: 500,
      };
    });
};
