// Assignment Code
var generateBtn = document.querySelector("#generate");

//Define global variables
var upper = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var lower = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var number = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
var specialChar = ["!", "#", "$", "&", "(", ")", "+", ",", "=", ">", "<", "?", "@", "*"];

// Define User-inputted variables
var addLength = "";
var addUpper;
var addLower; 
var addNumber; 
var addSpecialChar;

// Create generatePassword function 
var generatePassword() {
    // Stores password length value in addLength
    var addLength = prompt("Enter your desired password length (8 - 128 characters).")

    // Conditional statement if user inputs character length < 8 OR > 128.
    if (addLength < 8){
        alert ("Your desired password length must be between 8 - 128 characters.")
    } else if (addLength > 128) {
        alert ("Your desired password length must be between 8 - 128 characters.")
    } else {
        var addLength = prompt("Enter your desired password length (8 - 128 characters).")
    }





}


// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
