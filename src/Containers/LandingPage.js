import React, { Component } from "react";
import axios from "axios";
import Header from "../Components/Header";
import Article from "../Components/Article";
import ArticleDetail from "../Components/ArticleDetail";

export default class LandingPage extends Component {
  state = {
    articles: [],
    selectedArticle: []
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
        console.log("response here", response.data.articles);
        this.setState({
          articles: response.data.articles,
          selectedArticle: response.data.articles[0]
        });
      })
      .catch(error => console.log("error", error));
  }
  render() {
    const articleRecords = this.state.articles.map(article => {
      return (
        <Article
          key={article.url}
          title={article.title}
          url={article.url}
          image={article.urlToImage}
        />
      );
    });
    return (
      <div className="grid">
        <Header />
        <div className="article-records">{articleRecords}</div>
        <ArticleDetail article={this.state.selectedArticle} />
      </div>
    );
  }
}
