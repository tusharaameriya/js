// // //funcations
// // const FIRST_NAME = "";

// // let myFirstName = getMyFirstName();
// // function getMyFirstName() {
// //   const FIRST_NAME = "tushar";
// //   return FIRST_NAME;
// // }
// // // console.log(myFirstName);
// // // console.log(FIRST_NAME);

// // function getmyFullName(firstName = "", lastName = "") {
// //   return firstName + lastName;
// // }
// // let myFullName = getmyFullName("tusahr", "sain");
// // let myMasticeFullName = getmyFullName("tushar");
// // function addition(intigerOne, intigerTow) {
// //   return intigerOne + intigerTow;
// // }
// // let additionResult = addition(2, 5);

// // function substraction(intigerOne, intigerTow) {
// //   return intigerOne - intigerTow;
// // }
// // let substractionResult = substraction(5, 3);
// // // console.log(myMasticeFullName);
// // // console.log(additionResult);
// // // console.log(substractionResult);
// // //intrivew qutions
// // //.1 es funcaton me funcation ko phele call kar ne par bi ye funcation defitiona ho rha h why
// // //ans js me hosting fetcher hota h jo ye allow karta h ki funcation ke acutal defination se phele bi call kar sakte h
// // //ex
// // greet(); // Function call pehle ho raha hai

// // function greet() {
// //   // console.log("Hello, world!");
// // }
// // //Is example mein greet function ko pehle call kiya gaya hai aur baad mein define kiya gaya hai. Lekin hoisting ki wajah se, JavaScript is function ko pehle top pe le aata hai, isliye call karna successful hota hai.

// // //.2 what is mmutable and immutable in java script
// // //Immutable values वो होती हैं जिन्हें एक बार set करने के बाद change नहीं किया जा सकता। JavaScript में, primitive types जैसे:

// // //String
// // //Number
// // //Boolean
// // //Null
// // //Undefined
// // //Symbol
// // //BigInt
// // //ये सब immutable होते हैं।

// // //ex

// // // let myName = "tushar";
// // // myName[0] = "j"; // This will not change the string
// // // console.log(myName); // Output: "Tushar"

// // //2
// // //Mutable values वो होती हैं जिन्हें change किया जा सकता है। JavaScript में objects और arrays mutable होते हैं।
// // //ex
// // //array
// // // let color = ["red", "blue", "black"];
// // // color[1] = "hii"; // This will change the array
// // // // console.log(color); // Output: ["red", "hii", "black"]
// // // //object
// // // let person = {
// // //   name: "tushar",
// // //   age: 18,
// // // };
// // // person.age = 20; // This will change the object
// // // console.log(person); //Output: { name: "Tushar", age: 20 }
// // // .3 why type script learn after js

// // // challenge
// // // .1 in this  panten can't ignore optional parameter
// // // .2 i can't pass dynicmaic and as much as
// // let values = {
// //   firstName: "tushar",
// //   age: 17,
// //   class: 12,
// //   add: "jaipur",
// // };

// // function testTime(values) {
// //   // console.log(values);
// // }
// // testTime(values.age + values.add);

// // //2
// // function multiplePra(praOne, praTwo) {
// //   result = praTwo !== undefined ? praTwo : "";
// //   // console.log(praOne, result);
// // }
// // multiplePra("valuefive");

// // //3
// // function multipleValue(praOne, praTwo) {
// //   return praOne + "," + praTwo;
// // }
// // result = multipleValue("one", "two", "three", "four", "five");
// // // console.log(result);

// // //ex
// // function findMax() {
// //   let min = Infinity;
// //   for (let i = 0; i < arguments.length; i++) {
// //     if (arguments[i] > min) {
// //       min = arguments[i];
// //     }
// //   }
// //   return min;
// // }
// // output = findMax(56, 67, 34, 95, 545, 33);
// // // console.log(output);

// // //
// // function getFullName({ firstName, age }) {
// //   return `${firstName} ${age}`;
// // }

// // const user = {
// //   firstName: "John",
// //   lastName: "Doe",
// //   age: 30,
// // };

// // // console.log(getFullName(user)); // John Doe

// // function square(x) {
// //   return x / x;
// // }

// // // console.log(square(4)); // 16
// // // console.log(square(4)); // 16

// // function greet(name) {
// //   return `Hello, ${name}!`;
// // }

// // function displayMessage(messageFunction, name) {
// //   const message = messageFunction(name);
// //   // console.log(message);
// // }

// // // displayMessage(greet, "Tushar"); // Output: Hello, Tushar!

// // //Function Declaration:
// // myFuncation();
// // function myFuncation() {
// //   // console.log("hello");
// // }
// // //2
// // // expressionFuncation(); //error

// // const expressionFuncation = function () {
// //   // console.log("hii");
// // };

// // arrowFuncation = (a) => {
// //   // console.log(a);
// // };
// // arrowFuncation("hello world");

// // function restFuncation(...names) {
// //   // console.log(names[1]);
// // }
// // restFuncation("tushar", "ajay", "sahil", "sanju", "rahul");

// // //Destructuring Parameters
// // function person({ name, age }) {
// //   // console.log(`firstname:${name} age:${age}`);
// // }

// // let deatils = {
// //   name: "tushar",
// //   age: 18,
// //   city: "jaipur",
// //   class: 12,
// // };
// // person(deatils);

// // //pure funcations
// // let a = 3;

// // function pureFuncation(a) {
// //   // console.log(a + a);
// // }
// // pureFuncation(5);
// // // console.log(a);

// // //arrow funcation
// // function normalFunction(x, y) {
// //   let result = x + y;
// //   return result;
// // }
// // let val = normalFunction(9, 5);
// // console.log(val);

// // const myFuncationTwo = (a, b) => {
// //   console.log(a + b);
// // };
// // myFuncationTwo(4, 4);

// // // /Higher-order functions

// // function greet(userName) {
// //   return `Hello, ${userName}!`;
// // }

// // function greetUser(greetFunction, userName) {
// //   return greetFunction(userName);
// // }

// // console.log(greetUser(greet, "Tushar")); // Output: Hello, Tushar!

// // function message(firstName) {
// //   return `good night ${firstName}`;
// // }
// // function higherOrderFuncation(message, firstName) {
// //   return message(firstName);
// // }
// // console.log(higherOrderFuncation(message, "ram"));

// // let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// // function destructuringFunction([firstNumber, secondNumber]) {
// //   console.log(firstNumber, secondNumber);
// // }
// // destructuringFunction(numbers);

// // let personTwo = {
// //   name: "guest",
// //   age: 18,
// //   city: "jaipur",
// // };

// // function objectDestructuringFunction({ name, city }) {
// //   console.log(`name:${name} city:${city}`);
// // }
// // objectDestructuringFunction(personTwo);

// // function party(x, y) {
// //   if (y === 0) {
// //     throw new Error("muliply by zero is not allowed.");
// //   }
// //   return x * y;
// // }

// // try {
// //   console.log(party(4, 6)); // 2
// //   console.log(party(7, 0)); // Error
// // } catch (error) {
// //   console.error(error.message); // Division by zero is not allowed.
// // }

// // function divide(a, b) {
// //   if (b === 0) {
// //     throw new Error("Division by zero is not allowed.");
// //   }
// //   return a / b;
// // }

// // try {
// //   console.log(divide(4, 2)); // 2
// //   console.log(divide(4, 0)); // Error
// // } catch (error) {
// //   console.error(error.message); // Division by zero is not allowed.
// // }

// // function add(one = 6, two = 8) {
// //   console.log(one + two);
// // }
// // add(); //14
// // add(89); //97
// // add(89, 78); //167

// // function multiple(x, y) {}

// // function calutaion(price, tax = 18, discount = 10) {
// //   console.log(price + tax - discount);
// // }
// // calutaion(100); //output:108

// // function rest(val1, val2, ...othervals) {
// //   console.log(val1, val2, othervals);
// // }
// // rest("a", "b", "c", "d", "e", "f");

// // function restTwo(val1, val2, ...vals) {
// //   console.log(val1 + val2 * vals[0]);
// // }
// // restTwo(34, 45, 45, 67, 78, 94);

// // function numbersFunction(val1, val2, ...numbers) {
// //   return val1 + numbers[4];
// // }
// // console.log(numbersFunction(3, 4, 5, 2, 5, 3, 4));

// // let numbersTwo = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// // function arrayDestructuringFunction([firstNumber, secondNumber]) {
// //   console.log(firstNumber, secondNumber);
// // }
// // destructuringFunction(numbersTwo); //output:1,2

// // let colors = ["red", "blue", "green", "black", "white"];

// // function accessArrayElements([color1, color2, color3]) {
// //   return [color1, color2, color3];
// // }
// // let outputForColor = accessArrayElements(colors);
// // console.log(outputForColor);

// // let admin = {
// //   adminName: "admin12",
// //   role: "super admin",
// //   email: "superadmin@gmail.com",
// //   password: "superadmin@dshhkjsdh",
// // };

// // function accessObjectElements({ adminName, role, password }) {
// //   return `name:${adminName},role:${role},password:${password}`;
// // }
// // console.log(accessObjectElements(admin));

// // function ram(a) {
// //   // console.log(a + a);
// //   return a + a;
// // }
// // console.log(ram(5));

// // function errorHandling(x, y) {
// //   if (y === 0) {
// //     throw new Error("zero is not allowed");
// //   }
// //   return x / y;
// // }
// // try {
// //   console.log(errorHandling(4, 6));
// //   console.log(errorHandling(6, 0));
// // } catch (error) {
// //   console.error(error.message);
// // }

// // function errorHandlingTwo(...words) {
// //   let vowel = ["a", "e", "i", "o", "u"];
// //   if (words !== vowel) {
// //     throw new Error("vowel is not allowed");
// //   }
// //   return words;
// // }
// // try {
// //   console.log(errorHandlingTwo("a", "b", "c", "d"));
// // } catch (error) {
// //   console.error(error.message);
// // }
// // try {
// //   console.log(errorHandlingTwo("z", "b", "h", "d"));
// // } catch (error) {
// //   console.error(error.message);
// // }

// function defualt(userName = "guest") {
//   return "hello" + " " + userName;
// }
// console.log(defualt("tushar"));
// console.log(defualt());

// //
// function normalFunction(userName) {
//   return `hello ${userName}`;
// }

// function higherOrderFuncation(normalFunction, userName) {
//   return normalFunction(userName);
// }
// console.log(higherOrderFuncation(normalFunction, "tushar"));

//array

// const myArray = [1, 2, 3, 4, 5];
// let lent = myArray.slice(1, 3);

// console.log(lent);

// let numbersOne = [1, 2, 3, 4, 5, 5, 6];
// let numbersTwo = [1, 2, 3, 4, 5, 5, 6];
// let allNumbers = numbersOne.concat(numbersTwo);
// console.log(allNumbers);

const fruits = ["apple", "banana", "mango", "gavava", "black_barry"];
let someFruits = fruits.slice(1, 3); // ["ब्लैकबेरी", "क्रैनबेरी"]

// console.log(fruites[3]);
console.log(someFruits);

function countVowel(string) {
  let count = 0;
  for (const char of string) {
    if (
      char === "a" ||
      char === "e" ||
      char === "i" ||
      char === "o" ||
      char === "u"
    ) {
      count++;
    }
  }
  console.log(count);
}
countVowel("this is very bad habit");

function objectFunction() {
  const person = {
    name: "tusahr",
    age: 18,
    city: "jaipur",
  };
  console.log(person.name);
}
objectFunction();

//array

let cars = ["od", "bmw", "safari", "scriopo", "thar"];

for (let i = 0; i < cars.length; i++) {
  // console.log(cars[i]);
}

let colors = ["red", "blue", "black", "white"];

for (let color of colors) {
  // console.log(color);?
}

let itemsPrice = [345, 546, 3445, 644, 5345, 345];

for (let price of itemsPrice) {
  offer = price / 10;
  totalPrice = price - offer;
  console.log(totalPrice);
}

let names = ["tushar", "monu", "golu", "yash", "kanu"];

for (let name of names) {
  change = "helllo" + name;
  console.log(change);
}

//loop
for (let i = 0; i <= 100; i++) {
  console.log(i);
}

//game
// let gameNum = 35;
// let gamerNum = prompt("you guess the right number");
// while (gamerNum != gameNum) {
//   let gamerNum = prompt("you guess the worng number try again");
// }
// document.getElementById("message").innerHTML = console.log("right number");

//10
let fullName = "tusharaameriya";
let userName = "$" + fullName + fullName.length;
console.log(userName);

//11
function calculateAge(birthDate) {
  let today = new Date();
  let age = today.getFullYear() - birthDate.getFullYear();
  if (
    today.getMonth() < birthDate.getMonth() ||
    (today.getMonth() === birthDate.getMonth() &&
      today.getDate() < birthDate.getDate())
  ) {
    age--;
  }
  return age;
}
let birthDate = new Date("2006-03-25");
console.log(calculateAge(birthDate));
