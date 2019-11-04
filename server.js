// Dependencies
// =============================================================
var express = require("express");
var path = require("path");

// Sets up the Express App
// =============================================================
var app = express();
var PORT = process.env.PORT || 3000;

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({
    extended: true
}));
app.use(express.json());

// Routes
// =============================================================

// Basic route that sends the user first to the AJAX Page

app.get("/", function (req, res) {
    res.sendFile(path.join(__dirname, "./public/home.html"));
});
  
app.get("/survey", function (req, res) {
    res.sendFile(path.join(__dirname, "./public/survey.html"));
});

  app.get("/api/home", function (req, res) {
    return res.json(friendArray);
});

app.get("/api/survey", function(req, res) {
    return res.json(friendArray);
  });


// Starts the server to begin listening
// =============================================================
app.listen(PORT, function () {
    console.log("App listening on PORT " + PORT);
});

app.post("/api/survey", function(req, res) {
    // req.body hosts is equal to the JSON post sent from the user
    // This works because of our body parsing middleware
    var newfriendArray = req.body;
    console.log(newfriendArray);
    reservations.push(newfriendArray);
    res.json(newfriendArray);
  });