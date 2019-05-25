import React from "react";
import PropTypes from "prop-types";

const Article = props => {
  return (
    <div className="article">
      <p>Title: {props.title}</p>
    </div>
  );
};

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

export default Article;
