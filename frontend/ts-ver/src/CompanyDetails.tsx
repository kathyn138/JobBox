import React from 'react';
import JobBoxApi from './JobBoxApi';
import JobCard from './JobCard';

type CompanyDetailsProps = {
  checkApplied: (jobid: number) => boolean;
  applyToJob: (job: object) => void;
};

type CompanyDetailsState = {
  company: {
    jobs: [{
      id: number
    }];
    name: string,
    description: string
  };
  jobs: [] | null;
};


class CompanyDetails extends React.Component<CompanyDetailsProps, CompanyDetailsState> {
  constructor(props: CompanyDetailsProps) {
    super(props);
    this.state = {
      company: '',
      jobs: null
    };
  }

  async componentDidMount() {
    let result = await JobBoxApi.getCompany(this.props.match.params.company);
    this.setState({ company: result })
  }

  render() {
    let jobs = this.state.company.jobs ?
      this.state.company.jobs.map(job => <JobCard applyToJob={this.props.applyToJob}
        checkApplied={this.props.checkApplied} job={job} key={job.id} />) :
      "Loading...";
    return (
      <div className="row justify-content-center align-items-center">
        <div className="col-8">
          <h1 className="text-center">{this.state.company.name}</h1>
          <p>{this.state.company.description}</p>
          {jobs}
        </div>
      </div>
    );
  }
}

export default CompanyDetails;