const Images = require("../models/Images");
const Seasons = require("../models/Seasons");

const getAllImages = (req, res) => {
  const data = Images.findAll()
    .then((data) => {
      res.json(data);
    })
    .catch((err) => res.status(500).json("Houve um erro..."));
};

const getImageId = (req, res) => {
  const { season_id } = req.params;
  const data = Seasons.findByPk(season_id, {
    include: {
      association: "images",
    },
  })
    .then((data) => {
      res.json(data);
    })
    .catch((err) => console.log(err));
};

module.exports = { getAllImages: getAllImages, getImageId: getImageId };
