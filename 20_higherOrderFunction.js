
// why say the function is higher order function ?
// ans. --> a function that accept functions 


function greet(callback) {
    console.log(`Good Morning`);
    callback();
    let inner = function() {
        console.log(`Thank you, Fine....`);
     }
     return inner;
}
function inquire() {
    console.log(`HOW are you....`);
}
greet(inquire)();