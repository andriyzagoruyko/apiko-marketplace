import React from 'react';
import { Link as RouterLink } from 'react-router-dom';
import { routes } from '../../../routes';
import Form from '../../../../components/Form/';
import FormContainer from '../../../../components/Form/Container/Container';
import FormField from '../../../../components/Form/Field/Field';
import FormTitle from '../../../../components/Form/Title/Title';
import FormSubmit from '../../../../components/Form/Submit/Submit';
import PasswordField from '../../../../components/Form/PasswordField/PasswordField';

function RegisterForm(props) {
  return (
    <>
      <FormContainer>
        <FormTitle text="Register" />
        <Form {...props}>
          <FormField
            label="email"
            type="email"
            name="email"
            placeholder="Example@gmail.com"
          />
          <FormField
            name="name"
            type="text"
            label="full name"
            placeholder="Tony Stark"
          />
          <PasswordField name="password" label="password" />
          <PasswordField name="confirm" label="password again" />
          <FormSubmit text="Continue" />
        </Form>
      </FormContainer>
      <FormContainer>
        <p className="text-center">
          I alredy have an account,&nbsp;
          <RouterLink className="uppercase" to={routes.login}>
            Log In
          </RouterLink>
        </p>
      </FormContainer>
    </>
  );
}

export default RegisterForm;
