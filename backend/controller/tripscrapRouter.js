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
// where the user comes in and creates new data...
router.post("/", (req, res, next) => {
  TripScrap.create(req.body)
    .then((tripscrap) => {
      res.redirect("/");
    })
    .catch(console.error);
});

// app.get("/", async (req, res, next) => {
//   try {
//     console.log("test")
//     const todos = await TripScrap.find({});
//     // return success(res, todos);
//     res.json({
//       data: todos,
//       message: "all the todos"
//     })
//   } catch (err) {
//     next(err);
//   }
// });

// app.post("/", async (req, res, next) => {
//   try {
//     const todo = await TripScrap.create(req.body);
//     return success(res, todo);
//   } catch (err) {
//     next({ status: 400, message: "failed to create todo" });
//   }
// });
// //if the data.length >= 1
// app.put("/todos/:id", async (req, res, next) => {
//   try {
//     const todo = await TripScrap.findByIdAndUpdate(req.params.id, req.body, {
//       new: true,
//     });
//     return success(res, todo);
//   } catch (err) {
//     next({ status: 400, message: "failed to update todo" });
//   }
// });
// app.delete("/todos/:id", async (req, res, next) => {
//   try {
//     await TripScrap.findByIdAndRemove(req.params.id);
//     return success(res, "todo deleted!");
//   } catch (err) {
//     next({ status: 400, message: "failed to delete todo" });
//   }
// });
// app.use((err, req, res, next) => {
//   return res.status(err.status || 400).json({
//     status: err.status || 400,
//     message: err.message || "there was an error processing request",
//   });
// });

// router.delete("/:id", (req, res) => {
//   TripScrap.findOneAndRemove({ _id: req.params.id })
//     .then(() => res.redirect("/todos"))
//     .catch(console.error);
// });

// router.put("/:id", (req, res) => {
//   const id = req.params.id;
//   TripScrap.findOneAndUpdate(
//     { _id: id },
//     {
//       title: req.body.title,
//       complete: req.body.complete === "on",
//     },
//     { new: true }
//   )
//     .then((todo) => {
//       res.render("todos/show", todo);
//     })
//     .catch(console.error);
// });

// router.get("/:id", (req, res) => {
//   TripScrap.findById(req.params.id).then((todo) => res.render("todos/show", todo));
// });

module.exports = router;
