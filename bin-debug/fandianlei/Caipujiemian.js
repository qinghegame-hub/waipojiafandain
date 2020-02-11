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
        //点击菜品1时触发
        if (this.di1caiid) {
            this.xiaoChicaipin.caipinicon0.addEventListener(egret.TouchEvent.TOUCH_TAP, this.dianjicai1, this);
        }
        //点击菜品2时触发
        if (this.di2caiid) {
            this.xiaoChicaipin.caipinicon1.addEventListener(egret.TouchEvent.TOUCH_TAP, this.dianjicai2, this);
        }
        //点击菜品3时触发
        if (this.di3caiid) {
            this.xiaoChicaipin.caipinicon2.addEventListener(egret.TouchEvent.TOUCH_TAP, this.dianjicai3, this);
        }
        //点击菜品4时触发
        if (this.di4caiid) {
            this.xiaoChicaipin.caipinicon3.addEventListener(egret.TouchEvent.TOUCH_TAP, this.dianjicai4, this);
        }
        //点击菜品5时触发
        if (this.di5caiid) {
            this.xiaoChicaipin.caipinicon4.addEventListener(egret.TouchEvent.TOUCH_TAP, this.dianjicai5, this);
        }
        //点击菜品6时触发
        if (this.di6caiid) {
            this.xiaoChicaipin.caipinicon5.addEventListener(egret.TouchEvent.TOUCH_TAP, this.dianjicai6, this);
        }
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
        Weblianjie.fasongshuju("code:002", "{" + '"caipin"' + ":" + '"' + this.di1caiid + '"' + "," + '"uid"' + ":" + '"' + Gerenshuxing.uid + '"' + "}");
    };
    Caipujiemian.prototype.dianjicaijiesuo2 = function () {
        Weblianjie.fasongshuju("code:002", "{" + '"caipin"' + ":" + '"' + this.di2caiid + '"' + "," + '"uid"' + ":" + '"' + Gerenshuxing.uid + '"' + "}");
    };
    Caipujiemian.prototype.dianjicaijiesuo3 = function () {
        Weblianjie.fasongshuju("code:002", "{" + '"caipin"' + ":" + '"' + this.di3caiid + '"' + "," + '"uid"' + ":" + '"' + Gerenshuxing.uid + '"' + "}");
    };
    Caipujiemian.prototype.dianjicaijiesuo4 = function () {
        Weblianjie.fasongshuju("code:002", "{" + '"caipin"' + ":" + '"' + this.di4caiid + '"' + "," + '"uid"' + ":" + '"' + Gerenshuxing.uid + '"' + "}");
    };
    Caipujiemian.prototype.dianjicaijiesuo5 = function () {
        Weblianjie.fasongshuju("code:002", "{" + '"caipin"' + ":" + '"' + this.di5caiid + '"' + "," + '"uid"' + ":" + '"' + Gerenshuxing.uid + '"' + "}");
    };
    Caipujiemian.prototype.dianjicaijiesuo6 = function () {
        Weblianjie.fasongshuju("code:002", "{" + '"caipin"' + ":" + '"' + this.di6caiid + '"' + "," + '"uid"' + ":" + '"' + Gerenshuxing.uid + '"' + "}");
    };
    //点击菜品介绍相关界面时处理
    Caipujiemian.prototype.caipinjieshaoluoji = function () {
        this.caiPingjieshao.but_zhizuo.addEventListener(egret.TouchEvent.TOUCH_TAP, this.guanbijieshao, this);
    };
    Caipujiemian.prototype.guanbijieshao = function () {
        if (this.caiPingjieshao.parent) {
            this.removeChild(this.caiPingjieshao);
        }
    };
    Caipujiemian.prototype.dianjicai1 = function () {
        if (this.caiPingjieshao.parent) {
            this.removeChild(this.caiPingjieshao);
        }
        this.addChild(this.caiPingjieshao);
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
        this.caiPingjieshao.caipugongneng.text = this.caideshuxing1_3;
        this.caiPingjieshao.chushoudanjia0.text = this.caideshuxing1_4;
        this.caiPingjieshao.xiaohaoshicai0.text = this.caideshuxing1_5;
        this.caiPingjieshao.caipugongneng0.text = this.caideshuxing1_6;
        this.caiPingjieshao.lengjiwenzi.text = this.caideshuxing1_7;
        this.caiPingjieshao.jinduwenzi.text = this.caideshuxing1_8;
        this.caiPingjieshao.jianjie.text = this.caidejieshao1;
        this.caiPingjieshao.img_jindutiaogundong.width = this.caidejindu1;
    };
    Caipujiemian.prototype.dianjicai2 = function () {
        if (this.caiPingjieshao.parent) {
            this.removeChild(this.caiPingjieshao);
        }
        this.addChild(this.caiPingjieshao);
        this.caipinjieshaoluoji();
        this.caiPingjieshao.caipinmingcheng.text = this.caidebiaoti2;
        if (this.caidebiaoti2.length > 6) {
            this.caiPingjieshao.img_biaoticaipujieshao.scaleX = 1.4;
            this.caiPingjieshao.img_biaoticaipujieshao.scaleY = 1.4;
        }
        else if (this.caidebiaoti2.length > 4) {
            this.caiPingjieshao.img_biaoticaipujieshao.scaleX = 1.2;
            this.caiPingjieshao.img_biaoticaipujieshao.scaleY = 1.2;
        }
        else {
            this.caiPingjieshao.img_biaoticaipujieshao.scaleX = 1;
            this.caiPingjieshao.img_biaoticaipujieshao.scaleY = 1;
        }
        this.caiPingjieshao.caipindeicon.source = this.caidetupian2;
        this.caiPingjieshao.chushoudanjia.text = this.caideshuxing2_1;
        this.caiPingjieshao.xiaohaoshicai.text = this.caideshuxing2_2;
        this.caiPingjieshao.caipugongneng.text = this.caideshuxing2_3;
        this.caiPingjieshao.chushoudanjia0.text = this.caideshuxing2_4;
        this.caiPingjieshao.xiaohaoshicai0.text = this.caideshuxing2_5;
        this.caiPingjieshao.caipugongneng0.text = this.caideshuxing2_6;
        this.caiPingjieshao.lengjiwenzi.text = this.caideshuxing2_7;
        this.caiPingjieshao.jinduwenzi.text = this.caideshuxing2_8;
        this.caiPingjieshao.jianjie.text = this.caidejieshao2;
        this.caiPingjieshao.img_jindutiaogundong.width = this.caidejindu2;
    };
    Caipujiemian.prototype.dianjicai3 = function () {
        if (this.caiPingjieshao.parent) {
            this.removeChild(this.caiPingjieshao);
        }
        this.addChild(this.caiPingjieshao);
        this.caipinjieshaoluoji();
        this.caiPingjieshao.caipinmingcheng.text = this.caidebiaoti3;
        if (this.caidebiaoti3.length > 6) {
            this.caiPingjieshao.img_biaoticaipujieshao.scaleX = 1.4;
            this.caiPingjieshao.img_biaoticaipujieshao.scaleY = 1.4;
        }
        else if (this.caidebiaoti3.length > 4) {
            this.caiPingjieshao.img_biaoticaipujieshao.scaleX = 1.2;
            this.caiPingjieshao.img_biaoticaipujieshao.scaleY = 1.2;
        }
        else {
            this.caiPingjieshao.img_biaoticaipujieshao.scaleX = 1;
            this.caiPingjieshao.img_biaoticaipujieshao.scaleY = 1;
        }
        this.caiPingjieshao.caipindeicon.source = this.caidetupian3;
        this.caiPingjieshao.chushoudanjia.text = this.caideshuxing3_1;
        this.caiPingjieshao.xiaohaoshicai.text = this.caideshuxing3_2;
        this.caiPingjieshao.caipugongneng.text = this.caideshuxing3_3;
        this.caiPingjieshao.chushoudanjia0.text = this.caideshuxing3_4;
        this.caiPingjieshao.xiaohaoshicai0.text = this.caideshuxing3_5;
        this.caiPingjieshao.caipugongneng0.text = this.caideshuxing3_6;
        this.caiPingjieshao.lengjiwenzi.text = this.caideshuxing3_7;
        this.caiPingjieshao.jinduwenzi.text = this.caideshuxing3_8;
        this.caiPingjieshao.jianjie.text = this.caidejieshao3;
        this.caiPingjieshao.img_jindutiaogundong.width = this.caidejindu3;
    };
    Caipujiemian.prototype.dianjicai4 = function () {
        if (this.caiPingjieshao.parent) {
            this.removeChild(this.caiPingjieshao);
        }
        this.addChild(this.caiPingjieshao);
        this.caipinjieshaoluoji();
        this.caiPingjieshao.caipinmingcheng.text = this.caidebiaoti4;
        if (this.caidebiaoti4.length > 6) {
            this.caiPingjieshao.img_biaoticaipujieshao.scaleX = 1.4;
            this.caiPingjieshao.img_biaoticaipujieshao.scaleY = 1.4;
        }
        else if (this.caidebiaoti4.length > 4) {
            this.caiPingjieshao.img_biaoticaipujieshao.scaleX = 1.2;
            this.caiPingjieshao.img_biaoticaipujieshao.scaleY = 1.2;
        }
        else {
            this.caiPingjieshao.img_biaoticaipujieshao.scaleX = 1;
            this.caiPingjieshao.img_biaoticaipujieshao.scaleY = 1;
        }
        this.caiPingjieshao.caipindeicon.source = this.caidetupian4;
        this.caiPingjieshao.chushoudanjia.text = this.caideshuxing4_1;
        this.caiPingjieshao.xiaohaoshicai.text = this.caideshuxing4_2;
        this.caiPingjieshao.caipugongneng.text = this.caideshuxing4_3;
        this.caiPingjieshao.chushoudanjia0.text = this.caideshuxing4_4;
        this.caiPingjieshao.xiaohaoshicai0.text = this.caideshuxing4_5;
        this.caiPingjieshao.caipugongneng0.text = this.caideshuxing4_6;
        this.caiPingjieshao.lengjiwenzi.text = this.caideshuxing4_7;
        this.caiPingjieshao.jinduwenzi.text = this.caideshuxing4_8;
        this.caiPingjieshao.jianjie.text = this.caidejieshao4;
        this.caiPingjieshao.img_jindutiaogundong.width = this.caidejindu4;
    };
    Caipujiemian.prototype.dianjicai5 = function () {
        if (this.caiPingjieshao.parent) {
            this.removeChild(this.caiPingjieshao);
        }
        this.addChild(this.caiPingjieshao);
        this.caipinjieshaoluoji();
        this.caiPingjieshao.caipinmingcheng.text = this.caidebiaoti5;
        if (this.caidebiaoti5.length > 6) {
            this.caiPingjieshao.img_biaoticaipujieshao.scaleX = 1.4;
            this.caiPingjieshao.img_biaoticaipujieshao.scaleY = 1.4;
        }
        else if (this.caidebiaoti5.length > 4) {
            this.caiPingjieshao.img_biaoticaipujieshao.scaleX = 1.2;
            this.caiPingjieshao.img_biaoticaipujieshao.scaleY = 1.2;
        }
        else {
            this.caiPingjieshao.img_biaoticaipujieshao.scaleX = 1;
            this.caiPingjieshao.img_biaoticaipujieshao.scaleY = 1;
        }
        this.caiPingjieshao.caipindeicon.source = this.caidetupian5;
        this.caiPingjieshao.chushoudanjia.text = this.caideshuxing5_1;
        this.caiPingjieshao.xiaohaoshicai.text = this.caideshuxing5_2;
        this.caiPingjieshao.caipugongneng.text = this.caideshuxing5_3;
        this.caiPingjieshao.chushoudanjia0.text = this.caideshuxing5_4;
        this.caiPingjieshao.xiaohaoshicai0.text = this.caideshuxing5_5;
        this.caiPingjieshao.caipugongneng0.text = this.caideshuxing5_6;
        this.caiPingjieshao.lengjiwenzi.text = this.caideshuxing5_7;
        this.caiPingjieshao.jinduwenzi.text = this.caideshuxing5_8;
        this.caiPingjieshao.jianjie.text = this.caidejieshao5;
        this.caiPingjieshao.img_jindutiaogundong.width = this.caidejindu5;
    };
    Caipujiemian.prototype.dianjicai6 = function () {
        if (this.caiPingjieshao.parent) {
            this.removeChild(this.caiPingjieshao);
        }
        this.addChild(this.caiPingjieshao);
        this.caipinjieshaoluoji();
        this.caiPingjieshao.caipinmingcheng.text = this.caidebiaoti6;
        if (this.caidebiaoti6.length > 6) {
            this.caiPingjieshao.img_biaoticaipujieshao.scaleX = 1.4;
            this.caiPingjieshao.img_biaoticaipujieshao.scaleY = 1.4;
        }
        else if (this.caidebiaoti6.length > 4) {
            this.caiPingjieshao.img_biaoticaipujieshao.scaleX = 1.2;
            this.caiPingjieshao.img_biaoticaipujieshao.scaleY = 1.2;
        }
        else {
            this.caiPingjieshao.img_biaoticaipujieshao.scaleX = 1;
            this.caiPingjieshao.img_biaoticaipujieshao.scaleY = 1;
        }
        this.caiPingjieshao.caipindeicon.source = this.caidetupian6;
        this.caiPingjieshao.chushoudanjia.text = this.caideshuxing6_1;
        this.caiPingjieshao.xiaohaoshicai.text = this.caideshuxing6_2;
        this.caiPingjieshao.caipugongneng.text = this.caideshuxing6_3;
        this.caiPingjieshao.chushoudanjia0.text = this.caideshuxing6_4;
        this.caiPingjieshao.xiaohaoshicai0.text = this.caideshuxing6_5;
        this.caiPingjieshao.caipugongneng0.text = this.caideshuxing6_6;
        this.caiPingjieshao.lengjiwenzi.text = this.caideshuxing6_7;
        this.caiPingjieshao.jinduwenzi.text = this.caideshuxing6_8;
        this.caiPingjieshao.jianjie.text = this.caidejieshao6;
        this.caiPingjieshao.img_jindutiaogundong.width = this.caidejindu6;
    };
    Caipujiemian.prototype.dianjicaipin1 = function (biaoti, tupian, shuxing1, shuxing2, jieshao) {
        this.caidebiaoti1 = biaoti;
        this.caidetupian1 = tupian + "_png";
        this.caidejieshao1 = jieshao;
        var duqudengji1 = Gerencaipudengji.caipulevel;
        var caipudengjishuju = RES.getRes("shipulevel_json");
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
        this.caideshuxing1_1 = "出售单价:" + Math.floor(shuxing1 + shuxing1 * benjijiacheng) + "(+" + Math.floor(shuxing1 * benjijiacheng) + ")";
        this.caideshuxing1_4 = "出售单价:" + Math.floor(shuxing1 + shuxing1 * xiajijiacheng) + "(+" + Math.floor(shuxing1 * xiajijiacheng) + ")";
        this.caideshuxing1_3 = "消除疲劳:" + Math.floor(shuxing1 + shuxing1 * benjiweili) + "(+" + Math.floor(shuxing1 * benjiweili) + ")";
        this.caideshuxing1_6 = "消除疲劳:" + Math.floor(shuxing1 + shuxing1 * xiajiweili) + "(+" + Math.floor(shuxing1 * xiajiweili) + ")";
        this.caideshuxing1_2 = "消耗食材:" + shuxing2;
        this.caideshuxing1_5 = "消耗食材:" + shuxing2;
        console.log(benjijiacheng, xiajijiacheng, benjiweili, xiajiweili);
    };
    Caipujiemian.prototype.dianjicaipin2 = function (biaoti, tupian, shuxing1, shuxing2, jieshao) {
        this.caidebiaoti2 = biaoti;
        this.caidetupian2 = tupian + "_png";
        this.caidejieshao2 = jieshao;
        var duqudengji2 = Gerencaipudengji.caipulevel;
        var caipudengjishuju2 = RES.getRes("shipulevel_json");
        var shengjisuoxujingyan2 = 0;
        var benjijiacheng2 = 0;
        var benjiweili2 = 0;
        var xiajijiacheng2 = 0;
        var xiajiweili2 = 0;
        for (var g in duqudengji2) {
            if (g == tupian) {
                for (var k = 0; k < caipudengjishuju2.length; k++) {
                    if (duqudengji2[g][0] == caipudengjishuju2[k].id) {
                        shengjisuoxujingyan2 = parseFloat(caipudengjishuju2[k].levelexp);
                        benjijiacheng2 = parseFloat(caipudengjishuju2[k].selladd);
                        benjiweili2 = parseFloat(caipudengjishuju2[k].atcadd);
                        if (parseInt(duqudengji2[g][0]) < 20) {
                            xiajijiacheng2 = parseFloat(caipudengjishuju2[k + 1].selladd);
                            xiajiweili2 = parseFloat(caipudengjishuju2[k + 1].atcadd);
                        }
                        else {
                            xiajijiacheng2 = 0;
                            xiajiweili2 = 0;
                        }
                    }
                }
                this.caideshuxing2_7 = duqudengji2[g][0];
                this.caideshuxing2_8 = "(" + duqudengji2[g][1] + " / " + shengjisuoxujingyan2 + ")";
                this.caidejindu2 = parseInt(duqudengji2[g][1]) * 176 / shengjisuoxujingyan2;
            }
        }
        shuxing1 = parseInt(shuxing1);
        this.caideshuxing2_1 = "出售单价:" + Math.floor(shuxing1 + shuxing1 * benjijiacheng2) + "(+" + Math.floor(shuxing1 * benjijiacheng2) + ")";
        this.caideshuxing2_4 = "出售单价:" + Math.floor(shuxing1 + shuxing1 * xiajijiacheng2) + "(+" + Math.floor(shuxing1 * xiajijiacheng2) + ")";
        this.caideshuxing2_3 = "消除疲劳:" + Math.floor(shuxing1 + shuxing1 * benjiweili2) + "(+" + Math.floor(shuxing1 * benjiweili2) + ")";
        this.caideshuxing2_6 = "消除疲劳:" + Math.floor(shuxing1 + shuxing1 * xiajiweili2) + "(+" + Math.floor(shuxing1 * xiajiweili2) + ")";
        this.caideshuxing2_2 = "消耗食材:" + shuxing2;
        this.caideshuxing2_5 = "消耗食材:" + shuxing2;
    };
    Caipujiemian.prototype.dianjicaipin3 = function (biaoti, tupian, shuxing1, shuxing2, jieshao) {
        this.caidebiaoti3 = biaoti;
        this.caidetupian3 = tupian + "_png";
        this.caidejieshao3 = jieshao;
        var duqudengji3 = Gerencaipudengji.caipulevel;
        var caipudengjishuju3 = RES.getRes("shipulevel_json");
        var shengjisuoxujingyan3 = 0;
        var benjijiacheng3 = 0;
        var benjiweili3 = 0;
        var xiajijiacheng3 = 0;
        var xiajiweili3 = 0;
        for (var g in duqudengji3) {
            if (g == tupian) {
                for (var k = 0; k < caipudengjishuju3.length; k++) {
                    if (duqudengji3[g][0] == caipudengjishuju3[k].id) {
                        shengjisuoxujingyan3 = parseFloat(caipudengjishuju3[k].levelexp);
                        benjijiacheng3 = parseFloat(caipudengjishuju3[k].selladd);
                        benjiweili3 = parseFloat(caipudengjishuju3[k].atcadd);
                        if (parseInt(duqudengji3[g][0]) < 20) {
                            xiajijiacheng3 = parseFloat(caipudengjishuju3[k + 1].selladd);
                            xiajiweili3 = parseFloat(caipudengjishuju3[k + 1].atcadd);
                        }
                        else {
                            xiajijiacheng3 = 0;
                            xiajiweili3 = 0;
                        }
                    }
                }
                this.caideshuxing3_7 = duqudengji3[g][0];
                this.caideshuxing3_8 = "(" + duqudengji3[g][1] + " / " + shengjisuoxujingyan3 + ")";
                this.caidejindu3 = parseInt(duqudengji3[g][1]) * 176 / shengjisuoxujingyan3;
            }
        }
        shuxing1 = parseInt(shuxing1);
        this.caideshuxing3_1 = "出售单价:" + Math.floor(shuxing1 + shuxing1 * benjijiacheng3) + "(+" + Math.floor(shuxing1 * benjijiacheng3) + ")";
        this.caideshuxing3_4 = "出售单价:" + Math.floor(shuxing1 + shuxing1 * xiajijiacheng3) + "(+" + Math.floor(shuxing1 * xiajijiacheng3) + ")";
        this.caideshuxing3_3 = "消除疲劳:" + Math.floor(shuxing1 + shuxing1 * benjiweili3) + "(+" + Math.floor(shuxing1 * benjiweili3) + ")";
        this.caideshuxing3_6 = "消除疲劳:" + Math.floor(shuxing1 + shuxing1 * xiajiweili3) + "(+" + Math.floor(shuxing1 * xiajiweili3) + ")";
        this.caideshuxing3_2 = "消耗食材:" + shuxing2;
        this.caideshuxing3_5 = "消耗食材:" + shuxing2;
    };
    Caipujiemian.prototype.dianjicaipin4 = function (biaoti, tupian, shuxing1, shuxing2, jieshao) {
        this.caidebiaoti4 = biaoti;
        this.caidetupian4 = tupian + "_png";
        this.caidejieshao4 = jieshao;
        var duqudengji4 = Gerencaipudengji.caipulevel;
        var caipudengjishuju4 = RES.getRes("shipulevel_json");
        var shengjisuoxujingyan4 = 0;
        var benjijiacheng4 = 0;
        var benjiweili4 = 0;
        var xiajijiacheng4 = 0;
        var xiajiweili4 = 0;
        for (var g in duqudengji4) {
            if (g == tupian) {
                for (var k = 0; k < caipudengjishuju4.length; k++) {
                    if (duqudengji4[g][0] == caipudengjishuju4[k].id) {
                        shengjisuoxujingyan4 = parseFloat(caipudengjishuju4[k].levelexp);
                        benjijiacheng4 = parseFloat(caipudengjishuju4[k].selladd);
                        benjiweili4 = parseFloat(caipudengjishuju4[k].atcadd);
                        if (parseInt(duqudengji4[g][0]) < 20) {
                            xiajijiacheng4 = parseFloat(caipudengjishuju4[k + 1].selladd);
                            xiajiweili4 = parseFloat(caipudengjishuju4[k + 1].atcadd);
                        }
                        else {
                            xiajijiacheng4 = 0;
                            xiajiweili4 = 0;
                        }
                    }
                }
                this.caideshuxing4_7 = duqudengji4[g][0];
                this.caideshuxing4_8 = "(" + duqudengji4[g][1] + " / " + shengjisuoxujingyan4 + ")";
                this.caidejindu4 = parseInt(duqudengji4[g][1]) * 176 / shengjisuoxujingyan4;
            }
        }
        shuxing1 = parseInt(shuxing1);
        this.caideshuxing4_1 = "出售单价:" + Math.floor(shuxing1 + shuxing1 * benjijiacheng4) + "(+" + Math.floor(shuxing1 * benjijiacheng4) + ")";
        this.caideshuxing4_4 = "出售单价:" + Math.floor(shuxing1 + shuxing1 * xiajijiacheng4) + "(+" + Math.floor(shuxing1 * xiajijiacheng4) + ")";
        this.caideshuxing4_3 = "消除疲劳:" + Math.floor(shuxing1 + shuxing1 * benjiweili4) + "(+" + Math.floor(shuxing1 * benjiweili4) + ")";
        this.caideshuxing4_6 = "消除疲劳:" + Math.floor(shuxing1 + shuxing1 * xiajiweili4) + "(+" + Math.floor(shuxing1 * xiajiweili4) + ")";
        this.caideshuxing4_2 = "消耗食材:" + shuxing2;
        this.caideshuxing4_5 = "消耗食材:" + shuxing2;
    };
    Caipujiemian.prototype.dianjicaipin5 = function (biaoti, tupian, shuxing1, shuxing2, jieshao) {
        this.caidebiaoti5 = biaoti;
        this.caidetupian5 = tupian + "_png";
        this.caidejieshao5 = jieshao;
        var duqudengji5 = Gerencaipudengji.caipulevel;
        var caipudengjishuju5 = RES.getRes("shipulevel_json");
        var shengjisuoxujingyan5 = 0;
        var benjijiacheng5 = 0;
        var benjiweili5 = 0;
        var xiajijiacheng5 = 0;
        var xiajiweili5 = 0;
        for (var g in duqudengji5) {
            if (g == tupian) {
                for (var k = 0; k < caipudengjishuju5.length; k++) {
                    if (duqudengji5[g][0] == caipudengjishuju5[k].id) {
                        shengjisuoxujingyan5 = parseFloat(caipudengjishuju5[k].levelexp);
                        benjijiacheng5 = parseFloat(caipudengjishuju5[k].selladd);
                        benjiweili5 = parseFloat(caipudengjishuju5[k].atcadd);
                        if (parseInt(duqudengji5[g][0]) < 20) {
                            xiajijiacheng5 = parseFloat(caipudengjishuju5[k + 1].selladd);
                            xiajiweili5 = parseFloat(caipudengjishuju5[k + 1].atcadd);
                        }
                        else {
                            xiajijiacheng5 = 0;
                            xiajiweili5 = 0;
                        }
                    }
                }
                this.caideshuxing5_7 = duqudengji5[g][0];
                this.caideshuxing5_8 = "(" + duqudengji5[g][1] + " / " + shengjisuoxujingyan5 + ")";
                this.caidejindu5 = parseInt(duqudengji5[g][1]) * 176 / shengjisuoxujingyan5;
            }
        }
        shuxing1 = parseInt(shuxing1);
        this.caideshuxing5_1 = "出售单价:" + Math.floor(shuxing1 + shuxing1 * benjijiacheng5) + "(+" + Math.floor(shuxing1 * benjijiacheng5) + ")";
        this.caideshuxing5_4 = "出售单价:" + Math.floor(shuxing1 + shuxing1 * xiajijiacheng5) + "(+" + Math.floor(shuxing1 * xiajijiacheng5) + ")";
        this.caideshuxing5_3 = "消除疲劳:" + Math.floor(shuxing1 + shuxing1 * benjiweili5) + "(+" + Math.floor(shuxing1 * benjiweili5) + ")";
        this.caideshuxing5_6 = "消除疲劳:" + Math.floor(shuxing1 + shuxing1 * xiajiweili5) + "(+" + Math.floor(shuxing1 * xiajiweili5) + ")";
        this.caideshuxing5_2 = "消耗食材:" + shuxing2;
        this.caideshuxing5_5 = "消耗食材:" + shuxing2;
    };
    Caipujiemian.prototype.dianjicaipin6 = function (biaoti, tupian, shuxing1, shuxing2, jieshao) {
        this.caidebiaoti6 = biaoti;
        this.caidetupian6 = tupian + "_png";
        this.caidejieshao6 = jieshao;
        var duqudengji6 = Gerencaipudengji.caipulevel;
        var caipudengjishuju6 = RES.getRes("shipulevel_json");
        var shengjisuoxujingyan6 = 0;
        var benjijiacheng6 = 0;
        var benjiweili6 = 0;
        var xiajijiacheng6 = 0;
        var xiajiweili6 = 0;
        for (var g in duqudengji6) {
            if (g == tupian) {
                for (var k = 0; k < caipudengjishuju6.length; k++) {
                    if (duqudengji6[g][0] == caipudengjishuju6[k].id) {
                        shengjisuoxujingyan6 = parseFloat(caipudengjishuju6[k].levelexp);
                        benjijiacheng6 = parseFloat(caipudengjishuju6[k].selladd);
                        benjiweili6 = parseFloat(caipudengjishuju6[k].atcadd);
                        if (parseInt(duqudengji6[g][0]) < 20) {
                            xiajijiacheng6 = parseFloat(caipudengjishuju6[k + 1].selladd);
                            xiajiweili6 = parseFloat(caipudengjishuju6[k + 1].atcadd);
                        }
                        else {
                            xiajijiacheng6 = 0;
                            xiajiweili6 = 0;
                        }
                    }
                }
                this.caideshuxing6_7 = duqudengji6[g][0];
                this.caideshuxing6_8 = "(" + duqudengji6[g][1] + " / " + shengjisuoxujingyan6 + ")";
                this.caidejindu6 = parseInt(duqudengji6[g][1]) * 176 / shengjisuoxujingyan6;
            }
        }
        shuxing1 = parseInt(shuxing1);
        this.caideshuxing6_1 = "出售单价:" + Math.floor(shuxing1 + shuxing1 * benjijiacheng6) + "(+" + Math.floor(shuxing1 * benjijiacheng6) + ")";
        this.caideshuxing6_4 = "出售单价:" + Math.floor(shuxing1 + shuxing1 * xiajijiacheng6) + "(+" + Math.floor(shuxing1 * xiajijiacheng6) + ")";
        this.caideshuxing6_3 = "消除疲劳:" + Math.floor(shuxing1 + shuxing1 * benjiweili6) + "(+" + Math.floor(shuxing1 * benjiweili6) + ")";
        this.caideshuxing6_6 = "消除疲劳:" + Math.floor(shuxing1 + shuxing1 * xiajiweili6) + "(+" + Math.floor(shuxing1 * xiajiweili6) + ")";
        this.caideshuxing6_2 = "消耗食材:" + shuxing2;
        this.caideshuxing6_5 = "消耗食材:" + shuxing2;
    };
    Caipujiemian.prototype.dianjishangfanye = function () {
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
        Gameguanli.Kongzhitai().caipujiemian("fandian", "guan");
    };
    Caipujiemian.prototype.dianjixiaocai = function () {
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
                this.dianjicaipin1(leixingdizhi[leixingxiabiao].foodName, leixingdizhi[leixingxiabiao].id, leixingdizhi[leixingxiabiao].foodPrice, leixingdizhi[leixingxiabiao].foodMaterials, leixingdizhi[leixingxiabiao].foodIntroduce);
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
                this.dianjicaipin2(leixingdizhi[leixingxiabiao].foodName, leixingdizhi[leixingxiabiao].id, leixingdizhi[leixingxiabiao].foodPrice, leixingdizhi[leixingxiabiao].foodMaterials, leixingdizhi[leixingxiabiao].foodIntroduce);
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
                this.dianjicaipin3(leixingdizhi[leixingxiabiao].foodName, leixingdizhi[leixingxiabiao].id, leixingdizhi[leixingxiabiao].foodPrice, leixingdizhi[leixingxiabiao].foodMaterials, leixingdizhi[leixingxiabiao].foodIntroduce);
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
                this.dianjicaipin4(leixingdizhi[leixingxiabiao].foodName, leixingdizhi[leixingxiabiao].id, leixingdizhi[leixingxiabiao].foodPrice, leixingdizhi[leixingxiabiao].foodMaterials, leixingdizhi[leixingxiabiao].foodIntroduce);
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
                this.dianjicaipin5(leixingdizhi[leixingxiabiao].foodName, leixingdizhi[leixingxiabiao].id, leixingdizhi[leixingxiabiao].foodPrice, leixingdizhi[leixingxiabiao].foodMaterials, leixingdizhi[leixingxiabiao].foodIntroduce);
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
                this.dianjicaipin6(leixingdizhi[leixingxiabiao].foodName, leixingdizhi[leixingxiabiao].id, leixingdizhi[leixingxiabiao].foodPrice, leixingdizhi[leixingxiabiao].foodMaterials, leixingdizhi[leixingxiabiao].foodIntroduce);
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
        var shipupingleibiao = RES.getRes("shipubiao_json");
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
//# sourceMappingURL=Caipujiemian.js.map