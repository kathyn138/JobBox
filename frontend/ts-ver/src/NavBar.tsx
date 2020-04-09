import React from 'react';
import { NavLink, RouteComponentProps } from "react-router-dom";
import './NavBar.css';

interface NavBarProps extends RouteComponentProps {
  handleLogout: () => void;
}

class NavBar extends React.PureComponent<NavBarProps> {
  constructor(props: NavBarProps) {
    super(props);
    this.logOut = this.logOut.bind(this);
  }

  async logOut() {
    await this.props.handleLogout();
    this.props.history.push('/');
  }

  render() {
    let loggedIn = localStorage.token ? true : false;
    return (
      <nav className="navbar navbar-expand-lg">
        <NavLink className="navbar-brand" id="jb-nav" to="/">JobBox</NavLink>
        <button className="navbar-toggler" type="button" data-toggle="collapse"
          data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false"
          aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
          {loggedIn ?
            <ul className="navbar-nav">
              <li className="nav-item">
                <NavLink className="nav-link" to="/companies">Companies</NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/jobs">Jobs</NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/profile">Profile</NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/login" 
                  onClick={this.logOut}>Logout</NavLink>
              </li>
            </ul> : <ul className="navbar-nav"><li className="nav-item">
              <NavLink className="nav-link" id="nav-login" to="/login">Login</NavLink></li></ul>}
        </div>
      </nav>
    );
  }
}

export default NavBar;