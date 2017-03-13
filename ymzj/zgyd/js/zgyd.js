window.onload=function () {

    var lis=document.querySelector(".topinnerright2bottom");
    var uls=document.querySelector("#topinnerwz-2");
    uls.onmouseover=function(){
        lis.style.display="block";
    };
    uls.onmouseout=function(){
        lis.style.display="none";
    };
    
    var top1=document.querySelector(".topinnerright-1zt");
    var top2=document.querySelector(".topinnerright1bottom");
    top1.onmouseover=function(){
        top2.style.display="block";
    };
    top.onmouseout=function(){
        top2.style.display="none";
    };

    

    var lis=document.querySelectorAll("#nav>li");
        lis=Array.from(lis).slice(1);
    var uls=document.querySelectorAll("#nav ul");
    var heightarr=Array.from(uls).map(function(ele){
    var uls=ele.querySelectorAll("#nav li");
    return uls.length*5+5+"px";
   })
    lis.forEach(function(ele,i){
    ele.onmouseover=function(){
        uls[i].style.height=heightarr[i];
        uls.style.height="40px";
    };
    ele.onmouseout=function(){
        uls[i].style.height=0;
    };
   });
    uls.forEach(function(ele,i){
    ele.onmouseover=function(){
        uls[i].style.height=heightarr[i];
        uls.style.height="40px";
    };
    ele.onmouseout=function(){
        uls[i].style.height=0;
    };
   });
// var lis=document.querySelectorAll(".bannercenter1>img");
//                 var now=0;
//                 var num=0;
//                 var z=1;
//                 var t=setInterval(move,3000);
//                 function move() {
//                     num=now;
//                     num++;
//                     if (num==lis.length){
//                         num=0;
//                     }
//                     lis[num].style.left="740px";
//                     lis[num].style.zIndex=z++;
//                     btns[num].style.backgroundColor="red";
//                     btns[now].style.backgroundColor="#fff";
//                     animate(lis[num],{left:0},1000);
//                     animate(lis[now],{left:-740},1000);
//                     now=num;
//                 }
//             var btns=document.querySelectorAll(".cicrcle");
//             var n=1;
//             btns.forEach(function(v,i){
//                 v.onclick=function () {
//                     if(i>now){
//                         n=1;
//                     }else if(i<now){
//                         n=-1;
//                     }
//                     lis[i].style.left=n*740+"px";
//                     lis[i].style.zIndex=z++;
//                     btns[i].style.backgroundColor="red";
//                     btns[now].style.backgroundColor="#fff";
//                     animate(lis[i],{left:0},1000);
//                     animate(lis[now],{left:-n*740},1000);
//                     now=i;
//                 }
//             });
//             var banner=document.querySelector(".bannercenter1");
//             banner.onmouseover=function () {
//                 clearInterval(t);
//             };
//             banner.onmouseout=function () {
//                 t=setInterval(move,2000);
//             };





var gundongtiao=document.querySelector(".rotating-zt")
var you=document.querySelector(".rotatingright")
var zuo=document.querySelector(".rotatingleft")
var guanggaotiao=document.querySelector(".rotating")
var num=0;
var t1=setInterval(move,3000)
    function move() {
        flag=false;
        if(num==8){
            num=0;
        }
        num++;
        if(num==-1){
             num=8;
        }
    gundongtiao.style.transition="all 1s";
    gundongtiao.style.marginLeft=-295*num+"px";
  }
guanggaotiao.onmouseover=function(){
    clearInterval(t1)
}
guanggaotiao.onmouseout=function(){
    t1=setInterval(move,3000)
}
gundongtiao.addEventListener("transitionend",function(){
    flag=true
    if(num==8){
      gundongtiao.style.transition="none";
      gundongtiao.style.marginLeft="0";
      num=0;
    }
})
var flag=true;
you.onclick=function () {
    if(flag){
       move()
    }
}
zuo.onclick=function () {
    num-=2;
    move()
}

   



    var diandian=document.querySelectorAll(".cicrcle");
    var tupiantiao=document.querySelector(".bannercenter1");
    var abc=1;
    var numtu1=0;
    var t2=setInterval(bannercentermove,3000);
    function bannercentermove(){
        flag=false;
        tupiantiao.style.transition="all 1s";
        abc++; 
        if(abc==11){
            abc=1;
        }
         if(abc==-1){
             abc=10;
         }
        numtu1++;
        if(numtu1==9){
            numtu1=0;
        }
        for(let j=0;j<diandian.length;j++){
            diandian[j].style.backgroundColor="#cfcdcd";
        }
            diandian[numtu1].style.backgroundColor="#ec0077";
            tupiantiao.style.marginLeft=-740*abc+"px";
    }
    tupiantiao.addEventListener("transitionend",function(){
                  flag=true;
                if(abc==10){
                    tupiantiao.style.transition="none";
                    tupiantiao.style.marginLeft=-740+"px";
                    abc=1
                  }
        if(abc==0){
            tupiantiao.style.transition="none";
            tupiantiao.style.marginLeft=-8140+"px";
            abc=9
          }
    },3000)
    var bannerzuo=document.querySelector(".bannercenterleftbutton")
    var banneryou=document.querySelector(".bannercenterrightbutton")
    var allbanner=document.querySelector(".bannercenter")
    allbanner.onmouseover=function () {
        clearInterval(t2)
    }
    allbanner.onmouseout=function () {
        t2=setInterval(bannercentermove,3000)
    }
    banneryou.onclick=function(){
      if(flag=true){
        bannercentermove()
      }
    }
    bannerzuo.onclick=function(){
      if(flag=true){
         abc-=2;
        bannercentermove();
      }
    }
    for(let i=0;i<diandian.length;i++){
      diandian[i].onclick=function (){
        for(let j=0;j<diandian.length;j++){
        diandian[j].style.backgroundColor="#cfcdcd";
        }
        diandian[j].style.backgroundColor="#ec0077";
        }
    }

var btns=document.querySelectorAll(".circle");
            var n=1;
            btns.forEach(function(v,i){
                v.onclick=function () {
                    if(i>now){
                        n=1;
                    }else if(i<now){
                        n=-1;
                    }
                    tupiantiao[i].style.left=n*740+"px";
                    tupiantiao[i].style.zIndex=z++;
                    btns[i].style.backgroundColor="red";
                    btns[now].style.backgroundColor="#fff";
                    animate(tupiantiao[i],{left:0},1000);
                    animate(tupiantiao[now],{left:-n*740},1000);
                    now=i;
                }
            });


    setInterval(function move(){
    var text=document.querySelectorAll(".noticeleft3");
    var time=document.querySelectorAll(".noticeleft4");
    var consum=
    [{text:"低价位福克斯放福克斯放",time:"2015-12-11"},
    {text:"法律界思考福克斯放",
    time:"2016-05-04"},{text:"菲尼克快节奏福克斯放",
    time:"2016-08-02"},{text:"看见反抗给你看个福克斯放",
    time:"2015-03-01"}]
    var num1=0;
    var num2=1;
    setInterval(function move(){
        num1++;
        if (num1==consum.length){
            num1=0;
        }
        text[0].innerHTML=consum[num1].text;
        time[0].innerHTML=consum[num1].time;
           num2++;
        if (num2==consum.length){
            num2=0;
        }
          text[1].innerHTML=consum[num2].text;
          time[1].innerHTML=consum[num2].time;
    },2000);
        con.style.transition="all 1s";
        num++;
        con.style.marginLeft=-295*num+"px"
    },2000);



}
