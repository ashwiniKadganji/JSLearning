const arrayNumbers = [20,11,40,25,37,49,9,90,60,2,19];

console.log(`-------------step 1----------------`);
const greaterNum = arrayNumbers.filter((currentValue) => {
      return currentValue > 50;
});
console.log(`Greater than 50 numbers are: `,greaterNum);

console.log(`-------------step 2----------------`);

const EvenNum = arrayNumbers.filter((currentValue) =>{
      return currentValue % 2 == 0;
});
console.log(` The Even numbers are: `,EvenNum);

console.log(`-------------step 3----------------`);

const oddNum = arrayNumbers.filter((currentValue) => {
        return currentValue % 2 != 0;
});
console.log(`The Odd numbers are: `,oddNum);

console.log(`-------------step 4----------------`);

const multipleNum = arrayNumbers.filter((currentValue) => {
      return currentValue % 5 === 0;
});
console.log(`Numbers are multiple of 5: `,multipleNum);

console.log(`-------------step 5----------------`);
const betweenNum = arrayNumbers.filter((num) =>{
    return 20 < num && num < 50;
});
console.log(`Numbers are between 20 and 50: `,betweenNum);