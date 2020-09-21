


function time() {
    
    let currentDate = new Date();
    let newYear = new Date("jan 01 2021 00:00:00");

    let diff = Math.floor((newYear.getTime() - currentDate.getTime())/1000);
    let seconds = diff % 60;

    let minutes = Math.floor(diff/60) % 60;
    let hours = Math.floor(diff/3600) % 24;
    let days = Math.floor(diff/86400);
    
    document.getElementById("seconds").textContent = seconds;
    document.getElementById("minutes").textContent = minutes;
    document.getElementById("hours").textContent = hours;
    document.getElementById("days").textContent = days;

}

setInterval(time, 1000);






