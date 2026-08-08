// =========================================
// Why ESM (ES Modules) Exists?
// =========================================

// JavaScript ke official standard me pehle koi module system nahi tha.
//
// Node.js ne 2009 me apne liye CommonJS module system use kiya.
// Browser apna alag module loading approach use kar rahe the.
//
// Har environment ka apna alag system tha.
//
// TC39 (JavaScript Standards Committee) ne ES6 (2015) me
// official module system introduce kiya jo Browser aur Node.js
// dono me work kare.
//
// Isi official module system ko ES Modules (ESM) kehte hain.


// =========================================
// How to Enable ESM in Node.js
// =========================================

// Method 1:
// package.json me "type" ko "module" set karo.

// {
//     "type": "module"
// }


// Method 2:
// File extension ko .mjs kar do.


// =========================================
// Importing Modules
// =========================================

import { add, sub } from './second.js';
import mul from './second.js';


// Import hamesha top level par hona chahiye.

// ❌ Not Allowed

// if (something) {
//     import { add } from './second.js';
// }


// Why?

// Import statements static hote hain.
// Node.js file execute hone se pehle hi
// saare imports ko scan karke parallel me load kar leta hai.
//
// Agar imports condition ke andar hote,
// to pehle execution karni padti,
// jiski wajah se parallel loading possible nahi hoti.


// =========================================
// require() does not exist in ESM
// =========================================

// ❌ CommonJS

// const http = require('http');
// ReferenceError: require is not defined


// ✅ ES Module

import http from 'node:http';


// Built-in modules ke liye `node:` prefix use karna recommended hai.
// Ye clearly batata hai ki ye Node.js ka built-in module hai
// aur code ko future-proof banata hai.


// =========================================

console.log(add(2, 3));
console.log(sub(10, 5));
console.log(mul(10, 20));