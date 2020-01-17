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
        //刷新天气
        this.shuaxintianqi();
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
        //当前日期计算
        Gerenshuxing.riqi = Math.floor((Gerenshuxing.shijian / 24) % 30 + 1);
        //当前月份计算
        Gerenshuxing.yuefen = Math.floor((Gerenshuxing.shijian / 24 / 30) % 12) + 1;
        //当前第几年计算
        Gerenshuxing.nian = Math.floor(Gerenshuxing.shijian / (24 * 365)) + 1;
        this.riqi.text = Gerenshuxing.yuefen + "月" + Gerenshuxing.riqi + "日";
        this.nian.text = "第" + Gerenshuxing.nian + "年";
    };
    dingbuxinxi.prototype.shuaxindqshijian = function () {
        Gerenshuxing.xianshishijian = Gerenshuxing.shijian % 24;
        this.dqshijiante0.text = Gerenshuxing.xianshishijian + " : 00";
        if (Gerenshuxing.xianshishijian >= 6 && Gerenshuxing.xianshishijian < 18) {
            this.img_shijian.source = "img_shijianbaitian_png";
        }
        else {
            this.img_shijian.source = "img_shijianheiye_png";
        }
        switch (Gerenshuxing.xianshishijian) {
            case 6:
                this.img_dangqianshike7.alpha = 1;
                this.img_dangqianshike8.alpha = 0;
                this.img_dangqianshike9.alpha = 0;
                this.img_dangqianshike10.alpha = 0;
                this.img_dangqianshike11.alpha = 0;
                this.img_dangqianshike12.alpha = 0;
                this.img_dangqianshike13.alpha = 0;
                this.img_dangqianshike14.alpha = 0;
                this.img_dangqianshike15.alpha = 0;
                this.img_dangqianshike16.alpha = 0;
                this.img_dangqianshike17.alpha = 0;
                this.img_dangqianshike18.alpha = 0;
                break;
            case 7:
                this.img_dangqianshike7.alpha = 0;
                this.img_dangqianshike8.alpha = 1;
                this.img_dangqianshike9.alpha = 0;
                this.img_dangqianshike10.alpha = 0;
                this.img_dangqianshike11.alpha = 0;
                this.img_dangqianshike12.alpha = 0;
                this.img_dangqianshike13.alpha = 0;
                this.img_dangqianshike14.alpha = 0;
                this.img_dangqianshike15.alpha = 0;
                this.img_dangqianshike16.alpha = 0;
                this.img_dangqianshike17.alpha = 0;
                this.img_dangqianshike18.alpha = 0;
                break;
            case 8:
                this.img_dangqianshike7.alpha = 0;
                this.img_dangqianshike8.alpha = 0;
                this.img_dangqianshike9.alpha = 1;
                this.img_dangqianshike10.alpha = 0;
                this.img_dangqianshike11.alpha = 0;
                this.img_dangqianshike12.alpha = 0;
                this.img_dangqianshike13.alpha = 0;
                this.img_dangqianshike14.alpha = 0;
                this.img_dangqianshike15.alpha = 0;
                this.img_dangqianshike16.alpha = 0;
                this.img_dangqianshike17.alpha = 0;
                this.img_dangqianshike18.alpha = 0;
                break;
            case 9:
                this.img_dangqianshike7.alpha = 0;
                this.img_dangqianshike8.alpha = 0;
                this.img_dangqianshike9.alpha = 0;
                this.img_dangqianshike10.alpha = 1;
                this.img_dangqianshike11.alpha = 0;
                this.img_dangqianshike12.alpha = 0;
                this.img_dangqianshike13.alpha = 0;
                this.img_dangqianshike14.alpha = 0;
                this.img_dangqianshike15.alpha = 0;
                this.img_dangqianshike16.alpha = 0;
                this.img_dangqianshike17.alpha = 0;
                this.img_dangqianshike18.alpha = 0;
                break;
            case 10:
                this.img_dangqianshike7.alpha = 0;
                this.img_dangqianshike8.alpha = 0;
                this.img_dangqianshike9.alpha = 0;
                this.img_dangqianshike10.alpha = 0;
                this.img_dangqianshike11.alpha = 1;
                this.img_dangqianshike12.alpha = 0;
                this.img_dangqianshike13.alpha = 0;
                this.img_dangqianshike14.alpha = 0;
                this.img_dangqianshike15.alpha = 0;
                this.img_dangqianshike16.alpha = 0;
                this.img_dangqianshike17.alpha = 0;
                this.img_dangqianshike18.alpha = 0;
                break;
            case 11:
                this.img_dangqianshike7.alpha = 0;
                this.img_dangqianshike8.alpha = 0;
                this.img_dangqianshike9.alpha = 0;
                this.img_dangqianshike10.alpha = 0;
                this.img_dangqianshike11.alpha = 0;
                this.img_dangqianshike12.alpha = 1;
                this.img_dangqianshike13.alpha = 0;
                this.img_dangqianshike14.alpha = 0;
                this.img_dangqianshike15.alpha = 0;
                this.img_dangqianshike16.alpha = 0;
                this.img_dangqianshike17.alpha = 0;
                this.img_dangqianshike18.alpha = 0;
                break;
            case 12:
                this.img_dangqianshike7.alpha = 0;
                this.img_dangqianshike8.alpha = 0;
                this.img_dangqianshike9.alpha = 0;
                this.img_dangqianshike10.alpha = 0;
                this.img_dangqianshike11.alpha = 0;
                this.img_dangqianshike12.alpha = 0;
                this.img_dangqianshike13.alpha = 1;
                this.img_dangqianshike14.alpha = 0;
                this.img_dangqianshike15.alpha = 0;
                this.img_dangqianshike16.alpha = 0;
                this.img_dangqianshike17.alpha = 0;
                this.img_dangqianshike18.alpha = 0;
                break;
            case 13:
                this.img_dangqianshike7.alpha = 0;
                this.img_dangqianshike8.alpha = 0;
                this.img_dangqianshike9.alpha = 0;
                this.img_dangqianshike10.alpha = 0;
                this.img_dangqianshike11.alpha = 0;
                this.img_dangqianshike12.alpha = 0;
                this.img_dangqianshike13.alpha = 0;
                this.img_dangqianshike14.alpha = 1;
                this.img_dangqianshike15.alpha = 0;
                this.img_dangqianshike16.alpha = 0;
                this.img_dangqianshike17.alpha = 0;
                this.img_dangqianshike18.alpha = 0;
                break;
            case 14:
                this.img_dangqianshike7.alpha = 0;
                this.img_dangqianshike8.alpha = 0;
                this.img_dangqianshike9.alpha = 0;
                this.img_dangqianshike10.alpha = 0;
                this.img_dangqianshike11.alpha = 0;
                this.img_dangqianshike12.alpha = 0;
                this.img_dangqianshike13.alpha = 0;
                this.img_dangqianshike14.alpha = 0;
                this.img_dangqianshike15.alpha = 1;
                this.img_dangqianshike16.alpha = 0;
                this.img_dangqianshike17.alpha = 0;
                this.img_dangqianshike18.alpha = 0;
                break;
            case 15:
                this.img_dangqianshike7.alpha = 0;
                this.img_dangqianshike8.alpha = 0;
                this.img_dangqianshike9.alpha = 0;
                this.img_dangqianshike10.alpha = 0;
                this.img_dangqianshike11.alpha = 0;
                this.img_dangqianshike12.alpha = 0;
                this.img_dangqianshike13.alpha = 0;
                this.img_dangqianshike14.alpha = 0;
                this.img_dangqianshike15.alpha = 0;
                this.img_dangqianshike16.alpha = 1;
                this.img_dangqianshike17.alpha = 0;
                this.img_dangqianshike18.alpha = 0;
                break;
            case 16:
                this.img_dangqianshike7.alpha = 0;
                this.img_dangqianshike8.alpha = 0;
                this.img_dangqianshike9.alpha = 0;
                this.img_dangqianshike10.alpha = 0;
                this.img_dangqianshike11.alpha = 0;
                this.img_dangqianshike12.alpha = 0;
                this.img_dangqianshike13.alpha = 0;
                this.img_dangqianshike14.alpha = 0;
                this.img_dangqianshike15.alpha = 0;
                this.img_dangqianshike16.alpha = 0;
                this.img_dangqianshike17.alpha = 1;
                this.img_dangqianshike18.alpha = 0;
                break;
            case 17:
                this.img_dangqianshike7.alpha = 0;
                this.img_dangqianshike8.alpha = 0;
                this.img_dangqianshike9.alpha = 0;
                this.img_dangqianshike10.alpha = 0;
                this.img_dangqianshike11.alpha = 0;
                this.img_dangqianshike12.alpha = 0;
                this.img_dangqianshike13.alpha = 0;
                this.img_dangqianshike14.alpha = 0;
                this.img_dangqianshike15.alpha = 0;
                this.img_dangqianshike16.alpha = 0;
                this.img_dangqianshike17.alpha = 0;
                this.img_dangqianshike18.alpha = 1;
                break;
            case 18:
                this.img_dangqianshike7.alpha = 1;
                this.img_dangqianshike8.alpha = 0;
                this.img_dangqianshike9.alpha = 0;
                this.img_dangqianshike10.alpha = 0;
                this.img_dangqianshike11.alpha = 0;
                this.img_dangqianshike12.alpha = 0;
                this.img_dangqianshike13.alpha = 0;
                this.img_dangqianshike14.alpha = 0;
                this.img_dangqianshike15.alpha = 0;
                this.img_dangqianshike16.alpha = 0;
                this.img_dangqianshike17.alpha = 0;
                this.img_dangqianshike18.alpha = 0;
                break;
            case 19:
                this.img_dangqianshike7.alpha = 0;
                this.img_dangqianshike8.alpha = 1;
                this.img_dangqianshike9.alpha = 0;
                this.img_dangqianshike10.alpha = 0;
                this.img_dangqianshike11.alpha = 0;
                this.img_dangqianshike12.alpha = 0;
                this.img_dangqianshike13.alpha = 0;
                this.img_dangqianshike14.alpha = 0;
                this.img_dangqianshike15.alpha = 0;
                this.img_dangqianshike16.alpha = 0;
                this.img_dangqianshike17.alpha = 0;
                this.img_dangqianshike18.alpha = 0;
                break;
            case 20:
                this.img_dangqianshike7.alpha = 0;
                this.img_dangqianshike8.alpha = 0;
                this.img_dangqianshike9.alpha = 1;
                this.img_dangqianshike10.alpha = 0;
                this.img_dangqianshike11.alpha = 0;
                this.img_dangqianshike12.alpha = 0;
                this.img_dangqianshike13.alpha = 0;
                this.img_dangqianshike14.alpha = 0;
                this.img_dangqianshike15.alpha = 0;
                this.img_dangqianshike16.alpha = 0;
                this.img_dangqianshike17.alpha = 0;
                this.img_dangqianshike18.alpha = 0;
                break;
            case 21:
                this.img_dangqianshike7.alpha = 0;
                this.img_dangqianshike8.alpha = 0;
                this.img_dangqianshike9.alpha = 0;
                this.img_dangqianshike10.alpha = 1;
                this.img_dangqianshike11.alpha = 0;
                this.img_dangqianshike12.alpha = 0;
                this.img_dangqianshike13.alpha = 0;
                this.img_dangqianshike14.alpha = 0;
                this.img_dangqianshike15.alpha = 0;
                this.img_dangqianshike16.alpha = 0;
                this.img_dangqianshike17.alpha = 0;
                this.img_dangqianshike18.alpha = 0;
                break;
            case 22:
                this.img_dangqianshike7.alpha = 0;
                this.img_dangqianshike8.alpha = 0;
                this.img_dangqianshike9.alpha = 0;
                this.img_dangqianshike10.alpha = 0;
                this.img_dangqianshike11.alpha = 1;
                this.img_dangqianshike12.alpha = 0;
                this.img_dangqianshike13.alpha = 0;
                this.img_dangqianshike14.alpha = 0;
                this.img_dangqianshike15.alpha = 0;
                this.img_dangqianshike16.alpha = 0;
                this.img_dangqianshike17.alpha = 0;
                this.img_dangqianshike18.alpha = 0;
                break;
            case 23:
                this.img_dangqianshike7.alpha = 0;
                this.img_dangqianshike8.alpha = 0;
                this.img_dangqianshike9.alpha = 0;
                this.img_dangqianshike10.alpha = 0;
                this.img_dangqianshike11.alpha = 0;
                this.img_dangqianshike12.alpha = 1;
                this.img_dangqianshike13.alpha = 0;
                this.img_dangqianshike14.alpha = 0;
                this.img_dangqianshike15.alpha = 0;
                this.img_dangqianshike16.alpha = 0;
                this.img_dangqianshike17.alpha = 0;
                this.img_dangqianshike18.alpha = 0;
                break;
            case 0:
                this.img_dangqianshike7.alpha = 0;
                this.img_dangqianshike8.alpha = 0;
                this.img_dangqianshike9.alpha = 0;
                this.img_dangqianshike10.alpha = 0;
                this.img_dangqianshike11.alpha = 0;
                this.img_dangqianshike12.alpha = 0;
                this.img_dangqianshike13.alpha = 1;
                this.img_dangqianshike14.alpha = 0;
                this.img_dangqianshike15.alpha = 0;
                this.img_dangqianshike16.alpha = 0;
                this.img_dangqianshike17.alpha = 0;
                this.img_dangqianshike18.alpha = 0;
                break;
            case 1:
                this.img_dangqianshike7.alpha = 0;
                this.img_dangqianshike8.alpha = 0;
                this.img_dangqianshike9.alpha = 0;
                this.img_dangqianshike10.alpha = 0;
                this.img_dangqianshike11.alpha = 0;
                this.img_dangqianshike12.alpha = 0;
                this.img_dangqianshike13.alpha = 0;
                this.img_dangqianshike14.alpha = 1;
                this.img_dangqianshike15.alpha = 0;
                this.img_dangqianshike16.alpha = 0;
                this.img_dangqianshike17.alpha = 0;
                this.img_dangqianshike18.alpha = 0;
                break;
            case 2:
                this.img_dangqianshike7.alpha = 0;
                this.img_dangqianshike8.alpha = 0;
                this.img_dangqianshike9.alpha = 0;
                this.img_dangqianshike10.alpha = 0;
                this.img_dangqianshike11.alpha = 0;
                this.img_dangqianshike12.alpha = 0;
                this.img_dangqianshike13.alpha = 0;
                this.img_dangqianshike14.alpha = 0;
                this.img_dangqianshike15.alpha = 1;
                this.img_dangqianshike16.alpha = 0;
                this.img_dangqianshike17.alpha = 0;
                this.img_dangqianshike18.alpha = 0;
                break;
            case 3:
                this.img_dangqianshike7.alpha = 0;
                this.img_dangqianshike8.alpha = 0;
                this.img_dangqianshike9.alpha = 0;
                this.img_dangqianshike10.alpha = 0;
                this.img_dangqianshike11.alpha = 0;
                this.img_dangqianshike12.alpha = 0;
                this.img_dangqianshike13.alpha = 0;
                this.img_dangqianshike14.alpha = 0;
                this.img_dangqianshike15.alpha = 0;
                this.img_dangqianshike16.alpha = 1;
                this.img_dangqianshike17.alpha = 0;
                this.img_dangqianshike18.alpha = 0;
                break;
            case 4:
                this.img_dangqianshike7.alpha = 0;
                this.img_dangqianshike8.alpha = 0;
                this.img_dangqianshike9.alpha = 0;
                this.img_dangqianshike10.alpha = 0;
                this.img_dangqianshike11.alpha = 0;
                this.img_dangqianshike12.alpha = 0;
                this.img_dangqianshike13.alpha = 0;
                this.img_dangqianshike14.alpha = 0;
                this.img_dangqianshike15.alpha = 0;
                this.img_dangqianshike16.alpha = 0;
                this.img_dangqianshike17.alpha = 1;
                this.img_dangqianshike18.alpha = 0;
                break;
            case 5:
                this.img_dangqianshike7.alpha = 0;
                this.img_dangqianshike8.alpha = 0;
                this.img_dangqianshike9.alpha = 0;
                this.img_dangqianshike10.alpha = 0;
                this.img_dangqianshike11.alpha = 0;
                this.img_dangqianshike12.alpha = 0;
                this.img_dangqianshike13.alpha = 0;
                this.img_dangqianshike14.alpha = 0;
                this.img_dangqianshike15.alpha = 0;
                this.img_dangqianshike16.alpha = 0;
                this.img_dangqianshike17.alpha = 0;
                this.img_dangqianshike18.alpha = 1;
                break;
            default:
                this.img_dangqianshike7.alpha = 0;
                this.img_dangqianshike8.alpha = 0;
                this.img_dangqianshike9.alpha = 0;
                this.img_dangqianshike10.alpha = 0;
                this.img_dangqianshike11.alpha = 0;
                this.img_dangqianshike12.alpha = 0;
                this.img_dangqianshike13.alpha = 0;
                this.img_dangqianshike14.alpha = 0;
                this.img_dangqianshike15.alpha = 0;
                this.img_dangqianshike16.alpha = 0;
                this.img_dangqianshike17.alpha = 0;
                this.img_dangqianshike18.alpha = 0;
                break;
        }
    };
    dingbuxinxi.prototype.shuaxinjiankang = function () {
        this.jiankangte0.text = "" + Gerenshuxing.jiankangzhi;
    };
    dingbuxinxi.prototype.shuaxintianqi = function () {
        switch (Gerenshuxing.dangqiantianqi) {
            case 1:
                this.img_tianqi.source = "img_tianqiqing_png";
                break;
            case 2:
                this.img_tianqi.source = "img_tianqiyu_png";
                break;
            case 3:
                this.img_tianqi.source = "img_tianqixue_png";
                break;
        }
    };
    return dingbuxinxi;
}(eui.Component));
__reflect(dingbuxinxi.prototype, "dingbuxinxi", ["eui.UIComponent", "egret.DisplayObject"]);
//# sourceMappingURL=dingbuxinxi.js.map