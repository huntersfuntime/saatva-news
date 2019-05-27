module.exports = {
  get: () => {
    return Promise.resolve({
      articles: [
        {
          author: "George RR Martin",
          description: "Some description",
          long_description: "Longer description",
          publishedAt: "2017",
          title: "Tales of Wind and Fire",
          url: "someUrl",
          urlToImage: "www.someurl.com"
        },
        {
          author: "George RR Martin",
          description: "Some description",
          long_description: "Longer description",
          publishedAt: "2017",
          title: "Tales of Wind and Fire",
          url: "someUrl",
          urlToImage: "www.someurl.com"
        }
      ]
    });
  }
};
