const canvas = document.getElementById("canv");
const ctx = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let randomX;
let randomY;
let randomR;

let xPositions = [];
let yPositions = [];
let radius = [];

let circle;

function generateRandom(min, max) {
    // find diff
    let difference = max - min;
    // generate random number 
    let rand = Math.random();
    // multiply with difference 
    rand = Math.floor( rand * difference);
    // add with min value 
    rand = rand + min;
    return rand;
}

class Circle {
    constructor(x, y, r, color) {
        this.x = x;
        this.y = y;
        this.r = r;
        this.color = color;
    }

    draw() {
        ctx.beginPath();
        ctx.fillStyle = this.color;
        ctx.arc(this.x, this.y, this.r, 0, Math.PI * 2, true);
        ctx.fill();
    }
}

function render(numberOfObjects) { // Function for rendering objects on screen
    for (let i = 0; i < numberOfObjects; i++) { // Render loop
        randomR = Math.floor((Math.random() * 100) + 40); 
        randomX = generateRandom(randomR, canvas.width - randomR);
        randomY = generateRandom(randomR, canvas.height - randomR);

        radius[i] = randomR;
        xPositions[i] = randomX;
        yPositions[i] = randomY;
    
        circle = new Circle(randomX, randomY, randomR, "#A7233A");
    
        circle.draw();
    } 
}
render(10);

console.log("X: ", xPositions);
console.log("Y: ", yPositions);
console.log("R: ", radius);
