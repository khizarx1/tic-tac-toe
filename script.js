let userScore = 0;
let compScore = 0;
let choices = document.querySelectorAll('#choice');
let result = document.querySelector('#result');
let userScoreP = document.querySelector('#user-score');
let compScoreP = document.querySelector('#comp-score');
let resetBtn = document.querySelector('#reset');


// reset Game
const resetscore = () => {
    userScoreP.innerText = 0;
    compScoreP.innerText = 0;
}

resetBtn.addEventListener('click',resetscore);

// Match draw
const matchDraw = () => {
    result.innerText = 'Match Was Draw, Play again!';
    result.style.backgroundColor = '#070729e8';
}


// comp Choice
const genCompChoice = () => {
    // rock, paper, scissors
    const options = ['rock', 'paper', 'scissors'];
    const randIdx = Math.floor(Math.random() * 3);
    return options[randIdx];
}

// show winner
const showWinner = (userWin, userChoice, compChoice) => {
    if(userWin) {
        userScore++
        userScoreP.innerText = userScore;
        result.innerText = `You Win! Your ${userChoice} Beats Comp ${compChoice}`;
        result.style.backgroundColor = 'green';
    } else {
        compScore++
        compScoreP.innerText = compScore;
        result.innerText = `You Lose. Comp ${compChoice} Beats Your  ${userChoice}`;
        result.style.backgroundColor = 'red';
    }
}


const playGame = (userChoice) => {
    console.log('useChoice =', userChoice);
    // generate comp's choice
    const compChoice = genCompChoice();
    console.log('compChoice', compChoice);

    if (userChoice === compChoice) {
        // Match draw
        matchDraw();
    } else {
        let userWin = true;
        if (userChoice === 'rock') {
            // scissors or paper
            userWin = compChoice === 'paper' ? false : true;
        } else if (userChoice === 'paper') {
            // rocl=k or scissors
            userWin = compChoice === 'scissors' ? false : true;
        } else {
            // rock or paper
            userWin = compChoice === 'rock' ? false : true; 
        }
        showWinner(userWin, userChoice, compChoice);
    }
};

// user's choice
choices.forEach((choice) => {

    choice.addEventListener('click', () => {
        const userChoice = choice.getAttribute('name');
        playGame(userChoice);
    })
});