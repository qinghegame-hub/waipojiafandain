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
var Jianglijiesuanui = (function (_super) {
    __extends(Jianglijiesuanui, _super);
    function Jianglijiesuanui() {
        return _super.call(this) || this;
    }
    Jianglijiesuanui.prototype.partAdded = function (partName, instance) {
        _super.prototype.partAdded.call(this, partName, instance);
    };
    Jianglijiesuanui.prototype.childrenCreated = function () {
        _super.prototype.childrenCreated.call(this);
        this.chushihua();
    };
    Jianglijiesuanui.prototype.chushihua = function () {
        //		this.qudinganniu.addEventListener(egret.TouchEvent.TOUCH_TAP,this.guanbi,this);
    };
    Jianglijiesuanui.prototype.guanbi = function () {
        //		Gameguanli.Kongzhitai().guanbimaicai();
        //		Gameguanli.Kongzhitai().jianglijiemian("guan");
    };
    return Jianglijiesuanui;
}(eui.Component));
__reflect(Jianglijiesuanui.prototype, "Jianglijiesuanui", ["eui.UIComponent", "egret.DisplayObject"]);
//# sourceMappingURL=Jianglijiesuanui.js.map