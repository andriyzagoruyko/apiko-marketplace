import React from 'react';
import * as Yup from 'yup';
import { Link as RouterLink } from 'react-router-dom';
import { routes } from '../../routes';
import useTitle from '../../../hooks/useTitle';
import s from '../Auth.module.scss';
import Form from '../../../components/common/Form/';
import FormContainer from '../../../components/common/Form/Container/Container';
import FormField from '../../../components/common/Form/Field/Field';
import FormTitle from '../../../components/common/Form/Title/Title';
import FormSubmit from '../../../components/common/Form/Submit/Submit';
import PasswordField from '../components/PasswordField/PasswordField';

const validationSchema = Yup.object().shape({
  email: Yup.string()
    .email('Invalid email')
    .required('Email required'),
  password: Yup.string().required('Password required'),
});

function Login() {
  const refreshPassword = (
    <RouterLink to={routes.refresh}>
      Don’t remember password?
    </RouterLink>
  );

  const handleSubmit = (values) => {
    console.log(values);
  };

  useTitle('Login');

  return (
    <>
      <FormContainer width={450}>
        <FormTitle text="Login" />
        <Form
          initialValues={{
            email: '',
            password: '',
          }}
          onSubmit={handleSubmit}
          validationSchema={validationSchema}
        >
          <FormField
            id="email"
            name="email"
            label="email"
            type="email"
            placeholder="Example@gmail.com"
          />
          <PasswordField
            id="password"
            name="password"
            label="password"
            helper={refreshPassword}
          />
          <FormSubmit text="Continue" />
        </Form>
      </FormContainer>
      <FormContainer width={450}>
        <p className={s.info}>
          I have no account,&nbsp;
          <RouterLink className="uppercase" to={routes.register}>
            Register Now
          </RouterLink>
        </p>
      </FormContainer>
    </>
  );
}

export default Login;
