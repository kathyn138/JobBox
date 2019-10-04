import React from 'react';
import { NavLink } from 'react-router-dom';
import './AuthNav.css';

class AuthNav extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    }
  }

  render() {
    return (
      <ul className="nav nav-pills justify-content-end">
        <li className="nav-item">
          <NavLink className="nav-link" id="login" to="/login">Login</NavLink>
        </li>
        <li className="nav-item" id="sign-up" >
          <NavLink className="nav-link" id="sign-up" to="/register">Sign Up</NavLink>
        </li>
      </ul>
    )
  }
}

export default AuthNav;