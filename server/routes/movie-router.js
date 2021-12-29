const express = require("express");

const MovieCtrl = require("../controllers/movie-ctrl");

const router = express.Router();

router.post("/movie", MovieCtrl.createMovie);
router.put("/movie", MovieCtrl.updateMovie);
router.delete("/movie", MovieCtrl.deleteMovie);
router.get("/movie", MovieCtrl.getMovies);
router.get("/movie", MovieCtrl.getMovieById);

module.exports = router;
