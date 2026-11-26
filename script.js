const hoursE1 = document.getElementById('hours');
const minutesE1 = document.getElementById('minutes');
const secondsE1 = document.getElementById('seconds');

const startBth = document.getElementById('start-continue');
const stopBtn = document.getElementById('stop');


let hours = 0;
let minutes = 0;
let seconds = 0;
let timerInterval = null;

function formatTime(value) {
  return value <10 ? '0' + value : value;
}

function updateTime() {
 seconds++;
  
   if (seconds === 60) {
     seconds = 0;
     minutes++;
    
     if (minutes === 60) {
       minutes = 0;
     hours++;
   }
 }

 secondsE1.textContent = formatTime(seconds);
 minutesE1.textContent = formatTime(minutes);
 hoursE1.textContent = formatTime(hours);
}

startBtn.addEventListener('click', () => {
  if (timerInterval !== null) return;

  timerInterval = setInterval(updateTimer, 1000);

  stopBtn.style.opacity = '0.5'
  startBtn.style.opacity = '1'
});

stopBtn.addEventListener('click', () => {
  if (timerInterval !== null) return;

  clearInterval(timerInterval);
  timerInterval = null;

  stopBtn.style.opacity = '0.5'
  startBtn.style.opacity = '1'
  startBtn.textContent = 'Продовжити';
});
