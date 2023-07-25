//write program swap two variables using third variable and function..


function swap(n1,n2)
{
  console.log('before swaping','value1 : ',n1,'value2 : ',n2);
  var temp;
  temp = n1;
  n1 = n2;
  n2 = temp;
  console.log('after swaping','value1 :',n1,' value2 :',n2);

}
var sweety ='Sweety';
var cutie = 'Cutie';
swap(sweety,cutie);
console.log('-------------------------------------------------');

function swapping(val1,val2,val3)
{
 var temp;
 console.log('before swapping ==>','value1',val1,'value2',val2,'value3',val3);
 temp = val1;
 val1 = val2;
 val2 = val3;
 val3 = temp;
 console.log('after swapping ==>','value1',val1,'value2',val2,'value3',val3);
}
var num1 = 100;
var num2 = 200;
var num3 = 300;
swapping(num1,num2,num3);
