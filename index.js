const express = require("express");
const app = express();

app.use("logger");

app.get("/book", "logger", (req, res) => {
  res.send({
    books1: "harry porter",
    books: "Think And Grow Rich",
    books: "Rich Dad poor Dad",
  });
});

app.get("authors", (req, res) => {
  res.send({
    author1: "J. K. Rowling",
    author2: "Napoleon Hill",
    author3: "Robert Kiyosaki",
  });
});

app.get("/libraries", (req, res) => {
  res.send({
    libarary1: "Google Libarary",
    libarary2: "Youtube libarary",
    libarary3: "Yahoo libarary",
  });
});

app.listen(800, () => {
  console.log("listening on port 800");
});
