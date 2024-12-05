// app.js
const express = require("express");
const app = express();
const port = 3000;

app.use(express.urlencoded({ extended: true }));

// Set EJS as the view engine
app.set("view engine", "ejs");

// Sample data
const books = [
  { title: "The Great Gatsby", author: "F. Scott Fitzgerald" },
  { title: "To Kill a Mockingbird", author: "Harper Lee" },
  { title: "1984", author: "George Orwell" },
];

// Route for the home page
app.get("/", (req, res) => {
  res.render("index", { books: books });
});

app.post("/add", (req, res) => {
  const title = req.body.title;
  const author = req.body.author;

  const newBook = { title: title, author: author };
  books.push(newBook);
  res.redirect("/");
});

// Start the server
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
