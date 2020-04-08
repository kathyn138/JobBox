import React from 'react';
import ProfileForm from './ProfileForm';
import { RouteComponentProps } from 'react-router-dom';

/// is it ok to say any here for history?
interface ProfileProps extends RouteComponentProps<any> {
  user: {
    user: {
      username: string;
      firstName: string;
      lastName: string;
      email: string;
      photoUrl: string;
    };
  };
  // do i need to set stricter typing here? 
  updateUser: (user: {}) => void;
  getCurrentUser: () => void;
}

class Profile extends React.PureComponent<ProfileProps> {
  render() {
    return (
      <div>
        <h1 className="text-center">Profile</h1>
        <ProfileForm user={this.props.user} history={this.props.history}
          updateUser={this.props.updateUser} getCurrentUser={this.props.getCurrentUser} />
      </div>
    );
  }
}

export default Profile;