window.onscroll=function() {
    //   京东秒杀
    var hour=document.querySelector("#hour");
    var minute=document.querySelector("#minute");
    var second=document.querySelector("#second");
    setInterval(function () {
        var now=new Date();
        var funter=new Date();
        funter.setHours(20);
        funter.setMinutes(0);
        funter.setSeconds(0);
        var cha=funter.getTime()-now.getTime();
        var hours=Math.floor(cha/(1000*60*60));
        if(hours<10){
            hour.innerHTML="0"+hours;
        }else{
            hour.innerHTML=hours;
        }
        var minutes=Math.floor(cha/(1000*60)%60);
        if(minutes<10){
            minute.innerHTML="0"+minutes;
        }else{
            minute.innerHTML=minutes;
        }
        var seconds=Math.floor(cha/(1000)%60);
        if(seconds<10){
            second.innerHTML="0"+seconds;
        }else{
            second.innerHTML=seconds;
        }
    },1000);
    //顶部弹出栏
    var tops = document.querySelector(".topxfl");
    var obj = document.body.scrollTop
    == 0 ? document.documentElement : document.body;
    if (obj.scrollTop > 100) {
        tops.style.top = "0";
    } else {
        tops.style.top = "-200px";
    }
    //右侧栏
    var box = document.querySelector("#top");
    box.onclick = function () {
        var obj = document.body.scrollTop == 0 ? document.documentElement :
            document.body;
        animate(obj, {scrollTop: 0}, 0)
    };
    var box1 = document.querySelector("#toptop");
    box1.onclick = function () {
        var obj = document.body.scrollTop == 0 ? document.documentElement :
            document.body;
        animate(obj, {scrollTop: 0}, 500)
    };

//   左侧跳转栏
    var an = document.querySelectorAll(".llt");
    var con = document.querySelectorAll(".content");
    var ccc = document.querySelector(".left");
    obj = document.body.scrollTop == 0 ? document.documentElement : document.body;
    if (obj.scrollTop > 200) {
        ccc.style.width = "34px";
        ccc.style.height = "495px";
    }
    if (obj.scrollTop < 200) {
        ccc.style.width = "0";
        ccc.style.height = "0";
    }
    for (let i = 0; i < an.length; i++) {
        an[i].onclick=function () {
            var connum = con[i].offsetTop-50;
            animate(obj, {scrollTop: connum}, 500);
            // an[i].style.background="#d70b1c";
        };
        // an[i].onmouseover=function () {
        //     var connum = con[i].offsetTop-50;
        //     animate(obj, {scrollTop: connum}, 500);
        //     an[i].style.background="#d70b1c";
        // }
        // an[i].onmouseout=function () {
        //     var connum = con[i].offsetTop-50;
        //     animate(obj, {scrollTop: connum}, 500);
        //     an[i].style.background="#918888";
        }
    // }

};