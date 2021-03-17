export function run_silhouette(){
    var t = document.getElementById("anim");
    var pos = 0;
    var c = 0;
    var id = setInterval(a, 50);
    function a(){
        if (pos == 95|| c && pos > 0){
            c = 1;
            pos--;
            t.style.transform = "scaleX(-1)";
            t.style.marginLeft = pos + "%";
        }
        else if (c && pos == 0){
            t.style.transform = "scaleX(1)";
            c = 0;
        }
        else if (c == 0){
            pos++;
            t.style.marginLeft = pos + "%";
        }
    }
}