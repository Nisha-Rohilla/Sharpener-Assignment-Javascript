let myFunc = (e) =>{
  e.preventDefault();

  // taking value from Input 
  let value = document.getElementById('item').value;
  let value2 = document.getElementById('item2').value;

  // make-sure both input have value
  if(value ==="" && value=== ""){
    alert('please fill both inputs')
  }

  // When both inputs have value
  else{
    let li = document.createElement('li');
    // Add a class
    li.className = "list-group-item";
    // create Textnode
    let liText = document.createTextNode(`${value} ${value2}`);
    li.appendChild(liText);

    // Create edit button
    let editBtn = document.createElement('button');
    editBtn.className = "btn btn-primary btn-sm float-right mx-1 edit";
    editBtn.innerHTML= `<span class='bi bi-pencil'></span>`

    // Create Delete button
    let dltBtn = document.createElement('button');
    dltBtn.className = "btn btn-danger btn-sm float-right delete";
    let dltBtnText = document.createTextNode('X')
    dltBtn.appendChild(dltBtnText);

    // Append edit and delete button to li 
    li.append(dltBtn,editBtn)
    list.appendChild(li)
  }
}


// remove Item from list
let deleteItem = (e) =>{
  if(e.target.classList.contains('delete')){
    if(confirm('Are you sure')){
      let li = e.target.parentElement;
      list.removeChild(li)
    }
  }
}

// serach item in list (it is present or not)
let filterItem =(e)=>{
  let text = e.target.value.toLowerCase()
  let items = list.getElementsByTagName('li');

  // convert to an array
  Array.from(items).forEach(function(e){
    let itemName = e.firstChild.textContent;
    // console.log(itemName);
    if(itemName.toLocaleLowerCase().indexOf(text) != -1){
      e.style.display ="block"
    }
    else{
      e.style.display ="none"
    }
  })
}

// add event
let form = document.getElementById('addForm');
form.addEventListener('submit' , myFunc);

// delete event
let list = document.getElementById('items');
list.addEventListener('click', deleteItem);

// filter event
let filter = document.getElementById('filter')
filter.addEventListener('keyup' , filterItem);
