// Palindrome

let userWord = ""; // type a word
let choseWord = false;
let reversedWord = "";

while (choseWord === false){
    userWord = prompt("Type a word");
    choseWord = true;
    console.log(`Your word is: ${userWord}`);
}



reverseResult = reverseString(userWord);

const isPalindrome = returnPalindrome(userWord, reversedWord);
console.log(isPalindrome);

function reverseString(stringToReverse){
    for(let i = stringToReverse.length - 1; i >= 0; i--){
        reversedWord += stringToReverse[i];
    }
    console.log(reversedWord);
    return reversedWord;
}

function returnPalindrome(funcWord, funcWordR){
    let isPalindrome = false;

    if(funcWord === funcWordR){
        isPalindrome = true;
    }
    return isPalindrome;
}