const path = require("path");//I need to look this up
const express = require("express");
const session = require("express-session");
const exphbs = require("express-handlebars");
const routes = require("./controllers");//imports our router
const helpers = require("./utils/helpers.js");//I need to look this up
const sequelize = require("./config/connection");//imports connection.js
//const router = require("./controllers/api");--not sure this is nessissary with routes already connected
const SequelizeStore = require("connect-session-sequelize")(session.Store);//imports Sequelize Store

//Sets up the Express App
const app = express();
const PORT = process.env.PORT || 3003;

//Set up sessions with cookies
const sess = {
     secret: 'whatevers clever',
     cookie: {
         maxAge:  864000,
     },
     resave: false,
     saveUninitialized: true,
     store: new SequelizeStore({
         db: sequelize,
     }),
};

//Allows express to use session cookies
app.use(session(sess));

// Set Handlebars as the default template engine.
const hbs = exphbs.create({ helpers });

app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');

//Allows express to use json function
app.use(express.json());

//Allows express to use url encoded
app.use(express.urlencoded({ extended: true}));

//Needs definition
app.use(express.static(path.join(__dirname, 'public')));

//Allow express to use /controllers/index.js
app.use(routes);

//Allows express to use controllers folder
// app.use(require('./controllers'));

//Starts the server to begin listening
sequelize.sync({ force: false }).then(() => {
    app.listen(PORT, () => {
        console.log('Server listening on: http://localhost:'+ PORT);
    });
});
