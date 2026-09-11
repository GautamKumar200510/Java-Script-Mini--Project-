let gameSeq = [];
let userSeq = [];

let btns = ["yellow", "red", "purple", "green"];

let started = false;
let level = 0;

let h2 = document.querySelector("h2");


// START GAME
document.addEventListener("keydown", function () {

    if (started === false) {

        console.log("game is started");

        started = true;

        levelup();
    }

});


// GAME FLASH
function Flash(btn) {

    btn.classList.add("flash");

    setTimeout(function () {

        btn.classList.remove("flash");

    }, 250);

}


// USER FLASH
function userFlash(btn) {

    btn.classList.add("userflash");

    setTimeout(function () {

        btn.classList.remove("userflash");

    }, 250);

}


// LEVEL UP
function levelup() {

    userSeq = [];

    level++;

    h2.innerText = `Level ${level}`;


    // RANDOM BUTTON
    let randIdx = Math.floor(Math.random() * 4);

    let randcolor = btns[randIdx];

    let randBtn = document.querySelector(`.${randcolor}`);


    // ADD COLOR TO GAME SEQUENCE
    gameSeq.push(randcolor);

    console.log(gameSeq);


    // FLASH RANDOM BUTTON
    Flash(randBtn);

}


// CHECK ANSWER
function checkAns(idx) {

    // CORRECT ANSWER
    if (userSeq[idx] === gameSeq[idx]) {

        // COMPLETE SEQUENCE
        if (userSeq.length === gameSeq.length) {

            setTimeout(function () {

                levelup();

            }, 1000);

        }

    }

    // WRONG ANSWER
    else {

        h2.innerText = "Game Over! Press any key to start";

        reset();

    }

}


// BUTTON PRESS
function btnPress() {

    // GAME START HONE SE PEHLE BUTTON CLICK NAHI HOGA
    if (started === false) {
        return;
    }


    let btn = this;

    userFlash(btn);


    let userColor = btn.getAttribute("id");

    userSeq.push(userColor);


    checkAns(userSeq.length - 1);

}


// ALL BUTTONS
let allBtns = document.querySelectorAll(".btn");


for (let btn of allBtns) {

    btn.addEventListener("click", btnPress);

}


// RESET
function reset() {

    started = false;

    gameSeq = [];

    userSeq = [];

    level = 0;

}