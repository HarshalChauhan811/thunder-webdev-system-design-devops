// ==========================================
// Loops in JavaScript
// ==========================================

// DRY Principle (Don't Repeat Yourself)
// Programming me ek hi kaam ko baar-baar likhne ke bajay
// usse repeat karne ke liye loops use karte hain.



// ------------------------------------------
// Why Loops?
// ------------------------------------------

// Problem:
// Print "Harshal Chauhan" 10 times

console.log("Harshal Chauhan");
console.log("Harshal Chauhan");
console.log("Harshal Chauhan");
console.log("Harshal Chauhan");
console.log("Harshal Chauhan");
console.log("Harshal Chauhan");
console.log("Harshal Chauhan");
console.log("Harshal Chauhan");
console.log("Harshal Chauhan");
console.log("Harshal Chauhan");

/*

Output:

Harshal Chauhan
Harshal Chauhan
Harshal Chauhan
Harshal Chauhan
Harshal Chauhan
Harshal Chauhan
Harshal Chauhan
Harshal Chauhan
Harshal Chauhan
Harshal Chauhan

*/


// Agar hume 100 ya 1000 baar print karna ho,
// to itna code likhna impossible aur difficult ho jayega.
// Isi problem ko solve karne ke liye Loops use hote hain.



// ==========================================
// 1. for Loop
// ==========================================

// Jab Number of Iterations pehle se pata ho.

for (let i = 1; i <= 10; i++) {
    console.log(i);
}

/*

Output

1
2
3
4
5
6
7
8
9
10

*/



// Print Name 10 Times

for (let i = 1; i <= 10; i++) {
    console.log("Harshal Chauhan");
}

/*

Output

Harshal Chauhan
Harshal Chauhan
Harshal Chauhan
Harshal Chauhan
Harshal Chauhan
Harshal Chauhan
Harshal Chauhan
Harshal Chauhan
Harshal Chauhan
Harshal Chauhan

*/



// ==========================================
// Reverse Loop
// ==========================================

for (let i = 10; i >= 1; i--) {
    console.log(i);
}

/*

Output

10
9
8
7
6
5
4
3
2
1

*/



// ==========================================
// while Loop
// ==========================================

// Jab Number of Iterations pehle se fixed na ho.

let i = 1;

while (i <= 10) {
    console.log(i);
    i++;
}

/*

Output

1
2
3
4
5
6
7
8
9
10

*/



// ==========================================
// do...while Loop
// ==========================================

// Ye kam se kam ek baar execute zarur hota hai,
// kyuki condition last me check hoti hai.

let j = 1;

do {
    console.log(j);
    j++;
} while (j <= 10);

/*

Output

1
2
3
4
5
6
7
8
9
10

*/



// ==========================================
// Proof that do...while Executes At Least Once
// ==========================================

let x = 20;

do {
    console.log("Executed Once");
} while (x < 10);

/*

Output

Executed Once

*/



// ==========================================
// Infinite Loop (Never Ending)
// ==========================================

// WARNING:
// Is code ko run mat karna.

// for (;;) {
//     console.log("Infinite Loop");
// }

// while (true) {
//     console.log("Infinite Loop");
// }



// ==========================================
// Interview Difference
// ==========================================

// for Loop
// ✔ Number of iterations known.
// ✔ Initialization, Condition aur Update ek hi line me.

// while Loop
// ✔ Number of iterations unknown.
// ✔ Condition pehle check hoti hai.

// do...while Loop
// ✔ Body pehle execute hoti hai.
// ✔ Condition baad me check hoti hai.
// ✔ At least ek baar execute zarur hota hai.



