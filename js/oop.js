
const country = {
    name: "Spain",
    population: 40000,
    description: function (){
        return this.name + " " +this.population
    }
}


console.log(country.name); // Nokta notasyonu
console.log(country["name"]); // Array notasyonu

console.log(country.description());

// DRY - Dont Repeat Yourself
// class 

const job1 = {
    role: "Blockchain Developer",
    salary: 100000,
    applicationLink: "link",
    isRemote: false
}

class Job{
    constructor(role,salary,applicationLink,isRemote){
        this.role = role;
        this.salary = salary;
        this.applicationLink = applicationLink;
        this.isRemote = isRemote;
    }
}

const job2 = new Job(
    "Software Engineer",
    200000,
    "link2",
    true
)

const job3 =  new Job(
    "Designer",
    1900000,
    "link3",
    false
)

class Car1{
    constructor(color,brand,year,price,range){
        this.color = color; // sol taraf prop - sag taraf value
        this.brand = brand;
        this.year = year; 
        this.price = price;
        this.range = range;
    }

    start(){
        return this.brand + " Car started!";
    }

    stop(){
        return "Car stopped!";
    }
}

const bmw = new Car1("Black","Bmw",1990,50000,150000);

console.log(bmw.start());
console.log(bmw.stop());

// Getters ve Setters

class Citizen{
    constructor(name,age,tc){
        this._name = name;
        this._age = age;
        this._tc = tc;
    }

    static clientCount = 0;

    static increaseClientCount(){
        this.clientCount++;
    }

    get tc(){
        if(userType === "Lawyer"){
            return this._tc;
        } else{
            return "You are not allowed";
        }
    }

    set tc(newTc){
        if(userType === "Lawyer"){
            this._tc = newTc;
        } else{
            console.log("You are not allowed");
        }
    }
}

let userType = "Lawyer";
const person = new Citizen("John",45, 1256);
//person.tc = 1902;
Citizen.increaseClientCount();

console.log(person.clientCount);
console.log(Citizen.clientCount);

const person2 = new Citizen("Emre",20, 11111);
Citizen.increaseClientCount();
console.log(person2)
console.log(Citizen.clientCount);


class Dog{
    constructor(color,eyeColor,height,length,weight){
        this._color = color;
        this._eyeColor = eyeColor;
        this._height = height;
        this._length = length;
        this._weight = weight;
    }

    sit(){
        return "Sit down";
    }

    layDown(){
        return "Lay down";
    }

    shake(){
        return "Shake";
    }

    come(){
        return "Come";
    }
}


const sariKöpek = new Dog("Yellow","Brown",17,35,24);

console.log(sariKöpek);

console.log(sariKöpek.come());
console.log(sariKöpek.layDown());
console.log(sariKöpek.sit());
console.log(sariKöpek.shake());

//console.log(sariKöpek.come().layDown().sit().shake())

// ES6 versiyonu JS 

// Inheritance
// Parent class
class Animal{
    constructor(name,species,color){
        this._name = name;
        this._species = species;
        this._color = color;
    }

    makeSound(){
        console.log(this._name + " makes sound");
    }
}

// Child class
class Bird extends Animal{

    constructor(name,species,color,eyeColor){
        super(name,species,color);
        this._eyeColor = eyeColor;
    }

    fly(){
        console.log(this._name + " flies.")
    }

    makeSound(){
        console.log(this._name + " cik cik cik")
    }

}

// Override 
// Kus bir hayvandir 

const bird = new Bird("Mavis","Parrot","Blue");

console.log(bird);

bird.fly();
bird.makeSound();


const animal = new Animal("Animal","Animal species","Yellow");

console.log(animal);


// Car -> Electrical Car -> Self Driving Car


class Car{
    constructor(range, model){
        this.range = range;
        this.model =model;
    }

    getModelRange(){
        return this.range + " " + this.model;
    }

}

class ElectricCar extends Car{

    constructor(range,model,battery){
        super(range,model);
        this.battery = battery;
    }

    charge(){
        return this.model + " is charging..";
    }
}

class SelfDrivingCar extends ElectricCar{
     constructor(range,model,battery,auto){
        super(range,model,battery);
        this.auto = auto;
     }

     drive(){
        return this.model + "AI(Yapay zeka) is driving"
     }
}

let mercedes = new SelfDrivingCar(0,"Mercedes",100,"Autopilot");

console.log(mercedes.getModelRange());

console.log(mercedes.charge());

// Private, Protected, Public properties

class Person{

    #name;
    #surname;
    constructor(name,surname,age){
        this.#name = name; // Private
        this.#surname = surname; // Private
        this._age = age; // Public  
    }

    get name(){
        return this.#name;
    }

    set name(newName){
        this.#name = newName;
    }

    get surname(){
        return this.#surname;
    }

    set surname(newSurname){
        this.#surname = newSurname;
    }
    get age(){
        return this._age;
    }

    set age(newAge){
        if(newAge < 0){ // Protected logic
            newAge = 0;
        }
        this._age = newAge;
    }
    
    getName (){
        return this.#name;
    }
}

let p = new Person("John","GT",20);

console.log(p.name);

//p.name("Emre");
p.name = "Emre";

console.log(p.getName());
console.log(p.name);
p.age = -200;
console.log(p.age);
