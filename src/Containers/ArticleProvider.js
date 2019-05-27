import React, { Component } from "react";
import axios from "axios";
import ArticleContext from "../Components/ArticleContext";
import Sidebar from "../Components/Sidebar";
import Header from "../Components/Header";
import ArticleDetail from "../Components/ArticleDetail";

class ArticleProvider extends Component {
  state = {
    articles: [],
    selectedArticle: {}
  };

  componentDidMount() {
    const url = "https://s3-us-west-2.amazonaws.com/saatva-hiring/news.json";
    const proxyUrl = "https://cors-anywhere.herokuapp.com/";
    return axios
      .get(`${proxyUrl}${url}`)
      .then(response => {
        console.log(response.data);
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
    const articleList = this.state.articles.map(article => {
      return (
        <Sidebar
          key={article.index}
          articleList={{ article }}
          onClick={this.articleClick}
          hoverStyle={{
            backgroundImage: `url("${article.urlToImage}")`,
            opacity: "1"
          }}
          activeStyle={{
            background: `linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url("${
              article.urlToImage
            }")`,
            backgroundPosition: "center center",
            color: "white"
          }}
        />
      );
    });
    return (
      <div className="grid">
        <ArticleContext.Provider
          value={{
            article: this.state.selectedArticle,
            articleClick: this.articleClick
          }}
        >
          <Header />
          <div className="article-records">{articleList}</div>
          <ArticleDetail />
          {this.props.children}
        </ArticleContext.Provider>
      </div>
    );
  }
}

export default ArticleProvider;
