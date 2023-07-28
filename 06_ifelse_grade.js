var voteEligibe = function(age)
{
    var ageNum = +age;
    if (age<=0 || isNaN(ageNum) || age >= 130) {
        console.log(` The  age ${age} : invalid`); 
    }
    else
    {
        if (age >= 18)
        {
            console.log(`the age of ${age} :Eligible for Voting.`);
        }
        else
        {
            console.log(`the age of ${age} : Not Eligible for Voting.`);
        }
    }
}
voteEligibe(45);
voteEligibe(17);
voteEligibe(8);
voteEligibe(20);
voteEligibe(-10);
voteEligibe(200);
voteEligibe(0);
voteEligibe(undefined);
voteEligibe(null);
