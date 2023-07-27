var display = function() //function expression ----declare the var for function
{
    console.log(`i am angular developer !`);
}
display()
console.log(typeof display);

//this function expression with argument and return value
var wordCount = function(word)
{
    var words = word.split(' ');   
    var wordCount = words.length;
    console.log(`in given string - ${word}`);
    return wordCount;
}
var result = wordCount('i am UI developer');
console.log(`total word count is : ${result}`);