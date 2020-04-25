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
var Waimaijiemianluoji = (function (_super) {
    __extends(Waimaijiemianluoji, _super);
    function Waimaijiemianluoji(caideid) {
        var _this = _super.call(this) || this;
        _this.chushihua(caideid);
        return _this;
    }
    Waimaijiemianluoji.prototype.chushihua = function (caideid) {
        var _this = this;
        this.shipubiao = RES.getRes("shipubiao_json");
        this.xuqiucai = caideid;
        this.zhuyaojiemian = new Waimaijiemian();
        Gameguanli.Kongzhitai().dingbuui.addChild(this.zhuyaojiemian);
        this.zhuyaojiemian.qipaowenzizu.alpha = 0;
        this.zhuyaojiemian.dibuzu.alpha = 0;
        this.motuojiemian = new Motuoche();
        this.zhuyaojiemian.addChild(this.motuojiemian);
        this.motuojiemian.x = this.zhuyaojiemian.width;
        this.motuojiemian.y = this.zhuyaojiemian.height / 2 - this.motuojiemian.height / 10 * 7;
        this.motuojiemian.scaleX = 0.5;
        this.motuojiemian.scaleY = 0.5;
        this.zhuyaojiemian.img_jiemiandabeijing.source = "img_jiemiandabeijing_png";
        egret.Tween.get(this.motuojiemian).to({ x: this.zhuyaojiemian.width / 2 - this.motuojiemian.width / 11 * 4, scaleX: 1, scaleY: 1 }, 2000).call(function () {
            _this.zhuyaojiemian.img_jiemiandabeijing.source = "img_jiemiandabeijing1_png";
            _this.zhuyaojiemian.qipaowenzizu.alpha = 1;
            _this.zhuyaojiemian.dibuzu.alpha = 1;
            for (var i = 0; i < _this.shipubiao.length; i++) {
                if (_this.shipubiao[i].id == caideid) {
                    _this.zhuyaojiemian.shouhuowenzi.text = "顾客这次点的是[" + _this.shipubiao[i].foodName + "],麻烦快点送上来！";
                    break;
                }
            }
            var suijihaoma = Math.floor(Math.random() * 4) + 1;
            _this.zhengquexuanze = suijihaoma;
            _this.panduanxiamian(caideid);
        });
    };
    Waimaijiemianluoji.prototype.panduanxiamian = function (caideid) {
        switch (this.zhengquexuanze) {
            case 1:
                this.zhengquewei1(caideid);
                break;
            case 2:
                this.zhengquewei2(caideid);
                break;
            case 3:
                this.zhengquewei3(caideid);
                break;
            case 4:
                this.zhengquewei4(caideid);
                break;
        }
    };
    Waimaijiemianluoji.prototype.zhengquewei1 = function (caideid) {
        for (var i = 0; i < this.shipubiao.length; i++) {
            if (this.shipubiao[i].id == caideid) {
                this.di1geid = this.shipubiao[i].id;
                this.zhuyaojiemian.tupianres1.source = this.shipubiao[i].id + "_png";
                this.zhuyaojiemian.caizu1.touchEnabled = true;
                this.zhuyaojiemian.caizu1.addEventListener(egret.TouchEvent.TOUCH_TAP, this.dianji1geanniu, this);
                break;
            }
        }
        var suijixianshi2 = Math.floor(Math.random() * 120);
        this.di2geid = this.shipubiao[suijixianshi2].id;
        while (this.di2geid == this.di1geid) {
            var suijixianshi3 = Math.floor(Math.random() * 120);
            this.di2geid = this.shipubiao[suijixianshi3].id;
        }
        for (var h = 0; h < this.shipubiao.length; h++) {
            if (this.shipubiao[h].id == this.di2geid) {
                this.zhuyaojiemian.tupianres0.source = this.shipubiao[h].id + "_png";
                this.zhuyaojiemian.caizu0.touchEnabled = true;
                this.zhuyaojiemian.caizu0.addEventListener(egret.TouchEvent.TOUCH_TAP, this.dianji2geanniu, this);
                break;
            }
        }
        var suijixianshi4 = Math.floor(Math.random() * 120);
        this.di3geid = this.shipubiao[suijixianshi4].id;
        while (this.di3geid == this.di1geid || this.di3geid == this.di2geid) {
            var suijixianshi5 = Math.floor(Math.random() * 120);
            this.di3geid = this.shipubiao[suijixianshi5].id;
        }
        for (var h = 0; h < this.shipubiao.length; h++) {
            if (this.shipubiao[h].id == this.di3geid) {
                this.zhuyaojiemian.tupianres2.source = this.shipubiao[h].id + "_png";
                this.zhuyaojiemian.caizu2.touchEnabled = true;
                this.zhuyaojiemian.caizu2.addEventListener(egret.TouchEvent.TOUCH_TAP, this.dianji3geanniu, this);
                break;
            }
        }
        var suijixianshi6 = Math.floor(Math.random() * 120);
        this.di4geid = this.shipubiao[suijixianshi6].id;
        while (this.di4geid == this.di1geid || this.di4geid == this.di2geid || this.di4geid == this.di3geid) {
            var suijixianshi7 = Math.floor(Math.random() * 120);
            this.di4geid = this.shipubiao[suijixianshi7].id;
        }
        for (var h = 0; h < this.shipubiao.length; h++) {
            if (this.shipubiao[h].id == this.di4geid) {
                this.zhuyaojiemian.tupianres3.source = this.shipubiao[h].id + "_png";
                this.zhuyaojiemian.caizu3.touchEnabled = true;
                this.zhuyaojiemian.caizu3.addEventListener(egret.TouchEvent.TOUCH_TAP, this.dianji4geanniu, this);
                break;
            }
        }
    };
    Waimaijiemianluoji.prototype.zhengquewei2 = function (caideid) {
        for (var i = 0; i < this.shipubiao.length; i++) {
            if (this.shipubiao[i].id == caideid) {
                this.di2geid = this.shipubiao[i].id;
                this.zhuyaojiemian.tupianres0.source = this.shipubiao[i].id + "_png";
                this.zhuyaojiemian.caizu0.touchEnabled = true;
                this.zhuyaojiemian.caizu0.addEventListener(egret.TouchEvent.TOUCH_TAP, this.dianji2geanniu, this);
                break;
            }
        }
        var suijixianshi2 = Math.floor(Math.random() * 120);
        this.di1geid = this.shipubiao[suijixianshi2].id;
        while (this.di1geid == this.di2geid) {
            var suijixianshi3 = Math.floor(Math.random() * 120);
            this.di1geid = this.shipubiao[suijixianshi3].id;
        }
        for (var h = 0; h < this.shipubiao.length; h++) {
            if (this.shipubiao[h].id == this.di1geid) {
                this.zhuyaojiemian.tupianres1.source = this.shipubiao[h].id + "_png";
                this.zhuyaojiemian.caizu1.touchEnabled = true;
                this.zhuyaojiemian.caizu1.addEventListener(egret.TouchEvent.TOUCH_TAP, this.dianji1geanniu, this);
                break;
            }
        }
        var suijixianshi4 = Math.floor(Math.random() * 120);
        this.di3geid = this.shipubiao[suijixianshi4].id;
        while (this.di3geid == this.di1geid || this.di3geid == this.di2geid) {
            var suijixianshi5 = Math.floor(Math.random() * 120);
            this.di3geid = this.shipubiao[suijixianshi5].id;
        }
        for (var h = 0; h < this.shipubiao.length; h++) {
            if (this.shipubiao[h].id == this.di3geid) {
                this.zhuyaojiemian.tupianres2.source = this.shipubiao[h].id + "_png";
                this.zhuyaojiemian.caizu2.touchEnabled = true;
                this.zhuyaojiemian.caizu2.addEventListener(egret.TouchEvent.TOUCH_TAP, this.dianji3geanniu, this);
                break;
            }
        }
        var suijixianshi6 = Math.floor(Math.random() * 120);
        this.di4geid = this.shipubiao[suijixianshi6].id;
        while (this.di4geid == this.di1geid || this.di4geid == this.di2geid || this.di4geid == this.di3geid) {
            var suijixianshi7 = Math.floor(Math.random() * 120);
            this.di4geid = this.shipubiao[suijixianshi7].id;
        }
        for (var h = 0; h < this.shipubiao.length; h++) {
            if (this.shipubiao[h].id == this.di4geid) {
                this.zhuyaojiemian.tupianres3.source = this.shipubiao[h].id + "_png";
                this.zhuyaojiemian.caizu3.touchEnabled = true;
                this.zhuyaojiemian.caizu3.addEventListener(egret.TouchEvent.TOUCH_TAP, this.dianji4geanniu, this);
                break;
            }
        }
    };
    Waimaijiemianluoji.prototype.zhengquewei3 = function (caideid) {
        for (var i = 0; i < this.shipubiao.length; i++) {
            if (this.shipubiao[i].id == caideid) {
                this.di3geid = this.shipubiao[i].id;
                this.zhuyaojiemian.tupianres2.source = this.shipubiao[i].id + "_png";
                this.zhuyaojiemian.caizu2.touchEnabled = true;
                this.zhuyaojiemian.caizu2.addEventListener(egret.TouchEvent.TOUCH_TAP, this.dianji3geanniu, this);
                break;
            }
        }
        var suijixianshi2 = Math.floor(Math.random() * 120);
        this.di1geid = this.shipubiao[suijixianshi2].id;
        while (this.di1geid == this.di3geid) {
            var suijixianshi3 = Math.floor(Math.random() * 120);
            this.di1geid = this.shipubiao[suijixianshi3].id;
        }
        for (var h = 0; h < this.shipubiao.length; h++) {
            if (this.shipubiao[h].id == this.di1geid) {
                this.zhuyaojiemian.tupianres1.source = this.shipubiao[h].id + "_png";
                this.zhuyaojiemian.caizu1.touchEnabled = true;
                this.zhuyaojiemian.caizu1.addEventListener(egret.TouchEvent.TOUCH_TAP, this.dianji1geanniu, this);
                break;
            }
        }
        var suijixianshi4 = Math.floor(Math.random() * 120);
        this.di2geid = this.shipubiao[suijixianshi4].id;
        while (this.di2geid == this.di1geid || this.di2geid == this.di3geid) {
            var suijixianshi5 = Math.floor(Math.random() * 120);
            this.di2geid = this.shipubiao[suijixianshi5].id;
        }
        for (var h = 0; h < this.shipubiao.length; h++) {
            if (this.shipubiao[h].id == this.di2geid) {
                this.zhuyaojiemian.tupianres0.source = this.shipubiao[h].id + "_png";
                this.zhuyaojiemian.caizu0.touchEnabled = true;
                this.zhuyaojiemian.caizu0.addEventListener(egret.TouchEvent.TOUCH_TAP, this.dianji2geanniu, this);
                break;
            }
        }
        var suijixianshi6 = Math.floor(Math.random() * 120);
        this.di4geid = this.shipubiao[suijixianshi6].id;
        while (this.di4geid == this.di1geid || this.di4geid == this.di2geid || this.di4geid == this.di3geid) {
            var suijixianshi7 = Math.floor(Math.random() * 120);
            this.di4geid = this.shipubiao[suijixianshi7].id;
        }
        for (var h = 0; h < this.shipubiao.length; h++) {
            if (this.shipubiao[h].id == this.di4geid) {
                this.zhuyaojiemian.tupianres3.source = this.shipubiao[h].id + "_png";
                this.zhuyaojiemian.caizu3.touchEnabled = true;
                this.zhuyaojiemian.caizu3.addEventListener(egret.TouchEvent.TOUCH_TAP, this.dianji4geanniu, this);
                break;
            }
        }
    };
    Waimaijiemianluoji.prototype.zhengquewei4 = function (caideid) {
        for (var i = 0; i < this.shipubiao.length; i++) {
            if (this.shipubiao[i].id == caideid) {
                this.di4geid = this.shipubiao[i].id;
                this.zhuyaojiemian.tupianres3.source = this.shipubiao[i].id + "_png";
                this.zhuyaojiemian.caizu3.touchEnabled = true;
                this.zhuyaojiemian.caizu3.addEventListener(egret.TouchEvent.TOUCH_TAP, this.dianji4geanniu, this);
                break;
            }
        }
        var suijixianshi2 = Math.floor(Math.random() * 120);
        this.di1geid = this.shipubiao[suijixianshi2].id;
        while (this.di1geid == this.di4geid) {
            var suijixianshi3 = Math.floor(Math.random() * 120);
            this.di1geid = this.shipubiao[suijixianshi3].id;
        }
        for (var h = 0; h < this.shipubiao.length; h++) {
            if (this.shipubiao[h].id == this.di1geid) {
                this.zhuyaojiemian.tupianres1.source = this.shipubiao[h].id + "_png";
                this.zhuyaojiemian.caizu1.touchEnabled = true;
                this.zhuyaojiemian.caizu1.addEventListener(egret.TouchEvent.TOUCH_TAP, this.dianji1geanniu, this);
                break;
            }
        }
        var suijixianshi4 = Math.floor(Math.random() * 120);
        this.di2geid = this.shipubiao[suijixianshi4].id;
        while (this.di2geid == this.di1geid || this.di2geid == this.di3geid) {
            var suijixianshi5 = Math.floor(Math.random() * 120);
            this.di2geid = this.shipubiao[suijixianshi5].id;
        }
        for (var h = 0; h < this.shipubiao.length; h++) {
            if (this.shipubiao[h].id == this.di2geid) {
                this.zhuyaojiemian.tupianres0.source = this.shipubiao[h].id + "_png";
                this.zhuyaojiemian.caizu0.touchEnabled = true;
                this.zhuyaojiemian.caizu0.addEventListener(egret.TouchEvent.TOUCH_TAP, this.dianji2geanniu, this);
                break;
            }
        }
        var suijixianshi6 = Math.floor(Math.random() * 120);
        this.di3geid = this.shipubiao[suijixianshi6].id;
        while (this.di3geid == this.di1geid || this.di3geid == this.di2geid || this.di3geid == this.di4geid) {
            var suijixianshi7 = Math.floor(Math.random() * 120);
            this.di3geid = this.shipubiao[suijixianshi7].id;
        }
        for (var h = 0; h < this.shipubiao.length; h++) {
            if (this.shipubiao[h].id == this.di3geid) {
                this.zhuyaojiemian.tupianres2.source = this.shipubiao[h].id + "_png";
                this.zhuyaojiemian.caizu2.touchEnabled = true;
                this.zhuyaojiemian.caizu2.addEventListener(egret.TouchEvent.TOUCH_TAP, this.dianji3geanniu, this);
                break;
            }
        }
    };
    Waimaijiemianluoji.prototype.dianji1geanniu = function () {
        var _this = this;
        this.zhuyaojiemian.caizu0.touchEnabled = false;
        this.zhuyaojiemian.caizu1.touchEnabled = false;
        this.zhuyaojiemian.caizu2.touchEnabled = false;
        this.zhuyaojiemian.caizu3.touchEnabled = false;
        this.zhuyaojiemian.caizu1.removeEventListener(egret.TouchEvent.TOUCH_TAP, this.dianji1geanniu, this);
        this.zhuyaojiemian.caizu0.removeEventListener(egret.TouchEvent.TOUCH_TAP, this.dianji2geanniu, this);
        this.zhuyaojiemian.caizu2.removeEventListener(egret.TouchEvent.TOUCH_TAP, this.dianji3geanniu, this);
        this.zhuyaojiemian.caizu3.removeEventListener(egret.TouchEvent.TOUCH_TAP, this.dianji4geanniu, this);
        egret.Tween.get(this.zhuyaojiemian.caizu1).to({ scaleX: 1.1, scaleY: 1.1 }, 500).call(function () {
            egret.Tween.get(_this.zhuyaojiemian.caizu1).to({ scaleX: 1, scaleY: 1 }, 500).call(function () {
            });
        });
        if (this.zhengquexuanze == 1) {
            this.zhengquedexuanze();
        }
        else {
            this.cuowudexuanze();
        }
    };
    Waimaijiemianluoji.prototype.dianji2geanniu = function () {
        var _this = this;
        this.zhuyaojiemian.caizu0.touchEnabled = false;
        this.zhuyaojiemian.caizu1.touchEnabled = false;
        this.zhuyaojiemian.caizu2.touchEnabled = false;
        this.zhuyaojiemian.caizu3.touchEnabled = false;
        this.zhuyaojiemian.caizu1.removeEventListener(egret.TouchEvent.TOUCH_TAP, this.dianji1geanniu, this);
        this.zhuyaojiemian.caizu0.removeEventListener(egret.TouchEvent.TOUCH_TAP, this.dianji2geanniu, this);
        this.zhuyaojiemian.caizu2.removeEventListener(egret.TouchEvent.TOUCH_TAP, this.dianji3geanniu, this);
        this.zhuyaojiemian.caizu3.removeEventListener(egret.TouchEvent.TOUCH_TAP, this.dianji4geanniu, this);
        egret.Tween.get(this.zhuyaojiemian.caizu0).to({ scaleX: 1.1, scaleY: 1.1 }, 500).call(function () {
            egret.Tween.get(_this.zhuyaojiemian.caizu0).to({ scaleX: 1, scaleY: 1 }, 500).call(function () {
            });
        });
        if (this.zhengquexuanze == 2) {
            this.zhengquedexuanze();
        }
        else {
            this.cuowudexuanze();
        }
    };
    Waimaijiemianluoji.prototype.dianji3geanniu = function () {
        var _this = this;
        this.zhuyaojiemian.caizu0.touchEnabled = false;
        this.zhuyaojiemian.caizu1.touchEnabled = false;
        this.zhuyaojiemian.caizu2.touchEnabled = false;
        this.zhuyaojiemian.caizu3.touchEnabled = false;
        this.zhuyaojiemian.caizu1.removeEventListener(egret.TouchEvent.TOUCH_TAP, this.dianji1geanniu, this);
        this.zhuyaojiemian.caizu0.removeEventListener(egret.TouchEvent.TOUCH_TAP, this.dianji2geanniu, this);
        this.zhuyaojiemian.caizu2.removeEventListener(egret.TouchEvent.TOUCH_TAP, this.dianji3geanniu, this);
        this.zhuyaojiemian.caizu3.removeEventListener(egret.TouchEvent.TOUCH_TAP, this.dianji4geanniu, this);
        egret.Tween.get(this.zhuyaojiemian.caizu2).to({ scaleX: 1.1, scaleY: 1.1 }, 500).call(function () {
            egret.Tween.get(_this.zhuyaojiemian.caizu2).to({ scaleX: 1, scaleY: 1 }, 500).call(function () {
            });
        });
        if (this.zhengquexuanze == 3) {
            this.zhengquedexuanze();
        }
        else {
            this.cuowudexuanze();
        }
    };
    Waimaijiemianluoji.prototype.dianji4geanniu = function () {
        var _this = this;
        this.zhuyaojiemian.caizu0.touchEnabled = false;
        this.zhuyaojiemian.caizu1.touchEnabled = false;
        this.zhuyaojiemian.caizu2.touchEnabled = false;
        this.zhuyaojiemian.caizu3.touchEnabled = false;
        this.zhuyaojiemian.caizu1.removeEventListener(egret.TouchEvent.TOUCH_TAP, this.dianji1geanniu, this);
        this.zhuyaojiemian.caizu0.removeEventListener(egret.TouchEvent.TOUCH_TAP, this.dianji2geanniu, this);
        this.zhuyaojiemian.caizu2.removeEventListener(egret.TouchEvent.TOUCH_TAP, this.dianji3geanniu, this);
        this.zhuyaojiemian.caizu3.removeEventListener(egret.TouchEvent.TOUCH_TAP, this.dianji4geanniu, this);
        egret.Tween.get(this.zhuyaojiemian.caizu3).to({ scaleX: 1.1, scaleY: 1.1 }, 500).call(function () {
            egret.Tween.get(_this.zhuyaojiemian.caizu3).to({ scaleX: 1, scaleY: 1 }, 500).call(function () {
            });
        });
        if (this.zhengquexuanze == 4) {
            this.zhengquedexuanze();
        }
        else {
            this.cuowudexuanze();
        }
    };
    Waimaijiemianluoji.prototype.zhengquedexuanze = function () {
        var _this = this;
        this.zhuyaojiemian.shouhuowenzi.text = "对喽，老板手脚挺麻利的嘛！";
        var tishiduihua = new Waimaiduihuakuang();
        Gameguanli.Kongzhitai().dingbuui.addChild(tishiduihua);
        tishiduihua.x = this.zhuyaojiemian.width / 2 - tishiduihua.width / 2;
        tishiduihua.y = this.zhuyaojiemian.height / 11 * 6;
        tishiduihua.dikuangbj.source = "img_zhengqueduihuakuang_png";
        tishiduihua.shuohuawenzi.text = "对喽，老板手脚挺麻利的嘛！我去送货啦！";
        egret.Tween.get(tishiduihua).to({ y: this.zhuyaojiemian.height / 11 * 4 }, 2000).wait(1000).call(function () {
            Gameguanli.Kongzhitai().dingbuui.removeChild(tishiduihua);
            for (var i = 0; i < _this.shipubiao.length; i++) {
                if (_this.shipubiao[i].id == _this.xuqiucai) {
                    Weblianjie.fasongshuju("code:085", "{" + '"kouchuleixing"' + ":" + '"0"' + ","
                        + '"kouchushuliang"' + ":" + '"0"' + ","
                        + '"leixing"' + ":" + '"1"' + ","
                        + '"shuliang"' + ":" + '"' + _this.shipubiao[i].foodPrice + '"' + ","
                        + '"beishu"' + ":" + '"1"' + ","
                        + '"uid"' + ":" + '"' + Gerenshuxing.uid + '"' + "}");
                    break;
                }
            }
            _this.zhuyaojiemian.img_jiemiandabeijing.source = "img_jiemiandabeijing_png";
            _this.zhuyaojiemian.qipaowenzizu.alpha = 0;
            _this.zhuyaojiemian.dibuzu.alpha = 0;
            egret.Tween.get(_this.motuojiemian).to({ x: 0 - _this.zhuyaojiemian.width, scaleX: 0.5, scaleY: 0.5 }, 2000).call(function () {
                Gameguanli.Kongzhitai().dingbuui.removeChild(_this.zhuyaojiemian);
            });
        });
    };
    Waimaijiemianluoji.prototype.cuowudexuanze = function () {
        var _this = this;
        var tishiduihua = new Waimaiduihuakuang();
        Gameguanli.Kongzhitai().dingbuui.addChild(tishiduihua);
        tishiduihua.x = this.zhuyaojiemian.width / 2 - tishiduihua.width / 2;
        tishiduihua.y = this.zhuyaojiemian.height / 11 * 6;
        tishiduihua.dikuangbj.source = "img_cuowuduihuakuang_png";
        for (var i = 0; i < this.shipubiao.length; i++) {
            if (this.shipubiao[i].id == this.xuqiucai) {
                this.zhuyaojiemian.shouhuowenzi.text = "不对不对，顾客点的是[" + this.shipubiao[i].foodName + "],再好好看看！";
                tishiduihua.shuohuawenzi.text = "不对不对，顾客点的是[" + this.shipubiao[i].foodName + "],再好好看看！";
                break;
            }
        }
        egret.Tween.get(tishiduihua).to({ y: this.zhuyaojiemian.height / 11 * 4 }, 2000).wait(1000).call(function () {
            Gameguanli.Kongzhitai().dingbuui.removeChild(tishiduihua);
            _this.zhuyaojiemian.caizu0.touchEnabled = true;
            _this.zhuyaojiemian.caizu1.touchEnabled = true;
            _this.zhuyaojiemian.caizu2.touchEnabled = true;
            _this.zhuyaojiemian.caizu3.touchEnabled = true;
            _this.zhuyaojiemian.caizu1.addEventListener(egret.TouchEvent.TOUCH_TAP, _this.dianji1geanniu, _this);
            _this.zhuyaojiemian.caizu0.addEventListener(egret.TouchEvent.TOUCH_TAP, _this.dianji2geanniu, _this);
            _this.zhuyaojiemian.caizu2.addEventListener(egret.TouchEvent.TOUCH_TAP, _this.dianji3geanniu, _this);
            _this.zhuyaojiemian.caizu3.addEventListener(egret.TouchEvent.TOUCH_TAP, _this.dianji4geanniu, _this);
        });
    };
    return Waimaijiemianluoji;
}(egret.DisplayObjectContainer));
__reflect(Waimaijiemianluoji.prototype, "Waimaijiemianluoji");
//# sourceMappingURL=Waimaijiemianluoji.js.map