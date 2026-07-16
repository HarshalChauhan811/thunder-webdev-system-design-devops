// ==========================================
// JavaScript Math Object
// ==========================================

// ------------------------------------------
// 1. Number Methods
// ------------------------------------------

let num = 10.3914832;

console.log(num.toFixed(2));
// Output:
// 10.39

console.log(num.toPrecision(5));
// Output:
// 10.391

console.log(num.toExponential());
// Output:
// 1.03914832e+1



// ------------------------------------------
// 2. NaN (Not a Number)
// ------------------------------------------

let a = Number("10av");
console.log(a);

// Output:
// NaN

console.log(0 / 0);

// Output:
// NaN



// ------------------------------------------
// 3. Creating Number Object
// ------------------------------------------

let num1 = new Number(10);
let num2 = new Number(10);

console.log(num1 == num2);

// Output:
// false
// Different Number Objects



// ------------------------------------------
// 4. Math Constants
// ------------------------------------------

console.log(Math.PI);
// Output:
// 3.141592653589793

console.log(Math.LN10);
// Output:
// 2.302585092994046

console.log(Math.LN2);
// Output:
// 0.6931471805599453

console.log(Math.E);
// Output:
// 2.718281828459045

console.log(Math.SQRT2);
// Output:
// 1.4142135623730951



// ------------------------------------------
// 5. Math Methods
// ------------------------------------------

console.log(Math.abs(-23));
// Output:
// 23

console.log(Math.floor(2.9));
// Output:
// 2

console.log(Math.ceil(2.1));
// Output:
// 3

console.log(Math.round(2.5));
// Output:
// 3

console.log(Math.trunc(9.99));
// Output:
// 9

console.log(Math.sqrt(64));
// Output:
// 8

console.log(Math.cbrt(27));
// Output:
// 3

console.log(Math.pow(2, 5));
// Output:
// 32

console.log(Math.min(4, 9, 1, 7));
// Output:
// 1

console.log(Math.max(4, 9, 1, 7));
// Output:
// 9



// ------------------------------------------
// 6. Random Numbers
// ------------------------------------------

console.log(Math.random());

// Output:
// 0.XXXXXXXX

console.log(Math.floor(Math.random() * 10));

// Output:
// 0 - 9

console.log(Math.floor(Math.random() * 10) + 1);

// Output:
// 1 - 10

console.log(Math.floor(Math.random() * 6) + 1);

// Output:
// 1 - 6



// ------------------------------------------
// Random Number Formula
// ------------------------------------------

// Math.floor(Math.random() * (max - min + 1) + min)



// ------------------------------------------
// 7. OTP Generation
// ------------------------------------------

// Method 1

let otp = Math.floor(Math.random() * 10000);

console.log(otp);

// Output (Random):
// 458
// 18
// 9234
// 9999

// Kabhi-kabhi 4 digit se kam bhi ho sakta hai.



// Method 2 (Recommended)

let otp2 = Math.floor(Math.random() * 10000)
    .toString()
    .padStart(4, "0");

console.log(otp2);

// Output (Random):
// 0045
// 1098
// 9999
// 0007



// ------------------------------------------
// 8. How Math.random() Works?
// ------------------------------------------

// Math.random() pseudo-random number generator use karta hai.
// Ye internally system ki state/time se seed lekar
// random values generate karta hai.



// ------------------------------------------
// 9. Why Not Use Math.random() For OTP?
// ------------------------------------------

// Math.random() cryptographically secure nahi hota.
// Pattern predict kiya ja sakta hai.

// Production applications me use hota hai:
//
// Browser
// crypto.getRandomValues()
//
// Node.js
// crypto.randomInt()



// ------------------------------------------
// 10. Real Life Questions
// ------------------------------------------

// Q. Har Ride ka OTP alag kyu hota hai?
// Security ke liye.

// Q. Same OTP use kyu nahi karte?
// Predictable ho jayega.

// Q. OTP kiske saath map hota hai?
// Phone Number ya Ride ID ke saath.

// Q. OTP verify nahi hua to?
// Ride start nahi hogi.



