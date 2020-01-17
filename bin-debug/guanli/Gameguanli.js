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
        _this.xiamiancishu = [1, 1, 1, 1, 1];
        _this.gerenshuju = new Gerenshuxing();
        _this.dibuui = new dibuxinxi();
        _this.dingbuui = new dingbuxinxi();
        _this.zhujiemian = new Zhujiemian();
        _this.caiPuUi = new Caipujiemian();
        _this.guanLiui = new Guanlijiemian();
        _this.zhujiemiandingbu = new Zhujiemianshangceng();
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
            this.addChild(Gameguanli.Kongzhitai().caiPuUi);
            Gameguanli.Kongzhitai().zhujiemiandingbu.but_caipu1.enabled = false;
            if (Gameguanli.Kongzhitai().guanLiui.parent) {
                this.removeChild(Gameguanli.Kongzhitai().guanLiui);
            }
            Gameguanli.Kongzhitai().zhujiemiandingbu.but_guanli1.enabled = true;
        }
        if (kaiguan == "guan" && leixing == "fandian") {
            this.removeChild(Gameguanli.Kongzhitai().caiPuUi);
            Gameguanli.Kongzhitai().zhujiemiandingbu.but_caipu1.enabled = true;
        }
        //管理界面相关
        if (kaiguan == "kai" && leixing == "guanli") {
            this.addChild(Gameguanli.Kongzhitai().guanLiui);
            Gameguanli.Kongzhitai().zhujiemiandingbu.but_caipu1.enabled = true;
            if (Gameguanli.Kongzhitai().caiPuUi.parent) {
                this.removeChild(Gameguanli.Kongzhitai().caiPuUi);
            }
            Gameguanli.Kongzhitai().zhujiemiandingbu.but_guanli1.enabled = false;
        }
        if (kaiguan == "guan" && leixing == "guanli") {
            this.removeChild(Gameguanli.Kongzhitai().guanLiui);
            Gameguanli.Kongzhitai().zhujiemiandingbu.but_guanli1.enabled = true;
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
    return Gameguanli;
}(egret.DisplayObjectContainer));
__reflect(Gameguanli.prototype, "Gameguanli");
//# sourceMappingURL=Gameguanli.js.map