let gameseq=[];
let userseq=[];

let btns=["red","blue","green","purple"];

let started=false;
let level=0;
let h3=document.querySelector("h3");
document.addEventListener("keydown",function(){
    if(started==false){
        started=true;   
    levelUp();
    }
});
function gameFlash(btn){
    btn.classList.add("flash");
    setTimeout(function(){
        btn.classList.remove("flash")
    },1000);
}

function userFlash(btn){
    btn.classList.add("userflash");
    setTimeout(function(){
        btn.classList.remove("userflash")
    },500);
}
let allBtns=document.querySelectorAll(".btn");
for(btn of allBtns){
    btn.addEventListener("click",btnpress);
}
function levelUp(){
    userseq=[]; 
    level++;
    h3.innerText=`level ${level}`;

    //random button choose
    let randIdx=Math.floor(Math.random()*3);
    let randcolor=btns[randIdx]; 
    let randbtn=document.querySelector(`.${randcolor}`);
    gameseq.push(randcolor); 
    console.log(gameseq);
    gameFlash(randbtn);
}
function checkAns(currIdx){
    if(userseq[currIdx]==gameseq[currIdx]){
        if(userseq.length==gameseq.length){
            setTimeout(levelUp,1000); 
        }
    }
    else{
        h3.innerHTML=`Game Over! Your score as <b>${level}</b> <br>press any key to start`;
        document.querySelector("body").style.backgroundColor="red";
        setTimeout(function(){
            document.querySelector("body").style.backgroundColor="white";
        },150);
        reset();
    }
}
function btnpress(){
    let btn=this;   
    userFlash(btn);

    usercolor=btn.getAttribute("id");
    userseq.push(usercolor);
    console.log(usercolor);
    checkAns(userseq.length-1);
}
function reset(){
    started=false;
    gameseq=[];
    userseq=[];
    level=0;  
}

 