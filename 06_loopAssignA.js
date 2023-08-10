console.log(`-------------step 1----------`);
// WAP count the total number vowels including small and capital vowels for usinf while loop - > 'i am very good It developer'
 console.log( `str = I am very good IT Developer`);

function vowelsCount(str) {
    let count = 0;
    for (let index = 0; index < str.length; index++) {
        let char = str.charAt(index);
        
    if (char == 'a' || char == 'e' || char == 'i' || char == 'o' || char == 'u' || char == 'A' || char == 'E' || char == 'I' || char == 'O' || char == 'U') {
         
        console.log(char);
        count = count+1;
   }
 }
 console.log(`Total number of vowels is: ${count}`);
}
vowelsCount(`I am very good IT Developer`);


console.log(`-------------step 2----------`);
//Write a function to get the sum of cube of numbers from 1 to 5
function cubeSum(cube) {
    let sumOfCube = 0;
    for (let index = 1; index <= 5; index++) {
        sumOfCube = sumOfCube + index * index * index;   
    }
    console.log(`the sum of cube of numbers from 1 to 5: ${sumOfCube}`);
}
cubeSum();

console.log(`-------------step 3----------`);
// str1 = 'hard work always pays back ', str2 = 'soon i will be angular IT champ'
// function oddPodsitionChars() with one org
// log only odd positioned chars on console and do not consider empty spaces
// invoke or call this function for above string1 and string2 separately

function oddPositionChars(str)
 {
    let position ='';
    for (let index = 0; index <= str.length;index++) {
        const char = str.charAt(index);
     // log only odd positioned chars on console and do not consider empty spaces
     if (index % 2 != 0 && char != ' ') 
     {
        position = position.concat(char);
     }   
        
    }
    console.log(`${position}`);
}
oddPositionChars('Hard work always pays back');
oddPositionChars('Soon i will be angular IT champ')





