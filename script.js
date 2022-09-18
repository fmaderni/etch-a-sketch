const grid = document.querySelector('.grid');
let sizeOfGrid = 100;

function createGrid(num) {
    let area = num * num;
    for (let i = 0; i <= area; i++) {
        let box = document.createElement('div');
        box.classList.add('box');
        grid.style.gridTemplateColumns = `repeat(${num}, 1fr)`
        grid.style.gridTemplateRows = `repeat(${num}, 1fr)`
        grid.appendChild(box)
    }
}
createGrid(sizeOfGrid);
