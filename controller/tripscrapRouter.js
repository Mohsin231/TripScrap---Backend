const express = require("express");
const router = express.Router();
const TripScrap = require("../models/tripscrap");

// CRUD functionality means:
// Create - make new instance of data (add data)
// Read - view our data (retrieve data)
// Update - edit existing data instance (modify existing data)
// Delete - remove existing piece of data (modify existing data)

// req.params.id == event.target.value

// CRUD READ :
router.get("/", (req, res, next) => {
  TripScrap.find({})
    .then((tripscrap) => res.json(tripscrap))
    .catch(next);
});

// CRUD SHOW, GET TASK BY ID :
router.get("/:id", (req, res, next) => {
  TripScrap.findById(req.params.id)
    .then((tripscrap) => res.json(tripscrap))
    .catch(next);
});

// CRUD CREATE :
router.post("/", (req, res, next) => {
  const createTripScrap = {
    title: req.body.title,
  };
  console.log(req.body);
  TripScrap.create(createTripScrap)
    .then((tripscrap) => res.json(tripscrap))
    .catch(next);
});

// CRUD UPDATE :
router.put("/:id", (req, res, next) => {
  TripScrap.findOneAndUpdate({ _id: req.params.id }, req.body, { new: true })
    .then((tripscrap) => res.json(tripscrap))
    .catch(next);
});

// CRUD DELETE:
router.delete("/:id", (req, res, next) => {
  TripScrap.findOneAndDelete({ _id: req.params.id })
    .then((tripscrap) => res.json(tripscrap))
    .catch(next);
});

// adds payload
// router.post("/newTask", (req, res) => {
//   TripScrap.create(req.body)
//   console.log(req.body)
//     .then(tripscrap => res.json(tripscrap))
//   .catch(error)
// });

// CRUD UPDATE :
// work in progress!
// router.get("/:id", (req, res) => {
//   const id = req.params.id;
//   TripScrap.findById(id)
//     .then((tripscrap) => {
//       res.render("/", tripscrap);
//     })
//     .catch(console.error);
// });

// router.put("/:id", (req, res) => {
//   const id = req.params.id;
//   TripScrap.findOneAndUpdate(
//     { _id: id },
//     {
//       title: req.body.title,
//       complete: req / body.complete === "on",
//     },
//     { new: true }
//   )
//     .then((tripscrap) => {
//       res.render("tripscrap/show", tripscrap);
//     })
//     .catch(console.error);
// });

module.exports = router;
