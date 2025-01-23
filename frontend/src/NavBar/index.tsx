import React from 'react';
import { NavLink, RouteComponentProps } from 'react-router-dom';
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

    const navItems = [
      { path: 'companies', name: 'Companies' },
      { path: 'jobs', name: 'Jobs' },
      { path: 'profile', name: 'Profile' },
      { path: 'login', name: 'Logout', fn: this.logOut },
    ];

    // has links for: companies, jobs, profile, logout
    const loggedInNav = navItems.map((i) => {
      let fn;

      if (i.path === 'login') {
        fn = i.fn;
      }

      return (
        <li className="nav-item" key={i.path}>
          <NavLink className="nav-link" to={`/${i.path}`} onClick={fn}>
            {i.name}
          </NavLink>
        </li>
      );
    });

    // only has link to log in
    const loggedOutNav = (
      <li className="nav-item">
        <NavLink className="nav-link" id="nav-login" to="/login">
          Login
        </NavLink>
      </li>
    );

    return (
      <nav className="navbar navbar-expand-lg">
        <NavLink className="navbar-brand" id="jb-nav" to="/">
          JobBox
        </NavLink>
        <button
          className="navbar-toggler"
          data-toggle="collapse"
          data-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div
          className="collapse navbar-collapse justify-content-end"
          id="navbarNav"
        >
          <ul className="navbar-nav">
            {loggedIn ? loggedInNav : loggedOutNav}
          </ul>
        </div>
      </nav>
    );
  }
}

export default NavBar;
