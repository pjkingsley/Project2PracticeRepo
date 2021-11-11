//Copied from week 13 section 18
const router = require ('express').Router();
const bcrypt = require('bcrypt');
const User = require ('../../models/userProfile');

//GET a user
// router.get('/:id', async (re, res) => {
//     try {
//         const userData = await User.findByPK(req.params.id);
//         if (!userData) {
//             res.status(404).json({ message: 'No user with this id! '});
//             return;
//         }
//         res.status(200).json(userData);
//     } catch (err) {
//         res.status(500).json(err);
//     }
// });

//Login route
router.post ('/login', async (req, res) => {
    try {
        const userData = await User.findOne({ where: { email: req.body.email }});

        if (!userData) {
            res
              .status(400)
              .json({ message: 'Incorrect email or password, please try again!' });
            return;
        };

        const validPassword = await userData.checkPassword(req.body.password);

        if (!validPassword) {
            res
              .status(400)
              .json({ message: 'Incorrect email or password, please try again!'});
            return;
        };
        req.session.save(() => {
            req.session.user_id = userData.id;
            req.session.logged_in = true;

            res.json({ user: userData, message: 'You are now logged in!'});
        });
    } catch (err) {
        res.status(400).json(err);
    }
});

//Logout route
router.post('/logout', (req, res) => {
    if (req.session.logged_in) {
        req.session.destroy(()=> {
            res.status(204).end();
        });
    } else {
        res.status(404).end();
    }
});
// Create a new user
router.post('/',async (req, res) => {
    try {
        const newUser = req.body;
        newUser.password = await bcrypt.hash(req.body.password, 10);
        const userData = await User.create(newUser);
        res.status(200).json(userData);
    } catch (err) {
        res.status(400).json(err);
    }
});

//GET Spoonacular API call

//GET community cookbook call

//POST to community cookbook

//POST to user saved recipes

module.exports = router;
