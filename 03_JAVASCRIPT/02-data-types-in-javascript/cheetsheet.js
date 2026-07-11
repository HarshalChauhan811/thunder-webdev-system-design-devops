// ============================================================
// JS DATA TYPES & VARIABLES - CHEETSHEET (Hinglish Style)
// ============================================================


// ============================================
// 1. VARIABLES DECLARE KARNE KE 3 TARIKE
// ============================================

// --- const ---
// const se declare kiya variable block-scoped hota hai
// Reference change nahi ho sakta, par object/array ke andar ki values change kar sakte hain

// 1. Block Scope
if (true) {
    const PI = 3.14159;
}
// console.log(PI); // ReferenceError: PI is not defined
// PI sirf if block ke andar tha, bahar nahi

// 2. Reassignment NOT allowed
const GREETING = "Hello";
// GREETING = "Hi"; // TypeError: Assignment to constant variable.

// 3. Mandatory Initialization
// const UNINIT; // SyntaxError: Missing initializer in const declaration

// 4. Temporal Dead Zone (TDZ)
// console.log(MY_CONST); // ReferenceError: Cannot access before initialization
const MY_CONST = 100;

// 5. Mutability of Object (Reference same, content change)
const CONFIG = { port: 8080 };
CONFIG.port = 3000; // ALLOWED! CONFIG still points to same object
console.log(CONFIG); // { port: 3000 }


// --- let ---
// let bhi block-scoped hai, par ismein reassignment allowed hai

// 1. Block Scope
for (let i = 0; i < 3; i++) {
    // i sirf loop ke andar visible hai
}
// console.log(i); // ReferenceError: i is not defined

// 2. Reassignment Allowed
let counter = 0;
counter = 1; // This is allowed

// 3. Optional Initialization
let name; // Allowed. 'name' is undefined
name = "Alice";

// 4. Temporal Dead Zone
// console.log(myLetVar); // ReferenceError: Cannot access before initialization
let myLetVar = "test";


// --- var ---
// var purana tarika hai, AVOID karo

// 1. Function Scope (NOT Block Scope) - LEAK!
if (true) {
    var leak = "I am visible outside the if-block";
}
console.log(leak); // Outputs: "I am visible outside the if-block"

// 2. Hoisting - undefined se initialize hota hai
console.log(myVar); // Outputs: undefined (NO ERROR!)
var myVar = "Hello";
console.log(myVar); // Outputs: "Hello"

// 3. Redeclaration - same variable dobara
var x = 10;
var x = 20; // Allowed! x is now 20 - confusing!


// ============================================
// 2. DATA TYPES IN JAVASCRIPT
// ============================================

// 1. Primitive (7 Types) --> string, number, boolean, undefined, null, bigint, symbol
// 2. Non-Primitive (Object) --> Object, Array, Function


// --- STRING ---
let strName = "Alice";
let greeting = 'Hello, World!';
let template = `User: ${strName}`; // Template literal - expression embed

// String immutable hai
let str = "hello";
str[0] = "H"; // No error, but no effect either!
console.log(str); // Still "hello" - original unchanged

// Naya string create hota hai
str = "Hello"; // str ab naye string ko point kar raha hai


// --- NUMBER ---
let integerValue = 100;
let floatValue = 3.14;
let notANumber = NaN; // Invalid math operation ka result
let infinity = Infinity; // 1 / 0 ka result

// JavaScript mein int aur float alag nahi hain
console.log(typeof 42);      // "number"
console.log(typeof 3.14);    // "number"
console.log(typeof NaN);       // "number" (surprising but true!)

// NaN ka type "number" hai! - JS ka famous quirk
// Check karne ke liye hamesha Number.isNaN() use karo, === nahi


// --- BOOLEAN ---
let isActive = true;
let isComplete = false;

// Falsy values in JavaScript
if (false || 0 || "" || null || undefined || NaN) {
    // Yeh block kabhi execute nahi hoga
}
// Ye 6 values falsy hain - baaki sab truthy


// --- UNDEFINED vs NULL ---
let user; // Declare kiya, value nahi di
console.log(user); // undefined - engine ne set kiya

let data = null; // Developer ne explicitly "nothing" kaha
console.log(data); // null - intentional empty

// Famous bug: typeof null === "object"
console.log(typeof null); // "object" - historical bug, never fixed


// --- BIGINT ---
// Number type ki safe limit
console.log(Number.MAX_SAFE_INTEGER); // 9007199254740991

// BigInt - suffix 'n' lagao
const veryLarge = 9007199254740991n;
const another = BigInt(9007199254740992);

// BigInt aur Number mix nahi kar sakte
// console.log(veryLarge + 5); // TypeError!
console.log(veryLarge + 5n); // OK - dono BigInt


// --- SYMBOL ---
const id1 = Symbol('id');
const id2 = Symbol('id');

console.log(id1 === id2); // false - same description, different symbol

// Object mein unique property key banane ke liye
const symUser = {
    name: "Alice",
    [id1]: 123 // Symbol as property key
};
// id1 ki value iterate nahi hogi - hidden property


// ============================================
// 3. NON-PRIMITIVE (Object Type)
// ============================================

// --- OBJECT LITERALS ---
let person = {
    firstName: "John",
    lastName: "Doe",
    age: 30,
    "full name": "John Doe" // Key with space - quotes mein
};

// Access karne ke 2 tareeke
console.log(person.firstName);         // Dot notation
console.log(person["full name"]);      // Bracket notation


// --- ARRAYS ---
let numbers = [10, 20, 30, 40];
// Array bhi technically object hai
console.log(typeof numbers); // "object"

// Array check karne ka sahi tareeka
console.log(Array.isArray(numbers)); // true


// --- FUNCTIONS ---
function greet() {
    console.log("Hello");
}

// Function bhi object hai - properties add kar sakte hain!
greet.language = "JavaScript";
console.log(greet.language); // "JavaScript"

console.log(typeof greet); // "function" - special typeof case


// ============================================
// 4. VALUE vs REFERENCE (Sabse Important)
// ============================================

// --- Primitive: Pass by Value (Copy) ---
let a = 10;
let b = a; // Value 10 is COPIED into b

b = 20; // This only changes b

console.log(a); // 10 - a is UNAFFECTED
console.log(b); // 20


// --- Object: Pass by Reference (Shared) ---
let obj1 = { value: 10 };
let obj2 = obj1; // Reference copied, NOT the object

// Both obj1 and obj2 point to SAME object in memory
obj2.value = 20; // Modifying through obj2

console.log(obj1.value); // 20 - obj1 is AFFECTED!
console.log(obj2.value); // 20


// ============================================
// 5. typeof OPERATOR
// ============================================

typeof "Hello"        // "string"
typeof 42             // "number"
typeof true           // "boolean"
typeof undefined      // "undefined"
typeof 10n            // "bigint"
typeof Symbol('id')   // "symbol"

typeof { a: 1 }       // "object"
typeof [1, 2, 3]      // "object" (array is object!)
typeof function(){}   // "function" (special case)
typeof null           // "object" (FAMOUS BUG!)

// Array check karne ka sahi tareeka:
// typeof [1,2,3] === "object" return karta hai
// Array ko detect karne ke liye hamesha Array.isArray() use karo
// null check karne ke liye direct === null use karo, typeof nahi


// ============================================
// 6. QUICK COMPARISON: var vs let vs const
// ============================================
//
// Feature          | var       | let       | const
// -----------------|-----------|-----------|----------
// Scope            | Function  | Block     | Block
// Reassignable     | Yes       | Yes       | No
// Redeclarable     | Yes       | No        | No
// Hoisted Value    | undefined | Uninit(TDZ)| Uninit(TDZ)
// Global Object    | Attaches  | No        | No
// Modern Practice  | AVOID     | Reassign  | DEFAULT
//

// Golden Rule: Hamesha const se shuru karo.
// Agar baad mein pata chale ki value change karni hai, tab let mein convert karo.
// var kabhi mat use karo.


// ============================================
// 7. KEY TAKEAWAYS (Short Mein)
// ============================================
//
// 1. JS dynamically typed hai - pehle type declare nahi karna padta
// 2. 7 Primitive types: string, number, boolean, undefined, null, bigint, symbol
// 3. Object non-primitive hai - variables reference store karte hain
// 4. typeof null === "object" - famous historical bug
// 5. Array.isArray() use karo array check karne ke liye
// 6. Primitive = copy by value, Object = copy by reference
// 7. const reference lock karta hai, object ke andar ki values free hain
// 8. Hamesha === use karo, == nahi (type coercion se bacho)
//


// ============================================
// 8. PRACTICE EXERCISES
// ============================================

// Exercise 1: Output predict karo
let ex1a = 5;
let ex1b = ex1a;
ex1b = 10;
console.log(ex1a); // Output: 5 (primitive copy)

let ex1obj1 = { x: 5 };
let ex1obj2 = ex1obj1;
ex1obj2.x = 10;
console.log(ex1obj1.x); // Output: 10 (reference shared)

// Exercise 2: Object ki copy return karne wala function
function cloneObject(obj) {
    return { ...obj }; // Spread operator se shallow copy
    // ya return Object.assign({}, obj);
}

// Exercise 3: TDZ example
// console.log(tdzVar); // ReferenceError
let tdzVar = "I am safe now";
// var mein TDZ nahi hota kyunki var undefined se initialize hota hai