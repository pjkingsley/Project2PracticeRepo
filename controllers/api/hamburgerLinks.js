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
    res.render("communityCookbook");
  } catch (err) {
    res.status(500).json(err);
  }
});

//Submit a Recipe link
router.get("/recipeSubmit", async (req, res) => {
  try {
    res.render("renderRecipeCard");
  } catch (err) {
    res.status(500).json(err);
  }
});

//about us link
router.get("/aboutUs", async (req, res) => {
  try {
    res.render("aboutus");
  } catch (err) {
    res.status(500).json(err);
  }
});

//donation page link
router.get("/donations", async (req, res) => {
  try {
    res.render("donationPage");
  } catch (err) {
    res.status(500).json(err);
  }
});
