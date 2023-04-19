let form = document
  .getElementById("addForm")
  .addEventListener("submit", Myfunc);

let list = document.getElementById("items");
list.addEventListener("click", deleteItem);

function Myfunc(e) {
  e.preventDefault();
  let value = document.getElementById("item").value;
  let value2 = document.getElementById("item2").value;
  if (value === "" || value2 == "") {
    alert("please fill both inputs");
  } else {
    let li = document.createElement("li");
    li.className = "list-group-item";
    li.innerText = value + " " + value2;
    let editButton = document.createElement("button");
    editButton.innerHTML = "<span class='bi bi-pencil'></span>";
    editButton.className = "btn btn-primary btn-sm float-right mx-1 edit";
    let deleteButton = document.createElement("button");
    deleteButton.innerText = "X";
    deleteButton.className = "btn btn-danger btn-sm float-right delete";
    li.append(deleteButton, editButton);
    list.append(li);
  }
}

function deleteItem(e) {
  if (e.target.classList.contains("delete")) {
    if (confirm("Are You Sure")) {
      let li = e.target.parentElement;
      list.removeChild(li);
    }
  }
}

let filter = document.getElementById("filter");
filter.addEventListener("keyup", filterItems);

function filterItems(e) {
  let text = e.target.value.toLowerCase();
  let items = list.getElementsByTagName("li");
  console.log("items:", items);
  Array.from(items).forEach((el) => {
    let itemName = el.firstChild.textContent;
    if (itemName.toLowerCase().indexOf(text) != -1) {
      el.style.display = "block";
    } else {
      el.style.display = "none";
    }
  });
}
