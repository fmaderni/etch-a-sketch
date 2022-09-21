const grid = document.querySelector('.grid');
const resetButton = document.querySelector('.reset');
const slider = document.querySelector('.slider');

function createGrid(num) {
    let area = num * num;
    for (let i = 0; i <= area; i++) {
        let box = document.createElement('div');
        box.classList.add('box');
        grid.style.gridTemplateColumns = `repeat(${num}, 1fr)`
        grid.style.gridTemplateRows = `repeat(${num}, 1fr)`
        grid.appendChild(box)
    }
    const divs = document.querySelectorAll('.box');
    divs.forEach(div => {
        div.addEventListener('mouseover', (event) => {
            event.target.style.backgroundColor = '#000000';

        });
    });
};

createGrid(slider.value);

function changeSize(){
    grid.innerHTML = "";
    createGrid(slider.value);
};

function clearGrid(){
    var box = grid.querySelectorAll('div');
    box.forEach(pixel => pixel.style.backgroundColor = '#FFFFFF');
};

slider.addEventListener('mouseup', changeSize);
resetButton.addEventListener('click', clearGrid);

