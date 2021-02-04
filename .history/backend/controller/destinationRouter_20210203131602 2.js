const express = require("express");
const router = express.Router();
const destination = require("../models/destination");
const triposo

router.get("/", (req, res, next) => {

})

// input field will trigger destinationRouter & destinationSchema,
// destinationRouter will pull from Triposo API
// upon grabbing API data, destination.JS will send to TripScrap.js, 
// if user decides to save data, then Triposo API will send data to TripScrap.JS. 