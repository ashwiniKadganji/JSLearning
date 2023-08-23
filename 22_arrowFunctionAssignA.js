console.log(`--------|||-------Step 1--------|||-------`);
//1. with no args and no return value,log msg on console inside arrow function

let msg = () => {
    console.log(`"Good Morning, Today is Tuesday"`);
}
msg();

console.log(`--------|||-------Step 2--------|||-------`);
// with 3 args & no return value, for received 3 parameters perform the multiplication 

let Multiplication = (num1,num2,num3=1) =>{
      console.log(`The values are => num1: ${num1} , num2: ${num2} and num3: ${num3} ,Multiplication of 3 args: ${num1 * num2 * num3}`);
}
Multiplication(5,5,2);
Multiplication(10,4);

console.log(`--------|||-------Step 3--------|||-------`);
//with 5 args & return value such as, for received params it should dothe addition

let addition = (num1,num2,num3,num4,num5) =>{
     return num1 + num2 + num3 + num4 + num5;   
}
let add = addition(100,100,200,349,756);
let concat = addition("I am"," learning"," ES6"," features"," in depth");

console.log(`The Addition of => ${add}`);
console.log(`The Concatenation of => ${concat}`);