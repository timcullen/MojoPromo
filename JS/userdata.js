$(document).ready(function(){

	//CREATE OBJECT (using Literal Notation)
	var user = {
		name: '',
		age: '',
		phone: '',
		email: ''

	};
		
	//DOM SEL VARS
	
	var userNameInput = $("#user_name");
	var userAgeInput = $("#user_age");
	var userPhoneInput = $("#user_ph");
	var userEmailInput = $("#user_email");

	var userNameError = $("#user_name_error");
	var userAgeError = $("#user_age_error");
	var userPhoneError = $("#user_ph_error");
	var userEmailError = $("#user_email_error");

	var addUserDataForm = $("#add_user_data");
	var displayData = $("#display_data");
	
	//INITIALLY HIDE ERRORS	

	$("span").hide();

	//DISPLAY LIST FUNCTION

	function display() {

		displayData.html('');
		$.each(user,function(prop,value) {

			displayData.append('<li>' + prop + ': ' + value + '</li>');

		}); 


		}



	
	
	
	//ADD_USER FORM SUBMIT EVENT FUNCTION
	
addUserDataForm.submit(function(evt) {

	evt.preventDefault();
	var userNameVal =  userNameInput.val();
	var userAgeVal = userAgeInput.val();
	var userPhoneVal = userPhoneInput.val();
	var userEmailVal = userEmailInput.val();


function validateName () {


if (userNameVal.length < 3) {

	userNameError.show();
	return false;
}
else {userNameError.hide();
	return true;
}
}

function validateAge () {


if (userAgeVal == '' || isNaN(userAgeVal) ) {

	userAgeError.show();
	return false;
}
else {userAgeError.hide();
	return true;
}
}


function validatePhone () {

var p = /^[0-9]+[0-9]+[0-9]+[_.-]+[0-9]+[0-9]+[0-9]+[_.-]+[0-9]+[0-9]+[0-9]+[0-9]$/;

if (p.test(userPhoneVal) ) {

	userPhoneError.hide();
	return true;
}
else {userPhoneError.show();
	return false;
}
}

function validateEmail () {

	
	var e = /^[-a-z0-9~!$%^&*_=+}{\'?]+(\.[-a-z0-9~!$%^&*_=+}{\'?]+)*@([a-z0-9_][-a-z0-9_]*(\.[-a-z0-9_]+)*\.(aero|arpa|biz|com|coop|edu|gov|info|int|mil|museum|name|net|org|pro|travel|mobi|[a-z][a-z])|([0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}))(:[0-9]{1,5})?$/;
		
	if ( e.test(userEmailVal) ) {
		userEmailError.hide();
		return true;
	}
	else { 
		userEmailError.show();
		return false;
	}
}


if ( validateName() & validateAge() & validatePhone() & validateEmail() ) {

	user.name = userNameVal;
	user.age = userAgeVal;
	user.phone = userPhoneVal;
	user.email = userEmailVal;
	display();
}

});






	///^[-a-z0-9~!$%^&*_=+}{\'?]+(\.[-a-z0-9~!$%^&*_=+}{\'?]+)*@([a-z0-9_][-a-z0-9_]*(\.[-a-z0-9_]+)*\.(aero|arpa|biz|com|coop|edu|gov|info|int|mil|museum|name|net|org|pro|travel|mobi|[a-z][a-z])|([0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}))(:[0-9]{1,5})?$/
	
	//CLEAR BUTTON FUNCTION
	

	$("#clear").click(function(){

			user.name = '';
			user.age = '';
			user.phone = '';
			user.email = '';
			display();




	});
		
});