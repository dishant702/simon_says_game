let gameSeq=[];
let userSeq=[];
let btns = ["yellow","red","purple","green"];
let started = false;
let level = 0;
let h2 = document.querySelector("h2");

 document.addEventListener("keypress", function() {
  if(started == false){
    console.log("game started");
started =true;
levelup();}
 });

 function gameflash(btn){
    btn.classList.add("flash");

    setTimeout(function(){
        btn.classList.remove("flash");
    },250);
 }
    
 function userflashI(btn){
    btn.classList.add("userflash");

    setTimeout(function(){
        btn.classList.remove("userflash");
    },250);

 }

 function levelup(){
    userSeq = [];
    level++;
    h2.innerText = `Level ${level}`;

    let randidx = Math.floor(Math.random()*4 );
    let randcolor = btns[randidx];
   let  randbtn = document.querySelector(`.${randcolor}`)
  gameSeq.push(randcolor);
    gameflash(randbtn);
 }
 function checkans(idx){
    // console.log("curr level : " ,level);
    
    if(userSeq[idx] == gameSeq[idx]){
       if(userSeq.length == gameSeq.length){
        setTimeout(levelup,1000);
       }

    }else{
    h2.innerHTML= `Game Over your score was <b> ${level} <b>  <br>press any key to start`;
  
    document.querySelector("body").style.backgroundColor = "red";
    setTimeout( function () {
        document.querySelector("body").style.backgroundColor = "white";
    },150);
    reset();
    }
 }
 
function btnpress(){
   let btn = this;
   userflashI(btn);

   usercolor = btn.getAttribute("id");
   userSeq.push(usercolor);
   checkans(userSeq.length-1);
 }
 let allbtns = document.querySelectorAll(".btn");
 for(btn of allbtns){
    btn.addEventListener("click",btnpress);
 }
 function reset(){
    started = false;
    gameSeq=[];
    userSeq = [];
    level = 0;
 }