/* script.js */
const container = document.querySelector('#divcontainer');
const button = document.querySelector("#gridButton");
let gridSize = 0;

function gridSizePopup() {
	let gridLengthStr = prompt("Enter the number how long you want your grid","");
	let gridLength = Number(gridLengthStr);
	let gridSize = gridLength**2
	return(gridSize);
}

for (let i = 0; i < gridSize; i++) {
    const newDiv = document.createElement('cell');
    container.appendChild(newDiv)
    newDiv.addEventListener('mouseover', () => {
    newDiv.style.backgroundColor = "black";
     })
}








