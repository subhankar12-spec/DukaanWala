import React from 'react';
import { Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

export default function ProtectedRoute({ children }) {
  const {
    error,
    loading,
    isAuthenticated,
    isOloading,
    isOAuthenticated,
    user,
  } = useSelector((state) => state.user);
  return isAuthenticated || isOAuthenticated ? (
    children
  ) : (
    <Navigate to="/login" />
  );
}
