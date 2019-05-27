import React, { Component } from "react";

import ArticleContext from "./ArticleContext";

export default class Sidebar extends Component {
  render() {
    return (
      <ArticleContext.Consumer>
        {context =>
          context.articles.map(article => {
            return (
              <div className="article">
                <div onClick={() => context.articleClick(article)}>
                  {article.title}{" "}
                </div>
              </div>
            );
          })
        }
      </ArticleContext.Consumer>
    );
  }
}
