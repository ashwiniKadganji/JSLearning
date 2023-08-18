console.log(`const arrayNums = [20, 3, 4,56, 90, 400, 49]`);

const arrayNums = [20, 3, 4,56, 90, 400, 49];

console.log(`---------------------::->Step 1<-::---------------------`);
console.log(`perform shallow clone on arrayNums, Update cloned array with values -> 55,66 using push() and log original and cloned array on console`);

let arrayClone = arrayNums;
console.log(`arrayClone: ${arrayClone}`);
arrayNums.push(55,66);
console.log(`Pushed 55 and 66 in arrayClone: ${arrayClone}`);
console.log(`Original array arrayNums: ${arrayNums}`);


console.log(`---------------------::->Step 2<-::---------------------`);
console.log(`Perform deep clone using spread operator, Update original array i.e arrayNums with values 10, 25 at last position and log original and cloned array on colsole `);

let arrayNums1 = [...arrayNums];
arrayNums.push(10,25);
console.log(`pushed 10, 25 in arrayNums: ${arrayNums}`);
console.log(`using spread operator arrayNums1:`,arrayNums1);

console.log(`---------------------::->Step 3<-::---------------------`);
console.log(`Given other array arrayEven = [2,30,14,8], Merge or concat this array with 'arrayNums' using spread operator ,log result on console after merge array operation`);

let arrayEven = [2,30,14,8];
let concatArray = [...arrayEven,...arrayNums];
console.log(concatArray);


console.log(`---------------------::->Step 4<-::---------------------`);
const employee_info = {
    emp_id : 27,
    emp_name : 'John Doe',
    salary:{
        july_month: "40,0000INR",
        aug_month: "50,0000INR",
        jun_month: "65,0000INR"
    },
    address:{
        locality: {
            colony: "OM Vridavana Society",
            street: "Kanchi Pokli, 134262",
        },
        city:"Mumbai",
        state: " Maharashtra",
        country: "India"
    },
    mobiles:["+91 8600 3456 88","1000 - 4567 32","+91- 9096 5678 77"]
}

console.log(`---------------------::->Step 5<-::---------------------`);
console.log(employee_info.address.locality, employee_info.address.city,employee_info.address.state,employee_info.address.country);

console.log(employee_info.mobiles);

console.log(`---------------------::->Step 6<-::---------------------`);
console.log(`--------a------`);
let newEmpInfo = JSON.parse(JSON.stringify(employee_info));
newEmpInfo.salary.july_month = "80,000INR";

console.log(`employee Info: ${employee_info.salary.july_month}`);
console.log(`New employee Info: ${newEmpInfo.salary.july_month}`);

console.log(`--------b------`);
employee_info.address.country = "United Kingdom";
console.log(`Original Object (employee Info):${employee_info.address.country}`);
console.log(`New employee Info: ${newEmpInfo.address.country}`);

console.log(`--------c------`);
console.log(`Original Object (employee_info): `,employee_info);
console.log(`New Object (newEmpInfo): `,newEmpInfo);

console.table(employee_info);
console.table(newEmpInfo);

