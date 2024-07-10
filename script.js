//variables

//var
//let
//const

//var
var firstName = "tushar";
console.log(firstName);

// var is a  function scope and global scope

//what is a funcation scope
// funcation scope ka mtlb hota h ki jo a ki value h osko funcation ke andar hi isko access kiya ja sakta h bhar ye access nai hota for ex

function funcationScope() {
  var a = 12;
  console.log(a); // var ki value accessbale h beacuse ye function ke andar isko access kiya jaa rha h
}
funcationScope();
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
console.log(a);

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
  console.log(Y); //output is 36 is access
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
  name: "John",
  age: 30,
};

// person.age = 31; // Valid operation
console.log(PERSON);

//Function

//JavaScript में एक फ़ंक्शन (Function) एक ब्लॉक (Block) होता है जिसमें कोड को एक नाम दिया जाता है और इसे बार-बार उपयोग किया जा सकता है। फ़ंक्शन बनाने और उपयोग करने के लिए निम्नलिखित तरीके अपनाए जाते हैं:
function add(a, b) {
  console.log(a + b);
}
// add(3, 5);
// add(5, 10);
// add(5, 10);
// add(5, 10);

//synatax
function myFunction() {
  //do it
}

////////////////////////////////////////////////////////////////////////////

//Function Declaration:
//इसमें function कीवर्ड का उपयोग करके एक फ़ंक्शन डिक्लेयर (घोषित) किया जाता है:
function functionDeclaration() {
  // console.log("hello"); //output:hello
}
//upar vale ex me function key word ka use kar ke function ko name dekhe ek function ko declara kiya gaya h

//function declaration se phale bi me function ko call kar skta hu
//for ex
functionAccess(); //java scrtipt me ek feature hosting ke karan me ise phle bi access kar skta hu function declaration hostied hoti h
function functionAccess() {
  // console.log("successfully access"); //output:successfully access
}
//upar vale ex me function ko declar kare upar call kiya gya h jo ki accessble hota h

////////////////////////////////////////////////////////////////////

//Function Expression:
//फ़ंक्शन एक्सप्रेशन में, एक फ़ंक्शन को वेरिएबल में स्टोर किया जाता है:
const funcationExpression = function () {
  // console.log("hello");
};
//uper ex me const key word ka use kare ke hame function ko funcationExpression ke name se variable me store kiya jo ki function name bi h
//jab ham kise function ko varible me assign (store) karete h tab vo function hosited nai hota iska mtlb h ki function ko initialization se phle access nai kar skte or function expression hostied nai hota
//for ex
// test(3, 4); //error: Cannot access 'test' before initialization
const test = function (a, b) {
  console.log(a + b);
};
//uper vale ex me ek function ko test name ke variable me stroe ekiya h oske bad me use uper call kiya h to function expression ke karn ise initialization se phle call nai kiya ja skta

///////////////////////////////////////////////////////////////

//Arrow Function:
//ES6 से, ऐरो फ़ंक्शन का उपयोग करके छोटे और सिंटैक्टिकली सुगम फ़ंक्शन बनाए जा सकते हैं:

//syntax
() => {};

//ex1
const addArrowFunctionTwo = (name) => {
  console.log("hello" + name + "!");
};
// greet("guest"); //output: hello guest

//ex2
const addArrowFunction = (x, y) => {
  return x + y;
};
addArrowFunction(3, 5); //output:8

//ex3
const multipleArrowFunction = (x, y) => {
  return x * y;
};
addArrowFunction(3, 5); //output:15

////////////////////////////////////////////////////////

//Default Parameters

//Default parameters JavaScript mein function definitions mein use kiye jaate hain jab humein kisi parameter ko default value assign karna hota hai, agar function call mein wo parameter provide nahi kiya gaya hai ya undefined hai. Yeh parameters function ke definition mein assign kiye jaate hain.
//for ex
function greet(name = "guest") {
  return name;
}
let val = greet(); // output:guest
let val2 = greet("tushar"); // output:tushar
// uper vale ex me ek function ko create kiya ki () ke andar ek pram pass kiya or default value set kar diya ab me jab function ko bina arguments diye consol karu ga to undifend nai aye ga oske jhag par default value aa jaye gi

//ex2
function add(one = 6, two = 8) {
  console.log(one + two);
}
// add(); //14
// add(89); //97
// add(89, 78); //167

//ex3
function multiple(one, two = 2) {
  console.log(one * two);
}
multiple(5); //10
multiple(14); //28
multiple(7); //14

//ex4

function calutaion(price, tax = 18, discount = 10) {
  console.log(price + tax - discount);
}
calutaion(100); //output:108

////////////////////////////////

//Rest Parameters:

//Rest parameters JavaScript mein ek feature hai jo allow karta hai multiple arguments ko ek array mein collect karne function ke andar. Rest parameters ko define karne ke liye hum ... operator ka istemal karte hain.
//for ex
function restFuncation(firstName, lastName, ...othersDeatils) {
  console.log(
    `firstName: ${firstName} lastName: ${lastName} othersdeatils:${othersDeatils} `
  );
}
restFuncation(" tushar", "sain", 15, "jaipur", "jdshksj"); //output : firstName: tushar lastName: sain othersdeatils:15,jaipur
//explain
//is ex me ek funcation create kiya fir os me 3 pram pass kiye jo othersdeatils pram h vo yha par rest parameters h jo firstName or lastName ki value ko jodakar baki value ya aruments ko array ke rup me collect kar lete h islye firstName or lastName ke bad ki value othersDeatils me stroe ho gayi

//ex2
function numbersFunction(val1, val2, ...numbers) {
  return val1 + numbers[1];
}
numbersFunction(3, 4, 5, 2, 5, 3, 4); //5

//ex3

function numbersFunction(val1, val2, ...numbers) {
  return val1 + numbers[4];
}
console.log(numbersFunction(3, 4, 5, 2, 5, 3, 4)); //7

//////////////////////////////////////////////////////

//Destructuring parameters:
//JavaScript में Destructuring एक शक्तिशाली सुविधा है जो आपको arrays और objects से values को आसानी से extract (निकालने) की अनुमति देती है और उन्हें variables (चरों) में assign (सौंप) करती है। इस सुविधा का उपयोग parameter destructuring के रूप में function parameters के साथ भी किया जा सकता है।
//for ex array
//ex1
let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
function arrayDestructuringFunction([firstNumber, secondNumber]) {
  console.log(firstNumber, secondNumber);
}
destructuringFunction(numbers); //output:1,2
//ex2
let colors = ["red", "blue", "green", "black", "white"];

function accessArrayElements([color1, color2, color3]) {
  return [color1, color2, color3];
}
let outputForColor = accessArrayElements(colors);
console.log(outputForColor); //output:[ 'red', 'blue', 'green' ]

//for ex objects
let person = {
  name: "guest",
  age: 18,
  city: "jaipur",
};

function objectDestructuringFunction({ name, city }) {
  console.log(`name:${name} city:${city}`);
}
objectDestructuringFunction(person); //output: name:guest city:jaipur

//ex2
let admin = {
  adminName: "admin12",
  role: "super admin",
  email: "superadmin@gmail.com",
  password: "superadmin@dshhkjsdh",
};

function accessObjectElements({ adminName, role, password }) {
  return `name:${adminName},role:${role},password:${password}`;
}
console.log(accessObjectElements(admin)); //output:name:admin12,role:super admin,password:superadmin@dshhkjsdh

////////////////////////////////////////////////////

//Pure Function:
//Pure function एक ऐसी function होती है जो अपने input parameters पर आधारित output प्रदान करती है और function के बाहर की किसी भी state को modify नहीं करती। यह functional programming में एक महत्वपूर्ण concept है।
//for ex
function pureFunction(a) {
  console.log(a + a);
}
pureFunction(3); //6
pureFunction(3); //6

//Higher Order Function:
//Higher Order Function (HOF) एक ऐसी function होती है जो या तो एक या एक से अधिक functions को argument के रूप में लेती है या एक function को return करती है। JavaScript में, functions को first-class citizens माना जाता है, यानी functions को variables की तरह pass किया जा सकता है, return किया जा सकता है, और अन्य functions के अंदर use किया जा सकता है।
//for ex
function message(myFullName) {
  console.log(`hello ${myFullName}`);
}
function myName(message, myFullName) {
  return message(myFullName);
}
myName(message, "tushar");

//ex2

function hello(fullName) {
  console.log(`hello ${fullName}`);
}
function guest(hello, fullName) {
  return hello(fullName);
}
guest(hello, "gajubhai");

//error handling:
//JavaScript में error handling एक महत्वपूर्ण aspect है जिससे आप अपने code को robust और reliable बना सकते हैं। Error handling के ज़रिए आप unexpected errors को handle कर सकते हैं और user को meaningful messages दे सकते हैं। JavaScript में error handling के लिए सबसे प्रमुख तरीका try...catch statement है।

try {
  hii();
  const hii = function () {
    console.log("hello try");
  };
} catch (error) {
  console.error(error.message);
}

//ex2

function divide(a, b) {
  if (b === 0) {
    throw new Error("Division by zero is not allowed.");
  }
  return a / b;
}

try {
  console.log(divide(4, 2)); // 2
  console.log(divide(4, 0)); // Error
} catch (error) {
  console.error(error.message); // Division by zero is not allowed.
}
