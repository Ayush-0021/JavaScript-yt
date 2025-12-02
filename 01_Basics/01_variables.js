const accountId = 1234567890; 
let accountEmail = "abc@gmail.com"
var accountPassword = "99999"
accountCity = "Patna"
let accountState;

// accountId = 2 not allowed, as const cannot be reassigned//
accountEmail ="xyz@gmail.com"
accountPassword = "00000"
accountCity = "Ranchi"


console.log(accountId); 
console.log([accountId,accountEmail, accountPassword, accountCity, accountState]); 
// Preffer not to use var because of issue in block scope and functional scope//



