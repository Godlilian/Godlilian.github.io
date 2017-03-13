// window.onload=function(){
// 	//右边楼层跳转 
//   var shangping=$(".wcgd content");
//   var leftbtns=$(".left-xia0");
//   var hand=$(".top")[0];
//   var leftlove=$(".left-xia1")[0];
//   var love=$(".cnxh")[0];
//   var lefttop=$(".left-xia2")[0];
//   for (var i = 0; i < leftbtns.length; i++) {
//   	leftbtns[i].index=i;
//   	leftbtns[i].onclick=function(){
//   		var ot=shangping[this.index].offsetTop;
//   		animate(scrollobj,{scrollTop:ot})
//   	}
//   }
//   leftlove.onclick=function(){
//   	var ob=love.offsetTop;
//   	animate(scrollobj,{scrollTop:ob})
//   }
//    lefttop.onclick=function(){
//   	var oc=hand.offsetTop;
//   	animate(scrollobj,{scrollTop:oc})
//   }
//   var lh=love.offsetTop;
  
//   var ot=[]
//   var colors=["rgb(247,169,69)","rgb(25,200,169)","rgb(241,84,83)","rgb(100,195,51)","rgb(10,166,232)","rgb(234,95,141)"]
//     for (var i = 0; i < shangping.length; i++) {
//        ot.push(shangping[i].offsetTop)
//     }
//      function tz(){
//     for (var j = 0; j < shangping.length; j++) {
//       leftbtns[j].style.backgroundColor=""
//       if (scrollobj.scrollTop>ot[j]-200&&scrollobj.scrollTop<lh-500) {

//          for (var i = 0; i < leftbtns.length; i++) {
//            leftbtns[i].style.backgroundColor="";
//          }
//          leftbtns[j].style.backgroundColor=colors[j]
//       }
//     }
//     }
//     addEvent(window,"scroll",tz)
//     function tz2(){

//         if (scrollobj.scrollTop>lh-500) {
//             leftlove.style.opacity="0.9"

//         }
//         if (scrollobj.scrollTop<lh-500) {leftlove.style.opacity=""}
//   }
//   addEvent(window,"scroll",tz2)
  
//   var items=$(".right-item");
//   var names=$(".right-name");
//   var t;
//   for (var i = 0; i < items.length; i++) {
//     items[i].index=i;
//     hover(items[i],function(){
//       var that=this;
//       clearTimeout(t);
//       t=setTimeout(function(){
//       names[that.index].style.display="block";
//       animate(names[that.index],{left:-90,opacity:1},300)
//   },300)
//     },function(){
//       clearTimeout(t)
//       animate(names[this.index],{left:-120,opacity:0.6},300,function(){
//         this.style.display="none";
//       })
//     })
// }

// }

