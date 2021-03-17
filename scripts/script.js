import { setTimer } from "./timer.js";
import { time_now } from "./time.js";
import { run_silhouette } from "./animation_header.js";

run_silhouette();
/** Reset button */
var format_send_saved = "";
var reset = document.getElementById("reset");
reset.onclick = function(){
    format_send_saved = "";
    init();
}
/** launch time/timer */
function init(){
    var timerSend = document.getElementById("set").value;
    if (!timerSend){
        if (!format_send_saved){
            time_now();
        }
        else{
            setTimer(format_send_saved);
        }
    }
    else if (timerSend){
        format_send_saved = timerSend;
        if (!setTimer(format_send_saved)){
            format_send_saved = "";
        }
    }
}
setInterval(init, 1000);
