function add(num1, num2, ...num ){
    // console.log(`num1 ${num1},  num2 ${num2}`);
    // console.log(num);
    let numArray = [...num]
    let sum = 0;
    for (const iterator of numArray) {
        sum = sum + iterator
    }
   console.log(`The sum of ${num1} and ${num2} and ${num} is: ${num1 + num2 + sum}`);
}
add(5, 6);
add(9, 5, 6);
add(78, 90, 51, 68);
add(89, 90, 45,78, 90, 51, 68);