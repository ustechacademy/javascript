
/*
// Functions

function nameOfFunction(){
    // Function body
    // iki sayi carpimi
    // iki sayi toplami
    console.log("Hello function");
}

nameOfFunction();

function add(a = 2, b = 10){
    // a = 2 , b = 10
    //console.log((a + b));
    return a + b;
}

function multiply(a,b){
    return a * b;
}

add();
add(2,10);
add(20,30);
add(40,100);

// 2 adet sayiyi kullanicidan alarak, 
// add fonksiyonunu kullanarak toplamak

let number1 = parseInt(prompt("Enter first number"));
let number2 = parseInt(prompt("Enter second number"));

let result = add(number1,number2);

console.log("result:"+result);
let result2 = multiply(number1,number2);

// Get a number from user and check this number 
//zero or positive or negative

function checkNumber(x){
    if(x == 0){
        return "The number is zero";
    }
    else if(x > 0){
        return "The number is positive";
    }
    else{
        return "The number is negative";
    }
}

let number3 = parseInt(prompt("Enter a number"));

console.log(checkNumber(number3));


// 3 adet sayi kullanicidan prompt ile alinacak. 
// En büyük sayiyi geriye dönen fonksiyon.

function enBuyukSayi(x, y, z) {
    if (x > y && x > z) {
      return "x en büyük";
    } else if (y > x && y > z) {
      return "y en büyük";
    } else if (z > y && z > x) {
      return "z en büyük";
    } else {
      return "Sayılar eşit";
    }
}

let number12 =parseInt(prompt("Enter a number"))
let number23 =parseInt(prompt("Enter a number"))
let number34 =parseInt(prompt("Enter a number"))
console.log(enBuyukSayi(number12,number23,number34))


function getBiggest() {
    let num1 = parseInt(prompt("Enter a number:"));
    let num2 = parseInt(prompt("Enter another number:"));
    let num3 = parseInt(prompt("Enter one more number:"));
    let biggest = Math.max(num1, num2, num3);
    console.log("The biggest number is: " + biggest);
}

getBiggest();

// Faktoriyel - 5! = 1*2*3*4*5 = 120 6! 1*2*3*4*5*6 = 720 0! = 1
/*
function faktoryel(sayi,sonuc,i){
    for (i = 1; i <= sayi; i++) {
      sonuc=sonuc*i;
        
    }
    console.log(sonuc);
}

let sonuc=1,i;
let sayi= parseInt(prompt("Enter number faktoriyel"));

faktoryel(sayi,sonuc);
*/


/*
let faktoriyel;
function faktoriyelHesapla(x) {
  if (x == 0) {
    return "0 (sıfırın faktoriyeli 1'dir";
  } else {
    for (let i = 1; i <= x; i++) {
      faktoriyel = faktoriyel * i;
    }
    return "Faktöriyel : " + faktoriyel;
  }
}
console.log(faktoriyelHesapla(5));


function getFuctorial(y){
    if (y == 0 ){
        return "the answer is 1";

    }else if(y < 0 ){
        return " the num is negatif";

    }else{
        let result=1;
        for(let z= 1; z<= y; z++){
             result = result*z;
        }
        return result;
    }
}

console.log(getFuctorial(4));

// Kullanicidan string bir ifade alin. 
// Verilen string ifadeyi tersine(reverse) eden fonksiyon. 
// limon -> nomil


let name1 = "limon";


console.log("name1.length:" + name1.length)
console.log(name1[5] + name1[4] + name1[3] + name1[2] + name1[1] + name1[0])


let str = prompt("Bir string giriniz");
let str2 = "";
function ters(number){
    for (var i = number.length - 1; i >= 0; i--) { // i = 4,3,2,1
        str2 += number[i]; // str2 = "nomil"
    }
    return parseInt(str2);
}
console.log(ters(str));
*/

// Global Scope

 // Global Variable

var scope = "Global";


function access(){
  let car = "BMW"; // Local Variable
  console.log(car);
  console.log(scope);
}
access();

//console.log(car);

var fruit = "Orange";

function food(){
  var fruit = "Apple";
  let vegetable = "Broccoli";
  const drinks = "Cola";
}

console.log(fruit);
food();
console.log(fruit);

//console.log(drinks);
//console.log(vegetable);
//console.log(fruit);


//Objects 
// key & values
let person1 = ["Micheal","Mic",35];
const person = {firstName: "Micheal", lastName:"Mic", age: 35};

console.log(person.lastName);
console.log(person.firstName + person["lastName"]);

const person2 = {
    firstName: "John",
    lastName: "Doe",
    fullName: function(){
      return this.firstName + " " + this.lastName;
    }
};
// . notation/statement

let nameSurname = person2.fullName();
console.log(nameSurname);



const person3 = {
  firstName: "Micheal", 
  lastName:"Mic", 
  age: 35
};

const myArray = Object.values(person3);

console.log(myArray);

// For döngüsü ile person3 objesi üzerinde
// ilerleyerek degerlerini konsola yazdiriniz.

for (let index = 0; index < myArray.length; index++) {
  const element = myArray[index];
  console.log(element);
}

myArray.forEach(p => console.log(p));

var arr = ["a","b","c"];

for (let i = 0; i < arr.length; i++) {
  const element = arr[i];
  console.log(element);  
}

arr.forEach(function(element,index){
    console.log(element,index);
});


let student = {
  name: "John",
  age: 20,
  lessons: {
    math: 70,
    science: 20,
  }
};

console.log(student.lessons.science);


console.log("math" in student.lessons);

for(let x in student.lessons){
  //console.log(keys);
  student.lessons[x] = student.lessons[x] + 5;
  console.log(student.lessons[x]);
}

//student.lessons.math = 90;

console.log(student);
