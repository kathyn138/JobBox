import React from 'react';
import ProfileForm from './ProfileForm';

class Profile extends React.PureComponent {
  render() {
    return (
      <div>
        <h1 className="text-center">Profile</h1>
        <ProfileForm user={this.props.user} history={this.props.history}
          updateUser={this.props.updateUser} getCurrentUser={this.props.getCurrentUser}/>
      </div>
    );
  }
}

export default Profile;