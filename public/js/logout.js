const logoutEvent = async (event) => {
     event.preventDefault(); 
  const response = await fetch("api/users/logout", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: { logged_in: true },
  });
  if (response.ok) {
      console.log("logout response ok");
  } else {
      console.log("here is the problem");
    alert(response);
  }
};

document.querySelector("#logout").addEventListener("click", logoutEvent);
