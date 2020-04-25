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
        return _super.call(this) || this;
    }
    Paimingtishi.chushihua = function () {
        if (Gerenshuxing.paiming >= 100) {
            this.jiapaiming();
        }
        else {
            this.zhenpaiming();
        }
    };
    Paimingtishi.jiapaiming = function () {
        var _this = this;
        var suijizengjiashu = Math.floor(Math.random() * 100) + 1;
        var jiapaimingshu = Gerenshuxing.paiming - suijizengjiashu;
        this.shangshengui = new Paimingbiangengshang();
        Gameguanli.Kongzhitai().addChild(this.shangshengui);
        this.shangshengtouxiang();
        this.shangshengui.paiming.text = "当前排名:" + jiapaimingshu;
        this.shangshengui.xingfuzhi.text = "" + Gerenshuxing.xingfuzhi;
        this.shangshengui.x = Gameguanli.Kongzhitai().width / 2 - (this.shangshengui.width / 1.5);
        this.shangshengui.y = Gameguanli.Kongzhitai().height / 11 * 5 - this.shangshengui.height;
        egret.Tween.get(this.shangshengui).to({ y: Gameguanli.Kongzhitai().height / 11 * 4 - this.shangshengui.height }, 2000).wait(3000).call(function () {
            Gameguanli.Kongzhitai().removeChild(_this.shangshengui);
        });
        var suijixingfuzhi = Math.floor(Math.random() * 100) + 1;
        var suijicaoguopaiming = Math.floor(Math.random() * 10) + 1;
        suijixingfuzhi = Gerenshuxing.xingfuzhi - suijixingfuzhi;
        var jiapaimingzhi = Gerenshuxing.paiming - suijicaoguopaiming;
        this.xiajiangui = new Paimingbiangengxia();
        Gameguanli.Kongzhitai().addChild(this.xiajiangui);
        //		this.xiajiangtouxiang();
        this.xiajiangui.paiming0.text = "当前排名:" + jiapaimingzhi;
        this.xiajiangui.xingfuzhi0.text = "" + suijixingfuzhi;
        this.xiajiangui.x = Gameguanli.Kongzhitai().width / 2 - (this.xiajiangui.width / 1.5);
        this.xiajiangui.y = Gameguanli.Kongzhitai().height / 11 * 4 - this.xiajiangui.height;
        egret.Tween.get(this.xiajiangui).to({ y: Gameguanli.Kongzhitai().height / 11 * 5 - this.xiajiangui.height }, 2000).wait(3000).call(function () {
            Gameguanli.Kongzhitai().removeChild(_this.xiajiangui);
        });
    };
    Paimingtishi.zhenpaiming = function () {
    };
    Paimingtishi.shangshengtouxiang = function () {
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
    Paimingtishi.shangshengxianshitouxiang = function (evt) {
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
    return Paimingtishi;
}(egret.DisplayObjectContainer));
__reflect(Paimingtishi.prototype, "Paimingtishi");
//# sourceMappingURL=Paimingtishi.js.map