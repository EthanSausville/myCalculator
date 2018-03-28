/* ===================================================================================
	Comments
=================================================================================== */
// Code by Ethan Sausville
// Version 1.0
// Released 3/28/18
// Github: https://github.com/EthanSausville/myCalculator

// Known Bugs:
// - 	Multiple decimal points can be placed in a number
//		that number will not compute
// - 	Answer can be placed immediately beside another number
//		the result will concatenate the numbers into a new number





/* ===================================================================================
	Global Variables
=================================================================================== */
var calculationString = "";
var htmlString = "";
var parenthesisSwitch = true;
var answer;




/* ===================================================================================
	Functions to run on page load
=================================================================================== */

javascriptCSS();




/* ===================================================================================
	CSS Functions
=================================================================================== */

function javascriptCSS() {
	// Sets the height of the boxes equal to the width responsively
	var colWidth = $(".btn").width();
	$(".btn").css("height", (colWidth + 2) + "px");
	
	$("#input").css("height", (colWidth * 1.5) + "px");
	$("#output").css("height", (colWidth * .5) + "px");
}




/* ===================================================================================
	Button Functions
=================================================================================== */

function numberButton(thisValue) {
	htmlString += "<span>" + thisValue.value + "</span>";
	document.getElementById('input').innerHTML = htmlString;
	
	calculationString += thisValue.value;
}

function operatorButton(thisValue) {
	if (htmlString === "") answerButton();
	
	var lastItem = calculationString.substr(calculationString.length - 1, calculationString.length);
	if (lastItem == "*" || lastItem == "/" || lastItem == "+" || lastItem == "-") deleteButton();
	
	htmlString += "<span class=\"txt-normal\"> " + returnHtmlSpecialCharCode(thisValue.value) + " </span>";
	document.getElementById('input').innerHTML = htmlString;
	calculationString += thisValue.value;
}

function equalsButton() {
	answer = roundToTheNth(eval(calculationString),2);
	document.getElementById('output').innerHTML = answer;
	
	document.getElementById('input').innerHTML = "<span class=\"txt-muted\">" + htmlString + "</span>";
	htmlString = "";  
	calculationString = "";
}

function clearButton() {
	document.getElementById('input').innerHTML = "";
	document.getElementById('output').innerHTML = "";
	htmlString = "";  
	calculationString = "";
}

function deleteButton() {
	calculationString = calculationString.substr(0, calculationString.length -1);
	htmlString = htmlString.substr(0,htmlString.lastIndexOf("<span"));
	document.getElementById('input').innerHTML = htmlString;
}

function answerButton() {
	if(isNaN(answer))
		document.getElementById('output').innerHTML = "No Stored Answer";
	else {
	htmlString += "<span class=\"txt-green\"> " + answer + " </span>";
	document.getElementById('input').innerHTML = htmlString;
	
	calculationString += answer;
	}
}





/* ===================================================================================
	keyboard ties
=================================================================================== */
document.addEventListener("keydown", function(event) {

	// clearBtn == Shift + "Backspace" or Shift + "Delete"
	if ((event.keyCode === 46 && event.shiftKey == true) || (event.keyCode === 8 && event.shiftKey == true)) 
		document.getElementById("clearBtn").click();
	
	// divideBtn == "/" key
	else if ((event.keyCode === 191 && event.shiftKey == false) || event.keyCode === 111) 
		document.getElementById("divideBtn").click();
	
	// timesBtn == "*" key
	else if ((event.keyCode === 56 && event.shiftKey == true) || event.keyCode === 106) 
		document.getElementById("timesBtn").click();
	
	// deleteBtn == "Backspace" or "Delete"
	else if ((event.keyCode === 46 && event.shiftKey == false) || (event.keyCode === 8 && event.shiftKey == false)) 
		document.getElementById("deleteBtn").click();
	
	
	
	
	
	// oneBtn == "1" key
	else if (event.keyCode === 97 || event.keyCode === 49) 
		document.getElementById("oneBtn").click();
	
	// twoBtn == "2" key
	else if (event.keyCode === 98 || event.keyCode === 50) 
		document.getElementById("twoBtn").click();
	
	// threeBtn == "3" key
	else if (event.keyCode === 99 || event.keyCode === 51) 
		document.getElementById("threeBtn").click();
	
	// minusBtn == "-" key
	else if (event.keyCode === 189 || event.keyCode === 109) 
		document.getElementById("minusBtn").click();
	
	
	
	
	
	// fourBtn == "4" key
	else if (event.keyCode === 100 || event.keyCode === 52) 
		document.getElementById("fourBtn").click();
	
	// fiveBtn == "5" key
	else if (event.keyCode === 101 || event.keyCode === 53) 
		document.getElementById("fiveBtn").click();
	
	// sixBtn == "6" key
	else if (event.keyCode === 102 || event.keyCode === 54) 
		document.getElementById("sixBtn").click();
	
	// plusBtn == "+" key
	else if ((event.keyCode === 187 && event.shiftKey == true) || event.keyCode === 107) 
		document.getElementById("plusBtn").click();
	
	
	
	
	
	// sevenBtn == "7" key
	else if (event.keyCode === 103 || event.keyCode === 55) 
		document.getElementById("sevenBtn").click();
	
	// eightBtn == "8" key
	else if (event.keyCode === 104 || event.keyCode === 56) 
		document.getElementById("eightBtn").click();
	
	// nineBtn == "9" key
	else if (event.keyCode === 105 || event.keyCode === 57) 
		document.getElementById("nineBtn").click();
	
	
	
	
	
	// zeroBtn == "0" key
	else if (event.keyCode === 96 || event.keyCode === 48) 
		document.getElementById("zeroBtn").click();
	
	// decimalBtn == "." key
	else if ((event.keyCode === 190 && event.shiftKey == true) || event.keyCode === 110) 
		document.getElementById("decimalBtn").click();
	
	// equalsBtn == "Enter" or "=" key
	else if (event.keyCode === 13 || (event.keyCode === 187&& event.shiftKey == false)) {
		event.preventDefault();
		document.getElementById("equalsBtn").click();
	}
});



/* ===================================================================================
	Helper Functions
=================================================================================== */


function returnHtmlSpecialCharCode(symbol) {
	if (symbol == "/") return "&divide;";
	else if (symbol == "*") return "&times;";
	else if (symbol == "-") return "&minus;";
	else if (symbol == "+") return "&plus;";
	else return "error!";
}

// Custom rounding function
function roundToTheNth(valueToRound, numberOfDecimalPlaces) {
	return Number(Math.round(valueToRound+'e'+numberOfDecimalPlaces)+'e-'+numberOfDecimalPlaces);
}
	