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
function generatePassword() {

    // Stores password length value in addLength
    var addLength = prompt("Enter your desired password length (8 - 128 characters).")

    // Conditional statement if user inputs invalid character length
    if (addLength <= 7 || addLength >= 129){
        alert ("Your desired password length must be between 8 - 128 characters.")

        var addLength = prompt("Enter your desired password length (8 - 128 characters).")
    } else {
        alert ("Your desired password length must be between 8 - 128 characters.")
        return generatePassword();
    }

    // Password length is accepted (between 8 - 128 chracters) message to user
    alert("Your desired password length is " + addLength + " characters.")

    // Add values to user-inputted variables 
    addUpper = confirm("Click OK to confirm including uppercase characters."); 
    addLower = confirm("Click OK to confirm including lowercase characters."); 
    addNumber = confirm("Click OK to confirm including numeric characters.");
    addSpecialChar = confirm("Click OK to confirm including special characters.")

    // Conditional state if the user does not select any password criterias to include in password
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
        passwordCriteria = passwordCriteria.concat(upper)
    }
        // Lowercase characters will be included in the randomized password
    if (addLower == true){
        passwordCriteria = passwordCriteria.concat(lower)
    }
        // Numeric characters will be included in the randomized password
    if (addNumber == true){
        passwordCriteria = passwordCriteria.concat(number)
    }
        // Special characters will be included in the randomized password
    if (addSpecialChar == true){
        passwordCriteria = passwordCriteria.concat(specialChar)
    }

    // Generate random password 

    var randomPassword = [];

    for ( let i = 0; i < addLength; i++){
        var results = passwordCriteria[Math.floor(Math.random() * passwordCriteria.length)];
        randomPassword.push(results);
    }

    return randomPassword.join("");
}


    // Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
