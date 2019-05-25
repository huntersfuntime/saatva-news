import React from "react";
import PropTypes from "prop-types";

const Article = props => {
  return (
    <div>
      <p>Title: {props.title}</p>
      <p>Url:{props.url} </p>
      <p>UrlToImage: {props.UrlToImage}</p>
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
