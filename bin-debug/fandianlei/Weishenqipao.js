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
var Weishenqipao = (function (_super) {
    __extends(Weishenqipao, _super);
    function Weishenqipao() {
        return _super.call(this) || this;
    }
    Weishenqipao.weishengbiangeng = function (num1) {
        var weishengzu = new Weishengtishi();
        Gameguanli.Kongzhitai().zhujiemian.addChild(weishengzu);
        var zongx = Gameguanli.Kongzhitai().zhujiemiandingbu.zhuangatizu.x;
        var zongy = Gameguanli.Kongzhitai().zhujiemiandingbu.zhuangatizu.y - Gameguanli.Kongzhitai().zhujiemiandingbu.img_zhuangtaixianshibg.height - weishengzu.height / 2;
        weishengzu.x = zongx;
        weishengzu.y = zongy;
        weishengzu.wenzineirong0.text = num1;
        egret.Tween.get(weishengzu).wait(1000).to({ x: zongx, y: zongy - 50 }, 2000).call(function () {
            Gameguanli.Kongzhitai().zhujiemian.removeChild(weishengzu);
        });
    };
    return Weishenqipao;
}(egret.DisplayObjectContainer));
__reflect(Weishenqipao.prototype, "Weishenqipao");
//# sourceMappingURL=Weishenqipao.js.map