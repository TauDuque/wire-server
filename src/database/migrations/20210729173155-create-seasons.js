"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.createTable("seasons", {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
      },
      temporada: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      plot: {
        type: Sequelize.TEXT("long"),
        allowNull: false,
      },
      final: {
        type: Sequelize.TEXT("long"),
        allowNull: false,
      },
    });
  },

  down: async (queryInterface, Sequelize) => {},
};
