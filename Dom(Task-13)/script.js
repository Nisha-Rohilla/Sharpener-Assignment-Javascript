let form = document.querySelector("form")
form.addEventListener("submit", myFun);

let name = document.getElementById('name');
let email = document.getElementById('email');
let phn = document.getElementById('phone');


function myFun(e) {
  e.preventDefault();
  const obj = {
    Name: name.value,
    Email: email.value,
    Phone: phn.value,
  };

  // storing data into localStorage 
  localStorage.setItem(obj.Email, JSON.stringify(obj));
  let user = document.getElementById("user");

  let table = document.getElementById("table")

  // creating table body
  let t_body = document.createElement("tbody")

  // creating table row
  let row = document.createElement("tr")

  // creating table td
  let td = document.createElement("td")
  let td2 = document.createElement("td")
  let td3 = document.createElement("td")

  // append text to the td
  td.innerText = name.value;
  td2.innerText = email.value;
  td3.innerText = phn.value;
  
  // create a Button
  let dltBtn = document.createElement('button');
  dltBtn.innerText = "Delete";
  dltBtn.addEventListener('click', dlt);

  // append td and dltbtn to row
  row.append(td, td2, td3, dltBtn);

  // append row to table body
  t_body.append(row);

  // append body to table 
  table.append(t_body);
   
  // append table to div 
  user.append(table)

  e.target.name.value ="";
  e.target.email.value = "";
  e.target.phone.value ="";

  // create dlt function 
  function dlt(e) {
    e.target.parentNode.remove();
    let obj2 = localStorage.removeItem(obj.Email);
  }

}


