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
            <h3 className="author-name">By {context.article.author}</h3>
            <img src={context.article.urlToImage} alt="" />
            <SocialIcons />

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
