import React, { useEffect } from 'react';
import { useParams } from 'react-router';
import { observer } from 'mobx-react';
import Products from '../../components/Products/Products';
import useTitle from '../../hooks/useTitle';
import Loader from '../../components/Loader/Loader';
import { useUsersCollection } from '../../stores/Users/UsersCollection';
import s from './UserProfile.module.scss';
import Avatar from '../../components/Avatar/Avatar';
import UserInfo from './components/UserInfo/UserInfo';

function UserProfile() {
  const { id } = useParams();
  const collection = useUsersCollection();
  const user = collection.get(id);

  useTitle(`Profile ${user ? user.fullName : ''}`);
  useEffect(() => {
    if (!user) {
      collection.getUser.run(id).then(() => {
        const fetchedUser = collection.get(id);
        fetchedUser.ownProducts.fetch.run(id);
      });
    } else {
      user.ownProducts.fetch.run(id);
    }
  }, []);

  const isLoading =
    collection.getUser.isLoading ||
    (user && user.ownProducts.fetch.isLoading);

  return (
    <>
      <Loader show={isLoading}>
        <div className={s.container}>
          {user && (
            <div className={s.user}>
              <Avatar {...user} />
              <div className={s.data}>
                <span className={s.name}>{user.fullName}</span>
                <span className={s.location}>{user.location}</span>
              </div>
            </div>
          )}
          <UserInfo count={user && user.ownProducts.count} />
          <Products
            items={user && user.ownProducts.items}
            isLoading={isLoading}
            placeholderNum={8}
          />
        </div>
      </Loader>
    </>
  );
}

export default observer(UserProfile);