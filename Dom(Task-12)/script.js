let form = document.querySelector("form").addEventListener("submit", myFun);

function myFun(e) {
  e.preventDefault();
  let name = document.getElementById("name");
  let email = document.getElementById("email");
  let phone = document.getElementById("phone");

  let userDeatils = {
    Name: name.value,
    Email: email.value,
    Phone: phone.value,
  };

  localStorage.setItem(
    JSON.stringify(email.value),
    JSON.stringify(userDeatils)
  );
  let user = document.getElementById("user");
  let table = document.createElement("table");
  let thead = document.createElement("thead");
  let tbody = document.createElement("tbody");
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
  td3.innerText = phone.value;
  tr2.append(td, td2, td3);
  tbody.append(tr2);
  th.innerText = "Name";
  th2.innerText = "Email";
  th3.innerText = "Phone-No";
  tr.append(th, th2, th3);
  thead.append(tr);
  table.append(thead, tbody);
  user.append(table);
}
