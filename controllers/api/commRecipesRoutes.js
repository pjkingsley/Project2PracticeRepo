const router = require("express").Router();
const CommunityRecipes = require("../../models/CommunityRecipes");


//post to community cookbook
router.post("/", async (req, res) => {
  console.log("comm recipe book",req.body)
  try {
      const newCookbook = await CommunityRecipes.create(req.body)

    res.status(200).json();
  } catch (err) {
    res.status(400).json(err);
  }
});

//updating community cookbook
router.put("/com_recipes/:id", async (req, res) => {
  try {
    res.status(200).json();
  } catch (err) {
    res.status(400).json(err);
  }
});


router.get("/:id", async (req, res) => {
  try {
    const recipes = await CommunityRecipes.findByPk(req.params.id);
    res.status(200).json(recipes);
  } catch (err) {
    res.status(400).json(err);
  }
});
module.exports = router;

