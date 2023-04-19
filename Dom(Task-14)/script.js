let form = document.querySelector("form").addEventListener("submit", myFun);

function myFun(e) {
  e.preventDefault();
  e.preventDefault();
  let name = e.target.name;
  let email = e.target.email;
  let pho = e.target.phone;

  const obj = {
    name: name.value,
    email: email.value,
    pho: pho.value,
  };
  localStorage.setItem(obj.email, JSON.stringify(obj));
  let user = document.getElementById("user");
  let table = document.createElement("table");
  let thead = document.createElement("thead");
  let tbody = document.createElement("tbody");
  let deleteBtn = document.createElement("button");
  let editBtn = document.createElement("button");
  deleteBtn.innerText = "Delete";
  editBtn.innerText = "Edit";
  editBtn.style.margin = "12px";
  deleteBtn.addEventListener("click", dltFun);
  editBtn.addEventListener("click", editFun);
  let tr = document.createElement("tr");
  let tr2 = document.createElement("tr");
  let th = document.createElement("th");
  let th2 = document.createElement("th");
  let th3 = document.createElement("th");
  let td = document.createElement("td");
  let td2 = document.createElement("td");
  let td3 = document.createElement("td");
  td.innerText = name.value;
  td2.innerText = email.value;
  td3.innerText = pho.value;
  tr2.append(td, td2, td3);
  tbody.append(tr2);
  th.innerText = "Name";
  th2.innerText = "Email";
  th3.innerText = "Phone-No";
  tr.append(th, th2, th3, deleteBtn, editBtn);
  thead.append(tr);
  table.append(thead, tbody);
  user.append(table);

  function dltFun(e) {
    e.target.parentNode.remove();
    table.style.display = "none";
    localStorage.removeItem(obj.email);
  }

  function editFun(e) {
    e.target.parentNode.remove();
    table.style.display = "none";
    let obj2 = JSON.parse(localStorage.getItem(obj.email));
    name.value = obj2.name;
    email.value = obj2.email;
    pho.value = obj2.pho;
  }
}
