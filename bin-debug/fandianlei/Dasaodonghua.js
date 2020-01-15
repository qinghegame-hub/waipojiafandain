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
var Dasaodonghua = (function (_super) {
    __extends(Dasaodonghua, _super);
    function Dasaodonghua(num1, num2) {
        return _super.call(this) || this;
    }
    Dasaodonghua.prototype.partAdded = function (partName, instance) {
        _super.prototype.partAdded.call(this, partName, instance);
    };
    Dasaodonghua.prototype.childrenCreated = function () {
        _super.prototype.childrenCreated.call(this);
    };
    return Dasaodonghua;
}(eui.Component));
__reflect(Dasaodonghua.prototype, "Dasaodonghua", ["eui.UIComponent", "egret.DisplayObject"]);
//# sourceMappingURL=Dasaodonghua.js.map