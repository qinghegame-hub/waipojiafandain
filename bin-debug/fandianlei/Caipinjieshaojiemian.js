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
var Caipinjieshaojiemian = (function (_super) {
    __extends(Caipinjieshaojiemian, _super);
    function Caipinjieshaojiemian() {
        return _super.call(this) || this;
    }
    Caipinjieshaojiemian.prototype.partAdded = function (partName, instance) {
        _super.prototype.partAdded.call(this, partName, instance);
    };
    Caipinjieshaojiemian.prototype.childrenCreated = function () {
        _super.prototype.childrenCreated.call(this);
    };
    return Caipinjieshaojiemian;
}(eui.Component));
__reflect(Caipinjieshaojiemian.prototype, "Caipinjieshaojiemian", ["eui.UIComponent", "egret.DisplayObject"]);
//# sourceMappingURL=Caipinjieshaojiemian.js.map