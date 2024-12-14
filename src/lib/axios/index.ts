import { createGateway } from "./config";

const publicGateway = createGateway();

const privateGateway = createGateway();

privateGateway.interceptors.request.use((config) => {
  const token = localStorage.getItem("accessToken");
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

export { publicGateway, privateGateway };
