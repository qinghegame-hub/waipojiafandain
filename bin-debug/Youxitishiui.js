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
var Youxitishiui = (function (_super) {
    __extends(Youxitishiui, _super);
    function Youxitishiui() {
        return _super.call(this) || this;
    }
    Youxitishiui.prototype.partAdded = function (partName, instance) {
        _super.prototype.partAdded.call(this, partName, instance);
    };
    Youxitishiui.prototype.childrenCreated = function () {
        _super.prototype.childrenCreated.call(this);
        this.chushihua();
    };
    Youxitishiui.prototype.chushihua = function () {
        var _this = this;
        this.heisezhezao.touchEnabled = true;
        this.heisezhezao.addEventListener(egret.TouchEvent.TOUCH_TAP, function () {
            _this.parent.removeChild(_this);
        }, this);
        this.guanbianniu.addEventListener(egret.TouchEvent.TOUCH_TAP, function () {
            _this.parent.removeChild(_this);
        }, this);
    };
    Youxitishiui.prototype.xianshineirong = function (neirong) {
        this.shuomingneirong.text = neirong;
    };
    return Youxitishiui;
}(eui.Component));
__reflect(Youxitishiui.prototype, "Youxitishiui", ["eui.UIComponent", "egret.DisplayObject"]);
//# sourceMappingURL=Youxitishiui.js.map