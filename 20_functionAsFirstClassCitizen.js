// in JS function 
// 1. function expression
// 2. Callback

// why say the function is higher order function ?
// ans. --> a function that accept functions 
//------------------------------------------------
// 3.Function can return another function

function show(){
    console.log(`inside show function`);
    let innerfunction = function() {
        console.log(`inside inner function`);
    }
    return innerfunction;
}
let inner = show();
inner();
//or
//show()();     .....call the innerfunction