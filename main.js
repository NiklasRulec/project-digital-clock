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

let date1 = new Date();
document.write(date1 + "<br>");
document.write(date1.getFullYear() + "<br>");
document.write(date1.getMonth() + " Monat" + "<br>");
document.write(date1.getDay() + " Tag" + "<br>");
document.write(date1.getHours() + " Stunde" + "<br>");
document.write(date1.getMinutes() + " Minute" + "<br>");
let weekday = date1.toLocaleString("default", { weekday: "long" });
document.write(weekday + "<br>");
let month = date1.toLocaleString("default", { month: "long" });
document.write(month + "<br>");

// ! ++++++++++

const day = document.querySelector(".day");
const hour = document.querySelector(".hour");
const minute = document.querySelector(".minute");
const second = document.querySelector(".second");
const period = document.querySelector(".period");

function clock() {
  let weekday2 = date1.toLocaleString("default", { weekday: "short" });
  day.innerHTML = weekday2;
  hour.innerHTML = date1.getHours();
  minute.innerHTML = date1.getMinutes();
  second.innerHTML = date1.getSeconds();
  if (date1.getHours() < 12) {
    period.innerHTML = "AM";
  } else {
    period.innerHTML = "PM";
  }
}

clock();

setInterval(function () {
  location.reload();
}, 1000);
