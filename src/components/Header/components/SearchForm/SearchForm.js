import React from 'react';
import * as Yup from 'yup';
import { useHistory, useLocation } from 'react-router';
import s from './SearchForm.module.scss';
import Form from '../../../Form/';
import Field from '../../../Form/Field/Field';
import Submit from '../../../Form/Submit/Submit';
import { ReactComponent as IconSearch } from '../../../../assets/img/icons/search.svg';
import { ReactComponent as IconLocation } from '../../../../assets/img/icons/location.svg';
import { routes } from '../../../../scenes/routes';

const queryString = require('query-string');

const SignupSchema = Yup.object().shape({
  keyword: Yup.string().min(2, 'Too short').required('Required'),
  location: Yup.string().min(2, 'Too short').required('Required'),
});

function SearchForm() {
  const history = useHistory();
  const { keyword = '', location = '' } = queryString.parse(
    useLocation().search,
  );

  function handleSubmit(values) {
    history.push({
      pathname: routes.search,
      search: queryString.stringify(values),
    });
  }

  return (
    <div className={s.container}>
      <Form
        horizontal
        initialValues={{ keyword, location }}
        onSubmit={handleSubmit}
        validationSchema={SignupSchema}
        enableReinitialize
      >
        <Field
          name="keyword"
          type="search"
          placeholder="Search products by name"
          icon={<IconSearch />}
          iconStart
          disableHelper
        />
        <Field
          name="location"
          placeholder="Location"
          icon={<IconLocation />}
          iconStart
          disableHelper
        />
        <Submit type="submit" text="search" dark uppercase />
      </Form>
    </div>
  );
}

export default SearchForm;
