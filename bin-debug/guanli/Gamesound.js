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
var Gamesound = (function (_super) {
    __extends(Gamesound, _super);
    function Gamesound() {
        var _this = _super.call(this) || this;
        //音效控制器
        _this.yinxiao = true;
        //背景音控制器
        _this.beijingyin = true;
        return _this;
    }
    Gamesound.Soundkongzhi = function () {
        if (Gamesound.soundkongzhi == null) {
            Gamesound.soundkongzhi = new Gamesound();
        }
        return Gamesound.soundkongzhi;
    };
    /*
    普通按钮音效
    */
    Gamesound.prototype.anniuyinxiao = function () {
        if (Gamesound.Soundkongzhi().yinxiao == true) {
            this.anniuyinxiaobofang = RES.getRes("anniu_mp3");
            this.anniudianjibofang = this.anniuyinxiaobofang.play(0, 1);
        }
    };
    /*
    背景音效
    */
    Gamesound.prototype.beijingyinxiao = function () {
        if (Gamesound.Soundkongzhi().beijingyin == true) {
            this.beijingyinxiaobofang = RES.getRes("beijingyin_mp3");
            this.beijingdianjibofang = this.beijingyinxiaobofang.play(0, -1);
        }
    };
    /*
    控制播放和暂停
    */
    Gamesound.prototype.bofangzanting = function (zhuangtai) {
        if (zhuangtai == "kai") {
            if (this.anniudianjibofang) {
                this.anniudianjibofang.stop();
                this.anniudianjibofang = null;
            }
            if (this.beijingdianjibofang) {
                this.beijingdianjibofang.stop();
                this.beijingdianjibofang = null;
            }
            Gamesound.Soundkongzhi().yinxiao = true;
            Gamesound.Soundkongzhi().beijingyin = true;
            this.beijingyinxiao();
        }
        else if (zhuangtai == "guan") {
            if (this.anniudianjibofang) {
                this.anniudianjibofang.stop();
                this.anniudianjibofang = null;
            }
            if (this.beijingdianjibofang) {
                this.beijingdianjibofang.stop();
                this.beijingdianjibofang = null;
            }
            Gamesound.Soundkongzhi().yinxiao = false;
            Gamesound.Soundkongzhi().beijingyin = false;
            this.beijingyinxiao();
        }
    };
    return Gamesound;
}(egret.DisplayObjectContainer));
__reflect(Gamesound.prototype, "Gamesound");
