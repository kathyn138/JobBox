import React from 'react';

class JobCard extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(evt) {
    this.props.applyToJob(this.props.job)
  }

  render() {
    let { title, salary, equity } = this.props.job
    return (
      <div className="card mb-3" style={{ maxWidth: "800px" }}>
        <div className="row no-gutters">
          <div className="col-md-12">
            <div className="card-body">
              <h5 className="card-title">{title}</h5>
              <p className="card-text">Salary: {salary}</p>
              <p className="card-text">Equity: {equity}</p>
              {this.props.checkApplied(this.props.job.id) ? <button className="btn btn-danger selected" onClick={this.handleClick}>Applied</button> : <button className="btn btn-danger selected" onClick={this.handleClick}>Apply</button>}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default JobCard;