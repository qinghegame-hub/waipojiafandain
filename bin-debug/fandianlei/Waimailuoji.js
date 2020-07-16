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
var Waimailuoji = (function (_super) {
    __extends(Waimailuoji, _super);
    function Waimailuoji() {
        return _super.call(this) || this;
    }
    Waimailuoji.zhujiemianluoji = function (caiid) {
        var _this = this;
        if (Gameguanli.Kongzhitai().zhujiemiandingbu.parent) {
            this.shipubiao = Gerenshuxing.shipubiao;
            if (this.di1gekeng == false) {
                this.di1gekeng = true;
                this.di1gecaiui = new Waimaitishi();
                Gameguanli.Kongzhitai().zhujiemiandingbu.addChild(this.di1gecaiui);
                this.di1gecaiui.x = Gameguanli.Kongzhitai().zhujiemiandingbu.width;
                this.di1gecaiui.y = Gameguanli.Kongzhitai().zhujiemiandingbu.height / 11 * 5;
                this.di1gecaiid = caiid;
                for (var i = 0; i < this.shipubiao.length; i++) {
                    if (this.shipubiao[i].id == caiid) {
                        this.di1gecaiui.caiicon.source = this.shipubiao[i].id + "_png";
                        this.di1gecaiui.caiming.text = this.shipubiao[i].foodName;
                        break;
                    }
                }
                egret.Tween.get(this.di1gecaiui).to({ x: Gameguanli.Kongzhitai().zhujiemiandingbu.width - this.di1gecaiui.width }, 500).call(function () {
                    if (Gameguanli.Kongzhitai().zhujiemiandingbu.parent) {
                        _this.di1gecaiui.tanchucaizu.touchEnabled = true;
                        _this.di1gecaiui.tanchucaizu.addEventListener(egret.TouchEvent.TOUCH_TAP, _this.dianji1waimai, _this);
                    }
                });
            }
            else if (this.di2gekeng == false) {
                this.di2gekeng = true;
                this.di2gecaiui = new Waimaitishi();
                Gameguanli.Kongzhitai().zhujiemiandingbu.addChild(this.di2gecaiui);
                this.di2gecaiui.x = Gameguanli.Kongzhitai().zhujiemiandingbu.width;
                this.di2gecaiui.y = Gameguanli.Kongzhitai().zhujiemiandingbu.height / 11 * 4;
                this.di2gecaiid = caiid;
                for (var i = 0; i < this.shipubiao.length; i++) {
                    if (this.shipubiao[i].id == caiid) {
                        console.log(this.shipubiao[i].id + "_png");
                        this.di2gecaiui.caiicon.source = "" + this.shipubiao[i].id + "_png";
                        this.di2gecaiui.caiming.text = this.shipubiao[i].foodName;
                        break;
                    }
                }
                egret.Tween.get(this.di2gecaiui).to({ x: Gameguanli.Kongzhitai().zhujiemiandingbu.width - this.di2gecaiui.width }, 500).call(function () {
                    if (Gameguanli.Kongzhitai().zhujiemiandingbu.parent) {
                        _this.di2gecaiui.tanchucaizu.touchEnabled = true;
                        _this.di2gecaiui.tanchucaizu.addEventListener(egret.TouchEvent.TOUCH_TAP, _this.dianji2waimai, _this);
                    }
                });
            }
            else if (this.di3gekeng == false) {
                this.di3gekeng = true;
                this.di3gecaiui = new Waimaitishi();
                Gameguanli.Kongzhitai().zhujiemiandingbu.addChild(this.di3gecaiui);
                this.di3gecaiui.x = Gameguanli.Kongzhitai().zhujiemiandingbu.width;
                this.di3gecaiui.y = Gameguanli.Kongzhitai().zhujiemiandingbu.height / 11 * 3;
                this.di3gecaiid = caiid;
                for (var i = 0; i < this.shipubiao.length; i++) {
                    if (this.shipubiao[i].id == caiid) {
                        console.log(this.shipubiao[i].id + "_png");
                        this.di3gecaiui.caiicon.source = "" + this.shipubiao[i].id + "_png";
                        this.di3gecaiui.caiming.text = this.shipubiao[i].foodName;
                        break;
                    }
                }
                egret.Tween.get(this.di3gecaiui).to({ x: Gameguanli.Kongzhitai().zhujiemiandingbu.width - this.di3gecaiui.width }, 500).call(function () {
                    if (Gameguanli.Kongzhitai().zhujiemiandingbu.parent) {
                        _this.di3gecaiui.tanchucaizu.touchEnabled = true;
                        _this.di3gecaiui.tanchucaizu.addEventListener(egret.TouchEvent.TOUCH_TAP, _this.dianji3waimai, _this);
                    }
                });
            }
        }
    };
    Waimailuoji.dianji1waimai = function () {
        var _this = this;
        Gamesound.Soundkongzhi().anniuyinxiao();
        egret.Tween.get(this.di1gecaiui).to({ scaleX: 1.1, scaleY: 1.1 }, 500).call(function () {
            egret.Tween.get(_this.di1gecaiui).to({ scaleX: 1, scaleY: 1 }, 500).call(function () {
                Gameguanli.Kongzhitai().zhujiemiandingbu.removeChild(_this.di1gecaiui);
                _this.di1gekeng = false;
                var waimaisongdaui = new Waimaijiemianluoji(_this.di1gecaiid);
            });
        });
    };
    Waimailuoji.dianji2waimai = function () {
        var _this = this;
        Gamesound.Soundkongzhi().anniuyinxiao();
        egret.Tween.get(this.di2gecaiui).to({ scaleX: 1.1, scaleY: 1.1 }, 500).call(function () {
            egret.Tween.get(_this.di2gecaiui).to({ scaleX: 1, scaleY: 1 }, 500).call(function () {
                Gameguanli.Kongzhitai().zhujiemiandingbu.removeChild(_this.di2gecaiui);
                _this.di2gekeng = false;
                var waimaisongdaui = new Waimaijiemianluoji(_this.di2gecaiid);
            });
        });
    };
    Waimailuoji.dianji3waimai = function () {
        var _this = this;
        Gamesound.Soundkongzhi().anniuyinxiao();
        egret.Tween.get(this.di3gecaiui).to({ scaleX: 1.1, scaleY: 1.1 }, 500).call(function () {
            egret.Tween.get(_this.di3gecaiui).to({ scaleX: 1, scaleY: 1 }, 500).call(function () {
                Gameguanli.Kongzhitai().zhujiemiandingbu.removeChild(_this.di3gecaiui);
                _this.di3gekeng = false;
                var waimaisongdaui = new Waimaijiemianluoji(_this.di3gecaiid);
            });
        });
    };
    Waimailuoji.di1gekeng = false;
    Waimailuoji.di2gekeng = false;
    Waimailuoji.di3gekeng = false;
    return Waimailuoji;
}(egret.DisplayObjectContainer));
__reflect(Waimailuoji.prototype, "Waimailuoji");
