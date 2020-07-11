var msec = 0;
var sec = 0;
var min = 0;
var hour = 0;
var Msec = document.getElementById('msec');
var Sec  = document.getElementById('sec');
var Min = document.getElementById('min');
var Hour = document.getElementById('hour');
var interval;

function timer(){

    msec++;
    Msec.innerHTML=msec;
    if(msec>=100){
    sec++;
    Sec.innerHTML = sec;
    msec = 0;
    }
    else if(sec>=60){
        min++;
        Min.innerHTML = min;
        sec = 0;
    } 
    else if(min>=60){
        hour++;
        Hour.innerHTML = hour;
        min = 0;
    }
}

function start(){
    interval = setInterval(timer,10);
    document.getElementById('start').disabled=true;  
}
function stop(){
    clearInterval(interval);
    document.getElementById('start').disabled=false;
}
function reset(){
    document.getElementById('start').disabled=false;
    msec = 0;
    sec = 0;
    min = 0;
    hour = 0;
    Msec.innerHTML = msec;
    Sec.innerHTML = sec;
    Min.innerHTML = min;
    Hour.innerHTML = hour;
    stop()

}
