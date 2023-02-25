const cards = [
    {
        name: 'cheeseburger',
        img: 'Images/cheeseburger.png'
    },
    {
        name: 'fries',
        img: 'Images/fries.png'
    },
    {
        name: 'hotdog',
        img: 'Images/hotdog.png'
    },
    {
        name: 'milkshake',
        img: 'Images/milkshake.png'
    },
    {
        name: 'pizza',
        img: 'Images/pizza.png'
    },
    {
        name: 'ice-cream',
        img: 'Images/ice-cream.png'
    },
    {
        name: 'hotdog',
        img: 'Images/hotdog.png'
    },
    {
        name: 'milkshake',
        img: 'Images/milkshake.png'
    },
    {
        name: 'pizza',
        img: 'Images/pizza.png'
    },
    {
        name: 'ice-cream',
        img: 'Images/ice-cream.png'
    },
    {
        name: 'cheeseburger',
        img: 'Images/cheeseburger.png'
    },
    {
        name: 'fries',
        img: 'Images/fries.png'
    }
]

let grid = document.querySelector('.grid');
const allCards = grid.children;
let displayResult = document.querySelector('#result');

let cardChoosen = [];
let cardIdChoosen = [];
let score = 0;

cards.sort(() => 0.5 - Math.random());

function createCard(){
    for (let i in cards){
        let image = document.createElement('img');
        image.setAttribute('src', 'Images/blank.png');
        image.setAttribute('data-id', i);
        grid.appendChild(image);
        image.addEventListener('click', flipCard);
    }
}

function checkMatch(){
    const cardIdChoosen1 = cardIdChoosen[0];
    const cardIdChoosen2 = cardIdChoosen[1];
    console.log(cardIdChoosen1, cardIdChoosen2);

    if (cardChoosen[0].src === cardChoosen[1].src){
        for (let i in cardChoosen){
            cardChoosen[i].setAttribute('src', 'Images/black.jpeg');   
        }
        allCards[cardIdChoosen1].removeEventListener("click", flipCard);
        allCards[cardIdChoosen2].removeEventListener('click', flipCard);
        score++;
    }
    else {
        for (let i in cardChoosen){
            cardChoosen[i].setAttribute('src', 'Images/blank.png');
        }
    }

    displayResult.innerHTML = score;
    if(score === 6){
        document.querySelector('h1').innerHTML = "congratulations! You have Won";
        setTimeout(reset, 3000);
        
    }
    cardChoosen.length = 0; 
    cardIdChoosen.length = 0;
   
    
}

function flipCard(){ 
    const cardId = this.getAttribute('data-id');
    let card = grid.children[cardId];

    cardChoosen.push(card);
    cardIdChoosen.push(cardId);
    card.setAttribute('src', cards[cardId].img);
    
    if(cardChoosen.length == 2){
        setTimeout(checkMatch, 500);
    }
    
    
}

const reset = () =>{
    window.location.reload();
}

createCard();

