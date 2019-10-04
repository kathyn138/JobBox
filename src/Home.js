import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css';

class Home extends React.PureComponent {

  render() {
    let loggedInMessage = localStorage.getItem('token')
      ? <h3>Welcome Back!</h3>
      : <Link className="btn btn-primary" id="home-msg-button" to="/login">Login</Link>;

    return (
      <div className="container my-4 text-center justify-content-center" id="home-message">
        <h2>JobBox</h2>
        <p>All the jobs in one, convenient place.</p>
        {loggedInMessage}
      </div>
    );
  }
}

export default Home;