const express = require("express");
const methodOverride = require("method-override");
const bodyParser = require("body-parser");
const app = express();

const db = require("./models/connection");
const cors = require("cors");

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
//cors setup below
app.use(cors({
  origin: ["http://localhost:3001"], //telling cors that you will get request from this origin to access the data in this backend code. REACT will run on port 3001
  credentials: true, 
  optionsSuccessStatus: 200
}));
app.use(methodOverride("_method"));
// const db = require("../backend/db/connection.js")

// Use middleware to parse the data in the HTTP request body and add
// a property of body to the request object containing a POJO with with data.
// routers needed for models/controllers

const TripScrapRouter = require("./controller/tripscrapRouter");

const DestinationRouter = require("./controller/DestinationRouter");

app.use("/todos", TripScrapRouter);

app.use("/destination", DestinationRouter);

app.use(bodyParser.json());
//telling the app that we are going to use json to handle incoming payload

//test
app.get("/", (req, res) => {
  res.send("working");
});

app.set("port", process.env.PORT || 3000);

app.listen(app.get("port"), () => {
  console.log(`✅ PORT: ${app.get("port")} 🌟`);
});
