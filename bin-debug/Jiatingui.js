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
        //		this.butun_guizi.touchEnabled = true;
        //		this.butun_guizi.addEventListener(egret.TouchEvent.TOUCH_TAP,this.dianjiguizi,this);
        //		this.butun_shuzhuo.touchEnabled = true;
        //		this.butun_shuzhuo.addEventListener(egret.TouchEvent.TOUCH_TAP,this.dianjishuzhuo,this);
        this.butun_dianshi.touchEnabled = true;
        this.butun_dianshi.addEventListener(egret.TouchEvent.TOUCH_TAP, this.dianjidianshi, this);
        this.butun_chaji.touchEnabled = true;
        this.butun_chaji.addEventListener(egret.TouchEvent.TOUCH_TAP, this.dianjichaji, this);
        this.butun_shafa.touchEnabled = true;
        this.butun_shafa.addEventListener(egret.TouchEvent.TOUCH_TAP, this.dianjishafa, this);
        this.butun_shafa0.touchEnabled = true;
        this.butun_shafa0.addEventListener(egret.TouchEvent.TOUCH_TAP, this.dianjishafa, this);
        //		this.butun_maowo.touchEnabled = true;
        //		this.butun_maowo.addEventListener(egret.TouchEvent.TOUCH_TAP,this.dianjimaowo,this);
        this.jiatingchengyuanxianshi();
    };
    Jiatingui.prototype.dianjichuang = function () {
        var _this = this;
        egret.Tween.get(this.but_chuang).to({ scaleX: 1.1, scaleY: 1.1 }, 500).call(function () {
            egret.Tween.get(_this.but_chuang).to({ scaleX: 1, scaleY: 1 }, 500);
        });
        this.chuangjiaohu = new Chuangjiaohuui();
        Gameguanli.Kongzhitai().jiatingjiemian.addChild(this.chuangjiaohu);
        this.chuangjiaohu.chuangguanbi.touchEnabled = true;
        this.chuangjiaohu.chuangguanbi.addEventListener(egret.TouchEvent.TOUCH_TAP, this.guanbichuang, this);
        this.chuangjiaohu.chuangchakan.enabled = true;
        this.chuangjiaohu.chuangjinxiu.enabled = true;
        this.chuangjiaohu.chuangzengsong.enabled = true;
        this.chuangjiaohu.chuangchakan.addEventListener(egret.TouchEvent.TOUCH_TAP, this.chuangck, this);
        this.chuangjiaohu.chuangjinxiu.addEventListener(egret.TouchEvent.TOUCH_TAP, this.chuanggz, this);
        this.chuangjiaohu.chuangzengsong.addEventListener(egret.TouchEvent.TOUCH_TAP, this.chuangzs, this);
        this.jiatingchengyuanbiao = RES.getRes("jiatingchengyuanbiao_json");
    };
    Jiatingui.prototype.guanbichuang = function () {
        Gameguanli.Kongzhitai().jiatingjiemian.removeChild(this.chuangjiaohu);
    };
    Jiatingui.prototype.chuangck = function () {
        if (Gameguanli.Kongzhitai().jiatingjiemian.chuangjiaohu.parent) {
            if (this.chuangjiaohu.chuangchakan.enabled == false || this.chuangjiaohu.chuangjinxiu.enabled == false || this.chuangjiaohu.chuangzengsong.enabled == false) {
                Gameguanli.Kongzhitai().jiatingjiemian.chuangjiaohu.removeChild(this.erjitanchuui);
            }
            this.erjitanchuui = new Jiatingchengyuanjieshaoui();
            Gameguanli.Kongzhitai().jiatingjiemian.chuangjiaohu.addChild(this.erjitanchuui);
            this.chuangjiaohu.chuangchakan.enabled = false;
            this.chuangjiaohu.chuangjinxiu.enabled = true;
            this.chuangjiaohu.chuangzengsong.enabled = true;
            this.erjitanchuui.x = this.chuangjiaohu.chuangbeijing.x + this.chuangjiaohu.chuangbeijing.width;
            this.erjitanchuui.y = this.chuangjiaohu.chuangbeijing.y;
            this.erjitanchuui.biaotiwenzi.text = "介绍";
            this.erjitanchuui.guanxibiaoqian.text = "名称";
            this.erjitanchuui.qinhelibiaoqian.text = "普通睡眠";
            this.erjitanchuui.gongzuobiaoqian.text = "药物助眠";
            this.erjitanchuui.jiesaobiaoqian.text = "说明";
            for (var i = 0; i < this.jiatingchengyuanbiao.length; i++) {
                if (this.jiatingchengyuanbiao[i].id == "5") {
                    this.erjitanchuui.guanxineirong.text = "" + this.jiatingchengyuanbiao[i].chengyuanming;
                    this.erjitanchuui.qinghelizhi.text = "健康 + " + this.jiatingchengyuanbiao[i].qinghezhi;
                    this.erjitanchuui.gongzuozhi.text = "健康 + " + this.jiatingchengyuanbiao[i].gongzuonengli;
                    this.erjitanchuui.jiesaoneirong.text = "" + this.jiatingchengyuanbiao[i].shuoming;
                    break;
                }
            }
        }
    };
    Jiatingui.prototype.chuanggz = function () {
        if (Gameguanli.Kongzhitai().jiatingjiemian.chuangjiaohu.parent) {
            if (this.chuangjiaohu.chuangchakan.enabled == false || this.chuangjiaohu.chuangjinxiu.enabled == false || this.chuangjiaohu.chuangzengsong.enabled == false) {
                Gameguanli.Kongzhitai().jiatingjiemian.chuangjiaohu.removeChild(this.erjitanchuui);
            }
            this.erjitanchuui = new Shafadianshidengjiaohuui();
            Gameguanli.Kongzhitai().jiatingjiemian.chuangjiaohu.addChild(this.erjitanchuui);
            this.chuangjiaohu.chuangchakan.enabled = true;
            this.chuangjiaohu.chuangjinxiu.enabled = false;
            this.chuangjiaohu.chuangzengsong.enabled = true;
            this.erjitanchuui.x = this.chuangjiaohu.chuangbeijing.x + this.chuangjiaohu.chuangbeijing.width;
            this.erjitanchuui.y = this.chuangjiaohu.chuangbeijing.y;
            this.erjitanchuui.biaotiwenzi0.text = "普通睡眠";
            this.erjitanchuui.guanxibiaoqian0.text = "效果";
            this.erjitanchuui.guanxineirong0.text = "加少量健康";
            this.erjitanchuui.qinhelibiaoqian0.text = "睡眠时长";
            var shuimianshijian = Gerenshuxing.xianshishijian;
            if (shuimianshijian >= 6) {
                shuimianshijian = 24 - shuimianshijian + 6;
            }
            else {
                shuimianshijian = 6 - shuimianshijian;
            }
            this.erjitanchuui.qinghelizhi0.text = shuimianshijian + "小时";
            this.erjitanchuui.jiesaobiaoqian0.text = "说明";
            this.erjitanchuui.jiesaoneirong0.text = "1.睡眠完成后，根据当前的心情值决定本次睡眠的质量。\n2.睡眠的质量越高，恢复的健康值越多。\n3.睡眠时长也可提高本次恢复的健康值。";
            this.erjitanchuui.qurenanniu.enabled = true;
            this.erjitanchuui.qurenanniu.label = "睡眠";
            this.erjitanchuui.qurenanniu.addEventListener(egret.TouchEvent.TOUCH_TAP, this.dianjiputongshuimian, this);
        }
    };
    Jiatingui.prototype.dianjiputongshuimian = function () {
        var _this = this;
        var shuimianshijian = Gerenshuxing.xianshishijian;
        if (shuimianshijian >= 5 && shuimianshijian < 21) {
            Gameguanli.Kongzhitai().cuowutishixinxi("现在睡觉还有早，趁着家人在，多陪陪家人吧！");
        }
        else {
            if (shuimianshijian >= 8) {
                shuimianshijian = 24 - shuimianshijian + 6;
            }
            else {
                shuimianshijian = 6 - shuimianshijian;
            }
            this.guanbichuang();
            var guoduchangjing_1 = new Dianpurukou();
            Gameguanli.Kongzhitai().dingbuui.addChild(guoduchangjing_1);
            guoduchangjing_1.jinruwenzi.text = "你缓缓进入了睡眠...";
            egret.Tween.get(guoduchangjing_1.jinruwenzi).to({ alpha: 0 }, 1500).call(function () {
                if (Gerenshuxing.kaixinzhi >= 0 && Gerenshuxing.kaixinzhi < 100) {
                    guoduchangjing_1.jinruwenzi.text = "你的心情很糟糕，家庭不和谐，生活一团糟，焦虑使你五味杂陈，几乎彻夜未眠...";
                }
                else if (Gerenshuxing.kaixinzhi >= 100 && Gerenshuxing.kaixinzhi < 200) {
                    guoduchangjing_1.jinruwenzi.text = "你的心情不太好，家人似乎对你不太亲近，致使你在床上胡思乱想，差点失眠...";
                }
                else if (Gerenshuxing.kaixinzhi >= 200 && Gerenshuxing.kaixinzhi < 300) {
                    guoduchangjing_1.jinruwenzi.text = "你的心情很一般，躺在床上的你依然与平常一样，为了家人的生活担忧，你在床上辗转反侧,久久未能睡着...";
                }
                else if (Gerenshuxing.kaixinzhi >= 300 && Gerenshuxing.kaixinzhi < 400) {
                    guoduchangjing_1.jinruwenzi.text = "你的心情不错，家庭和睦使你不必有太多的担忧，躺在床上很快便进入了梦乡...";
                }
                else {
                    guoduchangjing_1.jinruwenzi.text = "你的心情非常好，家庭和睦，事业也一帆风顺，你陷入了沉睡，睡梦中又浮现出年轻时的开心回忆...";
                }
                egret.Tween.get(guoduchangjing_1.jinruwenzi).to({ alpha: 1 }, 1500).wait(2000).call(function () {
                    egret.Tween.get(guoduchangjing_1.jinruwenzi).to({ alpha: 0 }, 1500).call(function () {
                        var jianglishuliang = 0;
                        for (var i = 0; i < _this.jiatingchengyuanbiao.length; i++) {
                            if (_this.jiatingchengyuanbiao[i].id == "5") {
                                jianglishuliang = parseInt(_this.jiatingchengyuanbiao[i].qinghezhi) + Math.floor(Gerenshuxing.kaixinzhi / 100) * shuimianshijian;
                                break;
                            }
                        }
                        if (shuimianshijian >= 0 && shuimianshijian < 2) {
                            guoduchangjing_1.jinruwenzi.text = "本次睡眠时间为" + shuimianshijian + "个小时，睡眠严重不足！对健康影响很大！";
                        }
                        else if (shuimianshijian >= 2 && shuimianshijian < 4) {
                            guoduchangjing_1.jinruwenzi.text = "本次睡眠时间为" + shuimianshijian + "个小时，睡眠不足！对健康影响较大！";
                        }
                        else if (shuimianshijian >= 4 && shuimianshijian < 6) {
                            guoduchangjing_1.jinruwenzi.text = "本次睡眠时间为" + shuimianshijian + "个小时，睡眠较短！对健康影响一般！";
                        }
                        else {
                            guoduchangjing_1.jinruwenzi.text = "本次睡眠时间为" + shuimianshijian + "个小时，睡眠充足！能有效提高身体健康！";
                        }
                        Weblianjie.fasongshuju("code:086", "{" + '"uid"' + ":" + '"' + Gerenshuxing.uid + '"' + ","
                            + '"kouchuleixing"' + ":" + '"0"' + ","
                            + '"kouchushuliang"' + ":" + '"0"' + ","
                            + '"leixing"' + ":" + '"3"' + ","
                            + '"shuliang"' + ":" + '"' + jianglishuliang + '"' + ","
                            + '"shijianzengjia"' + ":" + '"' + shuimianshijian + '"' + ","
                            + '"beishu"' + ":" + '"1"' + "}");
                        egret.Tween.get(guoduchangjing_1.jinruwenzi).to({ alpha: 1 }, 1500).wait(2000).call(function () {
                            egret.Tween.get(guoduchangjing_1.jinruwenzi).to({ alpha: 0 }, 1500).call(function () {
                                guoduchangjing_1.jinruwenzi.text = "随着闹钟的响起，你的睡眠结束了，新的一天又开始了！";
                                egret.Tween.get(guoduchangjing_1.jinruwenzi).to({ alpha: 1 }, 1500).wait(2000).call(function () {
                                    egret.Tween.get(guoduchangjing_1.jinruwenzi).to({ alpha: 0 }, 1500).call(function () {
                                        Gameguanli.Kongzhitai().dingbuui.removeChild(guoduchangjing_1);
                                    });
                                });
                            });
                        });
                    });
                });
            });
        }
    };
    Jiatingui.prototype.chuangzs = function () {
        if (Gameguanli.Kongzhitai().jiatingjiemian.chuangjiaohu.parent) {
            if (this.chuangjiaohu.chuangchakan.enabled == false || this.chuangjiaohu.chuangjinxiu.enabled == false || this.chuangjiaohu.chuangzengsong.enabled == false) {
                Gameguanli.Kongzhitai().jiatingjiemian.chuangjiaohu.removeChild(this.erjitanchuui);
            }
            this.erjitanchuui = new Shafadianshidengjiaohuui();
            Gameguanli.Kongzhitai().jiatingjiemian.chuangjiaohu.addChild(this.erjitanchuui);
            this.chuangjiaohu.chuangchakan.enabled = true;
            this.chuangjiaohu.chuangjinxiu.enabled = true;
            this.chuangjiaohu.chuangzengsong.enabled = false;
            this.erjitanchuui.x = this.chuangjiaohu.chuangbeijing.x + this.chuangjiaohu.chuangbeijing.width;
            this.erjitanchuui.y = this.chuangjiaohu.chuangbeijing.y;
            this.erjitanchuui.biaotiwenzi0.text = "药物助眠";
            this.erjitanchuui.guanxibiaoqian0.text = "效果";
            this.erjitanchuui.guanxineirong0.text = "加大量健康";
            this.erjitanchuui.qinhelibiaoqian0.text = "睡眠时长";
            var shuimianshijian = Gerenshuxing.xianshishijian;
            if (shuimianshijian >= 6) {
                shuimianshijian = 24 - shuimianshijian + 6;
            }
            else {
                shuimianshijian = 6 - shuimianshijian;
            }
            this.erjitanchuui.qinghelizhi0.text = shuimianshijian + "小时";
            this.erjitanchuui.jiesaobiaoqian0.text = "说明";
            this.erjitanchuui.jiesaoneirong0.text = "1.睡眠完成后，根据当前的心情值决定本次睡眠的质量。\n2.使用药物睡眠增加的健康值为普通的2倍。\n3.使用药物虽然能强迫进入睡眠，但其实并不提倡。";
            this.erjitanchuui.qurenanniu.enabled = true;
            this.erjitanchuui.qurenanniu.label = "睡眠（广告）";
            this.erjitanchuui.qurenanniu.addEventListener(egret.TouchEvent.TOUCH_TAP, this.dianjiyaowushuimian, this);
        }
    };
    Jiatingui.prototype.dianjiyaowushuimian = function () {
        var _this = this;
        var shuimianshijian = Gerenshuxing.xianshishijian;
        if (shuimianshijian >= 5 && shuimianshijian < 21) {
            Gameguanli.Kongzhitai().cuowutishixinxi("现在睡觉还有早，趁着家人在，多陪陪家人吧！");
        }
        else {
            if (shuimianshijian >= 8) {
                shuimianshijian = 24 - shuimianshijian + 6;
            }
            else {
                shuimianshijian = 6 - shuimianshijian;
            }
            this.guanbichuang();
            var guoduchangjing_2 = new Dianpurukou();
            Gameguanli.Kongzhitai().dingbuui.addChild(guoduchangjing_2);
            guoduchangjing_2.jinruwenzi.text = "你很快进入了睡眠...";
            egret.Tween.get(guoduchangjing_2.jinruwenzi).to({ alpha: 0 }, 1500).call(function () {
                if (Gerenshuxing.kaixinzhi >= 0 && Gerenshuxing.kaixinzhi < 100) {
                    guoduchangjing_2.jinruwenzi.text = "你的心情很糟糕，家庭不和谐，生活一团糟，焦虑使你五味杂陈，几乎彻夜未眠...";
                }
                else if (Gerenshuxing.kaixinzhi >= 100 && Gerenshuxing.kaixinzhi < 200) {
                    guoduchangjing_2.jinruwenzi.text = "你的心情不太好，家人似乎对你不太亲近，致使你在床上胡思乱想，差点失眠...";
                }
                else if (Gerenshuxing.kaixinzhi >= 200 && Gerenshuxing.kaixinzhi < 300) {
                    guoduchangjing_2.jinruwenzi.text = "你的心情很一般，躺在床上的你依然与平常一样，为了家人的生活担忧，你在床上辗转反侧,久久未能睡着...";
                }
                else if (Gerenshuxing.kaixinzhi >= 300 && Gerenshuxing.kaixinzhi < 400) {
                    guoduchangjing_2.jinruwenzi.text = "你的心情不错，家庭和睦使你不必有太多的担忧，躺在床上很快便进入了梦乡...";
                }
                else {
                    guoduchangjing_2.jinruwenzi.text = "你的心情非常好，家庭和睦，事业也一帆风顺，你陷入了沉睡，睡梦中又浮现出年轻时的开心回忆...";
                }
                egret.Tween.get(guoduchangjing_2.jinruwenzi).to({ alpha: 1 }, 1500).wait(2000).call(function () {
                    egret.Tween.get(guoduchangjing_2.jinruwenzi).to({ alpha: 0 }, 1500).call(function () {
                        var jianglishuliang = 0;
                        for (var i = 0; i < _this.jiatingchengyuanbiao.length; i++) {
                            if (_this.jiatingchengyuanbiao[i].id == "5") {
                                jianglishuliang = parseInt(_this.jiatingchengyuanbiao[i].qinghezhi) + Math.floor(Gerenshuxing.kaixinzhi / 100) * shuimianshijian;
                                break;
                            }
                        }
                        if (shuimianshijian >= 0 && shuimianshijian < 2) {
                            guoduchangjing_2.jinruwenzi.text = "本次睡眠时间为" + shuimianshijian + "个小时，睡眠严重不足！对健康影响很大！";
                        }
                        else if (shuimianshijian >= 2 && shuimianshijian < 4) {
                            guoduchangjing_2.jinruwenzi.text = "本次睡眠时间为" + shuimianshijian + "个小时，睡眠不足！对健康影响较大！";
                        }
                        else if (shuimianshijian >= 4 && shuimianshijian < 6) {
                            guoduchangjing_2.jinruwenzi.text = "本次睡眠时间为" + shuimianshijian + "个小时，睡眠较短！对健康影响一般！";
                        }
                        else {
                            guoduchangjing_2.jinruwenzi.text = "本次睡眠时间为" + shuimianshijian + "个小时，睡眠充足！能有效提高身体健康！";
                        }
                        Weblianjie.fasongshuju("code:086", "{" + '"uid"' + ":" + '"' + Gerenshuxing.uid + '"' + ","
                            + '"kouchuleixing"' + ":" + '"0"' + ","
                            + '"kouchushuliang"' + ":" + '"0"' + ","
                            + '"leixing"' + ":" + '"3"' + ","
                            + '"shuliang"' + ":" + '"' + jianglishuliang + '"' + ","
                            + '"shijianzengjia"' + ":" + '"' + shuimianshijian + '"' + ","
                            + '"beishu"' + ":" + '"2"' + "}");
                        egret.Tween.get(guoduchangjing_2.jinruwenzi).to({ alpha: 1 }, 1500).wait(2000).call(function () {
                            egret.Tween.get(guoduchangjing_2.jinruwenzi).to({ alpha: 0 }, 1500).call(function () {
                                guoduchangjing_2.jinruwenzi.text = "随着闹钟的响起，你的睡眠结束了，新的一天又开始了！";
                                egret.Tween.get(guoduchangjing_2.jinruwenzi).to({ alpha: 1 }, 1500).wait(2000).call(function () {
                                    egret.Tween.get(guoduchangjing_2.jinruwenzi).to({ alpha: 0 }, 1500).call(function () {
                                        Gameguanli.Kongzhitai().dingbuui.removeChild(guoduchangjing_2);
                                    });
                                });
                            });
                        });
                    });
                });
            });
        }
    };
    Jiatingui.prototype.dianjiguizi = function () {
        var _this = this;
        egret.Tween.get(this.but_guizi).to({ scaleX: 1.1, scaleY: 1.1 }, 500).call(function () {
            egret.Tween.get(_this.but_guizi).to({ scaleX: 1, scaleY: 1 }, 500);
            Gameguanli.Kongzhitai().cuowutishixinxi("点击成功");
        });
    };
    Jiatingui.prototype.dianjishuzhuo = function () {
        var _this = this;
        egret.Tween.get(this.but_shuzhuo).to({ scaleX: 1.1, scaleY: 1.1 }, 500).call(function () {
            egret.Tween.get(_this.but_shuzhuo).to({ scaleX: 1, scaleY: 1 }, 500);
        });
    };
    Jiatingui.prototype.dianjidianshi = function () {
        var _this = this;
        egret.Tween.get(this.but_dianshi).to({ scaleX: 1.1, scaleY: 1.1 }, 500).call(function () {
            egret.Tween.get(_this.but_dianshi).to({ scaleX: 1, scaleY: 1 }, 500);
        });
        this.dianshijiaohu = new Dianshijiaohuui();
        Gameguanli.Kongzhitai().jiatingjiemian.addChild(this.dianshijiaohu);
        this.dianshijiaohu.dianshiguanbi.touchEnabled = true;
        this.dianshijiaohu.dianshiguanbi.addEventListener(egret.TouchEvent.TOUCH_TAP, this.guanbidianshi, this);
        this.dianshijiaohu.dianshichakan.enabled = true;
        this.dianshijiaohu.dianshijinxiu.enabled = true;
        this.dianshijiaohu.dianshizengsong.enabled = true;
        this.dianshijiaohu.dianshichakan.addEventListener(egret.TouchEvent.TOUCH_TAP, this.dianshick, this);
        this.dianshijiaohu.dianshijinxiu.addEventListener(egret.TouchEvent.TOUCH_TAP, this.dianshigz, this);
        this.dianshijiaohu.dianshizengsong.addEventListener(egret.TouchEvent.TOUCH_TAP, this.dianshizs, this);
        this.jiatingchengyuanbiao = RES.getRes("jiatingchengyuanbiao_json");
    };
    Jiatingui.prototype.guanbidianshi = function () {
        Gameguanli.Kongzhitai().jiatingjiemian.removeChild(this.dianshijiaohu);
    };
    Jiatingui.prototype.dianshick = function () {
        if (Gameguanli.Kongzhitai().jiatingjiemian.dianshijiaohu.parent) {
            if (this.dianshijiaohu.dianshichakan.enabled == false || this.dianshijiaohu.dianshijinxiu.enabled == false || this.dianshijiaohu.dianshizengsong.enabled == false) {
                Gameguanli.Kongzhitai().jiatingjiemian.dianshijiaohu.removeChild(this.erjitanchuui);
            }
            this.erjitanchuui = new Jiatingchengyuanjieshaoui();
            Gameguanli.Kongzhitai().jiatingjiemian.dianshijiaohu.addChild(this.erjitanchuui);
            this.dianshijiaohu.dianshichakan.enabled = false;
            this.dianshijiaohu.dianshijinxiu.enabled = true;
            this.dianshijiaohu.dianshizengsong.enabled = true;
            this.erjitanchuui.x = this.dianshijiaohu.dianshibeijing.x - this.erjitanchuui.width - this.dianshijiaohu.dianshibeijing.width;
            this.erjitanchuui.y = this.dianshijiaohu.dianshibeijing.y - this.dianshijiaohu.dianshibeijing.height;
            this.erjitanchuui.biaotiwenzi.text = "介绍";
            this.erjitanchuui.guanxibiaoqian.text = "名称";
            this.erjitanchuui.qinhelibiaoqian.text = "剧集";
            this.erjitanchuui.gongzuobiaoqian.text = "小品";
            this.erjitanchuui.jiesaobiaoqian.text = "说明";
            for (var i = 0; i < this.jiatingchengyuanbiao.length; i++) {
                if (this.jiatingchengyuanbiao[i].id == "6") {
                    this.erjitanchuui.guanxineirong.text = "" + this.jiatingchengyuanbiao[i].chengyuanming;
                    this.erjitanchuui.qinghelizhi.text = "心情 + " + this.jiatingchengyuanbiao[i].qinghezhi;
                    this.erjitanchuui.gongzuozhi.text = "心情 + " + this.jiatingchengyuanbiao[i].gongzuonengli;
                    this.erjitanchuui.jiesaoneirong.text = "" + this.jiatingchengyuanbiao[i].shuoming;
                    break;
                }
            }
        }
    };
    Jiatingui.prototype.dianshigz = function () {
        if (Gameguanli.Kongzhitai().jiatingjiemian.dianshijiaohu.parent) {
            if (this.dianshijiaohu.dianshichakan.enabled == false || this.dianshijiaohu.dianshijinxiu.enabled == false || this.dianshijiaohu.dianshizengsong.enabled == false) {
                Gameguanli.Kongzhitai().jiatingjiemian.dianshijiaohu.removeChild(this.erjitanchuui);
            }
            this.erjitanchuui = new Shafadianshidengjiaohuui();
            Gameguanli.Kongzhitai().jiatingjiemian.dianshijiaohu.addChild(this.erjitanchuui);
            this.dianshijiaohu.dianshichakan.enabled = true;
            this.dianshijiaohu.dianshijinxiu.enabled = false;
            this.dianshijiaohu.dianshizengsong.enabled = true;
            this.erjitanchuui.x = this.dianshijiaohu.dianshibeijing.x - this.erjitanchuui.width - this.dianshijiaohu.dianshibeijing.width;
            this.erjitanchuui.y = this.dianshijiaohu.dianshibeijing.y - this.dianshijiaohu.dianshibeijing.height;
            this.erjitanchuui.biaotiwenzi0.text = "剧集观看";
            this.erjitanchuui.guanxibiaoqian0.text = "效果";
            this.erjitanchuui.guanxineirong0.text = "提升心情";
            this.erjitanchuui.qinhelibiaoqian0.text = "提升效果";
            for (var i = 0; i < this.jiatingchengyuanbiao.length; i++) {
                if (this.jiatingchengyuanbiao[i].id == "6") {
                    this.erjitanchuui.qinghelizhi0.text = "+ " + this.jiatingchengyuanbiao[i].qinghezhi;
                    break;
                }
            }
            this.erjitanchuui.jiesaobiaoqian0.text = "说明";
            this.erjitanchuui.jiesaoneirong0.text = "1.当老人独自在家时，观看电视似乎成为他们的唯一消遣。\n2.观看电视连续剧或许能提升他们少量的心情。\n3.对老人来说，家人的陪伴才是他们的真正诉求。";
            this.erjitanchuui.qurenanniu.label = "观看";
            if (parseInt(Gerenshuxing.dianshixinxi) < 1) {
                this.erjitanchuui.qurenanniu.enabled = true;
                this.erjitanchuui.qurenanniu.addEventListener(egret.TouchEvent.TOUCH_TAP, this.dianjijuji, this);
            }
            else {
                this.erjitanchuui.qurenanniu.enabled = false;
            }
        }
    };
    Jiatingui.prototype.dianjijuji = function () {
        this.guanbidianshi();
        var jianglishuliang = 0;
        for (var i = 0; i < this.jiatingchengyuanbiao.length; i++) {
            if (this.jiatingchengyuanbiao[i].id == "6") {
                jianglishuliang = this.jiatingchengyuanbiao[i].qinghezhi;
                break;
            }
        }
        var guoduchangjing = new Dianpurukou();
        Gameguanli.Kongzhitai().dingbuui.addChild(guoduchangjing);
        guoduchangjing.jinruwenzi.text = "电视中正在播放80年代题材的剧集，你被剧情代入进去，陷入了回忆...";
        egret.Tween.get(guoduchangjing.jinruwenzi).to({ alpha: 0 }, 1500).call(function () {
            egret.Tween.get(guoduchangjing.jinruwenzi).to({ alpha: 1 }, 1500).wait(2000).call(function () {
                Weblianjie.fasongshuju("code:087", "{" + '"uid"' + ":" + '"' + Gerenshuxing.uid + '"' + ","
                    + '"kouchuleixing"' + ":" + '"0"' + ","
                    + '"kouchushuliang"' + ":" + '"0"' + ","
                    + '"leixing"' + ":" + '"4"' + ","
                    + '"shuliang"' + ":" + '"' + jianglishuliang + '"' + ","
                    + '"beishu"' + ":" + '"1"' + "}");
                guoduchangjing.jinruwenzi.text = "那自行车上的爱情，不禁让你回想到了自己年轻时的场景...";
                egret.Tween.get(guoduchangjing.jinruwenzi).to({ alpha: 0 }, 1500).call(function () {
                    Gameguanli.Kongzhitai().dingbuui.removeChild(guoduchangjing);
                });
            });
        });
    };
    Jiatingui.prototype.dianshizs = function () {
        if (Gameguanli.Kongzhitai().jiatingjiemian.dianshijiaohu.parent) {
            if (this.dianshijiaohu.dianshichakan.enabled == false || this.dianshijiaohu.dianshijinxiu.enabled == false || this.dianshijiaohu.dianshizengsong.enabled == false) {
                Gameguanli.Kongzhitai().jiatingjiemian.dianshijiaohu.removeChild(this.erjitanchuui);
            }
            this.erjitanchuui = new Shafadianshidengjiaohuui();
            Gameguanli.Kongzhitai().jiatingjiemian.dianshijiaohu.addChild(this.erjitanchuui);
            this.dianshijiaohu.dianshichakan.enabled = true;
            this.dianshijiaohu.dianshijinxiu.enabled = true;
            this.dianshijiaohu.dianshizengsong.enabled = false;
            this.erjitanchuui.x = this.dianshijiaohu.dianshibeijing.x - this.erjitanchuui.width - this.dianshijiaohu.dianshibeijing.width;
            this.erjitanchuui.y = this.dianshijiaohu.dianshibeijing.y - this.dianshijiaohu.dianshibeijing.height;
            this.erjitanchuui.biaotiwenzi0.text = "小品观看";
            this.erjitanchuui.guanxibiaoqian0.text = "效果";
            this.erjitanchuui.guanxineirong0.text = "提升心情";
            this.erjitanchuui.qinhelibiaoqian0.text = "提升效果";
            for (var i = 0; i < this.jiatingchengyuanbiao.length; i++) {
                if (this.jiatingchengyuanbiao[i].id == "6") {
                    this.erjitanchuui.qinghelizhi0.text = "+ " + this.jiatingchengyuanbiao[i].gongzuonengli;
                    break;
                }
            }
            this.erjitanchuui.jiesaobiaoqian0.text = "说明";
            this.erjitanchuui.jiesaoneirong0.text = "1.当老人独自在家时，观看电视似乎成为他们的唯一消遣。\n2.观看小品相声能提升他们大量的心情。\n3.对老人来说，家人的陪伴才是他们的真正诉求。";
            this.erjitanchuui.qurenanniu.label = "观看(广告)";
            if (parseInt(Gerenshuxing.dianshixinxi) < 1) {
                this.erjitanchuui.qurenanniu.enabled = true;
                this.erjitanchuui.qurenanniu.addEventListener(egret.TouchEvent.TOUCH_TAP, this.dianjixiaopin, this);
            }
            else {
                this.erjitanchuui.qurenanniu.enabled = false;
            }
        }
    };
    Jiatingui.prototype.dianjixiaopin = function () {
        this.guanbidianshi();
        var jianglishuliang = 0;
        for (var i = 0; i < this.jiatingchengyuanbiao.length; i++) {
            if (this.jiatingchengyuanbiao[i].id == "6") {
                jianglishuliang = this.jiatingchengyuanbiao[i].gongzuonengli;
                break;
            }
        }
        var guoduchangjing = new Dianpurukou();
        Gameguanli.Kongzhitai().dingbuui.addChild(guoduchangjing);
        guoduchangjing.jinruwenzi.text = "电视中正在播放小品演员们精心演绎的段子，惹得你捧腹大笑...";
        egret.Tween.get(guoduchangjing.jinruwenzi).to({ alpha: 0 }, 1500).call(function () {
            egret.Tween.get(guoduchangjing.jinruwenzi).to({ alpha: 1 }, 1500).wait(2000).call(function () {
                Weblianjie.fasongshuju("code:087", "{" + '"uid"' + ":" + '"' + Gerenshuxing.uid + '"' + ","
                    + '"kouchuleixing"' + ":" + '"0"' + ","
                    + '"kouchushuliang"' + ":" + '"0"' + ","
                    + '"leixing"' + ":" + '"4"' + ","
                    + '"shuliang"' + ":" + '"' + jianglishuliang + '"' + ","
                    + '"beishu"' + ":" + '"1"' + "}");
                guoduchangjing.jinruwenzi.text = "一场欢笑过后，你似乎暂时忘却了心中琐事带来的烦闷...";
                egret.Tween.get(guoduchangjing.jinruwenzi).to({ alpha: 0 }, 1500).call(function () {
                    Gameguanli.Kongzhitai().dingbuui.removeChild(guoduchangjing);
                });
            });
        });
    };
    Jiatingui.prototype.dianjichaji = function () {
        var _this = this;
        egret.Tween.get(this.but_chaji).to({ scaleX: 1.1, scaleY: 1.1 }, 500).call(function () {
            egret.Tween.get(_this.but_chaji).to({ scaleX: 1, scaleY: 1 }, 500);
        });
        this.chajijiaohu = new Chajijiaohuui();
        Gameguanli.Kongzhitai().jiatingjiemian.addChild(this.chajijiaohu);
        this.chajijiaohu.chajiguanbi.touchEnabled = true;
        this.chajijiaohu.chajiguanbi.addEventListener(egret.TouchEvent.TOUCH_TAP, this.guanbichaji, this);
        this.chajijiaohu.chajichakan.enabled = true;
        this.chajijiaohu.chajijinxiu.enabled = true;
        this.chajijiaohu.chajichakan.addEventListener(egret.TouchEvent.TOUCH_TAP, this.chajick, this);
        this.chajijiaohu.chajijinxiu.addEventListener(egret.TouchEvent.TOUCH_TAP, this.chajigz, this);
        this.jiatingchengyuanbiao = RES.getRes("jiatingchengyuanbiao_json");
    };
    Jiatingui.prototype.guanbichaji = function () {
        Gameguanli.Kongzhitai().jiatingjiemian.removeChild(this.chajijiaohu);
    };
    Jiatingui.prototype.chajick = function () {
        if (Gameguanli.Kongzhitai().jiatingjiemian.chajijiaohu.parent) {
            if (this.chajijiaohu.chajichakan.enabled == false || this.chajijiaohu.chajijinxiu.enabled == false) {
                Gameguanli.Kongzhitai().jiatingjiemian.chajijiaohu.removeChild(this.erjitanchuui);
            }
            this.erjitanchuui = new Jiatingchengyuanjieshaoui();
            Gameguanli.Kongzhitai().jiatingjiemian.chajijiaohu.addChild(this.erjitanchuui);
            this.chajijiaohu.chajichakan.enabled = false;
            this.chajijiaohu.chajijinxiu.enabled = true;
            this.erjitanchuui.x = this.chajijiaohu.chajibeijing.x + this.chajijiaohu.chajibeijing.width - this.erjitanchuui.width / 2;
            this.erjitanchuui.y = this.chajijiaohu.chajibeijing.y - this.chajijiaohu.chajibeijing.height - this.erjitanchuui.height / 2;
            this.erjitanchuui.biaotiwenzi.text = "介绍";
            this.erjitanchuui.guanxibiaoqian.text = "名称";
            this.erjitanchuui.qinhelibiaoqian.text = "用途";
            this.erjitanchuui.gongzuobiaoqian.text = "提升";
            this.erjitanchuui.jiesaobiaoqian.text = "说明";
            for (var i = 0; i < this.jiatingchengyuanbiao.length; i++) {
                if (this.jiatingchengyuanbiao[i].id == "7") {
                    this.erjitanchuui.guanxineirong.text = "" + this.jiatingchengyuanbiao[i].chengyuanming;
                    this.erjitanchuui.qinghelizhi.text = "可使用药物";
                    this.erjitanchuui.gongzuozhi.text = "治疗疾病";
                    this.erjitanchuui.jiesaoneirong.text = "" + this.jiatingchengyuanbiao[i].shuoming;
                    break;
                }
            }
        }
    };
    Jiatingui.prototype.chajigz = function () {
        if (Gameguanli.Kongzhitai().jiatingjiemian.chajijiaohu.parent) {
            if (this.chajijiaohu.chajichakan.enabled == false || this.chajijiaohu.chajijinxiu.enabled == false) {
                Gameguanli.Kongzhitai().jiatingjiemian.chajijiaohu.removeChild(this.erjitanchuui);
            }
            this.erjitanchuui = new Jiatingchengyuandaojuui();
            Gameguanli.Kongzhitai().jiatingjiemian.chajijiaohu.addChild(this.erjitanchuui);
            this.erjitanchuui.x = this.chajijiaohu.chajibeijing.x + this.chajijiaohu.chajibeijing.width - this.erjitanchuui.width / 2;
            this.erjitanchuui.y = this.chajijiaohu.chajibeijing.y - this.chajijiaohu.chajibeijing.height - this.erjitanchuui.height / 2;
            this.erjitanchuui.daojubiaoti.text = "药物列表";
            this.chengyuanhudongbiao = RES.getRes("chengyuanhudongbiao_json");
            this.daojubiao = RES.getRes("daojubiao_json");
            this.chajijiaohu.chajichakan.enabled = true;
            this.chajijiaohu.chajijinxiu.enabled = false;
            for (var i = 0; i < this.chengyuanhudongbiao.length; i++) {
                if (this.chengyuanhudongbiao[i].id == "36") {
                    this.zengsongid1 = this.chengyuanhudongbiao[i].xiaohao;
                }
                if (this.chengyuanhudongbiao[i].id == "37") {
                    this.zengsongid2 = this.chengyuanhudongbiao[i].xiaohao;
                }
                if (this.chengyuanhudongbiao[i].id == "38") {
                    this.zengsongid3 = this.chengyuanhudongbiao[i].xiaohao;
                }
                if (this.chengyuanhudongbiao[i].id == "39") {
                    this.zengsongid4 = this.chengyuanhudongbiao[i].xiaohao;
                }
                if (this.chengyuanhudongbiao[i].id == "40") {
                    this.zengsongid5 = this.chengyuanhudongbiao[i].xiaohao;
                }
            }
            this.chajizskeng1();
            this.chajizskeng2();
            this.chajizskeng3();
            this.chajizskeng4();
            this.chajizskeng5();
        }
    };
    Jiatingui.prototype.chajizskeng1 = function () {
        for (var h in Gerencaipudengji.daoju) {
            if (h == this.zengsongid1) {
                if (parseInt(Gerencaipudengji.daoju[h][0]) > 0) {
                    this.erjitanchuui.zsanniudb1.source = "img_jiaohuanniudibu_png";
                    this.erjitanchuui.geshudikuang1.alpha = 1;
                    this.erjitanchuui.geshuwenzi1.text = Gerencaipudengji.daoju[h][0];
                    this.erjitanchuui.zengsong1.enabled = true;
                    this.erjitanchuui.zengsong1.addEventListener(egret.TouchEvent.TOUCH_TAP, this.chajizskeng1jiesuo, this);
                    break;
                }
                else {
                    this.erjitanchuui.zsanniudb1.source = "img_jiaohuanniudibu1_png";
                    this.erjitanchuui.geshudikuang1.alpha = 0;
                    this.erjitanchuui.geshuwenzi1.text = "";
                    this.erjitanchuui.zengsong1.enabled = true;
                    this.erjitanchuui.zengsong1.addEventListener(egret.TouchEvent.TOUCH_TAP, this.chajizskeng1jiesuo, this);
                    break;
                }
            }
        }
        for (var j = 0; j < this.daojubiao.length; j++) {
            if (this.daojubiao[j].id == this.zengsongid1) {
                this.erjitanchuui.zengsongtupian1.source = this.daojubiao[j].xianshiicon;
                this.erjitanchuui.wznr1.text = this.daojubiao[j].mingcheng;
                break;
            }
        }
    };
    Jiatingui.prototype.chajizskeng2 = function () {
        for (var h in Gerencaipudengji.daoju) {
            if (h == this.zengsongid2) {
                if (parseInt(Gerencaipudengji.daoju[h][0]) > 0) {
                    this.erjitanchuui.zsanniudb2.source = "img_jiaohuanniudibu_png";
                    this.erjitanchuui.geshudikuang2.alpha = 1;
                    this.erjitanchuui.geshuwenzi2.text = Gerencaipudengji.daoju[h][0];
                    this.erjitanchuui.zengsong2.enabled = true;
                    this.erjitanchuui.zengsong2.addEventListener(egret.TouchEvent.TOUCH_TAP, this.chajizskeng2jiesuo, this);
                    break;
                }
                else {
                    this.erjitanchuui.zsanniudb2.source = "img_jiaohuanniudibu1_png";
                    this.erjitanchuui.geshudikuang2.alpha = 0;
                    this.erjitanchuui.geshuwenzi2.text = "";
                    this.erjitanchuui.zengsong2.enabled = true;
                    this.erjitanchuui.zengsong2.addEventListener(egret.TouchEvent.TOUCH_TAP, this.chajizskeng2jiesuo, this);
                    break;
                }
            }
        }
        for (var j = 0; j < this.daojubiao.length; j++) {
            if (this.daojubiao[j].id == this.zengsongid2) {
                this.erjitanchuui.zengsongtupian2.source = this.daojubiao[j].xianshiicon;
                this.erjitanchuui.wznr2.text = this.daojubiao[j].mingcheng;
                break;
            }
        }
    };
    Jiatingui.prototype.chajizskeng3 = function () {
        for (var h in Gerencaipudengji.daoju) {
            if (h == this.zengsongid3) {
                if (parseInt(Gerencaipudengji.daoju[h][0]) > 0) {
                    this.erjitanchuui.zsanniudb3.source = "img_jiaohuanniudibu_png";
                    this.erjitanchuui.geshudikuang3.alpha = 1;
                    this.erjitanchuui.geshuwenzi3.text = Gerencaipudengji.daoju[h][0];
                    this.erjitanchuui.zengsong3.enabled = true;
                    this.erjitanchuui.zengsong3.addEventListener(egret.TouchEvent.TOUCH_TAP, this.chajizskeng3jiesuo, this);
                    break;
                }
                else {
                    this.erjitanchuui.zsanniudb3.source = "img_jiaohuanniudibu1_png";
                    this.erjitanchuui.geshudikuang3.alpha = 0;
                    this.erjitanchuui.geshuwenzi3.text = "";
                    this.erjitanchuui.zengsong3.enabled = true;
                    this.erjitanchuui.zengsong3.addEventListener(egret.TouchEvent.TOUCH_TAP, this.chajizskeng3jiesuo, this);
                    break;
                }
            }
        }
        for (var j = 0; j < this.daojubiao.length; j++) {
            if (this.daojubiao[j].id == this.zengsongid3) {
                this.erjitanchuui.zengsongtupian3.source = this.daojubiao[j].xianshiicon;
                this.erjitanchuui.wznr3.text = this.daojubiao[j].mingcheng;
                break;
            }
        }
    };
    Jiatingui.prototype.chajizskeng4 = function () {
        for (var h in Gerencaipudengji.daoju) {
            if (h == this.zengsongid4) {
                if (parseInt(Gerencaipudengji.daoju[h][0]) > 0) {
                    this.erjitanchuui.zsanniudb4.source = "img_jiaohuanniudibu_png";
                    this.erjitanchuui.geshudikuang4.alpha = 1;
                    this.erjitanchuui.geshuwenzi4.text = Gerencaipudengji.daoju[h][0];
                    this.erjitanchuui.zengsong4.enabled = true;
                    this.erjitanchuui.zengsong4.addEventListener(egret.TouchEvent.TOUCH_TAP, this.chajizskeng4jiesuo, this);
                    break;
                }
                else {
                    this.erjitanchuui.zsanniudb4.source = "img_jiaohuanniudibu1_png";
                    this.erjitanchuui.geshudikuang4.alpha = 0;
                    this.erjitanchuui.geshuwenzi4.text = "";
                    this.erjitanchuui.zengsong4.enabled = true;
                    this.erjitanchuui.zengsong4.addEventListener(egret.TouchEvent.TOUCH_TAP, this.chajizskeng4jiesuo, this);
                    break;
                }
            }
        }
        for (var j = 0; j < this.daojubiao.length; j++) {
            if (this.daojubiao[j].id == this.zengsongid4) {
                this.erjitanchuui.zengsongtupian4.source = this.daojubiao[j].xianshiicon;
                this.erjitanchuui.wznr4.text = this.daojubiao[j].mingcheng;
                break;
            }
        }
    };
    Jiatingui.prototype.chajizskeng5 = function () {
        for (var h in Gerencaipudengji.daoju) {
            if (h == this.zengsongid5) {
                if (parseInt(Gerencaipudengji.daoju[h][0]) > 0) {
                    this.erjitanchuui.zsanniudb5.source = "img_jiaohuanniudibu_png";
                    this.erjitanchuui.geshudikuang5.alpha = 1;
                    this.erjitanchuui.geshuwenzi5.text = Gerencaipudengji.daoju[h][0];
                    this.erjitanchuui.zengsong5.enabled = true;
                    this.erjitanchuui.zengsong5.addEventListener(egret.TouchEvent.TOUCH_TAP, this.chajizskeng5jiesuo, this);
                    break;
                }
                else {
                    this.erjitanchuui.zsanniudb5.source = "img_jiaohuanniudibu1_png";
                    this.erjitanchuui.geshudikuang5.alpha = 0;
                    this.erjitanchuui.geshuwenzi5.text = "";
                    this.erjitanchuui.zengsong5.enabled = true;
                    this.erjitanchuui.zengsong5.addEventListener(egret.TouchEvent.TOUCH_TAP, this.chajizskeng5jiesuo, this);
                    break;
                }
            }
        }
        for (var j = 0; j < this.daojubiao.length; j++) {
            if (this.daojubiao[j].id == this.zengsongid5) {
                this.erjitanchuui.zengsongtupian5.source = this.daojubiao[j].xianshiicon;
                this.erjitanchuui.wznr5.text = this.daojubiao[j].mingcheng;
                break;
            }
        }
    };
    Jiatingui.prototype.chajizskeng1jiesuo = function () {
        this.jinxiuquerenui = new Tongyongquerenkuang();
        Gameguanli.Kongzhitai().dingbuui.addChild(this.jinxiuquerenui);
        for (var g = 0; g < this.daojubiao.length; g++) {
            if (this.daojubiao[g].id == this.zengsongid1) {
                this.jinxiuquerenui.tishiwenzi.text = this.daojubiao[g].tips;
                this.querenjinxiujiangliqueren(this.daojubiao[g].jiangli, this.daojubiao[g].jianglishuliang);
                this.querenjinxiuxiaohaoqueren(this.daojubiao[g].id, 1);
                break;
            }
        }
        this.jinxiuquerenui.but_queding.enabled = false;
        this.jinxiuquerenui.but_shuangbei.enabled = false;
        this.jinxiuquerenui.but_queding.alpha = 0;
        this.jinxiuquerenui.but_shuangbei.alpha = 0;
        this.jinxiuquerenui.but_queding0.enabled = true;
        this.jinxiuquerenui.but_queding0.alpha = 1;
        this.jinxiuquerenui.but_queding0.addEventListener(egret.TouchEvent.TOUCH_TAP, this.chajizs1queren, this);
    };
    Jiatingui.prototype.chajizskeng2jiesuo = function () {
        this.jinxiuquerenui = new Tongyongquerenkuang();
        Gameguanli.Kongzhitai().dingbuui.addChild(this.jinxiuquerenui);
        for (var g = 0; g < this.daojubiao.length; g++) {
            if (this.daojubiao[g].id == this.zengsongid2) {
                this.jinxiuquerenui.tishiwenzi.text = this.daojubiao[g].tips;
                this.querenjinxiujiangliqueren(this.daojubiao[g].jiangli, this.daojubiao[g].jianglishuliang);
                this.querenjinxiuxiaohaoqueren(this.daojubiao[g].id, 1);
                break;
            }
        }
        this.jinxiuquerenui.but_queding.enabled = false;
        this.jinxiuquerenui.but_shuangbei.enabled = false;
        this.jinxiuquerenui.but_queding.alpha = 0;
        this.jinxiuquerenui.but_shuangbei.alpha = 0;
        this.jinxiuquerenui.but_queding0.enabled = true;
        this.jinxiuquerenui.but_queding0.alpha = 1;
        this.jinxiuquerenui.but_queding0.addEventListener(egret.TouchEvent.TOUCH_TAP, this.chajizs2queren, this);
    };
    Jiatingui.prototype.chajizskeng3jiesuo = function () {
        this.jinxiuquerenui = new Tongyongquerenkuang();
        Gameguanli.Kongzhitai().dingbuui.addChild(this.jinxiuquerenui);
        for (var g = 0; g < this.daojubiao.length; g++) {
            if (this.daojubiao[g].id == this.zengsongid3) {
                this.jinxiuquerenui.tishiwenzi.text = this.daojubiao[g].tips;
                this.querenjinxiujiangliqueren(this.daojubiao[g].jiangli, this.daojubiao[g].jianglishuliang);
                this.querenjinxiuxiaohaoqueren(this.daojubiao[g].id, 1);
                break;
            }
        }
        this.jinxiuquerenui.but_queding.enabled = false;
        this.jinxiuquerenui.but_shuangbei.enabled = false;
        this.jinxiuquerenui.but_queding.alpha = 0;
        this.jinxiuquerenui.but_shuangbei.alpha = 0;
        this.jinxiuquerenui.but_queding0.enabled = true;
        this.jinxiuquerenui.but_queding0.alpha = 1;
        this.jinxiuquerenui.but_queding0.addEventListener(egret.TouchEvent.TOUCH_TAP, this.chajizs3queren, this);
    };
    Jiatingui.prototype.chajizskeng4jiesuo = function () {
        this.jinxiuquerenui = new Tongyongquerenkuang();
        Gameguanli.Kongzhitai().dingbuui.addChild(this.jinxiuquerenui);
        for (var g = 0; g < this.daojubiao.length; g++) {
            if (this.daojubiao[g].id == this.zengsongid4) {
                this.jinxiuquerenui.tishiwenzi.text = this.daojubiao[g].tips;
                this.querenjinxiujiangliqueren(this.daojubiao[g].jiangli, this.daojubiao[g].jianglishuliang);
                this.querenjinxiuxiaohaoqueren(this.daojubiao[g].id, 1);
                break;
            }
        }
        this.jinxiuquerenui.but_queding.enabled = false;
        this.jinxiuquerenui.but_shuangbei.enabled = false;
        this.jinxiuquerenui.but_queding.alpha = 0;
        this.jinxiuquerenui.but_shuangbei.alpha = 0;
        this.jinxiuquerenui.but_queding0.enabled = true;
        this.jinxiuquerenui.but_queding0.alpha = 1;
        this.jinxiuquerenui.but_queding0.addEventListener(egret.TouchEvent.TOUCH_TAP, this.chajizs4queren, this);
    };
    Jiatingui.prototype.chajizskeng5jiesuo = function () {
        this.jinxiuquerenui = new Tongyongquerenkuang();
        Gameguanli.Kongzhitai().dingbuui.addChild(this.jinxiuquerenui);
        for (var g = 0; g < this.daojubiao.length; g++) {
            if (this.daojubiao[g].id == this.zengsongid5) {
                this.jinxiuquerenui.tishiwenzi.text = this.daojubiao[g].tips;
                this.querenjinxiujiangliqueren(this.daojubiao[g].jiangli, this.daojubiao[g].jianglishuliang);
                this.querenjinxiuxiaohaoqueren(this.daojubiao[g].id, 1);
                break;
            }
        }
        this.jinxiuquerenui.but_queding.enabled = false;
        this.jinxiuquerenui.but_shuangbei.enabled = false;
        this.jinxiuquerenui.but_queding.alpha = 0;
        this.jinxiuquerenui.but_shuangbei.alpha = 0;
        this.jinxiuquerenui.but_queding0.enabled = true;
        this.jinxiuquerenui.but_queding0.alpha = 1;
        this.jinxiuquerenui.but_queding0.addEventListener(egret.TouchEvent.TOUCH_TAP, this.chajizs5queren, this);
    };
    Jiatingui.prototype.chajizs1queren = function () {
        Gameguanli.Kongzhitai().dingbuui.removeChild(this.jinxiuquerenui);
        for (var h in Gerencaipudengji.daoju) {
            if (h == this.zengsongid1) {
                if (parseInt(Gerencaipudengji.daoju[h][0]) > 0) {
                    this.tongguojiangli(this.zengsongid1);
                    Gameguanli.Kongzhitai().cuowutishixinxi("你喝下一碗止疼药，身上的疼痛有所缓解...");
                    break;
                }
                else {
                    Gameguanli.Kongzhitai().cuowutishixinxi("您并没有该药品可使用...");
                    break;
                }
            }
        }
    };
    Jiatingui.prototype.chajizs2queren = function () {
        Gameguanli.Kongzhitai().dingbuui.removeChild(this.jinxiuquerenui);
        for (var h in Gerencaipudengji.daoju) {
            if (h == this.zengsongid2) {
                if (parseInt(Gerencaipudengji.daoju[h][0]) > 0) {
                    this.tongguojiangli(this.zengsongid2);
                    Gameguanli.Kongzhitai().cuowutishixinxi("你喝下一杯枇杷膏，嗓子舒服了不少...");
                    break;
                }
                else {
                    Gameguanli.Kongzhitai().cuowutishixinxi("您并没有该药品可使用...");
                    break;
                }
            }
        }
    };
    Jiatingui.prototype.chajizs3queren = function () {
        Gameguanli.Kongzhitai().dingbuui.removeChild(this.jinxiuquerenui);
        for (var h in Gerencaipudengji.daoju) {
            if (h == this.zengsongid3) {
                if (parseInt(Gerencaipudengji.daoju[h][0]) > 0) {
                    this.tongguojiangli(this.zengsongid3);
                    Gameguanli.Kongzhitai().cuowutishixinxi("你服下两粒感冒药，似乎感觉舒服了不少...");
                    break;
                }
                else {
                    Gameguanli.Kongzhitai().cuowutishixinxi("您并没有该药品可使用...");
                    break;
                }
            }
        }
    };
    Jiatingui.prototype.chajizs4queren = function () {
        Gameguanli.Kongzhitai().dingbuui.removeChild(this.jinxiuquerenui);
        for (var h in Gerencaipudengji.daoju) {
            if (h == this.zengsongid4) {
                if (parseInt(Gerencaipudengji.daoju[h][0]) > 0) {
                    this.tongguojiangli(this.zengsongid4);
                    Gameguanli.Kongzhitai().cuowutishixinxi("你服下几粒降压药，血压降了下来...");
                    break;
                }
                else {
                    Gameguanli.Kongzhitai().cuowutishixinxi("您并没有该药品可使用...");
                    break;
                }
            }
        }
    };
    Jiatingui.prototype.chajizs5queren = function () {
        Gameguanli.Kongzhitai().dingbuui.removeChild(this.jinxiuquerenui);
        for (var h in Gerencaipudengji.daoju) {
            if (h == this.zengsongid5) {
                if (parseInt(Gerencaipudengji.daoju[h][0]) > 0) {
                    this.tongguojiangli(this.zengsongid5);
                    Gameguanli.Kongzhitai().cuowutishixinxi("你服用了速效救心丸，心梗明显得到缓解...");
                    break;
                }
                else {
                    Gameguanli.Kongzhitai().cuowutishixinxi("您并没有该药品可使用...");
                    break;
                }
            }
        }
    };
    Jiatingui.prototype.dianjishafa = function () {
        var _this = this;
        egret.Tween.get(this.but_shafa).to({ scaleX: 1.1, scaleY: 1.1 }, 500).call(function () {
            egret.Tween.get(_this.but_shafa).to({ scaleX: 1, scaleY: 1 }, 500);
        });
        this.shafajiaohu = new Shafajiaohuui();
        Gameguanli.Kongzhitai().jiatingjiemian.addChild(this.shafajiaohu);
        this.shafajiaohu.shafaguanbi.touchEnabled = true;
        this.shafajiaohu.shafaguanbi.addEventListener(egret.TouchEvent.TOUCH_TAP, this.guanbishafa, this);
        this.shafajiaohu.shafachakan.enabled = true;
        this.shafajiaohu.shafajinxiu.enabled = true;
        this.shafajiaohu.shafachakan.addEventListener(egret.TouchEvent.TOUCH_TAP, this.shafack, this);
        this.shafajiaohu.shafajinxiu.addEventListener(egret.TouchEvent.TOUCH_TAP, this.shafagz, this);
        this.jiatingchengyuanbiao = RES.getRes("jiatingchengyuanbiao_json");
    };
    Jiatingui.prototype.guanbishafa = function () {
        Gameguanli.Kongzhitai().jiatingjiemian.removeChild(this.shafajiaohu);
    };
    Jiatingui.prototype.shafack = function () {
        if (Gameguanli.Kongzhitai().jiatingjiemian.shafajiaohu.parent) {
            if (this.shafajiaohu.shafachakan.enabled == false || this.shafajiaohu.shafajinxiu.enabled == false) {
                Gameguanli.Kongzhitai().jiatingjiemian.shafajiaohu.removeChild(this.erjitanchuui);
            }
            this.erjitanchuui = new Jiatingchengyuanjieshaoui();
            Gameguanli.Kongzhitai().jiatingjiemian.shafajiaohu.addChild(this.erjitanchuui);
            this.shafajiaohu.shafachakan.enabled = false;
            this.shafajiaohu.shafajinxiu.enabled = true;
            this.erjitanchuui.x = this.shafajiaohu.shafabeijing.x + this.shafajiaohu.shafabeijing.width * 2 - this.shafajiaohu.shafabeijing.width / 3;
            this.erjitanchuui.y = this.shafajiaohu.shafabeijing.y - this.shafajiaohu.shafabeijing.height / 3;
            this.erjitanchuui.biaotiwenzi.text = "介绍";
            this.erjitanchuui.guanxibiaoqian.text = "名称";
            this.erjitanchuui.qinhelibiaoqian.text = "每次恢复";
            this.erjitanchuui.gongzuobiaoqian.text = "积累上限";
            this.erjitanchuui.jiesaobiaoqian.text = "说明";
            for (var i = 0; i < this.jiatingchengyuanbiao.length; i++) {
                if (this.jiatingchengyuanbiao[i].id == "8") {
                    this.erjitanchuui.guanxineirong.text = "" + this.jiatingchengyuanbiao[i].chengyuanming;
                    this.erjitanchuui.qinghelizhi.text = "" + this.jiatingchengyuanbiao[i].qinghezhi;
                    this.erjitanchuui.gongzuozhi.text = "" + this.jiatingchengyuanbiao[i].gongzuonengli;
                    this.erjitanchuui.jiesaoneirong.text = "" + this.jiatingchengyuanbiao[i].shuoming;
                    break;
                }
            }
        }
    };
    Jiatingui.prototype.shafagz = function () {
        if (Gameguanli.Kongzhitai().jiatingjiemian.shafajiaohu.parent) {
            if (this.shafajiaohu.shafachakan.enabled == false || this.shafajiaohu.shafajinxiu.enabled == false) {
                Gameguanli.Kongzhitai().jiatingjiemian.shafajiaohu.removeChild(this.erjitanchuui);
            }
            this.erjitanchuui = new Shafadianshidengjiaohuui();
            Gameguanli.Kongzhitai().jiatingjiemian.shafajiaohu.addChild(this.erjitanchuui);
            this.shafajiaohu.shafachakan.enabled = true;
            this.shafajiaohu.shafajinxiu.enabled = false;
            this.erjitanchuui.x = this.shafajiaohu.shafabeijing.x + this.shafajiaohu.shafabeijing.width * 2 - this.shafajiaohu.shafabeijing.width / 3;
            this.erjitanchuui.y = this.shafajiaohu.shafabeijing.y - this.shafajiaohu.shafabeijing.height / 3;
            this.erjitanchuui.biaotiwenzi0.text = "沙发休息";
            this.erjitanchuui.guanxibiaoqian0.text = "累积次数";
            this.erjitanchuui.guanxineirong0.text = Gerenshuxing.shafaxinxi[0] + "/" + Gerenshuxing.shafaxinxi[1] + "  " + "[" + Gerenshuxing.shafaxinxi[3] + "]";
            this.erjitanchuui.qinhelibiaoqian0.text = "恢复间隔";
            this.erjitanchuui.qurenanniu.label = "休息";
            this.erjitanchuui.jiesaobiaoqian0.text = "说明";
            this.erjitanchuui.jiesaoneirong0.text = "1.沙发每隔一定的时间会根据当前的心情值恢复体力。\n2.恢复的体力会寄存在沙发上，每次休息会将寄存的体力领取完。\n3.寄存的体力达到上限时不再恢复。";
            if (parseInt(Gerenshuxing.shafaxinxi[0]) == parseInt(Gerenshuxing.shafaxinxi[1])) {
                this.erjitanchuui.qinghelizhi0.text = "已累积满";
            }
            else {
                var dangqianshijian = (new Date()).valueOf();
                var shengyushijian = parseInt(Gerenshuxing.shafaxinxi[2]) - dangqianshijian;
                this.erjitanchuui.qinghelizhi0.text = Math.floor((shengyushijian / 60000) % 60) + ":" + Math.floor((shengyushijian / 1000) % 60);
            }
            if (parseInt(Gerenshuxing.shafaxinxi[0]) > 0) {
                this.erjitanchuui.qurenanniu.enabled = true;
                this.erjitanchuui.qurenanniu.addEventListener(egret.TouchEvent.TOUCH_TAP, this.shafatililingqu, this);
            }
            else {
                this.erjitanchuui.qurenanniu.enabled = false;
            }
            if (parseInt(Gerenshuxing.shafaxinxi[0]) < parseInt(Gerenshuxing.shafaxinxi[1])) {
                var dingshiqi = new egret.Timer(1000, 1);
                dingshiqi.addEventListener(egret.TimerEvent.TIMER, this.panduanshafajishi, this);
                dingshiqi.start();
            }
        }
    };
    Jiatingui.prototype.panduanshafajishi = function () {
        if (this.shafajiaohu.shafajinxiu.enabled == false) {
            this.shafagz();
        }
    };
    Jiatingui.prototype.shafatililingqu = function () {
        this.guanbishafa();
        var guoduchangjing = new Dianpurukou();
        Gameguanli.Kongzhitai().dingbuui.addChild(guoduchangjing);
        guoduchangjing.jinruwenzi.text = "你在沙发上休息了一会儿，感觉很放松...";
        egret.Tween.get(guoduchangjing.jinruwenzi).to({ alpha: 0 }, 1500).call(function () {
            egret.Tween.get(guoduchangjing.jinruwenzi).to({ alpha: 1 }, 1500).wait(2000).call(function () {
                var jianglishuliang = Gerenshuxing.shafaxinxi[3];
                var xianzaishijian6 = (new Date()).valueOf();
                xianzaishijian6 = xianzaishijian6 + 120000;
                Weblianjie.fasongshuju("code:091", "{" + '"uid"' + ":" + '"' + Gerenshuxing.uid + '"' + ","
                    + '"kouchuleixing"' + ":" + '"0"' + ","
                    + '"kouchushuliang"' + ":" + '"0"' + ","
                    + '"leixing"' + ":" + '"2"' + ","
                    + '"shuliang"' + ":" + '"' + jianglishuliang + '"' + ","
                    + '"xiayishijian"' + ":" + '"' + xianzaishijian6 + '"' + ","
                    + '"beishu"' + ":" + '"1"' + "}");
                guoduchangjing.jinruwenzi.text = "短暂的休息过后，你的行动力得到了有效恢复，疲劳感降低了许多...";
                egret.Tween.get(guoduchangjing.jinruwenzi).to({ alpha: 0 }, 1500).call(function () {
                    Gameguanli.Kongzhitai().dingbuui.removeChild(guoduchangjing);
                });
            });
        });
    };
    Jiatingui.prototype.dianjimaowo = function () {
        var _this = this;
        egret.Tween.get(this.but_maowo).to({ scaleX: 1.1, scaleY: 1.1 }, 500).call(function () {
            egret.Tween.get(_this.but_maowo).to({ scaleX: 1, scaleY: 1 }, 500);
            Gameguanli.Kongzhitai().cuowutishixinxi("点击成功");
        });
    };
    Jiatingui.prototype.jiatingchengyuanxianshi = function () {
        var _this = this;
        if (Gerenshuxing.daerzixinxi[5] == 1) {
            this.img_daerzi.alpha = 1;
            this.img_daerzi.touchEnabled = true;
            this.img_daerzi.addEventListener(egret.TouchEvent.TOUCH_TAP, this.dianjidaerzi, this);
            if (Gerenshuxing.daerzixinxi[4] == 0) {
                var jianglishuliang = 2;
                Weblianjie.fasongshuju("code:058", "{" + '"uid"' + ":" + '"' + Gerenshuxing.uid + '"' + ","
                    + '"kouchuleixing"' + ":" + '"0"' + ","
                    + '"kouchushuliang"' + ":" + '"0"' + ","
                    + '"leixing"' + ":" + '"4"' + ","
                    + '"shuliang"' + ":" + '"' + jianglishuliang + '"' + ","
                    + '"beishu"' + ":" + '"1"' + "}");
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
            if (this.img_daerzi.alpha == 1) {
                this.img_daerzi.touchEnabled = false;
                var daerzihuijiahanhua_2 = new Toudingwenzi();
                Gameguanli.Kongzhitai().jiatingjiemian.addChild(daerzihuijiahanhua_2);
                daerzihuijiahanhua_2.x = this.img_daerzi.x - daerzihuijiahanhua_2.width / 2 + daerzihuijiahanhua_2.toudingwenzizu.width + this.img_daerzi.width;
                daerzihuijiahanhua_2.y = this.img_daerzi.y - daerzihuijiahanhua_2.height / 2 + daerzihuijiahanhua_2.toudingwenzizu.height + this.img_daerzi.height / 6;
                daerzihuijiahanhua_2.wenzineirong.text = "妈，我去饭店了...";
                egret.Tween.get(daerzihuijiahanhua_2).to({ alpha: 0.5 }, 3000).call(function () {
                    Gameguanli.Kongzhitai().jiatingjiemian.removeChild(daerzihuijiahanhua_2);
                    egret.Tween.get(_this.img_daerzi).to({ alpha: 0 }, 3000).call(function () {
                        _this.img_daerzi.alpha = 0;
                    });
                });
            }
            else {
                this.img_daerzi.alpha = 0;
                this.img_daerzi.touchEnabled = false;
            }
        }
        if (Gerenshuxing.ererzixinxi[5] == 1) {
            this.img_ererzi.alpha = 1;
            this.img_ererzi.touchEnabled = true;
            this.img_ererzi.addEventListener(egret.TouchEvent.TOUCH_TAP, this.dianjiererzi, this);
            if (Gerenshuxing.ererzixinxi[4] == 0) {
                var jianglishuliang = Gerenshuxing.ererzixinxi[1];
                Weblianjie.fasongshuju("code:059", "{" + '"uid"' + ":" + '"' + Gerenshuxing.uid + '"' + ","
                    + '"kouchuleixing"' + ":" + '"0"' + ","
                    + '"kouchushuliang"' + ":" + '"0"' + ","
                    + '"leixing"' + ":" + '"1"' + ","
                    + '"shuliang"' + ":" + '"' + jianglishuliang + '"' + ","
                    + '"beishu"' + ":" + '"1"' + "}");
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
            if (this.img_ererzi.alpha == 1) {
                this.img_ererzi.touchEnabled = false;
                var ererzihuijiahanhua_2 = new Toudingwenzi();
                Gameguanli.Kongzhitai().jiatingjiemian.addChild(ererzihuijiahanhua_2);
                ererzihuijiahanhua_2.x = this.img_ererzi.x - ererzihuijiahanhua_2.width / 2 + ererzihuijiahanhua_2.toudingwenzizu.width + this.img_ererzi.width;
                ererzihuijiahanhua_2.y = this.img_ererzi.y - ererzihuijiahanhua_2.height / 2 + ererzihuijiahanhua_2.toudingwenzizu.height + this.img_ererzi.height / 6;
                ererzihuijiahanhua_2.wenzineirong.text = "亲爱的老妈，我出去工作啦，您别太挂念我，照顾好自己...";
                egret.Tween.get(ererzihuijiahanhua_2).to({ alpha: 0.5 }, 3000).call(function () {
                    Gameguanli.Kongzhitai().jiatingjiemian.removeChild(ererzihuijiahanhua_2);
                    egret.Tween.get(_this.img_ererzi).to({ alpha: 0 }, 3000).call(function () {
                        _this.img_ererzi.alpha = 0;
                    });
                });
            }
            else {
                this.img_ererzi.alpha = 0;
                this.img_ererzi.touchEnabled = false;
            }
        }
        if (Gerenshuxing.xifuxinxi[5] == 1) {
            this.img_daerxi.alpha = 1;
            this.img_daerxi.touchEnabled = true;
            this.img_daerxi.addEventListener(egret.TouchEvent.TOUCH_TAP, this.dianjixifu, this);
            if (Gerenshuxing.xifuxinxi[4] == 0) {
                var jianglishuliang = Math.floor(parseInt(Gerenshuxing.xifuxinxi[1]) / 10);
                Weblianjie.fasongshuju("code:060", "{" + '"uid"' + ":" + '"' + Gerenshuxing.uid + '"' + ","
                    + '"kouchuleixing"' + ":" + '"0"' + ","
                    + '"kouchushuliang"' + ":" + '"0"' + ","
                    + '"leixing"' + ":" + '"2"' + ","
                    + '"shuliang"' + ":" + '"' + jianglishuliang + '"' + ","
                    + '"beishu"' + ":" + '"1"' + "}");
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
            if (this.img_daerxi.alpha == 1) {
                this.img_daerxi.touchEnabled = false;
                var xifuhuijiahanhua_2 = new Toudingwenzi();
                Gameguanli.Kongzhitai().jiatingjiemian.addChild(xifuhuijiahanhua_2);
                xifuhuijiahanhua_2.img_toudingwenzikuang.skewY = 180;
                xifuhuijiahanhua_2.x = this.img_daerxi.x - xifuhuijiahanhua_2.width / 2 + xifuhuijiahanhua_2.toudingwenzizu.width - this.img_daerxi.width * 2.5;
                xifuhuijiahanhua_2.y = this.img_daerxi.y - xifuhuijiahanhua_2.height / 2 + xifuhuijiahanhua_2.toudingwenzizu.height + this.img_daerxi.height / 6;
                xifuhuijiahanhua_2.wenzineirong.text = "婆婆，我上班去啦...";
                egret.Tween.get(xifuhuijiahanhua_2).to({ alpha: 0.5 }, 3000).call(function () {
                    Gameguanli.Kongzhitai().jiatingjiemian.removeChild(xifuhuijiahanhua_2);
                    egret.Tween.get(_this.img_daerxi).to({ alpha: 0 }, 3000).call(function () {
                        _this.img_daerxi.alpha = 0;
                    });
                });
            }
            else {
                this.img_daerxi.alpha = 0;
                this.img_daerxi.touchEnabled = false;
            }
        }
        if (Gerenshuxing.sunnvxinxi[5] == 1) {
            this.img_xiaosunnv.alpha = 1;
            this.img_xiaosunnv.touchEnabled = true;
            this.img_xiaosunnv.addEventListener(egret.TouchEvent.TOUCH_TAP, this.dianjixiaosunnv, this);
            if (Gerenshuxing.sunnvxinxi[4] == 0) {
                var jianglishuliang = Math.floor(parseInt(Gerenshuxing.sunnvxinxi[1]) / 10);
                Weblianjie.fasongshuju("code:061", "{" + '"uid"' + ":" + '"' + Gerenshuxing.uid + '"' + ","
                    + '"kouchuleixing"' + ":" + '"0"' + ","
                    + '"kouchushuliang"' + ":" + '"0"' + ","
                    + '"leixing"' + ":" + '"4"' + ","
                    + '"shuliang"' + ":" + '"' + jianglishuliang + '"' + ","
                    + '"beishu"' + ":" + '"1"' + "}");
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
            if (this.img_xiaosunnv.alpha == 1) {
                this.img_xiaosunnv.touchEnabled = false;
                var sunnvhuijiahanhua_2 = new Toudingwenzi();
                Gameguanli.Kongzhitai().jiatingjiemian.addChild(sunnvhuijiahanhua_2);
                sunnvhuijiahanhua_2.x = this.img_xiaosunnv.x - sunnvhuijiahanhua_2.width / 2 + sunnvhuijiahanhua_2.toudingwenzizu.width + this.img_xiaosunnv.width;
                sunnvhuijiahanhua_2.y = this.img_xiaosunnv.y - sunnvhuijiahanhua_2.height / 2 + sunnvhuijiahanhua_2.toudingwenzizu.height + this.img_xiaosunnv.height / 6;
                sunnvhuijiahanhua_2.wenzineirong.text = "奶奶，我去上学了...";
                egret.Tween.get(sunnvhuijiahanhua_2).to({ alpha: 0.5 }, 3000).call(function () {
                    Gameguanli.Kongzhitai().jiatingjiemian.removeChild(sunnvhuijiahanhua_2);
                    egret.Tween.get(_this.img_xiaosunnv).to({ alpha: 0 }, 3000).call(function () {
                        _this.img_xiaosunnv.alpha = 0;
                    });
                });
            }
            else {
                this.img_xiaosunnv.alpha = 0;
                this.img_xiaosunnv.touchEnabled = false;
            }
        }
    };
    Jiatingui.prototype.dianjidaerzi = function () {
        var _this = this;
        egret.Tween.get(this.img_daerzi).to({ scaleX: 1.1, scaleY: 1.1 }, 500).call(function () {
            egret.Tween.get(_this.img_daerzi).to({ scaleX: 1, scaleY: 1 }, 500);
        });
        this.daerzijiaohu = new Daerzijiaohuui();
        Gameguanli.Kongzhitai().jiatingjiemian.addChild(this.daerzijiaohu);
        this.daerzijiaohu.daerziguanbi.touchEnabled = true;
        this.daerzijiaohu.daerziguanbi.addEventListener(egret.TouchEvent.TOUCH_TAP, this.guanbidaerzi, this);
        this.daerzijiaohu.daerzichakan.enabled = true;
        if (Gerenshuxing.daerzijiaotan > 0) {
            this.daerzijiaohu.daerzijiaotan.enabled = true;
        }
        else {
            this.daerzijiaohu.daerzijiaotan.enabled = false;
        }
        this.daerzijiaohu.daerzijinxiu.enabled = true;
        this.daerzijiaohu.daerzizengsong.enabled = true;
        this.daerzijiaohu.daerzichakan.addEventListener(egret.TouchEvent.TOUCH_TAP, this.daerzick, this);
        this.daerzijiaohu.daerzijiaotan.addEventListener(egret.TouchEvent.TOUCH_TAP, this.daerzijt, this);
        this.daerzijiaohu.daerzijinxiu.addEventListener(egret.TouchEvent.TOUCH_TAP, this.daerzigz, this);
        this.daerzijiaohu.daerzizengsong.addEventListener(egret.TouchEvent.TOUCH_TAP, this.daerzizs, this);
        this.jiatingchengyuanbiao = RES.getRes("jiatingchengyuanbiao_json");
    };
    Jiatingui.prototype.daerzick = function () {
        if (Gameguanli.Kongzhitai().jiatingjiemian.daerzijiaohu.parent) {
            if (this.daerzijiaohu.daerzichakan.enabled == false || this.daerzijiaohu.daerzijinxiu.enabled == false || this.daerzijiaohu.daerzizengsong.enabled == false) {
                Gameguanli.Kongzhitai().jiatingjiemian.daerzijiaohu.removeChild(this.erjitanchuui);
            }
            this.erjitanchuui = new Jiatingchengyuanjieshaoui();
            Gameguanli.Kongzhitai().jiatingjiemian.daerzijiaohu.addChild(this.erjitanchuui);
            this.daerzijiaohu.daerzichakan.enabled = false;
            if (Gerenshuxing.daerzijiaotan > 0) {
                this.daerzijiaohu.daerzijiaotan.enabled = true;
            }
            else {
                this.daerzijiaohu.daerzijiaotan.enabled = false;
            }
            this.daerzijiaohu.daerzijinxiu.enabled = true;
            this.daerzijiaohu.daerzizengsong.enabled = true;
            this.erjitanchuui.x = this.daerzijiaohu.daerzibeijing.x + this.daerzijiaohu.daerzibeijing.width;
            this.erjitanchuui.y = this.daerzijiaohu.daerzibeijing.y;
            this.erjitanchuui.biaotiwenzi.text = "介绍";
            this.erjitanchuui.guanxibiaoqian.text = "关系";
            this.erjitanchuui.qinhelibiaoqian.text = "亲和值";
            this.erjitanchuui.gongzuobiaoqian.text = "工作能力";
            this.erjitanchuui.jiesaobiaoqian.text = "说明";
            for (var i = 0; i < this.jiatingchengyuanbiao.length; i++) {
                if (this.jiatingchengyuanbiao[i].id == "1") {
                    this.erjitanchuui.guanxineirong.text = "" + this.jiatingchengyuanbiao[i].chengyuanming;
                    this.erjitanchuui.qinghelizhi.text = "" + Gerenshuxing.daerzixinxi[0];
                    this.erjitanchuui.gongzuozhi.text = "" + Gerenshuxing.daerzixinxi[1];
                    this.erjitanchuui.jiesaoneirong.text = "" + this.jiatingchengyuanbiao[i].shuoming;
                    break;
                }
            }
        }
    };
    Jiatingui.prototype.daerzijt = function () {
        Gerenshuxing.daerzijiaotan -= 1;
        this.renwujiemian = new Npcduihuaui();
        if (this.daerzijiaohu.daerzichakan.enabled == false) {
            Gameguanli.Kongzhitai().jiatingjiemian.daerzijiaohu.removeChild(this.erjitanchuui);
        }
        Gameguanli.Kongzhitai().dingbuui.addChild(this.renwujiemian);
        this.renwujiemian.chushihua("1");
        this.daerzijiaohu.daerzichakan.enabled = true;
        if (Gerenshuxing.daerzijiaotan > 0) {
            this.daerzijiaohu.daerzijiaotan.enabled = true;
        }
        else {
            this.daerzijiaohu.daerzijiaotan.enabled = false;
        }
        this.daerzijiaohu.daerzijinxiu.enabled = true;
        this.daerzijiaohu.daerzizengsong.enabled = true;
    };
    Jiatingui.prototype.daerzigz = function () {
        if (Gameguanli.Kongzhitai().jiatingjiemian.daerzijiaohu.parent) {
            if (this.daerzijiaohu.daerzichakan.enabled == false || this.daerzijiaohu.daerzijinxiu.enabled == false || this.daerzijiaohu.daerzizengsong.enabled == false) {
                Gameguanli.Kongzhitai().jiatingjiemian.daerzijiaohu.removeChild(this.erjitanchuui);
            }
            if (Gerenshuxing.daerzixinxi[2] != "0") {
                this.erjitanchuui = new Jiatingjinxiuui();
                Gameguanli.Kongzhitai().jiatingjiemian.daerzijiaohu.addChild(this.erjitanchuui);
                this.erjitanchuui.x = this.daerzijiaohu.daerzibeijing.x + this.daerzijiaohu.daerzibeijing.width;
                this.erjitanchuui.y = this.daerzijiaohu.daerzibeijing.y;
                this.chengyuanhudongbiao = RES.getRes("chengyuanhudongbiao_json");
                this.daerzijiaohu.daerzichakan.enabled = true;
                if (Gerenshuxing.daerzijiaotan > 0) {
                    this.daerzijiaohu.daerzijiaotan.enabled = true;
                }
                else {
                    this.daerzijiaohu.daerzijiaotan.enabled = false;
                }
                this.daerzijiaohu.daerzijinxiu.enabled = false;
                this.daerzijiaohu.daerzizengsong.enabled = true;
                for (var i = 0; i < this.chengyuanhudongbiao.length; i++) {
                    if (this.chengyuanhudongbiao[i].id == Gerenshuxing.daerzixinxi[2]) {
                        this.erjitanchuui.jinxiubiaoti.text = this.chengyuanhudongbiao[i].xingdongming;
                        this.erjitanchuui.jinxiutupian.source = this.chengyuanhudongbiao[i].xianshiicon;
                    }
                }
                if (Gerenshuxing.daerzixinxi[3] == "0") {
                    this.erjitanchuui.shengyushijian0.text = "已完成";
                    this.erjitanchuui.quedinganniu.enabled = true;
                    this.erjitanchuui.quedinganniu.label = "确定";
                    this.erjitanchuui.quedinganniu.addEventListener(egret.TouchEvent.TOUCH_TAP, this.daerzijinxiulinjiang, this);
                }
                else {
                    var dangqianshijian = (new Date()).valueOf();
                    var shengyushijian = parseInt(Gerenshuxing.daerzixinxi[3]) - dangqianshijian;
                    this.erjitanchuui.shengyushijian0.text = Math.floor((shengyushijian / 60000) % 60) + ":" + Math.floor((shengyushijian / 1000) % 60);
                    this.erjitanchuui.quedinganniu.enabled = true;
                    this.erjitanchuui.quedinganniu.label = "加速（广告）";
                    this.erjitanchuui.quedinganniu.addEventListener(egret.TouchEvent.TOUCH_TAP, this.daerzijinxiusuoduan, this);
                    var dingshiqi = new egret.Timer(1000, 1);
                    dingshiqi.addEventListener(egret.TimerEvent.TIMER, this.panduandaerzijinxiu, this);
                    dingshiqi.start();
                }
            }
            else {
                this.erjitanchuui = new Jiatingchengyuanzengsong();
                Gameguanli.Kongzhitai().jiatingjiemian.daerzijiaohu.addChild(this.erjitanchuui);
                this.erjitanchuui.x = this.daerzijiaohu.daerzibeijing.x + this.daerzijiaohu.daerzibeijing.width;
                this.erjitanchuui.y = this.daerzijiaohu.daerzibeijing.y;
                this.erjitanchuui.wenzibiaoti.text = "工作内容";
                this.chengyuanhudongbiao = RES.getRes("chengyuanhudongbiao_json");
                this.daerzigzkeng1();
                this.daerzigzkeng2();
                this.daerzigzkeng3();
                this.daerzigzkeng4();
                this.daerzigzkeng5();
            }
            this.daerzijiaohu.daerzichakan.enabled = true;
            if (Gerenshuxing.daerzijiaotan > 0) {
                this.daerzijiaohu.daerzijiaotan.enabled = true;
            }
            else {
                this.daerzijiaohu.daerzijiaotan.enabled = false;
            }
            this.daerzijiaohu.daerzijinxiu.enabled = false;
            this.daerzijiaohu.daerzizengsong.enabled = true;
        }
    };
    Jiatingui.prototype.daerzijinxiulinjiang = function () {
        var idshuju = Gerenshuxing.daerzixinxi[2];
        var jianglileixing = 0;
        var jianglishuliang = 0;
        var beishu = 1;
        for (var j = 0; j < this.chengyuanhudongbiao.length; j++) {
            if (this.chengyuanhudongbiao[j].id == idshuju) {
                jianglileixing = this.chengyuanhudongbiao[j].jiangli;
                jianglishuliang = this.chengyuanhudongbiao[j].jianglishuliang;
                break;
            }
        }
        Gerenshuxing.daerzixinxi[2] = "0";
        Weblianjie.fasongshuju("code:077", "{" + '"uid"' + ":" + '"' + Gerenshuxing.uid + '"' + ","
            + '"leixing"' + ":" + '"' + jianglileixing + '"' + ","
            + '"shuliang"' + ":" + '"' + jianglishuliang + '"' + ","
            + '"beishu"' + ":" + '"' + beishu + '"' + "}");
        this.daerzigz();
    };
    Jiatingui.prototype.daerzijinxiusuoduan = function () {
    };
    Jiatingui.prototype.panduandaerzijinxiu = function () {
        if (this.daerzijiaohu.daerzijinxiu.enabled == false) {
            this.daerzigz();
        }
    };
    Jiatingui.prototype.daerzigzkeng1 = function () {
        var duihua1jiesuo = false;
        for (var i = 0; i < Gerenshuxing.daerzixuexi.length; i++) {
            if (Gerenshuxing.daerzixuexi[i] == "1") {
                duihua1jiesuo = true;
                break;
            }
        }
        if (duihua1jiesuo == true) {
            this.erjitanchuui.anniudibu.source = "img_jiaohuanniudibu_png";
            this.erjitanchuui.daojuzu0.enabled = true;
            this.erjitanchuui.daojuzu0.addEventListener(egret.TouchEvent.TOUCH_TAP, this.daerzigzkeng1jiesuo, this);
        }
        else {
            this.erjitanchuui.anniudibu.source = "img_jiaohuanniudibu1_png";
            this.erjitanchuui.daojuzu0.enabled = true;
            this.erjitanchuui.daojuzu0.addEventListener(egret.TouchEvent.TOUCH_TAP, this.daerzigzkeng1weijiesuo, this);
        }
        for (var j = 0; j < this.chengyuanhudongbiao.length; j++) {
            if (this.chengyuanhudongbiao[j].id == "1") {
                this.erjitanchuui.wenzineirong.text = this.chengyuanhudongbiao[j].xingdongming;
                this.erjitanchuui.daojutubiao.source = this.chengyuanhudongbiao[j].xianshiicon;
                break;
            }
        }
    };
    Jiatingui.prototype.daerzigzkeng2 = function () {
        var duihua2jiesuo = false;
        for (var i = 0; i < Gerenshuxing.daerzixuexi.length; i++) {
            if (Gerenshuxing.daerzixuexi[i] == "2") {
                duihua2jiesuo = true;
                break;
            }
        }
        if (duihua2jiesuo == true) {
            this.erjitanchuui.anniudibu0.source = "img_jiaohuanniudibu_png";
            this.erjitanchuui.daojuzu1.enabled = true;
            this.erjitanchuui.daojuzu1.addEventListener(egret.TouchEvent.TOUCH_TAP, this.daerzigzkeng2jiesuo, this);
        }
        else {
            this.erjitanchuui.anniudibu0.source = "img_jiaohuanniudibu1_png";
            this.erjitanchuui.daojuzu1.enabled = true;
            this.erjitanchuui.daojuzu1.addEventListener(egret.TouchEvent.TOUCH_TAP, this.daerzigzkeng2weijiesuo, this);
        }
        for (var j = 0; j < this.chengyuanhudongbiao.length; j++) {
            if (this.chengyuanhudongbiao[j].id == "2") {
                this.erjitanchuui.wenzineirong0.text = this.chengyuanhudongbiao[j].xingdongming;
                this.erjitanchuui.daojutubiao0.source = this.chengyuanhudongbiao[j].xianshiicon;
                break;
            }
        }
    };
    Jiatingui.prototype.daerzigzkeng3 = function () {
        var duihua3jiesuo = false;
        for (var i = 0; i < Gerenshuxing.daerzixuexi.length; i++) {
            if (Gerenshuxing.daerzixuexi[i] == "3") {
                duihua3jiesuo = true;
                break;
            }
        }
        if (duihua3jiesuo == true) {
            this.erjitanchuui.anniudibu1.source = "img_jiaohuanniudibu_png";
            this.erjitanchuui.daojuzu2.enabled = true;
            this.erjitanchuui.daojuzu2.addEventListener(egret.TouchEvent.TOUCH_TAP, this.daerzigzkeng3jiesuo, this);
        }
        else {
            this.erjitanchuui.anniudibu1.source = "img_jiaohuanniudibu1_png";
            this.erjitanchuui.daojuzu2.enabled = true;
            this.erjitanchuui.daojuzu2.addEventListener(egret.TouchEvent.TOUCH_TAP, this.daerzigzkeng3weijiesuo, this);
        }
        for (var j = 0; j < this.chengyuanhudongbiao.length; j++) {
            if (this.chengyuanhudongbiao[j].id == "3") {
                this.erjitanchuui.wenzineirong1.text = this.chengyuanhudongbiao[j].xingdongming;
                this.erjitanchuui.daojutubiao1.source = this.chengyuanhudongbiao[j].xianshiicon;
                break;
            }
        }
    };
    Jiatingui.prototype.daerzigzkeng4 = function () {
        var duihua4jiesuo = false;
        for (var i = 0; i < Gerenshuxing.daerzixuexi.length; i++) {
            if (Gerenshuxing.daerzixuexi[i] == "4") {
                duihua4jiesuo = true;
                break;
            }
        }
        if (duihua4jiesuo == true) {
            this.erjitanchuui.anniudibu2.source = "img_jiaohuanniudibu_png";
            this.erjitanchuui.daojuzu3.enabled = true;
            this.erjitanchuui.daojuzu3.addEventListener(egret.TouchEvent.TOUCH_TAP, this.daerzigzkeng4jiesuo, this);
        }
        else {
            this.erjitanchuui.anniudibu2.source = "img_jiaohuanniudibu1_png";
            this.erjitanchuui.daojuzu3.enabled = true;
            this.erjitanchuui.daojuzu3.addEventListener(egret.TouchEvent.TOUCH_TAP, this.daerzigzkeng4weijiesuo, this);
        }
        for (var j = 0; j < this.chengyuanhudongbiao.length; j++) {
            if (this.chengyuanhudongbiao[j].id == "4") {
                this.erjitanchuui.wenzineirong2.text = this.chengyuanhudongbiao[j].xingdongming;
                this.erjitanchuui.daojutubiao2.source = this.chengyuanhudongbiao[j].xianshiicon;
                break;
            }
        }
    };
    Jiatingui.prototype.daerzigzkeng5 = function () {
        var duihua5jiesuo = false;
        for (var i = 0; i < Gerenshuxing.daerzixuexi.length; i++) {
            if (Gerenshuxing.daerzixuexi[i] == "5") {
                duihua5jiesuo = true;
                break;
            }
        }
        if (duihua5jiesuo == true) {
            this.erjitanchuui.anniudibu3.source = "img_jiaohuanniudibu_png";
            this.erjitanchuui.daojuzu4.enabled = true;
            this.erjitanchuui.daojuzu4.addEventListener(egret.TouchEvent.TOUCH_TAP, this.daerzigzkeng5jiesuo, this);
        }
        else {
            this.erjitanchuui.anniudibu3.source = "img_jiaohuanniudibu1_png";
            this.erjitanchuui.daojuzu4.enabled = true;
            this.erjitanchuui.daojuzu4.addEventListener(egret.TouchEvent.TOUCH_TAP, this.daerzigzkeng5weijiesuo, this);
        }
        for (var j = 0; j < this.chengyuanhudongbiao.length; j++) {
            if (this.chengyuanhudongbiao[j].id == "5") {
                this.erjitanchuui.wenzineirong3.text = this.chengyuanhudongbiao[j].xingdongming;
                this.erjitanchuui.daojutubiao3.source = this.chengyuanhudongbiao[j].xianshiicon;
                break;
            }
        }
    };
    Jiatingui.prototype.daerzigzkeng1jiesuo = function () {
        this.jinxiuquerenui = new Tongyongquerenkuang();
        Gameguanli.Kongzhitai().dingbuui.addChild(this.jinxiuquerenui);
        for (var g = 0; g < this.chengyuanhudongbiao.length; g++) {
            if (this.chengyuanhudongbiao[g].id == "1") {
                this.jinxiuquerenui.tishiwenzi.text = "您已选择进修：【" + this.chengyuanhudongbiao[g].xingdongming + "】。\n此次进修消耗时间为：【" + this.chengyuanhudongbiao[g].shijian + "】分钟（现实时间）。";
                this.querenjinxiujiangliqueren(this.chengyuanhudongbiao[g].jiangli, this.chengyuanhudongbiao[g].jianglishuliang);
                this.querenjinxiuxiaohaoqueren(this.chengyuanhudongbiao[g].xiaohao, this.chengyuanhudongbiao[g].xiaohaoshuliang);
                break;
            }
        }
        this.jinxiuquerenui.but_queding.enabled = false;
        this.jinxiuquerenui.but_shuangbei.enabled = false;
        this.jinxiuquerenui.but_queding.alpha = 0;
        this.jinxiuquerenui.but_shuangbei.alpha = 0;
        this.jinxiuquerenui.but_queding0.enabled = true;
        this.jinxiuquerenui.but_queding0.alpha = 1;
        this.jinxiuquerenui.but_queding0.addEventListener(egret.TouchEvent.TOUCH_TAP, this.daerzijinxiu1queren, this);
    };
    Jiatingui.prototype.daerzigzkeng2jiesuo = function () {
        this.jinxiuquerenui = new Tongyongquerenkuang();
        Gameguanli.Kongzhitai().dingbuui.addChild(this.jinxiuquerenui);
        for (var g = 0; g < this.chengyuanhudongbiao.length; g++) {
            if (this.chengyuanhudongbiao[g].id == "2") {
                this.jinxiuquerenui.tishiwenzi.text = "您已选择进修：【" + this.chengyuanhudongbiao[g].xingdongming + "】。\n此次进修消耗时间为：【" + this.chengyuanhudongbiao[g].shijian + "】分钟（现实时间）。";
                this.querenjinxiujiangliqueren(this.chengyuanhudongbiao[g].jiangli, this.chengyuanhudongbiao[g].jianglishuliang);
                this.querenjinxiuxiaohaoqueren(this.chengyuanhudongbiao[g].xiaohao, this.chengyuanhudongbiao[g].xiaohaoshuliang);
                break;
            }
        }
        this.jinxiuquerenui.but_queding.enabled = false;
        this.jinxiuquerenui.but_shuangbei.enabled = false;
        this.jinxiuquerenui.but_queding.alpha = 0;
        this.jinxiuquerenui.but_shuangbei.alpha = 0;
        this.jinxiuquerenui.but_queding0.enabled = true;
        this.jinxiuquerenui.but_queding0.alpha = 1;
        this.jinxiuquerenui.but_queding0.addEventListener(egret.TouchEvent.TOUCH_TAP, this.daerzijinxiu2queren, this);
    };
    Jiatingui.prototype.daerzigzkeng3jiesuo = function () {
        this.jinxiuquerenui = new Tongyongquerenkuang();
        Gameguanli.Kongzhitai().dingbuui.addChild(this.jinxiuquerenui);
        for (var g = 0; g < this.chengyuanhudongbiao.length; g++) {
            if (this.chengyuanhudongbiao[g].id == "3") {
                this.jinxiuquerenui.tishiwenzi.text = "您已选择进修：【" + this.chengyuanhudongbiao[g].xingdongming + "】。\n此次进修消耗时间为：【" + this.chengyuanhudongbiao[g].shijian + "】分钟（现实时间）。";
                this.querenjinxiujiangliqueren(this.chengyuanhudongbiao[g].jiangli, this.chengyuanhudongbiao[g].jianglishuliang);
                this.querenjinxiuxiaohaoqueren(this.chengyuanhudongbiao[g].xiaohao, this.chengyuanhudongbiao[g].xiaohaoshuliang);
                break;
            }
        }
        this.jinxiuquerenui.but_queding.enabled = false;
        this.jinxiuquerenui.but_shuangbei.enabled = false;
        this.jinxiuquerenui.but_queding.alpha = 0;
        this.jinxiuquerenui.but_shuangbei.alpha = 0;
        this.jinxiuquerenui.but_queding0.enabled = true;
        this.jinxiuquerenui.but_queding0.alpha = 1;
        this.jinxiuquerenui.but_queding0.addEventListener(egret.TouchEvent.TOUCH_TAP, this.daerzijinxiu3queren, this);
    };
    Jiatingui.prototype.daerzigzkeng4jiesuo = function () {
        this.jinxiuquerenui = new Tongyongquerenkuang();
        Gameguanli.Kongzhitai().dingbuui.addChild(this.jinxiuquerenui);
        for (var g = 0; g < this.chengyuanhudongbiao.length; g++) {
            if (this.chengyuanhudongbiao[g].id == "4") {
                this.jinxiuquerenui.tishiwenzi.text = "您已选择进修：【" + this.chengyuanhudongbiao[g].xingdongming + "】。\n此次进修消耗时间为：【" + this.chengyuanhudongbiao[g].shijian + "】分钟（现实时间）。";
                this.querenjinxiujiangliqueren(this.chengyuanhudongbiao[g].jiangli, this.chengyuanhudongbiao[g].jianglishuliang);
                this.querenjinxiuxiaohaoqueren(this.chengyuanhudongbiao[g].xiaohao, this.chengyuanhudongbiao[g].xiaohaoshuliang);
                break;
            }
        }
        this.jinxiuquerenui.but_queding.enabled = false;
        this.jinxiuquerenui.but_shuangbei.enabled = false;
        this.jinxiuquerenui.but_queding.alpha = 0;
        this.jinxiuquerenui.but_shuangbei.alpha = 0;
        this.jinxiuquerenui.but_queding0.enabled = true;
        this.jinxiuquerenui.but_queding0.alpha = 1;
        this.jinxiuquerenui.but_queding0.addEventListener(egret.TouchEvent.TOUCH_TAP, this.daerzijinxiu4queren, this);
    };
    Jiatingui.prototype.daerzigzkeng5jiesuo = function () {
        this.jinxiuquerenui = new Tongyongquerenkuang();
        Gameguanli.Kongzhitai().dingbuui.addChild(this.jinxiuquerenui);
        for (var g = 0; g < this.chengyuanhudongbiao.length; g++) {
            if (this.chengyuanhudongbiao[g].id == "5") {
                this.jinxiuquerenui.tishiwenzi.text = "您已选择进修：【" + this.chengyuanhudongbiao[g].xingdongming + "】。\n此次进修消耗时间为：【" + this.chengyuanhudongbiao[g].shijian + "】分钟（现实时间）。";
                this.querenjinxiujiangliqueren(this.chengyuanhudongbiao[g].jiangli, this.chengyuanhudongbiao[g].jianglishuliang);
                this.querenjinxiuxiaohaoqueren(this.chengyuanhudongbiao[g].xiaohao, this.chengyuanhudongbiao[g].xiaohaoshuliang);
                break;
            }
        }
        this.jinxiuquerenui.but_queding.enabled = false;
        this.jinxiuquerenui.but_shuangbei.enabled = false;
        this.jinxiuquerenui.but_queding.alpha = 0;
        this.jinxiuquerenui.but_shuangbei.alpha = 0;
        this.jinxiuquerenui.but_queding0.enabled = true;
        this.jinxiuquerenui.but_queding0.alpha = 1;
        this.jinxiuquerenui.but_queding0.addEventListener(egret.TouchEvent.TOUCH_TAP, this.daerzijinxiu5queren, this);
    };
    Jiatingui.prototype.daerzijinxiu1queren = function () {
        Gameguanli.Kongzhitai().dingbuui.removeChild(this.jinxiuquerenui);
        this.fasongqurenshuju("1", "1", "1");
    };
    Jiatingui.prototype.daerzijinxiu2queren = function () {
        Gameguanli.Kongzhitai().dingbuui.removeChild(this.jinxiuquerenui);
        this.fasongqurenshuju("2", "1", "1");
    };
    Jiatingui.prototype.daerzijinxiu3queren = function () {
        Gameguanli.Kongzhitai().dingbuui.removeChild(this.jinxiuquerenui);
        this.fasongqurenshuju("3", "1", "1");
    };
    Jiatingui.prototype.daerzijinxiu4queren = function () {
        Gameguanli.Kongzhitai().dingbuui.removeChild(this.jinxiuquerenui);
        this.fasongqurenshuju("4", "1", "1");
    };
    Jiatingui.prototype.daerzijinxiu5queren = function () {
        Gameguanli.Kongzhitai().dingbuui.removeChild(this.jinxiuquerenui);
        this.fasongqurenshuju("5", "1", "1");
    };
    Jiatingui.prototype.daerzigzkeng1weijiesuo = function () {
        this.jinxiuquerenui = new Tongyongquerenkuang();
        Gameguanli.Kongzhitai().dingbuui.addChild(this.jinxiuquerenui);
        this.jinxiuquerenui.jiangliicon1.source = "";
        this.jinxiuquerenui.jiangli1.text = "";
        this.jinxiuquerenui.jiangliicon2.source = "";
        this.jinxiuquerenui.jiangli2.text = "";
        this.jinxiuquerenui.but_queding.enabled = false;
        this.jinxiuquerenui.but_shuangbei.enabled = false;
        this.jinxiuquerenui.but_queding.alpha = 0;
        this.jinxiuquerenui.but_shuangbei.alpha = 0;
        this.jinxiuquerenui.but_queding0.enabled = true;
        this.jinxiuquerenui.but_queding0.alpha = 1;
        this.jinxiuquerenui.but_queding0.addEventListener(egret.TouchEvent.TOUCH_TAP, this.guanbijinxiuquerenui, this);
        this.jinxiuquerenui.tishiwenzi.text = "上街到访【书店】时，有几率解锁该进修内容。";
    };
    Jiatingui.prototype.daerzigzkeng2weijiesuo = function () {
        this.jinxiuquerenui = new Tongyongquerenkuang();
        Gameguanli.Kongzhitai().dingbuui.addChild(this.jinxiuquerenui);
        this.jinxiuquerenui.jiangliicon1.source = "";
        this.jinxiuquerenui.jiangli1.text = "";
        this.jinxiuquerenui.jiangliicon2.source = "";
        this.jinxiuquerenui.jiangli2.text = "";
        this.jinxiuquerenui.but_queding.enabled = false;
        this.jinxiuquerenui.but_shuangbei.enabled = false;
        this.jinxiuquerenui.but_queding.alpha = 0;
        this.jinxiuquerenui.but_shuangbei.alpha = 0;
        this.jinxiuquerenui.but_queding0.enabled = true;
        this.jinxiuquerenui.but_queding0.alpha = 1;
        this.jinxiuquerenui.but_queding0.addEventListener(egret.TouchEvent.TOUCH_TAP, this.guanbijinxiuquerenui, this);
        this.jinxiuquerenui.tishiwenzi.text = "上街到访【书店】时，有几率解锁该进修内容。";
    };
    Jiatingui.prototype.daerzigzkeng3weijiesuo = function () {
        this.jinxiuquerenui = new Tongyongquerenkuang();
        Gameguanli.Kongzhitai().dingbuui.addChild(this.jinxiuquerenui);
        this.jinxiuquerenui.jiangliicon1.source = "";
        this.jinxiuquerenui.jiangli1.text = "";
        this.jinxiuquerenui.jiangliicon2.source = "";
        this.jinxiuquerenui.jiangli2.text = "";
        this.jinxiuquerenui.but_queding.enabled = false;
        this.jinxiuquerenui.but_shuangbei.enabled = false;
        this.jinxiuquerenui.but_queding.alpha = 0;
        this.jinxiuquerenui.but_shuangbei.alpha = 0;
        this.jinxiuquerenui.but_queding0.enabled = true;
        this.jinxiuquerenui.but_queding0.alpha = 1;
        this.jinxiuquerenui.but_queding0.addEventListener(egret.TouchEvent.TOUCH_TAP, this.guanbijinxiuquerenui, this);
        this.jinxiuquerenui.tishiwenzi.text = "上街到访【书店】时，有几率解锁该进修内容。";
    };
    Jiatingui.prototype.daerzigzkeng4weijiesuo = function () {
        this.jinxiuquerenui = new Tongyongquerenkuang();
        Gameguanli.Kongzhitai().dingbuui.addChild(this.jinxiuquerenui);
        this.jinxiuquerenui.jiangliicon1.source = "";
        this.jinxiuquerenui.jiangli1.text = "";
        this.jinxiuquerenui.jiangliicon2.source = "";
        this.jinxiuquerenui.jiangli2.text = "";
        this.jinxiuquerenui.but_queding.enabled = false;
        this.jinxiuquerenui.but_shuangbei.enabled = false;
        this.jinxiuquerenui.but_queding.alpha = 0;
        this.jinxiuquerenui.but_shuangbei.alpha = 0;
        this.jinxiuquerenui.but_queding0.enabled = true;
        this.jinxiuquerenui.but_queding0.alpha = 1;
        this.jinxiuquerenui.but_queding0.addEventListener(egret.TouchEvent.TOUCH_TAP, this.guanbijinxiuquerenui, this);
        this.jinxiuquerenui.tishiwenzi.text = "上街到访【书店】时，有几率解锁该进修内容。";
    };
    Jiatingui.prototype.daerzigzkeng5weijiesuo = function () {
        this.jinxiuquerenui = new Tongyongquerenkuang();
        Gameguanli.Kongzhitai().dingbuui.addChild(this.jinxiuquerenui);
        this.jinxiuquerenui.jiangliicon1.source = "";
        this.jinxiuquerenui.jiangli1.text = "";
        this.jinxiuquerenui.jiangliicon2.source = "";
        this.jinxiuquerenui.jiangli2.text = "";
        this.jinxiuquerenui.but_queding.enabled = false;
        this.jinxiuquerenui.but_shuangbei.enabled = false;
        this.jinxiuquerenui.but_queding.alpha = 0;
        this.jinxiuquerenui.but_shuangbei.alpha = 0;
        this.jinxiuquerenui.but_queding0.enabled = true;
        this.jinxiuquerenui.but_queding0.alpha = 1;
        this.jinxiuquerenui.but_queding0.addEventListener(egret.TouchEvent.TOUCH_TAP, this.guanbijinxiuquerenui, this);
        this.jinxiuquerenui.tishiwenzi.text = "上街到访【书店】时，有几率解锁该进修内容。";
    };
    Jiatingui.prototype.daerzizs = function () {
        if (Gameguanli.Kongzhitai().jiatingjiemian.daerzijiaohu.parent) {
            if (this.daerzijiaohu.daerzichakan.enabled == false || this.daerzijiaohu.daerzijinxiu.enabled == false || this.daerzijiaohu.daerzizengsong.enabled == false) {
                Gameguanli.Kongzhitai().jiatingjiemian.daerzijiaohu.removeChild(this.erjitanchuui);
            }
            this.erjitanchuui = new Jiatingchengyuandaojuui();
            Gameguanli.Kongzhitai().jiatingjiemian.daerzijiaohu.addChild(this.erjitanchuui);
            this.erjitanchuui.x = this.daerzijiaohu.daerzibeijing.x + this.daerzijiaohu.daerzibeijing.width;
            this.erjitanchuui.y = this.daerzijiaohu.daerzibeijing.y;
            this.erjitanchuui.daojubiaoti.text = "赠送列表";
            this.chengyuanhudongbiao = RES.getRes("chengyuanhudongbiao_json");
            this.daojubiao = RES.getRes("daojubiao_json");
            this.daerzijiaohu.daerzichakan.enabled = true;
            if (Gerenshuxing.daerzijiaotan > 0) {
                this.daerzijiaohu.daerzijiaotan.enabled = true;
            }
            else {
                this.daerzijiaohu.daerzijiaotan.enabled = false;
            }
            this.daerzijiaohu.daerzijinxiu.enabled = true;
            this.daerzijiaohu.daerzizengsong.enabled = false;
            for (var i = 0; i < this.chengyuanhudongbiao.length; i++) {
                if (this.chengyuanhudongbiao[i].id == "6") {
                    this.zengsongid1 = this.chengyuanhudongbiao[i].xiaohao;
                }
                if (this.chengyuanhudongbiao[i].id == "7") {
                    this.zengsongid2 = this.chengyuanhudongbiao[i].xiaohao;
                }
                if (this.chengyuanhudongbiao[i].id == "8") {
                    this.zengsongid3 = this.chengyuanhudongbiao[i].xiaohao;
                }
                if (this.chengyuanhudongbiao[i].id == "9") {
                    this.zengsongid4 = this.chengyuanhudongbiao[i].xiaohao;
                }
                if (this.chengyuanhudongbiao[i].id == "10") {
                    this.zengsongid5 = this.chengyuanhudongbiao[i].xiaohao;
                }
            }
            this.daerzizskeng1();
            this.daerzizskeng2();
            this.daerzizskeng3();
            this.daerzizskeng4();
            this.daerzizskeng5();
        }
    };
    Jiatingui.prototype.daerzizskeng1 = function () {
        for (var h in Gerencaipudengji.daoju) {
            if (h == this.zengsongid1) {
                if (parseInt(Gerencaipudengji.daoju[h][0]) > 0) {
                    this.erjitanchuui.zsanniudb1.source = "img_jiaohuanniudibu_png";
                    this.erjitanchuui.geshudikuang1.alpha = 1;
                    this.erjitanchuui.geshuwenzi1.text = Gerencaipudengji.daoju[h][0];
                    this.erjitanchuui.zengsong1.enabled = true;
                    this.erjitanchuui.zengsong1.addEventListener(egret.TouchEvent.TOUCH_TAP, this.daerzizskeng1jiesuo, this);
                    break;
                }
                else {
                    this.erjitanchuui.zsanniudb1.source = "img_jiaohuanniudibu1_png";
                    this.erjitanchuui.geshudikuang1.alpha = 0;
                    this.erjitanchuui.geshuwenzi1.text = "";
                    this.erjitanchuui.zengsong1.enabled = true;
                    this.erjitanchuui.zengsong1.addEventListener(egret.TouchEvent.TOUCH_TAP, this.daerzizskeng1jiesuo, this);
                    break;
                }
            }
        }
        for (var j = 0; j < this.daojubiao.length; j++) {
            if (this.daojubiao[j].id == this.zengsongid1) {
                this.erjitanchuui.zengsongtupian1.source = this.daojubiao[j].xianshiicon;
                this.erjitanchuui.wznr1.text = this.daojubiao[j].mingcheng;
                break;
            }
        }
    };
    Jiatingui.prototype.daerzizskeng2 = function () {
        for (var h in Gerencaipudengji.daoju) {
            if (h == this.zengsongid2) {
                if (parseInt(Gerencaipudengji.daoju[h][0]) > 0) {
                    this.erjitanchuui.zsanniudb2.source = "img_jiaohuanniudibu_png";
                    this.erjitanchuui.geshudikuang2.alpha = 1;
                    this.erjitanchuui.geshuwenzi2.text = Gerencaipudengji.daoju[h][0];
                    this.erjitanchuui.zengsong2.enabled = true;
                    this.erjitanchuui.zengsong2.addEventListener(egret.TouchEvent.TOUCH_TAP, this.daerzizskeng2jiesuo, this);
                    break;
                }
                else {
                    this.erjitanchuui.zsanniudb2.source = "img_jiaohuanniudibu1_png";
                    this.erjitanchuui.geshudikuang2.alpha = 0;
                    this.erjitanchuui.geshuwenzi2.text = "";
                    this.erjitanchuui.zengsong2.enabled = true;
                    this.erjitanchuui.zengsong2.addEventListener(egret.TouchEvent.TOUCH_TAP, this.daerzizskeng2jiesuo, this);
                    break;
                }
            }
        }
        for (var j = 0; j < this.daojubiao.length; j++) {
            if (this.daojubiao[j].id == this.zengsongid2) {
                this.erjitanchuui.zengsongtupian2.source = this.daojubiao[j].xianshiicon;
                this.erjitanchuui.wznr2.text = this.daojubiao[j].mingcheng;
                break;
            }
        }
    };
    Jiatingui.prototype.daerzizskeng3 = function () {
        for (var h in Gerencaipudengji.daoju) {
            if (h == this.zengsongid3) {
                if (parseInt(Gerencaipudengji.daoju[h][0]) > 0) {
                    this.erjitanchuui.zsanniudb3.source = "img_jiaohuanniudibu_png";
                    this.erjitanchuui.geshudikuang3.alpha = 1;
                    this.erjitanchuui.geshuwenzi3.text = Gerencaipudengji.daoju[h][0];
                    this.erjitanchuui.zengsong3.enabled = true;
                    this.erjitanchuui.zengsong3.addEventListener(egret.TouchEvent.TOUCH_TAP, this.daerzizskeng3jiesuo, this);
                    break;
                }
                else {
                    this.erjitanchuui.zsanniudb3.source = "img_jiaohuanniudibu1_png";
                    this.erjitanchuui.geshudikuang3.alpha = 0;
                    this.erjitanchuui.geshuwenzi3.text = "";
                    this.erjitanchuui.zengsong3.enabled = true;
                    this.erjitanchuui.zengsong3.addEventListener(egret.TouchEvent.TOUCH_TAP, this.daerzizskeng3jiesuo, this);
                    break;
                }
            }
        }
        for (var j = 0; j < this.daojubiao.length; j++) {
            if (this.daojubiao[j].id == this.zengsongid3) {
                this.erjitanchuui.zengsongtupian3.source = this.daojubiao[j].xianshiicon;
                this.erjitanchuui.wznr3.text = this.daojubiao[j].mingcheng;
                break;
            }
        }
    };
    Jiatingui.prototype.daerzizskeng4 = function () {
        for (var h in Gerencaipudengji.daoju) {
            if (h == this.zengsongid4) {
                if (parseInt(Gerencaipudengji.daoju[h][0]) > 0) {
                    this.erjitanchuui.zsanniudb4.source = "img_jiaohuanniudibu_png";
                    this.erjitanchuui.geshudikuang4.alpha = 1;
                    this.erjitanchuui.geshuwenzi4.text = Gerencaipudengji.daoju[h][0];
                    this.erjitanchuui.zengsong4.enabled = true;
                    this.erjitanchuui.zengsong4.addEventListener(egret.TouchEvent.TOUCH_TAP, this.daerzizskeng4jiesuo, this);
                    break;
                }
                else {
                    this.erjitanchuui.zsanniudb4.source = "img_jiaohuanniudibu1_png";
                    this.erjitanchuui.geshudikuang4.alpha = 0;
                    this.erjitanchuui.geshuwenzi4.text = "";
                    this.erjitanchuui.zengsong4.enabled = true;
                    this.erjitanchuui.zengsong4.addEventListener(egret.TouchEvent.TOUCH_TAP, this.daerzizskeng4jiesuo, this);
                    break;
                }
            }
        }
        for (var j = 0; j < this.daojubiao.length; j++) {
            if (this.daojubiao[j].id == this.zengsongid4) {
                this.erjitanchuui.zengsongtupian4.source = this.daojubiao[j].xianshiicon;
                this.erjitanchuui.wznr4.text = this.daojubiao[j].mingcheng;
                break;
            }
        }
    };
    Jiatingui.prototype.daerzizskeng5 = function () {
        for (var h in Gerencaipudengji.daoju) {
            if (h == this.zengsongid5) {
                if (parseInt(Gerencaipudengji.daoju[h][0]) > 0) {
                    this.erjitanchuui.zsanniudb5.source = "img_jiaohuanniudibu_png";
                    this.erjitanchuui.geshudikuang5.alpha = 1;
                    this.erjitanchuui.geshuwenzi5.text = Gerencaipudengji.daoju[h][0];
                    this.erjitanchuui.zengsong5.enabled = true;
                    this.erjitanchuui.zengsong5.addEventListener(egret.TouchEvent.TOUCH_TAP, this.daerzizskeng5jiesuo, this);
                    break;
                }
                else {
                    this.erjitanchuui.zsanniudb5.source = "img_jiaohuanniudibu1_png";
                    this.erjitanchuui.geshudikuang5.alpha = 0;
                    this.erjitanchuui.geshuwenzi5.text = "";
                    this.erjitanchuui.zengsong5.enabled = true;
                    this.erjitanchuui.zengsong5.addEventListener(egret.TouchEvent.TOUCH_TAP, this.daerzizskeng5jiesuo, this);
                    break;
                }
            }
        }
        for (var j = 0; j < this.daojubiao.length; j++) {
            if (this.daojubiao[j].id == this.zengsongid5) {
                this.erjitanchuui.zengsongtupian5.source = this.daojubiao[j].xianshiicon;
                this.erjitanchuui.wznr5.text = this.daojubiao[j].mingcheng;
                break;
            }
        }
    };
    Jiatingui.prototype.daerzizskeng1jiesuo = function () {
        this.jinxiuquerenui = new Tongyongquerenkuang();
        Gameguanli.Kongzhitai().dingbuui.addChild(this.jinxiuquerenui);
        for (var g = 0; g < this.daojubiao.length; g++) {
            if (this.daojubiao[g].id == this.zengsongid1) {
                this.jinxiuquerenui.tishiwenzi.text = this.daojubiao[g].tips;
                this.querenjinxiujiangliqueren(this.daojubiao[g].jiangli, this.daojubiao[g].jianglishuliang);
                this.querenjinxiuxiaohaoqueren(this.daojubiao[g].id, 1);
                break;
            }
        }
        this.jinxiuquerenui.but_queding.enabled = false;
        this.jinxiuquerenui.but_shuangbei.enabled = false;
        this.jinxiuquerenui.but_queding.alpha = 0;
        this.jinxiuquerenui.but_shuangbei.alpha = 0;
        this.jinxiuquerenui.but_queding0.enabled = true;
        this.jinxiuquerenui.but_queding0.alpha = 1;
        this.jinxiuquerenui.but_queding0.addEventListener(egret.TouchEvent.TOUCH_TAP, this.daerzizs1queren, this);
    };
    Jiatingui.prototype.daerzizskeng2jiesuo = function () {
        this.jinxiuquerenui = new Tongyongquerenkuang();
        Gameguanli.Kongzhitai().dingbuui.addChild(this.jinxiuquerenui);
        for (var g = 0; g < this.daojubiao.length; g++) {
            if (this.daojubiao[g].id == this.zengsongid2) {
                this.jinxiuquerenui.tishiwenzi.text = this.daojubiao[g].tips;
                this.querenjinxiujiangliqueren(this.daojubiao[g].jiangli, this.daojubiao[g].jianglishuliang);
                this.querenjinxiuxiaohaoqueren(this.daojubiao[g].id, 1);
                break;
            }
        }
        this.jinxiuquerenui.but_queding.enabled = false;
        this.jinxiuquerenui.but_shuangbei.enabled = false;
        this.jinxiuquerenui.but_queding.alpha = 0;
        this.jinxiuquerenui.but_shuangbei.alpha = 0;
        this.jinxiuquerenui.but_queding0.enabled = true;
        this.jinxiuquerenui.but_queding0.alpha = 1;
        this.jinxiuquerenui.but_queding0.addEventListener(egret.TouchEvent.TOUCH_TAP, this.daerzizs2queren, this);
    };
    Jiatingui.prototype.daerzizskeng3jiesuo = function () {
        this.jinxiuquerenui = new Tongyongquerenkuang();
        Gameguanli.Kongzhitai().dingbuui.addChild(this.jinxiuquerenui);
        for (var g = 0; g < this.daojubiao.length; g++) {
            if (this.daojubiao[g].id == this.zengsongid3) {
                this.jinxiuquerenui.tishiwenzi.text = this.daojubiao[g].tips;
                this.querenjinxiujiangliqueren(this.daojubiao[g].jiangli, this.daojubiao[g].jianglishuliang);
                this.querenjinxiuxiaohaoqueren(this.daojubiao[g].id, 1);
                break;
            }
        }
        this.jinxiuquerenui.but_queding.enabled = false;
        this.jinxiuquerenui.but_shuangbei.enabled = false;
        this.jinxiuquerenui.but_queding.alpha = 0;
        this.jinxiuquerenui.but_shuangbei.alpha = 0;
        this.jinxiuquerenui.but_queding0.enabled = true;
        this.jinxiuquerenui.but_queding0.alpha = 1;
        this.jinxiuquerenui.but_queding0.addEventListener(egret.TouchEvent.TOUCH_TAP, this.daerzizs3queren, this);
    };
    Jiatingui.prototype.daerzizskeng4jiesuo = function () {
        this.jinxiuquerenui = new Tongyongquerenkuang();
        Gameguanli.Kongzhitai().dingbuui.addChild(this.jinxiuquerenui);
        for (var g = 0; g < this.daojubiao.length; g++) {
            if (this.daojubiao[g].id == this.zengsongid4) {
                this.jinxiuquerenui.tishiwenzi.text = this.daojubiao[g].tips;
                this.querenjinxiujiangliqueren(this.daojubiao[g].jiangli, this.daojubiao[g].jianglishuliang);
                this.querenjinxiuxiaohaoqueren(this.daojubiao[g].id, 1);
                break;
            }
        }
        this.jinxiuquerenui.but_queding.enabled = false;
        this.jinxiuquerenui.but_shuangbei.enabled = false;
        this.jinxiuquerenui.but_queding.alpha = 0;
        this.jinxiuquerenui.but_shuangbei.alpha = 0;
        this.jinxiuquerenui.but_queding0.enabled = true;
        this.jinxiuquerenui.but_queding0.alpha = 1;
        this.jinxiuquerenui.but_queding0.addEventListener(egret.TouchEvent.TOUCH_TAP, this.daerzizs4queren, this);
    };
    Jiatingui.prototype.daerzizskeng5jiesuo = function () {
        this.jinxiuquerenui = new Tongyongquerenkuang();
        Gameguanli.Kongzhitai().dingbuui.addChild(this.jinxiuquerenui);
        for (var g = 0; g < this.daojubiao.length; g++) {
            if (this.daojubiao[g].id == this.zengsongid5) {
                this.jinxiuquerenui.tishiwenzi.text = this.daojubiao[g].tips;
                this.querenjinxiujiangliqueren(this.daojubiao[g].jiangli, this.daojubiao[g].jianglishuliang);
                this.querenjinxiuxiaohaoqueren(this.daojubiao[g].id, 1);
                break;
            }
        }
        this.jinxiuquerenui.but_queding.enabled = false;
        this.jinxiuquerenui.but_shuangbei.enabled = false;
        this.jinxiuquerenui.but_queding.alpha = 0;
        this.jinxiuquerenui.but_shuangbei.alpha = 0;
        this.jinxiuquerenui.but_queding0.enabled = true;
        this.jinxiuquerenui.but_queding0.alpha = 1;
        this.jinxiuquerenui.but_queding0.addEventListener(egret.TouchEvent.TOUCH_TAP, this.daerzizs5queren, this);
    };
    Jiatingui.prototype.daerzizs1queren = function () {
        Gameguanli.Kongzhitai().dingbuui.removeChild(this.jinxiuquerenui);
        for (var h in Gerencaipudengji.daoju) {
            if (h == this.zengsongid1) {
                if (parseInt(Gerencaipudengji.daoju[h][0]) > 0) {
                    this.tongguojiangli(this.zengsongid1);
                    Gameguanli.Kongzhitai().cuowutishixinxi("收到你的礼物，大儿子似乎开心了许多...");
                    break;
                }
                else {
                    Gameguanli.Kongzhitai().cuowutishixinxi("您并没有该物品可赠送...");
                    break;
                }
            }
        }
    };
    Jiatingui.prototype.daerzizs2queren = function () {
        Gameguanli.Kongzhitai().dingbuui.removeChild(this.jinxiuquerenui);
        for (var h in Gerencaipudengji.daoju) {
            if (h == this.zengsongid2) {
                if (parseInt(Gerencaipudengji.daoju[h][0]) > 0) {
                    this.tongguojiangli(this.zengsongid2);
                    Gameguanli.Kongzhitai().cuowutishixinxi("收到你的礼物，大儿子似乎开心了许多...");
                    break;
                }
                else {
                    Gameguanli.Kongzhitai().cuowutishixinxi("您并没有该物品可赠送...");
                    break;
                }
            }
        }
    };
    Jiatingui.prototype.daerzizs3queren = function () {
        Gameguanli.Kongzhitai().dingbuui.removeChild(this.jinxiuquerenui);
        for (var h in Gerencaipudengji.daoju) {
            if (h == this.zengsongid3) {
                if (parseInt(Gerencaipudengji.daoju[h][0]) > 0) {
                    this.tongguojiangli(this.zengsongid3);
                    Gameguanli.Kongzhitai().cuowutishixinxi("收到你的礼物，大儿子似乎开心了许多...");
                    break;
                }
                else {
                    Gameguanli.Kongzhitai().cuowutishixinxi("您并没有该物品可赠送...");
                    break;
                }
            }
        }
    };
    Jiatingui.prototype.daerzizs4queren = function () {
        Gameguanli.Kongzhitai().dingbuui.removeChild(this.jinxiuquerenui);
        for (var h in Gerencaipudengji.daoju) {
            if (h == this.zengsongid4) {
                if (parseInt(Gerencaipudengji.daoju[h][0]) > 0) {
                    this.tongguojiangli(this.zengsongid4);
                    Gameguanli.Kongzhitai().cuowutishixinxi("收到你的礼物，大儿子似乎开心了许多...");
                    break;
                }
                else {
                    Gameguanli.Kongzhitai().cuowutishixinxi("您并没有该物品可赠送...");
                    break;
                }
            }
        }
    };
    Jiatingui.prototype.daerzizs5queren = function () {
        Gameguanli.Kongzhitai().dingbuui.removeChild(this.jinxiuquerenui);
        for (var h in Gerencaipudengji.daoju) {
            if (h == this.zengsongid5) {
                if (parseInt(Gerencaipudengji.daoju[h][0]) > 0) {
                    this.tongguojiangli(this.zengsongid5);
                    Gameguanli.Kongzhitai().cuowutishixinxi("收到你的礼物，大儿子似乎开心了许多...");
                    break;
                }
                else {
                    Gameguanli.Kongzhitai().cuowutishixinxi("您并没有该物品可赠送...");
                    break;
                }
            }
        }
    };
    Jiatingui.prototype.guanbidaerzi = function () {
        Gameguanli.Kongzhitai().jiatingjiemian.removeChild(this.daerzijiaohu);
    };
    Jiatingui.prototype.dianjiererzi = function () {
        var _this = this;
        egret.Tween.get(this.img_ererzi).to({ scaleX: 1.1, scaleY: 1.1 }, 500).call(function () {
            egret.Tween.get(_this.img_ererzi).to({ scaleX: 1, scaleY: 1 }, 500);
        });
        this.ererzijiaohu = new Ererzijiaohuui();
        Gameguanli.Kongzhitai().jiatingjiemian.addChild(this.ererzijiaohu);
        this.ererzijiaohu.ererziguanbi.touchEnabled = true;
        this.ererzijiaohu.ererziguanbi.addEventListener(egret.TouchEvent.TOUCH_TAP, this.guanbiererzi, this);
        this.ererzijiaohu.ererzichakan.enabled = true;
        if (Gerenshuxing.ererzijiaotan > 0) {
            this.ererzijiaohu.ererzijiaotan.enabled = true;
        }
        else {
            this.ererzijiaohu.ererzijiaotan.enabled = false;
        }
        this.ererzijiaohu.ererzijinxiu.enabled = true;
        this.ererzijiaohu.ererzizengsong.enabled = true;
        this.ererzijiaohu.ererzichakan.addEventListener(egret.TouchEvent.TOUCH_TAP, this.ererzick, this);
        this.ererzijiaohu.ererzijiaotan.addEventListener(egret.TouchEvent.TOUCH_TAP, this.ererzijt, this);
        this.ererzijiaohu.ererzijinxiu.addEventListener(egret.TouchEvent.TOUCH_TAP, this.ererzigz, this);
        this.ererzijiaohu.ererzizengsong.addEventListener(egret.TouchEvent.TOUCH_TAP, this.ererzizs, this);
        this.jiatingchengyuanbiao = RES.getRes("jiatingchengyuanbiao_json");
    };
    Jiatingui.prototype.ererzick = function () {
        if (Gameguanli.Kongzhitai().jiatingjiemian.ererzijiaohu.parent) {
            if (this.ererzijiaohu.ererzichakan.enabled == false || this.ererzijiaohu.ererzijinxiu.enabled == false || this.ererzijiaohu.ererzizengsong.enabled == false) {
                Gameguanli.Kongzhitai().jiatingjiemian.ererzijiaohu.removeChild(this.erjitanchuui);
            }
            this.erjitanchuui = new Jiatingchengyuanjieshaoui();
            Gameguanli.Kongzhitai().jiatingjiemian.ererzijiaohu.addChild(this.erjitanchuui);
            this.ererzijiaohu.ererzichakan.enabled = false;
            if (Gerenshuxing.ererzijiaotan > 0) {
                this.ererzijiaohu.ererzijiaotan.enabled = true;
            }
            else {
                this.ererzijiaohu.ererzijiaotan.enabled = false;
            }
            this.ererzijiaohu.ererzijinxiu.enabled = true;
            this.ererzijiaohu.ererzizengsong.enabled = true;
            this.erjitanchuui.x = this.ererzijiaohu.ererzibeijing.x - this.erjitanchuui.width;
            this.erjitanchuui.y = this.ererzijiaohu.ererzibeijing.y;
            this.erjitanchuui.biaotiwenzi.text = "介绍";
            this.erjitanchuui.guanxibiaoqian.text = "关系";
            this.erjitanchuui.qinhelibiaoqian.text = "亲和值";
            this.erjitanchuui.gongzuobiaoqian.text = "工作能力";
            this.erjitanchuui.jiesaobiaoqian.text = "说明";
            for (var i = 0; i < this.jiatingchengyuanbiao.length; i++) {
                if (this.jiatingchengyuanbiao[i].id == "2") {
                    this.erjitanchuui.guanxineirong.text = "" + this.jiatingchengyuanbiao[i].chengyuanming;
                    this.erjitanchuui.qinghelizhi.text = "" + Gerenshuxing.ererzixinxi[0];
                    this.erjitanchuui.gongzuozhi.text = "" + Gerenshuxing.ererzixinxi[1];
                    this.erjitanchuui.jiesaoneirong.text = "" + this.jiatingchengyuanbiao[i].shuoming;
                    break;
                }
            }
        }
    };
    Jiatingui.prototype.ererzijt = function () {
        Gerenshuxing.ererzijiaotan -= 1;
        this.renwujiemian = new Npcduihuaui();
        if (this.ererzijiaohu.ererzichakan.enabled == false) {
            Gameguanli.Kongzhitai().jiatingjiemian.ererzijiaohu.removeChild(this.erjitanchuui);
        }
        Gameguanli.Kongzhitai().dingbuui.addChild(this.renwujiemian);
        this.renwujiemian.chushihua("2");
        this.ererzijiaohu.ererzichakan.enabled = true;
        if (Gerenshuxing.ererzijiaotan > 0) {
            this.ererzijiaohu.ererzijiaotan.enabled = true;
        }
        else {
            this.ererzijiaohu.ererzijiaotan.enabled = false;
        }
        this.ererzijiaohu.ererzijinxiu.enabled = true;
        this.ererzijiaohu.ererzizengsong.enabled = true;
    };
    Jiatingui.prototype.ererzigz = function () {
        if (Gameguanli.Kongzhitai().jiatingjiemian.ererzijiaohu.parent) {
            if (this.ererzijiaohu.ererzichakan.enabled == false || this.ererzijiaohu.ererzijinxiu.enabled == false || this.ererzijiaohu.ererzizengsong.enabled == false) {
                Gameguanli.Kongzhitai().jiatingjiemian.ererzijiaohu.removeChild(this.erjitanchuui);
            }
            if (Gerenshuxing.ererzixinxi[2] != "0") {
                this.erjitanchuui = new Jiatingjinxiuui();
                Gameguanli.Kongzhitai().jiatingjiemian.ererzijiaohu.addChild(this.erjitanchuui);
                this.erjitanchuui.x = this.ererzijiaohu.ererzibeijing.x - this.erjitanchuui.width;
                this.erjitanchuui.y = this.ererzijiaohu.ererzibeijing.y;
                this.chengyuanhudongbiao = RES.getRes("chengyuanhudongbiao_json");
                this.ererzijiaohu.ererzichakan.enabled = true;
                if (Gerenshuxing.ererzijiaotan > 0) {
                    this.ererzijiaohu.ererzijiaotan.enabled = true;
                }
                else {
                    this.ererzijiaohu.ererzijiaotan.enabled = false;
                }
                this.ererzijiaohu.ererzijinxiu.enabled = false;
                this.ererzijiaohu.ererzizengsong.enabled = true;
                for (var i = 0; i < this.chengyuanhudongbiao.length; i++) {
                    if (this.chengyuanhudongbiao[i].id == Gerenshuxing.ererzixinxi[2]) {
                        this.erjitanchuui.jinxiubiaoti.text = this.chengyuanhudongbiao[i].xingdongming;
                        this.erjitanchuui.jinxiutupian.source = this.chengyuanhudongbiao[i].xianshiicon;
                    }
                }
                if (Gerenshuxing.ererzixinxi[3] == "0") {
                    this.erjitanchuui.shengyushijian0.text = "已完成";
                    this.erjitanchuui.quedinganniu.enabled = true;
                    this.erjitanchuui.quedinganniu.label = "确定";
                    this.erjitanchuui.quedinganniu.addEventListener(egret.TouchEvent.TOUCH_TAP, this.ererzijinxiulinjiang, this);
                }
                else {
                    var dangqianshijian = (new Date()).valueOf();
                    var shengyushijian = parseInt(Gerenshuxing.ererzixinxi[3]) - dangqianshijian;
                    this.erjitanchuui.shengyushijian0.text = Math.floor((shengyushijian / 60000) % 60) + ":" + Math.floor((shengyushijian / 1000) % 60);
                    this.erjitanchuui.quedinganniu.enabled = true;
                    this.erjitanchuui.quedinganniu.label = "加速（广告）";
                    this.erjitanchuui.quedinganniu.addEventListener(egret.TouchEvent.TOUCH_TAP, this.ererzijinxiusuoduan, this);
                    var dingshiqi = new egret.Timer(1000, 1);
                    dingshiqi.addEventListener(egret.TimerEvent.TIMER, this.panduanererzijinxiu, this);
                    dingshiqi.start();
                }
            }
            else {
                this.erjitanchuui = new Jiatingchengyuanzengsong();
                Gameguanli.Kongzhitai().jiatingjiemian.ererzijiaohu.addChild(this.erjitanchuui);
                this.erjitanchuui.x = this.ererzijiaohu.ererzibeijing.x - this.erjitanchuui.width;
                this.erjitanchuui.y = this.ererzijiaohu.ererzibeijing.y;
                this.erjitanchuui.wenzibiaoti.text = "工作内容";
                this.chengyuanhudongbiao = RES.getRes("chengyuanhudongbiao_json");
                this.ererzigzkeng1();
                this.ererzigzkeng2();
                this.ererzigzkeng3();
                this.ererzigzkeng4();
                this.ererzigzkeng5();
            }
            this.ererzijiaohu.ererzichakan.enabled = true;
            if (Gerenshuxing.ererzijiaotan > 0) {
                this.ererzijiaohu.ererzijiaotan.enabled = true;
            }
            else {
                this.ererzijiaohu.ererzijiaotan.enabled = false;
            }
            this.ererzijiaohu.ererzijinxiu.enabled = false;
            this.ererzijiaohu.ererzizengsong.enabled = true;
        }
    };
    Jiatingui.prototype.ererzijinxiulinjiang = function () {
        var idshuju = Gerenshuxing.ererzixinxi[2];
        var jianglileixing = 0;
        var jianglishuliang = 0;
        var beishu = 1;
        for (var j = 0; j < this.chengyuanhudongbiao.length; j++) {
            if (this.chengyuanhudongbiao[j].id == idshuju) {
                jianglileixing = this.chengyuanhudongbiao[j].jiangli;
                jianglishuliang = this.chengyuanhudongbiao[j].jianglishuliang;
                break;
            }
        }
        Gerenshuxing.ererzixinxi[2] = "0";
        Weblianjie.fasongshuju("code:078", "{" + '"uid"' + ":" + '"' + Gerenshuxing.uid + '"' + ","
            + '"leixing"' + ":" + '"' + jianglileixing + '"' + ","
            + '"shuliang"' + ":" + '"' + jianglishuliang + '"' + ","
            + '"beishu"' + ":" + '"' + beishu + '"' + "}");
        this.ererzigz();
    };
    Jiatingui.prototype.ererzijinxiusuoduan = function () {
    };
    Jiatingui.prototype.panduanererzijinxiu = function () {
        if (this.ererzijiaohu.ererzijinxiu.enabled == false) {
            this.ererzigz();
        }
    };
    Jiatingui.prototype.ererzigzkeng1 = function () {
        var duihua1jiesuo = false;
        for (var i = 0; i < Gerenshuxing.ererzixuexi.length; i++) {
            if (Gerenshuxing.ererzixuexi[i] == "21") {
                duihua1jiesuo = true;
                break;
            }
        }
        if (duihua1jiesuo == true) {
            this.erjitanchuui.anniudibu.source = "img_jiaohuanniudibu_png";
            this.erjitanchuui.daojuzu0.enabled = true;
            this.erjitanchuui.daojuzu0.addEventListener(egret.TouchEvent.TOUCH_TAP, this.ererzigzkeng1jiesuo, this);
        }
        else {
            this.erjitanchuui.anniudibu.source = "img_jiaohuanniudibu1_png";
            this.erjitanchuui.daojuzu0.enabled = true;
            this.erjitanchuui.daojuzu0.addEventListener(egret.TouchEvent.TOUCH_TAP, this.ererzigzkeng1weijiesuo, this);
        }
        for (var j = 0; j < this.chengyuanhudongbiao.length; j++) {
            if (this.chengyuanhudongbiao[j].id == "21") {
                this.erjitanchuui.wenzineirong.text = this.chengyuanhudongbiao[j].xingdongming;
                this.erjitanchuui.daojutubiao.source = this.chengyuanhudongbiao[j].xianshiicon;
                break;
            }
        }
    };
    Jiatingui.prototype.ererzigzkeng2 = function () {
        var duihua2jiesuo = false;
        for (var i = 0; i < Gerenshuxing.ererzixuexi.length; i++) {
            if (Gerenshuxing.ererzixuexi[i] == "22") {
                duihua2jiesuo = true;
                break;
            }
        }
        if (duihua2jiesuo == true) {
            this.erjitanchuui.anniudibu0.source = "img_jiaohuanniudibu_png";
            this.erjitanchuui.daojuzu1.enabled = true;
            this.erjitanchuui.daojuzu1.addEventListener(egret.TouchEvent.TOUCH_TAP, this.ererzigzkeng2jiesuo, this);
        }
        else {
            this.erjitanchuui.anniudibu0.source = "img_jiaohuanniudibu1_png";
            this.erjitanchuui.daojuzu1.enabled = true;
            this.erjitanchuui.daojuzu1.addEventListener(egret.TouchEvent.TOUCH_TAP, this.ererzigzkeng2weijiesuo, this);
        }
        for (var j = 0; j < this.chengyuanhudongbiao.length; j++) {
            if (this.chengyuanhudongbiao[j].id == "22") {
                this.erjitanchuui.wenzineirong0.text = this.chengyuanhudongbiao[j].xingdongming;
                this.erjitanchuui.daojutubiao0.source = this.chengyuanhudongbiao[j].xianshiicon;
                break;
            }
        }
    };
    Jiatingui.prototype.ererzigzkeng3 = function () {
        var duihua3jiesuo = false;
        for (var i = 0; i < Gerenshuxing.ererzixuexi.length; i++) {
            if (Gerenshuxing.ererzixuexi[i] == "23") {
                duihua3jiesuo = true;
                break;
            }
        }
        if (duihua3jiesuo == true) {
            this.erjitanchuui.anniudibu1.source = "img_jiaohuanniudibu_png";
            this.erjitanchuui.daojuzu2.enabled = true;
            this.erjitanchuui.daojuzu2.addEventListener(egret.TouchEvent.TOUCH_TAP, this.ererzigzkeng3jiesuo, this);
        }
        else {
            this.erjitanchuui.anniudibu1.source = "img_jiaohuanniudibu1_png";
            this.erjitanchuui.daojuzu2.enabled = true;
            this.erjitanchuui.daojuzu2.addEventListener(egret.TouchEvent.TOUCH_TAP, this.ererzigzkeng3weijiesuo, this);
        }
        for (var j = 0; j < this.chengyuanhudongbiao.length; j++) {
            if (this.chengyuanhudongbiao[j].id == "23") {
                this.erjitanchuui.wenzineirong1.text = this.chengyuanhudongbiao[j].xingdongming;
                this.erjitanchuui.daojutubiao1.source = this.chengyuanhudongbiao[j].xianshiicon;
                break;
            }
        }
    };
    Jiatingui.prototype.ererzigzkeng4 = function () {
        var duihua4jiesuo = false;
        for (var i = 0; i < Gerenshuxing.ererzixuexi.length; i++) {
            if (Gerenshuxing.ererzixuexi[i] == "24") {
                duihua4jiesuo = true;
                break;
            }
        }
        if (duihua4jiesuo == true) {
            this.erjitanchuui.anniudibu2.source = "img_jiaohuanniudibu_png";
            this.erjitanchuui.daojuzu3.enabled = true;
            this.erjitanchuui.daojuzu3.addEventListener(egret.TouchEvent.TOUCH_TAP, this.ererzigzkeng4jiesuo, this);
        }
        else {
            this.erjitanchuui.anniudibu2.source = "img_jiaohuanniudibu1_png";
            this.erjitanchuui.daojuzu3.enabled = true;
            this.erjitanchuui.daojuzu3.addEventListener(egret.TouchEvent.TOUCH_TAP, this.ererzigzkeng4weijiesuo, this);
        }
        for (var j = 0; j < this.chengyuanhudongbiao.length; j++) {
            if (this.chengyuanhudongbiao[j].id == "24") {
                this.erjitanchuui.wenzineirong2.text = this.chengyuanhudongbiao[j].xingdongming;
                this.erjitanchuui.daojutubiao2.source = this.chengyuanhudongbiao[j].xianshiicon;
                break;
            }
        }
    };
    Jiatingui.prototype.ererzigzkeng5 = function () {
        var duihua5jiesuo = false;
        for (var i = 0; i < Gerenshuxing.ererzixuexi.length; i++) {
            if (Gerenshuxing.ererzixuexi[i] == "25") {
                duihua5jiesuo = true;
                break;
            }
        }
        if (duihua5jiesuo == true) {
            this.erjitanchuui.anniudibu3.source = "img_jiaohuanniudibu_png";
            this.erjitanchuui.daojuzu4.enabled = true;
            this.erjitanchuui.daojuzu4.addEventListener(egret.TouchEvent.TOUCH_TAP, this.ererzigzkeng5jiesuo, this);
        }
        else {
            this.erjitanchuui.anniudibu3.source = "img_jiaohuanniudibu1_png";
            this.erjitanchuui.daojuzu4.enabled = true;
            this.erjitanchuui.daojuzu4.addEventListener(egret.TouchEvent.TOUCH_TAP, this.ererzigzkeng5weijiesuo, this);
        }
        for (var j = 0; j < this.chengyuanhudongbiao.length; j++) {
            if (this.chengyuanhudongbiao[j].id == "25") {
                this.erjitanchuui.wenzineirong3.text = this.chengyuanhudongbiao[j].xingdongming;
                this.erjitanchuui.daojutubiao3.source = this.chengyuanhudongbiao[j].xianshiicon;
                break;
            }
        }
    };
    Jiatingui.prototype.ererzigzkeng1jiesuo = function () {
        this.jinxiuquerenui = new Tongyongquerenkuang();
        Gameguanli.Kongzhitai().dingbuui.addChild(this.jinxiuquerenui);
        for (var g = 0; g < this.chengyuanhudongbiao.length; g++) {
            if (this.chengyuanhudongbiao[g].id == "21") {
                this.jinxiuquerenui.tishiwenzi.text = "您已选择进修：【" + this.chengyuanhudongbiao[g].xingdongming + "】。\n此次进修消耗时间为：【" + this.chengyuanhudongbiao[g].shijian + "】分钟（现实时间）。";
                this.querenjinxiujiangliqueren(this.chengyuanhudongbiao[g].jiangli, this.chengyuanhudongbiao[g].jianglishuliang);
                this.querenjinxiuxiaohaoqueren(this.chengyuanhudongbiao[g].xiaohao, this.chengyuanhudongbiao[g].xiaohaoshuliang);
                break;
            }
        }
        this.jinxiuquerenui.but_queding.enabled = false;
        this.jinxiuquerenui.but_shuangbei.enabled = false;
        this.jinxiuquerenui.but_queding.alpha = 0;
        this.jinxiuquerenui.but_shuangbei.alpha = 0;
        this.jinxiuquerenui.but_queding0.enabled = true;
        this.jinxiuquerenui.but_queding0.alpha = 1;
        this.jinxiuquerenui.but_queding0.addEventListener(egret.TouchEvent.TOUCH_TAP, this.ererzijinxiu1queren, this);
    };
    Jiatingui.prototype.ererzigzkeng2jiesuo = function () {
        this.jinxiuquerenui = new Tongyongquerenkuang();
        Gameguanli.Kongzhitai().dingbuui.addChild(this.jinxiuquerenui);
        for (var g = 0; g < this.chengyuanhudongbiao.length; g++) {
            if (this.chengyuanhudongbiao[g].id == "22") {
                this.jinxiuquerenui.tishiwenzi.text = "您已选择进修：【" + this.chengyuanhudongbiao[g].xingdongming + "】。\n此次进修消耗时间为：【" + this.chengyuanhudongbiao[g].shijian + "】分钟（现实时间）。";
                this.querenjinxiujiangliqueren(this.chengyuanhudongbiao[g].jiangli, this.chengyuanhudongbiao[g].jianglishuliang);
                this.querenjinxiuxiaohaoqueren(this.chengyuanhudongbiao[g].xiaohao, this.chengyuanhudongbiao[g].xiaohaoshuliang);
                break;
            }
        }
        this.jinxiuquerenui.but_queding.enabled = false;
        this.jinxiuquerenui.but_shuangbei.enabled = false;
        this.jinxiuquerenui.but_queding.alpha = 0;
        this.jinxiuquerenui.but_shuangbei.alpha = 0;
        this.jinxiuquerenui.but_queding0.enabled = true;
        this.jinxiuquerenui.but_queding0.alpha = 1;
        this.jinxiuquerenui.but_queding0.addEventListener(egret.TouchEvent.TOUCH_TAP, this.ererzijinxiu2queren, this);
    };
    Jiatingui.prototype.ererzigzkeng3jiesuo = function () {
        this.jinxiuquerenui = new Tongyongquerenkuang();
        Gameguanli.Kongzhitai().dingbuui.addChild(this.jinxiuquerenui);
        for (var g = 0; g < this.chengyuanhudongbiao.length; g++) {
            if (this.chengyuanhudongbiao[g].id == "23") {
                this.jinxiuquerenui.tishiwenzi.text = "您已选择进修：【" + this.chengyuanhudongbiao[g].xingdongming + "】。\n此次进修消耗时间为：【" + this.chengyuanhudongbiao[g].shijian + "】分钟（现实时间）。";
                this.querenjinxiujiangliqueren(this.chengyuanhudongbiao[g].jiangli, this.chengyuanhudongbiao[g].jianglishuliang);
                this.querenjinxiuxiaohaoqueren(this.chengyuanhudongbiao[g].xiaohao, this.chengyuanhudongbiao[g].xiaohaoshuliang);
                break;
            }
        }
        this.jinxiuquerenui.but_queding.enabled = false;
        this.jinxiuquerenui.but_shuangbei.enabled = false;
        this.jinxiuquerenui.but_queding.alpha = 0;
        this.jinxiuquerenui.but_shuangbei.alpha = 0;
        this.jinxiuquerenui.but_queding0.enabled = true;
        this.jinxiuquerenui.but_queding0.alpha = 1;
        this.jinxiuquerenui.but_queding0.addEventListener(egret.TouchEvent.TOUCH_TAP, this.ererzijinxiu3queren, this);
    };
    Jiatingui.prototype.ererzigzkeng4jiesuo = function () {
        this.jinxiuquerenui = new Tongyongquerenkuang();
        Gameguanli.Kongzhitai().dingbuui.addChild(this.jinxiuquerenui);
        for (var g = 0; g < this.chengyuanhudongbiao.length; g++) {
            if (this.chengyuanhudongbiao[g].id == "24") {
                this.jinxiuquerenui.tishiwenzi.text = "您已选择进修：【" + this.chengyuanhudongbiao[g].xingdongming + "】。\n此次进修消耗时间为：【" + this.chengyuanhudongbiao[g].shijian + "】分钟（现实时间）。";
                this.querenjinxiujiangliqueren(this.chengyuanhudongbiao[g].jiangli, this.chengyuanhudongbiao[g].jianglishuliang);
                this.querenjinxiuxiaohaoqueren(this.chengyuanhudongbiao[g].xiaohao, this.chengyuanhudongbiao[g].xiaohaoshuliang);
                break;
            }
        }
        this.jinxiuquerenui.but_queding.enabled = false;
        this.jinxiuquerenui.but_shuangbei.enabled = false;
        this.jinxiuquerenui.but_queding.alpha = 0;
        this.jinxiuquerenui.but_shuangbei.alpha = 0;
        this.jinxiuquerenui.but_queding0.enabled = true;
        this.jinxiuquerenui.but_queding0.alpha = 1;
        this.jinxiuquerenui.but_queding0.addEventListener(egret.TouchEvent.TOUCH_TAP, this.ererzijinxiu4queren, this);
    };
    Jiatingui.prototype.ererzigzkeng5jiesuo = function () {
        this.jinxiuquerenui = new Tongyongquerenkuang();
        Gameguanli.Kongzhitai().dingbuui.addChild(this.jinxiuquerenui);
        for (var g = 0; g < this.chengyuanhudongbiao.length; g++) {
            if (this.chengyuanhudongbiao[g].id == "25") {
                this.jinxiuquerenui.tishiwenzi.text = "您已选择进修：【" + this.chengyuanhudongbiao[g].xingdongming + "】。\n此次进修消耗时间为：【" + this.chengyuanhudongbiao[g].shijian + "】分钟（现实时间）。";
                this.querenjinxiujiangliqueren(this.chengyuanhudongbiao[g].jiangli, this.chengyuanhudongbiao[g].jianglishuliang);
                this.querenjinxiuxiaohaoqueren(this.chengyuanhudongbiao[g].xiaohao, this.chengyuanhudongbiao[g].xiaohaoshuliang);
                break;
            }
        }
        this.jinxiuquerenui.but_queding.enabled = false;
        this.jinxiuquerenui.but_shuangbei.enabled = false;
        this.jinxiuquerenui.but_queding.alpha = 0;
        this.jinxiuquerenui.but_shuangbei.alpha = 0;
        this.jinxiuquerenui.but_queding0.enabled = true;
        this.jinxiuquerenui.but_queding0.alpha = 1;
        this.jinxiuquerenui.but_queding0.addEventListener(egret.TouchEvent.TOUCH_TAP, this.ererzijinxiu5queren, this);
    };
    Jiatingui.prototype.ererzijinxiu1queren = function () {
        Gameguanli.Kongzhitai().dingbuui.removeChild(this.jinxiuquerenui);
        this.fasongqurenshuju("21", "2", "1");
    };
    Jiatingui.prototype.ererzijinxiu2queren = function () {
        Gameguanli.Kongzhitai().dingbuui.removeChild(this.jinxiuquerenui);
        this.fasongqurenshuju("22", "2", "1");
    };
    Jiatingui.prototype.ererzijinxiu3queren = function () {
        Gameguanli.Kongzhitai().dingbuui.removeChild(this.jinxiuquerenui);
        this.fasongqurenshuju("23", "2", "1");
    };
    Jiatingui.prototype.ererzijinxiu4queren = function () {
        Gameguanli.Kongzhitai().dingbuui.removeChild(this.jinxiuquerenui);
        this.fasongqurenshuju("24", "2", "1");
    };
    Jiatingui.prototype.ererzijinxiu5queren = function () {
        Gameguanli.Kongzhitai().dingbuui.removeChild(this.jinxiuquerenui);
        this.fasongqurenshuju("25", "2", "1");
    };
    Jiatingui.prototype.ererzigzkeng1weijiesuo = function () {
        this.jinxiuquerenui = new Tongyongquerenkuang();
        Gameguanli.Kongzhitai().dingbuui.addChild(this.jinxiuquerenui);
        this.jinxiuquerenui.jiangliicon1.source = "";
        this.jinxiuquerenui.jiangli1.text = "";
        this.jinxiuquerenui.jiangliicon2.source = "";
        this.jinxiuquerenui.jiangli2.text = "";
        this.jinxiuquerenui.but_queding.enabled = false;
        this.jinxiuquerenui.but_shuangbei.enabled = false;
        this.jinxiuquerenui.but_queding.alpha = 0;
        this.jinxiuquerenui.but_shuangbei.alpha = 0;
        this.jinxiuquerenui.but_queding0.enabled = true;
        this.jinxiuquerenui.but_queding0.alpha = 1;
        this.jinxiuquerenui.but_queding0.addEventListener(egret.TouchEvent.TOUCH_TAP, this.guanbijinxiuquerenui, this);
        this.jinxiuquerenui.tishiwenzi.text = "上街到访【书店】时，有几率解锁该进修内容。";
    };
    Jiatingui.prototype.ererzigzkeng2weijiesuo = function () {
        this.jinxiuquerenui = new Tongyongquerenkuang();
        Gameguanli.Kongzhitai().dingbuui.addChild(this.jinxiuquerenui);
        this.jinxiuquerenui.jiangliicon1.source = "";
        this.jinxiuquerenui.jiangli1.text = "";
        this.jinxiuquerenui.jiangliicon2.source = "";
        this.jinxiuquerenui.jiangli2.text = "";
        this.jinxiuquerenui.but_queding.enabled = false;
        this.jinxiuquerenui.but_shuangbei.enabled = false;
        this.jinxiuquerenui.but_queding.alpha = 0;
        this.jinxiuquerenui.but_shuangbei.alpha = 0;
        this.jinxiuquerenui.but_queding0.enabled = true;
        this.jinxiuquerenui.but_queding0.alpha = 1;
        this.jinxiuquerenui.but_queding0.addEventListener(egret.TouchEvent.TOUCH_TAP, this.guanbijinxiuquerenui, this);
        this.jinxiuquerenui.tishiwenzi.text = "上街到访【书店】时，有几率解锁该进修内容。";
    };
    Jiatingui.prototype.ererzigzkeng3weijiesuo = function () {
        this.jinxiuquerenui = new Tongyongquerenkuang();
        Gameguanli.Kongzhitai().dingbuui.addChild(this.jinxiuquerenui);
        this.jinxiuquerenui.jiangliicon1.source = "";
        this.jinxiuquerenui.jiangli1.text = "";
        this.jinxiuquerenui.jiangliicon2.source = "";
        this.jinxiuquerenui.jiangli2.text = "";
        this.jinxiuquerenui.but_queding.enabled = false;
        this.jinxiuquerenui.but_shuangbei.enabled = false;
        this.jinxiuquerenui.but_queding.alpha = 0;
        this.jinxiuquerenui.but_shuangbei.alpha = 0;
        this.jinxiuquerenui.but_queding0.enabled = true;
        this.jinxiuquerenui.but_queding0.alpha = 1;
        this.jinxiuquerenui.but_queding0.addEventListener(egret.TouchEvent.TOUCH_TAP, this.guanbijinxiuquerenui, this);
        this.jinxiuquerenui.tishiwenzi.text = "上街到访【书店】时，有几率解锁该进修内容。";
    };
    Jiatingui.prototype.ererzigzkeng4weijiesuo = function () {
        this.jinxiuquerenui = new Tongyongquerenkuang();
        Gameguanli.Kongzhitai().dingbuui.addChild(this.jinxiuquerenui);
        this.jinxiuquerenui.jiangliicon1.source = "";
        this.jinxiuquerenui.jiangli1.text = "";
        this.jinxiuquerenui.jiangliicon2.source = "";
        this.jinxiuquerenui.jiangli2.text = "";
        this.jinxiuquerenui.but_queding.enabled = false;
        this.jinxiuquerenui.but_shuangbei.enabled = false;
        this.jinxiuquerenui.but_queding.alpha = 0;
        this.jinxiuquerenui.but_shuangbei.alpha = 0;
        this.jinxiuquerenui.but_queding0.enabled = true;
        this.jinxiuquerenui.but_queding0.alpha = 1;
        this.jinxiuquerenui.but_queding0.addEventListener(egret.TouchEvent.TOUCH_TAP, this.guanbijinxiuquerenui, this);
        this.jinxiuquerenui.tishiwenzi.text = "上街到访【书店】时，有几率解锁该进修内容。";
    };
    Jiatingui.prototype.ererzigzkeng5weijiesuo = function () {
        this.jinxiuquerenui = new Tongyongquerenkuang();
        Gameguanli.Kongzhitai().dingbuui.addChild(this.jinxiuquerenui);
        this.jinxiuquerenui.jiangliicon1.source = "";
        this.jinxiuquerenui.jiangli1.text = "";
        this.jinxiuquerenui.jiangliicon2.source = "";
        this.jinxiuquerenui.jiangli2.text = "";
        this.jinxiuquerenui.but_queding.enabled = false;
        this.jinxiuquerenui.but_shuangbei.enabled = false;
        this.jinxiuquerenui.but_queding.alpha = 0;
        this.jinxiuquerenui.but_shuangbei.alpha = 0;
        this.jinxiuquerenui.but_queding0.enabled = true;
        this.jinxiuquerenui.but_queding0.alpha = 1;
        this.jinxiuquerenui.but_queding0.addEventListener(egret.TouchEvent.TOUCH_TAP, this.guanbijinxiuquerenui, this);
        this.jinxiuquerenui.tishiwenzi.text = "上街到访【书店】时，有几率解锁该进修内容。";
    };
    Jiatingui.prototype.ererzizs = function () {
        if (Gameguanli.Kongzhitai().jiatingjiemian.ererzijiaohu.parent) {
            if (this.ererzijiaohu.ererzichakan.enabled == false || this.ererzijiaohu.ererzijinxiu.enabled == false || this.ererzijiaohu.ererzizengsong.enabled == false) {
                Gameguanli.Kongzhitai().jiatingjiemian.ererzijiaohu.removeChild(this.erjitanchuui);
            }
            this.erjitanchuui = new Jiatingchengyuandaojuui();
            Gameguanli.Kongzhitai().jiatingjiemian.ererzijiaohu.addChild(this.erjitanchuui);
            this.erjitanchuui.x = this.ererzijiaohu.ererzibeijing.x - this.erjitanchuui.width;
            this.erjitanchuui.y = this.ererzijiaohu.ererzibeijing.y;
            this.erjitanchuui.daojubiaoti.text = "赠送列表";
            this.chengyuanhudongbiao = RES.getRes("chengyuanhudongbiao_json");
            this.daojubiao = RES.getRes("daojubiao_json");
            this.ererzijiaohu.ererzichakan.enabled = true;
            if (Gerenshuxing.ererzijiaotan > 0) {
                this.ererzijiaohu.ererzijiaotan.enabled = true;
            }
            else {
                this.ererzijiaohu.ererzijiaotan.enabled = false;
            }
            this.ererzijiaohu.ererzijinxiu.enabled = true;
            this.ererzijiaohu.ererzizengsong.enabled = false;
            for (var i = 0; i < this.chengyuanhudongbiao.length; i++) {
                if (this.chengyuanhudongbiao[i].id == "26") {
                    this.zengsongid1 = this.chengyuanhudongbiao[i].xiaohao;
                }
                if (this.chengyuanhudongbiao[i].id == "27") {
                    this.zengsongid2 = this.chengyuanhudongbiao[i].xiaohao;
                }
                if (this.chengyuanhudongbiao[i].id == "28") {
                    this.zengsongid3 = this.chengyuanhudongbiao[i].xiaohao;
                }
                if (this.chengyuanhudongbiao[i].id == "29") {
                    this.zengsongid4 = this.chengyuanhudongbiao[i].xiaohao;
                }
                if (this.chengyuanhudongbiao[i].id == "30") {
                    this.zengsongid5 = this.chengyuanhudongbiao[i].xiaohao;
                }
            }
            this.ererzizskeng1();
            this.ererzizskeng2();
            this.ererzizskeng3();
            this.ererzizskeng4();
            this.ererzizskeng5();
        }
    };
    Jiatingui.prototype.ererzizskeng1 = function () {
        for (var h in Gerencaipudengji.daoju) {
            if (h == this.zengsongid1) {
                if (parseInt(Gerencaipudengji.daoju[h][0]) > 0) {
                    this.erjitanchuui.zsanniudb1.source = "img_jiaohuanniudibu_png";
                    this.erjitanchuui.geshudikuang1.alpha = 1;
                    this.erjitanchuui.geshuwenzi1.text = Gerencaipudengji.daoju[h][0];
                    this.erjitanchuui.zengsong1.enabled = true;
                    this.erjitanchuui.zengsong1.addEventListener(egret.TouchEvent.TOUCH_TAP, this.ererzizskeng1jiesuo, this);
                    break;
                }
                else {
                    this.erjitanchuui.zsanniudb1.source = "img_jiaohuanniudibu1_png";
                    this.erjitanchuui.geshudikuang1.alpha = 0;
                    this.erjitanchuui.geshuwenzi1.text = "";
                    this.erjitanchuui.zengsong1.enabled = true;
                    this.erjitanchuui.zengsong1.addEventListener(egret.TouchEvent.TOUCH_TAP, this.ererzizskeng1jiesuo, this);
                    break;
                }
            }
        }
        for (var j = 0; j < this.daojubiao.length; j++) {
            if (this.daojubiao[j].id == this.zengsongid1) {
                this.erjitanchuui.zengsongtupian1.source = this.daojubiao[j].xianshiicon;
                this.erjitanchuui.wznr1.text = this.daojubiao[j].mingcheng;
                break;
            }
        }
    };
    Jiatingui.prototype.ererzizskeng2 = function () {
        for (var h in Gerencaipudengji.daoju) {
            if (h == this.zengsongid2) {
                if (parseInt(Gerencaipudengji.daoju[h][0]) > 0) {
                    this.erjitanchuui.zsanniudb2.source = "img_jiaohuanniudibu_png";
                    this.erjitanchuui.geshudikuang2.alpha = 1;
                    this.erjitanchuui.geshuwenzi2.text = Gerencaipudengji.daoju[h][0];
                    this.erjitanchuui.zengsong2.enabled = true;
                    this.erjitanchuui.zengsong2.addEventListener(egret.TouchEvent.TOUCH_TAP, this.ererzizskeng2jiesuo, this);
                    break;
                }
                else {
                    this.erjitanchuui.zsanniudb2.source = "img_jiaohuanniudibu1_png";
                    this.erjitanchuui.geshudikuang2.alpha = 0;
                    this.erjitanchuui.geshuwenzi2.text = "";
                    this.erjitanchuui.zengsong2.enabled = true;
                    this.erjitanchuui.zengsong2.addEventListener(egret.TouchEvent.TOUCH_TAP, this.ererzizskeng2jiesuo, this);
                    break;
                }
            }
        }
        for (var j = 0; j < this.daojubiao.length; j++) {
            if (this.daojubiao[j].id == this.zengsongid2) {
                this.erjitanchuui.zengsongtupian2.source = this.daojubiao[j].xianshiicon;
                this.erjitanchuui.wznr2.text = this.daojubiao[j].mingcheng;
                break;
            }
        }
    };
    Jiatingui.prototype.ererzizskeng3 = function () {
        for (var h in Gerencaipudengji.daoju) {
            if (h == this.zengsongid3) {
                if (parseInt(Gerencaipudengji.daoju[h][0]) > 0) {
                    this.erjitanchuui.zsanniudb3.source = "img_jiaohuanniudibu_png";
                    this.erjitanchuui.geshudikuang3.alpha = 1;
                    this.erjitanchuui.geshuwenzi3.text = Gerencaipudengji.daoju[h][0];
                    this.erjitanchuui.zengsong3.enabled = true;
                    this.erjitanchuui.zengsong3.addEventListener(egret.TouchEvent.TOUCH_TAP, this.ererzizskeng3jiesuo, this);
                    break;
                }
                else {
                    this.erjitanchuui.zsanniudb3.source = "img_jiaohuanniudibu1_png";
                    this.erjitanchuui.geshudikuang3.alpha = 0;
                    this.erjitanchuui.geshuwenzi3.text = "";
                    this.erjitanchuui.zengsong3.enabled = true;
                    this.erjitanchuui.zengsong3.addEventListener(egret.TouchEvent.TOUCH_TAP, this.ererzizskeng3jiesuo, this);
                    break;
                }
            }
        }
        for (var j = 0; j < this.daojubiao.length; j++) {
            if (this.daojubiao[j].id == this.zengsongid3) {
                this.erjitanchuui.zengsongtupian3.source = this.daojubiao[j].xianshiicon;
                this.erjitanchuui.wznr3.text = this.daojubiao[j].mingcheng;
                break;
            }
        }
    };
    Jiatingui.prototype.ererzizskeng4 = function () {
        for (var h in Gerencaipudengji.daoju) {
            if (h == this.zengsongid4) {
                if (parseInt(Gerencaipudengji.daoju[h][0]) > 0) {
                    this.erjitanchuui.zsanniudb4.source = "img_jiaohuanniudibu_png";
                    this.erjitanchuui.geshudikuang4.alpha = 1;
                    this.erjitanchuui.geshuwenzi4.text = Gerencaipudengji.daoju[h][0];
                    this.erjitanchuui.zengsong4.enabled = true;
                    this.erjitanchuui.zengsong4.addEventListener(egret.TouchEvent.TOUCH_TAP, this.ererzizskeng4jiesuo, this);
                    break;
                }
                else {
                    this.erjitanchuui.zsanniudb4.source = "img_jiaohuanniudibu1_png";
                    this.erjitanchuui.geshudikuang4.alpha = 0;
                    this.erjitanchuui.geshuwenzi4.text = "";
                    this.erjitanchuui.zengsong4.enabled = true;
                    this.erjitanchuui.zengsong4.addEventListener(egret.TouchEvent.TOUCH_TAP, this.ererzizskeng4jiesuo, this);
                    break;
                }
            }
        }
        for (var j = 0; j < this.daojubiao.length; j++) {
            if (this.daojubiao[j].id == this.zengsongid4) {
                this.erjitanchuui.zengsongtupian4.source = this.daojubiao[j].xianshiicon;
                this.erjitanchuui.wznr4.text = this.daojubiao[j].mingcheng;
                break;
            }
        }
    };
    Jiatingui.prototype.ererzizskeng5 = function () {
        for (var h in Gerencaipudengji.daoju) {
            if (h == this.zengsongid5) {
                if (parseInt(Gerencaipudengji.daoju[h][0]) > 0) {
                    this.erjitanchuui.zsanniudb5.source = "img_jiaohuanniudibu_png";
                    this.erjitanchuui.geshudikuang5.alpha = 1;
                    this.erjitanchuui.geshuwenzi5.text = Gerencaipudengji.daoju[h][0];
                    this.erjitanchuui.zengsong5.enabled = true;
                    this.erjitanchuui.zengsong5.addEventListener(egret.TouchEvent.TOUCH_TAP, this.ererzizskeng5jiesuo, this);
                    break;
                }
                else {
                    this.erjitanchuui.zsanniudb5.source = "img_jiaohuanniudibu1_png";
                    this.erjitanchuui.geshudikuang5.alpha = 0;
                    this.erjitanchuui.geshuwenzi5.text = "";
                    this.erjitanchuui.zengsong5.enabled = true;
                    this.erjitanchuui.zengsong5.addEventListener(egret.TouchEvent.TOUCH_TAP, this.ererzizskeng5jiesuo, this);
                    break;
                }
            }
        }
        for (var j = 0; j < this.daojubiao.length; j++) {
            if (this.daojubiao[j].id == this.zengsongid5) {
                this.erjitanchuui.zengsongtupian5.source = this.daojubiao[j].xianshiicon;
                this.erjitanchuui.wznr5.text = this.daojubiao[j].mingcheng;
                break;
            }
        }
    };
    Jiatingui.prototype.ererzizskeng1jiesuo = function () {
        this.jinxiuquerenui = new Tongyongquerenkuang();
        Gameguanli.Kongzhitai().dingbuui.addChild(this.jinxiuquerenui);
        for (var g = 0; g < this.daojubiao.length; g++) {
            if (this.daojubiao[g].id == this.zengsongid1) {
                this.jinxiuquerenui.tishiwenzi.text = this.daojubiao[g].tips;
                this.querenjinxiujiangliqueren(this.daojubiao[g].jiangli, this.daojubiao[g].jianglishuliang);
                this.querenjinxiuxiaohaoqueren(this.daojubiao[g].id, 1);
                break;
            }
        }
        this.jinxiuquerenui.but_queding.enabled = false;
        this.jinxiuquerenui.but_shuangbei.enabled = false;
        this.jinxiuquerenui.but_queding.alpha = 0;
        this.jinxiuquerenui.but_shuangbei.alpha = 0;
        this.jinxiuquerenui.but_queding0.enabled = true;
        this.jinxiuquerenui.but_queding0.alpha = 1;
        this.jinxiuquerenui.but_queding0.addEventListener(egret.TouchEvent.TOUCH_TAP, this.ererzizs1queren, this);
    };
    Jiatingui.prototype.ererzizskeng2jiesuo = function () {
        this.jinxiuquerenui = new Tongyongquerenkuang();
        Gameguanli.Kongzhitai().dingbuui.addChild(this.jinxiuquerenui);
        for (var g = 0; g < this.daojubiao.length; g++) {
            if (this.daojubiao[g].id == this.zengsongid2) {
                this.jinxiuquerenui.tishiwenzi.text = this.daojubiao[g].tips;
                this.querenjinxiujiangliqueren(this.daojubiao[g].jiangli, this.daojubiao[g].jianglishuliang);
                this.querenjinxiuxiaohaoqueren(this.daojubiao[g].id, 1);
                break;
            }
        }
        this.jinxiuquerenui.but_queding.enabled = false;
        this.jinxiuquerenui.but_shuangbei.enabled = false;
        this.jinxiuquerenui.but_queding.alpha = 0;
        this.jinxiuquerenui.but_shuangbei.alpha = 0;
        this.jinxiuquerenui.but_queding0.enabled = true;
        this.jinxiuquerenui.but_queding0.alpha = 1;
        this.jinxiuquerenui.but_queding0.addEventListener(egret.TouchEvent.TOUCH_TAP, this.ererzizs2queren, this);
    };
    Jiatingui.prototype.ererzizskeng3jiesuo = function () {
        this.jinxiuquerenui = new Tongyongquerenkuang();
        Gameguanli.Kongzhitai().dingbuui.addChild(this.jinxiuquerenui);
        for (var g = 0; g < this.daojubiao.length; g++) {
            if (this.daojubiao[g].id == this.zengsongid3) {
                this.jinxiuquerenui.tishiwenzi.text = this.daojubiao[g].tips;
                this.querenjinxiujiangliqueren(this.daojubiao[g].jiangli, this.daojubiao[g].jianglishuliang);
                this.querenjinxiuxiaohaoqueren(this.daojubiao[g].id, 1);
                break;
            }
        }
        this.jinxiuquerenui.but_queding.enabled = false;
        this.jinxiuquerenui.but_shuangbei.enabled = false;
        this.jinxiuquerenui.but_queding.alpha = 0;
        this.jinxiuquerenui.but_shuangbei.alpha = 0;
        this.jinxiuquerenui.but_queding0.enabled = true;
        this.jinxiuquerenui.but_queding0.alpha = 1;
        this.jinxiuquerenui.but_queding0.addEventListener(egret.TouchEvent.TOUCH_TAP, this.ererzizs3queren, this);
    };
    Jiatingui.prototype.ererzizskeng4jiesuo = function () {
        this.jinxiuquerenui = new Tongyongquerenkuang();
        Gameguanli.Kongzhitai().dingbuui.addChild(this.jinxiuquerenui);
        for (var g = 0; g < this.daojubiao.length; g++) {
            if (this.daojubiao[g].id == this.zengsongid4) {
                this.jinxiuquerenui.tishiwenzi.text = this.daojubiao[g].tips;
                this.querenjinxiujiangliqueren(this.daojubiao[g].jiangli, this.daojubiao[g].jianglishuliang);
                this.querenjinxiuxiaohaoqueren(this.daojubiao[g].id, 1);
                break;
            }
        }
        this.jinxiuquerenui.but_queding.enabled = false;
        this.jinxiuquerenui.but_shuangbei.enabled = false;
        this.jinxiuquerenui.but_queding.alpha = 0;
        this.jinxiuquerenui.but_shuangbei.alpha = 0;
        this.jinxiuquerenui.but_queding0.enabled = true;
        this.jinxiuquerenui.but_queding0.alpha = 1;
        this.jinxiuquerenui.but_queding0.addEventListener(egret.TouchEvent.TOUCH_TAP, this.ererzizs4queren, this);
    };
    Jiatingui.prototype.ererzizskeng5jiesuo = function () {
        this.jinxiuquerenui = new Tongyongquerenkuang();
        Gameguanli.Kongzhitai().dingbuui.addChild(this.jinxiuquerenui);
        for (var g = 0; g < this.daojubiao.length; g++) {
            if (this.daojubiao[g].id == this.zengsongid5) {
                this.jinxiuquerenui.tishiwenzi.text = this.daojubiao[g].tips;
                this.querenjinxiujiangliqueren(this.daojubiao[g].jiangli, this.daojubiao[g].jianglishuliang);
                this.querenjinxiuxiaohaoqueren(this.daojubiao[g].id, 1);
                break;
            }
        }
        this.jinxiuquerenui.but_queding.enabled = false;
        this.jinxiuquerenui.but_shuangbei.enabled = false;
        this.jinxiuquerenui.but_queding.alpha = 0;
        this.jinxiuquerenui.but_shuangbei.alpha = 0;
        this.jinxiuquerenui.but_queding0.enabled = true;
        this.jinxiuquerenui.but_queding0.alpha = 1;
        this.jinxiuquerenui.but_queding0.addEventListener(egret.TouchEvent.TOUCH_TAP, this.ererzizs5queren, this);
    };
    Jiatingui.prototype.ererzizs1queren = function () {
        Gameguanli.Kongzhitai().dingbuui.removeChild(this.jinxiuquerenui);
        for (var h in Gerencaipudengji.daoju) {
            if (h == this.zengsongid1) {
                if (parseInt(Gerencaipudengji.daoju[h][0]) > 0) {
                    this.tongguojiangli(this.zengsongid1);
                    Gameguanli.Kongzhitai().cuowutishixinxi("收到你的礼物，二儿子似乎开心了许多...");
                    break;
                }
                else {
                    Gameguanli.Kongzhitai().cuowutishixinxi("您并没有该物品可赠送...");
                    break;
                }
            }
        }
    };
    Jiatingui.prototype.ererzizs2queren = function () {
        Gameguanli.Kongzhitai().dingbuui.removeChild(this.jinxiuquerenui);
        for (var h in Gerencaipudengji.daoju) {
            if (h == this.zengsongid2) {
                if (parseInt(Gerencaipudengji.daoju[h][0]) > 0) {
                    this.tongguojiangli(this.zengsongid2);
                    Gameguanli.Kongzhitai().cuowutishixinxi("收到你的礼物，二儿子似乎开心了许多...");
                    break;
                }
                else {
                    Gameguanli.Kongzhitai().cuowutishixinxi("您并没有该物品可赠送...");
                    break;
                }
            }
        }
    };
    Jiatingui.prototype.ererzizs3queren = function () {
        Gameguanli.Kongzhitai().dingbuui.removeChild(this.jinxiuquerenui);
        for (var h in Gerencaipudengji.daoju) {
            if (h == this.zengsongid3) {
                if (parseInt(Gerencaipudengji.daoju[h][0]) > 0) {
                    this.tongguojiangli(this.zengsongid3);
                    Gameguanli.Kongzhitai().cuowutishixinxi("收到你的礼物，二儿子似乎开心了许多...");
                    break;
                }
                else {
                    Gameguanli.Kongzhitai().cuowutishixinxi("您并没有该物品可赠送...");
                    break;
                }
            }
        }
    };
    Jiatingui.prototype.ererzizs4queren = function () {
        Gameguanli.Kongzhitai().dingbuui.removeChild(this.jinxiuquerenui);
        for (var h in Gerencaipudengji.daoju) {
            if (h == this.zengsongid4) {
                if (parseInt(Gerencaipudengji.daoju[h][0]) > 0) {
                    this.tongguojiangli(this.zengsongid4);
                    Gameguanli.Kongzhitai().cuowutishixinxi("收到你的礼物，二儿子似乎开心了许多...");
                    break;
                }
                else {
                    Gameguanli.Kongzhitai().cuowutishixinxi("您并没有该物品可赠送...");
                    break;
                }
            }
        }
    };
    Jiatingui.prototype.ererzizs5queren = function () {
        Gameguanli.Kongzhitai().dingbuui.removeChild(this.jinxiuquerenui);
        for (var h in Gerencaipudengji.daoju) {
            if (h == this.zengsongid5) {
                if (parseInt(Gerencaipudengji.daoju[h][0]) > 0) {
                    this.tongguojiangli(this.zengsongid5);
                    Gameguanli.Kongzhitai().cuowutishixinxi("收到你的礼物，二儿子似乎开心了许多...");
                    break;
                }
                else {
                    Gameguanli.Kongzhitai().cuowutishixinxi("您并没有该物品可赠送...");
                    break;
                }
            }
        }
    };
    Jiatingui.prototype.guanbiererzi = function () {
        Gameguanli.Kongzhitai().jiatingjiemian.removeChild(this.ererzijiaohu);
    };
    Jiatingui.prototype.dianjixifu = function () {
        var _this = this;
        egret.Tween.get(this.img_daerxi).to({ scaleX: 1.1, scaleY: 1.1 }, 500).call(function () {
            egret.Tween.get(_this.img_daerxi).to({ scaleX: 1, scaleY: 1 }, 500);
        });
        this.xifujiaohu = new Xifujiaohuui();
        Gameguanli.Kongzhitai().jiatingjiemian.addChild(this.xifujiaohu);
        this.xifujiaohu.xifuguanbi.touchEnabled = true;
        this.xifujiaohu.xifuguanbi.addEventListener(egret.TouchEvent.TOUCH_TAP, this.guanbixifu, this);
        this.xifujiaohu.xifuchakan.enabled = true;
        if (Gerenshuxing.xifujiaotan > 0) {
            this.xifujiaohu.xifujiaotan.enabled = true;
        }
        else {
            this.xifujiaohu.xifujiaotan.enabled = false;
        }
        this.xifujiaohu.xifujinxiu.enabled = true;
        this.xifujiaohu.xifuzengsong.enabled = true;
        this.xifujiaohu.xifuchakan.addEventListener(egret.TouchEvent.TOUCH_TAP, this.xifuck, this);
        this.xifujiaohu.xifujiaotan.addEventListener(egret.TouchEvent.TOUCH_TAP, this.xifujt, this);
        this.xifujiaohu.xifujinxiu.addEventListener(egret.TouchEvent.TOUCH_TAP, this.xifugz, this);
        this.xifujiaohu.xifuzengsong.addEventListener(egret.TouchEvent.TOUCH_TAP, this.xifuzs, this);
        this.jiatingchengyuanbiao = RES.getRes("jiatingchengyuanbiao_json");
    };
    Jiatingui.prototype.xifuck = function () {
        if (Gameguanli.Kongzhitai().jiatingjiemian.xifujiaohu.parent) {
            if (this.xifujiaohu.xifuchakan.enabled == false || this.xifujiaohu.xifujinxiu.enabled == false || this.xifujiaohu.xifuzengsong.enabled == false) {
                Gameguanli.Kongzhitai().jiatingjiemian.xifujiaohu.removeChild(this.erjitanchuui);
            }
            this.erjitanchuui = new Jiatingchengyuanjieshaoui();
            Gameguanli.Kongzhitai().jiatingjiemian.xifujiaohu.addChild(this.erjitanchuui);
            this.xifujiaohu.xifuchakan.enabled = false;
            if (Gerenshuxing.xifujiaotan > 0) {
                this.xifujiaohu.xifujiaotan.enabled = true;
            }
            else {
                this.xifujiaohu.xifujiaotan.enabled = false;
            }
            this.xifujiaohu.xifujinxiu.enabled = true;
            this.xifujiaohu.xifuzengsong.enabled = true;
            this.erjitanchuui.x = this.xifujiaohu.xifubeijing.x - this.erjitanchuui.width - this.xifujiaohu.xifubeijing.width;
            this.erjitanchuui.y = this.xifujiaohu.xifubeijing.y - this.erjitanchuui.height;
            this.erjitanchuui.biaotiwenzi.text = "介绍";
            this.erjitanchuui.guanxibiaoqian.text = "关系";
            this.erjitanchuui.qinhelibiaoqian.text = "亲和值";
            this.erjitanchuui.gongzuobiaoqian.text = "家务能力";
            this.erjitanchuui.jiesaobiaoqian.text = "说明";
            for (var i = 0; i < this.jiatingchengyuanbiao.length; i++) {
                if (this.jiatingchengyuanbiao[i].id == "3") {
                    this.erjitanchuui.guanxineirong.text = "" + this.jiatingchengyuanbiao[i].chengyuanming;
                    this.erjitanchuui.qinghelizhi.text = "" + Gerenshuxing.xifuxinxi[0];
                    this.erjitanchuui.gongzuozhi.text = "" + Gerenshuxing.xifuxinxi[1];
                    this.erjitanchuui.jiesaoneirong.text = "" + this.jiatingchengyuanbiao[i].shuoming;
                    break;
                }
            }
        }
    };
    Jiatingui.prototype.xifujt = function () {
        Gerenshuxing.xifujiaotan -= 1;
        this.renwujiemian = new Npcduihuaui();
        if (this.xifujiaohu.xifuchakan.enabled == false) {
            Gameguanli.Kongzhitai().jiatingjiemian.xifujiaohu.removeChild(this.erjitanchuui);
        }
        Gameguanli.Kongzhitai().dingbuui.addChild(this.renwujiemian);
        this.renwujiemian.chushihua("3");
        this.xifujiaohu.xifuchakan.enabled = true;
        if (Gerenshuxing.xifujiaotan > 0) {
            this.xifujiaohu.xifujiaotan.enabled = true;
        }
        else {
            this.xifujiaohu.xifujiaotan.enabled = false;
        }
        this.xifujiaohu.xifujinxiu.enabled = true;
        this.xifujiaohu.xifuzengsong.enabled = true;
    };
    Jiatingui.prototype.xifugz = function () {
        if (Gameguanli.Kongzhitai().jiatingjiemian.xifujiaohu.parent) {
            if (this.xifujiaohu.xifuchakan.enabled == false || this.xifujiaohu.xifujinxiu.enabled == false || this.xifujiaohu.xifuzengsong.enabled == false) {
                Gameguanli.Kongzhitai().jiatingjiemian.xifujiaohu.removeChild(this.erjitanchuui);
            }
            if (Gerenshuxing.xifuxinxi[2] != "0") {
                this.erjitanchuui = new Jiatingjinxiuui();
                Gameguanli.Kongzhitai().jiatingjiemian.xifujiaohu.addChild(this.erjitanchuui);
                this.erjitanchuui.x = this.xifujiaohu.xifubeijing.x - this.erjitanchuui.width - this.xifujiaohu.xifubeijing.width;
                this.erjitanchuui.y = this.xifujiaohu.xifubeijing.y - this.erjitanchuui.height;
                this.chengyuanhudongbiao = RES.getRes("chengyuanhudongbiao_json");
                this.xifujiaohu.xifuchakan.enabled = true;
                if (Gerenshuxing.xifujiaotan > 0) {
                    this.xifujiaohu.xifujiaotan.enabled = true;
                }
                else {
                    this.xifujiaohu.xifujiaotan.enabled = false;
                }
                this.xifujiaohu.xifujinxiu.enabled = false;
                this.xifujiaohu.xifuzengsong.enabled = true;
                for (var i = 0; i < this.chengyuanhudongbiao.length; i++) {
                    if (this.chengyuanhudongbiao[i].id == Gerenshuxing.xifuxinxi[2]) {
                        this.erjitanchuui.jinxiubiaoti.text = this.chengyuanhudongbiao[i].xingdongming;
                        this.erjitanchuui.jinxiutupian.source = this.chengyuanhudongbiao[i].xianshiicon;
                    }
                }
                if (Gerenshuxing.xifuxinxi[3] == "0") {
                    this.erjitanchuui.shengyushijian0.text = "已完成";
                    this.erjitanchuui.quedinganniu.enabled = true;
                    this.erjitanchuui.quedinganniu.label = "确定";
                    this.erjitanchuui.quedinganniu.addEventListener(egret.TouchEvent.TOUCH_TAP, this.xifujinxiulinjiang, this);
                }
                else {
                    var dangqianshijian = (new Date()).valueOf();
                    var shengyushijian = parseInt(Gerenshuxing.xifuxinxi[3]) - dangqianshijian;
                    this.erjitanchuui.shengyushijian0.text = Math.floor((shengyushijian / 60000) % 60) + ":" + Math.floor((shengyushijian / 1000) % 60);
                    this.erjitanchuui.quedinganniu.enabled = true;
                    this.erjitanchuui.quedinganniu.label = "加速（广告）";
                    this.erjitanchuui.quedinganniu.addEventListener(egret.TouchEvent.TOUCH_TAP, this.xifujinxiusuoduan, this);
                    var dingshiqi = new egret.Timer(1000, 1);
                    dingshiqi.addEventListener(egret.TimerEvent.TIMER, this.panduanxifujinxiu, this);
                    dingshiqi.start();
                }
            }
            else {
                this.erjitanchuui = new Jiatingchengyuanzengsong();
                Gameguanli.Kongzhitai().jiatingjiemian.xifujiaohu.addChild(this.erjitanchuui);
                this.erjitanchuui.x = this.xifujiaohu.xifubeijing.x - this.erjitanchuui.width - this.xifujiaohu.xifubeijing.width;
                this.erjitanchuui.y = this.xifujiaohu.xifubeijing.y - this.erjitanchuui.height;
                this.erjitanchuui.wenzibiaoti.text = "家务内容";
                this.chengyuanhudongbiao = RES.getRes("chengyuanhudongbiao_json");
                this.xifugzkeng1();
                this.xifugzkeng2();
                this.xifugzkeng3();
                this.xifugzkeng4();
                this.xifugzkeng5();
            }
            this.xifujiaohu.xifuchakan.enabled = true;
            if (Gerenshuxing.xifujiaotan > 0) {
                this.xifujiaohu.xifujiaotan.enabled = true;
            }
            else {
                this.xifujiaohu.xifujiaotan.enabled = false;
            }
            this.xifujiaohu.xifujinxiu.enabled = false;
            this.xifujiaohu.xifuzengsong.enabled = true;
        }
    };
    Jiatingui.prototype.xifujinxiulinjiang = function () {
        var idshuju = Gerenshuxing.xifuxinxi[2];
        var jianglileixing = 0;
        var jianglishuliang = 0;
        var beishu = 1;
        for (var j = 0; j < this.chengyuanhudongbiao.length; j++) {
            if (this.chengyuanhudongbiao[j].id == idshuju) {
                jianglileixing = this.chengyuanhudongbiao[j].jiangli;
                jianglishuliang = this.chengyuanhudongbiao[j].jianglishuliang;
                break;
            }
        }
        Gerenshuxing.xifuxinxi[2] = "0";
        Weblianjie.fasongshuju("code:079", "{" + '"uid"' + ":" + '"' + Gerenshuxing.uid + '"' + ","
            + '"leixing"' + ":" + '"' + jianglileixing + '"' + ","
            + '"shuliang"' + ":" + '"' + jianglishuliang + '"' + ","
            + '"beishu"' + ":" + '"' + beishu + '"' + "}");
        this.xifugz();
    };
    Jiatingui.prototype.xifujinxiusuoduan = function () {
    };
    Jiatingui.prototype.panduanxifujinxiu = function () {
        if (this.xifujiaohu.xifujinxiu.enabled == false) {
            this.xifugz();
        }
    };
    Jiatingui.prototype.xifugzkeng1 = function () {
        var duihua1jiesuo = false;
        for (var i = 0; i < Gerenshuxing.xifuxuexi.length; i++) {
            if (Gerenshuxing.xifuxuexi[i] == "11") {
                duihua1jiesuo = true;
                break;
            }
        }
        if (duihua1jiesuo == true) {
            this.erjitanchuui.anniudibu.source = "img_jiaohuanniudibu_png";
            this.erjitanchuui.daojuzu0.enabled = true;
            this.erjitanchuui.daojuzu0.addEventListener(egret.TouchEvent.TOUCH_TAP, this.xifugzkeng1jiesuo, this);
        }
        else {
            this.erjitanchuui.anniudibu.source = "img_jiaohuanniudibu1_png";
            this.erjitanchuui.daojuzu0.enabled = true;
            this.erjitanchuui.daojuzu0.addEventListener(egret.TouchEvent.TOUCH_TAP, this.xifugzkeng1weijiesuo, this);
        }
        for (var j = 0; j < this.chengyuanhudongbiao.length; j++) {
            if (this.chengyuanhudongbiao[j].id == "11") {
                this.erjitanchuui.wenzineirong.text = this.chengyuanhudongbiao[j].xingdongming;
                this.erjitanchuui.daojutubiao.source = this.chengyuanhudongbiao[j].xianshiicon;
                break;
            }
        }
    };
    Jiatingui.prototype.xifugzkeng2 = function () {
        var duihua2jiesuo = false;
        for (var i = 0; i < Gerenshuxing.xifuxuexi.length; i++) {
            if (Gerenshuxing.xifuxuexi[i] == "12") {
                duihua2jiesuo = true;
                break;
            }
        }
        if (duihua2jiesuo == true) {
            this.erjitanchuui.anniudibu0.source = "img_jiaohuanniudibu_png";
            this.erjitanchuui.daojuzu1.enabled = true;
            this.erjitanchuui.daojuzu1.addEventListener(egret.TouchEvent.TOUCH_TAP, this.xifugzkeng2jiesuo, this);
        }
        else {
            this.erjitanchuui.anniudibu0.source = "img_jiaohuanniudibu1_png";
            this.erjitanchuui.daojuzu1.enabled = true;
            this.erjitanchuui.daojuzu1.addEventListener(egret.TouchEvent.TOUCH_TAP, this.xifugzkeng2weijiesuo, this);
        }
        for (var j = 0; j < this.chengyuanhudongbiao.length; j++) {
            if (this.chengyuanhudongbiao[j].id == "12") {
                this.erjitanchuui.wenzineirong0.text = this.chengyuanhudongbiao[j].xingdongming;
                this.erjitanchuui.daojutubiao0.source = this.chengyuanhudongbiao[j].xianshiicon;
                break;
            }
        }
    };
    Jiatingui.prototype.xifugzkeng3 = function () {
        var duihua3jiesuo = false;
        for (var i = 0; i < Gerenshuxing.xifuxuexi.length; i++) {
            if (Gerenshuxing.xifuxuexi[i] == "13") {
                duihua3jiesuo = true;
                break;
            }
        }
        if (duihua3jiesuo == true) {
            this.erjitanchuui.anniudibu1.source = "img_jiaohuanniudibu_png";
            this.erjitanchuui.daojuzu2.enabled = true;
            this.erjitanchuui.daojuzu2.addEventListener(egret.TouchEvent.TOUCH_TAP, this.xifugzkeng3jiesuo, this);
        }
        else {
            this.erjitanchuui.anniudibu1.source = "img_jiaohuanniudibu1_png";
            this.erjitanchuui.daojuzu2.enabled = true;
            this.erjitanchuui.daojuzu2.addEventListener(egret.TouchEvent.TOUCH_TAP, this.xifugzkeng3weijiesuo, this);
        }
        for (var j = 0; j < this.chengyuanhudongbiao.length; j++) {
            if (this.chengyuanhudongbiao[j].id == "13") {
                this.erjitanchuui.wenzineirong1.text = this.chengyuanhudongbiao[j].xingdongming;
                this.erjitanchuui.daojutubiao1.source = this.chengyuanhudongbiao[j].xianshiicon;
                break;
            }
        }
    };
    Jiatingui.prototype.xifugzkeng4 = function () {
        var duihua4jiesuo = false;
        for (var i = 0; i < Gerenshuxing.xifuxuexi.length; i++) {
            if (Gerenshuxing.xifuxuexi[i] == "14") {
                duihua4jiesuo = true;
                break;
            }
        }
        if (duihua4jiesuo == true) {
            this.erjitanchuui.anniudibu2.source = "img_jiaohuanniudibu_png";
            this.erjitanchuui.daojuzu3.enabled = true;
            this.erjitanchuui.daojuzu3.addEventListener(egret.TouchEvent.TOUCH_TAP, this.xifugzkeng4jiesuo, this);
        }
        else {
            this.erjitanchuui.anniudibu2.source = "img_jiaohuanniudibu1_png";
            this.erjitanchuui.daojuzu3.enabled = true;
            this.erjitanchuui.daojuzu3.addEventListener(egret.TouchEvent.TOUCH_TAP, this.xifugzkeng4weijiesuo, this);
        }
        for (var j = 0; j < this.chengyuanhudongbiao.length; j++) {
            if (this.chengyuanhudongbiao[j].id == "14") {
                this.erjitanchuui.wenzineirong2.text = this.chengyuanhudongbiao[j].xingdongming;
                this.erjitanchuui.daojutubiao2.source = this.chengyuanhudongbiao[j].xianshiicon;
                break;
            }
        }
    };
    Jiatingui.prototype.xifugzkeng5 = function () {
        var duihua5jiesuo = false;
        for (var i = 0; i < Gerenshuxing.xifuxuexi.length; i++) {
            if (Gerenshuxing.xifuxuexi[i] == "15") {
                duihua5jiesuo = true;
                break;
            }
        }
        if (duihua5jiesuo == true) {
            this.erjitanchuui.anniudibu3.source = "img_jiaohuanniudibu_png";
            this.erjitanchuui.daojuzu4.enabled = true;
            this.erjitanchuui.daojuzu4.addEventListener(egret.TouchEvent.TOUCH_TAP, this.xifugzkeng5jiesuo, this);
        }
        else {
            this.erjitanchuui.anniudibu3.source = "img_jiaohuanniudibu1_png";
            this.erjitanchuui.daojuzu4.enabled = true;
            this.erjitanchuui.daojuzu4.addEventListener(egret.TouchEvent.TOUCH_TAP, this.xifugzkeng5weijiesuo, this);
        }
        for (var j = 0; j < this.chengyuanhudongbiao.length; j++) {
            if (this.chengyuanhudongbiao[j].id == "15") {
                this.erjitanchuui.wenzineirong3.text = this.chengyuanhudongbiao[j].xingdongming;
                this.erjitanchuui.daojutubiao3.source = this.chengyuanhudongbiao[j].xianshiicon;
                break;
            }
        }
    };
    Jiatingui.prototype.xifugzkeng1jiesuo = function () {
        this.jinxiuquerenui = new Tongyongquerenkuang();
        Gameguanli.Kongzhitai().dingbuui.addChild(this.jinxiuquerenui);
        for (var g = 0; g < this.chengyuanhudongbiao.length; g++) {
            if (this.chengyuanhudongbiao[g].id == "11") {
                this.jinxiuquerenui.tishiwenzi.text = "您已选择进修：【" + this.chengyuanhudongbiao[g].xingdongming + "】。\n此次进修消耗时间为：【" + this.chengyuanhudongbiao[g].shijian + "】分钟（现实时间）。";
                this.querenjinxiujiangliqueren(this.chengyuanhudongbiao[g].jiangli, this.chengyuanhudongbiao[g].jianglishuliang);
                this.querenjinxiuxiaohaoqueren(this.chengyuanhudongbiao[g].xiaohao, this.chengyuanhudongbiao[g].xiaohaoshuliang);
                break;
            }
        }
        this.jinxiuquerenui.but_queding.enabled = false;
        this.jinxiuquerenui.but_shuangbei.enabled = false;
        this.jinxiuquerenui.but_queding.alpha = 0;
        this.jinxiuquerenui.but_shuangbei.alpha = 0;
        this.jinxiuquerenui.but_queding0.enabled = true;
        this.jinxiuquerenui.but_queding0.alpha = 1;
        this.jinxiuquerenui.but_queding0.addEventListener(egret.TouchEvent.TOUCH_TAP, this.xifujinxiu1queren, this);
    };
    Jiatingui.prototype.xifugzkeng2jiesuo = function () {
        this.jinxiuquerenui = new Tongyongquerenkuang();
        Gameguanli.Kongzhitai().dingbuui.addChild(this.jinxiuquerenui);
        for (var g = 0; g < this.chengyuanhudongbiao.length; g++) {
            if (this.chengyuanhudongbiao[g].id == "12") {
                this.jinxiuquerenui.tishiwenzi.text = "您已选择进修：【" + this.chengyuanhudongbiao[g].xingdongming + "】。\n此次进修消耗时间为：【" + this.chengyuanhudongbiao[g].shijian + "】分钟（现实时间）。";
                this.querenjinxiujiangliqueren(this.chengyuanhudongbiao[g].jiangli, this.chengyuanhudongbiao[g].jianglishuliang);
                this.querenjinxiuxiaohaoqueren(this.chengyuanhudongbiao[g].xiaohao, this.chengyuanhudongbiao[g].xiaohaoshuliang);
                break;
            }
        }
        this.jinxiuquerenui.but_queding.enabled = false;
        this.jinxiuquerenui.but_shuangbei.enabled = false;
        this.jinxiuquerenui.but_queding.alpha = 0;
        this.jinxiuquerenui.but_shuangbei.alpha = 0;
        this.jinxiuquerenui.but_queding0.enabled = true;
        this.jinxiuquerenui.but_queding0.alpha = 1;
        this.jinxiuquerenui.but_queding0.addEventListener(egret.TouchEvent.TOUCH_TAP, this.xifujinxiu2queren, this);
    };
    Jiatingui.prototype.xifugzkeng3jiesuo = function () {
        this.jinxiuquerenui = new Tongyongquerenkuang();
        Gameguanli.Kongzhitai().dingbuui.addChild(this.jinxiuquerenui);
        for (var g = 0; g < this.chengyuanhudongbiao.length; g++) {
            if (this.chengyuanhudongbiao[g].id == "13") {
                this.jinxiuquerenui.tishiwenzi.text = "您已选择进修：【" + this.chengyuanhudongbiao[g].xingdongming + "】。\n此次进修消耗时间为：【" + this.chengyuanhudongbiao[g].shijian + "】分钟（现实时间）。";
                this.querenjinxiujiangliqueren(this.chengyuanhudongbiao[g].jiangli, this.chengyuanhudongbiao[g].jianglishuliang);
                this.querenjinxiuxiaohaoqueren(this.chengyuanhudongbiao[g].xiaohao, this.chengyuanhudongbiao[g].xiaohaoshuliang);
                break;
            }
        }
        this.jinxiuquerenui.but_queding.enabled = false;
        this.jinxiuquerenui.but_shuangbei.enabled = false;
        this.jinxiuquerenui.but_queding.alpha = 0;
        this.jinxiuquerenui.but_shuangbei.alpha = 0;
        this.jinxiuquerenui.but_queding0.enabled = true;
        this.jinxiuquerenui.but_queding0.alpha = 1;
        this.jinxiuquerenui.but_queding0.addEventListener(egret.TouchEvent.TOUCH_TAP, this.xifujinxiu3queren, this);
    };
    Jiatingui.prototype.xifugzkeng4jiesuo = function () {
        this.jinxiuquerenui = new Tongyongquerenkuang();
        Gameguanli.Kongzhitai().dingbuui.addChild(this.jinxiuquerenui);
        for (var g = 0; g < this.chengyuanhudongbiao.length; g++) {
            if (this.chengyuanhudongbiao[g].id == "14") {
                this.jinxiuquerenui.tishiwenzi.text = "您已选择进修：【" + this.chengyuanhudongbiao[g].xingdongming + "】。\n此次进修消耗时间为：【" + this.chengyuanhudongbiao[g].shijian + "】分钟（现实时间）。";
                this.querenjinxiujiangliqueren(this.chengyuanhudongbiao[g].jiangli, this.chengyuanhudongbiao[g].jianglishuliang);
                this.querenjinxiuxiaohaoqueren(this.chengyuanhudongbiao[g].xiaohao, this.chengyuanhudongbiao[g].xiaohaoshuliang);
                break;
            }
        }
        this.jinxiuquerenui.but_queding.enabled = false;
        this.jinxiuquerenui.but_shuangbei.enabled = false;
        this.jinxiuquerenui.but_queding.alpha = 0;
        this.jinxiuquerenui.but_shuangbei.alpha = 0;
        this.jinxiuquerenui.but_queding0.enabled = true;
        this.jinxiuquerenui.but_queding0.alpha = 1;
        this.jinxiuquerenui.but_queding0.addEventListener(egret.TouchEvent.TOUCH_TAP, this.xifujinxiu4queren, this);
    };
    Jiatingui.prototype.xifugzkeng5jiesuo = function () {
        this.jinxiuquerenui = new Tongyongquerenkuang();
        Gameguanli.Kongzhitai().dingbuui.addChild(this.jinxiuquerenui);
        for (var g = 0; g < this.chengyuanhudongbiao.length; g++) {
            if (this.chengyuanhudongbiao[g].id == "15") {
                this.jinxiuquerenui.tishiwenzi.text = "您已选择进修：【" + this.chengyuanhudongbiao[g].xingdongming + "】。\n此次进修消耗时间为：【" + this.chengyuanhudongbiao[g].shijian + "】分钟（现实时间）。";
                this.querenjinxiujiangliqueren(this.chengyuanhudongbiao[g].jiangli, this.chengyuanhudongbiao[g].jianglishuliang);
                this.querenjinxiuxiaohaoqueren(this.chengyuanhudongbiao[g].xiaohao, this.chengyuanhudongbiao[g].xiaohaoshuliang);
                break;
            }
        }
        this.jinxiuquerenui.but_queding.enabled = false;
        this.jinxiuquerenui.but_shuangbei.enabled = false;
        this.jinxiuquerenui.but_queding.alpha = 0;
        this.jinxiuquerenui.but_shuangbei.alpha = 0;
        this.jinxiuquerenui.but_queding0.enabled = true;
        this.jinxiuquerenui.but_queding0.alpha = 1;
        this.jinxiuquerenui.but_queding0.addEventListener(egret.TouchEvent.TOUCH_TAP, this.xifujinxiu5queren, this);
    };
    Jiatingui.prototype.xifujinxiu1queren = function () {
        Gameguanli.Kongzhitai().dingbuui.removeChild(this.jinxiuquerenui);
        this.fasongqurenshuju("11", "3", "1");
    };
    Jiatingui.prototype.xifujinxiu2queren = function () {
        Gameguanli.Kongzhitai().dingbuui.removeChild(this.jinxiuquerenui);
        this.fasongqurenshuju("12", "3", "1");
    };
    Jiatingui.prototype.xifujinxiu3queren = function () {
        Gameguanli.Kongzhitai().dingbuui.removeChild(this.jinxiuquerenui);
        this.fasongqurenshuju("13", "3", "1");
    };
    Jiatingui.prototype.xifujinxiu4queren = function () {
        Gameguanli.Kongzhitai().dingbuui.removeChild(this.jinxiuquerenui);
        this.fasongqurenshuju("14", "3", "1");
    };
    Jiatingui.prototype.xifujinxiu5queren = function () {
        Gameguanli.Kongzhitai().dingbuui.removeChild(this.jinxiuquerenui);
        this.fasongqurenshuju("15", "3", "1");
    };
    Jiatingui.prototype.xifugzkeng1weijiesuo = function () {
        this.jinxiuquerenui = new Tongyongquerenkuang();
        Gameguanli.Kongzhitai().dingbuui.addChild(this.jinxiuquerenui);
        this.jinxiuquerenui.jiangliicon1.source = "";
        this.jinxiuquerenui.jiangli1.text = "";
        this.jinxiuquerenui.jiangliicon2.source = "";
        this.jinxiuquerenui.jiangli2.text = "";
        this.jinxiuquerenui.but_queding.enabled = false;
        this.jinxiuquerenui.but_shuangbei.enabled = false;
        this.jinxiuquerenui.but_queding.alpha = 0;
        this.jinxiuquerenui.but_shuangbei.alpha = 0;
        this.jinxiuquerenui.but_queding0.enabled = true;
        this.jinxiuquerenui.but_queding0.alpha = 1;
        this.jinxiuquerenui.but_queding0.addEventListener(egret.TouchEvent.TOUCH_TAP, this.guanbijinxiuquerenui, this);
        this.jinxiuquerenui.tishiwenzi.text = "上街到访【书店】时，有几率解锁该进修内容。";
    };
    Jiatingui.prototype.xifugzkeng2weijiesuo = function () {
        this.jinxiuquerenui = new Tongyongquerenkuang();
        Gameguanli.Kongzhitai().dingbuui.addChild(this.jinxiuquerenui);
        this.jinxiuquerenui.jiangliicon1.source = "";
        this.jinxiuquerenui.jiangli1.text = "";
        this.jinxiuquerenui.jiangliicon2.source = "";
        this.jinxiuquerenui.jiangli2.text = "";
        this.jinxiuquerenui.but_queding.enabled = false;
        this.jinxiuquerenui.but_shuangbei.enabled = false;
        this.jinxiuquerenui.but_queding.alpha = 0;
        this.jinxiuquerenui.but_shuangbei.alpha = 0;
        this.jinxiuquerenui.but_queding0.enabled = true;
        this.jinxiuquerenui.but_queding0.alpha = 1;
        this.jinxiuquerenui.but_queding0.addEventListener(egret.TouchEvent.TOUCH_TAP, this.guanbijinxiuquerenui, this);
        this.jinxiuquerenui.tishiwenzi.text = "上街到访【书店】时，有几率解锁该进修内容。";
    };
    Jiatingui.prototype.xifugzkeng3weijiesuo = function () {
        this.jinxiuquerenui = new Tongyongquerenkuang();
        Gameguanli.Kongzhitai().dingbuui.addChild(this.jinxiuquerenui);
        this.jinxiuquerenui.jiangliicon1.source = "";
        this.jinxiuquerenui.jiangli1.text = "";
        this.jinxiuquerenui.jiangliicon2.source = "";
        this.jinxiuquerenui.jiangli2.text = "";
        this.jinxiuquerenui.but_queding.enabled = false;
        this.jinxiuquerenui.but_shuangbei.enabled = false;
        this.jinxiuquerenui.but_queding.alpha = 0;
        this.jinxiuquerenui.but_shuangbei.alpha = 0;
        this.jinxiuquerenui.but_queding0.enabled = true;
        this.jinxiuquerenui.but_queding0.alpha = 1;
        this.jinxiuquerenui.but_queding0.addEventListener(egret.TouchEvent.TOUCH_TAP, this.guanbijinxiuquerenui, this);
        this.jinxiuquerenui.tishiwenzi.text = "上街到访【书店】时，有几率解锁该进修内容。";
    };
    Jiatingui.prototype.xifugzkeng4weijiesuo = function () {
        this.jinxiuquerenui = new Tongyongquerenkuang();
        Gameguanli.Kongzhitai().dingbuui.addChild(this.jinxiuquerenui);
        this.jinxiuquerenui.jiangliicon1.source = "";
        this.jinxiuquerenui.jiangli1.text = "";
        this.jinxiuquerenui.jiangliicon2.source = "";
        this.jinxiuquerenui.jiangli2.text = "";
        this.jinxiuquerenui.but_queding.enabled = false;
        this.jinxiuquerenui.but_shuangbei.enabled = false;
        this.jinxiuquerenui.but_queding.alpha = 0;
        this.jinxiuquerenui.but_shuangbei.alpha = 0;
        this.jinxiuquerenui.but_queding0.enabled = true;
        this.jinxiuquerenui.but_queding0.alpha = 1;
        this.jinxiuquerenui.but_queding0.addEventListener(egret.TouchEvent.TOUCH_TAP, this.guanbijinxiuquerenui, this);
        this.jinxiuquerenui.tishiwenzi.text = "上街到访【书店】时，有几率解锁该进修内容。";
    };
    Jiatingui.prototype.xifugzkeng5weijiesuo = function () {
        this.jinxiuquerenui = new Tongyongquerenkuang();
        Gameguanli.Kongzhitai().dingbuui.addChild(this.jinxiuquerenui);
        this.jinxiuquerenui.jiangliicon1.source = "";
        this.jinxiuquerenui.jiangli1.text = "";
        this.jinxiuquerenui.jiangliicon2.source = "";
        this.jinxiuquerenui.jiangli2.text = "";
        this.jinxiuquerenui.but_queding.enabled = false;
        this.jinxiuquerenui.but_shuangbei.enabled = false;
        this.jinxiuquerenui.but_queding.alpha = 0;
        this.jinxiuquerenui.but_shuangbei.alpha = 0;
        this.jinxiuquerenui.but_queding0.enabled = true;
        this.jinxiuquerenui.but_queding0.alpha = 1;
        this.jinxiuquerenui.but_queding0.addEventListener(egret.TouchEvent.TOUCH_TAP, this.guanbijinxiuquerenui, this);
        this.jinxiuquerenui.tishiwenzi.text = "上街到访【书店】时，有几率解锁该进修内容。";
    };
    Jiatingui.prototype.xifuzs = function () {
        if (Gameguanli.Kongzhitai().jiatingjiemian.xifujiaohu.parent) {
            if (this.xifujiaohu.xifuchakan.enabled == false || this.xifujiaohu.xifujinxiu.enabled == false || this.xifujiaohu.xifuzengsong.enabled == false) {
                Gameguanli.Kongzhitai().jiatingjiemian.xifujiaohu.removeChild(this.erjitanchuui);
            }
            this.erjitanchuui = new Jiatingchengyuandaojuui();
            Gameguanli.Kongzhitai().jiatingjiemian.xifujiaohu.addChild(this.erjitanchuui);
            this.erjitanchuui.x = this.xifujiaohu.xifubeijing.x - this.erjitanchuui.width - this.xifujiaohu.xifubeijing.width;
            this.erjitanchuui.y = this.xifujiaohu.xifubeijing.y - this.erjitanchuui.height;
            this.erjitanchuui.daojubiaoti.text = "赠送列表";
            this.chengyuanhudongbiao = RES.getRes("chengyuanhudongbiao_json");
            this.daojubiao = RES.getRes("daojubiao_json");
            this.xifujiaohu.xifuchakan.enabled = true;
            if (Gerenshuxing.xifujiaotan > 0) {
                this.xifujiaohu.xifujiaotan.enabled = true;
            }
            else {
                this.xifujiaohu.xifujiaotan.enabled = false;
            }
            this.xifujiaohu.xifujinxiu.enabled = true;
            this.xifujiaohu.xifuzengsong.enabled = false;
            for (var i = 0; i < this.chengyuanhudongbiao.length; i++) {
                if (this.chengyuanhudongbiao[i].id == "16") {
                    this.zengsongid1 = this.chengyuanhudongbiao[i].xiaohao;
                }
                if (this.chengyuanhudongbiao[i].id == "17") {
                    this.zengsongid2 = this.chengyuanhudongbiao[i].xiaohao;
                }
                if (this.chengyuanhudongbiao[i].id == "18") {
                    this.zengsongid3 = this.chengyuanhudongbiao[i].xiaohao;
                }
                if (this.chengyuanhudongbiao[i].id == "19") {
                    this.zengsongid4 = this.chengyuanhudongbiao[i].xiaohao;
                }
                if (this.chengyuanhudongbiao[i].id == "20") {
                    this.zengsongid5 = this.chengyuanhudongbiao[i].xiaohao;
                }
            }
            this.xifuzskeng1();
            this.xifuzskeng2();
            this.xifuzskeng3();
            this.xifuzskeng4();
            this.xifuzskeng5();
        }
    };
    Jiatingui.prototype.xifuzskeng1 = function () {
        for (var h in Gerencaipudengji.daoju) {
            if (h == this.zengsongid1) {
                if (parseInt(Gerencaipudengji.daoju[h][0]) > 0) {
                    this.erjitanchuui.zsanniudb1.source = "img_jiaohuanniudibu_png";
                    this.erjitanchuui.geshudikuang1.alpha = 1;
                    this.erjitanchuui.geshuwenzi1.text = Gerencaipudengji.daoju[h][0];
                    this.erjitanchuui.zengsong1.enabled = true;
                    this.erjitanchuui.zengsong1.addEventListener(egret.TouchEvent.TOUCH_TAP, this.xifuzskeng1jiesuo, this);
                    break;
                }
                else {
                    this.erjitanchuui.zsanniudb1.source = "img_jiaohuanniudibu1_png";
                    this.erjitanchuui.geshudikuang1.alpha = 0;
                    this.erjitanchuui.geshuwenzi1.text = "";
                    this.erjitanchuui.zengsong1.enabled = true;
                    this.erjitanchuui.zengsong1.addEventListener(egret.TouchEvent.TOUCH_TAP, this.xifuzskeng1jiesuo, this);
                    break;
                }
            }
        }
        for (var j = 0; j < this.daojubiao.length; j++) {
            if (this.daojubiao[j].id == this.zengsongid1) {
                this.erjitanchuui.zengsongtupian1.source = this.daojubiao[j].xianshiicon;
                this.erjitanchuui.wznr1.text = this.daojubiao[j].mingcheng;
                break;
            }
        }
    };
    Jiatingui.prototype.xifuzskeng2 = function () {
        for (var h in Gerencaipudengji.daoju) {
            if (h == this.zengsongid2) {
                if (parseInt(Gerencaipudengji.daoju[h][0]) > 0) {
                    this.erjitanchuui.zsanniudb2.source = "img_jiaohuanniudibu_png";
                    this.erjitanchuui.geshudikuang2.alpha = 1;
                    this.erjitanchuui.geshuwenzi2.text = Gerencaipudengji.daoju[h][0];
                    this.erjitanchuui.zengsong2.enabled = true;
                    this.erjitanchuui.zengsong2.addEventListener(egret.TouchEvent.TOUCH_TAP, this.xifuzskeng2jiesuo, this);
                    break;
                }
                else {
                    this.erjitanchuui.zsanniudb2.source = "img_jiaohuanniudibu1_png";
                    this.erjitanchuui.geshudikuang2.alpha = 0;
                    this.erjitanchuui.geshuwenzi2.text = "";
                    this.erjitanchuui.zengsong2.enabled = true;
                    this.erjitanchuui.zengsong2.addEventListener(egret.TouchEvent.TOUCH_TAP, this.xifuzskeng2jiesuo, this);
                    break;
                }
            }
        }
        for (var j = 0; j < this.daojubiao.length; j++) {
            if (this.daojubiao[j].id == this.zengsongid2) {
                this.erjitanchuui.zengsongtupian2.source = this.daojubiao[j].xianshiicon;
                this.erjitanchuui.wznr2.text = this.daojubiao[j].mingcheng;
                break;
            }
        }
    };
    Jiatingui.prototype.xifuzskeng3 = function () {
        for (var h in Gerencaipudengji.daoju) {
            if (h == this.zengsongid3) {
                if (parseInt(Gerencaipudengji.daoju[h][0]) > 0) {
                    this.erjitanchuui.zsanniudb3.source = "img_jiaohuanniudibu_png";
                    this.erjitanchuui.geshudikuang3.alpha = 1;
                    this.erjitanchuui.geshuwenzi3.text = Gerencaipudengji.daoju[h][0];
                    this.erjitanchuui.zengsong3.enabled = true;
                    this.erjitanchuui.zengsong3.addEventListener(egret.TouchEvent.TOUCH_TAP, this.xifuzskeng3jiesuo, this);
                    break;
                }
                else {
                    this.erjitanchuui.zsanniudb3.source = "img_jiaohuanniudibu1_png";
                    this.erjitanchuui.geshudikuang3.alpha = 0;
                    this.erjitanchuui.geshuwenzi3.text = "";
                    this.erjitanchuui.zengsong3.enabled = true;
                    this.erjitanchuui.zengsong3.addEventListener(egret.TouchEvent.TOUCH_TAP, this.xifuzskeng3jiesuo, this);
                    break;
                }
            }
        }
        for (var j = 0; j < this.daojubiao.length; j++) {
            if (this.daojubiao[j].id == this.zengsongid3) {
                this.erjitanchuui.zengsongtupian3.source = this.daojubiao[j].xianshiicon;
                this.erjitanchuui.wznr3.text = this.daojubiao[j].mingcheng;
                break;
            }
        }
    };
    Jiatingui.prototype.xifuzskeng4 = function () {
        for (var h in Gerencaipudengji.daoju) {
            if (h == this.zengsongid4) {
                if (parseInt(Gerencaipudengji.daoju[h][0]) > 0) {
                    this.erjitanchuui.zsanniudb4.source = "img_jiaohuanniudibu_png";
                    this.erjitanchuui.geshudikuang4.alpha = 1;
                    this.erjitanchuui.geshuwenzi4.text = Gerencaipudengji.daoju[h][0];
                    this.erjitanchuui.zengsong4.enabled = true;
                    this.erjitanchuui.zengsong4.addEventListener(egret.TouchEvent.TOUCH_TAP, this.xifuzskeng4jiesuo, this);
                    break;
                }
                else {
                    this.erjitanchuui.zsanniudb4.source = "img_jiaohuanniudibu1_png";
                    this.erjitanchuui.geshudikuang4.alpha = 0;
                    this.erjitanchuui.geshuwenzi4.text = "";
                    this.erjitanchuui.zengsong4.enabled = true;
                    this.erjitanchuui.zengsong4.addEventListener(egret.TouchEvent.TOUCH_TAP, this.xifuzskeng4jiesuo, this);
                    break;
                }
            }
        }
        for (var j = 0; j < this.daojubiao.length; j++) {
            if (this.daojubiao[j].id == this.zengsongid4) {
                this.erjitanchuui.zengsongtupian4.source = this.daojubiao[j].xianshiicon;
                this.erjitanchuui.wznr4.text = this.daojubiao[j].mingcheng;
                break;
            }
        }
    };
    Jiatingui.prototype.xifuzskeng5 = function () {
        for (var h in Gerencaipudengji.daoju) {
            if (h == this.zengsongid5) {
                if (parseInt(Gerencaipudengji.daoju[h][0]) > 0) {
                    this.erjitanchuui.zsanniudb5.source = "img_jiaohuanniudibu_png";
                    this.erjitanchuui.geshudikuang5.alpha = 1;
                    this.erjitanchuui.geshuwenzi5.text = Gerencaipudengji.daoju[h][0];
                    this.erjitanchuui.zengsong5.enabled = true;
                    this.erjitanchuui.zengsong5.addEventListener(egret.TouchEvent.TOUCH_TAP, this.xifuzskeng5jiesuo, this);
                    break;
                }
                else {
                    this.erjitanchuui.zsanniudb5.source = "img_jiaohuanniudibu1_png";
                    this.erjitanchuui.geshudikuang5.alpha = 0;
                    this.erjitanchuui.geshuwenzi5.text = "";
                    this.erjitanchuui.zengsong5.enabled = true;
                    this.erjitanchuui.zengsong5.addEventListener(egret.TouchEvent.TOUCH_TAP, this.xifuzskeng5jiesuo, this);
                    break;
                }
            }
        }
        for (var j = 0; j < this.daojubiao.length; j++) {
            if (this.daojubiao[j].id == this.zengsongid5) {
                this.erjitanchuui.zengsongtupian5.source = this.daojubiao[j].xianshiicon;
                this.erjitanchuui.wznr5.text = this.daojubiao[j].mingcheng;
                break;
            }
        }
    };
    Jiatingui.prototype.xifuzskeng1jiesuo = function () {
        this.jinxiuquerenui = new Tongyongquerenkuang();
        Gameguanli.Kongzhitai().dingbuui.addChild(this.jinxiuquerenui);
        for (var g = 0; g < this.daojubiao.length; g++) {
            if (this.daojubiao[g].id == this.zengsongid1) {
                this.jinxiuquerenui.tishiwenzi.text = this.daojubiao[g].tips;
                this.querenjinxiujiangliqueren(this.daojubiao[g].jiangli, this.daojubiao[g].jianglishuliang);
                this.querenjinxiuxiaohaoqueren(this.daojubiao[g].id, 1);
                break;
            }
        }
        this.jinxiuquerenui.but_queding.enabled = false;
        this.jinxiuquerenui.but_shuangbei.enabled = false;
        this.jinxiuquerenui.but_queding.alpha = 0;
        this.jinxiuquerenui.but_shuangbei.alpha = 0;
        this.jinxiuquerenui.but_queding0.enabled = true;
        this.jinxiuquerenui.but_queding0.alpha = 1;
        this.jinxiuquerenui.but_queding0.addEventListener(egret.TouchEvent.TOUCH_TAP, this.xifuzs1queren, this);
    };
    Jiatingui.prototype.xifuzskeng2jiesuo = function () {
        this.jinxiuquerenui = new Tongyongquerenkuang();
        Gameguanli.Kongzhitai().dingbuui.addChild(this.jinxiuquerenui);
        for (var g = 0; g < this.daojubiao.length; g++) {
            if (this.daojubiao[g].id == this.zengsongid2) {
                this.jinxiuquerenui.tishiwenzi.text = this.daojubiao[g].tips;
                this.querenjinxiujiangliqueren(this.daojubiao[g].jiangli, this.daojubiao[g].jianglishuliang);
                this.querenjinxiuxiaohaoqueren(this.daojubiao[g].id, 1);
                break;
            }
        }
        this.jinxiuquerenui.but_queding.enabled = false;
        this.jinxiuquerenui.but_shuangbei.enabled = false;
        this.jinxiuquerenui.but_queding.alpha = 0;
        this.jinxiuquerenui.but_shuangbei.alpha = 0;
        this.jinxiuquerenui.but_queding0.enabled = true;
        this.jinxiuquerenui.but_queding0.alpha = 1;
        this.jinxiuquerenui.but_queding0.addEventListener(egret.TouchEvent.TOUCH_TAP, this.xifuzs2queren, this);
    };
    Jiatingui.prototype.xifuzskeng3jiesuo = function () {
        this.jinxiuquerenui = new Tongyongquerenkuang();
        Gameguanli.Kongzhitai().dingbuui.addChild(this.jinxiuquerenui);
        for (var g = 0; g < this.daojubiao.length; g++) {
            if (this.daojubiao[g].id == this.zengsongid3) {
                this.jinxiuquerenui.tishiwenzi.text = this.daojubiao[g].tips;
                this.querenjinxiujiangliqueren(this.daojubiao[g].jiangli, this.daojubiao[g].jianglishuliang);
                this.querenjinxiuxiaohaoqueren(this.daojubiao[g].id, 1);
                break;
            }
        }
        this.jinxiuquerenui.but_queding.enabled = false;
        this.jinxiuquerenui.but_shuangbei.enabled = false;
        this.jinxiuquerenui.but_queding.alpha = 0;
        this.jinxiuquerenui.but_shuangbei.alpha = 0;
        this.jinxiuquerenui.but_queding0.enabled = true;
        this.jinxiuquerenui.but_queding0.alpha = 1;
        this.jinxiuquerenui.but_queding0.addEventListener(egret.TouchEvent.TOUCH_TAP, this.xifuzs3queren, this);
    };
    Jiatingui.prototype.xifuzskeng4jiesuo = function () {
        this.jinxiuquerenui = new Tongyongquerenkuang();
        Gameguanli.Kongzhitai().dingbuui.addChild(this.jinxiuquerenui);
        for (var g = 0; g < this.daojubiao.length; g++) {
            if (this.daojubiao[g].id == this.zengsongid4) {
                this.jinxiuquerenui.tishiwenzi.text = this.daojubiao[g].tips;
                this.querenjinxiujiangliqueren(this.daojubiao[g].jiangli, this.daojubiao[g].jianglishuliang);
                this.querenjinxiuxiaohaoqueren(this.daojubiao[g].id, 1);
                break;
            }
        }
        this.jinxiuquerenui.but_queding.enabled = false;
        this.jinxiuquerenui.but_shuangbei.enabled = false;
        this.jinxiuquerenui.but_queding.alpha = 0;
        this.jinxiuquerenui.but_shuangbei.alpha = 0;
        this.jinxiuquerenui.but_queding0.enabled = true;
        this.jinxiuquerenui.but_queding0.alpha = 1;
        this.jinxiuquerenui.but_queding0.addEventListener(egret.TouchEvent.TOUCH_TAP, this.xifuzs4queren, this);
    };
    Jiatingui.prototype.xifuzskeng5jiesuo = function () {
        this.jinxiuquerenui = new Tongyongquerenkuang();
        Gameguanli.Kongzhitai().dingbuui.addChild(this.jinxiuquerenui);
        for (var g = 0; g < this.daojubiao.length; g++) {
            if (this.daojubiao[g].id == this.zengsongid5) {
                this.jinxiuquerenui.tishiwenzi.text = this.daojubiao[g].tips;
                this.querenjinxiujiangliqueren(this.daojubiao[g].jiangli, this.daojubiao[g].jianglishuliang);
                this.querenjinxiuxiaohaoqueren(this.daojubiao[g].id, 1);
                break;
            }
        }
        this.jinxiuquerenui.but_queding.enabled = false;
        this.jinxiuquerenui.but_shuangbei.enabled = false;
        this.jinxiuquerenui.but_queding.alpha = 0;
        this.jinxiuquerenui.but_shuangbei.alpha = 0;
        this.jinxiuquerenui.but_queding0.enabled = true;
        this.jinxiuquerenui.but_queding0.alpha = 1;
        this.jinxiuquerenui.but_queding0.addEventListener(egret.TouchEvent.TOUCH_TAP, this.xifuzs5queren, this);
    };
    Jiatingui.prototype.xifuzs1queren = function () {
        Gameguanli.Kongzhitai().dingbuui.removeChild(this.jinxiuquerenui);
        for (var h in Gerencaipudengji.daoju) {
            if (h == this.zengsongid1) {
                if (parseInt(Gerencaipudengji.daoju[h][0]) > 0) {
                    this.tongguojiangli(this.zengsongid1);
                    Gameguanli.Kongzhitai().cuowutishixinxi("收到你的礼物，大儿媳似乎开心了许多...");
                    break;
                }
                else {
                    Gameguanli.Kongzhitai().cuowutishixinxi("您并没有该物品可赠送...");
                    break;
                }
            }
        }
    };
    Jiatingui.prototype.xifuzs2queren = function () {
        Gameguanli.Kongzhitai().dingbuui.removeChild(this.jinxiuquerenui);
        for (var h in Gerencaipudengji.daoju) {
            if (h == this.zengsongid2) {
                if (parseInt(Gerencaipudengji.daoju[h][0]) > 0) {
                    this.tongguojiangli(this.zengsongid2);
                    Gameguanli.Kongzhitai().cuowutishixinxi("收到你的礼物，大儿媳似乎开心了许多...");
                    break;
                }
                else {
                    Gameguanli.Kongzhitai().cuowutishixinxi("您并没有该物品可赠送...");
                    break;
                }
            }
        }
    };
    Jiatingui.prototype.xifuzs3queren = function () {
        Gameguanli.Kongzhitai().dingbuui.removeChild(this.jinxiuquerenui);
        for (var h in Gerencaipudengji.daoju) {
            if (h == this.zengsongid3) {
                if (parseInt(Gerencaipudengji.daoju[h][0]) > 0) {
                    this.tongguojiangli(this.zengsongid3);
                    Gameguanli.Kongzhitai().cuowutishixinxi("收到你的礼物，大儿媳似乎开心了许多...");
                    break;
                }
                else {
                    Gameguanli.Kongzhitai().cuowutishixinxi("您并没有该物品可赠送...");
                    break;
                }
            }
        }
    };
    Jiatingui.prototype.xifuzs4queren = function () {
        Gameguanli.Kongzhitai().dingbuui.removeChild(this.jinxiuquerenui);
        for (var h in Gerencaipudengji.daoju) {
            if (h == this.zengsongid4) {
                if (parseInt(Gerencaipudengji.daoju[h][0]) > 0) {
                    this.tongguojiangli(this.zengsongid4);
                    Gameguanli.Kongzhitai().cuowutishixinxi("收到你的礼物，大儿媳似乎开心了许多...");
                    break;
                }
                else {
                    Gameguanli.Kongzhitai().cuowutishixinxi("您并没有该物品可赠送...");
                    break;
                }
            }
        }
    };
    Jiatingui.prototype.xifuzs5queren = function () {
        Gameguanli.Kongzhitai().dingbuui.removeChild(this.jinxiuquerenui);
        for (var h in Gerencaipudengji.daoju) {
            if (h == this.zengsongid5) {
                if (parseInt(Gerencaipudengji.daoju[h][0]) > 0) {
                    this.tongguojiangli(this.zengsongid5);
                    Gameguanli.Kongzhitai().cuowutishixinxi("收到你的礼物，大儿媳似乎开心了许多...");
                    break;
                }
                else {
                    Gameguanli.Kongzhitai().cuowutishixinxi("您并没有该物品可赠送...");
                    break;
                }
            }
        }
    };
    Jiatingui.prototype.guanbixifu = function () {
        Gameguanli.Kongzhitai().jiatingjiemian.removeChild(this.xifujiaohu);
    };
    Jiatingui.prototype.dianjixiaosunnv = function () {
        var _this = this;
        egret.Tween.get(this.img_xiaosunnv).to({ scaleX: 1.1, scaleY: 1.1 }, 500).call(function () {
            egret.Tween.get(_this.img_xiaosunnv).to({ scaleX: 1, scaleY: 1 }, 500);
        });
        this.sunnvjiaohu = new Sunnvjiaohuui();
        Gameguanli.Kongzhitai().jiatingjiemian.addChild(this.sunnvjiaohu);
        this.sunnvjiaohu.sunnvguanbi.touchEnabled = true;
        this.sunnvjiaohu.sunnvguanbi.addEventListener(egret.TouchEvent.TOUCH_TAP, this.guanbisunvn, this);
        this.sunnvjiaohu.sunnvchakan.enabled = true;
        if (Gerenshuxing.sunnvjiaotan > 0) {
            this.sunnvjiaohu.sunnvjiaotan.enabled = true;
        }
        else {
            this.sunnvjiaohu.sunnvjiaotan.enabled = false;
        }
        this.sunnvjiaohu.sunnvjinxiu.enabled = true;
        this.sunnvjiaohu.sunnvchakan.addEventListener(egret.TouchEvent.TOUCH_TAP, this.sunnvck, this);
        this.sunnvjiaohu.sunnvjiaotan.addEventListener(egret.TouchEvent.TOUCH_TAP, this.sunnvjt, this);
        this.sunnvjiaohu.sunnvjinxiu.addEventListener(egret.TouchEvent.TOUCH_TAP, this.sunnvgz, this);
        this.jiatingchengyuanbiao = RES.getRes("jiatingchengyuanbiao_json");
    };
    Jiatingui.prototype.sunnvck = function () {
        if (Gameguanli.Kongzhitai().jiatingjiemian.sunnvjiaohu.parent) {
            if (this.sunnvjiaohu.sunnvchakan.enabled == false || this.sunnvjiaohu.sunnvjinxiu.enabled == false) {
                Gameguanli.Kongzhitai().jiatingjiemian.sunnvjiaohu.removeChild(this.erjitanchuui);
            }
            this.erjitanchuui = new Jiatingchengyuanjieshaoui();
            Gameguanli.Kongzhitai().jiatingjiemian.sunnvjiaohu.addChild(this.erjitanchuui);
            this.sunnvjiaohu.sunnvchakan.enabled = false;
            if (Gerenshuxing.sunnvjiaotan > 0) {
                this.sunnvjiaohu.sunnvjiaotan.enabled = true;
            }
            else {
                this.sunnvjiaohu.sunnvjiaotan.enabled = false;
            }
            this.sunnvjiaohu.sunnvjinxiu.enabled = true;
            this.erjitanchuui.x = this.sunnvjiaohu.sunnvbeijing.x - this.erjitanchuui.width - this.sunnvjiaohu.sunnvbeijing.width;
            this.erjitanchuui.y = this.sunnvjiaohu.sunnvbeijing.y - this.erjitanchuui.height;
            this.erjitanchuui.biaotiwenzi.text = "介绍";
            this.erjitanchuui.guanxibiaoqian.text = "关系";
            this.erjitanchuui.qinhelibiaoqian.text = "亲和值";
            this.erjitanchuui.gongzuobiaoqian.text = "乖巧值";
            this.erjitanchuui.jiesaobiaoqian.text = "说明";
            for (var i = 0; i < this.jiatingchengyuanbiao.length; i++) {
                if (this.jiatingchengyuanbiao[i].id == "4") {
                    this.erjitanchuui.guanxineirong.text = "" + this.jiatingchengyuanbiao[i].chengyuanming;
                    this.erjitanchuui.qinghelizhi.text = "" + Gerenshuxing.sunnvxinxi[0];
                    this.erjitanchuui.gongzuozhi.text = "" + Gerenshuxing.sunnvxinxi[1];
                    this.erjitanchuui.jiesaoneirong.text = "" + this.jiatingchengyuanbiao[i].shuoming;
                    break;
                }
            }
        }
    };
    Jiatingui.prototype.sunnvjt = function () {
        Gerenshuxing.sunnvjiaotan -= 1;
        this.renwujiemian = new Npcduihuaui();
        if (this.sunnvjiaohu.sunnvchakan.enabled == false) {
            Gameguanli.Kongzhitai().jiatingjiemian.sunnvjiaohu.removeChild(this.erjitanchuui);
        }
        Gameguanli.Kongzhitai().dingbuui.addChild(this.renwujiemian);
        this.renwujiemian.chushihua("4");
        this.sunnvjiaohu.sunnvchakan.enabled = true;
        if (Gerenshuxing.sunnvjiaotan > 0) {
            this.sunnvjiaohu.sunnvjiaotan.enabled = true;
        }
        else {
            this.sunnvjiaohu.sunnvjiaotan.enabled = false;
        }
        this.sunnvjiaohu.sunnvjinxiu.enabled = true;
    };
    Jiatingui.prototype.sunnvgz = function () {
        if (Gameguanli.Kongzhitai().jiatingjiemian.sunnvjiaohu.parent) {
            if (this.sunnvjiaohu.sunnvchakan.enabled == false || this.sunnvjiaohu.sunnvjinxiu.enabled == false) {
                Gameguanli.Kongzhitai().jiatingjiemian.sunnvjiaohu.removeChild(this.erjitanchuui);
            }
            if (Gerenshuxing.sunnvxinxi[2] != "0") {
                this.erjitanchuui = new Jiatingjinxiuui();
                Gameguanli.Kongzhitai().jiatingjiemian.sunnvjiaohu.addChild(this.erjitanchuui);
                this.erjitanchuui.x = this.sunnvjiaohu.sunnvbeijing.x - this.erjitanchuui.width - this.sunnvjiaohu.sunnvbeijing.width;
                this.erjitanchuui.y = this.sunnvjiaohu.sunnvbeijing.y - this.erjitanchuui.height;
                this.chengyuanhudongbiao = RES.getRes("chengyuanhudongbiao_json");
                this.sunnvjiaohu.sunnvchakan.enabled = true;
                if (Gerenshuxing.sunnvjiaotan > 0) {
                    this.sunnvjiaohu.sunnvjiaotan.enabled = true;
                }
                else {
                    this.sunnvjiaohu.sunnvjiaotan.enabled = false;
                }
                this.sunnvjiaohu.sunnvjinxiu.enabled = false;
                for (var i = 0; i < this.chengyuanhudongbiao.length; i++) {
                    if (this.chengyuanhudongbiao[i].id == Gerenshuxing.sunnvxinxi[2]) {
                        this.erjitanchuui.jinxiubiaoti.text = this.chengyuanhudongbiao[i].xingdongming;
                        this.erjitanchuui.jinxiutupian.source = this.chengyuanhudongbiao[i].xianshiicon;
                    }
                }
                if (Gerenshuxing.sunnvxinxi[3] == "0") {
                    this.erjitanchuui.shengyushijian0.text = "已完成";
                    this.erjitanchuui.quedinganniu.enabled = true;
                    this.erjitanchuui.quedinganniu.label = "确定";
                    this.erjitanchuui.quedinganniu.addEventListener(egret.TouchEvent.TOUCH_TAP, this.sunnvjinxiulinjiang, this);
                }
                else {
                    var dangqianshijian = (new Date()).valueOf();
                    var shengyushijian = parseInt(Gerenshuxing.sunnvxinxi[3]) - dangqianshijian;
                    this.erjitanchuui.shengyushijian0.text = Math.floor((shengyushijian / 60000) % 60) + ":" + Math.floor((shengyushijian / 1000) % 60);
                    this.erjitanchuui.quedinganniu.enabled = true;
                    this.erjitanchuui.quedinganniu.label = "加速（广告）";
                    this.erjitanchuui.quedinganniu.addEventListener(egret.TouchEvent.TOUCH_TAP, this.sunnvjinxiusuoduan, this);
                    var dingshiqi = new egret.Timer(1000, 1);
                    dingshiqi.addEventListener(egret.TimerEvent.TIMER, this.panduansunnvjinxiu, this);
                    dingshiqi.start();
                }
            }
            else {
                this.erjitanchuui = new Jiatingchengyuanzengsong();
                Gameguanli.Kongzhitai().jiatingjiemian.sunnvjiaohu.addChild(this.erjitanchuui);
                this.erjitanchuui.x = this.sunnvjiaohu.sunnvbeijing.x - this.erjitanchuui.width - this.sunnvjiaohu.sunnvbeijing.width;
                this.erjitanchuui.y = this.sunnvjiaohu.sunnvbeijing.y - this.erjitanchuui.height;
                this.erjitanchuui.wenzibiaoti.text = "玩耍内容";
                this.chengyuanhudongbiao = RES.getRes("chengyuanhudongbiao_json");
                this.sunnvgzkeng1();
                this.sunnvgzkeng2();
                this.sunnvgzkeng3();
                this.sunnvgzkeng4();
                this.sunnvgzkeng5();
            }
            this.sunnvjiaohu.sunnvchakan.enabled = true;
            if (Gerenshuxing.sunnvjiaotan > 0) {
                this.sunnvjiaohu.sunnvjiaotan.enabled = true;
            }
            else {
                this.sunnvjiaohu.sunnvjiaotan.enabled = false;
            }
            this.sunnvjiaohu.sunnvjinxiu.enabled = false;
        }
    };
    Jiatingui.prototype.sunnvjinxiulinjiang = function () {
        var idshuju = Gerenshuxing.sunnvxinxi[2];
        var jianglileixing = 0;
        var jianglishuliang = 0;
        var beishu = 1;
        for (var j = 0; j < this.chengyuanhudongbiao.length; j++) {
            if (this.chengyuanhudongbiao[j].id == idshuju) {
                jianglileixing = this.chengyuanhudongbiao[j].jiangli;
                jianglishuliang = this.chengyuanhudongbiao[j].jianglishuliang;
                break;
            }
        }
        Gerenshuxing.sunnvxinxi[2] = "0";
        Weblianjie.fasongshuju("code:080", "{" + '"uid"' + ":" + '"' + Gerenshuxing.uid + '"' + ","
            + '"leixing"' + ":" + '"' + jianglileixing + '"' + ","
            + '"shuliang"' + ":" + '"' + jianglishuliang + '"' + ","
            + '"beishu"' + ":" + '"' + beishu + '"' + "}");
        this.sunnvgz();
    };
    Jiatingui.prototype.sunnvjinxiusuoduan = function () {
    };
    Jiatingui.prototype.panduansunnvjinxiu = function () {
        if (this.sunnvjiaohu.sunnvjinxiu.enabled == false) {
            this.sunnvgz();
        }
    };
    Jiatingui.prototype.sunnvgzkeng1 = function () {
        var duihua1jiesuo = false;
        for (var i = 0; i < Gerenshuxing.sunnvxuexi.length; i++) {
            if (Gerenshuxing.sunnvxuexi[i] == "31") {
                duihua1jiesuo = true;
                break;
            }
        }
        if (duihua1jiesuo == true) {
            this.erjitanchuui.anniudibu.source = "img_jiaohuanniudibu_png";
            this.erjitanchuui.daojuzu0.enabled = true;
            this.erjitanchuui.daojuzu0.addEventListener(egret.TouchEvent.TOUCH_TAP, this.sunnvgzkeng1jiesuo, this);
        }
        else {
            this.erjitanchuui.anniudibu.source = "img_jiaohuanniudibu1_png";
            this.erjitanchuui.daojuzu0.enabled = true;
            this.erjitanchuui.daojuzu0.addEventListener(egret.TouchEvent.TOUCH_TAP, this.sunnvgzkeng1weijiesuo, this);
        }
        for (var j = 0; j < this.chengyuanhudongbiao.length; j++) {
            if (this.chengyuanhudongbiao[j].id == "31") {
                this.erjitanchuui.wenzineirong.text = this.chengyuanhudongbiao[j].xingdongming;
                this.erjitanchuui.daojutubiao.source = this.chengyuanhudongbiao[j].xianshiicon;
                break;
            }
        }
    };
    Jiatingui.prototype.sunnvgzkeng2 = function () {
        var duihua2jiesuo = false;
        for (var i = 0; i < Gerenshuxing.sunnvxuexi.length; i++) {
            if (Gerenshuxing.sunnvxuexi[i] == "32") {
                duihua2jiesuo = true;
                break;
            }
        }
        if (duihua2jiesuo == true) {
            this.erjitanchuui.anniudibu0.source = "img_jiaohuanniudibu_png";
            this.erjitanchuui.daojuzu1.enabled = true;
            this.erjitanchuui.daojuzu1.addEventListener(egret.TouchEvent.TOUCH_TAP, this.sunnvgzkeng2jiesuo, this);
        }
        else {
            this.erjitanchuui.anniudibu0.source = "img_jiaohuanniudibu1_png";
            this.erjitanchuui.daojuzu1.enabled = true;
            this.erjitanchuui.daojuzu1.addEventListener(egret.TouchEvent.TOUCH_TAP, this.sunnvgzkeng2weijiesuo, this);
        }
        for (var j = 0; j < this.chengyuanhudongbiao.length; j++) {
            if (this.chengyuanhudongbiao[j].id == "32") {
                this.erjitanchuui.wenzineirong0.text = this.chengyuanhudongbiao[j].xingdongming;
                this.erjitanchuui.daojutubiao0.source = this.chengyuanhudongbiao[j].xianshiicon;
                break;
            }
        }
    };
    Jiatingui.prototype.sunnvgzkeng3 = function () {
        var duihua3jiesuo = false;
        for (var i = 0; i < Gerenshuxing.sunnvxuexi.length; i++) {
            if (Gerenshuxing.sunnvxuexi[i] == "33") {
                duihua3jiesuo = true;
                break;
            }
        }
        if (duihua3jiesuo == true) {
            this.erjitanchuui.anniudibu1.source = "img_jiaohuanniudibu_png";
            this.erjitanchuui.daojuzu2.enabled = true;
            this.erjitanchuui.daojuzu2.addEventListener(egret.TouchEvent.TOUCH_TAP, this.sunnvgzkeng3jiesuo, this);
        }
        else {
            this.erjitanchuui.anniudibu1.source = "img_jiaohuanniudibu1_png";
            this.erjitanchuui.daojuzu2.enabled = true;
            this.erjitanchuui.daojuzu2.addEventListener(egret.TouchEvent.TOUCH_TAP, this.sunnvgzkeng3weijiesuo, this);
        }
        for (var j = 0; j < this.chengyuanhudongbiao.length; j++) {
            if (this.chengyuanhudongbiao[j].id == "33") {
                this.erjitanchuui.wenzineirong1.text = this.chengyuanhudongbiao[j].xingdongming;
                this.erjitanchuui.daojutubiao1.source = this.chengyuanhudongbiao[j].xianshiicon;
                break;
            }
        }
    };
    Jiatingui.prototype.sunnvgzkeng4 = function () {
        var duihua4jiesuo = false;
        for (var i = 0; i < Gerenshuxing.sunnvxuexi.length; i++) {
            if (Gerenshuxing.sunnvxuexi[i] == "34") {
                duihua4jiesuo = true;
                break;
            }
        }
        if (duihua4jiesuo == true) {
            this.erjitanchuui.anniudibu2.source = "img_jiaohuanniudibu_png";
            this.erjitanchuui.daojuzu3.enabled = true;
            this.erjitanchuui.daojuzu3.addEventListener(egret.TouchEvent.TOUCH_TAP, this.sunnvgzkeng4jiesuo, this);
        }
        else {
            this.erjitanchuui.anniudibu2.source = "img_jiaohuanniudibu1_png";
            this.erjitanchuui.daojuzu3.enabled = true;
            this.erjitanchuui.daojuzu3.addEventListener(egret.TouchEvent.TOUCH_TAP, this.sunnvgzkeng4weijiesuo, this);
        }
        for (var j = 0; j < this.chengyuanhudongbiao.length; j++) {
            if (this.chengyuanhudongbiao[j].id == "34") {
                this.erjitanchuui.wenzineirong2.text = this.chengyuanhudongbiao[j].xingdongming;
                this.erjitanchuui.daojutubiao2.source = this.chengyuanhudongbiao[j].xianshiicon;
                break;
            }
        }
    };
    Jiatingui.prototype.sunnvgzkeng5 = function () {
        var duihua5jiesuo = false;
        for (var i = 0; i < Gerenshuxing.sunnvxuexi.length; i++) {
            if (Gerenshuxing.sunnvxuexi[i] == "35") {
                duihua5jiesuo = true;
                break;
            }
        }
        if (duihua5jiesuo == true) {
            this.erjitanchuui.anniudibu3.source = "img_jiaohuanniudibu_png";
            this.erjitanchuui.daojuzu4.enabled = true;
            this.erjitanchuui.daojuzu4.addEventListener(egret.TouchEvent.TOUCH_TAP, this.sunnvgzkeng5jiesuo, this);
        }
        else {
            this.erjitanchuui.anniudibu3.source = "img_jiaohuanniudibu1_png";
            this.erjitanchuui.daojuzu4.enabled = true;
            this.erjitanchuui.daojuzu4.addEventListener(egret.TouchEvent.TOUCH_TAP, this.sunnvgzkeng5weijiesuo, this);
        }
        for (var j = 0; j < this.chengyuanhudongbiao.length; j++) {
            if (this.chengyuanhudongbiao[j].id == "35") {
                this.erjitanchuui.wenzineirong3.text = this.chengyuanhudongbiao[j].xingdongming;
                this.erjitanchuui.daojutubiao3.source = this.chengyuanhudongbiao[j].xianshiicon;
                break;
            }
        }
    };
    Jiatingui.prototype.sunnvgzkeng1jiesuo = function () {
        this.jinxiuquerenui = new Tongyongquerenkuang();
        Gameguanli.Kongzhitai().dingbuui.addChild(this.jinxiuquerenui);
        for (var g = 0; g < this.chengyuanhudongbiao.length; g++) {
            if (this.chengyuanhudongbiao[g].id == "31") {
                this.jinxiuquerenui.tishiwenzi.text = "您已选择进修：【" + this.chengyuanhudongbiao[g].xingdongming + "】。\n此次进修消耗时间为：【" + this.chengyuanhudongbiao[g].shijian + "】分钟（现实时间）。";
                this.querenjinxiujiangliqueren(this.chengyuanhudongbiao[g].jiangli, this.chengyuanhudongbiao[g].jianglishuliang);
                this.querenjinxiuxiaohaoqueren(this.chengyuanhudongbiao[g].xiaohao, this.chengyuanhudongbiao[g].xiaohaoshuliang);
                break;
            }
        }
        this.jinxiuquerenui.but_queding.enabled = false;
        this.jinxiuquerenui.but_shuangbei.enabled = false;
        this.jinxiuquerenui.but_queding.alpha = 0;
        this.jinxiuquerenui.but_shuangbei.alpha = 0;
        this.jinxiuquerenui.but_queding0.enabled = true;
        this.jinxiuquerenui.but_queding0.alpha = 1;
        this.jinxiuquerenui.but_queding0.addEventListener(egret.TouchEvent.TOUCH_TAP, this.sunnvjinxiu1queren, this);
    };
    Jiatingui.prototype.sunnvgzkeng2jiesuo = function () {
        this.jinxiuquerenui = new Tongyongquerenkuang();
        Gameguanli.Kongzhitai().dingbuui.addChild(this.jinxiuquerenui);
        for (var g = 0; g < this.chengyuanhudongbiao.length; g++) {
            if (this.chengyuanhudongbiao[g].id == "32") {
                this.jinxiuquerenui.tishiwenzi.text = "您已选择进修：【" + this.chengyuanhudongbiao[g].xingdongming + "】。\n此次进修消耗时间为：【" + this.chengyuanhudongbiao[g].shijian + "】分钟（现实时间）。";
                this.querenjinxiujiangliqueren(this.chengyuanhudongbiao[g].jiangli, this.chengyuanhudongbiao[g].jianglishuliang);
                this.querenjinxiuxiaohaoqueren(this.chengyuanhudongbiao[g].xiaohao, this.chengyuanhudongbiao[g].xiaohaoshuliang);
                break;
            }
        }
        this.jinxiuquerenui.but_queding.enabled = false;
        this.jinxiuquerenui.but_shuangbei.enabled = false;
        this.jinxiuquerenui.but_queding.alpha = 0;
        this.jinxiuquerenui.but_shuangbei.alpha = 0;
        this.jinxiuquerenui.but_queding0.enabled = true;
        this.jinxiuquerenui.but_queding0.alpha = 1;
        this.jinxiuquerenui.but_queding0.addEventListener(egret.TouchEvent.TOUCH_TAP, this.sunnvjinxiu2queren, this);
    };
    Jiatingui.prototype.sunnvgzkeng3jiesuo = function () {
        this.jinxiuquerenui = new Tongyongquerenkuang();
        Gameguanli.Kongzhitai().dingbuui.addChild(this.jinxiuquerenui);
        for (var g = 0; g < this.chengyuanhudongbiao.length; g++) {
            if (this.chengyuanhudongbiao[g].id == "33") {
                this.jinxiuquerenui.tishiwenzi.text = "您已选择进修：【" + this.chengyuanhudongbiao[g].xingdongming + "】。\n此次进修消耗时间为：【" + this.chengyuanhudongbiao[g].shijian + "】分钟（现实时间）。";
                this.querenjinxiujiangliqueren(this.chengyuanhudongbiao[g].jiangli, this.chengyuanhudongbiao[g].jianglishuliang);
                this.querenjinxiuxiaohaoqueren(this.chengyuanhudongbiao[g].xiaohao, this.chengyuanhudongbiao[g].xiaohaoshuliang);
                break;
            }
        }
        this.jinxiuquerenui.but_queding.enabled = false;
        this.jinxiuquerenui.but_shuangbei.enabled = false;
        this.jinxiuquerenui.but_queding.alpha = 0;
        this.jinxiuquerenui.but_shuangbei.alpha = 0;
        this.jinxiuquerenui.but_queding0.enabled = true;
        this.jinxiuquerenui.but_queding0.alpha = 1;
        this.jinxiuquerenui.but_queding0.addEventListener(egret.TouchEvent.TOUCH_TAP, this.sunnvjinxiu3queren, this);
    };
    Jiatingui.prototype.sunnvgzkeng4jiesuo = function () {
        this.jinxiuquerenui = new Tongyongquerenkuang();
        Gameguanli.Kongzhitai().dingbuui.addChild(this.jinxiuquerenui);
        for (var g = 0; g < this.chengyuanhudongbiao.length; g++) {
            if (this.chengyuanhudongbiao[g].id == "34") {
                this.jinxiuquerenui.tishiwenzi.text = "您已选择进修：【" + this.chengyuanhudongbiao[g].xingdongming + "】。\n此次进修消耗时间为：【" + this.chengyuanhudongbiao[g].shijian + "】分钟（现实时间）。";
                this.querenjinxiujiangliqueren(this.chengyuanhudongbiao[g].jiangli, this.chengyuanhudongbiao[g].jianglishuliang);
                this.querenjinxiuxiaohaoqueren(this.chengyuanhudongbiao[g].xiaohao, this.chengyuanhudongbiao[g].xiaohaoshuliang);
                break;
            }
        }
        this.jinxiuquerenui.but_queding.enabled = false;
        this.jinxiuquerenui.but_shuangbei.enabled = false;
        this.jinxiuquerenui.but_queding.alpha = 0;
        this.jinxiuquerenui.but_shuangbei.alpha = 0;
        this.jinxiuquerenui.but_queding0.enabled = true;
        this.jinxiuquerenui.but_queding0.alpha = 1;
        this.jinxiuquerenui.but_queding0.addEventListener(egret.TouchEvent.TOUCH_TAP, this.sunnvjinxiu4queren, this);
    };
    Jiatingui.prototype.sunnvgzkeng5jiesuo = function () {
        this.jinxiuquerenui = new Tongyongquerenkuang();
        Gameguanli.Kongzhitai().dingbuui.addChild(this.jinxiuquerenui);
        for (var g = 0; g < this.chengyuanhudongbiao.length; g++) {
            if (this.chengyuanhudongbiao[g].id == "35") {
                this.jinxiuquerenui.tishiwenzi.text = "您已选择进修：【" + this.chengyuanhudongbiao[g].xingdongming + "】。\n此次进修消耗时间为：【" + this.chengyuanhudongbiao[g].shijian + "】分钟（现实时间）。";
                this.querenjinxiujiangliqueren(this.chengyuanhudongbiao[g].jiangli, this.chengyuanhudongbiao[g].jianglishuliang);
                this.querenjinxiuxiaohaoqueren(this.chengyuanhudongbiao[g].xiaohao, this.chengyuanhudongbiao[g].xiaohaoshuliang);
                break;
            }
        }
        this.jinxiuquerenui.but_queding.enabled = false;
        this.jinxiuquerenui.but_shuangbei.enabled = false;
        this.jinxiuquerenui.but_queding.alpha = 0;
        this.jinxiuquerenui.but_shuangbei.alpha = 0;
        this.jinxiuquerenui.but_queding0.enabled = true;
        this.jinxiuquerenui.but_queding0.alpha = 1;
        this.jinxiuquerenui.but_queding0.addEventListener(egret.TouchEvent.TOUCH_TAP, this.sunnvjinxiu5queren, this);
    };
    Jiatingui.prototype.sunnvjinxiu1queren = function () {
        Gameguanli.Kongzhitai().dingbuui.removeChild(this.jinxiuquerenui);
        this.fasongqurenshuju("31", "4", "1");
    };
    Jiatingui.prototype.sunnvjinxiu2queren = function () {
        Gameguanli.Kongzhitai().dingbuui.removeChild(this.jinxiuquerenui);
        this.fasongqurenshuju("32", "4", "1");
    };
    Jiatingui.prototype.sunnvjinxiu3queren = function () {
        Gameguanli.Kongzhitai().dingbuui.removeChild(this.jinxiuquerenui);
        this.fasongqurenshuju("33", "4", "1");
    };
    Jiatingui.prototype.sunnvjinxiu4queren = function () {
        Gameguanli.Kongzhitai().dingbuui.removeChild(this.jinxiuquerenui);
        this.fasongqurenshuju("34", "4", "1");
    };
    Jiatingui.prototype.sunnvjinxiu5queren = function () {
        Gameguanli.Kongzhitai().dingbuui.removeChild(this.jinxiuquerenui);
        this.fasongqurenshuju("35", "4", "1");
    };
    Jiatingui.prototype.sunnvgzkeng1weijiesuo = function () {
        this.jinxiuquerenui = new Tongyongquerenkuang();
        Gameguanli.Kongzhitai().dingbuui.addChild(this.jinxiuquerenui);
        this.jinxiuquerenui.jiangliicon1.source = "";
        this.jinxiuquerenui.jiangli1.text = "";
        this.jinxiuquerenui.jiangliicon2.source = "";
        this.jinxiuquerenui.jiangli2.text = "";
        this.jinxiuquerenui.but_queding.enabled = false;
        this.jinxiuquerenui.but_shuangbei.enabled = false;
        this.jinxiuquerenui.but_queding.alpha = 0;
        this.jinxiuquerenui.but_shuangbei.alpha = 0;
        this.jinxiuquerenui.but_queding0.enabled = true;
        this.jinxiuquerenui.but_queding0.alpha = 1;
        this.jinxiuquerenui.but_queding0.addEventListener(egret.TouchEvent.TOUCH_TAP, this.guanbijinxiuquerenui, this);
        this.jinxiuquerenui.tishiwenzi.text = "上街到访【书店】时，有几率解锁该进修内容。";
    };
    Jiatingui.prototype.sunnvgzkeng2weijiesuo = function () {
        this.jinxiuquerenui = new Tongyongquerenkuang();
        Gameguanli.Kongzhitai().dingbuui.addChild(this.jinxiuquerenui);
        this.jinxiuquerenui.jiangliicon1.source = "";
        this.jinxiuquerenui.jiangli1.text = "";
        this.jinxiuquerenui.jiangliicon2.source = "";
        this.jinxiuquerenui.jiangli2.text = "";
        this.jinxiuquerenui.but_queding.enabled = false;
        this.jinxiuquerenui.but_shuangbei.enabled = false;
        this.jinxiuquerenui.but_queding.alpha = 0;
        this.jinxiuquerenui.but_shuangbei.alpha = 0;
        this.jinxiuquerenui.but_queding0.enabled = true;
        this.jinxiuquerenui.but_queding0.alpha = 1;
        this.jinxiuquerenui.but_queding0.addEventListener(egret.TouchEvent.TOUCH_TAP, this.guanbijinxiuquerenui, this);
        this.jinxiuquerenui.tishiwenzi.text = "上街到访【书店】时，有几率解锁该进修内容。";
    };
    Jiatingui.prototype.sunnvgzkeng3weijiesuo = function () {
        this.jinxiuquerenui = new Tongyongquerenkuang();
        Gameguanli.Kongzhitai().dingbuui.addChild(this.jinxiuquerenui);
        this.jinxiuquerenui.jiangliicon1.source = "";
        this.jinxiuquerenui.jiangli1.text = "";
        this.jinxiuquerenui.jiangliicon2.source = "";
        this.jinxiuquerenui.jiangli2.text = "";
        this.jinxiuquerenui.but_queding.enabled = false;
        this.jinxiuquerenui.but_shuangbei.enabled = false;
        this.jinxiuquerenui.but_queding.alpha = 0;
        this.jinxiuquerenui.but_shuangbei.alpha = 0;
        this.jinxiuquerenui.but_queding0.enabled = true;
        this.jinxiuquerenui.but_queding0.alpha = 1;
        this.jinxiuquerenui.but_queding0.addEventListener(egret.TouchEvent.TOUCH_TAP, this.guanbijinxiuquerenui, this);
        this.jinxiuquerenui.tishiwenzi.text = "上街到访【书店】时，有几率解锁该进修内容。";
    };
    Jiatingui.prototype.sunnvgzkeng4weijiesuo = function () {
        this.jinxiuquerenui = new Tongyongquerenkuang();
        Gameguanli.Kongzhitai().dingbuui.addChild(this.jinxiuquerenui);
        this.jinxiuquerenui.jiangliicon1.source = "";
        this.jinxiuquerenui.jiangli1.text = "";
        this.jinxiuquerenui.jiangliicon2.source = "";
        this.jinxiuquerenui.jiangli2.text = "";
        this.jinxiuquerenui.but_queding.enabled = false;
        this.jinxiuquerenui.but_shuangbei.enabled = false;
        this.jinxiuquerenui.but_queding.alpha = 0;
        this.jinxiuquerenui.but_shuangbei.alpha = 0;
        this.jinxiuquerenui.but_queding0.enabled = true;
        this.jinxiuquerenui.but_queding0.alpha = 1;
        this.jinxiuquerenui.but_queding0.addEventListener(egret.TouchEvent.TOUCH_TAP, this.guanbijinxiuquerenui, this);
        this.jinxiuquerenui.tishiwenzi.text = "上街到访【书店】时，有几率解锁该进修内容。";
    };
    Jiatingui.prototype.sunnvgzkeng5weijiesuo = function () {
        this.jinxiuquerenui = new Tongyongquerenkuang();
        Gameguanli.Kongzhitai().dingbuui.addChild(this.jinxiuquerenui);
        this.jinxiuquerenui.jiangliicon1.source = "";
        this.jinxiuquerenui.jiangli1.text = "";
        this.jinxiuquerenui.jiangliicon2.source = "";
        this.jinxiuquerenui.jiangli2.text = "";
        this.jinxiuquerenui.but_queding.enabled = false;
        this.jinxiuquerenui.but_shuangbei.enabled = false;
        this.jinxiuquerenui.but_queding.alpha = 0;
        this.jinxiuquerenui.but_shuangbei.alpha = 0;
        this.jinxiuquerenui.but_queding0.enabled = true;
        this.jinxiuquerenui.but_queding0.alpha = 1;
        this.jinxiuquerenui.but_queding0.addEventListener(egret.TouchEvent.TOUCH_TAP, this.guanbijinxiuquerenui, this);
        this.jinxiuquerenui.tishiwenzi.text = "上街到访【书店】时，有几率解锁该进修内容。";
    };
    Jiatingui.prototype.sunnvzs = function () {
    };
    Jiatingui.prototype.guanbisunvn = function () {
        Gameguanli.Kongzhitai().jiatingjiemian.removeChild(this.sunnvjiaohu);
    };
    Jiatingui.prototype.guanbijinxiuquerenui = function () {
        Gameguanli.Kongzhitai().dingbuui.removeChild(this.jinxiuquerenui);
    };
    Jiatingui.prototype.fasongqurenshuju = function (idhao, fasongren, beishu) {
        for (var h = 0; h < this.chengyuanhudongbiao.length; h++) {
            if (this.chengyuanhudongbiao[h].id == idhao) {
                var shijian = (new Date()).valueOf() + parseInt(this.chengyuanhudongbiao[h].shijian) * 60000;
                switch (this.chengyuanhudongbiao[h].xiaohao) {
                    case "1":
                        if (Gerenshuxing.jinbizhi >= parseInt(this.chengyuanhudongbiao[h].xiaohaoshuliang)) {
                            switch (fasongren) {
                                case "1":
                                    Gerenshuxing.daerzixinxi[2] = "1";
                                    Gerenshuxing.daerzixinxi[3] = "100000000";
                                    this.daerzigz();
                                    break;
                                case "2":
                                    Gerenshuxing.ererzixinxi[2] = "21";
                                    Gerenshuxing.ererzixinxi[3] = "100000000";
                                    this.ererzigz();
                                    break;
                                case "3":
                                    Gerenshuxing.xifuxinxi[2] = "11";
                                    Gerenshuxing.xifuxinxi[3] = "100000000";
                                    this.xifugz();
                                    break;
                                case "4":
                                    Gerenshuxing.sunnvxinxi[2] = "31";
                                    Gerenshuxing.sunnvxinxi[3] = "100000000";
                                    this.sunnvgz();
                                    break;
                            }
                            Weblianjie.fasongshuju("code:066", "{" + '"uid"' + ":" + '"' + Gerenshuxing.uid + '"' +
                                "," + '"xiaohaoleixing"' + ":" + '"' + this.chengyuanhudongbiao[h].xiaohao + '"' +
                                "," + '"xiaohaoshuliang"' + ":" + '"' + this.chengyuanhudongbiao[h].xiaohaoshuliang + '"' +
                                "," + '"jinxiuid"' + ":" + '"' + idhao + '"' +
                                "," + '"beishu"' + ":" + '"' + beishu + '"' +
                                "," + '"geishuijia"' + ":" + '"' + fasongren + '"' +
                                "," + '"jinxiushijian"' + ":" + '"' + shijian + '"' + "}");
                            Gameguanli.Kongzhitai().cuowutishixinxi("开始进修，请耐心等待...");
                        }
                        else {
                            Gameguanli.Kongzhitai().cuowutishixinxi("进修失败，需要消耗" + this.chengyuanhudongbiao[h].xiaohaoshuliang + "金钱");
                        }
                        break;
                    case "2":
                        if (Gerenshuxing.jiatingzhi >= parseInt(this.chengyuanhudongbiao[h].xiaohaoshuliang)) {
                            switch (fasongren) {
                                case "1":
                                    Gerenshuxing.daerzixinxi[2] = "1";
                                    Gerenshuxing.daerzixinxi[3] = "100000000";
                                    this.daerzigz();
                                    break;
                                case "2":
                                    Gerenshuxing.ererzixinxi[2] = "21";
                                    Gerenshuxing.ererzixinxi[3] = "100000000";
                                    this.ererzigz();
                                    break;
                                case "3":
                                    Gerenshuxing.xifuxinxi[2] = "11";
                                    Gerenshuxing.xifuxinxi[3] = "100000000";
                                    this.xifugz();
                                    break;
                                case "4":
                                    Gerenshuxing.sunnvxinxi[2] = "31";
                                    Gerenshuxing.sunnvxinxi[3] = "100000000";
                                    this.sunnvgz();
                                    break;
                            }
                            Weblianjie.fasongshuju("code:066", "{" + '"uid"' + ":" + '"' + Gerenshuxing.uid + '"' +
                                "," + '"xiaohaoleixing"' + ":" + '"' + this.chengyuanhudongbiao[h].xiaohao + '"' +
                                "," + '"xiaohaoshuliang"' + ":" + '"' + this.chengyuanhudongbiao[h].xiaohaoshuliang + '"' +
                                "," + '"jinxiuid"' + ":" + '"' + idhao + '"' +
                                "," + '"beishu"' + ":" + '"' + beishu + '"' +
                                "," + '"geishuijia"' + ":" + '"' + fasongren + '"' +
                                "," + '"jinxiushijian"' + ":" + '"' + shijian + '"' + "}");
                            Gameguanli.Kongzhitai().cuowutishixinxi("开始进修，请耐心等待...");
                        }
                        else {
                            Gameguanli.Kongzhitai().cuowutishixinxi("进修失败，需要消耗" + this.chengyuanhudongbiao[h].xiaohaoshuliang + "体力");
                        }
                        break;
                    case "3":
                        if (Gerenshuxing.jiankangzhi >= parseInt(this.chengyuanhudongbiao[h].xiaohaoshuliang)) {
                            switch (fasongren) {
                                case "1":
                                    Gerenshuxing.daerzixinxi[2] = "1";
                                    Gerenshuxing.daerzixinxi[3] = "100000000";
                                    this.daerzigz();
                                    break;
                                case "2":
                                    Gerenshuxing.ererzixinxi[2] = "21";
                                    Gerenshuxing.ererzixinxi[3] = "100000000";
                                    this.ererzigz();
                                    break;
                                case "3":
                                    Gerenshuxing.xifuxinxi[2] = "11";
                                    Gerenshuxing.xifuxinxi[3] = "100000000";
                                    this.xifugz();
                                    break;
                                case "4":
                                    Gerenshuxing.sunnvxinxi[2] = "31";
                                    Gerenshuxing.sunnvxinxi[3] = "100000000";
                                    this.sunnvgz();
                                    break;
                            }
                            Weblianjie.fasongshuju("code:066", "{" + '"uid"' + ":" + '"' + Gerenshuxing.uid + '"' +
                                "," + '"xiaohaoleixing"' + ":" + '"' + this.chengyuanhudongbiao[h].xiaohao + '"' +
                                "," + '"xiaohaoshuliang"' + ":" + '"' + this.chengyuanhudongbiao[h].xiaohaoshuliang + '"' +
                                "," + '"jinxiuid"' + ":" + '"' + idhao + '"' +
                                "," + '"beishu"' + ":" + '"' + beishu + '"' +
                                "," + '"geishuijia"' + ":" + '"' + fasongren + '"' +
                                "," + '"jinxiushijian"' + ":" + '"' + shijian + '"' + "}");
                            Gameguanli.Kongzhitai().cuowutishixinxi("开始进修，请耐心等待...");
                        }
                        else {
                            Gameguanli.Kongzhitai().cuowutishixinxi("进修失败，需要消耗" + this.chengyuanhudongbiao[h].xiaohaoshuliang + "健康值");
                        }
                        break;
                    case "4":
                        if (Gerenshuxing.kaixinzhi >= parseInt(this.chengyuanhudongbiao[h].xiaohaoshuliang)) {
                            switch (fasongren) {
                                case "1":
                                    Gerenshuxing.daerzixinxi[2] = "1";
                                    Gerenshuxing.daerzixinxi[3] = "100000000";
                                    this.daerzigz();
                                    break;
                                case "2":
                                    Gerenshuxing.ererzixinxi[2] = "21";
                                    Gerenshuxing.ererzixinxi[3] = "100000000";
                                    this.ererzigz();
                                    break;
                                case "3":
                                    Gerenshuxing.xifuxinxi[2] = "11";
                                    Gerenshuxing.xifuxinxi[3] = "100000000";
                                    this.xifugz();
                                    break;
                                case "4":
                                    Gerenshuxing.sunnvxinxi[2] = "31";
                                    Gerenshuxing.sunnvxinxi[3] = "100000000";
                                    this.sunnvgz();
                                    break;
                            }
                            Weblianjie.fasongshuju("code:066", "{" + '"uid"' + ":" + '"' + Gerenshuxing.uid + '"' +
                                "," + '"xiaohaoleixing"' + ":" + '"' + this.chengyuanhudongbiao[h].xiaohao + '"' +
                                "," + '"xiaohaoshuliang"' + ":" + '"' + this.chengyuanhudongbiao[h].xiaohaoshuliang + '"' +
                                "," + '"jinxiuid"' + ":" + '"' + idhao + '"' +
                                "," + '"beishu"' + ":" + '"' + beishu + '"' +
                                "," + '"geishuijia"' + ":" + '"' + fasongren + '"' +
                                "," + '"jinxiushijian"' + ":" + '"' + shijian + '"' + "}");
                            Gameguanli.Kongzhitai().cuowutishixinxi("开始进修，请耐心等待...");
                        }
                        else {
                            Gameguanli.Kongzhitai().cuowutishixinxi("进修失败，需要消耗" + this.chengyuanhudongbiao[h].xiaohaoshuliang + "心情值");
                        }
                        break;
                    case "5":
                        if (Gerenshuxing.xingfuzhi >= parseInt(this.chengyuanhudongbiao[h].xiaohaoshuliang)) {
                            switch (fasongren) {
                                case "1":
                                    Gerenshuxing.daerzixinxi[2] = "1";
                                    Gerenshuxing.daerzixinxi[3] = "100000000";
                                    this.daerzigz();
                                    break;
                                case "2":
                                    Gerenshuxing.ererzixinxi[2] = "21";
                                    Gerenshuxing.ererzixinxi[3] = "100000000";
                                    this.ererzigz();
                                    break;
                                case "3":
                                    Gerenshuxing.xifuxinxi[2] = "11";
                                    Gerenshuxing.xifuxinxi[3] = "100000000";
                                    this.xifugz();
                                    break;
                                case "4":
                                    Gerenshuxing.sunnvxinxi[2] = "31";
                                    Gerenshuxing.sunnvxinxi[3] = "100000000";
                                    this.sunnvgz();
                                    break;
                            }
                            Weblianjie.fasongshuju("code:066", "{" + '"uid"' + ":" + '"' + Gerenshuxing.uid + '"' +
                                "," + '"xiaohaoleixing"' + ":" + '"' + this.chengyuanhudongbiao[h].xiaohao + '"' +
                                "," + '"xiaohaoshuliang"' + ":" + '"' + this.chengyuanhudongbiao[h].xiaohaoshuliang + '"' +
                                "," + '"jinxiuid"' + ":" + '"' + idhao + '"' +
                                "," + '"beishu"' + ":" + '"' + beishu + '"' +
                                "," + '"geishuijia"' + ":" + '"' + fasongren + '"' +
                                "," + '"jinxiushijian"' + ":" + '"' + shijian + '"' + "}");
                            Gameguanli.Kongzhitai().cuowutishixinxi("开始进修，请耐心等待...");
                        }
                        else {
                            Gameguanli.Kongzhitai().cuowutishixinxi("进修失败，需要消耗" + this.chengyuanhudongbiao[h].xiaohaoshuliang + "幸福值");
                        }
                        break;
                    case "6":
                        if (parseInt(Gerenshuxing.daerzixinxi[0]) >= parseInt(this.chengyuanhudongbiao[h].xiaohaoshuliang)) {
                            switch (fasongren) {
                                case "1":
                                    Gerenshuxing.daerzixinxi[2] = "1";
                                    Gerenshuxing.daerzixinxi[3] = "100000000";
                                    this.daerzigz();
                                    break;
                                case "2":
                                    Gerenshuxing.ererzixinxi[2] = "21";
                                    Gerenshuxing.ererzixinxi[3] = "100000000";
                                    this.ererzigz();
                                    break;
                                case "3":
                                    Gerenshuxing.xifuxinxi[2] = "11";
                                    Gerenshuxing.xifuxinxi[3] = "100000000";
                                    this.xifugz();
                                    break;
                                case "4":
                                    Gerenshuxing.sunnvxinxi[2] = "31";
                                    Gerenshuxing.sunnvxinxi[3] = "100000000";
                                    this.sunnvgz();
                                    break;
                            }
                            Weblianjie.fasongshuju("code:066", "{" + '"uid"' + ":" + '"' + Gerenshuxing.uid + '"' +
                                "," + '"xiaohaoleixing"' + ":" + '"' + this.chengyuanhudongbiao[h].xiaohao + '"' +
                                "," + '"xiaohaoshuliang"' + ":" + '"' + this.chengyuanhudongbiao[h].xiaohaoshuliang + '"' +
                                "," + '"jinxiuid"' + ":" + '"' + idhao + '"' +
                                "," + '"beishu"' + ":" + '"' + beishu + '"' +
                                "," + '"geishuijia"' + ":" + '"' + fasongren + '"' +
                                "," + '"jinxiushijian"' + ":" + '"' + shijian + '"' + "}");
                            Gameguanli.Kongzhitai().cuowutishixinxi("开始进修，请耐心等待...");
                        }
                        else {
                            Gameguanli.Kongzhitai().cuowutishixinxi("进修失败，需要消耗" + this.chengyuanhudongbiao[h].xiaohaoshuliang + "大儿子亲和值");
                        }
                        break;
                    case "7":
                        if (parseInt(Gerenshuxing.ererzixinxi[0]) >= parseInt(this.chengyuanhudongbiao[h].xiaohaoshuliang)) {
                            switch (fasongren) {
                                case "1":
                                    Gerenshuxing.daerzixinxi[2] = "1";
                                    Gerenshuxing.daerzixinxi[3] = "100000000";
                                    this.daerzigz();
                                    break;
                                case "2":
                                    Gerenshuxing.ererzixinxi[2] = "21";
                                    Gerenshuxing.ererzixinxi[3] = "100000000";
                                    this.ererzigz();
                                    break;
                                case "3":
                                    Gerenshuxing.xifuxinxi[2] = "11";
                                    Gerenshuxing.xifuxinxi[3] = "100000000";
                                    this.xifugz();
                                    break;
                                case "4":
                                    Gerenshuxing.sunnvxinxi[2] = "31";
                                    Gerenshuxing.sunnvxinxi[3] = "100000000";
                                    this.sunnvgz();
                                    break;
                            }
                            Weblianjie.fasongshuju("code:066", "{" + '"uid"' + ":" + '"' + Gerenshuxing.uid + '"' +
                                "," + '"xiaohaoleixing"' + ":" + '"' + this.chengyuanhudongbiao[h].xiaohao + '"' +
                                "," + '"xiaohaoshuliang"' + ":" + '"' + this.chengyuanhudongbiao[h].xiaohaoshuliang + '"' +
                                "," + '"jinxiuid"' + ":" + '"' + idhao + '"' +
                                "," + '"beishu"' + ":" + '"' + beishu + '"' +
                                "," + '"geishuijia"' + ":" + '"' + fasongren + '"' +
                                "," + '"jinxiushijian"' + ":" + '"' + shijian + '"' + "}");
                            Gameguanli.Kongzhitai().cuowutishixinxi("开始进修，请耐心等待...");
                        }
                        else {
                            Gameguanli.Kongzhitai().cuowutishixinxi("进修失败，需要消耗" + this.chengyuanhudongbiao[h].xiaohaoshuliang + "二儿子亲和值");
                        }
                        break;
                    case "8":
                        if (parseInt(Gerenshuxing.xifuxinxi[0]) >= parseInt(this.chengyuanhudongbiao[h].xiaohaoshuliang)) {
                            switch (fasongren) {
                                case "1":
                                    Gerenshuxing.daerzixinxi[2] = "1";
                                    Gerenshuxing.daerzixinxi[3] = "100000000";
                                    this.daerzigz();
                                    break;
                                case "2":
                                    Gerenshuxing.ererzixinxi[2] = "21";
                                    Gerenshuxing.ererzixinxi[3] = "100000000";
                                    this.ererzigz();
                                    break;
                                case "3":
                                    Gerenshuxing.xifuxinxi[2] = "11";
                                    Gerenshuxing.xifuxinxi[3] = "100000000";
                                    this.xifugz();
                                    break;
                                case "4":
                                    Gerenshuxing.sunnvxinxi[2] = "31";
                                    Gerenshuxing.sunnvxinxi[3] = "100000000";
                                    this.sunnvgz();
                                    break;
                            }
                            Weblianjie.fasongshuju("code:066", "{" + '"uid"' + ":" + '"' + Gerenshuxing.uid + '"' +
                                "," + '"xiaohaoleixing"' + ":" + '"' + this.chengyuanhudongbiao[h].xiaohao + '"' +
                                "," + '"xiaohaoshuliang"' + ":" + '"' + this.chengyuanhudongbiao[h].xiaohaoshuliang + '"' +
                                "," + '"jinxiuid"' + ":" + '"' + idhao + '"' +
                                "," + '"beishu"' + ":" + '"' + beishu + '"' +
                                "," + '"geishuijia"' + ":" + '"' + fasongren + '"' +
                                "," + '"jinxiushijian"' + ":" + '"' + shijian + '"' + "}");
                            Gameguanli.Kongzhitai().cuowutishixinxi("开始进修，请耐心等待...");
                        }
                        else {
                            Gameguanli.Kongzhitai().cuowutishixinxi("进修失败，需要消耗" + this.chengyuanhudongbiao[h].xiaohaoshuliang + "大儿媳亲和值");
                        }
                        break;
                    case "9":
                        if (parseInt(Gerenshuxing.sunnvxinxi[0]) >= parseInt(this.chengyuanhudongbiao[h].xiaohaoshuliang)) {
                            switch (fasongren) {
                                case "1":
                                    Gerenshuxing.daerzixinxi[2] = "1";
                                    Gerenshuxing.daerzixinxi[3] = "100000000";
                                    this.daerzigz();
                                    break;
                                case "2":
                                    Gerenshuxing.ererzixinxi[2] = "21";
                                    Gerenshuxing.ererzixinxi[3] = "100000000";
                                    this.ererzigz();
                                    break;
                                case "3":
                                    Gerenshuxing.xifuxinxi[2] = "11";
                                    Gerenshuxing.xifuxinxi[3] = "100000000";
                                    this.xifugz();
                                    break;
                                case "4":
                                    Gerenshuxing.sunnvxinxi[2] = "31";
                                    Gerenshuxing.sunnvxinxi[3] = "100000000";
                                    this.sunnvgz();
                                    break;
                            }
                            Weblianjie.fasongshuju("code:066", "{" + '"uid"' + ":" + '"' + Gerenshuxing.uid + '"' +
                                "," + '"xiaohaoleixing"' + ":" + '"' + this.chengyuanhudongbiao[h].xiaohao + '"' +
                                "," + '"xiaohaoshuliang"' + ":" + '"' + this.chengyuanhudongbiao[h].xiaohaoshuliang + '"' +
                                "," + '"jinxiuid"' + ":" + '"' + idhao + '"' +
                                "," + '"beishu"' + ":" + '"' + beishu + '"' +
                                "," + '"geishuijia"' + ":" + '"' + fasongren + '"' +
                                "," + '"jinxiushijian"' + ":" + '"' + shijian + '"' + "}");
                            Gameguanli.Kongzhitai().cuowutishixinxi("开始进修，请耐心等待...");
                        }
                        else {
                            Gameguanli.Kongzhitai().cuowutishixinxi("进修失败，需要消耗" + this.chengyuanhudongbiao[h].xiaohaoshuliang + "孙女亲和值");
                        }
                        break;
                    case "10":
                        if (parseInt(Gerenshuxing.daerzixinxi[1]) >= parseInt(this.chengyuanhudongbiao[h].xiaohaoshuliang)) {
                            switch (fasongren) {
                                case "1":
                                    Gerenshuxing.daerzixinxi[2] = "1";
                                    Gerenshuxing.daerzixinxi[3] = "100000000";
                                    this.daerzigz();
                                    break;
                                case "2":
                                    Gerenshuxing.ererzixinxi[2] = "21";
                                    Gerenshuxing.ererzixinxi[3] = "100000000";
                                    this.ererzigz();
                                    break;
                                case "3":
                                    Gerenshuxing.xifuxinxi[2] = "11";
                                    Gerenshuxing.xifuxinxi[3] = "100000000";
                                    this.xifugz();
                                    break;
                                case "4":
                                    Gerenshuxing.sunnvxinxi[2] = "31";
                                    Gerenshuxing.sunnvxinxi[3] = "100000000";
                                    this.sunnvgz();
                                    break;
                            }
                            Weblianjie.fasongshuju("code:066", "{" + '"uid"' + ":" + '"' + Gerenshuxing.uid + '"' +
                                "," + '"xiaohaoleixing"' + ":" + '"' + this.chengyuanhudongbiao[h].xiaohao + '"' +
                                "," + '"xiaohaoshuliang"' + ":" + '"' + this.chengyuanhudongbiao[h].xiaohaoshuliang + '"' +
                                "," + '"jinxiuid"' + ":" + '"' + idhao + '"' +
                                "," + '"beishu"' + ":" + '"' + beishu + '"' +
                                "," + '"geishuijia"' + ":" + '"' + fasongren + '"' +
                                "," + '"jinxiushijian"' + ":" + '"' + shijian + '"' + "}");
                            Gameguanli.Kongzhitai().cuowutishixinxi("开始进修，请耐心等待...");
                        }
                        else {
                            Gameguanli.Kongzhitai().cuowutishixinxi("进修失败，需要消耗" + this.chengyuanhudongbiao[h].xiaohaoshuliang + "大儿子工作能力");
                        }
                        break;
                    case "11":
                        if (parseInt(Gerenshuxing.ererzixinxi[1]) >= parseInt(this.chengyuanhudongbiao[h].xiaohaoshuliang)) {
                            switch (fasongren) {
                                case "1":
                                    Gerenshuxing.daerzixinxi[2] = "1";
                                    Gerenshuxing.daerzixinxi[3] = "100000000";
                                    this.daerzigz();
                                    break;
                                case "2":
                                    Gerenshuxing.ererzixinxi[2] = "21";
                                    Gerenshuxing.ererzixinxi[3] = "100000000";
                                    this.ererzigz();
                                    break;
                                case "3":
                                    Gerenshuxing.xifuxinxi[2] = "11";
                                    Gerenshuxing.xifuxinxi[3] = "100000000";
                                    this.xifugz();
                                    break;
                                case "4":
                                    Gerenshuxing.sunnvxinxi[2] = "31";
                                    Gerenshuxing.sunnvxinxi[3] = "100000000";
                                    this.sunnvgz();
                                    break;
                            }
                            Weblianjie.fasongshuju("code:066", "{" + '"uid"' + ":" + '"' + Gerenshuxing.uid + '"' +
                                "," + '"xiaohaoleixing"' + ":" + '"' + this.chengyuanhudongbiao[h].xiaohao + '"' +
                                "," + '"xiaohaoshuliang"' + ":" + '"' + this.chengyuanhudongbiao[h].xiaohaoshuliang + '"' +
                                "," + '"jinxiuid"' + ":" + '"' + idhao + '"' +
                                "," + '"beishu"' + ":" + '"' + beishu + '"' +
                                "," + '"geishuijia"' + ":" + '"' + fasongren + '"' +
                                "," + '"jinxiushijian"' + ":" + '"' + shijian + '"' + "}");
                            Gameguanli.Kongzhitai().cuowutishixinxi("开始进修，请耐心等待...");
                        }
                        else {
                            Gameguanli.Kongzhitai().cuowutishixinxi("进修失败，需要消耗" + this.chengyuanhudongbiao[h].xiaohaoshuliang + "二儿子工作能力");
                        }
                        break;
                    case "12":
                        if (parseInt(Gerenshuxing.xifuxinxi[1]) >= parseInt(this.chengyuanhudongbiao[h].xiaohaoshuliang)) {
                            switch (fasongren) {
                                case "1":
                                    Gerenshuxing.daerzixinxi[2] = "1";
                                    Gerenshuxing.daerzixinxi[3] = "100000000";
                                    this.daerzigz();
                                    break;
                                case "2":
                                    Gerenshuxing.ererzixinxi[2] = "21";
                                    Gerenshuxing.ererzixinxi[3] = "100000000";
                                    this.ererzigz();
                                    break;
                                case "3":
                                    Gerenshuxing.xifuxinxi[2] = "11";
                                    Gerenshuxing.xifuxinxi[3] = "100000000";
                                    this.xifugz();
                                    break;
                                case "4":
                                    Gerenshuxing.sunnvxinxi[2] = "31";
                                    Gerenshuxing.sunnvxinxi[3] = "100000000";
                                    this.sunnvgz();
                                    break;
                            }
                            Weblianjie.fasongshuju("code:066", "{" + '"uid"' + ":" + '"' + Gerenshuxing.uid + '"' +
                                "," + '"xiaohaoleixing"' + ":" + '"' + this.chengyuanhudongbiao[h].xiaohao + '"' +
                                "," + '"xiaohaoshuliang"' + ":" + '"' + this.chengyuanhudongbiao[h].xiaohaoshuliang + '"' +
                                "," + '"jinxiuid"' + ":" + '"' + idhao + '"' +
                                "," + '"beishu"' + ":" + '"' + beishu + '"' +
                                "," + '"geishuijia"' + ":" + '"' + fasongren + '"' +
                                "," + '"jinxiushijian"' + ":" + '"' + shijian + '"' + "}");
                            Gameguanli.Kongzhitai().cuowutishixinxi("开始进修，请耐心等待...");
                        }
                        else {
                            Gameguanli.Kongzhitai().cuowutishixinxi("进修失败，需要消耗" + this.chengyuanhudongbiao[h].xiaohaoshuliang + "大儿媳家务能力");
                        }
                        break;
                    case "13":
                        if (parseInt(Gerenshuxing.sunnvxinxi[1]) >= parseInt(this.chengyuanhudongbiao[h].xiaohaoshuliang)) {
                            switch (fasongren) {
                                case "1":
                                    Gerenshuxing.daerzixinxi[2] = "1";
                                    Gerenshuxing.daerzixinxi[3] = "100000000";
                                    this.daerzigz();
                                    break;
                                case "2":
                                    Gerenshuxing.ererzixinxi[2] = "21";
                                    Gerenshuxing.ererzixinxi[3] = "100000000";
                                    this.ererzigz();
                                    break;
                                case "3":
                                    Gerenshuxing.xifuxinxi[2] = "11";
                                    Gerenshuxing.xifuxinxi[3] = "100000000";
                                    this.xifugz();
                                    break;
                                case "4":
                                    Gerenshuxing.sunnvxinxi[2] = "31";
                                    Gerenshuxing.sunnvxinxi[3] = "100000000";
                                    this.sunnvgz();
                                    break;
                            }
                            Weblianjie.fasongshuju("code:066", "{" + '"uid"' + ":" + '"' + Gerenshuxing.uid + '"' +
                                "," + '"xiaohaoleixing"' + ":" + '"' + this.chengyuanhudongbiao[h].xiaohao + '"' +
                                "," + '"xiaohaoshuliang"' + ":" + '"' + this.chengyuanhudongbiao[h].xiaohaoshuliang + '"' +
                                "," + '"jinxiuid"' + ":" + '"' + idhao + '"' +
                                "," + '"beishu"' + ":" + '"' + beishu + '"' +
                                "," + '"geishuijia"' + ":" + '"' + fasongren + '"' +
                                "," + '"jinxiushijian"' + ":" + '"' + shijian + '"' + "}");
                            Gameguanli.Kongzhitai().cuowutishixinxi("开始进修，请耐心等待...");
                        }
                        else {
                            Gameguanli.Kongzhitai().cuowutishixinxi("进修失败，需要消耗" + this.chengyuanhudongbiao[h].xiaohaoshuliang + "孙女乖巧值");
                        }
                        break;
                }
            }
        }
    };
    Jiatingui.prototype.querenjinxiujiangliqueren = function (leixing, shuliang) {
        switch (leixing) {
            case "0":
                this.jinxiuquerenui.jiangliicon1.source = "";
                this.jinxiuquerenui.jiangli1.text = "";
                break;
            case "1":
                this.jinxiuquerenui.jiangliicon1.source = "img_qian_png";
                this.jinxiuquerenui.jiangli1.text = "+ " + shuliang;
                break;
            case "2":
                this.jinxiuquerenui.jiangliicon1.source = "img_jiating_png";
                this.jinxiuquerenui.jiangli1.text = "+ " + shuliang;
                break;
            case "3":
                this.jinxiuquerenui.jiangliicon1.source = "img_jiankang_png";
                this.jinxiuquerenui.jiangli1.text = "+ " + shuliang;
                break;
            case "4":
                this.jinxiuquerenui.jiangliicon1.source = "img_xinqing_png";
                this.jinxiuquerenui.jiangli1.text = "+ " + shuliang;
                break;
            case "5":
                this.jinxiuquerenui.jiangliicon1.source = "img_xingfu_png";
                this.jinxiuquerenui.jiangli1.text = "+ " + shuliang;
                break;
            case "6":
                this.jinxiuquerenui.jiangliicon1.source = "img_daerzibiaoshi_png";
                this.jinxiuquerenui.jiangli1.text = "+ " + shuliang;
                break;
            case "7":
                this.jinxiuquerenui.jiangliicon1.source = "img_xiaoerzibiaoshi_png";
                this.jinxiuquerenui.jiangli1.text = "+ " + shuliang;
                break;
            case "8":
                this.jinxiuquerenui.jiangliicon1.source = "img_xifubiaoshi_png";
                this.jinxiuquerenui.jiangli1.text = "+ " + shuliang;
                break;
            case "9":
                this.jinxiuquerenui.jiangliicon1.source = "img_sunnvbiaoshi_png";
                this.jinxiuquerenui.jiangli1.text = "+ " + shuliang;
                break;
            case "10":
                this.jinxiuquerenui.jiangliicon1.source = "img_daerzibiaoshi_png";
                this.jinxiuquerenui.jiangli1.text = "+ " + shuliang;
                break;
            case "11":
                this.jinxiuquerenui.jiangliicon1.source = "img_xiaoerzibiaoshi_png";
                this.jinxiuquerenui.jiangli1.text = "+ " + shuliang;
                break;
            case "12":
                this.jinxiuquerenui.jiangliicon1.source = "img_xifubiaoshi_png";
                this.jinxiuquerenui.jiangli1.text = "+ " + shuliang;
                break;
            case "13":
                this.jinxiuquerenui.jiangliicon1.source = "img_sunnvbiaoshi_png";
                this.jinxiuquerenui.jiangli1.text = "+ " + shuliang;
                break;
            default:
                if (parseInt(leixing) >= 1000 && parseInt(leixing) < 10000) {
                    this.jianglicaipuxianshi(leixing, shuliang);
                }
                else if (parseInt(leixing) >= 10000) {
                    this.jianglidaojuxianshi(leixing, shuliang);
                }
                ;
                break;
        }
    };
    Jiatingui.prototype.querenjinxiuxiaohaoqueren = function (leixing, shuliang) {
        switch (leixing) {
            case "0":
                this.jinxiuquerenui.jiangliicon2.source = "";
                this.jinxiuquerenui.jiangli2.text = "";
                break;
            case "1":
                this.jinxiuquerenui.jiangliicon2.source = "img_qian_png";
                this.jinxiuquerenui.jiangli2.text = "- " + shuliang;
                break;
            case "2":
                this.jinxiuquerenui.jiangliicon2.source = "img_jiating_png";
                this.jinxiuquerenui.jiangli2.text = "- " + shuliang;
                break;
            case "3":
                this.jinxiuquerenui.jiangliicon2.source = "img_jiankang_png";
                this.jinxiuquerenui.jiangli2.text = "- " + shuliang;
                break;
            case "4":
                this.jinxiuquerenui.jiangliicon2.source = "img_xinqing_png";
                this.jinxiuquerenui.jiangli2.text = "- " + shuliang;
                break;
            case "5":
                this.jinxiuquerenui.jiangliicon2.source = "img_xingfu_png";
                this.jinxiuquerenui.jiangli2.text = "- " + shuliang;
                break;
            case "6":
                this.jinxiuquerenui.jiangliicon2.source = "img_daerzibiaoshi_png";
                this.jinxiuquerenui.jiangli2.text = "- " + shuliang;
                break;
            case "7":
                this.jinxiuquerenui.jiangliicon2.source = "img_xiaoerzibiaoshi_png";
                this.jinxiuquerenui.jiangli2.text = "- " + shuliang;
                break;
            case "8":
                this.jinxiuquerenui.jiangliicon2.source = "img_xifubiaoshi_png";
                this.jinxiuquerenui.jiangli2.text = "- " + shuliang;
                break;
            case "9":
                this.jinxiuquerenui.jiangliicon2.source = "img_sunnvbiaoshi_png";
                this.jinxiuquerenui.jiangli2.text = "- " + shuliang;
                break;
            case "10":
                this.jinxiuquerenui.jiangliicon2.source = "img_daerzibiaoshi_png";
                this.jinxiuquerenui.jiangli2.text = "- " + shuliang;
                break;
            case "11":
                this.jinxiuquerenui.jiangliicon2.source = "img_xiaoerzibiaoshi_png";
                this.jinxiuquerenui.jiangli2.text = "- " + shuliang;
                break;
            case "12":
                this.jinxiuquerenui.jiangliicon2.source = "img_xifubiaoshi_png";
                this.jinxiuquerenui.jiangli2.text = "- " + shuliang;
                break;
            case "13":
                this.jinxiuquerenui.jiangliicon2.source = "img_sunnvbiaoshi_png";
                this.jinxiuquerenui.jiangli2.text = "- " + shuliang;
                break;
            default:
                if (parseInt(leixing) >= 1000 && parseInt(leixing) < 10000) {
                    this.kouchucaipuxianshi(leixing, shuliang);
                }
                else if (parseInt(leixing) >= 10000) {
                    this.kouchudaojuxianshi(leixing, shuliang);
                }
                ;
                break;
        }
    };
    Jiatingui.prototype.kouchucaipuxianshi = function (leixing, shuliang) {
        var caipubiao = RES.getRes("shipubiao_json");
        for (var i = 0; i < caipubiao.length; i++) {
            if (caipubiao[i].id == leixing) {
                this.jinxiuquerenui.jiangliicon2.source = caipubiao[i].id + "_png";
                this.jinxiuquerenui.jiangli2.text = "- " + shuliang;
                break;
            }
        }
    };
    Jiatingui.prototype.jianglicaipuxianshi = function (leixing, shuliang) {
        var caipubiao = RES.getRes("shipubiao_json");
        for (var i = 0; i < caipubiao.length; i++) {
            if (caipubiao[i].id == leixing) {
                this.jinxiuquerenui.jiangliicon1.source = caipubiao[i].id + "_png";
                this.jinxiuquerenui.jiangli1.text = "+ " + shuliang;
                break;
            }
        }
    };
    Jiatingui.prototype.jianglidaojuxianshi = function (leixing, shuliang) {
        for (var i = 0; i < this.daojubiao.length; i++) {
            if (this.daojubiao[i].id == leixing) {
                this.jinxiuquerenui.jiangliicon1.source = this.daojubiao[i].xianshiicon;
                this.jinxiuquerenui.jiangli1.text = "+ " + shuliang;
                break;
            }
        }
    };
    Jiatingui.prototype.kouchudaojuxianshi = function (leixing, shuliang) {
        for (var i = 0; i < this.daojubiao.length; i++) {
            if (this.daojubiao[i].id == leixing) {
                this.jinxiuquerenui.jiangliicon2.source = this.daojubiao[i].xianshiicon;
                this.jinxiuquerenui.jiangli2.text = "- " + shuliang;
                break;
            }
        }
    };
    Jiatingui.prototype.tongguojiangli = function (daojuid) {
        var jianglileixing = 0;
        var jianglishuliang = 0;
        var jianglibeishu = 1;
        for (var h = 0; h < this.daojubiao.length; h++) {
            if (this.daojubiao[h].id == daojuid) {
                jianglileixing = this.daojubiao[h].jiangli;
                jianglishuliang = this.daojubiao[h].jianglishuliang;
                break;
            }
        }
        this.fasongjianglijiekou(daojuid, 1, jianglileixing, jianglishuliang, jianglibeishu);
    };
    Jiatingui.prototype.fasongjianglijiekou = function (daojuid, daojushuliang, jianglileixing, jianglishuliang, jianglibeishu) {
        Weblianjie.fasongshuju("code:085", "{" + '"uid"' + ":" + '"' + Gerenshuxing.uid + '"' + ","
            + '"kouchuleixing"' + ":" + '"' + daojuid + '"' + ","
            + '"kouchushuliang"' + ":" + '"' + daojushuliang + '"' + ","
            + '"leixing"' + ":" + '"' + jianglileixing + '"' + ","
            + '"shuliang"' + ":" + '"' + jianglishuliang + '"' + ","
            + '"beishu"' + ":" + '"' + jianglibeishu + '"' + "}");
    };
    return Jiatingui;
}(eui.Component));
__reflect(Jiatingui.prototype, "Jiatingui", ["eui.UIComponent", "egret.DisplayObject"]);
//# sourceMappingURL=Jiatingui.js.map