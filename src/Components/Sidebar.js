import React, { Component } from "react";

import ArticleContext from "./ArticleContext";

export default class Sidebar extends Component {
  state = {
    hover: false
  };

  toggleHover = () => {
    this.setState(prevState => {
      return { hover: !prevState.hover };
    });
  };

  render() {
    return (
      <ArticleContext.Consumer>
        {context => (
          <div
            onMouseOver={this.toggleHover}
            onMouseLeave={this.toggleHover}
            key={this.props.key}
            className="article"
            onClick={() => context.articleClick(this.props.articleList.article)}
            style={
              this.state.hover
                ? this.props.hoverStyle
                : context.article.title === this.props.articleList.article.title
                ? this.props.activeStyle
                : null
            }
          >
            {this.props.articleList.article.title}
          </div>
        )}
      </ArticleContext.Consumer>
    );
  }
}
