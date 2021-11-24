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
    res.render("communityCookbook", { loggedIn: req.session.logged_in });
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