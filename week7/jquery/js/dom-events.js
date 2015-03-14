var targetDiv = document.getElementById("mousey");
var hiddenDiv = document.getElementById("hidden");

//change the class when the mouse enters

// targetDiv.onmouseover = function () {
// 	targetDiv.classList.remove('red'); //telling code to modify the class
// 	targetDiv.classList.add('blue');
// }

// //You can toggle a class on an off every time you mouse over
// targetDiv.onmouseover = function () {
// 	targetDiv.classList.toggle ('red');
// }


//Turn the red off when mouse enters
//turn the red back on when the mouse leaves
// targetDiv.onmouseover = function () {
// 	targetDiv.classList.remove('red');
// }

// targetDiv.onmouseout = function () {
// 	targetDiv.classList.add('red');
// }

//Why use js instead of css?

var peopleToDisplay = [];
peopleToDisplay.push("Robert Johnson");
peopleToDisplay.push("John Lee Hooker");
peopleToDisplay.push("T-Bone Walker");
peopleToDisplay.push("Muddy Waters");
peopleToDisplay.push("Big Mama Thornton");
peopleToDisplay.push("Robert Cray");


targetDiv.onmouseover = function () {
	hiddenDiv.classList.toggle('hide');
	hiddenDiv.innerHTML = peopleToDisplay.join("<br/>");

}

targetDiv.onmouseout = function () {
	hiddenDiv.classList.add('hide');
}

targetDiv.onclick = function () {
	(alert("Hello, World"));
}