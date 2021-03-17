export function setTimer(s){
    var count_down = new Date(s).getTime();
    if (isNaN(count_down)){
        return (0);
    }
    else{
        function time_f(){
            var now = new Date().getTime();
            var time_left = count_down - now;
    
            var days = Math.floor(time_left / (1000 * 60 * 60 * 24));
            var hours = Math.floor((time_left % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            var minutes = Math.floor((time_left % (1000 * 60 * 60)) / (1000 * 60));
            var seconds = Math.floor((time_left % (1000 * 60)) / 1000);

            document.getElementById("days").innerHTML = days + "d "
            document.getElementById("hours").innerHTML = hours + "h " 
            document.getElementById("mins").innerHTML = minutes + ": "
            document.getElementById("secs").innerHTML = seconds + "s " 
        }
        time_f();
    }
    return (1);
}