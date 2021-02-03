import React from 'react';
import { Link as RouterLink } from 'react-router-dom';
import { routes } from '../../../routes';
import Form from '../../../../components/Form/';
import FormContainer from '../../../../components/Form/Container/Container';
import FormField from '../../../../components/Form/Field/Field';
import FormTitle from '../../../../components/Form/Title/Title';
import FormSubmit from '../../../../components/Form/Submit/Submit';
import PasswordField from '../../../../components/Form/PasswordField/PasswordField';

function LoginForm(props) {
  const refreshPassword = (
    <RouterLink to={routes.restore}>
      Don’t remember password?
    </RouterLink>
  );

  return (
    <>
      <FormContainer>
        <FormTitle text="Login" />
        <Form {...props}>
          <FormField
            name="email"
            label="email"
            type="email"
            placeholder="Example@gmail.com"
          />
          <PasswordField
            name="password"
            label="password"
            helper={refreshPassword}
          />
          <FormSubmit text="Continue" />
        </Form>
      </FormContainer>
      <FormContainer width={450}>
        <p className="text-center">
          I have no account,&nbsp;
          <RouterLink className="uppercase" to={routes.register}>
            Register Now
          </RouterLink>
        </p>
      </FormContainer>
    </>
  );
}

export default LoginForm;
