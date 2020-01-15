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
var Tuiguangchuandan = (function (_super) {
    __extends(Tuiguangchuandan, _super);
    function Tuiguangchuandan() {
        return _super.call(this) || this;
    }
    Tuiguangchuandan.prototype.partAdded = function (partName, instance) {
        _super.prototype.partAdded.call(this, partName, instance);
    };
    Tuiguangchuandan.prototype.childrenCreated = function () {
        _super.prototype.childrenCreated.call(this);
        this.chushihuajiemian();
    };
    Tuiguangchuandan.prototype.chushihuajiemian = function () {
        //点击推广按钮时触发
        this.but_tuiguanganniu.addEventListener(egret.TouchEvent.TOUCH_TAP, this.dianjituiguanganniu, this);
    };
    Tuiguangchuandan.prototype.dianjituiguanganniu = function () {
        Weblianjie.fasongshuju("code:014", "{" + '"tuiguangid"' + ":" + '"' + this.chuandanneirong.id + '"' + "," + '"uid"' + ":" + '"' + Gerenshuxing.uid + '"' + "}");
    };
    Tuiguangchuandan.prototype.chulishujuluoji = function (yeqian, yeshu) {
        var guanlileixingleibiao = RES.getRes("yinxiaobiao_json");
        this.chuandanneirong = guanlileixingleibiao[0];
        this.tuiguangwenzi.text = this.chuandanneirong.selltext;
        this.tuiguangxiaoguowenzi.text = "+ " + this.chuandanneirong.sellachievement;
        this.chixushijianwenzi.text = this.chuandanneirong.selltime + "天";
        this.tuiguangfeiyongwenzi.text = this.chuandanneirong.sellpay;
        if (Gerenshuxing.shengyuchuandan > 0) {
            this.tuiguangshengyu.alpha = 1;
            this.tuiguangshengyuwenzi.alpha = 1;
            this.tuiguangshengyuwenzi.text = Gerenshuxing.shengyuchuandan + "天";
            this.but_tuiguanganniu.enabled = false;
            this.but_tuiguanganniu.alpha = 0;
        }
        else {
            this.tuiguangshengyu.alpha = 0;
            this.tuiguangshengyuwenzi.alpha = 0;
            this.tuiguangshengyuwenzi.text = Gerenshuxing.shengyuchuandan + "天";
            this.but_tuiguanganniu.enabled = true;
            this.but_tuiguanganniu.alpha = 1;
        }
    };
    return Tuiguangchuandan;
}(eui.Component));
__reflect(Tuiguangchuandan.prototype, "Tuiguangchuandan", ["eui.UIComponent", "egret.DisplayObject"]);
//# sourceMappingURL=Tuiguangchuandan.js.map