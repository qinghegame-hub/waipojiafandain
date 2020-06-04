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
var Danjujiemian = (function (_super) {
    __extends(Danjujiemian, _super);
    function Danjujiemian() {
        return _super.call(this) || this;
    }
    Danjujiemian.prototype.partAdded = function (partName, instance) {
        _super.prototype.partAdded.call(this, partName, instance);
    };
    Danjujiemian.prototype.childrenCreated = function () {
        _super.prototype.childrenCreated.call(this);
        this.chushihuaxianshiliebiao();
    };
    Danjujiemian.prototype.chushihuaxianshiliebiao = function () {
        //点击装修界面的第一个坑的解锁时触发
        this.but_jiaona0.addEventListener(egret.TouchEvent.TOUCH_TAP, this.dianjidi1gejiesuo, this);
        //点击装修界面的第2个坑的解锁时触发
        this.but_jiaona1.addEventListener(egret.TouchEvent.TOUCH_TAP, this.dianjidi2gejiesuo, this);
    };
    Danjujiemian.prototype.dianjidi1gejiesuo = function () {
        if (Gerenshuxing.jinbizhi >= this.di1gejinbi) {
            Weblianjie.fasongshuju("code:022", "{" + '"danjuid"' + ":" + '"' + this.di1geid + '"' + "," + '"uid"' + ":" + '"' + Gerenshuxing.uid + '"' + "}");
        }
        else {
            Gameguanli.Kongzhitai().cuowutishixinxi("您的金币不足！");
        }
    };
    Danjujiemian.prototype.dianjidi2gejiesuo = function () {
        if (Gerenshuxing.jinbizhi >= this.di2gejinbi) {
            Weblianjie.fasongshuju("code:022", "{" + '"danjuid"' + ":" + '"' + this.di2geid + '"' + "," + '"uid"' + ":" + '"' + Gerenshuxing.uid + '"' + "}");
        }
        else {
            Gameguanli.Kongzhitai().cuowutishixinxi("您的金币不足！");
        }
    };
    //修改饭店界面的家具的小吃区域显示内容和判断使用是否成功
    Danjujiemian.prototype.tongzhizhujiemain1 = function (id, jinbi) {
        this.di1geid = id;
        this.di1gejinbi = parseInt(jinbi);
    };
    Danjujiemian.prototype.tongzhizhujiemain2 = function (id, jinbi) {
        this.di2geid = id;
        this.di2gejinbi = parseInt(jinbi);
    };
    //判断每个显示格子的具体显示内容
    Danjujiemian.prototype.panduanxianshineirong = function (leixingxuhao, leixingdizhi, leixingxiabiao) {
        if (leixingxuhao == 1) {
            //				console.log(leixingxuhao,leixingdizhi,leixingxiabiao);
            if (leixingdizhi[leixingxiabiao] !== undefined) {
                this.img_danjuneirong0.source = "img_danjuneirong_png";
                this.danjubiaoti0.text = leixingdizhi[leixingxiabiao].danjuname;
                this.danjubianhao0.text = leixingdizhi[leixingxiabiao].serial;
                this.jiaoferen0.text = Gerenshuxing.uid;
                this.fumianzhuangtai0.text = "总收入：-" + leixingdizhi[leixingxiabiao].debuff + "%";
                this.jiaonajine0.text = "- " + leixingdizhi[leixingxiabiao].pay;
                this.jiaonayuanyin0.text = leixingdizhi[leixingxiabiao].reason;
                var jinbi1 = leixingdizhi[leixingxiabiao].pay;
                this.jinbi0.alpha = 1;
                this.but_jiaona0.alpha = 1;
                this.but_jiaona0.enabled = true;
                this.tongzhizhujiemain1(leixingdizhi[leixingxiabiao].id, jinbi1);
            }
            else {
                this.img_danjuneirong0.source = "";
                this.danjubiaoti0.text = "";
                this.danjubianhao0.text = "";
                this.jiaoferen0.text = "";
                this.fumianzhuangtai0.text = "";
                this.jiaonajine0.text = "";
                this.jiaonayuanyin0.text = "";
                this.but_jiaona0.alpha = 0;
                this.but_jiaona0.enabled = false;
                this.jinbi0.alpha = 0;
            }
        }
        if (leixingxuhao == 2) {
            if (leixingdizhi[leixingxiabiao] !== undefined) {
                this.img_danjuneirong1.source = "img_danjuneirong_png";
                this.danjubiaoti1.text = leixingdizhi[leixingxiabiao].danjuname;
                this.danjubianhao1.text = leixingdizhi[leixingxiabiao].serial;
                this.jiaoferen1.text = Gerenshuxing.uid;
                this.fumianzhuangtai1.text = "总收入：-" + leixingdizhi[leixingxiabiao].debuff + "%";
                this.jiaonajine1.text = "- " + leixingdizhi[leixingxiabiao].pay;
                var jinbi2 = leixingdizhi[leixingxiabiao].pay;
                this.jiaonayuanyin1.text = leixingdizhi[leixingxiabiao].reason;
                this.jinbi1.alpha = 1;
                this.but_jiaona1.alpha = 1;
                this.but_jiaona1.enabled = true;
                this.tongzhizhujiemain2(leixingdizhi[leixingxiabiao].id, jinbi2);
            }
            else {
                this.img_danjuneirong1.source = "";
                this.danjubiaoti1.text = "";
                this.danjubianhao1.text = "";
                this.jiaoferen1.text = "";
                this.fumianzhuangtai1.text = "";
                this.jiaonajine1.text = "";
                this.jiaonayuanyin1.text = "";
                this.but_jiaona1.alpha = 0;
                this.but_jiaona1.enabled = false;
                this.jinbi1.alpha = 0;
            }
        }
    };
    //管理界面数据逻辑的处理
    Danjujiemian.prototype.chulishujujiajujiegou = function (yeqian, yeshu) {
        var guanlileixingleibiao = RES.getRes("danjubiao_json");
        var dangqiandanjuliebiao = [];
        var xunhuan = 0;
        //接收服务端数据后，处理家具信息
        for (var bi = 0; bi < guanlileixingleibiao.length; bi++) {
            for (var ki = 0; ki < Gerenshuxing.yongyoudanju.length; ki++) {
                if (guanlileixingleibiao[bi].id == Gerenshuxing.yongyoudanju[ki]) {
                    dangqiandanjuliebiao[xunhuan] = guanlileixingleibiao[bi];
                    xunhuan++;
                    break;
                }
                ;
            }
        }
        //判断需要的页面长度	
        if (dangqiandanjuliebiao.length % 2 > 0) {
            this.danjuyeshu = Math.floor(dangqiandanjuliebiao.length / 2 + 1);
        }
        else {
            this.danjuyeshu = dangqiandanjuliebiao.length / 2;
        }
        //判断每夜的显示内容
        if (dangqiandanjuliebiao.length >= 1) {
            this.img_weichuli.alpha = 0;
            if (yeqian == 1 && yeshu == 1) {
                var k = 2;
                for (var i = k * yeshu - 2, j = 1; i < k * yeshu; i++, j++) {
                    this.panduanxianshineirong(j, dangqiandanjuliebiao, i);
                }
            }
            if (yeqian == 1 && yeshu == 2) {
                var k = 2;
                for (var i = k * yeshu - 2, j = 1; i < k * yeshu; i++, j++) {
                    this.panduanxianshineirong(j, dangqiandanjuliebiao, i);
                }
            }
            if (yeqian == 1 && yeshu == 3) {
                var k = 2;
                for (var i = k * yeshu - 2, j = 1; i < k * yeshu; i++, j++) {
                    this.panduanxianshineirong(j, dangqiandanjuliebiao, i);
                }
            }
            if (yeqian == 1 && yeshu == 4) {
                var k = 2;
                for (var i = k * yeshu - 2, j = 1; i < k * yeshu; i++, j++) {
                    this.panduanxianshineirong(j, dangqiandanjuliebiao, i);
                }
            }
            if (yeqian == 1 && yeshu == 5) {
                var k = 2;
                for (var i = k * yeshu - 2, j = 1; i < k * yeshu; i++, j++) {
                    this.panduanxianshineirong(j, dangqiandanjuliebiao, i);
                }
            }
            if (yeqian == 1 && yeshu == 6) {
                var k = 2;
                for (var i = k * yeshu - 2, j = 1; i < k * yeshu; i++, j++) {
                    this.panduanxianshineirong(j, dangqiandanjuliebiao, i);
                }
            }
            if (yeqian == 1 && yeshu == 7) {
                var k = 2;
                for (var i = k * yeshu - 2, j = 1; i < k * yeshu; i++, j++) {
                    this.panduanxianshineirong(j, dangqiandanjuliebiao, i);
                }
            }
            if (yeqian == 1 && yeshu == 8) {
                var k = 2;
                for (var i = k * yeshu - 2, j = 1; i < k * yeshu; i++, j++) {
                    this.panduanxianshineirong(j, dangqiandanjuliebiao, i);
                }
            }
            if (yeqian == 1 && yeshu == 9) {
                var k = 2;
                for (var i = k * yeshu - 2, j = 1; i < k * yeshu; i++, j++) {
                    this.panduanxianshineirong(j, dangqiandanjuliebiao, i);
                }
            }
            if (yeqian == 1 && yeshu == 10) {
                var k = 2;
                for (var i = k * yeshu - 2, j = 1; i < k * yeshu; i++, j++) {
                    this.panduanxianshineirong(j, dangqiandanjuliebiao, i);
                }
            }
        }
        else {
            this.img_weichuli.alpha = 1;
            this.img_danjuneirong1.source = "";
            this.danjubiaoti1.text = "";
            this.danjubianhao1.text = "";
            this.jiaoferen1.text = "";
            this.fumianzhuangtai1.text = "";
            this.jiaonajine1.text = "";
            this.jiaonayuanyin1.text = "";
            this.but_jiaona1.alpha = 0;
            this.but_jiaona1.enabled = false;
            this.jinbi1.alpha = 0;
            this.img_danjuneirong0.source = "";
            this.danjubiaoti0.text = "";
            this.danjubianhao0.text = "";
            this.jiaoferen0.text = "";
            this.fumianzhuangtai0.text = "";
            this.jiaonajine0.text = "";
            this.jiaonayuanyin0.text = "";
            this.but_jiaona0.alpha = 0;
            this.but_jiaona0.enabled = false;
            this.jinbi0.alpha = 0;
        }
    };
    return Danjujiemian;
}(eui.Component));
__reflect(Danjujiemian.prototype, "Danjujiemian", ["eui.UIComponent", "egret.DisplayObject"]);
//# sourceMappingURL=Danjujiemian.js.map