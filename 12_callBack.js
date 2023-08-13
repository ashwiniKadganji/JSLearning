function jennyHomework(callbackStew,callbackElon){

    console.log(`Jenny started assignment`);

    console.log(`Jenny took some time`);

    console.log(`Jenny Completed All her home work`);

    console.log(`Jenny calling back to stew`);

    callbackStew();
    callbackElon();

}

 

let stewCopyHomework = function(){
    console.log(`------------Stew-----------`);

    console.log(`Thank you Jenny for giving me everything ready`);

    console.log(`Stew started copying`);

    console.log(`Stew copied all homework`);

}

let ElonCopyHomework = function(){
    console.log(`------------Elon-----------`);

    console.log(`Thank you Jenny for giving me everything ready`);

    console.log(`Elon started copying`);

    console.log(`Elon copied all homework`);

}

jennyHomework(stewCopyHomework,ElonCopyHomework);
