import React from 'react';
import { Navigate } from 'react-router-dom';

// Mock authentication function
const isAuthenticated = () => {
  // Replace this with real authentication logic
  return localStorage.getItem('user') !== null;
};

const ProtectedRoute = ({ element }) => {
  return isAuthenticated() ? element : <Navigate to="/" />;
};

export default ProtectedRoute;
