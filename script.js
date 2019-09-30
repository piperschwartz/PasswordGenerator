var passwordLength = prompt("What is the length of your password?");
console.log(passwordLength);
var upperCase = prompt("Do you want uppercase letters?");
//console.log(uppercase);
var lowerCase = prompt("Do you want lowercase letters?");
var numbers = prompt("Do you want to add numbers?");


//variables
var lowerCase = ["abcdefghijklmnopqrstuvwxyz"];
if (lowerCase = "yes") {
    console.log("abcdefghijklmnopqrstuvwxyz");
     }
   


var upperCase = ["ABCDEFGHIJKLMNOPQRSTUVWXYZ"];
if (upperCase = "") {
    document.write("ABCDEFGHIJKLMNOPQRSTUVWXYZ") }
    console.log("ABCDEFGHIJKLMNOPQRSTUVWXYZ");


var numbers = ["1234567890"];
if (numbers = "yes") {
    document.write("1234567890") }
    console.log("1234567890");


var specialChars =  ["!@#*?."];
if (specialChars = "yes") {
    document.write("!@#*?.") }
    console.log("!@#*?.");



var PossibleChars = upperCase.concat(lowerCase, numbers, specialChars, passwordLength);
console.log(PossibleChars);


var generatePass = document.getElementById("generate");
 generatePass.addEventListener("click", function() {
    console.log("button was clicked");
    document.getElementById("password").innerHTML = PossibleChars = upperCase.concat(lowerCase, numbers, specialChars, passwordLength);
 }
 )

//function to generate password
function generatePass() 
    {
    var result = '';
    for(var i =0; i < PossibleChars; i++) 
    {
        result+=  PossibleChars[Math.floor(Math.random() * PossibleChars.length)];
    
    }
        return result;
    }

/*var copyPass = document.getElementById("copy");
copyPass.addEventListener("click", function() {
 
}

*/

 