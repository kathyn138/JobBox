import React from 'react';
import ProfileForm from './ProfileForm';

class Profile extends React.PureComponent {
  render() {
    return (
      <div>
        <h1>Profile</h1>
        <ProfileForm user={this.props.user} history={this.props.history} updateUser={this.props.updateUser}/>
      </div>
    );
  }
}

export default Profile;