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
    const articleList = this.state.articles.map(article => {
      return (
        <Sidebar
          key={article.index}
          articleList={{ article }}
          onClick={this.articleClick}
          hoverStyle={{
            backgroundImage: "url(" + `${article.urlToImage}` + ")",
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            transition: "all 0.4s",
            color: "white"
          }}
          activeStyle={{
            backgroundImage: "url(" + `${article.urlToImage}` + ")",
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            filter: "brightness(50%)",
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
