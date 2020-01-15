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
var dingbuxinxi = (function (_super) {
    __extends(dingbuxinxi, _super);
    function dingbuxinxi() {
        return _super.call(this) || this;
    }
    dingbuxinxi.prototype.partAdded = function (partName, instance) {
        _super.prototype.partAdded.call(this, partName, instance);
    };
    dingbuxinxi.prototype.childrenCreated = function () {
        _super.prototype.childrenCreated.call(this);
        this.dingbuchushihua(); //初始化顶部数值
    };
    dingbuxinxi.prototype.dingbuchushihua = function () {
        //刷新幸福值
        this.shuaxinxingfu();
        //刷新开心值
        this.shuaxinkaixin();
        //刷新家庭值
        this.shuaxinjiating();
        //刷新金币值
        this.shuaxinjinbi();
        //刷新日期值
        this.shuaxinriqi();
        //刷新当前时间
        this.shuaxindqshijian();
        //刷新健康值
        this.shuaxinjiankang();
    };
    dingbuxinxi.prototype.shuaxinxingfu = function () {
        this.xingfute0.text = "" + Gerenshuxing.xingfuzhi;
    };
    dingbuxinxi.prototype.shuaxinkaixin = function () {
        this.kaixinte0.text = "" + Gerenshuxing.kaixinzhi;
    };
    dingbuxinxi.prototype.shuaxinjiating = function () {
        this.jiatingte0.text = "" + Gerenshuxing.jiatingzhi;
    };
    dingbuxinxi.prototype.shuaxinjinbi = function () {
        this.jinbite0.text = "" + Gerenshuxing.jinbizhi;
    };
    dingbuxinxi.prototype.shuaxinriqi = function () {
        this.riqite0.text = "" + Gerenshuxing.yuefen;
    };
    dingbuxinxi.prototype.shuaxindqshijian = function () {
        this.dqshijiante0.text = "" + Gerenshuxing.shijian;
    };
    dingbuxinxi.prototype.shuaxinjiankang = function () {
        this.jiankangte0.text = "" + Gerenshuxing.jiankangzhi;
    };
    return dingbuxinxi;
}(eui.Component));
__reflect(dingbuxinxi.prototype, "dingbuxinxi", ["eui.UIComponent", "egret.DisplayObject"]);
//# sourceMappingURL=dingbuxinxi.js.map