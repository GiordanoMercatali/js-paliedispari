// Even vs. Odd

let userChoice = ""; // even or odd
let userNumber; // number between 1 and 5
let pcNumber = Math.floor(Math.random() * (5 - 1 + 1)) + 1;
let choseOddEven = false; // if the user chose odd or even
let choseNumber = false; // if the user chose a number

do{
    userChoice = prompt("Choose between 'odd' and 'even'");
    if(userChoice === "even" || userChoice === "odd"){
        choseOddEven = true;
        console.log(pcNumber, choseOddEven);
    }

} while (choseOddEven === false);

do{
    userNumber = parseInt(prompt("Choose a number between 1 and 5"));
    if(!isNaN(userNumber || userNumber > 1 || userNumber < 5)){
        choseNumber = true;
        console.log(userNumber, choseNumber);
    }

} while (choseNumber === false);

winner = returnWinner(userChoice, userNumber);

function returnWinner(funcOddEven, funcNumber){

    let sum;
    sum = funcNumber + pcNumber;
    console.log(sum);
    let result = "";
    console.log(result);
    let winner = "";


    if (sum % 2 === 0){
        result = "even";
    } else{
        result = "odd";
    }

    if (result === funcOddEven){
        winner = "You win";
    } else {
        winner = "You lose";
    }

    return winner;
}