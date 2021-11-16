//Set dependencies for export
const UserProfile = require('./userProfile');
const CommunityRecipes = require('./CommunityRecipes');
const SpoonRecipe = require('./spoonacularDishes');

UserProfile.hasMany(SpoonRecipe, {
  foreignKey: "user_reference",
});

UserProfile.hasMany(CommunityRecipes, {
  foreignKey: "user_reference",
});

SpoonRecipe.belongsTo(UserProfile, {
  foreignKey: "user_reference",
});

CommunityRecipes.belongsTo(UserProfile, {
  foreingKey: "user_reference",
});


 



//This is where we could make association between ingredients table and recipe table.  look at starter code of ecommerce homework from unit 13.  Look inside products routes, specifically the create product route.  Think of tags as ingredients and the product as the recipe.  
module.exports = { UserProfile, CommunityRecipes, SpoonRecipe };
