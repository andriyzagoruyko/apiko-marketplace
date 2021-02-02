import React from 'react';
import { Link as RouterLink } from 'react-router-dom';
import { routes } from '../../routes';
import s from '../Auth.module.scss';
import Form from '../../../components/common/Form/';
import FormContainer from '../../../components/common/Form/Container/Container';
import FormField from '../../../components/common/Form/Field/Field';
import FormTitle from '../../../components/common/Form/Title/Title';
import FormSubmit from '../../../components/common/Form/Submit/Submit';
import PasswordField from '../components/PasswordField/PasswordField';

function Login() {
  const refreshPassword = (
    <RouterLink to={routes.refresh}>
      Don’t remember password?
    </RouterLink>
  );

  return (
    <>
      <FormContainer width={450}>
        <FormTitle text="Login" />
        <Form action="">
          <FormField
            id="email"
            label="email"
            type="email"
            placeholder="Example@gmail.com"
          />
          <PasswordField
            id="password"
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
