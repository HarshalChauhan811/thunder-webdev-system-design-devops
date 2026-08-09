const validator = require('validator');

const email = 'harshal@gmail.com';
const password = "Harshal";
const comment = "dsakjfbsakj sfbjsdabdfsa safskalk";

console.log(validator.isEmail(email));
console.log(validator.isStrongPassword(password));


// =========================================
// Why use the Validator package?
// =========================================

// Data ka format check karna (Validation).

// Example:
// - Email valid hai ya nahi?
// - Password strong hai ya nahi?
// - URL valid hai ya nahi?
// - Mobile number valid hai ya nahi?

// Frontend aur Backend dono jagah validation ki need hoti hai.


// Agar validation ka code khud likhenge,
// to har cheez ke liye custom logic likhna padega.

// Better Approach:
// Internet par already tested libraries available hain.
// Hum unhe install karke direct use kar sakte hain.

// Example:
console.log(validator.isEmail('harshal@gmail.com'));
console.log(validator.isStrongPassword('Harshal@123'));