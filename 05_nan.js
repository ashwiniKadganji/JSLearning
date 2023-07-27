//NaN - not a number

var num1 = 0;
var num2 = 0;
var result = num1 / num2 ;
console.log(result);

// + operator is used for addition and concatination

var num3 = '100';
console.log(`type of num3 is :${typeof num3}`);//string
var num3 = +num3;
console.log(`type of num3 is :${typeof num3}`);//number

var num4 = 'Javascript';
var result1 = +num4;
console.log(`num4 is :${result1}`);//NaN



console.log(`--------------Implicit Conversion------------`);
var result = '5' + '6';
console.log(result);
var result = 5 + '6';
console.log(result);
