console.log(`------------step 1-----------`);
function squareOfWordLength(str)
{
     var len = str.length;
     console.log(`1.2 The length of words is:${len} and It's length square is :${len * len}`);
     
}
squareOfWordLength('Javascript');
squareOfWordLength('Google Chrome');
squareOfWordLength('Developer Smart');


console.log(`------------step 2-----------`);

var strName = function()
{
    var str = `I am Angular Developer`;

    var len = str.length;
    console.log(`string length is:${len}`);

    var word = str.split(' ');
    var wordlen = word.length ;
    console.log(`total number of words :${wordlen}`);

    var divWords = len / wordlen;
    console.log(`2.1 The (divide by the total words) result is:${divWords}`);

    var mulwords = len * wordlen;
    console.log(`2.2The (multiple by the total words) result is:${mulwords}`);


}
strName();