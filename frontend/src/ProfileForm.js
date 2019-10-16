import React from 'react';
import JobBoxApi from './JobBoxApi';
import './ProfileForm.css';

class ProfileForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: this.props.user.user.username,
      firstName: this.props.user.user.first_name,
      lastName: this.props.user.user.last_name,
      email: this.props.user.user.email,
      photoURL: this.props.user.user.photo_url,
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
    let updatedInfo = await JobBoxApi.editUser(this.props.user.user.username, this.state.password, this.state.firstName, this.state.lastName, this.state.photoURL, this.state.email);
    this.props.updateUser(updatedInfo);
    await this.props.getCurrentUser();
    this.props.history.push('/')
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
    )
  }
}

export default ProfileForm;