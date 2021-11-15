const { SpoonRecipe } = require("../../models");
const withAuth = require("../../utils/auth");

router.post("/", withAuth, async (req, res) => {
  console.log("spoon recipe favorites", req.body);
  try {
    const savedSpoonRecipes = await SpoonRecipe.create(req.body);

    res.status(200).json();
  } catch (err) {
    res.status(400).json(err);
  }
});

router.get("/:id", withAuth, async (req, res) => {
  try {
    const recipes = await SpoonRecipe.findByPk(req.params.id);
    res.status(200).json(recipes);
  } catch (err) {
    res.status(400).json(err);
  }
});
