//variables

//var
//let
//const

//var
var firstName = "tushar";
console.log(firstName)

// var is a  function scope and global scope

//what is a funcation scope
// funcation scope ka mtlb hota h ki jo a ki value h osko funcation ke andar hi isko access kiya ja sakta h bhar ye access nai hota for ex

function funcationScope() {
    var a = 12;
    console.log(a) // var ki value accessbale h beacuse ye function ke andar isko access kiya jaa rha h 
}
funcationScope()
// console.log(a) // var ki value yaha  accessbale nai h beacuse ye function ke bhar isko access kiya jaa rha h 

//what is global scope
// global scope ko kha pe bi access kiya ja sakta h for ex

var globalVar = "I am a global variable";

function displayGlobalVar() {
    console.log(globalVar); // Yeh global variable ko access kar sakta hai
}

displayGlobalVar(); // Output: I am a global variable

console.log(globalVar); // Yeh bhi global variable ko access kar sakta hai

//Redeclaring

//var ko redeclaring kar sakte h for ex
var a = 10;
var a = 11;
//yha par same variable h dono ko access kiya ja sakta h 
console.log(a)

//Hoisting
// What is a hoisting
// variables aur function declarations ko code ke execution se pehle hi memory me allocate kar diya jaata hai. Isi wajah se var se declare kiye gaye variables ko unki declaration se pehle access kiya ja sakta hai, lekin unki value undefined hoti hai.

var x;
console.log(x); // Output: undefined

//let
//let is a block scope and global scope
//let block-scoped hota hai, aur yeh variable sirf us block ke andar accessible hota hai jahan yeh declare kiya gaya ho. Yeh global scope mein bhi declare ho sakta hai, lekin uski visibility sirf usi block ke andar hoti hai jahan yeh declare hua hai.
//Block Scope Example
if (true) {
    let x = 10;
    console.log(x); // Output: 10
}
console.log(x); // Error: x is not defined

//global scope
//Agar let se declare kiya gaya variable global scope mein hai, to yeh pura global scope mein accessible hota hai, lekin phir bhi block scope ke rules ko follow karta hai.
//Global Scope Example
let y = 20;
console.log(y); // Output: 20

if (true) {
    let y = 30; // Yeh alag block scope ka y hai
    console.log(y); // Output: 30
}

console.log(y); // Output: 20 (Global scope ka y)

//Redeclaration with let
//let se declare kiye gaye variables ko ek hi scope ke andar dubara declare nahi kiya ja sakta. Agar aap aisa karte hain, to JavaScript ek error throw karta hai.
let g = 10;
console.log(g); // Output: 10

// let a = 20; // SyntaxError: Identifier 'a' has already been declared
// console.log(a);

//const
//const is a block scope 
//const block-scoped hota hai, aur yeh variable sirf us block ke andar accessible hota hai jahan yeh declare kiya gaya ho.
//Block Scope Example with const
if (true) {
    const Y = 36;
    console.log(Y)//output is 36 is access
}
// console.log(Y); // Output : error Y is not defined

//Redeclaration with const
//const se declare kiye gaye variables ko ek hi scope ke andar dubara declare nahi kiya ja sakta. Agar aap aisa karte hain, to JavaScript ek error throw karta hai.
const K = 98;
console.log(K); // Output: 98

//const K = 20;
// console.log(k);// SyntaxError: Identifier 'a' has already been declared

//constant ki value ek baar define hone ke baad change nahi ho sakti. for ex

const PERSON = {
    name: 'John',
    age: 30
};

// person.age = 31; // Valid operation
console.log(PERSON);