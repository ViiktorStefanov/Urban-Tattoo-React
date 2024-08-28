import React from 'react';
import { Navigate } from 'react-router-dom';

type AdminGuardProps = {
  children: React.ReactNode;
}

const AdminGuard: React.FC<AdminGuardProps> = ({ children }) => {
 
//   const { isAdmin } = useContext(AuthContext);
const isAdmin = false;

  if (!isAdmin) {
    return <Navigate to="/" />;
  }


  return <>{children}</>;
};

export default AdminGuard;
