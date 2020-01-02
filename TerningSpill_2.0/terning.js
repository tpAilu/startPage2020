//jshint esversion:6


let gameOver = document.getElementById("game-over");
let cpuPlayer = document.getElementById("bot-player");
let userPlayer = document.getElementById("user-dice");

// Listen for submit
document.getElementById("button").addEventListener("click", function (e) {
	var antSpill = 0;
	var imgLoader = document.getElementById("loader");
	imgLoader.style.backgroundColor = "lightblue";
	console.log(parseInt(antSpill));

	if (antSpill === 3) {
		gameOver.innerHTML = " GAME OVER ";
	} else {
		// Show loader
		antSpill += 1;
		document.getElementById("loading").style.display = "block";
		setTimeout(terninger, 2000);

		e.preventDefault();

	}

});


function terninger() {
	// Hide loader
	document.getElementById("loading").style.display = "none";


	const submitBtn = document.getElementById("button");
	const loader = document.getElementById("loading");
	let cpuDices = document.getElementById("cpuDices");
	let playerDices = document.getElementById("playerDices");


	var random1 = Math.floor(Math.random() * 6) + 1;
	var random2 = Math.floor(Math.random() * 6) + 1;
	console.log(random1);
	console.log(random2);

	// Random image source
	var randomImageSource1 = "images/dice" + random1 + ".png";
	var randomImageSource2 = "images/dice" + random2 + ".png";

	var image1 = document.querySelectorAll("img")[0].setAttribute("src", randomImageSource1);
	var image2 = document.querySelectorAll("img")[1].setAttribute("src", randomImageSource2);

	cpuPlayer = image1;
	userPlayer = image2;


	let cpuTotal = 0;
	let playerTotal = 0;


	cpuDices.append(random1 + ", ");
	playerDices.append(random2 + ", ");

	cpuTotal += random1;
	playerTotal += random2;

	console.log(cpuTotal);
	console.log(playerTotal);


}