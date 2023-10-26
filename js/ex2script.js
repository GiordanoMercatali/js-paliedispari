// Even vs. Odd

let userChoice = ""; // even or odd
let userNumber; // number between 1 and 5
let pcNumber = Math.floor(Math.random() * (5 - 1 + 1)) + 1;
let choseOddEven = false; // if the user chose odd or even
let choseNumber = false; // if the user chose a number

while (choseOddEven === false){
    userChoice = prompt("Choose between 'odd' and 'even'");
    if(userChoice === "even" || userChoice === "odd"){
        choseOddEven = true;
        console.log(pcNumber);
    }
}

while (choseNumber === false){
    userNumber = parseInt(prompt("Choose a number between 1 and 5"));
    if(!isNaN(userNumber) && userNumber >= 1 && userNumber <= 5){
        choseNumber = true;
        console.log(userNumber);
    }
}

const winner = returnWinner(userChoice, userNumber, pcNumber);
alert(winner);

function returnWinner(funcChoice, funcNumber, funcPcNumber){

    let sum;
    sum = funcNumber + funcPcNumber;
    console.log(sum);
    
    let result = "";

    if (sum % 2 === 0){
        result = "even";
    } else{
        result = "odd";
    }
    
    console.log(result);

    let winner = "";

    if (result === funcChoice){
        winner = "You win";
    } else {
        winner = "You lose";
    }
    console.log(winner);
    return winner;
}