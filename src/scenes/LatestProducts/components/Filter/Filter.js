import React from 'react';
import s from './Filter.module.scss';
import Form from '../../../../components/Form/';
import Field from '../../../../components/Form/Field/Field';
import Select from '../../../../components/Form/Select/Select';
import { ReactComponent as IconCategory } from '../../../../assets/img/icons/category.svg';

function Filter() {
  const categories = [
    {
      id: 1,
      value: 'category 1',
    },
    {
      id: 2,
      value: 'category 2',
    },
    {
      id: 3,
      value: 'category 3',
    },
  ];

  return (
    <div className={s.filter}>
      <Form
        initialValues={{ category: '', minPrice: '', maxPrice: '' }}
        horizontal
      >
        <div className={s.selectCategory}>
          <Select
            name="category"
            placeholder="Choose category"
            icon={<IconCategory />}
            options={categories}
          />
        </div>
        <div className={s.range}>
          <div className={`${s.item}`}>
            <Field
              name="minPrice"
              placeholder="Price from (USD)"
              dense
              width={145}
              helper={false}
            />
          </div>
          <div className={`${s.item}`}>
            <Field
              name="maxPrice"
              placeholder="Price to (USD)"
              dense
              width={145}
              helper={false}
            />
          </div>
        </div>
      </Form>
    </div>
  );
}

export default Filter;
