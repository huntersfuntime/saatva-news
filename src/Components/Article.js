import React, { Component } from "react";
import PropTypes from "prop-types";

export default class Article extends Component {
  state = {
    hover: false
  };

  toggleHover = () => {
    this.setState(prevState => {
      return { hover: !prevState.hover };
    });
  };

  render() {
    let articleStyle = {
      backgroundImage: "url(" + `${this.props.image}` + ")",
      backgroundRepeat: "no-repeat",
      backgroundSize: "cover"
    };

    return (
      <div
        onMouseOver={this.toggleHover}
        onMouseLeave={this.toggleHover}
        className="article"
        style={this.state.hover ? articleStyle : null}
      >
        <p>Title: {this.props.title}</p>
      </div>
    );
  }
}

Article.propTypes = {
  title: PropTypes.string,
  url: PropTypes.string,
  UrlToImage: PropTypes.string
};

Article.defaultProps = {
  title: "No title available",
  url: "No URL available",
  UrlToImage: "No image available"
};
