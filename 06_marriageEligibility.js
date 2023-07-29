function marriageEligibility(gender,age)
{
    if ((gender == 'Female' && age >= 18) || (gender == 'Male' && age >= 21))
    {
        console.log(`Gender :${gender} and Age :${age} => You are Eligible for Marriage.`);
    }
    else
    {
        console.log(`Gender :${gender} and Age: ${age} => You are Not Eligible for Marriage.`);
    }
}
marriageEligibility('Male',17);
marriageEligibility('Male',25);
marriageEligibility('Female',28);
marriageEligibility('Female',16);
marriageEligibility('Other',35);
marriageEligibility('other',41);