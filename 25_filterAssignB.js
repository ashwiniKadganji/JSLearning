// what is the role of cunstructor?
//constructor is used to initilize the object
class Employee {
    constructor(emp_id, emp_name, emp_dept, emp_salary, emp_company) {
      this.emp_id = emp_id;
      this.emp_name = emp_name;
      this.emp_dept = emp_dept;
      this.emp_salary = emp_salary;
      this.emp_company = emp_company;
    }
  }
  const emp_anil = new Employee(22, "Anil", "IT", 50000, "TCS");
  const emp_radha = new Employee(33, "Radha", "HR", 74000, "Wipro");
  const emp_rishi = new Employee(55, "Rishi", "Finance", 47000, "TCS");
  const emp_sonali = new Employee(66, "Sonali", "Finance", 45000, "Infy");
  const emp_monika = new Employee(77, "Monika", "IT", 40000, "Wipro");
  const emp_viny = new Employee(88, "Vinayak", "IT", 75000, "TCS");
  const emp_mahi = new Employee(99, "Mahesh", "HR", 85000, "Infy");
  
  let arrayEmployees = [
    emp_anil,
    emp_radha,
    emp_rishi,
    emp_sonali,
    emp_monika,
    emp_viny,
    emp_mahi,
  ];

  console.log(`------------step 1-----------------`);
  const employeeTcs = arrayEmployees.filter((employee) => {
    return employee.emp_company === 'TCS';
  });
  console.log(employeeTcs);
  for (const employee of employeeTcs) {
    console.log(`Company Name: ${employee.emp_company}, Employee Name: ${employee.emp_name}`);
  }


  console.log("===== Find the TCS employees and get the list of employee names only ======");
  const tcsEmployees = arrayEmployees.filter((employee)=> {
    return employee.emp_company==='TCS';
  });
  const employeeTcsNames = tcsEmployees.map((employee)=> {
    return employee.emp_name;
  });
  console.log(employeeTcsNames);

  console.log(`**************or*****method chaining********`);
  arrayEmployees.filter(employee => employee.emp_company === 'TCS')
  .map(employee =>  employee.emp_name)
  .forEach(empName => console.log(empName));


  console.log(`-------------------------------step 2------------------`);
  console.log(`find the average salary of employees from company wipro`);

  const empWipro =  arrayEmployees.filter((employee) => {
    return employee.emp_company === 'Wipro';
  });
  console.log(empWipro);
for (const employee of empWipro ) {
     console.log(`Company Name: ${employee.emp_company} , Salary: ${employee.emp_salary}`);
}

console.log(`-----or------`);
const  wiproEmp = arrayEmployees.filter(employee =>{
  return employee.emp_company === "Wipro"; 
});

let salarySum = 0;
for (const employee of wiproEmp) {
  salarySum = salarySum + employee.emp_salary;
}
console.log(`The avrage salary from wipro: ${salarySum/wiproEmp.length}`);

console.log(`--------------------step 3-------------------------------`);
console.log(`find the avg salary of employee from companies wipro or infy`);

const infyEmployee = arrayEmployees.filter(employee =>{
  return employee.emp_company === "Infy";
});

let salaryTotal = 0;
for (const employee of infyEmployee) {
     salaryTotal = salaryTotal + employee.emp_salary;
}
console.log(`The avrage salary from Infy: ${salaryTotal/infyEmployee.length}`);