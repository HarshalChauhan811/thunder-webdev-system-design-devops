// ==========================================
// JavaScript String Methods
// ==========================================

// ------------------------------------------
// 1. Creating Strings
// ------------------------------------------

let str1 = "Harshal Chauhan";
let str2 = 'Harshal Chauhan';
let str3 = `Harshal Chauhan`;

console.log(str1, str2, str3);

// Output:
// Harshal Chauhan Harshal Chauhan Harshal Chauhan



// ------------------------------------------
// 2. Length
// ------------------------------------------

console.log(str1.length);

// Output:
// 16



// ------------------------------------------
// 3. Access Characters
// ------------------------------------------

console.log(str1.charAt(0));
console.log(str1.at(-1)); // Negative index allowed

// Output:
// H
// n



// ------------------------------------------
// 4. Iterate Over String
// ------------------------------------------

for (let i = 0; i < str1.length; i++) {
    console.log(str1[i]);
}

// Output:
// H
// a
// r
// s
// h
// a
// l
//
// C
// h
// a
// u
// h
// a
// n



// ------------------------------------------
// 5. Searching Methods
// ------------------------------------------

let str = "JavaScript";

console.log(str.indexOf("J"));
console.log(str.lastIndexOf("a"));
console.log(str.includes("Java"));
console.log(str.includes("Python"));
console.log(str.startsWith("Java"));
console.log(str.endsWith("Script"));

// Output:
// 0
// 3
// true
// false
// true
// true



// ------------------------------------------
// 6. Slice
// ------------------------------------------

console.log(str.slice(0, 4));
console.log(str.slice(4));
console.log(str.slice(-3));

// Output:
// Java
// Script
// ipt



// ------------------------------------------
// 7. substring()
// ------------------------------------------

console.log(str.substring(0, 4));

// Output:
// Java



// ------------------------------------------
// 8. substr() (Deprecated)
// ------------------------------------------

console.log(str.substr(4, 6));

// Output:
// Script



// ------------------------------------------
// 9. replace()
// ------------------------------------------

let string1 = "Hello World";

console.log(string1.replace("World", "Harshal"));

// Output:
// Hello Harshal



// ------------------------------------------
// 10. replaceAll()
// ------------------------------------------

let s = "cat dog cat";

console.log(s.replaceAll("cat", "dog"));

// Output:
// dog dog dog



// ------------------------------------------
// 11. Uppercase & Lowercase
// ------------------------------------------

let name = "haRShal";

console.log(name.toUpperCase());
console.log(name.toLowerCase());

// Output:
// HARSHAL
// harshal



// ------------------------------------------
// 12. trim()
// ------------------------------------------

let string2 = "   Hello World   ";

console.log(string2.trim());
console.log(string2.trimStart());
console.log(string2.trimEnd());

// Output:
// Hello World
// Hello World
//
//    Hello World



// ------------------------------------------
// 13. concat()
// ------------------------------------------

let firstName = "Harshal";
let lastName = "Chauhan";

console.log(firstName.concat(" ", lastName));

// Output:
// Harshal Chauhan



// ------------------------------------------
// 14. split()
// ------------------------------------------

let language = "HTML,CSS,JavaScript";

console.log(language.split(","));
console.log(language.split(""));

// Output:
// [ 'HTML', 'CSS', 'JavaScript' ]
// [
// 'H','T','M','L',',','C','S','S',',',
// 'J','a','v','a','S','c','r','i','p','t'
// ]



// ------------------------------------------
// 15. search()
// ------------------------------------------

let text = "I Love JavaScript";

console.log(text.search("JavaScript"));
console.log(text.search("Python"));

// Output:
// 7
// -1



// ------------------------------------------
// 16. match()
// ------------------------------------------

let sentence = "cat dog cat rat";

console.log(sentence.match(/cat/g));
console.log(sentence.match(/dog/));

// Output:
// [ 'cat', 'cat' ]
// [ 'dog', index: 4, input: 'cat dog cat rat', groups: undefined ]



// ------------------------------------------
// 17. Character Access
// ------------------------------------------

let course = "JavaScript";

console.log(course[0]);
console.log(course[4]);
console.log(course.charAt(4));
console.log(course.at(-1));

// Output:
// J
// S
// S
// t



// ------------------------------------------
// 18. padStart()
// ------------------------------------------

let number = "25";

console.log(number.padStart(5, "0"));
console.log(number.padStart(8, "*"));

// Output:
// 00025
// ******25



// ------------------------------------------
// 19. padEnd()
// ------------------------------------------

console.log(number.padEnd(5, "0"));
console.log(number.padEnd(8, "*"));

// Output:
// 25000
// 25******