import React from 'react';
import * as Yup from 'yup';
import useTitle from '../../hooks/useTitle';
import LoginForm from './components/LoginForm/LoginForm';

const validationSchema = Yup.object().shape({
  email: Yup.string()
    .email('Invalid email')
    .required('Email required'),
  password: Yup.string().required('Password required'),
});

function Login() {
  const handleSubmit = (values) => {
    console.log(values);
  };

  useTitle('Login');

  return (
    <LoginForm
      onSubmit={handleSubmit}
      validationSchema={validationSchema}
      initialValues={{}}
    />
  );
}

export default Login;
