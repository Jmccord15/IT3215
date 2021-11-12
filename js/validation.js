// Form validation code will come here.
function validateForm() {
    console.log(document.forms);
    var userName = document.forms["myForm"]["userName"].value;
    var password = document.forms["myForm"]["password"].value;
    var passwordVerify = document.forms["myForm"]["passwordVerify"].value;
    var firstName = document.forms["myForm"]["firstName"].value;
    var lastName = document.forms["myForm"]["lastName"].value;
    var email = document.forms["myForm"]["email"].value;
    var phoneNumber = document.forms["myForm"]["phoneNumber"].value;
    var signUpNewsletter = document.forms["myForm"]["signUpNewsletter"].value;

    if (userName == null || userName == "" || password == null || password == "" || passwordVerify == null || passwordVerify == "" || firstName == null || firstName == "" || lastName == null || lastName == "" || email == null || email == "" || phoneNumber == null || phoneNumber == "" || signUpNewsletter == null || signUpNewsletter == "") {
        document.getElementById("allFilled").innerHTML = "*All fields are required";
        return false;
    }

    var isAlphanumeric = /^(?:[0-9]+[a-z]|[a-z]+[0-9])[a-z0-9]*$/i.test(userName);

    if (!isAlphanumeric) {
        document.getElementById("allFilled").innerHTML = "";
        document.getElementById("erroruserName").innerHTML = "Username should only contain alphabets and numbers both";
        return false;
    }

    var passwordLength = password.length;

    if (passwordLength < 8) {
        document.getElementById("allFilled").innerHTML = "";
        document.getElementById("erroruserName").innerHTML = "";
        document.getElementById("errorpassword").innerHTML = "Password should minimum be of 8 characters";
        return false;
    }

    if (password != passwordVerify) {
        document.getElementById("allFilled").innerHTML = "";
        document.getElementById("erroruserName").innerHTML = "";
        document.getElementById("errorpassword").innerHTML = "";
        document.getElementById("errorpasswordVerify").innerHTML = "Password does not match!";
        return false;
    }

    if (!isEmailValid(email)) {
        document.getElementById("allFilled").innerHTML = "";
        document.getElementById("erroruserName").innerHTML = "";
        document.getElementById("errorpassword").innerHTML = "";
        document.getElementById("errorpasswordVerify").innerHTML = "";
        document.getElementById("erroremail").innerHTML = "email not valid!";
        return false;
    }

    var isPhoneNumber = /^(\()?\d{3}(\))?(-|\s)?\d{3}(-|\s)\d{4}$/.test(phoneNumber);

    if (!isPhoneNumber) {
        document.getElementById("allFilled").innerHTML = "";
        document.getElementById("erroruserName").innerHTML = "";
        document.getElementById("errorpassword").innerHTML = "";
        document.getElementById("errorpasswordVerify").innerHTML = "";
        document.getElementById("erroremail").innerHTML = "";
        document.getElementById("errorphoneNumber").innerHTML = "phoneNumber not valid!";
        return false;
    }

    GetSubmittedInput();

    document.getElementById("allFilled").innerHTML = "";
    document.getElementById("erroruserName").innerHTML = "";
    document.getElementById("errorpassword").innerHTML = "";
    document.getElementById("errorpasswordVerify").innerHTML = "";
    document.getElementById("erroremail").innerHTML = "";
    document.getElementById("errorphoneNumber").innerHTML = "";
    return true;

}

function isEmailValid(email) {
    var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());

}

function GetSubmittedInput() {
    "use strict";

    var userName = document.getElementsByName('userName')[0].value;
    var password = document.getElementsByName('password')[0].value;;
    var passwordVerify = document.getElementsByName('passwordVerify')[0].value;;
    var firstName = document.getElementsByName('firstName')[0].value;;
    var lastName = document.getElementsByName('lastName')[0].value;;
    var email = document.getElementsByName('email')[0].value;;
    var phoneNumber = document.getElementsByName('phoneNumber')[0].value;;
    var signUpNewsletter = document.getElementsByName('signUpNewsletter')[0].value;;


    document.cookie = "userName=" + userName + ";";
    document.cookie = "password=" + password + ";";
    document.cookie = "passwordVerify=" + passwordVerify + ";";
    document.cookie = "firstName=" + firstName + ";";
    document.cookie = "lastName=" + lastName + ";";
    document.cookie = "email=" + email + ";";
    document.cookie = "phoneNumber=" + phoneNumber + ";";
    document.cookie = "signUpNewsletter=" + signUpNewsletter + ";";

    // GetSubmittedInputFromCookie();
}

function getUrlParameter(name) {
    name = name.replace(/[\[]/, '\\[').replace(/[\]]/, '\\]');
    var regex = new RegExp('[\\?&]' + name + '=([^&#]*)');
    var results = regex.exec(location.search);
    return results === null ? '' : decodeURIComponent(results[1].replace(/\+/g, ' '));
};

function GetSubmittedInputFromCookie() {
    var x = document.cookie;
    document.getElementById('displayFormData').innerHTML = x;
}
