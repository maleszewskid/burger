var express = require('express');
var path = require('path');

var PORT = process.env.PORT || 8080;

var app = express();

// Serve static content for the app from the "public" directory in the application directory.
app.use('/public', express.static(path.join(__dirname + '/public')));

// Parse application body
app.use(express.urlencoded({ extended: true}));
app.use(express.json());

// Set Handlebars.
var exphbs = require("express-handlebars");

// Import routes and give the server access
var routes = require("./controllers/burgers_controllers.js");

app.use(routes);

// Start the sever so that it can begin listening to client side requests
app.listen(PORT, function() {

    console.log("Server listening on: http://localhost:" + PORT);

});