import React from 'react';
import { NavLink } from 'react-router-dom';

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
          <NavLink className="nav-link" to="/login">Login</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" to="/register">Sign Up</NavLink>
        </li>
      </ul>
    )
  }
}

export default AuthNav;