import React, { Component } from "react";
import axios from "axios";
import Header from "../Components/Header";
import Article from "../Components/Article";

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
        console.log(response.data.articles);
        this.setState({
          articles: response.data.articles
        });
      })
      .catch(error => console.log("error", error));
  }
  render() {
    const articleRecords = this.state.articles.map(article => {
      return (
        <Article
          title={article.title}
          url={article.url}
          image={article.UrlToImage}
        />
      );
    });
    return (
      <div>
        <Header />
        {articleRecords}
      </div>
    );
  }
}
