//  QUERYSELECTOR //

// the 2nd item have green background color
let secondItem = document.querySelector('.list-group-item:nth-child(2)');
// secondItem.style.backgroundColor = "green"

// the 3rd item invisible
let thirdItem = document.querySelector('.list-group-item:nth-child(3)');
// thirdItem.style.display = "none"

// QUERYSELECTORALL

let secondli = document.querySelectorAll('li')
// change the font color to green for 2nd item in the item list
secondli[1].style.color = "green";

let oddElement = document.querySelectorAll('li:nth-child(odd)');

// Odd Elements background color(Green)
for(let i=0; i<oddElement.length; i++){
  oddElement[i].style.backgroundColor = 'green';
}
