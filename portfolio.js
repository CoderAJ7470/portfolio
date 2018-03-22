/*FileName: TT.js
Last updated: July 4, 2017
Author: AJ*/

/********************* JAVASCRIPT FUNCTIONS *********************/

/******************************/
/*  Calculator page function  */
/******************************/

var inputString = "";

/* Updates the calculator's display when a button on the calculator is clicked.
The operation's inputs are kept track of using the inputString variable */
function updateString(value)
{
   inputString += value;
   document.forms[0].display.value = inputString;
}



/* ******************************* */
/* End of Calculator function, start of Prime Numbers table functions */
/* ******************************* */

/* Validates all input on the Prime Numbers form and checks to make sure that
no erroneous inputs have been made before proceeding to display the primes in
the selected range. */
function validateInput()
{
	var firstNum = document.forms[0].firstNumber.value;
	var lastNum = document.forms[0].lastNumber.value;
	
	if(document.forms[0].firstNumber.value <= 0)
	{
		alert("Input must be greater than zero");
		return false;
	}
	else if(document.forms[0].lastNumber.value <= 0)
	{
		alert("Input must be greater than zero");
		return false;
	}
	else if(document.forms[0].firstNumber.value == '' || document.forms[0].lastNumber.value == '')
	{
		alert("You must first enter a number in both fields; please try again");
		return false;
	}
	else if(isNaN(firstNum))
	{
		alert("Please type numeric values only");
		return false;
	}
	else if(isNaN(lastNum))
	{
		alert("Please type numeric values only");
		return false;
	}
	else if(parseInt(firstNum) > parseInt(lastNum))
	{
		alert("First number should be less than the second number");
		return false;
	}
	else
	{
		displayPrimeNumbers(firstNum, lastNum);
	}
}

/* Displays the table of prime numbers entered by the user, inclusive of
the first, last or both numbers if they are prime as well. */
function displayPrimeNumbers(first, last)
{
	/* First add a link to the external CSS file to apply formatting to table */
	document.write("<link rel='stylesheet' href='portfolio_examples.css' type='text/css' >");
	
	/* Convert both entries to integers for comparison*/
	var start = parseInt(first);
	
	if(start == 1)
	{
		start += 1;
	}
	
	var end = parseInt(last);
	var cellCount = 0; /* A cell counter to keep rack of the number of cells in each row */
	var maxRowCellCount = 10; /* The maximum number of cells in each row of the table */
	var primeCheck; /* A variable to check whether the current number is a prime number */
	
	/* Starts off the table with the first row */
	document.write("<table>")
	document.write("<tr>")
	
	/* Start looping from the first entry of the user */
	for(var i = start; i <= end; i++)
	{
		primeCheck = 0; /* Re-set the number of primes found to 0 */
		var sqrt = Math.sqrt(i); /* Take the square root of the current number */
		var maxDiv = parseInt(sqrt); /* Truncate it to an int (take off the decimal part) */
		
		/* Now divide the current number from 2 through maxDiv */
		for(var j = 2; j <= maxDiv; j++)
		{
			if(i % j == 0) /* If at anytime the remainder is 0, the number is not a prime; */
			{
				primeCheck++; /* Update primeCheck */
			}
		}
		
		/* If primeCheck remains 0, the number is a  prime; write it to the table */
		if(primeCheck == 0)
		{
			document.write("<td>" + i + "</td>");
			cellCount++;
		}
		
		/* Check the remaining number or cells in the row and start a new row of cells
		if necessary */
		if(cellCount == maxRowCellCount)
		{
			document.write("</tr><tr>")
			cellCount = 0;
		}
		
	} /*End of outer for loop*/
	
	/* End the last row and the table */
	document.write("</tr>");
	document.write("</table>");
	
	document.write("<p id='primesFormLink'>");
		document.write("<a href='primeNumbers.html'>Back to the previous page</a> &nbsp");
	document.write("</p>")
	
	document.close(); /* Closes the document, stops loading the page */
} /* End of displayPrimeNumbers(...) function */



/* ******************************* */
/* End of prime numbers table functions, start of Shop page functions
/* ******************************* */

/* Caches the cookie images on file and loads them into the table */
function loadImage()
{
	document.write("<img src='' width='100' height='50' />");
	var image = new Image();
	
	for(var i = 0; i < 5; i++)
	{
		image.src = "images/cookies" + (i+1) + ".jpg";
		document.images[i].src = image.src;
	}
}

var cartIsEmpty = true; /* A flag that determines whether or not the shopping cart is empty */
var subTotal = 0; // The subtotal, tax, shpping and grand total amounts
var tax = 0;
var shipping = 0;
var grandTotal = 0;
var curRow = 1; // Keeps track of the current row in the shopping cart table

// thankyouRow and thankyouCell are place holders for the "Thank you for shopping ..." message
var thankyouRow;
var thankyouCell;

// statusRow and statusCell are place holders for the "You are a... shopper" message
var statusRow;
var statusCell;
var count = 0; // count through count4 are variables that prevent multiple instances of the same message
var count2 = 0; // being displayed more than once
var count3 = 0;
var count4 = 0;

/* Adds the selected item from the Products table to the Shopping Cart table */
function addItem(selectedItem)
{	
	if(cartIsEmpty == true)
	{
		document.getElementById("shoppingCart").deleteRow(0);
		cartIsEmpty = false;
	}
	
	var curItem = document.getElementById("productsTable").rows[selectedItem].cells;
	var image = curItem[0].innerHTML;
	var item = curItem[1].innerHTML;
	var price = curItem[2].innerHTML;
	
	var lastItem = document.getElementById("shoppingCart").rows.length;
	var cartTable = document.getElementById("shoppingCart");
	var newRow = cartTable.insertRow(lastItem);
	document.getElementById("shoppingCart").rows[lastItem].id = "R" + curRow;
	var imageCell = newRow.insertCell(0);
	imageCell.innerHTML = image;
	var itemCell = newRow.insertCell(1);
	itemCell.innerHTML = item;
	var priceCell = newRow.insertCell(2);
	priceCell.innerHTML = price;
	var actionCell = newRow.insertCell(3);
	actionCell.innerHTML = "<input type='button' value='Remove' " + "onclick=\"removeItem('R" + curRow + "')\" />"
	curRow++;
	
	// Keep a running tally of the amounts and add to the grand total
	subTotal += parseFloat(price.substring(1));
	tax = 0.05 * subTotal;
	shipping = 5;
	grandTotal = subTotal + tax + shipping;
	
	// Display all the amounts
	document.getElementById("subTotal").value = "$" + subTotal.toFixed(2);
	document.getElementById("tax").value = "$" + tax.toFixed(2);
	document.getElementById("shipping").value = "$" + shipping.toFixed(2);
	document.getElementById("grandTotal").value = "$" + grandTotal.toFixed(2);
	
	// Display a message or messages based on the grandTotal
	if(grandTotal < 21 && count == 0)
	{
		thankyouRow = document.getElementById("thankyou");
		thankyouCell = thankyouRow.insertCell(0);
		thankyouCell.style.textAlign = "left";
		thankyouCell.style.fontSize = "20px";
		thankyouCell.innerHTML = "Thank you for shopping at the Crazy Cookie Company!";
		count++;
	}
	
	if(grandTotal >= 21 && grandTotal < 31 && count2 < 1)
	{
		statusRow = document.getElementById("status");
		statusCell = statusRow.insertCell(0);
		statusCell.style.color = "blue";
		statusCell.style.textAlign = "left";
		statusCell.style.fontSize = "22px";
		statusCell.innerHTML = "You are a valued shopper";
		count2++;
	}
	
	if(grandTotal >= 31 && grandTotal < 41 && count3 < 1)
	{
		statusRow = document.getElementById("status");
		if(count2 < 1)
		{
			statusCell = statusRow.insertCell(0);
		}
		statusCell.style.color = "green";
		statusCell.style.textAlign = "left";
		statusCell.style.fontSize = "22px";
		statusCell.innerHTML = "You are a super shopper";
		count3++;
	}
	
	if(grandTotal >= 41 && count4 < 1)
	{
		statusRow = document.getElementById("status");
		statusCell.style.color = "red";
		statusCell.style.textAlign = "left";
		statusCell.style.fontSize = "22px";
		statusCell.innerHTML = "You are an elite shopper";
		count4++;
	}
	
} // End of addItem(...) function

/* Removes the selected item from the shopping cart table */
function removeItem(rowNum)
{
	// If there's only one row left in the shoppingCart table, delete it and replace it with
	// "Your shopping cart is empty"
	if(document.getElementById("shoppingCart").rows.length == 1)
	{
		document.getElementById("shoppingCart").rows[0].cells[0].innerHTML = "<td>Your shopping cart is empty</td>";
		var selectedRow = document.getElementById("shoppingCart").rows[0];
		selectedRow.deleteCell(1);
		selectedRow.deleteCell(1);
		selectedRow.deleteCell(1);
		
		// Re-set all the output values
		subTotal = 0;
		tax = 0;
		shipping = 0;
		grandTotal = 0;
		
		// Show them in the output text boxes
		document.getElementById("subTotal").value = "$" + subTotal.toFixed(2);
		document.getElementById("tax").value = "$" + tax.toFixed(2);
		document.getElementById("shipping").value = "$" + shipping.toFixed(2);
		document.getElementById("grandTotal").value = "$" + grandTotal.toFixed(2);
		
		// If the count variable is 1, decrement it and delete the thankyouRow cell
		if(count == 1)
		{
			count--;
			
			thankyouRow = document.getElementById("thankyou");
			thankyouRow.deleteCell(0);
		}
		
		cartIsEmpty = true;
	}
	else // Otherwise, more than one row exists
	{
		// Get that row, get its price value
		var selectedRow = document.getElementById(rowNum).rowIndex;
		var removePrice = document.getElementById("shoppingCart").rows[selectedRow].cells[2].innerHTML;
		
		// Use the row's price value to adjust the output values and the grandTotal
		subTotal = subTotal - parseFloat(removePrice.substring(1));
		tax = 0.05 * subTotal;
		grandTotal = subTotal + tax + shipping;
		
		document.getElementById("shoppingCart").deleteRow(selectedRow); // then delete that row
		
		// Adjust the output values in the text boxes; shipping remains the same
		document.getElementById("subTotal").value = "$" + subTotal.toFixed(2);
		document.getElementById("tax").value = "$" + tax.toFixed(2);
		document.getElementById("grandTotal").value = "$" + grandTotal.toFixed(2);
		
		// Based on what the user removed (and the resulting grandTotal), adjust the message/s displayed
		if(grandTotal < 21)
		{
			if(count2 == 1)
			{
				count2--;
			
				statusRow = document.getElementById("status");
				statusRow.deleteCell(0);
			}
			
			if(count2 < 1)
			{				
				statusRow = document.getElementById("status");
				statusRow.deleteCell(0);
			}
		}
		
		if(grandTotal >= 21 && grandTotal < 31 && count3 == 1)
		{
			count3--;
			
			statusRow = document.getElementById("status");
			statusCell.style.color = "blue";
			statusCell.style.textAlign = "left";
			statusCell.style.fontSize = "22px";
			statusCell.innerHTML = "You are a valued shopper";
		}
		
		if(grandTotal >= 31 && grandTotal < 41 && count4 == 1)
		{
			count4--;
			
			statusRow = document.getElementById("status");
			statusCell.style.color = "green";
			statusCell.style.textAlign = "left";
			statusCell.style.fontSize = "22px";
			statusCell.innerHTML = "You are a super shopper";
		}
	} // End of if-else
} // End of removeItem(...) function



/* ******************************* */
/* End of Mock Cookie Shop functions, start of portfolio page functions */
/* ******************************* */

let handleListArray = ["On Techlahoma Slack", "On GitHub", "On CodePen", "On LinkedIn", "\"CoderAJ7470\""];
let index = 0;

window.addEventListener("load", startTicker);

function startTicker() {
	setInterval(runTickerItems, 2400);
}


/* Displays ticker items each time it is called by the startTicker() function above.
If the end of the ticker items is reached (in the array), the process is repeated
starting with the first ticker item */

function runTickerItems() {
	$(".handle").html(handleListArray[index]);

	index++;

	if(index == handleListArray.length)
	{
		index = 0;
	}
}

/************************** JQUERY ****************************/

$(function(){
	$("#resume").click(function() {
		$('html, body').animate({scrollTop: $("div.resumeSection").offset().top}, 1000);
	}),

	$("#examples").click(function() {
		$('html, body').animate({scrollTop: $("div.exampleSection").offset().top}, 1000);
	}),

	$("#certifications").click(function() {
		$('html, body').animate({scrollTop: $("div.fccCertification").offset().top}, 1000);
	}),

	$("#contact").click(function() {
		$('html, body').animate({scrollTop: $("div.footer").offset().top}, 1000);
	});
});




