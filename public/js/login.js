const loginFormHandler = async (event) => {
  event.preventDefault();

  // Collect values from the login form
  const email = document.querySelector("#email").value.trim();
  const password = document.querySelector("#password").value.trim();
  //from profile.js mini project
  if (email && password) {
    // Send a POST request to the API endpoint
    const response = await fetch("/api/users/login", {
      method: "POST",
      body: JSON.stringify({ email, password }),
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (response.ok) {
      console.log("login success");
    location.href= ("http://localhost:3001/api/u/RecipeLogged");
      
    } else {
      console.log(response)
      alert(response.statusText);
    }
  }
};
const signUp = function (event) {
  event.preventDefault();
  document.location.replace('./signup');
};

document.querySelector('#signUp').addEventListener('click', signUp);
document.querySelector("#login").addEventListener("click", loginFormHandler);


