//recipes that the community adds

const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/connection");

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
      type: DataTypes.TEXT,
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