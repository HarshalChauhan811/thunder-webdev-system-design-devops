// ============================================================
// JS VARIABLES & DATA TYPES 
// ============================================================


// ============================================
// 1. VAR (PURANA TARIKA - AVOID KARO)
// ============================================

// Hoisting - var top par hoist hota hai aur undefined se initialize hota hai
console.log(a);     // Output: undefined (NO ERROR!)
var a = 10;

// Function Scope (Block Scope NAHI) - LEAK hota hai
if (true) {
    var name = "Harshal";
}
console.log(name);  // Output: Harshal
// block scope ke bahar bhi var ko use kar pa rhe hai

// Redeclaration allowed - same name se dobara variable bana sakte hain
var n = 10;
var n = 20;         // Allowed! Confusing hai ye

// hmesha real world projects me let ka use kare var ka nahi
// isme bahut saare bug hai inko fix krne ke liye let keyword aaya


// ============================================
// 2. PRIMITIVE DATA TYPES
// ============================================

// Primitive --> immutable hota hai
// kyu isse immutable rakha gya --> dynamic data typing ke liye
// agar aisa na karte to x variable me object ko store nahi kara pate

let num1 = 10;
num1 = 20;
let num2 = num1;
console.log(num1, num2);  // Output: 20 20

// yaha pe jab num1 = 10 tha to usse memory location mili
// lekin jab num1 = 20 kiya to wah apni purani memory location ko chhod dega
// aur new memory location lega
// ab num2 = num1 kiye to wo ussi memory location ko point nahi karega
// isse bhi naya memory location milega
// har ek ki individual copy banegi kyuki agar baad me num1 me hi
// bigint ko ya phir obj ko store karaye to size big ho jayega


// lets take 1 more example
let x = 20;
let y = 20;
console.log(x == y);      // Output: true


// ============================================
// 3. NON-PRIMITIVE (OBJECT TYPE)
// ============================================

let obj = {
    name: "Harshal",
    age: 21
};

let obj2 = obj;
console.log(obj == obj2);   // Output: true
// dono same memory location ko point kar rahe hain

let obj3 = {
    name: "Harshal",
    age: 21
};
// yaha pe completely new object create hoga

console.log(obj == obj3);   // Output: false
// kyuki har ek object ko new memory milti hai


// ============================================
// 4. CONST (REFERENCE IMMUTABLE)
// ============================================

const Obj = {
    name: "Harshal",
    age: 21
};
Obj.age = 22;               // ALLOWED! Object ke andar ki values change kar sakte hain
console.log(Obj.age);       // Output: 22

// Obj = {                    // ReferenceError! reference change not allowed hai
//     name: "Deepak",
//     age: 23
// };


// ============================================
// 5. ECMAScript KYA HAI?
// ============================================

// ek question: in sab ka itna rule kisne bnaya hai?
// ECMAScript --> ne js ke saare rule bnaye hai
// browser inhi rules ko follow krta hai
// google apne according code ko implement kar skta hai
// firefox apne, safari apne
// per rule sab me ek hi follow hoga

// lekin rule bnake ECMAScript ko kya fayda hoga?
// Big Companies donation deti hai unhe