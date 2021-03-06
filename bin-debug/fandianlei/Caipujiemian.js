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
var Caipujiemian = (function (_super) {
    __extends(Caipujiemian, _super);
    function Caipujiemian() {
        var _this = _super.call(this) || this;
        _this.xiaoChicaipin = new Caipucaiping();
        _this.caiPingjieshao = new Caipinjieshaojiemian();
        return _this;
    }
    Caipujiemian.prototype.partAdded = function (partName, instance) {
        _super.prototype.partAdded.call(this, partName, instance);
    };
    Caipujiemian.prototype.childrenCreated = function () {
        _super.prototype.childrenCreated.call(this);
        this.jiemiandianjirukou();
        //		this.chulishujujiegou();
        //		this.addChild(this.xiaoChicaipin);
    };
    //界面逻辑的处理
    Caipujiemian.prototype.jiemiandianjirukou = function () {
        this.chushihuacaipin();
        //点击界面的关闭按钮时触发
        this.but_guanbi.addEventListener(egret.TouchEvent.TOUCH_TAP, this.guanbianniu, this);
        //点击界面的小菜页签按钮时触发
        this.but_peng.addEventListener(egret.TouchEvent.TOUCH_TAP, this.dianjixiaocai, this);
        //点击界面的火锅页签按钮时触发
        this.but_zha.addEventListener(egret.TouchEvent.TOUCH_TAP, this.dianjihuoguo, this);
        //点击界面的小吃页签按钮时触发
        this.but_jian.addEventListener(egret.TouchEvent.TOUCH_TAP, this.dianjixiaochi, this);
        //点击界面的点心页签按钮时触发
        this.but_zhu.addEventListener(egret.TouchEvent.TOUCH_TAP, this.dianjidianxin, this);
        //点击上翻页界面时触发
        this.but_up.addEventListener(egret.TouchEvent.TOUCH_TAP, this.dianjishangfanye, this);
        //点击下翻页界面时触发
        this.but_down.addEventListener(egret.TouchEvent.TOUCH_TAP, this.dianjixiafanye, this);
        /*//点击菜品1时触发
        if(this.di1caiid){
            this.xiaoChicaipin.caipinicon0.addEventListener(egret.TouchEvent.TOUCH_TAP,this.dianjicai1,this);
        }
        //点击菜品2时触发
        if(this.di2caiid){
            this.xiaoChicaipin.caipinicon1.addEventListener(egret.TouchEvent.TOUCH_TAP,this.dianjicai2,this);
        }
        
        //点击菜品3时触发
        if(this.di3caiid){
            this.xiaoChicaipin.caipinicon2.addEventListener(egret.TouchEvent.TOUCH_TAP,this.dianjicai3,this);
        }
        //点击菜品4时触发
        if(this.di4caiid){
            this.xiaoChicaipin.caipinicon3.addEventListener(egret.TouchEvent.TOUCH_TAP,this.dianjicai4,this);
        }
        //点击菜品5时触发
        if(this.di5caiid){
            this.xiaoChicaipin.caipinicon4.addEventListener(egret.TouchEvent.TOUCH_TAP,this.dianjicai5,this);
        }
        //点击菜品6时触发
        if(this.di6caiid){
            this.xiaoChicaipin.caipinicon5.addEventListener(egret.TouchEvent.TOUCH_TAP,this.dianjicai6,this);
        }*/
        //点击菜品1解锁时触发
        if (this.di1caiid) {
            this.xiaoChicaipin.but_jiesuo0.addEventListener(egret.TouchEvent.TOUCH_TAP, this.dianjicaijiesuo1, this);
        }
        //点击菜品2解锁时触发
        if (this.di2caiid) {
            this.xiaoChicaipin.but_jiesuo1.addEventListener(egret.TouchEvent.TOUCH_TAP, this.dianjicaijiesuo2, this);
        }
        //点击菜品3解锁时触发
        if (this.di3caiid) {
            this.xiaoChicaipin.but_jiesuo2.addEventListener(egret.TouchEvent.TOUCH_TAP, this.dianjicaijiesuo3, this);
        }
        //点击菜品4解锁时触发
        if (this.di4caiid) {
            this.xiaoChicaipin.but_jiesuo3.addEventListener(egret.TouchEvent.TOUCH_TAP, this.dianjicaijiesuo4, this);
        }
        //点击菜品5解锁时触发
        if (this.di5caiid) {
            this.xiaoChicaipin.but_jiesuo4.addEventListener(egret.TouchEvent.TOUCH_TAP, this.dianjicaijiesuo5, this);
        }
        //点击菜品6解锁时触发
        if (this.di6caiid) {
            this.xiaoChicaipin.but_jiesuo5.addEventListener(egret.TouchEvent.TOUCH_TAP, this.dianjicaijiesuo6, this);
        }
    };
    //点击菜品解锁时逻辑处理
    Caipujiemian.prototype.dianjicaijiesuo1 = function () {
        Gamesound.Soundkongzhi().anniuyinxiao();
        Weblianjie.fasongshuju("code:002", "{" + '"caipin"' + ":" + '"' + this.di1caiid + '"' + "," + '"uid"' + ":" + '"' + Gerenshuxing.uid + '"' + "}");
    };
    Caipujiemian.prototype.dianjicaijiesuo2 = function () {
        Gamesound.Soundkongzhi().anniuyinxiao();
        Weblianjie.fasongshuju("code:002", "{" + '"caipin"' + ":" + '"' + this.di2caiid + '"' + "," + '"uid"' + ":" + '"' + Gerenshuxing.uid + '"' + "}");
    };
    Caipujiemian.prototype.dianjicaijiesuo3 = function () {
        Gamesound.Soundkongzhi().anniuyinxiao();
        Weblianjie.fasongshuju("code:002", "{" + '"caipin"' + ":" + '"' + this.di3caiid + '"' + "," + '"uid"' + ":" + '"' + Gerenshuxing.uid + '"' + "}");
    };
    Caipujiemian.prototype.dianjicaijiesuo4 = function () {
        Gamesound.Soundkongzhi().anniuyinxiao();
        Weblianjie.fasongshuju("code:002", "{" + '"caipin"' + ":" + '"' + this.di4caiid + '"' + "," + '"uid"' + ":" + '"' + Gerenshuxing.uid + '"' + "}");
    };
    Caipujiemian.prototype.dianjicaijiesuo5 = function () {
        Gamesound.Soundkongzhi().anniuyinxiao();
        Weblianjie.fasongshuju("code:002", "{" + '"caipin"' + ":" + '"' + this.di5caiid + '"' + "," + '"uid"' + ":" + '"' + Gerenshuxing.uid + '"' + "}");
    };
    Caipujiemian.prototype.dianjicaijiesuo6 = function () {
        Gamesound.Soundkongzhi().anniuyinxiao();
        Weblianjie.fasongshuju("code:002", "{" + '"caipin"' + ":" + '"' + this.di6caiid + '"' + "," + '"uid"' + ":" + '"' + Gerenshuxing.uid + '"' + "}");
    };
    //点击菜品介绍相关界面时处理
    Caipujiemian.prototype.caipinjieshaoluoji = function () {
        this.caiPingjieshao.guanbianniu.addEventListener(egret.TouchEvent.TOUCH_TAP, this.guanbijieshao, this);
    };
    Caipujiemian.prototype.guanbijieshao = function () {
        Gamesound.Soundkongzhi().anniuyinxiao();
        if (this.caiPingjieshao.parent) {
            this.removeChild(this.caiPingjieshao);
        }
    };
    Caipujiemian.prototype.dianjicai1 = function () {
        Gamesound.Soundkongzhi().anniuyinxiao();
        if (this.caiPingjieshao.parent) {
            this.removeChild(this.caiPingjieshao);
        }
        this.addChild(this.caiPingjieshao);
        this.dangqiancaipinid = this.di1caiid;
        this.panduancaiid();
    };
    Caipujiemian.prototype.dianjicai2 = function () {
        Gamesound.Soundkongzhi().anniuyinxiao();
        if (this.caiPingjieshao.parent) {
            this.removeChild(this.caiPingjieshao);
        }
        this.addChild(this.caiPingjieshao);
        this.dangqiancaipinid = this.di2caiid;
        this.panduancaiid();
    };
    Caipujiemian.prototype.dianjicai3 = function () {
        Gamesound.Soundkongzhi().anniuyinxiao();
        if (this.caiPingjieshao.parent) {
            this.removeChild(this.caiPingjieshao);
        }
        this.addChild(this.caiPingjieshao);
        this.dangqiancaipinid = this.di3caiid;
        this.panduancaiid();
    };
    Caipujiemian.prototype.dianjicai4 = function () {
        Gamesound.Soundkongzhi().anniuyinxiao();
        if (this.caiPingjieshao.parent) {
            this.removeChild(this.caiPingjieshao);
        }
        this.addChild(this.caiPingjieshao);
        this.dangqiancaipinid = this.di4caiid;
        this.panduancaiid();
    };
    Caipujiemian.prototype.dianjicai5 = function () {
        Gamesound.Soundkongzhi().anniuyinxiao();
        if (this.caiPingjieshao.parent) {
            this.removeChild(this.caiPingjieshao);
        }
        this.addChild(this.caiPingjieshao);
        this.dangqiancaipinid = this.di5caiid;
        this.panduancaiid();
    };
    Caipujiemian.prototype.dianjicai6 = function () {
        Gamesound.Soundkongzhi().anniuyinxiao();
        if (this.caiPingjieshao.parent) {
            this.removeChild(this.caiPingjieshao);
        }
        this.addChild(this.caiPingjieshao);
        this.dangqiancaipinid = this.di6caiid;
        this.panduancaiid();
    };
    Caipujiemian.prototype.panduancaiid = function () {
        var shupubiao = Gerenshuxing.shipubiao;
        for (var j = 0; j < shupubiao.length; j++) {
            if (shupubiao[j].id == this.dangqiancaipinid) {
                this.dianjicaipin1(shupubiao[j].foodName, shupubiao[j].id, shupubiao[j].foodPrice, shupubiao[j].foodMaterials, shupubiao[j].foodIntroduce, this.dangqiancaipinid);
                break;
            }
        }
    };
    Caipujiemian.prototype.xianshijieshaojiemian = function (caiid) {
        this.caiPingjieshao.but_zhizuo.enabled = true;
        this.caiPingjieshao.but_zhizuo.addEventListener(egret.TouchEvent.TOUCH_TAP, this.dianjizhizuo, this);
        this.caiPingjieshao.chushihua();
        this.caipinjieshaoluoji();
        this.caiPingjieshao.caipinmingcheng.text = this.caidebiaoti1;
        if (this.caidebiaoti1.length > 6) {
            this.caiPingjieshao.img_biaoticaipujieshao.scaleX = 1.4;
            this.caiPingjieshao.img_biaoticaipujieshao.scaleY = 1.4;
        }
        else if (this.caidebiaoti1.length > 4) {
            this.caiPingjieshao.img_biaoticaipujieshao.scaleX = 1.2;
            this.caiPingjieshao.img_biaoticaipujieshao.scaleY = 1.2;
        }
        else {
            this.caiPingjieshao.img_biaoticaipujieshao.scaleX = 1;
            this.caiPingjieshao.img_biaoticaipujieshao.scaleY = 1;
        }
        this.caiPingjieshao.caipindeicon.source = this.caidetupian1;
        this.caiPingjieshao.chushoudanjia.text = this.caideshuxing1_1;
        this.caiPingjieshao.xiaohaoshicai.text = this.caideshuxing1_2;
        this.caiPingjieshao.lashuxing.text = this.caideshuxing1_3;
        this.caiPingjieshao.mashuxing.text = this.caideshuxing1_4;
        this.caiPingjieshao.suanshuxing.text = this.caideshuxing1_5;
        this.caiPingjieshao.tianshuxing.text = this.caideshuxing1_6;
        this.caiPingjieshao.lengjiwenzi.text = this.caideshuxing1_7;
        this.caiPingjieshao.jinduwenzi.text = this.caideshuxing1_8;
        this.caiPingjieshao.jianjie.text = this.caidejieshao1;
        this.caiPingjieshao.img_jindutiaogundong.width = this.caidejindu1;
        this.caiPingjieshao.jineng1.source = this.caidejinengtupian1_9;
        this.caiPingjieshao.jineng2.source = this.caidejinengtupian1_10;
        this.caiPingjieshao.jineng3.source = this.caidejinengtupian1_11;
        this.caiPingjieshao.jineng4.source = this.caidejinengtupian1_12;
        this.caiPingjieshao.jineng5.source = this.caidejinengtupian1_13;
        this.caiPingjieshao.jinengshuoming.text = this.caidejinengwenzi1_9;
        this.caiPingjieshao.jinengmingzi.text = this.caidejinengmingzi1_9;
        this.caiPingjieshao.jineng1.addEventListener(egret.TouchEvent.TOUCH_TAP, this.di1gecaidi1jineng, this);
        this.caiPingjieshao.jineng2.addEventListener(egret.TouchEvent.TOUCH_TAP, this.di1gecaidi2jineng, this);
        this.caiPingjieshao.jineng3.addEventListener(egret.TouchEvent.TOUCH_TAP, this.di1gecaidi3jineng, this);
        this.caiPingjieshao.jineng4.addEventListener(egret.TouchEvent.TOUCH_TAP, this.di1gecaidi4jineng, this);
        this.caiPingjieshao.jineng5.addEventListener(egret.TouchEvent.TOUCH_TAP, this.di1gecaidi5jineng, this);
    };
    Caipujiemian.prototype.dianjizhizuo = function () {
        Gamesound.Soundkongzhi().anniuyinxiao();
        var caipinyanzhijiemian = new Gerendaojujiemian();
        this.addChild(caipinyanzhijiemian);
        caipinyanzhijiemian.chushihua("2", this.dangqiancaipinid);
    };
    Caipujiemian.prototype.di1gecaidi1jineng = function () {
        Gamesound.Soundkongzhi().anniuyinxiao();
        this.caiPingjieshao.jinengmingzi.text = this.caidejinengmingzi1_9;
        this.caiPingjieshao.jinengshuoming.text = this.caidejinengwenzi1_9;
    };
    Caipujiemian.prototype.di1gecaidi2jineng = function () {
        Gamesound.Soundkongzhi().anniuyinxiao();
        this.caiPingjieshao.jinengmingzi.text = this.caidejinengmingzi1_10;
        this.caiPingjieshao.jinengshuoming.text = this.caidejinengwenzi1_10;
    };
    Caipujiemian.prototype.di1gecaidi3jineng = function () {
        Gamesound.Soundkongzhi().anniuyinxiao();
        this.caiPingjieshao.jinengmingzi.text = this.caidejinengmingzi1_11;
        this.caiPingjieshao.jinengshuoming.text = this.caidejinengwenzi1_11;
    };
    Caipujiemian.prototype.di1gecaidi4jineng = function () {
        Gamesound.Soundkongzhi().anniuyinxiao();
        this.caiPingjieshao.jinengmingzi.text = this.caidejinengmingzi1_12;
        this.caiPingjieshao.jinengshuoming.text = this.caidejinengwenzi1_12;
    };
    Caipujiemian.prototype.di1gecaidi5jineng = function () {
        Gamesound.Soundkongzhi().anniuyinxiao();
        this.caiPingjieshao.jinengmingzi.text = this.caidejinengmingzi1_13;
        this.caiPingjieshao.jinengshuoming.text = this.caidejinengwenzi1_13;
    };
    Caipujiemian.prototype.dianjicaipin1 = function (biaoti, tupian, shuxing1, shuxing2, jieshao, caiid) {
        this.caidebiaoti1 = biaoti;
        this.caidetupian1 = tupian + "_png";
        this.caidejieshao1 = jieshao;
        var duqudengji1 = Gerencaipudengji.caipulevel;
        var caipudengjishuju = Gerenshuxing.shipudengjibiao;
        var shengjisuoxujingyan = 0;
        var benjijiacheng = 0;
        var benjiweili = 0;
        var xiajijiacheng = 0;
        var xiajiweili = 0;
        for (var g in duqudengji1) {
            if (g == tupian) {
                for (var k = 0; k < caipudengjishuju.length; k++) {
                    if (duqudengji1[g][0] == caipudengjishuju[k].id) {
                        shengjisuoxujingyan = parseFloat(caipudengjishuju[k].levelexp);
                        benjijiacheng = parseFloat(caipudengjishuju[k].selladd);
                        benjiweili = parseFloat(caipudengjishuju[k].atcadd);
                        if (parseInt(duqudengji1[g][0]) < 20) {
                            xiajijiacheng = caipudengjishuju[k + 1].selladd;
                            xiajiweili = caipudengjishuju[k + 1].atcadd;
                        }
                        else {
                            xiajijiacheng = 0;
                            xiajiweili = 0;
                        }
                    }
                }
                this.caideshuxing1_7 = duqudengji1[g][0];
                this.caideshuxing1_8 = "(" + duqudengji1[g][1] + " / " + shengjisuoxujingyan + ")";
                this.caidejindu1 = parseInt(duqudengji1[g][1]) * 176 / shengjisuoxujingyan;
            }
        }
        shuxing1 = parseFloat(shuxing1);
        var chushilazhi = 0;
        var zuizhonglazhi = 0;
        var fujialazhi = 0;
        var chushimazhi = 0;
        var zuizhongmazhi = 0;
        var fujiamazhi = 0;
        var chushisuanzhi = 0;
        var zuizhongsuanzhi = 0;
        var fujiasuanzhi = 0;
        var chushitianzhi = 0;
        var zuizhongtianzhi = 0;
        var fujiatianzhi = 0;
        var jingjinla = 0;
        var jingjinma = 0;
        var jingjinsuan = 0;
        var jingjintian = 0;
        for (var h = 0; h < Gerenshuxing.caipushuxingbiao.length; h++) {
            if (Gerenshuxing.caipushuxingbiao[h].id == tupian) {
                chushilazhi = parseInt(Gerenshuxing.caipushuxingbiao[h].laxi) + parseInt(Gerenshuxing.caipushuxingbiao[h].laxi) * parseFloat(Gerenshuxing.caipushuxingbiao[h].chengzhanglv) * parseInt(this.caideshuxing1_7);
                chushimazhi = parseInt(Gerenshuxing.caipushuxingbiao[h].maxi) + parseInt(Gerenshuxing.caipushuxingbiao[h].maxi) * parseFloat(Gerenshuxing.caipushuxingbiao[h].chengzhanglv) * parseInt(this.caideshuxing1_7);
                chushisuanzhi = parseInt(Gerenshuxing.caipushuxingbiao[h].suanxi) + parseInt(Gerenshuxing.caipushuxingbiao[h].suanxi) * parseFloat(Gerenshuxing.caipushuxingbiao[h].chengzhanglv) * parseInt(this.caideshuxing1_7);
                chushitianzhi = parseInt(Gerenshuxing.caipushuxingbiao[h].tianxi) + parseInt(Gerenshuxing.caipushuxingbiao[h].tianxi) * parseFloat(Gerenshuxing.caipushuxingbiao[h].chengzhanglv) * parseInt(this.caideshuxing1_7);
                for (var o in Gerencaipudengji.caipulevel) {
                    if (o == tupian) {
                        this.caidejineng1_9 = Gerencaipudengji.caipulevel[o][6];
                        this.caidejineng1_10 = Gerencaipudengji.caipulevel[o][7];
                        this.caidejineng1_11 = Gerencaipudengji.caipulevel[o][8];
                        this.caidejineng1_12 = Gerencaipudengji.caipulevel[o][9];
                        this.caidejineng1_13 = Gerencaipudengji.caipulevel[o][10];
                        fujialazhi = Math.floor(chushilazhi * parseInt(Gerencaipudengji.caipulevel[o][2]) / 100);
                        fujiamazhi = Math.floor(chushimazhi * parseInt(Gerencaipudengji.caipulevel[o][3]) / 100);
                        fujiasuanzhi = Math.floor(chushisuanzhi * parseInt(Gerencaipudengji.caipulevel[o][4]) / 100);
                        fujiatianzhi = Math.floor(chushitianzhi * parseInt(Gerencaipudengji.caipulevel[o][5]) / 100);
                        jingjinla = Gerencaipudengji.caipulevel[o][2];
                        jingjinma = Gerencaipudengji.caipulevel[o][3];
                        jingjinsuan = Gerencaipudengji.caipulevel[o][4];
                        jingjintian = Gerencaipudengji.caipulevel[o][5];
                        break;
                    }
                }
                break;
            }
        }
        chushilazhi = Math.floor(chushilazhi);
        chushimazhi = Math.floor(chushimazhi);
        chushisuanzhi = Math.floor(chushisuanzhi);
        chushitianzhi = Math.floor(chushitianzhi);
        zuizhonglazhi = chushilazhi + fujialazhi;
        zuizhongmazhi = chushimazhi + fujiamazhi;
        zuizhongsuanzhi = chushisuanzhi + fujiasuanzhi;
        zuizhongtianzhi = chushitianzhi + fujiatianzhi;
        this.caideshuxing1_1 = "+" + Math.floor(shuxing1 + shuxing1 * benjijiacheng) + "(品质+" + Math.floor(shuxing1 * benjijiacheng) + ")";
        this.caideshuxing1_4 = "" + zuizhongmazhi + "(精进+" + jingjinma + "%)";
        this.caideshuxing1_3 = "" + zuizhonglazhi + "(精进+" + jingjinla + "%)";
        this.caideshuxing1_6 = "" + zuizhongtianzhi + "(精进+" + jingjintian + "%)";
        this.caideshuxing1_5 = "" + zuizhongsuanzhi + "(精进+" + jingjinsuan + "%)";
        this.caideshuxing1_2 = "-" + shuxing2;
        for (var j = 0; j < Gerenshuxing.jinengbiao.length; j++) {
            if (Gerenshuxing.jinengbiao[j].id == this.caidejineng1_9) {
                this.caidejinengtupian1_9 = Gerenshuxing.jinengbiao[j].jinengicon;
                this.caidejinengmingzi1_9 = Gerenshuxing.jinengbiao[j].mingcheng;
                this.caidejinengwenzi1_9 = Gerenshuxing.jinengbiao[j].tips;
                var jinengjiachengzhi1_9 = 0;
                if (this.caidejineng1_9 == "20001") {
                    this.caidejinengwenzi1_9 = this.caidejinengwenzi1_9.split("&1");
                    jinengjiachengzhi1_9 = parseInt(Gerenshuxing.jinengbiao[j].chushizhi) + zuizhonglazhi * parseFloat(Gerenshuxing.jinengbiao[j].jiacheng);
                    jinengjiachengzhi1_9 = Math.floor(jinengjiachengzhi1_9);
                    this.caidejinengwenzi1_9 = this.caidejinengwenzi1_9[0] + jinengjiachengzhi1_9 + this.caidejinengwenzi1_9[1];
                }
                else if (this.caidejineng1_9 == "20002") {
                    this.caidejinengwenzi1_9 = this.caidejinengwenzi1_9.split("&1");
                    jinengjiachengzhi1_9 = parseInt(Gerenshuxing.jinengbiao[j].chushizhi) + zuizhonglazhi * parseFloat(Gerenshuxing.jinengbiao[j].jiacheng);
                    jinengjiachengzhi1_9 = Math.floor(jinengjiachengzhi1_9);
                    this.caidejinengwenzi1_9 = this.caidejinengwenzi1_9[0] + jinengjiachengzhi1_9 + this.caidejinengwenzi1_9[1];
                }
                else if (this.caidejineng1_9 == "20003") {
                    this.caidejinengwenzi1_9 = this.caidejinengwenzi1_9.split("&1");
                    jinengjiachengzhi1_9 = parseInt(Gerenshuxing.jinengbiao[j].chushizhi) + zuizhonglazhi * parseFloat(Gerenshuxing.jinengbiao[j].jiacheng);
                    jinengjiachengzhi1_9 = Math.floor(jinengjiachengzhi1_9);
                    this.caidejinengwenzi1_9 = this.caidejinengwenzi1_9[0] + jinengjiachengzhi1_9 + this.caidejinengwenzi1_9[1];
                }
                else if (this.caidejineng1_9 == "20004") {
                    this.caidejinengwenzi1_9 = this.caidejinengwenzi1_9.split("&1");
                    jinengjiachengzhi1_9 = parseInt(Gerenshuxing.jinengbiao[j].chushizhi) + zuizhonglazhi * parseFloat(Gerenshuxing.jinengbiao[j].jiacheng);
                    jinengjiachengzhi1_9 = Math.floor(jinengjiachengzhi1_9);
                    this.caidejinengwenzi1_9 = this.caidejinengwenzi1_9[0] + jinengjiachengzhi1_9 + this.caidejinengwenzi1_9[1];
                }
                else if (this.caidejineng1_9 == "20005") {
                    this.caidejinengwenzi1_9 = this.caidejinengwenzi1_9.split("&1");
                    jinengjiachengzhi1_9 = parseInt(Gerenshuxing.jinengbiao[j].chushizhi) + zuizhongtianzhi * parseFloat(Gerenshuxing.jinengbiao[j].jiacheng);
                    jinengjiachengzhi1_9 = Math.floor(jinengjiachengzhi1_9);
                    this.caidejinengwenzi1_9 = this.caidejinengwenzi1_9[0] + jinengjiachengzhi1_9 + this.caidejinengwenzi1_9[1];
                }
                else if (this.caidejineng1_9 == "20006") {
                    this.caidejinengwenzi1_9 = this.caidejinengwenzi1_9.split("&1");
                    jinengjiachengzhi1_9 = parseInt(Gerenshuxing.jinengbiao[j].chushizhi) + zuizhongtianzhi * parseFloat(Gerenshuxing.jinengbiao[j].jiacheng);
                    jinengjiachengzhi1_9 = Math.floor(jinengjiachengzhi1_9);
                    this.caidejinengwenzi1_9 = this.caidejinengwenzi1_9[0] + jinengjiachengzhi1_9 + this.caidejinengwenzi1_9[1];
                }
                else if (this.caidejineng1_9 == "20009") {
                    this.caidejinengwenzi1_9 = this.caidejinengwenzi1_9.split("&1");
                    jinengjiachengzhi1_9 = parseInt(Gerenshuxing.jinengbiao[j].chushizhi) + zuizhonglazhi * parseFloat(Gerenshuxing.jinengbiao[j].jiacheng);
                    jinengjiachengzhi1_9 = Math.floor(jinengjiachengzhi1_9);
                    this.caidejinengwenzi1_9 = this.caidejinengwenzi1_9[0] + jinengjiachengzhi1_9 + this.caidejinengwenzi1_9[1];
                }
                else if (this.caidejineng1_9 == "20010") {
                    this.caidejinengwenzi1_9 = this.caidejinengwenzi1_9.split("&1");
                    jinengjiachengzhi1_9 = parseInt(Gerenshuxing.jinengbiao[j].chushizhi) + zuizhongtianzhi * parseFloat(Gerenshuxing.jinengbiao[j].jiacheng);
                    jinengjiachengzhi1_9 = Math.floor(jinengjiachengzhi1_9);
                    this.caidejinengwenzi1_9 = this.caidejinengwenzi1_9[0] + jinengjiachengzhi1_9 + this.caidejinengwenzi1_9[1];
                }
                else if (this.caidejineng1_9 == "20011") {
                    this.caidejinengwenzi1_9 = this.caidejinengwenzi1_9.split("&1");
                    jinengjiachengzhi1_9 = parseInt(Gerenshuxing.jinengbiao[j].chushizhi) + zuizhongsuanzhi * parseFloat(Gerenshuxing.jinengbiao[j].jiacheng);
                    jinengjiachengzhi1_9 = Math.floor(jinengjiachengzhi1_9);
                    this.caidejinengwenzi1_9 = this.caidejinengwenzi1_9[0] + jinengjiachengzhi1_9 + this.caidejinengwenzi1_9[1];
                }
                else if (this.caidejineng1_9 == "20012") {
                    this.caidejinengwenzi1_9 = this.caidejinengwenzi1_9.split("&1");
                    jinengjiachengzhi1_9 = parseInt(Gerenshuxing.jinengbiao[j].chushizhi) + zuizhongmazhi * parseFloat(Gerenshuxing.jinengbiao[j].jiacheng);
                    jinengjiachengzhi1_9 = Math.floor(jinengjiachengzhi1_9);
                    this.caidejinengwenzi1_9 = this.caidejinengwenzi1_9[0] + jinengjiachengzhi1_9 + this.caidejinengwenzi1_9[1];
                }
                else if (this.caidejineng1_9 == "20013") {
                    this.caidejinengwenzi1_9 = this.caidejinengwenzi1_9.split("&1");
                    jinengjiachengzhi1_9 = parseInt(Gerenshuxing.jinengbiao[j].chushizhi) + zuizhongsuanzhi * parseFloat(Gerenshuxing.jinengbiao[j].jiacheng);
                    jinengjiachengzhi1_9 = Math.floor(jinengjiachengzhi1_9);
                    this.caidejinengwenzi1_9 = this.caidejinengwenzi1_9[0] + jinengjiachengzhi1_9 + this.caidejinengwenzi1_9[1];
                }
                else if (this.caidejineng1_9 == "20014") {
                    this.caidejinengwenzi1_9 = this.caidejinengwenzi1_9.split("&1");
                    jinengjiachengzhi1_9 = parseInt(Gerenshuxing.jinengbiao[j].chushizhi) + zuizhongsuanzhi * parseFloat(Gerenshuxing.jinengbiao[j].jiacheng);
                    jinengjiachengzhi1_9 = Math.floor(jinengjiachengzhi1_9);
                    this.caidejinengwenzi1_9 = this.caidejinengwenzi1_9[0] + jinengjiachengzhi1_9 + this.caidejinengwenzi1_9[1];
                }
                else if (this.caidejineng1_9 == "20015") {
                    this.caidejinengwenzi1_9 = this.caidejinengwenzi1_9.split("&1");
                    jinengjiachengzhi1_9 = parseInt(Gerenshuxing.jinengbiao[j].chushizhi) + zuizhongsuanzhi * parseFloat(Gerenshuxing.jinengbiao[j].jiacheng);
                    jinengjiachengzhi1_9 = Math.floor(jinengjiachengzhi1_9);
                    this.caidejinengwenzi1_9 = this.caidejinengwenzi1_9[0] + jinengjiachengzhi1_9 + this.caidejinengwenzi1_9[1];
                }
                else if (this.caidejineng1_9 == "20016") {
                    this.caidejinengwenzi1_9 = this.caidejinengwenzi1_9.split("&1");
                    jinengjiachengzhi1_9 = parseInt(Gerenshuxing.jinengbiao[j].chushizhi) + zuizhongmazhi * parseFloat(Gerenshuxing.jinengbiao[j].jiacheng);
                    jinengjiachengzhi1_9 = Math.floor(jinengjiachengzhi1_9);
                    this.caidejinengwenzi1_9 = this.caidejinengwenzi1_9[0] + jinengjiachengzhi1_9 + this.caidejinengwenzi1_9[1];
                }
                else if (this.caidejineng1_9 == "20017") {
                    this.caidejinengwenzi1_9 = this.caidejinengwenzi1_9.split("&1");
                    jinengjiachengzhi1_9 = parseInt(Gerenshuxing.jinengbiao[j].chushizhi) + zuizhongmazhi * parseFloat(Gerenshuxing.jinengbiao[j].jiacheng);
                    jinengjiachengzhi1_9 = Math.floor(jinengjiachengzhi1_9);
                    this.caidejinengwenzi1_9 = this.caidejinengwenzi1_9[0] + jinengjiachengzhi1_9 + this.caidejinengwenzi1_9[1];
                }
                else if (this.caidejineng1_9 == "20018") {
                    this.caidejinengwenzi1_9 = this.caidejinengwenzi1_9.split("&1");
                    jinengjiachengzhi1_9 = parseInt(Gerenshuxing.jinengbiao[j].chushizhi) + zuizhongtianzhi * parseFloat(Gerenshuxing.jinengbiao[j].jiacheng);
                    jinengjiachengzhi1_9 = Math.floor(jinengjiachengzhi1_9);
                    this.caidejinengwenzi1_9 = this.caidejinengwenzi1_9[0] + jinengjiachengzhi1_9 + this.caidejinengwenzi1_9[1];
                }
                else if (this.caidejineng1_9 == "20019") {
                    this.caidejinengwenzi1_9 = this.caidejinengwenzi1_9.split("&1");
                    jinengjiachengzhi1_9 = parseInt(Gerenshuxing.jinengbiao[j].chushizhi) + zuizhongsuanzhi * parseFloat(Gerenshuxing.jinengbiao[j].jiacheng);
                    jinengjiachengzhi1_9 = Math.floor(jinengjiachengzhi1_9);
                    this.caidejinengwenzi1_9 = this.caidejinengwenzi1_9[0] + jinengjiachengzhi1_9 + this.caidejinengwenzi1_9[1];
                }
                else if (this.caidejineng1_9 == "20021") {
                    this.caidejinengwenzi1_9 = this.caidejinengwenzi1_9.split("&1");
                    jinengjiachengzhi1_9 = parseInt(Gerenshuxing.jinengbiao[j].chushizhi) + zuizhongsuanzhi * parseFloat(Gerenshuxing.jinengbiao[j].jiacheng);
                    jinengjiachengzhi1_9 = Math.floor(jinengjiachengzhi1_9);
                    this.caidejinengwenzi1_9 = this.caidejinengwenzi1_9[0] + jinengjiachengzhi1_9 + this.caidejinengwenzi1_9[1];
                }
                else if (this.caidejineng1_9 == "20022") {
                    this.caidejinengwenzi1_9 = this.caidejinengwenzi1_9.split("&1");
                    jinengjiachengzhi1_9 = parseInt(Gerenshuxing.jinengbiao[j].chushizhi) + zuizhongmazhi * parseFloat(Gerenshuxing.jinengbiao[j].jiacheng);
                    jinengjiachengzhi1_9 = Math.floor(jinengjiachengzhi1_9);
                    this.caidejinengwenzi1_9 = this.caidejinengwenzi1_9[0] + jinengjiachengzhi1_9 + this.caidejinengwenzi1_9[1];
                }
                else if (this.caidejineng1_9 == "20023") {
                    this.caidejinengwenzi1_9 = this.caidejinengwenzi1_9.split("&1");
                    jinengjiachengzhi1_9 = parseInt(Gerenshuxing.jinengbiao[j].chushizhi) + zuizhongtianzhi * parseFloat(Gerenshuxing.jinengbiao[j].jiacheng);
                    jinengjiachengzhi1_9 = Math.floor(jinengjiachengzhi1_9);
                    this.caidejinengwenzi1_9 = this.caidejinengwenzi1_9[0] + jinengjiachengzhi1_9 + this.caidejinengwenzi1_9[1];
                }
                else if (this.caidejineng1_9 == "20024") {
                    this.caidejinengwenzi1_9 = this.caidejinengwenzi1_9.split("&1");
                    jinengjiachengzhi1_9 = parseInt(Gerenshuxing.jinengbiao[j].chushizhi) + zuizhonglazhi * parseFloat(Gerenshuxing.jinengbiao[j].jiacheng);
                    jinengjiachengzhi1_9 = Math.floor(jinengjiachengzhi1_9);
                    this.caidejinengwenzi1_9 = this.caidejinengwenzi1_9[0] + jinengjiachengzhi1_9 + this.caidejinengwenzi1_9[1];
                }
            }
            if (Gerenshuxing.jinengbiao[j].id == this.caidejineng1_10) {
                this.caidejinengtupian1_10 = Gerenshuxing.jinengbiao[j].jinengicon;
                this.caidejinengmingzi1_10 = Gerenshuxing.jinengbiao[j].mingcheng;
                this.caidejinengwenzi1_10 = Gerenshuxing.jinengbiao[j].tips;
                var jinengjiachengzhi1_10 = 0;
                if (this.caidejineng1_10 == "20001") {
                    this.caidejinengwenzi1_10 = this.caidejinengwenzi1_10.split("&1");
                    jinengjiachengzhi1_10 = parseInt(Gerenshuxing.jinengbiao[j].chushizhi) + zuizhonglazhi * parseFloat(Gerenshuxing.jinengbiao[j].jiacheng);
                    jinengjiachengzhi1_10 = Math.floor(jinengjiachengzhi1_10);
                    this.caidejinengwenzi1_10 = this.caidejinengwenzi1_10[0] + jinengjiachengzhi1_10 + this.caidejinengwenzi1_10[1];
                }
                else if (this.caidejineng1_10 == "20002") {
                    this.caidejinengwenzi1_10 = this.caidejinengwenzi1_10.split("&1");
                    jinengjiachengzhi1_10 = parseInt(Gerenshuxing.jinengbiao[j].chushizhi) + zuizhonglazhi * parseFloat(Gerenshuxing.jinengbiao[j].jiacheng);
                    jinengjiachengzhi1_10 = Math.floor(jinengjiachengzhi1_10);
                    this.caidejinengwenzi1_10 = this.caidejinengwenzi1_10[0] + jinengjiachengzhi1_10 + this.caidejinengwenzi1_10[1];
                }
                else if (this.caidejineng1_10 == "20003") {
                    this.caidejinengwenzi1_10 = this.caidejinengwenzi1_10.split("&1");
                    jinengjiachengzhi1_10 = parseInt(Gerenshuxing.jinengbiao[j].chushizhi) + zuizhonglazhi * parseFloat(Gerenshuxing.jinengbiao[j].jiacheng);
                    jinengjiachengzhi1_10 = Math.floor(jinengjiachengzhi1_10);
                    this.caidejinengwenzi1_10 = this.caidejinengwenzi1_10[0] + jinengjiachengzhi1_10 + this.caidejinengwenzi1_10[1];
                }
                else if (this.caidejineng1_10 == "20004") {
                    this.caidejinengwenzi1_10 = this.caidejinengwenzi1_10.split("&1");
                    jinengjiachengzhi1_10 = parseInt(Gerenshuxing.jinengbiao[j].chushizhi) + zuizhonglazhi * parseFloat(Gerenshuxing.jinengbiao[j].jiacheng);
                    jinengjiachengzhi1_10 = Math.floor(jinengjiachengzhi1_10);
                    this.caidejinengwenzi1_10 = this.caidejinengwenzi1_10[0] + jinengjiachengzhi1_10 + this.caidejinengwenzi1_10[1];
                }
                else if (this.caidejineng1_10 == "20005") {
                    this.caidejinengwenzi1_10 = this.caidejinengwenzi1_10.split("&1");
                    jinengjiachengzhi1_10 = parseInt(Gerenshuxing.jinengbiao[j].chushizhi) + zuizhongtianzhi * parseFloat(Gerenshuxing.jinengbiao[j].jiacheng);
                    jinengjiachengzhi1_10 = Math.floor(jinengjiachengzhi1_10);
                    this.caidejinengwenzi1_10 = this.caidejinengwenzi1_10[0] + jinengjiachengzhi1_10 + this.caidejinengwenzi1_10[1];
                }
                else if (this.caidejineng1_10 == "20006") {
                    this.caidejinengwenzi1_10 = this.caidejinengwenzi1_10.split("&1");
                    jinengjiachengzhi1_10 = parseInt(Gerenshuxing.jinengbiao[j].chushizhi) + zuizhongtianzhi * parseFloat(Gerenshuxing.jinengbiao[j].jiacheng);
                    jinengjiachengzhi1_10 = Math.floor(jinengjiachengzhi1_10);
                    this.caidejinengwenzi1_10 = this.caidejinengwenzi1_10[0] + jinengjiachengzhi1_10 + this.caidejinengwenzi1_10[1];
                }
                else if (this.caidejineng1_10 == "20009") {
                    this.caidejinengwenzi1_10 = this.caidejinengwenzi1_10.split("&1");
                    jinengjiachengzhi1_10 = parseInt(Gerenshuxing.jinengbiao[j].chushizhi) + zuizhonglazhi * parseFloat(Gerenshuxing.jinengbiao[j].jiacheng);
                    jinengjiachengzhi1_10 = Math.floor(jinengjiachengzhi1_10);
                    this.caidejinengwenzi1_10 = this.caidejinengwenzi1_10[0] + jinengjiachengzhi1_10 + this.caidejinengwenzi1_10[1];
                }
                else if (this.caidejineng1_10 == "20010") {
                    this.caidejinengwenzi1_10 = this.caidejinengwenzi1_10.split("&1");
                    jinengjiachengzhi1_10 = parseInt(Gerenshuxing.jinengbiao[j].chushizhi) + zuizhongtianzhi * parseFloat(Gerenshuxing.jinengbiao[j].jiacheng);
                    jinengjiachengzhi1_10 = Math.floor(jinengjiachengzhi1_10);
                    this.caidejinengwenzi1_10 = this.caidejinengwenzi1_10[0] + jinengjiachengzhi1_10 + this.caidejinengwenzi1_10[1];
                }
                else if (this.caidejineng1_10 == "20011") {
                    this.caidejinengwenzi1_10 = this.caidejinengwenzi1_10.split("&1");
                    jinengjiachengzhi1_10 = parseInt(Gerenshuxing.jinengbiao[j].chushizhi) + zuizhongsuanzhi * parseFloat(Gerenshuxing.jinengbiao[j].jiacheng);
                    jinengjiachengzhi1_10 = Math.floor(jinengjiachengzhi1_10);
                    this.caidejinengwenzi1_10 = this.caidejinengwenzi1_10[0] + jinengjiachengzhi1_10 + this.caidejinengwenzi1_10[1];
                }
                else if (this.caidejineng1_10 == "20012") {
                    this.caidejinengwenzi1_10 = this.caidejinengwenzi1_10.split("&1");
                    jinengjiachengzhi1_10 = parseInt(Gerenshuxing.jinengbiao[j].chushizhi) + zuizhongmazhi * parseFloat(Gerenshuxing.jinengbiao[j].jiacheng);
                    jinengjiachengzhi1_10 = Math.floor(jinengjiachengzhi1_10);
                    this.caidejinengwenzi1_10 = this.caidejinengwenzi1_10[0] + jinengjiachengzhi1_10 + this.caidejinengwenzi1_10[1];
                }
                else if (this.caidejineng1_10 == "20013") {
                    this.caidejinengwenzi1_10 = this.caidejinengwenzi1_10.split("&1");
                    jinengjiachengzhi1_10 = parseInt(Gerenshuxing.jinengbiao[j].chushizhi) + zuizhongsuanzhi * parseFloat(Gerenshuxing.jinengbiao[j].jiacheng);
                    jinengjiachengzhi1_10 = Math.floor(jinengjiachengzhi1_10);
                    this.caidejinengwenzi1_10 = this.caidejinengwenzi1_10[0] + jinengjiachengzhi1_10 + this.caidejinengwenzi1_10[1];
                }
                else if (this.caidejineng1_10 == "20014") {
                    this.caidejinengwenzi1_10 = this.caidejinengwenzi1_10.split("&1");
                    jinengjiachengzhi1_10 = parseInt(Gerenshuxing.jinengbiao[j].chushizhi) + zuizhongsuanzhi * parseFloat(Gerenshuxing.jinengbiao[j].jiacheng);
                    jinengjiachengzhi1_10 = Math.floor(jinengjiachengzhi1_10);
                    this.caidejinengwenzi1_10 = this.caidejinengwenzi1_10[0] + jinengjiachengzhi1_10 + this.caidejinengwenzi1_10[1];
                }
                else if (this.caidejineng1_10 == "20015") {
                    this.caidejinengwenzi1_10 = this.caidejinengwenzi1_10.split("&1");
                    jinengjiachengzhi1_10 = parseInt(Gerenshuxing.jinengbiao[j].chushizhi) + zuizhongsuanzhi * parseFloat(Gerenshuxing.jinengbiao[j].jiacheng);
                    jinengjiachengzhi1_10 = Math.floor(jinengjiachengzhi1_10);
                    this.caidejinengwenzi1_10 = this.caidejinengwenzi1_10[0] + jinengjiachengzhi1_10 + this.caidejinengwenzi1_10[1];
                }
                else if (this.caidejineng1_10 == "20016") {
                    this.caidejinengwenzi1_10 = this.caidejinengwenzi1_10.split("&1");
                    jinengjiachengzhi1_10 = parseInt(Gerenshuxing.jinengbiao[j].chushizhi) + zuizhongmazhi * parseFloat(Gerenshuxing.jinengbiao[j].jiacheng);
                    jinengjiachengzhi1_10 = Math.floor(jinengjiachengzhi1_10);
                    this.caidejinengwenzi1_10 = this.caidejinengwenzi1_10[0] + jinengjiachengzhi1_10 + this.caidejinengwenzi1_10[1];
                }
                else if (this.caidejineng1_10 == "20017") {
                    this.caidejinengwenzi1_10 = this.caidejinengwenzi1_10.split("&1");
                    jinengjiachengzhi1_10 = parseInt(Gerenshuxing.jinengbiao[j].chushizhi) + zuizhongmazhi * parseFloat(Gerenshuxing.jinengbiao[j].jiacheng);
                    jinengjiachengzhi1_10 = Math.floor(jinengjiachengzhi1_10);
                    this.caidejinengwenzi1_10 = this.caidejinengwenzi1_10[0] + jinengjiachengzhi1_10 + this.caidejinengwenzi1_10[1];
                }
                else if (this.caidejineng1_10 == "20018") {
                    this.caidejinengwenzi1_10 = this.caidejinengwenzi1_10.split("&1");
                    jinengjiachengzhi1_10 = parseInt(Gerenshuxing.jinengbiao[j].chushizhi) + zuizhongtianzhi * parseFloat(Gerenshuxing.jinengbiao[j].jiacheng);
                    jinengjiachengzhi1_10 = Math.floor(jinengjiachengzhi1_10);
                    this.caidejinengwenzi1_10 = this.caidejinengwenzi1_10[0] + jinengjiachengzhi1_10 + this.caidejinengwenzi1_10[1];
                }
                else if (this.caidejineng1_10 == "20019") {
                    this.caidejinengwenzi1_10 = this.caidejinengwenzi1_10.split("&1");
                    jinengjiachengzhi1_10 = parseInt(Gerenshuxing.jinengbiao[j].chushizhi) + zuizhongsuanzhi * parseFloat(Gerenshuxing.jinengbiao[j].jiacheng);
                    jinengjiachengzhi1_10 = Math.floor(jinengjiachengzhi1_10);
                    this.caidejinengwenzi1_10 = this.caidejinengwenzi1_10[0] + jinengjiachengzhi1_10 + this.caidejinengwenzi1_10[1];
                }
                else if (this.caidejineng1_10 == "20021") {
                    this.caidejinengwenzi1_10 = this.caidejinengwenzi1_10.split("&1");
                    jinengjiachengzhi1_10 = parseInt(Gerenshuxing.jinengbiao[j].chushizhi) + zuizhongsuanzhi * parseFloat(Gerenshuxing.jinengbiao[j].jiacheng);
                    jinengjiachengzhi1_10 = Math.floor(jinengjiachengzhi1_10);
                    this.caidejinengwenzi1_10 = this.caidejinengwenzi1_10[0] + jinengjiachengzhi1_10 + this.caidejinengwenzi1_10[1];
                }
                else if (this.caidejineng1_10 == "20022") {
                    this.caidejinengwenzi1_10 = this.caidejinengwenzi1_10.split("&1");
                    jinengjiachengzhi1_10 = parseInt(Gerenshuxing.jinengbiao[j].chushizhi) + zuizhongmazhi * parseFloat(Gerenshuxing.jinengbiao[j].jiacheng);
                    jinengjiachengzhi1_10 = Math.floor(jinengjiachengzhi1_10);
                    this.caidejinengwenzi1_10 = this.caidejinengwenzi1_10[0] + jinengjiachengzhi1_10 + this.caidejinengwenzi1_10[1];
                }
                else if (this.caidejineng1_10 == "20023") {
                    this.caidejinengwenzi1_10 = this.caidejinengwenzi1_10.split("&1");
                    jinengjiachengzhi1_10 = parseInt(Gerenshuxing.jinengbiao[j].chushizhi) + zuizhongtianzhi * parseFloat(Gerenshuxing.jinengbiao[j].jiacheng);
                    jinengjiachengzhi1_10 = Math.floor(jinengjiachengzhi1_10);
                    this.caidejinengwenzi1_10 = this.caidejinengwenzi1_10[0] + jinengjiachengzhi1_10 + this.caidejinengwenzi1_10[1];
                }
                else if (this.caidejineng1_10 == "20024") {
                    this.caidejinengwenzi1_10 = this.caidejinengwenzi1_10.split("&1");
                    jinengjiachengzhi1_10 = parseInt(Gerenshuxing.jinengbiao[j].chushizhi) + zuizhonglazhi * parseFloat(Gerenshuxing.jinengbiao[j].jiacheng);
                    jinengjiachengzhi1_10 = Math.floor(jinengjiachengzhi1_10);
                    this.caidejinengwenzi1_10 = this.caidejinengwenzi1_10[0] + jinengjiachengzhi1_10 + this.caidejinengwenzi1_10[1];
                }
            }
            if (Gerenshuxing.jinengbiao[j].id == this.caidejineng1_11) {
                this.caidejinengtupian1_11 = Gerenshuxing.jinengbiao[j].jinengicon;
                this.caidejinengmingzi1_11 = Gerenshuxing.jinengbiao[j].mingcheng;
                this.caidejinengwenzi1_11 = Gerenshuxing.jinengbiao[j].tips;
                var jinengjiachengzhi1_11 = 0;
                if (this.caidejineng1_11 == "20001") {
                    this.caidejinengwenzi1_11 = this.caidejinengwenzi1_11.split("&1");
                    jinengjiachengzhi1_11 = parseInt(Gerenshuxing.jinengbiao[j].chushizhi) + zuizhonglazhi * parseFloat(Gerenshuxing.jinengbiao[j].jiacheng);
                    jinengjiachengzhi1_11 = Math.floor(jinengjiachengzhi1_11);
                    this.caidejinengwenzi1_11 = this.caidejinengwenzi1_11[0] + jinengjiachengzhi1_11 + this.caidejinengwenzi1_11[1];
                }
                else if (this.caidejineng1_11 == "20002") {
                    this.caidejinengwenzi1_11 = this.caidejinengwenzi1_11.split("&1");
                    jinengjiachengzhi1_11 = parseInt(Gerenshuxing.jinengbiao[j].chushizhi) + zuizhonglazhi * parseFloat(Gerenshuxing.jinengbiao[j].jiacheng);
                    jinengjiachengzhi1_11 = Math.floor(jinengjiachengzhi1_11);
                    this.caidejinengwenzi1_11 = this.caidejinengwenzi1_11[0] + jinengjiachengzhi1_11 + this.caidejinengwenzi1_11[1];
                }
                else if (this.caidejineng1_11 == "20003") {
                    this.caidejinengwenzi1_11 = this.caidejinengwenzi1_11.split("&1");
                    jinengjiachengzhi1_11 = parseInt(Gerenshuxing.jinengbiao[j].chushizhi) + zuizhonglazhi * parseFloat(Gerenshuxing.jinengbiao[j].jiacheng);
                    jinengjiachengzhi1_11 = Math.floor(jinengjiachengzhi1_11);
                    this.caidejinengwenzi1_11 = this.caidejinengwenzi1_11[0] + jinengjiachengzhi1_11 + this.caidejinengwenzi1_11[1];
                }
                else if (this.caidejineng1_11 == "20004") {
                    this.caidejinengwenzi1_11 = this.caidejinengwenzi1_11.split("&1");
                    jinengjiachengzhi1_11 = parseInt(Gerenshuxing.jinengbiao[j].chushizhi) + zuizhonglazhi * parseFloat(Gerenshuxing.jinengbiao[j].jiacheng);
                    jinengjiachengzhi1_11 = Math.floor(jinengjiachengzhi1_11);
                    this.caidejinengwenzi1_11 = this.caidejinengwenzi1_11[0] + jinengjiachengzhi1_11 + this.caidejinengwenzi1_11[1];
                }
                else if (this.caidejineng1_11 == "20005") {
                    this.caidejinengwenzi1_11 = this.caidejinengwenzi1_11.split("&1");
                    jinengjiachengzhi1_11 = parseInt(Gerenshuxing.jinengbiao[j].chushizhi) + zuizhongtianzhi * parseFloat(Gerenshuxing.jinengbiao[j].jiacheng);
                    jinengjiachengzhi1_11 = Math.floor(jinengjiachengzhi1_11);
                    this.caidejinengwenzi1_11 = this.caidejinengwenzi1_11[0] + jinengjiachengzhi1_11 + this.caidejinengwenzi1_11[1];
                }
                else if (this.caidejineng1_11 == "20006") {
                    this.caidejinengwenzi1_11 = this.caidejinengwenzi1_11.split("&1");
                    jinengjiachengzhi1_11 = parseInt(Gerenshuxing.jinengbiao[j].chushizhi) + zuizhongtianzhi * parseFloat(Gerenshuxing.jinengbiao[j].jiacheng);
                    jinengjiachengzhi1_11 = Math.floor(jinengjiachengzhi1_11);
                    this.caidejinengwenzi1_11 = this.caidejinengwenzi1_11[0] + jinengjiachengzhi1_11 + this.caidejinengwenzi1_11[1];
                }
                else if (this.caidejineng1_11 == "20009") {
                    this.caidejinengwenzi1_11 = this.caidejinengwenzi1_11.split("&1");
                    jinengjiachengzhi1_11 = parseInt(Gerenshuxing.jinengbiao[j].chushizhi) + zuizhonglazhi * parseFloat(Gerenshuxing.jinengbiao[j].jiacheng);
                    jinengjiachengzhi1_11 = Math.floor(jinengjiachengzhi1_11);
                    this.caidejinengwenzi1_11 = this.caidejinengwenzi1_11[0] + jinengjiachengzhi1_11 + this.caidejinengwenzi1_11[1];
                }
                else if (this.caidejineng1_11 == "20010") {
                    this.caidejinengwenzi1_11 = this.caidejinengwenzi1_11.split("&1");
                    jinengjiachengzhi1_11 = parseInt(Gerenshuxing.jinengbiao[j].chushizhi) + zuizhongtianzhi * parseFloat(Gerenshuxing.jinengbiao[j].jiacheng);
                    jinengjiachengzhi1_11 = Math.floor(jinengjiachengzhi1_11);
                    this.caidejinengwenzi1_11 = this.caidejinengwenzi1_11[0] + jinengjiachengzhi1_11 + this.caidejinengwenzi1_11[1];
                }
                else if (this.caidejineng1_11 == "20011") {
                    this.caidejinengwenzi1_11 = this.caidejinengwenzi1_11.split("&1");
                    jinengjiachengzhi1_11 = parseInt(Gerenshuxing.jinengbiao[j].chushizhi) + zuizhongsuanzhi * parseFloat(Gerenshuxing.jinengbiao[j].jiacheng);
                    jinengjiachengzhi1_11 = Math.floor(jinengjiachengzhi1_11);
                    this.caidejinengwenzi1_11 = this.caidejinengwenzi1_11[0] + jinengjiachengzhi1_11 + this.caidejinengwenzi1_11[1];
                }
                else if (this.caidejineng1_11 == "20012") {
                    this.caidejinengwenzi1_11 = this.caidejinengwenzi1_11.split("&1");
                    jinengjiachengzhi1_11 = parseInt(Gerenshuxing.jinengbiao[j].chushizhi) + zuizhongmazhi * parseFloat(Gerenshuxing.jinengbiao[j].jiacheng);
                    jinengjiachengzhi1_11 = Math.floor(jinengjiachengzhi1_11);
                    this.caidejinengwenzi1_11 = this.caidejinengwenzi1_11[0] + jinengjiachengzhi1_11 + this.caidejinengwenzi1_11[1];
                }
                else if (this.caidejineng1_11 == "20013") {
                    this.caidejinengwenzi1_11 = this.caidejinengwenzi1_11.split("&1");
                    jinengjiachengzhi1_11 = parseInt(Gerenshuxing.jinengbiao[j].chushizhi) + zuizhongsuanzhi * parseFloat(Gerenshuxing.jinengbiao[j].jiacheng);
                    jinengjiachengzhi1_11 = Math.floor(jinengjiachengzhi1_11);
                    this.caidejinengwenzi1_11 = this.caidejinengwenzi1_11[0] + jinengjiachengzhi1_11 + this.caidejinengwenzi1_11[1];
                }
                else if (this.caidejineng1_11 == "20014") {
                    this.caidejinengwenzi1_11 = this.caidejinengwenzi1_11.split("&1");
                    jinengjiachengzhi1_11 = parseInt(Gerenshuxing.jinengbiao[j].chushizhi) + zuizhongsuanzhi * parseFloat(Gerenshuxing.jinengbiao[j].jiacheng);
                    jinengjiachengzhi1_11 = Math.floor(jinengjiachengzhi1_11);
                    this.caidejinengwenzi1_11 = this.caidejinengwenzi1_11[0] + jinengjiachengzhi1_11 + this.caidejinengwenzi1_11[1];
                }
                else if (this.caidejineng1_11 == "20015") {
                    this.caidejinengwenzi1_11 = this.caidejinengwenzi1_11.split("&1");
                    jinengjiachengzhi1_11 = parseInt(Gerenshuxing.jinengbiao[j].chushizhi) + zuizhongsuanzhi * parseFloat(Gerenshuxing.jinengbiao[j].jiacheng);
                    jinengjiachengzhi1_11 = Math.floor(jinengjiachengzhi1_11);
                    this.caidejinengwenzi1_11 = this.caidejinengwenzi1_11[0] + jinengjiachengzhi1_11 + this.caidejinengwenzi1_11[1];
                }
                else if (this.caidejineng1_11 == "20016") {
                    this.caidejinengwenzi1_11 = this.caidejinengwenzi1_11.split("&1");
                    jinengjiachengzhi1_11 = parseInt(Gerenshuxing.jinengbiao[j].chushizhi) + zuizhongmazhi * parseFloat(Gerenshuxing.jinengbiao[j].jiacheng);
                    jinengjiachengzhi1_11 = Math.floor(jinengjiachengzhi1_11);
                    this.caidejinengwenzi1_11 = this.caidejinengwenzi1_11[0] + jinengjiachengzhi1_11 + this.caidejinengwenzi1_11[1];
                }
                else if (this.caidejineng1_11 == "20017") {
                    this.caidejinengwenzi1_11 = this.caidejinengwenzi1_11.split("&1");
                    jinengjiachengzhi1_11 = parseInt(Gerenshuxing.jinengbiao[j].chushizhi) + zuizhongmazhi * parseFloat(Gerenshuxing.jinengbiao[j].jiacheng);
                    jinengjiachengzhi1_11 = Math.floor(jinengjiachengzhi1_11);
                    this.caidejinengwenzi1_11 = this.caidejinengwenzi1_11[0] + jinengjiachengzhi1_11 + this.caidejinengwenzi1_11[1];
                }
                else if (this.caidejineng1_11 == "20018") {
                    this.caidejinengwenzi1_11 = this.caidejinengwenzi1_11.split("&1");
                    jinengjiachengzhi1_11 = parseInt(Gerenshuxing.jinengbiao[j].chushizhi) + zuizhongtianzhi * parseFloat(Gerenshuxing.jinengbiao[j].jiacheng);
                    jinengjiachengzhi1_11 = Math.floor(jinengjiachengzhi1_11);
                    this.caidejinengwenzi1_11 = this.caidejinengwenzi1_11[0] + jinengjiachengzhi1_11 + this.caidejinengwenzi1_11[1];
                }
                else if (this.caidejineng1_11 == "20019") {
                    this.caidejinengwenzi1_11 = this.caidejinengwenzi1_11.split("&1");
                    jinengjiachengzhi1_11 = parseInt(Gerenshuxing.jinengbiao[j].chushizhi) + zuizhongsuanzhi * parseFloat(Gerenshuxing.jinengbiao[j].jiacheng);
                    jinengjiachengzhi1_11 = Math.floor(jinengjiachengzhi1_11);
                    this.caidejinengwenzi1_11 = this.caidejinengwenzi1_11[0] + jinengjiachengzhi1_11 + this.caidejinengwenzi1_11[1];
                }
                else if (this.caidejineng1_11 == "20021") {
                    this.caidejinengwenzi1_11 = this.caidejinengwenzi1_11.split("&1");
                    jinengjiachengzhi1_11 = parseInt(Gerenshuxing.jinengbiao[j].chushizhi) + zuizhongsuanzhi * parseFloat(Gerenshuxing.jinengbiao[j].jiacheng);
                    jinengjiachengzhi1_11 = Math.floor(jinengjiachengzhi1_11);
                    this.caidejinengwenzi1_11 = this.caidejinengwenzi1_11[0] + jinengjiachengzhi1_11 + this.caidejinengwenzi1_11[1];
                }
                else if (this.caidejineng1_11 == "20022") {
                    this.caidejinengwenzi1_11 = this.caidejinengwenzi1_11.split("&1");
                    jinengjiachengzhi1_11 = parseInt(Gerenshuxing.jinengbiao[j].chushizhi) + zuizhongmazhi * parseFloat(Gerenshuxing.jinengbiao[j].jiacheng);
                    jinengjiachengzhi1_11 = Math.floor(jinengjiachengzhi1_11);
                    this.caidejinengwenzi1_11 = this.caidejinengwenzi1_11[0] + jinengjiachengzhi1_11 + this.caidejinengwenzi1_11[1];
                }
                else if (this.caidejineng1_11 == "20023") {
                    this.caidejinengwenzi1_11 = this.caidejinengwenzi1_11.split("&1");
                    jinengjiachengzhi1_11 = parseInt(Gerenshuxing.jinengbiao[j].chushizhi) + zuizhongtianzhi * parseFloat(Gerenshuxing.jinengbiao[j].jiacheng);
                    jinengjiachengzhi1_11 = Math.floor(jinengjiachengzhi1_11);
                    this.caidejinengwenzi1_11 = this.caidejinengwenzi1_11[0] + jinengjiachengzhi1_11 + this.caidejinengwenzi1_11[1];
                }
                else if (this.caidejineng1_11 == "20024") {
                    this.caidejinengwenzi1_11 = this.caidejinengwenzi1_11.split("&1");
                    jinengjiachengzhi1_11 = parseInt(Gerenshuxing.jinengbiao[j].chushizhi) + zuizhonglazhi * parseFloat(Gerenshuxing.jinengbiao[j].jiacheng);
                    jinengjiachengzhi1_11 = Math.floor(jinengjiachengzhi1_11);
                    this.caidejinengwenzi1_11 = this.caidejinengwenzi1_11[0] + jinengjiachengzhi1_11 + this.caidejinengwenzi1_11[1];
                }
            }
            if (Gerenshuxing.jinengbiao[j].id == this.caidejineng1_12) {
                this.caidejinengmingzi1_12 = Gerenshuxing.jinengbiao[j].mingcheng;
                this.caidejinengtupian1_12 = Gerenshuxing.jinengbiao[j].jinengicon;
                this.caidejinengwenzi1_12 = Gerenshuxing.jinengbiao[j].tips;
                var jinengjiachengzhi1_12 = 0;
                if (this.caidejineng1_12 == "20001") {
                    this.caidejinengwenzi1_12 = this.caidejinengwenzi1_12.split("&1");
                    jinengjiachengzhi1_12 = parseInt(Gerenshuxing.jinengbiao[j].chushizhi) + zuizhonglazhi * parseFloat(Gerenshuxing.jinengbiao[j].jiacheng);
                    jinengjiachengzhi1_12 = Math.floor(jinengjiachengzhi1_12);
                    this.caidejinengwenzi1_12 = this.caidejinengwenzi1_12[0] + jinengjiachengzhi1_12 + this.caidejinengwenzi1_12[1];
                }
                else if (this.caidejineng1_12 == "20002") {
                    this.caidejinengwenzi1_12 = this.caidejinengwenzi1_12.split("&1");
                    jinengjiachengzhi1_12 = parseInt(Gerenshuxing.jinengbiao[j].chushizhi) + zuizhonglazhi * parseFloat(Gerenshuxing.jinengbiao[j].jiacheng);
                    jinengjiachengzhi1_12 = Math.floor(jinengjiachengzhi1_12);
                    this.caidejinengwenzi1_12 = this.caidejinengwenzi1_12[0] + jinengjiachengzhi1_12 + this.caidejinengwenzi1_12[1];
                }
                else if (this.caidejineng1_12 == "20003") {
                    this.caidejinengwenzi1_12 = this.caidejinengwenzi1_12.split("&1");
                    jinengjiachengzhi1_12 = parseInt(Gerenshuxing.jinengbiao[j].chushizhi) + zuizhonglazhi * parseFloat(Gerenshuxing.jinengbiao[j].jiacheng);
                    jinengjiachengzhi1_12 = Math.floor(jinengjiachengzhi1_12);
                    this.caidejinengwenzi1_12 = this.caidejinengwenzi1_12[0] + jinengjiachengzhi1_12 + this.caidejinengwenzi1_12[1];
                }
                else if (this.caidejineng1_12 == "20004") {
                    this.caidejinengwenzi1_12 = this.caidejinengwenzi1_12.split("&1");
                    jinengjiachengzhi1_12 = parseInt(Gerenshuxing.jinengbiao[j].chushizhi) + zuizhonglazhi * parseFloat(Gerenshuxing.jinengbiao[j].jiacheng);
                    jinengjiachengzhi1_12 = Math.floor(jinengjiachengzhi1_12);
                    this.caidejinengwenzi1_12 = this.caidejinengwenzi1_12[0] + jinengjiachengzhi1_12 + this.caidejinengwenzi1_12[1];
                }
                else if (this.caidejineng1_12 == "20005") {
                    this.caidejinengwenzi1_12 = this.caidejinengwenzi1_12.split("&1");
                    jinengjiachengzhi1_12 = parseInt(Gerenshuxing.jinengbiao[j].chushizhi) + zuizhongtianzhi * parseFloat(Gerenshuxing.jinengbiao[j].jiacheng);
                    jinengjiachengzhi1_12 = Math.floor(jinengjiachengzhi1_12);
                    this.caidejinengwenzi1_12 = this.caidejinengwenzi1_12[0] + jinengjiachengzhi1_12 + this.caidejinengwenzi1_12[1];
                }
                else if (this.caidejineng1_12 == "20006") {
                    this.caidejinengwenzi1_12 = this.caidejinengwenzi1_12.split("&1");
                    jinengjiachengzhi1_12 = parseInt(Gerenshuxing.jinengbiao[j].chushizhi) + zuizhongtianzhi * parseFloat(Gerenshuxing.jinengbiao[j].jiacheng);
                    jinengjiachengzhi1_12 = Math.floor(jinengjiachengzhi1_12);
                    this.caidejinengwenzi1_12 = this.caidejinengwenzi1_12[0] + jinengjiachengzhi1_12 + this.caidejinengwenzi1_12[1];
                }
                else if (this.caidejineng1_12 == "20009") {
                    this.caidejinengwenzi1_12 = this.caidejinengwenzi1_12.split("&1");
                    jinengjiachengzhi1_12 = parseInt(Gerenshuxing.jinengbiao[j].chushizhi) + zuizhonglazhi * parseFloat(Gerenshuxing.jinengbiao[j].jiacheng);
                    jinengjiachengzhi1_12 = Math.floor(jinengjiachengzhi1_12);
                    this.caidejinengwenzi1_12 = this.caidejinengwenzi1_12[0] + jinengjiachengzhi1_12 + this.caidejinengwenzi1_12[1];
                }
                else if (this.caidejineng1_12 == "20010") {
                    this.caidejinengwenzi1_12 = this.caidejinengwenzi1_12.split("&1");
                    jinengjiachengzhi1_12 = parseInt(Gerenshuxing.jinengbiao[j].chushizhi) + zuizhongtianzhi * parseFloat(Gerenshuxing.jinengbiao[j].jiacheng);
                    jinengjiachengzhi1_12 = Math.floor(jinengjiachengzhi1_12);
                    this.caidejinengwenzi1_12 = this.caidejinengwenzi1_12[0] + jinengjiachengzhi1_12 + this.caidejinengwenzi1_12[1];
                }
                else if (this.caidejineng1_12 == "20011") {
                    this.caidejinengwenzi1_12 = this.caidejinengwenzi1_12.split("&1");
                    jinengjiachengzhi1_12 = parseInt(Gerenshuxing.jinengbiao[j].chushizhi) + zuizhongsuanzhi * parseFloat(Gerenshuxing.jinengbiao[j].jiacheng);
                    jinengjiachengzhi1_12 = Math.floor(jinengjiachengzhi1_12);
                    this.caidejinengwenzi1_12 = this.caidejinengwenzi1_12[0] + jinengjiachengzhi1_12 + this.caidejinengwenzi1_12[1];
                }
                else if (this.caidejineng1_12 == "20012") {
                    this.caidejinengwenzi1_12 = this.caidejinengwenzi1_12.split("&1");
                    jinengjiachengzhi1_12 = parseInt(Gerenshuxing.jinengbiao[j].chushizhi) + zuizhongmazhi * parseFloat(Gerenshuxing.jinengbiao[j].jiacheng);
                    jinengjiachengzhi1_12 = Math.floor(jinengjiachengzhi1_12);
                    this.caidejinengwenzi1_12 = this.caidejinengwenzi1_12[0] + jinengjiachengzhi1_12 + this.caidejinengwenzi1_12[1];
                }
                else if (this.caidejineng1_12 == "20013") {
                    this.caidejinengwenzi1_12 = this.caidejinengwenzi1_12.split("&1");
                    jinengjiachengzhi1_12 = parseInt(Gerenshuxing.jinengbiao[j].chushizhi) + zuizhongsuanzhi * parseFloat(Gerenshuxing.jinengbiao[j].jiacheng);
                    jinengjiachengzhi1_12 = Math.floor(jinengjiachengzhi1_12);
                    this.caidejinengwenzi1_12 = this.caidejinengwenzi1_12[0] + jinengjiachengzhi1_12 + this.caidejinengwenzi1_12[1];
                }
                else if (this.caidejineng1_12 == "20014") {
                    this.caidejinengwenzi1_12 = this.caidejinengwenzi1_12.split("&1");
                    jinengjiachengzhi1_12 = parseInt(Gerenshuxing.jinengbiao[j].chushizhi) + zuizhongsuanzhi * parseFloat(Gerenshuxing.jinengbiao[j].jiacheng);
                    jinengjiachengzhi1_12 = Math.floor(jinengjiachengzhi1_12);
                    this.caidejinengwenzi1_12 = this.caidejinengwenzi1_12[0] + jinengjiachengzhi1_12 + this.caidejinengwenzi1_12[1];
                }
                else if (this.caidejineng1_12 == "20015") {
                    this.caidejinengwenzi1_12 = this.caidejinengwenzi1_12.split("&1");
                    jinengjiachengzhi1_12 = parseInt(Gerenshuxing.jinengbiao[j].chushizhi) + zuizhongsuanzhi * parseFloat(Gerenshuxing.jinengbiao[j].jiacheng);
                    jinengjiachengzhi1_12 = Math.floor(jinengjiachengzhi1_12);
                    this.caidejinengwenzi1_12 = this.caidejinengwenzi1_12[0] + jinengjiachengzhi1_12 + this.caidejinengwenzi1_12[1];
                }
                else if (this.caidejineng1_12 == "20016") {
                    this.caidejinengwenzi1_12 = this.caidejinengwenzi1_12.split("&1");
                    jinengjiachengzhi1_12 = parseInt(Gerenshuxing.jinengbiao[j].chushizhi) + zuizhongmazhi * parseFloat(Gerenshuxing.jinengbiao[j].jiacheng);
                    jinengjiachengzhi1_12 = Math.floor(jinengjiachengzhi1_12);
                    this.caidejinengwenzi1_12 = this.caidejinengwenzi1_12[0] + jinengjiachengzhi1_12 + this.caidejinengwenzi1_12[1];
                }
                else if (this.caidejineng1_12 == "20017") {
                    this.caidejinengwenzi1_12 = this.caidejinengwenzi1_12.split("&1");
                    jinengjiachengzhi1_12 = parseInt(Gerenshuxing.jinengbiao[j].chushizhi) + zuizhongmazhi * parseFloat(Gerenshuxing.jinengbiao[j].jiacheng);
                    jinengjiachengzhi1_12 = Math.floor(jinengjiachengzhi1_12);
                    this.caidejinengwenzi1_12 = this.caidejinengwenzi1_12[0] + jinengjiachengzhi1_12 + this.caidejinengwenzi1_12[1];
                }
                else if (this.caidejineng1_12 == "20018") {
                    this.caidejinengwenzi1_12 = this.caidejinengwenzi1_12.split("&1");
                    jinengjiachengzhi1_12 = parseInt(Gerenshuxing.jinengbiao[j].chushizhi) + zuizhongtianzhi * parseFloat(Gerenshuxing.jinengbiao[j].jiacheng);
                    jinengjiachengzhi1_12 = Math.floor(jinengjiachengzhi1_12);
                    this.caidejinengwenzi1_12 = this.caidejinengwenzi1_12[0] + jinengjiachengzhi1_12 + this.caidejinengwenzi1_12[1];
                }
                else if (this.caidejineng1_12 == "20019") {
                    this.caidejinengwenzi1_12 = this.caidejinengwenzi1_12.split("&1");
                    jinengjiachengzhi1_12 = parseInt(Gerenshuxing.jinengbiao[j].chushizhi) + zuizhongsuanzhi * parseFloat(Gerenshuxing.jinengbiao[j].jiacheng);
                    jinengjiachengzhi1_12 = Math.floor(jinengjiachengzhi1_12);
                    this.caidejinengwenzi1_12 = this.caidejinengwenzi1_12[0] + jinengjiachengzhi1_12 + this.caidejinengwenzi1_12[1];
                }
                else if (this.caidejineng1_12 == "20021") {
                    this.caidejinengwenzi1_12 = this.caidejinengwenzi1_12.split("&1");
                    jinengjiachengzhi1_12 = parseInt(Gerenshuxing.jinengbiao[j].chushizhi) + zuizhongsuanzhi * parseFloat(Gerenshuxing.jinengbiao[j].jiacheng);
                    jinengjiachengzhi1_12 = Math.floor(jinengjiachengzhi1_12);
                    this.caidejinengwenzi1_12 = this.caidejinengwenzi1_12[0] + jinengjiachengzhi1_12 + this.caidejinengwenzi1_12[1];
                }
                else if (this.caidejineng1_12 == "20022") {
                    this.caidejinengwenzi1_12 = this.caidejinengwenzi1_12.split("&1");
                    jinengjiachengzhi1_12 = parseInt(Gerenshuxing.jinengbiao[j].chushizhi) + zuizhongmazhi * parseFloat(Gerenshuxing.jinengbiao[j].jiacheng);
                    jinengjiachengzhi1_12 = Math.floor(jinengjiachengzhi1_12);
                    this.caidejinengwenzi1_12 = this.caidejinengwenzi1_12[0] + jinengjiachengzhi1_12 + this.caidejinengwenzi1_12[1];
                }
                else if (this.caidejineng1_12 == "20023") {
                    this.caidejinengwenzi1_12 = this.caidejinengwenzi1_12.split("&1");
                    jinengjiachengzhi1_12 = parseInt(Gerenshuxing.jinengbiao[j].chushizhi) + zuizhongtianzhi * parseFloat(Gerenshuxing.jinengbiao[j].jiacheng);
                    jinengjiachengzhi1_12 = Math.floor(jinengjiachengzhi1_12);
                    this.caidejinengwenzi1_12 = this.caidejinengwenzi1_12[0] + jinengjiachengzhi1_12 + this.caidejinengwenzi1_12[1];
                }
                else if (this.caidejineng1_12 == "20024") {
                    this.caidejinengwenzi1_12 = this.caidejinengwenzi1_12.split("&1");
                    jinengjiachengzhi1_12 = parseInt(Gerenshuxing.jinengbiao[j].chushizhi) + zuizhonglazhi * parseFloat(Gerenshuxing.jinengbiao[j].jiacheng);
                    jinengjiachengzhi1_12 = Math.floor(jinengjiachengzhi1_12);
                    this.caidejinengwenzi1_12 = this.caidejinengwenzi1_12[0] + jinengjiachengzhi1_12 + this.caidejinengwenzi1_12[1];
                }
            }
            if (Gerenshuxing.jinengbiao[j].id == this.caidejineng1_13) {
                this.caidejinengmingzi1_13 = Gerenshuxing.jinengbiao[j].mingcheng;
                this.caidejinengtupian1_13 = Gerenshuxing.jinengbiao[j].jinengicon;
                this.caidejinengwenzi1_13 = Gerenshuxing.jinengbiao[j].tips;
                var jinengjiachengzhi1_13 = 0;
                if (this.caidejineng1_13 == "20001") {
                    this.caidejinengwenzi1_13 = this.caidejinengwenzi1_13.split("&1");
                    jinengjiachengzhi1_13 = parseInt(Gerenshuxing.jinengbiao[j].chushizhi) + zuizhonglazhi * parseFloat(Gerenshuxing.jinengbiao[j].jiacheng);
                    jinengjiachengzhi1_13 = Math.floor(jinengjiachengzhi1_13);
                    this.caidejinengwenzi1_13 = this.caidejinengwenzi1_13[0] + jinengjiachengzhi1_13 + this.caidejinengwenzi1_13[1];
                }
                else if (this.caidejineng1_13 == "20002") {
                    this.caidejinengwenzi1_13 = this.caidejinengwenzi1_13.split("&1");
                    jinengjiachengzhi1_13 = parseInt(Gerenshuxing.jinengbiao[j].chushizhi) + zuizhonglazhi * parseFloat(Gerenshuxing.jinengbiao[j].jiacheng);
                    jinengjiachengzhi1_13 = Math.floor(jinengjiachengzhi1_13);
                    this.caidejinengwenzi1_13 = this.caidejinengwenzi1_13[0] + jinengjiachengzhi1_13 + this.caidejinengwenzi1_13[1];
                }
                else if (this.caidejineng1_13 == "20003") {
                    this.caidejinengwenzi1_13 = this.caidejinengwenzi1_13.split("&1");
                    jinengjiachengzhi1_13 = parseInt(Gerenshuxing.jinengbiao[j].chushizhi) + zuizhonglazhi * parseFloat(Gerenshuxing.jinengbiao[j].jiacheng);
                    jinengjiachengzhi1_13 = Math.floor(jinengjiachengzhi1_13);
                    this.caidejinengwenzi1_13 = this.caidejinengwenzi1_13[0] + jinengjiachengzhi1_13 + this.caidejinengwenzi1_13[1];
                }
                else if (this.caidejineng1_13 == "20004") {
                    this.caidejinengwenzi1_13 = this.caidejinengwenzi1_13.split("&1");
                    jinengjiachengzhi1_13 = parseInt(Gerenshuxing.jinengbiao[j].chushizhi) + zuizhonglazhi * parseFloat(Gerenshuxing.jinengbiao[j].jiacheng);
                    jinengjiachengzhi1_13 = Math.floor(jinengjiachengzhi1_13);
                    this.caidejinengwenzi1_13 = this.caidejinengwenzi1_13[0] + jinengjiachengzhi1_13 + this.caidejinengwenzi1_13[1];
                }
                else if (this.caidejineng1_13 == "20005") {
                    this.caidejinengwenzi1_13 = this.caidejinengwenzi1_13.split("&1");
                    jinengjiachengzhi1_13 = parseInt(Gerenshuxing.jinengbiao[j].chushizhi) + zuizhongtianzhi * parseFloat(Gerenshuxing.jinengbiao[j].jiacheng);
                    jinengjiachengzhi1_13 = Math.floor(jinengjiachengzhi1_13);
                    this.caidejinengwenzi1_13 = this.caidejinengwenzi1_13[0] + jinengjiachengzhi1_13 + this.caidejinengwenzi1_13[1];
                }
                else if (this.caidejineng1_13 == "20006") {
                    this.caidejinengwenzi1_13 = this.caidejinengwenzi1_13.split("&1");
                    jinengjiachengzhi1_13 = parseInt(Gerenshuxing.jinengbiao[j].chushizhi) + zuizhongtianzhi * parseFloat(Gerenshuxing.jinengbiao[j].jiacheng);
                    jinengjiachengzhi1_13 = Math.floor(jinengjiachengzhi1_13);
                    this.caidejinengwenzi1_13 = this.caidejinengwenzi1_13[0] + jinengjiachengzhi1_13 + this.caidejinengwenzi1_13[1];
                }
                else if (this.caidejineng1_13 == "20009") {
                    this.caidejinengwenzi1_13 = this.caidejinengwenzi1_13.split("&1");
                    jinengjiachengzhi1_13 = parseInt(Gerenshuxing.jinengbiao[j].chushizhi) + zuizhonglazhi * parseFloat(Gerenshuxing.jinengbiao[j].jiacheng);
                    jinengjiachengzhi1_13 = Math.floor(jinengjiachengzhi1_13);
                    this.caidejinengwenzi1_13 = this.caidejinengwenzi1_13[0] + jinengjiachengzhi1_13 + this.caidejinengwenzi1_13[1];
                }
                else if (this.caidejineng1_13 == "20010") {
                    this.caidejinengwenzi1_13 = this.caidejinengwenzi1_13.split("&1");
                    jinengjiachengzhi1_13 = parseInt(Gerenshuxing.jinengbiao[j].chushizhi) + zuizhongtianzhi * parseFloat(Gerenshuxing.jinengbiao[j].jiacheng);
                    jinengjiachengzhi1_13 = Math.floor(jinengjiachengzhi1_13);
                    this.caidejinengwenzi1_13 = this.caidejinengwenzi1_13[0] + jinengjiachengzhi1_13 + this.caidejinengwenzi1_13[1];
                }
                else if (this.caidejineng1_13 == "20011") {
                    this.caidejinengwenzi1_13 = this.caidejinengwenzi1_13.split("&1");
                    jinengjiachengzhi1_13 = parseInt(Gerenshuxing.jinengbiao[j].chushizhi) + zuizhongsuanzhi * parseFloat(Gerenshuxing.jinengbiao[j].jiacheng);
                    jinengjiachengzhi1_13 = Math.floor(jinengjiachengzhi1_13);
                    this.caidejinengwenzi1_13 = this.caidejinengwenzi1_13[0] + jinengjiachengzhi1_13 + this.caidejinengwenzi1_13[1];
                }
                else if (this.caidejineng1_13 == "20012") {
                    this.caidejinengwenzi1_13 = this.caidejinengwenzi1_13.split("&1");
                    jinengjiachengzhi1_13 = parseInt(Gerenshuxing.jinengbiao[j].chushizhi) + zuizhongmazhi * parseFloat(Gerenshuxing.jinengbiao[j].jiacheng);
                    jinengjiachengzhi1_13 = Math.floor(jinengjiachengzhi1_13);
                    this.caidejinengwenzi1_13 = this.caidejinengwenzi1_13[0] + jinengjiachengzhi1_13 + this.caidejinengwenzi1_13[1];
                }
                else if (this.caidejineng1_13 == "20013") {
                    this.caidejinengwenzi1_13 = this.caidejinengwenzi1_13.split("&1");
                    jinengjiachengzhi1_13 = parseInt(Gerenshuxing.jinengbiao[j].chushizhi) + zuizhongsuanzhi * parseFloat(Gerenshuxing.jinengbiao[j].jiacheng);
                    jinengjiachengzhi1_13 = Math.floor(jinengjiachengzhi1_13);
                    this.caidejinengwenzi1_13 = this.caidejinengwenzi1_13[0] + jinengjiachengzhi1_13 + this.caidejinengwenzi1_13[1];
                }
                else if (this.caidejineng1_13 == "20014") {
                    this.caidejinengwenzi1_13 = this.caidejinengwenzi1_13.split("&1");
                    jinengjiachengzhi1_13 = parseInt(Gerenshuxing.jinengbiao[j].chushizhi) + zuizhongsuanzhi * parseFloat(Gerenshuxing.jinengbiao[j].jiacheng);
                    jinengjiachengzhi1_13 = Math.floor(jinengjiachengzhi1_13);
                    this.caidejinengwenzi1_13 = this.caidejinengwenzi1_13[0] + jinengjiachengzhi1_13 + this.caidejinengwenzi1_13[1];
                }
                else if (this.caidejineng1_13 == "20015") {
                    this.caidejinengwenzi1_13 = this.caidejinengwenzi1_13.split("&1");
                    jinengjiachengzhi1_13 = parseInt(Gerenshuxing.jinengbiao[j].chushizhi) + zuizhongsuanzhi * parseFloat(Gerenshuxing.jinengbiao[j].jiacheng);
                    jinengjiachengzhi1_13 = Math.floor(jinengjiachengzhi1_13);
                    this.caidejinengwenzi1_13 = this.caidejinengwenzi1_13[0] + jinengjiachengzhi1_13 + this.caidejinengwenzi1_13[1];
                }
                else if (this.caidejineng1_13 == "20016") {
                    this.caidejinengwenzi1_13 = this.caidejinengwenzi1_13.split("&1");
                    jinengjiachengzhi1_13 = parseInt(Gerenshuxing.jinengbiao[j].chushizhi) + zuizhongmazhi * parseFloat(Gerenshuxing.jinengbiao[j].jiacheng);
                    jinengjiachengzhi1_13 = Math.floor(jinengjiachengzhi1_13);
                    this.caidejinengwenzi1_13 = this.caidejinengwenzi1_13[0] + jinengjiachengzhi1_13 + this.caidejinengwenzi1_13[1];
                }
                else if (this.caidejineng1_13 == "20017") {
                    this.caidejinengwenzi1_13 = this.caidejinengwenzi1_13.split("&1");
                    jinengjiachengzhi1_13 = parseInt(Gerenshuxing.jinengbiao[j].chushizhi) + zuizhongmazhi * parseFloat(Gerenshuxing.jinengbiao[j].jiacheng);
                    jinengjiachengzhi1_13 = Math.floor(jinengjiachengzhi1_13);
                    this.caidejinengwenzi1_13 = this.caidejinengwenzi1_13[0] + jinengjiachengzhi1_13 + this.caidejinengwenzi1_13[1];
                }
                else if (this.caidejineng1_13 == "20018") {
                    this.caidejinengwenzi1_13 = this.caidejinengwenzi1_13.split("&1");
                    jinengjiachengzhi1_13 = parseInt(Gerenshuxing.jinengbiao[j].chushizhi) + zuizhongtianzhi * parseFloat(Gerenshuxing.jinengbiao[j].jiacheng);
                    jinengjiachengzhi1_13 = Math.floor(jinengjiachengzhi1_13);
                    this.caidejinengwenzi1_13 = this.caidejinengwenzi1_13[0] + jinengjiachengzhi1_13 + this.caidejinengwenzi1_13[1];
                }
                else if (this.caidejineng1_13 == "20019") {
                    this.caidejinengwenzi1_13 = this.caidejinengwenzi1_13.split("&1");
                    jinengjiachengzhi1_13 = parseInt(Gerenshuxing.jinengbiao[j].chushizhi) + zuizhongsuanzhi * parseFloat(Gerenshuxing.jinengbiao[j].jiacheng);
                    jinengjiachengzhi1_13 = Math.floor(jinengjiachengzhi1_13);
                    this.caidejinengwenzi1_13 = this.caidejinengwenzi1_13[0] + jinengjiachengzhi1_13 + this.caidejinengwenzi1_13[1];
                }
                else if (this.caidejineng1_13 == "20021") {
                    this.caidejinengwenzi1_13 = this.caidejinengwenzi1_13.split("&1");
                    jinengjiachengzhi1_13 = parseInt(Gerenshuxing.jinengbiao[j].chushizhi) + zuizhongsuanzhi * parseFloat(Gerenshuxing.jinengbiao[j].jiacheng);
                    jinengjiachengzhi1_13 = Math.floor(jinengjiachengzhi1_13);
                    this.caidejinengwenzi1_13 = this.caidejinengwenzi1_13[0] + jinengjiachengzhi1_13 + this.caidejinengwenzi1_13[1];
                }
                else if (this.caidejineng1_13 == "20022") {
                    this.caidejinengwenzi1_13 = this.caidejinengwenzi1_13.split("&1");
                    jinengjiachengzhi1_13 = parseInt(Gerenshuxing.jinengbiao[j].chushizhi) + zuizhongmazhi * parseFloat(Gerenshuxing.jinengbiao[j].jiacheng);
                    jinengjiachengzhi1_13 = Math.floor(jinengjiachengzhi1_13);
                    this.caidejinengwenzi1_13 = this.caidejinengwenzi1_13[0] + jinengjiachengzhi1_13 + this.caidejinengwenzi1_13[1];
                }
                else if (this.caidejineng1_13 == "20023") {
                    this.caidejinengwenzi1_13 = this.caidejinengwenzi1_13.split("&1");
                    jinengjiachengzhi1_13 = parseInt(Gerenshuxing.jinengbiao[j].chushizhi) + zuizhongtianzhi * parseFloat(Gerenshuxing.jinengbiao[j].jiacheng);
                    jinengjiachengzhi1_13 = Math.floor(jinengjiachengzhi1_13);
                    this.caidejinengwenzi1_13 = this.caidejinengwenzi1_13[0] + jinengjiachengzhi1_13 + this.caidejinengwenzi1_13[1];
                }
                else if (this.caidejineng1_13 == "20024") {
                    this.caidejinengwenzi1_13 = this.caidejinengwenzi1_13.split("&1");
                    jinengjiachengzhi1_13 = parseInt(Gerenshuxing.jinengbiao[j].chushizhi) + zuizhonglazhi * parseFloat(Gerenshuxing.jinengbiao[j].jiacheng);
                    jinengjiachengzhi1_13 = Math.floor(jinengjiachengzhi1_13);
                    this.caidejinengwenzi1_13 = this.caidejinengwenzi1_13[0] + jinengjiachengzhi1_13 + this.caidejinengwenzi1_13[1];
                }
            }
        }
        this.xianshijieshaojiemian(caiid);
    };
    Caipujiemian.prototype.dianjishangfanye = function () {
        Gamesound.Soundkongzhi().anniuyinxiao();
        if (this.dangqianyeshu > 1) {
            this.dangqianyeshu = this.dangqianyeshu - 1;
            this.but_down.enabled = true;
            if (this.dangqianyeshu <= 1) {
                this.but_up.enabled = false;
            }
            this.chulishujujiegou(this.dangqianyeqianshu, this.dangqianyeshu);
        }
    };
    Caipujiemian.prototype.dianjixiafanye = function () {
        Gamesound.Soundkongzhi().anniuyinxiao();
        if (this.dangqianyeqianshu == 1 && this.dangqianyeshu < this.xiaochaoyeshu) {
            this.dangqianyeshu += 1;
            this.but_up.enabled = true;
            if (this.dangqianyeqianshu == 1 && this.dangqianyeshu >= this.xiaochaoyeshu) {
                this.but_down.enabled = false;
            }
            this.chulishujujiegou(this.dangqianyeqianshu, this.dangqianyeshu);
        }
        else if (this.dangqianyeqianshu == 2 && this.dangqianyeshu < this.huoguoyeshu) {
            this.dangqianyeshu += 1;
            this.but_up.enabled = true;
            if (this.dangqianyeqianshu == 2 && this.dangqianyeshu >= this.huoguoyeshu) {
                this.but_down.enabled = false;
            }
            this.chulishujujiegou(this.dangqianyeqianshu, this.dangqianyeshu);
        }
        else if (this.dangqianyeqianshu == 3 && this.dangqianyeshu < this.xiaochiyeshu) {
            this.dangqianyeshu += 1;
            this.but_up.enabled = true;
            if (this.dangqianyeqianshu == 3 && this.dangqianyeshu >= this.xiaochiyeshu) {
                this.but_down.enabled = false;
            }
            this.chulishujujiegou(this.dangqianyeqianshu, this.dangqianyeshu);
        }
        else if (this.dangqianyeqianshu == 4 && this.dangqianyeshu < this.dianxinyeshu) {
            this.dangqianyeshu += 1;
            this.but_up.enabled = true;
            if (this.dangqianyeqianshu == 4 && this.dangqianyeshu >= this.dianxinyeshu) {
                this.but_down.enabled = false;
            }
            this.chulishujujiegou(this.dangqianyeqianshu, this.dangqianyeshu);
        }
    };
    Caipujiemian.prototype.guanbianniu = function () {
        Gamesound.Soundkongzhi().anniuyinxiao();
        Gameguanli.Kongzhitai().caipujiemian("fandian", "guan");
    };
    Caipujiemian.prototype.dianjixiaocai = function () {
        Gamesound.Soundkongzhi().anniuyinxiao();
        //调用移除当前已显示界面内容；
        this.but_peng.enabled = false;
        this.but_jian.enabled = true;
        this.but_zha.enabled = true;
        this.but_zhu.enabled = true;
        this.but_up.enabled = false;
        this.but_down.enabled = true;
        this.chulishujujiegou(1, 1);
        //		this.xiaochidiaodu();
    };
    Caipujiemian.prototype.dianjihuoguo = function () {
        Gamesound.Soundkongzhi().anniuyinxiao();
        //调用移除当前已显示界面内容；
        this.but_peng.enabled = true;
        this.but_jian.enabled = true;
        this.but_zha.enabled = false;
        this.but_zhu.enabled = true;
        this.but_up.enabled = false;
        this.but_down.enabled = true;
        this.chulishujujiegou(2, 1);
    };
    Caipujiemian.prototype.dianjixiaochi = function () {
        Gamesound.Soundkongzhi().anniuyinxiao();
        //调用移除当前已显示界面内容；
        this.but_peng.enabled = true;
        this.but_jian.enabled = false;
        this.but_zha.enabled = true;
        this.but_zhu.enabled = true;
        this.but_up.enabled = false;
        this.but_down.enabled = true;
        this.chulishujujiegou(3, 1);
    };
    Caipujiemian.prototype.dianjidianxin = function () {
        Gamesound.Soundkongzhi().anniuyinxiao();
        //调用移除当前已显示界面内容；
        this.but_peng.enabled = true;
        this.but_jian.enabled = true;
        this.but_zha.enabled = true;
        this.but_zhu.enabled = false;
        this.but_up.enabled = false;
        this.but_down.enabled = true;
        this.chulishujujiegou(4, 1);
    };
    //移除菜品显示列表内容；
    Caipujiemian.prototype.yichucaipingneirong = function () {
        if (this.xiaoChicaipin.parent) {
            this.removeChild(this.xiaoChicaipin);
        }
    };
    //初始化时显示内容；
    Caipujiemian.prototype.chushihuacaipin = function () {
        this.but_peng.enabled = false;
        this.but_up.enabled = false;
        this.addChild(this.xiaoChicaipin);
        //		console.log(this.xiaoChicaipin.caipinicon0.source);
        this.chulishujujiegou(1, 1);
    };
    Caipujiemian.prototype.fanyeyehaoshuaxin = function () {
        switch (this.dangqianyeqianshu) {
            case 1:
                this.yemainwenzi.text = "第 " + this.dangqianyeshu + " / " + this.xiaochaoyeshu + " 页";
                break;
            case 2:
                this.yemainwenzi.text = "第 " + this.dangqianyeshu + " / " + this.huoguoyeshu + " 页";
                break;
            case 3:
                this.yemainwenzi.text = "第 " + this.dangqianyeshu + " / " + this.xiaochiyeshu + " 页";
                break;
            case 4:
                this.yemainwenzi.text = "第 " + this.dangqianyeshu + " / " + this.dianxinyeshu + " 页";
                break;
            default:
                this.yemainwenzi.text = "第未知页";
        }
    };
    //判断每个显示格子的具体显示内容
    Caipujiemian.prototype.panduanxianshineirong = function (leixingxuhao, leixingdizhi, leixingxiabiao) {
        this.addChild(this.xiaoChicaipin);
        if (leixingxuhao == 1) {
            //				console.log(leixingxuhao,leixingdizhi,leixingxiabiao);
            if (leixingdizhi[leixingxiabiao] !== undefined) {
                /*this.dianjicaipin1(leixingdizhi[leixingxiabiao].foodName,leixingdizhi[leixingxiabiao].id,leixingdizhi[leixingxiabiao].foodPrice,leixingdizhi[leixingxiabiao].foodMaterials,leixingdizhi[leixingxiabiao].foodIntroduce);*/
                if (leixingdizhi[leixingxiabiao].islock == 1) {
                    this.xiaoChicaipin.caipinicon0.source = leixingdizhi[leixingxiabiao].id + "_png";
                    this.xiaoChicaipin.caipinname0.text = leixingdizhi[leixingxiabiao].foodName;
                    this.xiaoChicaipin.caipinjiagezhi0.text = "+ " + leixingdizhi[leixingxiabiao].foodPrice;
                    this.xiaoChicaipin.caipinjiagezhi0.textColor = 0x3EE016;
                    this.xiaoChicaipin.img_caipandiban0.source = "img_caipandiban_png";
                    this.xiaoChicaipin.jiagetubiao0.source = "img_qian_png";
                    this.xiaoChicaipin.but_jiesuo0.alpha = 0;
                    this.xiaoChicaipin.but_jiesuo0.enabled = false;
                    this.xiaoChicaipin.img_weihuode0.source = "";
                    this.di1caiid = leixingdizhi[leixingxiabiao].id;
                    var dengji1 = Gerencaipudengji.caipulevel;
                    for (var h in dengji1) {
                        if (h == leixingdizhi[leixingxiabiao].id) {
                            this.xiaoChicaipin.levelwenzi0.text = dengji1[h][0];
                            this.xiaoChicaipin.img_dengjitubiao0.alpha = 1;
                        }
                    }
                    this.xiaoChicaipin.caipinicon0.touchEnabled = true;
                    this.xiaoChicaipin.caipinicon0.addEventListener(egret.TouchEvent.TOUCH_TAP, this.dianjicai1, this);
                }
                else if (leixingdizhi[leixingxiabiao].islock == 0) {
                    this.xiaoChicaipin.caipinicon0.source = leixingdizhi[leixingxiabiao].id + "_png";
                    this.xiaoChicaipin.caipinname0.text = leixingdizhi[leixingxiabiao].foodName;
                    this.xiaoChicaipin.caipinjiagezhi0.text = "- " + leixingdizhi[leixingxiabiao].acrtivatePrice;
                    this.xiaoChicaipin.caipinjiagezhi0.textColor = 0xDB1515;
                    this.xiaoChicaipin.img_caipandiban0.source = "img_caipandiban1_png";
                    this.xiaoChicaipin.jiagetubiao0.source = "img_qian_png";
                    this.xiaoChicaipin.but_jiesuo0.alpha = 1;
                    this.xiaoChicaipin.but_jiesuo0.enabled = true;
                    this.xiaoChicaipin.but_jiesuo0.touchEnabled = true;
                    this.xiaoChicaipin.but_jiesuo0.touchChildren = true;
                    this.xiaoChicaipin.img_weihuode0.source = "img_weihuode_png";
                    this.di1caiid = leixingdizhi[leixingxiabiao].id;
                    this.xiaoChicaipin.levelwenzi0.text = "";
                    this.xiaoChicaipin.img_dengjitubiao0.alpha = 0;
                    this.xiaoChicaipin.caipinicon0.touchEnabled = false;
                    this.xiaoChicaipin.caipinicon0.removeEventListener(egret.TouchEvent.TOUCH_TAP, this.dianjicai1, this);
                }
                else {
                    this.xiaoChicaipin.caipinicon0.source = leixingdizhi[leixingxiabiao].id + "_png";
                    this.xiaoChicaipin.caipinname0.text = leixingdizhi[leixingxiabiao].foodName;
                    this.xiaoChicaipin.caipinjiagezhi0.text = "特殊途径获取";
                    this.xiaoChicaipin.caipinjiagezhi0.textColor = 0x092BF7;
                    this.xiaoChicaipin.img_caipandiban0.source = "img_caipandiban1_png";
                    this.xiaoChicaipin.jiagetubiao0.source = "";
                    this.xiaoChicaipin.but_jiesuo0.alpha = 1;
                    this.xiaoChicaipin.but_jiesuo0.enabled = false;
                    this.xiaoChicaipin.img_weihuode0.source = "img_weihuode_png";
                    this.di1caiid = leixingdizhi[leixingxiabiao].id;
                    this.xiaoChicaipin.levelwenzi0.text = "";
                    this.xiaoChicaipin.img_dengjitubiao0.alpha = 0;
                    this.xiaoChicaipin.caipinicon0.touchEnabled = false;
                    this.xiaoChicaipin.caipinicon0.removeEventListener(egret.TouchEvent.TOUCH_TAP, this.dianjicai1, this);
                }
            }
            else {
                this.xiaoChicaipin.caipinicon0.source = "";
                this.xiaoChicaipin.caipinname0.text = "";
                this.xiaoChicaipin.caipinjiagezhi0.text = "";
                this.xiaoChicaipin.img_caipandiban0.source = "";
                this.xiaoChicaipin.jiagetubiao0.source = "";
                this.xiaoChicaipin.but_jiesuo0.alpha = 0;
                this.xiaoChicaipin.but_jiesuo0.enabled = false;
                this.xiaoChicaipin.img_weihuode0.source = "";
                this.xiaoChicaipin.levelwenzi0.text = "";
                this.xiaoChicaipin.img_dengjitubiao0.alpha = 0;
            }
        }
        if (leixingxuhao == 2) {
            if (leixingdizhi[leixingxiabiao] !== undefined) {
                /*this.dianjicaipin2(leixingdizhi[leixingxiabiao].foodName,leixingdizhi[leixingxiabiao].id,leixingdizhi[leixingxiabiao].foodPrice,leixingdizhi[leixingxiabiao].foodMaterials,leixingdizhi[leixingxiabiao].foodIntroduce);*/
                if (leixingdizhi[leixingxiabiao].islock == 1) {
                    this.xiaoChicaipin.caipinicon1.source = leixingdizhi[leixingxiabiao].id + "_png";
                    this.xiaoChicaipin.caipinname1.text = leixingdizhi[leixingxiabiao].foodName;
                    this.xiaoChicaipin.caipinjiagezhi1.text = "+ " + leixingdizhi[leixingxiabiao].foodPrice;
                    this.xiaoChicaipin.caipinjiagezhi1.textColor = 0x3EE016;
                    this.xiaoChicaipin.img_caipandiban1.source = "img_caipandiban_png";
                    this.xiaoChicaipin.jiagetubiao1.source = "img_qian_png";
                    this.xiaoChicaipin.but_jiesuo1.alpha = 0;
                    this.xiaoChicaipin.but_jiesuo1.enabled = false;
                    this.xiaoChicaipin.img_weihuode1.source = "";
                    this.di2caiid = leixingdizhi[leixingxiabiao].id;
                    var dengji2 = Gerencaipudengji.caipulevel;
                    for (var h in dengji2) {
                        if (h == leixingdizhi[leixingxiabiao].id) {
                            this.xiaoChicaipin.levelwenzi1.text = dengji2[h][0];
                            this.xiaoChicaipin.img_dengjitubiao1.alpha = 1;
                        }
                    }
                    this.xiaoChicaipin.caipinicon1.touchEnabled = true;
                    this.xiaoChicaipin.caipinicon1.addEventListener(egret.TouchEvent.TOUCH_TAP, this.dianjicai2, this);
                }
                else if (leixingdizhi[leixingxiabiao].islock == 0) {
                    this.xiaoChicaipin.caipinicon1.source = leixingdizhi[leixingxiabiao].id + "_png";
                    this.xiaoChicaipin.caipinname1.text = leixingdizhi[leixingxiabiao].foodName;
                    this.xiaoChicaipin.caipinjiagezhi1.text = "- " + leixingdizhi[leixingxiabiao].acrtivatePrice;
                    this.xiaoChicaipin.caipinjiagezhi1.textColor = 0xDB1515;
                    this.xiaoChicaipin.img_caipandiban1.source = "img_caipandiban1_png";
                    this.xiaoChicaipin.jiagetubiao1.source = "img_qian_png";
                    this.xiaoChicaipin.but_jiesuo1.alpha = 1;
                    this.xiaoChicaipin.but_jiesuo1.enabled = true;
                    this.xiaoChicaipin.but_jiesuo1.touchEnabled = true;
                    this.xiaoChicaipin.but_jiesuo1.touchChildren = true;
                    this.xiaoChicaipin.img_weihuode1.source = "img_weihuode_png";
                    this.di2caiid = leixingdizhi[leixingxiabiao].id;
                    this.xiaoChicaipin.levelwenzi1.text = "";
                    this.xiaoChicaipin.img_dengjitubiao1.alpha = 0;
                    this.xiaoChicaipin.caipinicon1.touchEnabled = false;
                    this.xiaoChicaipin.caipinicon1.removeEventListener(egret.TouchEvent.TOUCH_TAP, this.dianjicai2, this);
                }
                else {
                    this.xiaoChicaipin.caipinicon1.source = leixingdizhi[leixingxiabiao].id + "_png";
                    this.xiaoChicaipin.caipinname1.text = leixingdizhi[leixingxiabiao].foodName;
                    this.xiaoChicaipin.caipinjiagezhi1.text = "特殊途径获取";
                    this.xiaoChicaipin.caipinjiagezhi1.textColor = 0x092BF7;
                    this.xiaoChicaipin.img_caipandiban1.source = "img_caipandiban1_png";
                    this.xiaoChicaipin.jiagetubiao1.source = "";
                    this.xiaoChicaipin.but_jiesuo1.alpha = 1;
                    this.xiaoChicaipin.but_jiesuo1.enabled = false;
                    this.xiaoChicaipin.img_weihuode1.source = "img_weihuode_png";
                    this.di2caiid = leixingdizhi[leixingxiabiao].id;
                    this.xiaoChicaipin.levelwenzi1.text = "";
                    this.xiaoChicaipin.img_dengjitubiao1.alpha = 0;
                    this.xiaoChicaipin.caipinicon1.touchEnabled = false;
                    this.xiaoChicaipin.caipinicon1.removeEventListener(egret.TouchEvent.TOUCH_TAP, this.dianjicai2, this);
                }
            }
            else {
                this.xiaoChicaipin.caipinicon1.source = "";
                this.xiaoChicaipin.caipinname1.text = "";
                this.xiaoChicaipin.caipinjiagezhi1.text = "";
                this.xiaoChicaipin.img_caipandiban1.source = "";
                this.xiaoChicaipin.jiagetubiao1.source = "";
                this.xiaoChicaipin.but_jiesuo1.alpha = 0;
                this.xiaoChicaipin.but_jiesuo1.enabled = false;
                this.xiaoChicaipin.img_weihuode1.source = "";
                this.xiaoChicaipin.levelwenzi1.text = "";
                this.xiaoChicaipin.img_dengjitubiao1.alpha = 0;
            }
        }
        if (leixingxuhao == 3) {
            if (leixingdizhi[leixingxiabiao] !== undefined) {
                /*this.dianjicaipin3(leixingdizhi[leixingxiabiao].foodName,leixingdizhi[leixingxiabiao].id,leixingdizhi[leixingxiabiao].foodPrice,leixingdizhi[leixingxiabiao].foodMaterials,leixingdizhi[leixingxiabiao].foodIntroduce);*/
                if (leixingdizhi[leixingxiabiao].islock == 1) {
                    this.xiaoChicaipin.caipinicon2.source = leixingdizhi[leixingxiabiao].id + "_png";
                    this.xiaoChicaipin.caipinname2.text = leixingdizhi[leixingxiabiao].foodName;
                    this.xiaoChicaipin.caipinjiagezhi2.text = "+ " + leixingdizhi[leixingxiabiao].foodPrice;
                    this.xiaoChicaipin.caipinjiagezhi2.textColor = 0x3EE016;
                    this.xiaoChicaipin.img_caipandiban2.source = "img_caipandiban_png";
                    this.xiaoChicaipin.jiagetubiao2.source = "img_qian_png";
                    this.xiaoChicaipin.but_jiesuo2.alpha = 0;
                    this.xiaoChicaipin.but_jiesuo2.enabled = false;
                    this.xiaoChicaipin.img_weihuode2.source = "";
                    this.di3caiid = leixingdizhi[leixingxiabiao].id;
                    var dengji3 = Gerencaipudengji.caipulevel;
                    for (var h in dengji3) {
                        if (h == leixingdizhi[leixingxiabiao].id) {
                            this.xiaoChicaipin.levelwenzi2.text = dengji3[h][0];
                            this.xiaoChicaipin.img_dengjitubiao2.alpha = 1;
                        }
                    }
                    this.xiaoChicaipin.caipinicon2.touchEnabled = true;
                    this.xiaoChicaipin.caipinicon2.addEventListener(egret.TouchEvent.TOUCH_TAP, this.dianjicai3, this);
                }
                else if (leixingdizhi[leixingxiabiao].islock == 0) {
                    this.xiaoChicaipin.caipinicon2.source = leixingdizhi[leixingxiabiao].id + "_png";
                    this.xiaoChicaipin.caipinname2.text = leixingdizhi[leixingxiabiao].foodName;
                    this.xiaoChicaipin.caipinjiagezhi2.text = "- " + leixingdizhi[leixingxiabiao].acrtivatePrice;
                    this.xiaoChicaipin.caipinjiagezhi2.textColor = 0xDB1515;
                    this.xiaoChicaipin.img_caipandiban2.source = "img_caipandiban1_png";
                    this.xiaoChicaipin.jiagetubiao2.source = "img_qian_png";
                    this.xiaoChicaipin.but_jiesuo2.alpha = 1;
                    this.xiaoChicaipin.but_jiesuo2.enabled = true;
                    this.xiaoChicaipin.but_jiesuo2.touchEnabled = true;
                    this.xiaoChicaipin.but_jiesuo2.touchChildren = true;
                    this.xiaoChicaipin.img_weihuode2.source = "img_weihuode_png";
                    this.di3caiid = leixingdizhi[leixingxiabiao].id;
                    this.xiaoChicaipin.levelwenzi2.text = "";
                    this.xiaoChicaipin.img_dengjitubiao2.alpha = 0;
                    this.xiaoChicaipin.caipinicon2.touchEnabled = false;
                    this.xiaoChicaipin.caipinicon2.removeEventListener(egret.TouchEvent.TOUCH_TAP, this.dianjicai3, this);
                }
                else {
                    this.xiaoChicaipin.caipinicon2.source = leixingdizhi[leixingxiabiao].id + "_png";
                    this.xiaoChicaipin.caipinname2.text = leixingdizhi[leixingxiabiao].foodName;
                    this.xiaoChicaipin.caipinjiagezhi2.text = "特殊途径获取";
                    this.xiaoChicaipin.caipinjiagezhi2.textColor = 0x092BF7;
                    this.xiaoChicaipin.img_caipandiban2.source = "img_caipandiban1_png";
                    this.xiaoChicaipin.jiagetubiao2.source = "";
                    this.xiaoChicaipin.but_jiesuo2.alpha = 1;
                    this.xiaoChicaipin.but_jiesuo2.enabled = false;
                    this.xiaoChicaipin.img_weihuode2.source = "img_weihuode_png";
                    this.di3caiid = leixingdizhi[leixingxiabiao].id;
                    this.xiaoChicaipin.levelwenzi2.text = "";
                    this.xiaoChicaipin.img_dengjitubiao2.alpha = 0;
                    this.xiaoChicaipin.caipinicon2.touchEnabled = false;
                    this.xiaoChicaipin.caipinicon2.removeEventListener(egret.TouchEvent.TOUCH_TAP, this.dianjicai3, this);
                }
            }
            else {
                this.xiaoChicaipin.caipinicon2.source = "";
                this.xiaoChicaipin.caipinname2.text = "";
                this.xiaoChicaipin.caipinjiagezhi2.text = "";
                this.xiaoChicaipin.img_caipandiban2.source = "";
                this.xiaoChicaipin.jiagetubiao2.source = "";
                this.xiaoChicaipin.but_jiesuo2.alpha = 0;
                this.xiaoChicaipin.but_jiesuo2.enabled = false;
                this.xiaoChicaipin.img_weihuode2.source = "";
                this.xiaoChicaipin.levelwenzi2.text = "";
                this.xiaoChicaipin.img_dengjitubiao2.alpha = 0;
            }
        }
        if (leixingxuhao == 4) {
            if (leixingdizhi[leixingxiabiao] !== undefined) {
                /*this.dianjicaipin4(leixingdizhi[leixingxiabiao].foodName,leixingdizhi[leixingxiabiao].id,leixingdizhi[leixingxiabiao].foodPrice,leixingdizhi[leixingxiabiao].foodMaterials,leixingdizhi[leixingxiabiao].foodIntroduce);*/
                if (leixingdizhi[leixingxiabiao].islock == 1) {
                    this.xiaoChicaipin.caipinicon3.source = leixingdizhi[leixingxiabiao].id + "_png";
                    this.xiaoChicaipin.caipinname3.text = leixingdizhi[leixingxiabiao].foodName;
                    this.xiaoChicaipin.caipinjiagezhi3.text = "+ " + leixingdizhi[leixingxiabiao].foodPrice;
                    this.xiaoChicaipin.caipinjiagezhi3.textColor = 0x3EE016;
                    this.xiaoChicaipin.img_caipandiban3.source = "img_caipandiban_png";
                    this.xiaoChicaipin.jiagetubiao3.source = "img_qian_png";
                    this.xiaoChicaipin.but_jiesuo3.alpha = 0;
                    this.xiaoChicaipin.but_jiesuo3.enabled = false;
                    this.xiaoChicaipin.img_weihuode3.source = "";
                    this.di4caiid = leixingdizhi[leixingxiabiao].id;
                    var dengji4 = Gerencaipudengji.caipulevel;
                    for (var h in dengji4) {
                        if (h == leixingdizhi[leixingxiabiao].id) {
                            this.xiaoChicaipin.levelwenzi3.text = dengji4[h][0];
                            this.xiaoChicaipin.img_dengjitubiao3.alpha = 1;
                        }
                    }
                    this.xiaoChicaipin.caipinicon3.touchEnabled = true;
                    this.xiaoChicaipin.caipinicon3.addEventListener(egret.TouchEvent.TOUCH_TAP, this.dianjicai4, this);
                }
                else if (leixingdizhi[leixingxiabiao].islock == 0) {
                    this.xiaoChicaipin.caipinicon3.source = leixingdizhi[leixingxiabiao].id + "_png";
                    this.xiaoChicaipin.caipinname3.text = leixingdizhi[leixingxiabiao].foodName;
                    this.xiaoChicaipin.caipinjiagezhi3.text = "- " + leixingdizhi[leixingxiabiao].acrtivatePrice;
                    this.xiaoChicaipin.caipinjiagezhi3.textColor = 0xDB1515;
                    this.xiaoChicaipin.img_caipandiban3.source = "img_caipandiban1_png";
                    this.xiaoChicaipin.jiagetubiao3.source = "img_qian_png";
                    this.xiaoChicaipin.but_jiesuo3.alpha = 1;
                    this.xiaoChicaipin.but_jiesuo3.enabled = true;
                    this.xiaoChicaipin.but_jiesuo3.touchEnabled = true;
                    this.xiaoChicaipin.but_jiesuo3.touchChildren = true;
                    this.xiaoChicaipin.img_weihuode3.source = "img_weihuode_png";
                    this.di4caiid = leixingdizhi[leixingxiabiao].id;
                    this.xiaoChicaipin.levelwenzi3.text = "";
                    this.xiaoChicaipin.img_dengjitubiao3.alpha = 0;
                    this.xiaoChicaipin.caipinicon3.touchEnabled = false;
                    this.xiaoChicaipin.caipinicon3.removeEventListener(egret.TouchEvent.TOUCH_TAP, this.dianjicai4, this);
                }
                else {
                    this.xiaoChicaipin.caipinicon3.source = leixingdizhi[leixingxiabiao].id + "_png";
                    this.xiaoChicaipin.caipinname3.text = leixingdizhi[leixingxiabiao].foodName;
                    this.xiaoChicaipin.caipinjiagezhi3.text = "特殊途径获取";
                    this.xiaoChicaipin.caipinjiagezhi3.textColor = 0x092BF7;
                    this.xiaoChicaipin.img_caipandiban3.source = "img_caipandiban1_png";
                    this.xiaoChicaipin.jiagetubiao3.source = "";
                    this.xiaoChicaipin.but_jiesuo3.alpha = 1;
                    this.xiaoChicaipin.but_jiesuo3.enabled = false;
                    this.xiaoChicaipin.img_weihuode3.source = "img_weihuode_png";
                    this.di4caiid = leixingdizhi[leixingxiabiao].id;
                    this.xiaoChicaipin.levelwenzi3.text = "";
                    this.xiaoChicaipin.img_dengjitubiao3.alpha = 0;
                    this.xiaoChicaipin.caipinicon3.touchEnabled = false;
                    this.xiaoChicaipin.caipinicon3.removeEventListener(egret.TouchEvent.TOUCH_TAP, this.dianjicai4, this);
                }
            }
            else {
                this.xiaoChicaipin.caipinicon3.source = "";
                this.xiaoChicaipin.caipinname3.text = "";
                this.xiaoChicaipin.caipinjiagezhi3.text = "";
                this.xiaoChicaipin.img_caipandiban3.source = "";
                this.xiaoChicaipin.jiagetubiao3.source = "";
                this.xiaoChicaipin.but_jiesuo3.alpha = 0;
                this.xiaoChicaipin.but_jiesuo3.enabled = false;
                this.xiaoChicaipin.img_weihuode3.source = "";
                this.xiaoChicaipin.levelwenzi3.text = "";
                this.xiaoChicaipin.img_dengjitubiao3.alpha = 0;
            }
        }
        if (leixingxuhao == 5) {
            if (leixingdizhi[leixingxiabiao] !== undefined) {
                /*this.dianjicaipin5(leixingdizhi[leixingxiabiao].foodName,leixingdizhi[leixingxiabiao].id,leixingdizhi[leixingxiabiao].foodPrice,leixingdizhi[leixingxiabiao].foodMaterials,leixingdizhi[leixingxiabiao].foodIntroduce);*/
                if (leixingdizhi[leixingxiabiao].islock == 1) {
                    this.xiaoChicaipin.caipinicon4.source = leixingdizhi[leixingxiabiao].id + "_png";
                    this.xiaoChicaipin.caipinname4.text = leixingdizhi[leixingxiabiao].foodName;
                    this.xiaoChicaipin.caipinjiagezhi4.text = "+ " + leixingdizhi[leixingxiabiao].foodPrice;
                    this.xiaoChicaipin.caipinjiagezhi4.textColor = 0x3EE016;
                    this.xiaoChicaipin.img_caipandiban4.source = "img_caipandiban_png";
                    this.xiaoChicaipin.jiagetubiao4.source = "img_qian_png";
                    this.xiaoChicaipin.but_jiesuo4.alpha = 0;
                    this.xiaoChicaipin.but_jiesuo4.enabled = false;
                    this.xiaoChicaipin.img_weihuode4.source = "";
                    this.di5caiid = leixingdizhi[leixingxiabiao].id;
                    var dengji5 = Gerencaipudengji.caipulevel;
                    for (var h in dengji5) {
                        if (h == leixingdizhi[leixingxiabiao].id) {
                            this.xiaoChicaipin.levelwenzi4.text = dengji5[h][0];
                            this.xiaoChicaipin.img_dengjitubiao4.alpha = 1;
                        }
                    }
                    this.xiaoChicaipin.caipinicon4.touchEnabled = true;
                    this.xiaoChicaipin.caipinicon4.addEventListener(egret.TouchEvent.TOUCH_TAP, this.dianjicai5, this);
                }
                else if (leixingdizhi[leixingxiabiao].islock == 0) {
                    this.xiaoChicaipin.caipinicon4.source = leixingdizhi[leixingxiabiao].id + "_png";
                    this.xiaoChicaipin.caipinname4.text = leixingdizhi[leixingxiabiao].foodName;
                    this.xiaoChicaipin.caipinjiagezhi4.text = "- " + leixingdizhi[leixingxiabiao].acrtivatePrice;
                    this.xiaoChicaipin.caipinjiagezhi4.textColor = 0xDB1515;
                    this.xiaoChicaipin.img_caipandiban4.source = "img_caipandiban1_png";
                    this.xiaoChicaipin.jiagetubiao4.source = "img_qian_png";
                    this.xiaoChicaipin.but_jiesuo4.alpha = 1;
                    this.xiaoChicaipin.but_jiesuo4.enabled = true;
                    this.xiaoChicaipin.but_jiesuo4.touchEnabled = true;
                    this.xiaoChicaipin.but_jiesuo4.touchChildren = true;
                    this.xiaoChicaipin.img_weihuode4.source = "img_weihuode_png";
                    this.di5caiid = leixingdizhi[leixingxiabiao].id;
                    this.xiaoChicaipin.levelwenzi4.text = "";
                    this.xiaoChicaipin.img_dengjitubiao4.alpha = 0;
                    this.xiaoChicaipin.caipinicon4.touchEnabled = false;
                    this.xiaoChicaipin.caipinicon4.removeEventListener(egret.TouchEvent.TOUCH_TAP, this.dianjicai5, this);
                }
                else {
                    this.xiaoChicaipin.caipinicon4.source = leixingdizhi[leixingxiabiao].id + "_png";
                    this.xiaoChicaipin.caipinname4.text = leixingdizhi[leixingxiabiao].foodName;
                    this.xiaoChicaipin.caipinjiagezhi4.text = "特殊途径获取";
                    this.xiaoChicaipin.caipinjiagezhi4.textColor = 0x092BF7;
                    this.xiaoChicaipin.img_caipandiban4.source = "img_caipandiban1_png";
                    this.xiaoChicaipin.jiagetubiao4.source = "";
                    this.xiaoChicaipin.but_jiesuo4.alpha = 1;
                    this.xiaoChicaipin.but_jiesuo4.enabled = false;
                    this.xiaoChicaipin.img_weihuode4.source = "img_weihuode_png";
                    this.di5caiid = leixingdizhi[leixingxiabiao].id;
                    this.xiaoChicaipin.levelwenzi4.text = "";
                    this.xiaoChicaipin.img_dengjitubiao4.alpha = 0;
                    this.xiaoChicaipin.caipinicon4.touchEnabled = false;
                    this.xiaoChicaipin.caipinicon4.removeEventListener(egret.TouchEvent.TOUCH_TAP, this.dianjicai5, this);
                }
            }
            else {
                this.xiaoChicaipin.caipinicon4.source = "";
                this.xiaoChicaipin.caipinname4.text = "";
                this.xiaoChicaipin.caipinjiagezhi4.text = "";
                this.xiaoChicaipin.img_caipandiban4.source = "";
                this.xiaoChicaipin.jiagetubiao4.source = "";
                this.xiaoChicaipin.but_jiesuo4.alpha = 0;
                this.xiaoChicaipin.but_jiesuo4.enabled = false;
                this.xiaoChicaipin.img_weihuode4.source = "";
                this.xiaoChicaipin.levelwenzi4.text = "";
                this.xiaoChicaipin.img_dengjitubiao4.alpha = 0;
            }
        }
        if (leixingxuhao == 6) {
            if (leixingdizhi[leixingxiabiao] !== undefined) {
                /*this.dianjicaipin6(leixingdizhi[leixingxiabiao].foodName,leixingdizhi[leixingxiabiao].id,leixingdizhi[leixingxiabiao].foodPrice,leixingdizhi[leixingxiabiao].foodMaterials,leixingdizhi[leixingxiabiao].foodIntroduce);*/
                if (leixingdizhi[leixingxiabiao].islock == 1) {
                    this.xiaoChicaipin.caipinicon5.source = leixingdizhi[leixingxiabiao].id + "_png";
                    this.xiaoChicaipin.caipinname5.text = leixingdizhi[leixingxiabiao].foodName;
                    this.xiaoChicaipin.caipinjiagezhi5.text = "+ " + leixingdizhi[leixingxiabiao].foodPrice;
                    this.xiaoChicaipin.caipinjiagezhi5.textColor = 0x3EE016;
                    this.xiaoChicaipin.img_caipandiban5.source = "img_caipandiban_png";
                    this.xiaoChicaipin.jiagetubiao5.source = "img_qian_png";
                    this.xiaoChicaipin.but_jiesuo5.alpha = 0;
                    this.xiaoChicaipin.but_jiesuo5.enabled = false;
                    this.xiaoChicaipin.img_weihuode5.source = "";
                    this.di6caiid = leixingdizhi[leixingxiabiao].id;
                    var dengji6 = Gerencaipudengji.caipulevel;
                    for (var h in dengji6) {
                        if (h == leixingdizhi[leixingxiabiao].id) {
                            this.xiaoChicaipin.levelwenzi5.text = dengji6[h][0];
                            this.xiaoChicaipin.img_dengjitubiao5.alpha = 1;
                        }
                    }
                    this.xiaoChicaipin.caipinicon5.touchEnabled = true;
                    this.xiaoChicaipin.caipinicon5.addEventListener(egret.TouchEvent.TOUCH_TAP, this.dianjicai6, this);
                }
                else if (leixingdizhi[leixingxiabiao].islock == 0) {
                    this.xiaoChicaipin.caipinicon5.source = leixingdizhi[leixingxiabiao].id + "_png";
                    this.xiaoChicaipin.caipinname5.text = leixingdizhi[leixingxiabiao].foodName;
                    this.xiaoChicaipin.caipinjiagezhi5.text = "- " + leixingdizhi[leixingxiabiao].acrtivatePrice;
                    this.xiaoChicaipin.caipinjiagezhi5.textColor = 0xDB1515;
                    this.xiaoChicaipin.img_caipandiban5.source = "img_caipandiban1_png";
                    this.xiaoChicaipin.jiagetubiao5.source = "img_qian_png";
                    this.xiaoChicaipin.but_jiesuo5.alpha = 1;
                    this.xiaoChicaipin.but_jiesuo5.enabled = true;
                    this.xiaoChicaipin.but_jiesuo5.touchEnabled = true;
                    this.xiaoChicaipin.but_jiesuo5.touchChildren = true;
                    this.xiaoChicaipin.img_weihuode5.source = "img_weihuode_png";
                    this.di6caiid = leixingdizhi[leixingxiabiao].id;
                    this.xiaoChicaipin.levelwenzi5.text = "";
                    this.xiaoChicaipin.img_dengjitubiao5.alpha = 0;
                    this.xiaoChicaipin.caipinicon5.touchEnabled = false;
                    this.xiaoChicaipin.caipinicon5.removeEventListener(egret.TouchEvent.TOUCH_TAP, this.dianjicai6, this);
                }
                else {
                    this.xiaoChicaipin.caipinicon5.source = leixingdizhi[leixingxiabiao].id + "_png";
                    this.xiaoChicaipin.caipinname5.text = leixingdizhi[leixingxiabiao].foodName;
                    this.xiaoChicaipin.caipinjiagezhi5.text = "特殊途径获取";
                    this.xiaoChicaipin.caipinjiagezhi5.textColor = 0x092BF7;
                    this.xiaoChicaipin.img_caipandiban5.source = "img_caipandiban1_png";
                    this.xiaoChicaipin.jiagetubiao5.source = "";
                    this.xiaoChicaipin.but_jiesuo5.alpha = 1;
                    this.xiaoChicaipin.but_jiesuo5.enabled = false;
                    this.xiaoChicaipin.img_weihuode5.source = "img_weihuode_png";
                    this.di6caiid = leixingdizhi[leixingxiabiao].id;
                    this.xiaoChicaipin.levelwenzi5.text = "";
                    this.xiaoChicaipin.img_dengjitubiao5.alpha = 0;
                    this.xiaoChicaipin.caipinicon5.touchEnabled = false;
                    this.xiaoChicaipin.caipinicon5.removeEventListener(egret.TouchEvent.TOUCH_TAP, this.dianjicai6, this);
                }
            }
            else {
                this.xiaoChicaipin.caipinicon5.source = "";
                this.xiaoChicaipin.caipinname5.text = "";
                this.xiaoChicaipin.caipinjiagezhi5.text = "";
                this.xiaoChicaipin.img_caipandiban5.source = "";
                this.xiaoChicaipin.jiagetubiao5.source = "";
                this.xiaoChicaipin.but_jiesuo5.alpha = 0;
                this.xiaoChicaipin.but_jiesuo5.enabled = false;
                this.xiaoChicaipin.img_weihuode5.source = "";
                this.xiaoChicaipin.levelwenzi5.text = "";
                this.xiaoChicaipin.img_dengjitubiao5.alpha = 0;
            }
        }
    };
    //小菜界面数据逻辑的处理
    Caipujiemian.prototype.chulishujujiegou = function (yeqian, yeshu) {
        this.yichucaipingneirong();
        var shipupingleibiao = Gerenshuxing.shipubiao;
        //读取服务器数据，获取解锁相关数据
        for (var bi = 0; bi < shipupingleibiao.length; bi++) {
            for (var ki = 0; ki < Gerenshuxing.jiesuocaipin.length; ki++) {
                if (shipupingleibiao[bi].id == Gerenshuxing.jiesuocaipin[ki]) {
                    shipupingleibiao[bi].islock = "1";
                    break;
                }
                ;
            }
        }
        /*		let jianche:any = [];
                for(var j = 0;j<shipupingleibiao.length;j++){
                    if(shipupingleibiao[j].islock == "1"){
                        jianche[j] = shipupingleibiao[j];
                    }
                }
                console.log(jianche);*/
        //		console.log(shipupingleibiao);
        if (yeqian) {
            this.dangqianyeqianshu = yeqian;
        }
        ;
        if (yeshu) {
            this.dangqianyeshu = yeshu;
        }
        //		console.log(this.dangqianyeqianshu);
        var xiaocaocaipinxianshi = [];
        var huoguocaipinxianshi = [];
        var xiaochicaipinxianshi = [];
        var dianxincaipinxianshi = [];
        var xiaocaoj = 0;
        var huoguoj = 0;
        var xiaochij = 0;
        var dianxinj = 0;
        //遍历json表格，将所有菜品分类;
        for (var i = 0; i < shipupingleibiao.length; i++) {
            if (shipupingleibiao[i].id > 1000 && shipupingleibiao[i].id <= 2000) {
                xiaocaocaipinxianshi[xiaocaoj] = shipupingleibiao[i];
                xiaocaoj++;
            }
            if (shipupingleibiao[i].id > 2000 && shipupingleibiao[i].id <= 3000) {
                huoguocaipinxianshi[huoguoj] = shipupingleibiao[i];
                huoguoj++;
            }
            if (shipupingleibiao[i].id > 3000 && shipupingleibiao[i].id <= 4000) {
                xiaochicaipinxianshi[xiaochij] = shipupingleibiao[i];
                xiaochij++;
            }
            if (shipupingleibiao[i].id > 4000) {
                dianxincaipinxianshi[dianxinj] = shipupingleibiao[i];
                dianxinj++;
            }
        }
        //		console.log(xiaocaocaipinxianshi.length)
        //判断需要的页面长度	
        if (xiaocaocaipinxianshi.length % 6 > 1) {
            this.xiaochaoyeshu = Math.floor(xiaocaocaipinxianshi.length / 6) + 1;
        }
        else {
            this.xiaochaoyeshu = xiaocaocaipinxianshi.length / 6;
        }
        if (huoguocaipinxianshi.length % 6 > 1) {
            this.huoguoyeshu = Math.floor(huoguocaipinxianshi.length / 6) + 1;
        }
        else {
            this.huoguoyeshu = huoguocaipinxianshi.length / 6;
        }
        if (xiaochicaipinxianshi.length % 6 > 1) {
            this.xiaochiyeshu = Math.floor(xiaochicaipinxianshi.length / 6) + 1;
        }
        else {
            this.xiaochiyeshu = xiaochicaipinxianshi.length / 6;
        }
        if (dianxincaipinxianshi.length % 6 > 1) {
            this.dianxinyeshu = Math.floor(dianxincaipinxianshi.length / 6) + 1;
        }
        else {
            this.dianxinyeshu = dianxincaipinxianshi.length / 6;
        }
        this.fanyeyehaoshuaxin();
        //		console.log(this.xiaoChicaipin);
        //判断每夜的显示内容
        if (this.dangqianyeqianshu == 1 && this.dangqianyeshu == 1) {
            var k = 6;
            for (var i = k * this.dangqianyeshu - 6, j = 1; i < k * this.dangqianyeshu; i++, j++) {
                this.panduanxianshineirong(j, xiaocaocaipinxianshi, i);
            }
        }
        if (this.dangqianyeqianshu == 1 && this.dangqianyeshu == 2) {
            var k = 6;
            for (var i = k * this.dangqianyeshu - 6, j = 1; i < k * this.dangqianyeshu; i++, j++) {
                this.panduanxianshineirong(j, xiaocaocaipinxianshi, i);
            }
        }
        if (this.dangqianyeqianshu == 1 && this.dangqianyeshu == 3) {
            var k = 6;
            for (var i = k * this.dangqianyeshu - 6, j = 1; i < k * this.dangqianyeshu; i++, j++) {
                this.panduanxianshineirong(j, xiaocaocaipinxianshi, i);
            }
        }
        if (this.dangqianyeqianshu == 1 && this.dangqianyeshu == 4) {
            var k = 6;
            for (var i = k * this.dangqianyeshu - 6, j = 1; i < k * this.dangqianyeshu; i++, j++) {
                this.panduanxianshineirong(j, xiaocaocaipinxianshi, i);
            }
        }
        if (this.dangqianyeqianshu == 1 && this.dangqianyeshu == 5) {
            var k = 6;
            for (var i = k * this.dangqianyeshu - 6, j = 1; i < k * this.dangqianyeshu; i++, j++) {
                this.panduanxianshineirong(j, xiaocaocaipinxianshi, i);
            }
        }
        if (this.dangqianyeqianshu == 1 && this.dangqianyeshu == 6) {
            var k = 6;
            for (var i = k * this.dangqianyeshu - 6, j = 1; i < k * this.dangqianyeshu; i++, j++) {
                this.panduanxianshineirong(j, xiaocaocaipinxianshi, i);
            }
        }
        if (this.dangqianyeqianshu == 1 && this.dangqianyeshu == 7) {
            var k = 6;
            for (var i = k * this.dangqianyeshu - 6, j = 1; i < k * this.dangqianyeshu; i++, j++) {
                this.panduanxianshineirong(j, xiaocaocaipinxianshi, i);
            }
        }
        if (this.dangqianyeqianshu == 1 && this.dangqianyeshu == 8) {
            var k = 6;
            for (var i = k * this.dangqianyeshu - 6, j = 1; i < k * this.dangqianyeshu; i++, j++) {
                this.panduanxianshineirong(j, xiaocaocaipinxianshi, i);
            }
        }
        if (this.dangqianyeqianshu == 1 && this.dangqianyeshu == 9) {
            var k = 6;
            for (var i = k * this.dangqianyeshu - 6, j = 1; i < k * this.dangqianyeshu; i++, j++) {
                this.panduanxianshineirong(j, xiaocaocaipinxianshi, i);
            }
        }
        if (this.dangqianyeqianshu == 1 && this.dangqianyeshu == 10) {
            var k = 6;
            for (var i = k * this.dangqianyeshu - 6, j = 1; i < k * this.dangqianyeshu; i++, j++) {
                this.panduanxianshineirong(j, xiaocaocaipinxianshi, i);
            }
        }
        if (this.dangqianyeqianshu == 2 && this.dangqianyeshu == 1) {
            var k = 6;
            for (var i = k * this.dangqianyeshu - 6, j = 1; i < k * this.dangqianyeshu; i++, j++) {
                this.panduanxianshineirong(j, huoguocaipinxianshi, i);
            }
        }
        if (this.dangqianyeqianshu == 2 && this.dangqianyeshu == 2) {
            var k = 6;
            for (var i = k * this.dangqianyeshu - 6, j = 1; i < k * this.dangqianyeshu; i++, j++) {
                this.panduanxianshineirong(j, huoguocaipinxianshi, i);
            }
        }
        if (this.dangqianyeqianshu == 2 && this.dangqianyeshu == 3) {
            var k = 6;
            for (var i = k * this.dangqianyeshu - 6, j = 1; i < k * this.dangqianyeshu; i++, j++) {
                this.panduanxianshineirong(j, huoguocaipinxianshi, i);
            }
        }
        if (this.dangqianyeqianshu == 2 && this.dangqianyeshu == 4) {
            var k = 6;
            for (var i = k * this.dangqianyeshu - 6, j = 1; i < k * this.dangqianyeshu; i++, j++) {
                this.panduanxianshineirong(j, huoguocaipinxianshi, i);
            }
        }
        if (this.dangqianyeqianshu == 2 && this.dangqianyeshu == 5) {
            var k = 6;
            for (var i = k * this.dangqianyeshu - 6, j = 1; i < k * this.dangqianyeshu; i++, j++) {
                this.panduanxianshineirong(j, huoguocaipinxianshi, i);
            }
        }
        if (this.dangqianyeqianshu == 2 && this.dangqianyeshu == 6) {
            var k = 6;
            for (var i = k * this.dangqianyeshu - 6, j = 1; i < k * this.dangqianyeshu; i++, j++) {
                this.panduanxianshineirong(j, huoguocaipinxianshi, i);
            }
        }
        if (this.dangqianyeqianshu == 2 && this.dangqianyeshu == 7) {
            var k = 6;
            for (var i = k * this.dangqianyeshu - 6, j = 1; i < k * this.dangqianyeshu; i++, j++) {
                this.panduanxianshineirong(j, huoguocaipinxianshi, i);
            }
        }
        if (this.dangqianyeqianshu == 2 && this.dangqianyeshu == 8) {
            var k = 6;
            for (var i = k * this.dangqianyeshu - 6, j = 1; i < k * this.dangqianyeshu; i++, j++) {
                this.panduanxianshineirong(j, huoguocaipinxianshi, i);
            }
        }
        if (this.dangqianyeqianshu == 2 && this.dangqianyeshu == 9) {
            var k = 6;
            for (var i = k * this.dangqianyeshu - 6, j = 1; i < k * this.dangqianyeshu; i++, j++) {
                this.panduanxianshineirong(j, huoguocaipinxianshi, i);
            }
        }
        if (this.dangqianyeqianshu == 2 && this.dangqianyeshu == 10) {
            var k = 6;
            for (var i = k * this.dangqianyeshu - 6, j = 1; i < k * this.dangqianyeshu; i++, j++) {
                this.panduanxianshineirong(j, huoguocaipinxianshi, i);
            }
        }
        if (this.dangqianyeqianshu == 3 && this.dangqianyeshu == 1) {
            var k = 6;
            for (var i = k * this.dangqianyeshu - 6, j = 1; i < k * this.dangqianyeshu; i++, j++) {
                this.panduanxianshineirong(j, xiaochicaipinxianshi, i);
            }
        }
        if (this.dangqianyeqianshu == 3 && this.dangqianyeshu == 2) {
            var k = 6;
            for (var i = k * this.dangqianyeshu - 6, j = 1; i < k * this.dangqianyeshu; i++, j++) {
                this.panduanxianshineirong(j, xiaochicaipinxianshi, i);
            }
        }
        if (this.dangqianyeqianshu == 3 && this.dangqianyeshu == 3) {
            var k = 6;
            for (var i = k * this.dangqianyeshu - 6, j = 1; i < k * this.dangqianyeshu; i++, j++) {
                this.panduanxianshineirong(j, xiaochicaipinxianshi, i);
            }
        }
        if (this.dangqianyeqianshu == 3 && this.dangqianyeshu == 4) {
            var k = 6;
            for (var i = k * this.dangqianyeshu - 6, j = 1; i < k * this.dangqianyeshu; i++, j++) {
                this.panduanxianshineirong(j, xiaochicaipinxianshi, i);
            }
        }
        if (this.dangqianyeqianshu == 3 && this.dangqianyeshu == 5) {
            var k = 6;
            for (var i = k * this.dangqianyeshu - 6, j = 1; i < k * this.dangqianyeshu; i++, j++) {
                this.panduanxianshineirong(j, xiaochicaipinxianshi, i);
            }
        }
        if (this.dangqianyeqianshu == 3 && this.dangqianyeshu == 6) {
            var k = 6;
            for (var i = k * this.dangqianyeshu - 6, j = 1; i < k * this.dangqianyeshu; i++, j++) {
                this.panduanxianshineirong(j, xiaochicaipinxianshi, i);
            }
        }
        if (this.dangqianyeqianshu == 3 && this.dangqianyeshu == 7) {
            var k = 6;
            for (var i = k * this.dangqianyeshu - 6, j = 1; i < k * this.dangqianyeshu; i++, j++) {
                this.panduanxianshineirong(j, xiaochicaipinxianshi, i);
            }
        }
        if (this.dangqianyeqianshu == 3 && this.dangqianyeshu == 8) {
            var k = 6;
            for (var i = k * this.dangqianyeshu - 6, j = 1; i < k * this.dangqianyeshu; i++, j++) {
                this.panduanxianshineirong(j, xiaochicaipinxianshi, i);
            }
        }
        if (this.dangqianyeqianshu == 3 && this.dangqianyeshu == 9) {
            var k = 6;
            for (var i = k * this.dangqianyeshu - 6, j = 1; i < k * this.dangqianyeshu; i++, j++) {
                this.panduanxianshineirong(j, xiaochicaipinxianshi, i);
            }
        }
        if (this.dangqianyeqianshu == 3 && this.dangqianyeshu == 10) {
            var k = 6;
            for (var i = k * this.dangqianyeshu - 6, j = 1; i < k * this.dangqianyeshu; i++, j++) {
                this.panduanxianshineirong(j, xiaochicaipinxianshi, i);
            }
        }
        if (this.dangqianyeqianshu == 4 && this.dangqianyeshu == 1) {
            var k = 6;
            for (var i = k * this.dangqianyeshu - 6, j = 1; i < k * this.dangqianyeshu; i++, j++) {
                this.panduanxianshineirong(j, dianxincaipinxianshi, i);
            }
        }
        if (this.dangqianyeqianshu == 4 && this.dangqianyeshu == 2) {
            var k = 6;
            for (var i = k * this.dangqianyeshu - 6, j = 1; i < k * this.dangqianyeshu; i++, j++) {
                this.panduanxianshineirong(j, dianxincaipinxianshi, i);
            }
        }
        if (this.dangqianyeqianshu == 4 && this.dangqianyeshu == 3) {
            var k = 6;
            for (var i = k * this.dangqianyeshu - 6, j = 1; i < k * this.dangqianyeshu; i++, j++) {
                this.panduanxianshineirong(j, dianxincaipinxianshi, i);
            }
        }
        if (this.dangqianyeqianshu == 4 && this.dangqianyeshu == 4) {
            var k = 6;
            for (var i = k * this.dangqianyeshu - 6, j = 1; i < k * this.dangqianyeshu; i++, j++) {
                this.panduanxianshineirong(j, dianxincaipinxianshi, i);
            }
        }
        if (this.dangqianyeqianshu == 4 && this.dangqianyeshu == 5) {
            var k = 6;
            for (var i = k * this.dangqianyeshu - 6, j = 1; i < k * this.dangqianyeshu; i++, j++) {
                this.panduanxianshineirong(j, dianxincaipinxianshi, i);
            }
        }
        if (this.dangqianyeqianshu == 4 && this.dangqianyeshu == 6) {
            var k = 6;
            for (var i = k * this.dangqianyeshu - 6, j = 1; i < k * this.dangqianyeshu; i++, j++) {
                this.panduanxianshineirong(j, dianxincaipinxianshi, i);
            }
        }
        if (this.dangqianyeqianshu == 4 && this.dangqianyeshu == 7) {
            var k = 6;
            for (var i = k * this.dangqianyeshu - 6, j = 1; i < k * this.dangqianyeshu; i++, j++) {
                this.panduanxianshineirong(j, dianxincaipinxianshi, i);
            }
        }
        if (this.dangqianyeqianshu == 4 && this.dangqianyeshu == 8) {
            var k = 6;
            for (var i = k * this.dangqianyeshu - 6, j = 1; i < k * this.dangqianyeshu; i++, j++) {
                this.panduanxianshineirong(j, dianxincaipinxianshi, i);
            }
        }
        if (this.dangqianyeqianshu == 4 && this.dangqianyeshu == 9) {
            var k = 6;
            for (var i = k * this.dangqianyeshu - 6, j = 1; i < k * this.dangqianyeshu; i++, j++) {
                this.panduanxianshineirong(j, dianxincaipinxianshi, i);
            }
        }
        if (this.dangqianyeqianshu == 4 && this.dangqianyeshu == 10) {
            var k = 6;
            for (var i = k * this.dangqianyeshu - 6, j = 1; i < k * this.dangqianyeshu; i++, j++) {
                this.panduanxianshineirong(j, dianxincaipinxianshi, i);
            }
        }
    };
    return Caipujiemian;
}(eui.Component));
__reflect(Caipujiemian.prototype, "Caipujiemian", ["eui.UIComponent", "egret.DisplayObject"]);
