function show(){
    console.log(`inside show.....`);
}
show();
//self invoking function or IIFE - Immidietely invoked function expression
( function(){
    console.log(`inside display function...`);
} )();