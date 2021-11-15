//Set dependencies for export
const UserProfile = require('./userProfile');
const CommunityRecipes = require('./CommunityRecipes');
const spoonacularDishes = require('./spoonacularDishes');
//communityCookbook belongs to UserProfile, UserProfile has many communitycookbooks.  

//spoonacularDishes belongs to UserProfile.  UserProfile has many spoonacularDishes

//This is where we could make association between ingredients table and recipe table.  look at starter code of ecommerce homework from unit 13.  Look inside products routes, specifically the create product route.  Think of tags as ingredients and the product as the recipe.  
module.exports = { UserProfile, CommunityRecipes, spoonacularDishes };
