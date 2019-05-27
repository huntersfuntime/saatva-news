import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import SocialIcons from "./SocialIcons";

const ArticleDetail = props => {
  const { title, urlToImage, long_description } = props.article;
  return (
    <div className="article-detail">
      <h2 className="title">{title}</h2>
      <img src={urlToImage} alt={`Image of ${title}`} />
      <SocialIcons />
      {/* Generally wouldn't use dangerouslySetInnerHTML but since this is a code challenge and its not coming from a user.  */}
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
