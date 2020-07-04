<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Game</title>
  <link rel= "stylesheet" href = "Css/game.css"
  <link href="https://fonts.googleapis.com/css?family=Rubik+Mono+One&display=swap" rel="stylesheet">
</head>
<body>
  <header>
    <div id="excellent">EXCELLENT</div>
    <div id="gameover">
      <h1 class = "gameover-h1">GAME OVER</h1>
      <p class="scor"></p>
      <a href="#" class = "comeback">Menu</a>
    </div>
    <div id="game">
      <div id="question" class = "box">
        <div class="game-question"></div>
      </div>
      <div id="reply" class = "box">
        <div class="game-reply">
          <ul class = "options">
            <li class = "option">
              <a href="#" class = "link A" onClick = "change(a);">
                <span class="s-a">A</span>
                <p class="prq"></p>
              </a>
            </li>
            <li class = "option error1">
              <a href="#" class = "link B" onClick = "change(b);">
                <span class="s-a">B</span>
                <p class="prq"></p>
              </a>
            </li>
            <li class = "option">
              <a href="#" class = "link C" onClick = "change(c);">
                <span class="s-a">C</span>
                <p class="prq"></p>
              </a>
            </li>
            <li class = "option">
              <a href="#" class = "link D" onClick = "change(d);">
                <span class="s-a">D</span>
                <p class="prq"></p>
              </a>
            </li>
            <li class = "option">
              <a href="#" class = "link E" onClick = "change(e);">
                <span class="s-a">E</span>
                <p class="prq"></p>
              </a>
            </li>
            <div class="clear"></div>
          </ul>
        </div>
      </div>
    </div>
  </header>
  <script src = "JS/game.js"></script>
</body>
</html>
