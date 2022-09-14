var x;
x = 10;//number
x = "hello world!";
x = true
console.log(x);
if(x==true){
    console.log("Demo 1 T2207A");
}else{
    console.log("x false");
}
for(var i=0;i<10;i++){
    console.log("Scooby");
}
var s1 = 5;
var s2 = "xin chao";
console.log(s1+s2);
console.log(s2+s1);
console.log(s1+"5");
var a = [];
a[0] = 1
a[1] = "hello";
a.push(100);//a[2] = 100;
a.push("t2207a");
function tinhtong(a,b){
    return a+b;
}
function tinhhieu(a,b){
    console.log(a+b);
}
var tinhtich = function (a,b){
    return a*b;
}
var z = tinhtong(2,3);
var k = tinhtich(3,4);
tinhhieu(5,2);

var t = 10;
function demo(){
    var xyz = document.getElementById("head");
    xyz.innerText += (" "+t);
    t--;
    if(t<0){
        clearInterval(at);
    }
}
var z = 1;
var m = 0;
function demo(){
    if (z%2 != 0) {
        var abc = document.getElementById("header");
        abc.innerText += (" " + z);
        m++;
    }
    z++;
    if(m<=20){
        clearInterval(at);
    }
}

//SetTimeout(demo,5000);//callback function
setInterval(demo,1000);
console.log("after demo...");
//tam dung 5s
//demo();