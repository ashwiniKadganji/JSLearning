const arrayNumbers = [20, 31, 40, 25, 23, 11, 29, 9, 60, 2, 11];
console.log(`arrayNumbers = [20, 31, 40, 25, 23, 11, 29, 9, 60, 2, 11]`);

console.log(`~~~~~~~~~~~~~ Question 1 ~~~~~~~~~~~~~~~~`);
let arrayLength = arrayNumbers.length;
console.log(`The total element available oe length is: ${arrayLength}`);

console.log(`~~~~~~~~~~~~~ Question 2 ~~~~~~~~~~~~~~~~`);
console.log(`First Element : '${arrayNumbers[0]}' and Last Element : '${arrayNumbers[arrayLength-1]}' `);

console.log(`~~~~~~~~~~~~~ Question 3 ~~~~~~~~~~~~~~~~`);
console.log(`Thirst last Element : ${arrayNumbers[arrayLength-3]}`);

console.log(`~~~~~~~~~~~~~ Question 4 ~~~~~~~~~~~~~~~~`);
console.log(`Find all even element using length property.`);

let EvenNumbers = arrayNumbers.filter(num => {
    return num % 2 == 0;
});
console.log(`Even Numbers : `,EvenNumbers);

console.log(`~~~~~~~~~~~~~ Question 5 ~~~~~~~~~~~~~~~~`);
console.log(`Find the odd numbers for in loop`);

let OddNumbers = arrayNumbers.filter(num => {
    return num % 2 !== 0;
});
console.log(`Odd Numbers : `,OddNumbers);

console.log(`~~~~~~~~~~~~~ Question 6 ~~~~~~~~~~~~~~~~`);
console.log(`Find all the Even positioned elements from arrayNumbers ,and sum of the  all even position numbers `);
var sum = 0;
for (let index = 0; index < arrayNumbers.length; index++) {
    if (index % 2 == 0) {
        const EvenNumbers = arrayNumbers[index];
        console.log(EvenNumbers);
        sum =sum + EvenNumbers;
    }   
}
console.log(`Sum of the all Even position numbers: ${sum}`);

console.log(`~~~~~~~~~~~~~ Question 7 ~~~~~~~~~~~~~~~~`);
console.log(`Find all the odd positioned elements from arrayNumbers ,and sum of the all odd position numbers `);
var sum= 0;
for (let index = 0; index < arrayNumbers.length; index++) {
    if (index % 2 !== 0) {
    const element = arrayNumbers[index];
    console.log(element);
    sum =sum + element;
    }
}
console.log(`Sum of the all odd position numbers: ${sum}`);

console.log(`~~~~~~~~~~~~~ Question 8 ~~~~~~~~~~~~~~~~`);
console.log(`Find the sum of all elements from arrayNumbers`);
var Total = 0;
for (let index = 0; index < arrayNumbers.length; index++) {
    const element = arrayNumbers[index];
    var Total = Total + element;
}
console.log(`Sum of all numbers in array : ${Total}`);

console.log(`~~~~~~~~~~~~~ Question 9 ~~~~~~~~~~~~~~~~`);
console.log(`Find the numbers which are multiple of 5`);
var num = 0;
for (let index = 0; index < arrayNumbers.length; index++) {
    const element = arrayNumbers[index];
    if (element % 5 == 0) {
        console.log(`The numbers are multiple of 5 : ${element}`);
    }
}

console.log(`~~~~~~~~~~~~~ Question 10 ~~~~~~~~~~~~~~~~`);
console.log(`is number 115 available in arrayNumbers`);
let result = arrayNumbers.includes(115);
console.log(result);

console.log(`~~~~~~~~~~~~~ Question 11 ~~~~~~~~~~~~~~~~`);
console.log(`is number 23 available in arrayNumbers`);
let result1 = arrayNumbers.includes(23);
console.log(result1);

console.log(`~~~~~~~~~~~~~ Question 12 ~~~~~~~~~~~~~~~~`);
console.log(`Insert numbers -> 55,66 before index 3`);
let result2 = arrayNumbers.splice(3,0,55,66);
console.log(arrayNumbers);

console.log(`~~~~~~~~~~~~~ Question 13 ~~~~~~~~~~~~~~~~`);
console.log(`Delete 3 elements starting from index 4`);
const arrayNumbers1 = [20, 31, 40, 25, 23, 11, 29, 9, 60, 2, 11];
console.log(arrayNumbers1.splice(4,3));
console.log(arrayNumbers1);