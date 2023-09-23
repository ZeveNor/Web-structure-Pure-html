const daysEl = document.getElementById("days");
const hoursEl = document.getElementById("hours");
const minsEl = document.getElementById("mins");
const secondsEl = document.getElementById("seconds");

function countdown() {
  const target = new Date("11/20/2022");

  const x = setInterval(() => {
    const diff = target.getTime() - Date.now();
    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const mins = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((diff % (1000 * 60)) / 1000);

    daysEl.innerHTML = days;
    hoursEl.innerHTML = hours;
    minsEl.innerHTML = mins;
    secondsEl.innerHTML = seconds;

    if (diff < 0) {
      clearInterval(x);
      document.getElementById("days").innerHTML = "EXPIRE";
      hoursEl.innerHTML = "";
      minsEl.innerHTML = "";
      secondsEl.innerHTML = "";
    }
  }, 1000);
}
countdown();
