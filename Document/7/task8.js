const startBtn = document.querySelector('.start');
const stopBtn = document.querySelector('.stop');

const update = () => {
  const clock = document.getElementById('clock');
  let date = new Date();
  let hours = date.getHours();
  if (hours < 10) hours = '0' + hours;
  clock.children[0].innerHTML = hours;

  let minutes = date.getMinutes();
  if (minutes < 10) minutes = '0' + minutes;
  clock.children[1].innerHTML = minutes;

  let seconds = date.getSeconds();
  if (seconds < 10) seconds = '0' + seconds;
  clock.children[2].innerHTML = seconds;
}

let timerId;

const clockStart = () => {
  timerId = setInterval(update, 1000);
  update();
}

const clockStop = () => {
  clearInterval(timerId);
  timerId = null;
}

startBtn.addEventListener('click', () => {
  clockStart();
});

stopBtn.addEventListener('click', () => {
  clockStop();
});