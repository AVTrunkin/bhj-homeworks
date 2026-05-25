function getHole(index) {
  return document.getElementById('hole' + index);
}

let dead = 0;
let lost = 0;

for (let i = 1; i <= 9; i++) {
  getHole(i).onclick = function () {
    if (this.classList.contains('hole_has-mole')) {
      dead++;
      document.getElementById('dead').textContent = dead;
      if (dead === 10) {
        alert('Победа! Вы выиграли!');
        resetGame();
      }
    } else {
      lost++;
      document.getElementById('lost').textContent = lost;
      if (lost === 5) {
        alert('Игра окончена. Вы проиграли!');
        resetGame();
      }
    }
  }
}

function resetGame() {
  dead = 0;
  lost = 0;
  document.getElementById('dead').textContent = dead;
  document.getElementById('lost').textContent = lost;
}

function moveMole() {
  for (let i = 1; i <= 9; i++) {
    getHole(i).classList.remove('hole_has-mole');
  }
  const n = Math.floor(Math.random() * 9) + 1;
  getHole(n).classList.add('hole_has-mole');
}

setInterval(moveMole, 2000);