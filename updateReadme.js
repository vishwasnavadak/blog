const { items: posts } = require("./_site/feed.json");
const insertLine = require("insert-line");

insertLine("./README.md")
  .content(
    `#### ${posts[0].date_published.substring(0, 10)} - [${
      posts[0].title
    }](https://vishwas.tech/${posts[0].id.substring(
      20,
      posts[0].id.length
    )}?utm_source=GitHub&utm_medium=GitHubRepo&utm_campaign=GitHubTraffic) \r\n`
  )
  .at(3)
  .then(err => {
    if (err) {
      return console.log(err);
    }
    console.log("README.md updated with new post!");
  });
