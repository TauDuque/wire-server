const Sequelize = require("sequelize");
const dbConfig = require("../config/database");
const Seasons = require("../models/Seasons");
const Images = require("../models/Images");

const connection = new Sequelize(dbConfig);

Seasons.init(connection);
Images.init(connection);

Seasons.associate(connection.models);
Images.associate(connection.models);

module.exports = connection;
