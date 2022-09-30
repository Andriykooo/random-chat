import { capitalize, TextField } from '@mui/material';
import { FormikValues } from 'formik';

interface AuthInput {
  formik: FormikValues;
  type: string;
}

export const AuthInput: React.FC<AuthInput> = ({ formik, type }) => {
  return (
    <TextField
      margin='normal'
      id={type}
      label={capitalize(type)}
      variant='standard'
      fullWidth
      value={formik.values[type]}
      onChange={formik.handleChange}
      error={formik.touched[type] && Boolean(formik.errors[type])}
      helperText={formik.touched[type] && formik.errors[type]}
    />
  );
};
