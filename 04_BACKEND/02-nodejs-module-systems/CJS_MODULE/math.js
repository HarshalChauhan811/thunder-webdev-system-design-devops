// ===============================
// Single Function Export
// ===============================

// function add(a, b) {
//     return a + b;
// }

// module.exports = add;



// ===============================
// Multiple Functions Export (Object)
// ===============================

function add(a, b) {
    return a + b;
}

function sub(a, b) {
    return a - b;
}

function mul(a, b) {
    return a * b;
}

module.exports = { add, sub, mul };



// ===============================
// Inline Exports
// ===============================

// exports.divide = function (a, b) {
//     return a / b;
// };



// Note:
// Hamesha ek hi export style use karo.
// Ya to `module.exports` use karo,
// ya phir `exports.add`, `exports.sub`...
// Dono ko ek saath mix mat karo, warna output expected nahi aayega.


// Example:

// exports.divide = function (a, b) {
//     return a / b;
// };

// module.exports = { add, sub };


// Why it breaks?

// exports -> { divide: fn }

// module.exports -> { add, sub }
// (Yaha module.exports ko new object assign kar diya,
// isliye exports aur module.exports ka connection break ho gaya.)




// ===============================
// What Crosses the Module Boundary?
// ===============================

let counter = 0;

// Ye variable private hai.
// Isko dusri file se directly access nahi kar sakte.
// Sirf wahi cheezein dusri file me available hoti hain
// jo hum `module.exports` ya `exports` se export karte hain.