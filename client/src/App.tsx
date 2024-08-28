import React from 'react';
import './App.scss';
import 'react-toastify/dist/ReactToastify.css';

import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import RoutesWrapper from './routes/RoutesWrapper';
import { ToastContainer } from 'react-toastify';
import Loader from './components/Loader/Loader';

function App() {
  return (
    <>
      <Header />
      <Loader />
      <ToastContainer 
        position="top-left"
        autoClose={0}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
      <main className='views'>
        <RoutesWrapper />
      </main>
      <Footer />
    </>
  );
}

export default App;
