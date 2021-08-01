const Seasons = require("../models/Seasons");

const getAllSeasons = (req, res) => {
  console.log(res);
  const data = Seasons.findAll()
    .then((data) => {
      res.json(data);
    })
    .catch((err) => console.log(err));
};

const getSeasonId = (req, res) => {
  const { id } = req.params;
  const data = Seasons.findAll({ where: { id: id } })
    .then((data) => {
      res.json(data);
    })
    .catch((err) => res.status(500).json("Houve um erro na busca pela id..."));
};

module.exports = { getAllSeasons: getAllSeasons, getSeasonId: getSeasonId };
