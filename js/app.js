

let a = 5;

console.log("variable: " + a);

// Arrays
let car1 = "Volvo";
let car2 = "BMW";
let car3 = "Tofas";

let cars = ["Volvo", "BMW", "Tofas"];
        //  0 , 1 , 2

console.log("car1: " + cars[0] );
console.log("car2: " + cars[1] );
console.log("car3: " + cars[2] );
console.log("car4: " + cars[3] );

let cars2 = new Array(1, 2, 3);

console.log("cars1: " + cars2[3]);

cars.pop(); // last element will be removed

console.log("cars: " + cars);

cars.push("Tofas"); // added to last of the list

console.log("cars: " + cars);

cars.shift(); // first element will be removed

console.log("cars: " + cars);

cars.unshift("Volvo"); // added as first element

console.log("cars: " + cars);

cars.pop();

console.log("cars: " + cars.length);

cars.push("Tofas"); // added to last of the list

delete cars[2];

console.log("cars: " + cars.length);


let fruits = ["Muz", "Elma", "Mango", "Ananas"];

fruits.sort();

console.log("sorted: " + fruits);

fruits.reverse();

console.log("reversed: " + fruits);

let points = [40, 5, 20, 30, 90];

points.sort();

console.log("sorted points: " + points);


const newCars = ["Volvo", "BMW", "Tofas"];

//newCars = ["Audi", "Toyota", "Volvo"];

newCars.push("Serce");

//newCars[0] = "Serce";

newCars.reverse();

console.log("newCars: " + newCars);


//Dates

const d = new Date();

console.log("Current date: " + d);

// ISO Date type (YYYY-MM-DDTHH:MM:SSZ)
// Capital T is a seperator date and time

const newDate = new Date("2022-07-02T12:00:00Z");

console.log("newdate: " + newDate);

// Math 

console.log("Math.PI:" + Math.PI);


console.log("Math.round:" + Math.round(4.4));

console.log("Math.ceil:" + Math.ceil(4.1));

console.log("Math.floor:" + Math.floor(4.8));

console.log("Math.pow:" + Math.pow(3,3)); // **

console.log("Math.sqrt:" + Math.sqrt(4));

console.log("Math.min:" + Math.min(0, 150, 30, 20, -8, -200));

console.log("Math.max:" + Math.max(0, 150, 30, 20, -8, -200));

console.log("Math.random:" + Math.random());

console.log("Math.random:" + Math.floor(Math.random() * 11));

// 3 ile 7 arasinda random degerler veren kod

console.log('Math.random1:' + Math.floor(Math.random() * 5 + 3)); // 0 ile 4 -> 3 ile 7


console.log('Math.random1:' + Math.floor(Math.random() * 5 + 4)); // 4 ile 8


console.log('Math.random1:' + Math.floor(Math.random() * 12 + 9)); // 0 ile 11 -> 9 - 20