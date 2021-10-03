const nowClock = document.querySelector("#clock");
const nowDate = document.getElementById("date");

function getClock(){
    const date = new Date();
    const year = String(date.getFullYear());
    const month = String(date.getMonth()+1).padStart(2,"0");
    const day = String(date.getDate()).padStart(2,"0");
    const hours= String(date.getHours()).padStart(2,"0");
    const Minutes= String(date.getMinutes()).padStart(2,"0");
    const Seconds= String(date.getSeconds()).padStart(2,"0");

    
    nowClock.innerText = `${hours}:${Minutes}:${Seconds}`;
    nowDate.innerText = `${year}.${month}.${day}`;
}

getClock();
setInterval(getClock,1000);
