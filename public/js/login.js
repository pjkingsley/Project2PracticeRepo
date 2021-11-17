// const renderLogin = document.location.replace("/profile");

document
  .getElementById("log")
  .addEventListener("click", res.render("/profile"));

const loginFormHandler = async (event) => {
  event.preventDefault();

  // Collect values from the login form
  const email = document.querySelector("#User Email").value.trim();
  const password = document.querySelector("#User Password").value.trim();
  //from profile.js mini project
  if (email && password) {
    // Send a POST request to the API endpoint
    const response = await fetch("/api/users/login", {
      method: "POST",
      body: JSON.stringify({ email, password }),
    });

    if (response.ok) {
      console.log("login success");
      //getElementById(hamburger button display)
      //getElementByID(display logout button)
    } else {
      alert(response.statusText);
    }
  }
};

document.querySelector("#login").addEventListener("click", loginFormHandler);

//     What do we want to display when user logs in?
//     if (response.ok) {
//       // If successful, redirect the browser to the profile page
//       document.location.replace("/profile");
//     } else {
//       alert(response.statusText);
//     }
//   }