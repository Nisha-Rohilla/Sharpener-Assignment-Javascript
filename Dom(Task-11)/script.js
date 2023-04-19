let form = document.querySelector("form").addEventListener("submit", myfun);
function myfun(e) {
  e.preventDefault();
  let inputName = document.querySelector("#name");
  let inputEmail = document.querySelector("#email");
  let inputNumber = document.querySelector("#number");

  if (
    inputName.value === "" ||
    inputEmail.value === "" ||
    inputNumber.value === ""
  ) {
    alert("Please Fill All credentials");
  } else {
    let userDetails = {
      Name: inputName.value,
      Email: inputEmail.value,
      Phone: inputNumber.value,
    };

    localStorage.setItem("userDetails", JSON.stringify(userDetails));

    alert("Registration Done Please Check Local Storage");
    inputName.value = " ";
    inputEmail.value = " ";
    inputNumber.value = " ";
  }

  console.log(JSON.parse(localStorage.getItem("userDetails")));
}
