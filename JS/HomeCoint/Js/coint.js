let coints = 150;    // ilk coin
let homes = [
    {
        name:"Home",
        take:50,
        coint:1
    }
],
time = 5;
 

let bank = document.querySelector('.bank'),
addHome = document.querySelector('.add'),
second = document.querySelector('.second'),sec = time-1;/*geri sayim*/
function writes(i){
    let d = (Math.floor(i/8)*2)+2;
    homes[0].coint = d;
    var home = document.querySelectorAll('.home');
    let h1 = home[i].firstElementChild,
    p = home[i].lastElementChild;
    if(coints >=homes[0].take){
        if(h1.textContent === ""){
            h1.innerHTML = homes[0].name;
            p.innerHTML = homes[0].coint;
            coints-=homes[0].take;
            bank.innerHTML = coints + ' $';
        }
        else{
            home = document.querySelectorAll('.home');
            let c = Number(p.textContent) + (homes[0].coint/2);
            p.innerHTML = c;
            coints-=homes[0].take;
            bank.innerHTML = coints + ' $';
        }

            
}   
    else{
        var home = document.querySelectorAll('.home');
        bank.style.color = "red";
        setTimeout(function(){
            bank.style.color = "rgb(165, 140, 0)";
        },1000)
    }
}


setInterval(bankPlus,1000 * time);
let secondCoint = document.querySelector('.second-coint');
function bankPlus(){
    home = document.querySelectorAll('.home');
    let = coinPlus = 0;  // 10 saniyede nece coin qazanma
    for(let i = 0;i<home.length;i++){
        let coin = home[i].lastElementChild.textContent;
        coinPlus += Number(coin);
        coints += Number(coin);
        bank.innerHTML = coints + ' $';
    }
    secondCoint.innerHTML = coinPlus + " / "+time+"s";
}
setInterval(function(){   /* geri sayim*/
    sec-=1;
    second.innerHTML = sec + " s";
    if(sec==0) sec = time;
},1000)
let ulHomes = document.querySelector('.homes');
let homesIndex = 8;
function add(){
    if(coints>99){
    ulHomes.innerHTML += '<li class="home" onClick = "writes('+ homesIndex +')"><h1></h1><div class="black">50$</div><p></p></li>';
    homesIndex++;
    coints -=100;
    bank.innerHTML = coints + ' $';
    addHome.style.color = "green";
        setTimeout(function(){
            addHome.style.color = "#000";
        },500)
}
    else{
        addHome.style.color = "red";
        setTimeout(function(){
            addHome.style.color = "#000";
        },1000)
    }
}
