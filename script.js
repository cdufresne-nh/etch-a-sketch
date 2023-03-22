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

function resetGrid() {
    let allTiles = document.querySelectorAll(".grid-item");
    allTiles.forEach((element) => element.style.backgroundColor = "white");
}

function deleteGrid() {
    container.removeChild.classname = "grid-item";
}

function gridSizePopup() {
    deleteGrid();
    resetGrid();
	let gridLengthStr = prompt("Enter the number of how long you want your grid to be","");
	let gridLength = Number(gridLengthStr);
	let gridSize = gridLength**2;
    makeRows(gridLength, gridLength);
	
} 
