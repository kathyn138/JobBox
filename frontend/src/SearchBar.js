import React from 'react';
import './SearchBar.css';

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
      <form className="form-inline my-4" onSubmit={this.handleSubmit}>
        <input className="form-control col-10" id="search-input" type="search" placeholder="Search"
          aria-label="Search" name="search" value={this.state.search}
          onChange={this.handleChange} />
        <button className="btn submit my-2 my-sm-0 col-2" type="submit">Search</button>
      </form>
    );
  }
}

export default SearchBar;