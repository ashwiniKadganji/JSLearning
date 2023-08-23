class Employee {
    constructor(emp_id, emp_name, emp_dept, emp_salary, emp_company){
        this.emp_id = emp_id,
        this.emp_name = emp_name,
        this.emp_dept = emp_dept,
        this.emp_salary = emp_salary,
        this.emp_company = emp_company
    }
}
const emp_anil = new Employee(22,"Anil","IT",50000,"TCS");
const emp_radha = new Employee(33,"Radha","HR",74000,"Wipro");
const emp_rishi = new Employee(55,"Rishi","Finance",47000,"TCS");
const emp_sonali = new Employee(66,"Sonali","Finance",45000,"Infy");
const emp_monika = new Employee(77,"Monika","IT",40000,"Wipro");
const emp_vinay = new Employee(88,"viny","IT",75000,"TCS");
const emp_mahi = new Employee(99,"Mahi","HR",85000,"Infy");

const arrayEmployees = [emp_anil,emp_radha,emp_rishi,emp_sonali,emp_monika,emp_vinay,emp_mahi];

for (const Employee of arrayEmployees) {

    console.log(`>>> Emp id: ${Employee.emp_id}, Emp Name: ${Employee.emp_name}, Emp Department: ${Employee.emp_dept}, Emp Salary: ${Employee.emp_salary}, Emp Company: ${Employee.emp_company}`);
}

console.log(`------|||---------------Step 1---------------|||------`);
//find all the employees working in "TCS" and log only emp name and company name on console

for (const Employee of arrayEmployees) {
    if (Employee.emp_company == 'TCS') {
        console.log(`Employee Name: '${Employee.emp_name}' and Company Name: '${Employee.emp_company}'`);
    }
}

console.log(`------|||---------------Step 2---------------|||------`);
//find the "Finance" department employees, log only department and emp name on console

for (const Employee of arrayEmployees) {
    if (Employee.emp_dept == "Finance") {
        console.log(`Department Name: ${Employee.emp_dept} and Employee Name: ${Employee.emp_name}`);
    }
}

console.log(`------|||---------------Step 3---------------|||------`);
// find the employees whose name start with "R" and complete emp details on console [ hint -> starts with("R")]

for (const Employee of arrayEmployees) {

    let startStr = "R";
    if (Employee.emp_name.startsWith(startStr) == true) {

        console.log(`>>> Emp id: ${Employee.emp_id}, Emp Name: ${Employee.emp_name}, Emp Department: ${Employee.emp_dept}, Emp Salary: ${Employee.emp_salary}, Emp Company: ${Employee.emp_company}`);
    }
}

console.log(`------|||---------------Step 4---------------|||------`);
// find the emp whose salary greater than 75000, and log on console emp name, company and salary
for (const Employee of arrayEmployees) {

    if (Employee.emp_salary > 75000) 
    {
        console.log(`Emp Name: ${Employee.emp_name}, Company Name: ${Employee.emp_company} and Salary: ${Employee.emp_salary}`);
    }
}

console.log(`------|||---------------Step 5---------------|||------`);
// find the emp's whose salary greater than or equal 50000 and from 'IT' dept, log complete details on console

for (const Employee of arrayEmployees) {
    if (Employee.emp_salary >= 50000 && Employee.emp_dept == "IT")
     {
        console.log(`>>> Emp id: ${Employee.emp_id}, Emp Name: ${Employee.emp_name}, Emp Department: ${Employee.emp_dept}, Emp Salary: ${Employee.emp_salary}, Emp Company: ${Employee.emp_company}`);
    }
}

console.log(`------|||---------------Step 6---------------|||------`);
// find out the emp from company "infy" and log console emp details on console
for (const Employee of arrayEmployees) {

    if (Employee.emp_company == "Infy") 
    {
        
        console.log(`>>> Emp id: ${Employee.emp_id}, Emp Name: ${Employee.emp_name}, Emp Department: ${Employee.emp_dept}, Emp Salary: ${Employee.emp_salary}, Emp Company: ${Employee.emp_company}`);
    }
}

