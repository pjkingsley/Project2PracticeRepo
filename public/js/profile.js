// const { UserProfile } = require("../../models");

const createUserProfile = async (event) => {
  event.preventDefault();
console.log(event);
  const email = document.querySelector("#userEmail").value.trim();
  console.log(email)
  const password = document.querySelector("#UserPassword").value.trim();
  console.log(password)
  const passwordConfirm = document
    .querySelector("#passwordConfirm")
    .value.trim();
console.log(passwordConfirm)
  if (email && password && passwordConfirm) {
    const response = await fetch("/controllers/api/users/", {
      method: "POST",
      body: JSON.stringify({ email, password, passwordConfirm }),
      
    });
 
    if (response.ok) {
      alert("User Profile Created. Welcome to the Community.");
    } else {
      alert("Failed to create user account");
    }
  }
};

document.getElementById("signup").addEventListener("click", createUserProfile);
