// in JS we call function as first class citizen  
// 1. function expression
// 2. Callback

//------------------------------------------------
// 3.Function can return another function

function show(){
    console.log(`inside show function`);
    let innerfunction = function() {
        console.log(`inside inner function`);
    }
    return innerfunction;
}
let inner = show(); //  .....call the innerfunction
inner();
//or
//show()();     .....call the innerfunction