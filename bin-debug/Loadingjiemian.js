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
var Loadingjiemian = (function (_super) {
    __extends(Loadingjiemian, _super);
    function Loadingjiemian() {
        var _this = _super.call(this) || this;
        _this.addEventListener(egret.Event.ADDED_TO_STAGE, _this.createView, _this);
        return _this;
    }
    Loadingjiemian.prototype.partAdded = function (partName, instance) {
        _super.prototype.partAdded.call(this, partName, instance);
    };
    Loadingjiemian.prototype.childrenCreated = function () {
        _super.prototype.childrenCreated.call(this);
    };
    Loadingjiemian.prototype.createView = function () {
        this.but_kaishiyouxi.alpha = 0;
        this.chushijinduchang = this.img_jindutiaoshang.width;
        console.log("chushi" + this.chushijinduchang);
    };
    return Loadingjiemian;
}(eui.Component));
__reflect(Loadingjiemian.prototype, "Loadingjiemian", ["eui.UIComponent", "egret.DisplayObject"]);
