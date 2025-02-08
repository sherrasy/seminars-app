import axios, {
  AxiosError,
  AxiosInstance,
  AxiosResponse,
  InternalAxiosRequestConfig,
} from 'axios';

export const createAPI = (): AxiosInstance => {
  const api = axios.create({
    baseURL: 'http://localhost:3000/seminars',
    timeout: 5000,
  });

  api.interceptors.request.use((config: InternalAxiosRequestConfig) => config);

  api.interceptors.response.use(
    (response: AxiosResponse) => response,
    (error: AxiosError) => {
      throw error;
    }
  );

  return api;
};
