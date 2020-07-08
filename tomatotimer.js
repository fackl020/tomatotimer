//document.getElementById ("startTimer").addEventListener ("click", startTimer);
document.getElementById("button").addEventListener("click", startTimer, false);

let minutes = 20;
let seconds = "00";

function startTimer() {

  const minutesInterval = setInterval(minutesTimer, 60000);
  const secondsInterval = setInterval(secondsTimer, 1000);

  document.getElementById('minutes').innerHTML = minutes - 1;
  document.getElementById('seconds').innerHTML = 59;


  function minutesTimer() {
    minutes = minutes - 1;
    document.getElementById('minutes').innerHTML = minutes;
    console.log(minutes);
  }

  function secondsTimer() {
    seconds = seconds - 1;
    document.getElementById('seconds').innerHTML = seconds;
    console.log(seconds);

  }
  if (seconds <= 0) {
    seconds = 60;
  }

}
