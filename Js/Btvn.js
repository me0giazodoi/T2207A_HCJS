var a=10;
var b=0;
function timer(){
    var min = document.getElementById("min");
    var sec = document.getElementById("sec");
    min.innerText = a;
    sec.innerText = b;
    b--;
    if (b<0){
        b=59;
        a--;
    }
    if (a<0){
        clearInterval(si);
    }
}
var si;
function startTimer (){
    if(a>0) {
        si = setInterval(timer, 2);
    }
}