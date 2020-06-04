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
var Zhujiemianshangceng = (function (_super) {
    __extends(Zhujiemianshangceng, _super);
    function Zhujiemianshangceng() {
        return _super.call(this) || this;
    }
    Zhujiemianshangceng.prototype.partAdded = function (partName, instance) {
        _super.prototype.partAdded.call(this, partName, instance);
    };
    Zhujiemianshangceng.prototype.childrenCreated = function () {
        _super.prototype.childrenCreated.call(this);
        this.anniuchuli();
    };
    Zhujiemianshangceng.prototype.anniuchuli = function () {
        this.chushihua();
        //点击菜谱按钮时，触发
        this.but_caipu1.addEventListener(egret.TouchEvent.TOUCH_TAP, this.openCaipu, this);
        //点击管理按钮时，触发
        this.but_guanli1.addEventListener(egret.TouchEvent.TOUCH_TAP, this.openGuanli, this);
        //点击食材添加按钮时触发
        this.but_tianjia.addEventListener(egret.TouchEvent.TOUCH_TAP, this.dianjishicai, this);
        //点击经营报表按钮时，触发
        this.but_jingyinbaobiao1.addEventListener(egret.TouchEvent.TOUCH_TAP, this.dianjijingying, this);
        //点击留言按钮时触发
        this.but_liuyan1.addEventListener(egret.TouchEvent.TOUCH_TAP, this.dianjiliuyan, this);
    };
    Zhujiemianshangceng.prototype.openCaipu = function () {
        Gameguanli.Kongzhitai().caipujiemian("fandian", "kai");
    };
    Zhujiemianshangceng.prototype.openGuanli = function () {
        Gameguanli.Kongzhitai().caipujiemian("guanli", "kai");
    };
    Zhujiemianshangceng.prototype.dianjijingying = function () {
        Gameguanli.Kongzhitai().caipujiemian("jingying", "kai");
    };
    Zhujiemianshangceng.prototype.dianjishicai = function () {
        Gameguanli.Kongzhitai().changjingrukou("caishichang", "kai");
    };
    Zhujiemianshangceng.prototype.dianjiliuyan = function () {
        Gameguanli.Kongzhitai().caipujiemian("liuyan", "kai");
    };
    Zhujiemianshangceng.prototype.chushihua = function () {
        this.shicaiwenzi.text = "" + Gerenshuxing.yongyouyuanliao;
        this.weishengwenzi.text = "" + Gerenshuxing.zzweishengzhi;
        this.shicaiwenzitixing();
    };
    Zhujiemianshangceng.prototype.shicaiwenzitixing = function () {
        if (Gerenshuxing.yongyouyuanliao >= 100) {
            this.img_shicaibuzu.alpha = 0;
        }
        else {
            this.img_shicaibuzu.alpha = 1;
        }
    };
    return Zhujiemianshangceng;
}(eui.Component));
__reflect(Zhujiemianshangceng.prototype, "Zhujiemianshangceng", ["eui.UIComponent", "egret.DisplayObject"]);
//# sourceMappingURL=Zhujiemianshangceng.js.map