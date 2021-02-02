import React from 'react';
import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';
import Router from '../scenes/routes';
import s from './App.module.scss';

function App() {
  return (
    <div className={s.app}>
      <Header />
      <main className="container">
        <Router />
      </main>
      <Footer />
    </div>
  );
}

export default App;
