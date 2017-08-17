window.onload=function(){
    var hb = document.querySelector(".hb");
    var hbxl = document.querySelector(".hb ul");
    var flag = true;
    hb.onclick=function(){
    	if(flag){
    	    hbxl.style.display="block";
    	    flag = false;
    	}else{
    	    hbxl.style.display="none";
    	    flag = true;
    	}
    }
    
}
