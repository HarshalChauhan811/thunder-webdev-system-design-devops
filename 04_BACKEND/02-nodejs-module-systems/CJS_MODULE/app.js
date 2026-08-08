// =========================================
// Why Do We Need Modules?
// =========================================

// Imagine:
// 1 Lakh lines of code
// 100 Engineers working together

// Problems if everything is in one file:

// 1. Code becomes difficult to read and maintain.
// 2. Variable names and function names can conflict.
// 3. By mistake, one developer can modify or break another developer's code.

// Solution:
// Divide the application into multiple modules (files).

// Example Modules:
// - Authentication
// - Authorization
// - Order
// - Payment
// - Notification
// - Email
// - OTP
// - Suggestion

// Each module is responsible for one specific task,
// making the code clean, reusable, and maintainable.


// =========================================
// Importing Modules
// =========================================

// Single Function Import

// const add = require('./math');
// console.log(add(10, 20));



// Import Complete Module

const math = require('./math');



// Destructuring Import
// Sirf required function ko import karna.

const { add } = require('./math');

console.log(add(10, 19));



// Access Functions Using Object

console.log(math.add(2, 3));
console.log(math.sub(2, 3));
console.log(math.mul(2, 3));