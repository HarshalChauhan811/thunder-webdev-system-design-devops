// =========================================
// Named Exports
// =========================================

// Why Named Exports?
// Jab ek file se multiple cheezein share karni hoti hain,
// to har export ka apna unique naam hota hai.
// Import karte time bhi wahi naam use karna padta hai.

export function add(a, b) {
    return a + b;
}

export function sub(a, b) {
    return a - b;
}



// =========================================
// Default Export
// =========================================

// Why Default Export?
// Har file ka generally ek primary purpose hota hai.
// Us main cheez ko default export banaya jata hai.
// Baaki helper/supporting functions ya constants
// named exports hote hain.

export default function mul(a, b) {
    return a * b;
}

export const PI = 3.14;


// Note:
// Ek file me sirf ek hi default export allowed hota hai.