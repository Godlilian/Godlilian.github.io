window.onload=function () {
    //顶部地址弹出栏
    var topinnerlt=document.querySelector(".topinnerlt");
    var topinnerlb=document.querySelector(".topinnerlb");
    topinnerlt.onmouseover=function () {
        topinnerlt.style.background="#fff";
        topinnerlt.style.borderLeft="1px solid #ccc";
        topinnerlt.style.borderRight="1px solid #ccc";
        topinnerlb.style.display="block";
    };
    topinnerlt.onmouseout=function () {
        topinnerlb.style.display="none";
        topinnerlt.style.background="";
        topinnerlt.style.borderLeft="0 solid #ccc";
        topinnerlt.style.borderRight="0 solid #ccc";
    };
    topinnerlb.onmouseover=function () {
        topinnerlt.style.background="#fff";
        topinnerlt.style.borderLeft="1px solid #ccc";
        topinnerlt.style.borderRight="1px solid #ccc";
        topinnerlb.style.display="block";
    };
    topinnerlb.onmouseout=function () {
        topinnerlb.style.display="none";
        topinnerlt.style.background="";
        topinnerlt.style.borderLeft="0 solid #ccc";
        topinnerlt.style.borderRight="0 solid #ccc";
    };
    //我的京东弹出栏
    var topinner4wz=document.querySelector(".topinner4wz");
    var topinner4b=document.querySelector(".topinner4b");
    topinner4wz.onmouseover=function () {
        topinner4wz.style.background="#fff";
        topinner4wz.style.height="30px";
        topinner4wz.style.lineHeight="30px";
        topinner4wz.style.marginTop="-10px";
        topinner4wz.style.borderLeft="1px solid #ccc";
        topinner4wz.style.borderRight="1px solid #ccc";
        topinner4b.style.display="block";
    };
    topinner4wz.onmouseout=function () {
        topinner4b.style.display="none";
        topinner4wz.style.background="";
        topinner4wz.style.borderLeft="0 solid #ccc";
        topinner4wz.style.borderRight="0 solid #ccc";
    };
    topinner4b.onmouseover=function () {
        topinner4wz.style.background="#fff";
        topinner4wz.style.height="30px";
        topinner4wz.style.lineHeight="30px";
        topinner4wz.style.marginTop="-10px";
        topinner4wz.style.borderLeft="1px solid #ccc";
        topinner4wz.style.borderRight="1px solid #ccc";
        topinner4b.style.display="block";
    };
    topinner4b.onmouseout=function () {
        topinner4b.style.display="none";
        topinner4wz.style.background="";
        topinner4wz.style.borderLeft="0 solid #ccc";
        topinner4wz.style.borderRight="0 solid #ccc";
    };
    //导航右侧
    var nav1=document.querySelector(".li1");
    var nav2=document.querySelector(".li2");
    var nav3=document.querySelector(".li3");
    var nav4=document.querySelector(".li4");
    var nav5=document.querySelector(".li5");
    var nav6=document.querySelector(".li6");
    var nav7=document.querySelector(".li7");
    var nav8=document.querySelector(".li8");
    var nav9=document.querySelector(".li9");
    var nav10=document.querySelector(".li10");
    var nav11=document.querySelector(".li11");
    var nav12=document.querySelector(".li12");
    var nav13=document.querySelector(".li13");
    var nav14=document.querySelector(".li14");
    var nav15=document.querySelector(".li15");
    var navl=document.querySelector(".nav1l");
    nav1.onmouseover=function () {
        navl.style.display="block";
    };
    nav1.onmouseout=function () {
        navl.style.display="none";
    };
    nav2.onmouseover=function () {
        navl.style.display="block";
    };
    nav2.onmouseout=function () {
        navl.style.display="none";
    };
    nav3.onmouseover=function () {
        navl.style.display="block";
    };
    nav3.onmouseout=function () {
        navl.style.display="none";
    };
    nav4.onmouseover=function () {
        navl.style.display="block";
    };
    nav4.onmouseout=function () {
        navl.style.display="none";
    };
    nav5.onmouseover=function () {
        navl.style.display="block";
    };
    nav5.onmouseout=function () {
        navl.style.display="none";
    };
    nav6.onmouseover=function () {
        navl.style.display="block";
    };
    nav6.onmouseout=function () {
        navl.style.display="none";
    };
    nav7.onmouseover=function () {
        navl.style.display="block";
    };
    nav7.onmouseout=function () {
        navl.style.display="none";
    };
    nav8.onmouseover=function () {
        navl.style.display="block";
    };
    nav8.onmouseout=function () {
        navl.style.display="none";
    };
    nav9.onmouseover=function () {
        navl.style.display="block";
    };
    nav9.onmouseout=function () {
        navl.style.display="none";
    };
    nav10.onmouseover=function () {
        navl.style.display="block";
    };
    nav10.onmouseout=function () {
        navl.style.display="none";
    };
    nav11.onmouseover=function () {
        navl.style.display="block";
    };
    nav11.onmouseout=function () {
        navl.style.display="none";
    };
    nav12.onmouseover=function () {
        navl.style.display="block";
    };
    nav12.onmouseout=function () {
        navl.style.display="none";
    };
    nav13.onmouseover=function () {
        navl.style.display="block";
    };
    nav13.onmouseout=function () {
        navl.style.display="none";
    };
    nav14.onmouseover=function () {
        navl.style.display="block";
    };
    nav14.onmouseout=function () {
        navl.style.display="none";
    };
    nav15.onmouseover=function () {
        navl.style.display="block";
    };
    nav15.onmouseout=function () {
        navl.style.display="none";
    };
    navl.onmouseover=function () {
        navl.style.display="block";
    };
    navl.onmouseout=function () {
        navl.style.display="none";
    };
    //购物车栏
    var searchztr=document.querySelector(".searchztr");
    var gwcxl=document.querySelector(".gwcxl");
    searchztr.onmousemove=function () {
        gwcxl.style.display="block";
        searchztr.style.borderBottom="1px solid #fff";
    };
    searchztr.onmouseout=function () {
        gwcxl.style.display="none";
        searchztr.style.borderBottom="1px solid #ccc";
    };
    //促销公告栏
    var cx=document.querySelector("#cxtcl");
    var gg=document.querySelector("#ggtcl");
    var cxtclnr=document.querySelector("#cxtclnr");
    var ggtclnr=document.querySelector("#ggtclnr");
    cx.onmousemove=function () {
        cx.style.borderBottom="2px solid #f10215";
        gg.style.borderBottom="0";
    };
    cx.onmouseout=function () {
        cxtclnr.style.display="none";
        ggtclnr.style.display="block";
    };
    gg.onmousemove=function () {
        ggtclnr.style.display="block";
        cxtclnr.style.display="none";
        gg.style.borderBottom="2px solid #f10215";
        cx.style.borderBottom="0";
    };
    gg.onmouseout=function () {
        ggtclnr.style.display="none";
        cxtclnr.style.display="block";
    };
    window.onscroll=function() {
    //   京东秒杀
    var hour=document.querySelector("#hour");
    var minute=document.querySelector("#minute");
    var second=document.querySelector("#second");
    setInterval(function () {
        var now=new Date();
        var funter=new Date();
        funter.setHours(23);
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
    //  顶部购物栏
    }
};