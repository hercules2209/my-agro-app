import React from 'react';
import { Route, Navigate } from 'react-router-dom';
import { getAuth } from 'firebase/auth';

export default function PrivateRoute({ children, ...rest }) {
  const auth = getAuth();
  const currentUser = auth.currentUser;

  return (
    <Route
      {...rest}
      render={({ location }) => {
        return currentUser ? (
          children
        ) : (
          <Navigate to="/login" state={{ from: location }} replace />
        );
      }}
    />
  );
}
