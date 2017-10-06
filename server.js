// Dependencies
// =============================================================
var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");

// Sets up the Express App
// =============================================================
var app = express();
var PORT = 3333;

// Sets up the Express app to handle data parsing
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: "application/vnd.api+json" }));
app.use("/assets", express.static(path.join(__dirname + '/assets')));



// =============================================================
var qoutes = [{
  author: "Jim James",
  tags: "Deep",
  body: "'but I know there's someone that loves up above and want to fix you a dream. He wants to sit down and think. He wants to pour you a drink. And you wont feel a thing...you wont feel a thing.'",
}, {
  author: "James Woods",
  tags: "Technology",
  body: "'If someone is not tech savvy, I have no time for them. I've always been a big believer in looking forward. James Woods Time, Looking Forward'",
}, {
  author: "Richard Stallman",
  tags: "Deep Technology",
  body: "'The idea of copyright did not exist in ancient times, when authors frequently copied other authors at length in works of non-fiction. This practice was useful, and is the only way many authors' works have survived even in part.'"
}];

// Routes
// =============================================================

// Basic route that sends the user first to the AJAX Page
app.get("/", function(req, res) {
  res.sendFile(path.join(__dirname, "index.html"));
});

app.get("/add", function(req, res) {
  res.sendFile(path.join(__dirname, "index.html"));
});

// Search for Specific Character (or all characters) - provides JSON
app.get("/api/:qoutes?", function(req, res) {
  var chosen = req.params.qoutes;

  if (chosen) {
    console.log(chosen);

    for (var i = 0; i < qoutes.length; i++) {
      if (chosen === qoutes[i].routeName) {
       return res.json(qoutes[i]);
      }
    }
    return res.json(false);
  }
  return res.json(qoutes);
});

// Create New Characters - takes in JSON input
app.post("/api/new", function(req, res) {
  var newcharacter = req.body;
  newQoute.routeName = newQoute.author.replace(/\s+/g, "").toLowerCase();

  console.log(newQoute);

  characters.push(newQoute);

  res.json(newqoute);
});

// Starts the server to begin listening
// =============================================================
app.listen(PORT, function() {
  console.log("App listening on PORT " + PORT);
});
