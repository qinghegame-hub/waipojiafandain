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
var Maicaiui = (function (_super) {
    __extends(Maicaiui, _super);
    function Maicaiui() {
        var _this = _super.call(this) || this;
        _this.shicaizu = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
        _this.dijigekeng = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
        _this.baicaishu = 0;
        _this.tudoushu = 0;
        _this.dongguashu = 0;
        _this.yushu = 0;
        _this.roushu = 0;
        _this.cailanzi = Gerenshuxing.cailanzishu;
        _this.xiaohaojinbi = 500;
        _this.shuaxinshu = 2;
        _this.zengjiayuanliao = 0;
        _this.dangqianshicai = 0;
        return _this;
    }
    Maicaiui.prototype.partAdded = function (partName, instance) {
        _super.prototype.partAdded.call(this, partName, instance);
    };
    Maicaiui.prototype.childrenCreated = function () {
        _super.prototype.childrenCreated.call(this);
        this.chushihua();
    };
    Maicaiui.prototype.chushihua = function () {
        //		this.shicaizu = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];
        this.dijigekeng = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
        var shuaxinjiange = new egret.Timer(3000, 1);
        shuaxinjiange.addEventListener(egret.TimerEvent.TIMER, this.shuaxinxulie, this);
        shuaxinjiange.start();
        //		this.shuaxinxulie();
        this.jianjinbi.text = "-" + this.xiaohaojinbi;
        this.baicaitext.text = "" + this.baicaishu;
        this.tudoutext.text = "" + this.tudoushu;
        this.dongguatext.text = "" + this.dongguashu;
        this.yutext.text = "" + this.yushu;
        this.routext.text = "" + this.roushu;
        this.shuaxintext.text = "" + this.shuaxinshu;
        this.cailanzitext.text = "" + this.cailanzi;
    };
    Maicaiui.prototype.shuaxinxulie = function () {
        var xulieleixing = 0;
        var tupian = "";
        if (this.cailanzi > 0) {
            this.keng1.touchEnabled = true;
            this.keng2.touchEnabled = true;
            this.keng3.touchEnabled = true;
            this.keng4.touchEnabled = true;
            this.keng5.touchEnabled = true;
            this.keng6.touchEnabled = true;
            this.keng7.touchEnabled = true;
            this.keng8.touchEnabled = true;
            this.keng9.touchEnabled = true;
            this.keng10.touchEnabled = true;
            this.keng11.touchEnabled = true;
            this.keng12.touchEnabled = true;
            this.keng13.touchEnabled = true;
            this.keng14.touchEnabled = true;
            this.keng15.touchEnabled = true;
            this.keng1.addEventListener(egret.TouchEvent.TOUCH_TAP, this.diankeng1, this);
            this.keng2.addEventListener(egret.TouchEvent.TOUCH_TAP, this.diankeng2, this);
            this.keng3.addEventListener(egret.TouchEvent.TOUCH_TAP, this.diankeng3, this);
            this.keng4.addEventListener(egret.TouchEvent.TOUCH_TAP, this.diankeng4, this);
            this.keng5.addEventListener(egret.TouchEvent.TOUCH_TAP, this.diankeng5, this);
            this.keng6.addEventListener(egret.TouchEvent.TOUCH_TAP, this.diankeng6, this);
            this.keng7.addEventListener(egret.TouchEvent.TOUCH_TAP, this.diankeng7, this);
            this.keng8.addEventListener(egret.TouchEvent.TOUCH_TAP, this.diankeng8, this);
            this.keng9.addEventListener(egret.TouchEvent.TOUCH_TAP, this.diankeng9, this);
            this.keng10.addEventListener(egret.TouchEvent.TOUCH_TAP, this.diankeng10, this);
            this.keng11.addEventListener(egret.TouchEvent.TOUCH_TAP, this.diankeng11, this);
            this.keng12.addEventListener(egret.TouchEvent.TOUCH_TAP, this.diankeng12, this);
            this.keng13.addEventListener(egret.TouchEvent.TOUCH_TAP, this.diankeng13, this);
            this.keng14.addEventListener(egret.TouchEvent.TOUCH_TAP, this.diankeng14, this);
            this.keng15.addEventListener(egret.TouchEvent.TOUCH_TAP, this.diankeng15, this);
        }
        else {
            this.keng1.touchEnabled = false;
            this.keng2.touchEnabled = false;
            this.keng3.touchEnabled = false;
            this.keng4.touchEnabled = false;
            this.keng5.touchEnabled = false;
            this.keng6.touchEnabled = false;
            this.keng7.touchEnabled = false;
            this.keng8.touchEnabled = false;
            this.keng9.touchEnabled = false;
            this.keng10.touchEnabled = false;
            this.keng11.touchEnabled = false;
            this.keng12.touchEnabled = false;
            this.keng13.touchEnabled = false;
            this.keng14.touchEnabled = false;
            this.keng15.touchEnabled = false;
            this.keng1.removeEventListener(egret.TouchEvent.TOUCH_TAP, this.diankeng1, this);
            this.keng2.removeEventListener(egret.TouchEvent.TOUCH_TAP, this.diankeng2, this);
            this.keng3.removeEventListener(egret.TouchEvent.TOUCH_TAP, this.diankeng3, this);
            this.keng4.removeEventListener(egret.TouchEvent.TOUCH_TAP, this.diankeng4, this);
            this.keng5.removeEventListener(egret.TouchEvent.TOUCH_TAP, this.diankeng5, this);
            this.keng6.removeEventListener(egret.TouchEvent.TOUCH_TAP, this.diankeng6, this);
            this.keng7.removeEventListener(egret.TouchEvent.TOUCH_TAP, this.diankeng7, this);
            this.keng8.removeEventListener(egret.TouchEvent.TOUCH_TAP, this.diankeng8, this);
            this.keng9.removeEventListener(egret.TouchEvent.TOUCH_TAP, this.diankeng9, this);
            this.keng10.removeEventListener(egret.TouchEvent.TOUCH_TAP, this.diankeng10, this);
            this.keng11.removeEventListener(egret.TouchEvent.TOUCH_TAP, this.diankeng11, this);
            this.keng12.removeEventListener(egret.TouchEvent.TOUCH_TAP, this.diankeng12, this);
            this.keng13.removeEventListener(egret.TouchEvent.TOUCH_TAP, this.diankeng13, this);
            this.keng14.removeEventListener(egret.TouchEvent.TOUCH_TAP, this.diankeng14, this);
            this.keng15.removeEventListener(egret.TouchEvent.TOUCH_TAP, this.diankeng15, this);
            this.zengjiayuanliao = this.baicaishu * 1 + this.tudoushu * 2 + this.dongguashu * 3 + this.yushu * 4 + this.roushu * 5;
            Weblianjie.fasongshuju("code:031", "{" + '"zengjiayuanliao"' + ":" + '"' + this.zengjiayuanliao + '"' + "," + '"uid"' + ":" + '"' + Gerenshuxing.uid + '"' + "}");
            Gameguanli.Kongzhitai().cuowutishixinxi("菜篮子已全部用完，本次买菜完成!");
            var daojishituichu = new egret.Timer(3000, 1);
            daojishituichu.addEventListener(egret.TimerEvent.TIMER, this.maicaijiesu, this);
            daojishituichu.start();
        }
        for (var i = 0; i < 15; i++) {
            xulieleixing = Math.floor(Math.random() * 5) + 1;
            switch (xulieleixing) {
                case 1:
                    tupian = "img_baicai_png";
                    break;
                case 2:
                    tupian = "img_tudou_png";
                    break;
                case 3:
                    tupian = "img_donggua_png";
                    break;
                case 4:
                    tupian = "img_yu_png";
                    break;
                case 5:
                    tupian = "img_rou_png";
                    break;
                default:
                    tupian = "";
                    break;
            }
            ;
            if (this.shicaizu[i] == 0) {
                switch (i) {
                    case 0:
                        this.keng1.source = tupian;
                        this.shicaizu[i] = xulieleixing;
                        break;
                    case 1:
                        this.keng2.source = tupian;
                        this.shicaizu[i] = xulieleixing;
                        break;
                    case 2:
                        this.keng3.source = tupian;
                        this.shicaizu[i] = xulieleixing;
                        break;
                    case 3:
                        this.keng4.source = tupian;
                        this.shicaizu[i] = xulieleixing;
                        break;
                    case 4:
                        this.keng5.source = tupian;
                        this.shicaizu[i] = xulieleixing;
                        break;
                    case 5:
                        this.keng6.source = tupian;
                        this.shicaizu[i] = xulieleixing;
                        break;
                    case 6:
                        this.keng7.source = tupian;
                        this.shicaizu[i] = xulieleixing;
                        break;
                    case 7:
                        this.keng8.source = tupian;
                        this.shicaizu[i] = xulieleixing;
                        break;
                    case 8:
                        this.keng9.source = tupian;
                        this.shicaizu[i] = xulieleixing;
                        break;
                    case 9:
                        this.keng10.source = tupian;
                        this.shicaizu[i] = xulieleixing;
                        break;
                    case 10:
                        this.keng11.source = tupian;
                        this.shicaizu[i] = xulieleixing;
                        break;
                    case 11:
                        this.keng12.source = tupian;
                        this.shicaizu[i] = xulieleixing;
                        break;
                    case 12:
                        this.keng13.source = tupian;
                        this.shicaizu[i] = xulieleixing;
                        break;
                    case 13:
                        this.keng14.source = tupian;
                        this.shicaizu[i] = xulieleixing;
                        break;
                    case 14:
                        this.keng15.source = tupian;
                        this.shicaizu[i] = xulieleixing;
                        break;
                }
            }
        }
    };
    Maicaiui.prototype.diankeng1 = function () {
        this.cailanzi -= 1;
        this.keng1.touchEnabled = false;
        this.keng2.touchEnabled = false;
        this.keng3.touchEnabled = false;
        this.keng4.touchEnabled = false;
        this.keng5.touchEnabled = false;
        this.keng6.touchEnabled = false;
        this.keng7.touchEnabled = false;
        this.keng8.touchEnabled = false;
        this.keng9.touchEnabled = false;
        this.keng10.touchEnabled = false;
        this.keng11.touchEnabled = false;
        this.keng12.touchEnabled = false;
        this.keng13.touchEnabled = false;
        this.keng14.touchEnabled = false;
        this.keng15.touchEnabled = false;
        Gameguanli.Kongzhitai().cuowutishixinxi("挑选成功，菜篮子剩余：" + this.cailanzi + "个");
        switch (this.shicaizu[0]) {
            case 1:
                this.dangqianshicai = 1;
                break;
            case 2:
                this.dangqianshicai = 2;
                break;
            case 3:
                this.dangqianshicai = 3;
                break;
            case 4:
                this.dangqianshicai = 4;
                break;
            case 5:
                this.dangqianshicai = 5;
                break;
            default:
                this.dangqianshicai = 0;
                break;
        }
        this.di1gekeng();
        this.chushihua();
    };
    Maicaiui.prototype.diankeng2 = function () {
        this.cailanzi -= 1;
        this.keng1.touchEnabled = false;
        this.keng2.touchEnabled = false;
        this.keng3.touchEnabled = false;
        this.keng4.touchEnabled = false;
        this.keng5.touchEnabled = false;
        this.keng6.touchEnabled = false;
        this.keng7.touchEnabled = false;
        this.keng8.touchEnabled = false;
        this.keng9.touchEnabled = false;
        this.keng10.touchEnabled = false;
        this.keng11.touchEnabled = false;
        this.keng12.touchEnabled = false;
        this.keng13.touchEnabled = false;
        this.keng14.touchEnabled = false;
        this.keng15.touchEnabled = false;
        Gameguanli.Kongzhitai().cuowutishixinxi("挑选成功，菜篮子剩余：" + this.cailanzi + "个");
        switch (this.shicaizu[1]) {
            case 1:
                this.dangqianshicai = 1;
                break;
            case 2:
                this.dangqianshicai = 2;
                break;
            case 3:
                this.dangqianshicai = 3;
                break;
            case 4:
                this.dangqianshicai = 4;
                break;
            case 5:
                this.dangqianshicai = 5;
                break;
            default:
                this.dangqianshicai = 0;
                break;
        }
        this.di2gekeng();
        this.chushihua();
    };
    Maicaiui.prototype.diankeng3 = function () {
        this.cailanzi -= 1;
        this.keng1.touchEnabled = false;
        this.keng2.touchEnabled = false;
        this.keng3.touchEnabled = false;
        this.keng4.touchEnabled = false;
        this.keng5.touchEnabled = false;
        this.keng6.touchEnabled = false;
        this.keng7.touchEnabled = false;
        this.keng8.touchEnabled = false;
        this.keng9.touchEnabled = false;
        this.keng10.touchEnabled = false;
        this.keng11.touchEnabled = false;
        this.keng12.touchEnabled = false;
        this.keng13.touchEnabled = false;
        this.keng14.touchEnabled = false;
        this.keng15.touchEnabled = false;
        Gameguanli.Kongzhitai().cuowutishixinxi("挑选成功，菜篮子剩余：" + this.cailanzi + "个");
        switch (this.shicaizu[2]) {
            case 1:
                this.dangqianshicai = 1;
                break;
            case 2:
                this.dangqianshicai = 2;
                break;
            case 3:
                this.dangqianshicai = 3;
                break;
            case 4:
                this.dangqianshicai = 4;
                break;
            case 5:
                this.dangqianshicai = 5;
                break;
            default:
                this.dangqianshicai = 0;
                break;
        }
        this.di3gekeng();
        this.chushihua();
    };
    Maicaiui.prototype.diankeng4 = function () {
        this.cailanzi -= 1;
        this.keng1.touchEnabled = false;
        this.keng2.touchEnabled = false;
        this.keng3.touchEnabled = false;
        this.keng4.touchEnabled = false;
        this.keng5.touchEnabled = false;
        this.keng6.touchEnabled = false;
        this.keng7.touchEnabled = false;
        this.keng8.touchEnabled = false;
        this.keng9.touchEnabled = false;
        this.keng10.touchEnabled = false;
        this.keng11.touchEnabled = false;
        this.keng12.touchEnabled = false;
        this.keng13.touchEnabled = false;
        this.keng14.touchEnabled = false;
        this.keng15.touchEnabled = false;
        Gameguanli.Kongzhitai().cuowutishixinxi("挑选成功，菜篮子剩余：" + this.cailanzi + "个");
        switch (this.shicaizu[3]) {
            case 1:
                this.dangqianshicai = 1;
                break;
            case 2:
                this.dangqianshicai = 2;
                break;
            case 3:
                this.dangqianshicai = 3;
                break;
            case 4:
                this.dangqianshicai = 4;
                break;
            case 5:
                this.dangqianshicai = 5;
                break;
            default:
                this.dangqianshicai = 0;
                break;
        }
        this.di4gekeng();
        this.chushihua();
    };
    Maicaiui.prototype.diankeng5 = function () {
        this.cailanzi -= 1;
        this.keng1.touchEnabled = false;
        this.keng2.touchEnabled = false;
        this.keng3.touchEnabled = false;
        this.keng4.touchEnabled = false;
        this.keng5.touchEnabled = false;
        this.keng6.touchEnabled = false;
        this.keng7.touchEnabled = false;
        this.keng8.touchEnabled = false;
        this.keng9.touchEnabled = false;
        this.keng10.touchEnabled = false;
        this.keng11.touchEnabled = false;
        this.keng12.touchEnabled = false;
        this.keng13.touchEnabled = false;
        this.keng14.touchEnabled = false;
        this.keng15.touchEnabled = false;
        Gameguanli.Kongzhitai().cuowutishixinxi("挑选成功，菜篮子剩余：" + this.cailanzi + "个");
        switch (this.shicaizu[4]) {
            case 1:
                this.dangqianshicai = 1;
                break;
            case 2:
                this.dangqianshicai = 2;
                break;
            case 3:
                this.dangqianshicai = 3;
                break;
            case 4:
                this.dangqianshicai = 4;
                break;
            case 5:
                this.dangqianshicai = 5;
                break;
            default:
                this.dangqianshicai = 0;
                break;
        }
        this.di5gekeng();
        this.chushihua();
    };
    Maicaiui.prototype.diankeng6 = function () {
        this.cailanzi -= 1;
        this.keng1.touchEnabled = false;
        this.keng2.touchEnabled = false;
        this.keng3.touchEnabled = false;
        this.keng4.touchEnabled = false;
        this.keng5.touchEnabled = false;
        this.keng6.touchEnabled = false;
        this.keng7.touchEnabled = false;
        this.keng8.touchEnabled = false;
        this.keng9.touchEnabled = false;
        this.keng10.touchEnabled = false;
        this.keng11.touchEnabled = false;
        this.keng12.touchEnabled = false;
        this.keng13.touchEnabled = false;
        this.keng14.touchEnabled = false;
        this.keng15.touchEnabled = false;
        Gameguanli.Kongzhitai().cuowutishixinxi("挑选成功，菜篮子剩余：" + this.cailanzi + "个");
        switch (this.shicaizu[5]) {
            case 1:
                this.dangqianshicai = 1;
                break;
            case 2:
                this.dangqianshicai = 2;
                break;
            case 3:
                this.dangqianshicai = 3;
                break;
            case 4:
                this.dangqianshicai = 4;
                break;
            case 5:
                this.dangqianshicai = 5;
                break;
            default:
                this.dangqianshicai = 0;
                break;
        }
        this.di6gekeng();
        this.chushihua();
    };
    Maicaiui.prototype.diankeng7 = function () {
        this.cailanzi -= 1;
        this.keng1.touchEnabled = false;
        this.keng2.touchEnabled = false;
        this.keng3.touchEnabled = false;
        this.keng4.touchEnabled = false;
        this.keng5.touchEnabled = false;
        this.keng6.touchEnabled = false;
        this.keng7.touchEnabled = false;
        this.keng8.touchEnabled = false;
        this.keng9.touchEnabled = false;
        this.keng10.touchEnabled = false;
        this.keng11.touchEnabled = false;
        this.keng12.touchEnabled = false;
        this.keng13.touchEnabled = false;
        this.keng14.touchEnabled = false;
        this.keng15.touchEnabled = false;
        Gameguanli.Kongzhitai().cuowutishixinxi("挑选成功，菜篮子剩余：" + this.cailanzi + "个");
        switch (this.shicaizu[6]) {
            case 1:
                this.dangqianshicai = 1;
                break;
            case 2:
                this.dangqianshicai = 2;
                break;
            case 3:
                this.dangqianshicai = 3;
                break;
            case 4:
                this.dangqianshicai = 4;
                break;
            case 5:
                this.dangqianshicai = 5;
                break;
            default:
                this.dangqianshicai = 0;
                break;
        }
        this.di7gekeng();
        this.chushihua();
    };
    Maicaiui.prototype.diankeng8 = function () {
        this.cailanzi -= 1;
        this.keng1.touchEnabled = false;
        this.keng2.touchEnabled = false;
        this.keng3.touchEnabled = false;
        this.keng4.touchEnabled = false;
        this.keng5.touchEnabled = false;
        this.keng6.touchEnabled = false;
        this.keng7.touchEnabled = false;
        this.keng8.touchEnabled = false;
        this.keng9.touchEnabled = false;
        this.keng10.touchEnabled = false;
        this.keng11.touchEnabled = false;
        this.keng12.touchEnabled = false;
        this.keng13.touchEnabled = false;
        this.keng14.touchEnabled = false;
        this.keng15.touchEnabled = false;
        Gameguanli.Kongzhitai().cuowutishixinxi("挑选成功，菜篮子剩余：" + this.cailanzi + "个");
        switch (this.shicaizu[7]) {
            case 1:
                this.dangqianshicai = 1;
                break;
            case 2:
                this.dangqianshicai = 2;
                break;
            case 3:
                this.dangqianshicai = 3;
                break;
            case 4:
                this.dangqianshicai = 4;
                break;
            case 5:
                this.dangqianshicai = 5;
                break;
            default:
                this.dangqianshicai = 0;
                break;
        }
        this.di8gekeng();
        this.chushihua();
    };
    Maicaiui.prototype.diankeng9 = function () {
        this.cailanzi -= 1;
        this.keng1.touchEnabled = false;
        this.keng2.touchEnabled = false;
        this.keng3.touchEnabled = false;
        this.keng4.touchEnabled = false;
        this.keng5.touchEnabled = false;
        this.keng6.touchEnabled = false;
        this.keng7.touchEnabled = false;
        this.keng8.touchEnabled = false;
        this.keng9.touchEnabled = false;
        this.keng10.touchEnabled = false;
        this.keng11.touchEnabled = false;
        this.keng12.touchEnabled = false;
        this.keng13.touchEnabled = false;
        this.keng14.touchEnabled = false;
        this.keng15.touchEnabled = false;
        Gameguanli.Kongzhitai().cuowutishixinxi("挑选成功，菜篮子剩余：" + this.cailanzi + "个");
        switch (this.shicaizu[8]) {
            case 1:
                this.dangqianshicai = 1;
                break;
            case 2:
                this.dangqianshicai = 2;
                break;
            case 3:
                this.dangqianshicai = 3;
                break;
            case 4:
                this.dangqianshicai = 4;
                break;
            case 5:
                this.dangqianshicai = 5;
                break;
            default:
                this.dangqianshicai = 0;
                break;
        }
        this.di9gekeng();
        this.chushihua();
    };
    Maicaiui.prototype.diankeng10 = function () {
        this.cailanzi -= 1;
        this.keng1.touchEnabled = false;
        this.keng2.touchEnabled = false;
        this.keng3.touchEnabled = false;
        this.keng4.touchEnabled = false;
        this.keng5.touchEnabled = false;
        this.keng6.touchEnabled = false;
        this.keng7.touchEnabled = false;
        this.keng8.touchEnabled = false;
        this.keng9.touchEnabled = false;
        this.keng10.touchEnabled = false;
        this.keng11.touchEnabled = false;
        this.keng12.touchEnabled = false;
        this.keng13.touchEnabled = false;
        this.keng14.touchEnabled = false;
        this.keng15.touchEnabled = false;
        Gameguanli.Kongzhitai().cuowutishixinxi("挑选成功，菜篮子剩余：" + this.cailanzi + "个");
        switch (this.shicaizu[9]) {
            case 1:
                this.dangqianshicai = 1;
                break;
            case 2:
                this.dangqianshicai = 2;
                break;
            case 3:
                this.dangqianshicai = 3;
                break;
            case 4:
                this.dangqianshicai = 4;
                break;
            case 5:
                this.dangqianshicai = 5;
                break;
            default:
                this.dangqianshicai = 0;
                break;
        }
        this.di10gekeng();
        this.chushihua();
    };
    Maicaiui.prototype.diankeng11 = function () {
        this.cailanzi -= 1;
        this.keng1.touchEnabled = false;
        this.keng2.touchEnabled = false;
        this.keng3.touchEnabled = false;
        this.keng4.touchEnabled = false;
        this.keng5.touchEnabled = false;
        this.keng6.touchEnabled = false;
        this.keng7.touchEnabled = false;
        this.keng8.touchEnabled = false;
        this.keng9.touchEnabled = false;
        this.keng10.touchEnabled = false;
        this.keng11.touchEnabled = false;
        this.keng12.touchEnabled = false;
        this.keng13.touchEnabled = false;
        this.keng14.touchEnabled = false;
        this.keng15.touchEnabled = false;
        Gameguanli.Kongzhitai().cuowutishixinxi("挑选成功，菜篮子剩余：" + this.cailanzi + "个");
        switch (this.shicaizu[10]) {
            case 1:
                this.dangqianshicai = 1;
                break;
            case 2:
                this.dangqianshicai = 2;
                break;
            case 3:
                this.dangqianshicai = 3;
                break;
            case 4:
                this.dangqianshicai = 4;
                break;
            case 5:
                this.dangqianshicai = 5;
                break;
            default:
                this.dangqianshicai = 0;
                break;
        }
        this.di11gekeng();
        this.chushihua();
    };
    Maicaiui.prototype.diankeng12 = function () {
        this.cailanzi -= 1;
        this.keng1.touchEnabled = false;
        this.keng2.touchEnabled = false;
        this.keng3.touchEnabled = false;
        this.keng4.touchEnabled = false;
        this.keng5.touchEnabled = false;
        this.keng6.touchEnabled = false;
        this.keng7.touchEnabled = false;
        this.keng8.touchEnabled = false;
        this.keng9.touchEnabled = false;
        this.keng10.touchEnabled = false;
        this.keng11.touchEnabled = false;
        this.keng12.touchEnabled = false;
        this.keng13.touchEnabled = false;
        this.keng14.touchEnabled = false;
        this.keng15.touchEnabled = false;
        Gameguanli.Kongzhitai().cuowutishixinxi("挑选成功，菜篮子剩余：" + this.cailanzi + "个");
        switch (this.shicaizu[11]) {
            case 1:
                this.dangqianshicai = 1;
                break;
            case 2:
                this.dangqianshicai = 2;
                break;
            case 3:
                this.dangqianshicai = 3;
                break;
            case 4:
                this.dangqianshicai = 4;
                break;
            case 5:
                this.dangqianshicai = 5;
                break;
            default:
                this.dangqianshicai = 0;
                break;
        }
        this.di12gekeng();
        this.chushihua();
    };
    Maicaiui.prototype.diankeng13 = function () {
        this.cailanzi -= 1;
        this.keng1.touchEnabled = false;
        this.keng2.touchEnabled = false;
        this.keng3.touchEnabled = false;
        this.keng4.touchEnabled = false;
        this.keng5.touchEnabled = false;
        this.keng6.touchEnabled = false;
        this.keng7.touchEnabled = false;
        this.keng8.touchEnabled = false;
        this.keng9.touchEnabled = false;
        this.keng10.touchEnabled = false;
        this.keng11.touchEnabled = false;
        this.keng12.touchEnabled = false;
        this.keng13.touchEnabled = false;
        this.keng14.touchEnabled = false;
        this.keng15.touchEnabled = false;
        Gameguanli.Kongzhitai().cuowutishixinxi("挑选成功，菜篮子剩余：" + this.cailanzi + "个");
        switch (this.shicaizu[12]) {
            case 1:
                this.dangqianshicai = 1;
                break;
            case 2:
                this.dangqianshicai = 2;
                break;
            case 3:
                this.dangqianshicai = 3;
                break;
            case 4:
                this.dangqianshicai = 4;
                break;
            case 5:
                this.dangqianshicai = 5;
                break;
            default:
                this.dangqianshicai = 0;
                break;
        }
        this.di13gekeng();
        this.chushihua();
    };
    Maicaiui.prototype.diankeng14 = function () {
        this.cailanzi -= 1;
        this.keng1.touchEnabled = false;
        this.keng2.touchEnabled = false;
        this.keng3.touchEnabled = false;
        this.keng4.touchEnabled = false;
        this.keng5.touchEnabled = false;
        this.keng6.touchEnabled = false;
        this.keng7.touchEnabled = false;
        this.keng8.touchEnabled = false;
        this.keng9.touchEnabled = false;
        this.keng10.touchEnabled = false;
        this.keng11.touchEnabled = false;
        this.keng12.touchEnabled = false;
        this.keng13.touchEnabled = false;
        this.keng14.touchEnabled = false;
        this.keng15.touchEnabled = false;
        Gameguanli.Kongzhitai().cuowutishixinxi("挑选成功，菜篮子剩余：" + this.cailanzi + "个");
        switch (this.shicaizu[13]) {
            case 1:
                this.dangqianshicai = 1;
                break;
            case 2:
                this.dangqianshicai = 2;
                break;
            case 3:
                this.dangqianshicai = 3;
                break;
            case 4:
                this.dangqianshicai = 4;
                break;
            case 5:
                this.dangqianshicai = 5;
                break;
            default:
                this.dangqianshicai = 0;
                break;
        }
        this.di14gekeng();
        this.chushihua();
    };
    Maicaiui.prototype.diankeng15 = function () {
        this.cailanzi -= 1;
        this.keng1.touchEnabled = false;
        this.keng2.touchEnabled = false;
        this.keng3.touchEnabled = false;
        this.keng4.touchEnabled = false;
        this.keng5.touchEnabled = false;
        this.keng6.touchEnabled = false;
        this.keng7.touchEnabled = false;
        this.keng8.touchEnabled = false;
        this.keng9.touchEnabled = false;
        this.keng10.touchEnabled = false;
        this.keng11.touchEnabled = false;
        this.keng12.touchEnabled = false;
        this.keng13.touchEnabled = false;
        this.keng14.touchEnabled = false;
        this.keng15.touchEnabled = false;
        Gameguanli.Kongzhitai().cuowutishixinxi("挑选成功，菜篮子剩余：" + this.cailanzi + "个");
        switch (this.shicaizu[14]) {
            case 1:
                this.dangqianshicai = 1;
                break;
            case 2:
                this.dangqianshicai = 2;
                break;
            case 3:
                this.dangqianshicai = 3;
                break;
            case 4:
                this.dangqianshicai = 4;
                break;
            case 5:
                this.dangqianshicai = 5;
                break;
            default:
                this.dangqianshicai = 0;
                break;
        }
        this.di15gekeng();
        this.chushihua();
    };
    //这里开始计算那个坑
    Maicaiui.prototype.di1gekeng = function () {
        var _this = this;
        this.dijigekeng[0] = 1;
        if (this.dijigekeng[1] == 0 && this.shicaizu[1] == this.dangqianshicai) {
            this.di2gekeng();
        }
        if (this.dijigekeng[3] == 0 && this.shicaizu[3] == this.dangqianshicai) {
            this.di4gekeng();
        }
        var toudingtu1 = "";
        switch (this.dangqianshicai) {
            case 1:
                this.baicaishu += 1;
                toudingtu1 = "img_baicai_png";
                break;
            case 2:
                this.tudoushu += 1;
                toudingtu1 = "img_tudou_png";
                break;
            case 3:
                this.dongguashu += 1;
                toudingtu1 = "img_donggua_png";
                break;
            case 4:
                this.yushu += 1;
                toudingtu1 = "img_yu_png";
                break;
            case 5:
                this.roushu += 1;
                toudingtu1 = "img_rou_png";
                break;
        }
        egret.Tween.get(this.keng1).to({ scaleX: 1.5, scaleY: 1.5 }, 1000).call(function () {
            _this.keng1.scaleX = 1;
            _this.keng1.scaleY = 1;
        });
        this.shicaizu[0] = 0;
        var toudingxianshi1 = new Cailiaoxiaohao();
        this.caizu.addChild(toudingxianshi1);
        toudingxianshi1.img_shicai.source = toudingtu1;
        toudingxianshi1.wenzineirong.text = "+1";
        toudingxianshi1.x = this.keng1.x + toudingxianshi1.wenzizu.width / 2;
        toudingxianshi1.y = this.keng1.y + toudingxianshi1.wenzizu.height / 2;
        egret.Tween.get(toudingxianshi1).to({ x: toudingxianshi1.x, y: toudingxianshi1.y - 80 }, 2000).call(function () {
            _this.caizu.removeChild(toudingxianshi1);
        });
    };
    Maicaiui.prototype.di2gekeng = function () {
        var _this = this;
        this.dijigekeng[1] = 1;
        if (this.dijigekeng[0] == 0 && this.shicaizu[0] == this.dangqianshicai) {
            this.di1gekeng();
        }
        if (this.dijigekeng[2] == 0 && this.shicaizu[2] == this.dangqianshicai) {
            this.di3gekeng();
        }
        if (this.dijigekeng[4] == 0 && this.shicaizu[4] == this.dangqianshicai) {
            this.di5gekeng();
        }
        var toudingtu2 = "";
        switch (this.dangqianshicai) {
            case 1:
                this.baicaishu += 1;
                toudingtu2 = "img_baicai_png";
                break;
            case 2:
                this.tudoushu += 1;
                toudingtu2 = "img_tudou_png";
                break;
            case 3:
                this.dongguashu += 1;
                toudingtu2 = "img_donggua_png";
                break;
            case 4:
                this.yushu += 1;
                toudingtu2 = "img_yu_png";
                break;
            case 5:
                this.roushu += 1;
                toudingtu2 = "img_rou_png";
                break;
        }
        egret.Tween.get(this.keng2).to({ scaleX: 1.5, scaleY: 1.5 }, 1000).call(function () {
            _this.keng2.scaleX = 1;
            _this.keng2.scaleY = 1;
        });
        this.shicaizu[1] = 0;
        var toudingxianshi2 = new Cailiaoxiaohao();
        this.caizu.addChild(toudingxianshi2);
        toudingxianshi2.img_shicai.source = toudingtu2;
        toudingxianshi2.wenzineirong.text = "+1";
        toudingxianshi2.x = this.keng2.x + toudingxianshi2.wenzizu.width / 2;
        toudingxianshi2.y = this.keng2.y + toudingxianshi2.wenzizu.height / 2;
        egret.Tween.get(toudingxianshi2).to({ x: toudingxianshi2.x, y: toudingxianshi2.y - 80 }, 2000).call(function () {
            _this.caizu.removeChild(toudingxianshi2);
        });
    };
    Maicaiui.prototype.di3gekeng = function () {
        var _this = this;
        this.dijigekeng[2] = 1;
        if (this.dijigekeng[1] == 0 && this.shicaizu[1] == this.dangqianshicai) {
            this.di2gekeng();
        }
        if (this.dijigekeng[5] == 0 && this.shicaizu[5] == this.dangqianshicai) {
            this.di6gekeng();
        }
        var toudingtu3 = "";
        switch (this.dangqianshicai) {
            case 1:
                this.baicaishu += 1;
                toudingtu3 = "img_baicai_png";
                break;
            case 2:
                this.tudoushu += 1;
                toudingtu3 = "img_tudou_png";
                break;
            case 3:
                this.dongguashu += 1;
                toudingtu3 = "img_donggua_png";
                break;
            case 4:
                this.yushu += 1;
                toudingtu3 = "img_yu_png";
                break;
            case 5:
                this.roushu += 1;
                toudingtu3 = "img_rou_png";
                break;
        }
        egret.Tween.get(this.keng3).to({ scaleX: 1.5, scaleY: 1.5 }, 1000).call(function () {
            _this.keng3.scaleX = 1;
            _this.keng3.scaleY = 1;
        });
        this.shicaizu[2] = 0;
        var toudingxianshi3 = new Cailiaoxiaohao();
        this.caizu.addChild(toudingxianshi3);
        toudingxianshi3.img_shicai.source = toudingtu3;
        toudingxianshi3.wenzineirong.text = "+1";
        toudingxianshi3.x = this.keng3.x + toudingxianshi3.wenzizu.width / 2;
        toudingxianshi3.y = this.keng3.y + toudingxianshi3.wenzizu.height / 2;
        egret.Tween.get(toudingxianshi3).to({ x: toudingxianshi3.x, y: toudingxianshi3.y - 80 }, 2000).call(function () {
            _this.caizu.removeChild(toudingxianshi3);
        });
    };
    Maicaiui.prototype.di4gekeng = function () {
        var _this = this;
        this.dijigekeng[3] = 1;
        if (this.dijigekeng[0] == 0 && this.shicaizu[0] == this.dangqianshicai) {
            this.di1gekeng();
        }
        if (this.dijigekeng[6] == 0 && this.shicaizu[6] == this.dangqianshicai) {
            this.di7gekeng();
        }
        var toudingtu4 = "";
        switch (this.dangqianshicai) {
            case 1:
                this.baicaishu += 1;
                toudingtu4 = "img_baicai_png";
                break;
            case 2:
                this.tudoushu += 1;
                toudingtu4 = "img_tudou_png";
                break;
            case 3:
                this.dongguashu += 1;
                toudingtu4 = "img_donggua_png";
                break;
            case 4:
                this.yushu += 1;
                toudingtu4 = "img_yu_png";
                break;
            case 5:
                this.roushu += 1;
                toudingtu4 = "img_rou_png";
                break;
        }
        egret.Tween.get(this.keng4).to({ scaleX: 1.5, scaleY: 1.5 }, 1000).call(function () {
            _this.keng4.scaleX = 1;
            _this.keng4.scaleY = 1;
        });
        this.shicaizu[3] = 0;
        var toudingxianshi4 = new Cailiaoxiaohao();
        this.caizu.addChild(toudingxianshi4);
        toudingxianshi4.img_shicai.source = toudingtu4;
        toudingxianshi4.wenzineirong.text = "+1";
        toudingxianshi4.x = this.keng4.x + toudingxianshi4.wenzizu.width / 2;
        toudingxianshi4.y = this.keng4.y + toudingxianshi4.wenzizu.height / 2;
        egret.Tween.get(toudingxianshi4).to({ x: toudingxianshi4.x, y: toudingxianshi4.y - 80 }, 2000).call(function () {
            _this.caizu.removeChild(toudingxianshi4);
        });
    };
    Maicaiui.prototype.di5gekeng = function () {
        var _this = this;
        this.dijigekeng[4] = 1;
        if (this.dijigekeng[1] == 0 && this.shicaizu[1] == this.dangqianshicai) {
            this.di2gekeng();
        }
        if (this.dijigekeng[3] == 0 && this.shicaizu[3] == this.dangqianshicai) {
            this.di4gekeng();
        }
        if (this.dijigekeng[5] == 0 && this.shicaizu[5] == this.dangqianshicai) {
            this.di6gekeng();
        }
        if (this.dijigekeng[7] == 0 && this.shicaizu[7] == this.dangqianshicai) {
            this.di8gekeng();
        }
        var toudingtu5 = "";
        switch (this.dangqianshicai) {
            case 1:
                this.baicaishu += 1;
                toudingtu5 = "img_baicai_png";
                break;
            case 2:
                this.tudoushu += 1;
                toudingtu5 = "img_tudou_png";
                break;
            case 3:
                this.dongguashu += 1;
                toudingtu5 = "img_donggua_png";
                break;
            case 4:
                this.yushu += 1;
                toudingtu5 = "img_yu_png";
                break;
            case 5:
                this.roushu += 1;
                toudingtu5 = "img_rou_png";
                break;
        }
        egret.Tween.get(this.keng5).to({ scaleX: 1.5, scaleY: 1.5 }, 1000).call(function () {
            _this.keng5.scaleX = 1;
            _this.keng5.scaleY = 1;
        });
        this.shicaizu[4] = 0;
        var toudingxianshi5 = new Cailiaoxiaohao();
        this.caizu.addChild(toudingxianshi5);
        toudingxianshi5.img_shicai.source = toudingtu5;
        toudingxianshi5.wenzineirong.text = "+1";
        toudingxianshi5.x = this.keng5.x + toudingxianshi5.wenzizu.width / 2;
        toudingxianshi5.y = this.keng5.y + toudingxianshi5.wenzizu.height / 2;
        egret.Tween.get(toudingxianshi5).to({ x: toudingxianshi5.x, y: toudingxianshi5.y - 80 }, 2000).call(function () {
            _this.caizu.removeChild(toudingxianshi5);
        });
    };
    Maicaiui.prototype.di6gekeng = function () {
        var _this = this;
        this.dijigekeng[5] = 1;
        if (this.dijigekeng[2] == 0 && this.shicaizu[2] == this.dangqianshicai) {
            this.di3gekeng();
        }
        if (this.dijigekeng[4] == 0 && this.shicaizu[4] == this.dangqianshicai) {
            this.di5gekeng();
        }
        if (this.dijigekeng[8] == 0 && this.shicaizu[8] == this.dangqianshicai) {
            this.di9gekeng();
        }
        var toudingtu6 = "";
        switch (this.dangqianshicai) {
            case 1:
                this.baicaishu += 1;
                toudingtu6 = "img_baicai_png";
                break;
            case 2:
                this.tudoushu += 1;
                toudingtu6 = "img_tudou_png";
                break;
            case 3:
                this.dongguashu += 1;
                toudingtu6 = "img_donggua_png";
                break;
            case 4:
                this.yushu += 1;
                toudingtu6 = "img_yu_png";
                break;
            case 5:
                this.roushu += 1;
                toudingtu6 = "img_rou_png";
                break;
        }
        egret.Tween.get(this.keng6).to({ scaleX: 1.5, scaleY: 1.5 }, 1000).call(function () {
            _this.keng6.scaleX = 1;
            _this.keng6.scaleY = 1;
        });
        this.shicaizu[5] = 0;
        var toudingxianshi6 = new Cailiaoxiaohao();
        this.caizu.addChild(toudingxianshi6);
        toudingxianshi6.img_shicai.source = toudingtu6;
        toudingxianshi6.wenzineirong.text = "+1";
        toudingxianshi6.x = this.keng6.x + toudingxianshi6.wenzizu.width / 2;
        toudingxianshi6.y = this.keng6.y + toudingxianshi6.wenzizu.height / 2;
        egret.Tween.get(toudingxianshi6).to({ x: toudingxianshi6.x, y: toudingxianshi6.y - 80 }, 2000).call(function () {
            _this.caizu.removeChild(toudingxianshi6);
        });
    };
    Maicaiui.prototype.di7gekeng = function () {
        var _this = this;
        this.dijigekeng[6] = 1;
        if (this.dijigekeng[3] == 0 && this.shicaizu[3] == this.dangqianshicai) {
            this.di4gekeng();
        }
        if (this.dijigekeng[7] == 0 && this.shicaizu[7] == this.dangqianshicai) {
            this.di8gekeng();
        }
        if (this.dijigekeng[9] == 0 && this.shicaizu[9] == this.dangqianshicai) {
            this.di10gekeng();
        }
        var toudingtu7 = "";
        switch (this.dangqianshicai) {
            case 1:
                this.baicaishu += 1;
                toudingtu7 = "img_baicai_png";
                break;
            case 2:
                this.tudoushu += 1;
                toudingtu7 = "img_tudou_png";
                break;
            case 3:
                this.dongguashu += 1;
                toudingtu7 = "img_donggua_png";
                break;
            case 4:
                this.yushu += 1;
                toudingtu7 = "img_yu_png";
                break;
            case 5:
                this.roushu += 1;
                toudingtu7 = "img_rou_png";
                break;
        }
        egret.Tween.get(this.keng7).to({ scaleX: 1.5, scaleY: 1.5 }, 1000).call(function () {
            _this.keng7.scaleX = 1;
            _this.keng7.scaleY = 1;
        });
        this.shicaizu[6] = 0;
        var toudingxianshi7 = new Cailiaoxiaohao();
        this.caizu.addChild(toudingxianshi7);
        toudingxianshi7.img_shicai.source = toudingtu7;
        toudingxianshi7.wenzineirong.text = "+1";
        toudingxianshi7.x = this.keng7.x + toudingxianshi7.wenzizu.width / 2;
        toudingxianshi7.y = this.keng7.y + toudingxianshi7.wenzizu.height / 2;
        egret.Tween.get(toudingxianshi7).to({ x: toudingxianshi7.x, y: toudingxianshi7.y - 80 }, 2000).call(function () {
            _this.caizu.removeChild(toudingxianshi7);
        });
    };
    Maicaiui.prototype.di8gekeng = function () {
        var _this = this;
        this.dijigekeng[7] = 1;
        if (this.dijigekeng[4] == 0 && this.shicaizu[4] == this.dangqianshicai) {
            this.di5gekeng();
        }
        if (this.dijigekeng[6] == 0 && this.shicaizu[6] == this.dangqianshicai) {
            this.di7gekeng();
        }
        if (this.dijigekeng[8] == 0 && this.shicaizu[8] == this.dangqianshicai) {
            this.di9gekeng();
        }
        if (this.dijigekeng[10] == 0 && this.shicaizu[10] == this.dangqianshicai) {
            this.di11gekeng();
        }
        var toudingtu8 = "";
        switch (this.dangqianshicai) {
            case 1:
                this.baicaishu += 1;
                toudingtu8 = "img_baicai_png";
                break;
            case 2:
                this.tudoushu += 1;
                toudingtu8 = "img_tudou_png";
                break;
            case 3:
                this.dongguashu += 1;
                toudingtu8 = "img_donggua_png";
                break;
            case 4:
                this.yushu += 1;
                toudingtu8 = "img_yu_png";
                break;
            case 5:
                this.roushu += 1;
                toudingtu8 = "img_rou_png";
                break;
        }
        egret.Tween.get(this.keng8).to({ scaleX: 1.5, scaleY: 1.5 }, 1000).call(function () {
            _this.keng8.scaleX = 1;
            _this.keng8.scaleY = 1;
        });
        this.shicaizu[7] = 0;
        var toudingxianshi8 = new Cailiaoxiaohao();
        this.caizu.addChild(toudingxianshi8);
        toudingxianshi8.img_shicai.source = toudingtu8;
        toudingxianshi8.wenzineirong.text = "+1";
        toudingxianshi8.x = this.keng8.x + toudingxianshi8.wenzizu.width / 2;
        toudingxianshi8.y = this.keng8.y + toudingxianshi8.wenzizu.height / 2;
        egret.Tween.get(toudingxianshi8).to({ x: toudingxianshi8.x, y: toudingxianshi8.y - 80 }, 2000).call(function () {
            _this.caizu.removeChild(toudingxianshi8);
        });
    };
    Maicaiui.prototype.di9gekeng = function () {
        var _this = this;
        this.dijigekeng[8] = 1;
        if (this.dijigekeng[5] == 0 && this.shicaizu[5] == this.dangqianshicai) {
            this.di6gekeng();
        }
        if (this.dijigekeng[7] == 0 && this.shicaizu[7] == this.dangqianshicai) {
            this.di8gekeng();
        }
        if (this.dijigekeng[11] == 0 && this.shicaizu[11] == this.dangqianshicai) {
            this.di12gekeng();
        }
        var toudingtu9 = "";
        switch (this.dangqianshicai) {
            case 1:
                this.baicaishu += 1;
                toudingtu9 = "img_baicai_png";
                break;
            case 2:
                this.tudoushu += 1;
                toudingtu9 = "img_tudou_png";
                break;
            case 3:
                this.dongguashu += 1;
                toudingtu9 = "img_donggua_png";
                break;
            case 4:
                this.yushu += 1;
                toudingtu9 = "img_yu_png";
                break;
            case 5:
                this.roushu += 1;
                toudingtu9 = "img_rou_png";
                break;
        }
        egret.Tween.get(this.keng9).to({ scaleX: 1.5, scaleY: 1.5 }, 1000).call(function () {
            _this.keng9.scaleX = 1;
            _this.keng9.scaleY = 1;
        });
        this.shicaizu[8] = 0;
        var toudingxianshi9 = new Cailiaoxiaohao();
        this.caizu.addChild(toudingxianshi9);
        toudingxianshi9.img_shicai.source = toudingtu9;
        toudingxianshi9.wenzineirong.text = "+1";
        toudingxianshi9.x = this.keng9.x + toudingxianshi9.wenzizu.width / 2;
        toudingxianshi9.y = this.keng9.y + toudingxianshi9.wenzizu.height / 2;
        egret.Tween.get(toudingxianshi9).to({ x: toudingxianshi9.x, y: toudingxianshi9.y - 80 }, 2000).call(function () {
            _this.caizu.removeChild(toudingxianshi9);
        });
    };
    Maicaiui.prototype.di10gekeng = function () {
        var _this = this;
        this.dijigekeng[9] = 1;
        if (this.dijigekeng[6] == 0 && this.shicaizu[6] == this.dangqianshicai) {
            this.di7gekeng();
        }
        if (this.dijigekeng[10] == 0 && this.shicaizu[10] == this.dangqianshicai) {
            this.di11gekeng();
        }
        if (this.dijigekeng[12] == 0 && this.shicaizu[12] == this.dangqianshicai) {
            this.di13gekeng();
        }
        var toudingtu10 = "";
        switch (this.dangqianshicai) {
            case 1:
                this.baicaishu += 1;
                toudingtu10 = "img_baicai_png";
                break;
            case 2:
                this.tudoushu += 1;
                toudingtu10 = "img_tudou_png";
                break;
            case 3:
                this.dongguashu += 1;
                toudingtu10 = "img_donggua_png";
                break;
            case 4:
                this.yushu += 1;
                toudingtu10 = "img_yu_png";
                break;
            case 5:
                this.roushu += 1;
                toudingtu10 = "img_rou_png";
                break;
        }
        egret.Tween.get(this.keng10).to({ scaleX: 1.5, scaleY: 1.5 }, 1000).call(function () {
            _this.keng10.scaleX = 1;
            _this.keng10.scaleY = 1;
        });
        this.shicaizu[9] = 0;
        var toudingxianshi10 = new Cailiaoxiaohao();
        this.caizu.addChild(toudingxianshi10);
        toudingxianshi10.img_shicai.source = toudingtu10;
        toudingxianshi10.wenzineirong.text = "+1";
        toudingxianshi10.x = this.keng10.x + toudingxianshi10.wenzizu.width / 2;
        toudingxianshi10.y = this.keng10.y + toudingxianshi10.wenzizu.height / 2;
        egret.Tween.get(toudingxianshi10).to({ x: toudingxianshi10.x, y: toudingxianshi10.y - 80 }, 2000).call(function () {
            _this.caizu.removeChild(toudingxianshi10);
        });
    };
    Maicaiui.prototype.di11gekeng = function () {
        var _this = this;
        this.dijigekeng[10] = 1;
        if (this.dijigekeng[7] == 0 && this.shicaizu[7] == this.dangqianshicai) {
            this.di8gekeng();
        }
        if (this.dijigekeng[9] == 0 && this.shicaizu[9] == this.dangqianshicai) {
            this.di10gekeng();
        }
        if (this.dijigekeng[11] == 0 && this.shicaizu[11] == this.dangqianshicai) {
            this.di12gekeng();
        }
        if (this.dijigekeng[13] == 0 && this.shicaizu[13] == this.dangqianshicai) {
            this.di14gekeng();
        }
        var toudingtu11 = "";
        switch (this.dangqianshicai) {
            case 1:
                this.baicaishu += 1;
                toudingtu11 = "img_baicai_png";
                break;
            case 2:
                this.tudoushu += 1;
                toudingtu11 = "img_tudou_png";
                break;
            case 3:
                this.dongguashu += 1;
                toudingtu11 = "img_donggua_png";
                break;
            case 4:
                this.yushu += 1;
                toudingtu11 = "img_yu_png";
                break;
            case 5:
                this.roushu += 1;
                toudingtu11 = "img_rou_png";
                break;
        }
        egret.Tween.get(this.keng11).to({ scaleX: 1.5, scaleY: 1.5 }, 1000).call(function () {
            _this.keng11.scaleX = 1;
            _this.keng11.scaleY = 1;
        });
        this.shicaizu[10] = 0;
        var toudingxianshi11 = new Cailiaoxiaohao();
        this.caizu.addChild(toudingxianshi11);
        toudingxianshi11.img_shicai.source = toudingtu11;
        toudingxianshi11.wenzineirong.text = "+1";
        toudingxianshi11.x = this.keng11.x + toudingxianshi11.wenzizu.width / 2;
        toudingxianshi11.y = this.keng11.y + toudingxianshi11.wenzizu.height / 2;
        egret.Tween.get(toudingxianshi11).to({ x: toudingxianshi11.x, y: toudingxianshi11.y - 80 }, 2000).call(function () {
            _this.caizu.removeChild(toudingxianshi11);
        });
    };
    Maicaiui.prototype.di12gekeng = function () {
        var _this = this;
        this.dijigekeng[11] = 1;
        if (this.dijigekeng[8] == 0 && this.shicaizu[8] == this.dangqianshicai) {
            this.di9gekeng();
        }
        if (this.dijigekeng[10] == 0 && this.shicaizu[10] == this.dangqianshicai) {
            this.di11gekeng();
        }
        if (this.dijigekeng[14] == 0 && this.shicaizu[14] == this.dangqianshicai) {
            this.di15gekeng();
        }
        var toudingtu12 = "";
        switch (this.dangqianshicai) {
            case 1:
                this.baicaishu += 1;
                toudingtu12 = "img_baicai_png";
                break;
            case 2:
                this.tudoushu += 1;
                toudingtu12 = "img_tudou_png";
                break;
            case 3:
                this.dongguashu += 1;
                toudingtu12 = "img_donggua_png";
                break;
            case 4:
                this.yushu += 1;
                toudingtu12 = "img_yu_png";
                break;
            case 5:
                this.roushu += 1;
                toudingtu12 = "img_rou_png";
                break;
        }
        egret.Tween.get(this.keng12).to({ scaleX: 1.5, scaleY: 1.5 }, 1000).call(function () {
            _this.keng12.scaleX = 1;
            _this.keng12.scaleY = 1;
        });
        this.shicaizu[11] = 0;
        var toudingxianshi12 = new Cailiaoxiaohao();
        this.caizu.addChild(toudingxianshi12);
        toudingxianshi12.img_shicai.source = toudingtu12;
        toudingxianshi12.wenzineirong.text = "+1";
        toudingxianshi12.x = this.keng12.x + toudingxianshi12.wenzizu.width / 2;
        toudingxianshi12.y = this.keng12.y + toudingxianshi12.wenzizu.height / 2;
        egret.Tween.get(toudingxianshi12).to({ x: toudingxianshi12.x, y: toudingxianshi12.y - 80 }, 2000).call(function () {
            _this.caizu.removeChild(toudingxianshi12);
        });
    };
    Maicaiui.prototype.di13gekeng = function () {
        var _this = this;
        this.dijigekeng[12] = 1;
        if (this.dijigekeng[9] == 0 && this.shicaizu[9] == this.dangqianshicai) {
            this.di10gekeng();
        }
        if (this.dijigekeng[13] == 0 && this.shicaizu[13] == this.dangqianshicai) {
            this.di14gekeng();
        }
        var toudingtu13 = "";
        switch (this.dangqianshicai) {
            case 1:
                this.baicaishu += 1;
                toudingtu13 = "img_baicai_png";
                break;
            case 2:
                this.tudoushu += 1;
                toudingtu13 = "img_tudou_png";
                break;
            case 3:
                this.dongguashu += 1;
                toudingtu13 = "img_donggua_png";
                break;
            case 4:
                this.yushu += 1;
                toudingtu13 = "img_yu_png";
                break;
            case 5:
                this.roushu += 1;
                toudingtu13 = "img_rou_png";
                break;
        }
        egret.Tween.get(this.keng13).to({ scaleX: 1.5, scaleY: 1.5 }, 1000).call(function () {
            _this.keng13.scaleX = 1;
            _this.keng13.scaleY = 1;
        });
        this.shicaizu[12] = 0;
        var toudingxianshi13 = new Cailiaoxiaohao();
        this.caizu.addChild(toudingxianshi13);
        toudingxianshi13.img_shicai.source = toudingtu13;
        toudingxianshi13.wenzineirong.text = "+1";
        toudingxianshi13.x = this.keng13.x + toudingxianshi13.wenzizu.width / 2;
        toudingxianshi13.y = this.keng13.y + toudingxianshi13.wenzizu.height / 2;
        egret.Tween.get(toudingxianshi13).to({ x: toudingxianshi13.x, y: toudingxianshi13.y - 80 }, 2000).call(function () {
            _this.caizu.removeChild(toudingxianshi13);
        });
    };
    Maicaiui.prototype.di14gekeng = function () {
        var _this = this;
        this.dijigekeng[13] = 1;
        if (this.dijigekeng[10] == 0 && this.shicaizu[10] == this.dangqianshicai) {
            this.di11gekeng();
        }
        if (this.dijigekeng[12] == 0 && this.shicaizu[12] == this.dangqianshicai) {
            this.di13gekeng();
        }
        if (this.dijigekeng[14] == 0 && this.shicaizu[14] == this.dangqianshicai) {
            this.di15gekeng();
        }
        var toudingtu14 = "";
        switch (this.dangqianshicai) {
            case 1:
                this.baicaishu += 1;
                toudingtu14 = "img_baicai_png";
                break;
            case 2:
                this.tudoushu += 1;
                toudingtu14 = "img_tudou_png";
                break;
            case 3:
                this.dongguashu += 1;
                toudingtu14 = "img_donggua_png";
                break;
            case 4:
                this.yushu += 1;
                toudingtu14 = "img_yu_png";
                break;
            case 5:
                this.roushu += 1;
                toudingtu14 = "img_rou_png";
                break;
        }
        egret.Tween.get(this.keng14).to({ scaleX: 1.5, scaleY: 1.5 }, 1000).call(function () {
            _this.keng14.scaleX = 1;
            _this.keng14.scaleY = 1;
        });
        this.shicaizu[13] = 0;
        var toudingxianshi14 = new Cailiaoxiaohao();
        this.caizu.addChild(toudingxianshi14);
        toudingxianshi14.img_shicai.source = toudingtu14;
        toudingxianshi14.wenzineirong.text = "+1";
        toudingxianshi14.x = this.keng14.x + toudingxianshi14.wenzizu.width / 2;
        toudingxianshi14.y = this.keng14.y + toudingxianshi14.wenzizu.height / 2;
        egret.Tween.get(toudingxianshi14).to({ x: toudingxianshi14.x, y: toudingxianshi14.y - 80 }, 2000).call(function () {
            _this.caizu.removeChild(toudingxianshi14);
        });
    };
    Maicaiui.prototype.di15gekeng = function () {
        var _this = this;
        this.dijigekeng[14] = 1;
        if (this.dijigekeng[11] == 0 && this.shicaizu[11] == this.dangqianshicai) {
            this.di12gekeng();
        }
        if (this.dijigekeng[13] == 0 && this.shicaizu[13] == this.dangqianshicai) {
            this.di14gekeng();
        }
        var toudingtu15 = "";
        switch (this.dangqianshicai) {
            case 1:
                this.baicaishu += 1;
                toudingtu15 = "img_baicai_png";
                break;
            case 2:
                this.tudoushu += 1;
                toudingtu15 = "img_tudou_png";
                break;
            case 3:
                this.dongguashu += 1;
                toudingtu15 = "img_donggua_png";
                break;
            case 4:
                this.yushu += 1;
                toudingtu15 = "img_yu_png";
                break;
            case 5:
                this.roushu += 1;
                toudingtu15 = "img_rou_png";
                break;
        }
        egret.Tween.get(this.keng15).to({ scaleX: 1.5, scaleY: 1.5 }, 1000).call(function () {
            _this.keng15.scaleX = 1;
            _this.keng15.scaleY = 1;
        });
        this.shicaizu[14] = 0;
        var toudingxianshi15 = new Cailiaoxiaohao();
        this.caizu.addChild(toudingxianshi15);
        toudingxianshi15.img_shicai.source = toudingtu15;
        toudingxianshi15.wenzineirong.text = "+1";
        toudingxianshi15.x = this.keng15.x + toudingxianshi15.wenzizu.width / 2;
        toudingxianshi15.y = this.keng15.y + toudingxianshi15.wenzizu.height / 2;
        egret.Tween.get(toudingxianshi15).to({ x: toudingxianshi15.x, y: toudingxianshi15.y - 80 }, 2000).call(function () {
            _this.caizu.removeChild(toudingxianshi15);
        });
    };
    Maicaiui.prototype.maicaijiesu = function () {
        Gameguanli.Kongzhitai().jianglijiemian("kai", "img_shicai_png", this.zengjiayuanliao);
    };
    return Maicaiui;
}(eui.Component));
__reflect(Maicaiui.prototype, "Maicaiui", ["eui.UIComponent", "egret.DisplayObject"]);
//# sourceMappingURL=Maicaiui.js.map