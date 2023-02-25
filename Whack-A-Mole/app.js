const grid = document.querySelector('.grid');

let hitPosition;
let score = 0;
let timeLeft = 30;

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
    timeLeft--;
}



// Execution starts here
createBoard();
const timer = setInterval(randomBoxSelect, 1000);
const timeLeftTimer = setInterval(countDown, 1000);

let squares = document.querySelectorAll('.square');

squares.forEach(square => {
    square.addEventListener("click", () => {
        if (square.id === hitPosition){
            score++;
            console.log("you clicked on mole");
        }
    })
    
    
});

