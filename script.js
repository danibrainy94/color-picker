const simpleValues = document.querySelector(".simple")
const hexValues = document.querySelector(".hex")

const colorName = document.querySelector("#color-text");
const color = document.querySelector("#color-display");
const button = document.querySelector("#btn");
const diffColors = ["Amaranth Purple", "Barn red", "Bittersweet", "Flame", "Wenge", "Dark moss green", "Process cyan", "Antique white", "Mint", "Sinopia"];



// selecting the color type 



const hexColors = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];
function getRandomNum() {
    return Math.floor(Math.random() * hexColors.length);
} 

function getHexColor () {

    if (hexValues == "clicked") {
        let hexColor = "#";

    for (let i = 0; i < 6; i++) {
        hexColor += hexColors[getRandomNum()];
        console.log(hexColor);
        }
        colorName.textContent = hexColor;
        color.style.backgroundColor = hexColor;

    }
    }

function getSimpleColor() {
    if (simpleValues == "clicked") {
        let determinant = Math.floor(Math.random() * 10);
        color.style.backgroundColor = diffColors[determinant];
        colorName.textContent = diffColors[determinant];
    }
}



button.addEventListener("click", getHexColor);
button.addEventListener("click", getSimpleColor);




