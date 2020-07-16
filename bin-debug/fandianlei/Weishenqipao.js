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
        if (Gameguanli.Kongzhitai().dingbuui.parent) {
            var weishengzu_1 = new Weishengtishi();
            Gameguanli.Kongzhitai().dingbuui.addChild(weishengzu_1);
            var zongx = Gameguanli.Kongzhitai().zhujiemiandingbu.zhuangatizu.x;
            var zongy = Gameguanli.Kongzhitai().zhujiemiandingbu.zhuangatizu.y - Gameguanli.Kongzhitai().zhujiemiandingbu.img_zhuangtaixianshibg.height - weishengzu_1.height / 2;
            weishengzu_1.x = zongx;
            weishengzu_1.y = zongy;
            weishengzu_1.wenzineirong0.text = num1;
            egret.Tween.get(weishengzu_1).wait(1000).to({ x: zongx, y: zongy - 50 }, 2000).call(function () {
                if (Gameguanli.Kongzhitai().dingbuui.parent) {
                    Gameguanli.Kongzhitai().dingbuui.removeChild(weishengzu_1);
                }
            });
        }
    };
    return Weishenqipao;
}(egret.DisplayObjectContainer));
__reflect(Weishenqipao.prototype, "Weishenqipao");
