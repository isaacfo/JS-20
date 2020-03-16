const container = document.getElementById('container');
const text = document.getElementById('text');

const totalTime = 7500;
const breateTime = (totalTime / 5) * 2;
const holdTime = totalTime / 5;

breatheAnimation();

function breatheAnimation() {
  text.innerText = 'Breathe In!';
  container.className = 'container grow';
  setTimeout(() => {
    text.innerText = 'Hold';

    setTimeout(() => {
      text.innerText = 'Breath Out!';
      container.className = 'container shrink';
    }, holdTime);
  }, breateTime);
}

setInterval(breatheAnimation, totalTime);
