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

    // Add values to user-inputted variables 
    addUpper = confirm("Click OK to confirm including uppercase characters."); 
    addLower = confirm("Click OK to confirm including lowercase characters."); 
    addNumber = confirm("Click OK to confirm including numeric characters.");
    addSpecialChar = confirm("Click OK to confirm including special characters.")

    // WHEN I answer each prompt THEN my input should be validated and at least one character type should be selected
    if (addUpper == false && addLower == false && addNumber == false && addSpecialChar == false) {
        alert("At least one criteria type is needed to generate randomized password.")

        addUpper = confirm("Click OK to confirm including uppercase characters."); 
        addLower = confirm("Click OK to confirm including lowercase characters."); 
        addNumber = confirm("Click OK to confirm including numeric characters.");
        addSpecialChar = confirm("Click OK to confirm including special characters.")
    }

    // Create Array passwordCriteria with all potential characters based on user-inout
    var passwordCriteria = []

        // Uppercase characters will be included in the randomized password
    if (addUpper == true){
        passwordCriteria = passwordCriteria.concat(addUpper)
    }
        // Lowercase characters will be included in the randomized password
    if (addLower == true){
        passwordCriteria = passwordCriteria.concat(addLower)
    }
        // Numeric characters will be included in the randomized password
    if (addNumber == true){
        passwordCriteria = passwordCriteria.concat(addNumber)
    }
        // Special characters will be included in the randomized password
    if (addSpecialChar == true){
        passwordCriteria = passwordCriteria.concat(addSpecialChar)
    }

    // Generate random password 
    var randomPassword = "";

    const randomPassword = Math.floor(Math.random() * randomPassword.length);








}


// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
