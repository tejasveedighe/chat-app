import React from 'react';
import { Route, Redirect } from 'react-router-dom';

function PublicRoute({ children, ...routerProps }) {
  const profile = false;

  if (profile) {
    return <Redirect to="/home" />;
  }

  return <Route {...routerProps}>{children}</Route>;
}

export default PublicRoute;
