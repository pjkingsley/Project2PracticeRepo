//This is the individual user profile that will be run through bcrypt for storage in the database

const { Model, DataTypes } = require('sequelize');
const bcrypt = require('bcrypt');
const sequelize = require('../config/connection');

class UserProfile extends Model{
checkPassword(loginPw) {
    console.log(loginPw, this.password, "UserProfile check")
        return bcrypt.compareSync(loginPw, this.password);
    }
}
 
UserProfile.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
        },
       
        email: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true,
            validate: {
                isEmail: true,
            },

            },
            password: {
                type: DataTypes.STRING,
                allowNull: false,
                validate: {
                    len: [7],
                },
            },
         
        saved_recipes: {
            type: DataTypes.INTEGER,
            allowNull: true,
            isCommunity: false,
        },
    },
        
        {
            hooks: {
                beforeCreate: async (newUserData) => {
                    newUserData.password = await bcrypt.hash(newUserData.password, 12);
                    return newUserData;
                },
            },
            sequelize,
            freezeTableName: true,
            underscored: true,
            modelName: 'UserProfile',
        }
    );

module.exports = UserProfile;

    