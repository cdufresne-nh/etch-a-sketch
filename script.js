/* script.js */
const container = document.querySelector('#divcontainer');


function addElement() {
  for (let i = 0; i <=255; i++) 
    {const newDiv = document.createElement('cell');
     newDiv.textContent= i;
    divcontainer.appendChild(newDiv)
   
}}
addElement();

const newCell = document.querySelector('cell')

newCell.addEventListener('mouseover', hover()); 

function hover(){
  newCell.setAttribute('style', 'background-color:black;')
}
