let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

const humanGuessInput = document.getElementById('human-guess');

const roundNumberDisplay = document.getElementById('round-number');

const computerGuessDisplay = document.getElementById('computer-guess');
const humanScoreDisplay = document.getElementById('human-score');
const computerScoreDisplay = document.getElementById('computer-score');
const targetNumberDisplay = document.getElementById('target-number');
const computerWinsDisplay = document.getElementById('computer-wins');

const guessButton = document.getElementById('guess');
const nextRoundButton = document.getElementById('next-round')

// Write your code below:

//generate a random number from 0 to 9
const generateTarget = () => {
    return Math.floor(Math.random() * 10);
}

console.log('generateTarget')
console.log(generateTarget());

// console.log('humanGuessInput')
// console.log(humanGuessInput.value)


// const compareGuesses = (user, computer, target) => {
//     if ((Math.abs(parseInt(user) - parseInt(target))) < (Math.abs(parseInt(computer) - parseInt(target)))) {
//         return true
//     } 
//     else if ((Math.abs(parseInt(user) - parseInt(target))) > (Math.abs(parseInt(computer) - parseInt(target)))) {
//         return false
//     }
// } 

const compareGuesses = (humanGuess, computerGuess, targetGuess) => {
    const humanDifference = Math.abs(targetGuess - humanGuess);
    const computerDifference = Math.abs(targetGuess - computerGuess);
    if (humanDifference <= computerDifference) {
        return true
    } else {return false}
}

// console.log('')
// console.log('test run if statemtent in compareGuesses')
// console.log((Math.abs(parseInt(humanGuessInput.value) - parseInt(computerGuessDisplay.innerHTML))))

// console.log(' ')  
// console.log('humanGuessInput.value typeof')
// console.log(typeof(humanGuessInput.value))
// console.log(humanGuessInput.value)
// console.log(typeof(parseInt(humanGuessInput.value)))

// console.log(" ")
// console.log('computerGuessDisplay.innerHTML typeof')
// console.log(typeof(computerGuessDisplay.innerHTML))
// console.log(computerGuessDisplay.innerHTML)
// console.log(typeof(parseInt(computerGuessDisplay.innerHTML)))

// console.log(" ")
// console.log('targetNumberDisplay.innerHTML typeof')
// console.log(typeof(targetNumberDisplay.innerHTML))
// console.log(targetNumberDisplay.innerHTML)
// console.log(typeof(parseInt(targetNumberDisplay.innerHTML)))

// console.log(' ')
// console.log('compareGuesses function run')
// console.log(compareGuesses(humanGuessInput.value, computerGuessDisplay.innerHTML, targetNumberDisplay.innerHTML))
// console.log(typeof(targetNumberDisplay.innerHTML))

console.log('')
const updateScore = winner => {
    if (winner === "human") {
        humanScore++ 
    } else if (winner === 'computer'){
        computerScore++}
}

// console.log('updateScore function call')
// console.log(updateScore('human'))

const advanceRound = () => 
    currentRoundNumber++;    

console.log('')
console.log(document.getElementById('computer-guess').style.innerHTML = 'this is a test to access innerHTML for computerGuess')

console.log('advanceRound function run')
// nextRoundButton.addEventListener('click', advanceRound)
console.log(advanceRound())