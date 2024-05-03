function validateUser() {
    if (validateFullName() && validateUsername() && validateEmail() && validatePhoneNumber() && validatePassword() && validateConfirmPassword()) {
        console.log('Do api call here...');
        return false;
    } else {
        return true;
    }
}

function validateFullName() {
    const fullName = document.getElementById('fullName').value;
    if (fullName.length === 0) {
        document.getElementById('fullNameErrorMessage').innerHTML = 'Fullname is required';
        return false;
    } else if (fullName.length < 3) {
        document.getElementById('fullNameErrorMessage').innerHTML = 'Minimum 3 characters';
        return false;
    } else {
        document.getElementById('fullNameErrorMessage').innerHTML = '';
        return true;
    }
}

function validateLastName() {
    const LastName = document.getElementById('LastName').value;
    if (LastName.length === 0) {
        document.getElementById('LastNameErrorMessage').innerHTML = 'LastName is required';
        return false;
    } else if (LastName.length <= 5) {
        document.getElementById('LastNameErrorMessage').innerHTML = 'Minimum 5 characters';
        return false;
    } else {
        document.getElementById('LastNameErrorMessage').innerHTML = '';
        return true;
    }
}







function validateUsername() {
    const username = document.getElementById('username').value;
    if (username.length === 0) {
        document.getElementById('usernameErrorMessage').innerHTML = 'Username is required';
        return false;
    } else if (username.length < 3) {
        document.getElementById('usernameErrorMessage').innerHTML = 'Minimum 3 characters';
        return false;
    } else {
        document.getElementById('usernameErrorMessage').innerHTML = '';
        return true;
    }
}

function validateEmail() {
    const email = document.getElementById('email').value;
    if (email.length === 0) {
        document.getElementById('emailErrorMessage').innerHTML = 'Email is required';
        return false;
    } else if (!/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(email)) {
        document.getElementById('emailErrorMessage').innerHTML = 'Incorrect email format';
        return false;
    } else {
        document.getElementById('emailErrorMessage').innerHTML = '';
        return true;
    }
}

function validatePhoneNumber() {
    const phoneNumberRegex = /^[0-9]{3}-[0-9]{3}-[0-9]{4}$/
    const phoneNumber = document.getElementById('phoneNumber').value;
    if (phoneNumber.length === 0) {
        document.getElementById('phoneNumberErrorMessage').innerHTML = 'Phone Number is required';
        return false;
    } else if (!phoneNumberRegex.test(phoneNumber)) {
        document.getElementById('phoneNumberErrorMessage').innerHTML = 'Incorrect phone number format (000-000-0000)';
        return false;
    } else {
        document.getElementById('phoneNumberErrorMessage').innerHTML = '';
        return true;
    }
}

function validatePassword() {
    const password = document.getElementById('password').value;
    if (password.length === 0) {
        document.getElementById('passwordErrorMessage').innerHTML = 'Password is required';
        return false;
    } else if (password.length < 8) {
        document.getElementById('passwordErrorMessage').innerHTML = 'Minimum 8 characters';
        return false;
    } else if (!/^(?=.*[A-Z]).+$/.test(password)) {
        document.getElementById('passwordErrorMessage').innerHTML = 'Minimum 1 Capital letter';
        return false;
    } else if (!/^(?=.*[a-z]).+$/.test(password)) {
        document.getElementById('passwordErrorMessage').innerHTML = 'Minimum 1 lower case letter';
        return false;
    } else if (!/^(?=.*[0-9]).+$/.test(password)) {
        document.getElementById('passwordErrorMessage').innerHTML = 'Minimum 1 digit';
        return false;
    } else {
        document.getElementById('passwordErrorMessage').innerHTML = '';
        return true;
    }
}

function validateConfirmPassword() {
    const password = document.getElementById('password').value;
    const confirmPassword = document.getElementById('confirmPassword').value;
    if (confirmPassword.length === 0) {
        document.getElementById('confirmPasswordErrorMessage').innerHTML = 'Confirm Password is required';
        return false;
    } else if (password !== confirmPassword) {
        document.getElementById('confirmPasswordErrorMessage').innerHTML = 'Password and Confirm password should be same';
        return false;
    } else {
        document.getElementById('confirmPasswordErrorMessage').innerHTML = '';
        return true;
    }
}
