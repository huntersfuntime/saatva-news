import React from "react";
import Article from "./Article";

const ArticleDetail = props => {
  const { title, urlToImage, long_description } = props.article;
  return (
    <div className="article-detail">
      <h2 className="title">{title}</h2>
      <img src={urlToImage} alt={`Image of ${title}`} />
      <p>Email, Facebook, Twitter, StackOverflow icon </p>
      <p dangerouslySetInnerHTML={{ __html: long_description }} />
    </div>
  );
};

ArticleDetail.defaultProps = {
  title: "No title found",
  urlToImage: "No Image found",
  long_description: "No description found"
};

export default ArticleDetail;
