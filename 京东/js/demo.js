/**
 * Created by John on 2017/3/15.
 */
//banner图
var circle=document.getElementsByClassName("circle");
var banner1=document.getElementsByClassName("banner1");
for(let i=0;i<circle.length;i++){
    circle[i].onmouseover=function () {
        for(let j=0;j<banner1.length;j++){
            circle[j].style.background="#fff";
            banner1[j].style.zIndex="1";
            banner1[j].style.opacity="0";
        }
        circle[i].style.background="red";
        banner1[i].style.zIndex="2";
        banner1[i].style.opacity="1"
        num=i;
    }
}
var t1=setInterval(move,3000);
var num=0;
function move() {
    num++;
    if(num==-1){
        num=banner1.length-1;
    }
    if(num==banner1.length){
        num=0;
    }
    for(var j=0;j<banner1.length;j++){
        circle[j].style.background="#fff";
        banner1[j].style.opacity="0";
        banner1[j].style.zIndex="0";
    }
    circle[num].style.background="red";
    banner1[num].style.opacity="1";
    banner1[num].style.zIndex="1";
}
var banner=document.getElementsByName("bannerzt")[0];
banner.onmouseover=function () {
    clearInterval(t1);
};
banner.onmouseout=function () {
    t1=setInterval(move,3000);
};
var jt1=document.getElementsByClassName("jt1")[0];
var jt2=document.getElementsByClassName("jt2")[0];
jt2.onclick=function () {
    move();
};
jt1.onclick=function () {
    num-=2;
    move();
};

