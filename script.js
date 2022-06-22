function showTime(){
    const time = new Date();
    let hour = time.getHours();
    let minutes = time.getMinutes();
    let seconds = time.getSeconds();
    let session = document.querySelector('.timeSession');

    if(hour >= 12){
        session.innerText = "PM";
    }
    else{
        session.innerText = "AM";
    }

    if(hour > 12){
        hour = hour - 12;
    }
    
    document.querySelector('.hour').innerText = hour;
    document.querySelector('.minutes').innerText = minutes;
    document.querySelector('.seconds').innerText = seconds;
}

setInterval(showTime,10);
