import React from 'react';
import { Route, Switch, Redirect } from "react-router-dom";
import Home from './Home';
import CompanyList from './CompanyList';
import CompanyDetails from './CompanyDetails';
import JobList from './JobList';
import LoginContainer from './LoginContainer';
import Profile from './Profile';
import NavBar from './NavBar';
import RegisterForm from './RegisterForm';
import PrivateRoute from './PrivateRoute';


class Routes extends React.PureComponent {

  render() {
    return (
      <div>
        <Route path="/" render={rtProps => <NavBar {...rtProps} />} />
        <div className="container my-4">
          <Switch>
            <Route exact path="/" render={() => <Home user={this.props.user} />} />
            <Route exact path="/login" render={rtProps => <LoginContainer {...rtProps} />} />
            <Route exact path="/register" render={rtProps => <RegisterForm {...rtProps} />} />
            <PrivateRoute exact path="/companies" component={CompanyList} user={this.props.user}/>
            <PrivateRoute exact path="/companies/:company" component={CompanyDetails} applyToJob={this.props.applyToJob} checkApplied={this.props.checkApplied} user={this.props.user} /> 
            <PrivateRoute exact path="/jobs" component={JobList} applyToJob={this.props.applyToJob} checkApplied={this.props.checkApplied} user={this.props.user} />
            <PrivateRoute exact path="/profile" component={Profile} user={this.props.user} updateUser={this.props.updateUser} />
            <Redirect to="/" />
          </Switch>
        </div>
      </div>
    );
  }
}

export default Routes;