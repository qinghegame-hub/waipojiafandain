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
var Meirirenwujiemian = (function (_super) {
    __extends(Meirirenwujiemian, _super);
    function Meirirenwujiemian() {
        var _this = _super.call(this) || this;
        _this.jiangliidzu = [];
        _this.jianglishuliangzu = [];
        return _this;
    }
    Meirirenwujiemian.prototype.partAdded = function (partName, instance) {
        _super.prototype.partAdded.call(this, partName, instance);
    };
    Meirirenwujiemian.prototype.childrenCreated = function () {
        _super.prototype.childrenCreated.call(this);
        //		this.guanbi();
    };
    Meirirenwujiemian.prototype.guanbi = function () {
        var _this = this;
        Gamesound.Soundkongzhi().anniuyinxiao();
        this.guanbijiemian.enabled = true;
        this.guanbijiemian.addEventListener(egret.TouchEvent.TOUCH_TAP, function () {
            if (_this.parent) {
                _this.parent.removeChild(_this);
            }
        }, this);
    };
    Meirirenwujiemian.prototype.chushihua = function () {
        this.renwubiao = Gerenshuxing.meirirenwubiao;
        for (var i = 0; i < this.renwubiao.length; i++) {
            if (this.renwubiao[i].id == Gerenshuxing.meirirenwuone[0]) {
                this.dantiaotushi.source = this.renwubiao[i].renwuicon;
                this.renwumingcheng.text = this.renwubiao[i].renwuming;
                this.renwushuoming.text = this.renwubiao[i].renwushuoming;
                if (parseInt(Gerenshuxing.meirirenwuone[2]) >= parseInt(Gerenshuxing.meirirenwuone[1])) {
                    this.renwujindu.text = "进度：已完成";
                    if (Gerenshuxing.meirirenwuone[3] == "0") {
                        this.lingquanniu.enabled = true;
                        this.lingquanniu.addEventListener(egret.TouchEvent.TOUCH_TAP, this.lingjiangrenwu1, this);
                    }
                    else {
                        this.lingquanniu.enabled = false;
                    }
                }
                else {
                    this.renwujindu.text = "进度：(" + Gerenshuxing.meirirenwuone[2] + "/" + Gerenshuxing.meirirenwuone[1] + ")";
                    this.lingquanniu.enabled = false;
                }
                if (Gerenshuxing.meirirenwuone[3] == "0") {
                    this.dantiaobeijingdi.source = "img_dibudiban_png";
                }
                else {
                    this.dantiaobeijingdi.source = "img_dibudiban2_png";
                }
            }
            else if (this.renwubiao[i].id == Gerenshuxing.meirirenwutwo[0]) {
                this.dantiaotushi0.source = this.renwubiao[i].renwuicon;
                this.renwumingcheng0.text = this.renwubiao[i].renwuming;
                this.renwushuoming0.text = this.renwubiao[i].renwushuoming;
                if (parseInt(Gerenshuxing.meirirenwutwo[2]) >= parseInt(Gerenshuxing.meirirenwutwo[1])) {
                    this.renwujindu0.text = "进度：已完成";
                    if (Gerenshuxing.meirirenwutwo[3] == "0") {
                        this.lingquanniu0.enabled = true;
                        this.lingquanniu0.addEventListener(egret.TouchEvent.TOUCH_TAP, this.lingjiangrenwu2, this);
                    }
                    else {
                        this.lingquanniu0.enabled = false;
                    }
                }
                else {
                    this.renwujindu0.text = "进度：(" + Gerenshuxing.meirirenwutwo[2] + "/" + Gerenshuxing.meirirenwutwo[1] + ")";
                    this.lingquanniu0.enabled = false;
                }
                if (Gerenshuxing.meirirenwutwo[3] == "0") {
                    this.dantiaobeijingdi0.source = "img_dibudiban_png";
                }
                else {
                    this.dantiaobeijingdi0.source = "img_dibudiban2_png";
                }
            }
            else if (this.renwubiao[i].id == Gerenshuxing.meirirenwutre[0]) {
                this.dantiaotushi1.source = this.renwubiao[i].renwuicon;
                this.renwumingcheng1.text = this.renwubiao[i].renwuming;
                this.renwushuoming1.text = this.renwubiao[i].renwushuoming;
                if (parseInt(Gerenshuxing.meirirenwutre[2]) >= parseInt(Gerenshuxing.meirirenwutre[1])) {
                    this.renwujindu1.text = "进度：已完成";
                    if (Gerenshuxing.meirirenwutre[3] == "0") {
                        this.lingquanniu1.enabled = true;
                        this.lingquanniu1.addEventListener(egret.TouchEvent.TOUCH_TAP, this.lingjiangrenwu3, this);
                    }
                    else {
                        this.lingquanniu1.enabled = false;
                    }
                }
                else {
                    this.renwujindu1.text = "进度：(" + Gerenshuxing.meirirenwutre[2] + "/" + Gerenshuxing.meirirenwutre[1] + ")";
                    this.lingquanniu1.enabled = false;
                }
                if (Gerenshuxing.meirirenwutre[3] == "0") {
                    this.dantiaobeijingdi1.source = "img_dibudiban_png";
                }
                else {
                    this.dantiaobeijingdi1.source = "img_dibudiban2_png";
                }
            }
            else if (this.renwubiao[i].id == Gerenshuxing.meirirenwufor[0]) {
                this.dantiaotushi2.source = this.renwubiao[i].renwuicon;
                this.renwumingcheng2.text = this.renwubiao[i].renwuming;
                this.renwushuoming2.text = this.renwubiao[i].renwushuoming;
                if (parseInt(Gerenshuxing.meirirenwufor[2]) >= parseInt(Gerenshuxing.meirirenwufor[1])) {
                    this.renwujindu2.text = "进度：已完成";
                    if (Gerenshuxing.meirirenwufor[3] == "0") {
                        this.lingquanniu2.enabled = true;
                        this.lingquanniu2.addEventListener(egret.TouchEvent.TOUCH_TAP, this.lingjiangrenwu4, this);
                    }
                    else {
                        this.lingquanniu2.enabled = false;
                    }
                }
                else {
                    this.renwujindu2.text = "进度：(" + Gerenshuxing.meirirenwufor[2] + "/" + Gerenshuxing.meirirenwufor[1] + ")";
                    this.lingquanniu2.enabled = false;
                }
                if (Gerenshuxing.meirirenwufor[3] == "0") {
                    this.dantiaobeijingdi2.source = "img_dibudiban_png";
                }
                else {
                    this.dantiaobeijingdi2.source = "img_dibudiban2_png";
                }
            }
        }
    };
    Meirirenwujiemian.prototype.lingjiangrenwu1 = function () {
        Gamesound.Soundkongzhi().anniuyinxiao();
        Weblianjie.fasongshuju("code:163", "{" + '"uid"' + ":" + '"' + Gerenshuxing.uid + '"' + ","
            + '"gaibianleixing"' + ":" + '"1"' + "}");
        this.shenglijianglidaoju();
    };
    Meirirenwujiemian.prototype.lingjiangrenwu2 = function () {
        Gamesound.Soundkongzhi().anniuyinxiao();
        Weblianjie.fasongshuju("code:163", "{" + '"uid"' + ":" + '"' + Gerenshuxing.uid + '"' + ","
            + '"gaibianleixing"' + ":" + '"2"' + "}");
        this.shenglijianglidaoju();
    };
    Meirirenwujiemian.prototype.lingjiangrenwu3 = function () {
        Gamesound.Soundkongzhi().anniuyinxiao();
        Weblianjie.fasongshuju("code:163", "{" + '"uid"' + ":" + '"' + Gerenshuxing.uid + '"' + ","
            + '"gaibianleixing"' + ":" + '"3"' + "}");
        this.shenglijianglidaoju();
    };
    Meirirenwujiemian.prototype.lingjiangrenwu4 = function () {
        Gamesound.Soundkongzhi().anniuyinxiao();
        Weblianjie.fasongshuju("code:163", "{" + '"uid"' + ":" + '"' + Gerenshuxing.uid + '"' + ","
            + '"gaibianleixing"' + ":" + '"4"' + "}");
        this.shenglijianglidaoju();
    };
    //拆解奖励，判断奖励类型和数量
    Meirirenwujiemian.prototype.shenglijianglidaoju = function () {
        this.shenglijiemian = new Duojianglijiemian();
        Gameguanli.Kongzhitai().dingbuui.addChild(this.shenglijiemian);
        this.shenglijiemian.yitiaojianglizu.alpha = 0;
        this.shenglijiemian.yitiaojianglizu0.alpha = 0;
        this.shenglijiemian.yitiaojianglizu1.alpha = 0;
        this.shenglijiemian.yitiaojianglizu2.alpha = 0;
        this.shenglijiemian.yitiaojianglizu3.alpha = 0;
        this.shenglijiemian.yitiaojianglizu4.alpha = 0;
        this.shenglijiemian.jiangliicon0.source = "";
        this.shenglijiemian.jianglishuliang0.text = "";
        this.shenglijiemian.jiangliicon1.source = "";
        this.shenglijiemian.jianglishuliang1.text = "";
        this.shenglijiemian.jiangliicon2.source = "";
        this.shenglijiemian.jianglishuliang2.text = "";
        this.shenglijiemian.jiangliicon3.source = "";
        this.shenglijiemian.jianglishuliang3.text = "";
        this.shenglijiemian.jiangliicon4.source = "";
        this.shenglijiemian.jianglishuliang4.text = "";
        this.shenglijiemian.jiangliicon5.source = "";
        this.shenglijiemian.jianglishuliang5.text = "";
        this.shenglijiemian.qudinganniu001.enabled = false;
        this.shenglijiemian.qudinganniu001.alpha = 0;
        this.jiangliidzu = ["0", "0", "0", "0", "0", "0"];
        this.jianglishuliangzu = ["0", "0", "0", "0", "0", "0"];
        for (var k = 0; k < 6; k++) {
            var suijishengchengshu = Math.floor(Math.random() * 100000) + 1;
            var jiangliid = "1";
            var jianglishuliang = 1;
            for (var i = 0; i < Gerenshuxing.putongjiangchi.length; i++) {
                if (suijishengchengshu >= parseInt(Gerenshuxing.putongjiangchi[Gerenshuxing.putongjiangchi.length - 1].jilv)) {
                    jiangliid = Gerenshuxing.putongjiangchi[Gerenshuxing.putongjiangchi.length - 1].id;
                    break;
                }
                else {
                    if (suijishengchengshu >= parseInt(Gerenshuxing.putongjiangchi[i].jilv) && suijishengchengshu < parseInt(Gerenshuxing.putongjiangchi[i + 1].jilv)) {
                        jiangliid = Gerenshuxing.putongjiangchi[i].id;
                        break;
                    }
                }
            }
            if (jiangliid == "1") {
                jianglishuliang = 3000;
            }
            else if (jiangliid == "5") {
                jianglishuliang = 100;
            }
            else {
                jianglishuliang = 1;
            }
            for (var r = 0; r < this.jiangliidzu.length; r++) {
                if (this.jiangliidzu[r] == "0") {
                    this.jiangliidzu[r] = jiangliid;
                    this.jianglishuliangzu[r] = "" + jianglishuliang;
                    break;
                }
                else if (this.jiangliidzu[r] == jiangliid) {
                    this.jianglishuliangzu[r] = "" + (parseInt(this.jianglishuliangzu[r]) + jianglishuliang);
                    break;
                }
            }
        }
        this.jianglixianshiluoji();
    };
    //胜利奖励一组道具逻辑
    Meirirenwujiemian.prototype.jianglixianshiluoji = function () {
        var _this = this;
        if (this.jiangliidzu[0] != undefined && this.jiangliidzu[0] != "0") {
            var jiangli1icon = Gameguanli.Kongzhitai().daojuxianshiicon(this.jiangliidzu[0]);
            this.shenglijiemian.jiangliicon0.source = jiangli1icon;
            this.shenglijiemian.jianglishuliang0.text = "+ " + this.jianglishuliangzu[0];
            Weblianjie.fasongshuju("code:085", "{" + '"uid"' + ":" + '"' + Gerenshuxing.uid + '"' + ","
                + '"kouchuleixing"' + ":" + '"0"' + ","
                + '"kouchushuliang"' + ":" + '"0"' + ","
                + '"leixing"' + ":" + '"' + this.jiangliidzu[0] + '"' + ","
                + '"shuliang"' + ":" + '"' + this.jianglishuliangzu[0] + '"' + ","
                + '"beishu"' + ":" + '"1"' + "}");
            egret.Tween.get(this.shenglijiemian.yitiaojianglizu).to({ alpha: 1 }, 500).call(function () {
                if (_this.jiangliidzu[1] != undefined && _this.jiangliidzu[1] != "0") {
                    var jiangli2icon = Gameguanli.Kongzhitai().daojuxianshiicon(_this.jiangliidzu[1]);
                    _this.shenglijiemian.jiangliicon1.source = jiangli2icon;
                    _this.shenglijiemian.jianglishuliang1.text = "+ " + _this.jianglishuliangzu[1];
                    Weblianjie.fasongshuju("code:085", "{" + '"uid"' + ":" + '"' + Gerenshuxing.uid + '"' + ","
                        + '"kouchuleixing"' + ":" + '"0"' + ","
                        + '"kouchushuliang"' + ":" + '"0"' + ","
                        + '"leixing"' + ":" + '"' + _this.jiangliidzu[1] + '"' + ","
                        + '"shuliang"' + ":" + '"' + _this.jianglishuliangzu[1] + '"' + ","
                        + '"beishu"' + ":" + '"1"' + "}");
                    egret.Tween.get(_this.shenglijiemian.yitiaojianglizu0).to({ alpha: 1 }, 500).call(function () {
                        if (_this.jiangliidzu[2] != undefined && _this.jiangliidzu[2] != "0") {
                            var jiangli3icon = Gameguanli.Kongzhitai().daojuxianshiicon(_this.jiangliidzu[2]);
                            _this.shenglijiemian.jiangliicon2.source = jiangli3icon;
                            _this.shenglijiemian.jianglishuliang2.text = "+ " + _this.jianglishuliangzu[2];
                            Weblianjie.fasongshuju("code:085", "{" + '"uid"' + ":" + '"' + Gerenshuxing.uid + '"' + ","
                                + '"kouchuleixing"' + ":" + '"0"' + ","
                                + '"kouchushuliang"' + ":" + '"0"' + ","
                                + '"leixing"' + ":" + '"' + _this.jiangliidzu[2] + '"' + ","
                                + '"shuliang"' + ":" + '"' + _this.jianglishuliangzu[2] + '"' + ","
                                + '"beishu"' + ":" + '"1"' + "}");
                            egret.Tween.get(_this.shenglijiemian.yitiaojianglizu1).to({ alpha: 1 }, 500).call(function () {
                                if (_this.jiangliidzu[3] != undefined && _this.jiangliidzu[3] != "0") {
                                    var jiangli4icon = Gameguanli.Kongzhitai().daojuxianshiicon(_this.jiangliidzu[3]);
                                    _this.shenglijiemian.jiangliicon3.source = jiangli4icon;
                                    _this.shenglijiemian.jianglishuliang3.text = "+ " + _this.jianglishuliangzu[3];
                                    Weblianjie.fasongshuju("code:085", "{" + '"uid"' + ":" + '"' + Gerenshuxing.uid + '"' + ","
                                        + '"kouchuleixing"' + ":" + '"0"' + ","
                                        + '"kouchushuliang"' + ":" + '"0"' + ","
                                        + '"leixing"' + ":" + '"' + _this.jiangliidzu[3] + '"' + ","
                                        + '"shuliang"' + ":" + '"' + _this.jianglishuliangzu[3] + '"' + ","
                                        + '"beishu"' + ":" + '"1"' + "}");
                                    egret.Tween.get(_this.shenglijiemian.yitiaojianglizu2).to({ alpha: 1 }, 500).call(function () {
                                        if (_this.jiangliidzu[4] != undefined && _this.jiangliidzu[4] != "0") {
                                            var jiangli5icon = Gameguanli.Kongzhitai().daojuxianshiicon(_this.jiangliidzu[4]);
                                            _this.shenglijiemian.jiangliicon4.source = jiangli5icon;
                                            _this.shenglijiemian.jianglishuliang4.text = "+ " + _this.jianglishuliangzu[4];
                                            Weblianjie.fasongshuju("code:085", "{" + '"uid"' + ":" + '"' + Gerenshuxing.uid + '"' + ","
                                                + '"kouchuleixing"' + ":" + '"0"' + ","
                                                + '"kouchushuliang"' + ":" + '"0"' + ","
                                                + '"leixing"' + ":" + '"' + _this.jiangliidzu[4] + '"' + ","
                                                + '"shuliang"' + ":" + '"' + _this.jianglishuliangzu[4] + '"' + ","
                                                + '"beishu"' + ":" + '"1"' + "}");
                                            egret.Tween.get(_this.shenglijiemian.yitiaojianglizu3).to({ alpha: 1 }, 500).call(function () {
                                                if (_this.jiangliidzu[5] != undefined && _this.jiangliidzu[5] != "0") {
                                                    var jiangli6icon = Gameguanli.Kongzhitai().daojuxianshiicon(_this.jiangliidzu[5]);
                                                    _this.shenglijiemian.jiangliicon5.source = jiangli6icon;
                                                    _this.shenglijiemian.jianglishuliang5.text = "+ " + _this.jianglishuliangzu[5];
                                                    Weblianjie.fasongshuju("code:085", "{" + '"uid"' + ":" + '"' + Gerenshuxing.uid + '"' + ","
                                                        + '"kouchuleixing"' + ":" + '"0"' + ","
                                                        + '"kouchushuliang"' + ":" + '"0"' + ","
                                                        + '"leixing"' + ":" + '"' + _this.jiangliidzu[5] + '"' + ","
                                                        + '"shuliang"' + ":" + '"' + _this.jianglishuliangzu[5] + '"' + ","
                                                        + '"beishu"' + ":" + '"1"' + "}");
                                                    egret.Tween.get(_this.shenglijiemian.yitiaojianglizu4).to({ alpha: 1 }, 500).call(function () {
                                                        _this.shenglijiemian.qudinganniu001.alpha = 1;
                                                        _this.shenglijiemian.qudinganniu001.enabled = true;
                                                        _this.shenglijiemian.qudinganniu001.addEventListener(egret.TouchEvent.TOUCH_TAP, _this.guanbishengli, _this);
                                                    });
                                                }
                                                else {
                                                    _this.shenglijiemian.qudinganniu001.alpha = 1;
                                                    _this.shenglijiemian.qudinganniu001.enabled = true;
                                                    _this.shenglijiemian.qudinganniu001.addEventListener(egret.TouchEvent.TOUCH_TAP, _this.guanbishengli, _this);
                                                }
                                            });
                                        }
                                        else {
                                            _this.shenglijiemian.qudinganniu001.alpha = 1;
                                            _this.shenglijiemian.qudinganniu001.enabled = true;
                                            _this.shenglijiemian.qudinganniu001.addEventListener(egret.TouchEvent.TOUCH_TAP, _this.guanbishengli, _this);
                                        }
                                    });
                                }
                                else {
                                    _this.shenglijiemian.qudinganniu001.alpha = 1;
                                    _this.shenglijiemian.qudinganniu001.enabled = true;
                                    _this.shenglijiemian.qudinganniu001.addEventListener(egret.TouchEvent.TOUCH_TAP, _this.guanbishengli, _this);
                                }
                            });
                        }
                        else {
                            _this.shenglijiemian.qudinganniu001.alpha = 1;
                            _this.shenglijiemian.qudinganniu001.enabled = true;
                            _this.shenglijiemian.qudinganniu001.addEventListener(egret.TouchEvent.TOUCH_TAP, _this.guanbishengli, _this);
                        }
                    });
                }
                else {
                    _this.shenglijiemian.qudinganniu001.alpha = 1;
                    _this.shenglijiemian.qudinganniu001.enabled = true;
                    _this.shenglijiemian.qudinganniu001.addEventListener(egret.TouchEvent.TOUCH_TAP, _this.guanbishengli, _this);
                }
            });
        }
        else {
            this.shenglijiemian.qudinganniu001.alpha = 1;
            this.shenglijiemian.qudinganniu001.enabled = true;
            this.shenglijiemian.qudinganniu001.addEventListener(egret.TouchEvent.TOUCH_TAP, this.guanbishengli, this);
        }
    };
    Meirirenwujiemian.prototype.guanbishengli = function () {
        Gamesound.Soundkongzhi().anniuyinxiao();
        Gameguanli.Kongzhitai().dingbuui.removeChild(this.shenglijiemian);
        this.chushihua();
    };
    return Meirirenwujiemian;
}(eui.Component));
__reflect(Meirirenwujiemian.prototype, "Meirirenwujiemian", ["eui.UIComponent", "egret.DisplayObject"]);
