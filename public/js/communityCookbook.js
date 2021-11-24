const food = document.getElementById('food');
const fridge = document.getElementById('fridge');
const cardContainer = document.getElementById('card-container');

document.getElementById('food')
    .addEventListener('keypress', function (event) {
        if (event.key === 'Enter') {
            event.preventDefault();
            const ingredient = document.createElement('li');
            ingredient.innerHTML = food.value;
            ingredient.id = food.value;
            fridge.append(ingredient);
        }
    });

const retrieveRecipes = async () => {
    const result = await fetch ('/api/com_cookbook', {
        method: 'GET',
    });
    const json = await result.jason();
    return json;
};

const renderRecipe = (recipe) => {
    const card = document.createElement('div');
    const cardTitle = document.createElement('div');
    const cardDescription = document.createElement('div');
    const cardIngredients = document.createElement('div');
    const cardInstructions = document.createElement('div');

    card.classList.add('card', 'p-5');
    cardTitle.classList.add('card-header', 'card-title');
    cardDescription.classList.add('card-body', 'p-5');
    cardIngredients.classList.add('card-body', 'p-5');
    cardInstructions.classList.add('card-body', 'p-5');

    cardTitle.innerHTML =`${recipe.title}`;
    cardDescription.innerHTML = `${recipe.description}`;
    cardIngredients.innerHTML = `${recipe.ingredients}`;
    cardInstructions.innerHTML = `${recipe.instructions}`;
};

const cardMaker = () =>
    retrieveRecipes().then((response) => response.forEach((recipe) => 
    renderRecipe(recipe)));

document.onload.cardMaker();