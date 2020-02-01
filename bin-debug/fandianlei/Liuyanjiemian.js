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
var Liuyanjiemian = (function (_super) {
    __extends(Liuyanjiemian, _super);
    function Liuyanjiemian() {
        return _super.call(this) || this;
    }
    Liuyanjiemian.prototype.partAdded = function (partName, instance) {
        _super.prototype.partAdded.call(this, partName, instance);
    };
    Liuyanjiemian.prototype.childrenCreated = function () {
        _super.prototype.childrenCreated.call(this);
        this.chushihua();
    };
    Liuyanjiemian.prototype.chushihua = function () {
        this.liuyanzhanshizu.scrollV = 0;
        this.but_guanbi0.addEventListener(egret.TouchEvent.TOUCH_TAP, this.dianjiguanbi, this);
        this.pingjunpinfen.text = "综合评分： " + Gerenshuxing.pingjunpinlun;
        this.zengjiakoubei.text = "店铺口碑提升： " + Gerenshuxing.pinglunkoubei;
        if (Gerenshuxing.pingjunpinlun >= 0 && Gerenshuxing.pingjunpinlun <= 1) {
            this.img_haopin.source = "img_haopin1_png";
        }
        else if (Gerenshuxing.pingjunpinlun > 1 && Gerenshuxing.pingjunpinlun <= 2) {
            this.img_haopin.source = "img_haopin2_png";
        }
        else if (Gerenshuxing.pingjunpinlun > 2 && Gerenshuxing.pingjunpinlun <= 3) {
            this.img_haopin.source = "img_haopin3_png";
        }
        else if (Gerenshuxing.pingjunpinlun > 3 && Gerenshuxing.pingjunpinlun <= 4) {
            this.img_haopin.source = "img_haopin4_png";
        }
        else {
            this.img_haopin.source = "img_haopin5_png";
        }
        //计算留言的显示列表内容
        this.xingming.text = Liuyanjiemian.di1tiaomingzi;
        this.pingluntext.text = Liuyanjiemian.di1tiaoneirong;
        this.img_qipaokuang.source = Liuyanjiemian.di1tiaoditu;
        this.img_touxiangkuang.source = Liuyanjiemian.di1tiaotouxiangkuang;
        this.touxiang.source = Liuyanjiemian.di1tiaotouxiang;
        this.img_haopintiao.source = Liuyanjiemian.di1tiaopingfen;
        this.xingming0.text = Liuyanjiemian.di2tiaomingzi;
        this.pingluntext0.text = Liuyanjiemian.di2tiaoneirong;
        this.img_qipaokuang0.source = Liuyanjiemian.di2tiaoditu;
        this.img_touxiangkuang0.source = Liuyanjiemian.di2tiaotouxiangkuang;
        this.touxiang0.source = Liuyanjiemian.di2tiaotouxiang;
        this.img_haopintiao0.source = Liuyanjiemian.di2tiaopingfen;
        this.xingming1.text = Liuyanjiemian.di3tiaomingzi;
        this.pingluntext1.text = Liuyanjiemian.di3tiaoneirong;
        this.img_qipaokuang1.source = Liuyanjiemian.di3tiaoditu;
        this.img_touxiangkuang1.source = Liuyanjiemian.di3tiaotouxiangkuang;
        this.touxiang1.source = Liuyanjiemian.di3tiaotouxiang;
        this.img_haopintiao1.source = Liuyanjiemian.di3tiaopingfen;
        this.xingming2.text = Liuyanjiemian.di4tiaomingzi;
        this.pingluntext2.text = Liuyanjiemian.di4tiaoneirong;
        this.img_qipaokuang2.source = Liuyanjiemian.di4tiaoditu;
        this.img_touxiangkuang2.source = Liuyanjiemian.di4tiaotouxiangkuang;
        this.touxiang2.source = Liuyanjiemian.di4tiaotouxiang;
        this.img_haopintiao2.source = Liuyanjiemian.di4tiaopingfen;
        this.xingming3.text = Liuyanjiemian.di5tiaomingzi;
        this.pingluntext3.text = Liuyanjiemian.di5tiaoneirong;
        this.img_qipaokuang3.source = Liuyanjiemian.di5tiaoditu;
        this.img_touxiangkuang3.source = Liuyanjiemian.di5tiaotouxiangkuang;
        this.touxiang3.source = Liuyanjiemian.di5tiaotouxiang;
        this.img_haopintiao3.source = Liuyanjiemian.di5tiaopingfen;
        this.xingming4.text = Liuyanjiemian.di6tiaomingzi;
        this.pingluntext4.text = Liuyanjiemian.di6tiaoneirong;
        this.img_qipaokuang4.source = Liuyanjiemian.di6tiaoditu;
        this.img_touxiangkuang4.source = Liuyanjiemian.di6tiaotouxiangkuang;
        this.touxiang4.source = Liuyanjiemian.di6tiaotouxiang;
        this.img_haopintiao4.source = Liuyanjiemian.di6tiaopingfen;
        this.xingming5.text = Liuyanjiemian.di7tiaomingzi;
        this.pingluntext5.text = Liuyanjiemian.di7tiaoneirong;
        this.img_qipaokuang5.source = Liuyanjiemian.di7tiaoditu;
        this.img_touxiangkuang5.source = Liuyanjiemian.di7tiaotouxiangkuang;
        this.touxiang5.source = Liuyanjiemian.di7tiaotouxiang;
        this.img_haopintiao5.source = Liuyanjiemian.di7tiaopingfen;
        this.xingming6.text = Liuyanjiemian.di8tiaomingzi;
        this.pingluntext6.text = Liuyanjiemian.di8tiaoneirong;
        this.img_qipaokuang6.source = Liuyanjiemian.di8tiaoditu;
        this.img_touxiangkuang6.source = Liuyanjiemian.di8tiaotouxiangkuang;
        this.touxiang6.source = Liuyanjiemian.di8tiaotouxiang;
        this.img_haopintiao6.source = Liuyanjiemian.di8tiaopingfen;
        this.xingming7.text = Liuyanjiemian.di9tiaomingzi;
        this.pingluntext7.text = Liuyanjiemian.di9tiaoneirong;
        this.img_qipaokuang7.source = Liuyanjiemian.di9tiaoditu;
        this.img_touxiangkuang7.source = Liuyanjiemian.di9tiaotouxiangkuang;
        this.touxiang7.source = Liuyanjiemian.di9tiaotouxiang;
        this.img_haopintiao7.source = Liuyanjiemian.di9tiaopingfen;
        this.xingming8.text = Liuyanjiemian.di10tiaomingzi;
        this.pingluntext8.text = Liuyanjiemian.di10tiaoneirong;
        this.img_qipaokuang8.source = Liuyanjiemian.di10tiaoditu;
        this.img_touxiangkuang8.source = Liuyanjiemian.di10tiaotouxiangkuang;
        this.touxiang8.source = Liuyanjiemian.di10tiaotouxiang;
        this.img_haopintiao8.source = Liuyanjiemian.di10tiaopingfen;
    };
    Liuyanjiemian.prototype.dianjiguanbi = function () {
        Gameguanli.Kongzhitai().caipujiemian("liuyan", "guan");
    };
    Liuyanjiemian.liuyanneirong = function (neirong, mingzi, pingfen, touxiang) {
        switch (Gerenshuxing.dangqiandiji) {
            case 1:
                Liuyanjiemian.di1tiaomingzi = mingzi;
                Liuyanjiemian.di1tiaoneirong = neirong;
                Liuyanjiemian.di1tiaoditu = "img_qipaokuang_png";
                Liuyanjiemian.di1tiaotouxiangkuang = "img_touxiangkuang_png";
                Liuyanjiemian.di1tiaotouxiang = touxiang + "_png";
                switch (pingfen) {
                    case 1:
                        Liuyanjiemian.di1tiaopingfen = "img_haopin1_png";
                        break;
                    case 2:
                        Liuyanjiemian.di1tiaopingfen = "img_haopin2_png";
                        break;
                    case 3:
                        Liuyanjiemian.di1tiaopingfen = "img_haopin3_png";
                        break;
                    case 4:
                        Liuyanjiemian.di1tiaopingfen = "img_haopin4_png";
                        break;
                    case 5:
                        Liuyanjiemian.di1tiaopingfen = "img_haopin5_png";
                        break;
                }
                break;
            case 2:
                Liuyanjiemian.di2tiaomingzi = mingzi;
                Liuyanjiemian.di2tiaoneirong = neirong;
                Liuyanjiemian.di2tiaoditu = "img_qipaokuang_png";
                Liuyanjiemian.di2tiaotouxiangkuang = "img_touxiangkuang_png";
                Liuyanjiemian.di2tiaotouxiang = touxiang + "_png";
                switch (pingfen) {
                    case 1:
                        Liuyanjiemian.di2tiaopingfen = "img_haopin1_png";
                        break;
                    case 2:
                        Liuyanjiemian.di2tiaopingfen = "img_haopin2_png";
                        break;
                    case 3:
                        Liuyanjiemian.di2tiaopingfen = "img_haopin3_png";
                        break;
                    case 4:
                        Liuyanjiemian.di2tiaopingfen = "img_haopin4_png";
                        break;
                    case 5:
                        Liuyanjiemian.di2tiaopingfen = "img_haopin5_png";
                        break;
                }
                break;
            case 3:
                Liuyanjiemian.di3tiaomingzi = mingzi;
                Liuyanjiemian.di3tiaoneirong = neirong;
                Liuyanjiemian.di3tiaoditu = "img_qipaokuang_png";
                Liuyanjiemian.di3tiaotouxiangkuang = "img_touxiangkuang_png";
                Liuyanjiemian.di3tiaotouxiang = touxiang + "_png";
                switch (pingfen) {
                    case 1:
                        Liuyanjiemian.di3tiaopingfen = "img_haopin1_png";
                        break;
                    case 2:
                        Liuyanjiemian.di3tiaopingfen = "img_haopin2_png";
                        break;
                    case 3:
                        Liuyanjiemian.di3tiaopingfen = "img_haopin3_png";
                        break;
                    case 4:
                        Liuyanjiemian.di3tiaopingfen = "img_haopin4_png";
                        break;
                    case 5:
                        Liuyanjiemian.di3tiaopingfen = "img_haopin5_png";
                        break;
                }
                break;
            case 4:
                Liuyanjiemian.di4tiaomingzi = mingzi;
                Liuyanjiemian.di4tiaoneirong = neirong;
                Liuyanjiemian.di4tiaoditu = "img_qipaokuang_png";
                Liuyanjiemian.di4tiaotouxiangkuang = "img_touxiangkuang_png";
                Liuyanjiemian.di4tiaotouxiang = touxiang + "_png";
                switch (pingfen) {
                    case 1:
                        Liuyanjiemian.di4tiaopingfen = "img_haopin1_png";
                        break;
                    case 2:
                        Liuyanjiemian.di4tiaopingfen = "img_haopin2_png";
                        break;
                    case 3:
                        Liuyanjiemian.di4tiaopingfen = "img_haopin3_png";
                        break;
                    case 4:
                        Liuyanjiemian.di4tiaopingfen = "img_haopin4_png";
                        break;
                    case 5:
                        Liuyanjiemian.di4tiaopingfen = "img_haopin5_png";
                        break;
                }
                break;
            case 5:
                Liuyanjiemian.di5tiaomingzi = mingzi;
                Liuyanjiemian.di5tiaoneirong = neirong;
                Liuyanjiemian.di5tiaoditu = "img_qipaokuang_png";
                Liuyanjiemian.di5tiaotouxiangkuang = "img_touxiangkuang_png";
                Liuyanjiemian.di5tiaotouxiang = touxiang + "_png";
                switch (pingfen) {
                    case 1:
                        Liuyanjiemian.di5tiaopingfen = "img_haopin1_png";
                        break;
                    case 2:
                        Liuyanjiemian.di5tiaopingfen = "img_haopin2_png";
                        break;
                    case 3:
                        Liuyanjiemian.di5tiaopingfen = "img_haopin3_png";
                        break;
                    case 4:
                        Liuyanjiemian.di5tiaopingfen = "img_haopin4_png";
                        break;
                    case 5:
                        Liuyanjiemian.di5tiaopingfen = "img_haopin5_png";
                        break;
                }
                break;
            case 6:
                Liuyanjiemian.di6tiaomingzi = mingzi;
                Liuyanjiemian.di6tiaoneirong = neirong;
                Liuyanjiemian.di6tiaoditu = "img_qipaokuang_png";
                Liuyanjiemian.di6tiaotouxiangkuang = "img_touxiangkuang_png";
                Liuyanjiemian.di6tiaotouxiang = touxiang + "_png";
                switch (pingfen) {
                    case 1:
                        Liuyanjiemian.di6tiaopingfen = "img_haopin1_png";
                        break;
                    case 2:
                        Liuyanjiemian.di6tiaopingfen = "img_haopin2_png";
                        break;
                    case 3:
                        Liuyanjiemian.di6tiaopingfen = "img_haopin3_png";
                        break;
                    case 4:
                        Liuyanjiemian.di6tiaopingfen = "img_haopin4_png";
                        break;
                    case 5:
                        Liuyanjiemian.di6tiaopingfen = "img_haopin5_png";
                        break;
                }
                break;
            case 7:
                Liuyanjiemian.di7tiaomingzi = mingzi;
                Liuyanjiemian.di7tiaoneirong = neirong;
                Liuyanjiemian.di7tiaoditu = "img_qipaokuang_png";
                Liuyanjiemian.di7tiaotouxiangkuang = "img_touxiangkuang_png";
                Liuyanjiemian.di7tiaotouxiang = touxiang + "_png";
                switch (pingfen) {
                    case 1:
                        Liuyanjiemian.di7tiaopingfen = "img_haopin1_png";
                        break;
                    case 2:
                        Liuyanjiemian.di7tiaopingfen = "img_haopin2_png";
                        break;
                    case 3:
                        Liuyanjiemian.di7tiaopingfen = "img_haopin3_png";
                        break;
                    case 4:
                        Liuyanjiemian.di7tiaopingfen = "img_haopin4_png";
                        break;
                    case 5:
                        Liuyanjiemian.di7tiaopingfen = "img_haopin5_png";
                        break;
                }
                break;
            case 8:
                Liuyanjiemian.di8tiaomingzi = mingzi;
                Liuyanjiemian.di8tiaoneirong = neirong;
                Liuyanjiemian.di8tiaoditu = "img_qipaokuang_png";
                Liuyanjiemian.di8tiaotouxiangkuang = "img_touxiangkuang_png";
                Liuyanjiemian.di8tiaotouxiang = touxiang + "_png";
                switch (pingfen) {
                    case 1:
                        Liuyanjiemian.di8tiaopingfen = "img_haopin1_png";
                        break;
                    case 2:
                        Liuyanjiemian.di8tiaopingfen = "img_haopin2_png";
                        break;
                    case 3:
                        Liuyanjiemian.di8tiaopingfen = "img_haopin3_png";
                        break;
                    case 4:
                        Liuyanjiemian.di8tiaopingfen = "img_haopin4_png";
                        break;
                    case 5:
                        Liuyanjiemian.di8tiaopingfen = "img_haopin5_png";
                        break;
                }
                break;
            case 9:
                Liuyanjiemian.di9tiaomingzi = mingzi;
                Liuyanjiemian.di9tiaoneirong = neirong;
                Liuyanjiemian.di9tiaoditu = "img_qipaokuang_png";
                Liuyanjiemian.di9tiaotouxiangkuang = "img_touxiangkuang_png";
                Liuyanjiemian.di9tiaotouxiang = touxiang + "_png";
                switch (pingfen) {
                    case 1:
                        Liuyanjiemian.di9tiaopingfen = "img_haopin1_png";
                        break;
                    case 2:
                        Liuyanjiemian.di9tiaopingfen = "img_haopin2_png";
                        break;
                    case 3:
                        Liuyanjiemian.di9tiaopingfen = "img_haopin3_png";
                        break;
                    case 4:
                        Liuyanjiemian.di9tiaopingfen = "img_haopin4_png";
                        break;
                    case 5:
                        Liuyanjiemian.di9tiaopingfen = "img_haopin5_png";
                        break;
                }
                break;
            case 10:
                Liuyanjiemian.di10tiaomingzi = mingzi;
                Liuyanjiemian.di10tiaoneirong = neirong;
                Liuyanjiemian.di10tiaoditu = "img_qipaokuang_png";
                Liuyanjiemian.di10tiaotouxiangkuang = "img_touxiangkuang_png";
                Liuyanjiemian.di10tiaotouxiang = touxiang + "_png";
                switch (pingfen) {
                    case 1:
                        Liuyanjiemian.di10tiaopingfen = "img_haopin1_png";
                        break;
                    case 2:
                        Liuyanjiemian.di10tiaopingfen = "img_haopin2_png";
                        break;
                    case 3:
                        Liuyanjiemian.di10tiaopingfen = "img_haopin3_png";
                        break;
                    case 4:
                        Liuyanjiemian.di10tiaopingfen = "img_haopin4_png";
                        break;
                    case 5:
                        Liuyanjiemian.di10tiaopingfen = "img_haopin5_png";
                        break;
                }
                break;
        }
    };
    //显示各项留言内容
    Liuyanjiemian.di1tiaomingzi = "";
    Liuyanjiemian.di1tiaoneirong = "";
    Liuyanjiemian.di1tiaoditu = "";
    Liuyanjiemian.di1tiaotouxiangkuang = "";
    Liuyanjiemian.di1tiaotouxiang = "";
    Liuyanjiemian.di1tiaopingfen = "";
    Liuyanjiemian.di2tiaomingzi = "";
    Liuyanjiemian.di2tiaoneirong = "";
    Liuyanjiemian.di2tiaoditu = "";
    Liuyanjiemian.di2tiaotouxiangkuang = "";
    Liuyanjiemian.di2tiaotouxiang = "";
    Liuyanjiemian.di2tiaopingfen = "";
    Liuyanjiemian.di3tiaomingzi = "";
    Liuyanjiemian.di3tiaoneirong = "";
    Liuyanjiemian.di3tiaoditu = "";
    Liuyanjiemian.di3tiaotouxiangkuang = "";
    Liuyanjiemian.di3tiaotouxiang = "";
    Liuyanjiemian.di3tiaopingfen = "";
    Liuyanjiemian.di4tiaomingzi = "";
    Liuyanjiemian.di4tiaoneirong = "";
    Liuyanjiemian.di4tiaoditu = "";
    Liuyanjiemian.di4tiaotouxiangkuang = "";
    Liuyanjiemian.di4tiaotouxiang = "";
    Liuyanjiemian.di4tiaopingfen = "";
    Liuyanjiemian.di5tiaomingzi = "";
    Liuyanjiemian.di5tiaoneirong = "";
    Liuyanjiemian.di5tiaoditu = "";
    Liuyanjiemian.di5tiaotouxiangkuang = "";
    Liuyanjiemian.di5tiaotouxiang = "";
    Liuyanjiemian.di5tiaopingfen = "";
    Liuyanjiemian.di6tiaomingzi = "";
    Liuyanjiemian.di6tiaoneirong = "";
    Liuyanjiemian.di6tiaoditu = "";
    Liuyanjiemian.di6tiaotouxiangkuang = "";
    Liuyanjiemian.di6tiaotouxiang = "";
    Liuyanjiemian.di6tiaopingfen = "";
    Liuyanjiemian.di7tiaomingzi = "";
    Liuyanjiemian.di7tiaoneirong = "";
    Liuyanjiemian.di7tiaoditu = "";
    Liuyanjiemian.di7tiaotouxiangkuang = "";
    Liuyanjiemian.di7tiaotouxiang = "";
    Liuyanjiemian.di7tiaopingfen = "";
    Liuyanjiemian.di8tiaomingzi = "";
    Liuyanjiemian.di8tiaoneirong = "";
    Liuyanjiemian.di8tiaoditu = "";
    Liuyanjiemian.di8tiaotouxiangkuang = "";
    Liuyanjiemian.di8tiaotouxiang = "";
    Liuyanjiemian.di8tiaopingfen = "";
    Liuyanjiemian.di9tiaomingzi = "";
    Liuyanjiemian.di9tiaoneirong = "";
    Liuyanjiemian.di9tiaoditu = "";
    Liuyanjiemian.di9tiaotouxiangkuang = "";
    Liuyanjiemian.di9tiaotouxiang = "";
    Liuyanjiemian.di9tiaopingfen = "";
    Liuyanjiemian.di10tiaomingzi = "";
    Liuyanjiemian.di10tiaoneirong = "";
    Liuyanjiemian.di10tiaoditu = "";
    Liuyanjiemian.di10tiaotouxiangkuang = "";
    Liuyanjiemian.di10tiaotouxiang = "";
    Liuyanjiemian.di10tiaopingfen = "";
    return Liuyanjiemian;
}(eui.Component));
__reflect(Liuyanjiemian.prototype, "Liuyanjiemian", ["eui.UIComponent", "egret.DisplayObject"]);
//# sourceMappingURL=Liuyanjiemian.js.map