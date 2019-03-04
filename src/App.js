import React, { Component } from "react";
import "./App.css";
import SearchBar from "./components/SearchBar";
import unsplash from "./api/unsplash";
import ImageCarousel from "./components/ImageCarousel";
import { Spring } from "react-spring/renderprops";

class App extends Component {
  state = {
    images: [],
    page: 1,
    term: null
  };

  onSearchSubmit = async term => {
    const { page } = this.state;
    const response = await unsplash.get("/search/photos", {
      params: { query: term, per_page: 5, page }
    });
    this.setState({ images: response.data.results, term });
  };

  fetchImages = direction => {
    if (direction === "next") {
      this.setState({ page: this.state.page + 1 });
    } else if (direction === "back" && this.state.page > 1) {
      this.setState({ page: this.state.page - 1 });
    } else if (this.state.page === 1) {
      console.log("On first page");
    }
  };

  renderButtons() {
    if (this.state.images.length === 0) {
      return <div />;
    }
    return (
      <Spring
        from={{ opacity: 0 }}
        to={{ opacity: 1 }}
        config={{ duration: 1000 }}
      >
        {props => (
          <div style={props} className="btn-group p-2">
            <button
              onClick={() => this.fetchImages("back")}
              className={
                this.state.page === 1
                  ? "btn disabled"
                  : "btn btn-secondary btn-lg"
              }
            >
              Back
            </button>

            <button
              onClick={() => this.fetchImages("next")}
              className="btn btn-primary btn-lg"
            >
              Next
            </button>
          </div>
        )}
      </Spring>
    );
  }

  componentDidUpdate = (prevProps, prevState) => {
    if (prevState.page !== this.state.page) {
      this.onSearchSubmit(this.state.term);
    }
  };

  render() {
    return (
      <div className="container text-center mt-2">
        <SearchBar onSubmit={this.onSearchSubmit} />
        {this.renderButtons()}
        <ImageCarousel images={this.state.images} />
      </div>
    );
  }
}

export default App;
