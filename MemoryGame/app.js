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

function createCard(){
    let grid = document.querySelector('.grid');
    for (let i in cards){
        let image = document.createElement('img');
        image.setAttribute('src', 'Images/blank.png');
        image.setAttribute('data-id', i);
        grid.appendChild(image);
    }
    
}

createCard();
