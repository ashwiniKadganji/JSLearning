const array_numbers = [20, 11, 40, 25, 37, 49, 9, 90, 60, 2, 19];

console.log(`1>>. find the sum of all numbers using reduce and traditional way`);

console.log(`-------traditional way---------`);
let sum = 0;
for (const element of array_numbers) {
    sum = sum + element;
}
console.log(sum);
 

console.log(`----------reduce method---------`);
const totalSum = array_numbers.reduce((runningTotal, element) =>{
     return runningTotal + element;
});
console.log(totalSum);

console.log(`---------------------------------------------------------`);
console.log(`2>>. find the sum numbers multiple of 5 and then sum it`);

const arrayMul = array_numbers.filter((num) =>{
     return num % 5 === 0;
} );
console.log(`numbers of multiple of 5: ${arrayMul}`);

const sumArray = arrayMul.reduce((runningtotal , element) => {
    return runningtotal + element;
});
console.log(`sum of multiple of 5 numbers : ${sumArray}`);