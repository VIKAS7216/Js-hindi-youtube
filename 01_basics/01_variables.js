const accountId = 14453
let accountEmail = "Vikas@google.com"
var accountPassword = "123456"
accountCity = "Gwalior"
let accountState;

//accountId cannot be changed because it is assigned in const keyword

accountEmail = "Vikasch@google"
accountPassword = "1805"
accountCity="Pune"

/*
do not use var as it cannot find the difference between scope and 
functional scope
*/
console.table([accountId,accountEmail,accountCity,accountPassword,accountState])
