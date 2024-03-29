import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css';
import loggedInHome from '../assets/logged-in-home.png';

type HomeProps = {
  user: {
    user: {
      firstName: string; 
    };
  };
};

class Home extends React.PureComponent<HomeProps> {

  render() {
    let loggedIn = localStorage.getItem('token') ? true : false;
    return (
      <div className="row justify-content-center align-items-center home-row">
        <div className="col-6 text-center">
          {loggedIn ?
            <div className="home-logged-in">
              <h3>Welcome back, {this.props.user.user.firstName}!</h3>
              <span className="logged-in-msg">Let's find you a job.</span>
              <Link className="btn btn-primary" id="home-jobs-button" to="/jobs">Jobs</Link>
              <Link className="btn btn-primary" id="home-companies-button" to="/companies">Companies</Link>
              <img className="logged-in-home-img" src={loggedInHome} alt="collaborating on laptop"></img>
            </div>
            : <div className="home-not-logged-in justify-content-center">
              <h2>JobBox</h2>
              <p>All the jobs in one, convenient place.</p>
              <Link className="btn btn-primary" id="home-msg-button" to="/login">Login</Link>
            </div>
          }
        </div>
      </div>
    );
  }
}

export default Home;