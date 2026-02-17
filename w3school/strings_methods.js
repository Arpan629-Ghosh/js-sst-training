//length
let text = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
console.log(text.length);

/* Extracting String Characters 
   There are 4 methods for extracting string characters:

The at(position) Method
The charAt(position) Method
The charCodeAt(position) Method
Using property access [] like in arrays
*/

let text1 = "HELLO WORLD";
console.log(text1.charAt(0));
console.log(text1.charCodeAt(0));
console.log(text1.at(-3));
console.log(text1[0]); // it is read only

// concat()
console.log("Hello".concat(" ", "World"));

//Note : All string methods return a new string. They don't modify the original string

//Strings are immutable. String cannot be changed, only replaced

// Extracting String Parts slice(start, end), substring(start, end), substr(start, length)

console.log(text1.slice(1, 3));
console.log(text1.slice(1));
console.log(text1.slice(-4));
console.log(text1.slice(-4, -1));

// The difference is that start and end values less than 0 are treated as 0 in substring().

console.log(text1.substring(2, 5));

// converting to upper and lower case

console.log(text1.toUpperCase());
console.log(text1.toLowerCase());
console.log(text1.isWellFormed());

let temp = "ABCD \ud880";
console.log(temp.isWellFormed());
console.log(temp.toWellFormed());

let temp1 = "  ABCD  ";
console.log(temp1.trim());
let temp2 = "  A";
console.log(temp2.trimStart());
console.log(temp1.trimEnd());

//padStart()
let str = "5";
let padded = str.padStart(4, "x");
console.log(padded);
console.log(str.padEnd(4, "x"));

// repeat()

console.log(text1.repeat(2));
console.log(text1.replace("WORLD", "ARPAN"));

//Converting a string into an array
console.log(text1.split(" , "));
