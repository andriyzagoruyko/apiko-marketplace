import React from 'react';
import * as Yup from 'yup';
import useTitle from '../../hooks/useTitle';
import RegisterForm from './components/RegisterForm/RegisterForm';

const validationSchema = Yup.object().shape({
  email: Yup.string()
    .email('Invalid email')
    .required('Email required'),
  name: Yup.string()
    .min(2, 'Must be at least 2 characters')
    .required('Name required'),
  password: Yup.string().required('Password required'),
  confirm: Yup.string()
    .required('Password required')
    .oneOf([Yup.ref('password'), null], 'Passwords must match'),
});

function Register() {
  useTitle('Register');

  return (
    <RegisterForm
      initialValues={{}}
      validationSchema={validationSchema}
    />
  );
}
export default Register;
