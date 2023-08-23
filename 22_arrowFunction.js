

let add = function() {
    console.log(12+12);
}
add();

// let arrowFun = ()=>{
//     console.log(24+24);
// }
// arrowFun();

//or

// let arrowFun = ()=> console.log(24+24); //without using curly braces
// arrowFun();
//or


let arrowFun = ()=>{
 return 24+24;  //using return statement
}
let value = arrowFun();
console.log(value);

//or

// let arrowFun = ()=>24+24; // no need to used by return statement
// let value = arrowFun();
// console.log(value);

//arrow function with argument
let multiply = (num1,num2) => {
    console.log(num1 * num2);
}
multiply(5,6);

