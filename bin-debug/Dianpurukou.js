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
var Dianpurukou = (function (_super) {
    __extends(Dianpurukou, _super);
    function Dianpurukou() {
        return _super.call(this) || this;
    }
    Dianpurukou.prototype.partAdded = function (partName, instance) {
        _super.prototype.partAdded.call(this, partName, instance);
    };
    Dianpurukou.prototype.childrenCreated = function () {
        _super.prototype.childrenCreated.call(this);
    };
    return Dianpurukou;
}(eui.Component));
__reflect(Dianpurukou.prototype, "Dianpurukou", ["eui.UIComponent", "egret.DisplayObject"]);
