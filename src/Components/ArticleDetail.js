import React, { Component } from "react";

import ArticleContext from "./ArticleContext";
import SocialIcons from "./SocialIcons";

export default class ArticleDetail extends Component {
  render() {
    return (
      <ArticleContext.Consumer>
        {context => (
          <div className="article-detail">
            <h2 className="title">{context.article.title}</h2>
            <img src={context.article.urlToImage} alt="" />
            <SocialIcons />
            <h3>Author: {context.article.author}</h3>
            {/* Generally wouldn't use dangerouslySetInnerHTML but since this is a code challenge and its not coming from a user.  */}
            <p
              dangerouslySetInnerHTML={{
                __html: context.article.long_description
              }}
            />
          </div>
        )}
      </ArticleContext.Consumer>
    );
  }
}
