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
var Jinyingguanlijiemian = (function (_super) {
    __extends(Jinyingguanlijiemian, _super);
    function Jinyingguanlijiemian() {
        return _super.call(this) || this;
    }
    Jinyingguanlijiemian.prototype.partAdded = function (partName, instance) {
        _super.prototype.partAdded.call(this, partName, instance);
    };
    Jinyingguanlijiemian.prototype.childrenCreated = function () {
        _super.prototype.childrenCreated.call(this);
        this.chushihua();
    };
    Jinyingguanlijiemian.prototype.chushihua = function () {
        this.youxitishibiao = RES.getRes("youxitishibiao_json");
        //增加关闭按钮点击
        this.but_guanbi.addEventListener(egret.TouchEvent.TOUCH_TAP, this.dianjiguanbi, this);
        Gerenshuxing.yuangongshuxing();
        this.keliuliangtext.text = "" + Gerenshuxing.zzkeliuliang;
        this.kerongliangtext.text = "" + Gerenshuxing.zzkerongliang;
        this.weishentext.text = "" + Gerenshuxing.zzweishengzhi;
        this.shicaichubeitext.text = "" + Gerenshuxing.yongyouyuanliao;
        this.anbaotext.text = "" + Gerenshuxing.zzanbaozhi;
        this.fandiankoubeitext.text = "" + Gerenshuxing.zzkoubeizhi;
        this.shangcaisudutext.text = "" + Gerenshuxing.zzchushishangcaisudu;
        this.shihaojiangditext.text = "" + Gerenshuxing.zzyuanliaoxiaohao;
        this.lixianshouyitext.text = Math.floor(parseInt(Gerenshuxing.daerzixinxi[1]) / 100 + 1) * 60 + "/h";
        this.waimaishouyitext.text = "24h";
        var yuangongbiao = Gerenshuxing.yuangongbiao;
        var xiaochaozengjia = 0;
        var huoguozengjia = 0;
        var xiaochizengjia = 0;
        var zaocanzengjia = 0;
        var yuangonggongzi = 0;
        for (var i = 0; i < Gerenshuxing.shiyongyuangong.length; i++) {
            for (var j = 0; j < yuangongbiao.length; j++) {
                if (Gerenshuxing.shiyongyuangong[i] == yuangongbiao[j].id) {
                    yuangonggongzi += parseInt(yuangongbiao[j].pay);
                    switch (yuangongbiao[j].skill) {
                        case "1":
                            xiaochaozengjia += parseInt(yuangongbiao[j].skillparameter);
                            break;
                        case "2":
                            huoguozengjia += parseInt(yuangongbiao[j].skillparameter);
                            break;
                        case "3":
                            xiaochizengjia += parseInt(yuangongbiao[j].skillparameter);
                            break;
                        case "4":
                            zaocanzengjia += parseInt(yuangongbiao[j].skillparameter);
                            break;
                    }
                }
            }
        }
        this.xiaochaotijiatext.text = "" + xiaochaozengjia;
        this.huoguotijiatext.text = "" + huoguozengjia;
        this.xiaochitijiatext.text = "" + xiaochizengjia;
        this.zaocantijiatext.text = "" + zaocanzengjia;
        this.yuangongxinzitext.text = "" + yuangonggongzi + "/天";
        var fangwu = 0;
        var fangzu = 0;
        var meiqi = 0;
        var meiqifei = 0;
        var fadan = 0;
        var fadanfei = 0;
        var danjubiao = Gerenshuxing.danjubiao;
        for (var k = 0; k < Gerenshuxing.yongyoudanju.length; k++) {
            for (var n = 0; n < danjubiao.length; n++) {
                if (Gerenshuxing.yongyoudanju[k] == danjubiao[n].id) {
                    switch (danjubiao[n].id) {
                        case "1001":
                            fangwu += parseInt(danjubiao[n].debuff);
                            fangzu += parseInt(danjubiao[n].pay);
                            break;
                        case "1002":
                            meiqi += parseInt(danjubiao[n].debuff);
                            meiqifei += parseInt(danjubiao[n].pay);
                            break;
                        case "1003":
                            fadan += parseInt(danjubiao[n].debuff);
                            fadanfei += parseInt(danjubiao[n].pay);
                            break;
                        case "1004":
                            fadan += parseInt(danjubiao[n].debuff);
                            fadanfei += parseInt(danjubiao[n].pay);
                            break;
                    }
                }
            }
        }
        if (fangwu > 0) {
            this.fangwuzujintext.text = "" + fangzu;
            this.zujinshouru.text = "总收入-" + fangwu + "%";
        }
        else {
            this.fangwuzujintext.text = "已缴";
            this.zujinshouru.text = "";
        }
        if (meiqi > 0) {
            this.shuidianmeiqitext.text = "" + meiqifei;
            this.meiqishouru.text = "总收入-" + meiqi + "%";
        }
        else {
            this.shuidianmeiqitext.text = "已缴";
            this.meiqishouru.text = "";
        }
        if (fadan > 0) {
            this.jingyinfadantext.text = "" + fadanfei;
            this.fadanshouru.text = "总收入-" + fadan + "%";
        }
        else {
            this.jingyinfadantext.text = "已缴";
            this.fadanshouru.text = "";
        }
        /*
        增加小提示按钮点击事件，点击后弹出介绍界面
        */
        this.shuomingbut.addEventListener(egret.TouchEvent.TOUCH_TAP, this.shuoming1, this);
        this.shuomingbut0.addEventListener(egret.TouchEvent.TOUCH_TAP, this.shuoming2, this);
        this.shuomingbut1.addEventListener(egret.TouchEvent.TOUCH_TAP, this.shuoming3, this);
        this.shuomingbut2.addEventListener(egret.TouchEvent.TOUCH_TAP, this.shuoming4, this);
        this.shuomingbut3.addEventListener(egret.TouchEvent.TOUCH_TAP, this.shuoming5, this);
        this.shuomingbut4.addEventListener(egret.TouchEvent.TOUCH_TAP, this.shuoming6, this);
        this.shuomingbut5.addEventListener(egret.TouchEvent.TOUCH_TAP, this.shuoming7, this);
        this.shuomingbut6.addEventListener(egret.TouchEvent.TOUCH_TAP, this.shuoming8, this);
        this.shuomingbut7.addEventListener(egret.TouchEvent.TOUCH_TAP, this.shuoming9, this);
        this.shuomingbut8.addEventListener(egret.TouchEvent.TOUCH_TAP, this.shuoming10, this);
        this.shuomingbut9.addEventListener(egret.TouchEvent.TOUCH_TAP, this.shuoming11, this);
        this.shuomingbut10.addEventListener(egret.TouchEvent.TOUCH_TAP, this.shuoming12, this);
        this.shuomingbut11.addEventListener(egret.TouchEvent.TOUCH_TAP, this.shuoming13, this);
        this.shuomingbut12.addEventListener(egret.TouchEvent.TOUCH_TAP, this.shuoming14, this);
        this.shuomingbut13.addEventListener(egret.TouchEvent.TOUCH_TAP, this.shuoming15, this);
        this.shuomingbut14.addEventListener(egret.TouchEvent.TOUCH_TAP, this.shuoming16, this);
        this.shuomingbut15.addEventListener(egret.TouchEvent.TOUCH_TAP, this.shuoming17, this);
        this.shuomingbut16.addEventListener(egret.TouchEvent.TOUCH_TAP, this.shuoming18, this);
    };
    Jinyingguanlijiemian.prototype.dianjiguanbi = function () {
        Gamesound.Soundkongzhi().anniuyinxiao();
        Gameguanli.Kongzhitai().caipujiemian("jingying", "guan");
    };
    Jinyingguanlijiemian.prototype.shuoming1 = function () {
        Gamesound.Soundkongzhi().anniuyinxiao();
        for (var i = 0; i < this.youxitishibiao.length; i++) {
            if (this.youxitishibiao[i].id == "1") {
                this.youxitishijiemian(this.youxitishibiao[i].neirong);
                break;
            }
        }
    };
    Jinyingguanlijiemian.prototype.shuoming2 = function () {
        Gamesound.Soundkongzhi().anniuyinxiao();
        for (var i = 0; i < this.youxitishibiao.length; i++) {
            if (this.youxitishibiao[i].id == "2") {
                this.youxitishijiemian(this.youxitishibiao[i].neirong);
                break;
            }
        }
    };
    Jinyingguanlijiemian.prototype.shuoming3 = function () {
        Gamesound.Soundkongzhi().anniuyinxiao();
        for (var i = 0; i < this.youxitishibiao.length; i++) {
            if (this.youxitishibiao[i].id == "3") {
                this.youxitishijiemian(this.youxitishibiao[i].neirong);
                break;
            }
        }
    };
    Jinyingguanlijiemian.prototype.shuoming4 = function () {
        Gamesound.Soundkongzhi().anniuyinxiao();
        for (var i = 0; i < this.youxitishibiao.length; i++) {
            if (this.youxitishibiao[i].id == "4") {
                this.youxitishijiemian(this.youxitishibiao[i].neirong);
                break;
            }
        }
    };
    Jinyingguanlijiemian.prototype.shuoming5 = function () {
        Gamesound.Soundkongzhi().anniuyinxiao();
        for (var i = 0; i < this.youxitishibiao.length; i++) {
            if (this.youxitishibiao[i].id == "5") {
                this.youxitishijiemian(this.youxitishibiao[i].neirong);
                break;
            }
        }
    };
    Jinyingguanlijiemian.prototype.shuoming6 = function () {
        Gamesound.Soundkongzhi().anniuyinxiao();
        for (var i = 0; i < this.youxitishibiao.length; i++) {
            if (this.youxitishibiao[i].id == "6") {
                this.youxitishijiemian(this.youxitishibiao[i].neirong);
                break;
            }
        }
    };
    Jinyingguanlijiemian.prototype.shuoming7 = function () {
        Gamesound.Soundkongzhi().anniuyinxiao();
        for (var i = 0; i < this.youxitishibiao.length; i++) {
            if (this.youxitishibiao[i].id == "7") {
                this.youxitishijiemian(this.youxitishibiao[i].neirong);
                break;
            }
        }
    };
    Jinyingguanlijiemian.prototype.shuoming8 = function () {
        Gamesound.Soundkongzhi().anniuyinxiao();
        for (var i = 0; i < this.youxitishibiao.length; i++) {
            if (this.youxitishibiao[i].id == "8") {
                this.youxitishijiemian(this.youxitishibiao[i].neirong);
                break;
            }
        }
    };
    Jinyingguanlijiemian.prototype.shuoming9 = function () {
        Gamesound.Soundkongzhi().anniuyinxiao();
        for (var i = 0; i < this.youxitishibiao.length; i++) {
            if (this.youxitishibiao[i].id == "9") {
                this.youxitishijiemian(this.youxitishibiao[i].neirong);
                break;
            }
        }
    };
    Jinyingguanlijiemian.prototype.shuoming10 = function () {
        Gamesound.Soundkongzhi().anniuyinxiao();
        for (var i = 0; i < this.youxitishibiao.length; i++) {
            if (this.youxitishibiao[i].id == "10") {
                this.youxitishijiemian(this.youxitishibiao[i].neirong);
                break;
            }
        }
    };
    Jinyingguanlijiemian.prototype.shuoming11 = function () {
        Gamesound.Soundkongzhi().anniuyinxiao();
        for (var i = 0; i < this.youxitishibiao.length; i++) {
            if (this.youxitishibiao[i].id == "11") {
                this.youxitishijiemian(this.youxitishibiao[i].neirong);
                break;
            }
        }
    };
    Jinyingguanlijiemian.prototype.shuoming12 = function () {
        Gamesound.Soundkongzhi().anniuyinxiao();
        for (var i = 0; i < this.youxitishibiao.length; i++) {
            if (this.youxitishibiao[i].id == "12") {
                this.youxitishijiemian(this.youxitishibiao[i].neirong);
                break;
            }
        }
    };
    Jinyingguanlijiemian.prototype.shuoming13 = function () {
        Gamesound.Soundkongzhi().anniuyinxiao();
        for (var i = 0; i < this.youxitishibiao.length; i++) {
            if (this.youxitishibiao[i].id == "13") {
                this.youxitishijiemian(this.youxitishibiao[i].neirong);
                break;
            }
        }
    };
    Jinyingguanlijiemian.prototype.shuoming14 = function () {
        Gamesound.Soundkongzhi().anniuyinxiao();
        for (var i = 0; i < this.youxitishibiao.length; i++) {
            if (this.youxitishibiao[i].id == "14") {
                this.youxitishijiemian(this.youxitishibiao[i].neirong);
                break;
            }
        }
    };
    Jinyingguanlijiemian.prototype.shuoming15 = function () {
        Gamesound.Soundkongzhi().anniuyinxiao();
        for (var i = 0; i < this.youxitishibiao.length; i++) {
            if (this.youxitishibiao[i].id == "15") {
                this.youxitishijiemian(this.youxitishibiao[i].neirong);
                break;
            }
        }
    };
    Jinyingguanlijiemian.prototype.shuoming16 = function () {
        Gamesound.Soundkongzhi().anniuyinxiao();
        for (var i = 0; i < this.youxitishibiao.length; i++) {
            if (this.youxitishibiao[i].id == "16") {
                this.youxitishijiemian(this.youxitishibiao[i].neirong);
                break;
            }
        }
    };
    Jinyingguanlijiemian.prototype.shuoming17 = function () {
        Gamesound.Soundkongzhi().anniuyinxiao();
        for (var i = 0; i < this.youxitishibiao.length; i++) {
            if (this.youxitishibiao[i].id == "17") {
                this.youxitishijiemian(this.youxitishibiao[i].neirong);
                break;
            }
        }
    };
    Jinyingguanlijiemian.prototype.shuoming18 = function () {
        Gamesound.Soundkongzhi().anniuyinxiao();
        for (var i = 0; i < this.youxitishibiao.length; i++) {
            if (this.youxitishibiao[i].id == "18") {
                this.youxitishijiemian(this.youxitishibiao[i].neirong);
                break;
            }
        }
    };
    Jinyingguanlijiemian.prototype.youxitishijiemian = function (neirong) {
        var tishijiemian = new Youxitishiui();
        this.addChild(tishijiemian);
        tishijiemian.xianshineirong(neirong);
    };
    return Jinyingguanlijiemian;
}(eui.Component));
__reflect(Jinyingguanlijiemian.prototype, "Jinyingguanlijiemian", ["eui.UIComponent", "egret.DisplayObject"]);
