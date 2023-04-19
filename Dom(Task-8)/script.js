let form = document.getElementById("addForm");
let itemList = document.getElementById("items");

// Form submit event
form.addEventListener("submit", addItem);
// Delete event
itemList.addEventListener("click", removeItem);

// Add Item
function addItem(e) {
  e.preventDefault();

  // Get input value
  var newItem = document.getElementById("item").value;

  // create new li element
  var li = document.createElement("li");
  // Add class
  li.className = "list-group-item";
  //   Add text node with input value
  li.appendChild(document.createTextNode(newItem));

  //   create dlt button
  let dlt = document.createElement("button");

  //   Add classes to del button
  dlt.className = "btn btn-danger btn-sm float-right delete";
  //   Append text node
  dlt.appendChild(document.createTextNode("X"));

  // Append button to li
  li.appendChild(dlt);

  // Append li to list
  itemList.appendChild(li);
}

// removeItem
function removeItem(e) {
  if (e.target.classList.contains("delete")) {
    if (confirm("Are You Sure?")) {
      var li = e.target.parentElement;
      itemList.removeChild(li);
    }
  }
}
