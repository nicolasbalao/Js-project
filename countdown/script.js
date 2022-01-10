const days = document.getElementById("days");
const hours = document.getElementById("hours");
const minutes= document.getElementById("minutes");
const secondes = document.getElementById("seconde");


var countDown = setInterval(() => {

  const goalDate = new Date("10 January 2022");
  const currenDate = new Date();
  const durationS = (goalDate - currenDate) / 1000;

  const day = Math.floor(durationS / 3600 / 24);
  const hour = Math.floor(durationS / 3600) % 24;
  const minute = Math.floor(durationS / 60) % 60;
  const seconde = Math.floor(durationS) % 60;


  days.innerHTML = formatString(day);
  hours.innerHTML = formatString(hour);
  minutes.innerHTML = formatString(minute);
  secondes.innerHTML = formatString(seconde);

  console.log(`days: ${day} hours:${hour} minutes:${minute} secondes: ${seconde}`);
}, 1000);

function formatString(str){
  return str < 10 ? `0${str}`: str;
}
