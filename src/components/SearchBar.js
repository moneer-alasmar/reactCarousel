import React, { Component } from "react";

class SearchBar extends Component {
  state = {
    term: ""
  };

  onChange = e => {
    this.setState({ term: e.target.value });
  };

  onFormSubmit = e => {
    e.preventDefault();

    this.props.onSubmit(this.state.term);
  };

  render() {
    return (
      <div>
        <form onSubmit={this.onFormSubmit}>
          <label className="mr-2">
            <i className="fas fa-search" />
          </label>
          <input
            type="text"
            placeholder="Enter search..."
            value={this.state.term}
            onChange={this.onChange}
          />
        </form>
      </div>
    );
  }
}

export default SearchBar;
