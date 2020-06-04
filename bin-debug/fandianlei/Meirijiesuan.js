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
        if (Gerenshuxing.kaixinzhi > 200 && Gerenshuxing.kaixinzhi <= 600) {
            this.xinqingzt.text = "(焦虑)";
        }
        else if (Gerenshuxing.kaixinzhi > 600 && Gerenshuxing.kaixinzhi <= 1000) {
            this.xinqingzt.text = "(一般)";
        }
        else if (Gerenshuxing.kaixinzhi > 1000 && Gerenshuxing.kaixinzhi <= 1400) {
            this.xinqingzt.text = "(开心)";
        }
        else if (Gerenshuxing.kaixinzhi > 1400) {
            this.xinqingzt.text = "(喜悦)";
        }
        else {
            this.xinqingzt.text = "(失落)";
        }
        this.jiatingtext.text = "" + Gerenshuxing.jiatingzhi;
        if (Gerenshuxing.jiatingzhi > 200 && Gerenshuxing.jiatingzhi <= 600) {
            this.jiatingzt.text = "(良好)";
        }
        else if (Gerenshuxing.jiatingzhi > 600 && Gerenshuxing.jiatingzhi <= 1000) {
            this.jiatingzt.text = "(充沛)";
        }
        else if (Gerenshuxing.jiatingzhi > 1000) {
            this.jiatingzt.text = "(爆满)";
        }
        else {
            this.jiatingzt.text = "(不足)";
        }
        this.jiankangtext.text = "" + Gerenshuxing.jiankangzhi;
        if (Gerenshuxing.jiankangzhi > 200 && Gerenshuxing.jiankangzhi <= 600) {
            this.jiankangzt.text = "(一般)";
        }
        else if (Gerenshuxing.jiankangzhi > 600 && Gerenshuxing.jiankangzhi <= 1000) {
            this.jiankangzt.text = "(健康)";
        }
        else if (Gerenshuxing.jiankangzhi > 1000) {
            this.jiankangzt.text = "(硬朗)";
        }
        else {
            this.jiankangzt.text = "(虚弱)";
        }
        this.jinbitext.text = "" + Gerenshuxing.jinbizhi;
        if (Gerenshuxing.jinbizhi > 20000 && Gerenshuxing.jinbizhi <= 200000) {
            this.jinbizt.text = "(一般)";
        }
        else if (Gerenshuxing.jinbizhi > 200000 && Gerenshuxing.jinbizhi <= 1000000) {
            this.jinbizt.text = "(小康)";
        }
        else if (Gerenshuxing.jinbizhi > 1000000 && Gerenshuxing.jinbizhi <= 5000000) {
            this.jinbizt.text = "(富裕)";
        }
        else if (Gerenshuxing.jinbizhi > 5000000 && Gerenshuxing.jinbizhi <= 20000000) {
            this.jinbizt.text = "(富豪)";
        }
        else if (Gerenshuxing.jinbizhi > 20000000) {
            this.jinbizt.text = "(富翁)";
        }
        else {
            this.jinbizt.text = "(贫穷)";
        }
        this.meiriyaowentext.text = "    听闻公园的相亲角来了一位漂亮美少年，喜欢唱、跳、RAP和篮球。";
        this.yinxiaotext.text = "传单推广：剩余" + Gerenshuxing.shengyuchuandan + "天";
        this.yinxiaotext0.text = "电视推广：剩余" + Gerenshuxing.shengyudianshi + "天";
        this.yinxiaotext1.text = "评论推广：剩余" + Gerenshuxing.shengyupinglun + "天";
        this.yinxiaotext2.text = "代言推广：剩余" + Gerenshuxing.shengyudaiyan + "天";
        this.jiatingchengyuanxianshi();
    };
    Meirijiesuan.prototype.guanbianniu = function () {
        Gameguanli.Kongzhitai().meirijiesuanjiemian("guan");
    };
    Meirijiesuan.prototype.jiatingchengyuanxianshi = function () {
        if (parseInt(Gerenshuxing.daerzixinxi[2]) != 0 && parseInt(Gerenshuxing.daerzixinxi[3]) == 0) {
            this.zhuangtai.text = "已完成";
        }
        else if (parseInt(Gerenshuxing.daerzixinxi[2]) != 0 && parseInt(Gerenshuxing.daerzixinxi[3]) != 0) {
            this.zhuangtai.text = "进修中";
        }
        else {
            this.zhuangtai.text = "空闲中";
        }
        if (parseInt(Gerenshuxing.ererzixinxi[2]) != 0 && parseInt(Gerenshuxing.ererzixinxi[3]) == 0) {
            this.zhuangtai0.text = "已完成";
        }
        else if (parseInt(Gerenshuxing.ererzixinxi[2]) != 0 && parseInt(Gerenshuxing.ererzixinxi[3]) != 0) {
            this.zhuangtai0.text = "工作中";
        }
        else {
            this.zhuangtai0.text = "空闲中";
        }
        if (parseInt(Gerenshuxing.xifuxinxi[2]) != 0 && parseInt(Gerenshuxing.xifuxinxi[3]) == 0) {
            this.zhuangtai0.text = "已完成";
        }
        else if (parseInt(Gerenshuxing.xifuxinxi[2]) != 0 && parseInt(Gerenshuxing.xifuxinxi[3]) != 0) {
            this.zhuangtai0.text = "家务中";
        }
        else {
            this.zhuangtai0.text = "空闲中";
        }
        if (parseInt(Gerenshuxing.sunnvxinxi[2]) != 0 && parseInt(Gerenshuxing.sunnvxinxi[3]) == 0) {
            this.zhuangtai0.text = "已完成";
        }
        else if (parseInt(Gerenshuxing.sunnvxinxi[2]) != 0 && parseInt(Gerenshuxing.sunnvxinxi[3]) != 0) {
            this.zhuangtai0.text = "玩耍中";
        }
        else {
            this.zhuangtai0.text = "空闲中";
        }
    };
    return Meirijiesuan;
}(eui.Component));
__reflect(Meirijiesuan.prototype, "Meirijiesuan", ["eui.UIComponent", "egret.DisplayObject"]);
//# sourceMappingURL=Meirijiesuan.js.map