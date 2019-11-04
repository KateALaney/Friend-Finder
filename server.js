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
    res.sendFile(path.join(__dirname, "home.html"));
});
  
app.get("/survey", function (req, res) {
    res.sendFile(path.join(__dirname, "survey.html"));
});

  app.get("/api/reserve", function (req, res) {
    return res.json(reservations);
});

app.get("/api/tables", function(req, res) {
    return res.json(reservations);
  });


// Starts the server to begin listening
// =============================================================
app.listen(PORT, function () {
    console.log("App listening on PORT " + PORT);
});

app.post("/api/reserve", function(req, res) {
    // req.body hosts is equal to the JSON post sent from the user
    // This works because of our body parsing middleware
    var newReservations = req.body;
    console.log(newReservations);
    reservations.push(newReservations);
    res.json(newReservations);
  });