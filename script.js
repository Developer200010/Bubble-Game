var hitN=0;

function runBubble(){
    var clutter ="";

for(var i=1; i<211; i++){
    var rn= Math.floor(Math.random()*10)
    clutter += `<div class="bubble">${rn}</div>`;
}
document.querySelector(".pBottom").innerHTML=clutter;
}
runBubble()

// creating timer function
var timer =60;
function runTimer(){
   var stop= setInterval(function(){
      if(timer>0){
          timer--;
          document.querySelector('#timerIn').textContent=timer;
      }else{
        clearInterval(stop);
        document.querySelector('.pBottom').innerHTML=`<h1>Game Over</h1>`
      }
        
    },1000)
}
runTimer()

// creating  a hitrun random number
function hitRun(){
    hitN = Math.floor(Math.random()*10);
    document.querySelector("#hitVal").textContent=hitN;
}
hitRun();

// creating a score function
score=0;
function scoreVal(){
document.querySelector("#scoreval").textContent=score;
score +=10;
}
scoreVal();

// creating a funtion to fetch bubble number in form of number
document.querySelector(".pBottom").addEventListener("click",function(details){
    var clickNumber=(Number(details.target.textContent))
    if(clickNumber === hitN){
        scoreVal();
        runBubble();
        hitRun();
    }
})