var obj = {
    name: 'Nguyễn Hoàng Hiệp',
    age: 18,
    mark: 10,
    girlFriends: ['Đào Thị Khánh Lyy','Đào Thị Khánh Lyyy','Đào Thị Khánh Lyyyy'],
    eat: function (){
        console.log(this.name+" đang ăn...");
    }
};
console.log(obj.name);
obj.name = 'Đào Thị Khánh Ly';
console.log(obj.name);
for(var i=0;i<obj.girlFriends.length;i++){
    console.log(obj.girlFriends[i]);
}
obj.eat();

var f=25;
function demo (){
    var x = document.getElementById("abc");
    //x.innerText = "Xin chào tất cả sinh viên lớp T2207A";
    //x.innerHTML += '<i>Hello world!</i>';
    //x.style.color = "red";
    //x.style.fontSize = f+'px';
    x.style.transform = 'rotate('+f+'deg)';
    f+=1;
}
function quayTron(){
    setInterval(demo,20);
}
