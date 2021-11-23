//const { UserProfile } = require("../../models");

const createUserProfile = async (event) => {
  event.preventDefault();
  console.log(event);
  const email = document.querySelector("#userEmail").value.trim();
  console.log(email);
  const password = document.querySelector("#userPassword").value.trim();
  console.log(password);
  const password_confirm = document
    .querySelector("#passwordConfirm")
    .value.trim();
  console.log(password_confirm);
if (email && password && password_confirm) {
    console.log("anyString");
    const response = await fetch("/api/users/profile", {
      method: "POST",
      body: JSON.stringify({ email, password }),
      headers: {
        'Content-Type': 'application/json',}
    });

    

     if (response.ok) {
      alert("User Profile Created. Welcome to the Community.");
    } else {
      alert("Failed to create user account");
    }
  }
};

document.getElementById("signup").addEventListener("click", createUserProfile);
