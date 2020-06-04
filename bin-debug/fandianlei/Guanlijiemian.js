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
var Guanlijiemian = (function (_super) {
    __extends(Guanlijiemian, _super);
    function Guanlijiemian() {
        var _this = _super.call(this) || this;
        _this.neiRongZhanShi = new Jiajugoumai();
        _this.yuanGongJieMian = new Yuangongjiemian();
        _this.tuiguangchuandan = new Tuiguangchuandan();
        _this.tuiguangdianshi = new Tuiguangdianshi();
        _this.tuiguangpinglun = new Tuiguangpinglun();
        _this.tuiguangdaiyan = new Tuiguangdaiyan();
        _this.danjuJieMian = new Danjujiemian();
        return _this;
    }
    Guanlijiemian.prototype.partAdded = function (partName, instance) {
        _super.prototype.partAdded.call(this, partName, instance);
    };
    Guanlijiemian.prototype.childrenCreated = function () {
        _super.prototype.childrenCreated.call(this);
        this.guanlijiemiandianjirukou();
    };
    Guanlijiemian.prototype.guanlijiemiandianjirukou = function () {
        this.chushihuagaunli();
        //点击界面的关闭按钮时触发
        this.but_guanbiguanli.addEventListener(egret.TouchEvent.TOUCH_TAP, this.guanbianniu, this);
        //点击上翻页界面时触发
        this.but_gaunliup.addEventListener(egret.TouchEvent.TOUCH_TAP, this.dianjishangfanye, this);
        //点击下翻页界面时触发
        this.but_guanlidown.addEventListener(egret.TouchEvent.TOUCH_TAP, this.dianjixiafanye, this);
        //点击装修按钮时触发
        this.but_zhuangxiu.addEventListener(egret.TouchEvent.TOUCH_TAP, this.dianjizhuangxiu, this);
        //点击员工按钮时触发
        this.but_yuangong.addEventListener(egret.TouchEvent.TOUCH_TAP, this.dianjiyuangong, this);
        //点击营销按钮时触发
        this.but_yinxiao.addEventListener(egret.TouchEvent.TOUCH_TAP, this.dianjiyinxiao, this);
        //点击单据按钮时触发
        this.but_danju.addEventListener(egret.TouchEvent.TOUCH_TAP, this.dianjidanju, this);
    };
    Guanlijiemian.prototype.dianjishangfanye = function () {
        switch (Guanlijiemian.dangqianleixing) {
            case 1:
                if (Guanlijiemian.dangqianyeshu > 1) {
                    Guanlijiemian.dangqianyeshu = Guanlijiemian.dangqianyeshu - 1;
                    this.but_guanlidown.enabled = true;
                    if (Guanlijiemian.dangqianyeshu <= 1) {
                        this.but_gaunliup.enabled = false;
                    }
                    this.neiRongZhanShi.chulishujujiajujiegou(Guanlijiemian.dangqianyeqianshu, Guanlijiemian.dangqianyeshu);
                    this.fanyeyehaoshuaxin();
                }
                break;
            case 2:
                if (Guanlijiemian.dangqianyeshu > 1) {
                    Guanlijiemian.dangqianyeshu = Guanlijiemian.dangqianyeshu - 1;
                    this.but_guanlidown.enabled = true;
                    if (Guanlijiemian.dangqianyeshu <= 1) {
                        this.but_gaunliup.enabled = false;
                    }
                    this.yuanGongJieMian.chulishujujiajujiegou(Guanlijiemian.dangqianyeqianshu, Guanlijiemian.dangqianyeshu);
                    this.fanyeyehaoshuaxin();
                }
                break;
            case 3:
                if (Guanlijiemian.dangqianyeshu > 1) {
                    Guanlijiemian.dangqianyeshu = Guanlijiemian.dangqianyeshu - 1;
                    this.but_guanlidown.enabled = true;
                    if (Guanlijiemian.dangqianyeshu <= 1) {
                        this.but_gaunliup.enabled = false;
                    }
                    switch (Guanlijiemian.dangqianyeshu) {
                        case 1:
                            this.yichujiajuneirong();
                            this.addChild(this.tuiguangchuandan);
                            this.tuiguangchuandan.chulishujuluoji(Guanlijiemian.dangqianyeqianshu, Guanlijiemian.dangqianyeshu);
                            this.fanyeyehaoshuaxin();
                            break;
                        case 2:
                            this.yichujiajuneirong();
                            this.addChild(this.tuiguangdianshi);
                            this.tuiguangdianshi.chulishujuluoji(Guanlijiemian.dangqianyeqianshu, Guanlijiemian.dangqianyeshu);
                            this.fanyeyehaoshuaxin();
                            break;
                        case 3:
                            this.yichujiajuneirong();
                            this.addChild(this.tuiguangpinglun);
                            this.tuiguangpinglun.chulishujuluoji(Guanlijiemian.dangqianyeqianshu, Guanlijiemian.dangqianyeshu);
                            this.fanyeyehaoshuaxin();
                            break;
                        case 4:
                            this.yichujiajuneirong();
                            this.addChild(this.tuiguangdaiyan);
                            this.tuiguangdaiyan.chulishujuluoji(Guanlijiemian.dangqianyeqianshu, Guanlijiemian.dangqianyeshu);
                            this.fanyeyehaoshuaxin();
                            break;
                    }
                }
                break;
            case 4:
                if (Guanlijiemian.dangqianyeshu > 1) {
                    Guanlijiemian.dangqianyeshu = Guanlijiemian.dangqianyeshu - 1;
                    this.but_guanlidown.enabled = true;
                    if (Guanlijiemian.dangqianyeshu <= 1) {
                        this.but_gaunliup.enabled = false;
                    }
                    this.danjuJieMian.chulishujujiajujiegou(Guanlijiemian.dangqianyeqianshu, Guanlijiemian.dangqianyeshu);
                    this.fanyeyehaoshuaxin();
                }
                break;
        }
    };
    Guanlijiemian.prototype.dianjixiafanye = function () {
        switch (Guanlijiemian.dangqianleixing) {
            case 1:
                if (Guanlijiemian.dangqianyeqianshu == 1 && Guanlijiemian.dangqianyeshu < this.neiRongZhanShi.xiaochaoyeshu) {
                    Guanlijiemian.dangqianyeshu += 1;
                    this.but_gaunliup.enabled = true;
                    if (Guanlijiemian.dangqianyeqianshu == 1 && Guanlijiemian.dangqianyeshu >= this.neiRongZhanShi.xiaochaoyeshu) {
                        this.but_guanlidown.enabled = false;
                    }
                    this.neiRongZhanShi.chulishujujiajujiegou(Guanlijiemian.dangqianyeqianshu, Guanlijiemian.dangqianyeshu);
                }
                else if (Guanlijiemian.dangqianyeqianshu == 2 && Guanlijiemian.dangqianyeshu < this.neiRongZhanShi.huoguoyeshu) {
                    Guanlijiemian.dangqianyeshu += 1;
                    this.but_gaunliup.enabled = true;
                    if (Guanlijiemian.dangqianyeqianshu == 2 && Guanlijiemian.dangqianyeshu >= this.neiRongZhanShi.huoguoyeshu) {
                        this.but_guanlidown.enabled = false;
                    }
                    this.neiRongZhanShi.chulishujujiajujiegou(Guanlijiemian.dangqianyeqianshu, Guanlijiemian.dangqianyeshu);
                }
                else if (Guanlijiemian.dangqianyeqianshu == 3 && Guanlijiemian.dangqianyeshu < this.neiRongZhanShi.xiaochiyeshu) {
                    Guanlijiemian.dangqianyeshu += 1;
                    this.but_gaunliup.enabled = true;
                    if (Guanlijiemian.dangqianyeqianshu == 3 && Guanlijiemian.dangqianyeshu >= this.neiRongZhanShi.xiaochiyeshu) {
                        this.but_guanlidown.enabled = false;
                    }
                    this.neiRongZhanShi.chulishujujiajujiegou(Guanlijiemian.dangqianyeqianshu, Guanlijiemian.dangqianyeshu);
                }
                else if (Guanlijiemian.dangqianyeqianshu == 4 && Guanlijiemian.dangqianyeshu < this.neiRongZhanShi.dianxinyeshu) {
                    Guanlijiemian.dangqianyeshu += 1;
                    this.but_gaunliup.enabled = true;
                    if (Guanlijiemian.dangqianyeqianshu == 4 && Guanlijiemian.dangqianyeshu >= this.neiRongZhanShi.dianxinyeshu) {
                        this.but_guanlidown.enabled = false;
                    }
                    this.neiRongZhanShi.chulishujujiajujiegou(Guanlijiemian.dangqianyeqianshu, Guanlijiemian.dangqianyeshu);
                }
                this.fanyeyehaoshuaxin();
                break;
            case 2:
                if (Guanlijiemian.dangqianyeqianshu == 1 && Guanlijiemian.dangqianyeshu < this.yuanGongJieMian.yuangongyeshu) {
                    Guanlijiemian.dangqianyeshu += 1;
                    this.but_gaunliup.enabled = true;
                    if (Guanlijiemian.dangqianyeqianshu == 1 && Guanlijiemian.dangqianyeshu >= this.yuanGongJieMian.yuangongyeshu) {
                        this.but_guanlidown.enabled = false;
                    }
                    this.yuanGongJieMian.chulishujujiajujiegou(Guanlijiemian.dangqianyeqianshu, Guanlijiemian.dangqianyeshu);
                }
                this.fanyeyehaoshuaxin();
                break;
            case 3:
                if (Guanlijiemian.dangqianyeqianshu == 1 && Guanlijiemian.dangqianyeshu < 4) {
                    Guanlijiemian.dangqianyeshu += 1;
                    this.but_gaunliup.enabled = true;
                    if (Guanlijiemian.dangqianyeshu >= 4) {
                        this.but_guanlidown.enabled = false;
                    }
                    ;
                    switch (Guanlijiemian.dangqianyeshu) {
                        case 1:
                            this.yichujiajuneirong();
                            this.addChild(this.tuiguangchuandan);
                            this.tuiguangchuandan.chulishujuluoji(Guanlijiemian.dangqianyeqianshu, Guanlijiemian.dangqianyeshu);
                            this.fanyeyehaoshuaxin();
                            break;
                        case 2:
                            this.yichujiajuneirong();
                            this.addChild(this.tuiguangdianshi);
                            this.tuiguangdianshi.chulishujuluoji(Guanlijiemian.dangqianyeqianshu, Guanlijiemian.dangqianyeshu);
                            this.fanyeyehaoshuaxin();
                            break;
                        case 3:
                            this.yichujiajuneirong();
                            this.addChild(this.tuiguangpinglun);
                            this.tuiguangpinglun.chulishujuluoji(Guanlijiemian.dangqianyeqianshu, Guanlijiemian.dangqianyeshu);
                            this.fanyeyehaoshuaxin();
                            break;
                        case 4:
                            this.yichujiajuneirong();
                            this.addChild(this.tuiguangdaiyan);
                            this.tuiguangdaiyan.chulishujuluoji(Guanlijiemian.dangqianyeqianshu, Guanlijiemian.dangqianyeshu);
                            this.fanyeyehaoshuaxin();
                            break;
                    }
                }
                break;
            case 4:
                if (Guanlijiemian.dangqianyeqianshu == 1 && Guanlijiemian.dangqianyeshu < this.danjuJieMian.danjuyeshu) {
                    Guanlijiemian.dangqianyeshu += 1;
                    this.but_gaunliup.enabled = true;
                    if (Guanlijiemian.dangqianyeqianshu == 1 && Guanlijiemian.dangqianyeshu >= this.danjuJieMian.danjuyeshu) {
                        this.but_guanlidown.enabled = false;
                    }
                    this.danjuJieMian.chulishujujiajujiegou(Guanlijiemian.dangqianyeqianshu, Guanlijiemian.dangqianyeshu);
                }
                this.fanyeyehaoshuaxin();
                break;
        }
    };
    //处理翻页文字
    Guanlijiemian.prototype.fanyeyehaoshuaxin = function () {
        switch (Guanlijiemian.dangqianleixing) {
            case 1:
                switch (Guanlijiemian.dangqianyeqianshu) {
                    case 1:
                        this.guanliyemianwenzi.text = "第 " + Guanlijiemian.dangqianyeshu + " / " + this.neiRongZhanShi.xiaochaoyeshu + " 页";
                        break;
                    case 2:
                        this.guanliyemianwenzi.text = "第 " + Guanlijiemian.dangqianyeshu + " / " + this.neiRongZhanShi.huoguoyeshu + " 页";
                        break;
                    case 3:
                        this.guanliyemianwenzi.text = "第 " + Guanlijiemian.dangqianyeshu + " / " + this.neiRongZhanShi.xiaochiyeshu + " 页";
                        break;
                    case 4:
                        this.guanliyemianwenzi.text = "第 " + Guanlijiemian.dangqianyeshu + " / " + this.neiRongZhanShi.dianxinyeshu + " 页";
                        break;
                    default:
                        this.guanliyemianwenzi.text = "第未知页";
                }
                break;
            case 2:
                this.guanliyemianwenzi.text = "第 " + Guanlijiemian.dangqianyeshu + " / " + this.yuanGongJieMian.yuangongyeshu + " 页";
                break;
            case 3:
                this.guanliyemianwenzi.text = "第 " + Guanlijiemian.dangqianyeshu + " / " + "4" + " 页";
                break;
            case 4:
                this.guanliyemianwenzi.text = "第 " + Guanlijiemian.dangqianyeshu + " / " + this.danjuJieMian.danjuyeshu + " 页";
                break;
        }
    };
    //关闭按钮处理
    Guanlijiemian.prototype.guanbianniu = function () {
        Gameguanli.Kongzhitai().caipujiemian("guanli", "guan");
    };
    //初始化管理界面
    Guanlijiemian.prototype.chushihuagaunli = function () {
        this.but_yuangong.enabled = true;
        this.but_yinxiao.enabled = true;
        this.but_danju.enabled = true;
        this.but_zhuangxiu.enabled = false;
        /*this.addChild(this.neiRongZhanShi);
        this.neiRongZhanShi.but_kuaican.enabled = false;
//		console.log(this.neiRongZhanShi.jiajuicon0.source);
        this.neiRongZhanShi.chulishujujiajujiegou(1,1);
        Guanlijiemian.dangqianyeqianshu = 1;
        Guanlijiemian.dangqianyeshu = 1;
        Guanlijiemian.dangqianleixing = 1;
        this.but_guanlidown.enabled = true;	*/
        this.dianjizhuangxiu();
        this.fanyeyehaoshuaxin();
    };
    //点击装修按钮时触发
    Guanlijiemian.prototype.dianjizhuangxiu = function () {
        this.but_yuangong.enabled = true;
        this.but_yinxiao.enabled = true;
        this.but_danju.enabled = true;
        this.but_zhuangxiu.enabled = false;
        this.yichujiajuneirong();
        this.addChild(this.neiRongZhanShi);
        this.neiRongZhanShi.but_kuaican.enabled = false;
        this.neiRongZhanShi.but_huoguo.enabled = true;
        this.neiRongZhanShi.but_xiaochi.enabled = true;
        this.neiRongZhanShi.but_tiandian.enabled = true;
        //		console.log(this.neiRongZhanShi.jiajuicon0.source);
        this.zhuangxiuxiaoyeqianguanli();
        this.neiRongZhanShi.chulishujujiajujiegou(1, 1);
        Guanlijiemian.dangqianyeqianshu = 1;
        Guanlijiemian.dangqianyeshu = 1;
        Guanlijiemian.dangqianleixing = 1;
        this.but_guanlidown.enabled = true;
        this.but_gaunliup.enabled = false;
        this.fanyeyehaoshuaxin();
    };
    ;
    //装修界面的翻页处理逻辑
    Guanlijiemian.prototype.zhuangxiuxiaoyeqianguanli = function () {
        //点击界面的小炒页签按钮时触发
        this.neiRongZhanShi.but_kuaican.addEventListener(egret.TouchEvent.TOUCH_TAP, this.dianjixiaocai, this);
        //点击界面的火锅页签按钮时触发
        this.neiRongZhanShi.but_huoguo.addEventListener(egret.TouchEvent.TOUCH_TAP, this.dianjihuoguo, this);
        //点击界面的小吃页签按钮时触发
        this.neiRongZhanShi.but_xiaochi.addEventListener(egret.TouchEvent.TOUCH_TAP, this.dianjixiaochi, this);
        //点击界面的点心页签按钮时触发
        this.neiRongZhanShi.but_tiandian.addEventListener(egret.TouchEvent.TOUCH_TAP, this.dianjidianxin, this);
    };
    Guanlijiemian.prototype.dianjixiaocai = function () {
        //调用移除当前已显示界面内容；
        if (Gerenshuxing.jiesuoxiaochao == "1") {
            this.neiRongZhanShi.but_kuaican.enabled = false;
            this.neiRongZhanShi.but_huoguo.enabled = true;
            this.neiRongZhanShi.but_xiaochi.enabled = true;
            this.neiRongZhanShi.but_tiandian.enabled = true;
            this.neiRongZhanShi.chulishujujiajujiegou(1, 1);
            Guanlijiemian.dangqianyeqianshu = 1;
            Guanlijiemian.dangqianyeshu = 1;
            Guanlijiemian.dangqianleixing = 1;
            this.but_gaunliup.enabled = false;
            this.but_guanlidown.enabled = true;
        }
        else {
            Gameguanli.Kongzhitai().cuowutishixinxi("小炒区域未解锁，无法查看装修内容！");
        }
    };
    Guanlijiemian.prototype.dianjihuoguo = function () {
        //调用移除当前已显示界面内容；
        if (Gerenshuxing.jiesuohuoguo == "1") {
            this.neiRongZhanShi.but_kuaican.enabled = true;
            this.neiRongZhanShi.but_huoguo.enabled = false;
            this.neiRongZhanShi.but_xiaochi.enabled = true;
            this.neiRongZhanShi.but_tiandian.enabled = true;
            this.neiRongZhanShi.chulishujujiajujiegou(2, 1);
            Guanlijiemian.dangqianyeqianshu = 2;
            Guanlijiemian.dangqianyeshu = 1;
            Guanlijiemian.dangqianleixing = 1;
            this.but_gaunliup.enabled = false;
            this.but_guanlidown.enabled = true;
        }
        else {
            Gameguanli.Kongzhitai().cuowutishixinxi("火锅区域未解锁，无法查看装修内容！");
        }
    };
    Guanlijiemian.prototype.dianjixiaochi = function () {
        //调用移除当前已显示界面内容；
        if (Gerenshuxing.jiesuoxiaochi == "1") {
            this.neiRongZhanShi.but_kuaican.enabled = true;
            this.neiRongZhanShi.but_huoguo.enabled = true;
            this.neiRongZhanShi.but_xiaochi.enabled = false;
            this.neiRongZhanShi.but_tiandian.enabled = true;
            this.neiRongZhanShi.chulishujujiajujiegou(3, 1);
            Guanlijiemian.dangqianyeqianshu = 3;
            Guanlijiemian.dangqianyeshu = 1;
            Guanlijiemian.dangqianleixing = 1;
            this.but_gaunliup.enabled = false;
            this.but_guanlidown.enabled = true;
        }
        else {
            Gameguanli.Kongzhitai().cuowutishixinxi("小吃区域未解锁，无法查看装修内容！");
        }
    };
    Guanlijiemian.prototype.dianjidianxin = function () {
        //调用移除当前已显示界面内容；
        if (Gerenshuxing.jiesuozaocan == "1") {
            this.neiRongZhanShi.but_kuaican.enabled = true;
            this.neiRongZhanShi.but_huoguo.enabled = true;
            this.neiRongZhanShi.but_xiaochi.enabled = true;
            this.neiRongZhanShi.but_tiandian.enabled = false;
            this.neiRongZhanShi.chulishujujiajujiegou(4, 1);
            Guanlijiemian.dangqianyeqianshu = 4;
            Guanlijiemian.dangqianyeshu = 1;
            Guanlijiemian.dangqianleixing = 1;
            this.but_gaunliup.enabled = false;
            this.but_guanlidown.enabled = true;
        }
        else {
            Gameguanli.Kongzhitai().cuowutishixinxi("早餐区域未解锁，无法查看装修内容！");
        }
    };
    //点击员工按钮时触发
    Guanlijiemian.prototype.dianjiyuangong = function () {
        this.but_yuangong.enabled = false;
        this.but_yinxiao.enabled = true;
        this.but_danju.enabled = true;
        this.but_zhuangxiu.enabled = true;
        this.yichujiajuneirong();
        this.addChild(this.yuanGongJieMian);
        this.yuanGongJieMian.chulishujujiajujiegou(1, 1);
        Guanlijiemian.dangqianyeqianshu = 1;
        Guanlijiemian.dangqianyeshu = 1;
        Guanlijiemian.dangqianleixing = 2;
        this.but_guanlidown.enabled = true;
        this.but_gaunliup.enabled = false;
        this.fanyeyehaoshuaxin();
    };
    ;
    //点击营销按钮时触发
    Guanlijiemian.prototype.dianjiyinxiao = function () {
        this.but_yuangong.enabled = true;
        this.but_yinxiao.enabled = false;
        this.but_danju.enabled = true;
        this.but_zhuangxiu.enabled = true;
        this.yichujiajuneirong();
        this.addChild(this.tuiguangchuandan);
        this.tuiguangchuandan.chulishujuluoji(0, 0);
        Guanlijiemian.dangqianyeqianshu = 1;
        Guanlijiemian.dangqianyeshu = 1;
        Guanlijiemian.dangqianleixing = 3;
        this.but_guanlidown.enabled = true;
        this.but_gaunliup.enabled = false;
        this.fanyeyehaoshuaxin();
    };
    ;
    //点击单据按钮时触发
    Guanlijiemian.prototype.dianjidanju = function () {
        this.but_yuangong.enabled = true;
        this.but_yinxiao.enabled = true;
        this.but_danju.enabled = false;
        this.but_zhuangxiu.enabled = true;
        this.yichujiajuneirong();
        this.addChild(this.danjuJieMian);
        this.danjuJieMian.chulishujujiajujiegou(1, 1);
        Guanlijiemian.dangqianyeqianshu = 1;
        Guanlijiemian.dangqianyeshu = 1;
        Guanlijiemian.dangqianleixing = 4;
        this.but_guanlidown.enabled = true;
        this.but_gaunliup.enabled = false;
        this.fanyeyehaoshuaxin();
    };
    ;
    //移除家具显示列表内容；
    Guanlijiemian.prototype.yichujiajuneirong = function () {
        if (this.neiRongZhanShi.parent) {
            this.removeChild(this.neiRongZhanShi);
        }
        if (this.yuanGongJieMian.parent) {
            this.removeChild(this.yuanGongJieMian);
        }
        if (this.tuiguangchuandan.parent) {
            this.removeChild(this.tuiguangchuandan);
        }
        if (this.tuiguangdianshi.parent) {
            this.removeChild(this.tuiguangdianshi);
        }
        if (this.tuiguangpinglun.parent) {
            this.removeChild(this.tuiguangpinglun);
        }
        if (this.tuiguangdaiyan.parent) {
            this.removeChild(this.tuiguangdaiyan);
        }
        if (this.danjuJieMian.parent) {
            this.removeChild(this.danjuJieMian);
        }
    };
    Guanlijiemian.dangqianyeqianshu = 1;
    Guanlijiemian.dangqianyeshu = 1;
    Guanlijiemian.dangqianleixing = 1;
    return Guanlijiemian;
}(eui.Component));
__reflect(Guanlijiemian.prototype, "Guanlijiemian", ["eui.UIComponent", "egret.DisplayObject"]);
//# sourceMappingURL=Guanlijiemian.js.map