
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