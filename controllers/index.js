//Routes here to transfer from database to index.
//Initialize Router
const router = require('express').Router();

//Connect to /api/index.js
const apiRoutes = require('./api');

//Connect to homeRoutes
const homeRoutes = require('./homeRoutes.js');

//Allow router to use api and homeRoutes
router.use('/', homeRoutes);
router.use('/api', apiRoutes);

//Export for server use
module.exports = router;

//app.get('/', (req,res) => {
//    res.send(
//    );
//});