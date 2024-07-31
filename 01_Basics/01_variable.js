const acId=1001
let acMail="abc@gmail.com"
var acPsw="abc@123"
acCity="Delhi"

//acId=1002
acMail="xyz@gmail.com"
acPsw="xyz@1002"
acCity="Mumbai"

console.log(acId)

/*
    Prefer not use var bacause, of issue in block scope and functional scope
*/
console.table([acId, acMail, acPsw, acCity])

