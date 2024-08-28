import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';

const AuthGuard: React.FC = () => {
  
//   const { isAuthenticated } = useContext(AuthContext);
    const isAuthenticated = false;

  if (!isAuthenticated) {
    return <Navigate to="/login" />;
  }


  return <Outlet />;
};

export default AuthGuard;
