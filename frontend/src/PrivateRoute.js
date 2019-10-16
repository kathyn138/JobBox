import { Redirect, Route } from 'react-router-dom';
import React from 'react';

const PrivateRoute = ({ component: Component, ...rest }) => (
  <Route {...rest} render={(rtProps) => (
    rest.user
      ? <Component {...rtProps} {...rest}/>
      : <Redirect to="/login" />
  )} />
)

// PrivateRoute checks whether or not a user is logged in 
// and returns either a Component or a Redirect. 
// I'm proud of this as this replaces 4 if else statements
// in Routes.js and the implementation was technically
// challenging. The use of PrivateRoute also improves
// code readability and separation of concerns. 


export default PrivateRoute;