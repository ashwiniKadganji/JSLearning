function stringHandsOn()
{
   var str = '   Hey you are doing good, keep it up    ';

   console.log(`----------------------------------step 1-------------------------`);
   console.log(`The given String is :${str}`);

   console.log(`----------------------------------step 2-------------------------`);
   var len = str.length;
   console.log(`The given string length is : ${len}`);

   console.log(`----------------------------------step 3-------------------------`);
    var removeSpace = str.trim();
    var afterTrim = removeSpace.length;
    console.log(`after string is:${afterTrim} `);


   console.log(`----------------------------------step 4-------------------------`);
   var extraSpace = len - afterTrim;
   console.log(`total number of extra space:${extraSpace}`);
   
   console.log(`----------------------------------step 5-------------------------`);
   var firstChar = removeSpace.charAt(0);
   var lastChar = removeSpace.charAt(afterTrim-1);
   console.log(`after trim first character : ${firstChar} and last character : ${lastChar}`);

   
   console.log(`----------------------------------step 6-------------------------`);
   var totalWords = removeSpace.split(``);
   console.log(`the count of total words :${totalWords}`);
   
   console.log(`----------------------------------step 7-------------------------`);
    var wordOfGood = removeSpace.indexOf('good');
    console.log(`the index of word good is:${wordOfGood}`);
    
   console.log(`----------------------------------step 8-------------------------`);
   var subString1 = removeSpace.substring(22);
   var sliceString = removeSpace.slice(22);
   console.log(`the given Substring is: ${subString1} and Slice is: ${sliceString}`);

   
   console.log(`----------------------------------step 9-------------------------`);
   var stringEnds = removeSpace.endsWith('up');
   console.log(`string ends with word 'up':${stringEnds}`);
   
   console.log(`----------------------------------step 10-------------------------`);
   var stringStarts = removeSpace.startsWith('Hey');
   console.log(`stringg starts with 'hey':${stringStarts}`);
}
stringHandsOn()