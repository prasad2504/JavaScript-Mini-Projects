let gameSeq=[]; 
let userSeq=[];

let btns = ["yellow" , "red", "purple" , "green"];


let started = false;
let level = 0;

let h3=document.querySelector("h3");


document.addEventListener("keypress",function(){
    if(started == false){
        console.log("game is started");
        started = true

        levelup();
    }
});


function gameFlash(btn){
    btn.classList.add("flash");
    setTimeout(function(){
        btn.classList.remove("flash");
    },100);

}

function userFlash(btn){
    btn.classList.add("userflash");
    setTimeout(function(){
        btn.classList.remove("userflash");
    },100);

}



function levelup(){
    userSeq=[];
    level++;
    h3.innerText = `level ${level}`;


    //random btn choose
    let randomIdx=Math.floor(Math.random()*3);
    let randColor=btns[randomIdx];
    let randBtn = document.querySelector(`.${randColor}`);
    // console.log(randomIdx);
    // console.log(randColor);
    // console.log(randBtn);
    gameSeq.push(randColor);
    console.log(gameSeq); 
    gameFlash(randBtn);
}


//cheak function

function cheakAns(idx){
    // console.log("curr level :" , +level);
    // let idx = level-1;

    if(userSeq[idx] == gameSeq[idx]){
        // console.log("saame vallue");
        if(userSeq.length == gameSeq.length){
            setTimeout(levelup,1000)
        }

    }
    else{
        h3.innerHTML= `Game over ! your Score was <b>${level}</b> <br> Press any key to restart`;
        document.querySelector("body").style.backgroundColor="red";
        setTimeout(function(){
            document.querySelector("body").style.backgroundColor="white";
        },200);
        reset();


    }
}
//button press logic start

function btnPress(){
    // console.log(this);
    let btn = (this);
    userFlash(btn);

    userColor = btn.getAttribute("id");
   
    userSeq.push(userColor);
    console.log(userSeq);

    cheakAns(userSeq.length - 1);

 
}

let allBtns = document.querySelectorAll(".btn")

for(btn of allBtns){
    btn.addEventListener("click" , btnPress);
}

function reset(){
    started=false;
    gameSeq=[];
    userSeq=[];
    level=0;
}