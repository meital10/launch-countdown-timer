const countdown = () => {
  const endDate = new Date("December 31, 2022 00:00:00").getTime();
  const nowDate = new Date().getTime();
  const diff = endDate - nowDate;
  console.log(diff);
  const seconds = 1000;
  const minutes = seconds * 60;
  const hours = minutes * 60;
  const days = hours * 24;

  let timeDays = Math.floor(diff / days);
  let timeHours = Math.floor((diff % days) / hours);
  let timeMinutes = Math.floor((diff % hours) / minutes);
  let timeSeconds = Math.floor((diff % minutes) / seconds);

  timeHours = timeHours < 10 ? "0" + timeHours : timeHours;
  timeMinutes = timeMinutes < 10 ? "0" + timeMinutes : timeMinutes;
  timeSeconds = timeSeconds < 10 ? "0" + timeSeconds : timeSeconds;

  document.getElementById("days").innerText = timeDays;
  document.getElementById("hours").innerText = timeHours;
  document.getElementById("minutes").innerText = timeMinutes;
  document.getElementById("seconds").innerText = timeSeconds;
};

setInterval(countdown, 1000);