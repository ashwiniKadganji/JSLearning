const arrayFruits = ['Banana','Orange','Apple','Mango','Water Melon'];
console.log(`arrayFruits = ['Banana','Orange','Apple','Mango','Water Melon'];`);

console.log(`_-_-_-_-_- Question 1 -_-_-_-_-_`);
let arrayLength = arrayFruits.length;
console.log(`First Element : '${arrayFruits[0]}' and Last Element : '${arrayFruits[arrayLength-1]}'`);

console.log(`_-_-_-_-_- Question 2 -_-_-_-_-_`);
console.log(`Add element 'papaya' before the element 'Banana':`);
arrayFruits.unshift('Papaya');
console.log(arrayFruits);

console.log(`_-_-_-_-_- Question 3 -_-_-_-_-_`);
var replaceName = arrayFruits.splice(4,1);
console.log(`remove 'Mango' from the array :`);
console.log(arrayFruits);

console.log(`_-_-_-_-_- Question 4 -_-_-_-_-_`);
var PineappleName = arrayFruits.push('Pineapple');
console.log(`Insert the element 'Pineapple' the last position :`);
console.log(arrayFruits);

console.log(`_-_-_-_-_- Question 5 -_-_-_-_-_`);
var dragonName = arrayFruits.splice(4,0,'Dragon Fruit');
console.log(`Insert an element - 'Dragon Fruit' before 'Water Melon' :`);
console.log(arrayFruits);

console.log(`_-_-_-_-_- Question 6 -_-_-_-_-_`);
var kiwiName = arrayFruits.splice(2,1,'Kiwi');
console.log(`Replace an element 'Orange' with 'Kiwi' :`);
console.log(arrayFruits);

console.log(`_-_-_-_-_- Question 7 -_-_-_-_-_`);
var index = arrayFruits.splice(1,4);
console.log(`print the elements starting from index 1 to 4 :`);
console.log(arrayFruits);

console.log(`_-_-_-_-_- Question 8 -_-_-_-_-_`);
const arrayFruits1 = ['Banana','Orange','Apple','Mango','Water Melon'];
arrayFruits1.splice(0,2);
console.log(`print last 3 element :`);
console.log(arrayFruits1);