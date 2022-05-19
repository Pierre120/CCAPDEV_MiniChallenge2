// Insert your javascript/jquery code here
			
// This will store all the expenses locally
var expenses = [];
var sum = 0;

$(document).ready(function() {

	// Clicking the submit button
	$('#submit').click(function() {
		// Form validation
		let isValid = validateForm();

		// Adding of item in item list
		if(isValid) {
			updateAndDisplay();
			// clearing the form input fields
			resetForm()
		}
	});

	// Clicking the category filter
	$('#filter option').click(function() {
		// Get the category to fliter
		let category = $(this).val();

		// Get the filtered expense list
		let filteredList = expenses;
		
		if(category !== 'all') {
			filteredList = filterExpenseList(category);
		}

		updateFilterListDisplay(filteredList);
	});

	// Set the date input field's value to current date
	setCurrentDate();

	// Place all functions and validations here

	// For setting the date value of `#date` to current date
	function setCurrentDate() {
		// This creates a date object with an initialized value of the date today
		var today = new Date();
		var formattedDate = today.getFullYear().toString() + '-' + (today.getMonth() + 1).toString().padStart(2, 0) + '-' + today.getDate().toString().padStart(2, 0);

		// Set the formattedDate value to the date input field's value
		$('#date').val(formattedDate);
	}

	// For form validation
	function validateForm() {
		// Clearing error messages and highlights
		$('#error').text('');
		$('#item').css('border-color','#DDDDDD');
		$('#amount').css('border-color','#DDDDDD');

		// Check if item input is empty
		if($('#item').val() === '') {
			// Apply style for input error
			$('#item').css('border-color','#B00000');
			// Display error message
			$('#error').text('Please enter a description for the expense');
			return false;
		}
		// Check if amount input is empty
		if($('#amount').val() === '' || $('#amount').val() === NaN) {
			// Apply style for input error
			$('#amount').css('border-color','#B00000');
			// Display error message
			$('#error').text('Please enter a description for the expense');
			return false;
		}
		return true;
	}

	// For clearing the description and amount input fields
	function resetForm() {
		setCurrentDate();
		$('#category').children().eq(0).prop('selected', 'selected');
		$('#item').val('');
		$('#amount').val('');
	}

	// For storing the new expense in the expense list/log
	function updateAndDisplay() {
		let newExpense = {
			date: $('#date').val(),
			category: $('#category').val(),
			description: $('#item').val(),
			amount: parseFloat($('#amount').val()),
		}

		// Push new expense item in `expenses` array
		expenses.push(newExpense);

		addExpenseToViewList(newExpense);

		updateTotalExpenses(newExpense.amount);
	}

	// Adding/appending expense item to list
	function addExpenseToViewList(expense) {
		let date = $('<span></span>').addClass('datecol').text(expense.date);
		let description = $('<span></span>').addClass('itemcol').text(expense.description);
		let amount = $('<span></span>').addClass('amountcol').text(expense.amount);
		let newItem = $('<div></div>').addClass('expenseItem ' + expense.category)
											.append(date, description, amount);
		
		$('#list').append(newItem);
	}

	// updating the total expense
	function updateTotalExpenses(expenseAmount) {
		sum += expenseAmount;
		$('#total').text(sum.toFixed(2));
	}

	// Callback function for the array filter method
	function filterExpenseList(category) {
		// Filter callback functions
		let filterCBs = {
			food: function(expenseObj, index, array) {
				console.log(expenseObj)
				return expenseObj.category === 'food';
			},
			transpo: function(expenseObj, index, array) {
				return expenseObj.category === 'transpo';
			},
			bills: function(expenseObj, index, array) {
				return expenseObj.category === 'bills';
			}
		};

		// Filtered expenses array
		return expenses.filter(filterCBs[category]);
	}

	// For updating the list display when filtering
	function updateFilterListDisplay(expenseList) {
		$('#list').empty();
		sum = 0;
		for(let expense of expenseList) {
			addExpenseToViewList(expense);
			updateTotalExpenses(expense.amount);
		}
	}
  
});
