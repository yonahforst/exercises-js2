
// when you hit set alarm, any previous alarm should be cleared
// when the timer runs out, the countdown should stop.

let currentTimerId

function setAlarm() {
  // clear any previous alarms
  if (currentTimerId) {
    clearInterval(currentTimerId)
  }

  // get the value from the input field
  let inputField = document.querySelector('#alarmSet')
  let secondsRemaining = inputField.value
  setTitle(secondsRemaining)

  // run a function every second which:
  currentTimerId = setInterval(() => {
    //  removes one second from the seconds remaining
    secondsRemaining--
    //  updates the title element
    setTitle(secondsRemaining)

    // when it reaches zero:
    if (secondsRemaining <= 0) {
      // play the alarm
      playAlarm()
      // stop counting down
      clearInterval(currentTimerId)
    }
  }, 1000)
}






function setTitle(seconds) {
  let alarmMinutes = Math.round(seconds / 60)
  let alarmSeconds = seconds % 60 
  let titleElement = document.querySelector('#timeRemaining')
  titleElement.innerText = 'Time Remaining ' + alarmMinutes + ':' + alarmSeconds
}





// DO NOT EDIT BELOW HERE

var audio = new Audio("alarmsound.mp3");

function setup() {
  document.getElementById("set").addEventListener("click", () => {
    setAlarm();
  });

  document.getElementById("stop").addEventListener("click", () => {
    pauseAlarm();
  });
}

function playAlarm() {
  audio.play();
}

function pauseAlarm() {
  audio.pause();
}

window.onload = setup;
