const hour = document.querySelector('.hour');
const minutes = document.querySelector('.minutes');
const seconds = document.querySelector('.seconds');


const watch = setInterval(function time() {
    let date = new Date;
    let hourWatch = date.getHours();
    let minutesWatch = date.getMinutes();
    let secondsWatch = date.getSeconds();

    if (hourWatch < 10) {
        hourWatch = "0" + hourWatch;
    }

    if (minutesWatch < 10) {
        minutesWatch  = "0" + minutesWatch ;
    }

    if (secondsWatch < 10) {
        secondsWatch = "0" + secondsWatch; 
    }

    hour.textContent = hourWatch;
    minutes.textContent = minutesWatch;  
    seconds.textContent = secondsWatch; 

}) 