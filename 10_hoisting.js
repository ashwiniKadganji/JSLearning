console.log(country); //undefined ,  // not allowed because variable declared using var keyword always hoisted

console.log(city); // occure error ,  // not allowed because variable declared using let keyword never hoisted

console.log(pin); // occure error, // not allowed because variable declared using const keyword never hoisted

var country = 'bharat';
let city = 'pune';
const pin = 12345;

ex. 

display();  // allowed because named function is hoisted


// this is named or normal function

function display(){
   console.log(`inside display....`);
}

//o/p -> inside display....

// named or normal functions are hoisted.

ex. 

show(); // not allowed because function expression never hoisted

let show = function(){

    console.log(`inside function expression....`);
}

// o/p -> occure error , because the funtion expression is not hoisted, we can not invoked or called.
