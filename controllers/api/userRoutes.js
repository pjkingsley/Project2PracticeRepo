//Copied from week 13 section 18
const router = require ('express').Router();
const User = require ('../../models/userProfile');

//GET a user
router.get('/:id', async (re, res) => {
    try {
        const userData = await User.findByPK(req.params.id);
        if (!userData) {
            res.status(404).json({ message: 'No user with this id! '});
            return;
        }
        res.status(200).json(userData);
    } catch (err) {
        res.status(500).json(err);
    }
});

// Create a new user
router.post('/',async (req, res) => {
    try {
        const userData = await User.create(req.body);
        res.status(200).json(userData);
    } catch (err) {
        res.status(400).json(err);
    }
});

module.exports = router;
//GET Spoonacular API call

//GET community cookbook call

//POST to community cookbook

//POST to user saved recipes