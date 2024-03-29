const p1Display = document.getElementById("P1score");
const p2Display = document.getElementById("P2score");
const winScore = document.getElementById("winningScore");
const player1 = document.getElementById("Player1");
const player2 = document.getElementById("Player2");
const reset = document.getElementById("Reset");
const inputNum = document.querySelector("input");
const body = document.querySelector("body");
const mouse = document.querySelector("div h3");

let p1score =0;
let p2score =0;
let winningScore = 7;
let gameOver = false;


player1.addEventListener("click", function(){
    if (!gameOver) {
        p1Display.textContent = ++p1score;
        if (p1score === winningScore) {
            gameOver = true;
            p1Display.classList.add("winner");
        }

    }   
});

player2.addEventListener("click", function(){
    if (!gameOver) {
        p2Display.textContent = ++p2score;
        if (p2score === winningScore) {
            gameOver = true;
            p2Display.classList.add("winner");
        }
    }
});

reset.addEventListener("click", function(){
    resetScores();
});

inputNum.addEventListener("change", function(){
    winScore.textContent = this.value;
    winningScore = Number(this.value);
    resetScores();
});


function resetScores() {
    p1score =0;
    p2score =0;
    p1Display.textContent = p1score;
    p2Display.textContent = p2score;
    gameOver = false;
    p1Display.classList.remove("winner");
    p2Display.classList.remove("winner");   
};

function backgroundColor(e) {      
    mouse.innerHTML = '<p>MouseX: '+e.offsetX+' </p><p>MouseY: '+e.offsetY+'</p>';
    body.style.backgroundColor = "rgb("+e.offsetX+","+e.offsetY+",10)";
};

function resetBackground() {
    body.style.backgroundColor = "white";
};