//Document querries for ingredient input and ingredient display
const food = document.getElementById ('food');
const fridge = document.getElementById ('fridge');

//Array of user inputed ingredients to use in API and database GET requests
const queryList = [];

//Functionality to display and remove ingredients from the HTML as well as from the queryList
const ingredients = document.querySelector('#food').addEventListener('keypress', function (event) {
    if (event.key === 'Enter') {
        event.preventDefault();
        console.log (food.value);
        let ingredient = document.createElement('li');
        ingredient.innerHTML = food.value;
        ingredient.id = food.value;
        fridge.append(ingredient);
        let removeButton = document.createElement('button');
        removeButton.innerHTML = 'x';
        removeButton.classList.add('remove-Btn');
        removeButton.addEventListener('click', () => {
            event.preventDefault ();
            const removeIngredient = event.target.parentElement.id;
            queryList.splice(removeIngredient, 1);
            document.getElementById(removeIngredient).remove();
        });
    };
});
//Exporting ingredients function
module.exports = ingredients;
//Exporting queryList
module.exports = queryList;