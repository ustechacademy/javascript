

//Conditinal statements if - else if - else

let a = 6;

switch(a > 5){
    case false:
        console.log(a + " 5 ten büyük degil.");
        break;
    case true:
        console.log(a + " 5 ten büyük.");
        break;
    default:
        console.log("Default");
}


let newDate = new Date();

console.log("new date:" + newDate.getDay());

//Pazar:0 Pazartesi:1 Sali:2 .....
 //0 - 6
 let day;

switch(newDate.getDay()){
    case 0: 
        console.log("Sunday");
        break;
    case 1: 
        console.log("Monday");
        break;
    case 2: 
        console.log("Tuesday");
        break;
    case 3: 
        console.log("Wednesday");
        break;
    case 4: 
        console.log("Thursday");
        break;
    case 5: 
        console.log("Friday");
        break;
    case 6: 
        console.log("Saturday");
}

switch(newDate.getDay()){
    case 4:
        console.log("Haftasonuna yaklastin :)");
        break;
    case 5:
        console.log("Haftasonuna yaklastin :)");
        break;
    case 0: 
        console.log("Haftasonu :)");
        break;
    case 6:
        console.log("Haftasonu :)");
}

switch(newDate.getDay()){
    case 4:
    case 5:
        console.log("Hafasonuna yaklastin");
        break;
    case 0: 
    case 6:
        console.log("Haftasonu :)");
        break;
    default:
        console.log("Haftasonu gelmek üzere")
}

//nested 
switch(newDate.getDay()){
    case 4:
    case 5:
        switch(newDate.getDay()){ // expression duruma göre yazabilirsiniz
            case 10:
                break;
        }
        break;
    case 0: 
    case 6:
        console.log("Haftasonu :)");
        break;
    default:
        console.log("Haftasonu gelmek üzere")
}

// Loops

console.log("1")
console.log("2")
console.log("3")
console.log("4")
console.log("5")

let i=1, n;

// while, do && while, for

while(i <= n){
    console.log("While loop: " + i);
    i++;
}

//Write Sum of Positive Numbers Only from user input
let sum = 0;
let number = parseInt(prompt("Enter a number:"));

while(number >= 0){
    //sum = sum + number; // 1.döngü sum = 0 + 20 + 5;
    sum += number;
    number = parseInt(prompt("Enter a number"));
}

console.log("sum, sayilarin toplami" + (sum));

let i2=6,n2=5;

let sum2=0, number2=0;

do{
    console.log("do while loop: " + (i2));
    i2++;
} while(i2<=n2)

do{
    sum2+=number2; // 0 + 20 sum2 = 20  sum2 = 20 + 10 = 30  + 5 = 35
    number2 = parseInt(prompt("Enter a amount:"));
} while(number2 >= 0)

console.log("sum2 toplam: " + sum2);

// for loop
for(let i3=1; i3<=5; ++i3){
    console.log("For loop:" + i3);
}

