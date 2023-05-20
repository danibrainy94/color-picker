const colorName = document.querySelector("#color-text");
const color = document.querySelector("#color-display");
const button = document.querySelector("#btn");
const diffColors = ["green", "blue", "red", "orange", "white", "brown", "chocolate", "crimson", "magenta", "seagreen"];

function changeColor() {
    let determinant = Math.floor(Math.random() * 10);
    color.style.backgroundColor = diffColors[determinant];

    colorName.textContent = diffColors[determinant];
}

button.addEventListener("click", changeColor);

const hexSelector = 