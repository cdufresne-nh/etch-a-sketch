/* script.js */
const container = document.getElementById("container");
const button = document.querySelector("#gridButton");

function makeRows(rows, cols) {
    container.style.setProperty("--grid-rows", rows);
    container.style.setProperty("--grid-cols", cols);
    for ( i = 0; i < (rows * cols); i++) {
        let cell = document.createElement("div");
        container.appendChild(cell).className = "grid-item";
        cell.addEventListener("mouseover", () => {
            cell.style.backgroundColor = "black";
             })
    };
};

makeRows(16, 16);

function resetGrid() {
    let allTiles = document.querySelectorAll(".grid-item");
    allTiles.forEach((element) => element.style.backgroundColor = "white");
}



function gridSizePopup() {
    container.replaceChildren();
	let gridLengthStr = prompt("How many columns do you want your sketch to be?","");
	let gridLength = Number(gridLengthStr);
	if (gridLength < 1) {
        alert("Sketch is too small, pick a larger number");
        gridSizePopup();
    } else if (gridLength > 100) {
        alert("Sketch is too big, pick a smaller number");
        gridSizePopup();
    } else {
        makeRows(gridLength, gridLength);
    }
} 

    
	

