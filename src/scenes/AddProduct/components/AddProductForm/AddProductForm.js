import React from 'react';
import Form from '../../../../components/Form/';
import FormContainer from '../../../../components/Form/Container/Container';
import FormField from '../../../../components/Form/Field/Field';
import FormTitle from '../../../../components/Form/Title/Title';
import FormSubmit from '../../../../components/Form/Submit/Submit';
import FormUpload from '../../../../components/Form/Upload/Upload';

function AddProductForm(props) {
  return (
    <FormContainer>
      <FormTitle text="Add product" />
      <Form {...props}>
        <FormField
          name="title"
          label="title"
          type="text"
          placeholder="For example: Iron man suit"
        />
        <FormField
          name="location"
          label="location"
          type="text"
          placeholder="For example: Los Angeles, CA"
        />
        <FormField
          name="description"
          label="description"
          type="text"
          rows={5}
          placeholder="For example: Iron man suit"
        />
        <FormUpload
          name="photos"
          label="photos"
          accept="image/*"
          maxFiles={6}
        />
        <FormField
          name="price"
          label="price"
          type="number"
          placeholder="Product price"
        />
        <FormSubmit text="submit" uppercase />
      </Form>
    </FormContainer>
  );
}

export default AddProductForm;
