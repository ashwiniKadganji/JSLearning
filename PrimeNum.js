function checkPrimeNum(num) {
    let count = 0;

    for (let i = 0; i <= num; i++) {
        if (num % i == 0 && num > 1) {
            count++;
        }
    }
    if (count == 2) {
        console.log(`Prime Number: ${num}`);
    }
    else{
         console.log(`Not a Prime Number: ${num}`);
    }
}
checkPrimeNum(11);
checkPrimeNum(21);



