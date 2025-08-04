let myArray = [1 , 2 , 3]
let myArray1 = myArray
myArray1.push(4)
console.log(myArray)
const myHeros = ["thor" , "spiderman" , "ironman"]

//array Method


myArray.push(4)
console.log(myArray)
myArray.pop()
console.log(myArray)
myArray.shift()// remove first element
console.log(myArray)
myArray.unshift(1) // add first element
console.log(myArray)
console.log(myArray.indexOf(4))
console.log(myArray.includes(1))

//join
console.log(myArray.join("-")) //convert array into string
//slice
console.log(myArray.slice(1,3))//
//reverse
console.log(myArray.reverse())
//slice and splice
//splice include last idx and also manipulate orginal array
//slice does not include last idx and use copy of array
console.log(myArray.slice(1,3))
myArray.splice(1,1)
console.log(myArray)

const marvelHeros = ["thor" , "spiderman" , "ironman"]
const dcHeros = ["superman" , "batman" , "flash"]
//merged like array in array
// marvelHeros.push(dcHeros)
// console.log(marvelHeros)

const allHeros = marvelHeros.concat(dcHeros) // concat return new array
console.log(allHeros)

const allNewHeros = [...marvelHeros , ...dcHeros]
console.log(allNewHeros)

const anotherArray = [1 , 2 , 3,[1 ,2 ,3] , 4 , 5]
console.log(anotherArray.flat())

console.log(Array.isArray("anish"))
console.log(Array.from("anish"))

console.log(Array.from({name : "anish"} ))

let score1 = 100
let score2 = 200
let score3 = 300
console.log(Array.of(score1 , score2 , score3)) // returns new array
