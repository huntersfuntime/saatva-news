import React from "react";

import "./App.scss";
import Icons from "./Utilities/icons";
import LandingPage from "./Containers/LandingPage";

function App() {
  Icons();
  return (
    <div className="App">
      <LandingPage />
    </div>
  );
}

export default App;
