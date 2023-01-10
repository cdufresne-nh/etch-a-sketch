/* script.js */
const container = document.querySelector('#divcontainer');

for (let i = 0; i <=255; i++) {
    const newDiv = document.createElement('cell');
    container.appendChild(newDiv)
    newDiv.addEventListener('mouseover', () => {
    newDiv.style.backgroundColor = "black"
    })
}









