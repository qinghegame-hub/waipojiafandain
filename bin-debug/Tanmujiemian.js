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
var Tanmujiemian = (function (_super) {
    __extends(Tanmujiemian, _super);
    function Tanmujiemian() {
        return _super.call(this) || this;
    }
    Tanmujiemian.prototype.partAdded = function (partName, instance) {
        _super.prototype.partAdded.call(this, partName, instance);
    };
    Tanmujiemian.prototype.childrenCreated = function () {
        _super.prototype.childrenCreated.call(this);
    };
    return Tanmujiemian;
}(eui.Component));
__reflect(Tanmujiemian.prototype, "Tanmujiemian", ["eui.UIComponent", "egret.DisplayObject"]);
//# sourceMappingURL=Tanmujiemian.js.map