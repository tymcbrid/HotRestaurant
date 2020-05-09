const express = require("express");
const path = require("path");

let app = express();
let PORT = process.env.PORT || 3000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

let tables = [
    {
      uniqueID: "a",
      Name: "a",
      phoneNumber: "a",
      email: 900,
    },
  ];

  app.get("/", function(req, res) {
    res.sendFile(path.join(__dirname, "index.html"));
  });

  app.get("/tables", function(req, res) {
    res.sendFile(path.join(__dirname, "tables.html"));
  });

  app.get("/reserve", function(req, res) {
    res.sendFile(path.join(__dirname, "reserve.html"));
  });

  app.get("/api/tables", function(req, res) {
    return res.json(tables);
  });

  app.post("/api/tables", function(res, req){
    let newTable = req.body;

    console.log(newTable);
    tables.push(newTable);

    res.json(newTable);
  })