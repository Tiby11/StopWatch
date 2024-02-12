let startBtn = document.getElementById("playBtn");
let stopBtn = document.getElementById("stopBtn");
let resetBtn = document.getElementById("resetBtn");
let hours = 0, minutes = 0, seconds = 0, count = 0, timer = false, play = false;
startBtn.addEventListener("click",function(){
    timer = true;
    if(!play)   
    stopWatch();
})
stopBtn.addEventListener("click", function(){
    timer = false;
    play = false;
})
resetBtn.addEventListener("click", function(){
    hours = 0;
    minutes = 0;
    seconds = 0;
    count = 0;
    timer = false;
    play = false;
    document.getElementById("hr").innerHTML = "00";
    document.getElementById("min").innerHTML = "00";
    document.getElementById("sec").innerHTML = "00";
    document.getElementById("count").innerHTML = "00";
})
function stopWatch()
{
    if (timer)
    {
        play = true;
        count++;
        if (count == 100) 
        {
            seconds++;
            count = 0;
        }
        if (seconds == 60)
        {
            seconds = 0;
            minutes++;
        }
        if (minutes == 60)
        {
            hours++;
            minutes = 0;
            seconds = 0;
        }
        let countString = count;
        let secString = seconds;
        let minString = minutes;
        let hrString = hours;
        if (count < 10) countString = "0" + countString;
        if (seconds < 10) secString = "0" + secString;
        if (minutes < 10) minString = "0" + minString;
        if (hours < 10) hrString = "0" + hrString;
        document.getElementById("hr").innerHTML = hrString;
        document.getElementById("min").innerHTML = minString;
        document.getElementById("sec").innerHTML = secString;
        document.getElementById("count").innerHTML = countString;
        setTimeout(stopWatch, 10);
    }
}