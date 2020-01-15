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
    Gerenshuxing.jiankangzhi = 0; //个人属性：健康值
    Gerenshuxing.xingfuzhi = 0; //个人属性：幸福值
    Gerenshuxing.kaixinzhi = 0; //个人属性：开心值
    Gerenshuxing.jinbizhi = 0; //个人属性：金币值
    Gerenshuxing.jiatingzhi = 0; //个人属性：家庭值
    Gerenshuxing.shijian = "1213"; //个人属性：当前时间
    Gerenshuxing.yuefen = "630"; //个人属性：当前月份
    Gerenshuxing.jiesuocaipin = []; //已解锁菜品
    Gerenshuxing.uid = "1044";
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
    return Gerenshuxing;
}(egret.DisplayObjectContainer));
__reflect(Gerenshuxing.prototype, "Gerenshuxing");
//# sourceMappingURL=Gerenshuxing.js.map