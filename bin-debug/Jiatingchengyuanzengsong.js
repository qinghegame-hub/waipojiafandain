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
var Jiatingchengyuanzengsong = (function (_super) {
    __extends(Jiatingchengyuanzengsong, _super);
    function Jiatingchengyuanzengsong() {
        return _super.call(this) || this;
    }
    Jiatingchengyuanzengsong.prototype.partAdded = function (partName, instance) {
        _super.prototype.partAdded.call(this, partName, instance);
    };
    Jiatingchengyuanzengsong.prototype.childrenCreated = function () {
        _super.prototype.childrenCreated.call(this);
        //		this.guanbianniujiaohu();
    };
    Jiatingchengyuanzengsong.prototype.guanbianniujiaohu = function () {
        var _this = this;
        this.guanbianniu.addEventListener(egret.TouchEvent.TOUCH_TAP, function () {
            _this.parent.removeChild(_this);
        }, this);
    };
    return Jiatingchengyuanzengsong;
}(eui.Component));
__reflect(Jiatingchengyuanzengsong.prototype, "Jiatingchengyuanzengsong", ["eui.UIComponent", "egret.DisplayObject"]);
//# sourceMappingURL=Jiatingchengyuanzengsong.js.map