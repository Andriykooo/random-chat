import Axios, { AxiosError } from 'axios';
import { api } from '../constants/api';

export const axios = Axios.create({
  baseURL: api.baseUrl,
});

axios.interceptors.response.use(
  (response) => response.data,
  (error: AxiosError) => {
    throw error;
  }
);
