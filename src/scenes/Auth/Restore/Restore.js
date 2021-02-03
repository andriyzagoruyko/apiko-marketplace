import React from 'react';
import * as Yup from 'yup';
import useTitle from '../../../hooks/useTitle';
import Form from '../../../components/common/Form/';
import FormContainer from '../../../components/common/Form/Container/Container';
import FormField from '../../../components/common/Form/Field/Field';
import FormTitle from '../../../components/common/Form/Title/Title';
import FormSubmit from '../../../components/common/Form/Submit/Submit';

const validationSchema = Yup.object().shape({
  email: Yup.string()
    .email('Invalid email')
    .required('Email required'),
});

function Auth() {
  useTitle('Restore Password');

  return (
    <>
      <FormContainer width={450}>
        <FormTitle text="Restore Password" />
        <Form
          initialValues={{
            email: '',
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
          <FormSubmit text="Continue" />
        </Form>
      </FormContainer>
    </>
  );
}

export default Auth;
