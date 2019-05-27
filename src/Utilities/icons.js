import { library } from "@fortawesome/fontawesome-svg-core";

import {
  faFacebookSquare,
  faTwitter,
  faStackOverflow
} from "@fortawesome/free-brands-svg-icons";
import { faSpinner, faEnvelope } from "@fortawesome/free-solid-svg-icons";

const Icons = () => {
  return library.add(
    faSpinner,
    faEnvelope,
    faFacebookSquare,
    faTwitter,
    faStackOverflow
  );
};

export default Icons;
