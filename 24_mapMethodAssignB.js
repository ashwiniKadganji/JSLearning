class Employee {
    constructor(emp_id, emp_name, emp_dept, emp_salary, emp_company){
        this.emp_id = emp_id;
        this.emp_name = emp_name;
        this.emp_dept = emp_dept;
        this.emp_salary = emp_salary;
        this.emp_company = emp_company;
    }
}
const emp_anil = new Employee(22, "Anil", "IT", 50000,"TCS");
const emp_radha = new Employee(33, "Radha", "HR", 50000,"Wipro");
const emp_rishi = new Employee(55, "Rishi", "Finance", 74000,"TCS");
const emp_sonali = new Employee(66, "Sonali", "Finance", 47000,"Infy");
const emp_monika = new Employee(77, "Monika", "IT", 40000,"Wipro");
const emp_viny = new Employee(88, "Vinayak", "IT", 75000,"TCS");
const emp_mahi = new Employee(99, "Mahesh", "HR", 85000,"Infy");

const arrayEmployee = [emp_anil,emp_radha,emp_rishi,emp_sonali,emp_monika,emp_viny,emp_mahi];

console.log(`--------------------------step 1-------------------------`);
console.log(`Get the list all employee names & log new array on console`);
   const EmployeeName = arrayEmployee.map((emp) => {
        return emp.emp_name;          
   });
   console.log(`List of Employee Names: ${EmployeeName}`);
   
console.log(`--------------------------step 2-------------------------`);
console.log(`Get the list of department & log on console.`);
    const DeptName = arrayEmployee.map((emp) =>{
         return emp.emp_dept;
    });
    console.log(`List of Departments :${DeptName}`);
console.log(`--------------------------step 3-------------------------`);
console.log(`Get the list of employee id's and log on console.`);

const EmployeeId = arrayEmployee.map((emp) =>{
     return emp.emp_id;
});
console.log(`List of employee id's : ${EmployeeId}`);