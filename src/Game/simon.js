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
function gameFlash(btn) {
    btn.classList.add("flash");
    setTimeout(() => {
        btn.classList.remove("flash");
    }, 1000);
}


function userFlash(btn) {
    btn.classList.add("userflash");
    setTimeout(() => {
        btn.classList.remove("userflash");
    }, 1000);
}

function levelup() {
    level++;
    h2.innerText = `Level ${level}`;
// random btn choose
    let randIdx = Math.floor(Math.random() * 4);
   let randcolor = btns[randIdx];
   let randbtn=document.querySelector(`.${randcolor}`);
   console.log(randbtn);
   console.log(randcolor);
   console.log(randIdx);

   gameFlash(randbtn);
}


function btnPress(){
    console.log(this);
   let btn = this;
   userFlash(btn);
}

let allBtns = document.querySelectorAll(".btn");
for(btn of allBtns){
    btn.addEventListener("click", btnPress);
}
