console.log(parseInt("100px"));
// Output:
// 100

console.log(parseFloat("100.01px"));
// Output:
// 100.01


// Conditional Statement 

// if statement 

let age = 25;
if(age >= 18) {
    console.log("You can Vote");
}
else {
    console.log("You can't Vote");
}
// Output:
// You can Vote


// multiple if else 

let age = 70;
if(age < 18) {
    console.log("You are Child");
}
else if (age >= 18 && age <=60) {
    console.log("You are Young");
}
else {
    console.log("You are Old");
}
// Output:
// You are Old