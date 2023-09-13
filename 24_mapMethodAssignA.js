console.log(`--------------step 1----------------------`);
console.log(`add 10 into each element and log new array result on console`);
const arrayNumbers = [20, 11,40,25, 23, 11, 9, 31, 60, 2, 19];

const arrayOfAdd = arrayNumbers.map((currentValue) =>{
    return currentValue + 10;
});
console.log(arrayOfAdd);

console.log(`--------------step 2----------------------`);
console.log(`Cube the each array element anf log on console`);
const arrayOfCube = arrayNumbers.map((currentValue) => {
     return currentValue * currentValue *currentValue;
});
console.log(arrayOfCube);

console.log(`--------------step 3----------------------`);
console.log(`add the index value into its corresponding each array element and log new array result on console`);
const arrayAddIndexValue = arrayNumbers.map((currentValue , index) => {
    return currentValue + index;
});
console.log(arrayAddIndexValue);