import React, { useEffect } from 'react';
import './App.scss';
import 'react-toastify/dist/ReactToastify.css';

import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import RoutesWrapper from './routes/RoutesWrapper';
import Loader from './components/Loader/Loader';
import { ToastContainer } from 'react-toastify';

import { useDispatch } from 'react-redux';
import { getLocalStorage } from './services/localStorageService';
import { setIsMobile, setUser } from './store/authSlice';
import { checkIsMobile } from './utils/screenUtil';

function App() {

  const dispatch = useDispatch();
  
  const user = getLocalStorage();

  if(user) {
    dispatch(setUser({user}));
  };

  useEffect(() => {
    const handleResize = () => {
      dispatch(setIsMobile(checkIsMobile()));      
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [dispatch]);

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
