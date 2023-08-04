
let professor = {                        //object declare
     Name : 'Jenny',
     Degree : 'MCS',           //step 1
     Number : 1234512345,
     city : 'Pune',
     pincode: 411234,

     Degrees : {                        //step 2
          Engineering : 'CSC',          
          PHD : 'Adv Computing',

          getDegreeFun: function(){        //step 4 
            console.log(`Teacher Degrees: ${this.Engineering} , ${this.PHD}`)
          }
     },                        
       Certificates : ['Hacker Rank Participation','Certificate in IFE course','Certificate in adv programming']   //step 3    
}

console.log(professor);
console.log(`-----------------------------------------`);

professor.Degrees.getDegreeFun();
console.log(`-----------------------------------------`);


professor.totalExperience = '14 years'; //step 5
console.log(`Total Experience : ${professor.totalExperience}`);
console.log(`-----------------------------------------`);

console.log(`'Engeenieering' Before value:`, professor.Degrees.Engineering);                            //step 6 
professor.Degrees.Engineering= "Computer Science";
console.log(`'Engeenieering' After value:`, professor.Degrees.Engineering);
console.log(`-----------------------------------------`);

professor.Certificates.push('Oracle Certified');
console.log(`Certificates :`,professor.Certificates); // step 7
console.log(`-----------------------------------------`);

let len = professor.Certificates.length;        // step 8
let lastChar = professor.Certificates[len-1];
console.log(`The last element of The array Certificates : ${lastChar}`);
console.log(`-----------------------------------------`);


