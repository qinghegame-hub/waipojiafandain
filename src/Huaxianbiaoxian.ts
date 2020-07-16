class Huaxianbiaoxian {
	public constructor() {
	}

    private lineList:Array<Line> = [];                   //线段数组
    private touchArea:egret.DisplayObjectContainer;      //划线触摸响应区域 
    private startX:number;                               //划线触摸起点
    private startY:number;
    private color:number = 0xffffff;                     //线段颜色
    private thickNess:number = 10;                       //线段粗细
    private alpha:number = 1;                            //线段alpha
    private CapsStyle:string  = egret.CapsStyle.SQUARE;  //线段端点样式
    private JointStyle:string = egret.JointStyle.ROUND;  //链接点样式
 
 
    public setTouchArea(touchArea:egret.DisplayObjectContainer){
        this.touchArea = touchArea;
    }
 
    public enable(){
        this.touchArea.addEventListener(egret.TouchEvent.TOUCH_BEGIN, this.onTouchBegin, this);
        this.touchArea.addEventListener(egret.Event.ENTER_FRAME, this.onEnterFrame, this);
    }
 
    public disable(){
        this.touchArea.removeEventListener(egret.TouchEvent.TOUCH_BEGIN, this.onTouchBegin, this);
        this.touchArea.removeEventListener(egret.TouchEvent.TOUCH_MOVE, this.onTouchMove, this);
        this.touchArea.removeEventListener(egret.TouchEvent.TOUCH_END, this.onTouchEnd, this);
        this.touchArea.removeEventListener(egret.Event.ENTER_FRAME, this.onEnterFrame, this);
 
    }
 
    private onTouchBegin(e:egret.TouchEvent){
        this.startX = e.stageX;
        this.startY = e.stageY;
        this.touchArea.removeEventListener(egret.TouchEvent.TOUCH_BEGIN, this.onTouchBegin, this);
        this.touchArea.addEventListener(egret.TouchEvent.TOUCH_MOVE, this.onTouchMove, this);
        this.touchArea.addEventListener(egret.TouchEvent.TOUCH_END, this.onTouchEnd, this);
    }
 
    private onTouchMove(e:egret.TouchEvent){
        let line:Line = new Line();
        line.init(this.startX, this.startY, e.stageX, e.stageY);
        this.lineList.push(line);
        this.touchArea.addChild(line);
        this.startX = e.stageX;
        this.startY = e.stageY;
    }
 
    private onTouchEnd(){
        this.touchArea.addEventListener(egret.TouchEvent.TOUCH_BEGIN, this.onTouchBegin, this);
        this.touchArea.removeEventListener(egret.TouchEvent.TOUCH_MOVE, this.onTouchMove, this);
        this.touchArea.removeEventListener(egret.TouchEvent.TOUCH_END, this.onTouchEnd, this);
    }
 
 
    //线段由起点到终点位置，样式是两头细，中间粗，所以分成2段来绘制。
    //第一段从起点到中间，由细变粗
    //第二段从终点到中间，由细变粗
    private onEnterFrame(){
        let len = this.lineList.length;
        let line:Line;
        let midIndex:number = len*3/5;        //线段中间最粗的位置
        let rate = this.thickNess/midIndex;   //线段的粗细变化值
         
        //绘制第一段，起点到中间，由细变粗
        for(let i=0;i<midIndex;i++){
            let line:Line = this.lineList[i];
            line.graphics.clear();
            line.graphics.lineStyle(rate*i,this.color,this.alpha,true,null,this.CapsStyle,this.JointStyle);
            line.graphics.moveTo(line.startX,line.startY);
            line.graphics.lineTo(line.endX, line.endY);
        }
 
        //绘制第二段，终点到中间，由细变粗
        rate = this.thickNess/(len-midIndex);
        let j = 0;
        for(let i=len-1;i>=midIndex;i--){
            j++;
            let line:Line = this.lineList[i];
            line.graphics.clear();
            line.graphics.lineStyle(rate*j,this.color,this.alpha,true,null,this.CapsStyle,this.JointStyle);
            line.graphics.moveTo(line.startX,line.startY);
            line.graphics.lineTo(line.endX, line.endY);
        }
        //删除生命周期结束的线。当线段数量<10时，只删除2个；当线段数量>=10时，删除十分之一的线段
        if(len < 10){
            for(let i=0;i<2;i++){
                let line:Line = this.lineList.shift();
                line && line.removeSelf();
            }
        }else{
            len = len/10;
            for(let i=0;i<len;i++){
                let line:Line = this.lineList.shift();
                line.removeSelf();
            }
        }
         
         
 
    }
 
    public destroy(){
        //删除监听
        if(this.touchArea){
            this.touchArea.removeEventListener(egret.TouchEvent.TOUCH_BEGIN, this.onTouchBegin, this);
            this.touchArea.removeEventListener(egret.TouchEvent.TOUCH_MOVE, this.onTouchMove, this);
            this.touchArea.removeEventListener(egret.TouchEvent.TOUCH_END, this.onTouchEnd, this);
            this.touchArea.removeEventListener(egret.Event.ENTER_FRAME, this.onEnterFrame, this);
        }
        //删除线段
        let len = this.lineList.length;
        let line:Line;
        for(let i=0;i<len;i++){
            line = this.lineList[i];
            line.removeSelf();
        }
        this.lineList.length = 0;
        //删除引用
        this.touchArea = null;
    }
}
 
class Line extends egret.Sprite{
    public startX:number;
    public startY:number;
    public endX:number;
    public endY:number;
 
    public constructor(){
        super();
    }
 
    public init(startX:number, startY:number,endX:number,endY:number){
        this.startX = startX;
        this.startY = startY;
        this.endX = endX;
        this.endY = endY;
    }
 
    public removeSelf(){
        this.parent && this.parent.removeChild(this);
    }


	
}