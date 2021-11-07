//model to store recipes in format of api call to spoonacular with title, image and api call route.
const {Model, DataTypes } = require('sequelize');
const sequelize = require('../congig/connection');

class Recipe extends Model { }

Recipe.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            aitoIncriment: true,
        },
        },
        recipe: {
            type: DataTypes.STRING,
            allowNull: false,

        },
        DESCRIPTION: {
            TYPE: DataTypes.TEXT,
            allowNull: true,
        },
        apiCallRoute:{
            type: DataTypes.STRING,
            allowNull: true,
        },


        }
    
)
