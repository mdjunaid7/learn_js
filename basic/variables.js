const accountId = 68
let accountEmail = "juniad@google.com"
var accountPassword = "12345"
accountCity = "Jaipur"
let accountState;
var accounttype;
// let accountState; //both are undefined if no value is assigned
// var accounttype;
// accountId = 2 // not allowed


accountEmail = "mohammed@gmail.com"
accountPassword = "2444"
accountCity = "Bengaluru"

console.log(accountId);

/*
Prefer not to use var
because of issue in block scope and functional scope
*/


console.table([accountId, accountEmail, accountPassword, accountCity, accountState ,accounttype])