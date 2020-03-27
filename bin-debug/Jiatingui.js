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
var Jiatingui = (function (_super) {
    __extends(Jiatingui, _super);
    function Jiatingui() {
        return _super.call(this) || this;
    }
    Jiatingui.prototype.partAdded = function (partName, instance) {
        _super.prototype.partAdded.call(this, partName, instance);
    };
    Jiatingui.prototype.childrenCreated = function () {
        _super.prototype.childrenCreated.call(this);
        this.chushihua();
    };
    Jiatingui.prototype.chushihua = function () {
        this.butun_chuang.touchEnabled = true;
        this.butun_chuang.addEventListener(egret.TouchEvent.TOUCH_TAP, this.dianjichuang, this);
        this.butun_chuang0.touchEnabled = true;
        this.butun_chuang0.addEventListener(egret.TouchEvent.TOUCH_TAP, this.dianjichuang, this);
        this.butun_guizi.touchEnabled = true;
        this.butun_guizi.addEventListener(egret.TouchEvent.TOUCH_TAP, this.dianjiguizi, this);
        this.butun_shuzhuo.touchEnabled = true;
        this.butun_shuzhuo.addEventListener(egret.TouchEvent.TOUCH_TAP, this.dianjishuzhuo, this);
        this.butun_dianshi.touchEnabled = true;
        this.butun_dianshi.addEventListener(egret.TouchEvent.TOUCH_TAP, this.dianjidianshi, this);
        this.butun_chaji.touchEnabled = true;
        this.butun_chaji.addEventListener(egret.TouchEvent.TOUCH_TAP, this.dianjichaji, this);
        this.butun_shafa.touchEnabled = true;
        this.butun_shafa.addEventListener(egret.TouchEvent.TOUCH_TAP, this.dianjishafa, this);
        this.butun_shafa0.touchEnabled = true;
        this.butun_shafa0.addEventListener(egret.TouchEvent.TOUCH_TAP, this.dianjishafa, this);
        this.butun_maowo.touchEnabled = true;
        this.butun_maowo.addEventListener(egret.TouchEvent.TOUCH_TAP, this.dianjimaowo, this);
        this.jiatingchengyuanxianshi();
    };
    Jiatingui.prototype.dianjichuang = function () {
        var _this = this;
        Gameguanli.Kongzhitai().cuowutishixinxi("点击成功");
        egret.Tween.get(this.but_chuang).to({ scaleX: 1.2, scaleY: 1.2 }, 1000).call(function () {
            egret.Tween.get(_this.but_chuang).to({ scaleX: 1, scaleY: 1 }, 1000);
        });
    };
    Jiatingui.prototype.dianjiguizi = function () {
        var _this = this;
        egret.Tween.get(this.but_guizi).to({ scaleX: 1.2, scaleY: 1.2 }, 1000).call(function () {
            egret.Tween.get(_this.but_guizi).to({ scaleX: 1, scaleY: 1 }, 1000);
            Gameguanli.Kongzhitai().cuowutishixinxi("点击成功");
        });
    };
    Jiatingui.prototype.dianjishuzhuo = function () {
        var _this = this;
        egret.Tween.get(this.but_shuzhuo).to({ scaleX: 1.2, scaleY: 1.2 }, 1000).call(function () {
            egret.Tween.get(_this.but_shuzhuo).to({ scaleX: 1, scaleY: 1 }, 1000);
            Gameguanli.Kongzhitai().cuowutishixinxi("点击成功");
        });
    };
    Jiatingui.prototype.dianjidianshi = function () {
        var _this = this;
        egret.Tween.get(this.but_dianshi).to({ scaleX: 1.2, scaleY: 1.2 }, 1000).call(function () {
            egret.Tween.get(_this.but_dianshi).to({ scaleX: 1, scaleY: 1 }, 1000);
            Gameguanli.Kongzhitai().cuowutishixinxi("点击成功");
        });
    };
    Jiatingui.prototype.dianjichaji = function () {
        var _this = this;
        egret.Tween.get(this.but_chaji).to({ scaleX: 1.2, scaleY: 1.2 }, 1000).call(function () {
            egret.Tween.get(_this.but_chaji).to({ scaleX: 1, scaleY: 1 }, 1000);
            Gameguanli.Kongzhitai().cuowutishixinxi("点击成功");
        });
    };
    Jiatingui.prototype.dianjishafa = function () {
        var _this = this;
        egret.Tween.get(this.but_shafa).to({ scaleX: 1.2, scaleY: 1.2 }, 1000).call(function () {
            egret.Tween.get(_this.but_shafa).to({ scaleX: 1, scaleY: 1 }, 1000);
            Gameguanli.Kongzhitai().cuowutishixinxi("点击成功");
        });
    };
    Jiatingui.prototype.dianjimaowo = function () {
        var _this = this;
        egret.Tween.get(this.but_maowo).to({ scaleX: 1.2, scaleY: 1.2 }, 1000).call(function () {
            egret.Tween.get(_this.but_maowo).to({ scaleX: 1, scaleY: 1 }, 1000);
            Gameguanli.Kongzhitai().cuowutishixinxi("点击成功");
        });
    };
    Jiatingui.prototype.jiatingchengyuanxianshi = function () {
        if (Gerenshuxing.daerzixinxi[5] == 1) {
            this.img_daerzi.alpha = 1;
            this.img_daerzi.touchEnabled = true;
            this.img_daerzi.addEventListener(egret.TouchEvent.TOUCH_TAP, this.dianjidaerzi, this);
            if (Gerenshuxing.daerzixinxi[4] == 0) {
                Weblianjie.fasongshuju("code:058", "{" + '"uid"' + ":" + '"' + Gerenshuxing.uid + '"' + "}");
                var daerzihuijiahanhua_1 = new Toudingwenzi();
                Gameguanli.Kongzhitai().jiatingjiemian.addChild(daerzihuijiahanhua_1);
                daerzihuijiahanhua_1.x = this.img_daerzi.x - daerzihuijiahanhua_1.width / 2 + daerzihuijiahanhua_1.toudingwenzizu.width + this.img_daerzi.width;
                daerzihuijiahanhua_1.y = this.img_daerzi.y - daerzihuijiahanhua_1.height / 2 + daerzihuijiahanhua_1.toudingwenzizu.height + this.img_daerzi.height / 6;
                daerzihuijiahanhua_1.wenzineirong.text = "妈，我回家了...";
                egret.Tween.get(daerzihuijiahanhua_1).to({ alpha: 0.5 }, 3000).call(function () {
                    Gameguanli.Kongzhitai().jiatingjiemian.removeChild(daerzihuijiahanhua_1);
                });
            }
        }
        else {
            this.img_daerzi.alpha = 0;
            this.img_daerzi.touchEnabled = false;
        }
        if (Gerenshuxing.ererzixinxi[5] == 1) {
            this.img_ererzi.alpha = 1;
            this.img_ererzi.touchEnabled = true;
            this.img_ererzi.addEventListener(egret.TouchEvent.TOUCH_TAP, this.dianjiererzi, this);
            if (Gerenshuxing.ererzixinxi[4] == 0) {
                Weblianjie.fasongshuju("code:059", "{" + '"uid"' + ":" + '"' + Gerenshuxing.uid + '"' + "}");
                var ererzihuijiahanhua_1 = new Toudingwenzi();
                Gameguanli.Kongzhitai().jiatingjiemian.addChild(ererzihuijiahanhua_1);
                ererzihuijiahanhua_1.x = this.img_ererzi.x - ererzihuijiahanhua_1.width / 2 + ererzihuijiahanhua_1.toudingwenzizu.width + this.img_ererzi.width;
                ererzihuijiahanhua_1.y = this.img_ererzi.y - ererzihuijiahanhua_1.height / 2 + ererzihuijiahanhua_1.toudingwenzizu.height + this.img_ererzi.height / 6;
                ererzihuijiahanhua_1.wenzineirong.text = "亲爱的老妈，我回家了...";
                egret.Tween.get(ererzihuijiahanhua_1).to({ alpha: 0.5 }, 3000).call(function () {
                    Gameguanli.Kongzhitai().jiatingjiemian.removeChild(ererzihuijiahanhua_1);
                });
            }
        }
        else {
            this.img_ererzi.alpha = 0;
            this.img_ererzi.touchEnabled = false;
        }
        if (Gerenshuxing.xifuxinxi[5] == 1) {
            this.img_daerxi.alpha = 1;
            this.img_daerxi.touchEnabled = true;
            this.img_daerxi.addEventListener(egret.TouchEvent.TOUCH_TAP, this.dianjixifu, this);
            if (Gerenshuxing.xifuxinxi[4] == 0) {
                Weblianjie.fasongshuju("code:060", "{" + '"uid"' + ":" + '"' + Gerenshuxing.uid + '"' + "}");
                var xifuhuijiahanhua_1 = new Toudingwenzi();
                Gameguanli.Kongzhitai().jiatingjiemian.addChild(xifuhuijiahanhua_1);
                xifuhuijiahanhua_1.img_toudingwenzikuang.skewY = 180;
                xifuhuijiahanhua_1.x = this.img_daerxi.x - xifuhuijiahanhua_1.width / 2 + xifuhuijiahanhua_1.toudingwenzizu.width - this.img_daerxi.width * 2.5;
                xifuhuijiahanhua_1.y = this.img_daerxi.y - xifuhuijiahanhua_1.height / 2 + xifuhuijiahanhua_1.toudingwenzizu.height + this.img_daerxi.height / 6;
                xifuhuijiahanhua_1.wenzineirong.text = "婆婆，我回家了...";
                egret.Tween.get(xifuhuijiahanhua_1).to({ alpha: 0.5 }, 3000).call(function () {
                    Gameguanli.Kongzhitai().jiatingjiemian.removeChild(xifuhuijiahanhua_1);
                });
            }
        }
        else {
            this.img_daerxi.alpha = 0;
            this.img_daerxi.touchEnabled = false;
        }
        if (Gerenshuxing.sunnvxinxi[5] == 1) {
            this.img_xiaosunnv.alpha = 1;
            this.img_xiaosunnv.touchEnabled = true;
            this.img_xiaosunnv.addEventListener(egret.TouchEvent.TOUCH_TAP, this.dianjixiaosunnv, this);
            if (Gerenshuxing.sunnvxinxi[4] == 0) {
                Weblianjie.fasongshuju("code:061", "{" + '"uid"' + ":" + '"' + Gerenshuxing.uid + '"' + "}");
                var sunnvhuijiahanhua_1 = new Toudingwenzi();
                Gameguanli.Kongzhitai().jiatingjiemian.addChild(sunnvhuijiahanhua_1);
                sunnvhuijiahanhua_1.x = this.img_xiaosunnv.x - sunnvhuijiahanhua_1.width / 2 + sunnvhuijiahanhua_1.toudingwenzizu.width + this.img_xiaosunnv.width;
                sunnvhuijiahanhua_1.y = this.img_xiaosunnv.y - sunnvhuijiahanhua_1.height / 2 + sunnvhuijiahanhua_1.toudingwenzizu.height + this.img_xiaosunnv.height / 6;
                sunnvhuijiahanhua_1.wenzineirong.text = "奶奶，我回家了...";
                egret.Tween.get(sunnvhuijiahanhua_1).to({ alpha: 0.5 }, 3000).call(function () {
                    Gameguanli.Kongzhitai().jiatingjiemian.removeChild(sunnvhuijiahanhua_1);
                });
            }
        }
        else {
            this.img_xiaosunnv.alpha = 0;
            this.img_xiaosunnv.touchEnabled = false;
        }
    };
    Jiatingui.prototype.dianjidaerzi = function () {
        var _this = this;
        egret.Tween.get(this.img_daerzi).to({ scaleX: 1.2, scaleY: 1.2 }, 1000).call(function () {
            egret.Tween.get(_this.img_daerzi).to({ scaleX: 1, scaleY: 1 }, 1000);
            Gameguanli.Kongzhitai().cuowutishixinxi("点击成功");
        });
    };
    Jiatingui.prototype.dianjiererzi = function () {
        var _this = this;
        egret.Tween.get(this.img_ererzi).to({ scaleX: 1.2, scaleY: 1.2 }, 1000).call(function () {
            egret.Tween.get(_this.img_ererzi).to({ scaleX: 1, scaleY: 1 }, 1000);
            Gameguanli.Kongzhitai().cuowutishixinxi("点击成功");
        });
    };
    Jiatingui.prototype.dianjixifu = function () {
        var _this = this;
        egret.Tween.get(this.img_daerxi).to({ scaleX: 1.2, scaleY: 1.2 }, 1000).call(function () {
            egret.Tween.get(_this.img_daerxi).to({ scaleX: 1, scaleY: 1 }, 1000);
            Gameguanli.Kongzhitai().cuowutishixinxi("点击成功");
        });
    };
    Jiatingui.prototype.dianjixiaosunnv = function () {
        var _this = this;
        egret.Tween.get(this.img_xiaosunnv).to({ scaleX: 1.2, scaleY: 1.2 }, 1000).call(function () {
            egret.Tween.get(_this.img_xiaosunnv).to({ scaleX: 1, scaleY: 1 }, 1000);
            Gameguanli.Kongzhitai().cuowutishixinxi("点击成功");
        });
    };
    return Jiatingui;
}(eui.Component));
__reflect(Jiatingui.prototype, "Jiatingui", ["eui.UIComponent", "egret.DisplayObject"]);
//# sourceMappingURL=Jiatingui.js.map