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
  name: Yup.string().min(2).required('Name required'),
  password: Yup.string().required('Password required'),
  confirmPassword: Yup.string()
    .required('Password required')
    .oneOf([Yup.ref('password'), null], 'Passwords must match'),
});

function Register() {
  useTitle('Register');

  return (
    <>
      <FormContainer width={450}>
        <FormTitle text="Register" />
        <Form
          initialValues={{
            email: '',
            password: '',
          }}
          validationSchema={validationSchema}
        >
          <FormField
            id="email"
            label="email"
            type="email"
            name="email"
            placeholder="Example@gmail.com"
          />
          <FormField
            id="name"
            name="name"
            label="full name"
            type="text"
            placeholder="Tony Stark"
          />
          <PasswordField
            id="password"
            name="password"
            label="password"
          />
          <PasswordField
            id="confirmPassword"
            name="confirmPassword"
            label="password again"
          />
          <FormSubmit text="Continue" />
        </Form>
      </FormContainer>
      <FormContainer width={450}>
        <p className={s.info}>
          I alredy have an account,&nbsp;
          <RouterLink className="uppercase" to={routes.login}>
            Log In
          </RouterLink>
        </p>
      </FormContainer>
    </>
  );
}

export default Register;
