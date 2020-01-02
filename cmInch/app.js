// jshint esversion:6

// UI Elements
const inchCentimeter = document.querySelector("#inch-centimeter");
const inches = document.querySelector("#inch");
const centimeter = document.querySelector("#centimeter");
const calcBtn = document.querySelector("#calcBtn");
const message = document.querySelector(".message");
const message2 = document.querySelector(".message2");

// Assign UI Inch
const inch = 0.3937;
const cm = 2.54;

// Listen to calcBtn
calcBtn.addEventListener("click", function() {
	let inchInput = parseFloat(inches.value);
	let centInput = parseFloat(centimeter.value);
	var cmToInch = centInput * inch;
	var inchToCm = inchInput / cm;

	message.innerHTML = inchInput + " inches is " + inchToCm + " centimeters";
	message2.innerHTML = centInput + " cm is " + cmToInch + " inches";

	inches.value = "";
	centimeter.value = "";
});
