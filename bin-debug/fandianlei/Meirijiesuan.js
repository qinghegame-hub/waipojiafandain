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
var Meirijiesuan = (function (_super) {
    __extends(Meirijiesuan, _super);
    function Meirijiesuan() {
        return _super.call(this) || this;
    }
    Meirijiesuan.prototype.partAdded = function (partName, instance) {
        _super.prototype.partAdded.call(this, partName, instance);
    };
    Meirijiesuan.prototype.childrenCreated = function () {
        _super.prototype.childrenCreated.call(this);
        this.chushihua();
    };
    Meirijiesuan.prototype.chushihua = function () {
        this.but_guanbi.addEventListener(egret.TouchEvent.TOUCH_TAP, this.guanbianniu, this);
        this.riqitext.text = "第" + Gerenshuxing.nian + "年" + Gerenshuxing.yuefen + "月" + Gerenshuxing.riqi + "日";
        switch (Gerenshuxing.dangqiantianqi) {
            case 1:
                this.img_tianqiqing.source = "img_tianqiqing_png";
                break;
            case 2:
                this.img_tianqiqing.source = "img_tianqiyu_png";
                break;
            case 3:
                this.img_tianqiqing.source = "img_tianqixue_png";
                break;
        }
        ;
        this.xinqingtext.text = "" + Gerenshuxing.kaixinzhi;
        this.xinqingzt.text = "(开心)";
        this.jiatingtext.text = "" + Gerenshuxing.jiatingzhi;
        this.jiatingzt.text = "(和谐)";
        this.jiankangtext.text = "" + Gerenshuxing.jiankangzhi;
        this.jiankangzt.text = "(健康)";
        this.jinbitext.text = "" + Gerenshuxing.jinbizhi;
        this.jinbizt.text = "(贫穷)";
        this.meiriyaowentext.text = "    听闻公园的相亲角来了一位漂亮美少年，喜欢唱、跳、RAP和篮球。";
        this.yinxiaotext.text = "传单推广：剩余" + Gerenshuxing.shengyuchuandan + "天";
        this.yinxiaotext0.text = "电视推广：剩余" + Gerenshuxing.shengyudianshi + "天";
        this.yinxiaotext1.text = "评论推广：剩余" + Gerenshuxing.shengyupinglun + "天";
        this.yinxiaotext2.text = "代言推广：剩余" + Gerenshuxing.shengyudaiyan + "天";
    };
    Meirijiesuan.prototype.guanbianniu = function () {
        Gameguanli.Kongzhitai().meirijiesuanjiemian("guan");
    };
    return Meirijiesuan;
}(eui.Component));
__reflect(Meirijiesuan.prototype, "Meirijiesuan", ["eui.UIComponent", "egret.DisplayObject"]);
//# sourceMappingURL=Meirijiesuan.js.map