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
      autoIncrement: true,
    },
    title: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    description: {
      type: DataTypes.TEXT,
      allowNull: true,
    },
    ingredients: {
      type: DataTypes.JSON,
      allowNull: false,
    },
    instructions: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    image: {
      type: DataTypes.BLOB,
      allowNull: true,
    },
    author: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    recipe_id: {
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
    modelName: "CommunityRecipes",
  }
);

module.exports = CommunityRecipes;
