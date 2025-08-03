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
// console(+true)
// console(+"")
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
// two type of data primitive and non primitive
//  how store in memory
// primitive - string , number , boolean , null , undefined , symbol -> call by value copy to copy
// non primitive - object , array , function -> call by refrence
// statical typing - js is dynamic typing   
// You don’t have to declare variable types explicitly.

// The type is determined at runtime, not at compile time.

// Variables can change their type as the program runs.
const id = Symbol('id')
const id2 = Symbol('id')
console.log(id === id2)
//not same 
const num = 12337n // adding n cnvt to bigint
console.log(2 - "5")
// type of null - object
// typeof undefined - undefined
// typeof symbol - symbol
// typeof bigint - bigint
// typeof object - object
// typeof function - function object


// stack primitive heap non primitive
//heap se refrence milta on the other hand stack se copy milta


const name = "ram"
const name2 = "ram"
//old method
console.log(name + name2)
//new method
console.log(`${name} ${name2}`)
//primitive new me new ke sath bhi koi fark nahi pda

const game = {
    name : "mario",
    age : 20
}
// const krne ke bawajud change ho gya

let game2 = game
game2.name = "luigi"
console.log(game)

//string method
const names = "mohammad-Anish"
names.charAt(3)
names.indexOf("Anish")
name.toLowerCase()
name.toUpperCase()

const slice = names.slice(0,4) // neg value can be used reverse value baiscally
const substring = names.substring(0,4) // no neg value if give auto consider as 0

console.log(slice)
console.log(substring)

const split = names.split("-") //output array
console.log(split)

const url = "https://www.google.com"
const url2 = url.replace("google","youtube")
console.log(url.includes("google"))
console.log(url2)
