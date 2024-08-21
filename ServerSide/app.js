// app.js
const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const port = 3000;

// Set EJS as the view engine
app.set("view engine", "ejs");

// Middleware to parse form data
app.use(bodyParser.urlencoded({ extended: true }));

// Sample data
let books = [
  { title: "The Great Gatsby", author: "F. Scott Fitzgerald" },
  { title: "To Kill a Mockingbird", author: "Harper Lee" },
  { title: "1984", author: "George Orwell" },
];

// Route for the home page
app.get("/", (req, res) => {
  res.render("index", { books: books });
});

// Route to handle form submission
app.post("/add-book", (req, res) => {
  const { title, author } = req.body;
  if (title && author) {
    books.push({ title, author });
  }
  res.redirect("/");
});

// Start the server
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
