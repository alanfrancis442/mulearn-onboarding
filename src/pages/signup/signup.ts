import { publicGateway } from "@/lib/axios";
import { ApiResponse } from "@/lib/axios/types";

export type SignupData = {
  accessToken: string;
  refreshToken: string;
};

export interface RegisterData {
  user: UserRegisterData;
  interests?: UserInterestsData;
}

export interface UserRegisterData {
  full_name: string;
  email: string;
  password: string;
}

export interface UserInterestsData {
  choosen_interests: string[];
  choosen_endgoals: string[];
  other_interests: string[];
  other_endgoals: string[];
}

export const signup = async (
  data: RegisterData
): Promise<ApiResponse<SignupData | null>> => {
  return await publicGateway
    .post("/api/v1/register/", data)
    .then((res) => {
      if (res.status == 200) {
        console.log(res.data);
        localStorage.setItem("accessToken", res.data.response.accessToken);
        localStorage.setItem("refreshToken", res.data.response.refreshToken);
      }
      return res.data as ApiResponse<SignupData | null>;
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
