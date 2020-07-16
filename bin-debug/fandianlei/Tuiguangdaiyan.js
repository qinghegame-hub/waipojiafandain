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
var Tuiguangdaiyan = (function (_super) {
    __extends(Tuiguangdaiyan, _super);
    function Tuiguangdaiyan() {
        return _super.call(this) || this;
    }
    Tuiguangdaiyan.prototype.partAdded = function (partName, instance) {
        _super.prototype.partAdded.call(this, partName, instance);
    };
    Tuiguangdaiyan.prototype.childrenCreated = function () {
        _super.prototype.childrenCreated.call(this);
        this.chushihuajiemian();
    };
    Tuiguangdaiyan.prototype.chushihuajiemian = function () {
        //点击推广按钮时触发
        this.but_tuiguanganniu0.addEventListener(egret.TouchEvent.TOUCH_TAP, this.dianjituiguanganniu, this);
    };
    Tuiguangdaiyan.prototype.dianjituiguanganniu = function () {
        Gamesound.Soundkongzhi().anniuyinxiao();
        Weblianjie.fasongshuju("code:017", "{" + '"tuiguangid"' + ":" + '"' + this.chuandanneirong.id + '"' + "," + '"uid"' + ":" + '"' + Gerenshuxing.uid + '"' + "}");
    };
    Tuiguangdaiyan.prototype.chulishujuluoji = function (yeqian, yeshu) {
        var guanlileixingleibiao = Gerenshuxing.yinxiaobiao;
        this.chuandanneirong = guanlileixingleibiao[3];
        this.tuiguangwenzi0.text = this.chuandanneirong.selltext;
        this.tuiguangxiaoguowenzi0.text = "+ " + this.chuandanneirong.sellachievement;
        this.chixushijianwenzi0.text = this.chuandanneirong.selltime + "天";
        this.tuiguangfeiyongwenzi0.text = this.chuandanneirong.sellpay;
        if (Gerenshuxing.shengyudaiyan > 0) {
            this.tuiguangshengyu0.alpha = 1;
            this.tuiguangshengyuwenzi0.alpha = 1;
            this.tuiguangshengyuwenzi0.text = Gerenshuxing.shengyudaiyan + "天";
            this.but_tuiguanganniu0.enabled = false;
            this.but_tuiguanganniu0.alpha = 0;
        }
        else {
            this.tuiguangshengyu0.alpha = 0;
            this.tuiguangshengyuwenzi0.alpha = 0;
            this.tuiguangshengyuwenzi0.text = Gerenshuxing.shengyudaiyan + "天";
            this.but_tuiguanganniu0.enabled = true;
            this.but_tuiguanganniu0.alpha = 1;
        }
    };
    return Tuiguangdaiyan;
}(eui.Component));
__reflect(Tuiguangdaiyan.prototype, "Tuiguangdaiyan", ["eui.UIComponent", "egret.DisplayObject"]);
