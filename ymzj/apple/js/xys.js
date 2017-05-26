window.onload=function () {
    //搜索栏
    var hidden=document.querySelector("#hidden");
    var gbbtn=document.querySelector("#gbbtn");
    var searchbtn=document.querySelector("#searchbtn");
    var searchb=document.querySelector(".searchb");
    var searchbt3=document.querySelector(".searchbt3");
    searchbtn.onclick=function () {
        searchb.style.display="block";
        searchb.style.width="690px";
        searchb.style.height="450px";
    };
    searchbt3.onclick=function () {
        searchb.style.width="0";
        searchb.style.height="0";
        searchb.style.display="";
    };
    //banner
    var cicrcle=document.querySelectorAll(".xzbtn");
    var banner1=document.querySelectorAll("#banner");
    var bannertop=document.querySelector(".bannertop");
    for(let i=0;i<cicrcle.length;i++){
        cicrcle[i].onclick=function(){
            for(let j=0;j<banner1.length;j++){
                cicrcle[j].style.background="#fff";
                banner1[j].style.width="0";
            }
            cicrcle[i].style.background="#6c6c6c";
            banner1[i].style.width="100%";
            num=i;
        }
    }
    var t1=setInterval(move,3000);
    var num=0;
    function move(){
        num++;
        if (num==-1) {
            num=banner1.length-1;
        }
        if (num==banner1.length) {
            num=0;
        }
        for(var j=0;j<banner1.length;j++){
            cicrcle[j].style.background="#fff";
            banner1[j].style.width="0";
        }
        cicrcle[num].style.background="#6c6c6c";
        banner1[num].style.width="100%";
    }
    var banner2=document.querySelector(".bannercon");
    banner2.onmouseover=function(){
        clearInterval(t1);
    };
    banner2.onmouseout=function(){
        t1=setInterval(move,3000);
    };
    var jt2=document.querySelector("jt2");
    var jt1=document.querySelector("jt1");
    jt2.onclick=function(){
        move();
    };
    jt1.onclick=function(){
        num-=2;
        move();
    };
    
};