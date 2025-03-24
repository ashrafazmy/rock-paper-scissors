const playerText = document.querySelector("#playerText");
const computerText = document.querySelector("#computerText");
const resultText = document.querySelector("#resultText");

const playerAmtText = document.querySelector("#playerAmt");
const compAmtText = document.querySelector("#compAmt");


const winAmt = document.querySelector("#winAmt");
const lossAmt = document.querySelector("#lossAmt");
const drawAmt = document.querySelector("#drawAmt");

const choiceBtns = document.querySelectorAll(".choiceBtn");

let player;
let computer;
let playerWin = 0;
let compWin = 0;
let result;

let win = 0;
let loss = 0;
let draw = 0;

choiceBtns.forEach(buttons => buttons.addEventListener("click", () => {

    player = buttons.textContent;
    computerTurn();
    playerText.textContent = `Player: ${player}`;
    computerText.textContent = `Computer: ${computer}`;

    
    
    
    computeWLD();
    playerAmtText.textContent = `Player: ${playerWin}`;
    compAmtText.textContent = `Computer: ${compWin}`;
    resultText.textContent = checkWinner();

    if(playerWin>5 ){
        reset();
    }
    if(compWin>5){
        reset();
    }

}))

function computerTurn(){

    const randNum = Math.floor(Math.random()*3)+1;
    console.log(randNum);
    
    switch(randNum){
        case 1:
            computer = "ROCK";
            break;
        case 2:
            computer = "PAPER";
            break;
        case 3:
            computer = "SCISSORS";
            break;
        default:
            break;
    }
}

function checkWinner(){
    // if(player == computer){
    //     return 'Draw!'
    // } else if(computer == 'ROCK'){
    //     return(player == 'PAPER' ? 'Congrats! You Won!' : 'You Lost!');
    // } else if(computer == 'PAPER'){
    //     return(player == 'SCISSORS' ? 'Congrats! You Won!' : 'You Lost!');
    // } else if(computer == 'SCISSORS'){
    //     return(player == 'ROCK' ? 'Congrats! You Won!' : 'You Lost!');
    // }

    if (playerWin == 5){
        return 'Congrats! Player has won!'
    }
    else if(compWin == 5){
        return 'Player has lost!'
    }
}

function computeWLD(){
    if(player == computer){
        playerWin += 1;
        compWin += 1;
        // return draw = draw+1;
    } else if(computer == 'ROCK'){
        return(player == 'PAPER' ? playerWin= playerWin+1 : compWin=compWin+1);
    } else if(computer == 'PAPER'){
        return(player == 'SCISSORS' ?  playerWin= playerWin+1 : compWin=compWin+1);
    } else if(computer == 'SCISSORS'){
        return(player == 'ROCK' ?  playerWin= playerWin+1 : compWin=compWin+1);
    }
}

function resetPopup(){
    if(confirm("Would you like to try again?") ){
        reset(); 
    }
    else{
        alert("do nothing");
    }
}

function reset(){
    console.log("does it work");
    playerWin =0;
    compWin=0;
    playerAmtText.textContent = `Player: ${playerWin}`;
    compAmtText.textContent = `Computer: ${compWin}`;
    playerText.textContent = `Player: `;
    computerText.textContent = `Computer: `;
    resultText.textContent = '';
}
