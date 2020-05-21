const container = document.getElementById("container");

function makeRows(rows, cols) {
    container.style.setProperty("--grid-rows", rows);
    container.style.setProperty('--grid-cols', cols);

    for (let i = 0; i < (rows * cols); i++) {
        let cell = document.createElement("div");
        container.appendChild(cell).className = "grid-item";
    };
};

makeRows(12, 12);

const gridSelect = document.querySelector('.grid-item');
const gridBoxes = document.querySelectorAll('.grid-item');

gridBoxes.forEach((gridSelect) => {

    gridSelect.addEventListener("mouseover", function (event) {

        gridSelect.style.backgroundColor = '#'+Math.floor(Math.random()*16777215).toString(16);
    });

});


