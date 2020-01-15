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
var Dasaodonghua = (function (_super) {
    __extends(Dasaodonghua, _super);
    function Dasaodonghua(num1, num2) {
        var _this = _super.call(this) || this;
        _this.kaishidonghua(num1, num2);
        return _this;
    }
    Dasaodonghua.prototype.kaishidonghua = function (num1, num2) {
        var _this = this;
        //创建一个显示动画的容器
        this.cunfangrongqisb = new egret.DisplayObjectContainer();
        Gameguanli.Kongzhitai().zhujiemian.addChild(this.cunfangrongqisb);
        //使用动画资源的动作名称
        this.jinbimingcheng = "saodi";
        //动画资源获取
        this.jinbijiegou = RES.getRes("saobadonghua_ske_json");
        this.jinbizhixiang = RES.getRes("saobadonghua_tex_json");
        this.jinbiziyuan = RES.getRes("saobadonghua_tex_png");
        //创建龙骨工厂
        this.jinbigongchang = dragonBones.EgretFactory.factory;
        //对动画资源进行工厂的解析
        this.jinbigongchang.parseDragonBonesData(this.jinbijiegou);
        this.jinbigongchang.parseTextureAtlasData(this.jinbizhixiang, this.jinbiziyuan);
        //对动画资源的纹理内容进行解析
        //建立骨架
        this.jinbigujia = this.jinbigongchang.buildArmature("saobagujia");
        //创建一个显示对象
        this.jinbixianshi = this.jinbigujia.display;
        //给对象添加相应的样式，并添加到舞台
        this.cunfangrongqisb.addChild(this.jinbixianshi);
        //获取坐标位置
        this.zongX = num1 + this.jinbixianshi.width / 2;
        this.zongY = num2 + this.jinbixianshi.height / 2;
        this.cunfangrongqisb.x = this.zongX;
        this.cunfangrongqisb.y = this.zongY;
        //启动骨骼动画播放
        this.jinbigujia.animation.play(this.jinbimingcheng);
        this.jinbigujia.animation.timeScale = 1.5;
        //添加到世界时钟里
        dragonBones.WorldClock.clock.add(this.jinbigujia);
        egret.Tween.get(this.cunfangrongqisb).wait(1000).call(function () {
            dragonBones.WorldClock.clock.remove(_this.jinbigujia);
            if (_this.jinbixianshi.parent) {
                _this.cunfangrongqisb.removeChild(_this.jinbixianshi);
            }
            if (_this.cunfangrongqisb.parent) {
                Gameguanli.Kongzhitai().zhujiemian.removeChild(_this.cunfangrongqisb);
            }
            _this.jinbixianshi = null;
            _this.jinbigujia = null;
        });
    };
    return Dasaodonghua;
}(egret.DisplayObjectContainer));
__reflect(Dasaodonghua.prototype, "Dasaodonghua");
//# sourceMappingURL=Dasaodonghua.js.map