//recipes that the community adds

const { Model, DataTypes } = require("sequelize");
const sequelize = require("../congig/connection");

class CommunityRecipes extends Model {}

CommunityRecipes.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      aitoIncriment: true,
    },
    recipe: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    DESCRIPTION: {
      TYPE: DataTypes.TEXT,
      allowNull: true,
    },
  },
 
  {
    sequelize,
    freezeTableName: true,
    modelName: "CommunityRecipes",
  }
);

module.exports = CommunityRecipes;