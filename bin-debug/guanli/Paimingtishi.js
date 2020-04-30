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
var Paimingtishi = (function (_super) {
    __extends(Paimingtishi, _super);
    function Paimingtishi() {
        var _this = _super.call(this) || this;
        _this.chushihua();
        return _this;
    }
    Paimingtishi.prototype.chushihua = function () {
        if (Gerenshuxing.paiming <= 50) {
            this.zhenpaiming();
        }
        else {
            this.jiapaiming();
        }
    };
    Paimingtishi.prototype.jiapaiming = function () {
        var _this = this;
        var suijizengjiashu = Math.floor(Math.random() * 100) + 1;
        var jiapaimingshu = Gerenshuxing.paiming - suijizengjiashu;
        this.shangshengui = new Paimingbiangengshang();
        Gameguanli.Kongzhitai().addChild(this.shangshengui);
        this.shangshengy = this.shangshengui.paimingshangshengzu.y;
        this.xiajiangy = this.shangshengui.paimingshangshengzu0.y;
        this.shangshengtouxiang();
        this.shangshengui.paiming.text = "当前排名:" + jiapaimingshu;
        this.shangshengui.xingfuzhi.text = "" + Gerenshuxing.xingfuzhi;
        egret.Tween.get(this.shangshengui.paimingshangshengzu).to({ y: this.xiajiangy }, 2000).wait(3000);
        var suijixingfuzhi = Math.floor(Math.random() * 100) + 1;
        var suijicaoguopaiming = Math.floor(Math.random() * 10) + 1;
        suijixingfuzhi = Gerenshuxing.xingfuzhi - suijixingfuzhi;
        var jiapaimingzhi = Gerenshuxing.paiming - suijicaoguopaiming;
        this.shangshengui.paiming1.text = "当前排名:" + jiapaimingzhi;
        this.shangshengui.xingfuzhi1.text = "" + suijixingfuzhi;
        this.jiqirenleixing();
        egret.Tween.get(this.shangshengui.paimingshangshengzu0).to({ y: this.shangshengy }, 2000).wait(3000).call(function () {
            Gameguanli.Kongzhitai().removeChild(_this.shangshengui);
        });
    };
    Paimingtishi.prototype.zhenpaiming = function () {
        var _this = this;
        if (Gerenshuxing.paiming > 1 && Gerenshuxing.paihangbangshuju.length >= Gerenshuxing.paiming &&
            Gerenshuxing.xingfuzhi > parseInt(Gerenshuxing.paihangbangshuju[Gerenshuxing.paiming - 2].fenshu)
            && Gerenshuxing.paiming <= 50) {
            var jiapaimingshu = Gerenshuxing.paiming - 1;
            this.shangshengui = new Paimingbiangengshang();
            Gameguanli.Kongzhitai().addChild(this.shangshengui);
            this.shangshengy = this.shangshengui.paimingshangshengzu.y;
            this.xiajiangy = this.shangshengui.paimingshangshengzu0.y;
            this.shangshengtouxiang();
            this.shangshengui.paiming.text = "当前排名:" + jiapaimingshu;
            this.shangshengui.xingfuzhi.text = "" + Gerenshuxing.xingfuzhi;
            egret.Tween.get(this.shangshengui.paimingshangshengzu).to({ y: this.xiajiangy }, 2000).wait(3000);
            var suijixingfuzhi = Gerenshuxing.paihangbangshuju[Gerenshuxing.paiming - 2].fenshu;
            var suijicaoguopaiming = Gerenshuxing.paiming;
            this.shangshengui.paiming1.text = "当前排名:" + suijicaoguopaiming;
            this.shangshengui.xingfuzhi1.text = "" + suijixingfuzhi;
            this.zhenpaimingtouxiang();
            egret.Tween.get(this.shangshengui.paimingshangshengzu0).to({ y: this.shangshengy }, 2000).wait(3000).call(function () {
                Gameguanli.Kongzhitai().removeChild(_this.shangshengui);
                Gerenshuxing.paiming -= 1;
            });
        }
    };
    Paimingtishi.prototype.jiqirenleixing = function () {
        var npcbiao = RES.getRes("gukehanhuabiao_json");
        var suijinpc = Math.floor(Math.random() * npcbiao.length);
        var wenli = npcbiao[suijinpc].gktouxiang + "_png";
        var touxiang = new egret.Bitmap();
        touxiang.texture = RES.getRes(wenli);
        touxiang.x = 0;
        touxiang.y = 0;
        touxiang.width = this.shangshengui.xiangpianzu1.width;
        touxiang.height = this.shangshengui.xiangpianzu1.height;
        this.shangshengui.xiangpianzu1.addChild(touxiang);
    };
    Paimingtishi.prototype.shangshengtouxiang = function () {
        var youbiaoLoader = new egret.ImageLoader;
        /*if(Gerenshuxing.touxiangbaocunzhuangtai == true){
            imgLoader.load(Gerenshuxing.touxiang);
            imgLoader.once(egret.Event.COMPLETE, this.xianshigerentouxiang, this);
        }else{
            imgLoader.load("http://192.168.1.2/res/resource/resource/wxtx/undefined.png");
            imgLoader.once(egret.Event.COMPLETE, this.xianshigerentouxiang, this);
        }*/
        youbiaoLoader.load(Gerenshuxing.touxiang);
        youbiaoLoader.once(egret.Event.COMPLETE, this.shangshengxianshitouxiang, this);
    };
    Paimingtishi.prototype.shangshengxianshitouxiang = function (evt) {
        if (evt.currentTarget.data) {
            //			egret.log("加载头像成功: " + evt.currentTarget.data);
            var texture = new egret.Texture();
            texture.bitmapData = evt.currentTarget.data;
            var head = new egret.Bitmap(texture);
            head.x = 0;
            head.y = 0;
            head.width = this.shangshengui.xiangpianzu.width;
            head.height = this.shangshengui.xiangpianzu.height;
            this.shangshengui.xiangpianzu.addChild(head);
        }
    };
    Paimingtishi.prototype.zhenpaimingtouxiang = function () {
        var youbiaoLoader = new egret.ImageLoader;
        /*if(Gerenshuxing.touxiangbaocunzhuangtai == true){
            imgLoader.load(Gerenshuxing.touxiang);
            imgLoader.once(egret.Event.COMPLETE, this.xianshigerentouxiang, this);
        }else{
            imgLoader.load("http://192.168.1.2/res/resource/resource/wxtx/undefined.png");
            imgLoader.once(egret.Event.COMPLETE, this.xianshigerentouxiang, this);
        }*/
        var touxiangdizhi = Gerenshuxing.paihangbangshuju[Gerenshuxing.paiming - 2].url;
        youbiaoLoader.load(touxiangdizhi);
        youbiaoLoader.once(egret.Event.COMPLETE, this.xianshizhentouxiang, this);
    };
    Paimingtishi.prototype.xianshizhentouxiang = function (evt) {
        if (evt.currentTarget.data) {
            //			egret.log("加载头像成功: " + evt.currentTarget.data);
            var texture = new egret.Texture();
            texture.bitmapData = evt.currentTarget.data;
            var head = new egret.Bitmap(texture);
            head.x = 0;
            head.y = 0;
            head.width = this.shangshengui.xiangpianzu1.width;
            head.height = this.shangshengui.xiangpianzu1.height;
            this.shangshengui.xiangpianzu1.addChild(head);
        }
    };
    return Paimingtishi;
}(egret.DisplayObjectContainer));
__reflect(Paimingtishi.prototype, "Paimingtishi");
//# sourceMappingURL=Paimingtishi.js.map