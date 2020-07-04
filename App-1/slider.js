document.querySelector('body').innerHTML += '<div id = "container"></div>';
//document.querySelector('body').innerHTML += '<div class = "slider" id="bir"></div>';
document.querySelector('body').innerHTML += '<img class = "mouse" src = "mouse.png"><img>';
document.querySelector('body').innerHTML += '<img class = "floor" src = "floor.jpg"><img>';
var btn = document.querySelector('.btn');
var number = document.querySelector('#num');
var speed = document.querySelector('#speed');
var color = document.querySelector('#color');
var num = 1;
btn.addEventListener('click',function(){
    num = number.value;
    alert(num);
});
var mouses = [];
for(var k = 0 ; k < num; k++){
    mouses.push('mouse' + k);
}
var xc = [],yc = [];
var xt = [],yt = [];
for(var j = 0;j<mouses.length;j++){
    xt.push(true);
    yt.push(true);
}
var bir = document.querySelector('#bir');
var container = document.querySelector('#container');
//container.appendChild(bir);
var mouse = document.querySelector('.mouse');
var floor = document.querySelector('.floor');
//bir.appendChild(mouse);
container.appendChild(floor);
container.style.height = '500px';
container.style.background = 'green';
container.style.border = '10px solid black';
container.style.margin = '20px auto';
var xi = true;
var yi = true;
for(var i = 0;i <mouses.length; i++){
    var randy = Math.floor(Math.random() * 500);
    yc.push(randy);
    var randx = Math.floor(Math.random() * 500);
    xc.push(randx);
    document.querySelector('#container').innerHTML += '<div class = "slider '+mouses[i]+'"><div>';
    var mouse1 = document.querySelector('.' + mouses[i]);
    mouse1.appendChild(mouse);
    mouse1.style.top = randy + 'px';
    mouse1.style.left = randx + 'px';
  
}
  setInterval(function(){
    
      for( var i = 0 ;i < mouses.length ; i++ ){
            var mouse1 = document.querySelector('.' + mouses[i]);
          
          
          
          
          
          
          
          
            if(yc[i] >500-25) yt[i] =false;
                if(yc[i] < 25) yt[i] = true;
                if(xc[i] >500-26) xt[i] =false;
                if(xc[i] < 27) xt[i] = true;
    
                if(yt[i])
                yc[i]+=3;
                else
                yc[i]-=3;
                if(xt[i])
                xc[i]+=1;
                else
                xc[i]-=1;
          
          mouse1.style.top = yc[i] + 'px';
          mouse1.style.left = xc[i] + 'px';
  
      }
},10);
//
//setInterval(function(){
//    if(y >500-25) yi =false;
//    if(y < 25) yi = true;
//    if(x >500-26) xi =false;
//    if(x < 27) xi = true;
//    
//    if(yi)
//    y+=3;
//    else
//        y-=3;
//    if(xi)
//    x+=1;
//    else
//        x-=1;
//    
//    
//    bir.style.left = x +'px';
//    bir.style.top = y + 'px';
//},10);
//
//
//
//
//
//
//
//
//





































//document.querySelector('body').innerHTML += '<div id = "container"></div>';
//document.querySelector('body').innerHTML += '<div class = "slider" id="bir"></div>';
//document.querySelector('body').innerHTML += '<div class = "slider" id="iki"></div>';
//document.querySelector('body').innerHTML += '<div class = "slider" id="uc"></div>';
//document.querySelector('body').innerHTML += '<div class = "slider" id="dord"></div>';
//
//var bir = document.querySelector('#bir');
//var iki = document.querySelector('#iki');
//var uc = document.querySelector('#uc');
//var dord = document.querySelector('#dord');
//var container = document.querySelector('#container');
//container.appendChild(bir);
//container.appendChild(iki);
//container.appendChild(uc);
//container.appendChild(dord);
//
//bir.style.width = '10rem';
//bir.style.height = '10rem';
//container.style.height = '600px';
//container.style.background = 'green';
//var num = 0;
//    setInterval(function(){
//        if(num===0){
//            bir.style.width = '1rem';
//            bir.style.height = '1rem';
//            iki.style.width = '1rem';
//            iki.style.height = '1rem';
//            uc.style.width = '1rem';
//            uc.style.height = '1rem';
//            dord.style.width = '1rem';
//            dord.style.height = '1rem';
//            num=1;
//        }
//        else{
//            bir.style.width = '10rem';
//            bir.style.height = '10rem';
//            iki.style.width = '10rem';
//            iki.style.height = '10rem';
//            uc.style.width = '10rem';
//            uc.style.height = '10rem';
//            dord.style.width = '10rem';
//            dord.style.height = '10rem';
//            num = 0;
//        }
//    },2000);
