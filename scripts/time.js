export function time_now(){
    //var date = new Date("Jul 25, 2021 16:37:52").getTime();

    function time_f(){
        var now = new Date();
        var hours = now.getHours();
        var minutes = now.getMinutes();
        var seconds = now.getSeconds();
        document.getElementById("days").innerHTML = ""
        document.getElementById("hours").innerHTML = hours + "h " 
        document.getElementById("mins").innerHTML = minutes + "m " 
        document.getElementById("secs").innerHTML = seconds + "s " 
    }
    time_f();
}