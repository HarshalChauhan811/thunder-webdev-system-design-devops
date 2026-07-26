// why do we need array ?

// Problem --> Store marks of 5 students

let marks1 = 30;
let marks2 = 20;
let marks3 = 11;
let marks4 = 80;
let marks5 = 70;

// Agar yaha pe bole ki 100 students ke marks ko store karo,
// to 100 alag-alag variables banana padega.

// Array --> 0 based indexing hoti hai.
// JavaScript me array heterogeneous hota hai (Different data types store kar sakta hai).

let marks = [30, 20, 11, 80, 70];
console.log(marks);
// Output:
// [30, 20, 11, 80, 70]

// Find the number of elements in the array
console.log(marks.length);
// Output:
// 5

// Print all elements of the array
for (let i = 0; i < marks.length; i++) {
    console.log(marks[i]);
}
// Output:
// 30
// 20
// 11
// 80
// 70

// Heterogeneous Array

let arr = [10, 60, "Harshal", true, "new"];
console.log(arr);
// Output:
// [10, 60, "Harshal", true, "new"]

// Update value
arr[0] = 100;
console.log(arr);
// Output:
// [100, 60, "Harshal", true, "new"]



// ==============================
// Operations on Array
// ==============================

let num = [10, 20, 30, 40, 50, 60];

num.push(70);          // Insert at end
num.pop();             // Delete from end
num.unshift(11,22,33); // Insert at beginning
num.shift();           // Delete from beginning

// Final Array
// Output:
// [22, 33, 10, 20, 30, 40, 50, 60]



// C++ aur Java ki tarah JavaScript me array fixed size ka nahi hota.
// Kyuki JavaScript me array internally object type ka hota hai,
// isliye iska size dynamically badh ya ghat sakta hai.

// C++ me int array fixed size ka hota hai.
// int sirf integer values store karta hai.
// JavaScript array me different data types bhi store ho sakte hain.



// ==============================
// for...of Loop
// ==============================

let array = [10, 20, 30, 40, 50];

for (let x of array) {
    console.log(x);
}
// Output:
// 10
// 20
// 30
// 40
// 50



// ==============================
// Slice and Splice
// ==============================

// slice()
// Original array ko change nahi karta.
// Sirf specified portion ki copy bana kar return karta hai.

let result = [10, 20, 30, 40, 50, 60, 70];

const a = result.slice(2, 4);

console.log(a);
// Output:
// [30, 40]

console.log(result);
// Output:
// [10, 20, 30, 40, 50, 60, 70]



// splice()
// Original array ko modify karta hai.
// Removed elements ko new array me return karta hai.

const b = result.splice(2, 4);

console.log(b);
// Output:
// [30, 40, 50, 60]

console.log(result);
// Output:
// [10, 20, 70]



// splice() ka use delete aur insert dono ke liye hota hai.

let mark = [10, 20, 30, 40, 50, 60, 70];

// Delete 30
mark.splice(2, 1);
console.log(mark);
// Output:
// [10, 20, 40, 50, 60, 70]

// Insert 41 and 91 at index 2
mark.splice(2, 0, 41, 91);
console.log(mark);
// Output:
// [10, 20, 41, 91, 40, 50, 60, 70]



// ==============================
// 2D Array
// ==============================

// Array ke andar Array

const newArr = [
    [10,20,30],
    [40,50,60],
    [70,80,90],
    [22,44,88]
];

console.log(newArr);
// Output:
// [
//   [10,20,30],
//   [40,50,60],
//   [70,80,90],
//   [22,44,88]
// ]

console.log(newArr[0]);
// Output:
// [10,20,30]

console.log(newArr[0][0]);
// Output:
// 10



// Print every element of 2D Array

for (let row of newArr) {
    for (let col of row) {
        console.log(col);
    }
}
// Output:
// 10
// 20
// 30
// 40
// 50
// 60
// 70
// 80
// 90
// 22
// 44
// 88



// ==============================
// concat()
// ==============================

const num1 = [10,20,30,40,50];
const num2 = [60,70,80];

const numN = num1.concat(num2);
console.log(numN);
// Output:
// [10,20,30,40,50,60,70,80]

const num3 = [45,56,89];

const all = num1.concat(num2, num3);
console.log(all);
// Output:
// [10,20,30,40,50,60,70,80,45,56,89]



// Another Method

// Spread Operator (...)

const spread = [...num1, ...num2, ...num3];
console.log(spread);
// Output:
// [10,20,30,40,50,60,70,80,45,56,89]



// Rest Operator (...)

const rest = [10,20,30,40,50];

const [first, second, ...remaining] = rest;

console.log(first);
// Output:
// 10

console.log(second);
// Output:
// 20

console.log(remaining);
// Output:
// [30,40,50]



// ==============================
// join(), indexOf(), includes()
// ==============================

const names = ["Harshal", "Gopal", "Deepak", "Alok", "Harshal"];

// Array ko String me convert karta hai.
console.log(names.join(','));
// Output:
// Harshal,Gopal,Deepak,Alok,Harshal

console.log(names.indexOf("Harshal"));
// Output:
// 0

console.log(names.lastIndexOf("Harshal"));
// Output:
// 4

console.log(names.includes("Chauhan"));
// Output:
// false



// ==============================
// Sorting
// ==============================

// String Array

names.sort();      // Alphabetical Ascending Order
names.reverse();   // Current array ko reverse kar deta hai

// Final Output:
// ["Harshal","Harshal","Gopal","Deepak","Alok"]



// Number Array

const newnum = [10, 20, 7, 101, 23, 78, 4];

// Ye string ki tarah compare karta hai (Character by Character)
newnum.sort();

console.log(newnum);
// Output:
// [10,101,20,23,4,7,78]



// Number ki tarah sort karne ke liye Comparator Function use karte hain.

// Ascending Order
newnum.sort((a, b) => a - b);

// Output:
// [4,7,10,20,23,78,101]

/*
Comparator Logic

a - b < 0  ---> No Swap
a - b > 0  ---> Swap
a - b = 0  ---> Same Position

Example

10 - 20 = -10
Negative --> 10 pehle rahega

20 - 10 = 10
Positive --> Swap hoga

20 - 20 = 0
Equal --> Same Position
*/

// Descending Order
newnum.sort((a, b) => b - a);

// Output:
// [101,78,23,20,10,7,4]

/*
Comparator Logic

b - a < 0 ---> No Swap
b - a > 0 ---> Swap

Isliye bada element pehle aa jata hai.
*/