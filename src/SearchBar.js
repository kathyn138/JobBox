import React from 'react';

class SearchBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      search: ''
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(evt) {
    this.setState({
      [evt.target.name]: evt.target.value
    })
  }

  handleSubmit(evt) {
    evt.preventDefault();
    this.props.search(this.state.search);
  }

  render() {
    return (
      <form className="form-inline my-4">
        <input className="form-control col-10" type="search" placeholder="Search" aria-label="Search" name="search" value={this.state.search} onChange={this.handleChange} onSubmit={this.handleSubmit}/>
        <button className="btn btn-primary my-2 my-sm-0 col-2" type="submit">Search</button>
      </form>
    );
  }
}

export default SearchBar;