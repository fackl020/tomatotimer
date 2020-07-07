let breakCounter = 0;

function startTime() {
  setTimeout(userAlert, 1000);
}

function userAlert() {

  breakCounter += 1
  console.log(breakCounter); //this is just to check my repetition counter is working during creation, delete once project is finished

  if (breakCounter < 2){
   alert('Stop working & take a 5 minute break, you earned it!');
 }
  else if (breakCounter = 2) {
    alert('Take a 10 minute break!');
  }
  else if (breakCounter > 3) {
    breakCounter = 0;
  }
}
