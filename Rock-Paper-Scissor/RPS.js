const showComputerChoice = document.getElementById('Computer_choice')
const showUserChoice = document.getElementById('User_choice')
const showResult = document.getElementById('result')
const possibleChoices = document.querySelectorAll('button')
let userChoice;
let computerChoice;
let result;

possibleChoices.forEach(element => 
 element.addEventListener('click', (e) =>{
    userChoice = e.target.id,
    showUserChoice.innerHTML = userChoice,
    generateComputerChoice()
    getResults()
 })   
);

function generateComputerChoice() {
    const random = Math.floor(Math.random() * possibleChoices.length)
    computerChoice = random

    if (random === 0) computerChoice ='Rock'
    if (random === 1) computerChoice ='Paper'
    if (random === 2) computerChoice ='Scissor'
    showComputerChoice.innerHTML = computerChoice
}

function getResults(){
    if (computerChoice === userChoice) result = 'Its a Draw'
    if (computerChoice === 'Rock' && userChoice === 'Paper') result = 'You Win'
    if (computerChoice === 'Rock' && userChoice === 'Scissor') result = 'You Lose'
    if (computerChoice === 'Paper' && userChoice === 'Rock') result = 'You Lose'
    if (computerChoice === 'Scissor' && userChoice === 'Rock') result = 'You Win'
    if (computerChoice === 'Paper' && userChoice === 'Scissor') result = 'You Win'
    if (computerChoice === 'Scissor' && userChoice === 'Paper') result = 'You Lose'
    showResult.innerHTML = result
}
