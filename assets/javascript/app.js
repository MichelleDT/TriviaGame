<!-- JAVASCRIPT  -->
$(document).ready(function() {

	// ******* NUMBER ARRAYS *******

	// random computer variable array
	var rand = [];

	for (var r = 1; r < 120; r++) {
		rand.push(r);
	}

	// animal numbers array
	var animals = [];

	for (var c = 1; c < 12; c++) {

		animals.push(c);
	}

	// console.log(animals);

	// ******* GLOBAL VARIABLES *******

	// random variables selected by computer
	var randNumber; // number to match
	var animalNumbers = []; // for array of random animal values

	var c1;
	var c2;
	var c3;
	var c4;

  var totalScore = 0; // user's score

	var wins = 0;
	var losses = 0;

	// ******* FUNCTIONS *******

	// pick a random number
	function pickRandomNumber(arr) {

		var x = arr[Math.floor(Math.random() * arr.length)];
		randNumber = x;
		$("#randomNumber").html(randNumber);

		console.log("random number: " + randNumber);

	} // END of pickRandomNumber function

	// pick random numbers for animals

	function pickRandomanimals(arr) {

		for (var y = 0; y < 4; y++){

			var a = arr[Math.floor(Math.random() * arr.length)];

			animalNumbers.push(a);
		}
    // check which numbers have been picked
		console.log("animal numbers: " + animalNumbers);

	} // END of pickRandomanimals function

	function animalValues(arr) {

		// change value of each animal button according to array
		for (i = 0; i < arr.length; i++) {

		$("#button-" + (i+1)).attr("value", arr[i]);
		console.log(this);
		}
		c1 = arr[0];
		c2 = arr[1];
		c3 = arr[2];
		c4 = arr[3];
	} // END of animalValues function

	function gameReset(x) {

		animalNumbers = []; // clears animal number values

		pickRandomNumber(rand);

		pickRandomanimals(animals);

		animalValues(animalNumbers);

		totalScore = 0;
		$("#totalNumber").html(totalScore);

		alert(x);
	} // END of gameReset function

	// *** GAME SETTINGS AT START ***

	pickRandomNumber(rand); // random number to match
	pickRandomanimals(animals); // array of random animal values
	animalValues(animalNumbers);

		// animal button functions

		$("#button-1").on("click", function() {

			totalScore += c1;
			$("#totalNumber").html(totalScore);
		});

		$("#button-2").on("click", function() {

			totalScore += c2;
			$("#totalNumber").html(totalScore);
		});

		$("#button-3").on("click", function() {

			totalScore += c3;
			$("#totalNumber").html(totalScore);
		});

		$("#button-4").on("click", function() {

			totalScore += c4;
			$("#totalNumber").html(totalScore);
		});

	$("button").on("click", function() {
		// this is what happens if the user wins
		if (totalScore == randNumber) {

			wins++;
			console.log(totalScore);
			$("#totalNumber").html(totalScore);
			$("#wins").html("Wins: " + wins);


			setTimeout(function() {gameReset("YOU WIN!!")}, 200);
		}

		else if (totalScore > randNumber){

			losses++;
			$("#totalNumber").html(totalScore);
			$("#losses").html("Losses: " + losses);

			setTimeout(function() {gameReset("WOMP-WOMP...YOU LOSE!")}, 200);
		}
	});

}); // end of script