const router = require("express").Router();
const { CommunityRecipes } = require("../../models");
const withAuth = require("../../utils/auth");

//post to community cookbook
router.post("/createRecipe", async (req, res) => {
  console.log("comm recipe book", req.body);
  try {
    const newCookbook = await CommunityRecipes.create({
      title: req.body.ccTitle,
      description: req.body.ccDescription,
      ingredients: req.body.ccIngredients,
      instructions: req.body.ccInstructions,
    });

    res.status(200).json(newCookbook);
  } catch (err) {
    res.status(400).json(err);
  }
});

//updating community cookbook
router.put("/com_recipes/:id", withAuth, async (req, res) => {
  try {
    res.status(200).json();
  } catch (err) {
    res.status(400).json(err);
  }
});

//get community cookbook recipes associated with user ID
router.get("/:id", withAuth, async (req, res) => {
  try {
    const recipes = await CommunityRecipes.findAll(recipes);
    res.status(200).json(recipes);
  } catch (err) {
    res.status(400).json(err);
  }
});
module.exports = router;
