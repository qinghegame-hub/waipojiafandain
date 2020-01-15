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
var Jinbidonghua = (function (_super) {
    __extends(Jinbidonghua, _super);
    function Jinbidonghua(num1) {
        var _this = _super.call(this) || this;
        _this.kaishidonghua(num1);
        return _this;
    }
    Jinbidonghua.prototype.kaishidonghua = function (num1) {
        var _this = this;
        //创建一个显示动画的容器
        this.cunfangrongqi = new egret.DisplayObjectContainer();
        Gameguanli.Kongzhitai().zhujiemian.addChild(this.cunfangrongqi);
        //使用动画资源的动作名称
        this.jinbimingcheng = "tiaodong";
        //动画资源获取
        this.jinbijiegou = RES.getRes("getjinbi_ske_json");
        this.jinbizhixiang = RES.getRes("getjinbi_tex_json");
        this.jinbiziyuan = RES.getRes("getjinbi_tex_png");
        //创建龙骨工厂
        this.jinbigongchang = dragonBones.EgretFactory.factory;
        //对动画资源进行工厂的解析
        this.jinbigongchang.parseDragonBonesData(this.jinbijiegou);
        this.jinbigongchang.parseTextureAtlasData(this.jinbizhixiang, this.jinbiziyuan);
        //对动画资源的纹理内容进行解析
        //建立骨架
        this.jinbigujia = this.jinbigongchang.buildArmature("jinbitiaodong");
        //创建一个显示对象
        this.jinbixianshi = this.jinbigujia.display;
        //给对象添加相应的样式，并添加到舞台
        this.cunfangrongqi.addChild(this.jinbixianshi);
        //获取坐标位置
        this.zongX = Gameguanli.Kongzhitai().zhujiemian.img_fandianyuanhuabg0.width;
        this.zongY = Gameguanli.Kongzhitai().zhujiemian.img_fandianyuanhuabg0.height;
        this.cunfangrongqi.x = this.zongX * 0.352 - this.jinbixianshi.width / 2;
        this.cunfangrongqi.y = this.zongY * 0.722 - this.jinbixianshi.height / 2;
        var dongzuosuoyin = 0;
        //启动骨骼动画播放
        this.jinbigujia.animation.play(this.jinbimingcheng);
        //添加到世界时钟里
        dragonBones.WorldClock.clock.add(this.jinbigujia);
        //创建头顶的显示金币加成文字内容
        this.jinbinumber = new Jinbiwenben();
        this.cunfangrongqi.addChild(this.jinbinumber);
        this.jinbinumber.x = this.jinbixianshi.x + this.jinbixianshi.width / 2;
        this.jinbinumber.y = this.jinbixianshi.y - this.jinbixianshi.height / 2 + this.jinbinumber.height / 5 * 1;
        this.jinbinumber.wenzineirong.text = "+ " + num1;
        //给显示对象添加缓动动画
        egret.Tween.get(this.cunfangrongqi).wait(1000).to({ x: this.cunfangrongqi.x, y: this.cunfangrongqi.y - this.zongY * 0.08 }, 2000)
            .call(function () {
            dragonBones.WorldClock.clock.remove(_this.jinbigujia);
            if (_this.jinbixianshi.parent) {
                _this.cunfangrongqi.removeChild(_this.jinbixianshi);
            }
            if (_this.jinbinumber.parent) {
                _this.cunfangrongqi.removeChild(_this.jinbinumber);
            }
            if (_this.cunfangrongqi.parent) {
                Gameguanli.Kongzhitai().zhujiemian.removeChild(_this.cunfangrongqi);
            }
            _this.jinbixianshi = null;
            _this.jinbigujia = null;
        });
    };
    return Jinbidonghua;
}(egret.DisplayObjectContainer));
__reflect(Jinbidonghua.prototype, "Jinbidonghua");
//# sourceMappingURL=Jinbidonghua.js.map