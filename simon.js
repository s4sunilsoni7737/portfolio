

let  gameSeq=[];
let  userSeq=[];

let btns = ["red","yellow","green","purple"];

let started = false;
let level = 0;
let highestScore = 0;

let h3 = document.querySelector("h3");
let h2 = document.querySelector("h2");

let startBtn = document.querySelector("#start-btn");
let startIcon = document.querySelector("i");

startBtn.addEventListener("click", startGame);
startIcon.addEventListener("click", startGame);

function flashStartButton(btn) {
    btn.classList.add("circleflash");
    setTimeout(() => btn.classList.remove("circleflash"), 300);
}



document.addEventListener("keypress",startGame);

function startGame(){
    if(started == false){
        console.log("game is strarted");
        started = true;
        flashStartButton(startBtn);
        levelUP();
    }

}

// document.addEventListener("keypress",function(){
//     // console.log("game started");
//     if(started == false){
//         console.log("game is strarted");
//         started = true;

//         levelUP();
//     }
  
// });


function gameFlash(btn){
    btn.classList.add("flash");
    setTimeout(function(){
        btn.classList.remove("flash");
    },250);
}

function userFlash(btn){
    btn.classList.add("userflash");
    setTimeout(function(){
        btn.classList.remove("userflash");
    },250);
}



function levelUP(){
    userSeq = [];
    level++;
    h2.innerText =`Level ${level}`;

//random button
    let randIdx = Math.floor(Math.random()*4);
    let randColor = btns[randIdx];
    let randomBtn = document.querySelector(`.${randColor}`);
    // console.log(randIdx);
    // console.log(randColor);
    // console.log(randomBtn);
    gameSeq.push(randColor);
    console.log(gameSeq);
    gameFlash(randomBtn);
}

function checkAns(idx){
    // console.log("curr level :",level);
    // let idx = level-1;

    if(userSeq[idx] === gameSeq[idx]){
        // console.log("samw value");
        if(userSeq.length == gameSeq.length){
            setTimeout(levelUP,1000);
        }
    
    } else{
        h2.innerHTML = `Game over! Your score was <b>${level-1}</b> <br> press any key to start.`

        if(level - 1 > highestScore){
            highestScore = level-1;
            h3.innerText =`Highest score: ${highestScore}`;

        }

        document.querySelector("body").style.backgroundColor="red";
        setTimeout(function(){
            document.querySelector("body").style.backgroundColor="white";
        },170);
        
        reset();

      
    }

}


function btnPress(){ // what fun do to select btn
    // console.log("btn was pressed");
    // console.log(this);
    let btn = this;
    userFlash(btn);

   userColor = btn.getAttribute("id");
    // console.log(userColor);
    userSeq.push(userColor);
    // console.log(userSeq);

    checkAns(userSeq.length-1);

}


let allBtns = document.querySelectorAll(".btn");
for(btn of allBtns){
    btn.addEventListener("click",btnPress);//slect btn
}

function reset(){
    started = false;
    gameSeq = [];
    userSeq = [];
    level = 0;
    
}
