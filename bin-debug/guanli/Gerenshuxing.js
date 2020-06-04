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
    Gerenshuxing.gukeliuyan = function (pingfenshu) {
        if (Gerenshuxing.dangqiandiji > 10) {
            Gerenshuxing.dangqiandiji = 0;
        }
        Gerenshuxing.dangqiandiji++;
        switch (Gerenshuxing.dangqiandiji) {
            case 1:
                Gerenshuxing.pinglun1 = pingfenshu;
                Gerenshuxing.yuangongshuxing();
                break;
            case 2:
                Gerenshuxing.pinglun2 = pingfenshu;
                Gerenshuxing.yuangongshuxing();
                break;
            case 3:
                Gerenshuxing.pinglun3 = pingfenshu;
                Gerenshuxing.yuangongshuxing();
                break;
            case 4:
                Gerenshuxing.pinglun4 = pingfenshu;
                Gerenshuxing.yuangongshuxing();
                break;
            case 5:
                Gerenshuxing.pinglun5 = pingfenshu;
                Gerenshuxing.yuangongshuxing();
                break;
            case 6:
                Gerenshuxing.pinglun6 = pingfenshu;
                Gerenshuxing.yuangongshuxing();
                break;
            case 7:
                Gerenshuxing.pinglun7 = pingfenshu;
                Gerenshuxing.yuangongshuxing();
                break;
            case 8:
                Gerenshuxing.pinglun8 = pingfenshu;
                Gerenshuxing.yuangongshuxing();
                break;
            case 9:
                Gerenshuxing.pinglun9 = pingfenshu;
                Gerenshuxing.yuangongshuxing();
                break;
            case 10:
                Gerenshuxing.pinglun10 = pingfenshu;
                Gerenshuxing.yuangongshuxing();
                break;
        }
    };
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
        //低保客流量
        var dibaokeliu = 0;
        if (Gerenshuxing.dibaokeliushijian > 0) {
            dibaokeliu = 50;
        }
        //评论增加的口碑值计算
        Gerenshuxing.pingjunpinlun = (Gerenshuxing.pinglun1 + Gerenshuxing.pinglun2 + Gerenshuxing.pinglun3 +
            Gerenshuxing.pinglun4 + Gerenshuxing.pinglun5 + Gerenshuxing.pinglun6 + Gerenshuxing.pinglun7 + Gerenshuxing.pinglun8
            + Gerenshuxing.pinglun9 + Gerenshuxing.pinglun10) / 10;
        Gerenshuxing.pinglunkoubei = Math.floor(Gerenshuxing.pingjunpinlun * 4);
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
        Gerenshuxing.zzkeliuliang = Math.floor((Gerenshuxing.keliuliang + tuiguangkeliu + dibaokeliu) * (Gerenshuxing.sjkeliuliang / 100) * (Gerenshuxing.tqkeliuliang / 100));
        //最终的口碑值
        Gerenshuxing.zzkoubeizhi = Gerenshuxing.koubeizhi + tuiguangkoubei + Gerenshuxing.pinglunkoubei;
        //最终外卖效率
        Gerenshuxing.waimaixiaolv = Math.floor(Gerenshuxing.zzkoubeizhi * (Gerenshuxing.sjwaimai / 100) * (Gerenshuxing.tqwaimai / 100));
        /*console.log("当前客容量：" +Gerenshuxing.zzkerongliang + "增加的客容量: " +jiajukerong);
        console.log("当前客流量：" +Gerenshuxing.zzkeliuliang + "增加的客流量: " +tuiguangkeliu);
        console.log("当前口碑值：" +Gerenshuxing.zzkoubeizhi + "增加的口碑值： " +tuiguangkoubei);
        console.log("当前卫生值: " +Gerenshuxing.zzweishengzhi + "增加的卫生值: " +yuangongjiasu);
        console.log("当前上菜速度: " +Gerenshuxing.zzchushishangcaisudu + "增加的上菜速度: " +yuangongjiasu);
        console.log("当前安宝值: " +Gerenshuxing.zzanbaozhi + "增加的安宝值: " +yuangongjiaanbao);
        console.log("当前原材料减少: " +Gerenshuxing.zzyuanliaoxiaohao + "增加的原材料减少: " +yuangongcailiao);*/
    };
    //开始家庭成员进修倒计时
    Gerenshuxing.daerzijinxiudingshi = function () {
        var xianzaishijian = (new Date()).valueOf();
        if (Gerenshuxing.daerzixinxi[2] != "0" && Gerenshuxing.daerzixinxi[3] != "0") {
            if (xianzaishijian < parseInt(Gerenshuxing.daerzixinxi[3])) {
                var daerzidingshi = new egret.Timer(1000, 1);
                daerzidingshi.addEventListener(egret.TimerEvent.TIMER, this.daerzijinxiudingshi, this);
                daerzidingshi.start();
            }
            else {
                Weblianjie.fasongshuju("code:069", "{" + '"uid"' + ":" + '"' + Gerenshuxing.uid + '"' + "}");
            }
        }
    };
    Gerenshuxing.ererzijinxiudingshi = function () {
        var xianzaishijian2 = (new Date()).valueOf();
        if (Gerenshuxing.ererzixinxi[2] != "0" && Gerenshuxing.ererzixinxi[3] != "0") {
            if (xianzaishijian2 < parseInt(Gerenshuxing.ererzixinxi[3])) {
                var ererzidingshi = new egret.Timer(1000, 1);
                ererzidingshi.addEventListener(egret.TimerEvent.TIMER, this.ererzijinxiudingshi, this);
                ererzidingshi.start();
            }
            else {
                Weblianjie.fasongshuju("code:070", "{" + '"uid"' + ":" + '"' + Gerenshuxing.uid + '"' + "}");
            }
        }
    };
    Gerenshuxing.xifujinxiudingshi = function () {
        var xianzaishijian3 = (new Date()).valueOf();
        if (Gerenshuxing.xifuxinxi[2] != "0" && Gerenshuxing.xifuxinxi[3] != "0") {
            if (xianzaishijian3 < parseInt(Gerenshuxing.xifuxinxi[3])) {
                var xifudingshi = new egret.Timer(1000, 1);
                xifudingshi.addEventListener(egret.TimerEvent.TIMER, this.xifujinxiudingshi, this);
                xifudingshi.start();
            }
            else {
                Weblianjie.fasongshuju("code:071", "{" + '"uid"' + ":" + '"' + Gerenshuxing.uid + '"' + "}");
            }
        }
    };
    Gerenshuxing.sunnvjinxiudingshi = function () {
        var xianzaishijian4 = (new Date()).valueOf();
        if (Gerenshuxing.sunnvxinxi[2] != "0" && Gerenshuxing.sunnvxinxi[3] != "0") {
            if (xianzaishijian4 < parseInt(Gerenshuxing.sunnvxinxi[3])) {
                var sunnvdingshi = new egret.Timer(1000, 1);
                sunnvdingshi.addEventListener(egret.TimerEvent.TIMER, this.sunnvjinxiudingshi, this);
                sunnvdingshi.start();
            }
            else {
                Weblianjie.fasongshuju("code:072", "{" + '"uid"' + ":" + '"' + Gerenshuxing.uid + '"' + "}");
            }
        }
    };
    //开始沙发体力恢复倒计时
    Gerenshuxing.shafatilihuifu = function () {
        var xianzaishijian5 = (new Date()).valueOf();
        if (parseInt(Gerenshuxing.shafaxinxi[0]) < parseInt(Gerenshuxing.shafaxinxi[1])) {
            if (xianzaishijian5 < parseInt(Gerenshuxing.shafaxinxi[2])) {
                var shafadingshi = new egret.Timer(1000, 1);
                shafadingshi.addEventListener(egret.TimerEvent.TIMER, this.shafatilihuifu, this);
                shafadingshi.start();
            }
            else {
                var zengjiatili = Math.floor(Gerenshuxing.kaixinzhi / 100) + 1;
                var xiajieduanshijian = xianzaishijian5 + 120000;
                var chaochushijian = xianzaishijian5 - parseInt(Gerenshuxing.shafaxinxi[2]);
                chaochushijian = Math.floor(chaochushijian / 120000) + 1;
                if (chaochushijian + parseInt(Gerenshuxing.shafaxinxi[0]) >= parseInt(Gerenshuxing.shafaxinxi[1])) {
                    chaochushijian = parseInt(Gerenshuxing.shafaxinxi[1]);
                }
                else {
                    chaochushijian = parseInt(Gerenshuxing.shafaxinxi[0]) + chaochushijian;
                }
                zengjiatili = zengjiatili * chaochushijian;
                Weblianjie.fasongshuju("code:089", "{" + '"uid"' + ":" + '"' + Gerenshuxing.uid + '"' + ","
                    + '"dangqiancishu"' + ":" + '"' + chaochushijian + '"' + ","
                    + '"xiacishijian"' + ":" + '"' + xiajieduanshijian + '"' + ","
                    + '"leijitili"' + ":" + '"' + zengjiatili + '"' + "}");
            }
        }
    };
    //离线奖励计算定时
    Gerenshuxing.lixianjianglidingshi = function () {
        if (Gameguanli.Kongzhitai().zhujiemian.parent) {
        }
        else {
            this.jisuanlixian();
        }
    };
    Gerenshuxing.jisuanlixian = function () {
        var xianzaishijian6 = (new Date()).valueOf();
        if (parseInt(Gerenshuxing.lixianjiangli[0]) < parseInt(Gerenshuxing.lixianjiangli[1])) {
            if (xianzaishijian6 >= parseInt(Gerenshuxing.lixianjiangli[2])) {
                var zengjialixian = Math.floor(parseInt(Gerenshuxing.daerzixinxi[1]));
                var xiajieduanshijian1 = xianzaishijian6 + 60000;
                var chaochushijian1 = xianzaishijian6 - parseInt(Gerenshuxing.lixianjiangli[2]);
                chaochushijian1 = Math.floor(chaochushijian1 / 60000) + 1;
                if (chaochushijian1 + parseInt(Gerenshuxing.lixianjiangli[0]) >= parseInt(Gerenshuxing.lixianjiangli[1])) {
                    chaochushijian1 = parseInt(Gerenshuxing.lixianjiangli[1]);
                }
                else {
                    chaochushijian1 = parseInt(Gerenshuxing.lixianjiangli[0]) + chaochushijian1;
                }
                zengjialixian = zengjialixian * chaochushijian1;
                Weblianjie.fasongshuju("code:092", "{" + '"uid"' + ":" + '"' + Gerenshuxing.uid + '"' + ","
                    + '"dangqiancishu"' + ":" + '"' + chaochushijian1 + '"' + ","
                    + '"xiacishijian"' + ":" + '"' + xiajieduanshijian1 + '"' + ","
                    + '"leijitili"' + ":" + '"' + zengjialixian + '"' + "}");
            }
        }
        else {
            if (Gameguanli.Kongzhitai().zhujiemian.parent) {
                Gameguanli.Kongzhitai().lixianjiangli();
            }
        }
    };
    //个人对应的等级数据计算
    Gerenshuxing.xingfudengjishujujisuan = function () {
        for (var i = 0; i < Gerenshuxing.gerendengjibiao.length; i++) {
            if (Gerenshuxing.xingfuzhi >= parseInt(Gerenshuxing.gerendengjibiao[Gerenshuxing.gerendengjibiao.length - 1].levelexp)) {
                Gerenshuxing.xingfudengji = parseInt(Gerenshuxing.gerendengjibiao[Gerenshuxing.gerendengjibiao.length - 1].id);
                Gerenshuxing.xingfunaixin = parseInt(Gerenshuxing.gerendengjibiao[Gerenshuxing.gerendengjibiao.length - 1].naixinadd);
                Gerenshuxing.xingfuyizhi = parseInt(Gerenshuxing.gerendengjibiao[Gerenshuxing.gerendengjibiao.length - 1].yizhiadd);
                Gerenshuxing.xingfuxingzhi = parseInt(Gerenshuxing.gerendengjibiao[Gerenshuxing.gerendengjibiao.length - 1].xingzhiadd);
                Gerenshuxing.xingfula = parseInt(Gerenshuxing.gerendengjibiao[Gerenshuxing.gerendengjibiao.length - 1].laxiadd);
                Gerenshuxing.xingfuma = parseInt(Gerenshuxing.gerendengjibiao[Gerenshuxing.gerendengjibiao.length - 1].maxiadd);
                Gerenshuxing.xingfusuan = parseInt(Gerenshuxing.gerendengjibiao[Gerenshuxing.gerendengjibiao.length - 1].suanxiadd);
                Gerenshuxing.xingfutian = parseInt(Gerenshuxing.gerendengjibiao[Gerenshuxing.gerendengjibiao.length - 1].tianxiadd);
                break;
            }
            else {
                if (Gerenshuxing.xingfuzhi >= parseInt(Gerenshuxing.gerendengjibiao[i].levelexp) && Gerenshuxing.xingfuzhi < parseInt(Gerenshuxing.gerendengjibiao[i + 1].levelexp)) {
                    Gerenshuxing.xingfudengji = parseInt(Gerenshuxing.gerendengjibiao[i].id);
                    Gerenshuxing.xingfunaixin = parseInt(Gerenshuxing.gerendengjibiao[i].naixinadd);
                    Gerenshuxing.xingfuyizhi = parseInt(Gerenshuxing.gerendengjibiao[i].yizhiadd);
                    Gerenshuxing.xingfuxingzhi = parseInt(Gerenshuxing.gerendengjibiao[i].xingzhiadd);
                    Gerenshuxing.xingfula = parseInt(Gerenshuxing.gerendengjibiao[i].laxiadd);
                    Gerenshuxing.xingfuma = parseInt(Gerenshuxing.gerendengjibiao[i].maxiadd);
                    Gerenshuxing.xingfusuan = parseInt(Gerenshuxing.gerendengjibiao[i].suanxiadd);
                    Gerenshuxing.xingfutian = parseInt(Gerenshuxing.gerendengjibiao[i].tianxiadd);
                    break;
                }
            }
        }
        Gerenshuxing.gerenaixin = Gerenshuxing.xingfunaixin + Math.floor(Gerenshuxing.xingfunaixin * Gerenshuxing.jiankangzhi / 1000);
        Gerenshuxing.gerenyizhi = Gerenshuxing.xingfuyizhi + Math.floor(Gerenshuxing.xingfuyizhi * Gerenshuxing.kaixinzhi / 1000);
        Gerenshuxing.gerenxingzhi = Gerenshuxing.xingfuxingzhi;
        Gerenshuxing.gerenla = Gerenshuxing.xingfula + Gerenshuxing.tishengxingfula;
        Gerenshuxing.gerenma = Gerenshuxing.xingfuma + Gerenshuxing.tishengxingfuma;
        Gerenshuxing.gerensuan = Gerenshuxing.xingfusuan + Gerenshuxing.tishengxingfusuan;
        Gerenshuxing.gerentian = Gerenshuxing.xingfutian + Gerenshuxing.tishengxingfutian;
        console.log(Gerenshuxing.gerenaixin, Gerenshuxing.xingfunaixin, Gerenshuxing.tishengxingfunaixin);
        //这里每次变更，应该告诉主界面刷新一次个人等级
    };
    Gerenshuxing.jiankangzhi = 0; //个人属性：健康值
    Gerenshuxing.xingfuzhi = 0; //个人属性：幸福值
    Gerenshuxing.kaixinzhi = 0; //个人属性：开心值
    Gerenshuxing.jinbizhi = 0; //个人属性：金币值
    Gerenshuxing.jiatingzhi = 0; //个人属性：家庭值
    Gerenshuxing.shijian = 12; //个人属性：当前时间
    Gerenshuxing.yuefen = 1; //个人属性：当前月份
    Gerenshuxing.jiesuocaipin = []; //已解锁菜品
    Gerenshuxing.uid = "undefined";
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
    Gerenshuxing.touxiang = "https://wx.qlogo.cn/mmopen/vi_32/MF7PLicF44H0djnvbeGDWKKPu60fbrbLKfx8jATpsN9d6paWg0ictyCnY8uAqiaXPcfDLAI1q7IQGHI22ZQZAV4HQ/132"; //个人头像服务器;
    Gerenshuxing.daerzixinxi = []; //大儿子信息(亲和值，工作能力，当前进行学习，学习剩余时间，是否已领取回家奖励)
    Gerenshuxing.ererzixinxi = []; //二儿子信息(亲和值，工作能力，当前进行学习，学习剩余时间，是否已领取回家奖励)
    Gerenshuxing.xifuxinxi = []; //大儿媳信息(亲和值，工作能力，当前进行学习，学习剩余时间，是否已领取回家奖励)
    Gerenshuxing.sunnvxinxi = []; //孙女信息(亲和值，工作能力，当前进行学习，学习剩余时间，是否已领取回家奖励)
    Gerenshuxing.daerzijiaotan = 0; //大儿子可交谈次数
    Gerenshuxing.ererzijiaotan = 0; //二儿子可交谈次数
    Gerenshuxing.xifujiaotan = 0; //媳妇可交谈次数
    Gerenshuxing.sunnvjiaotan = 0; //孙女可交谈次数
    Gerenshuxing.daerzixuexi = []; //大儿子学习解锁信息
    Gerenshuxing.ererzixuexi = []; //二儿子学习解锁信息
    Gerenshuxing.xifuxuexi = []; //大儿媳学习解锁信息
    Gerenshuxing.sunnvxuexi = []; //孙女学习解锁信息
    Gerenshuxing.dianshixinxi = 0; //电视已观看次数
    Gerenshuxing.shafaxinxi = []; //沙发信息(当前已积累次数，当前可积累上限次数,下次增加时间戳,当前已累积体力数)
    Gerenshuxing.lixianjiangli = []; //离线奖励(当前累积次数，当前可累积上限次数,当前时间戳，当前已累积金币值)
    Gerenshuxing.paiming = 100001; //当前世界排名
    Gerenshuxing.paihangbangshuju = []; //排行榜数据
    Gerenshuxing.teshushijian = "0"; //当前特殊事件
    Gerenshuxing.chaoshishangdianbiao = []; //从服务器获取超市商店表
    Gerenshuxing.caipushuxingbiao = []; //从服务器获取菜谱属性表
    Gerenshuxing.jinengbiao = []; //从服务器获取技能表
    Gerenshuxing.gerendengjibiao = []; //从服务器获取个人等级表
    Gerenshuxing.guaiwubiao = []; //从服务器获取怪物表
    Gerenshuxing.xingfudengji = 1; //个人等级;
    Gerenshuxing.xingfunaixin = 0; //个人耐心值;
    Gerenshuxing.xingfuyizhi = 0; //个人意志值;
    Gerenshuxing.xingfuxingzhi = 0; //个人兴致值;
    Gerenshuxing.xingfula = 0; //个人辣值;
    Gerenshuxing.xingfuma = 0; //个人麻值;
    Gerenshuxing.xingfusuan = 0; //个人酸值;
    Gerenshuxing.xingfutian = 0; //个人甜值;
    Gerenshuxing.tishengxingfunaixin = 0; //进修个人耐心值;
    Gerenshuxing.tishengxingfuyizhi = 0; //进修个人意志值;
    Gerenshuxing.tishengxingfuxingzhi = 0; //进修个人兴致值;
    Gerenshuxing.tishengxingfula = 0; //进修个人辣值;
    Gerenshuxing.tishengxingfuma = 0; //进修个人麻值;
    Gerenshuxing.tishengxingfusuan = 0; //进修个人酸值;
    Gerenshuxing.tishengxingfutian = 0; //进修个人甜值;
    Gerenshuxing.gerenaixin = 0; //最终个人耐心值;
    Gerenshuxing.gerenyizhi = 0; //最终个人意志值;
    Gerenshuxing.gerenxingzhi = 0; //最终个人兴致值;
    Gerenshuxing.gerenla = 0; //最终个人辣值;
    Gerenshuxing.gerenma = 0; //最终个人麻值;
    Gerenshuxing.gerensuan = 0; //最终个人酸值;
    Gerenshuxing.gerentian = 0; //最终个人甜值;
    Gerenshuxing.putongjiangchi = []; //从服务器获取普通奖池表
    Gerenshuxing.daojubiao = []; //从服务器获取道具表
    Gerenshuxing.daojushiyongbiao = []; //从服务器获取道具使用表
    Gerenshuxing.jiajushangdianbiao = []; //从服务器获取家具商店表
    Gerenshuxing.gerenshuju = null; //从平台处取得的个人数据;
    Gerenshuxing.fenxianglianjiedizhi = "https://www.123fp.cn/loading/img_beijingloading.png";
    Gerenshuxing.touxiangbaocunzhuangtai = false;
    Gerenshuxing.cailanzishu = 5; //个人才菜篮子数;
    Gerenshuxing.shuaxincishu = 2; //个人买菜刷新次数;
    Gerenshuxing.dangqiantianqi = 1; //1为晴天，2为雨天，3为雪天
    //每日结算时，员工的解聘和续聘内容
    Gerenshuxing.yuangongxupin = [];
    Gerenshuxing.yuangongjiepin = [];
    //顾客留言营销的属性值
    Gerenshuxing.pingjunpinlun = 0;
    Gerenshuxing.pinglun1 = 0;
    Gerenshuxing.pinglun2 = 0;
    Gerenshuxing.pinglun3 = 0;
    Gerenshuxing.pinglun4 = 0;
    Gerenshuxing.pinglun5 = 0;
    Gerenshuxing.pinglun6 = 0;
    Gerenshuxing.pinglun7 = 0;
    Gerenshuxing.pinglun8 = 0;
    Gerenshuxing.pinglun9 = 0;
    Gerenshuxing.pinglun10 = 0;
    Gerenshuxing.dangqiandiji = 0;
    //通过时间控制的客流量增加
    Gerenshuxing.sjkeliuliang = 100;
    //通过时间控制的外卖订单增加值
    Gerenshuxing.sjwaimai = 100;
    //通过天气控制的客流量增加
    Gerenshuxing.tqkeliuliang = 100;
    //通过天气控制的外卖订单增加值
    Gerenshuxing.tqwaimai = 100;
    return Gerenshuxing;
}(egret.DisplayObjectContainer));
__reflect(Gerenshuxing.prototype, "Gerenshuxing");
//# sourceMappingURL=Gerenshuxing.js.map