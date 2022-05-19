// Insert your javascript/jquery code here
			
// This will store all the expenses locally
var expenses = [];
var sum = 0;

$(document).ready(function() {

	// Clicking the submit button
	$('#submit').click(function() {
		// Form validation

		// Adding of item in item list
	});

	// Set the date input field's value to current date
	setCurrentDate();


	// Place all functions and validations here

	// For setting the date value of `#date` to current date
	function setCurrentDate() {
		// This creates a date object with an initialized value of the date today
		var today = new Date();
		var formattedDate = today.getFullYear().toString() + '-' + (today.getMonth() + 1).toString().padStart(2, 0) + '-' + today.getDate().toString().padStart(2, 0);
		console.log(formattedDate);

		// Set the formattedDate value to the date input field's value
		$('#date').val(formattedDate);
	}
    
});
