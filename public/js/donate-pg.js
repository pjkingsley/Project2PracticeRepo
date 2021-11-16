var donateDescription = document.getElementById('donate-description');
var hideDescriptions = document.getElementById("hide-description"); 
var descriptions = document.getElementsByClassName("description");

console.log(donateDescription)
console.log(hideDescriptions)
console.log(descriptions)

donateDescription.addEventListener("click", ()=>{
for(let i=0; i < descriptions.length; i++){
    descriptions[i].classList.remove('hide');
}
hideDescriptions.classList.remove('hide');
donateDescription.classList.add('hide');
})

hideDescriptions.addEventListener("click", ()=>{
    for(let i=0; i < descriptions.length; i++){
        descriptions[i].classList.add('hide');
    }
    hideDescriptions.classList.add('hide');
    donateDescription.classList.remove('hide');
})