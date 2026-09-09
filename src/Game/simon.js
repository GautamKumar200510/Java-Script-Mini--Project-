let gameSeq = [];
let userSeq = [];

let btns=["yellow", "red", "purple", "green"];

let started = false;
let level = 0;

let h2 = document.querySelector("h2");

document.addEventListener("keypress", function () {
    if(started === false){
        console.log("Game started");
        started = true;

        levelup();
    }
});
function btnFlash(btn) {
    btn.classList.add("flash");
    setTimeout(() => {
        btn.classList.remove("flash");
    }, 1000);
}

function levelup() {
    level++;
    h2.innerText = `Level ${level}`;
// random btn choose
    let randIdx = Math.floor(Math.random() * 4);
   let randcolor = btns[randIdx];
   let randbtn=document.querySelector(`.${randcolor}`);
   btnFlash(randbtn);
}