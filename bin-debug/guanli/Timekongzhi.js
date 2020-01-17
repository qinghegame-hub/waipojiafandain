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
var Timekongzhi = (function (_super) {
    __extends(Timekongzhi, _super);
    function Timekongzhi() {
        var _this = _super.call(this) || this;
        console.log("进入倒计时");
        _this.shijianjisuan();
        return _this;
    }
    Timekongzhi.prototype.shijianjisuan = function () {
        var youxishijiandingshi = new egret.Timer(1000, 0);
        youxishijiandingshi.addEventListener(egret.TimerEvent.TIMER, this.kaishijisuan, this);
        youxishijiandingshi.start();
    };
    Timekongzhi.prototype.kaishijisuan = function () {
        var dangqianshijian = (new Date()).valueOf();
        Weblianjie.fasongshuju("code:028", "{" + '"shijian"' + ":" + '"1"' + "," + '"uid"' + ":" + '"' + Gerenshuxing.uid + '"' + "}");
    };
    return Timekongzhi;
}(egret.DisplayObjectContainer));
__reflect(Timekongzhi.prototype, "Timekongzhi");
//# sourceMappingURL=Timekongzhi.js.map