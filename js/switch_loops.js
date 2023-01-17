

//Conditinal statements if - else if - else
//Switch case

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
    sum += number; // sum = sum + number;
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


for (let sum3 = 0, number3 =0; number3 >= 0; sum3+=number3) {
   number3 = parseInt(prompt("Enter a amount (For):"));
   if(number3 < 0){
        console.log("Sum3: " + sum3);
        break;
   }
}

// 1-50 arası sayılardan çift olanları consoleda listeleyen JavaScript kodu.
// 2,4,6,8...

for (let a = 1; a <= 50; a++) {
    if(a % 2 === 0 ){
        console.log("a: " + a);
    }
}

//Array icerisinde bulunan elemanlari for döngüsü ile konsola yazdir.
let cars = ["mazda","opel","tofas","bmw"];

for (let index = 0; index < cars.length; index++) {
    const element = cars[index];
    console.log("Car:" + element);
}

// 1-40 arası sayılardan 3’e ve 5’e tam bölünen sayıları konsola yazdir.

for (let b = 1; b<=40; b++) {
    if((b % 3 == 0) && (b % 5 == 0)){
        console.log("B:" + b);
    }
}

// Bilgisayar 1-100 arasında bir sayı üretecek, bizim tahminde bulunmamızı isteyecek,  
// üretilen sayıdan küçük girilirse "Küçük sayı girdiniz", büyük sayı girilirse 
// "Büyük sayı girdiniz" yazacak, kullanıcı doğru tahmin ederse "Tebrikler" yazacak.   
// 0 - 1 -> 0 - 100 +1 -> 1 - 100

let hedef = Math.floor(Math.random() * 100) +1;  // 0 - 99
console.log("hedef" + hedef);
let tahmin;
while(true){
     tahmin = parseInt(prompt("Bir tahmin giriniz"));
     if(tahmin > hedef){
        alert("Büyük sayi girdiniz");
     }
     else if(tahmin < hedef){
        alert("Kücük sayi girdiniz");
     }
    else if(tahmin == hedef){
        alert("Tebrikler");
        break;
    }
}

