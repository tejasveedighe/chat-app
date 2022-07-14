import React from 'react';
import { Route, Redirect } from 'react-router-dom';

function PrivateRoute({ children, ...routerProps }) {
  const profile = false;

  if (!profile) {
    return <Redirect to="/signin" />;
  }

  return <Route {...routerProps}>{children}</Route>;
}

export default PrivateRoute;
