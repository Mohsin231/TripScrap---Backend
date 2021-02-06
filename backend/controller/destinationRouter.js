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

  router.get("/dest/:id", function(res, req) {
    Destination.find({
      id : req.params.id}, function(error, id) {
        if(id==""){
          var req = require("req");
          console.log();
          res.statusCode = 302;
          req(`https://www.triposo.com/api/20201111/location.json?id=${req.params.id}&account=${process.env.TRIPOSOL_ACCOUNT}&token=${process.env.TRIPOSOL_API}`, function (error, res, body){

            var savedData = new Destination({
              id : req.params.id,
              body: req.body
              // body:body.PostOffice stackoverflow
            });

            savedData.save(function (err, results) {
              if (err) {
                return err;
              }
              else {
                console.log(body);
              }
            });
          }
          );

        }
      }
  )
  res.json(id)
})

  module.exports = router

// input field will trigger destinationRouter & destinationSchema,
// destinationRouter will pull from Triposo API
// upon grabbing API data, destination.JS will send to TripScrap.js
// if user decides to save data, then Triposo API will send data to TripScrap.JS. 