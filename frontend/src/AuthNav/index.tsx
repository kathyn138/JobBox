import React from 'react';
import { NavLink } from 'react-router-dom';
import './AuthNav.css';

type AuthNavProps ={
  logInActive?: boolean;
  signUpActive?: boolean;
};

class AuthNav extends React.Component<AuthNavProps> {
  render() {
    let logInActive = this.props.logInActive ? "login-active" : "login";
    let signUpActive = this.props.signUpActive ? "sign-up-active" : "sign-up";
    return (
      <ul className="nav nav-pills justify-content-end">
        <li className="nav-item">
          <NavLink className="nav-link" id={logInActive} to="/login">Login</NavLink>
        </li>
        <li className="nav-item" id="sign-up" >
          <NavLink className="nav-link" id={signUpActive} to="/register">Sign Up</NavLink>
        </li>
      </ul>
    );
  }
}

export default AuthNav;