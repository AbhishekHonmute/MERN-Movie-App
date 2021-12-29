const express = require("express");
const bodyparser = require("body-parser");
const cors = require("cors");

const db = require("./db");
const movieRouter = require("./routes/movie-router");

const app = express();
const apiPort = 3000;

app.use(bodyparser.urlencoded({ extended: true }));
app.use(cors());
app.use(bodyparser.json());

db.on("error", console.error.bind(console, "MongoDB Connection Error:"));

app.get("/", (req, res) => {
  res.send("Hello World!!");
});

app.use("/api", movieRouter);

app.listen(apiPort, () => console.log(`server running on port ${apiPort}`));
