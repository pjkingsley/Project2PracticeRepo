var getStartedbtn = document.getElementById("btnControl")
var form = document.getElementById("show-form")
var closeForm = document.getElementById("close")

function showForm () {
getStartedbtn.classList.add("hide");
form.classList.remove("hide");
}
function hideForm(){
    getStartedbtn.classList.remove("hide");
    form.classList.add("hide");
}

getStartedbtn.addEventListener("click", showForm)
closeForm.addEventListener("click", hideForm)