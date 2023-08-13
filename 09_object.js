//function expression : which function store 
let personGK = {
    empId: 2233,//key : value pair
    state: "MH",
    designation: "Tech Lead",
    city: "Pune",
    isMarried: true,
    show: function(){
        console.log(`Inside show function`);
    }
}
console.log(personGK);

console.log(typeof personGK);

console.log(`Emp Id: ${personGK.empId}`); // Dot Notation
console.log(`Emp city: ${personGK["city"]}`);

let isMarried = personGK.isMarried;
console.log(isMarried);

personGK.city = "Mumbai";
console.log(personGK);

delete personGK.designation;
console.log(personGK);

personGK.adharNumber = 123456781234;

personGK.show();

let array = [];

let bank = {
    bankName: "SBI Bank",
    accountNumber: 12345673,
    ifsc: "SBIN000567",
    address: {
        street: "Wakad Main Road",
        pin: 411057,
        landmark: "Near Petrol Pump",
        telPhone: "020-446789",
        city: "Pune",
        state: "MH",
        country : "India",
        getAddress: function(){
           console.log(`Bank Address: ${this.street}, ${this.landmark}, ${this.pin}, ${this.telPhone}, ${city}, ${this.state}, ${this.country}`);
        }
    },
    empNames : ["Jenny", "Elon", "Warrren", "Stew"]
}

let city = bank.address.city;
bank.address.country = "Maharashtra";
bank.empNames.pop();
bank.empNames.unshift("Mark");

bank.address.getAddress();

bank.empNames.push("Anil");



let student = {
    rollNumber: 2233,
    state: "MH",
    city: "Pune",
    college: "COEP Pune"
}

let keysStudent = Object.keys(student);
console.log(keysStudent);
let valuesStudent = Object.values(student);
console.log(valuesStudent);

console.log(`----------Traversing an object ------------ `);
for (const key in student) {
    if (Object.hasOwnProperty.call(student, key)) {
        const element = student[key];
        console.log(`Key: ${key}, value : ${element}`); 
    }
}


let isAvailable= "college" in student;

const pin = 123456;
//pin = 12134;//can't change constant value

const student1 = {
    rollNumber: 2233,
    state: "MH",
    city: "Pune",
    college: "COEP Pune"
}
student.city = "Mumbai";
console.log(student);

let person = {
    name: "abc",
    adhar: "XXXXXX"
}

// student = person; // Not allwed

const employee = {
    empNo: 2233,
    state: "MH",
    city: "Pune",
    company: "Infosys",
    designation: "Software Engineer"
}
Object.freeze(employee);
employee.empNo = 2345;
employee.company = "TCS";
console.log(employee);