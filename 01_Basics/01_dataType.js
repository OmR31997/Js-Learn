let name = "Amar";
let age = 17;
let isLoggedIn = false;
let email=" ";
let credit=null;
let some=undefined
let some2;
const person = {
    f_name: "Ramesh",
    l_name: "Roy",
    age: 20,
    great: function()
    {
        console.log("Hello, "+this.f_name);
    }
}

console.log(typeof(name));
console.log(typeof(age));
console.log(typeof(isLoggedIn));
console.log(typeof(email));
console.log(typeof(credit));
console.log(typeof(some));
console.log(typeof(some2));
person.great();
console.log(person.l_name);
console.log(typeof(person));