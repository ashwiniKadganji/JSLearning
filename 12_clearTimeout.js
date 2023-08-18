
console.log(`collback function`);

let notification = function () {
    console.log(`------inside FE------`);
    console.log(`inside notification`);
}
// let intervalId =
 setTimeout(notification,3000)// 3sec = 3000 mili second
// clearTimeout(intervalId);

setTimeout(function(){
    for (let index = 0; index <=10; index++) {
        if (index%2 == 0) {
            console.log(index);
        }
        
    }
},5000);