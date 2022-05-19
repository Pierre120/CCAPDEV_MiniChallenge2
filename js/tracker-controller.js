// Insert your javascript/jquery code here
			
// This will store all the expenses locally
var expenses = [];
var sum = 0;

$(document).ready(function() {

	// Clicking the submit button
	$('#submit').click(function() {
		// Form validation
		validateForm();

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

	// For form validation
	function validateForm() {
		// Clearing error messages and highlights
		$('#error').text('');
		$('#item').css('border-color','#DDDDDD');
		$('#amount').css('border-color','#DDDDDD');
		console.log($('#amount').html());
		console.log($('#amount').css('border-color','#DDDDDD').html());

		// Check if item input is empty
		if($('#item').val() === '') {
			// Apply style for input error
			$('#item').css('border-color','#B00000');
			// Display error message
			$('#error').text('Please enter a description for the expense');
			return false;
		}
		// Check if amount input is empty
		if($('#amount').val() === '') {
			// Apply style for input error
			$('#amount').css('border-color','#B00000');
			// Display error message
			$('#error').text('Please enter a description for the expense');
			return false;
		}
		return true;
	}

	// For storing the new expense in the expense list/log
	function storeAndDisplayNewExpense() {
		let newExpense = {
			date: $('#date').val(),
			category: $('#category').val(),
			item: $('#item').val(),
			amount: $('#amount').val(),
		}
		// Push new expense item in `expenses` array
		expenses.push(newExpense);

		addExpenseToViewList(newExpense);
	}

	function addExpenseToViewList(expense) {
		let date = $('<span></span>').addClass('datecol').text(expense.date);
		let item = $('<span></span>').addClass('itemcol').text(expense.item);
		let amount = $('<span></span>').addClass('amountcol').text(expense.amount);
		let newItem = $('<div></div>').addClass('expenseItem ' + expense.category)
											.prepend(date, item, amount);
		
		$('#list').prepend(newItem);
		console.log(newItem.html());
	}
    
});
