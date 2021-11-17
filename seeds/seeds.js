const sequelize = require ('../config/connection');
const {CommunityRecipes, SpoonRecipe, UserProfile} = require('../models');

const userData = require('./userData.json');
//const spoonData = require('./spoonData.json');
const communityData = require('./communityData.json');

const seedDatabase = async () => {
    await sequelize.sync ({ force: true });

    const users = await UserProfile.bulkCreate (userData, {
        individualHooks: true,
        returning: true,
    });

    // const spoonRecipe = await SpoonRecipe.bulkCreate (spoonData, {
    //     individualHooks: true,
    //     returning: true,
    // });
    
    const communityRecipe = await CommunityRecipes.bulkCreate (communityData, {
        individualHooks: true,
        returning: true,
    });
};
seedDatabase();