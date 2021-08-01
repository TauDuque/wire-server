const { Model, DataTypes } = require("sequelize");

class Images extends Model {
  static init(sequelize) {
    super.init(
      {
        image: DataTypes.STRING,
        description: DataTypes.STRING,
      },
      {
        sequelize,
      }
    );
  }

  static associate(models) {
    this.belongsTo(models.Seasons, { foreignKey: "season_id", as: "seasons" });
  }
}

module.exports = Images;
