const colorName = document.querySelector("#color-text");
const color = document.querySelector("#color-display");
const button = document.querySelector("#btn");
const diffColors = ["Amaranth Purple", "Barn red", "Bittersweet", "Flame", "Wenge", "Dark moss green", "Process cyan", "Antique white", "Mint", "Sinopia"];

// hexColors = ["#AB274F", "#7C0902", "#FE6F5E", "#E25822", "#645452", "#4A5D23", "#00B7EB", "#FAEBD7", "#3EB489", "#CB410B",];

function changeColor() {
    let determinant = Math.floor(Math.random() * 10);
    color.style.backgroundColor = diffColors[determinant];

    colorName.textContent = diffColors[determinant];
}

button.addEventListener("click", changeColor);