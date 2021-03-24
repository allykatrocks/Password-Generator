// Assignment Code
var generateBtn = document.querySelector("#generate");

debugger
function generatePassword(){
  var userSelection = window.prompt("Choose password length (must be between 8 and 128 characters");

  if (userSelection < 8 || userSelection > 128) {
    return;
  }
  if (userSelection >= 8 || userSelection <= 128) {
    var userSecondSelection = window.confirm("Use lowercase letters?");
  }
    

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword)}
