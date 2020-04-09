import React from 'react';
import './SearchBar.css';

type SearchBarProps = {
  search: (searchTerm: string) => void;
};

type SearchBarState = {
  search: string;
};

class SearchBar extends React.Component<SearchBarProps, SearchBarState> {
  constructor(props: SearchBarProps) {
    super(props);
    this.state = {
      search: ''
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(evt: React.ChangeEvent<HTMLInputElement>) {
    this.setState({
      [evt.target.name]: evt.target.value
    } as SearchBarState)
  }

  handleSubmit(evt: React.FormEvent<HTMLFormElement>) {
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