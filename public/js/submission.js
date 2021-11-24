const createCommunityRecipe = async (event) => {
  event.preventDefault();

  const ccTitle = document.querySelector("#ccTitle").value;
  console.log(ccTitle);

  const ccDescription = document.querySelector("#ccDescription").value.trim();
  

  const ccIngredients = document.querySelector("#ccIngredients").value.trim();

  const ccInstructions = document.querySelector("#ccInstructions").value.trim();

  if (ccTitle && ccDescription && ccIngredients && ccInstructions) {
    const response = await fetch("/api/com_cookbook/createRecipe", {
      method: "POST",
      body: JSON.stringify({
        ccTitle,
        ccDescription,
        ccIngredients,
        ccInstructions,
      }),
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (response.ok) {
      console.log("Recipe stored in Database");
      alert("Thank you for your submission!")
    } else {
      console.log(response);
      alert(response.statusText);
    }
  }
};

document
  .querySelector("#ccSubmit")
  .addEventListener("click", createCommunityRecipe);
