console.log(`--------------step 1----------------------`);
const arrayNumbers = [20, 11,40,25, 23, 11, 9, 31, 60, 2, 19];

const arrayOfAdd = arrayNumbers.map((currentValue) =>{
    return currentValue + 10;
});
console.log(arrayOfAdd);

console.log(`--------------step 2----------------------`);
const arrayOfCube = arrayNumbers.map((currentValue) => {
     return currentValue * currentValue *currentValue;
});
console.log(arrayOfCube);

console.log(`--------------step 3----------------------`);
const arrayAddIndexValue = arrayNumbers.map((currentValue , index) => {
    return currentValue + index;
});
console.log(arrayAddIndexValue);