import axios from "axios";

export default axios.create({
  baseURL: "https://api.unsplash.com",
  headers: {
    Authorization:
      "Client-ID e21f336b8b140fb26c7125f80d7db79c0bf91e48c4e81d703db6275bfdcb3780"
  }
});
