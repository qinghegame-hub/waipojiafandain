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
var Caipucaiping = (function (_super) {
    __extends(Caipucaiping, _super);
    function Caipucaiping() {
        return _super.call(this) || this;
    }
    Caipucaiping.prototype.partAdded = function (partName, instance) {
        _super.prototype.partAdded.call(this, partName, instance);
    };
    Caipucaiping.prototype.childrenCreated = function () {
        _super.prototype.childrenCreated.call(this);
    };
    return Caipucaiping;
}(eui.Component));
__reflect(Caipucaiping.prototype, "Caipucaiping", ["eui.UIComponent", "egret.DisplayObject"]);
//# sourceMappingURL=Caipucaiping.js.map