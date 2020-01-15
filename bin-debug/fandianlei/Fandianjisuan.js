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
var Fandianjisuan = (function (_super) {
    __extends(Fandianjisuan, _super);
    function Fandianjisuan() {
        return _super.call(this) || this;
    }
    Fandianjisuan.chushihuajisuan = function (opendingshi) {
        var yuangongbiao = RES.getRes("yuangongbiao_json");
        for (var y = 0; y < yuangongbiao.length; y++) {
            if (yuangongbiao[y].id == Gerenshuxing.shiyongyuangong[y]) {
                if (yuangongbiao[y].skill == 5) {
                    Gerenshuxing.chushishangcaisudu += yuangongbiao[y].skillparameter;
                }
                if (yuangongbiao[y].skill == 6) {
                    Gerenshuxing.weishengzhi += yuangongbiao[y].skillparameter;
                }
                if (yuangongbiao[y].skill == 8) {
                    Gerenshuxing.anbaozhi += yuangongbiao[y].skillparameter;
                }
                if (yuangongbiao[y].skill == 7) {
                    Gerenshuxing.yuanliaoxiaohao += yuangongbiao[y].skillparameter;
                }
            }
        }
        //当前客容量计算
        var jiajubiaobianli = RES.getRes("jiajubiao_json");
        for (var i = 0; i < jiajubiaobianli.length; i++) {
            if (jiajubiaobianli[i].id == Gerenshuxing.usexiaochao || jiajubiaobianli[i].id == Gerenshuxing.usehuoguo
                || jiajubiaobianli[i].id == Gerenshuxing.usexiaochi || jiajubiaobianli[i].id == Gerenshuxing.usezaocan) {
                Gerenshuxing.kerongliang += parseInt(jiajubiaobianli[i].onkeliushu);
            }
            for (var j = 0; j < Gerenshuxing.jiesuojiaju.length; j++) {
                if (jiajubiaobianli[i].id == Gerenshuxing.jiesuojiaju[j]) {
                    Gerenshuxing.kerongliang = Gerenshuxing.kerongliang + parseInt(jiajubiaobianli[i].keliushu);
                }
            }
        }
        //       console.log("当前客容量：" +Fandianjisuan.rongkeliang);
        //当前客流量计算
        var yinxiaobiao = RES.getRes("yinxiaobiao_json");
        if (Gerenshuxing.shengyuchuandan > 0) {
            Gerenshuxing.keliuliang += parseInt(yinxiaobiao[0].sellachievement);
        }
        if (Gerenshuxing.shengyudianshi > 0) {
            Gerenshuxing.keliuliang += parseInt(yinxiaobiao[1].sellachievement);
        }
        //        console.log("当前客流量：" +Fandianjisuan.keliuliang);
        //当前口碑值计算
        if (Gerenshuxing.shengyupinglun > 0) {
            Gerenshuxing.koubeizhi += parseInt(yinxiaobiao[2].sellachievement);
        }
        if (Gerenshuxing.shengyudaiyan > 0) {
            Gerenshuxing.koubeizhi += parseInt(yinxiaobiao[3].sellachievement);
        }
        //        console.log("当前口碑值：" +Fandianjisuan.koubeizhi);
        //推送数据进行计算
        //设定一个循环定时器
        var xunhuankaishi = new egret.Timer(Gerenshuxing.jiesuantime, 1);
        xunhuankaishi.start();
        xunhuankaishi.addEventListener(egret.TimerEvent.TIMER_COMPLETE, Fandianjisuan.jisuanfandianshuju, this);
    };
    Fandianjisuan.jisuanfandianshuju = function () {
        Fandianjisuan.chushihuajisuan();
        this.jinlairenshu = 0;
        var zuidakeren = 0;
        if (Gerenshuxing.keliuliang <= Gerenshuxing.kerongliang) {
            zuidakeren = Math.floor(Gerenshuxing.keliuliang / 10);
        }
        else {
            zuidakeren = Math.floor(Gerenshuxing.kerongliang / 10);
        }
        for (var i = 0; i < zuidakeren; i++) {
            var shuiji = Math.floor(Math.random() * 100);
            if (shuiji <= Gerenshuxing.koubeizhi) {
                this.jinlairenshu += 1;
            }
        }
        console.log("进来人数：" + this.jinlairenshu);
        Fandianjisuan.chuangjianrenwu();
    };
    Fandianjisuan.chuangjianrenwu = function () {
        if (this.jinlairenshu > 0) {
            var yanchisuiji = Math.random() * 10000 + 1;
            var dingshichuren = new egret.Timer(yanchisuiji, 1);
            dingshichuren.addEventListener(egret.TimerEvent.TIMER, this.kaishishengchengjuese, this);
            dingshichuren.start();
        }
    };
    Fandianjisuan.kaishishengchengjuese = function () {
        this.jinlairenshu = this.jinlairenshu - 1;
        var caipuliebiao = RES.getRes("shipubiao_json");
        var gukexuqiucai;
        var caipinming;
        var xuqiucaiid = Math.floor(Math.random() * Gerenshuxing.jiesuocaipin.length);
        for (var o = 0; o < caipuliebiao.length; o++) {
            if (caipuliebiao[o].id == Gerenshuxing.jiesuocaipin[xuqiucaiid]) {
                gukexuqiucai = caipuliebiao[o].id;
                caipinming = caipuliebiao[o].foodName;
                break;
            }
        }
        if (gukexuqiucai >= 1000 && gukexuqiucai < 2000 && Gerenshuxing.jiesuoxiaochao == "1") {
            Fandianjisuan.chuangjianrenwu();
            var kaishichuren = new Donghuabifang(gukexuqiucai, caipinming);
        }
        else if (gukexuqiucai >= 2000 && gukexuqiucai < 3000 && Gerenshuxing.jiesuohuoguo == "1") {
            Fandianjisuan.chuangjianrenwu();
            var kaishichuren = new Donghuabifang(gukexuqiucai, caipinming);
        }
        else if (gukexuqiucai >= 3000 && gukexuqiucai < 4000 && Gerenshuxing.jiesuoxiaochi == "1") {
            Fandianjisuan.chuangjianrenwu();
            var kaishichuren = new Donghuabifang(gukexuqiucai, caipinming);
        }
        else if (gukexuqiucai >= 4000 && gukexuqiucai < 5000 && Gerenshuxing.jiesuozaocan == "1") {
            Fandianjisuan.chuangjianrenwu();
            var kaishichuren = new Donghuabifang(gukexuqiucai, caipinming);
        }
    };
    Fandianjisuan.shangcaisudu = 0;
    return Fandianjisuan;
}(egret.DisplayObjectContainer));
__reflect(Fandianjisuan.prototype, "Fandianjisuan");
//# sourceMappingURL=Fandianjisuan.js.map