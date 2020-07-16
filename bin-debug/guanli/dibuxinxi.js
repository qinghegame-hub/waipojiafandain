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
var dibuxinxi = (function (_super) {
    __extends(dibuxinxi, _super);
    function dibuxinxi() {
        return _super.call(this) || this;
    }
    dibuxinxi.prototype.partAdded = function (partName, instance) {
        _super.prototype.partAdded.call(this, partName, instance);
    };
    dibuxinxi.prototype.childrenCreated = function () {
        _super.prototype.childrenCreated.call(this);
        this.dibuchushihua(); //初始化入口
    };
    dibuxinxi.prototype.dibuchushihua = function () {
        this.jiesuokongzhi();
        Gameguanli.Kongzhitai().dibuui.but_hotel1.enabled = true;
        this.but_hotel1.addEventListener(egret.TouchEvent.TOUCH_TAP, this.openfandian, this);
        Gameguanli.Kongzhitai().dibuui.but_huijia1.enabled = false;
        this.but_huijia1.addEventListener(egret.TouchEvent.TOUCH_TAP, this.openhuijia, this);
        Gameguanli.Kongzhitai().dibuui.but_gongyuan1.enabled = true;
        this.but_gongyuan1.addEventListener(egret.TouchEvent.TOUCH_TAP, this.opendajie, this);
        Gameguanli.Kongzhitai().dibuui.but_licai1.enabled = true;
        this.but_licai1.addEventListener(egret.TouchEvent.TOUCH_TAP, this.openpaihang, this);
    };
    dibuxinxi.prototype.jiesuokongzhi = function () {
        if (Gerenshuxing.guideuiyindao < 11) {
            this.fandiansuo.source = "img_xiamiandaisuoanniu_png";
        }
        else {
            this.fandiansuo.source = "";
        }
        if (Gerenshuxing.guideuiyindao < 21) {
            this.dajiesuo.source = "img_xiamiandaisuoanniu_png";
        }
        else {
            this.dajiesuo.source = "";
        }
        if (Gerenshuxing.guideuiyindao < 19) {
            this.paihangsuo.source = "img_xiamiandaisuoanniu_png";
        }
        else {
            this.paihangsuo.source = "";
        }
        this.huijiasuo.source = "";
    };
    dibuxinxi.prototype.openfandian = function () {
        Gamesound.Soundkongzhi().anniuyinxiao();
        Gameguanli.Kongzhitai().dibuui.but_hotel1.enabled = false;
        Gameguanli.Kongzhitai().dibuui.but_gongyuan1.enabled = true;
        Gameguanli.Kongzhitai().dibuui.but_huijia1.enabled = true;
        Gameguanli.Kongzhitai().dibuui.but_licai1.enabled = true;
        //关闭家庭界面
        Gameguanli.Kongzhitai().jiatingjiemianguanbi();
        //		向界面管理中加入打开主界面参数;
        Gameguanli.Kongzhitai().jiemianxianshi("zhujiemian");
    };
    dibuxinxi.prototype.opendajie = function () {
        Gamesound.Soundkongzhi().anniuyinxiao();
        //		向界面管理中加入打开主界面参数;
        Gameguanli.Kongzhitai().jiemianxianshi("shangjie");
    };
    dibuxinxi.prototype.openhuijia = function () {
        Gamesound.Soundkongzhi().anniuyinxiao();
        Gameguanli.Kongzhitai().dibuui.but_hotel1.enabled = true;
        Gameguanli.Kongzhitai().dibuui.but_gongyuan1.enabled = true;
        Gameguanli.Kongzhitai().dibuui.but_huijia1.enabled = false;
        Gameguanli.Kongzhitai().dibuui.but_licai1.enabled = true;
        //关闭家庭界面
        Gameguanli.Kongzhitai().jiatingjiemianguanbi();
        //		向界面管理中加入打开主界面参数;
        Gameguanli.Kongzhitai().jiemianxianshi("huijia");
    };
    dibuxinxi.prototype.openpaihang = function () {
        Gamesound.Soundkongzhi().anniuyinxiao();
        Gameguanli.Kongzhitai().dibuui.but_hotel1.enabled = true;
        Gameguanli.Kongzhitai().dibuui.but_gongyuan1.enabled = true;
        Gameguanli.Kongzhitai().dibuui.but_huijia1.enabled = true;
        Gameguanli.Kongzhitai().dibuui.but_licai1.enabled = false;
        //关闭家庭界面
        Gameguanli.Kongzhitai().jiatingjiemianguanbi();
        //		向界面管理中加入打开主界面参数;
        Gameguanli.Kongzhitai().jiemianxianshi("gonggao");
    };
    return dibuxinxi;
}(eui.Component));
__reflect(dibuxinxi.prototype, "dibuxinxi", ["eui.UIComponent", "egret.DisplayObject"]);
