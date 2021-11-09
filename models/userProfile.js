//This is the individual user profile that will be run through bcrypt for storage in the database

const {Model, DataTypes } = require('sequelize');
const bcrypt = require('../config/connection');
const swquelize = require('../config/connection');

class UserProfile extends Model{
    checkPassword(loginPw) {
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
        name: {
            type: DataTypes.STRING,
            allowNull: false,

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

    