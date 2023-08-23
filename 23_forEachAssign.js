console.log(`const arrayNumbers = [1, -7, 40, 502, -77, 91, 0, 108, 89, -601]`);
const arrayNumbers = [1, -7, 40, 502, -77, 91, 0, 108, 89, -601];

console.log(`|||-------|||--------Step 1--------|||-------|||`);

arrayNumbers.forEach((value,index) => {
    console.log(`value: ${value}, index: ${index}`);
});

console.log(`|||-------|||--------Step 2--------|||-------|||`);

arrayNumbers.forEach((num) =>{
     if (num >= 0) {
        console.log(`The Positive number in array: ${num}`);
     }
});

console.log(`|||-------|||--------Step 3--------|||-------|||`);

let newArray = [...arrayNumbers];
newArray.forEach((num) => {
    if (num < 0) {
        console.log(`the Negative number in array: ${num}`);
    }
}) ;

console.log(`|||-------|||--------Step 4--------|||-------|||`);

arrayNumbers.forEach((num) => {
     if (num % 2 == 0) {
        console.log(`The Even number is: ${num}`);
     }
});

console.log(`|||-------|||--------Step 5--------|||-------|||`);

let sum = 0;
arrayNumbers.forEach((num) => {
        sum = sum + num;   
});
console.log(`Sum of all numbers in array: ${sum}`);


console.log(`|||-------|||--------Step 6--------|||-------|||`);

arrayNumbers.forEach((num,index) =>{
     if (index % 2 == 0) {
        console.log(`The Even indexed array value is: ${num}`);
     }
});