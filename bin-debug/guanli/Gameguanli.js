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
var Gameguanli = (function (_super) {
    __extends(Gameguanli, _super);
    //实例化一个饭店核心结算
    //	public fandianjiesuan:Fandianjisuan;
    function Gameguanli() {
        var _this = _super.call(this) || this;
        _this.jinlaicishu = [1, 1, 1, 1, 1, 1, 1, 1];
        _this.danmucishu = [1, 1, 1, 1, 1, 1, 1, 1];
        _this.xiamiancishu = [1, 1, 1, 1, 1];
        _this.gerenshuju = new Gerenshuxing();
        _this.dibuui = new dibuxinxi();
        _this.dingbuui = new dingbuxinxi();
        _this.zhujiemian = new Zhujiemian();
        _this.zhujiemiandingbu = new Zhujiemianshangceng();
        _this.meirijieusan = new Meirijiesuan();
        _this.guanLiui = new Guanlijiemian();
        _this.caiPuUi = new Caipujiemian();
        _this.jingyingguanli = new Jinyingguanlijiemian();
        _this.liuyan = new Liuyanjiemian();
        //默认加载主界面相关界面
        _this.addChild(_this.zhujiemian);
        _this.addChild(_this.zhujiemiandingbu);
        _this.addChild(_this.dibuui);
        _this.addChild(_this.dingbuui);
        //默认需要开启饭店结算
        Fandianjisuan.chushihuajisuan();
        return _this;
    }
    Gameguanli.Kongzhitai = function () {
        if (Gameguanli.kongzhitai == null) {
            Gameguanli.kongzhitai = new Gameguanli();
        }
        return Gameguanli.kongzhitai;
    };
    //主界面菜单显示逻辑
    Gameguanli.prototype.jiemianxianshi = function (canshu1) {
        this.removeChild(Gameguanli.Kongzhitai().zhujiemian);
        this.removeChild(Gameguanli.Kongzhitai().zhujiemiandingbu);
        this.removeChild(Gameguanli.Kongzhitai().dibuui);
        this.removeChild(Gameguanli.Kongzhitai().dingbuui);
        if (canshu1 == "zhujiemian") {
            this.addChild(Gameguanli.Kongzhitai().zhujiemian);
            this.addChild(Gameguanli.Kongzhitai().zhujiemiandingbu);
            this.addChild(Gameguanli.Kongzhitai().dibuui);
            this.addChild(Gameguanli.Kongzhitai().dingbuui);
            Fandianjisuan.chushihuajisuan();
        }
    };
    //饭店界面显示逻辑
    Gameguanli.prototype.caipujiemian = function (leixing, kaiguan) {
        //菜谱界面相关
        if (kaiguan == "kai" && leixing == "fandian") {
            if (Gameguanli.Kongzhitai().caiPuUi.parent) {
                this.removeChild(Gameguanli.Kongzhitai().caiPuUi);
            }
            this.addChild(Gameguanli.Kongzhitai().caiPuUi);
            Gameguanli.Kongzhitai().zhujiemiandingbu.but_caipu1.enabled = false;
            Gameguanli.Kongzhitai().zhujiemiandingbu.but_guanli1.enabled = true;
            Gameguanli.Kongzhitai().zhujiemiandingbu.but_jingyinbaobiao1.enabled = true;
            Gameguanli.Kongzhitai().zhujiemiandingbu.but_liuyan1.enabled = true;
            if (Gameguanli.Kongzhitai().guanLiui.parent) {
                this.removeChild(Gameguanli.Kongzhitai().guanLiui);
            }
            if (Gameguanli.Kongzhitai().jingyingguanli.parent) {
                this.removeChild(Gameguanli.Kongzhitai().jingyingguanli);
            }
        }
        if (kaiguan == "guan" && leixing == "fandian") {
            this.removeChild(Gameguanli.Kongzhitai().caiPuUi);
            Gameguanli.Kongzhitai().zhujiemiandingbu.but_caipu1.enabled = true;
        }
        //管理界面相关
        if (kaiguan == "kai" && leixing == "guanli") {
            if (Gameguanli.Kongzhitai().guanLiui.parent) {
                this.removeChild(Gameguanli.Kongzhitai().guanLiui);
            }
            this.addChild(Gameguanli.Kongzhitai().guanLiui);
            Gameguanli.Kongzhitai().zhujiemiandingbu.but_guanli1.enabled = false;
            Gameguanli.Kongzhitai().zhujiemiandingbu.but_caipu1.enabled = true;
            Gameguanli.Kongzhitai().zhujiemiandingbu.but_jingyinbaobiao1.enabled = true;
            Gameguanli.Kongzhitai().zhujiemiandingbu.but_liuyan1.enabled = true;
            if (Gameguanli.Kongzhitai().caiPuUi.parent) {
                this.removeChild(Gameguanli.Kongzhitai().caiPuUi);
            }
            if (Gameguanli.Kongzhitai().jingyingguanli.parent) {
                this.removeChild(Gameguanli.Kongzhitai().jingyingguanli);
            }
        }
        if (kaiguan == "guan" && leixing == "guanli") {
            this.removeChild(Gameguanli.Kongzhitai().guanLiui);
            Gameguanli.Kongzhitai().zhujiemiandingbu.but_guanli1.enabled = true;
        }
        //经营管理界面相关
        if (kaiguan == "kai" && leixing == "jingying") {
            if (Gameguanli.Kongzhitai().jingyingguanli.parent) {
                this.removeChild(Gameguanli.Kongzhitai().jingyingguanli);
            }
            this.addChild(Gameguanli.Kongzhitai().jingyingguanli);
            Gameguanli.Kongzhitai().jingyingguanli.chushihua();
            Gameguanli.Kongzhitai().zhujiemiandingbu.but_jingyinbaobiao1.enabled = false;
            Gameguanli.Kongzhitai().zhujiemiandingbu.but_caipu1.enabled = true;
            Gameguanli.Kongzhitai().zhujiemiandingbu.but_guanli1.enabled = true;
            Gameguanli.Kongzhitai().zhujiemiandingbu.but_liuyan1.enabled = true;
            if (Gameguanli.Kongzhitai().caiPuUi.parent) {
                this.removeChild(Gameguanli.Kongzhitai().caiPuUi);
            }
            if (Gameguanli.Kongzhitai().guanLiui.parent) {
                this.removeChild(Gameguanli.Kongzhitai().guanLiui);
            }
        }
        if (kaiguan == "guan" && leixing == "jingying") {
            this.removeChild(Gameguanli.Kongzhitai().jingyingguanli);
            Gameguanli.Kongzhitai().zhujiemiandingbu.but_jingyinbaobiao1.enabled = true;
        }
        //留言界面相关
        if (kaiguan == "kai" && leixing == "liuyan") {
            if (Gameguanli.Kongzhitai().liuyan.parent) {
                this.removeChild(Gameguanli.Kongzhitai().liuyan);
            }
            this.addChild(Gameguanli.Kongzhitai().liuyan);
            Gameguanli.Kongzhitai().liuyan.chushihua();
            Gameguanli.Kongzhitai().zhujiemiandingbu.but_caipu1.enabled = true;
            Gameguanli.Kongzhitai().zhujiemiandingbu.but_guanli1.enabled = true;
            Gameguanli.Kongzhitai().zhujiemiandingbu.but_jingyinbaobiao1.enabled = true;
            Gameguanli.Kongzhitai().zhujiemiandingbu.but_liuyan1.enabled = false;
            if (Gameguanli.Kongzhitai().guanLiui.parent) {
                this.removeChild(Gameguanli.Kongzhitai().guanLiui);
            }
            if (Gameguanli.Kongzhitai().jingyingguanli.parent) {
                this.removeChild(Gameguanli.Kongzhitai().jingyingguanli);
            }
            if (Gameguanli.Kongzhitai().caiPuUi.parent) {
                this.removeChild(Gameguanli.Kongzhitai().caiPuUi);
            }
        }
        if (kaiguan == "guan" && leixing == "liuyan") {
            this.removeChild(Gameguanli.Kongzhitai().liuyan);
            Gameguanli.Kongzhitai().zhujiemiandingbu.but_liuyan1.enabled = true;
        }
    };
    //错误提示信息界面
    Gameguanli.prototype.cuowutishixinxi = function (neirong) {
        var _this = this;
        if (this.jinlaicishu[0] == 1) {
            this.jinlaicishu[0] = 0;
            this.cuowutishi1 = new Cuowutishi();
            this.addChild(this.cuowutishi1);
            this.cuowutishi1.x = Gameguanli.Kongzhitai().zhujiemian.img_fandianyuanhuabg0.width / 2 - this.cuowutishi1.width / 2;
            this.cuowutishi1.y = Gameguanli.Kongzhitai().zhujiemian.img_fandianyuanhuabg0.height / 2 - this.cuowutishi1.height / 2;
            this.cuowutishi1.tishiwenzi.text = neirong;
            egret.Tween.get(this.cuowutishi1).to({ x: this.cuowutishi1.x, y: Gameguanli.Kongzhitai().zhujiemian.img_fandianyuanhuabg0.height / 10 * 3 }, 3000)
                .call(function () {
                _this.jinlaicishu[0] = 1;
                _this.removeChild(_this.cuowutishi1);
            });
        }
        else if (this.jinlaicishu[1] == 1) {
            this.jinlaicishu[1] = 0;
            this.cuowutishi2 = new Cuowutishi();
            this.addChild(this.cuowutishi2);
            this.cuowutishi2.x = Gameguanli.Kongzhitai().zhujiemian.img_fandianyuanhuabg0.width / 2 - this.cuowutishi2.width / 2;
            this.cuowutishi2.y = Gameguanli.Kongzhitai().zhujiemian.img_fandianyuanhuabg0.height / 2 - this.cuowutishi2.height / 2;
            this.cuowutishi2.tishiwenzi.text = neirong;
            egret.Tween.get(this.cuowutishi2).to({ x: this.cuowutishi2.x, y: Gameguanli.Kongzhitai().zhujiemian.img_fandianyuanhuabg0.height / 10 * 3 }, 3000)
                .call(function () {
                _this.jinlaicishu[1] = 1;
                _this.removeChild(_this.cuowutishi2);
            });
        }
        else if (this.jinlaicishu[2] == 1) {
            this.jinlaicishu[2] = 0;
            this.cuowutishi3 = new Cuowutishi();
            this.addChild(this.cuowutishi3);
            this.cuowutishi3.x = Gameguanli.Kongzhitai().zhujiemian.img_fandianyuanhuabg0.width / 2 - this.cuowutishi3.width / 2;
            this.cuowutishi3.y = Gameguanli.Kongzhitai().zhujiemian.img_fandianyuanhuabg0.height / 2 - this.cuowutishi3.height / 2;
            this.cuowutishi3.tishiwenzi.text = neirong;
            egret.Tween.get(this.cuowutishi3).to({ x: this.cuowutishi3.x, y: Gameguanli.Kongzhitai().zhujiemian.img_fandianyuanhuabg0.height / 10 * 3 }, 3000)
                .call(function () {
                _this.jinlaicishu[2] = 1;
                _this.removeChild(_this.cuowutishi3);
            });
        }
        else if (this.jinlaicishu[3] == 1) {
            this.jinlaicishu[3] = 0;
            this.cuowutishi4 = new Cuowutishi();
            this.addChild(this.cuowutishi4);
            this.cuowutishi4.x = Gameguanli.Kongzhitai().zhujiemian.img_fandianyuanhuabg0.width / 2 - this.cuowutishi4.width / 2;
            this.cuowutishi4.y = Gameguanli.Kongzhitai().zhujiemian.img_fandianyuanhuabg0.height / 2 - this.cuowutishi4.height / 2;
            this.cuowutishi4.tishiwenzi.text = neirong;
            egret.Tween.get(this.cuowutishi4).to({ x: this.cuowutishi4.x, y: Gameguanli.Kongzhitai().zhujiemian.img_fandianyuanhuabg0.height / 10 * 3 }, 3000)
                .call(function () {
                _this.jinlaicishu[3] = 1;
                _this.removeChild(_this.cuowutishi4);
            });
        }
        else if (this.jinlaicishu[4] == 1) {
            this.jinlaicishu[4] = 0;
            this.cuowutishi5 = new Cuowutishi();
            this.addChild(this.cuowutishi5);
            this.cuowutishi5.x = Gameguanli.Kongzhitai().zhujiemian.img_fandianyuanhuabg0.width / 2 - this.cuowutishi5.width / 2;
            this.cuowutishi5.y = Gameguanli.Kongzhitai().zhujiemian.img_fandianyuanhuabg0.height / 2 - this.cuowutishi5.height / 2;
            this.cuowutishi5.tishiwenzi.text = neirong;
            egret.Tween.get(this.cuowutishi5).to({ x: this.cuowutishi5.x, y: Gameguanli.Kongzhitai().zhujiemian.img_fandianyuanhuabg0.height / 10 * 3 }, 3000)
                .call(function () {
                _this.jinlaicishu[4] = 1;
                _this.removeChild(_this.cuowutishi5);
            });
        }
        else if (this.jinlaicishu[5] == 1) {
            this.jinlaicishu[5] = 0;
            this.cuowutishi6 = new Cuowutishi();
            this.addChild(this.cuowutishi6);
            this.cuowutishi6.x = Gameguanli.Kongzhitai().zhujiemian.img_fandianyuanhuabg0.width / 2 - this.cuowutishi6.width / 2;
            this.cuowutishi6.y = Gameguanli.Kongzhitai().zhujiemian.img_fandianyuanhuabg0.height / 2 - this.cuowutishi6.height / 2;
            this.cuowutishi6.tishiwenzi.text = neirong;
            egret.Tween.get(this.cuowutishi6).to({ x: this.cuowutishi6.x, y: Gameguanli.Kongzhitai().zhujiemian.img_fandianyuanhuabg0.height / 10 * 3 }, 3000)
                .call(function () {
                _this.jinlaicishu[5] = 1;
                _this.removeChild(_this.cuowutishi6);
            });
        }
        else if (this.jinlaicishu[6] == 1) {
            this.jinlaicishu[6] = 0;
            this.cuowutishi7 = new Cuowutishi();
            this.addChild(this.cuowutishi7);
            this.cuowutishi7.x = Gameguanli.Kongzhitai().zhujiemian.img_fandianyuanhuabg0.width / 2 - this.cuowutishi7.width / 2;
            this.cuowutishi7.y = Gameguanli.Kongzhitai().zhujiemian.img_fandianyuanhuabg0.height / 2 - this.cuowutishi7.height / 2;
            this.cuowutishi7.tishiwenzi.text = neirong;
            egret.Tween.get(this.cuowutishi7).to({ x: this.cuowutishi7.x, y: Gameguanli.Kongzhitai().zhujiemian.img_fandianyuanhuabg0.height / 10 * 3 }, 3000)
                .call(function () {
                _this.jinlaicishu[6] = 1;
                _this.removeChild(_this.cuowutishi7);
            });
        }
        else if (this.jinlaicishu[7] == 1) {
            this.jinlaicishu[7] = 0;
            this.cuowutishi8 = new Cuowutishi();
            this.addChild(this.cuowutishi8);
            this.cuowutishi8.x = Gameguanli.Kongzhitai().zhujiemian.img_fandianyuanhuabg0.width / 2 - this.cuowutishi8.width / 2;
            this.cuowutishi8.y = Gameguanli.Kongzhitai().zhujiemian.img_fandianyuanhuabg0.height / 2 - this.cuowutishi8.height / 2;
            this.cuowutishi8.tishiwenzi.text = neirong;
            egret.Tween.get(this.cuowutishi8).to({ x: this.cuowutishi8.x, y: Gameguanli.Kongzhitai().zhujiemian.img_fandianyuanhuabg0.height / 10 * 3 }, 3000)
                .call(function () {
                _this.jinlaicishu[7] = 1;
                _this.removeChild(_this.cuowutishi8);
            });
        }
    };
    //下面提示信息界面
    Gameguanli.prototype.xiamiantishi = function (neirong) {
        var _this = this;
        if (this.xiamiancishu[0] == 1) {
            this.xiamiancishu[0] = 0;
            this.xiamiantishi1 = new Xiamiantishi();
            this.addChild(this.xiamiantishi1);
            this.xiamiantishi1.x = Gameguanli.Kongzhitai().zhujiemian.img_fandianyuanhuabg0.width / 2 - this.xiamiantishi1.width / 2;
            this.xiamiantishi1.y = Gameguanli.Kongzhitai().zhujiemian.img_fandianyuanhuabg0.height + this.xiamiantishi1.height / 2;
            this.xiamiantishi1.xiamiantishiwenzi.text = neirong;
            egret.Tween.get(this.xiamiantishi1).to({ x: this.xiamiantishi1.x, y: Gameguanli.Kongzhitai().zhujiemian.img_fandianyuanhuabg0.height - this.xiamiantishi1.height * 1 }, 2000)
                .wait(3000).call(function () {
                _this.xiamiancishu[0] = 1;
                _this.removeChild(_this.xiamiantishi1);
            });
        }
        else if (this.xiamiancishu[1] == 1) {
            this.xiamiancishu[1] = 0;
            this.xiamiantishi2 = new Xiamiantishi();
            this.addChild(this.xiamiantishi2);
            this.xiamiantishi2.x = Gameguanli.Kongzhitai().zhujiemian.img_fandianyuanhuabg0.width / 2 - this.xiamiantishi2.width / 2;
            this.xiamiantishi2.y = Gameguanli.Kongzhitai().zhujiemian.img_fandianyuanhuabg0.height + this.xiamiantishi2.height / 2;
            this.xiamiantishi2.xiamiantishiwenzi.text = neirong;
            egret.Tween.get(this.xiamiantishi2).to({ x: this.xiamiantishi2.x, y: Gameguanli.Kongzhitai().zhujiemian.img_fandianyuanhuabg0.height - this.xiamiantishi2.height * 1 }, 2000)
                .wait(3000).call(function () {
                _this.xiamiancishu[1] = 1;
                _this.removeChild(_this.xiamiantishi2);
            });
        }
        else if (this.xiamiancishu[2] == 1) {
            this.xiamiancishu[2] = 0;
            this.xiamiantishi3 = new Xiamiantishi();
            this.addChild(this.xiamiantishi3);
            this.xiamiantishi3.x = Gameguanli.Kongzhitai().zhujiemian.img_fandianyuanhuabg0.width / 2 - this.xiamiantishi3.width / 2;
            this.xiamiantishi3.y = Gameguanli.Kongzhitai().zhujiemian.img_fandianyuanhuabg0.height + this.xiamiantishi3.height / 2;
            this.xiamiantishi3.xiamiantishiwenzi.text = neirong;
            egret.Tween.get(this.xiamiantishi3).to({ x: this.xiamiantishi3.x, y: Gameguanli.Kongzhitai().zhujiemian.img_fandianyuanhuabg0.height - this.xiamiantishi3.height * 1 }, 2000)
                .wait(3000).call(function () {
                _this.xiamiancishu[2] = 1;
                _this.removeChild(_this.xiamiantishi3);
            });
        }
        else if (this.xiamiancishu[3] == 1) {
            this.xiamiancishu[3] = 0;
            this.xiamiantishi4 = new Xiamiantishi();
            this.addChild(this.xiamiantishi4);
            this.xiamiantishi4.x = Gameguanli.Kongzhitai().zhujiemian.img_fandianyuanhuabg0.width / 2 - this.xiamiantishi4.width / 2;
            this.xiamiantishi4.y = Gameguanli.Kongzhitai().zhujiemian.img_fandianyuanhuabg0.height + this.xiamiantishi4.height / 2;
            this.xiamiantishi4.xiamiantishiwenzi.text = neirong;
            egret.Tween.get(this.xiamiantishi4).to({ x: this.xiamiantishi4.x, y: Gameguanli.Kongzhitai().zhujiemian.img_fandianyuanhuabg0.height - this.xiamiantishi4.height * 1 }, 2000)
                .wait(3000).call(function () {
                _this.xiamiancishu[3] = 1;
                _this.removeChild(_this.xiamiantishi4);
            });
        }
        else if (this.xiamiancishu[4] == 1) {
            this.xiamiancishu[4] = 0;
            this.xiamiantishi5 = new Xiamiantishi();
            this.addChild(this.xiamiantishi5);
            this.xiamiantishi5.x = Gameguanli.Kongzhitai().zhujiemian.img_fandianyuanhuabg0.width / 2 - this.xiamiantishi5.width / 2;
            this.xiamiantishi5.y = Gameguanli.Kongzhitai().zhujiemian.img_fandianyuanhuabg0.height + this.xiamiantishi5.height / 2;
            this.xiamiantishi5.xiamiantishiwenzi.text = neirong;
            egret.Tween.get(this.xiamiantishi5).to({ x: this.xiamiantishi5.x, y: Gameguanli.Kongzhitai().zhujiemian.img_fandianyuanhuabg0.height - this.xiamiantishi5.height * 1 }, 2000)
                .wait(3000).call(function () {
                _this.xiamiancishu[4] = 1;
                _this.removeChild(_this.xiamiantishi5);
            });
        }
    };
    //每日结算界面实例
    Gameguanli.prototype.meirijiesuanjiemian = function (num1, jixupinyongyuangong, fangqipinyongyuangong) {
        if (num1 == "kai") {
            if (Gameguanli.Kongzhitai().meirijieusan.parent) {
                this.removeChild(Gameguanli.Kongzhitai().meirijieusan);
            }
            this.addChild(this.meirijieusan);
            Gameguanli.Kongzhitai().meirijieusan.chushihua();
            var yuangongyuanshibiao = RES.getRes("yuangongbiao_json");
            var dijige = 0;
            var zhuangtai = 0;
            this.gundongjuli = 0;
            this.xianshirenshi(dijige, zhuangtai, "", "");
            if (jixupinyongyuangong != undefined) {
                for (var jx = 0; jx < yuangongyuanshibiao.length; jx++) {
                    for (var jx2 = 0; jx2 < jixupinyongyuangong.length; jx2++) {
                        if (jixupinyongyuangong[jx2] == yuangongyuanshibiao[jx].id) {
                            dijige += 1;
                            zhuangtai = 1;
                            this.xianshirenshi(dijige, zhuangtai, yuangongyuanshibiao[jx].name, yuangongyuanshibiao[jx].pay);
                            break;
                        }
                    }
                }
            }
            if (fangqipinyongyuangong != undefined) {
                for (var fq = 0; fq < yuangongyuanshibiao.length; fq++) {
                    for (var fq2 = 0; fq2 < fangqipinyongyuangong.length; fq2++) {
                        if (fangqipinyongyuangong[fq2] == yuangongyuanshibiao[fq].id) {
                            dijige += 1;
                            zhuangtai = 2;
                            this.xianshirenshi(dijige, zhuangtai, yuangongyuanshibiao[fq].name, "无法付工资");
                            break;
                        }
                    }
                }
            }
            Gameguanli.Kongzhitai().meirijieusan.renshirongqizu.scrollV = 0;
            Gameguanli.Kongzhitai().meirijieusan.renshigundong.addEventListener(egret.TouchEvent.TOUCH_MOVE, this.gundongjianting, this);
        }
        else if (num1 == "guan") {
            if (Gameguanli.Kongzhitai().meirijieusan.parent) {
                this.removeChild(Gameguanli.Kongzhitai().meirijieusan);
            }
        }
    };
    Gameguanli.prototype.xianshirenshi = function (xulieid, zhuangtai, mingzi, jinbi) {
        if (zhuangtai == 0) {
            Gameguanli.Kongzhitai().meirijieusan.renshigundong.enabled = false;
            Gameguanli.Kongzhitai().meirijieusan.renshibiangengtext.text = "当前没有人事变更!!";
            Gameguanli.Kongzhitai().meirijieusan.renshibiangengtext.alpha = 1;
            Gameguanli.Kongzhitai().meirijieusan.di1text.text = "";
            Gameguanli.Kongzhitai().meirijieusan.di1jinbi.text = "";
            Gameguanli.Kongzhitai().meirijieusan.di1jinbitb.alpha = 0;
            Gameguanli.Kongzhitai().meirijieusan.di1text0.text = "";
            Gameguanli.Kongzhitai().meirijieusan.di1jinbi0.text = "";
            Gameguanli.Kongzhitai().meirijieusan.di1jinbitb0.alpha = 0;
            Gameguanli.Kongzhitai().meirijieusan.di1text1.text = "";
            Gameguanli.Kongzhitai().meirijieusan.di1jinbi1.text = "";
            Gameguanli.Kongzhitai().meirijieusan.di1jinbitb1.alpha = 0;
            Gameguanli.Kongzhitai().meirijieusan.di1text2.text = "";
            Gameguanli.Kongzhitai().meirijieusan.di1jinbi2.text = "";
            Gameguanli.Kongzhitai().meirijieusan.di1jinbitb2.alpha = 0;
            Gameguanli.Kongzhitai().meirijieusan.di1text3.text = "";
            Gameguanli.Kongzhitai().meirijieusan.di1jinbi3.text = "";
            Gameguanli.Kongzhitai().meirijieusan.di1jinbitb3.alpha = 0;
            Gameguanli.Kongzhitai().meirijieusan.di1text4.text = "";
            Gameguanli.Kongzhitai().meirijieusan.di1jinbi4.text = "";
            Gameguanli.Kongzhitai().meirijieusan.di1jinbitb4.alpha = 0;
            Gameguanli.Kongzhitai().meirijieusan.di1text5.text = "";
            Gameguanli.Kongzhitai().meirijieusan.di1jinbi5.text = "";
            Gameguanli.Kongzhitai().meirijieusan.di1jinbitb5.alpha = 0;
            Gameguanli.Kongzhitai().meirijieusan.di1text6.text = "";
            Gameguanli.Kongzhitai().meirijieusan.di1jinbi6.text = "";
            Gameguanli.Kongzhitai().meirijieusan.di1jinbitb6.alpha = 0;
            Gameguanli.Kongzhitai().meirijieusan.di1text7.text = "";
            Gameguanli.Kongzhitai().meirijieusan.di1jinbi7.text = "";
            Gameguanli.Kongzhitai().meirijieusan.di1jinbitb7.alpha = 0;
            Gameguanli.Kongzhitai().meirijieusan.di1text8.text = "";
            Gameguanli.Kongzhitai().meirijieusan.di1jinbi8.text = "";
            Gameguanli.Kongzhitai().meirijieusan.di1jinbitb8.alpha = 0;
            Gameguanli.Kongzhitai().meirijieusan.di1text9.text = "";
            Gameguanli.Kongzhitai().meirijieusan.di1jinbi9.text = "";
            Gameguanli.Kongzhitai().meirijieusan.di1jinbitb9.alpha = 0;
            Gameguanli.Kongzhitai().meirijieusan.di1text10.text = "";
            Gameguanli.Kongzhitai().meirijieusan.di1jinbi10.text = "";
            Gameguanli.Kongzhitai().meirijieusan.di1jinbitb10.alpha = 0;
            Gameguanli.Kongzhitai().meirijieusan.di1text11.text = "";
            Gameguanli.Kongzhitai().meirijieusan.di1jinbi11.text = "";
            Gameguanli.Kongzhitai().meirijieusan.di1jinbitb11.alpha = 0;
            Gameguanli.Kongzhitai().meirijieusan.di1text12.text = "";
            Gameguanli.Kongzhitai().meirijieusan.di1jinbi12.text = "";
            Gameguanli.Kongzhitai().meirijieusan.di1jinbitb12.alpha = 0;
            Gameguanli.Kongzhitai().meirijieusan.di1text13.text = "";
            Gameguanli.Kongzhitai().meirijieusan.di1jinbi13.text = "";
            Gameguanli.Kongzhitai().meirijieusan.di1jinbitb13.alpha = 0;
            Gameguanli.Kongzhitai().meirijieusan.di1text14.text = "";
            Gameguanli.Kongzhitai().meirijieusan.di1jinbi14.text = "";
            Gameguanli.Kongzhitai().meirijieusan.di1jinbitb14.alpha = 0;
            Gameguanli.Kongzhitai().meirijieusan.di1text15.text = "";
            Gameguanli.Kongzhitai().meirijieusan.di1jinbi15.text = "";
            Gameguanli.Kongzhitai().meirijieusan.di1jinbitb15.alpha = 0;
            Gameguanli.Kongzhitai().meirijieusan.di1text16.text = "";
            Gameguanli.Kongzhitai().meirijieusan.di1jinbi16.text = "";
            Gameguanli.Kongzhitai().meirijieusan.di1jinbitb16.alpha = 0;
            Gameguanli.Kongzhitai().meirijieusan.di1text17.text = "";
            Gameguanli.Kongzhitai().meirijieusan.di1jinbi17.text = "";
            Gameguanli.Kongzhitai().meirijieusan.di1jinbitb17.alpha = 0;
            Gameguanli.Kongzhitai().meirijieusan.di1text18.text = "";
            Gameguanli.Kongzhitai().meirijieusan.di1jinbi18.text = "";
            Gameguanli.Kongzhitai().meirijieusan.di1jinbitb18.alpha = 0;
            Gameguanli.Kongzhitai().meirijieusan.di1text19.text = "";
            Gameguanli.Kongzhitai().meirijieusan.di1jinbi19.text = "";
            Gameguanli.Kongzhitai().meirijieusan.di1jinbitb19.alpha = 0;
            Gameguanli.Kongzhitai().meirijieusan.di1text20.text = "";
            Gameguanli.Kongzhitai().meirijieusan.di1jinbi20.text = "";
            Gameguanli.Kongzhitai().meirijieusan.di1jinbitb20.alpha = 0;
            Gameguanli.Kongzhitai().meirijieusan.di1text21.text = "";
            Gameguanli.Kongzhitai().meirijieusan.di1jinbi21.text = "";
            Gameguanli.Kongzhitai().meirijieusan.di1jinbitb21.alpha = 0;
            Gameguanli.Kongzhitai().meirijieusan.di1text22.text = "";
            Gameguanli.Kongzhitai().meirijieusan.di1jinbi22.text = "";
            Gameguanli.Kongzhitai().meirijieusan.di1jinbitb22.alpha = 0;
            Gameguanli.Kongzhitai().meirijieusan.di1text23.text = "";
            Gameguanli.Kongzhitai().meirijieusan.di1jinbi23.text = "";
            Gameguanli.Kongzhitai().meirijieusan.di1jinbitb23.alpha = 0;
            Gameguanli.Kongzhitai().meirijieusan.di1text24.text = "";
            Gameguanli.Kongzhitai().meirijieusan.di1jinbi24.text = "";
            Gameguanli.Kongzhitai().meirijieusan.di1jinbitb24.alpha = 0;
            Gameguanli.Kongzhitai().meirijieusan.di1text25.text = "";
            Gameguanli.Kongzhitai().meirijieusan.di1jinbi25.text = "";
            Gameguanli.Kongzhitai().meirijieusan.di1jinbitb25.alpha = 0;
            Gameguanli.Kongzhitai().meirijieusan.di1text26.text = "";
            Gameguanli.Kongzhitai().meirijieusan.di1jinbi26.text = "";
            Gameguanli.Kongzhitai().meirijieusan.di1jinbitb26.alpha = 0;
            Gameguanli.Kongzhitai().meirijieusan.di1text27.text = "";
            Gameguanli.Kongzhitai().meirijieusan.di1jinbi27.text = "";
            Gameguanli.Kongzhitai().meirijieusan.di1jinbitb27.alpha = 0;
            Gameguanli.Kongzhitai().meirijieusan.di1text28.text = "";
            Gameguanli.Kongzhitai().meirijieusan.di1jinbi28.text = "";
            Gameguanli.Kongzhitai().meirijieusan.di1jinbitb28.alpha = 0;
        }
        else if (zhuangtai == 1) {
            Gameguanli.Kongzhitai().meirijieusan.renshigundong.enabled = true;
            Gameguanli.Kongzhitai().meirijieusan.renshibiangengtext.text = "";
            Gameguanli.Kongzhitai().meirijieusan.renshibiangengtext.alpha = 0;
            switch (xulieid) {
                case 1:
                    Gameguanli.Kongzhitai().meirijieusan.di1text.text = "续聘：" + mingzi;
                    Gameguanli.Kongzhitai().meirijieusan.di1jinbi.text = "-" + jinbi;
                    Gameguanli.Kongzhitai().meirijieusan.di1jinbitb.alpha = 1;
                    break;
                case 2:
                    Gameguanli.Kongzhitai().meirijieusan.di1text0.text = "续聘：" + mingzi;
                    Gameguanli.Kongzhitai().meirijieusan.di1jinbi0.text = "-" + jinbi;
                    Gameguanli.Kongzhitai().meirijieusan.di1jinbitb0.alpha = 1;
                    break;
                case 3:
                    Gameguanli.Kongzhitai().meirijieusan.di1text1.text = "续聘：" + mingzi;
                    Gameguanli.Kongzhitai().meirijieusan.di1jinbi1.text = "-" + jinbi;
                    Gameguanli.Kongzhitai().meirijieusan.di1jinbitb1.alpha = 1;
                    break;
                case 4:
                    Gameguanli.Kongzhitai().meirijieusan.di1text2.text = "续聘：" + mingzi;
                    Gameguanli.Kongzhitai().meirijieusan.di1jinbi2.text = "-" + jinbi;
                    Gameguanli.Kongzhitai().meirijieusan.di1jinbitb2.alpha = 1;
                    this.gundongjuli += 1;
                    break;
                case 5:
                    Gameguanli.Kongzhitai().meirijieusan.di1text3.text = "续聘：" + mingzi;
                    Gameguanli.Kongzhitai().meirijieusan.di1jinbi3.text = "-" + jinbi;
                    Gameguanli.Kongzhitai().meirijieusan.di1jinbitb3.alpha = 1;
                    break;
                case 6:
                    Gameguanli.Kongzhitai().meirijieusan.di1text4.text = "续聘：" + mingzi;
                    Gameguanli.Kongzhitai().meirijieusan.di1jinbi4.text = "-" + jinbi;
                    Gameguanli.Kongzhitai().meirijieusan.di1jinbitb4.alpha = 1;
                    break;
                case 7:
                    Gameguanli.Kongzhitai().meirijieusan.di1text5.text = "续聘：" + mingzi;
                    Gameguanli.Kongzhitai().meirijieusan.di1jinbi5.text = "-" + jinbi;
                    Gameguanli.Kongzhitai().meirijieusan.di1jinbitb5.alpha = 1;
                    break;
                case 8:
                    Gameguanli.Kongzhitai().meirijieusan.di1text6.text = "续聘：" + mingzi;
                    Gameguanli.Kongzhitai().meirijieusan.di1jinbi6.text = "-" + jinbi;
                    Gameguanli.Kongzhitai().meirijieusan.di1jinbitb6.alpha = 1;
                    this.gundongjuli += 1;
                    break;
                case 9:
                    Gameguanli.Kongzhitai().meirijieusan.di1text7.text = "续聘：" + mingzi;
                    Gameguanli.Kongzhitai().meirijieusan.di1jinbi7.text = "-" + jinbi;
                    Gameguanli.Kongzhitai().meirijieusan.di1jinbitb7.alpha = 1;
                    break;
                case 10:
                    Gameguanli.Kongzhitai().meirijieusan.di1text8.text = "续聘：" + mingzi;
                    Gameguanli.Kongzhitai().meirijieusan.di1jinbi8.text = "-" + jinbi;
                    Gameguanli.Kongzhitai().meirijieusan.di1jinbitb8.alpha = 1;
                    break;
                case 11:
                    Gameguanli.Kongzhitai().meirijieusan.di1text9.text = "续聘：" + mingzi;
                    Gameguanli.Kongzhitai().meirijieusan.di1jinbi9.text = "-" + jinbi;
                    Gameguanli.Kongzhitai().meirijieusan.di1jinbitb9.alpha = 1;
                    break;
                case 12:
                    Gameguanli.Kongzhitai().meirijieusan.di1text10.text = "续聘：" + mingzi;
                    Gameguanli.Kongzhitai().meirijieusan.di1jinbi10.text = "-" + jinbi;
                    Gameguanli.Kongzhitai().meirijieusan.di1jinbitb10.alpha = 1;
                    this.gundongjuli += 1;
                    break;
                case 13:
                    Gameguanli.Kongzhitai().meirijieusan.di1text11.text = "续聘：" + mingzi;
                    Gameguanli.Kongzhitai().meirijieusan.di1jinbi11.text = "-" + jinbi;
                    Gameguanli.Kongzhitai().meirijieusan.di1jinbitb11.alpha = 1;
                    this.gundongjuli += 1;
                    break;
                case 14:
                    Gameguanli.Kongzhitai().meirijieusan.di1text12.text = "续聘：" + mingzi;
                    Gameguanli.Kongzhitai().meirijieusan.di1jinbi12.text = "-" + jinbi;
                    Gameguanli.Kongzhitai().meirijieusan.di1jinbitb12.alpha = 1;
                    break;
                case 15:
                    Gameguanli.Kongzhitai().meirijieusan.di1text13.text = "续聘：" + mingzi;
                    Gameguanli.Kongzhitai().meirijieusan.di1jinbi13.text = "-" + jinbi;
                    Gameguanli.Kongzhitai().meirijieusan.di1jinbitb13.alpha = 1;
                    break;
                case 16:
                    Gameguanli.Kongzhitai().meirijieusan.di1text14.text = "续聘：" + mingzi;
                    Gameguanli.Kongzhitai().meirijieusan.di1jinbi14.text = "-" + jinbi;
                    Gameguanli.Kongzhitai().meirijieusan.di1jinbitb14.alpha = 1;
                    this.gundongjuli += 1;
                    break;
                case 17:
                    Gameguanli.Kongzhitai().meirijieusan.di1text15.text = "续聘：" + mingzi;
                    Gameguanli.Kongzhitai().meirijieusan.di1jinbi15.text = "-" + jinbi;
                    Gameguanli.Kongzhitai().meirijieusan.di1jinbitb15.alpha = 1;
                    break;
                case 18:
                    Gameguanli.Kongzhitai().meirijieusan.di1text16.text = "续聘：" + mingzi;
                    Gameguanli.Kongzhitai().meirijieusan.di1jinbi16.text = "-" + jinbi;
                    Gameguanli.Kongzhitai().meirijieusan.di1jinbitb16.alpha = 1;
                    break;
                case 19:
                    Gameguanli.Kongzhitai().meirijieusan.di1text17.text = "续聘：" + mingzi;
                    Gameguanli.Kongzhitai().meirijieusan.di1jinbi17.text = "-" + jinbi;
                    Gameguanli.Kongzhitai().meirijieusan.di1jinbitb17.alpha = 1;
                    break;
                case 20:
                    Gameguanli.Kongzhitai().meirijieusan.di1text18.text = "续聘：" + mingzi;
                    Gameguanli.Kongzhitai().meirijieusan.di1jinbi18.text = "-" + jinbi;
                    Gameguanli.Kongzhitai().meirijieusan.di1jinbitb18.alpha = 1;
                    this.gundongjuli += 1;
                    break;
                case 21:
                    Gameguanli.Kongzhitai().meirijieusan.di1text19.text = "续聘：" + mingzi;
                    Gameguanli.Kongzhitai().meirijieusan.di1jinbi19.text = "-" + jinbi;
                    Gameguanli.Kongzhitai().meirijieusan.di1jinbitb19.alpha = 1;
                    break;
                case 22:
                    Gameguanli.Kongzhitai().meirijieusan.di1text20.text = "续聘：" + mingzi;
                    Gameguanli.Kongzhitai().meirijieusan.di1jinbi20.text = "-" + jinbi;
                    Gameguanli.Kongzhitai().meirijieusan.di1jinbitb20.alpha = 1;
                    break;
                case 23:
                    Gameguanli.Kongzhitai().meirijieusan.di1text21.text = "续聘：" + mingzi;
                    Gameguanli.Kongzhitai().meirijieusan.di1jinbi21.text = "-" + jinbi;
                    Gameguanli.Kongzhitai().meirijieusan.di1jinbitb21.alpha = 1;
                    break;
                case 24:
                    Gameguanli.Kongzhitai().meirijieusan.di1text22.text = "续聘：" + mingzi;
                    Gameguanli.Kongzhitai().meirijieusan.di1jinbi22.text = "-" + jinbi;
                    Gameguanli.Kongzhitai().meirijieusan.di1jinbitb22.alpha = 1;
                    this.gundongjuli += 1;
                    break;
                case 25:
                    Gameguanli.Kongzhitai().meirijieusan.di1text23.text = "续聘：" + mingzi;
                    Gameguanli.Kongzhitai().meirijieusan.di1jinbi23.text = "-" + jinbi;
                    Gameguanli.Kongzhitai().meirijieusan.di1jinbitb23.alpha = 1;
                    break;
                case 26:
                    Gameguanli.Kongzhitai().meirijieusan.di1text24.text = "续聘：" + mingzi;
                    Gameguanli.Kongzhitai().meirijieusan.di1jinbi24.text = "-" + jinbi;
                    Gameguanli.Kongzhitai().meirijieusan.di1jinbitb24.alpha = 1;
                    break;
                case 27:
                    Gameguanli.Kongzhitai().meirijieusan.di1text25.text = "续聘：" + mingzi;
                    Gameguanli.Kongzhitai().meirijieusan.di1jinbi25.text = "-" + jinbi;
                    Gameguanli.Kongzhitai().meirijieusan.di1jinbitb25.alpha = 1;
                    break;
                case 28:
                    Gameguanli.Kongzhitai().meirijieusan.di1text26.text = "续聘：" + mingzi;
                    Gameguanli.Kongzhitai().meirijieusan.di1jinbi26.text = "-" + jinbi;
                    Gameguanli.Kongzhitai().meirijieusan.di1jinbitb26.alpha = 1;
                    this.gundongjuli += 1;
                    break;
                case 29:
                    Gameguanli.Kongzhitai().meirijieusan.di1text27.text = "续聘：" + mingzi;
                    Gameguanli.Kongzhitai().meirijieusan.di1jinbi27.text = "-" + jinbi;
                    Gameguanli.Kongzhitai().meirijieusan.di1jinbitb27.alpha = 1;
                    break;
                case 30:
                    Gameguanli.Kongzhitai().meirijieusan.di1text28.text = "续聘：" + mingzi;
                    Gameguanli.Kongzhitai().meirijieusan.di1jinbi28.text = "-" + jinbi;
                    Gameguanli.Kongzhitai().meirijieusan.di1jinbitb28.alpha = 1;
                    break;
                default:
                    Gameguanli.Kongzhitai().meirijieusan.di1text.text = "";
                    Gameguanli.Kongzhitai().meirijieusan.di1jinbi.text = "";
                    Gameguanli.Kongzhitai().meirijieusan.di1jinbitb.alpha = 0;
                    break;
            }
        }
        else if (zhuangtai == 2) {
            Gameguanli.Kongzhitai().meirijieusan.renshigundong.enabled = true;
            Gameguanli.Kongzhitai().meirijieusan.renshibiangengtext.text = "";
            Gameguanli.Kongzhitai().meirijieusan.renshibiangengtext.alpha = 0;
            switch (xulieid) {
                case 1:
                    Gameguanli.Kongzhitai().meirijieusan.di1text.text = "解聘：" + mingzi;
                    Gameguanli.Kongzhitai().meirijieusan.di1jinbi.text = "" + jinbi;
                    Gameguanli.Kongzhitai().meirijieusan.di1jinbitb.alpha = 0;
                    break;
                case 2:
                    Gameguanli.Kongzhitai().meirijieusan.di1text0.text = "解聘：" + mingzi;
                    Gameguanli.Kongzhitai().meirijieusan.di1jinbi0.text = "" + jinbi;
                    Gameguanli.Kongzhitai().meirijieusan.di1jinbitb0.alpha = 0;
                    break;
                case 3:
                    Gameguanli.Kongzhitai().meirijieusan.di1text1.text = "解聘：" + mingzi;
                    Gameguanli.Kongzhitai().meirijieusan.di1jinbi1.text = "" + jinbi;
                    Gameguanli.Kongzhitai().meirijieusan.di1jinbitb1.alpha = 0;
                    break;
                case 4:
                    Gameguanli.Kongzhitai().meirijieusan.di1text2.text = "解聘：" + mingzi;
                    Gameguanli.Kongzhitai().meirijieusan.di1jinbi2.text = "" + jinbi;
                    Gameguanli.Kongzhitai().meirijieusan.di1jinbitb2.alpha = 0;
                    this.gundongjuli += 1;
                    break;
                case 5:
                    Gameguanli.Kongzhitai().meirijieusan.di1text3.text = "解聘：" + mingzi;
                    Gameguanli.Kongzhitai().meirijieusan.di1jinbi3.text = "" + jinbi;
                    Gameguanli.Kongzhitai().meirijieusan.di1jinbitb3.alpha = 0;
                    break;
                case 6:
                    Gameguanli.Kongzhitai().meirijieusan.di1text4.text = "解聘：" + mingzi;
                    Gameguanli.Kongzhitai().meirijieusan.di1jinbi4.text = "" + jinbi;
                    Gameguanli.Kongzhitai().meirijieusan.di1jinbitb4.alpha = 0;
                    break;
                case 7:
                    Gameguanli.Kongzhitai().meirijieusan.di1text5.text = "解聘：" + mingzi;
                    Gameguanli.Kongzhitai().meirijieusan.di1jinbi5.text = "" + jinbi;
                    Gameguanli.Kongzhitai().meirijieusan.di1jinbitb5.alpha = 0;
                    break;
                case 8:
                    Gameguanli.Kongzhitai().meirijieusan.di1text6.text = "解聘：" + mingzi;
                    Gameguanli.Kongzhitai().meirijieusan.di1jinbi6.text = "" + jinbi;
                    Gameguanli.Kongzhitai().meirijieusan.di1jinbitb6.alpha = 0;
                    this.gundongjuli += 1;
                    break;
                case 9:
                    Gameguanli.Kongzhitai().meirijieusan.di1text7.text = "解聘：" + mingzi;
                    Gameguanli.Kongzhitai().meirijieusan.di1jinbi7.text = "" + jinbi;
                    Gameguanli.Kongzhitai().meirijieusan.di1jinbitb7.alpha = 0;
                    break;
                case 10:
                    Gameguanli.Kongzhitai().meirijieusan.di1text8.text = "解聘：" + mingzi;
                    Gameguanli.Kongzhitai().meirijieusan.di1jinbi8.text = "" + jinbi;
                    Gameguanli.Kongzhitai().meirijieusan.di1jinbitb8.alpha = 0;
                    break;
                case 11:
                    Gameguanli.Kongzhitai().meirijieusan.di1text9.text = "解聘：" + mingzi;
                    Gameguanli.Kongzhitai().meirijieusan.di1jinbi9.text = "" + jinbi;
                    Gameguanli.Kongzhitai().meirijieusan.di1jinbitb9.alpha = 0;
                    break;
                case 12:
                    Gameguanli.Kongzhitai().meirijieusan.di1text10.text = "解聘：" + mingzi;
                    Gameguanli.Kongzhitai().meirijieusan.di1jinbi10.text = "" + jinbi;
                    Gameguanli.Kongzhitai().meirijieusan.di1jinbitb10.alpha = 0;
                    this.gundongjuli += 1;
                    break;
                case 13:
                    Gameguanli.Kongzhitai().meirijieusan.di1text11.text = "解聘：" + mingzi;
                    Gameguanli.Kongzhitai().meirijieusan.di1jinbi11.text = "" + jinbi;
                    Gameguanli.Kongzhitai().meirijieusan.di1jinbitb11.alpha = 0;
                    break;
                case 14:
                    Gameguanli.Kongzhitai().meirijieusan.di1text12.text = "解聘：" + mingzi;
                    Gameguanli.Kongzhitai().meirijieusan.di1jinbi12.text = "" + jinbi;
                    Gameguanli.Kongzhitai().meirijieusan.di1jinbitb12.alpha = 0;
                    break;
                case 15:
                    Gameguanli.Kongzhitai().meirijieusan.di1text13.text = "解聘：" + mingzi;
                    Gameguanli.Kongzhitai().meirijieusan.di1jinbi13.text = "" + jinbi;
                    Gameguanli.Kongzhitai().meirijieusan.di1jinbitb13.alpha = 0;
                    break;
                case 16:
                    Gameguanli.Kongzhitai().meirijieusan.di1text14.text = "解聘：" + mingzi;
                    Gameguanli.Kongzhitai().meirijieusan.di1jinbi14.text = "" + jinbi;
                    Gameguanli.Kongzhitai().meirijieusan.di1jinbitb14.alpha = 0;
                    this.gundongjuli += 1;
                    break;
                case 17:
                    Gameguanli.Kongzhitai().meirijieusan.di1text15.text = "解聘：" + mingzi;
                    Gameguanli.Kongzhitai().meirijieusan.di1jinbi15.text = "" + jinbi;
                    Gameguanli.Kongzhitai().meirijieusan.di1jinbitb15.alpha = 0;
                    break;
                case 18:
                    Gameguanli.Kongzhitai().meirijieusan.di1text16.text = "解聘：" + mingzi;
                    Gameguanli.Kongzhitai().meirijieusan.di1jinbi16.text = "" + jinbi;
                    Gameguanli.Kongzhitai().meirijieusan.di1jinbitb16.alpha = 0;
                    break;
                case 19:
                    Gameguanli.Kongzhitai().meirijieusan.di1text17.text = "解聘：" + mingzi;
                    Gameguanli.Kongzhitai().meirijieusan.di1jinbi17.text = "" + jinbi;
                    Gameguanli.Kongzhitai().meirijieusan.di1jinbitb17.alpha = 0;
                    break;
                case 20:
                    Gameguanli.Kongzhitai().meirijieusan.di1text18.text = "解聘：" + mingzi;
                    Gameguanli.Kongzhitai().meirijieusan.di1jinbi18.text = "" + jinbi;
                    Gameguanli.Kongzhitai().meirijieusan.di1jinbitb18.alpha = 0;
                    this.gundongjuli += 1;
                    break;
                case 21:
                    Gameguanli.Kongzhitai().meirijieusan.di1text19.text = "解聘：" + mingzi;
                    Gameguanli.Kongzhitai().meirijieusan.di1jinbi19.text = "" + jinbi;
                    Gameguanli.Kongzhitai().meirijieusan.di1jinbitb19.alpha = 0;
                    break;
                case 22:
                    Gameguanli.Kongzhitai().meirijieusan.di1text20.text = "解聘：" + mingzi;
                    Gameguanli.Kongzhitai().meirijieusan.di1jinbi20.text = "" + jinbi;
                    Gameguanli.Kongzhitai().meirijieusan.di1jinbitb20.alpha = 0;
                    break;
                case 23:
                    Gameguanli.Kongzhitai().meirijieusan.di1text21.text = "解聘：" + mingzi;
                    Gameguanli.Kongzhitai().meirijieusan.di1jinbi21.text = "" + jinbi;
                    Gameguanli.Kongzhitai().meirijieusan.di1jinbitb21.alpha = 0;
                    break;
                case 24:
                    Gameguanli.Kongzhitai().meirijieusan.di1text22.text = "解聘：" + mingzi;
                    Gameguanli.Kongzhitai().meirijieusan.di1jinbi22.text = "" + jinbi;
                    Gameguanli.Kongzhitai().meirijieusan.di1jinbitb22.alpha = 0;
                    this.gundongjuli += 1;
                    break;
                case 25:
                    Gameguanli.Kongzhitai().meirijieusan.di1text23.text = "解聘：" + mingzi;
                    Gameguanli.Kongzhitai().meirijieusan.di1jinbi23.text = "" + jinbi;
                    Gameguanli.Kongzhitai().meirijieusan.di1jinbitb23.alpha = 0;
                    break;
                case 26:
                    Gameguanli.Kongzhitai().meirijieusan.di1text24.text = "解聘：" + mingzi;
                    Gameguanli.Kongzhitai().meirijieusan.di1jinbi24.text = "" + jinbi;
                    Gameguanli.Kongzhitai().meirijieusan.di1jinbitb24.alpha = 0;
                    break;
                case 27:
                    Gameguanli.Kongzhitai().meirijieusan.di1text25.text = "解聘：" + mingzi;
                    Gameguanli.Kongzhitai().meirijieusan.di1jinbi25.text = "" + jinbi;
                    Gameguanli.Kongzhitai().meirijieusan.di1jinbitb25.alpha = 0;
                    break;
                case 28:
                    Gameguanli.Kongzhitai().meirijieusan.di1text26.text = "解聘：" + mingzi;
                    Gameguanli.Kongzhitai().meirijieusan.di1jinbi26.text = "" + jinbi;
                    Gameguanli.Kongzhitai().meirijieusan.di1jinbitb26.alpha = 0;
                    this.gundongjuli += 1;
                    break;
                case 29:
                    Gameguanli.Kongzhitai().meirijieusan.di1text27.text = "解聘：" + mingzi;
                    Gameguanli.Kongzhitai().meirijieusan.di1jinbi27.text = "" + jinbi;
                    Gameguanli.Kongzhitai().meirijieusan.di1jinbitb27.alpha = 0;
                    break;
                case 30:
                    Gameguanli.Kongzhitai().meirijieusan.di1text28.text = "解聘：" + mingzi;
                    Gameguanli.Kongzhitai().meirijieusan.di1jinbi28.text = "" + jinbi;
                    Gameguanli.Kongzhitai().meirijieusan.di1jinbitb28.alpha = 0;
                    break;
                default:
                    Gameguanli.Kongzhitai().meirijieusan.di1text.text = "";
                    Gameguanli.Kongzhitai().meirijieusan.di1jinbi.text = "";
                    Gameguanli.Kongzhitai().meirijieusan.di1jinbitb.alpha = 0;
                    break;
            }
        }
    };
    Gameguanli.prototype.gundongjianting = function () {
        if (Gameguanli.Kongzhitai().meirijieusan.renshirongqizu.scrollV + Gameguanli.Kongzhitai().meirijieusan.renshigundong.height >= this.gundongjuli * Gameguanli.Kongzhitai().meirijieusan.renshigundong.height + Gameguanli.Kongzhitai().meirijieusan.di1wenzizu.height) {
            Gameguanli.Kongzhitai().meirijieusan.renshigundong.stopAnimation();
            Gameguanli.Kongzhitai().meirijieusan.renshirongqizu.scrollV = this.gundongjuli * Gameguanli.Kongzhitai().meirijieusan.renshigundong.height - Gameguanli.Kongzhitai().meirijieusan.renshigundong.height + Gameguanli.Kongzhitai().meirijieusan.di1wenzizu.height;
        }
    };
    //弹幕信息提示界面
    Gameguanli.prototype.danmuxinxi = function (neirong, mingzi, pingfen, touxiang) {
        var _this = this;
        if (this.danmucishu[0] == 1) {
            this.danmucishu[0] = 0;
            this.danmu1 = new Tanmujiemian();
            this.addChild(this.danmu1);
            this.danmu1.xingming.text = "" + mingzi;
            this.danmu1.danmutext.text = "" + neirong;
            this.danmu1.touxiang.source = touxiang + "_png";
            switch (pingfen) {
                case 1:
                    this.danmu1.img_haopin.source = "img_haopin1_png";
                    break;
                case 2:
                    this.danmu1.img_haopin.source = "img_haopin2_png";
                    break;
                case 3:
                    this.danmu1.img_haopin.source = "img_haopin3_png";
                    break;
                case 4:
                    this.danmu1.img_haopin.source = "img_haopin4_png";
                    break;
                case 5:
                    this.danmu1.img_haopin.source = "img_haopin5_png";
                    break;
            }
            this.danmu1.x = Gameguanli.Kongzhitai().zhujiemian.img_fandianyuanhuabg0.width + this.danmu1.width / 2;
            this.danmu1.y = Math.random() * Gameguanli.Kongzhitai().zhujiemian.img_fandianyuanhuabg0.height;
            egret.Tween.get(this.danmu1).to({ x: 0 - this.danmu1.width, y: this.danmu1.y }, 10000)
                .call(function () {
                _this.danmucishu[0] = 1;
                _this.removeChild(_this.danmu1);
            });
        }
        else if (this.danmucishu[1] == 1) {
            this.danmucishu[1] = 0;
            this.danmu2 = new Tanmujiemian();
            this.addChild(this.danmu2);
            this.danmu2.xingming.text = "" + mingzi;
            this.danmu2.danmutext.text = "" + neirong;
            this.danmu2.touxiang.source = touxiang + "_png";
            switch (pingfen) {
                case 1:
                    this.danmu2.img_haopin.source = "img_haopin1_png";
                    break;
                case 2:
                    this.danmu2.img_haopin.source = "img_haopin2_png";
                    break;
                case 3:
                    this.danmu2.img_haopin.source = "img_haopin3_png";
                    break;
                case 4:
                    this.danmu2.img_haopin.source = "img_haopin4_png";
                    break;
                case 5:
                    this.danmu2.img_haopin.source = "img_haopin5_png";
                    break;
            }
            this.danmu2.x = Gameguanli.Kongzhitai().zhujiemian.img_fandianyuanhuabg0.width + this.danmu2.width / 2;
            this.danmu2.y = Math.random() * Gameguanli.Kongzhitai().zhujiemian.img_fandianyuanhuabg0.height;
            egret.Tween.get(this.danmu2).to({ x: 0 - this.danmu2.width, y: this.danmu2.y }, 10000)
                .call(function () {
                _this.danmucishu[1] = 1;
                _this.removeChild(_this.danmu2);
            });
        }
        else if (this.danmucishu[2] == 1) {
            this.danmucishu[2] = 0;
            this.danmu3 = new Tanmujiemian();
            this.addChild(this.danmu3);
            this.danmu3.xingming.text = "" + mingzi;
            this.danmu3.danmutext.text = "" + neirong;
            this.danmu3.touxiang.source = touxiang + "_png";
            switch (pingfen) {
                case 1:
                    this.danmu3.img_haopin.source = "img_haopin1_png";
                    break;
                case 2:
                    this.danmu3.img_haopin.source = "img_haopin2_png";
                    break;
                case 3:
                    this.danmu3.img_haopin.source = "img_haopin3_png";
                    break;
                case 4:
                    this.danmu3.img_haopin.source = "img_haopin4_png";
                    break;
                case 5:
                    this.danmu3.img_haopin.source = "img_haopin5_png";
                    break;
            }
            this.danmu3.x = Gameguanli.Kongzhitai().zhujiemian.img_fandianyuanhuabg0.width + this.danmu3.width / 2;
            this.danmu3.y = Math.random() * Gameguanli.Kongzhitai().zhujiemian.img_fandianyuanhuabg0.height;
            egret.Tween.get(this.danmu3).to({ x: 0 - this.danmu3.width, y: this.danmu3.y }, 10000)
                .call(function () {
                _this.danmucishu[2] = 1;
                _this.removeChild(_this.danmu3);
            });
        }
        else if (this.danmucishu[3] == 1) {
            this.danmucishu[3] = 0;
            this.danmu4 = new Tanmujiemian();
            this.addChild(this.danmu4);
            this.danmu4.xingming.text = "" + mingzi;
            this.danmu4.danmutext.text = "" + neirong;
            this.danmu4.touxiang.source = touxiang + "_png";
            switch (pingfen) {
                case 1:
                    this.danmu4.img_haopin.source = "img_haopin1_png";
                    break;
                case 2:
                    this.danmu4.img_haopin.source = "img_haopin2_png";
                    break;
                case 3:
                    this.danmu4.img_haopin.source = "img_haopin3_png";
                    break;
                case 4:
                    this.danmu4.img_haopin.source = "img_haopin4_png";
                    break;
                case 5:
                    this.danmu4.img_haopin.source = "img_haopin5_png";
                    break;
            }
            this.danmu4.x = Gameguanli.Kongzhitai().zhujiemian.img_fandianyuanhuabg0.width + this.danmu4.width / 2;
            this.danmu4.y = Math.random() * Gameguanli.Kongzhitai().zhujiemian.img_fandianyuanhuabg0.height;
            egret.Tween.get(this.danmu4).to({ x: 0 - this.danmu4.width, y: this.danmu4.y }, 10000)
                .call(function () {
                _this.danmucishu[3] = 1;
                _this.removeChild(_this.danmu4);
            });
        }
        else if (this.danmucishu[4] == 1) {
            this.danmucishu[4] = 0;
            this.danmu5 = new Tanmujiemian();
            this.addChild(this.danmu5);
            this.danmu5.xingming.text = "" + mingzi;
            this.danmu5.danmutext.text = "" + neirong;
            this.danmu5.touxiang.source = touxiang + "_png";
            switch (pingfen) {
                case 1:
                    this.danmu5.img_haopin.source = "img_haopin1_png";
                    break;
                case 2:
                    this.danmu5.img_haopin.source = "img_haopin2_png";
                    break;
                case 3:
                    this.danmu5.img_haopin.source = "img_haopin3_png";
                    break;
                case 4:
                    this.danmu5.img_haopin.source = "img_haopin4_png";
                    break;
                case 5:
                    this.danmu5.img_haopin.source = "img_haopin5_png";
                    break;
            }
            this.danmu5.x = Gameguanli.Kongzhitai().zhujiemian.img_fandianyuanhuabg0.width + this.danmu5.width / 2;
            this.danmu5.y = Math.random() * Gameguanli.Kongzhitai().zhujiemian.img_fandianyuanhuabg0.height;
            egret.Tween.get(this.danmu5).to({ x: 0 - this.danmu5.width, y: this.danmu5.y }, 10000)
                .call(function () {
                _this.danmucishu[4] = 1;
                _this.removeChild(_this.danmu5);
            });
        }
        else if (this.danmucishu[5] == 1) {
            this.danmucishu[5] = 0;
            this.danmu6 = new Tanmujiemian();
            this.addChild(this.danmu6);
            this.danmu6.xingming.text = "" + mingzi;
            this.danmu6.danmutext.text = "" + neirong;
            this.danmu6.touxiang.source = touxiang + "_png";
            switch (pingfen) {
                case 1:
                    this.danmu6.img_haopin.source = "img_haopin1_png";
                    break;
                case 2:
                    this.danmu6.img_haopin.source = "img_haopin2_png";
                    break;
                case 3:
                    this.danmu6.img_haopin.source = "img_haopin3_png";
                    break;
                case 4:
                    this.danmu6.img_haopin.source = "img_haopin4_png";
                    break;
                case 5:
                    this.danmu6.img_haopin.source = "img_haopin5_png";
                    break;
            }
            this.danmu6.x = Gameguanli.Kongzhitai().zhujiemian.img_fandianyuanhuabg0.width + this.danmu6.width / 2;
            this.danmu6.y = Math.random() * Gameguanli.Kongzhitai().zhujiemian.img_fandianyuanhuabg0.height;
            egret.Tween.get(this.danmu6).to({ x: 0 - this.danmu6.width, y: this.danmu6.y }, 10000)
                .call(function () {
                _this.danmucishu[5] = 1;
                _this.removeChild(_this.danmu6);
            });
        }
        else if (this.danmucishu[6] == 1) {
            this.danmucishu[6] = 0;
            this.danmu7 = new Tanmujiemian();
            this.addChild(this.danmu7);
            this.danmu7.xingming.text = "" + mingzi;
            this.danmu7.danmutext.text = "" + neirong;
            this.danmu7.touxiang.source = touxiang + "_png";
            switch (pingfen) {
                case 1:
                    this.danmu7.img_haopin.source = "img_haopin1_png";
                    break;
                case 2:
                    this.danmu7.img_haopin.source = "img_haopin2_png";
                    break;
                case 3:
                    this.danmu7.img_haopin.source = "img_haopin3_png";
                    break;
                case 4:
                    this.danmu7.img_haopin.source = "img_haopin4_png";
                    break;
                case 5:
                    this.danmu7.img_haopin.source = "img_haopin5_png";
                    break;
            }
            this.danmu7.x = Gameguanli.Kongzhitai().zhujiemian.img_fandianyuanhuabg0.width + this.danmu7.width / 2;
            this.danmu7.y = Math.random() * Gameguanli.Kongzhitai().zhujiemian.img_fandianyuanhuabg0.height;
            egret.Tween.get(this.danmu7).to({ x: 0 - this.danmu7.width, y: this.danmu7.y }, 10000)
                .call(function () {
                _this.danmucishu[6] = 1;
                _this.removeChild(_this.danmu7);
            });
        }
        else if (this.danmucishu[7] == 1) {
            this.danmucishu[7] = 0;
            this.danmu8 = new Tanmujiemian();
            this.addChild(this.danmu8);
            this.danmu8.xingming.text = "" + mingzi;
            this.danmu8.danmutext.text = "" + neirong;
            this.danmu8.touxiang.source = touxiang + "_png";
            switch (pingfen) {
                case 1:
                    this.danmu8.img_haopin.source = "img_haopin1_png";
                    break;
                case 2:
                    this.danmu8.img_haopin.source = "img_haopin2_png";
                    break;
                case 3:
                    this.danmu8.img_haopin.source = "img_haopin3_png";
                    break;
                case 4:
                    this.danmu8.img_haopin.source = "img_haopin4_png";
                    break;
                case 5:
                    this.danmu8.img_haopin.source = "img_haopin5_png";
                    break;
            }
            this.danmu8.x = Gameguanli.Kongzhitai().zhujiemian.img_fandianyuanhuabg0.width + this.danmu8.width / 2;
            this.danmu8.y = Math.random() * Gameguanli.Kongzhitai().zhujiemian.img_fandianyuanhuabg0.height;
            egret.Tween.get(this.danmu8).to({ x: 0 - this.danmu8.width, y: this.danmu8.y }, 10000)
                .call(function () {
                _this.danmucishu[7] = 1;
                _this.removeChild(_this.danmu8);
            });
        }
    };
    return Gameguanli;
}(egret.DisplayObjectContainer));
__reflect(Gameguanli.prototype, "Gameguanli");
//# sourceMappingURL=Gameguanli.js.map