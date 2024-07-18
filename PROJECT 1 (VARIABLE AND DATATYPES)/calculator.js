// Declare variables to store two numbers and the result
let num1 = 10;
let num2 = 5;
let result;

// Perform addition, subtraction, multiplication, and division operations
result = num1 + num2;
console.log("Addition: " + result);
document.getElementById("result").innerHTML += "Addition: " + result + "<br>";

result = num1 - num2;
console.log("Subtraction: " + result);
document.getElementById("result").innerHTML += "Subtraction: " + result + "<br>";

result = num1 * num2;
console.log("Multiplication: " + result);
document.getElementById("result").innerHTML += "Multiplication: " + result + "<br>";

result = num1 / num2;
console.log("Division: " + result);
document.getElementById("result").innerHTML += "Division: " + result + "<br>";
