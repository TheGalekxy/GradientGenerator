var css = document.querySelector("h3");
var color1 = document.querySelector(".color1"); // selects the "color1" class in the document
var color2 = document.querySelector(".color2");	// selects the "color2" class in the document
var body = document.getElementById("gradient"); 
let color1Value = color1.value;	// saves the value of color1 into a variable
let color2Value = color2.value;	// saves the value of color2 into a variable
let bodyBackground = `linear-gradient(to right, ${color1Value}, ${color2Value})`; // hold the variables of the gradient with the text in a single variable


function setGradient() {
	
	color1Value = color1.value;	// sets the color1Value to be the new value inputed through the selector on screen
	color2Value = color2.value; // sets the color2Value to be the new value inputed through the selector on screen
	bodyBackground = `linear-gradient(to right, ${color1Value}, ${color2Value})`; // sets the value of bodyBackground to whatever the selector is choosing
	css.textContent = bodyBackground; // changes the textContent of the h3 displaying the current css background to whatever is being selected (body background)
	document.body.style.background = bodyBackground; // changes the background colour based on the colour values held in bodyBackground(color1Value & color2Value)

}

color1.addEventListener("input", setGradient);

color2.addEventListener("input", setGradient);

// 1. Write code so that the colour inputs match the background generated on the first page load. 

document.body.style.background = bodyBackground; // changes the background colour based on the colour values held in test(color1Value & color2Value)

// 2. Display the initial CSS linear gradient property on page load.

css.textContent = bodyBackground; // displays the initial colors for the gradient

// 3. BONUS: Add a random button which generates two random numbers for the colour inputs.

let btn = document.createElement("button");			// a variable to hold the creation of a button
btn.innerHTML = "Randomize";                        // gives the button the text of "Randomize"
body.appendChild(btn);								// adds the button to the end of the body

function randomColor() {								// randomizes hex values
	let color = "#";
	for(i = 0; i < 6; i++) {
		color += Math.floor((Math.random() * 16)).toString(16);
		console.log(color)
	}
	return color;
}

btn.addEventListener("click", function() {
	let randomColor1 = randomColor();	// stores a random colour value into a variable
	let randomColor2 = randomColor(); 	// stores a second random colour value into another variable

	color1.value = randomColor1;		// changes the "value" on the html tag name "color1" to the variable of randomColor1
	color2.value = randomColor2;		// changes the "value" on the html tag name "color2" to the variable of randomColor2

	color1Value = color1.value;			// updates the "color1Value" variable to the new color1.value
	color2Value = color2.value;			// updates the "color2Value" variable to the new color2.value

    bodyBackground = `linear-gradient(to right, ${color1Value}, ${color2Value})`; // sets the value of bodyBackground to whatever the selector is choosing
	css.textContent = bodyBackground; // changes the textContent of the h3 displaying the current css background to whatever is being selected (body background)
	document.body.style.background = bodyBackground; // changes the background colour based on the colour values held in bodyBackground(color1Value & color2Value)        

});