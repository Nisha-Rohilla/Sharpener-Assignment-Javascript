let form = document.querySelector("form").addEventListener("submit", myFun);

function myFun(e) {
  e.preventDefault();
  let name = e.target.Uname.value;
  let email = e.target.Uemail.value;
  let pho = e.target.Unumber.value;

  const obj = {
    name,
    email,
    pho,
  };
  localStorage.setItem(obj.email, JSON.stringify(obj));
  let user = document.getElementById("user");
  let li = document.createElement("li");
  let dltbtn = document.createElement("button");
  dltbtn.innerText = "DELETE";
  dltbtn.addEventListener("click", dltBtn);

  function dltBtn(e) {
    e.target.parentNode.remove();
    let obj2 = localStorage.removeItem(obj.email);
  }

  li.innerText = obj.name + " " + obj.email + " " + obj.pho;
  li.append(dltbtn);
  user.append(li);
}
