console.log(`-------------------Question 1---------------------`);
function OddEven(num)
{
    if (num % 2 == 0){
       console.log(`The Given Number ${num} is EVEN`);
    }
    else
    {
        console.log(`The Given Number ${num} is ODD`);
    }

}
OddEven(45);
OddEven(70);
OddEven(67);
OddEven(98);


console.log(`-------------------Question 2---------------------`);
function words(str)
{
    if (str.length>10){
        console.log(`YES,String '${str}' is contain more than 10 character, string length is: ${str.length}`);
    }
    else
    {
        console.log(`NO,String '${str}' is Not contain more than 10 character, string length is: ${str.length}`);
    }
}
words('Javascript-ES6');
words('Python');


console.log(`-------------------Question 3---------------------`);

function stringStart(str)
{
    if (((str.startsWith('java')) || (str.startsWith('Java')))==true)
    {
        console.log(`YES,The given string '${str}' start with "Java" : ${str}`);
    }
    else
    {
        console.log(`NO,The given string '${str}' Not  start with "Java" : ${str}`);
    }
}
stringStart('javascript');
stringStart('Javascript');
stringStart('Python');
