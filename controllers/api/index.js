const router = require('express').Router();
const userRoutes = require('./userRoutes');
const commRecipesRoutes = require('./commRecipesRoutes');
const spoonRoutes = require('./spoonRoutes');
const hamburgerLinks = require('./hamburgerLinks.js');
router.use('/users', userRoutes);
router.use("/com_cookbook", commRecipesRoutes);
router.use("/spoon_routes", spoonRoutes);
router.use("/u", hamburgerLinks )
module.exports = router;
