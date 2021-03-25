// Assignment Code
var generateBtn = document.querySelector("#generate");
var upperCaseArray = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var lowerCaseArray = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var numberArray = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
var specialCharArray = ["!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "-", "_", "+", "="];
var userInput;
var chooseUpperCase;
var chooseLowerCase;
var chooseNumbers;
var chooseSpecial;

debugger
function generatePassword(){
  userInput = window.prompt("Choose password length (must be between 8 and 128 characters");

  if (!userInput) {
    alert("Value is required");
  } else if (userInput > 8 || userInput < 128) {
    alert("Must be between 8 and 128");
  } 
   
  chooseUpperCase = window.confirm("Include uppercase letters?");
  chooseLowerCase = window.confirm("Include lowercase letters?");
  chooseNumbers = window.confirm("Include numbers?");
  chooseSpecial = window.confirm("Include special characters?");

    
    

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button]
generateBtn.addEventListener("click", writePassword)}
