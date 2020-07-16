var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var __extends = this && this.__extends || function __extends(t, e) { 
 function r() { 
 this.constructor = t;
}
for (var i in e) e.hasOwnProperty(i) && (t[i] = e[i]);
r.prototype = e.prototype, t.prototype = new r();
};
var Huaxianbiaoxian = (function () {
    function Huaxianbiaoxian() {
        this.lineList = []; //线段数组
        this.color = 0xffffff; //线段颜色
        this.thickNess = 10; //线段粗细
        this.alpha = 1; //线段alpha
        this.CapsStyle = egret.CapsStyle.SQUARE; //线段端点样式
        this.JointStyle = egret.JointStyle.ROUND; //链接点样式
    }
    Huaxianbiaoxian.prototype.setTouchArea = function (touchArea) {
        this.touchArea = touchArea;
    };
    Huaxianbiaoxian.prototype.enable = function () {
        this.touchArea.addEventListener(egret.TouchEvent.TOUCH_BEGIN, this.onTouchBegin, this);
        this.touchArea.addEventListener(egret.Event.ENTER_FRAME, this.onEnterFrame, this);
    };
    Huaxianbiaoxian.prototype.disable = function () {
        this.touchArea.removeEventListener(egret.TouchEvent.TOUCH_BEGIN, this.onTouchBegin, this);
        this.touchArea.removeEventListener(egret.TouchEvent.TOUCH_MOVE, this.onTouchMove, this);
        this.touchArea.removeEventListener(egret.TouchEvent.TOUCH_END, this.onTouchEnd, this);
        this.touchArea.removeEventListener(egret.Event.ENTER_FRAME, this.onEnterFrame, this);
    };
    Huaxianbiaoxian.prototype.onTouchBegin = function (e) {
        this.startX = e.stageX;
        this.startY = e.stageY;
        this.touchArea.removeEventListener(egret.TouchEvent.TOUCH_BEGIN, this.onTouchBegin, this);
        this.touchArea.addEventListener(egret.TouchEvent.TOUCH_MOVE, this.onTouchMove, this);
        this.touchArea.addEventListener(egret.TouchEvent.TOUCH_END, this.onTouchEnd, this);
    };
    Huaxianbiaoxian.prototype.onTouchMove = function (e) {
        var line = new Line();
        line.init(this.startX, this.startY, e.stageX, e.stageY);
        this.lineList.push(line);
        this.touchArea.addChild(line);
        this.startX = e.stageX;
        this.startY = e.stageY;
    };
    Huaxianbiaoxian.prototype.onTouchEnd = function () {
        this.touchArea.addEventListener(egret.TouchEvent.TOUCH_BEGIN, this.onTouchBegin, this);
        this.touchArea.removeEventListener(egret.TouchEvent.TOUCH_MOVE, this.onTouchMove, this);
        this.touchArea.removeEventListener(egret.TouchEvent.TOUCH_END, this.onTouchEnd, this);
    };
    //线段由起点到终点位置，样式是两头细，中间粗，所以分成2段来绘制。
    //第一段从起点到中间，由细变粗
    //第二段从终点到中间，由细变粗
    Huaxianbiaoxian.prototype.onEnterFrame = function () {
        var len = this.lineList.length;
        var line;
        var midIndex = len * 3 / 5; //线段中间最粗的位置
        var rate = this.thickNess / midIndex; //线段的粗细变化值
        //绘制第一段，起点到中间，由细变粗
        for (var i = 0; i < midIndex; i++) {
            var line_1 = this.lineList[i];
            line_1.graphics.clear();
            line_1.graphics.lineStyle(rate * i, this.color, this.alpha, true, null, this.CapsStyle, this.JointStyle);
            line_1.graphics.moveTo(line_1.startX, line_1.startY);
            line_1.graphics.lineTo(line_1.endX, line_1.endY);
        }
        //绘制第二段，终点到中间，由细变粗
        rate = this.thickNess / (len - midIndex);
        var j = 0;
        for (var i = len - 1; i >= midIndex; i--) {
            j++;
            var line_2 = this.lineList[i];
            line_2.graphics.clear();
            line_2.graphics.lineStyle(rate * j, this.color, this.alpha, true, null, this.CapsStyle, this.JointStyle);
            line_2.graphics.moveTo(line_2.startX, line_2.startY);
            line_2.graphics.lineTo(line_2.endX, line_2.endY);
        }
        //删除生命周期结束的线。当线段数量<10时，只删除2个；当线段数量>=10时，删除十分之一的线段
        if (len < 10) {
            for (var i = 0; i < 2; i++) {
                var line_3 = this.lineList.shift();
                line_3 && line_3.removeSelf();
            }
        }
        else {
            len = len / 10;
            for (var i = 0; i < len; i++) {
                var line_4 = this.lineList.shift();
                line_4.removeSelf();
            }
        }
    };
    Huaxianbiaoxian.prototype.destroy = function () {
        //删除监听
        if (this.touchArea) {
            this.touchArea.removeEventListener(egret.TouchEvent.TOUCH_BEGIN, this.onTouchBegin, this);
            this.touchArea.removeEventListener(egret.TouchEvent.TOUCH_MOVE, this.onTouchMove, this);
            this.touchArea.removeEventListener(egret.TouchEvent.TOUCH_END, this.onTouchEnd, this);
            this.touchArea.removeEventListener(egret.Event.ENTER_FRAME, this.onEnterFrame, this);
        }
        //删除线段
        var len = this.lineList.length;
        var line;
        for (var i = 0; i < len; i++) {
            line = this.lineList[i];
            line.removeSelf();
        }
        this.lineList.length = 0;
        //删除引用
        this.touchArea = null;
    };
    return Huaxianbiaoxian;
}());
__reflect(Huaxianbiaoxian.prototype, "Huaxianbiaoxian");
var Line = (function (_super) {
    __extends(Line, _super);
    function Line() {
        return _super.call(this) || this;
    }
    Line.prototype.init = function (startX, startY, endX, endY) {
        this.startX = startX;
        this.startY = startY;
        this.endX = endX;
        this.endY = endY;
    };
    Line.prototype.removeSelf = function () {
        this.parent && this.parent.removeChild(this);
    };
    return Line;
}(egret.Sprite));
__reflect(Line.prototype, "Line");
