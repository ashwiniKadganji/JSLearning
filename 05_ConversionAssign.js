//numeric string used with + gives string type 
console.log(`-------------------------Implicit conversion to String--------------------`);
let result;

 result = '3' + 2;
 console.log(result);//32
 console.log(`Result is 32 because 2 is number type implicitly converted into string`);
 console.log(`=========================================================`);
 
 result = '3' + true;
 console.log(result);//3true
 console.log(`Result is 3true because true is boolean type implicitly converted into string`);
 console.log(`=========================================================`);
 
 result = '3' + undefined;
 console.log(result);//3undefined
 console.log(`Result is 3undefined because undefined is implicitly converted into string`);
 console.log(`=========================================================`);
 
 result = '3' + null;
 console.log(result);//3null
 console.log(`Result is 3null because null is implicitly converted into string`);
 

console.log(`-------------------------Implicit boolean conversion to Number--------------------`);

result = '4' - true;
console.log(result);
console.log(`Result is 3 because '4' is string converted into Number and true is 1.`);
console.log(`=========================================================`);

result = 4 + true;
console.log(result);
console.log(`Result is 5 because true is 1,It is Implicitly converted into the number.`);
console.log(`=========================================================`);

result = 4 + false;
console.log(result);
console.log(`Result is 4 because false is 0,It is Implicitly converted into the number.`);


console.log(`-------------------------Implicit string conversion to Number--------------------`);
//numeric string used with -,/,* results number type

result = '4' - '2';
console.log(result);
console.log(`Result is 2 because It is Implicitly converted into the number.`);
console.log(`=========================================================`);

result = '4' - 2;
console.log(result);
console.log(`Result is 2 because It is Implicitly converted into the number.`);
console.log(`=========================================================`);

result = '4' * 2;
console.log(result);
console.log(`Result is 8 because It is Implicitly converted into the number.`);
console.log(`=========================================================`);

result = '4' / 2;
console.log(result);
console.log(`Result is 2 because It is Implicitly converted into the number.`);

console.log(`-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-`);

console.log(`---------------------------0C-----------------------`);

result = 0 == '';
console.log(`0 == '' :`,result);
console.log(`space is converted into number and the result is true`);
console.log(`=========================================================`);

result = 0 == '0';
console.log(`0 == '0' :`,result);
console.log(`0 is converted into string and the result is true`);
console.log(`=========================================================`);

result = 0 == false;
console.log(`0 == false :`,result);
console.log(`false is converted into number 0 and the result is true`);
console.log(`=========================================================`);

result = null == undefined;
console.log(`null == undefined :`,result);
console.log(`The result is true because both are the different  types`);
console.log(`=========================================================`);

result = 1 == [1];
console.log(`1 == [1] :`,result);
console.log(`The result is true because both are the same types of number`);
console.log(`=========================================================`);

result = 1 == true;
console.log(`1 == true :`,result);
console.log(`true is converted into number 1 and so result is true`);
console.log(`=========================================================`);

result = 1 == '1';
console.log(`1 == '1' :`,result);
console.log(`'1' is converted into number and result is true`);
console.log(`-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-`);

