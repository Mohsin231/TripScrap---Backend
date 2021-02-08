const express = require("express");
const router = express.Router();
const app = express();
const TripScrap = require("../models/tripscrap");

app.get("/todos", async (req, res, next) => {
  try {
    const todos = await TripScrap.find({});
    return success(res, todos);
  } catch (err) {
    next({ status: 400, message: "failed to get todos" });
  }
});
app.post("/todos", async (req, res, next) => {
  try {
    const todo = await TripScrap.create(req.body);
    return success(res, todo);
  } catch (err) {
    next({ status: 400, message: "failed to create todo" });
  }
});
app.put("/todos/:id", async (req, res, next) => {
  try {
    const todo = await TripScrap.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    return success(res, todo);
  } catch (err) {
    next({ status: 400, message: "failed to update todo" });
  }
});
app.delete("/todos/:id", async (req, res, next) => {
  try {
    await TripScrap.findByIdAndRemove(req.params.id);
    return success(res, "todo deleted!");
  } catch (err) {
    next({ status: 400, message: "failed to delete todo" });
  }
});
app.use((err, req, res, next) => {
  return res.status(err.status || 400).json({
    status: err.status || 400,
    message: err.message || "there was an error processing request",
  });
});


router.get("/", (req, res) => {
  const results = TripScrap.find({});
  results.then((tds) => {
    console.log(tds);
    res.render("todos/index", { todos: tds });
  });
});

router.get("/new", (req, res) => {
  res.render("todos/new");
});

router.get("/:id/edit", (req, res) => {
  const id = req.params.id;
  TripScrap.findById(id)
    .then((todo) => {
      res.render("todos/edit", todo);
    })
    .catch(console.error);
});

router.post("/save", (req, res) => {
  // res.send('received!')
  console.log('Body: ', req.body)
  // console.log("in post");
  TripScrap.create(req.body)
    .then((todo) => {
      res.redirect("/todos");
    })
    .catch(console.error);
});

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
