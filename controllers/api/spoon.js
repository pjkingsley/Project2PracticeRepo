const router = require ('express').Router();
const { queryList } = require ('../../utils/ingredients');

//GET Spoonacular API call
router = fetch('https://api.spoonacular.com/recipes/findByIngredients?ingredients=' + queryList + '&number=9&apiKey=f5ee2e3ba0cc4a3abad3369a8d4f7db3').then(function(response){
    return(response.json())
    })
    .then(function(data){
        console.log(data);
    });

//Export api fetch request
module.exports = router;