// Selectors
const container = document.getElementById("container");
const multibtn = document.getElementById("multibtn");
const erasebtn = document.getElementById("erasebtn");
const colorPicker = document.getElementById("colorPicker");


// grid making method
function makeRows(rows, cols) {
    container.style.setProperty("--grid-rows", rows);
    container.style.setProperty('--grid-cols', cols);

    for (let i = 0; i < (rows * cols); i++) {
        let cell = document.createElement("div");
        container.appendChild(cell).className = "grid-item";
    }
    ;
};

makeRows(12, 12);

// changes color of grid boxes when hovered over
function change(color) {
    const gridSelect = document.querySelector('.grid-item');
    const gridBoxes = document.querySelectorAll('.grid-item');

    gridBoxes.forEach((gridSelect) => {


        gridSelect.addEventListener("mouseover", function (event) {

            gridSelect.style.backgroundColor = color;
        });
    });
}

//default set color
change("black");

// listener for color wheel
if (colorPicker) {
    colorPicker.addEventListener("change", watchColorPicker, false);
}

// if user changes color wheel this method applies the change
function watchColorPicker(event) {
    change(event.target.value)
}

// on click chooses random color for you
multibtn.addEventListener("click", () => {
    change('#' + Math.floor(Math.random() * 16777215).toString(16));
});
// on click turns squares back white
erasebtn.addEventListener("click", () => {
    change("white");
})
