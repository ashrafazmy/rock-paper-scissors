const playerText = document.querySelector("#playerText");
const computerText = document.querySelector("#computerText");
const resultText = document.querySelector("#resultText");

const winAmt = document.querySelector("#winAmt");
const lossAmt = document.querySelector("#lossAmt");
const drawAmt = document.querySelector("#drawAmt");

const choiceBtns = document.querySelectorAll(".choiceBtn");

let player;
let computer;
let result;

let win;
let loss;
let draw;

choiceBtns.forEach(buttons => buttons.addEventListener("click", () => {

    player = buttons.textContent;
    computerTurn();
    playerText.textContent = `Player: ${player}`;
    computerText.textContent = `Computer: ${computer}`;
    resultText.textContent = checkWinner();

    computeWLD();
    winAmt.textContent = `Wins: ${win}`;
    lossAmt.textContent = `Loss: ${loss}`;
    drawAmt.textContent = `Draw: ${draw}`;

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
    if(player == computer){
        return 'Draw!'
    } else if(computer == 'ROCK'){
        return(player == 'PAPER' ? 'Congrats! You Won!' : 'You Lost!');
    } else if(computer == 'PAPER'){
        return(player == 'SCISSORS' ? 'Congrats! You Won!' : 'You Lost!');
    } else if(computer == 'SCISSORS'){
        return(player == 'ROCK' ? 'Congrats! You Won!' : 'You Lost!');
    }
}

function computeWLD(){
    if(player == computer){
        return draw = draw+1;
    } else if(computer == 'ROCK'){
        return(player == 'PAPER' ? win= win+1 : loss=loss+1);
    } else if(computer == 'PAPER'){
        return(player == 'SCISSORS' ?  win= win+1 : loss=loss+1);
    } else if(computer == 'SCISSORS'){
        return(player == 'ROCK' ?  win= win+1 : loss=loss+1);
    }
}
