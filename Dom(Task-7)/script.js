// PARENTNODE
let item = document.getElementById('items')
console.log(item.parentNode.parentNode.parentNode)
item.parentNode.style.backgroundColor = "gray"

// PARENTELEMENT
let item = document.querySelector('#items');
console.log(item.parentElement.parentElement.parentElement);
item.parentElement.style.backgroundColor = "Coral"

// CHILDNODE
console.log(item.childNodes);

// CHILDREN
console.log(item.children);
item.children[1].style.backgroundColor = "skyblue"

// FIRSTCHILD
console.log(item.firstChild);

// FIRSTELEMENTCHILD 
console.log(item.firstElementChild);
item.firstElementChild.textContent = "Hello"

// LASTCHILD
console.log(item.lastChild)

// LASTELEMENTCHILD
console.log(item.lastElementChild)
item.lastElementChild.textContent = "Hello-4"

// SIBLING
// nextSibling
console.log(item.nextSibling);

// nextElementSibling
console.log(item.nextElementSibling);

// previousSibling
console.log(item.previousSibling);

// previousElementSIbling
console.log(item.previousElementSibling);
item.previousElementSibling.style.color ="green"

// Create Element
// create a div
var newDiv = document.createElement('div')
console.log(newDiv);

// Add a Class
newDiv.className = 'Hello';

// Add a Id
newDiv.id ='Hello-1'

// Add Attribute
newDiv.setAttribute('title' , 'Hello Div')
newDiv.style.fontSize = '30px';
newDiv.style.fontWeight ='bold'

// Create a TextNode
var newDivText = document.createTextNode("Hello world");

// Add Text to div
newDiv.appendChild(newDivText)

var container = document.querySelector('header .container');
let heding = document.querySelector('header h1')

container.insertBefore(newDiv,h1)


// Task 
// go head and add HEllo word before Item Lister
let container = document.querySelector('header .container')
let h1 = document.querySelector('header h1')
let newElement = document.createElement('p');
let newText = document.createTextNode('Hello');
newElement.appendChild(newText);
container.insertBefore(newElement,h1)

// Now go head and add HEllo word before Item 1
let list = document.querySelector('ul');
let item_1 = document.querySelector('ul .list-group-item:nth-child(1)');
list.insertBefore(newElement,item_1);

