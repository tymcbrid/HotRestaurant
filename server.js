var express = require("express");
var path = require("path");

var app = express();
var PORT = process.env.PORT || 3000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

var newVar = [
    {
      prop1: "a",
      prop2: "a",
      prop3: "a",
      prop4: 900,
      prop5: 2000
    },
    {
    prop1: "a",
    prop2: "a",
    prop3: "a",
    prop4: 900,
    prop5: 2000
    },
    {
    prop1: "a",
    prop2: "a",
    prop3: "a",
    prop4: 900,
    prop5: 2000
    }
  ];

  app.get("/", function(req, res) {
    res.sendFile(path.join(__dirname, "index.html"));
  });