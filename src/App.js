import React, { Component } from "react";
import "./App.css";
import SearchBar from "./components/SearchBar";
import unsplash from "./api/unsplash";
import ImageCarousel from "./components/ImageCarousel";

class App extends Component {
  state = {
    images: [],
    page: 1,
    term: null
  };

  onSearchSubmit = async term => {
    const { page } = this.state;
    const response = await unsplash.get("/search/photos", {
      params: { query: term, per_page: 7, page }
    });
    this.setState({ images: response.data.results, term });
  };

  fetchImages = direction => {
    if (direction === "back" && this.state.page > 1) {
      this.setState({ page: this.state.page - 1 });
    }

    if (direction === "next") {
      this.setState({ page: this.state.page + 1 });
    }
  };

  componentDidUpdate = (prevProps, prevState) => {
    if (prevState.page !== this.state.page) {
      this.onSearchSubmit(this.state.term);
    }
  };

  render() {
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

        <ImageCarousel images={this.state.images} />
      </div>
    );
  }
}

export default App;
