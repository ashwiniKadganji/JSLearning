let employeeInfoJson = `{
    "name" : "Aleix Melon",
     "id" : "E00245",
     "role" : ["Dev","DBA"],
     "age" : 23,
     "doj" : "11-12-2019",
     "married" : false,
     "address":{
        "street":"32,Laham St.",
        "city":"Innsbruck",
        "country":"Austria"
     },
     "referred-by":"E0012"
}`;

const employee = JSON.parse(employeeInfoJson);
//console.log(typeof employeeInfoJson);


console.log(`1>> log role = Dev`);

const arrayRole = employee.role;
for (const role of arrayRole) {
    if (role == "Dev") {
        console.log(`Ans : ${role}`);
    }
    
}

console.log(`--------------------------------`);

console.log(`2>> log last name = Melon`);
const employeeName = employee.name;
let array = employeeName.split(" ")
console.log(`array: ${array}`);
for (const name of array) {
    if (name == "Melon") {
        console.log(`name: ${name}`);
    }
}


console.log(`--------------------------------`);

console.log(`3>> log date year = 2019`);

const employeeDoj = employee.doj;
// using get to year method
var dateFormat = new Date(employeeDoj);
console.log(`DOJ year: ${dateFormat.getFullYear()}`);




