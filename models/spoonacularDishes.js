//model to store recipes in format of api call to spoonacular with title, image and api call route.
const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/connection");

class SpoonRecipe extends Model {}

SpoonRecipe.init(
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
    description: {
      type: DataTypes.TEXT,
      allowNull: true,
    },
    spoonacularID: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    user_reference: {
      type: DataTypes.INTEGER,
      references: {
        model: "UserProfile",
        key: "id",
      },
    },
  },
  {
    sequelize,
    freezeTableName: true,
    modelName: "SpoonRecipe",
  }
);

module.exports = SpoonRecipe;
