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
var Changjingrukouui = (function (_super) {
    __extends(Changjingrukouui, _super);
    function Changjingrukouui() {
        return _super.call(this) || this;
    }
    Changjingrukouui.prototype.partAdded = function (partName, instance) {
        _super.prototype.partAdded.call(this, partName, instance);
    };
    Changjingrukouui.prototype.childrenCreated = function () {
        _super.prototype.childrenCreated.call(this);
        this.chushihua();
    };
    Changjingrukouui.prototype.chushihua = function () {
        this.but_quxiao.addEventListener(egret.TouchEvent.TOUCH_TAP, this.guanbijiemian, this);
        this.but_jinru.addEventListener(egret.TouchEvent.TOUCH_TAP, this.jinrujiemian, this);
        if (this.leixing == "caishichang") {
            this.img_biaotitu.source = "img_biaoticaishichang_png";
            this.rukoushuoming.text = "这里是菜市场，当您的饭店缺少食材时，可以在本菜市场进行食材购买。（每次均需消耗一定数量的钱币。）";
            var changshubiao = Gerenshuxing.changshubiao;
            var xiaohaoqianbi = 0;
            for (var i = 0; i < changshubiao.length; i++) {
                if (changshubiao[i].id == 0) {
                    xiaohaoqianbi = changshubiao[i].numshu;
                }
            }
            this.xiaohaoqian.text = "-" + xiaohaoqianbi;
        }
        else if (this.leixing == "shangjie") {
            this.img_biaotitu.source = "img_biaotijiedao_png";
            this.rukoushuoming.text = "经常出门转转，多上街走走肯定是极好的，如果运气好，或许还能得到意想不到的收获。";
            this.img_qian.source = "img_jiating_png";
            this.xiaohaoqian.text = "- 30";
        }
    };
    Changjingrukouui.prototype.guanbijiemian = function () {
        Gamesound.Soundkongzhi().anniuyinxiao();
        if (this.leixing == "caishichang") {
            Gameguanli.Kongzhitai().changjingrukou("caishichang", "guan");
        }
        else if (this.leixing == "shangjie") {
            Gameguanli.Kongzhitai().changjingrukou("shangjie", "guan");
        }
    };
    Changjingrukouui.prototype.jinrujiemian = function () {
        Gamesound.Soundkongzhi().anniuyinxiao();
        if (this.leixing == "caishichang") {
            if (Gerenshuxing.jinbizhi >= 500) {
                Weblianjie.fasongshuju("code:033", "{" + '"uid"' + ":" + '"' + Gerenshuxing.uid + '"' + "}");
            }
            else {
                Gameguanli.Kongzhitai().cuowutishixinxi("您的钱币不足，无法进行原料的采购！");
            }
        }
        else if (this.leixing == "shangjie") {
            if (Gerenshuxing.jiatingzhi >= 30) {
                Weblianjie.fasongshuju("code:109", "{" + '"kouchuxingdongli"' + ":" + '"30"' + ","
                    + '"uid"' + ":" + '"' + Gerenshuxing.uid + '"' + "}");
            }
            else {
                Gameguanli.Kongzhitai().cuowutishixinxi("您当前的行动力不足，无法上街！");
            }
        }
    };
    return Changjingrukouui;
}(eui.Component));
__reflect(Changjingrukouui.prototype, "Changjingrukouui", ["eui.UIComponent", "egret.DisplayObject"]);
