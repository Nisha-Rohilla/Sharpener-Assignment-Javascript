let form = document.querySelector("form");
form.addEventListener('submit', userDetails)

// access user information
let name = document.getElementById("name");
let email = document.getElementById("email");
let phone_no = document.getElementById("phone");

function userDetails(e) {
  e.preventDefault();

  // store user details in object
  let userInfo = {
    Name: name.value,
    Email: email.value,
    Phone_no: phone_no.value,
  }

  // storing userInfo into the LocalStorage 
  localStorage.setItem(JSON.stringify(email.value), JSON.stringify(userInfo));

  let user = document.getElementById('user');

 
  let table = document.getElementById('table');

   // creating new Element 
  // Table body
  let t_body = document.createElement('tbody');

  // create table row
  let t_row2 = document.createElement('tr');

  // creating table data
  let td = document.createElement('td');
  let td1 = document.createElement('td');
  let td2 = document.createElement('td');

  // append innerText in the TD
  td.innerText = e.target.name.value;
  td1.innerText = e.target.email.value;
  td2.innerText = e.target.phone.value;

  // append table data to table row-2
  t_row2.append(td, td1, td2);

  // append table row-2 to table body
  t_body.append(t_row2);

  // append Table [Body & head] in the table
  table.append(t_body);

  e.target.name.value = "";
  e.target.email.value = "";
  e.target.phone.value = "";
}
