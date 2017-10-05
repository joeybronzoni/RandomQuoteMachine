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
var myQoutes = [{
  url: "",
  author: "",
  role: "",
  tags: 900,
  body: 2000
}, {
  url: "",
  author: "",
  role: "",
  tags: "",
  body: ""
}, {
  url: "",
  author: "",
  role: "",
  tags: "",
  body: ""
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
