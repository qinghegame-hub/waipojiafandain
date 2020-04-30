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
var Dianpuzhaopinui = (function (_super) {
    __extends(Dianpuzhaopinui, _super);
    function Dianpuzhaopinui() {
        return _super.call(this) || this;
    }
    Dianpuzhaopinui.prototype.partAdded = function (partName, instance) {
        _super.prototype.partAdded.call(this, partName, instance);
    };
    Dianpuzhaopinui.prototype.childrenCreated = function () {
        _super.prototype.childrenCreated.call(this);
    };
    return Dianpuzhaopinui;
}(eui.Component));
__reflect(Dianpuzhaopinui.prototype, "Dianpuzhaopinui", ["eui.UIComponent", "egret.DisplayObject"]);
//# sourceMappingURL=Dianpuzhaopinui.js.map