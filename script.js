let box = document.querySelectorAll('#box');
let resetBtn = document.querySelector('#resetbtn');
let turn0 = true;
let winner = document.querySelector('#winner');
let game = document.querySelector('#game');
let playerO = document.querySelector('#playerO');
let playerX = document.querySelector('#playerX');
let msg = document.querySelector('#msg');
let count = 0;

// Functions

const showWinner = (winner) => {
    msg.innerHTML = 'Consgratulations, Winner is' + '<span class="text-blue-500">' + ' ' + winner + '</span>';
    msg.style.display = 'block';
    disableBox();
}

// disable box
const disableBox = () => {
    box.forEach((val) => {
        val.disabled = true;
    })
}

// enable box
const enableBox = () => {
    box.forEach((val) => {
        val.disabled = false;
        val.innerText = '';
    })
}

// math draw

const draw = () => {
    msg.innerText = 'Match Draw';
    msg.style.display = 'block';
    disableBox();
}
// Reset Game
const resetGame = () => {
    turn0 = true;
    enableBox();
    msg.style.display = 'none';
    playerO.style.backgroundColor = "white";
    playerX.style.backgroundColor = "white";
}

//   There are two types of array. 1- simple array 2- 2D array

let winPattern = [
    [0, 1, 2],
    [0, 3, 6],
    [0, 4, 8],
    [1, 4, 7],
    [2, 5, 8],
    [2, 4, 6],
    [3, 4, 5],
    [6, 7, 8],
];


box.forEach((box) => {
    box.addEventListener('click', () => {
        console.log('box clicked');
        if (turn0) {
            // Player 0
            box.innerText = 'O';
            turn0 = false;
            box.style.color = 'purple';
            playerX.style.backgroundColor = 'grey';
            playerO.style.backgroundColor = 'white';
        } else {
            // Player X
            box.innerText = 'X';
            turn0 = true;
            box.style.color = 'green';
            playerO.style.backgroundColor = 'grey';
            playerX.style.backgroundColor = 'white';
        }
        box.disabled = true;
        count++
        
        let isWinner = checkWinner();

        if (count === 9 && !isWinner) {
            draw();
        }
    });
});

let checkWinner = () => {

    for (let pattern of winPattern) {

        let pos1Val = box[pattern[0]].innerText;
        let pos2Val = box[pattern[1]].innerText;
        let pos3Val = box[pattern[2]].innerText;

        if (pos1Val !== '' || pos2Val !== '' || pos3Val !== '') {
            if (pos1Val === pos2Val && pos2Val === pos3Val) {
                console.log('winner', pos1Val);
                showWinner(pos1Val)
                return true;
            }
        }
    }
}


resetBtn.addEventListener('click', resetGame);