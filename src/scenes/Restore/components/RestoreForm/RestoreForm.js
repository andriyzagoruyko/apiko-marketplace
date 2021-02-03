import React from 'react';
import Form from '../../../../components/Form/';
import FormContainer from '../../../../components/Form/Container/Container';
import FormField from '../../../../components/Form/Field/Field';
import FormTitle from '../../../../components/Form/Title/Title';
import FormSubmit from '../../../../components/Form/Submit/Submit';

function RestoreForm(props) {
  return (
    <>
      <FormContainer width={450}>
        <FormTitle text="Restore Password" />
        <Form {...props}>
          <FormField
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

export default RestoreForm;
