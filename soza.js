

let currentDate = new Date();
let toDate = new Date("Dec 31 2020 23:59:59");



let difference = Math.floor((toDate - currentDate)/1000);

let seconds = difference;

let minutes = Math.floor(seconds/60);

let hours = Math.floor(minutes/60);

let days = Math.floor(hours/24);

let months = Math.floor(days/30);

let years = Math.floor(months/12);

seconds = seconds % 60;

minutes = minutes % 60;

hours = hours % 24;

days = days % 30;

months = months % 12;


console.log(months + " months", days + " days", hours + " hours", minutes + " minutes", seconds + " seconds",);






































