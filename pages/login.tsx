import { Button, Paper, TextField, Typography } from '@mui/material';
import { Container } from '@mui/system';
import { useFormik } from 'formik';
import { NextPage } from 'next';
import * as Yup from 'yup';

const validationSchema = Yup.object().shape({
  userName: Yup.string().required('User name is required').min(1, 'Please, imput user name!'),
  password: Yup.string().required('Password is required').min(1, 'Please, imput password!'),
});

const LoginPage: NextPage = () => {
  const formik = useFormik({
    initialValues: {
      userName: '',
      password: '',
    },
    validationSchema,
    onSubmit: (values) => {
      console.log(values);
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
          Sign in
        </Typography>
        <TextField
          margin='normal'
          id='userName'
          label='User name'
          variant='standard'
          fullWidth
          value={formik.values.userName}
          onChange={formik.handleChange}
          error={formik.touched.userName && Boolean(formik.errors.userName)}
          helperText={formik.touched.userName && formik.errors.userName}
        />
        <TextField
          margin='normal'
          id='password'
          label='Password'
          type='password'
          fullWidth
          variant='standard'
          value={formik.values.password}
          onChange={formik.handleChange}
          error={formik.touched.password && Boolean(formik.errors.password)}
          helperText={formik.touched.password && formik.errors.password}
        />

        <Button type='submit' fullWidth variant='contained' sx={{ mt: 3, mb: 2 }}>
          Sign In
        </Button>
      </Paper>
    </Container>
  );
};

export default LoginPage;
