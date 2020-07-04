var list =[
  {
    question: "TRT cocuk kahramanlarinan Pepe",//sual
    option: ['Pepe','Kayu','Niloya','Ben 10','Sirin baba'], //variantlar
    reply:"A" //duzgun cavab
  },
  {
    question: "Vektor təsvirlərinin yaradılması və emalının proqram vasitələri hansılardır?",
    option: ['3D Studio Max, Softimage 3D, Macromedia Free Hand',
    'AutoCAD, Adobe İllustrator, Adobe Photoshop',
    'Painter, Macromedia Free Hand, Fauve Matisse',
    'CorelDraw, AutoCAD, Adobe İllustrator',
    'Adobe İllustrator, Macromedia Free Hand, CorelDraw'
  ],
    reply:"E"
  },
  {
    question: "Dünyada ilk veb-sayt neçənci ildə yaradılıb?",//sual
    option: ['1999','1991','2005','1995','1984'], //variantlar
    reply:"B" //duzgun cavab
  },
  {
    question: "Dünyada ilk veb-sayt neçənci ildə yaradılıb?",//sual
    option: ['1999','1991','2005','1995','1984'], //variantlar
    reply:"B" //duzgun cavab
  },
  {
    question: "Dünyada ilk veb-sayt neçənci ildə yaradılıb?",//sual
    option: ['1999','1991','2005','1995','1984'], //variantlar
    reply:"B" //duzgun cavab
  },
  {
    question: "Dünyada ilk veb-sayt neçənci ildə yaradılıb?",//sual
    option: ['1999','1991','2005','1995','1984'], //variantlar
    reply:"B" //duzgun cavab
  },
  {
    question: "Dünyada ilk veb-sayt neçənci ildə yaradılıb?",//sual
    option: ['1999','1991','2005','1995','1984'], //variantlar
    reply:"B" //duzgun cavab
  },
  {
    question: "Dünyada ilk veb-sayt neçənci ildə yaradılıb?",//sual
    option: ['1999','1991','2005','1995','1984'], //variantlar
    reply:"B" //duzgun cavab
  },
  {
    question: "Dünyada ilk veb-sayt neçənci ildə yaradılıb?",//sual
    option: ['1999','1991','2005','1995','1984'], //variantlar
    reply:"B" //duzgun cavab
  },
  {
    question: "Dünyada ilk veb-sayt neçənci ildə yaradılıb?",//sual
    option: ['1999','1991','2005','1995','1984'], //variantlar
    reply:"B" //duzgun cavab
  },
  {
    question: "Dünyada ilk veb-sayt neçənci ildə yaradılıb?",//sual
    option: ['1999','1991','2005','1995','1984'], //variantlar
    reply:"B" //duzgun cavab
  },
  {
    question: "Dünyada ilk veb-sayt neçənci ildə yaradılıb?",//sual
    option: ['1999','1991','2005','1995','1984'], //variantlar
    reply:"B" //duzgun cavab
  },
  {
    question: "Dünyada ilk veb-sayt neçənci ildə yaradılıb?",//sual
    option: ['1999','1991','2005','1995','1984'], //variantlar
    reply:"B" //duzgun cavab
  },
  {
    question: "Dünyada ilk veb-sayt neçənci ildə yaradılıb?",//sual
    option: ['1999','1991','2005','1995','1984'], //variantlar
    reply:"B" //duzgun cavab
  },
  {
    question: "Dünyada ilk veb-sayt neçənci ildə yaradılıb?",//sual
    option: ['1999','1991','2005','1995','1984'], //variantlar
    reply:"B" //duzgun cavab
  },
  {
    question: "Dünyada ilk veb-sayt neçənci ildə yaradılıb?",//sual
    option: ['1999','1991','2005','1995','1984'], //variantlar
    reply:"B" //duzgun cavab
  }
];
var num = 0; // sual sirasi
var a = "A",b = "B",c = "C",d = "D",e = "E";
var in_reply = ""; // alinan cavab
var questions = document.querySelector('.game-question');
var A = document.querySelectorAll(".options a .prq"); // variantlar
var gameOver = document.querySelector('#gameover');
var excellent = document.querySelector("#excellent");
let scor = 0; //scor
let scorPlus = 100; //scor artmasi 
let bestScor = document.querySelector("#best-scor");//en yaxshi scor
questions.innerHTML = list[num].question;
for(var i = 0 ; i < A.length;i++){
  A[i].innerHTML += list[num].option[i];
}
function comeback(){
  bestScor.innerHTML = "Best: " + scor;
}


function change(k){ //cavab variantini almaq ucun
  in_reply = k;
  check();
}

function check(){
  if(in_reply == list[num].reply){ // cavabin dogrulugunu yoxluyur
    excellent.style.opacity = '0.9'; // duzgun variant oldugunu bildirmey ucun
    var t=0;
    setTimeout(function(){ //2 saniyeden sonra silinir
        excellent.style.opacity = '0';
    },2000);
    num++;
    questions.innerHTML = list[num].question; //SUALI EKRANA YAZIR
    for(var i = 0 ; i < A.length;i++){ // variantlari ekrana yazir
      A[i].innerHTML = list[num].option[i];
    }
    scor+= scorPlus;
    scorPlus+=100;
    var gameScor = document.querySelector('.game-scor span'); //scorun yazilacaqi yer
    gameScor.innerHTML = scor;
  }
  else{
    gameOver.style.opacity = '0.9'; 
    
  }
  

}
