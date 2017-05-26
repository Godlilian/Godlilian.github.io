window.onload=function () {
    var navdj=document.querySelector(".navdj");
    var nav=document.querySelector(".nav");
    var container=document.querySelector(".container");
    var menb=document.querySelector(".menb");
    navdj.addEventListener("touchend",function () {
        nav.style.left="0";
        nav.style.transition="all 1s";
        menb.style.display="block";
    });
    menb.addEventListener("touchend",function () {
        nav.style.left="-6.35rem";
        nav.style.transition="all 0.5s";
        menb.style.display="none";
    });
};