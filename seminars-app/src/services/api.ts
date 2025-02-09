import axios, {
  AxiosError,
  AxiosInstance,
  AxiosResponse,
  InternalAxiosRequestConfig,
} from 'axios';
import { ApiConnectParam } from '../utils/constant';

export const createAPI = (): AxiosInstance => {
  const api = axios.create({
    baseURL: ApiConnectParam.Url,
    timeout: ApiConnectParam.Timeout,
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
