import React from 'react';
import { Navigate } from 'react-router-dom';

const Protected = ({ isUser, children }) => {
  if (!isUser) {
    return <Navigate to="/" replace />;
  }
  return children;
};

export default Protected;
