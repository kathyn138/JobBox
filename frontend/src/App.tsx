import React from 'react';
import './App.css';
import { BrowserRouter } from 'react-router-dom';
import Routes from './Routes';
import JobBoxApi from './JobBoxApi';

type AppState = {
  currentUser: {
    user: {
      jobs: { id?: string }[];
      firstName: string;
    };
  };
  infoLoaded: boolean;
};

class App extends React.PureComponent<{}, AppState> {
  constructor(props: {}) {
    super(props);
    this.state = {
      currentUser: {
        user: {
          jobs: [],
          firstName: '',
        },
      },
      infoLoaded: false,
    };
    this.getCurrentUser = this.getCurrentUser.bind(this);
    this.handleLogout = this.handleLogout.bind(this);
    this.updateUserInfo = this.updateUserInfo.bind(this);
    this.checkAppliedJob = this.checkAppliedJob.bind(this);
    this.applyToJob = this.applyToJob.bind(this);
  }

  async componentDidMount() {
    await this.getCurrentUser();
    let wake = await JobBoxApi.wakeBackend();
    console.log(wake);
  }

  async getCurrentUser() {
    if (localStorage.getItem('token')) {
      let userInfo = await JobBoxApi.checkToken(localStorage.token);
      this.setState({ currentUser: userInfo, infoLoaded: true });
    } else {
      this.setState({
        currentUser: {
          user: {
            jobs: [],
            firstName: '',
          },
        },
        infoLoaded: true,
      });
    }
  }

  handleLogout() {
    localStorage.removeItem('token');
    this.setState({
      currentUser: {
        user: {
          jobs: [],
          firstName: '',
        },
      },
      infoLoaded: true,
    });
  }

  updateUserInfo(user: {}) {
    this.setState({
      currentUser: { user: { ...this.state.currentUser.user, ...user } },
    });
  }

  // check if job is in this.state.currentUser.jobs
  checkAppliedJob(jobId: string) {
    return (
      this.state.currentUser.user.jobs.filter((job) => job.id === jobId)
        .length === 1
    );
  }

  async applyToJob(job: { id: string }) {
    await JobBoxApi.applyToJob(job.id, '');
    this.setState({
      currentUser: {
        user: {
          ...this.state.currentUser.user,
          jobs: [...this.state.currentUser.user.jobs, job],
        },
      },
    });
  }

  render() {
    if (!this.state.infoLoaded) {
      return (
        <div className="loading-msg d-flex justify-content-center align-items-center h-100">
          <div className="spinner-border text-primary" role="status">
            <span className="sr-only">Loading...</span>
          </div>
        </div>
      );
    }

    // if user is not logged in, show landing page background
    // if logged in, don't show background

    let background =
      Object.keys(this.state.currentUser.user).length > 2
        ? ''
        : 'https://cdn.discordapp.com/attachments/709285942430531650/750164905486712862/landing-background.png';

    return (
      <div className="app" style={{ backgroundImage: `url(${background})` }}>
        <BrowserRouter>
          <Routes
            user={this.state.currentUser}
            checkApplied={this.checkAppliedJob}
            applyToJob={this.applyToJob}
            updateUser={this.updateUserInfo}
            getCurrentUser={this.getCurrentUser}
            handleLogout={this.handleLogout}
          />
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
