// Variables can be created using let and var

let pictureName = "Gangs of WasseyPur"; // do not use it - prefer let over var
let mainRole = "Faizal";

// constants can be declare with const keyword and they are generally upper case
const FILM_BUDGET = 120;

//TODO: Read about Var vs Let - point of discussion  - scoping, hoisting, redeclaration

// TODO: Branching - same as Java - if else else-if ladder switch - create program by yourselves
// 1. Find odd and even  // also use ternary operator
// 2. Find if number is positive, negative or 0

// coalescing operator let res = a ?? b
let user = null;
let defaultUser = "admin";
let res = user ?? defaultUser;
console.log(res);

// Loops
// Use for loop to print the counting from 1 to 10

// Data Types
// Create a program to add two numbers
// Create a program to add two strings

// Functions
function invoiceGenerate(invoiceID, invoiceCompany = "admin") {
  // default value
  console.log(
    `Invoice generated for ${invoiceID} and company: ${invoiceCompany}` // template literals
  );
}
// BackTicks
// ${variableName} -> template literal

invoiceGenerate(12);

// Find Odd even using function - return true if odd otherwise false if even and print according to them

// Function Expressions - storing function in a variable

let reportGenerate = function (reportID) {
  console.log(`Report generated for ${reportID}`);
};

reportGenerate(11);

// Passing function as arguments - callbacks
function ConfirmPayment(paymentStatus, successPayment, failurePayment) {
  if (paymentStatus == "Success") {
    successPayment();
  } else {
    failurePayment();
  }
}

const success = function () {
  // anonymous functions - functions with no name
  console.log("You are redirected to the success page");
};

const failure = function () {
  console.log("You are redirected to the failure page");
};

ConfirmPayment("Failure", success, failure);

// Arrow functions
let sendEmail = (emailID) => {
  console.log(`Email sent to email ID: ${emailID}`);
  return true;
};

let emailSent = sendEmail("gaurav.nagpal@gmail.com");

emailSent
  ? console.log("Successfully email sent")
  : console.log("Failure of email");

// One liner arrow function
let sum = (a, b) => a + b;
// let result = sum(10, 20)
console.log(sum(10, 20));
