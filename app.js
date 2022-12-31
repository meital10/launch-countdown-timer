const timeDays = document.getElementById("days");
const timeHours = document.getElementById("hours");
const timeMinutes = document.getElementById("minutes");
const timeSeconds = document.getElementById("seconds");

const countdownDate = new Date().setDate(new Date().getDate() + 20);

let prevTimeBetweenDates;

setInterval(() => {
  const currentDate = new Date();
  const timeBetweenDates = Math.ceil((countdownDate - currentDate) / 1000);
  flipAllCards(timeBetweenDates);

  prevTimeBetweenDates = timeBetweenDates;
}, 250);

const flipAllCards = (time) => {
  let seconds = time % 60;
  let minutes = Math.floor(time / 60) % 60;
  let hours = Math.floor(time / (60 * 60)) % 24;
  let days = Math.floor(time / (24 * 60 * 60)) % 24;

  seconds = seconds < 10 ? "0" + seconds : seconds;
  minutes = minutes < 10 ? "0" + minutes : minutes;
  hours = hours < 10 ? "0" + hours : hours;

  flip(timeDays, days);
  flip(timeHours, hours);
  flip(timeMinutes, minutes);
  flip(timeSeconds, seconds);
};

const flip = (flipCard, newNumber) => {
  const topHalf = flipCard.querySelector(".top-flipcard");
  let startNumber = parseInt(topHalf.textContent);

  if (flipCard !== timeDays) {
    startNumber = startNumber < 10 ? "0" + startNumber : startNumber;
  }

  if (newNumber === startNumber) return;

  const bottomHalf = flipCard.querySelector(".bottom-flipcard");
  const topFlip = document.createElement("div");
  topFlip.classList.add("top-flip");
  const bottomFlip = document.createElement("div");
  bottomFlip.classList.add("bottom-flip");

  topHalf.textContent = startNumber;
  bottomHalf.textContent = startNumber;
  topFlip.textContent = startNumber;
  bottomFlip.textContent = newNumber;

  topFlip.addEventListener("animationstart", (e) => {
    topHalf.textContent = newNumber;
  });
  topFlip.addEventListener("animationend", (e) => {
    topFlip.remove();
  });
  bottomFlip.addEventListener("animationend", (e) => {
    bottomHalf.textContent = newNumber;
    bottomFlip.remove();
  });
  flipCard.append(topFlip, bottomFlip);
};
