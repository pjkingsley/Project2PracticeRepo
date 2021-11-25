const router = require("express").Router();

//homepage link
router.get("/homepage", async (req, res) => {
   try {
     res.render("homepage");
   } catch (err) {
     res.status(500).json(err);
   }
 });

//CommunityCookbook link
router.get("/communityCookbook", async (req, res) => {
  try {
    const retrieveRecipes = async () => {
      const result = await fetch ('/api/comCookbook/recipes', {
          method: 'GET',
      });
      const json = await result.json();
      return json;
  };
  
    const renderRecipe = (recipe) => {
      const card = document.createElement('div');
      const cardTitle = document.createElement('div');
      const cardDescription = document.createElement('div');
      const cardIngredients = document.createElement('div');
      const cardInstructions = document.createElement('div');
  
      card.classList.add('card', 'p-5');
      cardTitle.classList.add('card-header', 'card-title');
      cardDescription.classList.add('card-body', 'p-5');
      cardIngredients.classList.add('card-body', 'p-5');
      cardInstructions.classList.add('card-body', 'p-5');
  
      cardTitle.innerHTML =`${recipe.title}`;
      cardDescription.innerHTML = `${recipe.description}`;
      cardIngredients.innerHTML = `${recipe.ingredients}`;
      cardInstructions.innerHTML = `${recipe.instructions}`;
  };
  
  
  
    retrieveRecipes().then((response) => response.forEach((recipe) => 
      renderRecipe(recipe)));
    res.render("communityCookbook");
  } catch (err) {
    res.status(500).json(err);
  }
});

// Recipe link, no login
router.get("/submitRecipe", async (req, res) => {
  try {
    res.render("submission", { loggedIn: req.session.logged_in });
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get("/RecipeLogged", async (req, res) => {
  try {
    res.render("renderRecipeCard-withLogin", {
      loggedIn: req.session.logged_in,
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

//about us link
router.get("/aboutUs", async (req, res) => {
  try {
    res.render("aboutus", { loggedIn: req.session.logged_in });
  } catch (err) {
    res.status(500).json(err);
  }
});

//donation page link
router.get("/donations", async (req, res) => {
  try {
    res.render("donationPage", { loggedIn: req.session.logged_in });
  } catch (err) {
    res.status(500).json(err);
  }
});
module.exports = router;