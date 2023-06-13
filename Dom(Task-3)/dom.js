// MANIPULATE THE TITLE
document.title = "Sharpener";

// GETELEMENTBYID //

var headerTitle = document.getElementById('header-title')
console.log(headerTitle)
// headerTitle.style.color = "black"
// headerTitle.innerHTML = "hello"
// headerTitle.innerText ="Hello-1"
// headerTitle.textContent = "Hello-2"


// the title have a black border
headerTitle.style.borderBottom = "solid 3px black"

// GETELEMENT BY CLASSNAME
// ADD ITEM bold and chage the font color to greeen
var addItem = document.getElementsByClassName('list-group-item')

for(let i=0; i<addItem.length; i++){
    addItem[i].style.fontWeight = 'bold'
    addItem[i].style.color = 'green'
}