var itemList = document.querySelector("#items");

// parentNode
// itemList.parentNode.style.backgroundColor = "#f4f4f4";
// console.log(itemList.parentNode.parentNode.parentNode.parentNode.parentNode);

// parentElement

// itemList.parentElement.style.backgroundColor = "coral";
// console.log(itemList.parentElement.parentElement.parentElement);

// childNodes
// console.log(itemList.childNodes);

// console.log(itemList.children);
// console.log(itemList.children[1]);
// itemList.children[1].style.backgroundColor = "yellow";

// firstChild
// console.log(itemList.firstChild);
// firstElementChild
// console.log(itemList.firstElementChild);
// itemList.firstElementChild.textContent = "hello world";

// lastChild
// console.log(itemList.lastChild);
// lastElementChild
// console.log(itemList.lastElementChild);
// itemList.lastElementChild.textContent = "hello 4";

// nextSibling
// console.log(itemList.nextSibling);
// nextElementSibling
// console.log(itemList.nextElementSibling);

// perviousSibling
// console.log(itemList.previousSibling);
// previousElementSibling
// console.log(itemList.previousElementSibling);
// itemList.previousElementSibling.style.color = "green";

// createElement

// Create a div
// let newDiv = document.createElement("div");

// Add class
// newDiv.className = "hello";

// Add id
// newDiv.id = "hello1";

// Add attr
// newDiv.setAttribute("title", "Hello Div");

// Create text node
// var newDivText = document.createTextNode("Hello");

// Add text to div
// newDiv.appendChild(newDivText);

// var container = document.querySelector("header .container");
// var h1 = document.querySelector("header h1");

// console.log(newDiv);

// newDiv.style.fontSize = "30px";

// container.insertBefore(newDiv, h1);

let newWord = document.createElement("h1");
newWord.className = "hello";
newWord.id = "hello1";
var newText = document.createTextNode("Hello");
newWord.appendChild(newText);
var container = document.querySelector("ul .list-group-item:nth-child(1)");
var h1 = document.querySelector("ul h1");
newWord.style.fontSize = "30px";
container.insertBefore(newWord, h1);
// item.insertBefore(newDiv);
