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
var Zhandoutexiaomokuai = (function (_super) {
    __extends(Zhandoutexiaomokuai, _super);
    function Zhandoutexiaomokuai(mingcheng, gujiamingcheng, ziyuan1, ziyuan2, ziyuan3, duixiang, zuobiaox, zuobiaoy) {
        var _this = _super.call(this) || this;
        _this.chushihua(mingcheng, gujiamingcheng, ziyuan1, ziyuan2, ziyuan3, duixiang, zuobiaox, zuobiaoy);
        return _this;
    }
    Zhandoutexiaomokuai.prototype.chushihua = function (mingcheng, gujiamingcheng, ziyuan1, ziyuan2, ziyuan3, duixiang, zuobiaox, zuobiaoy) {
        //使用动画资源的动作名称
        this.dongzuomingcheng = mingcheng;
        //动画资源获取
        this.skeletonData = RES.getRes(ziyuan1); //ske
        this.textureData = RES.getRes(ziyuan2); //tex
        this.texture = RES.getRes(ziyuan3); //png
        //创建龙骨工厂
        this.donghuagongchang = dragonBones.EgretFactory.factory;
        //对动画资源进行工厂的解析
        this.donghuagongchang.parseDragonBonesData(this.skeletonData);
        this.donghuagongchang.parseTextureAtlasData(this.textureData, this.texture);
        //对动画资源的纹理内容进行解析
        //建立骨架
        this.dongzuoshiti = this.donghuagongchang.buildArmature(gujiamingcheng); //骨架名字
        //创建一个显示对象
        this.donghuaxianshi = this.dongzuoshiti.display;
        //创建一个显示容器
        this.donghuaxinashirongqi = new egret.DisplayObjectContainer();
        this.addChild(this.donghuaxinashirongqi);
        //给对象添加相应的样式，并添加到舞台
        this.donghuaxinashirongqi.addChild(this.donghuaxianshi);
        //获取坐标位置
        this.donghuaxinashirongqi.x = zuobiaox;
        this.donghuaxinashirongqi.y = zuobiaoy;
        //设置动画大小
        //		this.dongzuoshiti.scale  = 40;
        //启动骨骼动画播放
        this.dongzuoshiti.animation.play(this.dongzuomingcheng, 1);
        //监听龙骨动画是否播放完毕
        this.dongzuoshiti.addEventListener(egret.Event.LOOP_COMPLETE, this.jinengbofangwanbi, this);
        //添加到世界时钟里
        dragonBones.WorldClock.clock.add(this.dongzuoshiti);
        //改变动画的播放速度
        dragonBones.WorldClock.clock.timeScale = 1;
    };
    Zhandoutexiaomokuai.prototype.jinengbofangwanbi = function () {
        dragonBones.WorldClock.clock.remove(this.dongzuoshiti);
        if (this.donghuaxinashirongqi.parent) {
            this.removeChild(this.donghuaxinashirongqi);
        }
        this.donghuaxianshi = null;
        this.dongzuoshiti = null;
    };
    return Zhandoutexiaomokuai;
}(egret.DisplayObjectContainer));
__reflect(Zhandoutexiaomokuai.prototype, "Zhandoutexiaomokuai");
