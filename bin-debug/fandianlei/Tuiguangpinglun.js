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
var Tuiguangpinglun = (function (_super) {
    __extends(Tuiguangpinglun, _super);
    function Tuiguangpinglun() {
        return _super.call(this) || this;
    }
    Tuiguangpinglun.prototype.partAdded = function (partName, instance) {
        _super.prototype.partAdded.call(this, partName, instance);
    };
    Tuiguangpinglun.prototype.childrenCreated = function () {
        _super.prototype.childrenCreated.call(this);
        this.chushihuajiemian();
    };
    Tuiguangpinglun.prototype.chushihuajiemian = function () {
        //点击推广按钮时触发
        this.but_tuiguanganniu1.addEventListener(egret.TouchEvent.TOUCH_TAP, this.dianjituiguanganniu, this);
    };
    Tuiguangpinglun.prototype.dianjituiguanganniu = function () {
        Weblianjie.fasongshuju("code:016", "{" + '"tuiguangid"' + ":" + '"' + this.chuandanneirong.id + '"' + "," + '"uid"' + ":" + '"' + Gerenshuxing.uid + '"' + "}");
    };
    Tuiguangpinglun.prototype.chulishujuluoji = function (yeqian, yeshu) {
        var guanlileixingleibiao = RES.getRes("yinxiaobiao_json");
        this.chuandanneirong = guanlileixingleibiao[2];
        this.tuiguangwenzi1.text = this.chuandanneirong.selltext;
        this.tuiguangxiaoguowenzi1.text = "+ " + this.chuandanneirong.sellachievement;
        this.chixushijianwenzi1.text = this.chuandanneirong.selltime + "天";
        this.tuiguangfeiyongwenzi1.text = this.chuandanneirong.sellpay;
        if (Gerenshuxing.shengyupinglun > 0) {
            this.tuiguangshengyu1.alpha = 1;
            this.tuiguangshengyuwenzi1.alpha = 1;
            this.tuiguangshengyuwenzi1.text = Gerenshuxing.shengyupinglun + "天";
            this.but_tuiguanganniu1.enabled = false;
            this.but_tuiguanganniu1.alpha = 0;
        }
        else {
            this.tuiguangshengyu1.alpha = 0;
            this.tuiguangshengyuwenzi1.alpha = 0;
            this.tuiguangshengyuwenzi1.text = Gerenshuxing.shengyupinglun + "天";
            this.but_tuiguanganniu1.enabled = true;
            this.but_tuiguanganniu1.alpha = 1;
        }
    };
    return Tuiguangpinglun;
}(eui.Component));
__reflect(Tuiguangpinglun.prototype, "Tuiguangpinglun", ["eui.UIComponent", "egret.DisplayObject"]);
//# sourceMappingURL=Tuiguangpinglun.js.map