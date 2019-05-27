import React, { Component } from "react";
import axios from "axios";
import ArticleContext from "../Components/ArticleContext";

class ArticleProvider extends Component {
  state = {
    name: "Scott",
    email: "scott@gmail.com",
    articles: [],
    selectedArticle: {}
  };

  componentDidMount() {
    const url = "https://s3-us-west-2.amazonaws.com/saatva-hiring/news.json";
    const proxyUrl = "https://cors-anywhere.herokuapp.com/";
    axios({
      method: "get",
      url: proxyUrl + url
    })
      .then(response => {
        this.setState({
          articles: response.data.articles,
          selectedArticle: response.data.articles[0]
        });
      })
      .catch(error => console.log("error", error));
  }

  articleClick = article => {
    this.setState({
      selectedArticle: article
    });
  };

  render() {
    return (
      <ArticleContext.Provider
        value={{
          articles: this.state.articles,
          article: this.state.selectedArticle,
          articleClick: this.articleClick
        }}
      >
        {this.props.children}
      </ArticleContext.Provider>
    );
  }
}

export default ArticleProvider;
