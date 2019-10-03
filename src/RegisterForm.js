import React from 'react';
import JoblyApi from './JoblyApi';
import AuthNav from './AuthNav';

class RegisterForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: '',
      firstName: '',
      lastName: '',
      email: ''
    };
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
    let token = await JoblyApi.register(this.state.username, this.state.password, this.state.firstName, this.state.lastName, this.state.email);
    localStorage.setItem("token", token.token);
    this.props.history.push('/')
  }

  render() {
    return (
      <div>
        <AuthNav />
        <form onSubmit={this.handleSubmit}>
          <div className="form-group">
            <label for="username">Username</label>
            <input type="text" className="form-control" id="username" aria-describedby="username" placeholder="Username" name="username" value={this.state.username} onChange={this.handleChange} />
          </div>
          <div className="form-group">
            <label for="password">Password</label>
            <input type="password" className="form-control" id="password" placeholder="Password" name="password" value={this.state.password} onChange={this.handleChange} />
          </div>
          <div className="form-group">
            <label for="firstName">First Name</label>
            <input type="text" className="form-control" id="username" aria-describedby="first name" placeholder="First Name" name="firstName" value={this.state.firstName} onChange={this.handleChange} />
          </div>
          <div className="form-group">
            <label for="username">Last Name</label>
            <input type="text" className="form-control" id="lastName" aria-describedby="last name" placeholder="Last Name" name="lastName" value={this.state.lastName} onChange={this.handleChange} />
          </div>
          <div className="form-group">
            <label for="username">Email</label>
            <input type="text" className="form-control" id="email" aria-describedby="email" placeholder="Email" name="email" value={this.state.email} onChange={this.handleChange} />
          </div>
          <button type="submit" className="btn btn-primary">Submit</button>
        </form>
      </div>
    );
  }
}

export default RegisterForm;