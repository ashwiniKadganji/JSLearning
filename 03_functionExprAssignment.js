console.log(`------------------step 1-------------`);
var square = function(num)
{
   var ans = num * num
   console.log(`square of given Number :${ans}`);
}
square(5);
square(6);
square(25);
square(100);
square(67.89);
square(59);

console.log(`------------------step 2-------------`);
console.log(`square typeof:`,typeof square);

console.log(`------------------step 3-------------`);
var rectangle = function(length,width)
{
      var result = length * width;
      console.log(`the area of rectangle : ${result}`);
}
rectangle(499,917);

console.log(`------------------step 4-------------`);
var swapValue = function(n1,n2)
{
    var temp;
    console.log(`before swapping values are: ${n1} and ${n2}`);
    temp = n1;
    n1 = n2;
    n2 = temp;
    console.log(`after swapping values are : ${n1} and ${n2}`);
}
swapValue('Mahi','Raina');
swapValue(55,77);

console.log(`------------------step 5-------------`);
var strOperations = function(str)
{
     
    console.log(`The given string is : JS the most popular language of internet`);

    var totalString = str.length;
    console.log(`A. Total character available in the string : ${totalString}`);

    var midChar = str.charAt(7);
    console.log(`B. The character at index 7 is : ${midChar}`);
    
    var charPos = str.charAt(12);
    console.log(`C. The character at index 12 is : ${charPos}`);

    var lastChar = str.charAt(totalString-1);
    console.log(`D. The last character is : ${lastChar}`);

    var firstChar = str.charAt(0);
    console.log(`E. The very first character from given the string :${firstChar}`);

    var thirdLastChar = str.charAt(totalString-3);
    console.log(`F. The third last character is : ${thirdLastChar}`);

    var result = str.split(' ');
    var words = result.length;
    var square = words * words;
    console.log(`G. The total number of Words :${words} and the square of total words : ${square}`);
}
strOperations(`JS the most popular language of internet`);
