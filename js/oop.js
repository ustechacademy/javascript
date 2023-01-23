
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

class Car{
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

const bmw = new Car("Black","Bmw",1990,50000,150000);

console.log(bmw.start());
console.log(bmw.stop());

// Getters ve Setters

class Client{
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
const person = new Client("John",45, 1256);
person.tc = 1902;

console.log(person.clientCount);
console.log(Client.clientCount);





