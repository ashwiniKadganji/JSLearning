//function with no arguments and no return value.
function show()
{
    console.log('my name is Ashwini');
    console.log('i am software developer');
    console.log('my technical skills are - python ,html,css,javascript,angular');
}
show();//function invocation
console.log('----------------------------');


// checkType(true);
// checkType(undefined);
// checkType(null);
// checkType();

//function with argument and return value
function addition(arg1,arg2,arg3)
{
    console.log('values are:',arg1,arg2,arg3);
    var result = arg1 + arg2 + arg3;
    return result;
}
var res=addition(10,23,234);
console.log('result is:',res);
console.log('result is:',addition(-56,239,677));
console.log('result is:',addition('k','ashu',77));

