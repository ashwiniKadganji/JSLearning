function vowelCount(str) {
        for (let index = 0; index < str.length; index++) {
            let char = str.charAt(index);

    if (char == 'a' || char == 'A' || char == 'e' || char == 'E' || char == 'i' || char == 'I' || char == 'o' || char == 'O' || char == 'u' || char == 'U') {
        console.log(char);
    }   
}
}
vowelCount(`I am a Angular Developer`);

console.log(`----------------------------------------------`);

function oddPositionedChars(str) {
    for (let index = 0; index < str.length; index++) {
        const char = str.charAt(index);
        // Log only odd positioned chars on console and do not consider empty spaces
    }

}
oddPositionedChars("hello");
oddPositionedChars("test");
