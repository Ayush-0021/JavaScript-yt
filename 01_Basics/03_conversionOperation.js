let score = "Hitesh";

console.log(typeof score);
console.log(typeof(score));

let valueInNumber = Number(score);
console.log(valueInNumber);
// "45"=>45
// "45abc"=>NaN
// true=>1; false=>0
// null=>0
// undefined=>NaN



let isLoggedIn = 1;
let booleanIsLoggedIn = Boolean(isLoggedIn);
console.log(booleanIsLoggedIn);
// 1=>true; 0=>false
// ""=>false; "Nishant"=>true
// null=>false
// undefined=>false
// NaN=>false


let someNumber = 34;
let stringSomeNumber = String(someNumber);
console.log(stringSomeNumber);
console.log(typeof stringSomeNumber);
// 34=> "34"