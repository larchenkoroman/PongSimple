/** @type {HTMLCanvasElement} */
const canvas = document.querySelector('#canvas');
const ctx = canvas.getContext('2d');
const width = canvas.width;
const height = canvas.height;

const BALL_SIZE = 5;
const ballPosition = {x:20, y:30};
let xSpeed = 4;
let ySpeed = 2;


function draw() {
    ctx.fillStyle = 'black';
    ctx.fillRect(0, 0, width, height);

    ctx.fillStyle = 'white';
    ctx.fillRect(ballPosition.x, ballPosition.y, BALL_SIZE, BALL_SIZE);
}

function update() {
    ballPosition.x += xSpeed;
    ballPosition.y += ySpeed;
}

function gameLoop() {
    draw();
    update();

    setTimeout(gameLoop, 30);
}

gameLoop();