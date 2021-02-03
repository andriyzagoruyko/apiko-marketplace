import React from 'react';
import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';
import Router from '../scenes/routes';

function App() {
  return (
    <div className="app">
      <Header />
      <main className="container">
        <Router />
      </main>
      <Footer />
    </div>
  );
}

export default App;
