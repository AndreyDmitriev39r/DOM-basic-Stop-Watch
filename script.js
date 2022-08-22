// constants

const startStopBtn = document.querySelector('#startStopBtn');
const resetBtn = document.querySelector('#resetBtn');
const timer = document.getElementById('timer');

// console.log(startStopBtn,resetBtn)

let [seconds, minutes, hours] = [0, 0, 0];

let isTimerRunning = false;
let timerInterval = null; //more research about null usage required

// functions

const addLeadingZeroes = (str) => {
  return Number(str) < 10 ? `0${str}` : str;
}

const stopWatch = () => {
  seconds++;
  if (seconds / 60 === 1) {
    seconds = 0;
    minutes++;
  }
  if (minutes / 60 === 1) {
    minutes = 0;
    hours++;
  }
  // rendering stuff in timer
  let displayTimer = timer.innerText
    = `${addLeadingZeroes(hours)}:${addLeadingZeroes(minutes)}:${addLeadingZeroes(seconds)}`;
}

const startOrStop = () => {
  if (!isTimerRunning) {
    timerInterval = window.setInterval(stopWatch, 1000);
    startStopBtn.innerHTML = `<i id="pause" class="fa-solid fa-pause"></i>`;
    isTimerRunning = true;
  }
  else {
    // technique to pause th timer, more research needed
    window.clearInterval(timerInterval);
    startStopBtn.innerHTML = `<i id="play" class="fa-solid fa-play"></i>`;
    isTimerRunning = false;
  }
}

const reset = () => {
  window.clearInterval(timerInterval);
  [seconds, minutes, hours] = [0, 0, 0];
  timer.innerHTML = '00:00:00'
}

// window.setInterval(stopWatch, 1000)//test only

// event listeners

startStopBtn.addEventListener('click', startOrStop);

resetBtn.addEventListener('click', reset);


// OPTIONAL TODO: add more logic to situation when resetting
// occurs when timer is running

