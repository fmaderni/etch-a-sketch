const grid = document.querySelector('.grid');
let resetButton = document.querySelector('.reset');
let sizeOfGrid = 20;

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

const divs = document.querySelectorAll('.box')

divs.forEach(div => {
    div.addEventListener('mouseover', (event) => {
        event.target.style.backgroundColor = '#000000';
    });
});


resetButton.addEventListener('click', function(){
    window.location.reload();
});
