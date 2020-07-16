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
var Wendatijiemian = (function (_super) {
    __extends(Wendatijiemian, _super);
    function Wendatijiemian() {
        var _this = _super.call(this) || this;
        _this.zhengquedaan = "F"; //本次正确答案;
        return _this;
    }
    Wendatijiemian.prototype.partAdded = function (partName, instance) {
        _super.prototype.partAdded.call(this, partName, instance);
    };
    Wendatijiemian.prototype.childrenCreated = function () {
        _super.prototype.childrenCreated.call(this);
        this.chushihua();
    };
    Wendatijiemian.prototype.chushihua = function (duixiang) {
        this.datiduixiang = duixiang;
        //先把按钮隐藏
        this.xuanxiananniua.enabled = false;
        this.xuanxiananniua.alpha = 0;
        this.xuanxiananniub.enabled = false;
        this.xuanxiananniub.alpha = 0;
        this.xuanxiananniuc.enabled = false;
        this.xuanxiananniuc.alpha = 0;
        this.xuanxiananniud.enabled = false;
        this.xuanxiananniud.alpha = 0;
        //关闭按钮处理
        this.guanbidati.enabled = true;
        this.guanbidati.addEventListener(egret.TouchEvent.TOUCH_TAP, this.guanbidatijiemian, this);
        this.heisezhezao.touchEnabled = true;
        this.heisezhezao.addEventListener(egret.TouchEvent.TOUCH_TAP, this.guanbidatijiemian, this);
        //判断显示内容
        if (duixiang == "1") {
            this.datibiaoti.text = "家庭交谈";
            this.duixiaing.text = "成员";
            this.duixiangren.text = "大儿子";
            this.jiangli.text = "奖励";
            this.jinrishenyu.text = "本次剩余:";
            this.shengtucishu.text = Gerenshuxing.daerzijiaotan + "";
            this.wentirentu.source = "img_daerzibiaoshi_png";
        }
        else if (duixiang == "2") {
            this.datibiaoti.text = "家庭交谈";
            this.duixiaing.text = "成员";
            this.duixiangren.text = "二儿子";
            this.jiangli.text = "奖励";
            this.jinrishenyu.text = "本次剩余:";
            this.shengtucishu.text = Gerenshuxing.ererzijiaotan + "";
            this.wentirentu.source = "img_xiaoerzibiaoshi_png";
        }
        else if (duixiang == "3") {
            this.datibiaoti.text = "家庭交谈";
            this.duixiaing.text = "成员";
            this.duixiangren.text = "大儿媳";
            this.jiangli.text = "奖励";
            this.jinrishenyu.text = "本次剩余:";
            this.shengtucishu.text = Gerenshuxing.xifujiaotan + "";
            this.wentirentu.source = "img_xifubiaoshi_png";
        }
        else if (duixiang == "4") {
            this.datibiaoti.text = "家庭交谈";
            this.duixiaing.text = "成员";
            this.duixiangren.text = "孙女";
            this.jiangli.text = "奖励";
            this.jinrishenyu.text = "本次剩余:";
            this.shengtucishu.text = Gerenshuxing.sunnvjiaotan + "";
            this.wentirentu.source = "img_sunnvbiaoshi_png";
        }
        this.jianglixianshichu(duixiang);
        this.datiluojichuli(duixiang);
    };
    Wendatijiemian.prototype.jianglixianshichu = function (duixiang) {
        this.chengyuanbiao = Gerenshuxing.jiatingchengyuan;
        this.jianglileixing = "0";
        this.jianglishu = "0";
        for (var i = 0; i < this.chengyuanbiao.length; i++) {
            if (this.chengyuanbiao[i].id == duixiang) {
                this.jianglileixing = this.chengyuanbiao[i].datijiangli;
                this.jianglishu = this.chengyuanbiao[i].jianglinum;
                break;
            }
        }
        this.jianglixianshi(this.jianglileixing, this.jianglishu);
    };
    Wendatijiemian.prototype.jianglixianshi = function (leixing, shuliang) {
        switch (leixing) {
            case "0":
                this.jiangliicon.source = "";
                this.jianglishuliang.text = "";
                break;
            case "1":
                this.jiangliicon.source = "img_qian_png";
                this.jianglishuliang.text = "+ " + shuliang;
                break;
            case "2":
                this.jiangliicon.source = "img_jiating_png";
                this.jianglishuliang.text = "+ " + shuliang;
                break;
            case "3":
                this.jiangliicon.source = "img_jiankang_png";
                this.jianglishuliang.text = "+ " + shuliang;
                break;
            case "4":
                this.jiangliicon.source = "img_xinqing_png";
                this.jianglishuliang.text = "+ " + shuliang;
                break;
            case "5":
                this.jiangliicon.source = "img_xingfu_png";
                this.jianglishuliang.text = "+ " + shuliang;
                break;
            case "6":
                this.jiangliicon.source = "img_daerzixinqinicon_png";
                this.jianglishuliang.text = "+ " + shuliang;
                break;
            case "7":
                this.jiangliicon.source = "img_ererzixinqinicon_png";
                this.jianglishuliang.text = "+ " + shuliang;
                break;
            case "8":
                this.jiangliicon.source = "img_xifuxinqingicon_png";
                this.jianglishuliang.text = "+ " + shuliang;
                break;
            case "9":
                this.jiangliicon.source = "img_sunnvxinqingicon_png";
                this.jianglishuliang.text = "+ " + shuliang;
                break;
            case "10":
                this.jiangliicon.source = "img_daerzinengliicon_png";
                this.jianglishuliang.text = "+ " + shuliang;
                break;
            case "11":
                this.jiangliicon.source = "img_ererzinengliicon_png";
                this.jianglishuliang.text = "+ " + shuliang;
                break;
            case "12":
                this.jiangliicon.source = "img_xifunengliicon_png";
                this.jianglishuliang.text = "+ " + shuliang;
                break;
            case "13":
                this.jiangliicon.source = "img_sunnvnengliicon_png";
                this.jianglishuliang.text = "+ " + shuliang;
                break;
            default:
                if (parseInt(leixing) >= 1000 && parseInt(leixing) < 10000) {
                    this.jianglicaipuxianshi(leixing, shuliang);
                }
                else if (parseInt(leixing) >= 10000) {
                    this.jianglidaojuxianshi(leixing, shuliang);
                }
                ;
                break;
        }
    };
    Wendatijiemian.prototype.jianglicaipuxianshi = function (leixing, shuliang) {
        var caipubiao = Gerenshuxing.shipubiao;
        for (var i = 0; i < caipubiao.length; i++) {
            if (caipubiao[i].id == leixing) {
                this.jiangliicon.source = caipubiao[i].id + "_png";
                this.jianglishuliang.text = "+ " + shuliang;
                break;
            }
        }
    };
    Wendatijiemian.prototype.jianglidaojuxianshi = function (leixing, shuliang) {
        for (var i = 0; i < Gerenshuxing.daojubiao.length; i++) {
            if (Gerenshuxing.daojubiao[i].id == leixing) {
                this.jiangliicon.source = Gerenshuxing.daojubiao[i].xianshiicon;
                this.jianglishuliang.text = "+ " + shuliang;
                break;
            }
        }
    };
    Wendatijiemian.prototype.datiluojichuli = function (duixiang) {
        var tiku = RES.getRes("daerzitiku_json");
        if (duixiang == "1") {
            tiku = RES.getRes("daerzitiku_json");
        }
        else if (duixiang == "2") {
            tiku = RES.getRes("ererzitiku_json");
        }
        else if (duixiang == "3") {
            tiku = RES.getRes("xifutiku_json");
        }
        else if (duixiang == "4") {
            tiku = RES.getRes("sunnvtiku_json");
        }
        var suijitixuhao = Math.floor(Math.random() * tiku.length);
        var timu = tiku[suijitixuhao];
        this.timuneirong.text = timu.timushuoming;
        this.zhengquedaan = timu.zhengquedaan;
        if (timu.daana != "") {
            this.axuanxiang.text = "A";
            this.adaan.text = timu.daana;
            this.xuanxiananniua.enabled = true;
            this.xuanxiananniua.alpha = 1;
            this.xuanxiananniua.addEventListener(egret.TouchEvent.TOUCH_TAP, this.dianjidaana, this);
        }
        else {
            this.axuanxiang.text = "";
            this.adaan.text = "";
            this.xuanxiananniua.enabled = false;
            this.xuanxiananniua.alpha = 0;
        }
        if (timu.daanb != "") {
            this.bxuanxiang.text = "B";
            this.bdaan.text = timu.daanb;
            this.xuanxiananniub.enabled = true;
            this.xuanxiananniub.alpha = 1;
            this.xuanxiananniub.addEventListener(egret.TouchEvent.TOUCH_TAP, this.dianjidaanb, this);
        }
        else {
            this.bxuanxiang.text = "";
            this.bdaan.text = "";
            this.xuanxiananniub.enabled = false;
            this.xuanxiananniub.alpha = 0;
        }
        if (timu.daanc != "") {
            this.cxuanxiang.text = "C";
            this.cdaan.text = timu.daanc;
            this.xuanxiananniuc.enabled = true;
            this.xuanxiananniuc.alpha = 1;
            this.xuanxiananniuc.addEventListener(egret.TouchEvent.TOUCH_TAP, this.dianjidaanc, this);
        }
        else {
            this.cxuanxiang.text = "";
            this.cdaan.text = "";
            this.xuanxiananniuc.enabled = false;
            this.xuanxiananniuc.alpha = 0;
        }
        if (timu.daand != "") {
            this.dxuanxiang.text = "D";
            this.ddaan.text = timu.daand;
            this.xuanxiananniud.enabled = true;
            this.xuanxiananniud.alpha = 1;
            this.xuanxiananniud.addEventListener(egret.TouchEvent.TOUCH_TAP, this.dianjidaand, this);
        }
        else {
            this.dxuanxiang.text = "";
            this.ddaan.text = "";
            this.xuanxiananniud.enabled = false;
            this.xuanxiananniud.alpha = 0;
        }
    };
    Wendatijiemian.prototype.dianjidaana = function () {
        Gamesound.Soundkongzhi().anniuyinxiao();
        if (this.zhengquedaan == "A") {
            Gameguanli.Kongzhitai().cuowutishixinxi("恭喜您，回答正确！");
            Weblianjie.fasongshuju("code:085", "{" + '"uid"' + ":" + '"' + Gerenshuxing.uid + '"' + ","
                + '"kouchuleixing"' + ":" + '"0"' + ","
                + '"kouchushuliang"' + ":" + '"0"' + ","
                + '"leixing"' + ":" + '"' + this.jianglileixing + '"' + ","
                + '"shuliang"' + ":" + '"' + this.jianglishu + '"' + ","
                + '"beishu"' + ":" + '"1"' + "}");
            this.shuaxintimu();
            this.panduanmeirirenwu();
        }
        else {
            Gameguanli.Kongzhitai().cuowutishixinxi("这个答案似乎并不是TA需要的...");
            this.shuaxintimu();
        }
    };
    Wendatijiemian.prototype.dianjidaanb = function () {
        Gamesound.Soundkongzhi().anniuyinxiao();
        if (this.zhengquedaan == "B") {
            Gameguanli.Kongzhitai().cuowutishixinxi("恭喜您，回答正确！");
            Weblianjie.fasongshuju("code:085", "{" + '"uid"' + ":" + '"' + Gerenshuxing.uid + '"' + ","
                + '"kouchuleixing"' + ":" + '"0"' + ","
                + '"kouchushuliang"' + ":" + '"0"' + ","
                + '"leixing"' + ":" + '"' + this.jianglileixing + '"' + ","
                + '"shuliang"' + ":" + '"' + this.jianglishu + '"' + ","
                + '"beishu"' + ":" + '"1"' + "}");
            this.shuaxintimu();
            this.panduanmeirirenwu();
        }
        else {
            Gameguanli.Kongzhitai().cuowutishixinxi("这个答案似乎并不是TA需要的...");
            this.shuaxintimu();
        }
    };
    Wendatijiemian.prototype.dianjidaanc = function () {
        Gamesound.Soundkongzhi().anniuyinxiao();
        if (this.zhengquedaan == "C") {
            Gameguanli.Kongzhitai().cuowutishixinxi("恭喜您，回答正确！");
            Weblianjie.fasongshuju("code:085", "{" + '"uid"' + ":" + '"' + Gerenshuxing.uid + '"' + ","
                + '"kouchuleixing"' + ":" + '"0"' + ","
                + '"kouchushuliang"' + ":" + '"0"' + ","
                + '"leixing"' + ":" + '"' + this.jianglileixing + '"' + ","
                + '"shuliang"' + ":" + '"' + this.jianglishu + '"' + ","
                + '"beishu"' + ":" + '"1"' + "}");
            this.shuaxintimu();
            this.panduanmeirirenwu();
        }
        else {
            Gameguanli.Kongzhitai().cuowutishixinxi("这个答案似乎并不是TA需要的...");
            this.shuaxintimu();
        }
    };
    Wendatijiemian.prototype.dianjidaand = function () {
        Gamesound.Soundkongzhi().anniuyinxiao();
        if (this.zhengquedaan == "D") {
            Gameguanli.Kongzhitai().cuowutishixinxi("恭喜您，回答正确！");
            Weblianjie.fasongshuju("code:085", "{" + '"uid"' + ":" + '"' + Gerenshuxing.uid + '"' + ","
                + '"kouchuleixing"' + ":" + '"0"' + ","
                + '"kouchushuliang"' + ":" + '"0"' + ","
                + '"leixing"' + ":" + '"' + this.jianglileixing + '"' + ","
                + '"shuliang"' + ":" + '"' + this.jianglishu + '"' + ","
                + '"beishu"' + ":" + '"1"' + "}");
            this.shuaxintimu();
            this.panduanmeirirenwu();
        }
        else {
            Gameguanli.Kongzhitai().cuowutishixinxi("这个答案似乎并不是TA需要的...");
            this.shuaxintimu();
        }
    };
    Wendatijiemian.prototype.shuaxintimu = function () {
        switch (this.datiduixiang) {
            case "1":
                if (Gerenshuxing.daerzijiaotan > 0) {
                    Gerenshuxing.daerzijiaotan -= 1;
                    this.chushihua("1");
                }
                else {
                    this.guanbidatijiemian();
                }
                break;
            case "2":
                if (Gerenshuxing.ererzijiaotan > 0) {
                    Gerenshuxing.ererzijiaotan -= 1;
                    this.chushihua("2");
                }
                else {
                    this.guanbidatijiemian();
                }
                break;
            case "3":
                if (Gerenshuxing.xifujiaotan > 0) {
                    Gerenshuxing.xifujiaotan -= 1;
                    this.chushihua("3");
                }
                else {
                    this.guanbidatijiemian();
                }
                break;
            case "4":
                if (Gerenshuxing.sunnvjiaotan > 0) {
                    Gerenshuxing.sunnvjiaotan -= 1;
                    this.chushihua("4");
                }
                else {
                    this.guanbidatijiemian();
                }
                break;
        }
    };
    Wendatijiemian.prototype.guanbidatijiemian = function () {
        Gamesound.Soundkongzhi().anniuyinxiao();
        this.parent.removeChild(this);
    };
    Wendatijiemian.prototype.panduanmeirirenwu = function () {
        var meirirenwubiao = Gerenshuxing.meirirenwubiao;
        for (var i = 0; i < meirirenwubiao.length; i++) {
            if (meirirenwubiao[i].id == Gerenshuxing.meirirenwufor[0]) {
                if (meirirenwubiao[i].renwuduixiang == this.datiduixiang) {
                    if (Gerenshuxing.meirirenwufor[3] == "0") {
                        Weblianjie.fasongshuju("code:161", "{" + '"uid"' + ":" + '"' + Gerenshuxing.uid + '"' + ","
                            + '"zengjialeixing"' + ":" + '"4"' + "}");
                        break;
                    }
                }
            }
        }
    };
    return Wendatijiemian;
}(eui.Component));
__reflect(Wendatijiemian.prototype, "Wendatijiemian", ["eui.UIComponent", "egret.DisplayObject"]);
