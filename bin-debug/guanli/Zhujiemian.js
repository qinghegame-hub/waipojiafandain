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
var Zhujiemian = (function (_super) {
    __extends(Zhujiemian, _super);
    function Zhujiemian() {
        var _this = _super.call(this) || this;
        //遍历所有表格，取出当前正在使用的家具内容
        _this.guanlileixingleibiao = Gerenshuxing.jiajubiao;
        return _this;
    }
    Zhujiemian.prototype.partAdded = function (partName, instance) {
        _super.prototype.partAdded.call(this, partName, instance);
    };
    Zhujiemian.prototype.childrenCreated = function () {
        _super.prototype.childrenCreated.call(this);
        this.lajianniuchushi();
        this.chushihuaui();
    };
    //初始化4个饭店区域的显示内容
    Zhujiemian.prototype.chushihuaui = function () {
        this.guanlileixingleibiao = Gerenshuxing.jiajubiao;
        this.chushihua_xiaochao();
        this.chushihua_huoguo();
        this.chushihua_xiaochi();
        this.chushihua_zaocan();
        //创建拖尾显示
        var shouzhihuadong = new Huaxianbiaoxian();
        shouzhihuadong.setTouchArea(this.stage);
        shouzhihuadong.enable();
    };
    Zhujiemian.prototype.chushihua_xiaochao = function () {
        if (Gerenshuxing.jiesuoxiaochao == "1") {
            var xiaocaoquyuxianshi = [];
            for (var i = 0; i < this.guanlileixingleibiao.length; i++) {
                if (this.guanlileixingleibiao[i].id == Gerenshuxing.usexiaochao) {
                    xiaocaoquyuxianshi[0] = this.guanlileixingleibiao[i];
                }
            }
            this.img_jiaju_xiaochao.source = xiaocaoquyuxianshi[0].imgname + "_png";
            this.img_jiaju_xiaochao.touchEnabled = false;
        }
        else {
            this.img_jiaju_xiaochao.source = "img_weijiesuo_png";
            this.img_jiaju_xiaochao.addEventListener(egret.TouchEvent.TOUCH_TAP, this.jiesuodating1, this);
        }
    };
    Zhujiemian.prototype.chushihua_huoguo = function () {
        if (Gerenshuxing.jiesuohuoguo == "1") {
            var huoguoquyuxianshi = [];
            for (var i = 0; i < this.guanlileixingleibiao.length; i++) {
                if (this.guanlileixingleibiao[i].id == Gerenshuxing.usehuoguo) {
                    huoguoquyuxianshi[0] = this.guanlileixingleibiao[i];
                }
            }
            this.img_jiaju_huoguo.source = huoguoquyuxianshi[0].imgname + "_png";
            this.img_jiaju_huoguo.touchEnabled = false;
        }
        else {
            this.img_jiaju_huoguo.source = "img_weijiesuo_png";
            this.img_jiaju_huoguo.addEventListener(egret.TouchEvent.TOUCH_TAP, this.jiesuodating2, this);
        }
    };
    Zhujiemian.prototype.chushihua_xiaochi = function () {
        if (Gerenshuxing.jiesuoxiaochi == "1") {
            var xiaochiquyuxianshi = [];
            for (var i = 0; i < this.guanlileixingleibiao.length; i++) {
                if (this.guanlileixingleibiao[i].id == Gerenshuxing.usexiaochi) {
                    xiaochiquyuxianshi[0] = this.guanlileixingleibiao[i];
                }
            }
            this.img_jiaju_xiaochi.source = xiaochiquyuxianshi[0].imgname + "_png";
            this.img_jiaju_xiaochi.touchEnabled = false;
        }
        else {
            this.img_jiaju_xiaochi.source = "img_weijiesuo_png";
            this.img_jiaju_xiaochi.addEventListener(egret.TouchEvent.TOUCH_TAP, this.jiesuodating3, this);
        }
    };
    Zhujiemian.prototype.chushihua_zaocan = function () {
        if (Gerenshuxing.jiesuozaocan == "1") {
            var dianxinquyuxianshi = [];
            for (var i = 0; i < this.guanlileixingleibiao.length; i++) {
                if (this.guanlileixingleibiao[i].id == Gerenshuxing.usezaocan) {
                    dianxinquyuxianshi[0] = this.guanlileixingleibiao[i];
                }
            }
            this.img_jiaju_dianxin.source = dianxinquyuxianshi[0].imgname + "_png";
            this.img_jiaju_dianxin.touchEnabled = false;
        }
        else {
            this.img_jiaju_dianxin.source = "img_weijiesuo_png";
            this.img_jiaju_dianxin.addEventListener(egret.TouchEvent.TOUCH_TAP, this.jiesuodating4, this);
        }
    };
    Zhujiemian.prototype.jiesuodating1 = function () {
        Gamesound.Soundkongzhi().anniuyinxiao();
        var jiesuofeiyong = Gerenshuxing.zhuozijiesuobiao;
        for (var i = 0; i < jiesuofeiyong.length; i++) {
            if (jiesuofeiyong[i].id == "1") {
                this.jiesuo1 = jiesuofeiyong[i].activateprice;
                break;
            }
        }
        this.tishijiemian = new Tongyongquerenkuang();
        Gameguanli.Kongzhitai().zhujiemiandingbu.addChild(this.tishijiemian);
        this.tishijiemian.but_queding0.enabled = true;
        this.tishijiemian.but_queding0.alpha = 1;
        this.tishijiemian.but_queding.enabled = false;
        this.tishijiemian.but_queding.alpha = 0;
        this.tishijiemian.but_shuangbei.enabled = false;
        this.tishijiemian.but_shuangbei.alpha = 0;
        this.tishijiemian.jiangli2.text = "- " + this.jiesuo1;
        this.tishijiemian.jiangli1.text = "";
        this.tishijiemian.jiangliicon1.source = "";
        this.tishijiemian.jiangliicon2.source = "img_qian_png";
        this.tishijiemian.tishiwenzi.text = "装修饭店的小炒区域，需消耗钱币：" + this.jiesuo1 + "。\n装修后，您的饭店可增加[小炒]菜品。";
        this.tishijiemian.but_queding0.addEventListener(egret.TouchEvent.TOUCH_TAP, this.jiesuofandian1, this);
    };
    Zhujiemian.prototype.jiesuodating2 = function () {
        Gamesound.Soundkongzhi().anniuyinxiao();
        var jiesuofeiyong = Gerenshuxing.zhuozijiesuobiao;
        for (var i = 0; i < jiesuofeiyong.length; i++) {
            if (jiesuofeiyong[i].id == "2") {
                this.jiesuo2 = jiesuofeiyong[i].activateprice;
                break;
            }
        }
        this.tishijiemian = new Tongyongquerenkuang();
        Gameguanli.Kongzhitai().zhujiemiandingbu.addChild(this.tishijiemian);
        this.tishijiemian.but_queding0.enabled = true;
        this.tishijiemian.but_queding0.alpha = 1;
        this.tishijiemian.but_queding.enabled = false;
        this.tishijiemian.but_queding.alpha = 0;
        this.tishijiemian.but_shuangbei.enabled = false;
        this.tishijiemian.but_shuangbei.alpha = 0;
        this.tishijiemian.jiangli2.text = "- " + this.jiesuo2;
        this.tishijiemian.jiangli1.text = "";
        this.tishijiemian.jiangliicon1.source = "";
        this.tishijiemian.jiangliicon2.source = "img_qian_png";
        this.tishijiemian.tishiwenzi.text = "装修饭店的火锅区域，需消耗钱币：" + this.jiesuo2 + "。\n装修后，您的饭店可增加[火锅]菜品。";
        this.tishijiemian.but_queding0.addEventListener(egret.TouchEvent.TOUCH_TAP, this.jiesuofandian2, this);
    };
    Zhujiemian.prototype.jiesuodating3 = function () {
        Gamesound.Soundkongzhi().anniuyinxiao();
        var jiesuofeiyong = Gerenshuxing.zhuozijiesuobiao;
        for (var i = 0; i < jiesuofeiyong.length; i++) {
            if (jiesuofeiyong[i].id == "3") {
                this.jiesuo3 = jiesuofeiyong[i].activateprice;
                break;
            }
        }
        this.tishijiemian = new Tongyongquerenkuang();
        Gameguanli.Kongzhitai().zhujiemiandingbu.addChild(this.tishijiemian);
        this.tishijiemian.but_queding0.enabled = true;
        this.tishijiemian.but_queding0.alpha = 1;
        this.tishijiemian.but_queding.enabled = false;
        this.tishijiemian.but_queding.alpha = 0;
        this.tishijiemian.but_shuangbei.enabled = false;
        this.tishijiemian.but_shuangbei.alpha = 0;
        this.tishijiemian.jiangli2.text = "- " + this.jiesuo3;
        this.tishijiemian.jiangli1.text = "";
        this.tishijiemian.jiangliicon1.source = "";
        this.tishijiemian.jiangliicon2.source = "img_qian_png";
        this.tishijiemian.tishiwenzi.text = "装修饭店的小吃区域，需消耗钱币：" + this.jiesuo3 + "。\n装修后，您的饭店可增加[小吃]菜品。";
        this.tishijiemian.but_queding0.addEventListener(egret.TouchEvent.TOUCH_TAP, this.jiesuofandian3, this);
    };
    Zhujiemian.prototype.jiesuodating4 = function () {
        Gamesound.Soundkongzhi().anniuyinxiao();
        var jiesuofeiyong = Gerenshuxing.zhuozijiesuobiao;
        for (var i = 0; i < jiesuofeiyong.length; i++) {
            if (jiesuofeiyong[i].id == "4") {
                this.jiesuo4 = jiesuofeiyong[i].activateprice;
                break;
            }
        }
        this.tishijiemian = new Tongyongquerenkuang();
        Gameguanli.Kongzhitai().zhujiemiandingbu.addChild(this.tishijiemian);
        this.tishijiemian.but_queding0.enabled = true;
        this.tishijiemian.but_queding0.alpha = 1;
        this.tishijiemian.but_queding.enabled = false;
        this.tishijiemian.but_queding.alpha = 0;
        this.tishijiemian.but_shuangbei.enabled = false;
        this.tishijiemian.but_shuangbei.alpha = 0;
        this.tishijiemian.jiangli2.text = "- " + this.jiesuo4;
        this.tishijiemian.jiangli1.text = "";
        this.tishijiemian.jiangliicon1.source = "";
        this.tishijiemian.jiangliicon2.source = "img_qian_png";
        this.tishijiemian.tishiwenzi.text = "装修饭店的早餐区域，需消耗钱币：" + this.jiesuo4 + "。\n装修后，您的饭店可增加[早餐]菜品。";
        this.tishijiemian.but_queding0.addEventListener(egret.TouchEvent.TOUCH_TAP, this.jiesuofandian4, this);
    };
    Zhujiemian.prototype.jiesuofandian1 = function () {
        Gamesound.Soundkongzhi().anniuyinxiao();
        Gameguanli.Kongzhitai().zhujiemiandingbu.removeChild(this.tishijiemian);
        if (Gerenshuxing.jinbizhi >= parseInt(this.jiesuo1)) {
            Weblianjie.fasongshuju("code:006", "{" + '"jiesuoid"' + ":" + '"1"' + "," + '"uid"' + ":" + '"' + Gerenshuxing.uid + '"' + "}");
        }
        else {
            Gameguanli.Kongzhitai().cuowutishixinxi("很遗憾，您拥有的钱币不足，无法支付装修款");
        }
    };
    Zhujiemian.prototype.jiesuofandian2 = function () {
        Gamesound.Soundkongzhi().anniuyinxiao();
        Gameguanli.Kongzhitai().zhujiemiandingbu.removeChild(this.tishijiemian);
        if (Gerenshuxing.jinbizhi >= parseInt(this.jiesuo2)) {
            Weblianjie.fasongshuju("code:006", "{" + '"jiesuoid"' + ":" + '"2"' + "," + '"uid"' + ":" + '"' + Gerenshuxing.uid + '"' + "}");
        }
        else {
            Gameguanli.Kongzhitai().cuowutishixinxi("很遗憾，您拥有的钱币不足，无法支付装修款");
        }
    };
    Zhujiemian.prototype.jiesuofandian3 = function () {
        Gamesound.Soundkongzhi().anniuyinxiao();
        Gameguanli.Kongzhitai().zhujiemiandingbu.removeChild(this.tishijiemian);
        if (Gerenshuxing.jinbizhi >= parseInt(this.jiesuo3)) {
            Weblianjie.fasongshuju("code:006", "{" + '"jiesuoid"' + ":" + '"3"' + "," + '"uid"' + ":" + '"' + Gerenshuxing.uid + '"' + "}");
        }
        else {
            Gameguanli.Kongzhitai().cuowutishixinxi("很遗憾，您拥有的钱币不足，无法支付装修款");
        }
    };
    Zhujiemian.prototype.jiesuofandian4 = function () {
        Gamesound.Soundkongzhi().anniuyinxiao();
        Gameguanli.Kongzhitai().zhujiemiandingbu.removeChild(this.tishijiemian);
        if (Gerenshuxing.jinbizhi >= parseInt(this.jiesuo4)) {
            Weblianjie.fasongshuju("code:006", "{" + '"jiesuoid"' + ":" + '"4"' + "," + '"uid"' + ":" + '"' + Gerenshuxing.uid + '"' + "}");
        }
        else {
            Gameguanli.Kongzhitai().cuowutishixinxi("很遗憾，您拥有的钱币不足，无法支付装修款");
        }
    };
    Zhujiemian.prototype.lajianniuchushi = function () {
        if (this.but_laji0.enabled == true) {
            this.but_laji0.addEventListener(egret.TouchEvent.TOUCH_MOVE, this.laji0, this);
        }
        if (this.but_laji1.enabled == true) {
            this.but_laji1.addEventListener(egret.TouchEvent.TOUCH_MOVE, this.laji1, this);
        }
        if (this.but_laji2.enabled == true) {
            this.but_laji2.addEventListener(egret.TouchEvent.TOUCH_MOVE, this.laji2, this);
        }
        if (this.but_laji3.enabled == true) {
            this.but_laji3.addEventListener(egret.TouchEvent.TOUCH_MOVE, this.laji3, this);
        }
        if (this.but_laji4.enabled == true) {
            this.but_laji4.addEventListener(egret.TouchEvent.TOUCH_MOVE, this.laji4, this);
        }
        if (this.but_laji5.enabled == true) {
            this.but_laji5.addEventListener(egret.TouchEvent.TOUCH_MOVE, this.laji5, this);
        }
        if (this.but_laji6.enabled == true) {
            this.but_laji6.addEventListener(egret.TouchEvent.TOUCH_MOVE, this.laji6, this);
        }
        if (this.but_laji7.enabled == true) {
            this.but_laji7.addEventListener(egret.TouchEvent.TOUCH_MOVE, this.laji7, this);
        }
        if (this.but_laji8.enabled == true) {
            this.but_laji8.addEventListener(egret.TouchEvent.TOUCH_MOVE, this.laji8, this);
        }
        if (this.but_laji9.enabled == true) {
            this.but_laji9.addEventListener(egret.TouchEvent.TOUCH_MOVE, this.laji9, this);
        }
        if (this.but_laji10.enabled == true) {
            this.but_laji10.addEventListener(egret.TouchEvent.TOUCH_MOVE, this.laji10, this);
        }
        if (this.but_laji11.enabled == true) {
            this.but_laji11.addEventListener(egret.TouchEvent.TOUCH_MOVE, this.laji11, this);
        }
        if (this.but_laji12.enabled == true) {
            this.but_laji12.addEventListener(egret.TouchEvent.TOUCH_MOVE, this.laji12, this);
        }
        if (this.but_laji13.enabled == true) {
            this.but_laji13.addEventListener(egret.TouchEvent.TOUCH_MOVE, this.laji13, this);
        }
        if (this.but_laji14.enabled == true) {
            this.but_laji14.addEventListener(egret.TouchEvent.TOUCH_MOVE, this.laji14, this);
        }
        if (this.but_laji15.enabled == true) {
            this.but_laji15.addEventListener(egret.TouchEvent.TOUCH_MOVE, this.laji15, this);
        }
        if (this.but_laji16.enabled == true) {
            this.but_laji16.addEventListener(egret.TouchEvent.TOUCH_MOVE, this.laji16, this);
        }
        if (this.but_laji17.enabled == true) {
            this.but_laji17.addEventListener(egret.TouchEvent.TOUCH_MOVE, this.laji17, this);
        }
        if (this.but_laji18.enabled == true) {
            this.but_laji18.addEventListener(egret.TouchEvent.TOUCH_MOVE, this.laji18, this);
        }
        if (this.but_laji19.enabled == true) {
            this.but_laji19.addEventListener(egret.TouchEvent.TOUCH_MOVE, this.laji19, this);
        }
        if (this.but_laji20.enabled == true) {
            this.but_laji20.addEventListener(egret.TouchEvent.TOUCH_MOVE, this.laji20, this);
        }
        if (this.but_laji21.enabled == true) {
            this.but_laji21.addEventListener(egret.TouchEvent.TOUCH_MOVE, this.laji21, this);
        }
        if (this.but_laji22.enabled == true) {
            this.but_laji22.addEventListener(egret.TouchEvent.TOUCH_MOVE, this.laji22, this);
        }
        if (this.but_laji23.enabled == true) {
            this.but_laji23.addEventListener(egret.TouchEvent.TOUCH_MOVE, this.laji23, this);
        }
        if (this.but_laji24.enabled == true) {
            this.but_laji24.addEventListener(egret.TouchEvent.TOUCH_MOVE, this.laji24, this);
        }
        /*this.but_laji1.addEventListener(egret.TouchEvent.TOUCH_MOVE,this.laji1,this);
        this.but_laji2.addEventListener(egret.TouchEvent.TOUCH_MOVE,this.laji2,this);
        this.but_laji3.addEventListener(egret.TouchEvent.TOUCH_MOVE,this.laji3,this);
        this.but_laji4.addEventListener(egret.TouchEvent.TOUCH_MOVE,this.laji4,this);
        this.but_laji5.addEventListener(egret.TouchEvent.TOUCH_MOVE,this.laji5,this);
        this.but_laji6.addEventListener(egret.TouchEvent.TOUCH_MOVE,this.laji6,this);
        this.but_laji7.addEventListener(egret.TouchEvent.TOUCH_MOVE,this.laji7,this);
        this.but_laji8.addEventListener(egret.TouchEvent.TOUCH_MOVE,this.laji8,this);
        this.but_laji9.addEventListener(egret.TouchEvent.TOUCH_MOVE,this.laji9,this);
        this.but_laji10.addEventListener(egret.TouchEvent.TOUCH_MOVE,this.laji10,this);
        this.but_laji11.addEventListener(egret.TouchEvent.TOUCH_MOVE,this.laji11,this);
        this.but_laji12.addEventListener(egret.TouchEvent.TOUCH_MOVE,this.laji12,this);
        this.but_laji13.addEventListener(egret.TouchEvent.TOUCH_MOVE,this.laji13,this);
        this.but_laji14.addEventListener(egret.TouchEvent.TOUCH_MOVE,this.laji14,this);
        this.but_laji15.addEventListener(egret.TouchEvent.TOUCH_MOVE,this.laji15,this);
        this.but_laji16.addEventListener(egret.TouchEvent.TOUCH_MOVE,this.laji16,this);
        this.but_laji17.addEventListener(egret.TouchEvent.TOUCH_MOVE,this.laji17,this);
        this.but_laji18.addEventListener(egret.TouchEvent.TOUCH_MOVE,this.laji18,this);
        this.but_laji19.addEventListener(egret.TouchEvent.TOUCH_MOVE,this.laji19,this);
        this.but_laji20.addEventListener(egret.TouchEvent.TOUCH_MOVE,this.laji20,this);
        this.but_laji21.addEventListener(egret.TouchEvent.TOUCH_MOVE,this.laji21,this);
        this.but_laji22.addEventListener(egret.TouchEvent.TOUCH_MOVE,this.laji22,this);
        this.but_laji23.addEventListener(egret.TouchEvent.TOUCH_MOVE,this.laji23,this);
        this.but_laji24.addEventListener(egret.TouchEvent.TOUCH_MOVE,this.laji24,this);*/
    };
    Zhujiemian.prototype.laji0 = function () {
        /*let shouzhihuadong:Huaxianbiaoxian = new Huaxianbiaoxian();
        shouzhihuadong.setTouchArea(this.stage);
        shouzhihuadong.enable();*/
        this.dangqianX = this.but_laji0.x;
        this.dangqianY = this.but_laji0.y;
        var lajidonghua0 = new Dasaodonghua(this.dangqianX, this.dangqianY);
        Chuangzaolaji.cunzailaji[0] = 1;
        this.but_laji0.alpha = 0;
        this.but_laji0.enabled = false;
        this.but_laji0.removeEventListener(egret.TouchEvent.TOUCH_MOVE, this.laji0, this);
        Gerenshuxing.dangqiankesaoweisheng -= 1;
        Gerenshuxing.yuangongshuxing();
        Weishenqipao.weishengbiangeng("+ 1");
        Gameguanli.Kongzhitai().zhujiemiandingbu.chushihua();
    };
    Zhujiemian.prototype.laji1 = function () {
        /*let shouzhihuadong:Huaxianbiaoxian = new Huaxianbiaoxian();
        shouzhihuadong.setTouchArea(this.stage);
        shouzhihuadong.enable();*/
        this.dangqianX = this.but_laji1.x;
        this.dangqianY = this.but_laji1.y;
        var lajidonghua1 = new Dasaodonghua(this.dangqianX, this.dangqianY);
        Chuangzaolaji.cunzailaji[1] = 1;
        this.but_laji1.alpha = 0;
        this.but_laji1.enabled = false;
        this.but_laji1.removeEventListener(egret.TouchEvent.TOUCH_MOVE, this.laji1, this);
        Gerenshuxing.dangqiankesaoweisheng -= 1;
        Gerenshuxing.yuangongshuxing();
        Weishenqipao.weishengbiangeng("+ 1");
        Gameguanli.Kongzhitai().zhujiemiandingbu.chushihua();
    };
    Zhujiemian.prototype.laji2 = function () {
        /*let shouzhihuadong:Huaxianbiaoxian = new Huaxianbiaoxian();
        shouzhihuadong.setTouchArea(this.stage);
        shouzhihuadong.enable();*/
        this.dangqianX = this.but_laji2.x;
        this.dangqianY = this.but_laji2.y;
        var lajidonghua2 = new Dasaodonghua(this.dangqianX, this.dangqianY);
        Chuangzaolaji.cunzailaji[2] = 1;
        this.but_laji2.alpha = 0;
        this.but_laji2.enabled = false;
        this.but_laji2.removeEventListener(egret.TouchEvent.TOUCH_MOVE, this.laji2, this);
        Gerenshuxing.dangqiankesaoweisheng -= 1;
        Gerenshuxing.yuangongshuxing();
        Weishenqipao.weishengbiangeng("+ 1");
        Gameguanli.Kongzhitai().zhujiemiandingbu.chushihua();
    };
    Zhujiemian.prototype.laji3 = function () {
        /*let shouzhihuadong:Huaxianbiaoxian = new Huaxianbiaoxian();
        shouzhihuadong.setTouchArea(this.stage);
        shouzhihuadong.enable();*/
        this.dangqianX = this.but_laji3.x;
        this.dangqianY = this.but_laji3.y;
        var lajidonghua3 = new Dasaodonghua(this.dangqianX, this.dangqianY);
        Chuangzaolaji.cunzailaji[3] = 1;
        this.but_laji3.alpha = 0;
        this.but_laji3.enabled = false;
        this.but_laji3.removeEventListener(egret.TouchEvent.TOUCH_MOVE, this.laji3, this);
        Gerenshuxing.dangqiankesaoweisheng -= 1;
        Gerenshuxing.yuangongshuxing();
        Weishenqipao.weishengbiangeng("+ 1");
        Gameguanli.Kongzhitai().zhujiemiandingbu.chushihua();
    };
    Zhujiemian.prototype.laji4 = function () {
        /*let shouzhihuadong:Huaxianbiaoxian = new Huaxianbiaoxian();
        shouzhihuadong.setTouchArea(this.stage);
        shouzhihuadong.enable();*/
        this.dangqianX = this.but_laji4.x;
        this.dangqianY = this.but_laji4.y;
        var lajidonghua4 = new Dasaodonghua(this.dangqianX, this.dangqianY);
        Chuangzaolaji.cunzailaji[4] = 1;
        this.but_laji4.alpha = 0;
        this.but_laji4.enabled = false;
        this.but_laji4.removeEventListener(egret.TouchEvent.TOUCH_MOVE, this.laji4, this);
        Gerenshuxing.dangqiankesaoweisheng -= 1;
        Gerenshuxing.yuangongshuxing();
        Weishenqipao.weishengbiangeng("+ 1");
        Gameguanli.Kongzhitai().zhujiemiandingbu.chushihua();
    };
    Zhujiemian.prototype.laji5 = function () {
        /*let shouzhihuadong:Huaxianbiaoxian = new Huaxianbiaoxian();
        shouzhihuadong.setTouchArea(this.stage);
        shouzhihuadong.enable();*/
        this.dangqianX = this.but_laji5.x;
        this.dangqianY = this.but_laji5.y;
        var lajidonghua5 = new Dasaodonghua(this.dangqianX, this.dangqianY);
        Chuangzaolaji.cunzailaji[5] = 1;
        this.but_laji5.alpha = 0;
        this.but_laji5.enabled = false;
        this.but_laji5.removeEventListener(egret.TouchEvent.TOUCH_MOVE, this.laji5, this);
        Gerenshuxing.dangqiankesaoweisheng -= 1;
        Gerenshuxing.yuangongshuxing();
        Weishenqipao.weishengbiangeng("+ 1");
        Gameguanli.Kongzhitai().zhujiemiandingbu.chushihua();
    };
    Zhujiemian.prototype.laji6 = function () {
        /*let shouzhihuadong:Huaxianbiaoxian = new Huaxianbiaoxian();
        shouzhihuadong.setTouchArea(this.stage);
        shouzhihuadong.enable();*/
        this.dangqianX = this.but_laji6.x;
        this.dangqianY = this.but_laji6.y;
        var lajidonghua6 = new Dasaodonghua(this.dangqianX, this.dangqianY);
        Chuangzaolaji.cunzailaji[6] = 1;
        this.but_laji6.alpha = 0;
        this.but_laji6.enabled = false;
        this.but_laji6.removeEventListener(egret.TouchEvent.TOUCH_MOVE, this.laji6, this);
        Gerenshuxing.dangqiankesaoweisheng -= 1;
        Gerenshuxing.yuangongshuxing();
        Weishenqipao.weishengbiangeng("+ 1");
        Gameguanli.Kongzhitai().zhujiemiandingbu.chushihua();
    };
    Zhujiemian.prototype.laji7 = function () {
        /*let shouzhihuadong:Huaxianbiaoxian = new Huaxianbiaoxian();
        shouzhihuadong.setTouchArea(this.stage);
        shouzhihuadong.enable();*/
        this.dangqianX = this.but_laji7.x;
        this.dangqianY = this.but_laji7.y;
        var lajidonghua7 = new Dasaodonghua(this.dangqianX, this.dangqianY);
        Chuangzaolaji.cunzailaji[7] = 1;
        this.but_laji7.alpha = 0;
        this.but_laji7.enabled = false;
        this.but_laji7.removeEventListener(egret.TouchEvent.TOUCH_MOVE, this.laji7, this);
        Gerenshuxing.dangqiankesaoweisheng -= 1;
        Gerenshuxing.yuangongshuxing();
        Weishenqipao.weishengbiangeng("+ 1");
        Gameguanli.Kongzhitai().zhujiemiandingbu.chushihua();
    };
    Zhujiemian.prototype.laji8 = function () {
        /*let shouzhihuadong:Huaxianbiaoxian = new Huaxianbiaoxian();
        shouzhihuadong.setTouchArea(this.stage);
        shouzhihuadong.enable();*/
        this.dangqianX = this.but_laji8.x;
        this.dangqianY = this.but_laji8.y;
        var lajidonghua8 = new Dasaodonghua(this.dangqianX, this.dangqianY);
        Chuangzaolaji.cunzailaji[8] = 1;
        this.but_laji8.alpha = 0;
        this.but_laji8.enabled = false;
        this.but_laji8.removeEventListener(egret.TouchEvent.TOUCH_MOVE, this.laji8, this);
        Gerenshuxing.dangqiankesaoweisheng -= 1;
        Gerenshuxing.yuangongshuxing();
        Weishenqipao.weishengbiangeng("+ 1");
        Gameguanli.Kongzhitai().zhujiemiandingbu.chushihua();
    };
    Zhujiemian.prototype.laji9 = function () {
        /*let shouzhihuadong:Huaxianbiaoxian = new Huaxianbiaoxian();
        shouzhihuadong.setTouchArea(this.stage);
        shouzhihuadong.enable();*/
        this.dangqianX = this.but_laji9.x;
        this.dangqianY = this.but_laji9.y;
        var lajidonghua9 = new Dasaodonghua(this.dangqianX, this.dangqianY);
        Chuangzaolaji.cunzailaji[9] = 1;
        this.but_laji9.alpha = 0;
        this.but_laji9.enabled = false;
        this.but_laji9.removeEventListener(egret.TouchEvent.TOUCH_MOVE, this.laji9, this);
        Gerenshuxing.dangqiankesaoweisheng -= 1;
        Gerenshuxing.yuangongshuxing();
        Weishenqipao.weishengbiangeng("+ 1");
        Gameguanli.Kongzhitai().zhujiemiandingbu.chushihua();
    };
    Zhujiemian.prototype.laji10 = function () {
        /*let shouzhihuadong:Huaxianbiaoxian = new Huaxianbiaoxian();
        shouzhihuadong.setTouchArea(this.stage);
        shouzhihuadong.enable();*/
        this.dangqianX = this.but_laji10.x;
        this.dangqianY = this.but_laji10.y;
        var lajidonghua10 = new Dasaodonghua(this.dangqianX, this.dangqianY);
        Chuangzaolaji.cunzailaji[10] = 1;
        this.but_laji10.alpha = 0;
        this.but_laji10.enabled = false;
        this.but_laji10.removeEventListener(egret.TouchEvent.TOUCH_MOVE, this.laji10, this);
        Gerenshuxing.dangqiankesaoweisheng -= 1;
        Gerenshuxing.yuangongshuxing();
        Weishenqipao.weishengbiangeng("+ 1");
        Gameguanli.Kongzhitai().zhujiemiandingbu.chushihua();
    };
    Zhujiemian.prototype.laji11 = function () {
        /*let shouzhihuadong:Huaxianbiaoxian = new Huaxianbiaoxian();
        shouzhihuadong.setTouchArea(this.stage);
        shouzhihuadong.enable();*/
        this.dangqianX = this.but_laji11.x;
        this.dangqianY = this.but_laji11.y;
        var lajidonghua11 = new Dasaodonghua(this.dangqianX, this.dangqianY);
        Chuangzaolaji.cunzailaji[11] = 1;
        this.but_laji11.alpha = 0;
        this.but_laji11.enabled = false;
        this.but_laji11.removeEventListener(egret.TouchEvent.TOUCH_MOVE, this.laji11, this);
        Gerenshuxing.dangqiankesaoweisheng -= 1;
        Gerenshuxing.yuangongshuxing();
        Weishenqipao.weishengbiangeng("+ 1");
        Gameguanli.Kongzhitai().zhujiemiandingbu.chushihua();
    };
    Zhujiemian.prototype.laji12 = function () {
        /*let shouzhihuadong:Huaxianbiaoxian = new Huaxianbiaoxian();
        shouzhihuadong.setTouchArea(this.stage);
        shouzhihuadong.enable();*/
        this.dangqianX = this.but_laji12.x;
        this.dangqianY = this.but_laji12.y;
        var lajidonghua12 = new Dasaodonghua(this.dangqianX, this.dangqianY);
        Chuangzaolaji.cunzailaji[12] = 1;
        this.but_laji12.alpha = 0;
        this.but_laji12.enabled = false;
        this.but_laji12.removeEventListener(egret.TouchEvent.TOUCH_MOVE, this.laji12, this);
        Gerenshuxing.dangqiankesaoweisheng -= 1;
        Gerenshuxing.yuangongshuxing();
        Weishenqipao.weishengbiangeng("+ 1");
        Gameguanli.Kongzhitai().zhujiemiandingbu.chushihua();
    };
    Zhujiemian.prototype.laji13 = function () {
        /*let shouzhihuadong:Huaxianbiaoxian = new Huaxianbiaoxian();
        shouzhihuadong.setTouchArea(this.stage);
        shouzhihuadong.enable();*/
        this.dangqianX = this.but_laji13.x;
        this.dangqianY = this.but_laji13.y;
        var lajidonghua13 = new Dasaodonghua(this.dangqianX, this.dangqianY);
        Chuangzaolaji.cunzailaji[13] = 1;
        this.but_laji13.alpha = 0;
        this.but_laji13.enabled = false;
        this.but_laji13.removeEventListener(egret.TouchEvent.TOUCH_MOVE, this.laji13, this);
        Gerenshuxing.dangqiankesaoweisheng -= 1;
        Gerenshuxing.yuangongshuxing();
        Weishenqipao.weishengbiangeng("+ 1");
        Gameguanli.Kongzhitai().zhujiemiandingbu.chushihua();
    };
    Zhujiemian.prototype.laji14 = function () {
        /*let shouzhihuadong:Huaxianbiaoxian = new Huaxianbiaoxian();
        shouzhihuadong.setTouchArea(this.stage);
        shouzhihuadong.enable();*/
        this.dangqianX = this.but_laji14.x;
        this.dangqianY = this.but_laji14.y;
        var lajidonghua14 = new Dasaodonghua(this.dangqianX, this.dangqianY);
        Chuangzaolaji.cunzailaji[14] = 1;
        this.but_laji14.alpha = 0;
        this.but_laji14.enabled = false;
        this.but_laji14.removeEventListener(egret.TouchEvent.TOUCH_MOVE, this.laji14, this);
        Gerenshuxing.dangqiankesaoweisheng -= 1;
        Gerenshuxing.yuangongshuxing();
        Weishenqipao.weishengbiangeng("+ 1");
        Gameguanli.Kongzhitai().zhujiemiandingbu.chushihua();
    };
    Zhujiemian.prototype.laji15 = function () {
        /*let shouzhihuadong:Huaxianbiaoxian = new Huaxianbiaoxian();
        shouzhihuadong.setTouchArea(this.stage);
        shouzhihuadong.enable();*/
        this.dangqianX = this.but_laji15.x;
        this.dangqianY = this.but_laji15.y;
        var lajidonghua15 = new Dasaodonghua(this.dangqianX, this.dangqianY);
        Chuangzaolaji.cunzailaji[15] = 1;
        this.but_laji15.alpha = 0;
        this.but_laji15.enabled = false;
        this.but_laji15.removeEventListener(egret.TouchEvent.TOUCH_MOVE, this.laji15, this);
        Gerenshuxing.dangqiankesaoweisheng -= 1;
        Gerenshuxing.yuangongshuxing();
        Weishenqipao.weishengbiangeng("+ 1");
        Gameguanli.Kongzhitai().zhujiemiandingbu.chushihua();
    };
    Zhujiemian.prototype.laji16 = function () {
        /*let shouzhihuadong:Huaxianbiaoxian = new Huaxianbiaoxian();
        shouzhihuadong.setTouchArea(this.stage);
        shouzhihuadong.enable();*/
        this.dangqianX = this.but_laji16.x;
        this.dangqianY = this.but_laji16.y;
        var lajidonghua16 = new Dasaodonghua(this.dangqianX, this.dangqianY);
        Chuangzaolaji.cunzailaji[16] = 1;
        this.but_laji16.alpha = 0;
        this.but_laji16.enabled = false;
        this.but_laji16.removeEventListener(egret.TouchEvent.TOUCH_MOVE, this.laji16, this);
        Gerenshuxing.dangqiankesaoweisheng -= 1;
        Gerenshuxing.yuangongshuxing();
        Weishenqipao.weishengbiangeng("+ 1");
        Gameguanli.Kongzhitai().zhujiemiandingbu.chushihua();
    };
    Zhujiemian.prototype.laji17 = function () {
        /*let shouzhihuadong:Huaxianbiaoxian = new Huaxianbiaoxian();
        shouzhihuadong.setTouchArea(this.stage);
        shouzhihuadong.enable();*/
        this.dangqianX = this.but_laji17.x;
        this.dangqianY = this.but_laji17.y;
        var lajidonghua17 = new Dasaodonghua(this.dangqianX, this.dangqianY);
        Chuangzaolaji.cunzailaji[17] = 1;
        this.but_laji17.alpha = 0;
        this.but_laji17.enabled = false;
        this.but_laji17.removeEventListener(egret.TouchEvent.TOUCH_MOVE, this.laji17, this);
        Gerenshuxing.dangqiankesaoweisheng -= 1;
        Gerenshuxing.yuangongshuxing();
        Weishenqipao.weishengbiangeng("+ 1");
        Gameguanli.Kongzhitai().zhujiemiandingbu.chushihua();
    };
    Zhujiemian.prototype.laji18 = function () {
        /*let shouzhihuadong:Huaxianbiaoxian = new Huaxianbiaoxian();
        shouzhihuadong.setTouchArea(this.stage);
        shouzhihuadong.enable();*/
        this.dangqianX = this.but_laji18.x;
        this.dangqianY = this.but_laji18.y;
        var lajidonghua18 = new Dasaodonghua(this.dangqianX, this.dangqianY);
        Chuangzaolaji.cunzailaji[18] = 1;
        this.but_laji18.alpha = 0;
        this.but_laji18.enabled = false;
        this.but_laji18.removeEventListener(egret.TouchEvent.TOUCH_MOVE, this.laji18, this);
        Gerenshuxing.dangqiankesaoweisheng -= 1;
        Gerenshuxing.yuangongshuxing();
        Weishenqipao.weishengbiangeng("+ 1");
        Gameguanli.Kongzhitai().zhujiemiandingbu.chushihua();
    };
    Zhujiemian.prototype.laji19 = function () {
        /*let shouzhihuadong:Huaxianbiaoxian = new Huaxianbiaoxian();
        shouzhihuadong.setTouchArea(this.stage);
        shouzhihuadong.enable();*/
        this.dangqianX = this.but_laji19.x;
        this.dangqianY = this.but_laji19.y;
        var lajidonghua19 = new Dasaodonghua(this.dangqianX, this.dangqianY);
        Chuangzaolaji.cunzailaji[19] = 1;
        this.but_laji19.alpha = 0;
        this.but_laji19.enabled = false;
        this.but_laji19.removeEventListener(egret.TouchEvent.TOUCH_MOVE, this.laji19, this);
        Gerenshuxing.dangqiankesaoweisheng -= 1;
        Gerenshuxing.yuangongshuxing();
        Weishenqipao.weishengbiangeng("+ 1");
        Gameguanli.Kongzhitai().zhujiemiandingbu.chushihua();
    };
    Zhujiemian.prototype.laji20 = function () {
        /*let shouzhihuadong:Huaxianbiaoxian = new Huaxianbiaoxian();
        shouzhihuadong.setTouchArea(this.stage);
        shouzhihuadong.enable();*/
        this.dangqianX = this.but_laji20.x;
        this.dangqianY = this.but_laji20.y;
        var lajidonghua20 = new Dasaodonghua(this.dangqianX, this.dangqianY);
        Chuangzaolaji.cunzailaji[20] = 1;
        this.but_laji20.alpha = 0;
        this.but_laji20.enabled = false;
        this.but_laji20.removeEventListener(egret.TouchEvent.TOUCH_MOVE, this.laji20, this);
        Gerenshuxing.dangqiankesaoweisheng -= 1;
        Gerenshuxing.yuangongshuxing();
        Weishenqipao.weishengbiangeng("+ 1");
        Gameguanli.Kongzhitai().zhujiemiandingbu.chushihua();
    };
    Zhujiemian.prototype.laji21 = function () {
        /*let shouzhihuadong:Huaxianbiaoxian = new Huaxianbiaoxian();
        shouzhihuadong.setTouchArea(this.stage);
        shouzhihuadong.enable();*/
        this.dangqianX = this.but_laji21.x;
        this.dangqianY = this.but_laji21.y;
        var lajidonghua21 = new Dasaodonghua(this.dangqianX, this.dangqianY);
        Chuangzaolaji.cunzailaji[21] = 1;
        this.but_laji21.alpha = 0;
        this.but_laji21.enabled = false;
        this.but_laji21.removeEventListener(egret.TouchEvent.TOUCH_MOVE, this.laji21, this);
        Gerenshuxing.dangqiankesaoweisheng -= 1;
        Gerenshuxing.yuangongshuxing();
        Weishenqipao.weishengbiangeng("+ 1");
        Gameguanli.Kongzhitai().zhujiemiandingbu.chushihua();
    };
    Zhujiemian.prototype.laji22 = function () {
        /*let shouzhihuadong:Huaxianbiaoxian = new Huaxianbiaoxian();
        shouzhihuadong.setTouchArea(this.stage);
        shouzhihuadong.enable();*/
        this.dangqianX = this.but_laji22.x;
        this.dangqianY = this.but_laji22.y;
        var lajidonghua22 = new Dasaodonghua(this.dangqianX, this.dangqianY);
        Chuangzaolaji.cunzailaji[22] = 1;
        this.but_laji22.alpha = 0;
        this.but_laji22.enabled = false;
        this.but_laji22.removeEventListener(egret.TouchEvent.TOUCH_MOVE, this.laji22, this);
        Gerenshuxing.dangqiankesaoweisheng -= 1;
        Gerenshuxing.yuangongshuxing();
        Weishenqipao.weishengbiangeng("+ 1");
        Gameguanli.Kongzhitai().zhujiemiandingbu.chushihua();
    };
    Zhujiemian.prototype.laji23 = function () {
        /*let shouzhihuadong:Huaxianbiaoxian = new Huaxianbiaoxian();
        shouzhihuadong.setTouchArea(this.stage);
        shouzhihuadong.enable();*/
        this.dangqianX = this.but_laji23.x;
        this.dangqianY = this.but_laji23.y;
        var lajidonghua23 = new Dasaodonghua(this.dangqianX, this.dangqianY);
        Chuangzaolaji.cunzailaji[23] = 1;
        this.but_laji23.alpha = 0;
        this.but_laji23.enabled = false;
        this.but_laji23.removeEventListener(egret.TouchEvent.TOUCH_MOVE, this.laji23, this);
        Gerenshuxing.dangqiankesaoweisheng -= 1;
        Gerenshuxing.yuangongshuxing();
        Weishenqipao.weishengbiangeng("+ 1");
        Gameguanli.Kongzhitai().zhujiemiandingbu.chushihua();
    };
    Zhujiemian.prototype.laji24 = function () {
        /*let shouzhihuadong:Huaxianbiaoxian = new Huaxianbiaoxian();
        shouzhihuadong.setTouchArea(this.stage);
        shouzhihuadong.enable();*/
        this.dangqianX = this.but_laji24.x;
        this.dangqianY = this.but_laji24.y;
        var lajidonghua24 = new Dasaodonghua(this.dangqianX, this.dangqianY);
        Chuangzaolaji.cunzailaji[24] = 1;
        this.but_laji24.alpha = 0;
        this.but_laji24.enabled = false;
        this.but_laji24.removeEventListener(egret.TouchEvent.TOUCH_MOVE, this.laji24, this);
        Gerenshuxing.dangqiankesaoweisheng -= 1;
        Gerenshuxing.yuangongshuxing();
        Weishenqipao.weishengbiangeng("+ 1");
        Gameguanli.Kongzhitai().zhujiemiandingbu.chushihua();
    };
    return Zhujiemian;
}(eui.Component));
__reflect(Zhujiemian.prototype, "Zhujiemian", ["eui.UIComponent", "egret.DisplayObject"]);
