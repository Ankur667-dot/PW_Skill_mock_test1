function validateForm() {
  var name = document.forms["registrationForm"]["name"].value;
  var email = document.forms["registrationForm"]["email"].value;
  var phone = document.forms["registrationForm"]["phone"].value;
  var password = document.forms["registrationForm"]["password"].value;
  var age = document.forms["registrationForm"]["age"].value;
  var gender = document.forms["registrationForm"]["gender"].value;
  var date = document.forms["registrationForm"]["date"].value;
  var color = document.forms["registrationForm"]["color"].value;

  // Reset error messages
  document.getElementById("nameError").innerHTML = "";
  document.getElementById("emailError").innerHTML = "";
  document.getElementById("phoneError").innerHTML = "";
  document.getElementById("passwordError").innerHTML = "";
  document.getElementById("ageError").innerHTML = "";
  document.getElementById("genderError").innerHTML = "";
  document.getElementById("dateError").innerHTML = "";
  document.getElementById("colorError").innerHTML = "";

  // Validate each field
  var isValid = true;

  if (name === "") {
    document.getElementById("nameError").innerHTML = "Please enter your name";
    isValid = false;
  }

  if (email === "") {
    document.getElementById("emailError").innerHTML = "Please enter your email";
    isValid = false;
  } else if (!isValidEmail(email)) {
    document.getElementById("emailError").innerHTML = "Please enter a valid email address";
    isValid = false;
  }

  if (phone === "") {
    document.getElementById("phoneError").innerHTML = "Please enter your phone number";
    isValid = false;
  } else if (!isValidPhone(phone)) {
    document.getElementById("phoneError").innerHTML = "Please enter a valid phone number";
    isValid = false;
  }

  if (password === "") {
    document.getElementById("passwordError").innerHTML = "Please enter your password";
    isValid = false;
  } else if (password.length < 6) {
    document.getElementById("passwordError").innerHTML = "Password must be at least 6 characters long";
    isValid = false;
  }

  if (age === "") {
    document.getElementById("ageError").innerHTML = "Please enter your age";
    isValid = false;
  } else if (age < 18) {
    document.getElementById("ageError").innerHTML = "You must be at least 18 years old";
    isValid = false;
  }

  if (gender === "") {
    document.getElementById("genderError").innerHTML = "Please select your gender";
    isValid = false;
  }

  if (date === "") {
    document.getElementById("dateError").innerHTML = "Please select a date";
    isValid = false;
  }

  if (color === "") {
    document.getElementById("colorError").innerHTML = "Please select a color";
    isValid = false;
  }

  return isValid;
}

function isValidEmail(email) {
  if (email.value.match(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/)) {
    alert("Please enter a valid email!");
    email.focus();
    return false;
  }
}  

function isValidPhone(phone) {
  if (!phoneNumber.value.match(/^[1-9][0-9]{9}$/)) {
    alert("Phone number must be 10 characters long number and first digit can't be 0!");
    phoneNumber.focus();
    return false;}
}