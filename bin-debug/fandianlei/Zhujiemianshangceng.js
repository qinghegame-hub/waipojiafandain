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
var Zhujiemianshangceng = (function (_super) {
    __extends(Zhujiemianshangceng, _super);
    function Zhujiemianshangceng() {
        return _super.call(this) || this;
    }
    Zhujiemianshangceng.prototype.partAdded = function (partName, instance) {
        _super.prototype.partAdded.call(this, partName, instance);
    };
    Zhujiemianshangceng.prototype.childrenCreated = function () {
        _super.prototype.childrenCreated.call(this);
        this.anniuchuli();
    };
    Zhujiemianshangceng.prototype.anniuchuli = function () {
        this.chushihua();
        //点击菜谱按钮时，触发
        this.but_caipu1.addEventListener(egret.TouchEvent.TOUCH_TAP, this.openCaipu, this);
        //点击管理按钮时，触发
        this.but_guanli1.addEventListener(egret.TouchEvent.TOUCH_TAP, this.openGuanli, this);
        //点击食材添加按钮时触发
        this.but_tianjia.addEventListener(egret.TouchEvent.TOUCH_TAP, this.dianjishicai, this);
        //点击经营报表按钮时，触发
        this.but_jingyinbaobiao1.addEventListener(egret.TouchEvent.TOUCH_TAP, this.dianjijingying, this);
        //点击留言按钮时触发
        this.but_liuyan1.addEventListener(egret.TouchEvent.TOUCH_TAP, this.dianjiliuyan, this);
        //营销提示显示
        this.yinxiaotishixianshi();
        //每日任务显示
        //		this.meirirenwuchushihua();
    };
    /*public meirirenwuchushihua(){
        if(Gerenshuxing.guideuiyindao > 21){
            this.richengzu.alpha = 1;
            this.richenganniu.enabled = true;
            this.richenganniu.addEventListener(egret.TouchEvent.TOUCH_TAP,this.openmeirirenwu,this);
            if(Gerenshuxing.meirirenwuone[3] == "0" || Gerenshuxing.meirirenwutwo[3] == "0" || Gerenshuxing.meirirenwutre[3] == "0"
            || Gerenshuxing.meirirenwufor[3] == "0"){
                this.richenghongdian.alpha = 1;
            }else{
                this.richenghongdian.alpha = 0;
            }
        }else{
            this.richengzu.alpha = 0;
            this.richenganniu.enabled = false;
            this.richenghongdian.alpha = 0;
        }
    }*/
    /*
    打开每日任务界面
    */
    /*public openmeirirenwu(){
        Gamesound.Soundkongzhi().anniuyinxiao();
        let renwujiemian:Meirirenwujiemian = new Meirirenwujiemian();
        this.addChild(renwujiemian);
        renwujiemian.guanbi();
        renwujiemian.chushihua();
    }*/
    Zhujiemianshangceng.prototype.openCaipu = function () {
        Gamesound.Soundkongzhi().anniuyinxiao();
        Gameguanli.Kongzhitai().caipujiemian("fandian", "kai");
    };
    Zhujiemianshangceng.prototype.openGuanli = function () {
        Gamesound.Soundkongzhi().anniuyinxiao();
        Gameguanli.Kongzhitai().caipujiemian("guanli", "kai");
    };
    Zhujiemianshangceng.prototype.dianjijingying = function () {
        Gamesound.Soundkongzhi().anniuyinxiao();
        Gameguanli.Kongzhitai().caipujiemian("jingying", "kai");
    };
    Zhujiemianshangceng.prototype.dianjishicai = function () {
        Gamesound.Soundkongzhi().anniuyinxiao();
        Gameguanli.Kongzhitai().changjingrukou("caishichang", "kai");
    };
    Zhujiemianshangceng.prototype.dianjiliuyan = function () {
        Gamesound.Soundkongzhi().anniuyinxiao();
        Gameguanli.Kongzhitai().caipujiemian("liuyan", "kai");
    };
    Zhujiemianshangceng.prototype.chushihua = function () {
        this.shicaiwenzi.text = "" + Gerenshuxing.yongyouyuanliao;
        this.weishengwenzi.text = "" + Gerenshuxing.zzweishengzhi;
        this.shicaiwenzitixing();
    };
    Zhujiemianshangceng.prototype.shicaiwenzitixing = function () {
        if (Gerenshuxing.yongyouyuanliao >= 100) {
            this.img_shicaibuzu.alpha = 0;
        }
        else {
            this.img_shicaibuzu.alpha = 1;
        }
    };
    Zhujiemianshangceng.prototype.yinxiaotishixianshi = function () {
        if (Gameguanli.Kongzhitai().zhujiemiandingbu.parent) {
            var xianshiyinxiaozu = [];
            if (Gerenshuxing.dibaokeliushijian > 0) {
                xianshiyinxiaozu.push("img_meishijie_png");
            }
            if (Gerenshuxing.shengyuchuandan > 0) {
                xianshiyinxiaozu.push("img_chuandanbiaozhi_png");
            }
            if (Gerenshuxing.shengyudianshi > 0) {
                xianshiyinxiaozu.push("img_dianshibiaozhi_png");
            }
            if (Gerenshuxing.shengyupinglun > 0) {
                xianshiyinxiaozu.push("img_pinglunbiaozhi_png");
            }
            if (Gerenshuxing.shengyudaiyan > 0) {
                xianshiyinxiaozu.push("img_daiyanbiaozhi_png");
            }
            if (xianshiyinxiaozu[0] != undefined) {
                this.yinxiaoicon.source = xianshiyinxiaozu[0];
            }
            else {
                this.yinxiaoicon.source = "";
            }
            if (xianshiyinxiaozu[1] != undefined) {
                this.yinxiaoicon0.source = xianshiyinxiaozu[1];
            }
            else {
                this.yinxiaoicon0.source = "";
            }
            if (xianshiyinxiaozu[2] != undefined) {
                this.yinxiaoicon1.source = xianshiyinxiaozu[2];
            }
            else {
                this.yinxiaoicon1.source = "";
            }
            if (xianshiyinxiaozu[3] != undefined) {
                this.yinxiaoicon2.source = xianshiyinxiaozu[3];
            }
            else {
                this.yinxiaoicon2.source = "";
            }
            if (xianshiyinxiaozu[4] != undefined) {
                this.yinxiaoicon3.source = xianshiyinxiaozu[4];
            }
            else {
                this.yinxiaoicon3.source = "";
            }
        }
    };
    return Zhujiemianshangceng;
}(eui.Component));
__reflect(Zhujiemianshangceng.prototype, "Zhujiemianshangceng", ["eui.UIComponent", "egret.DisplayObject"]);
