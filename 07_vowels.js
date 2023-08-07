function vowelCount(str) {
    let count = 0;
        for (let index = 0; index < str.length; index++) {
            let char = str.charAt(index);

    if (char == 'a' || char == 'A' || char == 'e' || char == 'E' || char == 'i' || char == 'I' || char == 'o' || char == 'O' || char == 'u' || char == 'U') {
        console.log(char);
        count = count+1;
    }   
}
console.log(`Total number of vowels is : ${count}`);
}
vowelCount(`I am a Angular Developer`);

console.log(`----------------------------------------------`);

console.log(`---------------------------`);

//WAP to get sum of number from 1 to 20
let sum = function(){
   let totalSum = 0;
   for (let index = 1; index <= 20; index++) {
     totalSum = totalSum + index ;
   }
   console.log(`sum of number from 1 to 20: ${totalSum}`);
}
sum();