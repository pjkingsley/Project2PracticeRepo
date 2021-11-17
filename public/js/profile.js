const { UserProfile } = require("../../models");

const createUserProfile = async (event) => {
  event.preventDefault();

  const email = document.querySelector("User Email").value.trim();
  const password = document.querySelector("User Password").value.trim();
  const passwordConfirm = document
    .querySelector("User Password Confirm")
    .value.trim();

  if (email && password && passwordConfirm) {
    const response = await fetch("/api/users/", {
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
