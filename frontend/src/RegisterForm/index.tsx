import React from 'react';
import { RouteComponentProps } from 'react-router-dom';
import JobBoxApi from '../JobBoxApi';
import AuthNav from '../AuthNav';
import './RegisterForm.css';

interface RegisterFormProps extends RouteComponentProps<any> {
  getCurrentUser: () => void;
};

type RegisterFormState = {
  username: string; 
  password: string; 
  firstName: string; 
  lastName: string; 
  email: string;
};

class RegisterForm extends React.Component<RegisterFormProps, RegisterFormState> {
  constructor(props: RegisterFormProps) {
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

  handleChange(evt: React.ChangeEvent<HTMLInputElement>) {
    this.setState({
      [evt.target.name]: evt.target.value
    } as RegisterFormState);
  }

  async handleSubmit(evt: React.FormEvent<HTMLFormElement>) {
    evt.preventDefault();
    let token = await JobBoxApi.register(this.state.username, this.state.password,
      this.state.firstName, this.state.lastName, this.state.email);
    localStorage.setItem("token", token.token);
    await this.props.getCurrentUser();
    this.props.history.push('/');
  }

  render() {
    return (
      <div className="row justify-content-center align-items-center register-row">
        <div className="col-6">
          <AuthNav signUpActive={true} />
          <form className="register-form" onSubmit={this.handleSubmit}>
            <div className="form-group">
              <label htmlFor="username">Username</label>
              <input type="text" className="form-control" id="username"
                aria-describedby="username" placeholder="Username" name="username"
                value={this.state.username} onChange={this.handleChange} />
            </div>
            <div className="form-group">
              <label htmlFor="password">Password</label>
              <input type="password" className="form-control" id="password"
                placeholder="Password" name="password" value={this.state.password}
                onChange={this.handleChange} />
            </div>
            <div className="form-group">
              <label htmlFor="firstName">First Name</label>
              <input type="text" className="form-control" id="firstName"
                aria-describedby="first name" placeholder="First Name" name="firstName"
                value={this.state.firstName} onChange={this.handleChange} />
            </div>
            <div className="form-group">
              <label htmlFor="lastName">Last Name</label>
              <input type="text" className="form-control" id="lastName"
                aria-describedby="last name" placeholder="Last Name" name="lastName"
                value={this.state.lastName} onChange={this.handleChange} />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input type="text" className="form-control" id="email"
                aria-describedby="email" placeholder="Email" name="email"
                value={this.state.email} onChange={this.handleChange} />
            </div>
            <button type="submit" className="btn register">Submit</button>
          </form>
        </div>
      </div>
    );
  }
}

export default RegisterForm;