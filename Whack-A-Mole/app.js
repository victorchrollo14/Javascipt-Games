const grid = document.querySelector('.grid');
const start = document.querySelector('.start');

let hitPosition;
let score = 0;
let timeLeft = 10;
const EASY = 500;
let timer;
let timeLeftTimer;

// functions
function createBoard(){
    for (let i = 0; i<9; i++){
        let square = document.createElement('div');
        square.classList.add('square');
        square.setAttribute('id', i);
        grid.appendChild(square);
    }

}


function randomBoxSelect(){
    let rand = Math.floor(Math.random() * 9);
    const selectedBox = grid.children[rand];

    for(let square of grid.children){
        if(square.classList.contains('background-black')){
            square.classList.remove('background-black');
        }
        // console.log(square);
    }
    selectedBox.classList.add('background-black');
    
    hitPosition = selectedBox.id;
    
}

const countDown = () => {
    timeLeft -= 1;
    document.querySelector('.time-left').innerHTML = timeLeft;
    if(timeLeft === -1){
        clearInterval(timer);
        clearInterval(timeLeftTimer);
        alert(`Game Over \n Final Score = ${score}`);
        setTimeout(reset, 10);
    }
}

const reset = () => {
    window.location.reload()
}



// Execution starts here
createBoard();

start.addEventListener("click", () => {
    timer = setInterval(randomBoxSelect, EASY);
    timeLeftTimer = setInterval(countDown, 1000);
})


let squares = document.querySelectorAll('.square');

squares.forEach(square => {
    square.addEventListener("mousedown", () => {
        if (square.id === hitPosition){
            score++;
            document.querySelector('.result').innerHTML = score;
            console.log("you clicked on mole");
            hitPosition = null;
        }
    })
    
});

