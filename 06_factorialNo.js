console.log('WAP to find the factorial of numbers: 5,9,11,7 using for loop, please make sure to write the function');
console.log(`-------------------------------------`);
// 5! = 5 * 4 * 3 * 2 * 1
function fact(num)
{
    let result = 1;
    for (let index = 1; index <= num; index++) {
        result = result * index;
        
    }
    console.log(`Factorial of ${num} is: ${result}`);
}
fact(5);
fact(9);
fact(11);
fact(7);
