import React from "react";

import "./App.scss";
import Icons from "./Utilities/icons";
import ArticleProvider from "./Containers/ArticleProvider";

function App() {
  Icons();
  return (
    <div className="App">
      <ArticleProvider />
    </div>
  );
}

export default App;
