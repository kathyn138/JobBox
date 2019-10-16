import React from 'react';
import JobBoxApi from './JobBoxApi';
import AuthNav from './AuthNav';
import './LoginContainer.css'

class LoginContainer extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: ''
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(evt) {
    this.setState({
      [evt.target.name]: evt.target.value
    })
  }

  async handleSubmit(evt) {
    evt.preventDefault();
    let token = await JobBoxApi.login(this.state.username, this.state.password);
    localStorage.setItem("token", token.token);
    await this.props.getCurrentUser();
    this.props.history.push('/');
  }

  render() {
    return (
      <div className="row justify-content-center align-items-center login-row">
        <div className="col-6">
          <AuthNav logInActive={true} />
          <form className="login-form" onSubmit={this.handleSubmit}>
            <div className="form-group">
              <label htmlFor="username">Username</label>
              <input type="text" className="form-control"
                id="username"
                aria-describedby="username"
                placeholder="Enter Username"
                name="username"
                value={this.state.username}
                onChange={this.handleChange} />
            </div>
            <div className="form-group">
              <label htmlFor="password">Password</label>
              <input type="password" className="form-control"
                id="password"
                placeholder="Password"
                name="password"
                value={this.state.password}
                onChange={this.handleChange} />
            </div>
            <button type="submit" className="btn log-in">Submit</button>
          </form>
        </div>
      </div>
    );
  }
}

export default LoginContainer;