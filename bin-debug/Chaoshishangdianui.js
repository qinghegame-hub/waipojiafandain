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
var Chaoshishangdianui = (function (_super) {
    __extends(Chaoshishangdianui, _super);
    function Chaoshishangdianui() {
        return _super.call(this) || this;
    }
    Chaoshishangdianui.prototype.partAdded = function (partName, instance) {
        _super.prototype.partAdded.call(this, partName, instance);
    };
    Chaoshishangdianui.prototype.childrenCreated = function () {
        _super.prototype.childrenCreated.call(this);
        this.guanbijiemainanniu();
    };
    Chaoshishangdianui.prototype.guanbijiemainanniu = function () {
        var _this = this;
        if (this.parent) {
            this.guanbijiemain.addEventListener(egret.TouchEvent.TOUCH_TAP, function () {
                Gamesound.Soundkongzhi().anniuyinxiao();
                _this.parent.removeChild(_this);
            }, this);
        }
    };
    return Chaoshishangdianui;
}(eui.Component));
__reflect(Chaoshishangdianui.prototype, "Chaoshishangdianui", ["eui.UIComponent", "egret.DisplayObject"]);
