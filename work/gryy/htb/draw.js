function Draw(cobj,setting) {
    //setting   样式  画笔颜色  画笔粗细  多边形的边数   类型
    this.style=setting.st;
    this.color=setting.co;
    this.width=setting.wi;
    this.cobj=cobj;
}
Draw.prototype={
    init:function () {
        this.cobj.strokeStyle=this.color;
        this.cobj.fillStyle=this.color;
    },
    //接收4个坐标值
    line:function(sx,sy,ox,oy) {
    this.init();
    var cobj=this.cobj;
    cobj.beginPath();
    cobj.moveTo(sx,sy);
    cobj.lineTo(ox,oy);
    cobj[this.style]();
    cobj.lineWidth=[this.width];
    },
    rect:function (sx,sy,ox,oy) {
        this.init();
        var cobj=this.cobj;
        cobj.beginPath();
        cobj.rect(sx,sy,ox-sx,oy-sy);
        cobj[this.style]();
        cobj.lineWidth=[this.width];
    },
    circle:function (sx,sy,ox,oy) {
        this.init();
        var cobj=this.cobj;
        // 1 圆行
        // cobj.beginPath();
        // cobj.arc(sx+(ox-sx)/2,sy+(oy-sy)/2,Math.abs((ox-sx)>(oy-sy)?(ox-sx):(oy-sy))/2,0,Math.PI/2);
        // cobj[this.style]();
        //2同心源
        var r=Math.sqrt(Math.pow(ox-sx,2)+Math.pow(oy-sy,2));
        cobj.beginPath();
        cobj.arc(sx,sy,r,0,Math.PI*2);
        cobj[this.style]();
        cobj.lineWidth=[this.width];
    },
    pen:function (sx,sy,ox,oy) {
        this.init();
        var cobj=this.cobj;
        cobj.lineTo(ox,oy);
        cobj.stroke();
        cobj[this.style]();
        cobj.lineWidth=[this.width];
    },
    poly:function (sx,sy,ox,oy,s) {
        this.init();
        var cobj=this.cobj;
        cobj.save();
        cobj.translate(sx,sy);
        cobj.rotate(Math.PI/2);
        var r=Math.sqrt(Math.pow(ox-sx,2)+Math.pow(oy-sy,2));
        var x=Math.cos(Math.PI/s)*r;
        var y=Math.sin(Math.PI/s)*r;
        cobj.beginPath();
        cobj.moveTo(x,y);
        for(var i=0;i<s;i++){
            cobj.save();
            cobj.rotate(-2*Math.PI/s*i);
            cobj.lineTo(x,-y);
            cobj.restore();
        }
        cobj[this.style]();
        cobj.restore();
        cobj.lineWidth=[this.width];
    },
    eraser:function (sx,sy,ox,oy) {
        this.init();
        var cobj=this.cobj;
        cobj.clearRect(ox,oy,15,15);
    }
};