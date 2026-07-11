// ============================================
// 1. HELLO WORLD
// ============================================

console.log("Hellow World");

// Output:
// Hellow World


// ============================================
// 2. VARIABLES
// ============================================

// Variable create karna
let a = 10;
console.log(a);   // Output: 10

a = 20;
console.log(a);   // Output: 20

// JS me type nahi batana padta — khud decide kar leta hai
let name = "Harshal Chauhan";
console.log(name);   // Output: Harshal Chauhan

let b = 10.9;
let c = b;
console.log(b, c);   // Output: 10.9 10.9


// ============================================
// 3. DATA TYPES IN JAVASCRIPT
// ============================================

// 1. Primitive     → number, string, boolean, undefined, null, bigint, symbol
// 2. Non-Primitive → Object, Array, Function


// --------------------------------------------
// 3.1 PRIMITIVE DATA TYPES
// --------------------------------------------

// --- number ---
let age = 21;
console.log(age);          // Output: 21
console.log(typeof age);   // Output: number


// --- string ---
let firstName = "Harshal";
let lastName = "Chauhan";
let fullName = `Harshal Chauhan`;

console.log(firstName);    // Output: Harshal
console.log(lastName);     // Output: Chauhan
console.log(fullName);     // Output: Harshal Chauhan
console.log(typeof fullName);   // Output: string

// Variable ko string me use karna (Template Literals)
let AboutAge = `Age of Harshal Chauhan is ${age}`;
console.log(AboutAge);     // Output: Age of Harshal Chauhan is 21


// --- boolean ---
let firstbool = true;
let secondbool = false;

console.log(firstbool, secondbool);   // Output: true false
console.log(typeof firstbool);        // Output: boolean


// --- undefined ---
let x;
console.log(x);           // Output: undefined
console.log(typeof x);    // Output: undefined
// Isme value nahi diya hai abhi


// --- null ---
let detail = null;
console.log(null);              // Output: null
console.log(typeof null);       // Output: object  (⚠️ JS ka bug hai ye)

// null me jaan bujh ke value nahi rakhi jati hai
// Real life example: Bank me balance check kiya to null show hoga,
// na ki 0. Null ka matlab: server issue hai aisa kuch.


// --- bigint ---
// Big numbers ko store karane ke liye
let bignumber = 1245834573489534759813n;
console.log(bignumber);   // Output: 1245834573489534759813


// --- symbol ---
// Unique value create karne ke liye
let n = Symbol("Harshal");
let m = Symbol("Harshal");

console.log(n == m);      // Output: false
console.log(typeof n);      // Output: symbol


// ============================================
// 4. NON-PRIMITIVE (Reference Type)
// =========================================

// --------------------------------------------
// 4.1 Array
// --------------------------------------------
let arr = [10, 20, 30, 'true', 'Harshal', 98, 27];
console.log(arr);           // Output: [10, 20, 30, 'true', 'Harshal', 98, 27]
console.log(typeof arr);    // Output: object


// --------------------------------------------
// 4.2 Object
// --------------------------------------------
let person = {
    name: "Harshal",
    age: 21,
    city: "Mau" 
};
console.log(person);        // Output: { name: 'Harshal', age: 21, city: 'Mau' }
console.log(typeof person); // Output: object


// --------------------------------------------
// 4.3 Function
// --------------------------------------------

// Normal function
function greet() {
    console.log("Hellow Bhai kaise ho");
}
greet();   // Output: Hellow Bhai kaise ho


// Function ko variable me store karna
let fun = function meet() {
    console.log("I am meet fn");
};

console.log(fun);    // Output: [Function: meet]
fun();               // Output: I am meet fn
console.log(typeof fun);   // Output: function