
//declaring raadio buttons to be checked
const hexValues = document.querySelector("#hex");
const simpleValues = document.querySelector("#simple");

// declaring the variables from the HTML document
const colorName = document.querySelector("#color-text");
const color = document.querySelector("#color-display");
const button = document.querySelector("#btn");
const colorText = document.querySelector(".color-text");


//array to get simple colors
const diffColors = ["Purple", "darkred", "grey", "magenta", "seagreen", "brown", "cyan", "darkgoldenrod", "crimson", "cadetblue"];
// array to get hex color combination from
const hexColors = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];


//function to get random numbers
function getRandomNum() {
    return Math.floor(Math.random() * hexColors.length);
} 


//function to specify how the hex color combination is gotten
function getHexColor () {

    //condition to specify if hex colors is checked
    if (hexValues.checked) {
        let hexColor = "#";

    //loop for getting the hex color combination randomly
    for (let i = 0; i < 6; i++) {
        hexColor += hexColors[getRandomNum()];
        console.log(hexColor);
        }

        //displaying the hex color code and the color itself
        colorName.textContent = hexColor;
        color.style.backgroundColor = hexColor;

    }
}


// fonction to get simple colors
function getSimpleColor() {
    //condition to specify if simple colors is 
    if (simpleValues.checked) {
        let shuffle = Math.floor(Math.random() * 10);
        color.style.backgroundColor = diffColors[shuffle];
        colorName.textContent = diffColors[shuffle];
    }
}


//event listener to show what happens when a button is clicked
button.addEventListener("click", getHexColor);
button.addEventListener("click", getSimpleColor);




