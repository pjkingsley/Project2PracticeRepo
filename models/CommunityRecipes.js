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
    ingredients:{
      []

    },

    instructions:{},
    image:{},
    author:{},
}

  },
 
  {
    sequelize,
    freezeTableName: true,
    modelName: "CommunityRecipes",
  }
);

module.exports = CommunityRecipes;