//  QUERYSELECTOR //
let secondItem = document.querySelector(".list-group-item:nth-child(2)");
secondItem.style.color = "green";

let items = document.querySelectorAll("li:nth-child(odd)");

for (let i = 0; i < items.length; i++) {
  items[i].style.backgroundColor = "green";
}
