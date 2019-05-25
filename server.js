// npm packages
var express = require("express");

// Sets up an express app
var app = express();

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Sets an initial port and also takes into consideration that Heroku might assign a port (that's why I used process.env.PORT)
var PORT = process.env.PORT || 8080;

// Routing: points the server to a series of route files.

require("./app/routing/apiRoutes")(app);
require("./app/routing/htmlRoutes")(app);

// Starts the server

app.listen(PORT, function() {
  console.log("App listening on PORT: " + PORT);
});