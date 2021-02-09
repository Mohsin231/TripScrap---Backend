const express = require("express");
const router = express.Router();
const TripScrap = require("../models/tripscrap");

// CRUD functionality means:
// Create - make new instance of data (add data)
// Read - view our data (retrieve data)
// Update - edit existing data instance (modify existing data)
// Delete - remove existing piece of data (modify existing data)

// CRUD READ :
router.get("/", (req, res, next) => {
  TripScrap.find({})
    .then((tripscrap) => res.json(tripscrap))
    .catch(next);
});

// CRUD CREATE :
// adds payload
router.post("/formWhere", (req, res) => {
  // TripScrap.create(req.body)
  //   .catch(console.error);
  TripScrap.find({ title: req.body.name }).then((tripscrap) =>
    res.json(tripscrap)
  );
  // .catch(res.json({}));
  // console.log(req.body.name); // catches data
  // res.json({
  //   name: "Britney",
  // });
});

// CRUD UPDATE :
// work in progress!
router.get("/:id", (req, res) => {
  const id = req.params.id;
  TripScrap.findById(id)
    .then((tripscrap) => {
      res.render("/", tripscrap);
    })
    .catch(console.error);
});

router.put("/:id", (req, res) => {
  const id = req.params.id;
  TripScrap.findOneAndUpdate(
    { _id: id },
    {
      title: req.body.title,
      complete: req / body.complete === "on",
    },
    { new: true }
  )
    .then((tripscrap) => {
      res.render("tripscrap/show", tripscrap);
    })
    .catch(console.error);
});

module.exports = router;
