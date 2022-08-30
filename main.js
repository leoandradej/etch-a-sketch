let color = "black";
let click = true;
const sizeValue = document.querySelector('input');
const blackButton = document.querySelector('.blackButton');
const erasorButton = document.querySelector('.erasorButton');
const grayButton = document.querySelector('.grayButton');
const randomButton = document.querySelector('.randomButton');
const resetButton = document.querySelector('.resetButton');

function populateBoard(size) {
    let board = document.querySelector('.board');
    let squares = board.querySelectorAll('div');
    squares.forEach((div) => div.remove());
    board.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
    board.style.gridTemplateRows = `repeat(${size}, 1fr)`;
    
    let amount = size * size;
    for(i = 0; i < amount; i++) {
        let square = document.createElement('div');
        square.addEventListener("mouseover", colorSquare);
        square.style.backgroundColor = "white";
        board.insertAdjacentElement('beforeend', square);
    }
}

populateBoard(16);

sizeValue.onchange = () => changeSize(sizeValue.value);

function changeSize(input) {
    if(input >= 2 && input <= 100) {
        document.querySelector('.error').style.display = 'none';
        populateBoard(input);
    }
    else {
        document.querySelector('.error').style.display = 'flex';
    }
}

blackButton.addEventListener('click', () => changeColor('black'));

erasorButton.addEventListener('click', () => changeColor('white'));

grayButton.addEventListener('click', () => changeColor('gray'));

randomButton.addEventListener('click', () => changeColor('random'));

resetButton.addEventListener('click', () => resetBoard());

function changeColor(choice) {
    color = choice;
}

function colorSquare() {
    if(click){
        if(color === 'random') {
            this.style.backgroundColor = `hsl(${Math.random() * 360}, 100%, 50%)`;
        }
        else {
            this.style.backgroundColor = color;
        }
    }
}

function resetBoard() {
    let board = document.querySelector('.board');
    let squares = board.querySelectorAll('div');
    squares.forEach((div) => div.style.backgroundColor = "white");
}

document.querySelector('body').addEventListener('click', (e) => {
    if(e.target.tagName != "BUTTON"){
        click= !click;
        if(click) {
            document.querySelector('.mode').textContent = "Mode: Coloring";
        }
        else {
            document.querySelector('.mode').textContent = "Mode: Not Coloring";
        }
    }
});