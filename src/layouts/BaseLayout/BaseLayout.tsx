import { useRouter } from 'next/router';
import { PropsWithChildren, useEffect } from 'react';
import { Messages } from '../../components/Messages/Messages';

export const BaseLayout: React.FC<PropsWithChildren> = ({ children }) => {
  const router = useRouter();

  useEffect(() => {
    const token = JSON.parse(localStorage.getItem('token') || '{}');

    if (!token?.accessToken) {
      router.push('/login');
    }

    console.log('render');
  }, []);

  return <Messages>{children}</Messages>;
};
