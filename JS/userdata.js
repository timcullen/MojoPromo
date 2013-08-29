$(document).ready(function(){
	
	//CREATE OBJECT (using Literal Notation)
	var user = {
		name: '',
		login: '',
		password: '',
		email: ''

	};
		
	//DOM SEL VARS
	
	var userNameInput = $("#user_name");
	var userLoginInput = $("#user_login");
	var userPasswordInput = $("#user_pw");
	var userPasswordCheckInput = $("#user_pwchk");
	var userEmailInput = $("#user_email");

	var userNameError = $("#user_name_error");
	var userLoginError = $("#user_login_error");
	var userPasswordError = $("#user_pw_error");
	var userPasswordCheckError = $("#user_pwchk_error");
	var userEmailError = $("#user_email_error");

	var addUserDataForm = $("#add_user_data");
	
	
	//INITIALLY HIDE ERRORS	

	$("span").hide();
	

	
		
	
	//ADD_USER FORM SUBMIT EVENT FUNCTION
	
addUserDataForm.submit(function(evt) {

	evt.preventDefault();
	var userNameVal =  userNameInput.val();
	var userLoginVal = userLoginInput.val();
	var userPasswordVal = userPasswordInput.val();
	var userEmailVal = userEmailInput.val();


function validateName () {


if (userNameVal.length < 5) {

	userNameError.show();
	return false;
}
else {userNameError.hide();
	return true;
}
}

function validateLogin () {


if (userLoginVal.length < 5)  {

	userLoginError.show();

	return false;
}
else {userLoginError.hide();
	return true;
}
}


function validatePassword () {

var p = /^[-a-z0-9~!$%^&*_=+}]$/;

if (p.test(userPasswordVal) ) {

	userPasswordError.hide();
	return true;
}
else {userPasswordError.show();
	return false;
}
}

function validatePasswordCheck () {


if (userPasswordVal=userPasswordCheckVal)  {

	userPasswordCheckError.hide();
	return true;
}
else {userPasswordCheckError.show();
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


if ( validateName() & validateLogin() & validatePassword() & validatePasswordCheck() & validateEmail() ) {

	user.name = userNameVal;
	user.login = userLoginVal;
	user.password = userPasswordVal;
	user.email = userEmailVal;
	display();
}

});






	///^[-a-z0-9~!$%^&*_=+}{\'?]+(\.[-a-z0-9~!$%^&*_=+}{\'?]+)*@([a-z0-9_][-a-z0-9_]*(\.[-a-z0-9_]+)*\.(aero|arpa|biz|com|coop|edu|gov|info|int|mil|museum|name|net|org|pro|travel|mobi|[a-z][a-z])|([0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}))(:[0-9]{1,5})?$/
	
	
		
});