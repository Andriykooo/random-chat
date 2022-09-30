import { Button, Paper, Typography } from '@mui/material';
import { Container } from '@mui/system';
import { AxiosError } from 'axios';
import { useFormik } from 'formik';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useMutation } from 'react-query';
import * as Yup from 'yup';
import { AuthInputType, AuthToken } from '../../api/authApi/authApi.schema';
import { useMessage } from '../../hooks/useMessages';
import { ErrorType } from '../../types/ErrorType';
import { AuthInput } from './components/AuthInput/AuthInput';

interface AuthProps {
  title: string;
  button: string;
  link: {
    text: string;
    href: string;
  };
  request: (input: AuthInputType) => Promise<AuthToken>;
}

const validationSchema = Yup.object().shape({
  email: Yup.string().email().required('User name is required').min(1, 'Please, imput user name!'),
  password: Yup.string().required('Password is required').min(1, 'Please, imput password!'),
});

export const Auth: React.FC<AuthProps> = ({ title, button, link, request }) => {
  const router = useRouter();
  const message = useMessage();

  const handleRequest = useMutation(request, {
    onSuccess: (token: AuthToken): void => {
      localStorage.setItem('token', JSON.stringify(token));
      router.push('/dashboard');
    },
    onError: (error: AxiosError): void => {
      message.error((error as AxiosError<ErrorType>)?.response?.data?.err);
    },
  });

  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    validationSchema,
    onSubmit: (formValues) => {
      handleRequest.mutate(formValues);
    },
  });

  return (
    <Container
      maxWidth='sm'
      sx={{
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <Paper
        component='form'
        variant='outlined'
        sx={{
          p: 3,
        }}
        onSubmit={formik.handleSubmit}
      >
        <Typography component='h5' variant='h5'>
          {title}
        </Typography>
        <AuthInput formik={formik} type='email' />
        <AuthInput formik={formik} type='password' />
        <Button type='submit' fullWidth variant='contained' sx={{ mt: 3, mb: 2 }}>
          {button}
        </Button>
        <Link href={link.href}>
          <Button fullWidth sx={{ textTransform: 'none' }}>
            {link.text}
          </Button>
        </Link>
      </Paper>
    </Container>
  );
};
