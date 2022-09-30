import { AxiosInstance } from 'axios';
import { authEndpoints } from './authEndpoints';

import { axios } from '../axiosInstance';
import { AuthInputType, AuthToken } from './authApi.schema';

class AuthAPI {
  private requestInstance: AxiosInstance;

  constructor(axiosInstance: AxiosInstance) {
    this.requestInstance = axiosInstance;
  }

  signup = (params: AuthInputType): Promise<AuthToken> => {
    return this.requestInstance.post(authEndpoints.signup, params);
  };

  signin = (params: AuthInputType): Promise<AuthToken> => {
    return this.requestInstance.post(authEndpoints.signin, params);
  };
}

export const authApi = new AuthAPI(axios);
