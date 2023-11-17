const secondHand = document.getElementById('second-hand');
const minuteHand = document.getElementById('minute-hand');
const hourHand = document.getElementById('hour-hand');
const digitalElement = document.getElementById('digital');
const dateElement = document.getElementById('date');

function clockTick() {
  const date = new Date();

  const seconds = date.getSeconds() / 60;

  const minutes = (date.getMinutes() + seconds) / 60;

  const hours = (date.getHours() + minutes) / 12;

  rotateClockHand(secondHand, seconds);
  rotateClockHand(minuteHand, minutes);
  rotateClockHand(hourHand, hours);

  const digitalMin = formatDigital(date.getMinutes());
  const digitalHour = date.getHours() === 12 ? 12 : date.getHours() % 12;

  digitalElement.innerHTML = `${digitalHour}:${digitalMin}`;

  const formattedDate = getFormattedDate();

  dateElement.innerHTML = formattedDate;
}

// helper functions:

function rotateClockHand(el, rotation) {
  el.style.setProperty('--rotate', rotation * 360);
}

function getFormattedDate() {
  const daysOfWeek = [
    'Sunday',
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday',
  ];
  const months = [
    'Jan',
    'Feb',
    'Mar',
    'Apr',
    'May',
    'Jun',
    'Jul',
    'Aug',
    'Sep',
    'Oct',
    'Nov',
    'Dec',
  ];

  const date = new Date();

  const dayOfWeek = daysOfWeek[date.getDay()];
  const dayOfMonth = date.getDate();
  const month = months[date.getMonth()];

  return `${dayOfWeek}, ${month} ${dayOfMonth}`.toUpperCase();
}

function formatDigital(time) {
  return time < 10 ? `0${time}` : time;
}

setInterval(clockTick, 1000);
