import React, { Component } from "react";
import axios from "axios";
import Header from "../Components/Header";

export default class LandingPage extends Component {
  state = {
    articles: []
  };

  componentDidMount() {
    console.log("Mounted");
    const url = "https://s3-us-west-2.amazonaws.com/saatva-hiring/news.json";
    const proxyUrl = "https://cors-anywhere.herokuapp.com/";
    axios({
      method: "get",
      url: proxyUrl + url
    })
      .then(response => {
        console.log(response.data);
        this.setState({
          articles: response.data
        });
      })
      .catch(error => console.log("error", error));
  }
  render() {
    return (
      <div>
        <Header />
        Satva
      </div>
    );
  }
}
