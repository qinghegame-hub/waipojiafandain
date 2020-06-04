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
var Gerenshuxingjiemian = (function (_super) {
    __extends(Gerenshuxingjiemian, _super);
    function Gerenshuxingjiemian() {
        return _super.call(this) || this;
    }
    Gerenshuxingjiemian.prototype.partAdded = function (partName, instance) {
        _super.prototype.partAdded.call(this, partName, instance);
    };
    Gerenshuxingjiemian.prototype.childrenCreated = function () {
        _super.prototype.childrenCreated.call(this);
        this.shuomingtishi();
    };
    Gerenshuxingjiemian.prototype.shuomingtishi = function () {
        this.youxitishibiao = RES.getRes("youxitishibiao_json");
        /*
        增加小提示按钮点击事件，点击后弹出介绍界面
        */
        this.shuominganniu.addEventListener(egret.TouchEvent.TOUCH_TAP, this.shuoming1, this);
        this.shuominganniu0.addEventListener(egret.TouchEvent.TOUCH_TAP, this.shuoming2, this);
        this.shuominganniu1.addEventListener(egret.TouchEvent.TOUCH_TAP, this.shuoming3, this);
        this.shuominganniu2.addEventListener(egret.TouchEvent.TOUCH_TAP, this.shuoming4, this);
        this.shuominganniu3.addEventListener(egret.TouchEvent.TOUCH_TAP, this.shuoming5, this);
        this.shuominganniu4.addEventListener(egret.TouchEvent.TOUCH_TAP, this.shuoming6, this);
        this.shuominganniu5.addEventListener(egret.TouchEvent.TOUCH_TAP, this.shuoming7, this);
        this.shuominganniu6.addEventListener(egret.TouchEvent.TOUCH_TAP, this.shuoming8, this);
    };
    Gerenshuxingjiemian.prototype.shuoming1 = function () {
        for (var i = 0; i < this.youxitishibiao.length; i++) {
            if (this.youxitishibiao[i].id == "19") {
                this.youxitishijiemian(this.youxitishibiao[i].neirong);
                break;
            }
        }
    };
    Gerenshuxingjiemian.prototype.shuoming2 = function () {
        for (var i = 0; i < this.youxitishibiao.length; i++) {
            if (this.youxitishibiao[i].id == "20") {
                this.youxitishijiemian(this.youxitishibiao[i].neirong);
                break;
            }
        }
    };
    Gerenshuxingjiemian.prototype.shuoming3 = function () {
        for (var i = 0; i < this.youxitishibiao.length; i++) {
            if (this.youxitishibiao[i].id == "21") {
                this.youxitishijiemian(this.youxitishibiao[i].neirong);
                break;
            }
        }
    };
    Gerenshuxingjiemian.prototype.shuoming4 = function () {
        for (var i = 0; i < this.youxitishibiao.length; i++) {
            if (this.youxitishibiao[i].id == "22") {
                this.youxitishijiemian(this.youxitishibiao[i].neirong);
                break;
            }
        }
    };
    Gerenshuxingjiemian.prototype.shuoming5 = function () {
        for (var i = 0; i < this.youxitishibiao.length; i++) {
            if (this.youxitishibiao[i].id == "23") {
                this.youxitishijiemian(this.youxitishibiao[i].neirong);
                break;
            }
        }
    };
    Gerenshuxingjiemian.prototype.shuoming6 = function () {
        for (var i = 0; i < this.youxitishibiao.length; i++) {
            if (this.youxitishibiao[i].id == "24") {
                this.youxitishijiemian(this.youxitishibiao[i].neirong);
                break;
            }
        }
    };
    Gerenshuxingjiemian.prototype.shuoming7 = function () {
        for (var i = 0; i < this.youxitishibiao.length; i++) {
            if (this.youxitishibiao[i].id == "25") {
                this.youxitishijiemian(this.youxitishibiao[i].neirong);
                break;
            }
        }
    };
    Gerenshuxingjiemian.prototype.shuoming8 = function () {
        for (var i = 0; i < this.youxitishibiao.length; i++) {
            if (this.youxitishibiao[i].id == "26") {
                this.youxitishijiemian(this.youxitishibiao[i].neirong);
                break;
            }
        }
    };
    Gerenshuxingjiemian.prototype.youxitishijiemian = function (neirong) {
        var tishijiemian = new Youxitishiui();
        this.addChild(tishijiemian);
        tishijiemian.xianshineirong(neirong);
    };
    return Gerenshuxingjiemian;
}(eui.Component));
__reflect(Gerenshuxingjiemian.prototype, "Gerenshuxingjiemian", ["eui.UIComponent", "egret.DisplayObject"]);
//# sourceMappingURL=Gerenshuxingjiemian.js.map