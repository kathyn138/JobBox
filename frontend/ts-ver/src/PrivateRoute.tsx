import { Redirect, Route } from 'react-router-dom';
import React from 'react';

/// can i put any like this ? 
const PrivateRoute = ({ component: Component, ...rest }: any) => (
  <Route {...rest} render={(rtProps) => (
    rest.user
      ? <Component {...rtProps} {...rest} />
      : <Redirect to="/login" />
  )} />
)

export default PrivateRoute;