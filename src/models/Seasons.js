const { Model, DataTypes } = require("sequelize");

class Seasons extends Model {
  static init(sequelize) {
    super.init(
      {
        temporada: DataTypes.STRING,
        plot: DataTypes.TEXT("long"),
        final: DataTypes.TEXT("long"),
        hero_img: DataTypes.STRING,
      },
      {
        sequelize,
      }
    );
  }

  static associate(models) {
    this.hasMany(models.Images, { foreignKey: "season_id", as: "images" });
  }
}

module.exports = Seasons;
