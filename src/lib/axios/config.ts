import axios from "axios";

export const getBaseUrl = () => {
  return process.env.VITE_BACKEND_URL || "http://localhost:3000";
};

export const createGateway = () => {
  const instance = axios.create({
    baseURL: getBaseUrl(),
    timeout: 10000,
    headers: {
      "Content-Type": "application/json",
    },
  });
  return instance;
};
