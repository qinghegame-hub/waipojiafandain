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
var Jiatingchengyuanjieshaoui = (function (_super) {
    __extends(Jiatingchengyuanjieshaoui, _super);
    function Jiatingchengyuanjieshaoui() {
        return _super.call(this) || this;
    }
    Jiatingchengyuanjieshaoui.prototype.partAdded = function (partName, instance) {
        _super.prototype.partAdded.call(this, partName, instance);
    };
    Jiatingchengyuanjieshaoui.prototype.childrenCreated = function () {
        _super.prototype.childrenCreated.call(this);
    };
    return Jiatingchengyuanjieshaoui;
}(eui.Component));
__reflect(Jiatingchengyuanjieshaoui.prototype, "Jiatingchengyuanjieshaoui", ["eui.UIComponent", "egret.DisplayObject"]);
//# sourceMappingURL=Jiatingchengyuanjieshaoui.js.map