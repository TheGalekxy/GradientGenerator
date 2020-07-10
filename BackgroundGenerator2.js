var css = document.querySelector("h3");
var color1 = document.querySelector(".color1"); // selects the "color1" class in the document
var color2 = document.querySelector(".color2");	// selects the "color2" class in the document
var body = document.getElementById("gradient"); 
let color1Value = color1.value;	// saves the value of color1 into a variable
let color2Value = color2.value;	// saves the value of color2 into a variable
let gradientType = 'linear-gradient(to right, ';
let bodyBackground = `${gradientType}${color1Value}, ${color2Value})`; // hold the variables of the gradient with the text in a single variable
let div = document.querySelector('div');
let radio = document.querySelectorAll("#radio");



function setGradient() {
	
	color1Value = color1.value;	// saves the value of color1 into a variable
	color2Value = color2.value;	// saves the value of color2 into a variable
	bodyBackground = `${gradientType} ${color1Value}, ${color2Value})`; // sets the value of bodyBackground to whatever the selector is choosing
	css.textContent = bodyBackground; // changes the textContent of the h3 displaying the current css background to whatever is being selected (body background)
	document.body.style.background = bodyBackground; // changes the background colour based on the colour values held in bodyBackground(color1Value & color2Value)

}

color1.addEventListener("input", setGradient);

color2.addEventListener("input", setGradient);

// 1. Write code so that the colour inputs match the background generated on the first page load. 

document.body.style.background = bodyBackground; // changes the background colour based on the colour values held in test(color1Value & color2Value)

// 2. Display the initial CSS linear gradient property on page load.

css.textContent = bodyBackground; // displays the initial colors for the gradient
css.addEventListener('click', function() {

	document.execCommand('copy');
	window.alert("text copied!");
})

css.addEventListener("copy", function(event) {
	event.preventDefault();
	if (event.clipboardData) {
	  event.clipboardData.setData("text/plain", css.textContent);
	  console.log(event.clipboardData.getData("text"))
	}
  });

// 3. BONUS: Add a random button which generates two random numbers for the colour inputs.

let btn = document.createElement("button");			// a variable to hold the creation of a button
btn.innerHTML = "Randomize Both Colours";                        // gives the button the text of "Randomize"
body.appendChild(btn);							// adds the button to the end of the body

function randomColor() {								// randomizes hex values
	let color = "#";
	for(i = 0; i < 6; i++) {
		color += Math.floor((Math.random() * 16)).toString(16);
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

    bodyBackground = `${gradientType} ${color1Value}, ${color2Value})`; // sets the value of bodyBackground to whatever the selector is choosing
	css.textContent = bodyBackground; // changes the textContent of the h3 displaying the current css background to whatever is being selected (body background)
	document.body.style.background = bodyBackground; // changes the background colour based on the colour values held in bodyBackground(color1Value & color2Value)        

});

// Button #2 - Which Swaps The Colours

btn = document.createElement("button");			// a variable to hold the creation of a button
btn.innerHTML = "Swap Colours";                        // gives the button the text of "Randomize"
body.appendChild(btn);							// adds the button to the end of the body

btn.addEventListener("click", function() {

	let tempColor1 = color1.value;

	color1Value = color2.value;			// updates the "color1Value" variable to the new color1.value
	color2Value = tempColor1;			// updates the "color2Value" variable to the new color2.value
	
	color1.value = color1Value;
	color2.value = color2Value;

	setGradient();

});

// Button #3 - Ramdomizes The Left Colour

btn = document.createElement("button");			// a variable to hold the creation of a button
btn.innerHTML = "Randomize Colour #1";                        // gives the button the text of "Randomize"
body.appendChild(btn);							// adds the button to the end of the body

btn.addEventListener("click", function() {

	let randomColor1 = randomColor();	// stores a random colour value into a variable

	color1.value = randomColor1;		// changes the "value" on the html tag name "color1" to the variable of randomColor1

	setGradient();

});

// Button #4 - Ramdomizes The Right Colour

btn = document.createElement("button");			// a variable to hold the creation of a button
btn.innerHTML = "Randomize Colour #2";                        // gives the button the text of "Randomize"
body.appendChild(btn);							// adds the button to the end of the body

btn.addEventListener("click", function() {

	let randomColor2 = randomColor();	// stores a random colour value into a variable

	color2.value = randomColor2;		// changes the "value" on the html tag name "color2" to the variable of randomColor2

	setGradient();

});


// Radio Button #1 - Horizontal
let input = document.createElement("INPUT");
let label = document.createElement("label");
label.setAttribute('for', 'horizontal' );
input.setAttribute('type', 'radio');
input.setAttribute('id', 'horizontal');
input.setAttribute('name', 'gradientStyle');
input.setAttribute('value', 'horizontal');
input.setAttribute('checked', 'checked');
label.innerHTML = "Horizontal";
input.addEventListener("click", function() {
	gradientType = 'linear-gradient(to right,';
	setGradient();
});
div.appendChild(input);		              
div.appendChild(label);


// Radio Button #2 - Verticle
input = document.createElement("INPUT");
label = document.createElement("label");
label.setAttribute('for', 'verticle' );
input.setAttribute('type', 'radio');
input.setAttribute('id', 'verticle');
input.setAttribute('name', 'gradientStyle');
input.setAttribute('value', 'verticle');
label.innerHTML = "Verticle";
input.addEventListener("click", function() {
	gradientType = 'linear-gradient(';
	setGradient();
});
div.appendChild(input);		              
div.appendChild(label);	

// Radio Button #3 - Radial
input = document.createElement("INPUT");
label = document.createElement("label");
label.setAttribute('for', 'radial' );
input.setAttribute('type', 'radio');
input.setAttribute('id', 'radial');
input.setAttribute('name', 'gradientStyle');
input.setAttribute('value', 'radial');
label.innerHTML = "Radial";
input.addEventListener("click", function() {
	gradientType = 'radial-gradient(';
	setGradient();
});
div.appendChild(input);		              
div.appendChild(label);	

// Radio Button #4 - Diagonal Left to Right
input = document.createElement("INPUT");
label = document.createElement("label");
label.setAttribute('for', 'diagL2R' );
input.setAttribute('type', 'radio');
input.setAttribute('id', 'diagL2R');
input.setAttribute('name', 'gradientStyle');
input.setAttribute('value', 'diagL2R');
label.innerHTML = "Diagonal - Left to Right";
input.addEventListener("click", function() {
	gradientType = 'linear-gradient(to bottom right,';
	setGradient();
});
div.appendChild(input);		              
div.appendChild(label);	

// Radio Button #5 - Diagonal Right to Left
input = document.createElement("INPUT");
label = document.createElement("label");
label.setAttribute('for', 'diagR2L' );
input.setAttribute('type', 'radio');
input.setAttribute('id', 'diagR2L');
input.setAttribute('name', 'gradientStyle');
input.setAttribute('value', 'diagR2L');
label.innerHTML = "Diagonal - Right to Left";
input.addEventListener("click", function() {
	gradientType = 'linear-gradient(to bottom left,'; 
	setGradient();
});
div.appendChild(input);		              
div.appendChild(label);	

