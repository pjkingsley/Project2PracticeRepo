const router = require('express').Router();
const userRoutes = require('./userRoutes.js');
const commRecipesRoutes = require('./commRecipesRoutes.js');

router.use('/users', userRoutes);
router.use("/com_cookbook", commRecipesRoutes);
module.exports = router;
