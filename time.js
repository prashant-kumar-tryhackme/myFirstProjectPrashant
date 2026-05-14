function updateDuration() {
  const startDate = new Date(2019, 6, 1, 0, 0, 0); // 1 जुलाई 2019, बजे 00:00:00
  const now = new Date();

  // Calculate raw differences
  let years   = now.getFullYear()  - startDate.getFullYear();
  let months  = now.getMonth()     - startDate.getMonth();
  let days    = now.getDate()      - startDate.getDate();
  let hours   = now.getHours()     - startDate.getHours();
  let minutes = now.getMinutes()   - startDate.getMinutes();
  let seconds = now.getSeconds()   - startDate.getSeconds();

  // Borrow logic for seconds → minutes
  if (seconds < 0) {
    seconds += 60;
    minutes -= 1;
  }

  // Borrow logic for minutes → hours
  if (minutes < 0) {
    minutes += 60;
    hours -= 1;
  }

  // Borrow logic for hours → days
  if (hours < 0) {
    hours += 24;
    days -= 1;
  }

  // Borrow logic for days → months
  if (days < 0) {
    const prevMonth = new Date(now.getFullYear(), now.getMonth(), 0);
    days += prevMonth.getDate();
    months -= 1;
  }

  // Borrow logic for months → years
  if (months < 0) {
    months += 12;
    years -= 1;
  }

  // Update the DOM
  document.getElementById("duration").textContent =
    `${years} वर्षों ${months} महीने ${days} दिन ` +
    `${hours} घंटे ${minutes} मिनट ${seconds} सेकंड`;
}

// Run once immediately
updateDuration();
// Then update every second
setInterval(updateDuration, 1000);