// console.log("javascript is linked")
let hourElement = document.getElementById("hours");
let minuteElement = document.getElementById("minutes");
let secondElement = document.getElementById("seconds");
let inputElement = document.getElementById("datetime-input");
let buttonElement = document.getElementById("start-timer");
let resetButtonElement = document.getElementById("reset-timer");
// console.log(buttonElement);

const currentTime = new Date();
// console.log(currentTime)
buttonElement.addEventListener("click", () => {
  // Check if the input field is empty
  if (!inputElement.value) {
    alert("Please select a date and time!");
    return; // Stop further execution
  }

  // Get the value from the input field
  let targetDateTime = new Date(inputElement.value);

  // Check if the date is valid
  if (isNaN(targetDateTime)) {
    alert("Please enter a valid date and time!");
  } else {
    console.log("Target Date and Time:", targetDateTime);
  }

  function updateCountdown() {
    // Get the current time
    let now = new Date();

    // Calculate the difference in milliseconds
    let timeDifference = targetDateTime - now;

    if (timeDifference <= 0) {
      // Stop the timer when the countdown ends
      clearInterval(timer);
      hourElement.textContent = "00";
      minuteElement.textContent = "00";
      secondElement.textContent = "00";
      alert("Countdown finished!");
      return;
    }

    // Convert milliseconds to hours, minutes, and seconds
    let hours = Math.floor((timeDifference / (1000 * 60 * 60)) % 24);
    let minutes = Math.floor((timeDifference / (1000 * 60)) % 60);
    let seconds = Math.floor((timeDifference / 1000) % 60);

    // Update the HTML
    hourElement.textContent = String(hours).padStart(2, "0");
    minuteElement.textContent = String(minutes).padStart(2, "0");
    secondElement.textContent = String(seconds).padStart(2, "0");
  }

  // Start the countdown
  updateCountdown(); // Call it immediately
  let timer = setInterval(updateCountdown, 1000);
});

