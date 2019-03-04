import React, { Component } from "react";
import { Spring } from "react-spring/renderprops";

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
      <Spring
        from={{ opacity: 0, marginTop: -500 }}
        to={{ opacity: 1, marginTop: 0 }}
      >
        {props => (
          <div style={props} className="p-1">
            <p className="display-4">
              <i className="fas fa-search" />
              React Image Search
            </p>
            <form onSubmit={this.onFormSubmit}>
              <input
                className="form-control"
                type="text"
                placeholder="Enter search..."
                value={this.state.term}
                onChange={this.onChange}
              />
            </form>
          </div>
        )}
      </Spring>
    );
  }
}

export default SearchBar;
