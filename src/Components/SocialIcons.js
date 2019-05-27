import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const SocialIcons = () => {
  return (
    <div className="social-icons">
      <FontAwesomeIcon className="envelope" icon="envelope" />
      <FontAwesomeIcon className="twitter-icon" icon={["fab", "twitter"]} />
      <FontAwesomeIcon
        className="facebook-icon"
        icon={["fab", "facebook-square"]}
      />
      <FontAwesomeIcon
        className="stack-overflow-icon"
        icon={["fab", "stack-overflow"]}
      />
    </div>
  );
};

export default SocialIcons;
