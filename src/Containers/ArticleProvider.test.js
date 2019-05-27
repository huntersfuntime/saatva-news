import React from "react";
import { shallow } from "enzyme";
import ArticleProvider from "./ArticleProvider";
import axios from "axios";

jest.mock("axios");

describe("<ArticleProvider/>", () => {
  describe("when rendered", () => {
    it("should fetch a list of articles", () => {
      const getSpy = jest.spyOn(axios, "get");
      const articlesInstance = shallow(<ArticleProvider />);
      expect(getSpy).toBeCalled();
    });
  });
});
