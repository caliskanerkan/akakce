import axios, { AxiosError, AxiosResponse } from "axios";

export interface ErrorType {
  message: string;
  status?: number;
}

const API = axios.create({
  baseURL: "https://mocki.io/v1/",
  timeout: 5000,
});

API.interceptors.request.use(
  (config) => config,
  (error: AxiosError): ErrorType => {
    return {
      message: error.message,
      status: error.status,
    };
  }
);

API.interceptors.response.use((res: AxiosResponse) => {
  return res.data;
});

export default API;
