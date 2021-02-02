import React from 'react';
import Form from '../../../components/common/Form/';
import FormContainer from '../../../components/common/Form/Container/Container';
import FormField from '../../../components/common/Form/Field/Field';
import FormTitle from '../../../components/common/Form/Title/Title';
import FormSubmit from '../../../components/common/Form/Submit/Submit';

function Auth() {
  return (
    <>
      <FormContainer width={450}>
        <FormTitle text="Restore Password" />
        <Form action="/refresh">
          <FormField
            id="email"
            label="email"
            type="email"
            placeholder="Example@gmail.com"
          />
          <FormSubmit text="Continue" />
        </Form>
      </FormContainer>
    </>
  );
}

export default Auth;
