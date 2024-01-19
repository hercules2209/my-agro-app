import React from 'react';
import { Route, Navigate } from 'react-router-dom';
import {auth} from '../firebase';

export default function PrivateRoute({ children, ...rest }) {
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
