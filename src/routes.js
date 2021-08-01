const express = require("express");

const season = require("./controllers/SeasonsControllers");
const image = require("./controllers/ImagesControllers");
const router = express.Router();

router.get("/", (req, res) => {
  res.send("Working...");
});

router.get("/seasons", (req, res) => {
  season.getAllSeasons(req, res);
});

router.get("/seasons/:id", (req, res) => {
  season.getSeasonId(req, res);
});

router.get("/images", (req, res) => {
  image.getAllImages(req, res);
});

router.get("/seasons/:season_id/images", (req, res) => {
  image.getImageId(req, res);
});

module.exports = router;
