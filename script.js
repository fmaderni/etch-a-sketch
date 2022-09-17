const grid = document.querySelector('.grid');

function createGrid(num) {
    for (let i = 0; i < num; i++) {
        const row = document.createElement('div');
        row.classList.add('grid-row');

        for (let j = 0; j < num; j++) {
            const gridBox = document.createElement('div');
            gridBox.classList.add('box');
            row.appendChild(gridBox);
        }
        grid.appendChild(row);
    }
}

createGrid(16);
