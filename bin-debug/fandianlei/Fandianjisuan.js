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
    //    public static xunhuankaishi:egret.Timer;
    function Fandianjisuan() {
        return _super.call(this) || this;
    }
    Fandianjisuan.chushihuajisuan = function (opendingshi) {
        //调用员工属性计算
        Gerenshuxing.yuangongshuxing();
        //设定一个循环定时器
        var xunhuankaishi = new egret.Timer(Gerenshuxing.jiesuantime, 1);
        xunhuankaishi.start();
        xunhuankaishi.addEventListener(egret.TimerEvent.TIMER_COMPLETE, this.jisuanfandianshuju, this);
    };
    Fandianjisuan.jisuanfandianshuju = function () {
        Fandianjisuan.chushihuajisuan();
        this.jinlairenshu = 0;
        var zuidakeren = 0;
        if (Gerenshuxing.zzkeliuliang <= Gerenshuxing.zzkerongliang) {
            zuidakeren = Math.floor(Gerenshuxing.zzkeliuliang / 10);
        }
        else {
            zuidakeren = Math.floor(Gerenshuxing.zzkerongliang / 10);
        }
        for (var i = 0; i < zuidakeren; i++) {
            var shuiji = Math.floor(Math.random() * 100);
            if (shuiji <= Gerenshuxing.zzkoubeizhi) {
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