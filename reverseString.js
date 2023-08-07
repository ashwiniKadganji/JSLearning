
function reverseString(str) {
    let reverse ='';
    for (let index = str.length-1; index >= 0; index--) {
        const char = str.charAt(index);
      if (char != ' ') {
        reverse = reverse.concat(char);
      }
        
    }
    console.log(`${reverse}`);
}
reverseString('Hard work always pays back');
reverseString('Soon i will be angular IT champ')