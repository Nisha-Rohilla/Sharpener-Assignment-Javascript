let form = document.querySelector("form");
form.addEventListener("submit", myFun);

let name1 = document.getElementById("name");
let email = document.getElementById("email");
let phone = document.getElementById("phone");

function myFun(e) {
  e.preventDefault();
  
  const obj = {
    Name: name1.value,
    Email: email.value,
    Phone: phone.value,
  };
  
  // Storing data into LocalStorage
  localStorage.setItem(obj.Email, JSON.stringify(obj));

  let user = document.getElementById("user");
  let table = document.getElementById("table")

  // create table body
  let tbody = document.createElement("tbody");

  // create table row
  let tr = document.createElement("tr");

  //  create table td
  let td = document.createElement("td");
  let td2 = document.createElement("td");
  let td3 = document.createElement("td");

  td.innerText = e.target.name.value;
  td2.innerText =e.target.email.value;
  td3.innerText = e.target.phone.value;

  // create Delete Button
  let deleteBtn = document.createElement("button");
  deleteBtn.innerText = "Delete";

  // Create Edit button
  let editBtn = document.createElement("button");
  editBtn.innerText = "Edit";
  
  // Add event on delete button
  deleteBtn.addEventListener("click", dltFun);
  let dlttd=document.createElement("td")
  dlttd.appendChild(deleteBtn);

  // Add event on edit button
  editBtn.addEventListener("click", editFun);
  let edittd=document.createElement("td")
  edittd.appendChild(editBtn);

  // append [td, td2, td3, deleteBtn, editBtn] into Table row
  tr.append(td, td2, td3, dlttd, edittd);

  // append table row into table body 
  tbody.append(tr);

 
  table.appendChild(tbody);
  user.appendChild(table);

  function dltFun(e) {
    e.target.parentNode.parentNode.remove();
    localStorage.removeItem(obj.Email);
  }

  function editFun(e) {
    name1.value = obj.Name;
    email.value = obj.Email;
    phone.value = obj.Phone;

    e.target.parentNode.parentNode.remove();
    localStorage.removeItem(obj.Email);

  }
  e.target.name.value="";
  e.target.email.value="";
  e.target.phone.value="";
}
