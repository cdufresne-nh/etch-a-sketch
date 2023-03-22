/* script.js */
const container = document.getElementById('container');
const button = document.querySelector("#gridButton");

function makeRows(rows, cols) {
    container.style.setProperty('--grid-rows', rows);
    container.style.setProperty('--grid-cols', cols);
    for ( i = 0; i < (rows * cols); i++) {
        let cell = document.createElement("div");
        container.appendChild(cell).className = "grid-item";
        cell.addEventListener('mouseover', () => {
            cell.style.backgroundColor = "black";
             })
    };
};

makeRows(16, 16);

/* if (gridSize == 0) {
    gridSizePopup();
} else {
    newGrid(gridSize);
} */

function resetGrid() {
    let allTiles = document.querySelectorAll(".grid-item");
    allTiles.forEach((element) => 
    element.style.backgroundColor = "white");
}


function gridSizePopup() {
	let gridLengthStr = prompt("Enter the number how long you want your grid","");
	let gridLength = Number(gridLengthStr);
	let gridSize = gridLength**2
	return(gridSize);
} 
