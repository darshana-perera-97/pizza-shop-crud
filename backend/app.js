// Import required modules
const express = require("express");
const bodyParser = require("body-parser");

// Create an instance of Express
const app = express();

// Middleware to parse JSON request bodies
app.use(bodyParser.json());

// Define a route
app.get("/", (req, res) => {
  res.send("Hello, World!");
});

// Start the server
const port = process.env.PORT || 3001;
app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});
