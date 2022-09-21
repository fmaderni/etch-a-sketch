const grid = document.querySelector('.grid');
const resetButton = document.querySelector('.reset');
const slider = document.querySelector('.slider');
const blackButton = document.querySelector('.black');
const rainButton = document.querySelector('.rainbow');
let size = document.querySelector('.size');
var color = 'black';

function createGrid(num) {
    let area = num * num;
    for (let i = 0; i <= area; i++) {
        let box = document.createElement('div');
        box.classList.add('box');
        grid.style.gridTemplateColumns = `repeat(${num}, 1fr)`
        grid.style.gridTemplateRows = `repeat(${num}, 1fr)`
        grid.appendChild(box)
        box.addEventListener('mouseover', setColor);
    }
};

createGrid(slider.value);

function changeSize() {
    grid.innerHTML = "";
    createGrid(slider.value);
};

function clearGrid() {
    var box = grid.querySelectorAll('div');
    box.forEach(pixel => pixel.style.backgroundColor = '#FFFFFF');
};

function changeColor(choice) {
    color = choice;
    return color;
};

function setColor() {
    if (color === "random") {
        this.style.backgroundColor = `hsl(${Math.random() * 360}, 100%, 50%)`;
    } else {
        this.style.backgroundColor = "#000000";
    }
};

function displaySize(value) {
    size.innerText = `${value} x ${value}`;
};



slider.onmousemove = (e) => displaySize(e.target.value);
slider.addEventListener('mouseup', changeSize);
resetButton.addEventListener('click', clearGrid);


