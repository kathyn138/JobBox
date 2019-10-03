import { Redirect, Route } from 'react-router-dom';
import React from 'react';

const PrivateRoute = ({ component: Component, ...rest }) => (
  <Route {...rest} render={(rtProps) => (
    rest.user
      ? <Component {...rtProps} {...rest}/>
      : <Redirect to="/login" />
  )} />
)


export default PrivateRoute;