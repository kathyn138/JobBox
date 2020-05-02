import React from 'react';
import JobBoxApi from '../JobBoxApi';
import './ProfileForm.css';
import { History } from 'history';

type ProfileFormProps = {
  user: {
    user: {
      username: string;
      firstName: string;
      lastName: string;
      email: string;
      photoUrl: string;
    };
  };
  updateUser: (user: {}) => void;
  getCurrentUser: () => void;
  history: History
};

type ProfileFormState = {
  username: string;
  firstName: string;
  lastName: string;
  email: string;
  photoURL: string;
  password: string;
};

class ProfileForm extends React.Component<ProfileFormProps, ProfileFormState> {
  constructor(props: ProfileFormProps) {
    super(props);
    this.state = {
      username: this.props.user.user.username,
      firstName: this.props.user.user.firstName,
      lastName: this.props.user.user.lastName,
      email: this.props.user.user.email,
      photoURL: this.props.user.user.photoUrl,
      password: ''
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(evt: React.ChangeEvent<HTMLInputElement>) {
    this.setState({
      [evt.target.name]: evt.target.value
    } as ProfileFormState);
  }

  async handleSubmit(evt: React.FormEvent<HTMLFormElement>) {
    evt.preventDefault();
    let updatedInfo = await JobBoxApi.editUser(this.props.user.user.username,
      this.state.password, this.state.firstName, this.state.lastName,
      this.state.photoURL, this.state.email);
    this.props.updateUser(updatedInfo);
    await this.props.getCurrentUser();
    this.props.history.push('/');
  }

  render() {
    return (
      <div className="row justify-content-center align-items-center">
        <div className="col-6">
          <form className="profile-form" onSubmit={this.handleSubmit}>
            <div className="form-group">
              <label htmlFor="username">Username</label>
              <input type="text" className="form-control" id="username"
                placeholder="Username" name="username" value={this.state.username}
                disabled />
            </div>
            <div className="form-group">
              <label htmlFor="password">First Name</label>
              <input type="text" className="form-control" id="firstName"
                placeholder="First Name" name="firstName" value={this.state.firstName}
                onChange={this.handleChange} />
            </div>
            <div className="form-group">
              <label htmlFor="lastName">last Name</label>
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
            <div className="form-group">
              <label htmlFor="username">Photo URL</label>
              <input type="text" className="form-control" id="photoURL"
                aria-describedby="photoURL" placeholder="Photo URL" name="photoURL"
                value={this.state.photoURL} onChange={this.handleChange} />
            </div>
            <div className="form-group">
              <label htmlFor="username">New Password</label>
              <input type="password" className="form-control" id="password"
                aria-describedby="password" placeholder="Password" name="password"
                value={this.state.password} onChange={this.handleChange} />
            </div>
            <button type="submit" className="btn profile btn-block">Save Changes</button>
          </form>
        </div>
      </div>
    );
  }
}

export default ProfileForm;