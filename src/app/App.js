import React, { useEffect } from 'react';
import { Provider, createStore } from '../stores/createStore';
import Footer from '../components/Footer/Footer';
import Router from '../scenes/routes';

const store = createStore();

function App() {
  useEffect(() => {
    store.bootstrap();
  }, []);

  return (
    <>
      <Provider value={store}>
        <Router />
        <Footer />
      </Provider>
    </>
  );
}

export default App;
