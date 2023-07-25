console.log('--------------------------step1--------------------');

function show()
{
    console.log('my name is Ashwini');
}
show()

function write()
{
    console.log('I am Good Learner...');
}
write()

console.log('------------------------step2------------------');

function personalDetails(firstName,lastName,collegeName)
{
    console.log('First Name:',firstName,'Last Name:',lastName,'College Name:',collegeName);
}
personalDetails('Ashwini','Kadganji','Nigadi Camp');


console.log('---------------------------step3------------------');

function swapValues(arg1,arg2)
{
  console.log('before swapping ==>','value1:',arg1,'value2:',arg2);
  var temp;
  temp = arg1;
  arg1 = arg2;
  arg2 = temp;
  console.log('after swapping ==>','value1:',arg1,'value2:',arg2);
}
swapValues('Virat','Anushka');
swapValues('1000','2000');

console.log('-------------step4---------------------------------');
function addThreeValues(num1,num2,num3)
{
    console.log('val1:',num1,'val2:',num2,'val3:',num3);
    return num1 + num2 + num3
}
var result = addThreeValues(10.23,600,40);
console.log('total is :',result);
console.log('total is :', addThreeValues('Hello','Good','Morning'));

console.log('-------------step5---------------------------------');

function bankDetails(bankName,accountNum,location,pinCode)
{
   console.log('Bank Name:',bankName,'Account Number:',accountNum,'Location:',location,'Pin Code:',pinCode);
}
bankDetails('CITI Bank','3456782345','Pune',431202);
bankDetails('Axis Bank','1216782145','Mumbai',441202);
bankDetails('HDFC Bank','3456342545','Pune',631202,'Open');