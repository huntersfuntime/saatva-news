import React from "react";

import "./App.scss";
import Icons from "./Utilities/icons";
import ArticleProvider from "./Containers/ArticleProvider";
import LandingPage from "./Containers/LandingPage";
import { BrowserRouter as Router } from "react-router-dom";

function App() {
  Icons();
  return (
    <ArticleProvider>
      <div className="App">
        <Router>
          <LandingPage />
        </Router>
      </div>
    </ArticleProvider>
  );
}

export default App;
