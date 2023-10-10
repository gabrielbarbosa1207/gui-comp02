// A helper function for the countdown timer
function startCountdown(button) {
  let timeLeft = 30; // in seconds

  // Update the button's text and background color
  button.textContent = `Aguarde ${timeLeft}s ..`;
  button.style.backgroundColor = "lightgray";
  button.disabled = true;

  const timerInterval = setInterval(() => {
      timeLeft--;

      if (timeLeft >= 0) {
          button.textContent = `Aguarde ${timeLeft}s ..`;
      } else {
          // Time is up
          clearInterval(timerInterval);
          button.textContent = "HACKEAR NOVAMENTE";
          button.style.backgroundColor = ""; // Reset background color
          button.disabled = false;
      }
  }, 1000);
}

function highlightCells() {
  // Get all the cells
  const cells = document.querySelectorAll('#matrix td');
  
  // Reset all cell colors
  cells.forEach(cell => {
    cell.classList.remove('highlighted');
  });
  
  // Create a set to ensure unique random numbers
  const uniqueRandoms = new Set();

  while (uniqueRandoms.size < 3) {
    const randomNum = Math.floor(Math.random() * 25);
    uniqueRandoms.add(randomNum);
  }

  // Highlight 3 random cells
  uniqueRandoms.forEach(num => {
    cells[num].classList.add('highlighted');
  });

  // Get the button
  const button = document.querySelector("#button01"); // Replace 'yourButtonId' with the id of your button

  // Start the countdown
  startCountdown(button);
}

// Assuming you have a button with id="yourButtonId"
document.querySelector("#button01").addEventListener("click", highlightCells);
