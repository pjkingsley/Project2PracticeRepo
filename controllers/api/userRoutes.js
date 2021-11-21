const router = require("express").Router();
const withAuth = require("../../utils/auth");
const { UserProfile } = require("../../models");
//This route is /api/users/profile

router.post("/profile", async (req, res) => {
  try {
    console.log(req.body, "from api/users/profile route");

    const userProfileData = await UserProfile.create({
      email: req.body.email,
      password: req.body.password,
    });

    console.log("user Profile Data");
    res.status(200).json(userProfileData);
  } catch (err) {
    res.status(400).json(err);
  }
});


router.post("/login", async (req, res) => {
  try {
    console.log("router.post(/login))");
    const userProfileData = await UserProfile.findOne({
      where: {email : req.body.email}
    });

    if (!userProfileData) {
      res
        .status(400)
        .json({ message: "Incorrect email or password, please try again!" });
      return;
    }

    const validPassword = await userProfileData.checkPassword(
      req.body.password
    );

    if (!validPassword) {
      res
        .status(400)
        .json({ message: "Incorrect email or password, please try again!" });
      return;
    }
    req.session.save(() => {
      req.session.userProfile_id = userProfileData.id;
      req.session.logged_in = true;

      res.json({
        user: userProfileData,
        message: "You are now logged in!",
      });

      // res.redirect("/api/u/RecipeLogged");
    });
  } catch (err) {
    res.status(400).json(err);
  }
});

//Logout route
router.post("/logout", (req, res) => {
  if (req.session.logged_in) {
    req.session.destroy(() => {
      res.status(204).end();
    });
  } else {
    res.status(404).end();
  }
});
// Create a new user
router.post("/", async (req, res) => {
  try {
    const newUser = req.body;
    newUser.password = await bcrypt.hash(req.body.password, 10);
    const userProfileData = await UserProfile.create(newUser);
    res.status(200).json(userProfileData);
  } catch (err) {
    res.status(400).json(err);
  }
});
router.get("/signup1", async (req, res) => {
  try {
    res.render("signup");
  } catch (err) {
    res.status(500).json(err);

  }
});


router.get("/loginpage", async (req, res) => {
  try {
    res.render("loginpage");
    console.log("login route reached");
  } catch (err) {
    res.status(500).json(err);
  }
});


//GET Spoonacular API call

//GET community cookbook call

//community

//POST to user saved recipes

module.exports = router;
