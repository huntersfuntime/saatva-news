import React, { Component, createContext } from "react";
import axios from "axios";
import { Switch, Route } from "react-router-dom";

import Header from "../Components/Header";
import Article from "../Components/Article";
import Sidebar from "../Components/Sidebar";
import ArticleDetail from "../Components/ArticleDetail";

export default class LandingPage extends Component {
  render() {
    return (
      <div className="grid">
        <Header />
        <div className="article-records">
          <Sidebar />
        </div>
        <ArticleDetail />
      </div>
    );
  }
}
