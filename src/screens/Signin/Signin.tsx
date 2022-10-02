import React from 'react';
import { authApi } from '../../api/authApi/authApi';
import { Auth } from '../../components/Auth/Auth';

export const SigninScreen: React.FC = () => {
  return (
    <Auth
      title='Sign in'
      button='Sign in'
      link={{ text: 'Go to registartion', href: '/registration' }}
      request={authApi.signin}
    />
  );
};
