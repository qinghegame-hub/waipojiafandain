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
var Weishengtishi = (function (_super) {
    __extends(Weishengtishi, _super);
    function Weishengtishi() {
        return _super.call(this) || this;
    }
    Weishengtishi.prototype.partAdded = function (partName, instance) {
        _super.prototype.partAdded.call(this, partName, instance);
    };
    Weishengtishi.prototype.childrenCreated = function () {
        _super.prototype.childrenCreated.call(this);
    };
    return Weishengtishi;
}(eui.Component));
__reflect(Weishengtishi.prototype, "Weishengtishi", ["eui.UIComponent", "egret.DisplayObject"]);
//# sourceMappingURL=Weishengtishi.js.map