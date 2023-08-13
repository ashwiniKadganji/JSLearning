var fact = 1;
function factorial(num)
{
    if(num==1)
    {
        return fact;
    }
    else
    {
        fact = num * factorial(num-1);//5*4*3*2*1
        return fact;
    }
}
factorial(5);
console.log(`Factorial using recursion is: ${fact}`);