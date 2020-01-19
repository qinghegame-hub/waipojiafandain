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
        var yuangongbiao = RES.getRes("yuangongbiao_json");
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
        var danjubiao = RES.getRes("danjubiao_json");
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
            this.fangwuzujintext.text = "[已缴纳]";
            this.zujinshouru.text = "";
        }
        if (meiqi > 0) {
            this.shuidianmeiqitext.text = "" + meiqifei;
            this.meiqishouru.text = "总收入-" + meiqi + "%";
        }
        else {
            this.shuidianmeiqitext.text = "[已缴纳]";
            this.meiqishouru.text = "";
        }
        if (fadan > 0) {
            this.jingyinfadantext.text = "" + fadanfei;
            this.fadanshouru.text = "总收入-" + fadan + "%";
        }
        else {
            this.jingyinfadantext.text = "[已缴纳]";
            this.fadanshouru.text = "";
        }
    };
    Jinyingguanlijiemian.prototype.dianjiguanbi = function () {
        Gameguanli.Kongzhitai().caipujiemian("jingying", "guan");
    };
    return Jinyingguanlijiemian;
}(eui.Component));
__reflect(Jinyingguanlijiemian.prototype, "Jinyingguanlijiemian", ["eui.UIComponent", "egret.DisplayObject"]);
//# sourceMappingURL=Jinyingguanlijiemian.js.map