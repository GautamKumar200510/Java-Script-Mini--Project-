let gameSeq = [];
let userSeq = [];

let btns = ["yellow", "red", "purple", "green"];

let started = false;
let level = 0;

let h2 = document.querySelector("h2");

document.addEventListener("keypress", function () {
    if (started === false) {
        console.log("game is start");
        started = true;

        levelup();
    }
});


function Flash(btn) {
    btn.classList.add("flash");

    setTimeout(function () {
        btn.classList.remove("flash");
    }, 250);
}

function userFlash(btn) {
    btn.classList.add("userflash");

    setTimeout(function (){
        btn.classList.remove("userflash");
    }, 250);
}

function levelup() {
    userSeq = [];
    level++;
    h2.innerText = `Level ${level}`;

    let randIdx = Math.floor(Math.random() * 3);
    let randcolor = btns[randIdx];

    let randBtn = document.querySelector(`.${randcolor}`);

    gameSeq.push(randcolor);

    console.log(gameSeq);

    gameFlash(randBtn);   
}

function checkAns(idx){
    // let idx = userSeq.length - 1

    if (userSeq[idx] == gameSeq[idx]) {
     if(userSeq.length == gameSeq.length){
        setTimeout(levelup,1000);
     }
    }else {
        h2.innerText = 'Game Over! Press any key to start';
        reset();
    }
}

function btnPress() {
    console.log(this);

    let btn = this;

    userFlash(btn);

    userColor = btn.getAttribute("id");
    userSeq.push(userColor);

    checkAns(userSeq.length-1);

    //console.log(userColor);

    //userSeq.push(userColor);
}

let allBtns = document.querySelectorAll(".btn");

for (btn of allBtns) {
    btn.addEventListener("click", btnPress);
}

function reset(){
    started = false;
    gameSeq =[];
    userSeq = [];
    level =0;
}