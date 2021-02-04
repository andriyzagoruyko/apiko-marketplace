import React from 'react';
import { useHistory } from 'react-router-dom';
import { observer } from 'mobx-react';
import * as Yup from 'yup';
import useTitle from '../../hooks/useTitle';
import { useStore } from '../../stores/createStore';
import EditProfileForm from './components/EditProfileForm/EditProfileForm';

const formProps = {
  validationSchema: Yup.object().shape({
    fullName: Yup.string().required('Name is required'),
    phone: Yup.string().required('Phone is required'),
    location: Yup.string().required('Location is required'),
  }),
  enableReinitialize: true,
};

function EditProfile() {
  useTitle('EditProfile');

  const store = useStore();
  const history = useHistory();

  const handleSubmit = async ({
    fullName,
    phone,
    location,
    avatar,
  }) => {
    await store.auth.saveAccount.run({
      fullName,
      phone,
      location,
      avatar,
    });
    history.push('/');
  };

  return (
    <>
      <EditProfileForm
        {...formProps}
        initialValues={
          store.viewer.user || {
            fullName: '',
            phone: '',
            location: '',
            avatar: '',
          }
        }
        isLoading={
          store.auth.saveAccount.isLoading || store.viewer.isLoading
        }
        onSubmit={handleSubmit}
      />
    </>
  );
}

export default observer(EditProfile);