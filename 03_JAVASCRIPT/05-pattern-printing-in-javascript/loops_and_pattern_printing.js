// print hellow world 
console.log("Hellow World");
// Output:
// Hellow World


// Print Hello World 10 times 
console.log("Hellow World");
console.log("Hellow World");
console.log("Hellow World");
console.log("Hellow World");
console.log("Hellow World");
console.log("Hellow World");
console.log("Hellow World");
console.log("Hellow World");
console.log("Hellow World");
console.log("Hellow World");
// Output:
// Hellow World
// Hellow World
// Hellow World
// Hellow World
// Hellow World
// Hellow World
// Hellow World
// Hellow World
// Hellow World
// Hellow World


// print it 100 times --> 100 baar smae code ko copy paste krna padega 


// for loop 

for (let i = 1; i <= 100; i++) {
    console.log("Hellow Weorld");
}
// Output:
// Hellow Weorld
// Hellow Weorld
// Hellow Weorld
// ...
// (Total 100 Times)


// print 1 to 10 

for (let i = 1; i <= 10; i++) {
    console.log(i);
}
// Output:
// 1
// 2
// 3
// 4
// 5
// 6
// 7
// 8
// 9
// 10


// print number in reverse order 

for (let i = 10; i >= 0; i--) {
    console.log(i);
}
// Output:
// 10
// 9
// 8
// 7
// 6
// 5
// 4
// 3
// 2
// 1
// 0


// print first 10 even number 

for (let i = 2; i <= 20; i += 2) {
    console.log(i);
}
// Output:
// 2
// 4
// 6
// 8
// 10
// 12
// 14
// 16
// 18
// 20


// print first 10 odd number

for (let i = 1; i <= 19; i += 2) {
    console.log(i);
}
// Output:
// 1
// 3
// 5
// 7
// 9
// 11
// 13
// 15
// 17
// 19


// 17 ka table print karo 

for (let i = 17; i <= 170; i += 17) {
    console.log(i);
}
// Output:
// 17
// 34
// 51
// 68
// 85
// 102
// 119
// 136
// 153
// 170


// 2nd Method

let num = 17;
for (let i = 1; i <= 10; i += 1) {
    console.log(num * i);
}
// Output:
// 17
// 34
// 51
// 68
// 85
// 102
// 119
// 136
// 153
// 170



// 1 se 50 tak ka sum nikalo 

let sum = 0;
for (let i = 1; i <= 50; i++) {
    sum = sum + i;
}
console.log(sum);
// Output:
// 1275



// pattern printing 

// star pattern 

for (let i = 1; i <= 5; i++) {

    let str = "";
    for (let j = 1; j <= 5; j++) {
        str = str + "*";
    }
    console.log(str);
}
// Output:
// *****
// *****
// *****
// *****
// *****


for (let i = 1; i <= 5; i++) {

    let str = "";
    for (let j = 1; j <= 5; j++) {
        str = str + i + " ";
    }
    console.log(str);
}
// Output:
// 1 1 1 1 1
// 2 2 2 2 2
// 3 3 3 3 3
// 4 4 4 4 4
// 5 5 5 5 5


for (let i = 1; i <= 5; i++) {

    let str = "";
    for (let j = 1; j <= i; j++) {
        str = str + "*";
    }
    console.log(str);
}
// Output:
// *
// **
// ***
// ****
// *****


for (let i = 5; i >= 0; i--) {

    let str = "";
    for (let j = 1; j <= i; j++) {
        str = str + "*";
    }
    console.log(str);
}
// Output:
// *****
// ****
// ***
// **
// *
//
// (Last iteration prints an empty line)


for (let i = 1; i <= 5; i++) {

    let str = "";
    for (let j = 1; j <= i; j++) {
        str = str + i + " ";
    }
    console.log(str);
}
// Output:
// 1
// 2 2
// 3 3 3
// 4 4 4 4
// 5 5 5 5 5


for(let i=97;i<=122;i++){
    console.log(String.fromCharCode(i));
}
// Output:
// a
// b
// c
// d
// e
// f
// g
// h
// i
// j
// k
// l
// m
// n
// o
// p
// q
// r
// s
// t
// u
// v
// w
// x
// y
// z