let monate = [
  "Januar",
  "Februar",
  "März",
  "April",
  "Mai",
  "Juni",
  "Juli",
  "August",
  "September",
  "Oktober",
  "November",
  "Dezember",
];

let wochenTag = [
  "Sonntag",
  "Montag",
  "Dienstag",
  "Mittwoch",
  "Donnerstag",
  "Freitag",
  "Samstag",
];

// ! ++++++++++

const day = document.querySelector(".day");
const hour = document.querySelector(".hour");
const minute = document.querySelector(".minute");
const second = document.querySelector(".second");
const period = document.querySelector(".period");

function clock() {
  let date = new Date();
  let weekday = date.toLocaleString("default", { weekday: "short" });
  day.innerHTML = weekday;
  hour.innerHTML = date.getHours();
  minute.innerHTML = date.getMinutes();
  second.innerHTML = date.getSeconds();
  if (date.getHours() < 12) {
    period.innerHTML = "AM";
  } else {
    period.innerHTML = "PM";
  }
}

setInterval(clock, 500);
