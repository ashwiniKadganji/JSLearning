var greet = 'Good Morning';
var lenghtgreet = greet.length;
console.log(greet,'length of string are :',lenghtgreet);
console.log(`--------------------------------------------`);

var greetChar = greet.charAt(0);
console.log(`${greet} - char at 0th index is ${greetChar}`);
var lastChar = greet.charAt(lenghtgreet-1);
console.log(`Last char is ${lastChar} of index is ${lenghtgreet}`);
console.log(`-----------------------------------------`);

var firstName = 'ashwini';
var lastName = ' kadganji';
var result = firstName + lastName
console.log(`concatenated string is ${result}`);
console.log(`--------------------------------------------`);

var result =greet.split(``);
var words = result.length;
console.log(`total number of  words ${words}`);
console.log(`--------------------------------------------------`);

var greet ='              gooddd Morninggggg                        ';
var removeSpace = greet.trim();
var res = removeSpace.length;
console.log(`before trim string is ${greet.length} after trim string is ${removeSpace} and it's length is ${res}`);
var resultTrimEnd = greet.trimEnd();
var trimEndLength = resultTrimEnd.length;
var endSpace = greet.length - trimEndLength;
console.log(`End space is : ${endSpace}`);
console.log(`----------------------------------------------------------`);

var greet = 'Good Morning';
var result = greet.replace(' ','-');
console.log(`after replace ' ' with '-' string is : ${result}`); 

console.log(`----------------------------------------------`);
greet = 'Good Morning Virat Dude';
var result = greet.slice(5,9);
console.log(`slice from index 5 till 9 ${result}`);
