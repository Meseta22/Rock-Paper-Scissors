let cpuScore = 0;
let playerScore = 0;


const computerMove = () => {
    let num = Math.floor(Math.random() * 3) + 1;
    let answer;
    if (num == 1) {
        answer = 'rock';
    };
    if (num == 2) {
        answer = 'paper';
    };
    if (num == 3) {
        answer = 'scissors';
    };
    return answer;
};

function playerMove(){
let playerSelection = prompt("Rock, Paper, or Scissors?");
let playerAnswer = playerSelection.toLowerCase();
return playerAnswer;
};

function gameRound(){

let human = playerMove();
let cpu = computerMove();

if (cpu != 'rock' && cpu != 'paper' && cpu != 'scissors') return console.log("This is not a good response.");
console.log(`The computer played ${cpu}!`);

if (cpu == 'rock' && human == 'rock'){
console.log(`You played ${human}, CPU played ${cpu}. You have tied!`);
};
if (cpu == 'rock' && human == 'paper'){
console.log(`You played ${human}, CPU played ${cpu}. You win!`);
return playerScore++;
};
if (cpu == 'rock' && human == 'scissors'){
console.log(`You played ${human}, CPU played ${cpu}. You lose!`);
return cpuScore++;
};

if (cpu == 'paper' && human == 'rock'){
console.log(`You played ${human}, CPU played ${cpu}. You lose!`);
return cpuScore++;
};
if (cpu == 'paper' && human == 'paper'){
console.log(`You played ${human}, CPU played ${cpu}. You have tied!`);
};
if (cpu == 'paper' && human == 'scissors'){
console.log(`You played ${human}, CPU played ${cpu}. You win!`);
return playerScore++;
};

if (cpu == 'scissors' && human == 'rock'){
console.log(`You played ${human}, CPU played ${cpu}. You win!`);
return playerScore++;
};
if (cpu == 'scissors' && human == 'paper'){
console.log(`You played ${human}, CPU played ${cpu}. You lose!`)
return cpuScore++;
};
if (cpu == 'scissors' && human == 'scissors'){
console.log(`You played ${human}, CPU played ${cpu}. You have tied!`)
};

};

function game(){
for (let i = 0; i < 5; i++) {
gameRound();
console.log(`Player Score: ${playerScore}`);
console.log(`CPU score ${cpuScore}`);
}
if (playerScore > cpuScore) console.log("You win!");
if (cpuScore > playerScore) console.log("You lose! :(");
if (playerScore == cpuScore) console.log("It's a tie!")
}

game();