// src/components/PrivateRoute.js
import React from 'react';
import { Navigate } from 'react-router-dom';
import { useAuth } from '../AuthContext';

const PrivateRoute = ({ component: Component, ...rest }) => {
  const { isAuthenticated } = useAuth();

  return (
    isAuthenticated ? <Component {...rest} /> : <Navigate to="/about" />
  );
};

export default PrivateRoute;
