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
var Jiajugoumai = (function (_super) {
    __extends(Jiajugoumai, _super);
    function Jiajugoumai() {
        return _super.call(this) || this;
    }
    Jiajugoumai.prototype.partAdded = function (partName, instance) {
        _super.prototype.partAdded.call(this, partName, instance);
    };
    Jiajugoumai.prototype.childrenCreated = function () {
        _super.prototype.childrenCreated.call(this);
        this.chushihuaxianshiliebiao();
    };
    Jiajugoumai.prototype.chushihuaxianshiliebiao = function () {
        //点击界面的小炒页签按钮时触发
        this.but_kuaican.addEventListener(egret.TouchEvent.TOUCH_TAP, this.dianjixiaocai, this);
        //点击界面的火锅页签按钮时触发
        this.but_huoguo.addEventListener(egret.TouchEvent.TOUCH_TAP, this.dianjihuoguo, this);
        //点击界面的小吃页签按钮时触发
        this.but_xiaochi.addEventListener(egret.TouchEvent.TOUCH_TAP, this.dianjixiaochi, this);
        //点击界面的点心页签按钮时触发
        this.but_tiandian.addEventListener(egret.TouchEvent.TOUCH_TAP, this.dianjidianxin, this);
        //点击装修界面的第一个坑的使用时触发
        this.but_jiajushiyong0.addEventListener(egret.TouchEvent.TOUCH_TAP, this.dianjidi1geshiyong, this);
        //点击装修界面的第2个坑的使用时触发
        this.but_jiajushiyong1.addEventListener(egret.TouchEvent.TOUCH_TAP, this.dianjidi2geshiyong, this);
        //点击装修界面的第3个坑的使用时触发
        this.but_jiajushiyong2.addEventListener(egret.TouchEvent.TOUCH_TAP, this.dianjidi3geshiyong, this);
        //点击装修界面的第4个坑的使用时触发
        this.but_jiajushiyong3.addEventListener(egret.TouchEvent.TOUCH_TAP, this.dianjidi4geshiyong, this);
        //点击装修界面的第一个坑的解锁时触发
        this.but_jiajugoumai0.addEventListener(egret.TouchEvent.TOUCH_TAP, this.dianjidi1gejiesuo, this);
        //点击装修界面的第2个坑的解锁时触发
        this.but_jiajugoumai1.addEventListener(egret.TouchEvent.TOUCH_TAP, this.dianjidi2gejiesuo, this);
        //点击装修界面的第3个坑的解锁时触发
        this.but_jiajugoumai2.addEventListener(egret.TouchEvent.TOUCH_TAP, this.dianjidi3gejiesuo, this);
        //点击装修界面的第4个坑的解锁时触发
        this.but_jiajugoumai3.addEventListener(egret.TouchEvent.TOUCH_TAP, this.dianjidi4gejiesuo, this);
    };
    Jiajugoumai.prototype.dianjidi1geshiyong = function () {
        Weblianjie.fasongshuju("code:004", "{" + '"jiajuid"' + ":" + '"' + this.di1geid + '"' + "," + '"uid"' + ":" + '"' + Gerenshuxing.uid + '"' + "}");
        switch (this.panduanyeqian) {
            case 1:
                Gameguanli.Kongzhitai().zhujiemian.img_jiaju_xiaochao.source = this.di1getupian;
                this.but_jiajushiyong0.enabled = false;
                this.but_jiajushiyong1.enabled = true;
                this.but_jiajushiyong2.enabled = true;
                this.but_jiajushiyong3.enabled = true;
                break;
            case 2:
                Gameguanli.Kongzhitai().zhujiemian.img_jiaju_huoguo.source = this.di1getupian;
                this.but_jiajushiyong0.enabled = false;
                this.but_jiajushiyong1.enabled = true;
                this.but_jiajushiyong2.enabled = true;
                this.but_jiajushiyong3.enabled = true;
                break;
            case 3:
                Gameguanli.Kongzhitai().zhujiemian.img_jiaju_xiaochi.source = this.di1getupian;
                this.but_jiajushiyong0.enabled = false;
                this.but_jiajushiyong1.enabled = true;
                this.but_jiajushiyong2.enabled = true;
                this.but_jiajushiyong3.enabled = true;
                break;
            case 4:
                Gameguanli.Kongzhitai().zhujiemian.img_jiaju_dianxin.source = this.di1getupian;
                this.but_jiajushiyong0.enabled = false;
                this.but_jiajushiyong1.enabled = true;
                this.but_jiajushiyong2.enabled = true;
                this.but_jiajushiyong3.enabled = true;
                break;
        }
    };
    Jiajugoumai.prototype.dianjidi2geshiyong = function () {
        Weblianjie.fasongshuju("code:004", "{" + '"jiajuid"' + ":" + '"' + this.di2geid + '"' + "," + '"uid"' + ":" + '"' + Gerenshuxing.uid + '"' + "}");
        switch (this.panduanyeqian) {
            case 1:
                Gameguanli.Kongzhitai().zhujiemian.img_jiaju_xiaochao.source = this.di2getupian;
                this.but_jiajushiyong1.enabled = false;
                this.but_jiajushiyong0.enabled = true;
                this.but_jiajushiyong2.enabled = true;
                this.but_jiajushiyong3.enabled = true;
                break;
            case 2:
                Gameguanli.Kongzhitai().zhujiemian.img_jiaju_huoguo.source = this.di2getupian;
                this.but_jiajushiyong1.enabled = false;
                this.but_jiajushiyong0.enabled = true;
                this.but_jiajushiyong2.enabled = true;
                this.but_jiajushiyong3.enabled = true;
                break;
            case 3:
                Gameguanli.Kongzhitai().zhujiemian.img_jiaju_xiaochi.source = this.di2getupian;
                this.but_jiajushiyong1.enabled = false;
                this.but_jiajushiyong0.enabled = true;
                this.but_jiajushiyong2.enabled = true;
                this.but_jiajushiyong3.enabled = true;
                break;
            case 4:
                Gameguanli.Kongzhitai().zhujiemian.img_jiaju_dianxin.source = this.di2getupian;
                this.but_jiajushiyong1.enabled = false;
                this.but_jiajushiyong0.enabled = true;
                this.but_jiajushiyong2.enabled = true;
                this.but_jiajushiyong3.enabled = true;
                break;
        }
    };
    Jiajugoumai.prototype.dianjidi3geshiyong = function () {
        Weblianjie.fasongshuju("code:004", "{" + '"jiajuid"' + ":" + '"' + this.di3geid + '"' + "," + '"uid"' + ":" + '"' + Gerenshuxing.uid + '"' + "}");
        switch (this.panduanyeqian) {
            case 1:
                Gameguanli.Kongzhitai().zhujiemian.img_jiaju_xiaochao.source = this.di3getupian;
                this.but_jiajushiyong2.enabled = false;
                this.but_jiajushiyong0.enabled = true;
                this.but_jiajushiyong1.enabled = true;
                this.but_jiajushiyong3.enabled = true;
                break;
            case 2:
                Gameguanli.Kongzhitai().zhujiemian.img_jiaju_huoguo.source = this.di3getupian;
                this.but_jiajushiyong2.enabled = false;
                this.but_jiajushiyong0.enabled = true;
                this.but_jiajushiyong1.enabled = true;
                this.but_jiajushiyong3.enabled = true;
                break;
            case 3:
                Gameguanli.Kongzhitai().zhujiemian.img_jiaju_xiaochi.source = this.di3getupian;
                this.but_jiajushiyong2.enabled = false;
                this.but_jiajushiyong0.enabled = true;
                this.but_jiajushiyong1.enabled = true;
                this.but_jiajushiyong3.enabled = true;
                break;
            case 4:
                Gameguanli.Kongzhitai().zhujiemian.img_jiaju_dianxin.source = this.di3getupian;
                this.but_jiajushiyong2.enabled = false;
                this.but_jiajushiyong0.enabled = true;
                this.but_jiajushiyong1.enabled = true;
                this.but_jiajushiyong3.enabled = true;
                break;
        }
    };
    Jiajugoumai.prototype.dianjidi4geshiyong = function () {
        Weblianjie.fasongshuju("code:004", "{" + '"jiajuid"' + ":" + '"' + this.di4geid + '"' + "," + '"uid"' + ":" + '"' + Gerenshuxing.uid + '"' + "}");
        switch (this.panduanyeqian) {
            case 1:
                Gameguanli.Kongzhitai().zhujiemian.img_jiaju_xiaochao.source = this.di4getupian;
                this.but_jiajushiyong3.enabled = false;
                this.but_jiajushiyong0.enabled = true;
                this.but_jiajushiyong1.enabled = true;
                this.but_jiajushiyong2.enabled = true;
                break;
            case 2:
                Gameguanli.Kongzhitai().zhujiemian.img_jiaju_huoguo.source = this.di4getupian;
                this.but_jiajushiyong3.enabled = false;
                this.but_jiajushiyong0.enabled = true;
                this.but_jiajushiyong1.enabled = true;
                this.but_jiajushiyong2.enabled = true;
                break;
            case 3:
                Gameguanli.Kongzhitai().zhujiemian.img_jiaju_xiaochi.source = this.di4getupian;
                this.but_jiajushiyong3.enabled = false;
                this.but_jiajushiyong0.enabled = true;
                this.but_jiajushiyong1.enabled = true;
                this.but_jiajushiyong2.enabled = true;
                break;
            case 4:
                Gameguanli.Kongzhitai().zhujiemian.img_jiaju_dianxin.source = this.di4getupian;
                this.but_jiajushiyong3.enabled = false;
                this.but_jiajushiyong0.enabled = true;
                this.but_jiajushiyong1.enabled = true;
                this.but_jiajushiyong2.enabled = true;
                break;
        }
    };
    Jiajugoumai.prototype.dianjidi1gejiesuo = function () {
        Weblianjie.fasongshuju("code:008", "{" + '"jiajuid"' + ":" + '"' + this.di1geid + '"' + "," + '"uid"' + ":" + '"' + Gerenshuxing.uid + '"' + "}");
    };
    Jiajugoumai.prototype.dianjidi2gejiesuo = function () {
        Weblianjie.fasongshuju("code:008", "{" + '"jiajuid"' + ":" + '"' + this.di2geid + '"' + "," + '"uid"' + ":" + '"' + Gerenshuxing.uid + '"' + "}");
    };
    Jiajugoumai.prototype.dianjidi3gejiesuo = function () {
        Weblianjie.fasongshuju("code:008", "{" + '"jiajuid"' + ":" + '"' + this.di3geid + '"' + "," + '"uid"' + ":" + '"' + Gerenshuxing.uid + '"' + "}");
    };
    Jiajugoumai.prototype.dianjidi4gejiesuo = function () {
        Weblianjie.fasongshuju("code:008", "{" + '"jiajuid"' + ":" + '"' + this.di4geid + '"' + "," + '"uid"' + ":" + '"' + Gerenshuxing.uid + '"' + "}");
    };
    Jiajugoumai.prototype.dianjixiaocai = function () {
        //调用移除当前已显示界面内容；
        if (Gerenshuxing.jiesuoxiaochao == "1") {
            this.but_kuaican.enabled = false;
            this.but_huoguo.enabled = true;
            this.but_xiaochi.enabled = true;
            this.but_tiandian.enabled = true;
            this.chulishujujiajujiegou(1, 1);
            Guanlijiemian.dangqianyeqianshu = 1;
            Guanlijiemian.dangqianyeshu = 1;
        }
        else {
            Gameguanli.Kongzhitai().cuowutishixinxi("小炒区域未解锁，无法查看装修内容！");
        }
    };
    Jiajugoumai.prototype.dianjihuoguo = function () {
        //调用移除当前已显示界面内容；
        if (Gerenshuxing.jiesuohuoguo == "1") {
            this.but_kuaican.enabled = true;
            this.but_huoguo.enabled = false;
            this.but_xiaochi.enabled = true;
            this.but_tiandian.enabled = true;
            this.chulishujujiajujiegou(2, 1);
            Guanlijiemian.dangqianyeqianshu = 2;
            Guanlijiemian.dangqianyeshu = 1;
        }
        else {
            Gameguanli.Kongzhitai().cuowutishixinxi("火锅区域未解锁，无法查看装修内容！");
        }
    };
    Jiajugoumai.prototype.dianjixiaochi = function () {
        //调用移除当前已显示界面内容；
        if (Gerenshuxing.jiesuoxiaochi == "1") {
            this.but_kuaican.enabled = true;
            this.but_huoguo.enabled = true;
            this.but_xiaochi.enabled = false;
            this.but_tiandian.enabled = true;
            this.chulishujujiajujiegou(3, 1);
            Guanlijiemian.dangqianyeqianshu = 3;
            Guanlijiemian.dangqianyeshu = 1;
        }
        else {
            Gameguanli.Kongzhitai().cuowutishixinxi("小吃区域未解锁，无法查看装修内容！");
        }
    };
    Jiajugoumai.prototype.dianjidianxin = function () {
        //调用移除当前已显示界面内容；
        if (Gerenshuxing.jiesuozaocan == "1") {
            this.but_kuaican.enabled = true;
            this.but_huoguo.enabled = true;
            this.but_xiaochi.enabled = true;
            this.but_tiandian.enabled = false;
            this.chulishujujiajujiegou(4, 1);
            Guanlijiemian.dangqianyeqianshu = 4;
            Guanlijiemian.dangqianyeshu = 1;
        }
        else {
            Gameguanli.Kongzhitai().cuowutishixinxi("早餐区域未解锁，无法查看装修内容！");
        }
    };
    //修改饭店界面的家具的小吃区域显示内容和判断使用是否成功
    Jiajugoumai.prototype.tongzhizhujiemain1 = function (xiugaitubiao, id) {
        this.di1getupian = xiugaitubiao;
        this.di1geid = id;
    };
    Jiajugoumai.prototype.tongzhizhujiemain2 = function (xiugaitubiao, id) {
        this.di2getupian = xiugaitubiao;
        this.di2geid = id;
    };
    Jiajugoumai.prototype.tongzhizhujiemain3 = function (xiugaitubiao, id) {
        this.di3getupian = xiugaitubiao;
        this.di3geid = id;
    };
    Jiajugoumai.prototype.tongzhizhujiemain4 = function (xiugaitubiao, id) {
        this.di4getupian = xiugaitubiao;
        this.di4geid = id;
    };
    //判断每个显示格子的具体显示内容
    Jiajugoumai.prototype.panduanxianshineirong = function (leixingxuhao, leixingdizhi, leixingxiabiao) {
        if (leixingxuhao == 1) {
            //				console.log(leixingxuhao,leixingdizhi,leixingxiabiao);
            if (leixingdizhi[leixingxiabiao] !== undefined) {
                if (leixingdizhi[leixingxiabiao].jiajuislock == 1) {
                    this.jiajuicon0.source = leixingdizhi[leixingxiabiao].imgname + "_png";
                    this.jiajumingzi0.text = leixingdizhi[leixingxiabiao].jiajuName;
                    this.jiajujiage0.text = "已获得";
                    this.jiajujiage0.textColor = 0x3EE016;
                    this.img_jiajudiban0.source = "img_jiajudiban_png";
                    this.jiajujiagetubiao0.source = "img_qian_png";
                    this.but_jiajushiyong0.alpha = 1;
                    this.but_jiajushiyong0.enabled = true;
                    this.but_jiajushiyong0.touchEnabled = true;
                    this.but_jiajushiyong0.touchChildren = true;
                    this.but_jiajugoumai0.alpha = 0;
                    this.but_jiajugoumai0.enabled = false;
                    this.but_jiajugoumai0.touchEnabled = false;
                    this.but_jiajugoumai0.touchChildren = false;
                    this.img_jiajuweihuode0.source = "";
                    this.di1caiid = leixingdizhi[leixingxiabiao].imgname;
                    this.tongzhizhujiemain1(leixingdizhi[leixingxiabiao].imgname + "_png", leixingdizhi[leixingxiabiao].id);
                }
                else if (leixingdizhi[leixingxiabiao].jiajuislock == 0) {
                    this.jiajuicon0.source = leixingdizhi[leixingxiabiao].imgname + "_png";
                    this.jiajumingzi0.text = leixingdizhi[leixingxiabiao].jiajuName;
                    this.jiajujiage0.text = "- " + leixingdizhi[leixingxiabiao].jiajuacrtivatePrice;
                    this.jiajujiage0.textColor = 0xDB1515;
                    this.img_jiajudiban0.source = "img_jiajudiban_png";
                    this.jiajujiagetubiao0.source = "img_qian_png";
                    this.but_jiajushiyong0.alpha = 0;
                    this.but_jiajushiyong0.enabled = false;
                    this.but_jiajushiyong0.touchEnabled = false;
                    this.but_jiajushiyong0.touchChildren = false;
                    this.but_jiajugoumai0.alpha = 1;
                    this.but_jiajugoumai0.enabled = true;
                    this.but_jiajugoumai0.touchEnabled = true;
                    this.but_jiajugoumai0.touchChildren = true;
                    this.img_jiajuweihuode0.source = "img_weihuode_png";
                    this.di1caiid = leixingdizhi[leixingxiabiao].imgname;
                    this.tongzhizhujiemain1(leixingdizhi[leixingxiabiao].imgname + "_png", leixingdizhi[leixingxiabiao].id);
                }
                else {
                    this.jiajuicon0.source = leixingdizhi[leixingxiabiao].imgname + "_png";
                    this.jiajumingzi0.text = leixingdizhi[leixingxiabiao].jiajuName;
                    this.jiajujiage0.text = "特殊途径获取";
                    this.jiajujiage0.textColor = 0x092BF7;
                    this.img_jiajudiban0.source = "img_jiajudiban_png";
                    this.jiajujiagetubiao0.source = "";
                    this.but_jiajushiyong0.alpha = 0;
                    this.but_jiajushiyong0.enabled = false;
                    this.but_jiajugoumai0.alpha = 1;
                    this.but_jiajushiyong0.enabled = false;
                    this.img_jiajuweihuode0.source = "img_weihuode_png";
                    this.di1caiid = leixingdizhi[leixingxiabiao].imgname;
                    this.tongzhizhujiemain1(leixingdizhi[leixingxiabiao].imgname + "_png", leixingdizhi[leixingxiabiao].id);
                }
            }
            else {
                this.jiajuicon0.source = "";
                this.jiajumingzi0.text = "";
                this.jiajujiage0.text = "";
                this.img_jiajudiban0.source = "";
                this.jiajujiagetubiao0.source = "";
                this.but_jiajushiyong0.alpha = 0;
                this.but_jiajushiyong0.enabled = false;
                this.img_jiajuweihuode0.source = "";
                this.but_jiajugoumai0.alpha = 0;
                this.but_jiajugoumai0.enabled = false;
            }
        }
        if (leixingxuhao == 2) {
            if (leixingdizhi[leixingxiabiao] !== undefined) {
                if (leixingdizhi[leixingxiabiao].jiajuislock == 1) {
                    this.jiajuicon1.source = leixingdizhi[leixingxiabiao].imgname + "_png";
                    this.jiajumingzi1.text = leixingdizhi[leixingxiabiao].jiajuName;
                    this.jiajujiage1.text = "已获得";
                    this.jiajujiage1.textColor = 0x3EE016;
                    this.img_jiajudiban1.source = "img_jiajudiban_png";
                    this.jiajujiagetubiao1.source = "img_qian_png";
                    this.but_jiajushiyong1.alpha = 1;
                    this.but_jiajushiyong1.enabled = true;
                    this.but_jiajushiyong1.touchEnabled = true;
                    this.but_jiajushiyong1.touchChildren = true;
                    this.but_jiajugoumai1.alpha = 0;
                    this.but_jiajugoumai1.enabled = false;
                    this.but_jiajugoumai1.touchEnabled = false;
                    this.but_jiajugoumai1.touchChildren = false;
                    this.img_jiajuweihuode1.source = "";
                    this.di2caiid = leixingdizhi[leixingxiabiao].imgname;
                    this.tongzhizhujiemain2(leixingdizhi[leixingxiabiao].imgname + "_png", leixingdizhi[leixingxiabiao].id);
                }
                else if (leixingdizhi[leixingxiabiao].jiajuislock == 0) {
                    this.jiajuicon1.source = leixingdizhi[leixingxiabiao].imgname + "_png";
                    this.jiajumingzi1.text = leixingdizhi[leixingxiabiao].jiajuName;
                    this.jiajujiage1.text = "- " + leixingdizhi[leixingxiabiao].jiajuacrtivatePrice;
                    this.jiajujiage1.textColor = 0xDB1515;
                    this.img_jiajudiban1.source = "img_jiajudiban_png";
                    this.jiajujiagetubiao1.source = "img_qian_png";
                    this.but_jiajushiyong1.alpha = 0;
                    this.but_jiajushiyong1.enabled = false;
                    this.but_jiajushiyong1.touchEnabled = false;
                    this.but_jiajushiyong1.touchChildren = false;
                    this.but_jiajugoumai1.alpha = 1;
                    this.but_jiajugoumai1.enabled = true;
                    this.but_jiajugoumai1.touchEnabled = true;
                    this.but_jiajugoumai1.touchChildren = true;
                    this.img_jiajuweihuode1.source = "img_weihuode_png";
                    this.di2caiid = leixingdizhi[leixingxiabiao].imgname;
                    this.tongzhizhujiemain2(leixingdizhi[leixingxiabiao].imgname + "_png", leixingdizhi[leixingxiabiao].id);
                }
                else {
                    this.jiajuicon1.source = leixingdizhi[leixingxiabiao].imgname + "_png";
                    this.jiajumingzi1.text = leixingdizhi[leixingxiabiao].jiajuName;
                    this.jiajujiage1.text = "特殊途径获取";
                    this.jiajujiage1.textColor = 0x092BF7;
                    this.img_jiajudiban1.source = "img_jiajudiban_png";
                    this.jiajujiagetubiao1.source = "";
                    this.but_jiajushiyong1.alpha = 0;
                    this.but_jiajushiyong1.enabled = false;
                    this.but_jiajugoumai1.alpha = 1;
                    this.but_jiajushiyong1.enabled = false;
                    this.img_jiajuweihuode1.source = "img_weihuode_png";
                    this.di2caiid = leixingdizhi[leixingxiabiao].imgname;
                    this.tongzhizhujiemain2(leixingdizhi[leixingxiabiao].imgname + "_png", leixingdizhi[leixingxiabiao].id);
                }
            }
            else {
                this.jiajuicon1.source = "";
                this.jiajumingzi1.text = "";
                this.jiajujiage1.text = "";
                this.img_jiajudiban1.source = "";
                this.jiajujiagetubiao1.source = "";
                this.but_jiajushiyong1.alpha = 0;
                this.but_jiajushiyong1.enabled = false;
                this.img_jiajuweihuode1.source = "";
                this.but_jiajugoumai1.alpha = 0;
                this.but_jiajugoumai1.enabled = false;
            }
        }
        if (leixingxuhao == 3) {
            if (leixingdizhi[leixingxiabiao] !== undefined) {
                if (leixingdizhi[leixingxiabiao].jiajuislock == 1) {
                    this.jiajuicon2.source = leixingdizhi[leixingxiabiao].imgname + "_png";
                    this.jiajumingzi2.text = leixingdizhi[leixingxiabiao].jiajuName;
                    this.jiajujiage2.text = "已获得";
                    this.jiajujiage2.textColor = 0x3EE016;
                    this.img_jiajudiban2.source = "img_jiajudiban_png";
                    this.jiajujiagetubiao2.source = "img_qian_png";
                    this.but_jiajushiyong2.alpha = 1;
                    this.but_jiajushiyong2.enabled = true;
                    this.but_jiajushiyong2.touchEnabled = true;
                    this.but_jiajushiyong2.touchChildren = true;
                    this.but_jiajugoumai2.alpha = 0;
                    this.but_jiajugoumai2.enabled = false;
                    this.but_jiajugoumai2.touchEnabled = false;
                    this.but_jiajugoumai2.touchChildren = false;
                    this.img_jiajuweihuode2.source = "";
                    this.di3caiid = leixingdizhi[leixingxiabiao].imgname;
                    this.tongzhizhujiemain3(leixingdizhi[leixingxiabiao].imgname + "_png", leixingdizhi[leixingxiabiao].id);
                }
                else if (leixingdizhi[leixingxiabiao].jiajuislock == 0) {
                    this.jiajuicon2.source = leixingdizhi[leixingxiabiao].imgname + "_png";
                    this.jiajumingzi2.text = leixingdizhi[leixingxiabiao].jiajuName;
                    this.jiajujiage2.text = "- " + leixingdizhi[leixingxiabiao].jiajuacrtivatePrice;
                    this.jiajujiage2.textColor = 0xDB1515;
                    this.img_jiajudiban2.source = "img_jiajudiban_png";
                    this.jiajujiagetubiao2.source = "img_qian_png";
                    this.but_jiajushiyong2.alpha = 0;
                    this.but_jiajushiyong2.enabled = false;
                    this.but_jiajushiyong2.touchEnabled = false;
                    this.but_jiajushiyong2.touchChildren = false;
                    this.but_jiajugoumai2.alpha = 1;
                    this.but_jiajugoumai2.enabled = true;
                    this.but_jiajugoumai2.touchEnabled = true;
                    this.but_jiajugoumai2.touchChildren = true;
                    this.img_jiajuweihuode2.source = "img_weihuode_png";
                    this.di3caiid = leixingdizhi[leixingxiabiao].imgname;
                    this.tongzhizhujiemain3(leixingdizhi[leixingxiabiao].imgname + "_png", leixingdizhi[leixingxiabiao].id);
                }
                else {
                    this.jiajuicon2.source = leixingdizhi[leixingxiabiao].imgname + "_png";
                    this.jiajumingzi2.text = leixingdizhi[leixingxiabiao].jiajuName;
                    this.jiajujiage2.text = "特殊途径获取";
                    this.jiajujiage2.textColor = 0x092BF7;
                    this.img_jiajudiban2.source = "img_jiajudiban_png";
                    this.jiajujiagetubiao2.source = "";
                    this.but_jiajushiyong2.alpha = 0;
                    this.but_jiajushiyong2.enabled = false;
                    this.but_jiajugoumai2.alpha = 1;
                    this.but_jiajushiyong2.enabled = false;
                    this.img_jiajuweihuode2.source = "img_weihuode_png";
                    this.di3caiid = leixingdizhi[leixingxiabiao].imgname;
                    this.tongzhizhujiemain3(leixingdizhi[leixingxiabiao].imgname + "_png", leixingdizhi[leixingxiabiao].id);
                }
            }
            else {
                this.jiajuicon2.source = "";
                this.jiajumingzi2.text = "";
                this.jiajujiage2.text = "";
                this.img_jiajudiban2.source = "";
                this.jiajujiagetubiao2.source = "";
                this.but_jiajushiyong2.alpha = 0;
                this.but_jiajushiyong2.enabled = false;
                this.img_jiajuweihuode2.source = "";
                this.but_jiajugoumai2.alpha = 0;
                this.but_jiajugoumai2.enabled = false;
            }
        }
        if (leixingxuhao == 4) {
            if (leixingdizhi[leixingxiabiao] !== undefined) {
                if (leixingdizhi[leixingxiabiao].jiajuislock == 1) {
                    this.jiajuicon3.source = leixingdizhi[leixingxiabiao].imgname + "_png";
                    this.jiajumingzi3.text = leixingdizhi[leixingxiabiao].jiajuName;
                    this.jiajujiage3.text = "已获得";
                    this.jiajujiage3.textColor = 0x3EE016;
                    this.img_jiajudiban3.source = "img_jiajudiban_png";
                    this.jiajujiagetubiao3.source = "img_qian_png";
                    this.but_jiajushiyong3.alpha = 1;
                    this.but_jiajushiyong3.enabled = true;
                    this.but_jiajushiyong3.touchEnabled = true;
                    this.but_jiajushiyong3.touchChildren = true;
                    this.but_jiajugoumai3.alpha = 0;
                    this.but_jiajugoumai3.enabled = false;
                    this.but_jiajugoumai3.touchEnabled = false;
                    this.but_jiajugoumai3.touchChildren = false;
                    this.img_jiajuweihuode3.source = "";
                    this.di4caiid = leixingdizhi[leixingxiabiao].imgname;
                    this.tongzhizhujiemain4(leixingdizhi[leixingxiabiao].imgname + "_png", leixingdizhi[leixingxiabiao].id);
                }
                else if (leixingdizhi[leixingxiabiao].jiajuislock == 0) {
                    this.jiajuicon3.source = leixingdizhi[leixingxiabiao].imgname + "_png";
                    this.jiajumingzi3.text = leixingdizhi[leixingxiabiao].jiajuName;
                    this.jiajujiage3.text = "- " + leixingdizhi[leixingxiabiao].jiajuacrtivatePrice;
                    this.jiajujiage3.textColor = 0xDB1515;
                    this.img_jiajudiban3.source = "img_jiajudiban_png";
                    this.jiajujiagetubiao3.source = "img_qian_png";
                    this.but_jiajushiyong3.alpha = 0;
                    this.but_jiajushiyong3.enabled = false;
                    this.but_jiajushiyong3.touchEnabled = false;
                    this.but_jiajushiyong3.touchChildren = false;
                    this.but_jiajugoumai3.alpha = 1;
                    this.but_jiajugoumai3.enabled = true;
                    this.but_jiajugoumai3.touchEnabled = true;
                    this.but_jiajugoumai3.touchChildren = true;
                    this.img_jiajuweihuode3.source = "img_weihuode_png";
                    this.di4caiid = leixingdizhi[leixingxiabiao].imgname;
                    this.tongzhizhujiemain4(leixingdizhi[leixingxiabiao].imgname + "_png", leixingdizhi[leixingxiabiao].id);
                }
                else {
                    this.jiajuicon3.source = leixingdizhi[leixingxiabiao].imgname + "_png";
                    this.jiajumingzi3.text = leixingdizhi[leixingxiabiao].jiajuName;
                    this.jiajujiage3.text = "特殊途径获取";
                    this.jiajujiage3.textColor = 0x092BF7;
                    this.img_jiajudiban3.source = "img_jiajudiban_png";
                    this.jiajujiagetubiao3.source = "";
                    this.but_jiajushiyong3.alpha = 0;
                    this.but_jiajushiyong3.enabled = false;
                    this.but_jiajugoumai3.alpha = 1;
                    this.but_jiajushiyong3.enabled = false;
                    this.img_jiajuweihuode3.source = "img_weihuode_png";
                    this.di4caiid = leixingdizhi[leixingxiabiao].imgname;
                    this.tongzhizhujiemain4(leixingdizhi[leixingxiabiao].imgname + "_png", leixingdizhi[leixingxiabiao].id);
                }
            }
            else {
                this.jiajuicon3.source = "";
                this.jiajumingzi3.text = "";
                this.jiajujiage3.text = "";
                this.img_jiajudiban3.source = "";
                this.jiajujiagetubiao3.source = "";
                this.but_jiajushiyong3.alpha = 0;
                this.but_jiajushiyong3.enabled = false;
                this.img_jiajuweihuode3.source = "";
                this.but_jiajugoumai3.alpha = 0;
                this.but_jiajugoumai3.enabled = false;
            }
        }
    };
    //管理界面数据逻辑的处理
    Jiajugoumai.prototype.chulishujujiajujiegou = function (yeqian, yeshu) {
        var guanlileixingleibiao = RES.getRes("jiajubiao_json");
        //		console.log(guanlileixingleibiao);
        //		console.log(this.dangqianyeqianshu);
        //接收服务端数据后，处理家具信息
        for (var bi = 0; bi < guanlileixingleibiao.length; bi++) {
            for (var ki = 0; ki < Gerenshuxing.jiesuojiaju.length; ki++) {
                if (guanlileixingleibiao[bi].id == Gerenshuxing.jiesuojiaju[ki]) {
                    guanlileixingleibiao[bi].jiajuislock = 1;
                    break;
                }
                ;
            }
        }
        if (yeqian) {
            this.panduanyeqian = yeqian;
        }
        var xiaocaoquyuxianshi = [];
        var huoguoquyuxianshi = [];
        var xiaochiquyuxianshi = [];
        var dianxinquyuxianshi = [];
        var xiaocaoj = 0;
        var huoguoj = 0;
        var xiaochij = 0;
        var dianxinj = 0;
        //遍历json表格，将所有菜品分类;
        for (var i = 0; i < guanlileixingleibiao.length; i++) {
            if (guanlileixingleibiao[i].jiajuType == 1) {
                xiaocaoquyuxianshi[xiaocaoj] = guanlileixingleibiao[i];
                xiaocaoj++;
            }
            if (guanlileixingleibiao[i].jiajuType == 2) {
                huoguoquyuxianshi[huoguoj] = guanlileixingleibiao[i];
                huoguoj++;
            }
            if (guanlileixingleibiao[i].jiajuType == 3) {
                xiaochiquyuxianshi[xiaochij] = guanlileixingleibiao[i];
                xiaochij++;
            }
            if (guanlileixingleibiao[i].jiajuType == 4) {
                dianxinquyuxianshi[dianxinj] = guanlileixingleibiao[i];
                dianxinj++;
            }
        }
        //		console.log(xiaocaoquyuxianshi.length)
        //判断需要的页面长度	
        if (xiaocaoquyuxianshi.length % 4 > 1) {
            this.xiaochaoyeshu = Math.floor(xiaocaoquyuxianshi.length / 4) + 1;
        }
        else {
            this.xiaochaoyeshu = xiaocaoquyuxianshi.length / 4;
        }
        if (huoguoquyuxianshi.length % 4 > 1) {
            this.huoguoyeshu = Math.floor(huoguoquyuxianshi.length / 4) + 1;
        }
        else {
            this.huoguoyeshu = huoguoquyuxianshi.length / 4;
        }
        if (xiaochiquyuxianshi.length % 4 > 1) {
            this.xiaochiyeshu = Math.floor(xiaochiquyuxianshi.length / 4) + 1;
        }
        else {
            this.xiaochiyeshu = xiaochiquyuxianshi.length / 4;
        }
        if (dianxinquyuxianshi.length % 4 > 1) {
            this.dianxinyeshu = Math.floor(dianxinquyuxianshi.length / 4) + 1;
        }
        else {
            this.dianxinyeshu = dianxinquyuxianshi.length / 4;
        }
        //		console.log(this.neiRongZhanShi);
        //判断每夜的显示内容
        if (yeqian == 1 && yeshu == 1) {
            var k = 4;
            for (var i = k * yeshu - 4, j = 1; i < k * yeshu; i++, j++) {
                this.panduanxianshineirong(j, xiaocaoquyuxianshi, i);
            }
        }
        if (yeqian == 1 && yeshu == 2) {
            var k = 4;
            for (var i = k * yeshu - 4, j = 1; i < k * yeshu; i++, j++) {
                this.panduanxianshineirong(j, xiaocaoquyuxianshi, i);
            }
        }
        if (yeqian == 1 && yeshu == 3) {
            var k = 4;
            for (var i = k * yeshu - 4, j = 1; i < k * yeshu; i++, j++) {
                this.panduanxianshineirong(j, xiaocaoquyuxianshi, i);
            }
        }
        if (yeqian == 1 && yeshu == 4) {
            var k = 4;
            for (var i = k * yeshu - 4, j = 1; i < k * yeshu; i++, j++) {
                this.panduanxianshineirong(j, xiaocaoquyuxianshi, i);
            }
        }
        if (yeqian == 1 && yeshu == 5) {
            var k = 4;
            for (var i = k * yeshu - 4, j = 1; i < k * yeshu; i++, j++) {
                this.panduanxianshineirong(j, xiaocaoquyuxianshi, i);
            }
        }
        if (yeqian == 1 && yeshu == 6) {
            var k = 4;
            for (var i = k * yeshu - 4, j = 1; i < k * yeshu; i++, j++) {
                this.panduanxianshineirong(j, xiaocaoquyuxianshi, i);
            }
        }
        if (yeqian == 1 && yeshu == 7) {
            var k = 4;
            for (var i = k * yeshu - 4, j = 1; i < k * yeshu; i++, j++) {
                this.panduanxianshineirong(j, xiaocaoquyuxianshi, i);
            }
        }
        if (yeqian == 1 && yeshu == 8) {
            var k = 4;
            for (var i = k * yeshu - 4, j = 1; i < k * yeshu; i++, j++) {
                this.panduanxianshineirong(j, xiaocaoquyuxianshi, i);
            }
        }
        if (yeqian == 1 && yeshu == 9) {
            var k = 4;
            for (var i = k * yeshu - 4, j = 1; i < k * yeshu; i++, j++) {
                this.panduanxianshineirong(j, xiaocaoquyuxianshi, i);
            }
        }
        if (yeqian == 1 && yeshu == 10) {
            var k = 4;
            for (var i = k * yeshu - 4, j = 1; i < k * yeshu; i++, j++) {
                this.panduanxianshineirong(j, xiaocaoquyuxianshi, i);
            }
        }
        if (yeqian == 2 && yeshu == 1) {
            var k = 4;
            for (var i = k * yeshu - 4, j = 1; i < k * yeshu; i++, j++) {
                this.panduanxianshineirong(j, huoguoquyuxianshi, i);
            }
        }
        if (yeqian == 2 && yeshu == 2) {
            var k = 4;
            for (var i = k * yeshu - 4, j = 1; i < k * yeshu; i++, j++) {
                this.panduanxianshineirong(j, huoguoquyuxianshi, i);
            }
        }
        if (yeqian == 2 && yeshu == 3) {
            var k = 4;
            for (var i = k * yeshu - 4, j = 1; i < k * yeshu; i++, j++) {
                this.panduanxianshineirong(j, huoguoquyuxianshi, i);
            }
        }
        if (yeqian == 2 && yeshu == 4) {
            var k = 4;
            for (var i = k * yeshu - 4, j = 1; i < k * yeshu; i++, j++) {
                this.panduanxianshineirong(j, huoguoquyuxianshi, i);
            }
        }
        if (yeqian == 2 && yeshu == 5) {
            var k = 4;
            for (var i = k * yeshu - 4, j = 1; i < k * yeshu; i++, j++) {
                this.panduanxianshineirong(j, huoguoquyuxianshi, i);
            }
        }
        if (yeqian == 2 && yeshu == 6) {
            var k = 4;
            for (var i = k * yeshu - 4, j = 1; i < k * yeshu; i++, j++) {
                this.panduanxianshineirong(j, huoguoquyuxianshi, i);
            }
        }
        if (yeqian == 2 && yeshu == 7) {
            var k = 4;
            for (var i = k * yeshu - 4, j = 1; i < k * yeshu; i++, j++) {
                this.panduanxianshineirong(j, huoguoquyuxianshi, i);
            }
        }
        if (yeqian == 2 && yeshu == 8) {
            var k = 4;
            for (var i = k * yeshu - 4, j = 1; i < k * yeshu; i++, j++) {
                this.panduanxianshineirong(j, huoguoquyuxianshi, i);
            }
        }
        if (yeqian == 2 && yeshu == 9) {
            var k = 4;
            for (var i = k * yeshu - 4, j = 1; i < k * yeshu; i++, j++) {
                this.panduanxianshineirong(j, huoguoquyuxianshi, i);
            }
        }
        if (yeqian == 2 && yeshu == 10) {
            var k = 4;
            for (var i = k * yeshu - 4, j = 1; i < k * yeshu; i++, j++) {
                this.panduanxianshineirong(j, huoguoquyuxianshi, i);
            }
        }
        if (yeqian == 3 && yeshu == 1) {
            var k = 4;
            for (var i = k * yeshu - 4, j = 1; i < k * yeshu; i++, j++) {
                this.panduanxianshineirong(j, xiaochiquyuxianshi, i);
            }
        }
        if (yeqian == 3 && yeshu == 2) {
            var k = 4;
            for (var i = k * yeshu - 4, j = 1; i < k * yeshu; i++, j++) {
                this.panduanxianshineirong(j, xiaochiquyuxianshi, i);
            }
        }
        if (yeqian == 3 && yeshu == 3) {
            var k = 4;
            for (var i = k * yeshu - 4, j = 1; i < k * yeshu; i++, j++) {
                this.panduanxianshineirong(j, xiaochiquyuxianshi, i);
            }
        }
        if (yeqian == 3 && yeshu == 4) {
            var k = 4;
            for (var i = k * yeshu - 4, j = 1; i < k * yeshu; i++, j++) {
                this.panduanxianshineirong(j, xiaochiquyuxianshi, i);
            }
        }
        if (yeqian == 3 && yeshu == 5) {
            var k = 4;
            for (var i = k * yeshu - 4, j = 1; i < k * yeshu; i++, j++) {
                this.panduanxianshineirong(j, xiaochiquyuxianshi, i);
            }
        }
        if (yeqian == 3 && yeshu == 6) {
            var k = 4;
            for (var i = k * yeshu - 4, j = 1; i < k * yeshu; i++, j++) {
                this.panduanxianshineirong(j, xiaochiquyuxianshi, i);
            }
        }
        if (yeqian == 3 && yeshu == 7) {
            var k = 4;
            for (var i = k * yeshu - 4, j = 1; i < k * yeshu; i++, j++) {
                this.panduanxianshineirong(j, xiaochiquyuxianshi, i);
            }
        }
        if (yeqian == 3 && yeshu == 8) {
            var k = 4;
            for (var i = k * yeshu - 4, j = 1; i < k * yeshu; i++, j++) {
                this.panduanxianshineirong(j, xiaochiquyuxianshi, i);
            }
        }
        if (yeqian == 3 && yeshu == 9) {
            var k = 4;
            for (var i = k * yeshu - 4, j = 1; i < k * yeshu; i++, j++) {
                this.panduanxianshineirong(j, xiaochiquyuxianshi, i);
            }
        }
        if (yeqian == 3 && yeshu == 10) {
            var k = 4;
            for (var i = k * yeshu - 4, j = 1; i < k * yeshu; i++, j++) {
                this.panduanxianshineirong(j, xiaochiquyuxianshi, i);
            }
        }
        if (yeqian == 4 && yeshu == 1) {
            var k = 4;
            for (var i = k * yeshu - 4, j = 1; i < k * yeshu; i++, j++) {
                this.panduanxianshineirong(j, dianxinquyuxianshi, i);
            }
        }
        if (yeqian == 4 && yeshu == 2) {
            var k = 4;
            for (var i = k * yeshu - 4, j = 1; i < k * yeshu; i++, j++) {
                this.panduanxianshineirong(j, dianxinquyuxianshi, i);
            }
        }
        if (yeqian == 4 && yeshu == 3) {
            var k = 4;
            for (var i = k * yeshu - 4, j = 1; i < k * yeshu; i++, j++) {
                this.panduanxianshineirong(j, dianxinquyuxianshi, i);
            }
        }
        if (yeqian == 4 && yeshu == 4) {
            var k = 4;
            for (var i = k * yeshu - 4, j = 1; i < k * yeshu; i++, j++) {
                this.panduanxianshineirong(j, dianxinquyuxianshi, i);
            }
        }
        if (yeqian == 4 && yeshu == 5) {
            var k = 4;
            for (var i = k * yeshu - 4, j = 1; i < k * yeshu; i++, j++) {
                this.panduanxianshineirong(j, dianxinquyuxianshi, i);
            }
        }
        if (yeqian == 4 && yeshu == 6) {
            var k = 4;
            for (var i = k * yeshu - 4, j = 1; i < k * yeshu; i++, j++) {
                this.panduanxianshineirong(j, dianxinquyuxianshi, i);
            }
        }
        if (yeqian == 4 && yeshu == 7) {
            var k = 4;
            for (var i = k * yeshu - 4, j = 1; i < k * yeshu; i++, j++) {
                this.panduanxianshineirong(j, dianxinquyuxianshi, i);
            }
        }
        if (yeqian == 4 && yeshu == 8) {
            var k = 4;
            for (var i = k * yeshu - 4, j = 1; i < k * yeshu; i++, j++) {
                this.panduanxianshineirong(j, dianxinquyuxianshi, i);
            }
        }
        if (yeqian == 4 && yeshu == 9) {
            var k = 4;
            for (var i = k * yeshu - 4, j = 1; i < k * yeshu; i++, j++) {
                this.panduanxianshineirong(j, dianxinquyuxianshi, i);
            }
        }
        if (yeqian == 4 && yeshu == 10) {
            var k = 4;
            for (var i = k * yeshu - 4, j = 1; i < k * yeshu; i++, j++) {
                this.panduanxianshineirong(j, dianxinquyuxianshi, i);
            }
        }
    };
    return Jiajugoumai;
}(eui.Component));
__reflect(Jiajugoumai.prototype, "Jiajugoumai", ["eui.UIComponent", "egret.DisplayObject"]);
//# sourceMappingURL=Jiajugoumai.js.map