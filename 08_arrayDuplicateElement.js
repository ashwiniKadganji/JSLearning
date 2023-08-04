console.log(`Write a program to remove duplicate elements from array`);

let array = [4, 5, 4, 5, 8, 5, 7, 8, 9, 7, 8];
console.log(`array = [4, 5, 4, 5, 8, 5, 7, 8, 9, 7, 8];`);
let array1 = [];
for (let index = 0; index < array.length; index++) {
        const element = array[index];
        if (!array1.includes(element)) {
                array1.push(element);
        }
}
console.log(`removed duplicate elements ${array1}`);