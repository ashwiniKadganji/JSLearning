//

var leapYear = function(year)
{
    if (year<=0 || isNaN(year)) {
        console.log(`Year : ${year} =>Invalid Data`);
    }
    else{
        
        if ((0 == year % 4) && (0 != year % 100) || (0 == year % 400))
       {
        console.log(`Year: ${year} => Is a leap Year`);
       } 
    else
       {
        console.log(`Year: ${year} => Is Not a leap Year`);
       }
    }
}
leapYear(2020);
leapYear(1999);
leapYear(1600);
leapYear(2022);
leapYear(1945);
leapYear(null);
leapYear('twenty twenty');
leapYear(undefined);
leapYear(NaN);
leapYear(1750);