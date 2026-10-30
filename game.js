let score = 0;
let highscore = Number(localStorage.getItem('highscore') || 0);
// чтение рекорда
let highscore = Number(localStorage.getItem('highscore') || 0);

// сохранение рекорда
if (score > highscore) {
  highscore = score;
  localStorage.setItem('highscore', highscore);
}
