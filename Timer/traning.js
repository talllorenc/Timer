const endAction = '2024-1-1'

function timeRemaning (endtime){
    const x = Date.parse(endtime) - new Date();
    const days = Math.floor(x / (1000 * 60 * 60 * 24));
    const hours = Math.floor((x / (1000 * 60 * 60) % 24));
    const minutes = Math.floor((x / 1000 / 60) % 60);
    const seconds = Math.floor((x / 1000 ) % 60);

    return {
        'all': x,
        'days': days,
        'hours': hours,
        'minutes': minutes,
        'seconds': seconds
    };
};

function zero (num){
    if (num >= 0 && num < 10){
        return `0${num}`
    } else {
        return num;
    }
}

function setTime(selector, endtime){
    const timer = document.querySelector(selector),
          days = timer.querySelector('#days'), 
          hours = timer.querySelector('#hours'), 
          minutes = timer.querySelector('#minutes'), 
          seconds = timer.querySelector('#seconds'),
          timeInterval = setInterval(updateTime, 1000);


    updateTime();
          
    function updateTime(){
        const x = timeRemaning(endtime);

        days.innerHTML = zero(x.days);
        hours.innerHTML = zero(x.hours);
        minutes.innerHTML = zero(x.minutes);
        seconds.innerHTML = zero(x.seconds);

        if(x.all <= 0){
            clearInterval(timeInterval);
        }
    }
}

setTime('.timer', endAction);