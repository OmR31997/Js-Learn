let userName = "Raman";
let anotherName = userName;     //this anotherName take only copy of that not take actual value basically
anotherName = "Vansh";

let userOne = 
{
    email: `raman@abc.com`,
    psw: `raman@123`
}

let userTwo = userOne; //this userTwo take direct reference of userOne i.e., this userTwo take actual value of that 
userTwo.email = `raman@gmail.com`   

console.log("userName: ", userName);
console.log("AnotherName: ", anotherName);
console.log("userOne: ", userOne.email);
console.log("userTwo: ",userTwo.email);