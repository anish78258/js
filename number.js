const score = 33
const balance = new Number(100) // 100percenet this is number

console.log(balance.toString())
console.log(score.toString())
console.log(score.toFixed(2))
console.log(balance.toPrecision(3))

const hundreds = 1000000
console.log(hundreds.toLocaleString('en-IN'))
console.log(hundreds.toLocaleString()) //standard coma lga deti hai

//++++++++++ maths

console.log(Math.abs(-100))
console.log(Math.round(4.3))
console.log(Math.ceil(4.3))
console.log(Math.floor(4.3))
console.log(Math.min(4,5,6,7,8,9))
console.log(Math.max(4,5,6,7,8,9))
console.log(Math.round((Math.random() * 10) + 1))
const min = 10
const max = 100

console.log(Math.floor(Math.random() * (max - min + 1) + min))


