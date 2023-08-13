console.log(`------------------step 1-------------------`);
let personalDetails = {
    firstName : 'Ashwini',
    lastName : 'Kadganji',
    address : 'Thergaon',
    Education : 'BCS',
    pincode : 411033,
    city : 'Pune'    
}
console.log(`Personal Details Are ==> First Name: ${personalDetails.firstName}, Last Name: ${personalDetails.lastName}, Address: ${personalDetails.address}, Education: ${personalDetails.Education}, PinCode: ${personalDetails.pincode}, city: ${personalDetails.city}`);

console.log(`------------------step 2-------------------`);

let collegeDetails = {
    collegeName : 'Dr. Arvind B. Telang Senior College',
    collegeAddress : 'Nigadi',
    collegeStaff: 40,
    specialSub: 'Computer Science', 
}
console.log(`College Details ==> College Name: ${collegeDetails.collegeName}, College Address : ${collegeDetails.collegeAddress}, Number of staff in college: ${collegeDetails.collegeStaff}, Special Subject: ${collegeDetails.specialSub}`);
// console.table(collegeDetails);



console.log(`------------------step 3-------------------`);
let mergeDetails = Object.assign({}, personalDetails, collegeDetails);
console.table(mergeDetails);

console.log(`------------------step 4-------------------`);
let arrayFriends = ['Renuka','Lavanya','Bhavana','Gauri'];
Object.freeze(arrayFriends);
console.log(arrayFriends);
console.log(`Friends List: ${arrayFriends}`);

console.log(`------------------step 5-------------------`);

for (const element of arrayFriends) 
{
    console.log(element);
}

console.log(`------------------step 6-------------------`);
function reverseStr(str) {
    let reverse=' ';
    let str1 = 'Codemind';
    for (let index = str.length-1; index >= 0; index--)
   {
    const char = str.charAt(index);
    if (char != ' ') {
        reverse = reverse.concat(char);
    }
}

console.log(`Output is: ${str1}${reverse}`);
}
reverseStr('Technology');
