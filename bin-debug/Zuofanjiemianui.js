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
var Zuofanjiemianui = (function (_super) {
    __extends(Zuofanjiemianui, _super);
    function Zuofanjiemianui() {
        var _this = _super.call(this) || this;
        _this.shengyushijian = 0;
        _this.zhuandong = 0;
        _this.keshibaicishu = 0;
        //	public zhengshiliebiao:any;
        _this.jindu = 0;
        _this.dangqianjindu = 0;
        _this.dangqianbuzou = 0;
        _this.buzouhao = 0;
        _this.xuqiuleixing1 = 0;
        _this.xuqiumubiao1 = 0;
        _this.fengezu1 = [];
        _this.xuqiuleixing2 = 0;
        _this.xuqiumubiao2 = 0;
        _this.fengezu2 = [];
        _this.xuqiuleixing3 = 0;
        _this.xuqiumubiao3 = 0;
        _this.fengezu3 = [];
        _this.zhengquejieduan = 0;
        _this.xianshicai1 = "";
        _this.xianshicai2 = "";
        _this.xianshicai3 = "";
        _this.zhengquequjian = 0;
        _this.zhuandongfangxiang = 1;
        _this.dingshikaiguan = true;
        return _this;
        //		this.chushihua();
    }
    Zuofanjiemianui.prototype.partAdded = function (partName, instance) {
        _super.prototype.partAdded.call(this, partName, instance);
    };
    Zuofanjiemianui.prototype.childrenCreated = function () {
        _super.prototype.childrenCreated.call(this);
    };
    Zuofanjiemianui.prototype.chushihua = function (id) {
        var shijianbiao = RES.getRes("shipubiao_json");
        for (var i = 0; i < shijianbiao.length; i++) {
            if (shijianbiao[i].id == id) {
                this.shengyushijian = parseInt(shijianbiao[i].timeyaoqiu);
                this.zhuandong = parseInt(shijianbiao[i].zhuangdong);
                this.keshibaicishu = parseInt(shijianbiao[i].shibaishu);
                this.yaoqiuliebiao = shijianbiao[i].zuofan;
                this.tupian = shijianbiao[i].id;
            }
        }
        this.yaoqiuliebiao = this.yaoqiuliebiao.split(",");
        this.but_queding.addEventListener(egret.TouchEvent.TOUCH_TAP, this.queding, this);
        this.youbiao.x = this.jindutiao.x;
        this.youbiao.y = this.jindutiao.y;
        this.gongxupailie();
        this.shijianjisuan();
        this.donghuakai("kai");
        /*		this.gundongdingshi = new egret.Timer(500,0);
                this.gundongdingshi.addEventListener(egret.TimerEvent.TIMER,this.kaishishijian,this);*/
    };
    Zuofanjiemianui.prototype.dingbuxianshi = function () {
        this.shijianwenzi.text = "" + Math.floor(this.shengyushijian / 60) + ":" + this.shengyushijian % 60;
        this.caocaijinduwenzi.text = "" + this.dangqianjindu / this.yaoqiuliebiao.length * 100 + "%";
        this.shiwucishuwenzi.text = "" + this.keshibaicishu;
    };
    Zuofanjiemianui.prototype.shijianjisuan = function () {
        this.jishiqi = null;
        if (this.dingshikaiguan == true) {
            if (this.keshibaicishu <= 0) {
                Gerenshuxing.zuocaichenggong = "false";
                this.fankuijiemian("shibai");
            }
            else if (this.shengyushijian > 0) {
                this.jishiqi = new egret.Timer(1000, 1);
                this.jishiqi.addEventListener(egret.TimerEvent.TIMER, this.kaishishijian, this);
                this.jishiqi.start();
            }
            else {
                Gerenshuxing.zuocaichenggong = "false";
                this.fankuijiemian("shibai");
            }
        }
    };
    Zuofanjiemianui.prototype.kaishishijian = function () {
        this.shengyushijian -= 1;
        this.dingbuxianshi();
        this.shijianjisuan();
    };
    Zuofanjiemianui.prototype.guanbi = function () {
        Gameguanli.Kongzhitai().zuofanjiemian("guan");
        this.jishiqi.stop();
        this.jishiqi = null;
        this.dingshikaiguan = false;
    };
    Zuofanjiemianui.prototype.gongxupailie = function () {
        if (this.dangqianbuzou >= this.yaoqiuliebiao.length - 1) {
            this.dangqianbuzou = -1;
        }
        switch (this.dangqianbuzou) {
            case -1:
                this.weilaitishi.alpha = 0;
                this.dangqiantishi.alpha = 1;
                this.xiaoshitishi.alpha = 1;
                this.weilaitishitu.source = "";
                this.fengezu1 = this.yaoqiuliebiao[this.yaoqiuliebiao.length - 1].split(":");
                this.xuqiuleixing1 = this.fengezu1[0];
                this.xuqiumubiao1 = this.fengezu1[1];
                this.fengezu2 = this.yaoqiuliebiao[this.yaoqiuliebiao.length - 2].split(":");
                this.xuqiuleixing2 = this.fengezu2[0];
                this.xuqiumubiao2 = this.fengezu2[1];
                this.leixingfenzu1();
                this.leixingfenzu2();
                //				this.leixingfenzu3();
                break;
            case 0:
                this.weilaitishi.alpha = 1;
                this.dangqiantishi.alpha = 1;
                this.xiaoshitishi.alpha = 0;
                this.xiaoshitishitu.source = "";
                this.fengezu1 = this.yaoqiuliebiao[this.dangqianbuzou].split(":");
                this.xuqiuleixing1 = this.fengezu1[0];
                this.xuqiumubiao1 = this.fengezu1[1];
                this.fengezu3 = this.yaoqiuliebiao[this.dangqianbuzou + 1].split(":");
                this.xuqiuleixing3 = this.fengezu3[0];
                this.xuqiumubiao3 = this.fengezu3[1];
                this.leixingfenzu1();
                //				this.leixingfenzu2();
                this.leixingfenzu3();
                break;
            default:
                this.weilaitishi.alpha = 1;
                this.dangqiantishi.alpha = 1;
                this.xiaoshitishi.alpha = 1;
                this.fengezu1 = this.yaoqiuliebiao[this.dangqianbuzou].split(":");
                this.xuqiuleixing1 = this.fengezu1[0];
                this.xuqiumubiao1 = this.fengezu1[1];
                this.fengezu2 = this.yaoqiuliebiao[this.dangqianbuzou - 1].split(":");
                this.xuqiuleixing2 = this.fengezu2[0];
                this.xuqiumubiao2 = this.fengezu2[1];
                this.fengezu3 = this.yaoqiuliebiao[this.dangqianbuzou + 1].split(":");
                this.xuqiuleixing3 = this.fengezu3[0];
                this.xuqiumubiao3 = this.fengezu3[1];
                this.leixingfenzu1();
                this.leixingfenzu2();
                this.leixingfenzu3();
                break;
        }
    };
    Zuofanjiemianui.prototype.gundongdonghua = function () {
        var _this = this;
        if (this.zhuandongfangxiang == 1) {
            egret.Tween.get(this.youbiao).to({ x: this.jindutiao.x + this.jindutiao.width - this.youbiao.width, y: this.jindutiao.y }, this.zhuandong)
                .call(function () {
                _this.zhuandongfangxiang = -1;
                _this.donghuakai("kai");
            });
        }
        else if (this.zhuandongfangxiang == -1) {
            egret.Tween.get(this.youbiao).to({ x: this.jindutiao.x, y: this.jindutiao.y }, this.zhuandong)
                .call(function () {
                _this.zhuandongfangxiang = 1;
                _this.donghuakai("kai");
            });
        }
    };
    Zuofanjiemianui.prototype.queding = function () {
        if (this.keshibaicishu > 0) {
            if (this.youbiao.x <= this.jindutiao.x + this.jindutiao.width / 3 && this.youbiao.x >= 0) {
                if (this.zhengquejieduan == 1) {
                    this.dangqianjindu += 1;
                    this.dangqianbuzou += 1;
                    this.gongxupailie();
                    Gameguanli.Kongzhitai().cuowutishixinxi("正确的操作方式，烹饪进度+1");
                    this.tanchuwenzi("dui");
                    this.panduanwancheng();
                }
                else {
                    this.keshibaicishu -= 1;
                    Gameguanli.Kongzhitai().cuowutishixinxi("错误的操作方式，失败次数+1");
                    this.tanchuwenzi("cuo");
                    this.panduanwancheng();
                }
            }
            else if (this.youbiao.x <= this.jindutiao.x + this.jindutiao.width / 2 && this.youbiao.x > this.jindutiao.x + this.jindutiao.width / 3) {
                if (this.zhengquejieduan == 2) {
                    this.dangqianjindu += 1;
                    this.dangqianbuzou += 1;
                    this.gongxupailie();
                    Gameguanli.Kongzhitai().cuowutishixinxi("正确的操作方式，烹饪进度+1");
                    this.tanchuwenzi("dui");
                    this.panduanwancheng();
                }
                else {
                    this.keshibaicishu -= 1;
                    Gameguanli.Kongzhitai().cuowutishixinxi("错误的操作方式，失败次数+1");
                    this.tanchuwenzi("cuo");
                    this.panduanwancheng();
                }
            }
            else if (this.youbiao.x > this.jindutiao.x + this.jindutiao.width / 2) {
                if (this.zhengquejieduan == 3) {
                    this.dangqianjindu += 1;
                    this.dangqianbuzou += 1;
                    this.gongxupailie();
                    Gameguanli.Kongzhitai().cuowutishixinxi("正确的操作方式，烹饪进度+1");
                    this.tanchuwenzi("dui");
                    this.panduanwancheng();
                }
                else {
                    this.keshibaicishu -= 1;
                    Gameguanli.Kongzhitai().cuowutishixinxi("错误的操作方式，失败次数+1");
                    this.tanchuwenzi("cuo");
                    this.panduanwancheng();
                }
            }
        }
    };
    Zuofanjiemianui.prototype.tanchuwenzi = function (canshu) {
        if (canshu == "dui") {
            var ziyuanming_1 = new Zuocaitanchuui();
            Gameguanli.Kongzhitai().zuofanui.addChild(ziyuanming_1);
            var suijizhi = Math.floor(Math.random() * 3) + 1;
            var tupian = "";
            switch (suijizhi) {
                case 1:
                    ziyuanming_1.tishitupian.source = "img_chenggong1_png";
                    break;
                case 2:
                    ziyuanming_1.tishitupian.source = "img_chenggong2_png";
                    break;
                case 3:
                    ziyuanming_1.tishitupian.source = "img_chenggong3_png";
                    break;
            }
            ziyuanming_1.x = this.img_xiaceng.width / 2 - ziyuanming_1.width / 2;
            ziyuanming_1.y = this.img_xiaceng.height / 2 + ziyuanming_1.height / 2;
            egret.Tween.get(ziyuanming_1).to({ x: ziyuanming_1.x, y: ziyuanming_1.y - 200 }, 2000).call(function () {
                Gameguanli.Kongzhitai().zuofanui.removeChild(ziyuanming_1);
            });
        }
        if (canshu == "cuo") {
            var ziyuanming_2 = new Zuocaitanchuui();
            Gameguanli.Kongzhitai().zuofanui.addChild(ziyuanming_2);
            var suijizhi = Math.floor(Math.random() * 3) + 1;
            var tupian = "";
            switch (suijizhi) {
                case 1:
                    ziyuanming_2.tishitupian.source = "img_shibai1_png";
                    break;
                case 2:
                    ziyuanming_2.tishitupian.source = "img_shibai2_png";
                    break;
                case 3:
                    ziyuanming_2.tishitupian.source = "img_shibai3_png";
                    break;
            }
            ziyuanming_2.x = this.img_xiaceng.width / 2 - ziyuanming_2.width / 2;
            ziyuanming_2.y = this.img_xiaceng.height / 2 + ziyuanming_2.height / 2;
            egret.Tween.get(ziyuanming_2).to({ x: ziyuanming_2.x, y: ziyuanming_2.y - 200 }, 2000).call(function () {
                Gameguanli.Kongzhitai().zuofanui.removeChild(ziyuanming_2);
            });
        }
    };
    Zuofanjiemianui.prototype.panduanwancheng = function () {
        if (this.dangqianjindu >= this.yaoqiuliebiao.length) {
            Gerenshuxing.zuocaichenggong = "true";
            this.fankuijiemian("chenggong");
        }
    };
    Zuofanjiemianui.prototype.fankuijiemian = function (shifouchenggon) {
        var jianglijiemain = new Pengrenfankuiui();
        Gameguanli.Kongzhitai().zuofanui.addChild(jianglijiemain);
        jianglijiemain.jiangliicon0.source = this.tupian + "_png";
        jianglijiemain.qudinganniu0.addEventListener(egret.TouchEvent.TOUCH_TAP, this.guanbi, this);
        if (shifouchenggon == "chenggong") {
            jianglijiemain.img_jianglibiaoti0.source = "img_pengrenchenggong_png";
            jianglijiemain.jianglishuliang0.text = "这道菜烹饪得很成功，食客实用后评价颇高！";
        }
        else if (shifouchenggon == "shibai") {
            jianglijiemain.img_jianglibiaoti0.source = "img_pengrenshibai_png";
            jianglijiemain.jianglishuliang0.text = "这道菜烹饪没有完成，食客仍在焦急等待！";
        }
    };
    Zuofanjiemianui.prototype.donghuakai = function (num2) {
        if (num2 == "kai") {
            this.gundongdonghua();
        }
    };
    Zuofanjiemianui.prototype.leixingfenzu1 = function () {
        if (this.xuqiuleixing1 == "1") {
            this.xianshicai1 = "img_xiaohuo_png";
            this.xianshicai2 = "img_zhonghuo_png";
            this.xianshicai3 = "img_dahuo_png";
            this.lvsexuanxiang.source = "img_xiaohuo_png";
            this.zisexuanxiang.source = "img_zhonghuo_png";
            this.chengsexuanxiang.source = "img_dahuo_png";
            switch (this.xuqiumubiao1) {
                case "1":
                    this.dangqiantishitu.source = "img_xiaohuo_png";
                    this.zhengquejieduan = 1;
                    break;
                case "2":
                    this.dangqiantishitu.source = "img_zhonghuo_png";
                    this.zhengquejieduan = 2;
                    break;
                case "3":
                    this.dangqiantishitu.source = "img_dahuo_png";
                    this.zhengquejieduan = 3;
                    break;
            }
        }
        else if (this.xuqiuleixing1 == "2") {
            this.xianshicai1 = "img_baicai1_png";
            this.xianshicai2 = "img_lajiao_png";
            this.xianshicai3 = "img_rou1_png";
            this.lvsexuanxiang.source = "img_baicai1_png";
            this.zisexuanxiang.source = "img_lajiao_png";
            this.chengsexuanxiang.source = "img_rou1_png";
            switch (this.xuqiumubiao1) {
                case "1":
                    this.dangqiantishitu.source = "img_baicai1_png";
                    this.zhengquejieduan = 1;
                    break;
                case "2":
                    this.dangqiantishitu.source = "img_lajiao_png";
                    this.zhengquejieduan = 2;
                    break;
                case "3":
                    this.dangqiantishitu.source = "img_rou1_png";
                    this.zhengquejieduan = 3;
                    break;
            }
        }
    };
    Zuofanjiemianui.prototype.leixingfenzu2 = function () {
        if (this.xuqiuleixing2 == "1") {
            this.xianshicai1 = "img_xiaohuo_png";
            this.xianshicai2 = "img_zhonghuo_png";
            this.xianshicai3 = "img_dahuo_png";
            switch (this.xuqiumubiao2) {
                case "1":
                    this.xiaoshitishitu.source = "img_xiaohuo_png";
                    break;
                case "2":
                    this.xiaoshitishitu.source = "img_zhonghuo_png";
                    break;
                case "3":
                    this.xiaoshitishitu.source = "img_dahuo_png";
                    break;
            }
        }
        else if (this.xuqiuleixing2 == "2") {
            this.xianshicai1 = "img_baicai1_png";
            this.xianshicai2 = "img_lajiao_png";
            this.xianshicai3 = "img_rou1_png";
            switch (this.xuqiumubiao2) {
                case "1":
                    this.xiaoshitishitu.source = "img_baicai1_png";
                    break;
                case "2":
                    this.xiaoshitishitu.source = "img_lajiao_png";
                    break;
                case "3":
                    this.xiaoshitishitu.source = "img_rou1_png";
                    break;
            }
        }
    };
    Zuofanjiemianui.prototype.leixingfenzu3 = function () {
        if (this.xuqiuleixing3 == "1") {
            this.xianshicai1 = "img_xiaohuo_png";
            this.xianshicai2 = "img_zhonghuo_png";
            this.xianshicai3 = "img_dahuo_png";
            switch (this.xuqiumubiao3) {
                case "1":
                    this.weilaitishitu.source = "img_xiaohuo_png";
                    break;
                case "2":
                    this.weilaitishitu.source = "img_zhonghuo_png";
                    break;
                case "3":
                    this.weilaitishitu.source = "img_dahuo_png";
                    break;
            }
        }
        else if (this.xuqiuleixing3 == "2") {
            this.xianshicai1 = "img_baicai1_png";
            this.xianshicai2 = "img_lajiao_png";
            this.xianshicai3 = "img_rou1_png";
            switch (this.xuqiumubiao3) {
                case "1":
                    this.weilaitishitu.source = "img_baicai1_png";
                    break;
                case "2":
                    this.weilaitishitu.source = "img_lajiao_png";
                    break;
                case "3":
                    this.weilaitishitu.source = "img_rou1_png";
                    break;
            }
        }
    };
    return Zuofanjiemianui;
}(eui.Component));
__reflect(Zuofanjiemianui.prototype, "Zuofanjiemianui", ["eui.UIComponent", "egret.DisplayObject"]);
//# sourceMappingURL=Zuofanjiemianui.js.map