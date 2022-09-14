var m =10;
var s =0;
function time (){
    var min = document.getElementById("min");
    var sec = document.getElementById("sec");
    min.innerText = m;
    sec.innerText = s;
    s--;
    if(s<0){
        s=59;
        m--;
    }
    if(m<0){
        clearInterval(si);
    }
}
var si;
function startTime (){
    if (m>0){
        si=setInterval(time,1000);
    }
}