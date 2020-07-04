

















let canvas = document.querySelector("#canvas"),
ctx = canvas.getContext("2d");
let snakes = [];
vx = 10;
vy = 0;
score = 0;

for(let i = 10;i > 0;i--){

    snakes.push({x:10*i,y:20});

}

appleX = Math.floor((Math.ceil((canvas.width - 10) * Math.random()))/10) * 10;
appleY = Math.floor((Math.ceil((canvas.height - 10) * Math.random()))/10) * 10;


function animation(){


    
    ctx.clearRect(0,0,canvas.clientWidth,canvas.height);
    snakes.pop();
    snakes.unshift({x:snakes[0].x+vx,y:snakes[0].y +vy});

    ctx.fillRect(appleX,appleY,10,10);

    for(let i = 0;i <snakes.length;i++){

        ctx.fillStyle = "#"+ Math.floor(1000000 * Math.random());
         ctx.fillRect( snakes[i].x, snakes[i].y, 10 - 2, 10 - 2);

         if(snakes[i].y < 0 || snakes[i].y > canvas.height || snakes[i].x < 0 || snakes[i].x > canvas.width){
             clearInterval(gameOver);
             alert("game over");
         }
    }
    
    if(snakes[0].x >= appleX && snakes[0].x <= appleX && snakes[0].y >= appleY && snakes[0].y <= appleY){
        
        snakes.push({x:appleX + 10,y:appleY + 10});
        score++;
        


        appleX = Math.floor((Math.ceil((canvas.width - 10) * Math.random()))/10) * 10;
        appleY = Math.floor((Math.ceil((canvas.height - 10) * Math.random()))/10) * 10;

    }
    ctx.font = "25pt arial";
    ctx.fillText(score,25,30);
}



let gameOver = setInterval(animation,100); 

addEventListener("keyup",clickEd,false);

function clickEd(e){
    e = e || event;
    console.log(e.keyCode);
    if(e.keyCode === 83){
        if(vy != -10){
            vy = 10;
            vx = 0;
        }
    }
    if(e.keyCode === 87){
        if(vy != 10){
            vy = -10;
            vx = 0;
        }
    }
    if(e.keyCode === 65){
        if(vx != 10){
            vy = 0;
            vx = -10;
        }
    }
    if(e.keyCode === 68){
        if(vx != -10){
            vy = 0;
            vx = 10;
        }
    }
}