const router = require('express').Router();
const userRoutes = require('./userRoutes');
const commRecipesRoutes = require('./commRecipesRoutes');
const spoonRoutes = require('./spoonRoutes');

router.use('/users', userRoutes);
router.use("/com_cookbook", commRecipesRoutes);
router.use("/spoon_routes", spoonRoutes);
module.exports = router;
