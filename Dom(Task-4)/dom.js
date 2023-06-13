let items = document.getElementsByClassName('list-group-item')

// the 3 rd element in the list have green background color
items[2].style.backgroundColor = "green"

//  all the elements in the list have bold color font

for(let i=0; i<items.length; i++){
  items[i].style.fontWeight = "bold";
}
