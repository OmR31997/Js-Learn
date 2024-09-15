
// person.great();
// console.log(person.l_name);
// console.log(typeof(person));

// *******Primitive Data Types
let name = "Amar";
let age = 17;
let isSignedIn = false;
let email=" ";
let credit=null;
let some=undefined
let some2;
const score = 100;
const scoreValue = 100.3;
const bigNumber = 9999999999999999n;
const name_1 = "Ram"
const isLoggedIn = false;
const outSideTemp = null;
let userMail;
const id = Symbol('123');
const anotherId = Symbol('123');

console.log("name_1: ", typeof(name_1));
console.log("age: ", typeof(age));
console.log("isSigned: ", typeof(isSignedIn));
console.log("email: ", typeof(email));
console.log("credit: ", typeof(credit));
console.log("some: ", typeof(some));
console.log("some2: ", typeof(some2));
console.log("score: ", typeof(score));
console.log("scoreValue: ", typeof(scoreValue));
console.log("name: ", typeof(name));
console.log("isLoggedIn: ", typeof(isLoggedIn));
console.log("outSideTemp: ", typeof(outSideTemp));
console.log(userMail);
console.log("id: ", typeof(id));

console.log(id === anotherId);
console.log("bigNumber: ",typeof(bigNumber));

// Non-Primitive

// const bikes = ["Activa", "Bajaj", "TVS", "Honda"];
// bikes.forEach(element => 
// {
//     i=0;
//     console.log("bike: ", element);
// });

// let myObj = 
// {
//     name: "Karan",
//     age: 24
// }
// console.log(myObj.name)

// const myFunction = function()
// {
//     console.log("Hello World");
// }

// myFunction();

// console.log("bikes: ", typeof(bikes));
// console.log("myObj: ", typeof(myObj));
// console.log("myFunction: ", typeof(myFunction));
// const person = {
//     f_name: "Ramesh",
//     l_name: "Roy",
//     age: 20,
//     great: function()
//     {
//         console.log("Hello, "+this.f_name);
//     }
// }