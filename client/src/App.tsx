import React from 'react';
import './App.scss';

import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import RoutesWrapper from './routes/RoutesWrapper';

function App() {
  return (
    <>
      <Header />
      <main className='views'>
        <RoutesWrapper />
      </main>
      <Footer />
    </>
  );
}

export default App;
