import React from 'react';
import { authApi } from '../../api/authApi/authApi';
import { Auth } from '../../components/Auth/Auth';

export const Signup: React.FC = () => {
  return (
    <Auth title='Sign up' button='Sign up' link={{ text: 'Go to login', href: '/login' }} request={authApi.signup} />
  );
};
