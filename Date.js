//in future may be temporal lib used as global like math

let myDate = new Date();
console.log(myDate.toString());
console.log(myDate.toLocaleString());
console.log(myDate.toLocaleDateString());
console.log(myDate.toLocaleTimeString());
console.log(myDate.toUTCString());
console.log(myDate.toDateString());
console.log(myDate.toTimeString());
console.log(typeof myDate);
// let mycreatedDate = new Date(2023, 0, 23); // (202`, month, date , hours , minutes , seconds , milliseconds)
// let mycreatedDate1 = new Date("2023-01-23"); //  month start from 1 
// console.log(mycreatedDate.toDateString());

let myTimeStamp = Date.now();
console.log(myTimeStamp);
console.log(myDate.getTime());
console.log(Math.floor(myDate.getTime() / 1000));
console.log(myDate.getFullYear());

const newDate = Date.now();
console.log(newDate.toLocaleString('default' , {
    weekday : 'long'
}));
