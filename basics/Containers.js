//this is code for the containers

const accountNumber = 12345  // const is used for the constant value, it can't be changed
let accountEmail = "abc@hs"  // let is used for the storing variable
var accountId = "456"        // var is also used for storing variable
accountLocation = "Delhi"    // we can assign any variable in js without declaring the type
let accountVariable;         //declaring a undefined variable

/*
    mostly let is used for storing variable because var keyword in vervious 
    can able to detect the block scope-{} and function scope     
*/

//accountNumber = 23456 
//console.log(accountNumber)

accountEmail = "apple@hs"
accountId = "345"
accountLocation = "jammu"

//this method is used to print in tabluar form
console.table([accountNumber, accountEmail, accountId, accountLocation, accountVariable])