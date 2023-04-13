// console.dir(document);
// console.log(document.domain);
// console.log(document.URL);
// console.log(document.timeline);
// console.log(document.title);
// // document.title = "Learning Dom";

// console.log(document.doctype);
// console.log(document.head);
// console.log(document.body);
// console.log(document.all);
// console.log(document.all[10]);
// // document.all[10].textContent = "hello";
// console.log(document.forms);
// console.log(document.forms[0]);
// console.log(document.links);

// #########################
// Selectors(GETELEMENTBYID)

// console.log(document.getElementById("header-title"));

var headerTitle = document.getElementById("header-title");
var header = document.getElementById("main-header");
console.log(headerTitle);
// headerTitle.innerText = "Goodbye";
// headerTitle.textContent = "Hello";
// console.log(headerTitle.innerHTML);
// headerTitle.innerHTML = "<h3>Hello</h3>";
header.style.borderBottom = "solid 4px black";
// item.style.color = "green";
let items = document.getElementsByClassName("list-group-item");
items[0].style.fontWeight = "bold";
items[1].style.fontWeight = "bold";
items[2].style.fontWeight = "bold";
items[3].style.fontWeight = "bold";

items[0].style.color = "green";
items[1].style.color = "green";
items[2].style.color = "green";
items[3].style.color = "green";
