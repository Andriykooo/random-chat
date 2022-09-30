import { api } from '../../constants/api';

export const authEndpoints = {
  signup: api.auth + api.signup,
  signin: api.auth + api.signin,
};
