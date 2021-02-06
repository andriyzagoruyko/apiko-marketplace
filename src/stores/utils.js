import {
  applySnapshot,
  onSnapshot,
  types,
  getParent,
  getRoot,
} from 'mobx-state-tree';

export function asyncModel(thunk, auto = true) {
  const model = types
    .model('AsyncModel', {
      isLoading: false,
      isError: false,
      errorCode: types.maybeNull(types.number),
    })
    .actions((store) => ({
      start() {
        store.isLoading = true;
        store.isError = false;
        store.errorCode = null;
      },
      success() {
        store.isLoading = false;
      },
      error(err) {
        store.isLoading = false;
        store.isError = true;

        if (err.response) {
          store.errorCode = err.response.status;
        }

        throw err;
      },
      run(...args) {
        const promise = thunk(...args)(
          store,
          getParent(store),
          getRoot(store),
        );

        if (auto) {
          return store._auto(promise);
        }

        return promise;
      },
      async _auto(promise) {
        try {
          store.start();
          await promise;
          store.success();
        } catch (err) {
          store.error(err);
        }
      },
    }));

  return types.optional(model, {});
}

export function createPersist(store) {
  onSnapshot(store, (snapshot) => {
    window.localStorage.setItem(
      '__persist',
      JSON.stringify({
        auth: {
          isLoggedIn: snapshot.auth.isLoggedIn,
        },
        viewer: {
          user: snapshot.viewer.user,
        },
      }),
    );
  });

  function rehydrate() {
    const snapshot = window.localStorage.getItem('__persist');

    if (snapshot) {
      applySnapshot(store, JSON.parse(snapshot));
    }
  }

  return { rehydrate };
}
