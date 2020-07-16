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
var Npcduihuaui = (function (_super) {
    __extends(Npcduihuaui, _super);
    function Npcduihuaui() {
        return _super.call(this) || this;
    }
    Npcduihuaui.prototype.partAdded = function (partName, instance) {
        _super.prototype.partAdded.call(this, partName, instance);
    };
    Npcduihuaui.prototype.childrenCreated = function () {
        _super.prototype.childrenCreated.call(this);
    };
    Npcduihuaui.prototype.chushihua = function (npcidid) {
        this.npcbiao = RES.getRes("npcbiao_json");
        this.renwubiao = RES.getRes("renwubiao_json");
        for (var i = 0; i < this.npcbiao.length; i++) {
            if (this.npcbiao[i].id == npcidid) {
                this.mingzi = this.npcbiao[i].mingzi;
                this.waixing = this.npcbiao[i].waixing;
                this.didian = this.npcbiao[i].didian;
                this.tianqi = this.npcbiao[i].tianqi;
                this.shijian = this.npcbiao[i].shijian;
                this.jilv = this.npcbiao[i].jilv;
                this.juqingjilv = this.npcbiao[i].juqingjilv;
                this.juqingid = this.npcbiao[i].juqingid;
                this.putongid = this.npcbiao[i].putongid;
                this.npcid = this.npcbiao[i].id;
                break;
            }
        }
        this.npctouxiang.source = this.waixing;
        this.npcname.text = this.mingzi;
        this.shuohuaren.text = this.mingzi;
        this.fenpeirenwu();
    };
    Npcduihuaui.prototype.fenpeirenwu = function () {
        var suijijuqing = Math.floor(Math.random() * 100);
        if (suijijuqing < parseInt(this.juqingjilv)) {
            this.dangqianrenwu = this.juqingid;
        }
        else {
            this.dangqianrenwu = this.putongid;
        }
        this.dangqianrenwu = this.dangqianrenwu.split(",");
        var suijiputong = Math.floor(Math.random() * this.dangqianrenwu.length);
        this.dangqianrenwu = this.dangqianrenwu[suijiputong];
        this.renwuxiafa(this.dangqianrenwu);
    };
    Npcduihuaui.prototype.renwuxiafa = function (renwuid) {
        this.huida1.enabled = false;
        this.huida1.alpha = 0;
        this.huida1.label = "";
        this.huida2.enabled = false;
        this.huida2.alpha = 0;
        this.huida2.label = "";
        this.guanbiduihua.enabled = false;
        this.guanbiduihua.alpha = 0;
        this.guanbiduihua.label = "";
        for (var r = 0; r < this.renwubiao.length; r++) {
            if (this.renwubiao[r].id == renwuid) {
                this.renwuxuhao = this.renwubiao[r].id;
                this.xiayirenwu = this.renwubiao[r].nextid;
                this.renwutiaozhuan1 = this.renwubiao[r].renwu1tiaozhuan;
                this.renwutiaozhuan2 = this.renwubiao[r].renwu2tiaozhuan;
                this.renwuneirong = this.renwubiao[r].renwuneirong;
                this.renwuxuanze1 = this.renwubiao[r].renwuxuanxiang1;
                this.renwuxuanze2 = this.renwubiao[r].renwuxuanxiang2;
                this.renwujiangli1 = this.renwubiao[r].renwujiangli1;
                this.renwujiangli2 = this.renwubiao[r].renwujiangli2;
                this.zhengquexuanxiang = this.renwubiao[r].zhengquerenwu;
                break;
            }
        }
        this.shuohuaneirong.text = this.renwuneirong;
        if (this.renwuxuanze1 != "-1") {
            this.huida2.enabled = true;
            this.huida2.alpha = 1;
            this.huida2.label = this.renwuxuanze1;
            this.huida2.addEventListener(egret.TouchEvent.TOUCH_TAP, this.dianjihuida1, this);
            if (this.renwuxuanze2 != "-1") {
                this.huida1.enabled = true;
                this.huida1.alpha = 1;
                this.huida1.label = this.renwuxuanze2;
                this.huida1.addEventListener(egret.TouchEvent.TOUCH_TAP, this.dianjihuida2, this);
                this.guanbiduihua.enabled = true;
                this.guanbiduihua.alpha = 1;
                this.guanbiduihua.label = "关闭";
                this.guanbiduihua.addEventListener(egret.TouchEvent.TOUCH_TAP, this.guanbiduihuakuang, this);
            }
            else {
                this.huida1.enabled = true;
                this.huida1.alpha = 1;
                this.huida1.label = "关闭";
                this.huida1.addEventListener(egret.TouchEvent.TOUCH_TAP, this.guanbiduihuakuang, this);
                this.guanbiduihua.enabled = false;
                this.guanbiduihua.alpha = 0;
                this.guanbiduihua.label = "";
            }
        }
        else {
            if (this.renwuxuanze2 != "-1") {
                this.huida2.enabled = true;
                this.huida2.alpha = 1;
                this.huida2.label = this.renwuxuanze2;
                this.huida2.addEventListener(egret.TouchEvent.TOUCH_TAP, this.dianjihuida2, this);
                this.huida1.enabled = true;
                this.huida1.alpha = 1;
                this.huida1.label = "关闭";
                this.huida1.addEventListener(egret.TouchEvent.TOUCH_TAP, this.guanbiduihuakuang, this);
                this.guanbiduihua.enabled = false;
                this.guanbiduihua.alpha = 0;
                this.guanbiduihua.label = "";
            }
            else {
                this.huida2.enabled = true;
                this.huida2.alpha = 1;
                this.huida2.label = "关闭";
                this.huida2.addEventListener(egret.TouchEvent.TOUCH_TAP, this.guanbiduihuakuang, this);
            }
        }
    };
    Npcduihuaui.prototype.dianjihuida1 = function () {
        Gamesound.Soundkongzhi().anniuyinxiao();
        if (this.renwujiangli1 != "-1") {
            this.renwujiangli1 = this.renwujiangli1.split(",");
            var beishu = 1;
            Weblianjie.fasongshuju("code:993", "{" + '"leixing"' + ":" + '"' + this.renwujiangli1[0] + '"' + ","
                + '"shuliang"' + ":" + '"' + this.renwujiangli1[1] + '"' + ","
                + '"beishu"' + ":" + '"' + beishu + '"' + ","
                + '"uid"' + ":" + '"' + Gerenshuxing.uid + '"' + "}");
        }
        this.renwuxiafa(this.renwutiaozhuan1);
    };
    Npcduihuaui.prototype.dianjihuida2 = function () {
        Gamesound.Soundkongzhi().anniuyinxiao();
        if (this.renwujiangli2 != "-1") {
            this.renwujiangli2 = this.renwujiangli2.split(",");
            var beishu = 1;
            Weblianjie.fasongshuju("code:993", "{" + '"leixing"' + ":" + '"' + this.renwujiangli2[0] + '"' + ","
                + '"shuliang"' + ":" + '"' + this.renwujiangli2[1] + '"' + ","
                + '"beishu"' + ":" + '"' + beishu + '"' + ","
                + '"uid"' + ":" + '"' + Gerenshuxing.uid + '"' + "}");
        }
        this.renwuxiafa(this.renwutiaozhuan2);
    };
    Npcduihuaui.prototype.guanbiduihuakuang = function () {
        Gamesound.Soundkongzhi().anniuyinxiao();
        Gameguanli.Kongzhitai().dingbuui.removeChild(this);
    };
    return Npcduihuaui;
}(eui.Component));
__reflect(Npcduihuaui.prototype, "Npcduihuaui", ["eui.UIComponent", "egret.DisplayObject"]);
