import React from 'react';
import './App.css';
import { BrowserRouter } from "react-router-dom";
import Routes from './Routes';
import JobBoxApi from './JobBoxApi';
import backgroundPic from './assets/landing-background.png';

type AppState = {
  currentUser: {
    user?: {}
  }; 
  infoLoaded: boolean;
}

class App extends React.PureComponent<{}, AppState> {
  constructor(props: {}) {
    super(props);
    this.state = {
      // originally a string
      // make sure it still works with {}
      currentUser: {},
      infoLoaded: false
    }
    this.getCurrentUser = this.getCurrentUser.bind(this);
    this.handleLogout = this.handleLogout.bind(this);
    this.updateUserInfo = this.updateUserInfo.bind(this);
    this.checkAppliedJob = this.checkAppliedJob.bind(this);
    this.applyToJob = this.applyToJob.bind(this);
  }

  async componentDidMount() {
    await this.getCurrentUser();
  }

  async getCurrentUser() {
    if (localStorage.getItem('token')) {
      let userInfo = await JobBoxApi.checkToken(localStorage.token)
      this.setState({ currentUser: userInfo, infoLoaded: true });
    } else {
      this.setState({ currentUser: {}, infoLoaded: true })
    }
  }

  handleLogout() {
    localStorage.removeItem('token');
    this.setState({ currentUser: {} });
  }

  updateUserInfo(user: {}) {
    this.setState({ currentUser: { user: { ...this.state.currentUser.user, ...user } } })
  }

  checkAppliedJob(jobId: string) {
    // check if job is in this.state.currentUser.jobs
    if (this.state.currentUser.user.jobs.filter(job => job.id === jobId).length === 1) {
      return true;
    } else {
      return false;
    }
  }

  async applyToJob(job: {id: string}) {
    await JobBoxApi.applyToJob(job.id, '')
    this.setState({
      currentUser:
      {
        user: {
          ...this.state.currentUser.user,
          jobs: [...this.state.currentUser.user.jobs, job]
        }
      }
    })
  }

  render() {
    if (!this.state.infoLoaded) {
      return "Loading..."
    }
    
    let background = this.state.currentUser ? "" : backgroundPic;
    
    return (
      <div className="app" style={{ backgroundImage: `url(${background})` }}>
        <BrowserRouter>
          <Routes user={this.state.currentUser} checkApplied={this.checkAppliedJob}
            applyToJob={this.applyToJob} updateUser={this.updateUserInfo} 
            getCurrentUser={this.getCurrentUser} 
            handleLogout={this.handleLogout} />
        </BrowserRouter>
      </div>
    )

  }
}

export default App;
