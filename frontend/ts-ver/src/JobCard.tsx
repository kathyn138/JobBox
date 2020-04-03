import React from 'react';
import './JobCard.css';

type JobCardProps = {
  job: {
    title: string,
    salary: number,
    equity: number,
    id: number
  };
  applyToJob: (job: object) => void;
  // ?? boolean instead of void bc void can't be 'tested for truthiness'
  checkApplied: (jobid: number) => boolean;
}

class JobCard extends React.Component<JobCardProps> {
  constructor(props: JobCardProps) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  // removed evt from here bc it's unused
  handleClick() {
    this.props.applyToJob(this.props.job)
  }

  render() {
    let { title, salary, equity } = this.props.job
    return (
      <div className="card mb-3">
        <div className="row no-gutters">
          <div className="col-md-12">
            <div className="card-body">
              <h5 className="card-title">{title}</h5>
              <p className="card-text">Salary: {salary}</p>
              <p className="card-text">Equity: {equity}</p>
              {this.props.checkApplied(this.props.job.id) ?
                <button className="btn applied selected"
                  onClick={this.handleClick}>Applied</button>
                : <button className="btn apply selected"
                  onClick={this.handleClick}>Apply</button>}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default JobCard;