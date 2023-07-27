console.log(`---------------step 1----------------`);
var greaterNumber = function(num1,num2)
{
    var result = num1 > num2 ? num1 : num2;
    console.log(`The greatest number between ${num1} and ${num2} is :${result}`);
}
greaterNumber(10,-10);
greaterNumber(800,899);

console.log(`---------------step 2----------------`);
var isEvenOddNum = function(num)
{
   var number = num % 2 == 0 ? "True" : "False";
   console.log(`The number ${num} is:${number}`);
}
isEvenOddNum(29);
isEvenOddNum(44);
isEvenOddNum(0);
isEvenOddNum(101);

console.log(`---------------step 3----------------`);
var wordLength = function(word)
{
    var len = word.length 
    var check= len%2==0 ? "EVEN" : "ODD";
    console.log(`The Given string is:${word} and word length is:${len} and this is : ${check}`);   
}
wordLength('Javascript');
wordLength('developer');
wordLength('Google');