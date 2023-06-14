let form = document.getElementById('addForm');
let items = document.getElementById('items');


function addItem(e){
  e.preventDefault();

  let newItem = document.getElementById('item').value;

  // create a [li]
  let li = document.createElement('li');
  li.className = 'list-group-item';
  li.appendChild(document.createTextNode(newItem));

  // create a button [Delete Button]
  let dlt = document.createElement('button');
  dlt.className = 'btn btn-danger btn-sm float-right delete';
  dlt.appendChild(document.createTextNode('X'));

  // Create a edit button [Edit Button]
  let edit = document.createElement('button')
  edit.className = 'btn btn-sm float-right edit';
  edit.appendChild(document.createTextNode('Edit'))

  // append Delete & Edit Button to created Li
  li.appendChild(dlt);
  li.appendChild(edit);

  // Append created Li to ItemList
  items.appendChild(li);
}

function removeItem(e) {
  if (e.target.classList.contains('delete')){
     if(confirm('Are you sure')){
      var li = e.target.parentElement;
      items.removeChild(li); 
     }
  }
}



form.addEventListener('submit' , addItem);
items.addEventListener('click' , removeItem)
