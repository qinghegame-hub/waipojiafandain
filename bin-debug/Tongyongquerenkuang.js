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
var Tongyongquerenkuang = (function (_super) {
    __extends(Tongyongquerenkuang, _super);
    function Tongyongquerenkuang() {
        return _super.call(this) || this;
    }
    Tongyongquerenkuang.prototype.partAdded = function (partName, instance) {
        _super.prototype.partAdded.call(this, partName, instance);
    };
    Tongyongquerenkuang.prototype.childrenCreated = function () {
        _super.prototype.childrenCreated.call(this);
        this.chushihua();
    };
    Tongyongquerenkuang.prototype.chushihua = function () {
        this.heisediban.addEventListener(egret.TouchEvent.TOUCH_TAP, this.guanbijiemian, this);
    };
    Tongyongquerenkuang.prototype.guanbijiemian = function () {
        this.parent.removeChild(this);
    };
    return Tongyongquerenkuang;
}(eui.Component));
__reflect(Tongyongquerenkuang.prototype, "Tongyongquerenkuang", ["eui.UIComponent", "egret.DisplayObject"]);
//# sourceMappingURL=Tongyongquerenkuang.js.map