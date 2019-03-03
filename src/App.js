import React, { Component } from "react";
import "./App.css";
import SearchBar from "./components/SearchBar";
import unsplash from "./api/unsplash";

class App extends Component {
  state = {
    images: [],
    page: 1,
    term: ""
  };

  onSearchSubmit = async term => {
    this.setState({ term: term });
    const response = await unsplash.get("/search/photos", {
      params: { query: term, per_page: 5, page: this.state.page }
    });
    this.setState({ images: response.data.results });
  };

  fetchImages = async direction => {
    if (direction === "back") {
      if (this.state.page === 1) {
        return console.log("At first page");
      } else {
        this.setState({ page: this.state.page - 1 });
        const response = await unsplash.get("/search/photos", {
          params: { query: this.state.term, per_page: 5, page: this.state.page }
        });
        this.setState({ images: response.data.results });
      }
    }

    if (direction === "next") {
      this.setState({ page: this.state.page + 1 });
      const response = await unsplash.get("/search/photos", {
        params: { query: this.state.term, per_page: 5, page: this.state.page }
      });
      this.setState({ images: response.data.results });
    }
  };

  render() {
    console.log(this.state);
    return (
      <div className="container text-center mt-4">
        <h4>React Image Search</h4>
        <SearchBar onSubmit={this.onSearchSubmit} />
        <div className="btn-group">
          <button
            onClick={() => this.fetchImages("back")}
            className="btn btn-warning btn-sm"
          >
            Back
          </button>
          <button
            onClick={() => this.fetchImages("next")}
            className="btn btn-primary btn-sm"
          >
            Next
          </button>
        </div>
      </div>
    );
  }
}

export default App;
