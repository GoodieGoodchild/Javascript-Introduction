Exercise: Introduction to JavaScript Variables and Methods

Objective
Students will learn how to declare different types of variables in JavaScript and create basic methods (functions) to:

Add integer values.
Concatenate string values.
They will also understand the difference between numbers and strings through comments in the code.

Exercise Instructions:
Create Your JavaScript File:

Open Notepad++ and create a new file called script.js.
Save it in a folder called "MyJSProject."
Write JavaScript Code:

Below is the template code. Read the comments carefully to understand what the code does.

javascript
Copy code
// This is a JavaScript program to introduce variables and methods (functions).

// Declaring two integer variables (numbers)
let number1 = 10;
let number2 = 20;

// Declaring two string variables (text)
let firstName = "John";
let lastName = "Doe";

// A function to add two numbers and return the result
function addNumbers(num1, num2) {
    // This function works only with numbers (int/float) and returns their sum
    return num1 + num2;
}

// A function to concatenate two strings and return the result
function concatenateStrings(str1, str2) {
    // This function joins two pieces of text into one long sentence
    return str1 + " " + str2;
}

// Calling the functions and storing the results in variables
let sum = addNumbers(number1, number2);  // Adds the numbers: 10 + 20 = 30
let fullName = concatenateStrings(firstName, lastName);  // Joins the strings: "John Doe"

// Printing the results to the console (open your browser’s console to see the output)
console.log("The sum of the numbers is: " + sum);
console.log("The full name is: " + fullName);

// Explanation:
// Numbers are used for mathematical operations (like addition).
// Strings are text values, and they cannot be used in math operations.
// Instead, we can join (concatenate) strings to form longer pieces of text.
Add the JavaScript to an HTML File:

Create a simple HTML file called index.html in the same folder.
Add this code to link the JavaScript file:
html
Copy code
<!DOCTYPE html>
<html>
<head>
    <title>Introduction to JavaScript</title>
</head>
<body>
    <h1>Check the Console for JavaScript Output</h1>
    <p>Open your browser's console to see the results!</p>

    <script src="script.js"></script> <!-- This links the JavaScript file -->
</body>
</html>
Test Your Code:

Open index.html in a web browser.
Press F12 (or right-click and select "Inspect" → "Console") to open the console.
Check the console output for the results of the addNumbers and concatenateStrings functions.
Key Concepts for Students to Learn:
Variables: Used to store data (numbers or strings).
Functions: Used to group code that performs a specific task.
let vs. const: For now, use let to declare variables that can change.
The Difference between Numbers and Strings:
Numbers can be added or subtracted (used in math).
Strings are text and can only be combined (concatenated).
This exercise will give students a hands-on introduction to variables, data types, and functions in JavaScript. Let me know if you need further adjustments!
