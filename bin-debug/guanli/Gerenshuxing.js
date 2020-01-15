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
var Gerenshuxing = (function (_super) {
    __extends(Gerenshuxing, _super);
    function Gerenshuxing() {
        return _super.call(this) || this;
    }
    Gerenshuxing.yuangongshuxing = function () {
        //每次进来都要初始化该计算数据
        var yuangongbiao = RES.getRes("yuangongbiao_json");
        var yuangongjiasu = 0; //员工增加的上菜速度
        var yuangongjiaweisheng = 0; //员工增加的卫生值
        var yuangongjiaanbao = 0; //员工增加的安宝值
        var yuangongcailiao = 0; //员工增加的原材料减少
        var jiajukerong = 0; //家具增加的容客量
        var tuiguangkeliu = 0; //推广增加的客流量
        var tuiguangkoubei = 0; //推广增加的口碑值
        Gerenshuxing.weishengjilv = 0;
        for (var y = 0; y < yuangongbiao.length; y++) {
            for (var k = 0; k < Gerenshuxing.shiyongyuangong.length; k++) {
                if (yuangongbiao[y].id == Gerenshuxing.shiyongyuangong[k]) {
                    if (yuangongbiao[y].skill == 5) {
                        yuangongjiasu += parseInt(yuangongbiao[y].skillparameter);
                    }
                    if (yuangongbiao[y].skill == 6) {
                        yuangongjiaweisheng += parseInt(yuangongbiao[y].skillparameter);
                        Gerenshuxing.weishengjilv += 4;
                    }
                    if (yuangongbiao[y].skill == 8) {
                        yuangongjiaanbao += parseInt(yuangongbiao[y].skillparameter);
                    }
                    if (yuangongbiao[y].skill == 7) {
                        yuangongcailiao += parseInt(yuangongbiao[y].skillparameter);
                    }
                }
            }
        }
        //当前客容量计算
        var jiajubiaobianli = RES.getRes("jiajubiao_json");
        for (var i = 0; i < jiajubiaobianli.length; i++) {
            if (jiajubiaobianli[i].id == Gerenshuxing.usexiaochao || jiajubiaobianli[i].id == Gerenshuxing.usehuoguo
                || jiajubiaobianli[i].id == Gerenshuxing.usexiaochi || jiajubiaobianli[i].id == Gerenshuxing.usezaocan) {
                jiajukerong += parseInt(jiajubiaobianli[i].onkeliushu);
            }
            for (var j = 0; j < Gerenshuxing.jiesuojiaju.length; j++) {
                if (jiajubiaobianli[i].id == Gerenshuxing.jiesuojiaju[j]) {
                    jiajukerong += parseInt(jiajubiaobianli[i].keliushu);
                }
            }
        }
        //当前客流量计算
        var yinxiaobiao = RES.getRes("yinxiaobiao_json");
        if (Gerenshuxing.shengyuchuandan > 0) {
            tuiguangkeliu += parseInt(yinxiaobiao[0].sellachievement);
        }
        if (Gerenshuxing.shengyudianshi > 0) {
            tuiguangkeliu += parseInt(yinxiaobiao[1].sellachievement);
        }
        //当前口碑值计算
        if (Gerenshuxing.shengyupinglun > 0) {
            tuiguangkoubei += parseInt(yinxiaobiao[2].sellachievement);
        }
        if (Gerenshuxing.shengyudaiyan > 0) {
            tuiguangkoubei += parseInt(yinxiaobiao[3].sellachievement);
        }
        //最终用于计算的各项数值
        //最终的上菜速度
        Gerenshuxing.zzchushishangcaisudu = Gerenshuxing.chushishangcaisudu + yuangongjiasu;
        //最终的卫生值
        Gerenshuxing.zzweishengzhi = Gerenshuxing.weishengzhi + yuangongjiaweisheng + Gerenshuxing.kesaochuweisheng - Gerenshuxing.dangqiankesaoweisheng;
        //最终的安保值
        Gerenshuxing.zzanbaozhi = Gerenshuxing.anbaozhi + yuangongjiaanbao;
        //最终的原材料消耗减少
        Gerenshuxing.zzyuanliaoxiaohao = Gerenshuxing.yuanliaoxiaohao + yuangongcailiao;
        //最终的客容量
        Gerenshuxing.zzkerongliang = Gerenshuxing.kerongliang + jiajukerong;
        //最终的客流量
        Gerenshuxing.zzkeliuliang = Gerenshuxing.keliuliang + tuiguangkeliu;
        //最终的口碑值
        Gerenshuxing.zzkoubeizhi = Gerenshuxing.koubeizhi + tuiguangkoubei;
        /*console.log("当前客容量：" +Gerenshuxing.zzkerongliang + "增加的客容量: " +jiajukerong);
        console.log("当前客流量：" +Gerenshuxing.zzkeliuliang + "增加的客流量: " +tuiguangkeliu);
        console.log("当前口碑值：" +Gerenshuxing.zzkoubeizhi + "增加的口碑值： " +tuiguangkoubei);
        console.log("当前卫生值: " +Gerenshuxing.zzweishengzhi + "增加的卫生值: " +yuangongjiasu);
        console.log("当前上菜速度: " +Gerenshuxing.zzchushishangcaisudu + "增加的上菜速度: " +yuangongjiasu);
        console.log("当前安宝值: " +Gerenshuxing.zzanbaozhi + "增加的安宝值: " +yuangongjiaanbao);
        console.log("当前原材料减少: " +Gerenshuxing.zzyuanliaoxiaohao + "增加的原材料减少: " +yuangongcailiao);*/
    };
    Gerenshuxing.jiankangzhi = 0; //个人属性：健康值
    Gerenshuxing.xingfuzhi = 0; //个人属性：幸福值
    Gerenshuxing.kaixinzhi = 0; //个人属性：开心值
    Gerenshuxing.jinbizhi = 0; //个人属性：金币值
    Gerenshuxing.jiatingzhi = 0; //个人属性：家庭值
    Gerenshuxing.shijian = "1213"; //个人属性：当前时间
    Gerenshuxing.yuefen = "630"; //个人属性：当前月份
    Gerenshuxing.jiesuocaipin = []; //已解锁菜品
    Gerenshuxing.uid = "1046";
    Gerenshuxing.jiesuojiaju = []; //已解锁家具
    Gerenshuxing.jiesuoyuangong = []; //已解锁员工
    Gerenshuxing.shiyongyuangong = []; //已使用员工
    Gerenshuxing.shengyuchuandan = 0; //传单推广剩余时间
    Gerenshuxing.shengyudianshi = 0; //电视推广剩余时间
    Gerenshuxing.shengyupinglun = 0; //评论推广剩余时间
    Gerenshuxing.shengyudaiyan = 0; //代言人推广剩余时间
    Gerenshuxing.yongyoudanju = []; //当前拥有的未处理单据列表
    Gerenshuxing.yongyouyuanliao = 0; //拥有的原材料数量
    Gerenshuxing.weishengzhi = 0; //当前饭店卫生值;
    Gerenshuxing.kesaochuweisheng = 0; //会生成可扫除的卫生值;
    Gerenshuxing.dangqiankesaoweisheng = 20; //当前可扫除的卫生值;
    Gerenshuxing.anbaozhi = 0; //当前饭店安保值;
    Gerenshuxing.keliuliang = 0; //当前饭店客流量
    Gerenshuxing.kerongliang = 0; //当前饭店客容量
    Gerenshuxing.koubeizhi = 0; //当前饭店口碑值
    Gerenshuxing.jiesuantime = 30000; //当前饭店结算时间
    Gerenshuxing.chushishangcaisudu = 30000; //初始上菜速度
    Gerenshuxing.yuanliaoxiaohao = 0; //原材料消耗减少
    Gerenshuxing.weishengjilv = 0; //有清洁工时，每个清洁工控制的垃圾的产出几率
    return Gerenshuxing;
}(egret.DisplayObjectContainer));
__reflect(Gerenshuxing.prototype, "Gerenshuxing");
//# sourceMappingURL=Gerenshuxing.js.map