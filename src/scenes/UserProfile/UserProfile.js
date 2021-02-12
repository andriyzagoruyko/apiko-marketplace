import React, { useEffect } from 'react';
import { useParams } from 'react-router';
import { observer } from 'mobx-react';
import Products from 'src/components/Products/Products';
import useTitle from 'src/hooks/useTitle';
import Loader from 'src/components/Loader/Loader';
import UserInfo from 'src/components/User/Info/Info';
import { useUsersCollection } from 'src/stores/Users/UsersCollection';
import s from './UserProfile.module.scss';
import Tabs from './components/Tabs/Tabs';

function UserProfile() {
  const { id } = useParams();
  const collection = useUsersCollection();
  const user = collection.get(id);
  const isLoading =
    collection.getUser.isLoading ||
    (user && user.ownProducts.fetch.isLoading);

  useTitle(`Profile ${user ? user.fullName : ''}`);
  useEffect(() => {
    if (!user) {
      collection.getUser.run(id).then(() => {
        const fetchedUser = collection.get(id);
        fetchedUser.ownProducts.fetch.run(id);
      });
    } else if (!user.ownProducts.items.length) {
      user.ownProducts.fetch.run(id);
    }
  }, []);

  return (
    <>
      <Loader show={isLoading}>
        <div className={s.container}>
          <UserInfo user={user} />
          <Tabs count={user && user.ownProducts.count} />
          <Products
            items={user && user.ownProducts.items}
            placeholderNum={8}
          />
        </div>
      </Loader>
    </>
  );
}

export default observer(UserProfile);
