import React from 'react';
import s from './SearchForm.module.scss';
import Form from '../../../Form/';
import Field from '../../../Form/Field/Field';
import Submit from '../../../Form/Submit/Submit';
import { ReactComponent as IconSearch } from '../../../../assets/img/icons/search.svg';
import { ReactComponent as IconLocation } from '../../../../assets/img/icons/location.svg';

function SearchForm() {
  return (
    <div className={s.container}>
      <Form horizontal initialValues={{}}>
        <Field
          name="search"
          type="search"
          placeholder="Search products by name"
          icon={<IconSearch />}
          iconStart
          helper={false}
        />
        <Field
          name="location"
          placeholder="Location"
          icon={<IconLocation />}
          iconStart
          helper={false}
        />
        <Submit type="submit" text="search" dark uppercase />
      </Form>
    </div>
  );
}

export default SearchForm;