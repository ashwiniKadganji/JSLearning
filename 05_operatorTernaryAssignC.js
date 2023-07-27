console.log(`---------------------------------Step 1--------------------------`);
function maleMarriageEligibility(gender,age,boyName)
{
   var result = gender == 'Male' && age >= 21?'Eligible for Marriage':'Not eligible for Marriage';
     console.log(`${boyName} :${result} `);
}
maleMarriageEligibility('Male',25,'Billgates');
maleMarriageEligibility('Male',17,'Stew Jobs');

console.log(`---------------------------------Step 2--------------------------`);
function femaleMarriageEligibility(gender,age,girlName)
{
    var result = gender ='Female' && age >= 18?'Eligible for Marriage' : 'Not Eligible for Marriage';
    console.log(`${girlName}:${result}`);
}
femaleMarriageEligibility("Female",16,"Jenifer");
femaleMarriageEligibility('Female',27,'Malinda Gates');

console.log(`----------------------------------------------`);