// Dependencies
// =============================================================
var express = require("express");
var path = require("path");
var GoogleSignIn = require('google-sign-in');



// Sets up the Express App
// =============================================================
var app = express();
var PORT = 3000;

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());


// Basic route that sends the user first to the AJAX Page
app.get("/", function(req, res) {
  // res.send("Welcome to the Star Wars Page!")
  
var project = new GoogleSignIn.Project('373047157593-7b0qc22c5v76kir6f4fbmnjbuch3snhf.apps.googleusercontent.com');
 
// Verify a token
 
project.verifyToken('token').then((jsonData) => {
    console.log(JSON.stringify(jsonData)); // Does not execute
}, (error) => {
    console.error(error.message); // Logs 'Invalid Value'
});
  res.sendFile(path.join(__dirname, "index.html"));
});



// Starts the server to begin listening
// =============================================================
app.listen(PORT, function() {
  console.log("App listening on PORT " + PORT);
});
