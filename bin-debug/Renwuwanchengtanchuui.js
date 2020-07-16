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
var Renwuwanchengtanchuui = (function (_super) {
    __extends(Renwuwanchengtanchuui, _super);
    function Renwuwanchengtanchuui() {
        return _super.call(this) || this;
    }
    Renwuwanchengtanchuui.prototype.partAdded = function (partName, instance) {
        _super.prototype.partAdded.call(this, partName, instance);
    };
    Renwuwanchengtanchuui.prototype.childrenCreated = function () {
        _super.prototype.childrenCreated.call(this);
    };
    return Renwuwanchengtanchuui;
}(eui.Component));
__reflect(Renwuwanchengtanchuui.prototype, "Renwuwanchengtanchuui", ["eui.UIComponent", "egret.DisplayObject"]);
