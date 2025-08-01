let score = 33
let newScore = "33abc"
console.log(typeof score)
let newString = Number(newScore)
console.log( newString)
let scoreString = String(score)
console.log(scoreString)
let valueScore = Number(scoreString)
console.log(typeof valueScore)
console.log(typeof NaN)

// empty strng cnt to bool false 
// when string has value cnt to bool true

//auto conversion by js
// in plus "4" + 2 = "42"
// in minus "4" - 2 = 2 
// in multiplication "4" * 2 = 8
// in division "4" / 2 = 2

// in + , - left to right
// in * , / , %left to right
// 1. Operators are evaluated left to right (for +, -, *, etc.).
// 2. If any operand of + is a string, JS switches to string concatenation from that point onward.
// 3. -, *, / always convert operands to numbers.
console.log(3 + 4 * 5 % 3)
// first * % left to right // second + , - left to right
console(+true)
console(+"")
let  num1 , num2 , num3;

num1 = num2 = num3 = 2 + 2
console.log(num1 , num2 , num3)
console.log("2" > 1)
console.log(null > 0)
console.log(null == 0)
console.log(null >= 0)
console.log(undefined == 0)
console.log(undefined > 0)
console.log(undefined < 0)
//note == and comparison is not same
// in comparison null cnvt to 0 but not in ==