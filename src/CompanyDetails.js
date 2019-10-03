import React from 'react';
import JoblyApi from './JoblyApi';
import JobCard from './JobCard';

class CompanyDetails extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      company: '',
      jobs: null
    };
  }

  async componentDidMount() {
    let result = await JoblyApi.getCompany(this.props.match.params.company);
    this.setState({company: result})
  }

  render() {
    let jobs = this.state.company.jobs ? 
      this.state.company.jobs.map(job => <JobCard applyToJob={this.props.applyToJob} checkApplied={this.props.checkApplied} job={job} key={job.id} />) : 
      "Loading...";
    return (
      <div>
        <h1>{this.state.company.name}</h1>
        <p>{this.state.company.description}</p>
        {jobs}
      </div>
    );
  }
}

export default CompanyDetails;