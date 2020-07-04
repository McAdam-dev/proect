const dino = document.querySelector("#dino");
const canvas = document.querySelector('#canvas');
let dino_x = 20,dino_y = 250 ;
let barrier_x = 0;
let barrier = document.querySelector('.barrier');


document.addEventListener('keydown',event =>{
    if(event.keyCode === 32){
        jump();
    }
});
function jump(){
    let jumpUp = setInterval(function(){
        if(dino_y >= 120){
            dino.style.top = dino_y + 'px';
            dino_y-=2;
            dino.innerHTML = dino_y;
        }
        else{
             clearInterval(jumpUp);
             JumpDown();
        }
    },1.5);
}
function JumpDown(){
    let jumpDown =  setInterval(function(){
        if(dino_y <=250){
            dino.style.top = dino_y + 'px';
            dino_y+=2;
            dino.innerHTML = dino_y;
        }
        else clearInterval(jumpDown);
    },1.5);
}


setInterval(function(){
    barrier.style.left = barrier_x + 'px';
    barrier_x-=2;
    if(barrier_x < 0){
        barrier_x = 960;
     }
    else if(barrier_x<145 && barrier_x >85 ) if( dino_y >215) canvas.innerHTML = "GameOver";
},1);

