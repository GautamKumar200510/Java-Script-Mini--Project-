let gameSeq = [];
let userSeq = [];

let btns = ["yellow", "red", "purple", "green"];

let started = false;
let level = 0;
let score = 0;

let h2 = document.querySelector("h2");
let scoreDisplay = document.querySelector("h3");


// ================= START GAME =================

document.addEventListener("keydown", function () {

    if (started == false) {

        console.log("Game is started");

        started = true;

        score = 0;
        scoreDisplay.innerText = `Score: ${score}`;

        levelup();
    }

});


// ================= GAME FLASH =================

function Flash(btn) {

    btn.classList.add("flash");

    setTimeout(function () {

        btn.classList.remove("flash");

    }, 250);

}


// ================= USER FLASH =================

function userFlash(btn) {

    btn.classList.add("userflash");

    setTimeout(function () {

        btn.classList.remove("userflash");

    }, 250);

}


// ================= LEVEL UP =================

function levelup() {

    userSeq = [];

    level++;

    h2.innerText = `Level ${level}`;


    // Choose random button

    let randIdx = Math.floor(Math.random() * 4);

    let randColor = btns[randIdx];

    let randBtn = document.querySelector(`.${randColor}`);


    // Add random color to game sequence

    gameSeq.push(randColor);

    console.log("Game Sequence:", gameSeq);


    // Flash the complete sequence

    let i = 0;

    let interval = setInterval(function () {

        let color = gameSeq[i];

        let btn = document.querySelector(`.${color}`);

        Flash(btn);

        i++;


        if (i >= gameSeq.length) {

            clearInterval(interval);

        }

    }, 600);

}


// ================= CHECK ANSWER =================

function checkAns(idx) {

    // Correct answer

    if (userSeq[idx] === gameSeq[idx]) {

        console.log("Correct!");


        // Complete sequence

        if (userSeq.length === gameSeq.length) {

            score++;

            scoreDisplay.innerText = `Score: ${score}`;


            setTimeout(function () {

                levelup();

            }, 1000);

        }

    }


    // Wrong answer

    else {

        h2.innerText = "Game Over! Press any key to start";

        console.log("Game Over!");

        reset();

    }

}


// ================= BUTTON PRESS =================

function btnPress() {

    // Don't allow clicking before game starts

    if (started === false) {

        return;

    }


    let btn = this;

    userFlash(btn);


    let userColor = btn.getAttribute("id");

    console.log("User clicked:", userColor);


    userSeq.push(userColor);


    checkAns(userSeq.length - 1);

}


// ================= ALL BUTTONS =================

let allBtns = document.querySelectorAll(".btn");


for (let btn of allBtns) {

    btn.addEventListener("click", btnPress);

}


// ================= RESET =================

function reset() {

    started = false;

    gameSeq = [];

    userSeq = [];

    level = 0;

}