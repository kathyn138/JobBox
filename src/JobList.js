import React from 'react';
import JobBoxApi from './JobBoxApi';
import SearchBar from './SearchBar';
import JobCard from './JobCard';

class JobList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      jobs: []
    };
    this.searchJobs = this.searchJobs.bind(this);
  }

  async componentDidMount() {
    let result = await JobBoxApi.searchJobs();
    this.setState({ jobs: result });
  }

  async searchJobs(query) {
    let result = await JobBoxApi.searchJobs(query);
    this.setState({ jobs: result });
  }

  render() {
    let jobs = this.state.jobs.map(job => <JobCard applyToJob={this.props.applyToJob} checkApplied={this.props.checkApplied} job={job} key={job.id} />);
    return (
      <div>
        <SearchBar search={this.searchJobs} />
        {jobs}
      </div>
    );
  }
}

export default JobList;