const express = require("express");
const router = express.Router();
const Destination = require("../models/destination");

router.get("/", (req, res) => {
    const results = Destination.find({})
    results.then((dest) => {
      console.log(dest, "working?");
      res.render("todos", { results_id: dest });
    });
  });

  module.exports = router

// input field will trigger destinationRouter & destinationSchema,
// destinationRouter will pull from Triposo API
// upon grabbing API data, destination.JS will send to TripScrap.js, 
// if user decides to save data, then Triposo API will send data to TripScrap.JS. 