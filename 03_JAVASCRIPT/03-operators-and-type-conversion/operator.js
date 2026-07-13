// operator in js 

// 1. Arithmetic Operator

let a = 10;
let b = 20;
console.log(a + b);
console.log(a - b);
console.log(a * b);
console.log(a / b);
console.log(a % b);
console.log(a ** b);


// Assignment Operator 

let x = 20;
let y = 30;

a = x + y; 
console.log(a += b);
console.log(a -= b);
console.log(a *= b);
console.log(a /= b);
console.log(a %= b);
console.log(a **= b);


// Increment Decrement 

// a++ --> Use then increment 
// a-- --> Increment then use 

let c = 20;
c++;
console.log(c);
++c;
console.log(c);

let d = 30;
--d;
console.log(d);
d++;
console.log(d);


// Comparision operator 

console.log(10 == 20);
console.log(10 < 20);
console.log(10 <= 20);
console.log(10 > 20);
console.log(10 >= 20);
console.log(10 === "10");  // yaha pe strictle compare hoga value ke saath type bhi check hota hai 


// Logical Opearator 

// Logical and --> jab dono valur true ho tab
console.log(true && true);
console.log(true && "Harshal");  

// Logical or --> jab dono me se koi 1 true ho tab 
console.log(true || false);
console.log(false || false);
console.log(ture || "Harshal");

// not --> ! operator true ka flase and false ka true convert kar deta hai 
console.log(!10);
console.log(!true);


// bitwise operator and shifr operator

let n = 5;
let m = 3;
console.log(n & m);
console.log(n | m);
console.log(n ^ m);


console.log(8 << 2);
console.log(10 << 1);

console.log(10 >> 1);
console.log(10 >> 2);



// type conversion 

console.log("10" == 10);  // true
// yaha pe type conversion hoga dono ko check krne ke liye string ko number me convert kiya jayega 


// Real world use case --> HTML Form submit krne ke baad me data string form me aata hai jisse number me convert kiya jata hai   jaise form me age fill kiya to backend me "age" aayega isse convert kiya jayega  Number(age);

// Calcualtor me bhi data a aur b ki valur ko dete hai wo string format me aata hai 



console.log(30 + '7');
console.log(30 + Number(7)); // code me clarity rakho 

console.log(null == undefined);  // js me null loosely equal to undefined hai 
// comparision me null khud ko change krke 0 bna leta hai 
console.log(null == 0);
console.log(null <=0);
console.log(null >=0);



// ek important talk 

console.log(0.1 + 0.2);
// classical problem hai system me data binary form me store hota hai 
// 0.1 --> binary form me  0.2 --> binary form me 

// 0.1 ko correct method se kabhi binary form me represent nahi kar skte hai 

// finantial term --> databases me decimal store nahi 

let money = 120.01;
let gold = 1500.01;
console.log(money + gold);
// yaha pe data me inaccuracy aati hai 


// to fir system me store kaise kare data ko 
// money ko rupee me nahi paise me store karo 

let balance = 12001; // 120 rupee


// gold ki info ko store krna hai tab 

let gold = 120.08 // X 
let gold = 12008;


// ye bas js me hi h hai aisa c++ isse internally handle kar leta hai 







