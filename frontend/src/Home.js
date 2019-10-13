import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css';


class Home extends React.PureComponent {

  render() {
    let loggedIn = localStorage.getItem('token') ? true : false;

    return (
      <div className="row justify-content-center align-items-center home-row">
        <div className="col-6 text-center">
          {loggedIn ?
            <div className="home-logged-in">
              <h3>Welcome Back, {this.props.user.user.first_name}!</h3>
              <span className="logged-in-msg">Let's find you a job</span>
              <Link className="btn btn-primary" id="home-jobs-button" to="/jobs">Job Postings</Link>
              <Link className="btn btn-primary" id="home-companies-button" to="/companies">Companies</Link>
              <img className="logged-in-home-img" src="https://cdn.discordapp.com/attachments/444022018908749837/632800420049190922/logged-in-home.png"></img>
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