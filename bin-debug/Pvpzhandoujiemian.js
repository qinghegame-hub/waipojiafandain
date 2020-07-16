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
var Pvpzhandoujiemian = (function (_super) {
    __extends(Pvpzhandoujiemian, _super);
    function Pvpzhandoujiemian() {
        var _this = _super.call(this) || this;
        _this.houxuancaizu_0 = []; //当前的候选菜库
        _this.houxuancaizu_1 = []; //当前的候选菜库
        //瓢字控制
        _this.jinlaicishu1 = [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1];
        _this.jinlaicishu2 = [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1];
        _this.jinlaicishu3 = [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1];
        _this.jinlaicishu4 = [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1];
        _this.jinlaicishu5 = [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1];
        _this.jinlaicishu6 = [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1];
        //战斗BUFF
        _this.buff_1 = []; //自己的辅助1BUFF列表;
        _this.buff_0 = []; //自己的BUFF列表;
        _this.buff_2 = []; //自己的辅助2BUFF列表;
        _this.buff_3 = []; //敌人的BUFF列表;
        _this.buff_4 = []; //敌人的辅助1BUFF列表;
        _this.buff_5 = []; //敌人的辅助2BUFF列表;
        //菜的各项数据
        //获取当前自己菜的属性值
        _this.chushilazhi_0 = 0; //菜的初始辣值
        _this.zuizhonglazhi_0 = 0; //菜的最终辣值
        _this.fujialazhi_0 = 0; //菜的附加辣值
        _this.chushimazhi_0 = 0; //菜的初始辣值
        _this.zuizhongmazhi_0 = 0; //菜的初始辣值
        _this.fujiamazhi_0 = 0; //菜的初始辣值
        _this.chushisuanzhi_0 = 0; //菜的初始辣值
        _this.zuizhongsuanzhi_0 = 0; //菜的初始辣值
        _this.fujiasuanzhi_0 = 0; //菜的初始辣值
        _this.chushitianzhi_0 = 0; //菜的初始辣值
        _this.zuizhongtianzhi_0 = 0; //菜的初始辣值
        _this.fujiatianzhi_0 = 0; //菜的初始辣值
        _this.caidejineng1_0 = "0"; //菜的技能1
        _this.caidejineng2_0 = "0"; //菜的技能2
        _this.caidejineng3_0 = "0"; //菜的技能3
        _this.caidejineng4_0 = "0"; //菜的技能4
        _this.caidejineng5_0 = "0"; //菜的技能5
        _this.caidedengji_0 = 0; //当前菜的等级
        _this.shuchulazhi_0 = 0;
        _this.shuchumazhi_0 = 0;
        _this.shuchusuanzhi_0 = 0;
        _this.shuchutianzhi_0 = 0;
        //获取当前敌人菜的属性值
        _this.chushilazhi_1 = 0; //菜的初始辣值
        _this.zuizhonglazhi_1 = 0; //菜的最终辣值
        _this.fujialazhi_1 = 0; //菜的附加辣值
        _this.chushimazhi_1 = 0; //菜的初始辣值
        _this.zuizhongmazhi_1 = 0; //菜的初始辣值
        _this.fujiamazhi_1 = 0; //菜的初始辣值
        _this.chushisuanzhi_1 = 0; //菜的初始辣值
        _this.zuizhongsuanzhi_1 = 0; //菜的初始辣值
        _this.fujiasuanzhi_1 = 0; //菜的初始辣值
        _this.chushitianzhi_1 = 0; //菜的初始辣值
        _this.zuizhongtianzhi_1 = 0; //菜的初始辣值
        _this.fujiatianzhi_1 = 0; //菜的初始辣值
        _this.caidejineng1_1 = "0"; //菜的技能1
        _this.caidejineng2_1 = "0"; //菜的技能2
        _this.caidejineng3_1 = "0"; //菜的技能3
        _this.caidejineng4_1 = "0"; //菜的技能4
        _this.caidejineng5_1 = "0"; //菜的技能5
        _this.caidedengji_1 = 0; //当前菜的等级
        _this.shuchulazhi_1 = 0;
        _this.shuchumazhi_1 = 0;
        _this.shuchusuanzhi_1 = 0;
        _this.shuchutianzhi_1 = 0;
        //是否队敌人触发技能
        _this.chufalianji_1_ = "0"; //触发连击
        _this.chufabisha_1_ = "0"; //触发必杀
        _this.chufaxixue_1_ = "0"; //触发吸血
        _this.chufazhuiji_1_ = "0"; //触发追击
        _this.chufasane_1_ = "0"; //触发善恶
        _this.chufahushila_1_ = "0"; //触发忽视辣
        _this.chufahushima_1_ = "0"; //触发忽视麻
        _this.chufahushisuan_1_ = "0"; //触发忽视酸
        _this.chufahushitian_1_ = "0"; //触发忽视甜
        _this.chufazhenshe_1_ = "0"; //触发震慑
        _this.chufaxilan_1_ = "0"; //触发吸蓝
        _this.chufajiansu_1_ = "0"; //触发减速
        _this.chufachenmo_1_ = "0"; //触发沉默
        _this.chufahuixue_1_ = "0"; //触发回血
        _this.chufaquanhushi_1_ = "0"; //触发全忽视
        _this.chufahuiling_1_ = "0"; //触发回灵
        _this.chufadu_1_ = "0"; //触发毒
        _this.chufaxuruo_1_ = "0"; //触发虚弱
        _this.chufajiafang_1_ = "0"; //触发加防
        _this.chufajiasu_1_ = "0"; //触发加速
        _this.chufajianxue_1_ = "0"; //触发给我放见血
        _this.chufajiangong_1_ = "0"; //触发给我方减攻
        _this.chufawofangjiansu_1_ = "0"; //触发给我方减速
        _this.chufalianji_2_ = "0"; //触发连击
        _this.chufabisha_2_ = "0"; //触发必杀
        _this.chufaxixue_2_ = "0"; //触发吸血
        _this.chufazhuiji_2_ = "0"; //触发追击
        _this.chufasane_2_ = "0"; //触发善恶
        _this.chufahushila_2_ = "0"; //触发忽视辣
        _this.chufahushima_2_ = "0"; //触发忽视麻
        _this.chufahushisuan_2_ = "0"; //触发忽视酸
        _this.chufahushitian_2_ = "0"; //触发忽视甜
        _this.chufazhenshe_2_ = "0"; //触发震慑
        _this.chufaxilan_2_ = "0"; //触发吸蓝
        _this.chufajiansu_2_ = "0"; //触发减速
        _this.chufachenmo_2_ = "0"; //触发沉默
        _this.chufahuixue_2_ = "0"; //触发回血
        _this.chufaquanhushi_2_ = "0"; //触发全忽视
        _this.chufahuiling_2_ = "0"; //触发回灵
        _this.chufadu_2_ = "0"; //触发毒
        _this.chufaxuruo_2_ = "0"; //触发虚弱
        _this.chufajiafang_2_ = "0"; //触发加防
        _this.chufajiasu_2_ = "0"; //触发加速
        _this.chufajianxue_2_ = "0"; //触发给我放见血
        _this.chufajiangong_2_ = "0"; //触发给我方减攻
        _this.chufawofangjiansu_2_ = "0"; //触发给我方减速
        _this.chufalianji_3_ = "0"; //触发连击
        _this.chufabisha_3_ = "0"; //触发必杀
        _this.chufaxixue_3_ = "0"; //触发吸血
        _this.chufazhuiji_3_ = "0"; //触发追击
        _this.chufasane_3_ = "0"; //触发善恶
        _this.chufahushila_3_ = "0"; //触发忽视辣
        _this.chufahushima_3_ = "0"; //触发忽视麻
        _this.chufahushisuan_3_ = "0"; //触发忽视酸
        _this.chufahushitian_3_ = "0"; //触发忽视甜
        _this.chufazhenshe_3_ = "0"; //触发震慑
        _this.chufaxilan_3_ = "0"; //触发吸蓝
        _this.chufajiansu_3_ = "0"; //触发减速
        _this.chufachenmo_3_ = "0"; //触发沉默
        _this.chufahuixue_3_ = "0"; //触发回血
        _this.chufaquanhushi_3_ = "0"; //触发全忽视
        _this.chufahuiling_3_ = "0"; //触发回灵
        _this.chufadu_3_ = "0"; //触发毒
        _this.chufaxuruo_3_ = "0"; //触发虚弱
        _this.chufajiafang_3_ = "0"; //触发加防
        _this.chufajiasu_3_ = "0"; //触发加速
        _this.chufajianxue_3_ = "0"; //触发给我放见血
        _this.chufajiangong_3_ = "0"; //触发给我方减攻
        _this.chufawofangjiansu_3_ = "0"; //触发给我方减速
        //是否被敌人触发技能
        _this.chufalianji_1_1 = "0"; //触发连击
        _this.chufabisha_1_1 = "0"; //触发必杀
        _this.chufaxixue_1_1 = "0"; //触发吸血
        _this.chufazhuiji_1_1 = "0"; //触发追击
        _this.chufasane_1_1 = "0"; //触发善恶
        _this.chufahushila_1_1 = "0"; //触发忽视辣
        _this.chufahushima_1_1 = "0"; //触发忽视麻
        _this.chufahushisuan_1_1 = "0"; //触发忽视酸
        _this.chufahushitian_1_1 = "0"; //触发忽视甜
        _this.chufazhenshe_1_1 = "0"; //触发震慑
        _this.chufaxilan_1_1 = "0"; //触发吸蓝
        _this.chufajiansu_1_1 = "0"; //触发减速
        _this.chufachenmo_1_1 = "0"; //触发沉默
        _this.chufahuixue_1_1 = "0"; //触发回血
        _this.chufaquanhushi_1_1 = "0"; //触发全忽视
        _this.chufahuiling_1_1 = "0"; //触发回灵
        _this.chufadu_1_1 = "0"; //触发毒
        _this.chufaxuruo_1_1 = "0"; //触发虚弱
        _this.chufajiafang_1_1 = "0"; //触发加防
        _this.chufajiasu_1_1 = "0"; //触发加速
        _this.chufajianxue_1_1 = "0"; //触发给我放见血
        _this.chufajiangong_1_1 = "0"; //触发给我方减攻
        _this.chufawofangjiansu_1_1 = "0"; //触发给我方减速
        _this.chufalianji_2_1 = "0"; //触发连击
        _this.chufabisha_2_1 = "0"; //触发必杀
        _this.chufaxixue_2_1 = "0"; //触发吸血
        _this.chufazhuiji_2_1 = "0"; //触发追击
        _this.chufasane_2_1 = "0"; //触发善恶
        _this.chufahushila_2_1 = "0"; //触发忽视辣
        _this.chufahushima_2_1 = "0"; //触发忽视麻
        _this.chufahushisuan_2_1 = "0"; //触发忽视酸
        _this.chufahushitian_2_1 = "0"; //触发忽视甜
        _this.chufazhenshe_2_1 = "0"; //触发震慑
        _this.chufaxilan_2_1 = "0"; //触发吸蓝
        _this.chufajiansu_2_1 = "0"; //触发减速
        _this.chufachenmo_2_1 = "0"; //触发沉默
        _this.chufahuixue_2_1 = "0"; //触发回血
        _this.chufaquanhushi_2_1 = "0"; //触发全忽视
        _this.chufahuiling_2_1 = "0"; //触发回灵
        _this.chufadu_2_1 = "0"; //触发毒
        _this.chufaxuruo_2_1 = "0"; //触发虚弱
        _this.chufajiafang_2_1 = "0"; //触发加防
        _this.chufajiasu_2_1 = "0"; //触发加速
        _this.chufajianxue_2_1 = "0"; //触发给我放见血
        _this.chufajiangong_2_1 = "0"; //触发给我方减攻
        _this.chufawofangjiansu_2_1 = "0"; //触发给我方减速
        _this.chufalianji_3_1 = "0"; //触发连击
        _this.chufabisha_3_1 = "0"; //触发必杀
        _this.chufaxixue_3_1 = "0"; //触发吸血
        _this.chufazhuiji_3_1 = "0"; //触发追击
        _this.chufasane_3_1 = "0"; //触发善恶
        _this.chufahushila_3_1 = "0"; //触发忽视辣
        _this.chufahushima_3_1 = "0"; //触发忽视麻
        _this.chufahushisuan_3_1 = "0"; //触发忽视酸
        _this.chufahushitian_3_1 = "0"; //触发忽视甜
        _this.chufazhenshe_3_1 = "0"; //触发震慑
        _this.chufaxilan_3_1 = "0"; //触发吸蓝
        _this.chufajiansu_3_1 = "0"; //触发减速
        _this.chufachenmo_3_1 = "0"; //触发沉默
        _this.chufahuixue_3_1 = "0"; //触发回血
        _this.chufaquanhushi_3_1 = "0"; //触发全忽视
        _this.chufahuiling_3_1 = "0"; //触发回灵
        _this.chufadu_3_1 = "0"; //触发毒
        _this.chufaxuruo_3_1 = "0"; //触发虚弱
        _this.chufajiafang_3_1 = "0"; //触发加防
        _this.chufajiasu_3_1 = "0"; //触发加速
        _this.chufajianxue_3_1 = "0"; //触发给我放见血
        _this.chufajiangong_3_1 = "0"; //触发给我方减攻
        _this.chufawofangjiansu_3_1 = "0"; //触发给我方减速
        _this.jiangliidzu = [];
        _this.jianglishuliangzu = [];
        return _this;
    }
    Pvpzhandoujiemian.prototype.partAdded = function (partName, instance) {
        _super.prototype.partAdded.call(this, partName, instance);
    };
    Pvpzhandoujiemian.prototype.childrenCreated = function () {
        _super.prototype.childrenCreated.call(this);
    };
    Pvpzhandoujiemian.prototype.chushihua = function (direnshuxing, beishu) {
        var _this = this;
        this.direnxinxi = direnshuxing;
        this.jianglibeishu = parseInt(beishu);
        //初始化战斗是否结束控件
        this.zhandoujiesu = false;
        this.jianglileixing = "putongjiangli";
        //认输按钮，关闭界面
        this.renshuanniu_pvp.alpha = 1;
        this.renshuanniu_pvp.enabled = true;
        this.renshuanniu_pvp.addEventListener(egret.TouchEvent.TOUCH_TAP, this.guanbijiemian, this);
        //初始隐藏技能出牌显示
        this.zhandouxianshizu_pvp.alpha = 0;
        this.zhandouhanhuazu_pvp.alpha = 0;
        //自己喊话和怪物喊话初始化
        this.zijihanhua = "";
        this.guaiwuhanhua = "";
        //初始隐藏自动按钮的取消按钮
        this.quxiaozidonganniu_pvp.alpha = 0;
        this.quxiaozidonganniu_pvp.enabled = false;
        this.zidongzhandouanniu_pvp.alpha = 0;
        this.zidongzhandouanniu_pvp.enabled = false;
        //初始隐藏所有上菜按钮
        this.shangcai1anniu_pvp.enabled = false;
        this.shangcai2anniu_pvp.enabled = false;
        this.shangcai3anniu_pvp.enabled = false;
        this.shangcai4anniu_pvp.enabled = false;
        //初始隐藏所有初始菜品
        this.caiicon_pvp_0.source = "";
        this.caiicon_pvp_1.source = "";
        this.caiicon_pvp_2.source = "";
        this.caiicon_pvp_3.source = "";
        //隐藏菜品所需气点
        this.xiaohao_pvp_0_1.alpha = 0;
        this.xiaohao_pvp_0_2.alpha = 0;
        this.xiaohao_pvp_0_3.alpha = 0;
        this.xiaohao_pvp_0_4.alpha = 0;
        this.xiaohao_pvp_1_1.alpha = 0;
        this.xiaohao_pvp_1_2.alpha = 0;
        this.xiaohao_pvp_1_3.alpha = 0;
        this.xiaohao_pvp_1_4.alpha = 0;
        this.xiaohao_pvp_2_1.alpha = 0;
        this.xiaohao_pvp_2_2.alpha = 0;
        this.xiaohao_pvp_2_3.alpha = 0;
        this.xiaohao_pvp_2_4.alpha = 0;
        this.xiaohao_pvp_3_1.alpha = 0;
        this.xiaohao_pvp_3_2.alpha = 0;
        this.xiaohao_pvp_3_3.alpha = 0;
        this.xiaohao_pvp_3_4.alpha = 0;
        //初始自己气点数
        this.tiaoliao_pvp_0.alpha = 0;
        this.tiaoliao_pvp_1.alpha = 0;
        this.tiaoliao_pvp_2.alpha = 0;
        this.tiaoliao_pvp_3.alpha = 0;
        this.tiaoliao_pvp_4.alpha = 0;
        this.tiaoliao_pvp_5.alpha = 0;
        this.tiaoliao_pvp_6.alpha = 0;
        this.tiaoliao_pvp_7.alpha = 0;
        this.tiaoliao_pvp_8.alpha = 0;
        this.tiaoliao_pvp_9.alpha = 0;
        this.qidianshu_0 = 0;
        //初始对手气点数
        this.tiaoliao_pvp_10.alpha = 0;
        this.tiaoliao_pvp_11.alpha = 0;
        this.tiaoliao_pvp_12.alpha = 0;
        this.tiaoliao_pvp_13.alpha = 0;
        this.tiaoliao_pvp_14.alpha = 0;
        this.tiaoliao_pvp_15.alpha = 0;
        this.tiaoliao_pvp_16.alpha = 0;
        this.tiaoliao_pvp_17.alpha = 0;
        this.tiaoliao_pvp_18.alpha = 0;
        this.tiaoliao_pvp_19.alpha = 0;
        this.qidianshu_1 = 0;
        /*		//初始化人物数据
                this.chushihuarenwu();*/
        //初始隐藏6个行动条组
        this.jinduzu_pvp_0.alpha = 0;
        this.jinduzu_pvp_1.alpha = 0;
        this.jinduzu_pvp_2.alpha = 0;
        this.jinduzu_pvp_3.alpha = 0;
        this.jinduzu_pvp_4.alpha = 0;
        this.jinduzu_pvp_5.alpha = 0;
        //初始隐藏所有出招标志
        this.yincangchuzhao();
        //初始隐藏所有死亡标志
        this.yincangsiwang();
        //初始化自己的数据
        this.chushihuarenwu();
        this.chushihuazijifuzhi1();
        this.chushihuazijifuzhi2();
        //初始化怪物数据
        this.chushihuadiren();
        this.chushihuadirenfuzhi1();
        this.chushihuadirenfuzhi2();
        //初始隐藏闹钟
        this.daojishitishizu_pvp.alpha = 0;
        /*//初始显示食盒的数量
        this.shihexianshi();*/
        //初始化记录六根血条的宽度
        this.zijixuetiaokuan = this.qixuetiao_pvp_0.width;
        this.zijifuzhu1kuan = this.fuzhuxuetiao.width;
        this.zijifuzhu2kuan = this.fuzhuxuetiao0.width;
        this.guai1xuetiaokuan = this.qixuetiao_pvp_1.width;
        this.guai2xuetiaokuan = this.fuzhuxuetiao1.width;
        this.guai3xuetiaokuan = this.fuzhuxuetiao2.width;
        //初始化隐藏上面显示提示信息
        this.shangmiantishizu_pvp.alpha = 0;
        //隐藏下面的显示提示信息
        this.xiamiantishizu_pvp.alpha = 0;
        //倒计时动画
        this.bisaizhuangtaitu_pvp.alpha = 1;
        this.bisaizhuangtaitu_pvp.source = "img_daojishi3_png";
        egret.Tween.get(this.bisaizhuangtaitu_pvp).to({ alpha: 0.5 }, 1000).call(function () {
            _this.bisaizhuangtaitu_pvp.alpha = 1;
            _this.bisaizhuangtaitu_pvp.source = "img_daojishi2_png";
            egret.Tween.get(_this.bisaizhuangtaitu_pvp).to({ alpha: 0.5 }, 1000).call(function () {
                _this.bisaizhuangtaitu_pvp.alpha = 1;
                _this.bisaizhuangtaitu_pvp.source = "img_daojishi1_png";
                egret.Tween.get(_this.bisaizhuangtaitu_pvp).to({ alpha: 0.5 }, 1000).call(function () {
                    _this.bisaizhuangtaitu_pvp.alpha = 1;
                    _this.bisaizhuangtaitu_pvp.source = "img_bipingkaishi_png";
                    egret.Tween.get(_this.bisaizhuangtaitu_pvp).to({ alpha: 0.5 }, 1000).call(function () {
                        _this.bisaizhuangtaitu_pvp.alpha = 0;
                        _this.bisaizhuangtaitu_pvp.source = "";
                        //初始化滚动指针显示内容
                        _this.gundongzhizhen();
                        _this.shangmiantishixianshi("等待双方上菜...");
                    });
                });
            });
        });
        /*//开始进行指针的滚动
        this.zhizhengundong();*/
        this.di1tiaodonghua = false;
        this.di2tiaodonghua = false;
        this.di3tiaodonghua = false;
        this.di4tiaodonghua = false;
        this.di5tiaodonghua = false;
        this.di6tiaodonghua = false;
        //开放自己和怪物头像点击查看BUFF界面
        this.zijizu_pvp.touchEnabled = true;
        this.zijizu_pvp.addEventListener(egret.TouchEvent.TOUCH_TAP, this.chakanzijibuff, this);
        this.diduizu.touchEnabled = true;
        this.diduizu.addEventListener(egret.TouchEvent.TOUCH_TAP, this.chakanguai1buff, this);
        this.fuzhuzu1.touchEnabled = true;
        this.fuzhuzu1.addEventListener(egret.TouchEvent.TOUCH_TAP, this.chakanguai2buff, this);
        this.fuzhuzu2.touchEnabled = true;
        this.fuzhuzu2.addEventListener(egret.TouchEvent.TOUCH_TAP, this.chakanguai3buff, this);
        this.fuzhuzu.touchEnabled = true;
        this.fuzhuzu.addEventListener(egret.TouchEvent.TOUCH_TAP, this.chakanzijifuzhu1buff, this);
        this.fuzhuzu0.touchEnabled = true;
        this.fuzhuzu0.addEventListener(egret.TouchEvent.TOUCH_TAP, this.chakanzijifuzhu2buff, this);
    };
    //初始化自己人物数据
    Pvpzhandoujiemian.prototype.chushihuarenwu = function () {
        this.zijidengji.text = "" + Gerenshuxing.xingfudengji;
        this.zijimingzi_pvp.text = Gerenshuxing.mingzi;
        this.lashuxing_pvp_0.text = "" + Gerenshuxing.gerenla;
        this.mashuxing_pvp_0.text = "" + Gerenshuxing.gerenma;
        this.suanshuxing_pvp_0.text = "" + Gerenshuxing.gerensuan;
        this.tianshuxing_pvp_0.text = "" + Gerenshuxing.gerentian;
        //自己buff显示刷新
        this.buff_0 = [];
        this.zijibuffxianshi();
        //显示自己的头像
        this.xianshizijitouxiang();
        //计算自己当前的可使用食盒
        this.houxuancaizu_0 = Gerenshuxing.jiesuocaipin;
        //		console.log(this.houxuancaizu,Gerenshuxing.jiesuocaipin);
        this.di1caiid_0 = "0";
        this.di2caiid_0 = "0";
        this.di3caiid_0 = "0";
        this.di4caiid_0 = "0";
        //计算自己的气血值
        this.qixue_0 = Gerenshuxing.gerenaixin;
        this.qixueshangxian_0 = Gerenshuxing.gerenaixin;
        this.sudu_0 = Gerenshuxing.gerenxingzhi;
        this.fangyu_0 = Gerenshuxing.gerenyizhi;
        if (this.fangyu_0 > 800) {
            this.fangyu_0 = 800;
        }
        this.chushisudu_0 = this.sudu_0;
        this.chushifangyu_0 = this.fangyu_0;
        this.zijila_0 = Gerenshuxing.gerenla;
        this.zijima_0 = Gerenshuxing.gerenma;
        this.zijisuan_0 = Gerenshuxing.gerensuan;
        this.zijitian_0 = Gerenshuxing.gerentian;
        this.chushizijila_0 = this.zijila_0;
        this.chushizijima_0 = this.zijima_0;
        this.chushizijisuan_0 = this.zijisuan_0;
        this.chushizijitian_0 = this.zijitian_0;
        //自己的回合数初始为0；
        this.zijihuiheshu = 0;
        this.huiheshuxianshi();
        //刷新自己的意志力
        this.zijiyizhilishua();
        //初始显示食盒的数量
        this.shihexianshi();
        //开放下面的四个菜品点击查看菜品TIPS界面
        this.caixuanxiang_pvp_0.touchEnabled = true;
        this.caixuanxiang_pvp_0.addEventListener(egret.TouchEvent.TOUCH_TAP, this.chakancai1tips, this);
        this.caixuanxiang_pvp_1.touchEnabled = true;
        this.caixuanxiang_pvp_1.addEventListener(egret.TouchEvent.TOUCH_TAP, this.chakancai2tips, this);
        this.caixuanxiang_pvp_2.touchEnabled = true;
        this.caixuanxiang_pvp_2.addEventListener(egret.TouchEvent.TOUCH_TAP, this.chakancai3tips, this);
        this.caixuanxiang_pvp_3.touchEnabled = true;
        this.caixuanxiang_pvp_3.addEventListener(egret.TouchEvent.TOUCH_TAP, this.chakancai4tips, this);
    };
    //初始化自己辅助1的数据
    Pvpzhandoujiemian.prototype.chushihuazijifuzhi1 = function () {
        this.fuzhu1qixue_0 = this.fuzhuqixuejisuan(parseInt(Gerenshuxing.daerzixinxi[1]) + 20);
        this.fuzhu1fangyu_0 = this.fuzhufangyujisuan(parseInt(Gerenshuxing.daerzixinxi[1]));
        this.fuzhu1sudu_0 = this.fuzhusudujisuan(parseInt(Gerenshuxing.daerzixinxi[1]));
        this.fuzhu1gongji_0 = this.fuzhugongji(parseInt(Gerenshuxing.daerzixinxi[1]));
        this.fuzhu1qixueshangxian_0 = this.fuzhu1qixue_0;
        this.fuzhu1chushisudu_0 = this.fuzhu1sudu_0;
        this.fuzhu1chushifangyu_0 = this.fuzhu1fangyu_0;
        this.fuzhu1chushigongji_0 = this.fuzhu1gongji_0;
        //自己buff显示刷新
        this.buff_1 = [];
        this.zijifuzhu1buffxianshi();
    };
    //初始化自己辅助2的数据
    Pvpzhandoujiemian.prototype.chushihuazijifuzhi2 = function () {
        this.fuzhu2qixue_0 = this.fuzhuqixuejisuan(parseInt(Gerenshuxing.ererzixinxi[1]));
        this.fuzhu2fangyu_0 = this.fuzhufangyujisuan(parseInt(Gerenshuxing.ererzixinxi[1]));
        this.fuzhu2sudu_0 = this.fuzhusudujisuan(parseInt(Gerenshuxing.ererzixinxi[1]) + 200);
        this.fuzhu2gongji_0 = this.fuzhugongji(parseInt(Gerenshuxing.ererzixinxi[1]));
        this.fuzhu2qixueshangxian_0 = this.fuzhu2qixue_0;
        this.fuzhu2chushisudu_0 = this.fuzhu2sudu_0;
        this.fuzhu2chushifangyu_0 = this.fuzhu2fangyu_0;
        this.fuzhu2chushigongji_0 = this.fuzhu2gongji_0;
        //自己buff显示刷新
        this.buff_2 = [];
        this.zijifuzhu2buffxianshi();
    };
    //计算辅助的气血公式
    Pvpzhandoujiemian.prototype.fuzhuqixuejisuan = function (shuzhi) {
        var qixuezhi = shuzhi * 10 + 300;
        return qixuezhi;
    };
    //计算辅助的防御公式
    Pvpzhandoujiemian.prototype.fuzhufangyujisuan = function (shuzhi) {
        var fangyu = 0;
        return fangyu;
    };
    //计算辅助的速度公式
    Pvpzhandoujiemian.prototype.fuzhusudujisuan = function (shuzhi) {
        var sudu = 50 + Math.floor(shuzhi / 100) + 1;
        if (sudu > 120) {
            sudu = 120;
        }
        return sudu;
    };
    //计算辅助的攻击公式
    Pvpzhandoujiemian.prototype.fuzhugongji = function (shuzhi) {
        var gongji = shuzhi * 4;
        return gongji;
    };
    //初始化敌人辅助1的数据
    Pvpzhandoujiemian.prototype.chushihuadirenfuzhi1 = function () {
        this.fuzhu1qixue_1 = this.fuzhuqixuejisuan(parseInt(this.direnxinxi.daerzixinxi[1]) + 20);
        this.fuzhu1fangyu_1 = this.fuzhufangyujisuan(parseInt(this.direnxinxi.daerzixinxi[1]));
        this.fuzhu1sudu_1 = this.fuzhusudujisuan(parseInt(this.direnxinxi.daerzixinxi[1]));
        this.fuzhu1gongji_1 = this.fuzhugongji(parseInt(this.direnxinxi.daerzixinxi[1]));
        this.fuzhu1qixueshangxian_1 = this.fuzhu1qixue_1;
        this.fuzhu1chushisudu_1 = this.fuzhu1sudu_1;
        this.fuzhu1chushifangyu_1 = this.fuzhu1fangyu_1;
        this.fuzhu1chushigongji_1 = this.fuzhu1gongji_1;
        //敌人buff显示刷新
        this.buff_4 = [];
        this.direnfuzhu1buffxianshi();
    };
    //初始化敌人辅助2的数据
    Pvpzhandoujiemian.prototype.chushihuadirenfuzhi2 = function () {
        this.fuzhu2qixue_1 = this.fuzhuqixuejisuan(parseInt(this.direnxinxi.ererzixinxi[1]));
        this.fuzhu2fangyu_1 = this.fuzhufangyujisuan(parseInt(this.direnxinxi.ererzixinxi[1]));
        this.fuzhu2sudu_1 = this.fuzhusudujisuan(parseInt(this.direnxinxi.ererzixinxi[1]) + 200);
        this.fuzhu2gongji_1 = this.fuzhugongji(parseInt(this.direnxinxi.ererzixinxi[1]));
        this.fuzhu2qixueshangxian_1 = this.fuzhu2qixue_1;
        this.fuzhu2chushisudu_1 = this.fuzhu2sudu_1;
        this.fuzhu2chushifangyu_1 = this.fuzhu2fangyu_1;
        this.fuzhu2chushigongji_1 = this.fuzhu2gongji_1;
        //敌人buff显示刷新
        this.buff_5 = [];
        this.direnfuzhu2buffxianshi();
    };
    //初始化敌人数据
    Pvpzhandoujiemian.prototype.chushihuadiren = function () {
        //计算一次敌人各项属性
        this.direnshujujisuan(this.direnxinxi);
        //敌人buff显示刷新
        this.buff_3 = [];
        this.direnbuffxianshi();
        //显示敌人的头像
        this.xianshidirentouxiang();
        //计算自己当前的可使用食盒
        this.houxuancaizu_1 = this.direnxinxi.jiesuocaipin;
        this.di1caiid_1 = "0";
        this.di2caiid_1 = "0";
        this.di3caiid_1 = "0";
        this.di4caiid_1 = "0";
        //初始显示食盒的数量
        this.direnshihexianshi();
        //刷新敌人的意志力
        this.direnyizhilishua();
    };
    //敌人数据计算
    Pvpzhandoujiemian.prototype.direnshujujisuan = function (direnshuxing) {
        var direndengji = 0;
        var dirennaixin = 0;
        var direnyizhi = 0;
        var direnxingzhi = 0;
        var direnla = 0;
        var direnma = 0;
        var dirensuan = 0;
        var direntian = 0;
        for (var i = 0; i < Gerenshuxing.gerendengjibiao.length; i++) {
            if (direnshuxing.xingfuzhi >= parseInt(Gerenshuxing.gerendengjibiao[Gerenshuxing.gerendengjibiao.length - 1].levelexp)) {
                direndengji = parseInt(Gerenshuxing.gerendengjibiao[Gerenshuxing.gerendengjibiao.length - 1].id);
                dirennaixin = parseInt(Gerenshuxing.gerendengjibiao[Gerenshuxing.gerendengjibiao.length - 1].naixinadd);
                direnyizhi = parseInt(Gerenshuxing.gerendengjibiao[Gerenshuxing.gerendengjibiao.length - 1].yizhiadd);
                direnxingzhi = parseInt(Gerenshuxing.gerendengjibiao[Gerenshuxing.gerendengjibiao.length - 1].xingzhiadd);
                direnla = parseInt(Gerenshuxing.gerendengjibiao[Gerenshuxing.gerendengjibiao.length - 1].laxiadd);
                direnma = parseInt(Gerenshuxing.gerendengjibiao[Gerenshuxing.gerendengjibiao.length - 1].maxiadd);
                dirensuan = parseInt(Gerenshuxing.gerendengjibiao[Gerenshuxing.gerendengjibiao.length - 1].suanxiadd);
                direntian = parseInt(Gerenshuxing.gerendengjibiao[Gerenshuxing.gerendengjibiao.length - 1].tianxiadd);
                break;
            }
            else {
                if (direnshuxing.xingfuzhi >= parseInt(Gerenshuxing.gerendengjibiao[i].levelexp) && direnshuxing.xingfuzhi < parseInt(Gerenshuxing.gerendengjibiao[i + 1].levelexp)) {
                    direndengji = parseInt(Gerenshuxing.gerendengjibiao[i].id);
                    dirennaixin = parseInt(Gerenshuxing.gerendengjibiao[i].naixinadd);
                    direnyizhi = parseInt(Gerenshuxing.gerendengjibiao[i].yizhiadd);
                    direnxingzhi = parseInt(Gerenshuxing.gerendengjibiao[i].xingzhiadd);
                    direnla = parseInt(Gerenshuxing.gerendengjibiao[i].laxiadd);
                    direnma = parseInt(Gerenshuxing.gerendengjibiao[i].maxiadd);
                    dirensuan = parseInt(Gerenshuxing.gerendengjibiao[i].suanxiadd);
                    direntian = parseInt(Gerenshuxing.gerendengjibiao[i].tianxiadd);
                    break;
                }
            }
        }
        var xingzhishangxian = direnshuxing.kaixinzhi;
        if (xingzhishangxian > 1000) {
            xingzhishangxian = 1000;
        }
        this.qixue_1 = dirennaixin + Math.floor(dirennaixin * direnshuxing.jiankangzhi / 1000);
        this.qixueshangxian_1 = this.qixue_1;
        this.fangyu_1 = direnyizhi + Math.floor(direnyizhi * xingzhishangxian / 1000);
        if (this.fangyu_1 > 800) {
            this.fangyu_1 = 800;
        }
        this.sudu_1 = direnxingzhi;
        this.direnla_1 = direnla + direnshuxing.tishengxingfula;
        this.direnma_1 = direnma + direnshuxing.tishengxingfuma;
        this.dirensuan_1 = dirensuan + direnshuxing.tishengxingfusuan;
        this.direntian_1 = direntian + direnshuxing.tishengxingfutian;
        this.chushifangyu_1 = this.fangyu_1;
        this.chushisudu_1 = this.sudu_1;
        this.chushidirenla_1 = this.direnla_1;
        this.chushidirenma_1 = this.direnma_1;
        this.chushidirensuan_1 = this.dirensuan_1;
        this.chushidirentian_1 = this.direntian_1;
        //console.log( "敌人的各项属性：" + this.qixue_1,this.fangyu_1,this.sudu_1,this.direnla_1,this.direnma_1,this.dirensuan_1,this.direntian_1);
        //这里每次变更，应该告诉主界面刷新一次个人等级
        this.direndengji = direndengji;
        this.dengji_pvp_1.text = "" + direndengji;
        this.mingzi_pvp_1.text = direnshuxing.mingzi;
        this.lashuxing_pvp_1.text = "" + this.direnla_1;
        this.mashuxing_pvp_1.text = "" + this.direnma_1;
        this.suanshuxing_pvp_1.text = "" + this.dirensuan_1;
        this.tianshuxing_pvp_1.text = "" + this.direntian_1;
    };
    Pvpzhandoujiemian.prototype.guanbijiemian = function () {
        Gamesound.Soundkongzhi().anniuyinxiao();
        this.zhandoujiesu = true;
        Gameguanli.Kongzhitai().pvpzhandoujiemian("guan", 1, 1);
        //		this.zhizhendingshi.stop();
        this.zhizhendingshi = null;
        //		this.huihejishiqi.stop();
        this.huihejishiqi = null;
        //		this.daojishigundong.stop();
        this.daojishigundong = null;
    };
    //初始显示食盒的数量
    Pvpzhandoujiemian.prototype.shihexianshi = function () {
        if (this.houxuancaizu_0.length >= 10) {
            this.shihewenzishu_pvp_0.text = "9+";
        }
        else {
            if (this.houxuancaizu_0.length <= 0) {
                this.shihewenzishu_pvp_0.text = "空";
            }
            else {
                this.shihewenzishu_pvp_0.text = "" + this.houxuancaizu_0.length;
            }
        }
    };
    //初始显示食盒的数量
    Pvpzhandoujiemian.prototype.direnshihexianshi = function () {
        if (this.houxuancaizu_1.length >= 10) {
            this.shihewenzishu_pvp_1.text = "9+";
        }
        else {
            if (this.houxuancaizu_1.length <= 0) {
                this.shihewenzishu_pvp_1.text = "空";
            }
            else {
                this.shihewenzishu_pvp_1.text = "" + this.houxuancaizu_1.length;
            }
        }
    };
    //初始化滚动指针位置
    Pvpzhandoujiemian.prototype.gundongzhizhen = function () {
        //打开6个行动条组
        this.jinduzu_pvp_0.alpha = 1;
        this.jinduzu_pvp_1.alpha = 1;
        this.jinduzu_pvp_2.alpha = 1;
        this.jinduzu_pvp_3.alpha = 1;
        this.jinduzu_pvp_4.alpha = 1;
        this.jinduzu_pvp_5.alpha = 1;
        //自己滚动指针
        this.jinduzu_pvp_0.y = this.img_sudujindu_pvp.y + this.img_sudujindu_pvp.height - this.jinduzu_pvp_0.height;
        this.zhizhen_0 = this.jinduzu_pvp_0.y;
        //自己辅助1滚动指针
        this.jinduzu_pvp_1.y = this.img_sudujindu_pvp.y + this.img_sudujindu_pvp.height - this.jinduzu_pvp_1.height;
        this.zhizhen_1 = this.jinduzu_pvp_1.y;
        //自己辅助2滚动指针
        this.jinduzu_pvp_2.y = this.img_sudujindu_pvp.y + this.img_sudujindu_pvp.height - this.jinduzu_pvp_2.height;
        this.zhizhen_2 = this.jinduzu_pvp_2.y;
        //敌人滚动指针
        this.jinduzu_pvp_3.y = this.img_sudujindu_pvp.y + this.img_sudujindu_pvp.height - this.jinduzu_pvp_3.height;
        this.zhizhen_3 = this.jinduzu_pvp_3.y;
        //敌人辅助1滚动指针
        this.jinduzu_pvp_4.y = this.img_sudujindu_pvp.y + this.img_sudujindu_pvp.height - this.jinduzu_pvp_4.height;
        this.zhizhen_4 = this.jinduzu_pvp_4.y;
        //敌人辅助2滚动指针
        this.jinduzu_pvp_5.y = this.img_sudujindu_pvp.y + this.img_sudujindu_pvp.height - this.jinduzu_pvp_5.height;
        this.zhizhen_5 = this.jinduzu_pvp_5.y;
        //自己辅助1滚动指针显示头像
        this.touxiangtu_pvp_1.source = "img_daerzitouxiangkuang_png";
        //自己辅助2滚动指针显示头像
        this.touxiangtu_pvp_2.source = "img_ererzitouxiangkuang_png";
        //敌人辅助1滚动指针显示头像
        this.touxiangtu_pvp_4.source = "img_daerzitouxiangkuang_png";
        //敌人辅助2滚动指针显示头像
        this.touxiangtu_pvp_5.source = "img_ererzitouxiangkuang_png";
        //自己滚动指针显示头像
        this.zijizhizhentouxiang();
        //敌人滚动指针显示头像
        this.direnzhizhentouxiang();
        //开始进行指针的滚动
        this.zhizhengundong();
    };
    //指针开始滚动,这是每一回合进行的开始步骤
    Pvpzhandoujiemian.prototype.zhizhengundong = function () {
        //启动一个循环定时器
        //判断战斗是否已经结束
        //		this.panduanjiesuan();
        if (this.zhandoujiesu == false) {
            this.zhizhendingshi = new egret.Timer(100, 1);
            this.zhizhendingshi.addEventListener(egret.TimerEvent.TIMER, this.kaishizhizhenxingjin, this);
            this.zhizhendingshi.start();
        }
    };
    //开始指针行进
    Pvpzhandoujiemian.prototype.kaishizhizhenxingjin = function () {
        if (this.zhandoujiesu == false) {
            //初始化技能喊话内容
            /*this.guaiwuhanhua = "快点上菜吧...";
            this.zijihanhua = "";*/
            this.shangmiantishixianshi("等待双方上菜...");
            if (this.zhizhen_0 <= this.img_sudujindu_pvp.y) {
                this.zijixingdong();
            }
            else if (this.zhizhen_1 <= this.img_sudujindu_pvp.y) {
                this.zijifuzhu1xingdong();
            }
            else if (this.zhizhen_2 <= this.img_sudujindu_pvp.y) {
                this.zijifuzhu2xingdong();
            }
            else if (this.zhizhen_3 <= this.img_sudujindu_pvp.y) {
                this.direnxingdong();
            }
            else if (this.zhizhen_4 <= this.img_sudujindu_pvp.y) {
                this.direnfuzhu1xingdong();
            }
            else if (this.zhizhen_5 <= this.img_sudujindu_pvp.y) {
                this.direnfuzhu2xingdong();
            }
            else {
                if (this.jinduzu_pvp_0.alpha == 1) {
                    this.zhizhen_0 = this.zhizhen_0 - this.sudu_0 / 10;
                    egret.Tween.get(this.jinduzu_pvp_0).to({ y: this.zhizhen_0 }, 100);
                }
                if (this.jinduzu_pvp_1.alpha == 1) {
                    this.zhizhen_1 = this.zhizhen_1 - this.fuzhu1sudu_0 / 10;
                    egret.Tween.get(this.jinduzu_pvp_1).to({ y: this.zhizhen_1 }, 100);
                }
                if (this.jinduzu_pvp_2.alpha == 1) {
                    this.zhizhen_2 = this.zhizhen_2 - this.fuzhu2sudu_0 / 10;
                    egret.Tween.get(this.jinduzu_pvp_2).to({ y: this.zhizhen_2 }, 100);
                }
                if (this.jinduzu_pvp_3.alpha == 1) {
                    this.zhizhen_3 = this.zhizhen_3 - this.sudu_1 / 10;
                    egret.Tween.get(this.jinduzu_pvp_3).to({ y: this.zhizhen_3 }, 100);
                }
                if (this.jinduzu_pvp_4.alpha == 1) {
                    this.zhizhen_4 = this.zhizhen_4 - this.fuzhu1sudu_1 / 10;
                    egret.Tween.get(this.jinduzu_pvp_4).to({ y: this.zhizhen_4 }, 100);
                }
                if (this.jinduzu_pvp_5.alpha == 1) {
                    this.zhizhen_5 = this.zhizhen_5 - this.fuzhu2sudu_1 / 10;
                    egret.Tween.get(this.jinduzu_pvp_5).to({ y: this.zhizhen_5 }, 100);
                }
                this.zhizhengundong();
            }
        }
    };
    //自己行动时计算
    Pvpzhandoujiemian.prototype.zijixingdong = function () {
        if (this.zhandoujiesu == false) {
            //行动指针归零
            this.jinduzu_pvp_0.y = this.img_sudujindu_pvp.y + this.img_sudujindu_pvp.height - this.jinduzu_pvp_0.height;
            this.zhizhen_0 = this.jinduzu_pvp_0.y;
            //上面提示文字
            this.shangmiantishixianshi("快给对上上菜尝尝！");
            //开始生成气点
            this.qidianshu_0 += 2;
            //处理自己的buff效果
            this.chulizijidebuff();
            if (this.qidianshu_0 >= 10) {
                this.qidianshu_0 = 10;
            }
            this.chupairen = 0;
            this.chuzhaobiaozhi_0.alpha = 1;
            this.qidianshuxianshi();
            this.zijihuiheshu += 1;
            this.huiheshuxianshi();
            this.renwuhuihekaishi = true;
        }
    };
    //自己辅助1行动时计算
    Pvpzhandoujiemian.prototype.zijifuzhu1xingdong = function () {
        if (this.zhandoujiesu == false) {
            //行动指针归零
            this.jinduzu_pvp_1.y = this.img_sudujindu_pvp.y + this.img_sudujindu_pvp.height - this.jinduzu_pvp_1.height;
            this.zhizhen_1 = this.jinduzu_pvp_1.y;
            //上面提示文字
            this.shangmiantishixianshi("快给对上上菜尝尝！");
            //开始生成气点
            this.qidianshu_0 += 2;
            //处理自己的buff效果
            this.chulizijifuzhu1debuff();
            if (this.qidianshu_0 >= 10) {
                this.qidianshu_0 = 10;
            }
            this.chupairen = 1;
            this.chuzhaobiaozhi_1.alpha = 1;
            this.qidianshuxianshi();
            this.zijihuiheshu += 1;
            this.huiheshuxianshi();
            this.renwuhuihekaishi = true;
        }
    };
    //自己辅助2行动时计算
    Pvpzhandoujiemian.prototype.zijifuzhu2xingdong = function () {
        if (this.zhandoujiesu == false) {
            //行动指针归零
            this.jinduzu_pvp_2.y = this.img_sudujindu_pvp.y + this.img_sudujindu_pvp.height - this.jinduzu_pvp_2.height;
            this.zhizhen_2 = this.jinduzu_pvp_2.y;
            //上面提示文字
            this.shangmiantishixianshi("快给对上上菜尝尝！");
            //开始生成气点
            this.qidianshu_0 += 2;
            //处理自己的buff效果
            this.chulizijifuzhu2debuff();
            if (this.qidianshu_0 >= 10) {
                this.qidianshu_0 = 10;
            }
            this.chupairen = 2;
            this.chuzhaobiaozhi_2.alpha = 1;
            this.qidianshuxianshi();
            this.zijihuiheshu += 1;
            this.huiheshuxianshi();
            this.renwuhuihekaishi = true;
        }
    };
    //敌人行动时计算
    Pvpzhandoujiemian.prototype.direnxingdong = function () {
        if (this.zhandoujiesu == false) {
            //行动指针归零
            this.jinduzu_pvp_3.y = this.img_sudujindu_pvp.y + this.img_sudujindu_pvp.height - this.jinduzu_pvp_3.height;
            this.zhizhen_3 = this.jinduzu_pvp_3.y;
            //上面提示文字
            this.shangmiantishixianshi("尝尝对方的菜！");
            //开始生成气点
            this.qidianshu_1 += 2;
            //处理自己的buff效果
            this.chuliderendebuff();
            if (this.qidianshu_1 >= 10) {
                this.qidianshu_1 = 10;
            }
            this.chupairen = 3;
            this.chuzhaobiaozhi_3.alpha = 1;
            this.direnqidianshuxianshi();
            this.direnhuihekaishi = true;
        }
    };
    //敌人辅助1行动时计算
    Pvpzhandoujiemian.prototype.direnfuzhu1xingdong = function () {
        if (this.zhandoujiesu == false) {
            //行动指针归零
            this.jinduzu_pvp_4.y = this.img_sudujindu_pvp.y + this.img_sudujindu_pvp.height - this.jinduzu_pvp_4.height;
            this.zhizhen_4 = this.jinduzu_pvp_4.y;
            //上面提示文字
            this.shangmiantishixianshi("尝尝对方的菜！");
            //开始生成气点
            this.qidianshu_1 += 2;
            //处理自己的buff效果
            this.chulidirenfuzhu1debuff();
            if (this.qidianshu_1 >= 10) {
                this.qidianshu_1 = 10;
            }
            this.chupairen = 4;
            this.chuzhaobiaozhi_4.alpha = 1;
            this.direnqidianshuxianshi();
            this.direnhuihekaishi = true;
        }
    };
    //自己辅助2行动时计算
    Pvpzhandoujiemian.prototype.direnfuzhu2xingdong = function () {
        if (this.zhandoujiesu == false) {
            //行动指针归零
            this.jinduzu_pvp_5.y = this.img_sudujindu_pvp.y + this.img_sudujindu_pvp.height - this.jinduzu_pvp_5.height;
            this.zhizhen_5 = this.jinduzu_pvp_5.y;
            //上面提示文字
            this.shangmiantishixianshi("尝尝对方的菜！");
            //开始生成气点
            this.qidianshu_1 += 2;
            //处理自己的buff效果
            this.chulidirenfuzhu2debuff();
            if (this.qidianshu_1 >= 10) {
                this.qidianshu_1 = 10;
            }
            this.chupairen = 5;
            this.chuzhaobiaozhi_5.alpha = 1;
            this.direnqidianshuxianshi();
            this.direnhuihekaishi = true;
        }
    };
    //显示气点数量
    Pvpzhandoujiemian.prototype.qidianshuxianshi = function () {
        var _this = this;
        this.benhuihechucaiid_0 = "0";
        switch (this.qidianshu_0) {
            case 0:
                this.tiaoliao_pvp_0.alpha = 0;
                this.tiaoliao_pvp_1.alpha = 0;
                this.tiaoliao_pvp_2.alpha = 0;
                this.tiaoliao_pvp_3.alpha = 0;
                this.tiaoliao_pvp_4.alpha = 0;
                this.tiaoliao_pvp_5.alpha = 0;
                this.tiaoliao_pvp_6.alpha = 0;
                this.tiaoliao_pvp_7.alpha = 0;
                this.tiaoliao_pvp_8.alpha = 0;
                this.tiaoliao_pvp_9.alpha = 0;
                this.tishixuanzexianshi("配料不足！无法上菜");
                break;
            case 1:
                this.tishixuanzexianshi("正在补充配料");
                egret.Tween.get(this.tiaoliao_pvp_0).to({ alpha: 1 }, 200).call(function () {
                    _this.tishixuanzexianshi("配料补充完毕！");
                    _this.kaifangshangcai();
                });
                this.tiaoliao_pvp_1.alpha = 0;
                this.tiaoliao_pvp_2.alpha = 0;
                this.tiaoliao_pvp_3.alpha = 0;
                this.tiaoliao_pvp_4.alpha = 0;
                this.tiaoliao_pvp_5.alpha = 0;
                this.tiaoliao_pvp_6.alpha = 0;
                this.tiaoliao_pvp_7.alpha = 0;
                this.tiaoliao_pvp_8.alpha = 0;
                this.tiaoliao_pvp_9.alpha = 0;
                break;
            case 2:
                this.tishixuanzexianshi("正在补充配料");
                egret.Tween.get(this.tiaoliao_pvp_0).to({ alpha: 1 }, 200).call(function () {
                    egret.Tween.get(_this.tiaoliao_pvp_1).to({ alpha: 1 }, 200).call(function () {
                        _this.tishixuanzexianshi("配料补充完毕！");
                        _this.kaifangshangcai();
                    });
                });
                this.tiaoliao_pvp_2.alpha = 0;
                this.tiaoliao_pvp_3.alpha = 0;
                this.tiaoliao_pvp_4.alpha = 0;
                this.tiaoliao_pvp_5.alpha = 0;
                this.tiaoliao_pvp_6.alpha = 0;
                this.tiaoliao_pvp_7.alpha = 0;
                this.tiaoliao_pvp_8.alpha = 0;
                this.tiaoliao_pvp_9.alpha = 0;
                break;
            case 3:
                this.tishixuanzexianshi("正在补充配料");
                egret.Tween.get(this.tiaoliao_pvp_0).to({ alpha: 1 }, 200).call(function () {
                    egret.Tween.get(_this.tiaoliao_pvp_1).to({ alpha: 1 }, 200).call(function () {
                        egret.Tween.get(_this.tiaoliao_pvp_2).to({ alpha: 1 }, 200).call(function () {
                            _this.tishixuanzexianshi("配料补充完毕！");
                            _this.kaifangshangcai();
                        });
                    });
                });
                this.tiaoliao_pvp_3.alpha = 0;
                this.tiaoliao_pvp_4.alpha = 0;
                this.tiaoliao_pvp_5.alpha = 0;
                this.tiaoliao_pvp_6.alpha = 0;
                this.tiaoliao_pvp_7.alpha = 0;
                this.tiaoliao_pvp_8.alpha = 0;
                this.tiaoliao_pvp_9.alpha = 0;
                break;
            case 4:
                this.tishixuanzexianshi("正在补充配料");
                egret.Tween.get(this.tiaoliao_pvp_0).to({ alpha: 1 }, 200).call(function () {
                    egret.Tween.get(_this.tiaoliao_pvp_1).to({ alpha: 1 }, 200).call(function () {
                        egret.Tween.get(_this.tiaoliao_pvp_2).to({ alpha: 1 }, 200).call(function () {
                            egret.Tween.get(_this.tiaoliao_pvp_3).to({ alpha: 1 }, 200).call(function () {
                                _this.tishixuanzexianshi("配料补充完毕！");
                                _this.kaifangshangcai();
                            });
                        });
                    });
                });
                this.tiaoliao_pvp_4.alpha = 0;
                this.tiaoliao_pvp_5.alpha = 0;
                this.tiaoliao_pvp_6.alpha = 0;
                this.tiaoliao_pvp_7.alpha = 0;
                this.tiaoliao_pvp_8.alpha = 0;
                this.tiaoliao_pvp_9.alpha = 0;
                break;
            case 5:
                this.tishixuanzexianshi("正在补充配料");
                egret.Tween.get(this.tiaoliao_pvp_0).to({ alpha: 1 }, 200).call(function () {
                    egret.Tween.get(_this.tiaoliao_pvp_1).to({ alpha: 1 }, 200).call(function () {
                        egret.Tween.get(_this.tiaoliao_pvp_2).to({ alpha: 1 }, 200).call(function () {
                            egret.Tween.get(_this.tiaoliao_pvp_3).to({ alpha: 1 }, 200).call(function () {
                                egret.Tween.get(_this.tiaoliao_pvp_4).to({ alpha: 1 }, 200).call(function () {
                                    _this.tishixuanzexianshi("配料补充完毕！");
                                    _this.kaifangshangcai();
                                });
                            });
                        });
                    });
                });
                this.tiaoliao_pvp_5.alpha = 0;
                this.tiaoliao_pvp_6.alpha = 0;
                this.tiaoliao_pvp_7.alpha = 0;
                this.tiaoliao_pvp_8.alpha = 0;
                this.tiaoliao_pvp_9.alpha = 0;
                break;
            case 6:
                this.tishixuanzexianshi("正在补充配料");
                egret.Tween.get(this.tiaoliao_pvp_0).to({ alpha: 1 }, 200).call(function () {
                    egret.Tween.get(_this.tiaoliao_pvp_1).to({ alpha: 1 }, 200).call(function () {
                        egret.Tween.get(_this.tiaoliao_pvp_2).to({ alpha: 1 }, 200).call(function () {
                            egret.Tween.get(_this.tiaoliao_pvp_3).to({ alpha: 1 }, 200).call(function () {
                                egret.Tween.get(_this.tiaoliao_pvp_4).to({ alpha: 1 }, 200).call(function () {
                                    egret.Tween.get(_this.tiaoliao_pvp_5).to({ alpha: 1 }, 200).call(function () {
                                        _this.tishixuanzexianshi("配料补充完毕！");
                                        _this.kaifangshangcai();
                                    });
                                });
                            });
                        });
                    });
                });
                this.tiaoliao_pvp_6.alpha = 0;
                this.tiaoliao_pvp_7.alpha = 0;
                this.tiaoliao_pvp_8.alpha = 0;
                this.tiaoliao_pvp_9.alpha = 0;
                break;
            case 7:
                this.tishixuanzexianshi("正在补充配料");
                egret.Tween.get(this.tiaoliao_pvp_0).to({ alpha: 1 }, 200).call(function () {
                    egret.Tween.get(_this.tiaoliao_pvp_1).to({ alpha: 1 }, 200).call(function () {
                        egret.Tween.get(_this.tiaoliao_pvp_2).to({ alpha: 1 }, 200).call(function () {
                            egret.Tween.get(_this.tiaoliao_pvp_3).to({ alpha: 1 }, 200).call(function () {
                                egret.Tween.get(_this.tiaoliao_pvp_4).to({ alpha: 1 }, 200).call(function () {
                                    egret.Tween.get(_this.tiaoliao_pvp_5).to({ alpha: 1 }, 200).call(function () {
                                        egret.Tween.get(_this.tiaoliao_pvp_6).to({ alpha: 1 }, 200).call(function () {
                                            _this.tishixuanzexianshi("配料补充完毕！");
                                            _this.kaifangshangcai();
                                        });
                                    });
                                });
                            });
                        });
                    });
                });
                this.tiaoliao_pvp_7.alpha = 0;
                this.tiaoliao_pvp_8.alpha = 0;
                this.tiaoliao_pvp_9.alpha = 0;
                break;
            case 8:
                this.tishixuanzexianshi("正在补充配料");
                egret.Tween.get(this.tiaoliao_pvp_0).to({ alpha: 1 }, 200).call(function () {
                    egret.Tween.get(_this.tiaoliao_pvp_1).to({ alpha: 1 }, 200).call(function () {
                        egret.Tween.get(_this.tiaoliao_pvp_2).to({ alpha: 1 }, 200).call(function () {
                            egret.Tween.get(_this.tiaoliao_pvp_3).to({ alpha: 1 }, 200).call(function () {
                                egret.Tween.get(_this.tiaoliao_pvp_4).to({ alpha: 1 }, 200).call(function () {
                                    egret.Tween.get(_this.tiaoliao_pvp_5).to({ alpha: 1 }, 200).call(function () {
                                        egret.Tween.get(_this.tiaoliao_pvp_6).to({ alpha: 1 }, 200).call(function () {
                                            egret.Tween.get(_this.tiaoliao_pvp_7).to({ alpha: 1 }, 200).call(function () {
                                                _this.tishixuanzexianshi("配料补充完毕！");
                                                _this.kaifangshangcai();
                                            });
                                        });
                                    });
                                });
                            });
                        });
                    });
                });
                this.tiaoliao_pvp_8.alpha = 0;
                this.tiaoliao_pvp_9.alpha = 0;
                break;
            case 9:
                this.tishixuanzexianshi("正在补充配料");
                egret.Tween.get(this.tiaoliao_pvp_0).to({ alpha: 1 }, 200).call(function () {
                    egret.Tween.get(_this.tiaoliao_pvp_1).to({ alpha: 1 }, 200).call(function () {
                        egret.Tween.get(_this.tiaoliao_pvp_2).to({ alpha: 1 }, 200).call(function () {
                            egret.Tween.get(_this.tiaoliao_pvp_3).to({ alpha: 1 }, 200).call(function () {
                                egret.Tween.get(_this.tiaoliao_pvp_4).to({ alpha: 1 }, 200).call(function () {
                                    egret.Tween.get(_this.tiaoliao_pvp_5).to({ alpha: 1 }, 200).call(function () {
                                        egret.Tween.get(_this.tiaoliao_pvp_6).to({ alpha: 1 }, 200).call(function () {
                                            egret.Tween.get(_this.tiaoliao_pvp_7).to({ alpha: 1 }, 200).call(function () {
                                                egret.Tween.get(_this.tiaoliao_pvp_8).to({ alpha: 1 }, 200).call(function () {
                                                    _this.tishixuanzexianshi("配料补充完毕！");
                                                    _this.kaifangshangcai();
                                                });
                                            });
                                        });
                                    });
                                });
                            });
                        });
                    });
                });
                this.tiaoliao_pvp_9.alpha = 0;
                break;
            case 10:
                this.tishixuanzexianshi("正在补充配料");
                egret.Tween.get(this.tiaoliao_pvp_0).to({ alpha: 1 }, 200).call(function () {
                    egret.Tween.get(_this.tiaoliao_pvp_1).to({ alpha: 1 }, 200).call(function () {
                        egret.Tween.get(_this.tiaoliao_pvp_2).to({ alpha: 1 }, 200).call(function () {
                            egret.Tween.get(_this.tiaoliao_pvp_3).to({ alpha: 1 }, 200).call(function () {
                                egret.Tween.get(_this.tiaoliao_pvp_4).to({ alpha: 1 }, 200).call(function () {
                                    egret.Tween.get(_this.tiaoliao_pvp_5).to({ alpha: 1 }, 200).call(function () {
                                        egret.Tween.get(_this.tiaoliao_pvp_6).to({ alpha: 1 }, 200).call(function () {
                                            egret.Tween.get(_this.tiaoliao_pvp_7).to({ alpha: 1 }, 200).call(function () {
                                                egret.Tween.get(_this.tiaoliao_pvp_8).to({ alpha: 1 }, 200).call(function () {
                                                    egret.Tween.get(_this.tiaoliao_pvp_9).to({ alpha: 1 }, 200).call(function () {
                                                        _this.tishixuanzexianshi("配料补充完毕！");
                                                        _this.kaifangshangcai();
                                                    });
                                                });
                                            });
                                        });
                                    });
                                });
                            });
                        });
                    });
                });
                break;
        }
    };
    //显示敌人气点数量
    Pvpzhandoujiemian.prototype.direnqidianshuxianshi = function () {
        var _this = this;
        this.benhuihechucaiid_1 = "0";
        switch (this.qidianshu_1) {
            case 0:
                this.tiaoliao_pvp_10.alpha = 0;
                this.tiaoliao_pvp_11.alpha = 0;
                this.tiaoliao_pvp_12.alpha = 0;
                this.tiaoliao_pvp_13.alpha = 0;
                this.tiaoliao_pvp_14.alpha = 0;
                this.tiaoliao_pvp_15.alpha = 0;
                this.tiaoliao_pvp_16.alpha = 0;
                this.tiaoliao_pvp_17.alpha = 0;
                this.tiaoliao_pvp_18.alpha = 0;
                this.tiaoliao_pvp_19.alpha = 0;
                break;
            case 1:
                egret.Tween.get(this.tiaoliao_pvp_10).to({ alpha: 1 }, 200).call(function () {
                    _this.kaifangdirenshangcai();
                });
                this.tiaoliao_pvp_11.alpha = 0;
                this.tiaoliao_pvp_12.alpha = 0;
                this.tiaoliao_pvp_13.alpha = 0;
                this.tiaoliao_pvp_14.alpha = 0;
                this.tiaoliao_pvp_15.alpha = 0;
                this.tiaoliao_pvp_16.alpha = 0;
                this.tiaoliao_pvp_17.alpha = 0;
                this.tiaoliao_pvp_18.alpha = 0;
                this.tiaoliao_pvp_19.alpha = 0;
                break;
            case 2:
                egret.Tween.get(this.tiaoliao_pvp_10).to({ alpha: 1 }, 200).call(function () {
                    egret.Tween.get(_this.tiaoliao_pvp_11).to({ alpha: 1 }, 200).call(function () {
                        _this.kaifangdirenshangcai();
                    });
                });
                this.tiaoliao_pvp_12.alpha = 0;
                this.tiaoliao_pvp_13.alpha = 0;
                this.tiaoliao_pvp_14.alpha = 0;
                this.tiaoliao_pvp_15.alpha = 0;
                this.tiaoliao_pvp_16.alpha = 0;
                this.tiaoliao_pvp_17.alpha = 0;
                this.tiaoliao_pvp_18.alpha = 0;
                this.tiaoliao_pvp_19.alpha = 0;
                break;
            case 3:
                egret.Tween.get(this.tiaoliao_pvp_10).to({ alpha: 1 }, 200).call(function () {
                    egret.Tween.get(_this.tiaoliao_pvp_11).to({ alpha: 1 }, 200).call(function () {
                        egret.Tween.get(_this.tiaoliao_pvp_12).to({ alpha: 1 }, 200).call(function () {
                            _this.kaifangdirenshangcai();
                        });
                    });
                });
                this.tiaoliao_pvp_13.alpha = 0;
                this.tiaoliao_pvp_14.alpha = 0;
                this.tiaoliao_pvp_15.alpha = 0;
                this.tiaoliao_pvp_16.alpha = 0;
                this.tiaoliao_pvp_17.alpha = 0;
                this.tiaoliao_pvp_18.alpha = 0;
                this.tiaoliao_pvp_19.alpha = 0;
                break;
            case 4:
                egret.Tween.get(this.tiaoliao_pvp_10).to({ alpha: 1 }, 200).call(function () {
                    egret.Tween.get(_this.tiaoliao_pvp_11).to({ alpha: 1 }, 200).call(function () {
                        egret.Tween.get(_this.tiaoliao_pvp_12).to({ alpha: 1 }, 200).call(function () {
                            egret.Tween.get(_this.tiaoliao_pvp_13).to({ alpha: 1 }, 200).call(function () {
                                _this.kaifangdirenshangcai();
                            });
                        });
                    });
                });
                this.tiaoliao_pvp_14.alpha = 0;
                this.tiaoliao_pvp_15.alpha = 0;
                this.tiaoliao_pvp_16.alpha = 0;
                this.tiaoliao_pvp_17.alpha = 0;
                this.tiaoliao_pvp_18.alpha = 0;
                this.tiaoliao_pvp_19.alpha = 0;
                break;
            case 5:
                egret.Tween.get(this.tiaoliao_pvp_10).to({ alpha: 1 }, 200).call(function () {
                    egret.Tween.get(_this.tiaoliao_pvp_11).to({ alpha: 1 }, 200).call(function () {
                        egret.Tween.get(_this.tiaoliao_pvp_12).to({ alpha: 1 }, 200).call(function () {
                            egret.Tween.get(_this.tiaoliao_pvp_13).to({ alpha: 1 }, 200).call(function () {
                                egret.Tween.get(_this.tiaoliao_pvp_14).to({ alpha: 1 }, 200).call(function () {
                                    _this.kaifangdirenshangcai();
                                });
                            });
                        });
                    });
                });
                this.tiaoliao_pvp_15.alpha = 0;
                this.tiaoliao_pvp_16.alpha = 0;
                this.tiaoliao_pvp_17.alpha = 0;
                this.tiaoliao_pvp_18.alpha = 0;
                this.tiaoliao_pvp_19.alpha = 0;
                break;
            case 6:
                egret.Tween.get(this.tiaoliao_pvp_10).to({ alpha: 1 }, 200).call(function () {
                    egret.Tween.get(_this.tiaoliao_pvp_11).to({ alpha: 1 }, 200).call(function () {
                        egret.Tween.get(_this.tiaoliao_pvp_12).to({ alpha: 1 }, 200).call(function () {
                            egret.Tween.get(_this.tiaoliao_pvp_13).to({ alpha: 1 }, 200).call(function () {
                                egret.Tween.get(_this.tiaoliao_pvp_14).to({ alpha: 1 }, 200).call(function () {
                                    egret.Tween.get(_this.tiaoliao_pvp_15).to({ alpha: 1 }, 200).call(function () {
                                        _this.kaifangdirenshangcai();
                                    });
                                });
                            });
                        });
                    });
                });
                this.tiaoliao_pvp_16.alpha = 0;
                this.tiaoliao_pvp_17.alpha = 0;
                this.tiaoliao_pvp_18.alpha = 0;
                this.tiaoliao_pvp_19.alpha = 0;
                break;
            case 7:
                egret.Tween.get(this.tiaoliao_pvp_10).to({ alpha: 1 }, 200).call(function () {
                    egret.Tween.get(_this.tiaoliao_pvp_11).to({ alpha: 1 }, 200).call(function () {
                        egret.Tween.get(_this.tiaoliao_pvp_12).to({ alpha: 1 }, 200).call(function () {
                            egret.Tween.get(_this.tiaoliao_pvp_13).to({ alpha: 1 }, 200).call(function () {
                                egret.Tween.get(_this.tiaoliao_pvp_14).to({ alpha: 1 }, 200).call(function () {
                                    egret.Tween.get(_this.tiaoliao_pvp_15).to({ alpha: 1 }, 200).call(function () {
                                        egret.Tween.get(_this.tiaoliao_pvp_16).to({ alpha: 1 }, 200).call(function () {
                                            _this.kaifangdirenshangcai();
                                        });
                                    });
                                });
                            });
                        });
                    });
                });
                this.tiaoliao_pvp_17.alpha = 0;
                this.tiaoliao_pvp_18.alpha = 0;
                this.tiaoliao_pvp_19.alpha = 0;
                break;
            case 8:
                egret.Tween.get(this.tiaoliao_pvp_10).to({ alpha: 1 }, 200).call(function () {
                    egret.Tween.get(_this.tiaoliao_pvp_11).to({ alpha: 1 }, 200).call(function () {
                        egret.Tween.get(_this.tiaoliao_pvp_12).to({ alpha: 1 }, 200).call(function () {
                            egret.Tween.get(_this.tiaoliao_pvp_13).to({ alpha: 1 }, 200).call(function () {
                                egret.Tween.get(_this.tiaoliao_pvp_14).to({ alpha: 1 }, 200).call(function () {
                                    egret.Tween.get(_this.tiaoliao_pvp_15).to({ alpha: 1 }, 200).call(function () {
                                        egret.Tween.get(_this.tiaoliao_pvp_16).to({ alpha: 1 }, 200).call(function () {
                                            egret.Tween.get(_this.tiaoliao_pvp_17).to({ alpha: 1 }, 200).call(function () {
                                                _this.kaifangdirenshangcai();
                                            });
                                        });
                                    });
                                });
                            });
                        });
                    });
                });
                this.tiaoliao_pvp_18.alpha = 0;
                this.tiaoliao_pvp_19.alpha = 0;
                break;
            case 9:
                egret.Tween.get(this.tiaoliao_pvp_10).to({ alpha: 1 }, 200).call(function () {
                    egret.Tween.get(_this.tiaoliao_pvp_11).to({ alpha: 1 }, 200).call(function () {
                        egret.Tween.get(_this.tiaoliao_pvp_12).to({ alpha: 1 }, 200).call(function () {
                            egret.Tween.get(_this.tiaoliao_pvp_13).to({ alpha: 1 }, 200).call(function () {
                                egret.Tween.get(_this.tiaoliao_pvp_14).to({ alpha: 1 }, 200).call(function () {
                                    egret.Tween.get(_this.tiaoliao_pvp_15).to({ alpha: 1 }, 200).call(function () {
                                        egret.Tween.get(_this.tiaoliao_pvp_16).to({ alpha: 1 }, 200).call(function () {
                                            egret.Tween.get(_this.tiaoliao_pvp_17).to({ alpha: 1 }, 200).call(function () {
                                                egret.Tween.get(_this.tiaoliao_pvp_18).to({ alpha: 1 }, 200).call(function () {
                                                    _this.kaifangdirenshangcai();
                                                });
                                            });
                                        });
                                    });
                                });
                            });
                        });
                    });
                });
                this.tiaoliao_pvp_19.alpha = 0;
                break;
            case 10:
                egret.Tween.get(this.tiaoliao_pvp_10).to({ alpha: 1 }, 200).call(function () {
                    egret.Tween.get(_this.tiaoliao_pvp_11).to({ alpha: 1 }, 200).call(function () {
                        egret.Tween.get(_this.tiaoliao_pvp_12).to({ alpha: 1 }, 200).call(function () {
                            egret.Tween.get(_this.tiaoliao_pvp_13).to({ alpha: 1 }, 200).call(function () {
                                egret.Tween.get(_this.tiaoliao_pvp_14).to({ alpha: 1 }, 200).call(function () {
                                    egret.Tween.get(_this.tiaoliao_pvp_15).to({ alpha: 1 }, 200).call(function () {
                                        egret.Tween.get(_this.tiaoliao_pvp_16).to({ alpha: 1 }, 200).call(function () {
                                            egret.Tween.get(_this.tiaoliao_pvp_17).to({ alpha: 1 }, 200).call(function () {
                                                egret.Tween.get(_this.tiaoliao_pvp_18).to({ alpha: 1 }, 200).call(function () {
                                                    egret.Tween.get(_this.tiaoliao_pvp_19).to({ alpha: 1 }, 200).call(function () {
                                                        _this.kaifangdirenshangcai();
                                                    });
                                                });
                                            });
                                        });
                                    });
                                });
                            });
                        });
                    });
                });
                break;
        }
    };
    //下面的提示显示
    Pvpzhandoujiemian.prototype.tishixuanzexianshi = function (shuoming) {
        this.xiamiantishizu_pvp.alpha = 1;
        this.chupaitishiwenzi_pvp.text = shuoming;
    };
    //上面的提示显示
    Pvpzhandoujiemian.prototype.shangmiantishixianshi = function (shuoming) {
        this.shangmiantishizu_pvp.alpha = 1;
        this.shangmiantishiwenzi_pvp.text = shuoming;
    };
    //显示自己的头像
    Pvpzhandoujiemian.prototype.xianshizijitouxiang = function () {
        var imgLoader = new egret.ImageLoader;
        /*if(Gerenshuxing.touxiangbaocunzhuangtai == true){
            imgLoader.load(Gerenshuxing.touxiang);
            imgLoader.once(egret.Event.COMPLETE, this.xianshigerentouxiang, this);
        }else{
            imgLoader.load("http://192.168.1.2/res/resource/resource/wxtx/undefined.png");
            imgLoader.once(egret.Event.COMPLETE, this.xianshigerentouxiang, this);
        }*/
        imgLoader.load(Gerenshuxing.touxiang);
        imgLoader.once(egret.Event.COMPLETE, this.xianshizijidetouxiang, this);
    };
    Pvpzhandoujiemian.prototype.xianshizijidetouxiang = function (evt) {
        if (evt.currentTarget.data) {
            //			egret.log("加载头像成功: " + evt.currentTarget.data);
            var texture = new egret.Texture();
            texture.bitmapData = evt.currentTarget.data;
            var head = new egret.Bitmap(texture);
            head.x = 0;
            head.y = 0;
            head.width = this.zijitouxiangzu_pvp.width;
            head.height = this.zijitouxiangzu_pvp.height;
            this.zijitouxiangzu_pvp.addChild(head);
        }
    };
    //显示敌人的头像
    Pvpzhandoujiemian.prototype.xianshidirentouxiang = function () {
        var imgLoader = new egret.ImageLoader;
        /*if(Gerenshuxing.touxiangbaocunzhuangtai == true){
            imgLoader.load(Gerenshuxing.touxiang);
            imgLoader.once(egret.Event.COMPLETE, this.xianshigerentouxiang, this);
        }else{
            imgLoader.load("http://192.168.1.2/res/resource/resource/wxtx/undefined.png");
            imgLoader.once(egret.Event.COMPLETE, this.xianshigerentouxiang, this);
        }*/
        imgLoader.load(this.direnxinxi.touxiang);
        imgLoader.once(egret.Event.COMPLETE, this.xianshidirendetouxiang, this);
    };
    Pvpzhandoujiemian.prototype.xianshidirendetouxiang = function (evt) {
        if (evt.currentTarget.data) {
            //			egret.log("加载头像成功: " + evt.currentTarget.data);
            var texture = new egret.Texture();
            texture.bitmapData = evt.currentTarget.data;
            var head = new egret.Bitmap(texture);
            head.x = 0;
            head.y = 0;
            head.width = this.touxiangzu_pvp_1.width;
            head.height = this.touxiangzu_pvp_1.height;
            this.touxiangzu_pvp_1.addChild(head);
        }
    };
    //显示自己的指针头像
    Pvpzhandoujiemian.prototype.zijizhizhentouxiang = function () {
        var imgLoader = new egret.ImageLoader;
        /*if(Gerenshuxing.touxiangbaocunzhuangtai == true){
            imgLoader.load(Gerenshuxing.touxiang);
            imgLoader.once(egret.Event.COMPLETE, this.xianshigerentouxiang, this);
        }else{
            imgLoader.load("http://192.168.1.2/res/resource/resource/wxtx/undefined.png");
            imgLoader.once(egret.Event.COMPLETE, this.xianshigerentouxiang, this);
        }*/
        imgLoader.load(Gerenshuxing.touxiang);
        imgLoader.once(egret.Event.COMPLETE, this.zijizhizhentouxiangxianshi, this);
    };
    Pvpzhandoujiemian.prototype.zijizhizhentouxiangxianshi = function (evt) {
        if (evt.currentTarget.data) {
            //			egret.log("加载头像成功: " + evt.currentTarget.data);
            var texture = new egret.Texture();
            texture.bitmapData = evt.currentTarget.data;
            var head = new egret.Bitmap(texture);
            head.x = 0;
            head.y = 0;
            head.width = this.jindutouxiang_pvp_0.width;
            head.height = this.jindutouxiang_pvp_0.height;
            this.jindutouxiang_pvp_0.addChild(head);
        }
    };
    //显示敌人的指针头像
    Pvpzhandoujiemian.prototype.direnzhizhentouxiang = function () {
        var imgLoader = new egret.ImageLoader;
        /*if(Gerenshuxing.touxiangbaocunzhuangtai == true){
            imgLoader.load(Gerenshuxing.touxiang);
            imgLoader.once(egret.Event.COMPLETE, this.xianshigerentouxiang, this);
        }else{
            imgLoader.load("http://192.168.1.2/res/resource/resource/wxtx/undefined.png");
            imgLoader.once(egret.Event.COMPLETE, this.xianshigerentouxiang, this);
        }*/
        imgLoader.load(this.direnxinxi.touxiang);
        imgLoader.once(egret.Event.COMPLETE, this.direnzhizhentouxiangxianshi, this);
    };
    Pvpzhandoujiemian.prototype.direnzhizhentouxiangxianshi = function (evt) {
        if (evt.currentTarget.data) {
            //			egret.log("加载头像成功: " + evt.currentTarget.data);
            var texture = new egret.Texture();
            texture.bitmapData = evt.currentTarget.data;
            var head = new egret.Bitmap(texture);
            head.x = 0;
            head.y = 0;
            head.width = this.jindutouxiang_pvp_3.width;
            head.height = this.jindutouxiang_pvp_3.height;
            this.jindutouxiang_pvp_3.addChild(head);
        }
    };
    Pvpzhandoujiemian.prototype.kaifangshangcai = function () {
        var _this = this;
        var shipubiao = Gerenshuxing.shipubiao;
        if (this.di1caiid_0 == "0") {
            if (this.houxuancaizu_0.length > 0) {
                this.tishixuanzexianshi("从食盒中取出菜品");
                var suijidi1cai = Math.floor(Math.random() * this.houxuancaizu_0.length);
                this.di1caiid_0 = this.houxuancaizu_0[suijidi1cai];
                var xiugaihoushuzu = [];
                for (var i = 0; i < this.houxuancaizu_0.length; i++) {
                    if (this.houxuancaizu_0[i] != this.di1caiid_0) {
                        xiugaihoushuzu.push(this.houxuancaizu_0[i]);
                    }
                }
                this.houxuancaizu_0 = xiugaihoushuzu;
                this.shihexianshi();
                if (parseInt(this.di1caiid_0) >= 1000 && parseInt(this.di1caiid_0) < 2000) {
                    this.di1caiqidian_0 = 2;
                }
                else if (parseInt(this.di1caiid_0) >= 2000 && parseInt(this.di1caiid_0) < 3000) {
                    this.di1caiqidian_0 = 4;
                }
                else if (parseInt(this.di1caiid_0) >= 3000 && parseInt(this.di1caiid_0) < 4000) {
                    this.di1caiqidian_0 = 3;
                }
                else if (parseInt(this.di1caiid_0) >= 4000 && parseInt(this.di1caiid_0) < 5000) {
                    this.di1caiqidian_0 = 1;
                }
                var shicaiicon1_1 = "";
                for (var di1 = 0; di1 < shipubiao.length; di1++) {
                    if (shipubiao[di1].id == this.di1caiid_0) {
                        shicaiicon1_1 = shipubiao[di1].id + "_png";
                        break;
                    }
                }
                var xianshitupian1_1 = new egret.Bitmap();
                var texture1 = RES.getRes(shicaiicon1_1);
                xianshitupian1_1.texture = texture1;
                this.addChild(xianshitupian1_1);
                xianshitupian1_1.x = this.shihezu_pvp_0.x;
                xianshitupian1_1.y = this.shihezu_pvp_0.y;
                xianshitupian1_1.scaleX = 0.2;
                xianshitupian1_1.scaleY = 0.2;
                egret.Tween.get(xianshitupian1_1).to({ scaleX: 0.8, scaleY: 0.8, x: this.caixuanxiang_pvp_0.x, y: this.caixuanxiang_pvp_0.y }, 1000).call(function () {
                    if (_this.parent) {
                        _this.removeChild(xianshitupian1_1);
                        _this.caiicon_pvp_0.source = shicaiicon1_1;
                        if (parseInt(_this.di1caiid_0) >= 1000 && parseInt(_this.di1caiid_0) < 2000) {
                            _this.xiaohao_pvp_0_1.alpha = 1;
                            _this.xiaohao_pvp_0_2.alpha = 1;
                            _this.xiaohao_pvp_0_3.alpha = 0;
                            _this.xiaohao_pvp_0_4.alpha = 0;
                        }
                        else if (parseInt(_this.di1caiid_0) >= 2000 && parseInt(_this.di1caiid_0) < 3000) {
                            _this.xiaohao_pvp_0_1.alpha = 1;
                            _this.xiaohao_pvp_0_2.alpha = 1;
                            _this.xiaohao_pvp_0_3.alpha = 1;
                            _this.xiaohao_pvp_0_4.alpha = 1;
                        }
                        else if (parseInt(_this.di1caiid_0) >= 3000 && parseInt(_this.di1caiid_0) < 4000) {
                            _this.xiaohao_pvp_0_1.alpha = 1;
                            _this.xiaohao_pvp_0_2.alpha = 1;
                            _this.xiaohao_pvp_0_3.alpha = 1;
                            _this.xiaohao_pvp_0_4.alpha = 0;
                        }
                        else if (parseInt(_this.di1caiid_0) >= 4000 && parseInt(_this.di1caiid_0) < 5000) {
                            _this.xiaohao_pvp_0_1.alpha = 1;
                            _this.xiaohao_pvp_0_2.alpha = 0;
                            _this.xiaohao_pvp_0_3.alpha = 0;
                            _this.xiaohao_pvp_0_4.alpha = 0;
                        }
                        _this.tishixuanzexianshi("菜品已上新！");
                    }
                });
            }
            else {
                this.tishixuanzexianshi("食盒空空如也!");
            }
        }
        if (this.di2caiid_0 == "0") {
            if (this.houxuancaizu_0.length > 0) {
                this.tishixuanzexianshi("从食盒中取出菜品");
                var suijidi2cai = Math.floor(Math.random() * this.houxuancaizu_0.length);
                this.di2caiid_0 = this.houxuancaizu_0[suijidi2cai];
                var xiugaihoushuzu = [];
                for (var i = 0; i < this.houxuancaizu_0.length; i++) {
                    if (this.houxuancaizu_0[i] != this.di2caiid_0) {
                        xiugaihoushuzu.push(this.houxuancaizu_0[i]);
                    }
                }
                this.houxuancaizu_0 = xiugaihoushuzu;
                this.shihexianshi();
                if (parseInt(this.di2caiid_0) >= 1000 && parseInt(this.di2caiid_0) < 2000) {
                    this.di2caiqidian_0 = 2;
                }
                else if (parseInt(this.di2caiid_0) >= 2000 && parseInt(this.di2caiid_0) < 3000) {
                    this.di2caiqidian_0 = 4;
                }
                else if (parseInt(this.di2caiid_0) >= 3000 && parseInt(this.di2caiid_0) < 4000) {
                    this.di2caiqidian_0 = 3;
                }
                else if (parseInt(this.di2caiid_0) >= 4000 && parseInt(this.di2caiid_0) < 5000) {
                    this.di2caiqidian_0 = 1;
                }
                var shicaiicon2_1 = "";
                for (var di2 = 0; di2 < shipubiao.length; di2++) {
                    if (shipubiao[di2].id == this.di2caiid_0) {
                        shicaiicon2_1 = shipubiao[di2].id + "_png";
                        break;
                    }
                }
                var xianshitupian2_1 = new egret.Bitmap();
                var texture2 = RES.getRes(shicaiicon2_1);
                xianshitupian2_1.texture = texture2;
                this.addChild(xianshitupian2_1);
                xianshitupian2_1.x = this.shihezu_pvp_0.x;
                xianshitupian2_1.y = this.shihezu_pvp_0.y;
                xianshitupian2_1.scaleX = 0.2;
                xianshitupian2_1.scaleY = 0.2;
                egret.Tween.get(xianshitupian2_1).to({ scaleX: 0.8, scaleY: 0.8, x: this.caixuanxiang_pvp_1.x, y: this.caixuanxiang_pvp_1.y }, 1000).call(function () {
                    if (_this.parent) {
                        _this.removeChild(xianshitupian2_1);
                        _this.caiicon_pvp_1.source = shicaiicon2_1;
                        if (parseInt(_this.di2caiid_0) >= 1000 && parseInt(_this.di2caiid_0) < 2000) {
                            _this.xiaohao_pvp_1_1.alpha = 1;
                            _this.xiaohao_pvp_1_2.alpha = 1;
                            _this.xiaohao_pvp_1_3.alpha = 0;
                            _this.xiaohao_pvp_1_4.alpha = 0;
                        }
                        else if (parseInt(_this.di2caiid_0) >= 2000 && parseInt(_this.di2caiid_0) < 3000) {
                            _this.xiaohao_pvp_1_1.alpha = 1;
                            _this.xiaohao_pvp_1_2.alpha = 1;
                            _this.xiaohao_pvp_1_3.alpha = 1;
                            _this.xiaohao_pvp_1_4.alpha = 1;
                        }
                        else if (parseInt(_this.di2caiid_0) >= 3000 && parseInt(_this.di2caiid_0) < 4000) {
                            _this.xiaohao_pvp_1_1.alpha = 1;
                            _this.xiaohao_pvp_1_2.alpha = 1;
                            _this.xiaohao_pvp_1_3.alpha = 1;
                            _this.xiaohao_pvp_1_4.alpha = 0;
                        }
                        else if (parseInt(_this.di2caiid_0) >= 4000 && parseInt(_this.di2caiid_0) < 5000) {
                            _this.xiaohao_pvp_1_1.alpha = 1;
                            _this.xiaohao_pvp_1_2.alpha = 0;
                            _this.xiaohao_pvp_1_3.alpha = 0;
                            _this.xiaohao_pvp_1_4.alpha = 0;
                        }
                        _this.tishixuanzexianshi("菜品已上新！");
                    }
                });
            }
            else {
                this.tishixuanzexianshi("食盒空空如也!");
            }
        }
        if (this.di3caiid_0 == "0") {
            if (this.houxuancaizu_0.length > 0) {
                this.tishixuanzexianshi("从食盒中取出菜品");
                var suijidi3cai = Math.floor(Math.random() * this.houxuancaizu_0.length);
                this.di3caiid_0 = this.houxuancaizu_0[suijidi3cai];
                var xiugaihoushuzu = [];
                for (var i = 0; i < this.houxuancaizu_0.length; i++) {
                    if (this.houxuancaizu_0[i] != this.di3caiid_0) {
                        xiugaihoushuzu.push(this.houxuancaizu_0[i]);
                    }
                }
                this.houxuancaizu_0 = xiugaihoushuzu;
                this.shihexianshi();
                if (parseInt(this.di3caiid_0) >= 1000 && parseInt(this.di3caiid_0) < 2000) {
                    this.di3caiqidian_0 = 2;
                }
                else if (parseInt(this.di3caiid_0) >= 2000 && parseInt(this.di3caiid_0) < 3000) {
                    this.di3caiqidian_0 = 4;
                }
                else if (parseInt(this.di3caiid_0) >= 3000 && parseInt(this.di3caiid_0) < 4000) {
                    this.di3caiqidian_0 = 3;
                }
                else if (parseInt(this.di3caiid_0) >= 4000 && parseInt(this.di3caiid_0) < 5000) {
                    this.di3caiqidian_0 = 1;
                }
                var shicaiicon3_1 = "";
                for (var di3 = 0; di3 < shipubiao.length; di3++) {
                    if (shipubiao[di3].id == this.di3caiid_0) {
                        shicaiicon3_1 = shipubiao[di3].id + "_png";
                        break;
                    }
                }
                var xianshitupian3_1 = new egret.Bitmap();
                var texture3 = RES.getRes(shicaiicon3_1);
                xianshitupian3_1.texture = texture3;
                this.addChild(xianshitupian3_1);
                xianshitupian3_1.x = this.shihezu_pvp_0.x;
                xianshitupian3_1.y = this.shihezu_pvp_0.y;
                xianshitupian3_1.scaleX = 0.2;
                xianshitupian3_1.scaleY = 0.2;
                egret.Tween.get(xianshitupian3_1).to({ scaleX: 0.8, scaleY: 0.8, x: this.caixuanxiang_pvp_2.x, y: this.caixuanxiang_pvp_2.y }, 1000).call(function () {
                    if (_this.parent) {
                        _this.removeChild(xianshitupian3_1);
                        _this.caiicon_pvp_2.source = shicaiicon3_1;
                        if (parseInt(_this.di3caiid_0) >= 1000 && parseInt(_this.di3caiid_0) < 2000) {
                            _this.xiaohao_pvp_2_1.alpha = 1;
                            _this.xiaohao_pvp_2_2.alpha = 1;
                            _this.xiaohao_pvp_2_3.alpha = 0;
                            _this.xiaohao_pvp_2_4.alpha = 0;
                        }
                        else if (parseInt(_this.di3caiid_0) >= 2000 && parseInt(_this.di3caiid_0) < 3000) {
                            _this.xiaohao_pvp_2_1.alpha = 1;
                            _this.xiaohao_pvp_2_2.alpha = 1;
                            _this.xiaohao_pvp_2_3.alpha = 1;
                            _this.xiaohao_pvp_2_4.alpha = 1;
                        }
                        else if (parseInt(_this.di3caiid_0) >= 3000 && parseInt(_this.di3caiid_0) < 4000) {
                            _this.xiaohao_pvp_2_1.alpha = 1;
                            _this.xiaohao_pvp_2_2.alpha = 1;
                            _this.xiaohao_pvp_2_3.alpha = 1;
                            _this.xiaohao_pvp_2_4.alpha = 0;
                        }
                        else if (parseInt(_this.di3caiid_0) >= 4000 && parseInt(_this.di3caiid_0) < 5000) {
                            _this.xiaohao_pvp_2_1.alpha = 1;
                            _this.xiaohao_pvp_2_2.alpha = 0;
                            _this.xiaohao_pvp_2_3.alpha = 0;
                            _this.xiaohao_pvp_2_4.alpha = 0;
                        }
                        _this.tishixuanzexianshi("菜品已上新！");
                    }
                });
            }
            else {
                this.tishixuanzexianshi("食盒空空如也!");
            }
        }
        if (this.di4caiid_0 == "0") {
            //			console.log(this.houxuancaizu);
            if (this.houxuancaizu_0.length > 0) {
                this.tishixuanzexianshi("从食盒中取出菜品");
                var suijidi4cai = Math.floor(Math.random() * this.houxuancaizu_0.length);
                this.di4caiid_0 = this.houxuancaizu_0[suijidi4cai];
                var xiugaihoushuzu = [];
                for (var i = 0; i < this.houxuancaizu_0.length; i++) {
                    if (this.houxuancaizu_0[i] != this.di4caiid_0) {
                        xiugaihoushuzu.push(this.houxuancaizu_0[i]);
                    }
                }
                this.houxuancaizu_0 = xiugaihoushuzu;
                //				console.log(this.houxuancaizu);
                this.shihexianshi();
                if (parseInt(this.di4caiid_0) >= 1000 && parseInt(this.di4caiid_0) < 2000) {
                    this.di4caiqidian_0 = 2;
                }
                else if (parseInt(this.di4caiid_0) >= 2000 && parseInt(this.di4caiid_0) < 3000) {
                    this.di4caiqidian_0 = 4;
                }
                else if (parseInt(this.di4caiid_0) >= 3000 && parseInt(this.di4caiid_0) < 4000) {
                    this.di4caiqidian_0 = 3;
                }
                else if (parseInt(this.di4caiid_0) >= 4000 && parseInt(this.di4caiid_0) < 5000) {
                    this.di4caiqidian_0 = 1;
                }
                var shicaiicon4_1 = "";
                for (var di4 = 0; di4 < shipubiao.length; di4++) {
                    if (shipubiao[di4].id == this.di4caiid_0) {
                        shicaiicon4_1 = shipubiao[di4].id + "_png";
                        break;
                    }
                }
                var xianshitupian4_1 = new egret.Bitmap();
                var texture4 = RES.getRes(shicaiicon4_1);
                xianshitupian4_1.texture = texture4;
                this.addChild(xianshitupian4_1);
                xianshitupian4_1.x = this.shihezu_pvp_0.x;
                xianshitupian4_1.y = this.shihezu_pvp_0.y;
                xianshitupian4_1.scaleX = 0.2;
                xianshitupian4_1.scaleY = 0.2;
                egret.Tween.get(xianshitupian4_1).to({ scaleX: 0.8, scaleY: 0.8, x: this.caixuanxiang_pvp_3.x, y: this.caixuanxiang_pvp_3.y }, 1000).call(function () {
                    if (_this.parent) {
                        _this.removeChild(xianshitupian4_1);
                        _this.caiicon_pvp_3.source = shicaiicon4_1;
                        if (parseInt(_this.di4caiid_0) >= 1000 && parseInt(_this.di4caiid_0) < 2000) {
                            _this.xiaohao_pvp_3_1.alpha = 1;
                            _this.xiaohao_pvp_3_2.alpha = 1;
                            _this.xiaohao_pvp_3_3.alpha = 0;
                            _this.xiaohao_pvp_3_4.alpha = 0;
                        }
                        else if (parseInt(_this.di4caiid_0) >= 2000 && parseInt(_this.di4caiid_0) < 3000) {
                            _this.xiaohao_pvp_3_1.alpha = 1;
                            _this.xiaohao_pvp_3_2.alpha = 1;
                            _this.xiaohao_pvp_3_3.alpha = 1;
                            _this.xiaohao_pvp_3_4.alpha = 1;
                        }
                        else if (parseInt(_this.di4caiid_0) >= 3000 && parseInt(_this.di4caiid_0) < 4000) {
                            _this.xiaohao_pvp_3_1.alpha = 1;
                            _this.xiaohao_pvp_3_2.alpha = 1;
                            _this.xiaohao_pvp_3_3.alpha = 1;
                            _this.xiaohao_pvp_3_4.alpha = 0;
                        }
                        else if (parseInt(_this.di4caiid_0) >= 4000 && parseInt(_this.di4caiid_0) < 5000) {
                            _this.xiaohao_pvp_3_1.alpha = 1;
                            _this.xiaohao_pvp_3_2.alpha = 0;
                            _this.xiaohao_pvp_3_3.alpha = 0;
                            _this.xiaohao_pvp_3_4.alpha = 0;
                        }
                        _this.tishixuanzexianshi("菜品已上新！");
                    }
                });
            }
            else {
                this.tishixuanzexianshi("食盒空空如也!");
            }
        }
        //菜品补充完毕，开始提示上菜
        this.shangcaipanduan();
    };
    Pvpzhandoujiemian.prototype.kaifangdirenshangcai = function () {
        var shipubiao = Gerenshuxing.shipubiao;
        if (this.di1caiid_1 == "0") {
            if (this.houxuancaizu_1.length > 0) {
                var suijidi1cai = Math.floor(Math.random() * this.houxuancaizu_1.length);
                this.di1caiid_1 = this.houxuancaizu_1[suijidi1cai];
                var xiugaihoushuzu = [];
                for (var i = 0; i < this.houxuancaizu_1.length; i++) {
                    if (this.houxuancaizu_1[i] != this.di1caiid_1) {
                        xiugaihoushuzu.push(this.houxuancaizu_1[i]);
                    }
                }
                this.houxuancaizu_1 = xiugaihoushuzu;
                this.direnshihexianshi();
                if (parseInt(this.di1caiid_1) >= 1000 && parseInt(this.di1caiid_1) < 2000) {
                    this.di1caiqidian_1 = 2;
                }
                else if (parseInt(this.di1caiid_1) >= 2000 && parseInt(this.di1caiid_1) < 3000) {
                    this.di1caiqidian_1 = 4;
                }
                else if (parseInt(this.di1caiid_1) >= 3000 && parseInt(this.di1caiid_1) < 4000) {
                    this.di1caiqidian_1 = 3;
                }
                else if (parseInt(this.di1caiid_1) >= 4000 && parseInt(this.di1caiid_1) < 5000) {
                    this.di1caiqidian_1 = 1;
                }
                /*let shicaiicon1:any = "";
                for(var di1 = 0;di1<shipubiao.length;di1++){
                    if(shipubiao[di1].id == this.di1caiid_0){
                        shicaiicon1 = shipubiao[di1].id + "_png";
                        break;
                    }
                }
                let xianshitupian1:egret.Bitmap = new egret.Bitmap();
                let texture1:egret.Texture = RES.getRes(shicaiicon1);
                xianshitupian1.texture = texture1;
                this.addChild(xianshitupian1);
                xianshitupian1.x = this.shihezu_pvp_0.x;
                xianshitupian1.y = this.shihezu_pvp_0.y;
                xianshitupian1.scaleX = 0.2;
                xianshitupian1.scaleY = 0.2;
                egret.Tween.get(xianshitupian1).to({scaleX:0.8,scaleY:0.8,x:this.caixuanxiang_pvp_0.x,y:this.caixuanxiang_pvp_0.y},1000).call(()=>{
                    if(this.parent){
                        this.removeChild(xianshitupian1);
                        this.caiicon_pvp_0.source = shicaiicon1;
                        if(parseInt(this.di1caiid_0) >= 1000 && parseInt(this.di1caiid_0) < 2000){
                            this.xiaohao_pvp_0_1.alpha = 1;
                            this.xiaohao_pvp_0_2.alpha = 1;
                            this.xiaohao_pvp_0_3.alpha = 0;
                            this.xiaohao_pvp_0_4.alpha = 0;
                        }else if(parseInt(this.di1caiid_0) >= 2000 && parseInt(this.di1caiid_0) < 3000){
                            this.xiaohao_pvp_0_1.alpha = 1;
                            this.xiaohao_pvp_0_2.alpha = 1;
                            this.xiaohao_pvp_0_3.alpha = 1;
                            this.xiaohao_pvp_0_4.alpha = 1;
                        }else if(parseInt(this.di1caiid_0) >= 3000 && parseInt(this.di1caiid_0) < 4000){
                            this.xiaohao_pvp_0_1.alpha = 1;
                            this.xiaohao_pvp_0_2.alpha = 1;
                            this.xiaohao_pvp_0_3.alpha = 1;
                            this.xiaohao_pvp_0_4.alpha = 0;
                        }else if(parseInt(this.di1caiid_0) >= 4000 && parseInt(this.di1caiid_0) < 5000){
                            this.xiaohao_pvp_0_1.alpha = 1;
                            this.xiaohao_pvp_0_2.alpha = 0;
                            this.xiaohao_pvp_0_3.alpha = 0;
                            this.xiaohao_pvp_0_4.alpha = 0;
                        }
                        this.tishixuanzexianshi("菜品已上新！");
                    }
                })*/
            } /*else{
                this.tishixuanzexianshi("食盒空空如也!");
            }*/
        }
        if (this.di2caiid_1 == "0") {
            if (this.houxuancaizu_1.length > 0) {
                var suijidi2cai = Math.floor(Math.random() * this.houxuancaizu_1.length);
                this.di2caiid_1 = this.houxuancaizu_1[suijidi2cai];
                var xiugaihoushuzu = [];
                for (var i = 0; i < this.houxuancaizu_1.length; i++) {
                    if (this.houxuancaizu_1[i] != this.di2caiid_1) {
                        xiugaihoushuzu.push(this.houxuancaizu_1[i]);
                    }
                }
                this.houxuancaizu_1 = xiugaihoushuzu;
                this.direnshihexianshi();
                if (parseInt(this.di2caiid_1) >= 1000 && parseInt(this.di2caiid_1) < 2000) {
                    this.di2caiqidian_1 = 2;
                }
                else if (parseInt(this.di2caiid_1) >= 2000 && parseInt(this.di2caiid_1) < 3000) {
                    this.di2caiqidian_1 = 4;
                }
                else if (parseInt(this.di2caiid_1) >= 3000 && parseInt(this.di2caiid_1) < 4000) {
                    this.di2caiqidian_1 = 3;
                }
                else if (parseInt(this.di2caiid_1) >= 4000 && parseInt(this.di2caiid_1) < 5000) {
                    this.di2caiqidian_1 = 1;
                }
                var shicaiicon2 = "";
                for (var di2 = 0; di2 < shipubiao.length; di2++) {
                    if (shipubiao[di2].id == this.di2caiid_0) {
                        shicaiicon2 = shipubiao[di2].id + "_png";
                        break;
                    }
                }
                /*let xianshitupian2:egret.Bitmap = new egret.Bitmap();
                let texture2:egret.Texture = RES.getRes(shicaiicon2);
                xianshitupian2.texture = texture2;
                this.addChild(xianshitupian2);
                xianshitupian2.x = this.shihezu_pvp_0.x;
                xianshitupian2.y = this.shihezu_pvp_0.y;
                xianshitupian2.scaleX = 0.2;
                xianshitupian2.scaleY = 0.2;
                egret.Tween.get(xianshitupian2).to({scaleX:0.8,scaleY:0.8,x:this.caixuanxiang_pvp_1.x,y:this.caixuanxiang_pvp_1.y},1000).call(()=>{
                    if(this.parent){
                        this.removeChild(xianshitupian2);
                        this.caiicon_pvp_1.source = shicaiicon2;
                        if(parseInt(this.di2caiid_0) >= 1000 && parseInt(this.di2caiid_0) < 2000){
                            this.xiaohao_pvp_1_1.alpha = 1;
                            this.xiaohao_pvp_1_2.alpha = 1;
                            this.xiaohao_pvp_1_3.alpha = 0;
                            this.xiaohao_pvp_1_4.alpha = 0;
                        }else if(parseInt(this.di2caiid_0) >= 2000 && parseInt(this.di2caiid_0) < 3000){
                            this.xiaohao_pvp_1_1.alpha = 1;
                            this.xiaohao_pvp_1_2.alpha = 1;
                            this.xiaohao_pvp_1_3.alpha = 1;
                            this.xiaohao_pvp_1_4.alpha = 1;
                        }else if(parseInt(this.di2caiid_0) >= 3000 && parseInt(this.di2caiid_0) < 4000){
                            this.xiaohao_pvp_1_1.alpha = 1;
                            this.xiaohao_pvp_1_2.alpha = 1;
                            this.xiaohao_pvp_1_3.alpha = 1;
                            this.xiaohao_pvp_1_4.alpha = 0;
                        }else if(parseInt(this.di2caiid_0) >= 4000 && parseInt(this.di2caiid_0) < 5000){
                            this.xiaohao_pvp_1_1.alpha = 1;
                            this.xiaohao_pvp_1_2.alpha = 0;
                            this.xiaohao_pvp_1_3.alpha = 0;
                            this.xiaohao_pvp_1_4.alpha = 0;
                        }
                        this.tishixuanzexianshi("菜品已上新！");
                    }
                })*/
            } /*else{
                this.tishixuanzexianshi("食盒空空如也!");
            }*/
        }
        if (this.di3caiid_1 == "0") {
            if (this.houxuancaizu_1.length > 0) {
                var suijidi3cai = Math.floor(Math.random() * this.houxuancaizu_1.length);
                this.di3caiid_1 = this.houxuancaizu_1[suijidi3cai];
                var xiugaihoushuzu = [];
                for (var i = 0; i < this.houxuancaizu_1.length; i++) {
                    if (this.houxuancaizu_1[i] != this.di3caiid_1) {
                        xiugaihoushuzu.push(this.houxuancaizu_1[i]);
                    }
                }
                this.houxuancaizu_1 = xiugaihoushuzu;
                this.direnshihexianshi();
                if (parseInt(this.di3caiid_1) >= 1000 && parseInt(this.di3caiid_1) < 2000) {
                    this.di3caiqidian_1 = 2;
                }
                else if (parseInt(this.di3caiid_1) >= 2000 && parseInt(this.di3caiid_1) < 3000) {
                    this.di3caiqidian_1 = 4;
                }
                else if (parseInt(this.di3caiid_1) >= 3000 && parseInt(this.di3caiid_1) < 4000) {
                    this.di3caiqidian_1 = 3;
                }
                else if (parseInt(this.di3caiid_1) >= 4000 && parseInt(this.di3caiid_1) < 5000) {
                    this.di3caiqidian_1 = 1;
                }
                /*let shicaiicon3:any = "";
                for(var di3 = 0;di3<shipubiao.length;di3++){
                    if(shipubiao[di3].id == this.di3caiid_1){
                        shicaiicon3 = shipubiao[di3].id + "_png";
                        break;
                    }
                }
                let xianshitupian3:egret.Bitmap = new egret.Bitmap();
                let texture3:egret.Texture = RES.getRes(shicaiicon3);
                xianshitupian3.texture = texture3;
                this.addChild(xianshitupian3);
                xianshitupian3.x = this.shihezu_pvp_0.x;
                xianshitupian3.y = this.shihezu_pvp_0.y;
                xianshitupian3.scaleX = 0.2;
                xianshitupian3.scaleY = 0.2;
                egret.Tween.get(xianshitupian3).to({scaleX:0.8,scaleY:0.8,x:this.caixuanxiang_pvp_2.x,y:this.caixuanxiang_pvp_2.y},1000).call(()=>{
                    if(this.parent){
                        this.removeChild(xianshitupian3);
                        this.caiicon_pvp_2.source = shicaiicon3;
                        if(parseInt(this.di3caiid_0) >= 1000 && parseInt(this.di3caiid_0) < 2000){
                            this.xiaohao_pvp_2_1.alpha = 1;
                            this.xiaohao_pvp_2_2.alpha = 1;
                            this.xiaohao_pvp_2_3.alpha = 0;
                            this.xiaohao_pvp_2_4.alpha = 0;
                        }else if(parseInt(this.di3caiid_0) >= 2000 && parseInt(this.di3caiid_0) < 3000){
                            this.xiaohao_pvp_2_1.alpha = 1;
                            this.xiaohao_pvp_2_2.alpha = 1;
                            this.xiaohao_pvp_2_3.alpha = 1;
                            this.xiaohao_pvp_2_4.alpha = 1;
                        }else if(parseInt(this.di3caiid_0) >= 3000 && parseInt(this.di3caiid_0) < 4000){
                            this.xiaohao_pvp_2_1.alpha = 1;
                            this.xiaohao_pvp_2_2.alpha = 1;
                            this.xiaohao_pvp_2_3.alpha = 1;
                            this.xiaohao_pvp_2_4.alpha = 0;
                        }else if(parseInt(this.di3caiid_0) >= 4000 && parseInt(this.di3caiid_0) < 5000){
                            this.xiaohao_pvp_2_1.alpha = 1;
                            this.xiaohao_pvp_2_2.alpha = 0;
                            this.xiaohao_pvp_2_3.alpha = 0;
                            this.xiaohao_pvp_2_4.alpha = 0;
                        }
                        this.tishixuanzexianshi("菜品已上新！");
                    }
                })*/
            } /*else{
                this.tishixuanzexianshi("食盒空空如也!");
            }*/
        }
        if (this.di4caiid_1 == "0") {
            //			console.log(this.houxuancaizu);
            if (this.houxuancaizu_1.length > 0) {
                var suijidi4cai = Math.floor(Math.random() * this.houxuancaizu_1.length);
                this.di4caiid_1 = this.houxuancaizu_1[suijidi4cai];
                var xiugaihoushuzu = [];
                for (var i = 0; i < this.houxuancaizu_1.length; i++) {
                    if (this.houxuancaizu_1[i] != this.di4caiid_1) {
                        xiugaihoushuzu.push(this.houxuancaizu_1[i]);
                    }
                }
                this.houxuancaizu_1 = xiugaihoushuzu;
                //				console.log(this.houxuancaizu);
                this.direnshihexianshi();
                if (parseInt(this.di4caiid_1) >= 1000 && parseInt(this.di4caiid_1) < 2000) {
                    this.di4caiqidian_1 = 2;
                }
                else if (parseInt(this.di4caiid_1) >= 2000 && parseInt(this.di4caiid_1) < 3000) {
                    this.di4caiqidian_1 = 4;
                }
                else if (parseInt(this.di4caiid_1) >= 3000 && parseInt(this.di4caiid_1) < 4000) {
                    this.di4caiqidian_1 = 3;
                }
                else if (parseInt(this.di4caiid_1) >= 4000 && parseInt(this.di4caiid_1) < 5000) {
                    this.di4caiqidian_1 = 1;
                }
                /*let shicaiicon4:any = "";
                for(var di4 = 0;di4<shipubiao.length;di4++){
                    if(shipubiao[di4].id == this.di4caiid_1){
                        shicaiicon4 = shipubiao[di4].id + "_png";
                        break;
                    }
                }
                let xianshitupian4:egret.Bitmap = new egret.Bitmap();
                let texture4:egret.Texture = RES.getRes(shicaiicon4);
                xianshitupian4.texture = texture4;
                this.addChild(xianshitupian4);
                xianshitupian4.x = this.shihezu_pvp_0.x;
                xianshitupian4.y = this.shihezu_pvp_0.y;
                xianshitupian4.scaleX = 0.2;
                xianshitupian4.scaleY = 0.2;
                egret.Tween.get(xianshitupian4).to({scaleX:0.8,scaleY:0.8,x:this.caixuanxiang_pvp_3.x,y:this.caixuanxiang_pvp_3.y},1000).call(()=>{
                    if(this.parent){
                        this.removeChild(xianshitupian4);
                        this.caiicon_pvp_3.source = shicaiicon4;
                        if(parseInt(this.di4caiid_0) >= 1000 && parseInt(this.di4caiid_0) < 2000){
                            this.xiaohao_pvp_3_1.alpha = 1;
                            this.xiaohao_pvp_3_2.alpha = 1;
                            this.xiaohao_pvp_3_3.alpha = 0;
                            this.xiaohao_pvp_3_4.alpha = 0;
                        }else if(parseInt(this.di4caiid_0) >= 2000 && parseInt(this.di4caiid_0) < 3000){
                            this.xiaohao_pvp_3_1.alpha = 1;
                            this.xiaohao_pvp_3_2.alpha = 1;
                            this.xiaohao_pvp_3_3.alpha = 1;
                            this.xiaohao_pvp_3_4.alpha = 1;
                        }else if(parseInt(this.di4caiid_0) >= 3000 && parseInt(this.di4caiid_0) < 4000){
                            this.xiaohao_pvp_3_1.alpha = 1;
                            this.xiaohao_pvp_3_2.alpha = 1;
                            this.xiaohao_pvp_3_3.alpha = 1;
                            this.xiaohao_pvp_3_4.alpha = 0;
                        }else if(parseInt(this.di4caiid_0) >= 4000 && parseInt(this.di4caiid_0) < 5000){
                            this.xiaohao_pvp_3_1.alpha = 1;
                            this.xiaohao_pvp_3_2.alpha = 0;
                            this.xiaohao_pvp_3_3.alpha = 0;
                            this.xiaohao_pvp_3_4.alpha = 0;
                        }
                        this.tishixuanzexianshi("菜品已上新！");
                    }
                })*/
            } /*else{
                this.tishixuanzexianshi("食盒空空如也!");
            }*/
        }
        //菜品补充完毕，开始提示上菜
        this.direnshangcaipanduan();
    };
    Pvpzhandoujiemian.prototype.shangcaipanduan = function () {
        var _this = this;
        var di1caikechu = false;
        var di2caikechu = false;
        var di3caikechu = false;
        var di4caikechu = false;
        if (this.qidianshu_0 >= this.di1caiqidian_0 && this.di1caiid_0 != "0") {
            di1caikechu = true;
        }
        if (this.qidianshu_0 >= this.di2caiqidian_0 && this.di2caiid_0 != "0") {
            di2caikechu = true;
        }
        if (this.qidianshu_0 >= this.di3caiqidian_0 && this.di3caiid_0 != "0") {
            di3caikechu = true;
        }
        if (this.qidianshu_0 >= this.di4caiqidian_0 && this.di4caiid_0 != "0") {
            di4caikechu = true;
        }
        this.daojishitishizu_pvp.alpha = 1;
        this.naozhongdaojishi_pvp.text = "3";
        egret.Tween.get(this.naozhongdaojishi_pvp).to({ text: "2" }, 500).call(function () {
            egret.Tween.get(_this.naozhongdaojishi_pvp).to({ text: "1" }, 500).call(function () {
                if (di1caikechu == false && di2caikechu == false && di3caikechu == false && di4caikechu == false) {
                    _this.tishixuanzexianshi("配料或者菜品不足");
                    //直接开始滚动
                    egret.Tween.get(_this.naozhongdaojishi_pvp).to({ text: "0" }, 500).call(function () {
                        _this.daojishitishizu_pvp.alpha = 0;
                        _this.kaishixinhuihe();
                    });
                }
                else {
                    egret.Tween.get(_this.naozhongdaojishi_pvp).to({ text: "0" }, 500).call(function () {
                        if (di1caikechu == true) {
                            _this.shangcai1anniu_pvp.enabled = true;
                            _this.shangcai1anniu_pvp.addEventListener(egret.TouchEvent.TOUCH_TAP, _this.chupai1, _this);
                        }
                        if (di2caikechu == true) {
                            _this.shangcai2anniu_pvp.enabled = true;
                            _this.shangcai2anniu_pvp.addEventListener(egret.TouchEvent.TOUCH_TAP, _this.chupai2, _this);
                        }
                        if (di3caikechu == true) {
                            _this.shangcai3anniu_pvp.enabled = true;
                            _this.shangcai3anniu_pvp.addEventListener(egret.TouchEvent.TOUCH_TAP, _this.chupai3, _this);
                        }
                        if (di4caikechu == true) {
                            _this.shangcai4anniu_pvp.enabled = true;
                            _this.shangcai4anniu_pvp.addEventListener(egret.TouchEvent.TOUCH_TAP, _this.chupai4, _this);
                        }
                        _this.tishixuanzexianshi("请选择菜品上菜!");
                        _this.zidongzhandouanniu_pvp.alpha = 1;
                        _this.zidongzhandouanniu_pvp.enabled = true;
                        _this.zidongzhandouanniu_pvp.addEventListener(egret.TouchEvent.TOUCH_TAP, _this.fangqichupai, _this);
                        _this.huihedaojishi = 30;
                        _this.zuidongdaojishikaishi();
                    });
                }
            });
        });
    };
    //敌人开始上菜
    Pvpzhandoujiemian.prototype.direnshangcaipanduan = function () {
        var di1caikechu = false;
        var di2caikechu = false;
        var di3caikechu = false;
        var di4caikechu = false;
        var chupaizu = [0, 0, 0, 0];
        if (this.qidianshu_1 >= this.di1caiqidian_1 && this.di1caiid_1 != "0") {
            di1caikechu = true;
            chupaizu[0] = 1;
        }
        if (this.qidianshu_1 >= this.di2caiqidian_1 && this.di2caiid_1 != "0") {
            di2caikechu = true;
            chupaizu[1] = 1;
        }
        if (this.qidianshu_1 >= this.di3caiqidian_1 && this.di3caiid_1 != "0") {
            di3caikechu = true;
            chupaizu[2] = 1;
        }
        if (this.qidianshu_1 >= this.di4caiqidian_1 && this.di4caiid_1 != "0") {
            di4caikechu = true;
            chupaizu[3] = 1;
        }
        if (chupaizu[0] == 1) {
            this.direnchupai1();
        }
        else if (chupaizu[1] == 1) {
            this.direnchupai2();
        }
        else if (chupaizu[2] == 1) {
            this.direnchupai3();
        }
        else if (chupaizu[3] == 1) {
            this.direnchupai4();
        }
        else {
            this.direnkaishixinhuihe();
        }
    };
    Pvpzhandoujiemian.prototype.zuidongdaojishikaishi = function () {
        if (this.benhuihechucaiid_0 == "0" && this.renwuhuihekaishi == true) {
            if (this.huihedaojishi <= 0) {
                if (this.qidianshu_0 >= this.di1caiqidian_0 && this.di1caiid_0 != "0") {
                    this.chupai1();
                }
                else if (this.qidianshu_0 >= this.di2caiqidian_0 && this.di2caiid_0 != "0") {
                    this.chupai2();
                }
                else if (this.qidianshu_0 >= this.di3caiqidian_0 && this.di3caiid_0 != "0") {
                    this.chupai3();
                }
                else if (this.qidianshu_0 >= this.di4caiqidian_0 && this.di4caiid_0 != "0") {
                    this.chupai4();
                }
                else {
                    this.kaishixinhuihe();
                }
            }
            else {
                this.huihejishiqi = new egret.Timer(1000, 1);
                this.huihejishiqi.addEventListener(egret.TimerEvent.TIMER, this.kaishihuihejishi, this);
                this.huihejishiqi.start();
            }
        }
    };
    Pvpzhandoujiemian.prototype.kaishihuihejishi = function () {
        this.huihedaojishi -= 1;
        this.naozhongdaojishi_pvp.text = "" + this.huihedaojishi;
        this.zuidongdaojishikaishi();
    };
    Pvpzhandoujiemian.prototype.chupai1 = function () {
        var _this = this;
        Gamesound.Soundkongzhi().anniuyinxiao();
        this.benhuihechucaiid_0 = this.di1caiid_0;
        this.di1caiid_0 = "0";
        this.caiicon_pvp_0.source = "";
        this.xiaohao_pvp_0_1.alpha = 0;
        this.xiaohao_pvp_0_2.alpha = 0;
        this.xiaohao_pvp_0_3.alpha = 0;
        this.xiaohao_pvp_0_4.alpha = 0;
        //隐藏闹钟
        this.xiamiantishizu_pvp.alpha = 0;
        this.daojishitishizu_pvp.alpha = 0;
        this.shangmiantishizu_pvp.alpha = 0;
        this.shangcai1anniu_pvp.enabled = false;
        this.shangcai2anniu_pvp.enabled = false;
        this.shangcai3anniu_pvp.enabled = false;
        this.shangcai4anniu_pvp.enabled = false;
        //隐藏自动按钮
        this.zidongzhandouanniu_pvp.alpha = 0;
        this.zidongzhandouanniu_pvp.enabled = false;
        //扣除气点数
        this.qidianshu_0 = this.qidianshu_0 - this.di1caiqidian_0;
        if (this.qidianshu_0 < 0) {
            this.qidianshu_0 = 0;
        }
        this.qidianxianshigengxin();
        var shipubiao = Gerenshuxing.shipubiao;
        var xianshishangcaitu = "";
        var xianshicaiming = "";
        for (var h = 0; h < shipubiao.length; h++) {
            if (shipubiao[h].id == this.benhuihechucaiid_0) {
                xianshishangcaitu = shipubiao[h].id + "_png";
                xianshicaiming = shipubiao[h].foodName;
                break;
            }
        }
        var zhandoushangcai = new egret.Bitmap();
        var zhandoutupian = RES.getRes(xianshishangcaitu);
        zhandoushangcai.texture = zhandoutupian;
        this.addChild(zhandoushangcai);
        zhandoushangcai.x = this.caixuanxiang_pvp_0.x;
        zhandoushangcai.y = this.caixuanxiang_pvp_0.y;
        zhandoushangcai.scaleX = 0.7;
        zhandoushangcai.scaleY = 0.7;
        egret.Tween.get(zhandoushangcai).to({ scaleX: 0.2, scaleY: 0.2, x: this.zhandouxianshizu_pvp.x + this.zhandouxianshizu_pvp.width / 2, y: this.zhandouxianshizu_pvp.y }, 1000).call(function () {
            if (_this.parent) {
                _this.removeChild(zhandoushangcai);
                _this.zhandouxianshizu_pvp.alpha = 1;
                _this.zhandounierong_pvp.source = xianshishangcaitu;
                _this.zhandouhanhuazu_pvp.alpha = 1;
                _this.zhandouhanhua_pvp.text = _this.zijihanhuajisuan(xianshicaiming);
                egret.Tween.get(zhandoushangcai).to({}).wait(1000).call(function () {
                    _this.zijihanhua = "";
                    _this.zhandouhanhuazu_pvp.alpha = 0;
                    _this.zhandouhanhua_pvp.text = "";
                    _this.kaishizhandou();
                });
            }
        });
    };
    Pvpzhandoujiemian.prototype.chupai2 = function () {
        var _this = this;
        Gamesound.Soundkongzhi().anniuyinxiao();
        this.benhuihechucaiid_0 = this.di2caiid_0;
        this.di2caiid_0 = "0";
        this.caiicon_pvp_1.source = "";
        this.xiaohao_pvp_1_1.alpha = 0;
        this.xiaohao_pvp_1_2.alpha = 0;
        this.xiaohao_pvp_1_3.alpha = 0;
        this.xiaohao_pvp_1_4.alpha = 0;
        //隐藏闹钟
        this.xiamiantishizu_pvp.alpha = 0;
        this.daojishitishizu_pvp.alpha = 0;
        this.shangmiantishizu_pvp.alpha = 0;
        this.shangcai1anniu_pvp.enabled = false;
        this.shangcai2anniu_pvp.enabled = false;
        this.shangcai3anniu_pvp.enabled = false;
        this.shangcai4anniu_pvp.enabled = false;
        //隐藏自动按钮
        this.zidongzhandouanniu_pvp.alpha = 0;
        this.zidongzhandouanniu_pvp.enabled = false;
        //扣除气点数
        this.qidianshu_0 = this.qidianshu_0 - this.di2caiqidian_0;
        if (this.qidianshu_0 < 0) {
            this.qidianshu_0 = 0;
        }
        this.qidianxianshigengxin();
        var shipubiao = Gerenshuxing.shipubiao;
        var xianshishangcaitu = "";
        var xianshicaiming = "";
        for (var h = 0; h < shipubiao.length; h++) {
            if (shipubiao[h].id == this.benhuihechucaiid_0) {
                xianshishangcaitu = shipubiao[h].id + "_png";
                xianshicaiming = shipubiao[h].foodName;
                break;
            }
        }
        var zhandoushangcai = new egret.Bitmap();
        var zhandoutupian = RES.getRes(xianshishangcaitu);
        zhandoushangcai.texture = zhandoutupian;
        this.addChild(zhandoushangcai);
        zhandoushangcai.x = this.caixuanxiang_pvp_1.x;
        zhandoushangcai.y = this.caixuanxiang_pvp_1.y;
        zhandoushangcai.scaleX = 0.7;
        zhandoushangcai.scaleY = 0.7;
        egret.Tween.get(zhandoushangcai).to({ scaleX: 0.2, scaleY: 0.2, x: this.zhandouxianshizu_pvp.x + this.zhandouxianshizu_pvp.width / 2, y: this.zhandouxianshizu_pvp.y }, 1000).call(function () {
            if (_this.parent) {
                _this.removeChild(zhandoushangcai);
                _this.zhandouxianshizu_pvp.alpha = 1;
                _this.zhandounierong_pvp.source = xianshishangcaitu;
                _this.zhandouhanhuazu_pvp.alpha = 1;
                _this.zhandouhanhua_pvp.text = _this.zijihanhuajisuan(xianshicaiming);
                egret.Tween.get(zhandoushangcai).to({}).wait(1000).call(function () {
                    _this.zijihanhua = "";
                    _this.zhandouhanhuazu_pvp.alpha = 0;
                    _this.zhandouhanhua_pvp.text = "";
                    _this.kaishizhandou();
                });
            }
        });
    };
    Pvpzhandoujiemian.prototype.chupai3 = function () {
        var _this = this;
        Gamesound.Soundkongzhi().anniuyinxiao();
        this.benhuihechucaiid_0 = this.di3caiid_0;
        this.di3caiid_0 = "0";
        this.caiicon_pvp_2.source = "";
        this.xiaohao_pvp_2_1.alpha = 0;
        this.xiaohao_pvp_2_2.alpha = 0;
        this.xiaohao_pvp_2_3.alpha = 0;
        this.xiaohao_pvp_2_4.alpha = 0;
        //隐藏闹钟
        this.xiamiantishizu_pvp.alpha = 0;
        this.daojishitishizu_pvp.alpha = 0;
        this.shangmiantishizu_pvp.alpha = 0;
        this.shangcai1anniu_pvp.enabled = false;
        this.shangcai2anniu_pvp.enabled = false;
        this.shangcai3anniu_pvp.enabled = false;
        this.shangcai4anniu_pvp.enabled = false;
        //隐藏自动按钮
        this.zidongzhandouanniu_pvp.alpha = 0;
        this.zidongzhandouanniu_pvp.enabled = false;
        //扣除气点数
        this.qidianshu_0 = this.qidianshu_0 - this.di3caiqidian_0;
        if (this.qidianshu_0 < 0) {
            this.qidianshu_0 = 0;
        }
        this.qidianxianshigengxin();
        var shipubiao = Gerenshuxing.shipubiao;
        var xianshishangcaitu = "";
        var xianshicaiming = "";
        for (var h = 0; h < shipubiao.length; h++) {
            if (shipubiao[h].id == this.benhuihechucaiid_0) {
                xianshishangcaitu = shipubiao[h].id + "_png";
                xianshicaiming = shipubiao[h].foodName;
                break;
            }
        }
        var zhandoushangcai = new egret.Bitmap();
        var zhandoutupian = RES.getRes(xianshishangcaitu);
        zhandoushangcai.texture = zhandoutupian;
        this.addChild(zhandoushangcai);
        zhandoushangcai.x = this.caixuanxiang_pvp_2.x;
        zhandoushangcai.y = this.caixuanxiang_pvp_2.y;
        zhandoushangcai.scaleX = 0.7;
        zhandoushangcai.scaleY = 0.7;
        egret.Tween.get(zhandoushangcai).to({ scaleX: 0.2, scaleY: 0.2, x: this.zhandouxianshizu_pvp.x + this.zhandouxianshizu_pvp.width / 2, y: this.zhandouxianshizu_pvp.y }, 1000).call(function () {
            if (_this.parent) {
                _this.removeChild(zhandoushangcai);
                _this.zhandouxianshizu_pvp.alpha = 1;
                _this.zhandounierong_pvp.source = xianshishangcaitu;
                _this.zhandouhanhuazu_pvp.alpha = 1;
                _this.zhandouhanhua_pvp.text = _this.zijihanhuajisuan(xianshicaiming);
                egret.Tween.get(zhandoushangcai).to({}).wait(1000).call(function () {
                    _this.zijihanhua = "";
                    _this.zhandouhanhuazu_pvp.alpha = 0;
                    _this.zhandouhanhua_pvp.text = "";
                    _this.kaishizhandou();
                });
            }
        });
    };
    Pvpzhandoujiemian.prototype.chupai4 = function () {
        var _this = this;
        Gamesound.Soundkongzhi().anniuyinxiao();
        this.benhuihechucaiid_0 = this.di4caiid_0;
        this.di4caiid_0 = "0";
        this.caiicon_pvp_3.source = "";
        this.xiaohao_pvp_3_1.alpha = 0;
        this.xiaohao_pvp_3_2.alpha = 0;
        this.xiaohao_pvp_3_3.alpha = 0;
        this.xiaohao_pvp_3_4.alpha = 0;
        //隐藏闹钟
        this.xiamiantishizu_pvp.alpha = 0;
        this.daojishitishizu_pvp.alpha = 0;
        this.shangmiantishizu_pvp.alpha = 0;
        this.shangcai1anniu_pvp.enabled = false;
        this.shangcai2anniu_pvp.enabled = false;
        this.shangcai3anniu_pvp.enabled = false;
        this.shangcai4anniu_pvp.enabled = false;
        //隐藏自动按钮
        this.zidongzhandouanniu_pvp.alpha = 0;
        this.zidongzhandouanniu_pvp.enabled = false;
        //扣除气点数
        this.qidianshu_0 = this.qidianshu_0 - this.di4caiqidian_0;
        if (this.qidianshu_0 < 0) {
            this.qidianshu_0 = 0;
        }
        this.qidianxianshigengxin();
        var shipubiao = Gerenshuxing.shipubiao;
        var xianshishangcaitu = "";
        var xianshicaiming = "";
        for (var h = 0; h < shipubiao.length; h++) {
            if (shipubiao[h].id == this.benhuihechucaiid_0) {
                xianshishangcaitu = shipubiao[h].id + "_png";
                xianshicaiming = shipubiao[h].foodName;
                break;
            }
        }
        var zhandoushangcai = new egret.Bitmap();
        var zhandoutupian = RES.getRes(xianshishangcaitu);
        zhandoushangcai.texture = zhandoutupian;
        this.addChild(zhandoushangcai);
        zhandoushangcai.x = this.caixuanxiang_pvp_3.x;
        zhandoushangcai.y = this.caixuanxiang_pvp_3.y;
        zhandoushangcai.scaleX = 0.7;
        zhandoushangcai.scaleY = 0.7;
        egret.Tween.get(zhandoushangcai).to({ scaleX: 0.2, scaleY: 0.2, x: this.zhandouxianshizu_pvp.x + this.zhandouxianshizu_pvp.width / 2, y: this.zhandouxianshizu_pvp.y }, 1000).call(function () {
            if (_this.parent) {
                _this.removeChild(zhandoushangcai);
                _this.zhandouxianshizu_pvp.alpha = 1;
                _this.zhandounierong_pvp.source = xianshishangcaitu;
                _this.zhandouhanhuazu_pvp.alpha = 1;
                _this.zhandouhanhua_pvp.text = _this.zijihanhuajisuan(xianshicaiming);
                egret.Tween.get(zhandoushangcai).to({}).wait(1000).call(function () {
                    _this.zijihanhua = "";
                    _this.zhandouhanhuazu_pvp.alpha = 0;
                    _this.zhandouhanhua_pvp.text = "";
                    _this.kaishizhandou();
                });
            }
        });
    };
    Pvpzhandoujiemian.prototype.direnchupai1 = function () {
        var _this = this;
        Gamesound.Soundkongzhi().anniuyinxiao();
        this.benhuihechucaiid_1 = this.di1caiid_1;
        this.di1caiid_1 = "0";
        //扣除气点数
        this.qidianshu_1 = this.qidianshu_1 - this.di1caiqidian_1;
        if (this.qidianshu_1 < 0) {
            this.qidianshu_1 = 0;
        }
        this.direnqidianxianshigengxin();
        var shipubiao = Gerenshuxing.shipubiao;
        var xianshishangcaitu = "";
        var xianshicaiming = "";
        for (var h = 0; h < shipubiao.length; h++) {
            if (shipubiao[h].id == this.benhuihechucaiid_1) {
                xianshishangcaitu = shipubiao[h].id + "_png";
                xianshicaiming = shipubiao[h].foodName;
                break;
            }
        }
        var zhandoushangcai = new egret.Bitmap();
        var zhandoutupian = RES.getRes(xianshishangcaitu);
        zhandoushangcai.texture = zhandoutupian;
        this.addChild(zhandoushangcai);
        if (this.chupairen == 3) {
            zhandoushangcai.x = this.diduizu.x + this.diduizu.width / 2 - zhandoushangcai.width / 2;
            zhandoushangcai.y = this.diduizu.y + this.diduizu.height / 2 - zhandoushangcai.height / 2;
        }
        else if (this.chupairen == 4) {
            zhandoushangcai.x = this.fuzhuzu1.x + this.fuzhuzu1.width / 2 - zhandoushangcai.width / 2;
            zhandoushangcai.y = this.fuzhuzu1.y + this.fuzhuzu1.height / 2 - zhandoushangcai.height / 2;
        }
        else if (this.chupairen == 5) {
            zhandoushangcai.x = this.fuzhuzu2.x + this.fuzhuzu2.width / 2 - zhandoushangcai.width / 2;
            zhandoushangcai.y = this.fuzhuzu2.y + this.fuzhuzu2.height / 2 - zhandoushangcai.height / 2;
        }
        zhandoushangcai.scaleX = 0.7;
        zhandoushangcai.scaleY = 0.7;
        egret.Tween.get(zhandoushangcai).to({ scaleX: 0.2, scaleY: 0.2, x: this.zhandouxianshizu_pvp.x + this.zhandouxianshizu_pvp.width / 2, y: this.zhandouxianshizu_pvp.y }, 1000).call(function () {
            if (_this.parent) {
                _this.removeChild(zhandoushangcai);
                _this.zhandouxianshizu_pvp.alpha = 1;
                _this.zhandounierong_pvp.source = xianshishangcaitu;
                _this.zhandouhanhuazu_pvp.alpha = 1;
                _this.zhandouhanhua_pvp.text = _this.zijihanhuajisuan(xianshicaiming);
                egret.Tween.get(zhandoushangcai).to({}).wait(1000).call(function () {
                    _this.zijihanhua = "";
                    _this.zhandouhanhuazu_pvp.alpha = 0;
                    _this.zhandouhanhua_pvp.text = "";
                    _this.direnkaishizhandou();
                });
            }
        });
    };
    Pvpzhandoujiemian.prototype.direnchupai2 = function () {
        var _this = this;
        Gamesound.Soundkongzhi().anniuyinxiao();
        this.benhuihechucaiid_1 = this.di2caiid_1;
        this.di2caiid_1 = "0";
        //扣除气点数
        this.qidianshu_1 = this.qidianshu_1 - this.di2caiqidian_1;
        if (this.qidianshu_1 < 0) {
            this.qidianshu_1 = 0;
        }
        this.direnqidianxianshigengxin();
        var shipubiao = Gerenshuxing.shipubiao;
        var xianshishangcaitu = "";
        var xianshicaiming = "";
        for (var h = 0; h < shipubiao.length; h++) {
            if (shipubiao[h].id == this.benhuihechucaiid_1) {
                xianshishangcaitu = shipubiao[h].id + "_png";
                xianshicaiming = shipubiao[h].foodName;
                break;
            }
        }
        var zhandoushangcai = new egret.Bitmap();
        var zhandoutupian = RES.getRes(xianshishangcaitu);
        zhandoushangcai.texture = zhandoutupian;
        this.addChild(zhandoushangcai);
        if (this.chupairen == 3) {
            zhandoushangcai.x = this.diduizu.x + this.diduizu.width / 2 - zhandoushangcai.width / 2;
            zhandoushangcai.y = this.diduizu.y + this.diduizu.height / 2 - zhandoushangcai.height / 2;
        }
        else if (this.chupairen == 4) {
            zhandoushangcai.x = this.fuzhuzu1.x + this.fuzhuzu1.width / 2 - zhandoushangcai.width / 2;
            zhandoushangcai.y = this.fuzhuzu1.y + this.fuzhuzu1.height / 2 - zhandoushangcai.height / 2;
        }
        else if (this.chupairen == 5) {
            zhandoushangcai.x = this.fuzhuzu2.x + this.fuzhuzu2.width / 2 - zhandoushangcai.width / 2;
            zhandoushangcai.y = this.fuzhuzu2.y + this.fuzhuzu2.height / 2 - zhandoushangcai.height / 2;
        }
        zhandoushangcai.scaleX = 0.7;
        zhandoushangcai.scaleY = 0.7;
        egret.Tween.get(zhandoushangcai).to({ scaleX: 0.2, scaleY: 0.2, x: this.zhandouxianshizu_pvp.x + this.zhandouxianshizu_pvp.width / 2, y: this.zhandouxianshizu_pvp.y }, 1000).call(function () {
            if (_this.parent) {
                _this.removeChild(zhandoushangcai);
                _this.zhandouxianshizu_pvp.alpha = 1;
                _this.zhandounierong_pvp.source = xianshishangcaitu;
                _this.zhandouhanhuazu_pvp.alpha = 1;
                _this.zhandouhanhua_pvp.text = _this.zijihanhuajisuan(xianshicaiming);
                egret.Tween.get(zhandoushangcai).to({}).wait(1000).call(function () {
                    _this.zijihanhua = "";
                    _this.zhandouhanhuazu_pvp.alpha = 0;
                    _this.zhandouhanhua_pvp.text = "";
                    _this.direnkaishizhandou();
                });
            }
        });
    };
    Pvpzhandoujiemian.prototype.direnchupai3 = function () {
        var _this = this;
        Gamesound.Soundkongzhi().anniuyinxiao();
        this.benhuihechucaiid_1 = this.di3caiid_1;
        this.di3caiid_1 = "0";
        //扣除气点数
        this.qidianshu_1 = this.qidianshu_1 - this.di3caiqidian_1;
        if (this.qidianshu_1 < 0) {
            this.qidianshu_1 = 0;
        }
        this.direnqidianxianshigengxin();
        var shipubiao = Gerenshuxing.shipubiao;
        var xianshishangcaitu = "";
        var xianshicaiming = "";
        for (var h = 0; h < shipubiao.length; h++) {
            if (shipubiao[h].id == this.benhuihechucaiid_1) {
                xianshishangcaitu = shipubiao[h].id + "_png";
                xianshicaiming = shipubiao[h].foodName;
                break;
            }
        }
        var zhandoushangcai = new egret.Bitmap();
        var zhandoutupian = RES.getRes(xianshishangcaitu);
        zhandoushangcai.texture = zhandoutupian;
        this.addChild(zhandoushangcai);
        if (this.chupairen == 3) {
            zhandoushangcai.x = this.diduizu.x + this.diduizu.width / 2 - zhandoushangcai.width / 2;
            zhandoushangcai.y = this.diduizu.y + this.diduizu.height / 2 - zhandoushangcai.height / 2;
        }
        else if (this.chupairen == 4) {
            zhandoushangcai.x = this.fuzhuzu1.x + this.fuzhuzu1.width / 2 - zhandoushangcai.width / 2;
            zhandoushangcai.y = this.fuzhuzu1.y + this.fuzhuzu1.height / 2 - zhandoushangcai.height / 2;
        }
        else if (this.chupairen == 5) {
            zhandoushangcai.x = this.fuzhuzu2.x + this.fuzhuzu2.width / 2 - zhandoushangcai.width / 2;
            zhandoushangcai.y = this.fuzhuzu2.y + this.fuzhuzu2.height / 2 - zhandoushangcai.height / 2;
        }
        zhandoushangcai.scaleX = 0.7;
        zhandoushangcai.scaleY = 0.7;
        egret.Tween.get(zhandoushangcai).to({ scaleX: 0.2, scaleY: 0.2, x: this.zhandouxianshizu_pvp.x + this.zhandouxianshizu_pvp.width / 2, y: this.zhandouxianshizu_pvp.y }, 1000).call(function () {
            if (_this.parent) {
                _this.removeChild(zhandoushangcai);
                _this.zhandouxianshizu_pvp.alpha = 1;
                _this.zhandounierong_pvp.source = xianshishangcaitu;
                _this.zhandouhanhuazu_pvp.alpha = 1;
                _this.zhandouhanhua_pvp.text = _this.zijihanhuajisuan(xianshicaiming);
                egret.Tween.get(zhandoushangcai).to({}).wait(1000).call(function () {
                    _this.zijihanhua = "";
                    _this.zhandouhanhuazu_pvp.alpha = 0;
                    _this.zhandouhanhua_pvp.text = "";
                    _this.direnkaishizhandou();
                });
            }
        });
    };
    Pvpzhandoujiemian.prototype.direnchupai4 = function () {
        var _this = this;
        Gamesound.Soundkongzhi().anniuyinxiao();
        this.benhuihechucaiid_1 = this.di4caiid_1;
        this.di4caiid_1 = "0";
        //扣除气点数
        this.qidianshu_1 = this.qidianshu_1 - this.di4caiqidian_1;
        if (this.qidianshu_1 < 0) {
            this.qidianshu_1 = 0;
        }
        this.direnqidianxianshigengxin();
        var shipubiao = Gerenshuxing.shipubiao;
        var xianshishangcaitu = "";
        var xianshicaiming = "";
        for (var h = 0; h < shipubiao.length; h++) {
            if (shipubiao[h].id == this.benhuihechucaiid_1) {
                xianshishangcaitu = shipubiao[h].id + "_png";
                xianshicaiming = shipubiao[h].foodName;
                break;
            }
        }
        var zhandoushangcai = new egret.Bitmap();
        var zhandoutupian = RES.getRes(xianshishangcaitu);
        zhandoushangcai.texture = zhandoutupian;
        this.addChild(zhandoushangcai);
        if (this.chupairen == 3) {
            zhandoushangcai.x = this.diduizu.x + this.diduizu.width / 2 - zhandoushangcai.width / 2;
            zhandoushangcai.y = this.diduizu.y + this.diduizu.height / 2 - zhandoushangcai.height / 2;
        }
        else if (this.chupairen == 4) {
            zhandoushangcai.x = this.fuzhuzu1.x + this.fuzhuzu1.width / 2 - zhandoushangcai.width / 2;
            zhandoushangcai.y = this.fuzhuzu1.y + this.fuzhuzu1.height / 2 - zhandoushangcai.height / 2;
        }
        else if (this.chupairen == 5) {
            zhandoushangcai.x = this.fuzhuzu2.x + this.fuzhuzu2.width / 2 - zhandoushangcai.width / 2;
            zhandoushangcai.y = this.fuzhuzu2.y + this.fuzhuzu2.height / 2 - zhandoushangcai.height / 2;
        }
        zhandoushangcai.scaleX = 0.7;
        zhandoushangcai.scaleY = 0.7;
        egret.Tween.get(zhandoushangcai).to({ scaleX: 0.2, scaleY: 0.2, x: this.zhandouxianshizu_pvp.x + this.zhandouxianshizu_pvp.width / 2, y: this.zhandouxianshizu_pvp.y }, 1000).call(function () {
            if (_this.parent) {
                _this.removeChild(zhandoushangcai);
                _this.zhandouxianshizu_pvp.alpha = 1;
                _this.zhandounierong_pvp.source = xianshishangcaitu;
                _this.zhandouhanhuazu_pvp.alpha = 1;
                _this.zhandouhanhua_pvp.text = _this.zijihanhuajisuan(xianshicaiming);
                egret.Tween.get(zhandoushangcai).to({}).wait(1000).call(function () {
                    _this.zijihanhua = "";
                    _this.zhandouhanhuazu_pvp.alpha = 0;
                    _this.zhandouhanhua_pvp.text = "";
                    _this.direnkaishizhandou();
                });
            }
        });
    };
    Pvpzhandoujiemian.prototype.zijihanhuajisuan = function (hanhuaneirong) {
        return "尝尝这道[" + hanhuaneirong + "]吧！";
    };
    Pvpzhandoujiemian.prototype.qidianxianshigengxin = function () {
        switch (this.qidianshu_0) {
            case 0:
                this.tiaoliao_pvp_0.alpha = 0;
                this.tiaoliao_pvp_1.alpha = 0;
                this.tiaoliao_pvp_2.alpha = 0;
                this.tiaoliao_pvp_3.alpha = 0;
                this.tiaoliao_pvp_4.alpha = 0;
                this.tiaoliao_pvp_5.alpha = 0;
                this.tiaoliao_pvp_6.alpha = 0;
                this.tiaoliao_pvp_7.alpha = 0;
                this.tiaoliao_pvp_8.alpha = 0;
                this.tiaoliao_pvp_9.alpha = 0;
                break;
            case 1:
                this.tiaoliao_pvp_0.alpha = 1;
                this.tiaoliao_pvp_1.alpha = 0;
                this.tiaoliao_pvp_2.alpha = 0;
                this.tiaoliao_pvp_3.alpha = 0;
                this.tiaoliao_pvp_4.alpha = 0;
                this.tiaoliao_pvp_5.alpha = 0;
                this.tiaoliao_pvp_6.alpha = 0;
                this.tiaoliao_pvp_7.alpha = 0;
                this.tiaoliao_pvp_8.alpha = 0;
                this.tiaoliao_pvp_9.alpha = 0;
                break;
            case 2:
                this.tiaoliao_pvp_0.alpha = 1;
                this.tiaoliao_pvp_1.alpha = 1;
                this.tiaoliao_pvp_2.alpha = 0;
                this.tiaoliao_pvp_3.alpha = 0;
                this.tiaoliao_pvp_4.alpha = 0;
                this.tiaoliao_pvp_5.alpha = 0;
                this.tiaoliao_pvp_6.alpha = 0;
                this.tiaoliao_pvp_7.alpha = 0;
                this.tiaoliao_pvp_8.alpha = 0;
                this.tiaoliao_pvp_9.alpha = 0;
                break;
            case 3:
                this.tiaoliao_pvp_0.alpha = 1;
                this.tiaoliao_pvp_1.alpha = 1;
                this.tiaoliao_pvp_2.alpha = 1;
                this.tiaoliao_pvp_3.alpha = 0;
                this.tiaoliao_pvp_4.alpha = 0;
                this.tiaoliao_pvp_5.alpha = 0;
                this.tiaoliao_pvp_6.alpha = 0;
                this.tiaoliao_pvp_7.alpha = 0;
                this.tiaoliao_pvp_8.alpha = 0;
                this.tiaoliao_pvp_9.alpha = 0;
                break;
            case 4:
                this.tiaoliao_pvp_0.alpha = 1;
                this.tiaoliao_pvp_1.alpha = 1;
                this.tiaoliao_pvp_2.alpha = 1;
                this.tiaoliao_pvp_3.alpha = 1;
                this.tiaoliao_pvp_4.alpha = 0;
                this.tiaoliao_pvp_5.alpha = 0;
                this.tiaoliao_pvp_6.alpha = 0;
                this.tiaoliao_pvp_7.alpha = 0;
                this.tiaoliao_pvp_8.alpha = 0;
                this.tiaoliao_pvp_9.alpha = 0;
                break;
            case 5:
                this.tiaoliao_pvp_0.alpha = 1;
                this.tiaoliao_pvp_1.alpha = 1;
                this.tiaoliao_pvp_2.alpha = 1;
                this.tiaoliao_pvp_3.alpha = 1;
                this.tiaoliao_pvp_4.alpha = 1;
                this.tiaoliao_pvp_5.alpha = 0;
                this.tiaoliao_pvp_6.alpha = 0;
                this.tiaoliao_pvp_7.alpha = 0;
                this.tiaoliao_pvp_8.alpha = 0;
                this.tiaoliao_pvp_9.alpha = 0;
                break;
            case 6:
                this.tiaoliao_pvp_0.alpha = 1;
                this.tiaoliao_pvp_1.alpha = 1;
                this.tiaoliao_pvp_2.alpha = 1;
                this.tiaoliao_pvp_3.alpha = 1;
                this.tiaoliao_pvp_4.alpha = 1;
                this.tiaoliao_pvp_5.alpha = 1;
                this.tiaoliao_pvp_6.alpha = 0;
                this.tiaoliao_pvp_7.alpha = 0;
                this.tiaoliao_pvp_8.alpha = 0;
                this.tiaoliao_pvp_9.alpha = 0;
                break;
            case 7:
                this.tiaoliao_pvp_0.alpha = 1;
                this.tiaoliao_pvp_1.alpha = 1;
                this.tiaoliao_pvp_2.alpha = 1;
                this.tiaoliao_pvp_3.alpha = 1;
                this.tiaoliao_pvp_4.alpha = 1;
                this.tiaoliao_pvp_5.alpha = 1;
                this.tiaoliao_pvp_6.alpha = 1;
                this.tiaoliao_pvp_7.alpha = 0;
                this.tiaoliao_pvp_8.alpha = 0;
                this.tiaoliao_pvp_9.alpha = 0;
                break;
            case 8:
                this.tiaoliao_pvp_0.alpha = 1;
                this.tiaoliao_pvp_1.alpha = 1;
                this.tiaoliao_pvp_2.alpha = 1;
                this.tiaoliao_pvp_3.alpha = 1;
                this.tiaoliao_pvp_4.alpha = 1;
                this.tiaoliao_pvp_5.alpha = 1;
                this.tiaoliao_pvp_6.alpha = 1;
                this.tiaoliao_pvp_7.alpha = 1;
                this.tiaoliao_pvp_8.alpha = 0;
                this.tiaoliao_pvp_9.alpha = 0;
                break;
            case 9:
                this.tiaoliao_pvp_0.alpha = 1;
                this.tiaoliao_pvp_1.alpha = 1;
                this.tiaoliao_pvp_2.alpha = 1;
                this.tiaoliao_pvp_3.alpha = 1;
                this.tiaoliao_pvp_4.alpha = 1;
                this.tiaoliao_pvp_5.alpha = 1;
                this.tiaoliao_pvp_6.alpha = 1;
                this.tiaoliao_pvp_7.alpha = 1;
                this.tiaoliao_pvp_8.alpha = 1;
                this.tiaoliao_pvp_9.alpha = 0;
                break;
            case 10:
                this.tiaoliao_pvp_0.alpha = 1;
                this.tiaoliao_pvp_1.alpha = 1;
                this.tiaoliao_pvp_2.alpha = 1;
                this.tiaoliao_pvp_3.alpha = 1;
                this.tiaoliao_pvp_4.alpha = 1;
                this.tiaoliao_pvp_5.alpha = 1;
                this.tiaoliao_pvp_6.alpha = 1;
                this.tiaoliao_pvp_7.alpha = 1;
                this.tiaoliao_pvp_8.alpha = 1;
                this.tiaoliao_pvp_9.alpha = 1;
                break;
        }
    };
    Pvpzhandoujiemian.prototype.direnqidianxianshigengxin = function () {
        switch (this.qidianshu_1) {
            case 0:
                this.tiaoliao_pvp_10.alpha = 0;
                this.tiaoliao_pvp_11.alpha = 0;
                this.tiaoliao_pvp_12.alpha = 0;
                this.tiaoliao_pvp_13.alpha = 0;
                this.tiaoliao_pvp_14.alpha = 0;
                this.tiaoliao_pvp_15.alpha = 0;
                this.tiaoliao_pvp_16.alpha = 0;
                this.tiaoliao_pvp_17.alpha = 0;
                this.tiaoliao_pvp_18.alpha = 0;
                this.tiaoliao_pvp_19.alpha = 0;
                break;
            case 1:
                this.tiaoliao_pvp_10.alpha = 1;
                this.tiaoliao_pvp_11.alpha = 0;
                this.tiaoliao_pvp_12.alpha = 0;
                this.tiaoliao_pvp_13.alpha = 0;
                this.tiaoliao_pvp_14.alpha = 0;
                this.tiaoliao_pvp_15.alpha = 0;
                this.tiaoliao_pvp_16.alpha = 0;
                this.tiaoliao_pvp_17.alpha = 0;
                this.tiaoliao_pvp_18.alpha = 0;
                this.tiaoliao_pvp_19.alpha = 0;
                break;
            case 2:
                this.tiaoliao_pvp_10.alpha = 1;
                this.tiaoliao_pvp_11.alpha = 1;
                this.tiaoliao_pvp_12.alpha = 0;
                this.tiaoliao_pvp_13.alpha = 0;
                this.tiaoliao_pvp_14.alpha = 0;
                this.tiaoliao_pvp_15.alpha = 0;
                this.tiaoliao_pvp_16.alpha = 0;
                this.tiaoliao_pvp_17.alpha = 0;
                this.tiaoliao_pvp_18.alpha = 0;
                this.tiaoliao_pvp_19.alpha = 0;
                break;
            case 3:
                this.tiaoliao_pvp_10.alpha = 1;
                this.tiaoliao_pvp_11.alpha = 1;
                this.tiaoliao_pvp_12.alpha = 1;
                this.tiaoliao_pvp_13.alpha = 0;
                this.tiaoliao_pvp_14.alpha = 0;
                this.tiaoliao_pvp_15.alpha = 0;
                this.tiaoliao_pvp_16.alpha = 0;
                this.tiaoliao_pvp_17.alpha = 0;
                this.tiaoliao_pvp_18.alpha = 0;
                this.tiaoliao_pvp_19.alpha = 0;
                break;
            case 4:
                this.tiaoliao_pvp_10.alpha = 1;
                this.tiaoliao_pvp_11.alpha = 1;
                this.tiaoliao_pvp_12.alpha = 1;
                this.tiaoliao_pvp_13.alpha = 1;
                this.tiaoliao_pvp_14.alpha = 0;
                this.tiaoliao_pvp_15.alpha = 0;
                this.tiaoliao_pvp_16.alpha = 0;
                this.tiaoliao_pvp_17.alpha = 0;
                this.tiaoliao_pvp_18.alpha = 0;
                this.tiaoliao_pvp_19.alpha = 0;
                break;
            case 5:
                this.tiaoliao_pvp_10.alpha = 1;
                this.tiaoliao_pvp_11.alpha = 1;
                this.tiaoliao_pvp_12.alpha = 1;
                this.tiaoliao_pvp_13.alpha = 1;
                this.tiaoliao_pvp_14.alpha = 1;
                this.tiaoliao_pvp_15.alpha = 0;
                this.tiaoliao_pvp_16.alpha = 0;
                this.tiaoliao_pvp_17.alpha = 0;
                this.tiaoliao_pvp_18.alpha = 0;
                this.tiaoliao_pvp_19.alpha = 0;
                break;
            case 6:
                this.tiaoliao_pvp_10.alpha = 1;
                this.tiaoliao_pvp_11.alpha = 1;
                this.tiaoliao_pvp_12.alpha = 1;
                this.tiaoliao_pvp_13.alpha = 1;
                this.tiaoliao_pvp_14.alpha = 1;
                this.tiaoliao_pvp_15.alpha = 1;
                this.tiaoliao_pvp_16.alpha = 0;
                this.tiaoliao_pvp_17.alpha = 0;
                this.tiaoliao_pvp_18.alpha = 0;
                this.tiaoliao_pvp_19.alpha = 0;
                break;
            case 7:
                this.tiaoliao_pvp_10.alpha = 1;
                this.tiaoliao_pvp_11.alpha = 1;
                this.tiaoliao_pvp_12.alpha = 1;
                this.tiaoliao_pvp_13.alpha = 1;
                this.tiaoliao_pvp_14.alpha = 1;
                this.tiaoliao_pvp_15.alpha = 1;
                this.tiaoliao_pvp_16.alpha = 1;
                this.tiaoliao_pvp_17.alpha = 0;
                this.tiaoliao_pvp_18.alpha = 0;
                this.tiaoliao_pvp_19.alpha = 0;
                break;
            case 8:
                this.tiaoliao_pvp_10.alpha = 1;
                this.tiaoliao_pvp_11.alpha = 1;
                this.tiaoliao_pvp_12.alpha = 1;
                this.tiaoliao_pvp_13.alpha = 1;
                this.tiaoliao_pvp_14.alpha = 1;
                this.tiaoliao_pvp_15.alpha = 1;
                this.tiaoliao_pvp_16.alpha = 1;
                this.tiaoliao_pvp_17.alpha = 1;
                this.tiaoliao_pvp_18.alpha = 0;
                this.tiaoliao_pvp_19.alpha = 0;
                break;
            case 9:
                this.tiaoliao_pvp_10.alpha = 1;
                this.tiaoliao_pvp_11.alpha = 1;
                this.tiaoliao_pvp_12.alpha = 1;
                this.tiaoliao_pvp_13.alpha = 1;
                this.tiaoliao_pvp_14.alpha = 1;
                this.tiaoliao_pvp_15.alpha = 1;
                this.tiaoliao_pvp_16.alpha = 1;
                this.tiaoliao_pvp_17.alpha = 1;
                this.tiaoliao_pvp_18.alpha = 1;
                this.tiaoliao_pvp_19.alpha = 0;
                break;
            case 10:
                this.tiaoliao_pvp_10.alpha = 1;
                this.tiaoliao_pvp_11.alpha = 1;
                this.tiaoliao_pvp_12.alpha = 1;
                this.tiaoliao_pvp_13.alpha = 1;
                this.tiaoliao_pvp_14.alpha = 1;
                this.tiaoliao_pvp_15.alpha = 1;
                this.tiaoliao_pvp_16.alpha = 1;
                this.tiaoliao_pvp_17.alpha = 1;
                this.tiaoliao_pvp_18.alpha = 1;
                this.tiaoliao_pvp_19.alpha = 1;
                break;
        }
    };
    //自己出招，开始战斗模块
    Pvpzhandoujiemian.prototype.kaishizhandou = function () {
        this.jisuanduiguaishanghai();
        if (this.zhandoujiesu == false) {
            //确定攻击对象
            var gongjiduixiangzu = [];
            if (this.qixue_1 > 0) {
                gongjiduixiangzu.push("1");
            }
            if (this.fuzhu1qixue_1 > 0) {
                gongjiduixiangzu.push("2");
            }
            if (this.fuzhu2qixue_1 > 0) {
                gongjiduixiangzu.push("3");
            }
            //		console.log("进攻候选组:" + gongjiduixiangzu);
            if (parseInt(this.benhuihechucaiid_0) >= 1000 && parseInt(this.benhuihechucaiid_0) < 2000) {
                //攻击对象为1人
                var suijigongjiduixiang = Math.floor(Math.random() * gongjiduixiangzu.length);
                if (gongjiduixiangzu[suijigongjiduixiang] == "1") {
                    this.jingongguaiwu1();
                }
                else if (gongjiduixiangzu[suijigongjiduixiang] == "2") {
                    this.jingongguaiwu2();
                }
                else if (gongjiduixiangzu[suijigongjiduixiang] == "3") {
                    this.jingongguaiwu3();
                }
            }
            else if (parseInt(this.benhuihechucaiid_0) >= 2000 && parseInt(this.benhuihechucaiid_0) < 3000) {
                //攻击对象为3人
                if (gongjiduixiangzu.length == 1) {
                    if (gongjiduixiangzu[0] == "1") {
                        this.jingongguaiwu1();
                    }
                    else if (gongjiduixiangzu[0] == "2") {
                        this.jingongguaiwu2();
                    }
                    else if (gongjiduixiangzu[0] == "3") {
                        this.jingongguaiwu3();
                    }
                }
                else if (gongjiduixiangzu.length == 2) {
                    if (gongjiduixiangzu[0] == "1") {
                        this.jingongguaiwu1();
                    }
                    else if (gongjiduixiangzu[0] == "2") {
                        this.jingongguaiwu2();
                    }
                    else if (gongjiduixiangzu[0] == "3") {
                        this.jingongguaiwu3();
                    }
                    if (gongjiduixiangzu[1] == "1") {
                        this.jingongguaiwu1();
                    }
                    else if (gongjiduixiangzu[1] == "2") {
                        this.jingongguaiwu2();
                    }
                    else if (gongjiduixiangzu[1] == "3") {
                        this.jingongguaiwu3();
                    }
                }
                else if (gongjiduixiangzu.length == 3) {
                    if (gongjiduixiangzu[0] == "1") {
                        this.jingongguaiwu1();
                    }
                    else if (gongjiduixiangzu[0] == "2") {
                        this.jingongguaiwu2();
                    }
                    else if (gongjiduixiangzu[0] == "3") {
                        this.jingongguaiwu3();
                    }
                    if (gongjiduixiangzu[1] == "1") {
                        this.jingongguaiwu1();
                    }
                    else if (gongjiduixiangzu[1] == "2") {
                        this.jingongguaiwu2();
                    }
                    else if (gongjiduixiangzu[1] == "3") {
                        this.jingongguaiwu3();
                    }
                    if (gongjiduixiangzu[2] == "1") {
                        this.jingongguaiwu1();
                    }
                    else if (gongjiduixiangzu[2] == "2") {
                        this.jingongguaiwu2();
                    }
                    else if (gongjiduixiangzu[2] == "3") {
                        this.jingongguaiwu3();
                    }
                }
            }
            else if (parseInt(this.benhuihechucaiid_0) >= 4000 && parseInt(this.benhuihechucaiid_0) < 5000) {
                //攻击对象为1人
                var suijigongjiduixiang = Math.floor(Math.random() * gongjiduixiangzu.length);
                if (gongjiduixiangzu[suijigongjiduixiang] == "1") {
                    this.jingongguaiwu1();
                }
                else if (gongjiduixiangzu[suijigongjiduixiang] == "2") {
                    this.jingongguaiwu2();
                }
                else if (gongjiduixiangzu[suijigongjiduixiang] == "3") {
                    this.jingongguaiwu3();
                }
            }
            else if (parseInt(this.benhuihechucaiid_0) >= 3000 && parseInt(this.benhuihechucaiid_0) < 4000) {
                //攻击对象为3人
                if (gongjiduixiangzu.length == 1) {
                    if (gongjiduixiangzu[0] == "1") {
                        this.jingongguaiwu1();
                    }
                    else if (gongjiduixiangzu[0] == "2") {
                        this.jingongguaiwu2();
                    }
                    else if (gongjiduixiangzu[0] == "3") {
                        this.jingongguaiwu3();
                    }
                }
                else if (gongjiduixiangzu.length == 2) {
                    if (gongjiduixiangzu[0] == "1") {
                        this.jingongguaiwu1();
                    }
                    else if (gongjiduixiangzu[0] == "2") {
                        this.jingongguaiwu2();
                    }
                    else if (gongjiduixiangzu[0] == "3") {
                        this.jingongguaiwu3();
                    }
                    if (gongjiduixiangzu[1] == "1") {
                        this.jingongguaiwu1();
                    }
                    else if (gongjiduixiangzu[1] == "2") {
                        this.jingongguaiwu2();
                    }
                    else if (gongjiduixiangzu[1] == "3") {
                        this.jingongguaiwu3();
                    }
                }
                else if (gongjiduixiangzu.length == 3) {
                    if (gongjiduixiangzu[0] == "1") {
                        this.jingongguaiwu1();
                    }
                    else if (gongjiduixiangzu[0] == "2") {
                        this.jingongguaiwu2();
                    }
                    else if (gongjiduixiangzu[0] == "3") {
                        this.jingongguaiwu3();
                    }
                    if (gongjiduixiangzu[1] == "1") {
                        this.jingongguaiwu1();
                    }
                    else if (gongjiduixiangzu[1] == "2") {
                        this.jingongguaiwu2();
                    }
                    else if (gongjiduixiangzu[1] == "3") {
                        this.jingongguaiwu3();
                    }
                    if (gongjiduixiangzu[2] == "1") {
                        this.jingongguaiwu1();
                    }
                    else if (gongjiduixiangzu[2] == "2") {
                        this.jingongguaiwu2();
                    }
                    else if (gongjiduixiangzu[2] == "3") {
                        this.jingongguaiwu3();
                    }
                }
            }
        }
    };
    //自己出招，开始战斗模块
    Pvpzhandoujiemian.prototype.direnkaishizhandou = function () {
        this.jisuanduirenshanghai();
        if (this.zhandoujiesu == false) {
            //确定攻击对象
            var gongjiduixiangzu = [];
            if (this.qixue_0 > 0) {
                gongjiduixiangzu.push("1");
            }
            if (this.fuzhu1qixue_0 > 0) {
                gongjiduixiangzu.push("2");
            }
            if (this.fuzhu2qixue_0 > 0) {
                gongjiduixiangzu.push("3");
            }
            //		console.log("进攻候选组:" + gongjiduixiangzu);
            if (parseInt(this.benhuihechucaiid_1) >= 1000 && parseInt(this.benhuihechucaiid_1) < 2000) {
                //攻击对象为1人
                var suijigongjiduixiang = Math.floor(Math.random() * gongjiduixiangzu.length);
                if (gongjiduixiangzu[suijigongjiduixiang] == "1") {
                    this.jingongrenwu1();
                }
                else if (gongjiduixiangzu[suijigongjiduixiang] == "2") {
                    this.jingongrenwu2();
                }
                else if (gongjiduixiangzu[suijigongjiduixiang] == "3") {
                    this.jingongrenwu3();
                }
            }
            else if (parseInt(this.benhuihechucaiid_1) >= 2000 && parseInt(this.benhuihechucaiid_1) < 3000) {
                //攻击对象为3人
                if (gongjiduixiangzu.length == 1) {
                    if (gongjiduixiangzu[0] == "1") {
                        this.jingongrenwu1();
                    }
                    else if (gongjiduixiangzu[0] == "2") {
                        this.jingongrenwu2();
                    }
                    else if (gongjiduixiangzu[0] == "3") {
                        this.jingongrenwu3();
                    }
                }
                else if (gongjiduixiangzu.length == 2) {
                    if (gongjiduixiangzu[0] == "1") {
                        this.jingongrenwu1();
                    }
                    else if (gongjiduixiangzu[0] == "2") {
                        this.jingongrenwu2();
                    }
                    else if (gongjiduixiangzu[0] == "3") {
                        this.jingongrenwu3();
                    }
                    if (gongjiduixiangzu[1] == "1") {
                        this.jingongrenwu1();
                    }
                    else if (gongjiduixiangzu[1] == "2") {
                        this.jingongrenwu2();
                    }
                    else if (gongjiduixiangzu[1] == "3") {
                        this.jingongrenwu3();
                    }
                }
                else if (gongjiduixiangzu.length == 3) {
                    if (gongjiduixiangzu[0] == "1") {
                        this.jingongrenwu1();
                    }
                    else if (gongjiduixiangzu[0] == "2") {
                        this.jingongrenwu2();
                    }
                    else if (gongjiduixiangzu[0] == "3") {
                        this.jingongrenwu3();
                    }
                    if (gongjiduixiangzu[1] == "1") {
                        this.jingongrenwu1();
                    }
                    else if (gongjiduixiangzu[1] == "2") {
                        this.jingongrenwu2();
                    }
                    else if (gongjiduixiangzu[1] == "3") {
                        this.jingongrenwu3();
                    }
                    if (gongjiduixiangzu[2] == "1") {
                        this.jingongrenwu1();
                    }
                    else if (gongjiduixiangzu[2] == "2") {
                        this.jingongrenwu2();
                    }
                    else if (gongjiduixiangzu[2] == "3") {
                        this.jingongrenwu3();
                    }
                }
            }
            else if (parseInt(this.benhuihechucaiid_1) >= 4000 && parseInt(this.benhuihechucaiid_1) < 5000) {
                //攻击对象为1人
                var suijigongjiduixiang = Math.floor(Math.random() * gongjiduixiangzu.length);
                if (gongjiduixiangzu[suijigongjiduixiang] == "1") {
                    this.jingongrenwu1();
                }
                else if (gongjiduixiangzu[suijigongjiduixiang] == "2") {
                    this.jingongrenwu2();
                }
                else if (gongjiduixiangzu[suijigongjiduixiang] == "3") {
                    this.jingongrenwu3();
                }
            }
            else if (parseInt(this.benhuihechucaiid_1) >= 3000 && parseInt(this.benhuihechucaiid_1) < 4000) {
                //攻击对象为3人
                if (gongjiduixiangzu.length == 1) {
                    if (gongjiduixiangzu[0] == "1") {
                        this.jingongrenwu1();
                    }
                    else if (gongjiduixiangzu[0] == "2") {
                        this.jingongrenwu2();
                    }
                    else if (gongjiduixiangzu[0] == "3") {
                        this.jingongrenwu3();
                    }
                }
                else if (gongjiduixiangzu.length == 2) {
                    if (gongjiduixiangzu[0] == "1") {
                        this.jingongrenwu1();
                    }
                    else if (gongjiduixiangzu[0] == "2") {
                        this.jingongrenwu2();
                    }
                    else if (gongjiduixiangzu[0] == "3") {
                        this.jingongrenwu3();
                    }
                    if (gongjiduixiangzu[1] == "1") {
                        this.jingongrenwu1();
                    }
                    else if (gongjiduixiangzu[1] == "2") {
                        this.jingongrenwu2();
                    }
                    else if (gongjiduixiangzu[1] == "3") {
                        this.jingongrenwu3();
                    }
                }
                else if (gongjiduixiangzu.length == 3) {
                    if (gongjiduixiangzu[0] == "1") {
                        this.jingongrenwu1();
                    }
                    else if (gongjiduixiangzu[0] == "2") {
                        this.jingongrenwu2();
                    }
                    else if (gongjiduixiangzu[0] == "3") {
                        this.jingongrenwu3();
                    }
                    if (gongjiduixiangzu[1] == "1") {
                        this.jingongrenwu1();
                    }
                    else if (gongjiduixiangzu[1] == "2") {
                        this.jingongrenwu2();
                    }
                    else if (gongjiduixiangzu[1] == "3") {
                        this.jingongrenwu3();
                    }
                    if (gongjiduixiangzu[2] == "1") {
                        this.jingongrenwu1();
                    }
                    else if (gongjiduixiangzu[2] == "2") {
                        this.jingongrenwu2();
                    }
                    else if (gongjiduixiangzu[2] == "3") {
                        this.jingongrenwu3();
                    }
                }
            }
        }
    };
    Pvpzhandoujiemian.prototype.jingongguaiwu1 = function () {
        var _this = this;
        var shipubiao1 = Gerenshuxing.shipubiao;
        var xianshishangcaitu1 = "";
        for (var h = 0; h < shipubiao1.length; h++) {
            if (shipubiao1[h].id == this.benhuihechucaiid_0) {
                xianshishangcaitu1 = shipubiao1[h].id + "_png";
                break;
            }
        }
        var zhandoushangcai1 = new egret.Bitmap();
        var zhandoutupian1 = RES.getRes(xianshishangcaitu1);
        zhandoushangcai1.texture = zhandoutupian1;
        this.addChild(zhandoushangcai1);
        zhandoushangcai1.x = this.zhandouxianshizu_pvp.x;
        zhandoushangcai1.y = this.zhandouxianshizu_pvp.y;
        zhandoushangcai1.scaleX = 1;
        zhandoushangcai1.scaleY = 1;
        egret.Tween.get(zhandoushangcai1).to({ scaleX: 0, scaleY: 0, x: this.diduizu.x + this.diduizu.width / 2 - zhandoushangcai1.width / 2, y: this.diduizu.y + this.diduizu.height / 2 - zhandoushangcai1.height / 2 }, 500).call(function () {
            if (_this.parent) {
                _this.removeChild(zhandoushangcai1);
                //正式计算数据
                _this.duiguai1jineng();
            }
        });
    };
    Pvpzhandoujiemian.prototype.jingongguaiwu2 = function () {
        var _this = this;
        var shipubiao2 = Gerenshuxing.shipubiao;
        var xianshishangcaitu2 = "";
        for (var h = 0; h < shipubiao2.length; h++) {
            if (shipubiao2[h].id == this.benhuihechucaiid_0) {
                xianshishangcaitu2 = shipubiao2[h].id + "_png";
                break;
            }
        }
        var zhandoushangcai2 = new egret.Bitmap();
        var zhandoutupian2 = RES.getRes(xianshishangcaitu2);
        zhandoushangcai2.texture = zhandoutupian2;
        this.addChild(zhandoushangcai2);
        zhandoushangcai2.x = this.zhandouxianshizu_pvp.x;
        zhandoushangcai2.y = this.zhandouxianshizu_pvp.y;
        zhandoushangcai2.scaleX = 1;
        zhandoushangcai2.scaleY = 1;
        egret.Tween.get(zhandoushangcai2).to({ scaleX: 0, scaleY: 0, x: this.fuzhuzu1.x + this.fuzhuzu1.width / 2 - zhandoushangcai2.width / 2, y: this.fuzhuzu1.y + this.fuzhuzu1.height / 2 - zhandoushangcai2.height / 2 }, 500).call(function () {
            if (_this.parent) {
                _this.removeChild(zhandoushangcai2);
                //正式计算数据
                _this.duiguai2jineng();
            }
        });
    };
    Pvpzhandoujiemian.prototype.jingongguaiwu3 = function () {
        var _this = this;
        var shipubiao3 = Gerenshuxing.shipubiao;
        var xianshishangcaitu3 = "";
        for (var h = 0; h < shipubiao3.length; h++) {
            if (shipubiao3[h].id == this.benhuihechucaiid_0) {
                xianshishangcaitu3 = shipubiao3[h].id + "_png";
                break;
            }
        }
        var zhandoushangcai3 = new egret.Bitmap();
        var zhandoutupian3 = RES.getRes(xianshishangcaitu3);
        zhandoushangcai3.texture = zhandoutupian3;
        this.addChild(zhandoushangcai3);
        zhandoushangcai3.x = this.zhandouxianshizu_pvp.x;
        zhandoushangcai3.y = this.zhandouxianshizu_pvp.y;
        zhandoushangcai3.scaleX = 1;
        zhandoushangcai3.scaleY = 1;
        egret.Tween.get(zhandoushangcai3).to({ scaleX: 0, scaleY: 0, x: this.fuzhuzu2.x + this.fuzhuzu2.width / 2 - zhandoushangcai3.width / 2, y: this.fuzhuzu2.y + this.fuzhuzu2.height / 2 - zhandoushangcai3.height / 2 }, 500).call(function () {
            if (_this.parent) {
                _this.removeChild(zhandoushangcai3);
                //正式计算数据
                _this.duiguai3jineng();
            }
        });
    };
    Pvpzhandoujiemian.prototype.jingongrenwu1 = function () {
        var _this = this;
        var shipubiao1 = Gerenshuxing.shipubiao;
        var xianshishangcaitu1 = "";
        for (var h = 0; h < shipubiao1.length; h++) {
            if (shipubiao1[h].id == this.benhuihechucaiid_1) {
                xianshishangcaitu1 = shipubiao1[h].id + "_png";
                break;
            }
        }
        var zhandoushangcai1 = new egret.Bitmap();
        var zhandoutupian1 = RES.getRes(xianshishangcaitu1);
        zhandoushangcai1.texture = zhandoutupian1;
        this.addChild(zhandoushangcai1);
        zhandoushangcai1.x = this.zhandouxianshizu_pvp.x;
        zhandoushangcai1.y = this.zhandouxianshizu_pvp.y;
        zhandoushangcai1.scaleX = 1;
        zhandoushangcai1.scaleY = 1;
        egret.Tween.get(zhandoushangcai1).to({ scaleX: 0, scaleY: 0, x: this.zijizu_pvp.x + this.zijizu_pvp.width / 3 * 1, y: this.zijizu_pvp.y + this.zijizu_pvp.height / 2 }, 500).call(function () {
            if (_this.parent) {
                _this.removeChild(zhandoushangcai1);
                //正式计算数据
                _this.duiren1jineng();
            }
        });
    };
    Pvpzhandoujiemian.prototype.jingongrenwu2 = function () {
        var _this = this;
        var shipubiao2 = Gerenshuxing.shipubiao;
        var xianshishangcaitu2 = "";
        for (var h = 0; h < shipubiao2.length; h++) {
            if (shipubiao2[h].id == this.benhuihechucaiid_1) {
                xianshishangcaitu2 = shipubiao2[h].id + "_png";
                break;
            }
        }
        var zhandoushangcai2 = new egret.Bitmap();
        var zhandoutupian2 = RES.getRes(xianshishangcaitu2);
        zhandoushangcai2.texture = zhandoutupian2;
        this.addChild(zhandoushangcai2);
        zhandoushangcai2.x = this.zhandouxianshizu_pvp.x;
        zhandoushangcai2.y = this.zhandouxianshizu_pvp.y;
        zhandoushangcai2.scaleX = 1;
        zhandoushangcai2.scaleY = 1;
        egret.Tween.get(zhandoushangcai2).to({ scaleX: 0, scaleY: 0, x: this.fuzhuzu.x + this.fuzhuzu.width / 2 - zhandoushangcai2.width / 2, y: this.fuzhuzu.y + this.fuzhuzu.height / 2 - zhandoushangcai2.height / 2 }, 500).call(function () {
            if (_this.parent) {
                _this.removeChild(zhandoushangcai2);
                //正式计算数据
                _this.duiren2jineng();
            }
        });
    };
    Pvpzhandoujiemian.prototype.jingongrenwu3 = function () {
        var _this = this;
        var shipubiao3 = Gerenshuxing.shipubiao;
        var xianshishangcaitu3 = "";
        for (var h = 0; h < shipubiao3.length; h++) {
            if (shipubiao3[h].id == this.benhuihechucaiid_1) {
                xianshishangcaitu3 = shipubiao3[h].id + "_png";
                break;
            }
        }
        var zhandoushangcai3 = new egret.Bitmap();
        var zhandoutupian3 = RES.getRes(xianshishangcaitu3);
        zhandoushangcai3.texture = zhandoutupian3;
        this.addChild(zhandoushangcai3);
        zhandoushangcai3.x = this.zhandouxianshizu_pvp.x;
        zhandoushangcai3.y = this.zhandouxianshizu_pvp.y;
        zhandoushangcai3.scaleX = 1;
        zhandoushangcai3.scaleY = 1;
        egret.Tween.get(zhandoushangcai3).to({ scaleX: 0, scaleY: 0, x: this.fuzhuzu0.x + this.fuzhuzu0.width / 2 - zhandoushangcai3.width / 2, y: this.fuzhuzu0.y + this.fuzhuzu0.height / 2 - zhandoushangcai3.height / 2 }, 500).call(function () {
            if (_this.parent) {
                _this.removeChild(zhandoushangcai3);
                //正式计算数据
                _this.duiren3jineng();
            }
        });
    };
    Pvpzhandoujiemian.prototype.jisuanduiguaishanghai = function () {
        //先得到当前菜品的等级
        var duqudengji1 = Gerencaipudengji.caipulevel;
        var caipudengjishuju = Gerenshuxing.shipudengjibiao;
        //先初始化各项菜的数据
        this.chushilazhi_0 = 0; //菜的初始辣值
        this.zuizhonglazhi_0 = 0; //菜的最终辣值
        this.fujialazhi_0 = 0; //菜的附加辣值
        this.chushimazhi_0 = 0; //菜的初始辣值
        this.zuizhongmazhi_0 = 0; //菜的初始辣值
        this.fujiamazhi_0 = 0; //菜的初始辣值
        this.chushisuanzhi_0 = 0; //菜的初始辣值
        this.zuizhongsuanzhi_0 = 0; //菜的初始辣值
        this.fujiasuanzhi_0 = 0; //菜的初始辣值
        this.chushitianzhi_0 = 0; //菜的初始辣值
        this.zuizhongtianzhi_0 = 0; //菜的初始辣值
        this.fujiatianzhi_0 = 0; //菜的初始辣值
        this.caidejineng1_0 = "0"; //菜的技能1
        this.caidejineng2_0 = "0"; //菜的技能2
        this.caidejineng3_0 = "0"; //菜的技能3
        this.caidejineng4_0 = "0"; //菜的技能4
        this.caidejineng5_0 = "0"; //菜的技能5
        this.caidedengji_0 = 0; //当前菜的等级
        this.shuchulazhi_0 = 0;
        this.shuchumazhi_0 = 0;
        this.shuchusuanzhi_0 = 0;
        this.shuchutianzhi_0 = 0;
        //进入正式计算
        for (var g in duqudengji1) {
            if (g == this.benhuihechucaiid_0) {
                this.caidedengji_0 = parseInt(duqudengji1[g][0]);
                break;
            }
        }
        for (var h = 0; h < Gerenshuxing.caipushuxingbiao.length; h++) {
            if (Gerenshuxing.caipushuxingbiao[h].id == this.benhuihechucaiid_0) {
                this.chushilazhi_0 = parseInt(Gerenshuxing.caipushuxingbiao[h].laxi) + parseInt(Gerenshuxing.caipushuxingbiao[h].laxi) * parseFloat(Gerenshuxing.caipushuxingbiao[h].chengzhanglv) * this.caidedengji_0;
                this.chushimazhi_0 = parseInt(Gerenshuxing.caipushuxingbiao[h].maxi) + parseInt(Gerenshuxing.caipushuxingbiao[h].maxi) * parseFloat(Gerenshuxing.caipushuxingbiao[h].chengzhanglv) * this.caidedengji_0;
                this.chushisuanzhi_0 = parseInt(Gerenshuxing.caipushuxingbiao[h].suanxi) + parseInt(Gerenshuxing.caipushuxingbiao[h].suanxi) * parseFloat(Gerenshuxing.caipushuxingbiao[h].chengzhanglv) * this.caidedengji_0;
                this.chushitianzhi_0 = parseInt(Gerenshuxing.caipushuxingbiao[h].tianxi) + parseInt(Gerenshuxing.caipushuxingbiao[h].tianxi) * parseFloat(Gerenshuxing.caipushuxingbiao[h].chengzhanglv) * this.caidedengji_0;
                for (var o in Gerencaipudengji.caipulevel) {
                    if (o == this.benhuihechucaiid_0) {
                        this.caidejineng1_0 = Gerencaipudengji.caipulevel[o][6];
                        this.caidejineng2_0 = Gerencaipudengji.caipulevel[o][7];
                        this.caidejineng3_0 = Gerencaipudengji.caipulevel[o][8];
                        this.caidejineng4_0 = Gerencaipudengji.caipulevel[o][9];
                        this.caidejineng5_0 = Gerencaipudengji.caipulevel[o][10];
                        this.fujialazhi_0 = Math.floor(this.chushilazhi_0 * parseInt(Gerencaipudengji.caipulevel[o][2]) / 100);
                        this.fujiamazhi_0 = Math.floor(this.chushimazhi_0 * parseInt(Gerencaipudengji.caipulevel[o][3]) / 100);
                        this.fujiasuanzhi_0 = Math.floor(this.chushisuanzhi_0 * parseInt(Gerencaipudengji.caipulevel[o][4]) / 100);
                        this.fujiatianzhi_0 = Math.floor(this.chushitianzhi_0 * parseInt(Gerencaipudengji.caipulevel[o][5]) / 100);
                        break;
                    }
                }
                break;
            }
        }
        this.chushilazhi_0 = Math.floor(this.chushilazhi_0);
        this.chushimazhi_0 = Math.floor(this.chushimazhi_0);
        this.chushisuanzhi_0 = Math.floor(this.chushisuanzhi_0);
        this.chushitianzhi_0 = Math.floor(this.chushitianzhi_0);
        this.zuizhonglazhi_0 = this.chushilazhi_0 + this.fujialazhi_0;
        this.zuizhongmazhi_0 = this.chushimazhi_0 + this.fujiamazhi_0;
        this.zuizhongsuanzhi_0 = this.chushisuanzhi_0 + this.fujiasuanzhi_0;
        this.zuizhongtianzhi_0 = this.chushitianzhi_0 + this.fujiatianzhi_0;
        //计算附加上角色的酸甜苦辣值，得到最终的输出能力
        if (this.chupairen == 0) {
            this.shuchulazhi_0 = this.zijila_0 + this.zuizhonglazhi_0;
            this.shuchumazhi_0 = this.zijima_0 + this.zuizhongmazhi_0;
            this.shuchusuanzhi_0 = this.zijisuan_0 + this.zuizhongsuanzhi_0;
            this.shuchutianzhi_0 = this.zijitian_0 + this.zuizhongtianzhi_0;
        }
        else if (this.chupairen == 1) {
            this.shuchulazhi_0 = this.zuizhonglazhi_0 + Math.floor(this.fuzhu1gongji_0 / 4);
            this.shuchumazhi_0 = this.zuizhongmazhi_0 + Math.floor(this.fuzhu1gongji_0 / 4);
            this.shuchusuanzhi_0 = this.zuizhongsuanzhi_0 + Math.floor(this.fuzhu1gongji_0 / 4);
            this.shuchutianzhi_0 = this.zuizhongtianzhi_0 + Math.floor(this.fuzhu1gongji_0 / 4);
        }
        else if (this.chupairen == 2) {
            this.shuchulazhi_0 = this.zuizhonglazhi_0 + Math.floor(this.fuzhu2gongji_0 / 4);
            this.shuchumazhi_0 = this.zuizhongmazhi_0 + Math.floor(this.fuzhu2gongji_0 / 4);
            this.shuchusuanzhi_0 = this.zuizhongsuanzhi_0 + Math.floor(this.fuzhu2gongji_0 / 4);
            this.shuchutianzhi_0 = this.zuizhongtianzhi_0 + Math.floor(this.fuzhu2gongji_0 / 4);
        }
        //		console.log(this.caidejineng1,this.caidejineng2,this.caidejineng3,this.caidejineng4,this.caidejineng5);
    };
    Pvpzhandoujiemian.prototype.jisuanduirenshanghai = function () {
        //先得到当前菜品的等级
        var duqudengji1 = this.direnxinxi.caipulevel;
        var caipudengjishuju = Gerenshuxing.shipudengjibiao;
        //先初始化各项菜的数据
        this.chushilazhi_1 = 0; //菜的初始辣值
        this.zuizhonglazhi_1 = 0; //菜的最终辣值
        this.fujialazhi_1 = 0; //菜的附加辣值
        this.chushimazhi_1 = 0; //菜的初始辣值
        this.zuizhongmazhi_1 = 0; //菜的初始辣值
        this.fujiamazhi_1 = 0; //菜的初始辣值
        this.chushisuanzhi_1 = 0; //菜的初始辣值
        this.zuizhongsuanzhi_1 = 0; //菜的初始辣值
        this.fujiasuanzhi_1 = 0; //菜的初始辣值
        this.chushitianzhi_1 = 0; //菜的初始辣值
        this.zuizhongtianzhi_1 = 0; //菜的初始辣值
        this.fujiatianzhi_1 = 0; //菜的初始辣值
        this.caidejineng1_1 = "0"; //菜的技能1
        this.caidejineng2_1 = "0"; //菜的技能2
        this.caidejineng3_1 = "0"; //菜的技能3
        this.caidejineng4_1 = "0"; //菜的技能4
        this.caidejineng5_1 = "0"; //菜的技能5
        this.caidedengji_1 = 0; //当前菜的等级
        this.shuchulazhi_1 = 0;
        this.shuchumazhi_1 = 0;
        this.shuchusuanzhi_1 = 0;
        this.shuchutianzhi_1 = 0;
        //进入正式计算
        for (var g in duqudengji1) {
            if (g == this.benhuihechucaiid_1) {
                this.caidedengji_1 = parseInt(duqudengji1[g][0]);
                break;
            }
        }
        for (var h = 0; h < Gerenshuxing.caipushuxingbiao.length; h++) {
            if (Gerenshuxing.caipushuxingbiao[h].id == this.benhuihechucaiid_1) {
                this.chushilazhi_1 = parseInt(Gerenshuxing.caipushuxingbiao[h].laxi) + parseInt(Gerenshuxing.caipushuxingbiao[h].laxi) * parseFloat(Gerenshuxing.caipushuxingbiao[h].chengzhanglv) * this.caidedengji_1;
                this.chushimazhi_1 = parseInt(Gerenshuxing.caipushuxingbiao[h].maxi) + parseInt(Gerenshuxing.caipushuxingbiao[h].maxi) * parseFloat(Gerenshuxing.caipushuxingbiao[h].chengzhanglv) * this.caidedengji_1;
                this.chushisuanzhi_1 = parseInt(Gerenshuxing.caipushuxingbiao[h].suanxi) + parseInt(Gerenshuxing.caipushuxingbiao[h].suanxi) * parseFloat(Gerenshuxing.caipushuxingbiao[h].chengzhanglv) * this.caidedengji_1;
                this.chushitianzhi_1 = parseInt(Gerenshuxing.caipushuxingbiao[h].tianxi) + parseInt(Gerenshuxing.caipushuxingbiao[h].tianxi) * parseFloat(Gerenshuxing.caipushuxingbiao[h].chengzhanglv) * this.caidedengji_1;
                for (var o in this.direnxinxi.caipulevel) {
                    if (o == this.benhuihechucaiid_1) {
                        this.caidejineng1_1 = this.direnxinxi.caipulevel[o][6];
                        this.caidejineng2_1 = this.direnxinxi.caipulevel[o][7];
                        this.caidejineng3_1 = this.direnxinxi.caipulevel[o][8];
                        this.caidejineng4_1 = this.direnxinxi.caipulevel[o][9];
                        this.caidejineng5_1 = this.direnxinxi.caipulevel[o][10];
                        this.fujialazhi_1 = Math.floor(this.chushilazhi_1 * parseInt(this.direnxinxi.caipulevel[o][2]) / 100);
                        this.fujiamazhi_1 = Math.floor(this.chushimazhi_1 * parseInt(this.direnxinxi.caipulevel[o][3]) / 100);
                        this.fujiasuanzhi_1 = Math.floor(this.chushisuanzhi_1 * parseInt(this.direnxinxi.caipulevel[o][4]) / 100);
                        this.fujiatianzhi_1 = Math.floor(this.chushitianzhi_1 * parseInt(this.direnxinxi.caipulevel[o][5]) / 100);
                        break;
                    }
                }
                break;
            }
        }
        this.chushilazhi_1 = Math.floor(this.chushilazhi_1);
        this.chushimazhi_1 = Math.floor(this.chushimazhi_1);
        this.chushisuanzhi_1 = Math.floor(this.chushisuanzhi_1);
        this.chushitianzhi_1 = Math.floor(this.chushitianzhi_1);
        this.zuizhonglazhi_1 = this.chushilazhi_1 + this.fujialazhi_1;
        this.zuizhongmazhi_1 = this.chushimazhi_1 + this.fujiamazhi_1;
        this.zuizhongsuanzhi_1 = this.chushisuanzhi_1 + this.fujiasuanzhi_1;
        this.zuizhongtianzhi_1 = this.chushitianzhi_1 + this.fujiatianzhi_1;
        //计算附加上角色的酸甜苦辣值，得到最终的输出能力
        if (this.chupairen == 3) {
            this.shuchulazhi_1 = this.direnla_1 + this.zuizhonglazhi_1;
            this.shuchumazhi_1 = this.direnma_1 + this.zuizhongmazhi_1;
            this.shuchusuanzhi_1 = this.dirensuan_1 + this.zuizhongsuanzhi_1;
            this.shuchutianzhi_1 = this.direntian_1 + this.zuizhongtianzhi_1;
        }
        else if (this.chupairen == 4) {
            this.shuchulazhi_1 = this.zuizhonglazhi_1 + Math.floor(this.fuzhu1gongji_1 / 4);
            this.shuchumazhi_1 = this.zuizhongmazhi_1 + Math.floor(this.fuzhu1gongji_1 / 4);
            this.shuchusuanzhi_1 = this.zuizhongsuanzhi_1 + Math.floor(this.fuzhu1gongji_1 / 4);
            this.shuchutianzhi_1 = this.zuizhongtianzhi_1 + Math.floor(this.fuzhu1gongji_1 / 4);
        }
        else if (this.chupairen == 5) {
            this.shuchulazhi_1 = this.zuizhonglazhi_1 + Math.floor(this.fuzhu2gongji_1 / 4);
            this.shuchumazhi_1 = this.zuizhongmazhi_1 + Math.floor(this.fuzhu2gongji_1 / 4);
            this.shuchusuanzhi_1 = this.zuizhongsuanzhi_1 + Math.floor(this.fuzhu2gongji_1 / 4);
            this.shuchutianzhi_1 = this.zuizhongtianzhi_1 + Math.floor(this.fuzhu2gongji_1 / 4);
        }
        //		console.log(this.caidejineng1,this.caidejineng2,this.caidejineng3,this.caidejineng4,this.caidejineng5);
    };
    //对怪物1使用技能判断
    Pvpzhandoujiemian.prototype.duiguai1jineng = function () {
        //初始化触发技能数据
        this.chufalianji_1_ = "0"; //触发连击
        this.chufabisha_1_ = "0"; //触发必杀
        this.chufaxixue_1_ = "0"; //触发吸血
        this.chufazhuiji_1_ = "0"; //触发追击
        this.chufasane_1_ = "0"; //触发善恶
        this.chufahushila_1_ = "0"; //触发忽视辣
        this.chufahushima_1_ = "0"; //触发忽视麻
        this.chufahushisuan_1_ = "0"; //触发忽视酸
        this.chufahushitian_1_ = "0"; //触发忽视甜
        this.chufazhenshe_1_ = "0"; //触发震慑
        this.chufaxilan_1_ = "0"; //触发吸蓝
        this.chufajiansu_1_ = "0"; //触发减速
        this.chufachenmo_1_ = "0"; //触发沉默
        this.chufahuixue_1_ = "0"; //触发回血
        this.chufaquanhushi_1_ = "0"; //触发全忽视
        this.chufahuiling_1_ = "0"; //触发回灵
        this.chufadu_1_ = "0"; //触发毒
        this.chufaxuruo_1_ = "0"; //触发虚弱
        this.chufajiafang_1_ = "0"; //触发加防
        this.chufajiasu_1_ = "0"; //触发加速
        this.chufajianxue_1_ = "0"; //触发给我放见血
        this.chufajiangong_1_ = "0"; //触发给我方减攻
        this.chufawofangjiansu_1_ = "0"; //触发给我方减速
        //进入正式计算
        if (this.caidejineng1_0 != "0") {
            for (var j = 0; j < Gerenshuxing.jinengbiao.length; j++) {
                if (Gerenshuxing.jinengbiao[j].id == this.caidejineng1_0) {
                    var jinengjiachengzhi_1_ = 0;
                    if (this.caidejineng1_0 == "20001") {
                        jinengjiachengzhi_1_ = parseInt(Gerenshuxing.jinengbiao[j].chushizhi) + this.zuizhonglazhi_0 * parseFloat(Gerenshuxing.jinengbiao[j].jiacheng);
                        jinengjiachengzhi_1_ = Math.floor(jinengjiachengzhi_1_);
                        var suijishu = Math.floor(Math.random() * 100);
                        if (suijishu <= jinengjiachengzhi_1_) {
                            this.chufalianji_1_ = "1";
                        }
                    }
                    else if (this.caidejineng1_0 == "20002") {
                        jinengjiachengzhi_1_ = parseInt(Gerenshuxing.jinengbiao[j].chushizhi) + this.zuizhonglazhi_0 * parseFloat(Gerenshuxing.jinengbiao[j].jiacheng);
                        jinengjiachengzhi_1_ = Math.floor(jinengjiachengzhi_1_);
                        var suijishu = Math.floor(Math.random() * 100);
                        if (suijishu <= jinengjiachengzhi_1_) {
                            this.chufalianji_1_ = "1";
                        }
                    }
                    else if (this.caidejineng1_0 == "20003") {
                        jinengjiachengzhi_1_ = parseInt(Gerenshuxing.jinengbiao[j].chushizhi) + this.zuizhonglazhi_0 * parseFloat(Gerenshuxing.jinengbiao[j].jiacheng);
                        jinengjiachengzhi_1_ = Math.floor(jinengjiachengzhi_1_);
                        this.chufabisha_1_ = "" + jinengjiachengzhi_1_;
                    }
                    else if (this.caidejineng1_0 == "20004") {
                        jinengjiachengzhi_1_ = parseInt(Gerenshuxing.jinengbiao[j].chushizhi) + this.zuizhonglazhi_0 * parseFloat(Gerenshuxing.jinengbiao[j].jiacheng);
                        jinengjiachengzhi_1_ = Math.floor(jinengjiachengzhi_1_);
                        this.chufabisha_1_ = "" + jinengjiachengzhi_1_;
                    }
                    else if (this.caidejineng1_0 == "20005") {
                        jinengjiachengzhi_1_ = parseInt(Gerenshuxing.jinengbiao[j].chushizhi) + this.zuizhongtianzhi_0 * parseFloat(Gerenshuxing.jinengbiao[j].jiacheng);
                        jinengjiachengzhi_1_ = Math.floor(jinengjiachengzhi_1_);
                        this.chufaxixue_1_ = "" + jinengjiachengzhi_1_;
                    }
                    else if (this.caidejineng1_0 == "20006") {
                        jinengjiachengzhi_1_ = parseInt(Gerenshuxing.jinengbiao[j].chushizhi) + this.zuizhongtianzhi_0 * parseFloat(Gerenshuxing.jinengbiao[j].jiacheng);
                        jinengjiachengzhi_1_ = Math.floor(jinengjiachengzhi_1_);
                        this.chufaxixue_1_ = "" + jinengjiachengzhi_1_;
                    }
                    else if (this.caidejineng1_0 == "20007") {
                        this.chufazhuiji_1_ = "1";
                    }
                    else if (this.caidejineng1_0 == "20008") {
                        this.chufasane_1_ = "1";
                    }
                    else if (this.caidejineng1_0 == "20009") {
                        jinengjiachengzhi_1_ = parseInt(Gerenshuxing.jinengbiao[j].chushizhi) + this.zuizhonglazhi_0 * parseFloat(Gerenshuxing.jinengbiao[j].jiacheng);
                        jinengjiachengzhi_1_ = Math.floor(jinengjiachengzhi_1_);
                        this.chufahushila_1_ = "" + jinengjiachengzhi_1_;
                    }
                    else if (this.caidejineng1_0 == "20010") {
                        jinengjiachengzhi_1_ = parseInt(Gerenshuxing.jinengbiao[j].chushizhi) + this.zuizhongtianzhi_0 * parseFloat(Gerenshuxing.jinengbiao[j].jiacheng);
                        jinengjiachengzhi_1_ = Math.floor(jinengjiachengzhi_1_);
                        this.chufahushitian_1_ = "" + jinengjiachengzhi_1_;
                    }
                    else if (this.caidejineng1_0 == "20011") {
                        jinengjiachengzhi_1_ = parseInt(Gerenshuxing.jinengbiao[j].chushizhi) + this.zuizhongsuanzhi_0 * parseFloat(Gerenshuxing.jinengbiao[j].jiacheng);
                        jinengjiachengzhi_1_ = Math.floor(jinengjiachengzhi_1_);
                        this.chufahushisuan_1_ = "" + jinengjiachengzhi_1_;
                    }
                    else if (this.caidejineng1_0 == "20012") {
                        jinengjiachengzhi_1_ = parseInt(Gerenshuxing.jinengbiao[j].chushizhi) + this.zuizhongmazhi_0 * parseFloat(Gerenshuxing.jinengbiao[j].jiacheng);
                        jinengjiachengzhi_1_ = Math.floor(jinengjiachengzhi_1_);
                        this.chufahushima_1_ = "" + jinengjiachengzhi_1_;
                    }
                    else if (this.caidejineng1_0 == "20013") {
                        jinengjiachengzhi_1_ = parseInt(Gerenshuxing.jinengbiao[j].chushizhi) + this.zuizhongsuanzhi_0 * parseFloat(Gerenshuxing.jinengbiao[j].jiacheng);
                        jinengjiachengzhi_1_ = Math.floor(jinengjiachengzhi_1_);
                        this.chufazhenshe_1_ = "" + jinengjiachengzhi_1_;
                    }
                    else if (this.caidejineng1_0 == "20014") {
                        jinengjiachengzhi_1_ = parseInt(Gerenshuxing.jinengbiao[j].chushizhi) + this.zuizhongsuanzhi_0 * parseFloat(Gerenshuxing.jinengbiao[j].jiacheng);
                        jinengjiachengzhi_1_ = Math.floor(jinengjiachengzhi_1_);
                        this.chufaxilan_1_ = "" + jinengjiachengzhi_1_;
                    }
                    else if (this.caidejineng1_0 == "20015") {
                        jinengjiachengzhi_1_ = parseInt(Gerenshuxing.jinengbiao[j].chushizhi) + this.zuizhongsuanzhi_0 * parseFloat(Gerenshuxing.jinengbiao[j].jiacheng);
                        jinengjiachengzhi_1_ = Math.floor(jinengjiachengzhi_1_);
                        this.chufaxilan_1_ = "" + jinengjiachengzhi_1_;
                    }
                    else if (this.caidejineng1_0 == "20016") {
                        jinengjiachengzhi_1_ = parseInt(Gerenshuxing.jinengbiao[j].chushizhi) + this.zuizhongmazhi_0 * parseFloat(Gerenshuxing.jinengbiao[j].jiacheng);
                        jinengjiachengzhi_1_ = Math.floor(jinengjiachengzhi_1_);
                        this.chufajiansu_1_ = "" + jinengjiachengzhi_1_;
                    }
                    else if (this.caidejineng1_0 == "20017") {
                        jinengjiachengzhi_1_ = parseInt(Gerenshuxing.jinengbiao[j].chushizhi) + this.zuizhongmazhi_0 * parseFloat(Gerenshuxing.jinengbiao[j].jiacheng);
                        jinengjiachengzhi_1_ = Math.floor(jinengjiachengzhi_1_);
                        var suijishu = Math.floor(Math.random() * 100);
                        if (suijishu <= jinengjiachengzhi_1_) {
                            this.chufachenmo_1_ = "1";
                        }
                    }
                    else if (this.caidejineng1_0 == "20018") {
                        jinengjiachengzhi_1_ = parseInt(Gerenshuxing.jinengbiao[j].chushizhi) + this.zuizhongtianzhi_0 * parseFloat(Gerenshuxing.jinengbiao[j].jiacheng);
                        jinengjiachengzhi_1_ = Math.floor(jinengjiachengzhi_1_);
                        this.chufahuixue_1_ = "" + jinengjiachengzhi_1_;
                    }
                    else if (this.caidejineng1_0 == "20019") {
                        jinengjiachengzhi_1_ = parseInt(Gerenshuxing.jinengbiao[j].chushizhi) + this.zuizhongsuanzhi_0 * parseFloat(Gerenshuxing.jinengbiao[j].jiacheng);
                        jinengjiachengzhi_1_ = Math.floor(jinengjiachengzhi_1_);
                        this.chufaquanhushi_1_ = "" + jinengjiachengzhi_1_;
                    }
                    else if (this.caidejineng1_0 == "20020") {
                        this.chufahuiling_1_ = "1";
                    }
                    else if (this.caidejineng1_0 == "20021") {
                        jinengjiachengzhi_1_ = parseInt(Gerenshuxing.jinengbiao[j].chushizhi) + this.zuizhongsuanzhi_0 * parseFloat(Gerenshuxing.jinengbiao[j].jiacheng);
                        jinengjiachengzhi_1_ = Math.floor(jinengjiachengzhi_1_);
                        this.chufadu_1_ = "" + jinengjiachengzhi_1_;
                    }
                    else if (this.caidejineng1_0 == "20022") {
                        jinengjiachengzhi_1_ = parseInt(Gerenshuxing.jinengbiao[j].chushizhi) + this.zuizhongmazhi_0 * parseFloat(Gerenshuxing.jinengbiao[j].jiacheng);
                        jinengjiachengzhi_1_ = Math.floor(jinengjiachengzhi_1_);
                        this.chufaxuruo_1_ = "" + jinengjiachengzhi_1_;
                    }
                    else if (this.caidejineng1_0 == "20023") {
                        jinengjiachengzhi_1_ = parseInt(Gerenshuxing.jinengbiao[j].chushizhi) + this.zuizhongtianzhi_0 * parseFloat(Gerenshuxing.jinengbiao[j].jiacheng);
                        jinengjiachengzhi_1_ = Math.floor(jinengjiachengzhi_1_);
                        this.chufajiafang_1_ = "" + jinengjiachengzhi_1_;
                    }
                    else if (this.caidejineng1_0 == "20024") {
                        jinengjiachengzhi_1_ = parseInt(Gerenshuxing.jinengbiao[j].chushizhi) + this.zuizhonglazhi_0 * parseFloat(Gerenshuxing.jinengbiao[j].jiacheng);
                        jinengjiachengzhi_1_ = Math.floor(jinengjiachengzhi_1_);
                        this.chufajiasu_1_ = "" + jinengjiachengzhi_1_;
                    }
                    else if (this.caidejineng1_0 == "20025") {
                        this.chufajianxue_1_ = "1";
                    }
                    else if (this.caidejineng1_0 == "20026") {
                        this.chufajiangong_1_ = "1";
                    }
                    else if (this.caidejineng1_0 == "20027") {
                        this.chufawofangjiansu_1_ = "1";
                    }
                }
            }
        }
        //计算菜品技能2///
        if (this.caidejineng2_0 != "0") {
            for (var j = 0; j < Gerenshuxing.jinengbiao.length; j++) {
                if (Gerenshuxing.jinengbiao[j].id == this.caidejineng2_0) {
                    var jinengjiachengzhi_1_ = 0;
                    if (this.caidejineng2_0 == "20001") {
                        jinengjiachengzhi_1_ = parseInt(Gerenshuxing.jinengbiao[j].chushizhi) + this.zuizhonglazhi_0 * parseFloat(Gerenshuxing.jinengbiao[j].jiacheng);
                        jinengjiachengzhi_1_ = Math.floor(jinengjiachengzhi_1_);
                        var suijishu = Math.floor(Math.random() * 100);
                        if (suijishu <= jinengjiachengzhi_1_) {
                            this.chufalianji_1_ = "1";
                        }
                    }
                    else if (this.caidejineng2_0 == "20002") {
                        jinengjiachengzhi_1_ = parseInt(Gerenshuxing.jinengbiao[j].chushizhi) + this.zuizhonglazhi_0 * parseFloat(Gerenshuxing.jinengbiao[j].jiacheng);
                        jinengjiachengzhi_1_ = Math.floor(jinengjiachengzhi_1_);
                        var suijishu = Math.floor(Math.random() * 100);
                        if (suijishu <= jinengjiachengzhi_1_) {
                            this.chufalianji_1_ = "1";
                        }
                    }
                    else if (this.caidejineng2_0 == "20003") {
                        jinengjiachengzhi_1_ = parseInt(Gerenshuxing.jinengbiao[j].chushizhi) + this.zuizhonglazhi_0 * parseFloat(Gerenshuxing.jinengbiao[j].jiacheng);
                        jinengjiachengzhi_1_ = Math.floor(jinengjiachengzhi_1_);
                        this.chufabisha_1_ = "" + jinengjiachengzhi_1_;
                    }
                    else if (this.caidejineng2_0 == "20004") {
                        jinengjiachengzhi_1_ = parseInt(Gerenshuxing.jinengbiao[j].chushizhi) + this.zuizhonglazhi_0 * parseFloat(Gerenshuxing.jinengbiao[j].jiacheng);
                        jinengjiachengzhi_1_ = Math.floor(jinengjiachengzhi_1_);
                        this.chufabisha_1_ = "" + jinengjiachengzhi_1_;
                    }
                    else if (this.caidejineng2_0 == "20005") {
                        jinengjiachengzhi_1_ = parseInt(Gerenshuxing.jinengbiao[j].chushizhi) + this.zuizhongtianzhi_0 * parseFloat(Gerenshuxing.jinengbiao[j].jiacheng);
                        jinengjiachengzhi_1_ = Math.floor(jinengjiachengzhi_1_);
                        this.chufaxixue_1_ = "" + jinengjiachengzhi_1_;
                    }
                    else if (this.caidejineng2_0 == "20006") {
                        jinengjiachengzhi_1_ = parseInt(Gerenshuxing.jinengbiao[j].chushizhi) + this.zuizhongtianzhi_0 * parseFloat(Gerenshuxing.jinengbiao[j].jiacheng);
                        jinengjiachengzhi_1_ = Math.floor(jinengjiachengzhi_1_);
                        this.chufaxixue_1_ = "" + jinengjiachengzhi_1_;
                    }
                    else if (this.caidejineng2_0 == "20007") {
                        this.chufazhuiji_1_ = "1";
                    }
                    else if (this.caidejineng2_0 == "20008") {
                        this.chufasane_1_ = "1";
                    }
                    else if (this.caidejineng2_0 == "20009") {
                        jinengjiachengzhi_1_ = parseInt(Gerenshuxing.jinengbiao[j].chushizhi) + this.zuizhonglazhi_0 * parseFloat(Gerenshuxing.jinengbiao[j].jiacheng);
                        jinengjiachengzhi_1_ = Math.floor(jinengjiachengzhi_1_);
                        this.chufahushila_1_ = "" + jinengjiachengzhi_1_;
                    }
                    else if (this.caidejineng2_0 == "20010") {
                        jinengjiachengzhi_1_ = parseInt(Gerenshuxing.jinengbiao[j].chushizhi) + this.zuizhongtianzhi_0 * parseFloat(Gerenshuxing.jinengbiao[j].jiacheng);
                        jinengjiachengzhi_1_ = Math.floor(jinengjiachengzhi_1_);
                        this.chufahushitian_1_ = "" + jinengjiachengzhi_1_;
                    }
                    else if (this.caidejineng2_0 == "20011") {
                        jinengjiachengzhi_1_ = parseInt(Gerenshuxing.jinengbiao[j].chushizhi) + this.zuizhongsuanzhi_0 * parseFloat(Gerenshuxing.jinengbiao[j].jiacheng);
                        jinengjiachengzhi_1_ = Math.floor(jinengjiachengzhi_1_);
                        this.chufahushisuan_1_ = "" + jinengjiachengzhi_1_;
                    }
                    else if (this.caidejineng2_0 == "20012") {
                        jinengjiachengzhi_1_ = parseInt(Gerenshuxing.jinengbiao[j].chushizhi) + this.zuizhongmazhi_0 * parseFloat(Gerenshuxing.jinengbiao[j].jiacheng);
                        jinengjiachengzhi_1_ = Math.floor(jinengjiachengzhi_1_);
                        this.chufahushima_1_ = "" + jinengjiachengzhi_1_;
                    }
                    else if (this.caidejineng2_0 == "20013") {
                        jinengjiachengzhi_1_ = parseInt(Gerenshuxing.jinengbiao[j].chushizhi) + this.zuizhongsuanzhi_0 * parseFloat(Gerenshuxing.jinengbiao[j].jiacheng);
                        jinengjiachengzhi_1_ = Math.floor(jinengjiachengzhi_1_);
                        this.chufazhenshe_1_ = "" + jinengjiachengzhi_1_;
                    }
                    else if (this.caidejineng2_0 == "20014") {
                        jinengjiachengzhi_1_ = parseInt(Gerenshuxing.jinengbiao[j].chushizhi) + this.zuizhongsuanzhi_0 * parseFloat(Gerenshuxing.jinengbiao[j].jiacheng);
                        jinengjiachengzhi_1_ = Math.floor(jinengjiachengzhi_1_);
                        this.chufaxilan_1_ = "" + jinengjiachengzhi_1_;
                    }
                    else if (this.caidejineng2_0 == "20015") {
                        jinengjiachengzhi_1_ = parseInt(Gerenshuxing.jinengbiao[j].chushizhi) + this.zuizhongsuanzhi_0 * parseFloat(Gerenshuxing.jinengbiao[j].jiacheng);
                        jinengjiachengzhi_1_ = Math.floor(jinengjiachengzhi_1_);
                        this.chufaxilan_1_ = "" + jinengjiachengzhi_1_;
                    }
                    else if (this.caidejineng2_0 == "20016") {
                        jinengjiachengzhi_1_ = parseInt(Gerenshuxing.jinengbiao[j].chushizhi) + this.zuizhongmazhi_0 * parseFloat(Gerenshuxing.jinengbiao[j].jiacheng);
                        jinengjiachengzhi_1_ = Math.floor(jinengjiachengzhi_1_);
                        this.chufajiansu_1_ = "" + jinengjiachengzhi_1_;
                    }
                    else if (this.caidejineng2_0 == "20017") {
                        jinengjiachengzhi_1_ = parseInt(Gerenshuxing.jinengbiao[j].chushizhi) + this.zuizhongmazhi_0 * parseFloat(Gerenshuxing.jinengbiao[j].jiacheng);
                        jinengjiachengzhi_1_ = Math.floor(jinengjiachengzhi_1_);
                        var suijishu = Math.floor(Math.random() * 100);
                        if (suijishu <= jinengjiachengzhi_1_) {
                            this.chufachenmo_1_ = "1";
                        }
                    }
                    else if (this.caidejineng2_0 == "20018") {
                        jinengjiachengzhi_1_ = parseInt(Gerenshuxing.jinengbiao[j].chushizhi) + this.zuizhongtianzhi_0 * parseFloat(Gerenshuxing.jinengbiao[j].jiacheng);
                        jinengjiachengzhi_1_ = Math.floor(jinengjiachengzhi_1_);
                        this.chufahuixue_1_ = "" + jinengjiachengzhi_1_;
                    }
                    else if (this.caidejineng2_0 == "20019") {
                        jinengjiachengzhi_1_ = parseInt(Gerenshuxing.jinengbiao[j].chushizhi) + this.zuizhongsuanzhi_0 * parseFloat(Gerenshuxing.jinengbiao[j].jiacheng);
                        jinengjiachengzhi_1_ = Math.floor(jinengjiachengzhi_1_);
                        this.chufaquanhushi_1_ = "" + jinengjiachengzhi_1_;
                    }
                    else if (this.caidejineng2_0 == "20020") {
                        this.chufahuiling_1_ = "1";
                    }
                    else if (this.caidejineng2_0 == "20021") {
                        jinengjiachengzhi_1_ = parseInt(Gerenshuxing.jinengbiao[j].chushizhi) + this.zuizhongsuanzhi_0 * parseFloat(Gerenshuxing.jinengbiao[j].jiacheng);
                        jinengjiachengzhi_1_ = Math.floor(jinengjiachengzhi_1_);
                        this.chufadu_1_ = "" + jinengjiachengzhi_1_;
                    }
                    else if (this.caidejineng2_0 == "20022") {
                        jinengjiachengzhi_1_ = parseInt(Gerenshuxing.jinengbiao[j].chushizhi) + this.zuizhongmazhi_0 * parseFloat(Gerenshuxing.jinengbiao[j].jiacheng);
                        jinengjiachengzhi_1_ = Math.floor(jinengjiachengzhi_1_);
                        this.chufaxuruo_1_ = "" + jinengjiachengzhi_1_;
                    }
                    else if (this.caidejineng2_0 == "20023") {
                        jinengjiachengzhi_1_ = parseInt(Gerenshuxing.jinengbiao[j].chushizhi) + this.zuizhongtianzhi_0 * parseFloat(Gerenshuxing.jinengbiao[j].jiacheng);
                        jinengjiachengzhi_1_ = Math.floor(jinengjiachengzhi_1_);
                        this.chufajiafang_1_ = "" + jinengjiachengzhi_1_;
                    }
                    else if (this.caidejineng2_0 == "20024") {
                        jinengjiachengzhi_1_ = parseInt(Gerenshuxing.jinengbiao[j].chushizhi) + this.zuizhonglazhi_0 * parseFloat(Gerenshuxing.jinengbiao[j].jiacheng);
                        jinengjiachengzhi_1_ = Math.floor(jinengjiachengzhi_1_);
                        this.chufajiasu_1_ = "" + jinengjiachengzhi_1_;
                    }
                    else if (this.caidejineng2_0 == "20025") {
                        this.chufajianxue_1_ = "1";
                    }
                    else if (this.caidejineng2_0 == "20026") {
                        this.chufajiangong_1_ = "1";
                    }
                    else if (this.caidejineng2_0 == "20027") {
                        this.chufawofangjiansu_1_ = "1";
                    }
                }
            }
        }
        //计算菜品技能2///
        if (this.caidejineng3_0 != "0") {
            for (var j = 0; j < Gerenshuxing.jinengbiao.length; j++) {
                if (Gerenshuxing.jinengbiao[j].id == this.caidejineng3_0) {
                    var jinengjiachengzhi_1_ = 0;
                    if (this.caidejineng3_0 == "20001") {
                        jinengjiachengzhi_1_ = parseInt(Gerenshuxing.jinengbiao[j].chushizhi) + this.zuizhonglazhi_0 * parseFloat(Gerenshuxing.jinengbiao[j].jiacheng);
                        jinengjiachengzhi_1_ = Math.floor(jinengjiachengzhi_1_);
                        var suijishu = Math.floor(Math.random() * 100);
                        if (suijishu <= jinengjiachengzhi_1_) {
                            this.chufalianji_1_ = "1";
                        }
                    }
                    else if (this.caidejineng3_0 == "20002") {
                        jinengjiachengzhi_1_ = parseInt(Gerenshuxing.jinengbiao[j].chushizhi) + this.zuizhonglazhi_0 * parseFloat(Gerenshuxing.jinengbiao[j].jiacheng);
                        jinengjiachengzhi_1_ = Math.floor(jinengjiachengzhi_1_);
                        var suijishu = Math.floor(Math.random() * 100);
                        if (suijishu <= jinengjiachengzhi_1_) {
                            this.chufalianji_1_ = "1";
                        }
                    }
                    else if (this.caidejineng3_0 == "20003") {
                        jinengjiachengzhi_1_ = parseInt(Gerenshuxing.jinengbiao[j].chushizhi) + this.zuizhonglazhi_0 * parseFloat(Gerenshuxing.jinengbiao[j].jiacheng);
                        jinengjiachengzhi_1_ = Math.floor(jinengjiachengzhi_1_);
                        this.chufabisha_1_ = "" + jinengjiachengzhi_1_;
                    }
                    else if (this.caidejineng3_0 == "20004") {
                        jinengjiachengzhi_1_ = parseInt(Gerenshuxing.jinengbiao[j].chushizhi) + this.zuizhonglazhi_0 * parseFloat(Gerenshuxing.jinengbiao[j].jiacheng);
                        jinengjiachengzhi_1_ = Math.floor(jinengjiachengzhi_1_);
                        this.chufabisha_1_ = "" + jinengjiachengzhi_1_;
                    }
                    else if (this.caidejineng3_0 == "20005") {
                        jinengjiachengzhi_1_ = parseInt(Gerenshuxing.jinengbiao[j].chushizhi) + this.zuizhongtianzhi_0 * parseFloat(Gerenshuxing.jinengbiao[j].jiacheng);
                        jinengjiachengzhi_1_ = Math.floor(jinengjiachengzhi_1_);
                        this.chufaxixue_1_ = "" + jinengjiachengzhi_1_;
                    }
                    else if (this.caidejineng3_0 == "20006") {
                        jinengjiachengzhi_1_ = parseInt(Gerenshuxing.jinengbiao[j].chushizhi) + this.zuizhongtianzhi_0 * parseFloat(Gerenshuxing.jinengbiao[j].jiacheng);
                        jinengjiachengzhi_1_ = Math.floor(jinengjiachengzhi_1_);
                        this.chufaxixue_1_ = "" + jinengjiachengzhi_1_;
                    }
                    else if (this.caidejineng3_0 == "20007") {
                        this.chufazhuiji_1_ = "1";
                    }
                    else if (this.caidejineng3_0 == "20008") {
                        this.chufasane_1_ = "1";
                    }
                    else if (this.caidejineng3_0 == "20009") {
                        jinengjiachengzhi_1_ = parseInt(Gerenshuxing.jinengbiao[j].chushizhi) + this.zuizhonglazhi_0 * parseFloat(Gerenshuxing.jinengbiao[j].jiacheng);
                        jinengjiachengzhi_1_ = Math.floor(jinengjiachengzhi_1_);
                        this.chufahushila_1_ = "" + jinengjiachengzhi_1_;
                    }
                    else if (this.caidejineng3_0 == "20010") {
                        jinengjiachengzhi_1_ = parseInt(Gerenshuxing.jinengbiao[j].chushizhi) + this.zuizhongtianzhi_0 * parseFloat(Gerenshuxing.jinengbiao[j].jiacheng);
                        jinengjiachengzhi_1_ = Math.floor(jinengjiachengzhi_1_);
                        this.chufahushitian_1_ = "" + jinengjiachengzhi_1_;
                    }
                    else if (this.caidejineng3_0 == "20011") {
                        jinengjiachengzhi_1_ = parseInt(Gerenshuxing.jinengbiao[j].chushizhi) + this.zuizhongsuanzhi_0 * parseFloat(Gerenshuxing.jinengbiao[j].jiacheng);
                        jinengjiachengzhi_1_ = Math.floor(jinengjiachengzhi_1_);
                        this.chufahushisuan_1_ = "" + jinengjiachengzhi_1_;
                    }
                    else if (this.caidejineng3_0 == "20012") {
                        jinengjiachengzhi_1_ = parseInt(Gerenshuxing.jinengbiao[j].chushizhi) + this.zuizhongmazhi_0 * parseFloat(Gerenshuxing.jinengbiao[j].jiacheng);
                        jinengjiachengzhi_1_ = Math.floor(jinengjiachengzhi_1_);
                        this.chufahushima_1_ = "" + jinengjiachengzhi_1_;
                    }
                    else if (this.caidejineng3_0 == "20013") {
                        jinengjiachengzhi_1_ = parseInt(Gerenshuxing.jinengbiao[j].chushizhi) + this.zuizhongsuanzhi_0 * parseFloat(Gerenshuxing.jinengbiao[j].jiacheng);
                        jinengjiachengzhi_1_ = Math.floor(jinengjiachengzhi_1_);
                        this.chufazhenshe_1_ = "" + jinengjiachengzhi_1_;
                    }
                    else if (this.caidejineng3_0 == "20014") {
                        jinengjiachengzhi_1_ = parseInt(Gerenshuxing.jinengbiao[j].chushizhi) + this.zuizhongsuanzhi_0 * parseFloat(Gerenshuxing.jinengbiao[j].jiacheng);
                        jinengjiachengzhi_1_ = Math.floor(jinengjiachengzhi_1_);
                        this.chufaxilan_1_ = "" + jinengjiachengzhi_1_;
                    }
                    else if (this.caidejineng3_0 == "20015") {
                        jinengjiachengzhi_1_ = parseInt(Gerenshuxing.jinengbiao[j].chushizhi) + this.zuizhongsuanzhi_0 * parseFloat(Gerenshuxing.jinengbiao[j].jiacheng);
                        jinengjiachengzhi_1_ = Math.floor(jinengjiachengzhi_1_);
                        this.chufaxilan_1_ = "" + jinengjiachengzhi_1_;
                    }
                    else if (this.caidejineng3_0 == "20016") {
                        jinengjiachengzhi_1_ = parseInt(Gerenshuxing.jinengbiao[j].chushizhi) + this.zuizhongmazhi_0 * parseFloat(Gerenshuxing.jinengbiao[j].jiacheng);
                        jinengjiachengzhi_1_ = Math.floor(jinengjiachengzhi_1_);
                        this.chufajiansu_1_ = "" + jinengjiachengzhi_1_;
                    }
                    else if (this.caidejineng3_0 == "20017") {
                        jinengjiachengzhi_1_ = parseInt(Gerenshuxing.jinengbiao[j].chushizhi) + this.zuizhongmazhi_0 * parseFloat(Gerenshuxing.jinengbiao[j].jiacheng);
                        jinengjiachengzhi_1_ = Math.floor(jinengjiachengzhi_1_);
                        var suijishu = Math.floor(Math.random() * 100);
                        if (suijishu <= jinengjiachengzhi_1_) {
                            this.chufachenmo_1_ = "1";
                        }
                    }
                    else if (this.caidejineng3_0 == "20018") {
                        jinengjiachengzhi_1_ = parseInt(Gerenshuxing.jinengbiao[j].chushizhi) + this.zuizhongtianzhi_0 * parseFloat(Gerenshuxing.jinengbiao[j].jiacheng);
                        jinengjiachengzhi_1_ = Math.floor(jinengjiachengzhi_1_);
                        this.chufahuixue_1_ = "" + jinengjiachengzhi_1_;
                    }
                    else if (this.caidejineng3_0 == "20019") {
                        jinengjiachengzhi_1_ = parseInt(Gerenshuxing.jinengbiao[j].chushizhi) + this.zuizhongsuanzhi_0 * parseFloat(Gerenshuxing.jinengbiao[j].jiacheng);
                        jinengjiachengzhi_1_ = Math.floor(jinengjiachengzhi_1_);
                        this.chufaquanhushi_1_ = "" + jinengjiachengzhi_1_;
                    }
                    else if (this.caidejineng3_0 == "20020") {
                        this.chufahuiling_1_ = "1";
                    }
                    else if (this.caidejineng3_0 == "20021") {
                        jinengjiachengzhi_1_ = parseInt(Gerenshuxing.jinengbiao[j].chushizhi) + this.zuizhongsuanzhi_0 * parseFloat(Gerenshuxing.jinengbiao[j].jiacheng);
                        jinengjiachengzhi_1_ = Math.floor(jinengjiachengzhi_1_);
                        this.chufadu_1_ = "" + jinengjiachengzhi_1_;
                    }
                    else if (this.caidejineng3_0 == "20022") {
                        jinengjiachengzhi_1_ = parseInt(Gerenshuxing.jinengbiao[j].chushizhi) + this.zuizhongmazhi_0 * parseFloat(Gerenshuxing.jinengbiao[j].jiacheng);
                        jinengjiachengzhi_1_ = Math.floor(jinengjiachengzhi_1_);
                        this.chufaxuruo_1_ = "" + jinengjiachengzhi_1_;
                    }
                    else if (this.caidejineng3_0 == "20023") {
                        jinengjiachengzhi_1_ = parseInt(Gerenshuxing.jinengbiao[j].chushizhi) + this.zuizhongtianzhi_0 * parseFloat(Gerenshuxing.jinengbiao[j].jiacheng);
                        jinengjiachengzhi_1_ = Math.floor(jinengjiachengzhi_1_);
                        this.chufajiafang_1_ = "" + jinengjiachengzhi_1_;
                    }
                    else if (this.caidejineng3_0 == "20024") {
                        jinengjiachengzhi_1_ = parseInt(Gerenshuxing.jinengbiao[j].chushizhi) + this.zuizhonglazhi_0 * parseFloat(Gerenshuxing.jinengbiao[j].jiacheng);
                        jinengjiachengzhi_1_ = Math.floor(jinengjiachengzhi_1_);
                        this.chufajiasu_1_ = "" + jinengjiachengzhi_1_;
                    }
                    else if (this.caidejineng3_0 == "20025") {
                        this.chufajianxue_1_ = "1";
                    }
                    else if (this.caidejineng3_0 == "20026") {
                        this.chufajiangong_1_ = "1";
                    }
                    else if (this.caidejineng3_0 == "20027") {
                        this.chufawofangjiansu_1_ = "1";
                    }
                }
            }
        }
        //计算菜品技能2///
        if (this.caidejineng4_0 != "0") {
            for (var j = 0; j < Gerenshuxing.jinengbiao.length; j++) {
                if (Gerenshuxing.jinengbiao[j].id == this.caidejineng4_0) {
                    var jinengjiachengzhi_1_ = 0;
                    if (this.caidejineng4_0 == "20001") {
                        jinengjiachengzhi_1_ = parseInt(Gerenshuxing.jinengbiao[j].chushizhi) + this.zuizhonglazhi_0 * parseFloat(Gerenshuxing.jinengbiao[j].jiacheng);
                        jinengjiachengzhi_1_ = Math.floor(jinengjiachengzhi_1_);
                        var suijishu = Math.floor(Math.random() * 100);
                        if (suijishu <= jinengjiachengzhi_1_) {
                            this.chufalianji_1_ = "1";
                        }
                    }
                    else if (this.caidejineng4_0 == "20002") {
                        jinengjiachengzhi_1_ = parseInt(Gerenshuxing.jinengbiao[j].chushizhi) + this.zuizhonglazhi_0 * parseFloat(Gerenshuxing.jinengbiao[j].jiacheng);
                        jinengjiachengzhi_1_ = Math.floor(jinengjiachengzhi_1_);
                        var suijishu = Math.floor(Math.random() * 100);
                        if (suijishu <= jinengjiachengzhi_1_) {
                            this.chufalianji_1_ = "1";
                        }
                    }
                    else if (this.caidejineng4_0 == "20003") {
                        jinengjiachengzhi_1_ = parseInt(Gerenshuxing.jinengbiao[j].chushizhi) + this.zuizhonglazhi_0 * parseFloat(Gerenshuxing.jinengbiao[j].jiacheng);
                        jinengjiachengzhi_1_ = Math.floor(jinengjiachengzhi_1_);
                        this.chufabisha_1_ = "" + jinengjiachengzhi_1_;
                    }
                    else if (this.caidejineng4_0 == "20004") {
                        jinengjiachengzhi_1_ = parseInt(Gerenshuxing.jinengbiao[j].chushizhi) + this.zuizhonglazhi_0 * parseFloat(Gerenshuxing.jinengbiao[j].jiacheng);
                        jinengjiachengzhi_1_ = Math.floor(jinengjiachengzhi_1_);
                        this.chufabisha_1_ = "" + jinengjiachengzhi_1_;
                    }
                    else if (this.caidejineng4_0 == "20005") {
                        jinengjiachengzhi_1_ = parseInt(Gerenshuxing.jinengbiao[j].chushizhi) + this.zuizhongtianzhi_0 * parseFloat(Gerenshuxing.jinengbiao[j].jiacheng);
                        jinengjiachengzhi_1_ = Math.floor(jinengjiachengzhi_1_);
                        this.chufaxixue_1_ = "" + jinengjiachengzhi_1_;
                    }
                    else if (this.caidejineng4_0 == "20006") {
                        jinengjiachengzhi_1_ = parseInt(Gerenshuxing.jinengbiao[j].chushizhi) + this.zuizhongtianzhi_0 * parseFloat(Gerenshuxing.jinengbiao[j].jiacheng);
                        jinengjiachengzhi_1_ = Math.floor(jinengjiachengzhi_1_);
                        this.chufaxixue_1_ = "" + jinengjiachengzhi_1_;
                    }
                    else if (this.caidejineng4_0 == "20007") {
                        this.chufazhuiji_1_ = "1";
                    }
                    else if (this.caidejineng4_0 == "20008") {
                        this.chufasane_1_ = "1";
                    }
                    else if (this.caidejineng4_0 == "20009") {
                        jinengjiachengzhi_1_ = parseInt(Gerenshuxing.jinengbiao[j].chushizhi) + this.zuizhonglazhi_0 * parseFloat(Gerenshuxing.jinengbiao[j].jiacheng);
                        jinengjiachengzhi_1_ = Math.floor(jinengjiachengzhi_1_);
                        this.chufahushila_1_ = "" + jinengjiachengzhi_1_;
                    }
                    else if (this.caidejineng4_0 == "20010") {
                        jinengjiachengzhi_1_ = parseInt(Gerenshuxing.jinengbiao[j].chushizhi) + this.zuizhongtianzhi_0 * parseFloat(Gerenshuxing.jinengbiao[j].jiacheng);
                        jinengjiachengzhi_1_ = Math.floor(jinengjiachengzhi_1_);
                        this.chufahushitian_1_ = "" + jinengjiachengzhi_1_;
                    }
                    else if (this.caidejineng4_0 == "20011") {
                        jinengjiachengzhi_1_ = parseInt(Gerenshuxing.jinengbiao[j].chushizhi) + this.zuizhongsuanzhi_0 * parseFloat(Gerenshuxing.jinengbiao[j].jiacheng);
                        jinengjiachengzhi_1_ = Math.floor(jinengjiachengzhi_1_);
                        this.chufahushisuan_1_ = "" + jinengjiachengzhi_1_;
                    }
                    else if (this.caidejineng4_0 == "20012") {
                        jinengjiachengzhi_1_ = parseInt(Gerenshuxing.jinengbiao[j].chushizhi) + this.zuizhongmazhi_0 * parseFloat(Gerenshuxing.jinengbiao[j].jiacheng);
                        jinengjiachengzhi_1_ = Math.floor(jinengjiachengzhi_1_);
                        this.chufahushima_1_ = "" + jinengjiachengzhi_1_;
                    }
                    else if (this.caidejineng4_0 == "20013") {
                        jinengjiachengzhi_1_ = parseInt(Gerenshuxing.jinengbiao[j].chushizhi) + this.zuizhongsuanzhi_0 * parseFloat(Gerenshuxing.jinengbiao[j].jiacheng);
                        jinengjiachengzhi_1_ = Math.floor(jinengjiachengzhi_1_);
                        this.chufazhenshe_1_ = "" + jinengjiachengzhi_1_;
                    }
                    else if (this.caidejineng4_0 == "20014") {
                        jinengjiachengzhi_1_ = parseInt(Gerenshuxing.jinengbiao[j].chushizhi) + this.zuizhongsuanzhi_0 * parseFloat(Gerenshuxing.jinengbiao[j].jiacheng);
                        jinengjiachengzhi_1_ = Math.floor(jinengjiachengzhi_1_);
                        this.chufaxilan_1_ = "" + jinengjiachengzhi_1_;
                    }
                    else if (this.caidejineng4_0 == "20015") {
                        jinengjiachengzhi_1_ = parseInt(Gerenshuxing.jinengbiao[j].chushizhi) + this.zuizhongsuanzhi_0 * parseFloat(Gerenshuxing.jinengbiao[j].jiacheng);
                        jinengjiachengzhi_1_ = Math.floor(jinengjiachengzhi_1_);
                        this.chufaxilan_1_ = "" + jinengjiachengzhi_1_;
                    }
                    else if (this.caidejineng4_0 == "20016") {
                        jinengjiachengzhi_1_ = parseInt(Gerenshuxing.jinengbiao[j].chushizhi) + this.zuizhongmazhi_0 * parseFloat(Gerenshuxing.jinengbiao[j].jiacheng);
                        jinengjiachengzhi_1_ = Math.floor(jinengjiachengzhi_1_);
                        this.chufajiansu_1_ = "" + jinengjiachengzhi_1_;
                    }
                    else if (this.caidejineng4_0 == "20017") {
                        jinengjiachengzhi_1_ = parseInt(Gerenshuxing.jinengbiao[j].chushizhi) + this.zuizhongmazhi_0 * parseFloat(Gerenshuxing.jinengbiao[j].jiacheng);
                        jinengjiachengzhi_1_ = Math.floor(jinengjiachengzhi_1_);
                        var suijishu = Math.floor(Math.random() * 100);
                        if (suijishu <= jinengjiachengzhi_1_) {
                            this.chufachenmo_1_ = "1";
                        }
                    }
                    else if (this.caidejineng4_0 == "20018") {
                        jinengjiachengzhi_1_ = parseInt(Gerenshuxing.jinengbiao[j].chushizhi) + this.zuizhongtianzhi_0 * parseFloat(Gerenshuxing.jinengbiao[j].jiacheng);
                        jinengjiachengzhi_1_ = Math.floor(jinengjiachengzhi_1_);
                        this.chufahuixue_1_ = "" + jinengjiachengzhi_1_;
                    }
                    else if (this.caidejineng4_0 == "20019") {
                        jinengjiachengzhi_1_ = parseInt(Gerenshuxing.jinengbiao[j].chushizhi) + this.zuizhongsuanzhi_0 * parseFloat(Gerenshuxing.jinengbiao[j].jiacheng);
                        jinengjiachengzhi_1_ = Math.floor(jinengjiachengzhi_1_);
                        this.chufaquanhushi_1_ = "" + jinengjiachengzhi_1_;
                    }
                    else if (this.caidejineng4_0 == "20020") {
                        this.chufahuiling_1_ = "1";
                    }
                    else if (this.caidejineng4_0 == "20021") {
                        jinengjiachengzhi_1_ = parseInt(Gerenshuxing.jinengbiao[j].chushizhi) + this.zuizhongsuanzhi_0 * parseFloat(Gerenshuxing.jinengbiao[j].jiacheng);
                        jinengjiachengzhi_1_ = Math.floor(jinengjiachengzhi_1_);
                        this.chufadu_1_ = "" + jinengjiachengzhi_1_;
                    }
                    else if (this.caidejineng4_0 == "20022") {
                        jinengjiachengzhi_1_ = parseInt(Gerenshuxing.jinengbiao[j].chushizhi) + this.zuizhongmazhi_0 * parseFloat(Gerenshuxing.jinengbiao[j].jiacheng);
                        jinengjiachengzhi_1_ = Math.floor(jinengjiachengzhi_1_);
                        this.chufaxuruo_1_ = "" + jinengjiachengzhi_1_;
                    }
                    else if (this.caidejineng4_0 == "20023") {
                        jinengjiachengzhi_1_ = parseInt(Gerenshuxing.jinengbiao[j].chushizhi) + this.zuizhongtianzhi_0 * parseFloat(Gerenshuxing.jinengbiao[j].jiacheng);
                        jinengjiachengzhi_1_ = Math.floor(jinengjiachengzhi_1_);
                        this.chufajiafang_1_ = "" + jinengjiachengzhi_1_;
                    }
                    else if (this.caidejineng4_0 == "20024") {
                        jinengjiachengzhi_1_ = parseInt(Gerenshuxing.jinengbiao[j].chushizhi) + this.zuizhonglazhi_0 * parseFloat(Gerenshuxing.jinengbiao[j].jiacheng);
                        jinengjiachengzhi_1_ = Math.floor(jinengjiachengzhi_1_);
                        this.chufajiasu_1_ = "" + jinengjiachengzhi_1_;
                    }
                    else if (this.caidejineng4_0 == "20025") {
                        this.chufajianxue_1_ = "1";
                    }
                    else if (this.caidejineng4_0 == "20026") {
                        this.chufajiangong_1_ = "1";
                    }
                    else if (this.caidejineng4_0 == "20027") {
                        this.chufawofangjiansu_1_ = "1";
                    }
                }
            }
        }
        //计算菜品技能2///
        if (this.caidejineng5_0 != "0") {
            for (var j = 0; j < Gerenshuxing.jinengbiao.length; j++) {
                if (Gerenshuxing.jinengbiao[j].id == this.caidejineng5_0) {
                    var jinengjiachengzhi_1_ = 0;
                    if (this.caidejineng5_0 == "20001") {
                        jinengjiachengzhi_1_ = parseInt(Gerenshuxing.jinengbiao[j].chushizhi) + this.zuizhonglazhi_0 * parseFloat(Gerenshuxing.jinengbiao[j].jiacheng);
                        jinengjiachengzhi_1_ = Math.floor(jinengjiachengzhi_1_);
                        var suijishu = Math.floor(Math.random() * 100);
                        if (suijishu <= jinengjiachengzhi_1_) {
                            this.chufalianji_1_ = "1";
                        }
                    }
                    else if (this.caidejineng5_0 == "20002") {
                        jinengjiachengzhi_1_ = parseInt(Gerenshuxing.jinengbiao[j].chushizhi) + this.zuizhonglazhi_0 * parseFloat(Gerenshuxing.jinengbiao[j].jiacheng);
                        jinengjiachengzhi_1_ = Math.floor(jinengjiachengzhi_1_);
                        var suijishu = Math.floor(Math.random() * 100);
                        if (suijishu <= jinengjiachengzhi_1_) {
                            this.chufalianji_1_ = "1";
                        }
                    }
                    else if (this.caidejineng5_0 == "20003") {
                        jinengjiachengzhi_1_ = parseInt(Gerenshuxing.jinengbiao[j].chushizhi) + this.zuizhonglazhi_0 * parseFloat(Gerenshuxing.jinengbiao[j].jiacheng);
                        jinengjiachengzhi_1_ = Math.floor(jinengjiachengzhi_1_);
                        this.chufabisha_1_ = "" + jinengjiachengzhi_1_;
                    }
                    else if (this.caidejineng5_0 == "20004") {
                        jinengjiachengzhi_1_ = parseInt(Gerenshuxing.jinengbiao[j].chushizhi) + this.zuizhonglazhi_0 * parseFloat(Gerenshuxing.jinengbiao[j].jiacheng);
                        jinengjiachengzhi_1_ = Math.floor(jinengjiachengzhi_1_);
                        this.chufabisha_1_ = "" + jinengjiachengzhi_1_;
                    }
                    else if (this.caidejineng5_0 == "20005") {
                        jinengjiachengzhi_1_ = parseInt(Gerenshuxing.jinengbiao[j].chushizhi) + this.zuizhongtianzhi_0 * parseFloat(Gerenshuxing.jinengbiao[j].jiacheng);
                        jinengjiachengzhi_1_ = Math.floor(jinengjiachengzhi_1_);
                        this.chufaxixue_1_ = "" + jinengjiachengzhi_1_;
                    }
                    else if (this.caidejineng5_0 == "20006") {
                        jinengjiachengzhi_1_ = parseInt(Gerenshuxing.jinengbiao[j].chushizhi) + this.zuizhongtianzhi_0 * parseFloat(Gerenshuxing.jinengbiao[j].jiacheng);
                        jinengjiachengzhi_1_ = Math.floor(jinengjiachengzhi_1_);
                        this.chufaxixue_1_ = "" + jinengjiachengzhi_1_;
                    }
                    else if (this.caidejineng5_0 == "20007") {
                        this.chufazhuiji_1_ = "1";
                    }
                    else if (this.caidejineng5_0 == "20008") {
                        this.chufasane_1_ = "1";
                    }
                    else if (this.caidejineng5_0 == "20009") {
                        jinengjiachengzhi_1_ = parseInt(Gerenshuxing.jinengbiao[j].chushizhi) + this.zuizhonglazhi_0 * parseFloat(Gerenshuxing.jinengbiao[j].jiacheng);
                        jinengjiachengzhi_1_ = Math.floor(jinengjiachengzhi_1_);
                        this.chufahushila_1_ = "" + jinengjiachengzhi_1_;
                    }
                    else if (this.caidejineng5_0 == "20010") {
                        jinengjiachengzhi_1_ = parseInt(Gerenshuxing.jinengbiao[j].chushizhi) + this.zuizhongtianzhi_0 * parseFloat(Gerenshuxing.jinengbiao[j].jiacheng);
                        jinengjiachengzhi_1_ = Math.floor(jinengjiachengzhi_1_);
                        this.chufahushitian_1_ = "" + jinengjiachengzhi_1_;
                    }
                    else if (this.caidejineng5_0 == "20011") {
                        jinengjiachengzhi_1_ = parseInt(Gerenshuxing.jinengbiao[j].chushizhi) + this.zuizhongsuanzhi_0 * parseFloat(Gerenshuxing.jinengbiao[j].jiacheng);
                        jinengjiachengzhi_1_ = Math.floor(jinengjiachengzhi_1_);
                        this.chufahushisuan_1_ = "" + jinengjiachengzhi_1_;
                    }
                    else if (this.caidejineng5_0 == "20012") {
                        jinengjiachengzhi_1_ = parseInt(Gerenshuxing.jinengbiao[j].chushizhi) + this.zuizhongmazhi_0 * parseFloat(Gerenshuxing.jinengbiao[j].jiacheng);
                        jinengjiachengzhi_1_ = Math.floor(jinengjiachengzhi_1_);
                        this.chufahushima_1_ = "" + jinengjiachengzhi_1_;
                    }
                    else if (this.caidejineng5_0 == "20013") {
                        jinengjiachengzhi_1_ = parseInt(Gerenshuxing.jinengbiao[j].chushizhi) + this.zuizhongsuanzhi_0 * parseFloat(Gerenshuxing.jinengbiao[j].jiacheng);
                        jinengjiachengzhi_1_ = Math.floor(jinengjiachengzhi_1_);
                        this.chufazhenshe_1_ = "" + jinengjiachengzhi_1_;
                    }
                    else if (this.caidejineng5_0 == "20014") {
                        jinengjiachengzhi_1_ = parseInt(Gerenshuxing.jinengbiao[j].chushizhi) + this.zuizhongsuanzhi_0 * parseFloat(Gerenshuxing.jinengbiao[j].jiacheng);
                        jinengjiachengzhi_1_ = Math.floor(jinengjiachengzhi_1_);
                        this.chufaxilan_1_ = "" + jinengjiachengzhi_1_;
                    }
                    else if (this.caidejineng5_0 == "20015") {
                        jinengjiachengzhi_1_ = parseInt(Gerenshuxing.jinengbiao[j].chushizhi) + this.zuizhongsuanzhi_0 * parseFloat(Gerenshuxing.jinengbiao[j].jiacheng);
                        jinengjiachengzhi_1_ = Math.floor(jinengjiachengzhi_1_);
                        this.chufaxilan_1_ = "" + jinengjiachengzhi_1_;
                    }
                    else if (this.caidejineng5_0 == "20016") {
                        jinengjiachengzhi_1_ = parseInt(Gerenshuxing.jinengbiao[j].chushizhi) + this.zuizhongmazhi_0 * parseFloat(Gerenshuxing.jinengbiao[j].jiacheng);
                        jinengjiachengzhi_1_ = Math.floor(jinengjiachengzhi_1_);
                        this.chufajiansu_1_ = "" + jinengjiachengzhi_1_;
                    }
                    else if (this.caidejineng5_0 == "20017") {
                        jinengjiachengzhi_1_ = parseInt(Gerenshuxing.jinengbiao[j].chushizhi) + this.zuizhongmazhi_0 * parseFloat(Gerenshuxing.jinengbiao[j].jiacheng);
                        jinengjiachengzhi_1_ = Math.floor(jinengjiachengzhi_1_);
                        var suijishu = Math.floor(Math.random() * 100);
                        if (suijishu <= jinengjiachengzhi_1_) {
                            this.chufachenmo_1_ = "1";
                        }
                    }
                    else if (this.caidejineng5_0 == "20018") {
                        jinengjiachengzhi_1_ = parseInt(Gerenshuxing.jinengbiao[j].chushizhi) + this.zuizhongtianzhi_0 * parseFloat(Gerenshuxing.jinengbiao[j].jiacheng);
                        jinengjiachengzhi_1_ = Math.floor(jinengjiachengzhi_1_);
                        this.chufahuixue_1_ = "" + jinengjiachengzhi_1_;
                    }
                    else if (this.caidejineng5_0 == "20019") {
                        jinengjiachengzhi_1_ = parseInt(Gerenshuxing.jinengbiao[j].chushizhi) + this.zuizhongsuanzhi_0 * parseFloat(Gerenshuxing.jinengbiao[j].jiacheng);
                        jinengjiachengzhi_1_ = Math.floor(jinengjiachengzhi_1_);
                        this.chufaquanhushi_1_ = "" + jinengjiachengzhi_1_;
                    }
                    else if (this.caidejineng5_0 == "20020") {
                        this.chufahuiling_1_ = "1";
                    }
                    else if (this.caidejineng5_0 == "20021") {
                        jinengjiachengzhi_1_ = parseInt(Gerenshuxing.jinengbiao[j].chushizhi) + this.zuizhongsuanzhi_0 * parseFloat(Gerenshuxing.jinengbiao[j].jiacheng);
                        jinengjiachengzhi_1_ = Math.floor(jinengjiachengzhi_1_);
                        this.chufadu_1_ = "" + jinengjiachengzhi_1_;
                    }
                    else if (this.caidejineng5_0 == "20022") {
                        jinengjiachengzhi_1_ = parseInt(Gerenshuxing.jinengbiao[j].chushizhi) + this.zuizhongmazhi_0 * parseFloat(Gerenshuxing.jinengbiao[j].jiacheng);
                        jinengjiachengzhi_1_ = Math.floor(jinengjiachengzhi_1_);
                        this.chufaxuruo_1_ = "" + jinengjiachengzhi_1_;
                    }
                    else if (this.caidejineng5_0 == "20023") {
                        jinengjiachengzhi_1_ = parseInt(Gerenshuxing.jinengbiao[j].chushizhi) + this.zuizhongtianzhi_0 * parseFloat(Gerenshuxing.jinengbiao[j].jiacheng);
                        jinengjiachengzhi_1_ = Math.floor(jinengjiachengzhi_1_);
                        this.chufajiafang_1_ = "" + jinengjiachengzhi_1_;
                    }
                    else if (this.caidejineng5_0 == "20024") {
                        jinengjiachengzhi_1_ = parseInt(Gerenshuxing.jinengbiao[j].chushizhi) + this.zuizhonglazhi_0 * parseFloat(Gerenshuxing.jinengbiao[j].jiacheng);
                        jinengjiachengzhi_1_ = Math.floor(jinengjiachengzhi_1_);
                        this.chufajiasu_1_ = "" + jinengjiachengzhi_1_;
                    }
                    else if (this.caidejineng5_0 == "20025") {
                        this.chufajianxue_1_ = "1";
                    }
                    else if (this.caidejineng5_0 == "20026") {
                        this.chufajiangong_1_ = "1";
                    }
                    else if (this.caidejineng5_0 == "20027") {
                        this.chufawofangjiansu_1_ = "1";
                    }
                }
            }
        }
        this.duiguai1shanghai();
    };
    //队怪物2使用技能判断
    Pvpzhandoujiemian.prototype.duiguai2jineng = function () {
        //初始化触发技能数据
        this.chufalianji_2_ = "0"; //触发连击
        this.chufabisha_2_ = "0"; //触发必杀
        this.chufaxixue_2_ = "0"; //触发吸血
        this.chufazhuiji_2_ = "0"; //触发追击
        this.chufasane_2_ = "0"; //触发善恶
        this.chufahushila_2_ = "0"; //触发忽视辣
        this.chufahushima_2_ = "0"; //触发忽视麻
        this.chufahushisuan_2_ = "0"; //触发忽视酸
        this.chufahushitian_2_ = "0"; //触发忽视甜
        this.chufazhenshe_2_ = "0"; //触发震慑
        this.chufaxilan_2_ = "0"; //触发吸蓝
        this.chufajiansu_2_ = "0"; //触发减速
        this.chufachenmo_2_ = "0"; //触发沉默
        this.chufahuixue_2_ = "0"; //触发回血
        this.chufaquanhushi_2_ = "0"; //触发全忽视
        this.chufahuiling_2_ = "0"; //触发回灵
        this.chufadu_2_ = "0"; //触发毒
        this.chufaxuruo_2_ = "0"; //触发虚弱
        this.chufajiafang_2_ = "0"; //触发加防
        this.chufajiasu_2_ = "0"; //触发加速
        this.chufajianxue_2_ = "0"; //触发给我放见血
        this.chufajiangong_2_ = "0"; //触发给我方减攻
        this.chufawofangjiansu_2_ = "0"; //触发给我方减速
        //进入正式计算
        if (this.caidejineng1_0 != "0") {
            for (var j = 0; j < Gerenshuxing.jinengbiao.length; j++) {
                if (Gerenshuxing.jinengbiao[j].id == this.caidejineng1_0) {
                    var jinengjiachengzhi_2_ = 0;
                    if (this.caidejineng1_0 == "20001") {
                        jinengjiachengzhi_2_ = parseInt(Gerenshuxing.jinengbiao[j].chushizhi) + this.zuizhonglazhi_0 * parseFloat(Gerenshuxing.jinengbiao[j].jiacheng);
                        jinengjiachengzhi_2_ = Math.floor(jinengjiachengzhi_2_);
                        var suijishu = Math.floor(Math.random() * 100);
                        if (suijishu <= jinengjiachengzhi_2_) {
                            this.chufalianji_2_ = "1";
                        }
                    }
                    else if (this.caidejineng1_0 == "20002") {
                        jinengjiachengzhi_2_ = parseInt(Gerenshuxing.jinengbiao[j].chushizhi) + this.zuizhonglazhi_0 * parseFloat(Gerenshuxing.jinengbiao[j].jiacheng);
                        jinengjiachengzhi_2_ = Math.floor(jinengjiachengzhi_2_);
                        var suijishu = Math.floor(Math.random() * 100);
                        if (suijishu <= jinengjiachengzhi_2_) {
                            this.chufalianji_2_ = "1";
                        }
                    }
                    else if (this.caidejineng1_0 == "20003") {
                        jinengjiachengzhi_2_ = parseInt(Gerenshuxing.jinengbiao[j].chushizhi) + this.zuizhonglazhi_0 * parseFloat(Gerenshuxing.jinengbiao[j].jiacheng);
                        jinengjiachengzhi_2_ = Math.floor(jinengjiachengzhi_2_);
                        this.chufabisha_2_ = "" + jinengjiachengzhi_2_;
                    }
                    else if (this.caidejineng1_0 == "20004") {
                        jinengjiachengzhi_2_ = parseInt(Gerenshuxing.jinengbiao[j].chushizhi) + this.zuizhonglazhi_0 * parseFloat(Gerenshuxing.jinengbiao[j].jiacheng);
                        jinengjiachengzhi_2_ = Math.floor(jinengjiachengzhi_2_);
                        this.chufabisha_2_ = "" + jinengjiachengzhi_2_;
                    }
                    else if (this.caidejineng1_0 == "20005") {
                        jinengjiachengzhi_2_ = parseInt(Gerenshuxing.jinengbiao[j].chushizhi) + this.zuizhongtianzhi_0 * parseFloat(Gerenshuxing.jinengbiao[j].jiacheng);
                        jinengjiachengzhi_2_ = Math.floor(jinengjiachengzhi_2_);
                        this.chufaxixue_2_ = "" + jinengjiachengzhi_2_;
                    }
                    else if (this.caidejineng1_0 == "20006") {
                        jinengjiachengzhi_2_ = parseInt(Gerenshuxing.jinengbiao[j].chushizhi) + this.zuizhongtianzhi_0 * parseFloat(Gerenshuxing.jinengbiao[j].jiacheng);
                        jinengjiachengzhi_2_ = Math.floor(jinengjiachengzhi_2_);
                        this.chufaxixue_2_ = "" + jinengjiachengzhi_2_;
                    }
                    else if (this.caidejineng1_0 == "20007") {
                        this.chufazhuiji_2_ = "1";
                    }
                    else if (this.caidejineng1_0 == "20008") {
                        this.chufasane_2_ = "1";
                    }
                    else if (this.caidejineng1_0 == "20009") {
                        jinengjiachengzhi_2_ = parseInt(Gerenshuxing.jinengbiao[j].chushizhi) + this.zuizhonglazhi_0 * parseFloat(Gerenshuxing.jinengbiao[j].jiacheng);
                        jinengjiachengzhi_2_ = Math.floor(jinengjiachengzhi_2_);
                        this.chufahushila_2_ = "" + jinengjiachengzhi_2_;
                    }
                    else if (this.caidejineng1_0 == "20010") {
                        jinengjiachengzhi_2_ = parseInt(Gerenshuxing.jinengbiao[j].chushizhi) + this.zuizhongtianzhi_0 * parseFloat(Gerenshuxing.jinengbiao[j].jiacheng);
                        jinengjiachengzhi_2_ = Math.floor(jinengjiachengzhi_2_);
                        this.chufahushitian_2_ = "" + jinengjiachengzhi_2_;
                    }
                    else if (this.caidejineng1_0 == "20011") {
                        jinengjiachengzhi_2_ = parseInt(Gerenshuxing.jinengbiao[j].chushizhi) + this.zuizhongsuanzhi_0 * parseFloat(Gerenshuxing.jinengbiao[j].jiacheng);
                        jinengjiachengzhi_2_ = Math.floor(jinengjiachengzhi_2_);
                        this.chufahushisuan_2_ = "" + jinengjiachengzhi_2_;
                    }
                    else if (this.caidejineng1_0 == "20012") {
                        jinengjiachengzhi_2_ = parseInt(Gerenshuxing.jinengbiao[j].chushizhi) + this.zuizhongmazhi_0 * parseFloat(Gerenshuxing.jinengbiao[j].jiacheng);
                        jinengjiachengzhi_2_ = Math.floor(jinengjiachengzhi_2_);
                        this.chufahushima_2_ = "" + jinengjiachengzhi_2_;
                    }
                    else if (this.caidejineng1_0 == "20013") {
                        jinengjiachengzhi_2_ = parseInt(Gerenshuxing.jinengbiao[j].chushizhi) + this.zuizhongsuanzhi_0 * parseFloat(Gerenshuxing.jinengbiao[j].jiacheng);
                        jinengjiachengzhi_2_ = Math.floor(jinengjiachengzhi_2_);
                        this.chufazhenshe_2_ = "" + jinengjiachengzhi_2_;
                    }
                    else if (this.caidejineng1_0 == "20014") {
                        jinengjiachengzhi_2_ = parseInt(Gerenshuxing.jinengbiao[j].chushizhi) + this.zuizhongsuanzhi_0 * parseFloat(Gerenshuxing.jinengbiao[j].jiacheng);
                        jinengjiachengzhi_2_ = Math.floor(jinengjiachengzhi_2_);
                        this.chufaxilan_2_ = "" + jinengjiachengzhi_2_;
                    }
                    else if (this.caidejineng1_0 == "20015") {
                        jinengjiachengzhi_2_ = parseInt(Gerenshuxing.jinengbiao[j].chushizhi) + this.zuizhongsuanzhi_0 * parseFloat(Gerenshuxing.jinengbiao[j].jiacheng);
                        jinengjiachengzhi_2_ = Math.floor(jinengjiachengzhi_2_);
                        this.chufaxilan_2_ = "" + jinengjiachengzhi_2_;
                    }
                    else if (this.caidejineng1_0 == "20016") {
                        jinengjiachengzhi_2_ = parseInt(Gerenshuxing.jinengbiao[j].chushizhi) + this.zuizhongmazhi_0 * parseFloat(Gerenshuxing.jinengbiao[j].jiacheng);
                        jinengjiachengzhi_2_ = Math.floor(jinengjiachengzhi_2_);
                        this.chufajiansu_2_ = "" + jinengjiachengzhi_2_;
                    }
                    else if (this.caidejineng1_0 == "20017") {
                        jinengjiachengzhi_2_ = parseInt(Gerenshuxing.jinengbiao[j].chushizhi) + this.zuizhongmazhi_0 * parseFloat(Gerenshuxing.jinengbiao[j].jiacheng);
                        jinengjiachengzhi_2_ = Math.floor(jinengjiachengzhi_2_);
                        var suijishu = Math.floor(Math.random() * 100);
                        if (suijishu <= jinengjiachengzhi_2_) {
                            this.chufachenmo_2_ = "1";
                        }
                    }
                    else if (this.caidejineng1_0 == "20018") {
                        jinengjiachengzhi_2_ = parseInt(Gerenshuxing.jinengbiao[j].chushizhi) + this.zuizhongtianzhi_0 * parseFloat(Gerenshuxing.jinengbiao[j].jiacheng);
                        jinengjiachengzhi_2_ = Math.floor(jinengjiachengzhi_2_);
                        this.chufahuixue_2_ = "" + jinengjiachengzhi_2_;
                    }
                    else if (this.caidejineng1_0 == "20019") {
                        jinengjiachengzhi_2_ = parseInt(Gerenshuxing.jinengbiao[j].chushizhi) + this.zuizhongsuanzhi_0 * parseFloat(Gerenshuxing.jinengbiao[j].jiacheng);
                        jinengjiachengzhi_2_ = Math.floor(jinengjiachengzhi_2_);
                        this.chufaquanhushi_2_ = "" + jinengjiachengzhi_2_;
                    }
                    else if (this.caidejineng1_0 == "20020") {
                        this.chufahuiling_2_ = "1";
                    }
                    else if (this.caidejineng1_0 == "20021") {
                        jinengjiachengzhi_2_ = parseInt(Gerenshuxing.jinengbiao[j].chushizhi) + this.zuizhongsuanzhi_0 * parseFloat(Gerenshuxing.jinengbiao[j].jiacheng);
                        jinengjiachengzhi_2_ = Math.floor(jinengjiachengzhi_2_);
                        this.chufadu_2_ = "" + jinengjiachengzhi_2_;
                    }
                    else if (this.caidejineng1_0 == "20022") {
                        jinengjiachengzhi_2_ = parseInt(Gerenshuxing.jinengbiao[j].chushizhi) + this.zuizhongmazhi_0 * parseFloat(Gerenshuxing.jinengbiao[j].jiacheng);
                        jinengjiachengzhi_2_ = Math.floor(jinengjiachengzhi_2_);
                        this.chufaxuruo_2_ = "" + jinengjiachengzhi_2_;
                    }
                    else if (this.caidejineng1_0 == "20023") {
                        jinengjiachengzhi_2_ = parseInt(Gerenshuxing.jinengbiao[j].chushizhi) + this.zuizhongtianzhi_0 * parseFloat(Gerenshuxing.jinengbiao[j].jiacheng);
                        jinengjiachengzhi_2_ = Math.floor(jinengjiachengzhi_2_);
                        this.chufajiafang_2_ = "" + jinengjiachengzhi_2_;
                    }
                    else if (this.caidejineng1_0 == "20024") {
                        jinengjiachengzhi_2_ = parseInt(Gerenshuxing.jinengbiao[j].chushizhi) + this.zuizhonglazhi_0 * parseFloat(Gerenshuxing.jinengbiao[j].jiacheng);
                        jinengjiachengzhi_2_ = Math.floor(jinengjiachengzhi_2_);
                        this.chufajiasu_2_ = "" + jinengjiachengzhi_2_;
                    }
                    else if (this.caidejineng1_0 == "20025") {
                        this.chufajianxue_2_ = "1";
                    }
                    else if (this.caidejineng1_0 == "20026") {
                        this.chufajiangong_2_ = "1";
                    }
                    else if (this.caidejineng1_0 == "20027") {
                        this.chufawofangjiansu_2_ = "1";
                    }
                }
            }
        }
        //计算菜品技能2///
        if (this.caidejineng2_0 != "0") {
            for (var j = 0; j < Gerenshuxing.jinengbiao.length; j++) {
                if (Gerenshuxing.jinengbiao[j].id == this.caidejineng2_0) {
                    var jinengjiachengzhi_2_ = 0;
                    if (this.caidejineng2_0 == "20001") {
                        jinengjiachengzhi_2_ = parseInt(Gerenshuxing.jinengbiao[j].chushizhi) + this.zuizhonglazhi_0 * parseFloat(Gerenshuxing.jinengbiao[j].jiacheng);
                        jinengjiachengzhi_2_ = Math.floor(jinengjiachengzhi_2_);
                        var suijishu = Math.floor(Math.random() * 100);
                        if (suijishu <= jinengjiachengzhi_2_) {
                            this.chufalianji_2_ = "1";
                        }
                    }
                    else if (this.caidejineng2_0 == "20002") {
                        jinengjiachengzhi_2_ = parseInt(Gerenshuxing.jinengbiao[j].chushizhi) + this.zuizhonglazhi_0 * parseFloat(Gerenshuxing.jinengbiao[j].jiacheng);
                        jinengjiachengzhi_2_ = Math.floor(jinengjiachengzhi_2_);
                        var suijishu = Math.floor(Math.random() * 100);
                        if (suijishu <= jinengjiachengzhi_2_) {
                            this.chufalianji_2_ = "1";
                        }
                    }
                    else if (this.caidejineng2_0 == "20003") {
                        jinengjiachengzhi_2_ = parseInt(Gerenshuxing.jinengbiao[j].chushizhi) + this.zuizhonglazhi_0 * parseFloat(Gerenshuxing.jinengbiao[j].jiacheng);
                        jinengjiachengzhi_2_ = Math.floor(jinengjiachengzhi_2_);
                        this.chufabisha_2_ = "" + jinengjiachengzhi_2_;
                    }
                    else if (this.caidejineng2_0 == "20004") {
                        jinengjiachengzhi_2_ = parseInt(Gerenshuxing.jinengbiao[j].chushizhi) + this.zuizhonglazhi_0 * parseFloat(Gerenshuxing.jinengbiao[j].jiacheng);
                        jinengjiachengzhi_2_ = Math.floor(jinengjiachengzhi_2_);
                        this.chufabisha_2_ = "" + jinengjiachengzhi_2_;
                    }
                    else if (this.caidejineng2_0 == "20005") {
                        jinengjiachengzhi_2_ = parseInt(Gerenshuxing.jinengbiao[j].chushizhi) + this.zuizhongtianzhi_0 * parseFloat(Gerenshuxing.jinengbiao[j].jiacheng);
                        jinengjiachengzhi_2_ = Math.floor(jinengjiachengzhi_2_);
                        this.chufaxixue_2_ = "" + jinengjiachengzhi_2_;
                    }
                    else if (this.caidejineng2_0 == "20006") {
                        jinengjiachengzhi_2_ = parseInt(Gerenshuxing.jinengbiao[j].chushizhi) + this.zuizhongtianzhi_0 * parseFloat(Gerenshuxing.jinengbiao[j].jiacheng);
                        jinengjiachengzhi_2_ = Math.floor(jinengjiachengzhi_2_);
                        this.chufaxixue_2_ = "" + jinengjiachengzhi_2_;
                    }
                    else if (this.caidejineng2_0 == "20007") {
                        this.chufazhuiji_2_ = "1";
                    }
                    else if (this.caidejineng2_0 == "20008") {
                        this.chufasane_2_ = "1";
                    }
                    else if (this.caidejineng2_0 == "20009") {
                        jinengjiachengzhi_2_ = parseInt(Gerenshuxing.jinengbiao[j].chushizhi) + this.zuizhonglazhi_0 * parseFloat(Gerenshuxing.jinengbiao[j].jiacheng);
                        jinengjiachengzhi_2_ = Math.floor(jinengjiachengzhi_2_);
                        this.chufahushila_2_ = "" + jinengjiachengzhi_2_;
                    }
                    else if (this.caidejineng2_0 == "20010") {
                        jinengjiachengzhi_2_ = parseInt(Gerenshuxing.jinengbiao[j].chushizhi) + this.zuizhongtianzhi_0 * parseFloat(Gerenshuxing.jinengbiao[j].jiacheng);
                        jinengjiachengzhi_2_ = Math.floor(jinengjiachengzhi_2_);
                        this.chufahushitian_2_ = "" + jinengjiachengzhi_2_;
                    }
                    else if (this.caidejineng2_0 == "20011") {
                        jinengjiachengzhi_2_ = parseInt(Gerenshuxing.jinengbiao[j].chushizhi) + this.zuizhongsuanzhi_0 * parseFloat(Gerenshuxing.jinengbiao[j].jiacheng);
                        jinengjiachengzhi_2_ = Math.floor(jinengjiachengzhi_2_);
                        this.chufahushisuan_2_ = "" + jinengjiachengzhi_2_;
                    }
                    else if (this.caidejineng2_0 == "20012") {
                        jinengjiachengzhi_2_ = parseInt(Gerenshuxing.jinengbiao[j].chushizhi) + this.zuizhongmazhi_0 * parseFloat(Gerenshuxing.jinengbiao[j].jiacheng);
                        jinengjiachengzhi_2_ = Math.floor(jinengjiachengzhi_2_);
                        this.chufahushima_2_ = "" + jinengjiachengzhi_2_;
                    }
                    else if (this.caidejineng2_0 == "20013") {
                        jinengjiachengzhi_2_ = parseInt(Gerenshuxing.jinengbiao[j].chushizhi) + this.zuizhongsuanzhi_0 * parseFloat(Gerenshuxing.jinengbiao[j].jiacheng);
                        jinengjiachengzhi_2_ = Math.floor(jinengjiachengzhi_2_);
                        this.chufazhenshe_2_ = "" + jinengjiachengzhi_2_;
                    }
                    else if (this.caidejineng2_0 == "20014") {
                        jinengjiachengzhi_2_ = parseInt(Gerenshuxing.jinengbiao[j].chushizhi) + this.zuizhongsuanzhi_0 * parseFloat(Gerenshuxing.jinengbiao[j].jiacheng);
                        jinengjiachengzhi_2_ = Math.floor(jinengjiachengzhi_2_);
                        this.chufaxilan_2_ = "" + jinengjiachengzhi_2_;
                    }
                    else if (this.caidejineng2_0 == "20015") {
                        jinengjiachengzhi_2_ = parseInt(Gerenshuxing.jinengbiao[j].chushizhi) + this.zuizhongsuanzhi_0 * parseFloat(Gerenshuxing.jinengbiao[j].jiacheng);
                        jinengjiachengzhi_2_ = Math.floor(jinengjiachengzhi_2_);
                        this.chufaxilan_2_ = "" + jinengjiachengzhi_2_;
                    }
                    else if (this.caidejineng2_0 == "20016") {
                        jinengjiachengzhi_2_ = parseInt(Gerenshuxing.jinengbiao[j].chushizhi) + this.zuizhongmazhi_0 * parseFloat(Gerenshuxing.jinengbiao[j].jiacheng);
                        jinengjiachengzhi_2_ = Math.floor(jinengjiachengzhi_2_);
                        this.chufajiansu_2_ = "" + jinengjiachengzhi_2_;
                    }
                    else if (this.caidejineng2_0 == "20017") {
                        jinengjiachengzhi_2_ = parseInt(Gerenshuxing.jinengbiao[j].chushizhi) + this.zuizhongmazhi_0 * parseFloat(Gerenshuxing.jinengbiao[j].jiacheng);
                        jinengjiachengzhi_2_ = Math.floor(jinengjiachengzhi_2_);
                        var suijishu = Math.floor(Math.random() * 100);
                        if (suijishu <= jinengjiachengzhi_2_) {
                            this.chufachenmo_2_ = "1";
                        }
                    }
                    else if (this.caidejineng2_0 == "20018") {
                        jinengjiachengzhi_2_ = parseInt(Gerenshuxing.jinengbiao[j].chushizhi) + this.zuizhongtianzhi_0 * parseFloat(Gerenshuxing.jinengbiao[j].jiacheng);
                        jinengjiachengzhi_2_ = Math.floor(jinengjiachengzhi_2_);
                        this.chufahuixue_2_ = "" + jinengjiachengzhi_2_;
                    }
                    else if (this.caidejineng2_0 == "20019") {
                        jinengjiachengzhi_2_ = parseInt(Gerenshuxing.jinengbiao[j].chushizhi) + this.zuizhongsuanzhi_0 * parseFloat(Gerenshuxing.jinengbiao[j].jiacheng);
                        jinengjiachengzhi_2_ = Math.floor(jinengjiachengzhi_2_);
                        this.chufaquanhushi_2_ = "" + jinengjiachengzhi_2_;
                    }
                    else if (this.caidejineng2_0 == "20020") {
                        this.chufahuiling_2_ = "1";
                    }
                    else if (this.caidejineng2_0 == "20021") {
                        jinengjiachengzhi_2_ = parseInt(Gerenshuxing.jinengbiao[j].chushizhi) + this.zuizhongsuanzhi_0 * parseFloat(Gerenshuxing.jinengbiao[j].jiacheng);
                        jinengjiachengzhi_2_ = Math.floor(jinengjiachengzhi_2_);
                        this.chufadu_2_ = "" + jinengjiachengzhi_2_;
                    }
                    else if (this.caidejineng2_0 == "20022") {
                        jinengjiachengzhi_2_ = parseInt(Gerenshuxing.jinengbiao[j].chushizhi) + this.zuizhongmazhi_0 * parseFloat(Gerenshuxing.jinengbiao[j].jiacheng);
                        jinengjiachengzhi_2_ = Math.floor(jinengjiachengzhi_2_);
                        this.chufaxuruo_2_ = "" + jinengjiachengzhi_2_;
                    }
                    else if (this.caidejineng2_0 == "20023") {
                        jinengjiachengzhi_2_ = parseInt(Gerenshuxing.jinengbiao[j].chushizhi) + this.zuizhongtianzhi_0 * parseFloat(Gerenshuxing.jinengbiao[j].jiacheng);
                        jinengjiachengzhi_2_ = Math.floor(jinengjiachengzhi_2_);
                        this.chufajiafang_2_ = "" + jinengjiachengzhi_2_;
                    }
                    else if (this.caidejineng2_0 == "20024") {
                        jinengjiachengzhi_2_ = parseInt(Gerenshuxing.jinengbiao[j].chushizhi) + this.zuizhonglazhi_0 * parseFloat(Gerenshuxing.jinengbiao[j].jiacheng);
                        jinengjiachengzhi_2_ = Math.floor(jinengjiachengzhi_2_);
                        this.chufajiasu_2_ = "" + jinengjiachengzhi_2_;
                    }
                    else if (this.caidejineng2_0 == "20025") {
                        this.chufajianxue_2_ = "1";
                    }
                    else if (this.caidejineng2_0 == "20026") {
                        this.chufajiangong_2_ = "1";
                    }
                    else if (this.caidejineng2_0 == "20027") {
                        this.chufawofangjiansu_2_ = "1";
                    }
                }
            }
        }
        //计算菜品技能2///
        if (this.caidejineng3_0 != "0") {
            for (var j = 0; j < Gerenshuxing.jinengbiao.length; j++) {
                if (Gerenshuxing.jinengbiao[j].id == this.caidejineng3_0) {
                    var jinengjiachengzhi_2_ = 0;
                    if (this.caidejineng3_0 == "20001") {
                        jinengjiachengzhi_2_ = parseInt(Gerenshuxing.jinengbiao[j].chushizhi) + this.zuizhonglazhi_0 * parseFloat(Gerenshuxing.jinengbiao[j].jiacheng);
                        jinengjiachengzhi_2_ = Math.floor(jinengjiachengzhi_2_);
                        var suijishu = Math.floor(Math.random() * 100);
                        if (suijishu <= jinengjiachengzhi_2_) {
                            this.chufalianji_2_ = "1";
                        }
                    }
                    else if (this.caidejineng3_0 == "20002") {
                        jinengjiachengzhi_2_ = parseInt(Gerenshuxing.jinengbiao[j].chushizhi) + this.zuizhonglazhi_0 * parseFloat(Gerenshuxing.jinengbiao[j].jiacheng);
                        jinengjiachengzhi_2_ = Math.floor(jinengjiachengzhi_2_);
                        var suijishu = Math.floor(Math.random() * 100);
                        if (suijishu <= jinengjiachengzhi_2_) {
                            this.chufalianji_2_ = "1";
                        }
                    }
                    else if (this.caidejineng3_0 == "20003") {
                        jinengjiachengzhi_2_ = parseInt(Gerenshuxing.jinengbiao[j].chushizhi) + this.zuizhonglazhi_0 * parseFloat(Gerenshuxing.jinengbiao[j].jiacheng);
                        jinengjiachengzhi_2_ = Math.floor(jinengjiachengzhi_2_);
                        this.chufabisha_2_ = "" + jinengjiachengzhi_2_;
                    }
                    else if (this.caidejineng3_0 == "20004") {
                        jinengjiachengzhi_2_ = parseInt(Gerenshuxing.jinengbiao[j].chushizhi) + this.zuizhonglazhi_0 * parseFloat(Gerenshuxing.jinengbiao[j].jiacheng);
                        jinengjiachengzhi_2_ = Math.floor(jinengjiachengzhi_2_);
                        this.chufabisha_2_ = "" + jinengjiachengzhi_2_;
                    }
                    else if (this.caidejineng3_0 == "20005") {
                        jinengjiachengzhi_2_ = parseInt(Gerenshuxing.jinengbiao[j].chushizhi) + this.zuizhongtianzhi_0 * parseFloat(Gerenshuxing.jinengbiao[j].jiacheng);
                        jinengjiachengzhi_2_ = Math.floor(jinengjiachengzhi_2_);
                        this.chufaxixue_2_ = "" + jinengjiachengzhi_2_;
                    }
                    else if (this.caidejineng3_0 == "20006") {
                        jinengjiachengzhi_2_ = parseInt(Gerenshuxing.jinengbiao[j].chushizhi) + this.zuizhongtianzhi_0 * parseFloat(Gerenshuxing.jinengbiao[j].jiacheng);
                        jinengjiachengzhi_2_ = Math.floor(jinengjiachengzhi_2_);
                        this.chufaxixue_2_ = "" + jinengjiachengzhi_2_;
                    }
                    else if (this.caidejineng3_0 == "20007") {
                        this.chufazhuiji_2_ = "1";
                    }
                    else if (this.caidejineng3_0 == "20008") {
                        this.chufasane_2_ = "1";
                    }
                    else if (this.caidejineng3_0 == "20009") {
                        jinengjiachengzhi_2_ = parseInt(Gerenshuxing.jinengbiao[j].chushizhi) + this.zuizhonglazhi_0 * parseFloat(Gerenshuxing.jinengbiao[j].jiacheng);
                        jinengjiachengzhi_2_ = Math.floor(jinengjiachengzhi_2_);
                        this.chufahushila_2_ = "" + jinengjiachengzhi_2_;
                    }
                    else if (this.caidejineng3_0 == "20010") {
                        jinengjiachengzhi_2_ = parseInt(Gerenshuxing.jinengbiao[j].chushizhi) + this.zuizhongtianzhi_0 * parseFloat(Gerenshuxing.jinengbiao[j].jiacheng);
                        jinengjiachengzhi_2_ = Math.floor(jinengjiachengzhi_2_);
                        this.chufahushitian_2_ = "" + jinengjiachengzhi_2_;
                    }
                    else if (this.caidejineng3_0 == "20011") {
                        jinengjiachengzhi_2_ = parseInt(Gerenshuxing.jinengbiao[j].chushizhi) + this.zuizhongsuanzhi_0 * parseFloat(Gerenshuxing.jinengbiao[j].jiacheng);
                        jinengjiachengzhi_2_ = Math.floor(jinengjiachengzhi_2_);
                        this.chufahushisuan_2_ = "" + jinengjiachengzhi_2_;
                    }
                    else if (this.caidejineng3_0 == "20012") {
                        jinengjiachengzhi_2_ = parseInt(Gerenshuxing.jinengbiao[j].chushizhi) + this.zuizhongmazhi_0 * parseFloat(Gerenshuxing.jinengbiao[j].jiacheng);
                        jinengjiachengzhi_2_ = Math.floor(jinengjiachengzhi_2_);
                        this.chufahushima_2_ = "" + jinengjiachengzhi_2_;
                    }
                    else if (this.caidejineng3_0 == "20013") {
                        jinengjiachengzhi_2_ = parseInt(Gerenshuxing.jinengbiao[j].chushizhi) + this.zuizhongsuanzhi_0 * parseFloat(Gerenshuxing.jinengbiao[j].jiacheng);
                        jinengjiachengzhi_2_ = Math.floor(jinengjiachengzhi_2_);
                        this.chufazhenshe_2_ = "" + jinengjiachengzhi_2_;
                    }
                    else if (this.caidejineng3_0 == "20014") {
                        jinengjiachengzhi_2_ = parseInt(Gerenshuxing.jinengbiao[j].chushizhi) + this.zuizhongsuanzhi_0 * parseFloat(Gerenshuxing.jinengbiao[j].jiacheng);
                        jinengjiachengzhi_2_ = Math.floor(jinengjiachengzhi_2_);
                        this.chufaxilan_2_ = "" + jinengjiachengzhi_2_;
                    }
                    else if (this.caidejineng3_0 == "20015") {
                        jinengjiachengzhi_2_ = parseInt(Gerenshuxing.jinengbiao[j].chushizhi) + this.zuizhongsuanzhi_0 * parseFloat(Gerenshuxing.jinengbiao[j].jiacheng);
                        jinengjiachengzhi_2_ = Math.floor(jinengjiachengzhi_2_);
                        this.chufaxilan_2_ = "" + jinengjiachengzhi_2_;
                    }
                    else if (this.caidejineng3_0 == "20016") {
                        jinengjiachengzhi_2_ = parseInt(Gerenshuxing.jinengbiao[j].chushizhi) + this.zuizhongmazhi_0 * parseFloat(Gerenshuxing.jinengbiao[j].jiacheng);
                        jinengjiachengzhi_2_ = Math.floor(jinengjiachengzhi_2_);
                        this.chufajiansu_2_ = "" + jinengjiachengzhi_2_;
                    }
                    else if (this.caidejineng3_0 == "20017") {
                        jinengjiachengzhi_2_ = parseInt(Gerenshuxing.jinengbiao[j].chushizhi) + this.zuizhongmazhi_0 * parseFloat(Gerenshuxing.jinengbiao[j].jiacheng);
                        jinengjiachengzhi_2_ = Math.floor(jinengjiachengzhi_2_);
                        var suijishu = Math.floor(Math.random() * 100);
                        if (suijishu <= jinengjiachengzhi_2_) {
                            this.chufachenmo_2_ = "1";
                        }
                    }
                    else if (this.caidejineng3_0 == "20018") {
                        jinengjiachengzhi_2_ = parseInt(Gerenshuxing.jinengbiao[j].chushizhi) + this.zuizhongtianzhi_0 * parseFloat(Gerenshuxing.jinengbiao[j].jiacheng);
                        jinengjiachengzhi_2_ = Math.floor(jinengjiachengzhi_2_);
                        this.chufahuixue_2_ = "" + jinengjiachengzhi_2_;
                    }
                    else if (this.caidejineng3_0 == "20019") {
                        jinengjiachengzhi_2_ = parseInt(Gerenshuxing.jinengbiao[j].chushizhi) + this.zuizhongsuanzhi_0 * parseFloat(Gerenshuxing.jinengbiao[j].jiacheng);
                        jinengjiachengzhi_2_ = Math.floor(jinengjiachengzhi_2_);
                        this.chufaquanhushi_2_ = "" + jinengjiachengzhi_2_;
                    }
                    else if (this.caidejineng3_0 == "20020") {
                        this.chufahuiling_2_ = "1";
                    }
                    else if (this.caidejineng3_0 == "20021") {
                        jinengjiachengzhi_2_ = parseInt(Gerenshuxing.jinengbiao[j].chushizhi) + this.zuizhongsuanzhi_0 * parseFloat(Gerenshuxing.jinengbiao[j].jiacheng);
                        jinengjiachengzhi_2_ = Math.floor(jinengjiachengzhi_2_);
                        this.chufadu_2_ = "" + jinengjiachengzhi_2_;
                    }
                    else if (this.caidejineng3_0 == "20022") {
                        jinengjiachengzhi_2_ = parseInt(Gerenshuxing.jinengbiao[j].chushizhi) + this.zuizhongmazhi_0 * parseFloat(Gerenshuxing.jinengbiao[j].jiacheng);
                        jinengjiachengzhi_2_ = Math.floor(jinengjiachengzhi_2_);
                        this.chufaxuruo_2_ = "" + jinengjiachengzhi_2_;
                    }
                    else if (this.caidejineng3_0 == "20023") {
                        jinengjiachengzhi_2_ = parseInt(Gerenshuxing.jinengbiao[j].chushizhi) + this.zuizhongtianzhi_0 * parseFloat(Gerenshuxing.jinengbiao[j].jiacheng);
                        jinengjiachengzhi_2_ = Math.floor(jinengjiachengzhi_2_);
                        this.chufajiafang_2_ = "" + jinengjiachengzhi_2_;
                    }
                    else if (this.caidejineng3_0 == "20024") {
                        jinengjiachengzhi_2_ = parseInt(Gerenshuxing.jinengbiao[j].chushizhi) + this.zuizhonglazhi_0 * parseFloat(Gerenshuxing.jinengbiao[j].jiacheng);
                        jinengjiachengzhi_2_ = Math.floor(jinengjiachengzhi_2_);
                        this.chufajiasu_2_ = "" + jinengjiachengzhi_2_;
                    }
                    else if (this.caidejineng3_0 == "20025") {
                        this.chufajianxue_2_ = "1";
                    }
                    else if (this.caidejineng3_0 == "20026") {
                        this.chufajiangong_2_ = "1";
                    }
                    else if (this.caidejineng3_0 == "20027") {
                        this.chufawofangjiansu_2_ = "1";
                    }
                }
            }
        }
        //计算菜品技能2///
        if (this.caidejineng4_0 != "0") {
            for (var j = 0; j < Gerenshuxing.jinengbiao.length; j++) {
                if (Gerenshuxing.jinengbiao[j].id == this.caidejineng4_0) {
                    var jinengjiachengzhi_2_ = 0;
                    if (this.caidejineng4_0 == "20001") {
                        jinengjiachengzhi_2_ = parseInt(Gerenshuxing.jinengbiao[j].chushizhi) + this.zuizhonglazhi_0 * parseFloat(Gerenshuxing.jinengbiao[j].jiacheng);
                        jinengjiachengzhi_2_ = Math.floor(jinengjiachengzhi_2_);
                        var suijishu = Math.floor(Math.random() * 100);
                        if (suijishu <= jinengjiachengzhi_2_) {
                            this.chufalianji_2_ = "1";
                        }
                    }
                    else if (this.caidejineng4_0 == "20002") {
                        jinengjiachengzhi_2_ = parseInt(Gerenshuxing.jinengbiao[j].chushizhi) + this.zuizhonglazhi_0 * parseFloat(Gerenshuxing.jinengbiao[j].jiacheng);
                        jinengjiachengzhi_2_ = Math.floor(jinengjiachengzhi_2_);
                        var suijishu = Math.floor(Math.random() * 100);
                        if (suijishu <= jinengjiachengzhi_2_) {
                            this.chufalianji_2_ = "1";
                        }
                    }
                    else if (this.caidejineng4_0 == "20003") {
                        jinengjiachengzhi_2_ = parseInt(Gerenshuxing.jinengbiao[j].chushizhi) + this.zuizhonglazhi_0 * parseFloat(Gerenshuxing.jinengbiao[j].jiacheng);
                        jinengjiachengzhi_2_ = Math.floor(jinengjiachengzhi_2_);
                        this.chufabisha_2_ = "" + jinengjiachengzhi_2_;
                    }
                    else if (this.caidejineng4_0 == "20004") {
                        jinengjiachengzhi_2_ = parseInt(Gerenshuxing.jinengbiao[j].chushizhi) + this.zuizhonglazhi_0 * parseFloat(Gerenshuxing.jinengbiao[j].jiacheng);
                        jinengjiachengzhi_2_ = Math.floor(jinengjiachengzhi_2_);
                        this.chufabisha_2_ = "" + jinengjiachengzhi_2_;
                    }
                    else if (this.caidejineng4_0 == "20005") {
                        jinengjiachengzhi_2_ = parseInt(Gerenshuxing.jinengbiao[j].chushizhi) + this.zuizhongtianzhi_0 * parseFloat(Gerenshuxing.jinengbiao[j].jiacheng);
                        jinengjiachengzhi_2_ = Math.floor(jinengjiachengzhi_2_);
                        this.chufaxixue_2_ = "" + jinengjiachengzhi_2_;
                    }
                    else if (this.caidejineng4_0 == "20006") {
                        jinengjiachengzhi_2_ = parseInt(Gerenshuxing.jinengbiao[j].chushizhi) + this.zuizhongtianzhi_0 * parseFloat(Gerenshuxing.jinengbiao[j].jiacheng);
                        jinengjiachengzhi_2_ = Math.floor(jinengjiachengzhi_2_);
                        this.chufaxixue_2_ = "" + jinengjiachengzhi_2_;
                    }
                    else if (this.caidejineng4_0 == "20007") {
                        this.chufazhuiji_2_ = "1";
                    }
                    else if (this.caidejineng4_0 == "20008") {
                        this.chufasane_2_ = "1";
                    }
                    else if (this.caidejineng4_0 == "20009") {
                        jinengjiachengzhi_2_ = parseInt(Gerenshuxing.jinengbiao[j].chushizhi) + this.zuizhonglazhi_0 * parseFloat(Gerenshuxing.jinengbiao[j].jiacheng);
                        jinengjiachengzhi_2_ = Math.floor(jinengjiachengzhi_2_);
                        this.chufahushila_2_ = "" + jinengjiachengzhi_2_;
                    }
                    else if (this.caidejineng4_0 == "20010") {
                        jinengjiachengzhi_2_ = parseInt(Gerenshuxing.jinengbiao[j].chushizhi) + this.zuizhongtianzhi_0 * parseFloat(Gerenshuxing.jinengbiao[j].jiacheng);
                        jinengjiachengzhi_2_ = Math.floor(jinengjiachengzhi_2_);
                        this.chufahushitian_2_ = "" + jinengjiachengzhi_2_;
                    }
                    else if (this.caidejineng4_0 == "20011") {
                        jinengjiachengzhi_2_ = parseInt(Gerenshuxing.jinengbiao[j].chushizhi) + this.zuizhongsuanzhi_0 * parseFloat(Gerenshuxing.jinengbiao[j].jiacheng);
                        jinengjiachengzhi_2_ = Math.floor(jinengjiachengzhi_2_);
                        this.chufahushisuan_2_ = "" + jinengjiachengzhi_2_;
                    }
                    else if (this.caidejineng4_0 == "20012") {
                        jinengjiachengzhi_2_ = parseInt(Gerenshuxing.jinengbiao[j].chushizhi) + this.zuizhongmazhi_0 * parseFloat(Gerenshuxing.jinengbiao[j].jiacheng);
                        jinengjiachengzhi_2_ = Math.floor(jinengjiachengzhi_2_);
                        this.chufahushima_2_ = "" + jinengjiachengzhi_2_;
                    }
                    else if (this.caidejineng4_0 == "20013") {
                        jinengjiachengzhi_2_ = parseInt(Gerenshuxing.jinengbiao[j].chushizhi) + this.zuizhongsuanzhi_0 * parseFloat(Gerenshuxing.jinengbiao[j].jiacheng);
                        jinengjiachengzhi_2_ = Math.floor(jinengjiachengzhi_2_);
                        this.chufazhenshe_2_ = "" + jinengjiachengzhi_2_;
                    }
                    else if (this.caidejineng4_0 == "20014") {
                        jinengjiachengzhi_2_ = parseInt(Gerenshuxing.jinengbiao[j].chushizhi) + this.zuizhongsuanzhi_0 * parseFloat(Gerenshuxing.jinengbiao[j].jiacheng);
                        jinengjiachengzhi_2_ = Math.floor(jinengjiachengzhi_2_);
                        this.chufaxilan_2_ = "" + jinengjiachengzhi_2_;
                    }
                    else if (this.caidejineng4_0 == "20015") {
                        jinengjiachengzhi_2_ = parseInt(Gerenshuxing.jinengbiao[j].chushizhi) + this.zuizhongsuanzhi_0 * parseFloat(Gerenshuxing.jinengbiao[j].jiacheng);
                        jinengjiachengzhi_2_ = Math.floor(jinengjiachengzhi_2_);
                        this.chufaxilan_2_ = "" + jinengjiachengzhi_2_;
                    }
                    else if (this.caidejineng4_0 == "20016") {
                        jinengjiachengzhi_2_ = parseInt(Gerenshuxing.jinengbiao[j].chushizhi) + this.zuizhongmazhi_0 * parseFloat(Gerenshuxing.jinengbiao[j].jiacheng);
                        jinengjiachengzhi_2_ = Math.floor(jinengjiachengzhi_2_);
                        this.chufajiansu_2_ = "" + jinengjiachengzhi_2_;
                    }
                    else if (this.caidejineng4_0 == "20017") {
                        jinengjiachengzhi_2_ = parseInt(Gerenshuxing.jinengbiao[j].chushizhi) + this.zuizhongmazhi_0 * parseFloat(Gerenshuxing.jinengbiao[j].jiacheng);
                        jinengjiachengzhi_2_ = Math.floor(jinengjiachengzhi_2_);
                        var suijishu = Math.floor(Math.random() * 100);
                        if (suijishu <= jinengjiachengzhi_2_) {
                            this.chufachenmo_2_ = "1";
                        }
                    }
                    else if (this.caidejineng4_0 == "20018") {
                        jinengjiachengzhi_2_ = parseInt(Gerenshuxing.jinengbiao[j].chushizhi) + this.zuizhongtianzhi_0 * parseFloat(Gerenshuxing.jinengbiao[j].jiacheng);
                        jinengjiachengzhi_2_ = Math.floor(jinengjiachengzhi_2_);
                        this.chufahuixue_2_ = "" + jinengjiachengzhi_2_;
                    }
                    else if (this.caidejineng4_0 == "20019") {
                        jinengjiachengzhi_2_ = parseInt(Gerenshuxing.jinengbiao[j].chushizhi) + this.zuizhongsuanzhi_0 * parseFloat(Gerenshuxing.jinengbiao[j].jiacheng);
                        jinengjiachengzhi_2_ = Math.floor(jinengjiachengzhi_2_);
                        this.chufaquanhushi_2_ = "" + jinengjiachengzhi_2_;
                    }
                    else if (this.caidejineng4_0 == "20020") {
                        this.chufahuiling_2_ = "1";
                    }
                    else if (this.caidejineng4_0 == "20021") {
                        jinengjiachengzhi_2_ = parseInt(Gerenshuxing.jinengbiao[j].chushizhi) + this.zuizhongsuanzhi_0 * parseFloat(Gerenshuxing.jinengbiao[j].jiacheng);
                        jinengjiachengzhi_2_ = Math.floor(jinengjiachengzhi_2_);
                        this.chufadu_2_ = "" + jinengjiachengzhi_2_;
                    }
                    else if (this.caidejineng4_0 == "20022") {
                        jinengjiachengzhi_2_ = parseInt(Gerenshuxing.jinengbiao[j].chushizhi) + this.zuizhongmazhi_0 * parseFloat(Gerenshuxing.jinengbiao[j].jiacheng);
                        jinengjiachengzhi_2_ = Math.floor(jinengjiachengzhi_2_);
                        this.chufaxuruo_2_ = "" + jinengjiachengzhi_2_;
                    }
                    else if (this.caidejineng4_0 == "20023") {
                        jinengjiachengzhi_2_ = parseInt(Gerenshuxing.jinengbiao[j].chushizhi) + this.zuizhongtianzhi_0 * parseFloat(Gerenshuxing.jinengbiao[j].jiacheng);
                        jinengjiachengzhi_2_ = Math.floor(jinengjiachengzhi_2_);
                        this.chufajiafang_2_ = "" + jinengjiachengzhi_2_;
                    }
                    else if (this.caidejineng4_0 == "20024") {
                        jinengjiachengzhi_2_ = parseInt(Gerenshuxing.jinengbiao[j].chushizhi) + this.zuizhonglazhi_0 * parseFloat(Gerenshuxing.jinengbiao[j].jiacheng);
                        jinengjiachengzhi_2_ = Math.floor(jinengjiachengzhi_2_);
                        this.chufajiasu_2_ = "" + jinengjiachengzhi_2_;
                    }
                    else if (this.caidejineng4_0 == "20025") {
                        this.chufajianxue_2_ = "1";
                    }
                    else if (this.caidejineng4_0 == "20026") {
                        this.chufajiangong_2_ = "1";
                    }
                    else if (this.caidejineng4_0 == "20027") {
                        this.chufawofangjiansu_2_ = "1";
                    }
                }
            }
        }
        //计算菜品技能2///
        if (this.caidejineng5_0 != "0") {
            for (var j = 0; j < Gerenshuxing.jinengbiao.length; j++) {
                if (Gerenshuxing.jinengbiao[j].id == this.caidejineng5_0) {
                    var jinengjiachengzhi_2_ = 0;
                    if (this.caidejineng5_0 == "20001") {
                        jinengjiachengzhi_2_ = parseInt(Gerenshuxing.jinengbiao[j].chushizhi) + this.zuizhonglazhi_0 * parseFloat(Gerenshuxing.jinengbiao[j].jiacheng);
                        jinengjiachengzhi_2_ = Math.floor(jinengjiachengzhi_2_);
                        var suijishu = Math.floor(Math.random() * 100);
                        if (suijishu <= jinengjiachengzhi_2_) {
                            this.chufalianji_2_ = "1";
                        }
                    }
                    else if (this.caidejineng5_0 == "20002") {
                        jinengjiachengzhi_2_ = parseInt(Gerenshuxing.jinengbiao[j].chushizhi) + this.zuizhonglazhi_0 * parseFloat(Gerenshuxing.jinengbiao[j].jiacheng);
                        jinengjiachengzhi_2_ = Math.floor(jinengjiachengzhi_2_);
                        var suijishu = Math.floor(Math.random() * 100);
                        if (suijishu <= jinengjiachengzhi_2_) {
                            this.chufalianji_2_ = "1";
                        }
                    }
                    else if (this.caidejineng5_0 == "20003") {
                        jinengjiachengzhi_2_ = parseInt(Gerenshuxing.jinengbiao[j].chushizhi) + this.zuizhonglazhi_0 * parseFloat(Gerenshuxing.jinengbiao[j].jiacheng);
                        jinengjiachengzhi_2_ = Math.floor(jinengjiachengzhi_2_);
                        this.chufabisha_2_ = "" + jinengjiachengzhi_2_;
                    }
                    else if (this.caidejineng5_0 == "20004") {
                        jinengjiachengzhi_2_ = parseInt(Gerenshuxing.jinengbiao[j].chushizhi) + this.zuizhonglazhi_0 * parseFloat(Gerenshuxing.jinengbiao[j].jiacheng);
                        jinengjiachengzhi_2_ = Math.floor(jinengjiachengzhi_2_);
                        this.chufabisha_2_ = "" + jinengjiachengzhi_2_;
                    }
                    else if (this.caidejineng5_0 == "20005") {
                        jinengjiachengzhi_2_ = parseInt(Gerenshuxing.jinengbiao[j].chushizhi) + this.zuizhongtianzhi_0 * parseFloat(Gerenshuxing.jinengbiao[j].jiacheng);
                        jinengjiachengzhi_2_ = Math.floor(jinengjiachengzhi_2_);
                        this.chufaxixue_2_ = "" + jinengjiachengzhi_2_;
                    }
                    else if (this.caidejineng5_0 == "20006") {
                        jinengjiachengzhi_2_ = parseInt(Gerenshuxing.jinengbiao[j].chushizhi) + this.zuizhongtianzhi_0 * parseFloat(Gerenshuxing.jinengbiao[j].jiacheng);
                        jinengjiachengzhi_2_ = Math.floor(jinengjiachengzhi_2_);
                        this.chufaxixue_2_ = "" + jinengjiachengzhi_2_;
                    }
                    else if (this.caidejineng5_0 == "20007") {
                        this.chufazhuiji_2_ = "1";
                    }
                    else if (this.caidejineng5_0 == "20008") {
                        this.chufasane_2_ = "1";
                    }
                    else if (this.caidejineng5_0 == "20009") {
                        jinengjiachengzhi_2_ = parseInt(Gerenshuxing.jinengbiao[j].chushizhi) + this.zuizhonglazhi_0 * parseFloat(Gerenshuxing.jinengbiao[j].jiacheng);
                        jinengjiachengzhi_2_ = Math.floor(jinengjiachengzhi_2_);
                        this.chufahushila_2_ = "" + jinengjiachengzhi_2_;
                    }
                    else if (this.caidejineng5_0 == "20010") {
                        jinengjiachengzhi_2_ = parseInt(Gerenshuxing.jinengbiao[j].chushizhi) + this.zuizhongtianzhi_0 * parseFloat(Gerenshuxing.jinengbiao[j].jiacheng);
                        jinengjiachengzhi_2_ = Math.floor(jinengjiachengzhi_2_);
                        this.chufahushitian_2_ = "" + jinengjiachengzhi_2_;
                    }
                    else if (this.caidejineng5_0 == "20011") {
                        jinengjiachengzhi_2_ = parseInt(Gerenshuxing.jinengbiao[j].chushizhi) + this.zuizhongsuanzhi_0 * parseFloat(Gerenshuxing.jinengbiao[j].jiacheng);
                        jinengjiachengzhi_2_ = Math.floor(jinengjiachengzhi_2_);
                        this.chufahushisuan_2_ = "" + jinengjiachengzhi_2_;
                    }
                    else if (this.caidejineng5_0 == "20012") {
                        jinengjiachengzhi_2_ = parseInt(Gerenshuxing.jinengbiao[j].chushizhi) + this.zuizhongmazhi_0 * parseFloat(Gerenshuxing.jinengbiao[j].jiacheng);
                        jinengjiachengzhi_2_ = Math.floor(jinengjiachengzhi_2_);
                        this.chufahushima_2_ = "" + jinengjiachengzhi_2_;
                    }
                    else if (this.caidejineng5_0 == "20013") {
                        jinengjiachengzhi_2_ = parseInt(Gerenshuxing.jinengbiao[j].chushizhi) + this.zuizhongsuanzhi_0 * parseFloat(Gerenshuxing.jinengbiao[j].jiacheng);
                        jinengjiachengzhi_2_ = Math.floor(jinengjiachengzhi_2_);
                        this.chufazhenshe_2_ = "" + jinengjiachengzhi_2_;
                    }
                    else if (this.caidejineng5_0 == "20014") {
                        jinengjiachengzhi_2_ = parseInt(Gerenshuxing.jinengbiao[j].chushizhi) + this.zuizhongsuanzhi_0 * parseFloat(Gerenshuxing.jinengbiao[j].jiacheng);
                        jinengjiachengzhi_2_ = Math.floor(jinengjiachengzhi_2_);
                        this.chufaxilan_2_ = "" + jinengjiachengzhi_2_;
                    }
                    else if (this.caidejineng5_0 == "20015") {
                        jinengjiachengzhi_2_ = parseInt(Gerenshuxing.jinengbiao[j].chushizhi) + this.zuizhongsuanzhi_0 * parseFloat(Gerenshuxing.jinengbiao[j].jiacheng);
                        jinengjiachengzhi_2_ = Math.floor(jinengjiachengzhi_2_);
                        this.chufaxilan_2_ = "" + jinengjiachengzhi_2_;
                    }
                    else if (this.caidejineng5_0 == "20016") {
                        jinengjiachengzhi_2_ = parseInt(Gerenshuxing.jinengbiao[j].chushizhi) + this.zuizhongmazhi_0 * parseFloat(Gerenshuxing.jinengbiao[j].jiacheng);
                        jinengjiachengzhi_2_ = Math.floor(jinengjiachengzhi_2_);
                        this.chufajiansu_2_ = "" + jinengjiachengzhi_2_;
                    }
                    else if (this.caidejineng5_0 == "20017") {
                        jinengjiachengzhi_2_ = parseInt(Gerenshuxing.jinengbiao[j].chushizhi) + this.zuizhongmazhi_0 * parseFloat(Gerenshuxing.jinengbiao[j].jiacheng);
                        jinengjiachengzhi_2_ = Math.floor(jinengjiachengzhi_2_);
                        var suijishu = Math.floor(Math.random() * 100);
                        if (suijishu <= jinengjiachengzhi_2_) {
                            this.chufachenmo_2_ = "1";
                        }
                    }
                    else if (this.caidejineng5_0 == "20018") {
                        jinengjiachengzhi_2_ = parseInt(Gerenshuxing.jinengbiao[j].chushizhi) + this.zuizhongtianzhi_0 * parseFloat(Gerenshuxing.jinengbiao[j].jiacheng);
                        jinengjiachengzhi_2_ = Math.floor(jinengjiachengzhi_2_);
                        this.chufahuixue_2_ = "" + jinengjiachengzhi_2_;
                    }
                    else if (this.caidejineng5_0 == "20019") {
                        jinengjiachengzhi_2_ = parseInt(Gerenshuxing.jinengbiao[j].chushizhi) + this.zuizhongsuanzhi_0 * parseFloat(Gerenshuxing.jinengbiao[j].jiacheng);
                        jinengjiachengzhi_2_ = Math.floor(jinengjiachengzhi_2_);
                        this.chufaquanhushi_2_ = "" + jinengjiachengzhi_2_;
                    }
                    else if (this.caidejineng5_0 == "20020") {
                        this.chufahuiling_2_ = "1";
                    }
                    else if (this.caidejineng5_0 == "20021") {
                        jinengjiachengzhi_2_ = parseInt(Gerenshuxing.jinengbiao[j].chushizhi) + this.zuizhongsuanzhi_0 * parseFloat(Gerenshuxing.jinengbiao[j].jiacheng);
                        jinengjiachengzhi_2_ = Math.floor(jinengjiachengzhi_2_);
                        this.chufadu_2_ = "" + jinengjiachengzhi_2_;
                    }
                    else if (this.caidejineng5_0 == "20022") {
                        jinengjiachengzhi_2_ = parseInt(Gerenshuxing.jinengbiao[j].chushizhi) + this.zuizhongmazhi_0 * parseFloat(Gerenshuxing.jinengbiao[j].jiacheng);
                        jinengjiachengzhi_2_ = Math.floor(jinengjiachengzhi_2_);
                        this.chufaxuruo_2_ = "" + jinengjiachengzhi_2_;
                    }
                    else if (this.caidejineng5_0 == "20023") {
                        jinengjiachengzhi_2_ = parseInt(Gerenshuxing.jinengbiao[j].chushizhi) + this.zuizhongtianzhi_0 * parseFloat(Gerenshuxing.jinengbiao[j].jiacheng);
                        jinengjiachengzhi_2_ = Math.floor(jinengjiachengzhi_2_);
                        this.chufajiafang_2_ = "" + jinengjiachengzhi_2_;
                    }
                    else if (this.caidejineng5_0 == "20024") {
                        jinengjiachengzhi_2_ = parseInt(Gerenshuxing.jinengbiao[j].chushizhi) + this.zuizhonglazhi_0 * parseFloat(Gerenshuxing.jinengbiao[j].jiacheng);
                        jinengjiachengzhi_2_ = Math.floor(jinengjiachengzhi_2_);
                        this.chufajiasu_2_ = "" + jinengjiachengzhi_2_;
                    }
                    else if (this.caidejineng5_0 == "20025") {
                        this.chufajianxue_2_ = "1";
                    }
                    else if (this.caidejineng5_0 == "20026") {
                        this.chufajiangong_2_ = "1";
                    }
                    else if (this.caidejineng5_0 == "20027") {
                        this.chufawofangjiansu_2_ = "1";
                    }
                }
            }
        }
        this.duiguai2shanghai();
    };
    //队怪物3使用技能判断
    Pvpzhandoujiemian.prototype.duiguai3jineng = function () {
        //初始化触发技能数据
        this.chufalianji_3_ = "0"; //触发连击
        this.chufabisha_3_ = "0"; //触发必杀
        this.chufaxixue_3_ = "0"; //触发吸血
        this.chufazhuiji_3_ = "0"; //触发追击
        this.chufasane_3_ = "0"; //触发善恶
        this.chufahushila_3_ = "0"; //触发忽视辣
        this.chufahushima_3_ = "0"; //触发忽视麻
        this.chufahushisuan_3_ = "0"; //触发忽视酸
        this.chufahushitian_3_ = "0"; //触发忽视甜
        this.chufazhenshe_3_ = "0"; //触发震慑
        this.chufaxilan_3_ = "0"; //触发吸蓝
        this.chufajiansu_3_ = "0"; //触发减速
        this.chufachenmo_3_ = "0"; //触发沉默
        this.chufahuixue_3_ = "0"; //触发回血
        this.chufaquanhushi_3_ = "0"; //触发全忽视
        this.chufahuiling_3_ = "0"; //触发回灵
        this.chufadu_3_ = "0"; //触发毒
        this.chufaxuruo_3_ = "0"; //触发虚弱
        this.chufajiafang_3_ = "0"; //触发加防
        this.chufajiasu_3_ = "0"; //触发加速
        this.chufajianxue_3_ = "0"; //触发给我放见血
        this.chufajiangong_3_ = "0"; //触发给我方减攻
        this.chufawofangjiansu_3_ = "0"; //触发给我方减速
        //进入正式计算
        if (this.caidejineng1_0 != "0") {
            for (var j = 0; j < Gerenshuxing.jinengbiao.length; j++) {
                if (Gerenshuxing.jinengbiao[j].id == this.caidejineng1_0) {
                    var jinengjiachengzhi_3_ = 0;
                    if (this.caidejineng1_0 == "20001") {
                        jinengjiachengzhi_3_ = parseInt(Gerenshuxing.jinengbiao[j].chushizhi) + this.zuizhonglazhi_0 * parseFloat(Gerenshuxing.jinengbiao[j].jiacheng);
                        jinengjiachengzhi_3_ = Math.floor(jinengjiachengzhi_3_);
                        var suijishu = Math.floor(Math.random() * 100);
                        if (suijishu <= jinengjiachengzhi_3_) {
                            this.chufalianji_3_ = "1";
                        }
                    }
                    else if (this.caidejineng1_0 == "20002") {
                        jinengjiachengzhi_3_ = parseInt(Gerenshuxing.jinengbiao[j].chushizhi) + this.zuizhonglazhi_0 * parseFloat(Gerenshuxing.jinengbiao[j].jiacheng);
                        jinengjiachengzhi_3_ = Math.floor(jinengjiachengzhi_3_);
                        var suijishu = Math.floor(Math.random() * 100);
                        if (suijishu <= jinengjiachengzhi_3_) {
                            this.chufalianji_3_ = "1";
                        }
                    }
                    else if (this.caidejineng1_0 == "20003") {
                        jinengjiachengzhi_3_ = parseInt(Gerenshuxing.jinengbiao[j].chushizhi) + this.zuizhonglazhi_0 * parseFloat(Gerenshuxing.jinengbiao[j].jiacheng);
                        jinengjiachengzhi_3_ = Math.floor(jinengjiachengzhi_3_);
                        this.chufabisha_3_ = "" + jinengjiachengzhi_3_;
                    }
                    else if (this.caidejineng1_0 == "20004") {
                        jinengjiachengzhi_3_ = parseInt(Gerenshuxing.jinengbiao[j].chushizhi) + this.zuizhonglazhi_0 * parseFloat(Gerenshuxing.jinengbiao[j].jiacheng);
                        jinengjiachengzhi_3_ = Math.floor(jinengjiachengzhi_3_);
                        this.chufabisha_3_ = "" + jinengjiachengzhi_3_;
                    }
                    else if (this.caidejineng1_0 == "20005") {
                        jinengjiachengzhi_3_ = parseInt(Gerenshuxing.jinengbiao[j].chushizhi) + this.zuizhongtianzhi_0 * parseFloat(Gerenshuxing.jinengbiao[j].jiacheng);
                        jinengjiachengzhi_3_ = Math.floor(jinengjiachengzhi_3_);
                        this.chufaxixue_3_ = "" + jinengjiachengzhi_3_;
                    }
                    else if (this.caidejineng1_0 == "20006") {
                        jinengjiachengzhi_3_ = parseInt(Gerenshuxing.jinengbiao[j].chushizhi) + this.zuizhongtianzhi_0 * parseFloat(Gerenshuxing.jinengbiao[j].jiacheng);
                        jinengjiachengzhi_3_ = Math.floor(jinengjiachengzhi_3_);
                        this.chufaxixue_3_ = "" + jinengjiachengzhi_3_;
                    }
                    else if (this.caidejineng1_0 == "20007") {
                        this.chufazhuiji_3_ = "1";
                    }
                    else if (this.caidejineng1_0 == "20008") {
                        this.chufasane_3_ = "1";
                    }
                    else if (this.caidejineng1_0 == "20009") {
                        jinengjiachengzhi_3_ = parseInt(Gerenshuxing.jinengbiao[j].chushizhi) + this.zuizhonglazhi_0 * parseFloat(Gerenshuxing.jinengbiao[j].jiacheng);
                        jinengjiachengzhi_3_ = Math.floor(jinengjiachengzhi_3_);
                        this.chufahushila_3_ = "" + jinengjiachengzhi_3_;
                    }
                    else if (this.caidejineng1_0 == "20010") {
                        jinengjiachengzhi_3_ = parseInt(Gerenshuxing.jinengbiao[j].chushizhi) + this.zuizhongtianzhi_0 * parseFloat(Gerenshuxing.jinengbiao[j].jiacheng);
                        jinengjiachengzhi_3_ = Math.floor(jinengjiachengzhi_3_);
                        this.chufahushitian_3_ = "" + jinengjiachengzhi_3_;
                    }
                    else if (this.caidejineng1_0 == "20011") {
                        jinengjiachengzhi_3_ = parseInt(Gerenshuxing.jinengbiao[j].chushizhi) + this.zuizhongsuanzhi_0 * parseFloat(Gerenshuxing.jinengbiao[j].jiacheng);
                        jinengjiachengzhi_3_ = Math.floor(jinengjiachengzhi_3_);
                        this.chufahushisuan_3_ = "" + jinengjiachengzhi_3_;
                    }
                    else if (this.caidejineng1_0 == "20012") {
                        jinengjiachengzhi_3_ = parseInt(Gerenshuxing.jinengbiao[j].chushizhi) + this.zuizhongmazhi_0 * parseFloat(Gerenshuxing.jinengbiao[j].jiacheng);
                        jinengjiachengzhi_3_ = Math.floor(jinengjiachengzhi_3_);
                        this.chufahushima_3_ = "" + jinengjiachengzhi_3_;
                    }
                    else if (this.caidejineng1_0 == "20013") {
                        jinengjiachengzhi_3_ = parseInt(Gerenshuxing.jinengbiao[j].chushizhi) + this.zuizhongsuanzhi_0 * parseFloat(Gerenshuxing.jinengbiao[j].jiacheng);
                        jinengjiachengzhi_3_ = Math.floor(jinengjiachengzhi_3_);
                        this.chufazhenshe_3_ = "" + jinengjiachengzhi_3_;
                    }
                    else if (this.caidejineng1_0 == "20014") {
                        jinengjiachengzhi_3_ = parseInt(Gerenshuxing.jinengbiao[j].chushizhi) + this.zuizhongsuanzhi_0 * parseFloat(Gerenshuxing.jinengbiao[j].jiacheng);
                        jinengjiachengzhi_3_ = Math.floor(jinengjiachengzhi_3_);
                        this.chufaxilan_3_ = "" + jinengjiachengzhi_3_;
                    }
                    else if (this.caidejineng1_0 == "20015") {
                        jinengjiachengzhi_3_ = parseInt(Gerenshuxing.jinengbiao[j].chushizhi) + this.zuizhongsuanzhi_0 * parseFloat(Gerenshuxing.jinengbiao[j].jiacheng);
                        jinengjiachengzhi_3_ = Math.floor(jinengjiachengzhi_3_);
                        this.chufaxilan_3_ = "" + jinengjiachengzhi_3_;
                    }
                    else if (this.caidejineng1_0 == "20016") {
                        jinengjiachengzhi_3_ = parseInt(Gerenshuxing.jinengbiao[j].chushizhi) + this.zuizhongmazhi_0 * parseFloat(Gerenshuxing.jinengbiao[j].jiacheng);
                        jinengjiachengzhi_3_ = Math.floor(jinengjiachengzhi_3_);
                        this.chufajiansu_3_ = "" + jinengjiachengzhi_3_;
                    }
                    else if (this.caidejineng1_0 == "20017") {
                        jinengjiachengzhi_3_ = parseInt(Gerenshuxing.jinengbiao[j].chushizhi) + this.zuizhongmazhi_0 * parseFloat(Gerenshuxing.jinengbiao[j].jiacheng);
                        jinengjiachengzhi_3_ = Math.floor(jinengjiachengzhi_3_);
                        var suijishu = Math.floor(Math.random() * 100);
                        if (suijishu <= jinengjiachengzhi_3_) {
                            this.chufachenmo_3_ = "1";
                        }
                    }
                    else if (this.caidejineng1_0 == "20018") {
                        jinengjiachengzhi_3_ = parseInt(Gerenshuxing.jinengbiao[j].chushizhi) + this.zuizhongtianzhi_0 * parseFloat(Gerenshuxing.jinengbiao[j].jiacheng);
                        jinengjiachengzhi_3_ = Math.floor(jinengjiachengzhi_3_);
                        this.chufahuixue_3_ = "" + jinengjiachengzhi_3_;
                    }
                    else if (this.caidejineng1_0 == "20019") {
                        jinengjiachengzhi_3_ = parseInt(Gerenshuxing.jinengbiao[j].chushizhi) + this.zuizhongsuanzhi_0 * parseFloat(Gerenshuxing.jinengbiao[j].jiacheng);
                        jinengjiachengzhi_3_ = Math.floor(jinengjiachengzhi_3_);
                        this.chufaquanhushi_3_ = "" + jinengjiachengzhi_3_;
                    }
                    else if (this.caidejineng1_0 == "20020") {
                        this.chufahuiling_3_ = "1";
                    }
                    else if (this.caidejineng1_0 == "20021") {
                        jinengjiachengzhi_3_ = parseInt(Gerenshuxing.jinengbiao[j].chushizhi) + this.zuizhongsuanzhi_0 * parseFloat(Gerenshuxing.jinengbiao[j].jiacheng);
                        jinengjiachengzhi_3_ = Math.floor(jinengjiachengzhi_3_);
                        this.chufadu_3_ = "" + jinengjiachengzhi_3_;
                    }
                    else if (this.caidejineng1_0 == "20022") {
                        jinengjiachengzhi_3_ = parseInt(Gerenshuxing.jinengbiao[j].chushizhi) + this.zuizhongmazhi_0 * parseFloat(Gerenshuxing.jinengbiao[j].jiacheng);
                        jinengjiachengzhi_3_ = Math.floor(jinengjiachengzhi_3_);
                        this.chufaxuruo_3_ = "" + jinengjiachengzhi_3_;
                    }
                    else if (this.caidejineng1_0 == "20023") {
                        jinengjiachengzhi_3_ = parseInt(Gerenshuxing.jinengbiao[j].chushizhi) + this.zuizhongtianzhi_0 * parseFloat(Gerenshuxing.jinengbiao[j].jiacheng);
                        jinengjiachengzhi_3_ = Math.floor(jinengjiachengzhi_3_);
                        this.chufajiafang_3_ = "" + jinengjiachengzhi_3_;
                    }
                    else if (this.caidejineng1_0 == "20024") {
                        jinengjiachengzhi_3_ = parseInt(Gerenshuxing.jinengbiao[j].chushizhi) + this.zuizhonglazhi_0 * parseFloat(Gerenshuxing.jinengbiao[j].jiacheng);
                        jinengjiachengzhi_3_ = Math.floor(jinengjiachengzhi_3_);
                        this.chufajiasu_3_ = "" + jinengjiachengzhi_3_;
                    }
                    else if (this.caidejineng1_0 == "20025") {
                        this.chufajianxue_3_ = "1";
                    }
                    else if (this.caidejineng1_0 == "20026") {
                        this.chufajiangong_3_ = "1";
                    }
                    else if (this.caidejineng1_0 == "20027") {
                        this.chufawofangjiansu_3_ = "1";
                    }
                }
            }
        }
        //计算菜品技能2///
        if (this.caidejineng2_0 != "0") {
            for (var j = 0; j < Gerenshuxing.jinengbiao.length; j++) {
                if (Gerenshuxing.jinengbiao[j].id == this.caidejineng2_0) {
                    var jinengjiachengzhi_3_ = 0;
                    if (this.caidejineng2_0 == "20001") {
                        jinengjiachengzhi_3_ = parseInt(Gerenshuxing.jinengbiao[j].chushizhi) + this.zuizhonglazhi_0 * parseFloat(Gerenshuxing.jinengbiao[j].jiacheng);
                        jinengjiachengzhi_3_ = Math.floor(jinengjiachengzhi_3_);
                        var suijishu = Math.floor(Math.random() * 100);
                        if (suijishu <= jinengjiachengzhi_3_) {
                            this.chufalianji_3_ = "1";
                        }
                    }
                    else if (this.caidejineng2_0 == "20002") {
                        jinengjiachengzhi_3_ = parseInt(Gerenshuxing.jinengbiao[j].chushizhi) + this.zuizhonglazhi_0 * parseFloat(Gerenshuxing.jinengbiao[j].jiacheng);
                        jinengjiachengzhi_3_ = Math.floor(jinengjiachengzhi_3_);
                        var suijishu = Math.floor(Math.random() * 100);
                        if (suijishu <= jinengjiachengzhi_3_) {
                            this.chufalianji_3_ = "1";
                        }
                    }
                    else if (this.caidejineng2_0 == "20003") {
                        jinengjiachengzhi_3_ = parseInt(Gerenshuxing.jinengbiao[j].chushizhi) + this.zuizhonglazhi_0 * parseFloat(Gerenshuxing.jinengbiao[j].jiacheng);
                        jinengjiachengzhi_3_ = Math.floor(jinengjiachengzhi_3_);
                        this.chufabisha_3_ = "" + jinengjiachengzhi_3_;
                    }
                    else if (this.caidejineng2_0 == "20004") {
                        jinengjiachengzhi_3_ = parseInt(Gerenshuxing.jinengbiao[j].chushizhi) + this.zuizhonglazhi_0 * parseFloat(Gerenshuxing.jinengbiao[j].jiacheng);
                        jinengjiachengzhi_3_ = Math.floor(jinengjiachengzhi_3_);
                        this.chufabisha_3_ = "" + jinengjiachengzhi_3_;
                    }
                    else if (this.caidejineng2_0 == "20005") {
                        jinengjiachengzhi_3_ = parseInt(Gerenshuxing.jinengbiao[j].chushizhi) + this.zuizhongtianzhi_0 * parseFloat(Gerenshuxing.jinengbiao[j].jiacheng);
                        jinengjiachengzhi_3_ = Math.floor(jinengjiachengzhi_3_);
                        this.chufaxixue_3_ = "" + jinengjiachengzhi_3_;
                    }
                    else if (this.caidejineng2_0 == "20006") {
                        jinengjiachengzhi_3_ = parseInt(Gerenshuxing.jinengbiao[j].chushizhi) + this.zuizhongtianzhi_0 * parseFloat(Gerenshuxing.jinengbiao[j].jiacheng);
                        jinengjiachengzhi_3_ = Math.floor(jinengjiachengzhi_3_);
                        this.chufaxixue_3_ = "" + jinengjiachengzhi_3_;
                    }
                    else if (this.caidejineng2_0 == "20007") {
                        this.chufazhuiji_3_ = "1";
                    }
                    else if (this.caidejineng2_0 == "20008") {
                        this.chufasane_3_ = "1";
                    }
                    else if (this.caidejineng2_0 == "20009") {
                        jinengjiachengzhi_3_ = parseInt(Gerenshuxing.jinengbiao[j].chushizhi) + this.zuizhonglazhi_0 * parseFloat(Gerenshuxing.jinengbiao[j].jiacheng);
                        jinengjiachengzhi_3_ = Math.floor(jinengjiachengzhi_3_);
                        this.chufahushila_3_ = "" + jinengjiachengzhi_3_;
                    }
                    else if (this.caidejineng2_0 == "20010") {
                        jinengjiachengzhi_3_ = parseInt(Gerenshuxing.jinengbiao[j].chushizhi) + this.zuizhongtianzhi_0 * parseFloat(Gerenshuxing.jinengbiao[j].jiacheng);
                        jinengjiachengzhi_3_ = Math.floor(jinengjiachengzhi_3_);
                        this.chufahushitian_3_ = "" + jinengjiachengzhi_3_;
                    }
                    else if (this.caidejineng2_0 == "20011") {
                        jinengjiachengzhi_3_ = parseInt(Gerenshuxing.jinengbiao[j].chushizhi) + this.zuizhongsuanzhi_0 * parseFloat(Gerenshuxing.jinengbiao[j].jiacheng);
                        jinengjiachengzhi_3_ = Math.floor(jinengjiachengzhi_3_);
                        this.chufahushisuan_3_ = "" + jinengjiachengzhi_3_;
                    }
                    else if (this.caidejineng2_0 == "20012") {
                        jinengjiachengzhi_3_ = parseInt(Gerenshuxing.jinengbiao[j].chushizhi) + this.zuizhongmazhi_0 * parseFloat(Gerenshuxing.jinengbiao[j].jiacheng);
                        jinengjiachengzhi_3_ = Math.floor(jinengjiachengzhi_3_);
                        this.chufahushima_3_ = "" + jinengjiachengzhi_3_;
                    }
                    else if (this.caidejineng2_0 == "20013") {
                        jinengjiachengzhi_3_ = parseInt(Gerenshuxing.jinengbiao[j].chushizhi) + this.zuizhongsuanzhi_0 * parseFloat(Gerenshuxing.jinengbiao[j].jiacheng);
                        jinengjiachengzhi_3_ = Math.floor(jinengjiachengzhi_3_);
                        this.chufazhenshe_3_ = "" + jinengjiachengzhi_3_;
                    }
                    else if (this.caidejineng2_0 == "20014") {
                        jinengjiachengzhi_3_ = parseInt(Gerenshuxing.jinengbiao[j].chushizhi) + this.zuizhongsuanzhi_0 * parseFloat(Gerenshuxing.jinengbiao[j].jiacheng);
                        jinengjiachengzhi_3_ = Math.floor(jinengjiachengzhi_3_);
                        this.chufaxilan_3_ = "" + jinengjiachengzhi_3_;
                    }
                    else if (this.caidejineng2_0 == "20015") {
                        jinengjiachengzhi_3_ = parseInt(Gerenshuxing.jinengbiao[j].chushizhi) + this.zuizhongsuanzhi_0 * parseFloat(Gerenshuxing.jinengbiao[j].jiacheng);
                        jinengjiachengzhi_3_ = Math.floor(jinengjiachengzhi_3_);
                        this.chufaxilan_3_ = "" + jinengjiachengzhi_3_;
                    }
                    else if (this.caidejineng2_0 == "20016") {
                        jinengjiachengzhi_3_ = parseInt(Gerenshuxing.jinengbiao[j].chushizhi) + this.zuizhongmazhi_0 * parseFloat(Gerenshuxing.jinengbiao[j].jiacheng);
                        jinengjiachengzhi_3_ = Math.floor(jinengjiachengzhi_3_);
                        this.chufajiansu_3_ = "" + jinengjiachengzhi_3_;
                    }
                    else if (this.caidejineng2_0 == "20017") {
                        jinengjiachengzhi_3_ = parseInt(Gerenshuxing.jinengbiao[j].chushizhi) + this.zuizhongmazhi_0 * parseFloat(Gerenshuxing.jinengbiao[j].jiacheng);
                        jinengjiachengzhi_3_ = Math.floor(jinengjiachengzhi_3_);
                        var suijishu = Math.floor(Math.random() * 100);
                        if (suijishu <= jinengjiachengzhi_3_) {
                            this.chufachenmo_3_ = "1";
                        }
                    }
                    else if (this.caidejineng2_0 == "20018") {
                        jinengjiachengzhi_3_ = parseInt(Gerenshuxing.jinengbiao[j].chushizhi) + this.zuizhongtianzhi_0 * parseFloat(Gerenshuxing.jinengbiao[j].jiacheng);
                        jinengjiachengzhi_3_ = Math.floor(jinengjiachengzhi_3_);
                        this.chufahuixue_3_ = "" + jinengjiachengzhi_3_;
                    }
                    else if (this.caidejineng2_0 == "20019") {
                        jinengjiachengzhi_3_ = parseInt(Gerenshuxing.jinengbiao[j].chushizhi) + this.zuizhongsuanzhi_0 * parseFloat(Gerenshuxing.jinengbiao[j].jiacheng);
                        jinengjiachengzhi_3_ = Math.floor(jinengjiachengzhi_3_);
                        this.chufaquanhushi_3_ = "" + jinengjiachengzhi_3_;
                    }
                    else if (this.caidejineng2_0 == "20020") {
                        this.chufahuiling_3_ = "1";
                    }
                    else if (this.caidejineng2_0 == "20021") {
                        jinengjiachengzhi_3_ = parseInt(Gerenshuxing.jinengbiao[j].chushizhi) + this.zuizhongsuanzhi_0 * parseFloat(Gerenshuxing.jinengbiao[j].jiacheng);
                        jinengjiachengzhi_3_ = Math.floor(jinengjiachengzhi_3_);
                        this.chufadu_3_ = "" + jinengjiachengzhi_3_;
                    }
                    else if (this.caidejineng2_0 == "20022") {
                        jinengjiachengzhi_3_ = parseInt(Gerenshuxing.jinengbiao[j].chushizhi) + this.zuizhongmazhi_0 * parseFloat(Gerenshuxing.jinengbiao[j].jiacheng);
                        jinengjiachengzhi_3_ = Math.floor(jinengjiachengzhi_3_);
                        this.chufaxuruo_3_ = "" + jinengjiachengzhi_3_;
                    }
                    else if (this.caidejineng2_0 == "20023") {
                        jinengjiachengzhi_3_ = parseInt(Gerenshuxing.jinengbiao[j].chushizhi) + this.zuizhongtianzhi_0 * parseFloat(Gerenshuxing.jinengbiao[j].jiacheng);
                        jinengjiachengzhi_3_ = Math.floor(jinengjiachengzhi_3_);
                        this.chufajiafang_3_ = "" + jinengjiachengzhi_3_;
                    }
                    else if (this.caidejineng2_0 == "20024") {
                        jinengjiachengzhi_3_ = parseInt(Gerenshuxing.jinengbiao[j].chushizhi) + this.zuizhonglazhi_0 * parseFloat(Gerenshuxing.jinengbiao[j].jiacheng);
                        jinengjiachengzhi_3_ = Math.floor(jinengjiachengzhi_3_);
                        this.chufajiasu_3_ = "" + jinengjiachengzhi_3_;
                    }
                    else if (this.caidejineng2_0 == "20025") {
                        this.chufajianxue_3_ = "1";
                    }
                    else if (this.caidejineng2_0 == "20026") {
                        this.chufajiangong_3_ = "1";
                    }
                    else if (this.caidejineng2_0 == "20027") {
                        this.chufawofangjiansu_3_ = "1";
                    }
                }
            }
        }
        //计算菜品技能2///
        if (this.caidejineng3_0 != "0") {
            for (var j = 0; j < Gerenshuxing.jinengbiao.length; j++) {
                if (Gerenshuxing.jinengbiao[j].id == this.caidejineng3_0) {
                    var jinengjiachengzhi_3_ = 0;
                    if (this.caidejineng3_0 == "20001") {
                        jinengjiachengzhi_3_ = parseInt(Gerenshuxing.jinengbiao[j].chushizhi) + this.zuizhonglazhi_0 * parseFloat(Gerenshuxing.jinengbiao[j].jiacheng);
                        jinengjiachengzhi_3_ = Math.floor(jinengjiachengzhi_3_);
                        var suijishu = Math.floor(Math.random() * 100);
                        if (suijishu <= jinengjiachengzhi_3_) {
                            this.chufalianji_3_ = "1";
                        }
                    }
                    else if (this.caidejineng3_0 == "20002") {
                        jinengjiachengzhi_3_ = parseInt(Gerenshuxing.jinengbiao[j].chushizhi) + this.zuizhonglazhi_0 * parseFloat(Gerenshuxing.jinengbiao[j].jiacheng);
                        jinengjiachengzhi_3_ = Math.floor(jinengjiachengzhi_3_);
                        var suijishu = Math.floor(Math.random() * 100);
                        if (suijishu <= jinengjiachengzhi_3_) {
                            this.chufalianji_3_ = "1";
                        }
                    }
                    else if (this.caidejineng3_0 == "20003") {
                        jinengjiachengzhi_3_ = parseInt(Gerenshuxing.jinengbiao[j].chushizhi) + this.zuizhonglazhi_0 * parseFloat(Gerenshuxing.jinengbiao[j].jiacheng);
                        jinengjiachengzhi_3_ = Math.floor(jinengjiachengzhi_3_);
                        this.chufabisha_3_ = "" + jinengjiachengzhi_3_;
                    }
                    else if (this.caidejineng3_0 == "20004") {
                        jinengjiachengzhi_3_ = parseInt(Gerenshuxing.jinengbiao[j].chushizhi) + this.zuizhonglazhi_0 * parseFloat(Gerenshuxing.jinengbiao[j].jiacheng);
                        jinengjiachengzhi_3_ = Math.floor(jinengjiachengzhi_3_);
                        this.chufabisha_3_ = "" + jinengjiachengzhi_3_;
                    }
                    else if (this.caidejineng3_0 == "20005") {
                        jinengjiachengzhi_3_ = parseInt(Gerenshuxing.jinengbiao[j].chushizhi) + this.zuizhongtianzhi_0 * parseFloat(Gerenshuxing.jinengbiao[j].jiacheng);
                        jinengjiachengzhi_3_ = Math.floor(jinengjiachengzhi_3_);
                        this.chufaxixue_3_ = "" + jinengjiachengzhi_3_;
                    }
                    else if (this.caidejineng3_0 == "20006") {
                        jinengjiachengzhi_3_ = parseInt(Gerenshuxing.jinengbiao[j].chushizhi) + this.zuizhongtianzhi_0 * parseFloat(Gerenshuxing.jinengbiao[j].jiacheng);
                        jinengjiachengzhi_3_ = Math.floor(jinengjiachengzhi_3_);
                        this.chufaxixue_3_ = "" + jinengjiachengzhi_3_;
                    }
                    else if (this.caidejineng3_0 == "20007") {
                        this.chufazhuiji_3_ = "1";
                    }
                    else if (this.caidejineng3_0 == "20008") {
                        this.chufasane_3_ = "1";
                    }
                    else if (this.caidejineng3_0 == "20009") {
                        jinengjiachengzhi_3_ = parseInt(Gerenshuxing.jinengbiao[j].chushizhi) + this.zuizhonglazhi_0 * parseFloat(Gerenshuxing.jinengbiao[j].jiacheng);
                        jinengjiachengzhi_3_ = Math.floor(jinengjiachengzhi_3_);
                        this.chufahushila_3_ = "" + jinengjiachengzhi_3_;
                    }
                    else if (this.caidejineng3_0 == "20010") {
                        jinengjiachengzhi_3_ = parseInt(Gerenshuxing.jinengbiao[j].chushizhi) + this.zuizhongtianzhi_0 * parseFloat(Gerenshuxing.jinengbiao[j].jiacheng);
                        jinengjiachengzhi_3_ = Math.floor(jinengjiachengzhi_3_);
                        this.chufahushitian_3_ = "" + jinengjiachengzhi_3_;
                    }
                    else if (this.caidejineng3_0 == "20011") {
                        jinengjiachengzhi_3_ = parseInt(Gerenshuxing.jinengbiao[j].chushizhi) + this.zuizhongsuanzhi_0 * parseFloat(Gerenshuxing.jinengbiao[j].jiacheng);
                        jinengjiachengzhi_3_ = Math.floor(jinengjiachengzhi_3_);
                        this.chufahushisuan_3_ = "" + jinengjiachengzhi_3_;
                    }
                    else if (this.caidejineng3_0 == "20012") {
                        jinengjiachengzhi_3_ = parseInt(Gerenshuxing.jinengbiao[j].chushizhi) + this.zuizhongmazhi_0 * parseFloat(Gerenshuxing.jinengbiao[j].jiacheng);
                        jinengjiachengzhi_3_ = Math.floor(jinengjiachengzhi_3_);
                        this.chufahushima_3_ = "" + jinengjiachengzhi_3_;
                    }
                    else if (this.caidejineng3_0 == "20013") {
                        jinengjiachengzhi_3_ = parseInt(Gerenshuxing.jinengbiao[j].chushizhi) + this.zuizhongsuanzhi_0 * parseFloat(Gerenshuxing.jinengbiao[j].jiacheng);
                        jinengjiachengzhi_3_ = Math.floor(jinengjiachengzhi_3_);
                        this.chufazhenshe_3_ = "" + jinengjiachengzhi_3_;
                    }
                    else if (this.caidejineng3_0 == "20014") {
                        jinengjiachengzhi_3_ = parseInt(Gerenshuxing.jinengbiao[j].chushizhi) + this.zuizhongsuanzhi_0 * parseFloat(Gerenshuxing.jinengbiao[j].jiacheng);
                        jinengjiachengzhi_3_ = Math.floor(jinengjiachengzhi_3_);
                        this.chufaxilan_3_ = "" + jinengjiachengzhi_3_;
                    }
                    else if (this.caidejineng3_0 == "20015") {
                        jinengjiachengzhi_3_ = parseInt(Gerenshuxing.jinengbiao[j].chushizhi) + this.zuizhongsuanzhi_0 * parseFloat(Gerenshuxing.jinengbiao[j].jiacheng);
                        jinengjiachengzhi_3_ = Math.floor(jinengjiachengzhi_3_);
                        this.chufaxilan_3_ = "" + jinengjiachengzhi_3_;
                    }
                    else if (this.caidejineng3_0 == "20016") {
                        jinengjiachengzhi_3_ = parseInt(Gerenshuxing.jinengbiao[j].chushizhi) + this.zuizhongmazhi_0 * parseFloat(Gerenshuxing.jinengbiao[j].jiacheng);
                        jinengjiachengzhi_3_ = Math.floor(jinengjiachengzhi_3_);
                        this.chufajiansu_3_ = "" + jinengjiachengzhi_3_;
                    }
                    else if (this.caidejineng3_0 == "20017") {
                        jinengjiachengzhi_3_ = parseInt(Gerenshuxing.jinengbiao[j].chushizhi) + this.zuizhongmazhi_0 * parseFloat(Gerenshuxing.jinengbiao[j].jiacheng);
                        jinengjiachengzhi_3_ = Math.floor(jinengjiachengzhi_3_);
                        var suijishu = Math.floor(Math.random() * 100);
                        if (suijishu <= jinengjiachengzhi_3_) {
                            this.chufachenmo_3_ = "1";
                        }
                    }
                    else if (this.caidejineng3_0 == "20018") {
                        jinengjiachengzhi_3_ = parseInt(Gerenshuxing.jinengbiao[j].chushizhi) + this.zuizhongtianzhi_0 * parseFloat(Gerenshuxing.jinengbiao[j].jiacheng);
                        jinengjiachengzhi_3_ = Math.floor(jinengjiachengzhi_3_);
                        this.chufahuixue_3_ = "" + jinengjiachengzhi_3_;
                    }
                    else if (this.caidejineng3_0 == "20019") {
                        jinengjiachengzhi_3_ = parseInt(Gerenshuxing.jinengbiao[j].chushizhi) + this.zuizhongsuanzhi_0 * parseFloat(Gerenshuxing.jinengbiao[j].jiacheng);
                        jinengjiachengzhi_3_ = Math.floor(jinengjiachengzhi_3_);
                        this.chufaquanhushi_3_ = "" + jinengjiachengzhi_3_;
                    }
                    else if (this.caidejineng3_0 == "20020") {
                        this.chufahuiling_3_ = "1";
                    }
                    else if (this.caidejineng3_0 == "20021") {
                        jinengjiachengzhi_3_ = parseInt(Gerenshuxing.jinengbiao[j].chushizhi) + this.zuizhongsuanzhi_0 * parseFloat(Gerenshuxing.jinengbiao[j].jiacheng);
                        jinengjiachengzhi_3_ = Math.floor(jinengjiachengzhi_3_);
                        this.chufadu_3_ = "" + jinengjiachengzhi_3_;
                    }
                    else if (this.caidejineng3_0 == "20022") {
                        jinengjiachengzhi_3_ = parseInt(Gerenshuxing.jinengbiao[j].chushizhi) + this.zuizhongmazhi_0 * parseFloat(Gerenshuxing.jinengbiao[j].jiacheng);
                        jinengjiachengzhi_3_ = Math.floor(jinengjiachengzhi_3_);
                        this.chufaxuruo_3_ = "" + jinengjiachengzhi_3_;
                    }
                    else if (this.caidejineng3_0 == "20023") {
                        jinengjiachengzhi_3_ = parseInt(Gerenshuxing.jinengbiao[j].chushizhi) + this.zuizhongtianzhi_0 * parseFloat(Gerenshuxing.jinengbiao[j].jiacheng);
                        jinengjiachengzhi_3_ = Math.floor(jinengjiachengzhi_3_);
                        this.chufajiafang_3_ = "" + jinengjiachengzhi_3_;
                    }
                    else if (this.caidejineng3_0 == "20024") {
                        jinengjiachengzhi_3_ = parseInt(Gerenshuxing.jinengbiao[j].chushizhi) + this.zuizhonglazhi_0 * parseFloat(Gerenshuxing.jinengbiao[j].jiacheng);
                        jinengjiachengzhi_3_ = Math.floor(jinengjiachengzhi_3_);
                        this.chufajiasu_3_ = "" + jinengjiachengzhi_3_;
                    }
                    else if (this.caidejineng3_0 == "20025") {
                        this.chufajianxue_3_ = "1";
                    }
                    else if (this.caidejineng3_0 == "20026") {
                        this.chufajiangong_3_ = "1";
                    }
                    else if (this.caidejineng3_0 == "20027") {
                        this.chufawofangjiansu_3_ = "1";
                    }
                }
            }
        }
        //计算菜品技能2///
        if (this.caidejineng4_0 != "0") {
            for (var j = 0; j < Gerenshuxing.jinengbiao.length; j++) {
                if (Gerenshuxing.jinengbiao[j].id == this.caidejineng4_0) {
                    var jinengjiachengzhi_3_ = 0;
                    if (this.caidejineng4_0 == "20001") {
                        jinengjiachengzhi_3_ = parseInt(Gerenshuxing.jinengbiao[j].chushizhi) + this.zuizhonglazhi_0 * parseFloat(Gerenshuxing.jinengbiao[j].jiacheng);
                        jinengjiachengzhi_3_ = Math.floor(jinengjiachengzhi_3_);
                        var suijishu = Math.floor(Math.random() * 100);
                        if (suijishu <= jinengjiachengzhi_3_) {
                            this.chufalianji_3_ = "1";
                        }
                    }
                    else if (this.caidejineng4_0 == "20002") {
                        jinengjiachengzhi_3_ = parseInt(Gerenshuxing.jinengbiao[j].chushizhi) + this.zuizhonglazhi_0 * parseFloat(Gerenshuxing.jinengbiao[j].jiacheng);
                        jinengjiachengzhi_3_ = Math.floor(jinengjiachengzhi_3_);
                        var suijishu = Math.floor(Math.random() * 100);
                        if (suijishu <= jinengjiachengzhi_3_) {
                            this.chufalianji_3_ = "1";
                        }
                    }
                    else if (this.caidejineng4_0 == "20003") {
                        jinengjiachengzhi_3_ = parseInt(Gerenshuxing.jinengbiao[j].chushizhi) + this.zuizhonglazhi_0 * parseFloat(Gerenshuxing.jinengbiao[j].jiacheng);
                        jinengjiachengzhi_3_ = Math.floor(jinengjiachengzhi_3_);
                        this.chufabisha_3_ = "" + jinengjiachengzhi_3_;
                    }
                    else if (this.caidejineng4_0 == "20004") {
                        jinengjiachengzhi_3_ = parseInt(Gerenshuxing.jinengbiao[j].chushizhi) + this.zuizhonglazhi_0 * parseFloat(Gerenshuxing.jinengbiao[j].jiacheng);
                        jinengjiachengzhi_3_ = Math.floor(jinengjiachengzhi_3_);
                        this.chufabisha_3_ = "" + jinengjiachengzhi_3_;
                    }
                    else if (this.caidejineng4_0 == "20005") {
                        jinengjiachengzhi_3_ = parseInt(Gerenshuxing.jinengbiao[j].chushizhi) + this.zuizhongtianzhi_0 * parseFloat(Gerenshuxing.jinengbiao[j].jiacheng);
                        jinengjiachengzhi_3_ = Math.floor(jinengjiachengzhi_3_);
                        this.chufaxixue_3_ = "" + jinengjiachengzhi_3_;
                    }
                    else if (this.caidejineng4_0 == "20006") {
                        jinengjiachengzhi_3_ = parseInt(Gerenshuxing.jinengbiao[j].chushizhi) + this.zuizhongtianzhi_0 * parseFloat(Gerenshuxing.jinengbiao[j].jiacheng);
                        jinengjiachengzhi_3_ = Math.floor(jinengjiachengzhi_3_);
                        this.chufaxixue_3_ = "" + jinengjiachengzhi_3_;
                    }
                    else if (this.caidejineng4_0 == "20007") {
                        this.chufazhuiji_3_ = "1";
                    }
                    else if (this.caidejineng4_0 == "20008") {
                        this.chufasane_3_ = "1";
                    }
                    else if (this.caidejineng4_0 == "20009") {
                        jinengjiachengzhi_3_ = parseInt(Gerenshuxing.jinengbiao[j].chushizhi) + this.zuizhonglazhi_0 * parseFloat(Gerenshuxing.jinengbiao[j].jiacheng);
                        jinengjiachengzhi_3_ = Math.floor(jinengjiachengzhi_3_);
                        this.chufahushila_3_ = "" + jinengjiachengzhi_3_;
                    }
                    else if (this.caidejineng4_0 == "20010") {
                        jinengjiachengzhi_3_ = parseInt(Gerenshuxing.jinengbiao[j].chushizhi) + this.zuizhongtianzhi_0 * parseFloat(Gerenshuxing.jinengbiao[j].jiacheng);
                        jinengjiachengzhi_3_ = Math.floor(jinengjiachengzhi_3_);
                        this.chufahushitian_3_ = "" + jinengjiachengzhi_3_;
                    }
                    else if (this.caidejineng4_0 == "20011") {
                        jinengjiachengzhi_3_ = parseInt(Gerenshuxing.jinengbiao[j].chushizhi) + this.zuizhongsuanzhi_0 * parseFloat(Gerenshuxing.jinengbiao[j].jiacheng);
                        jinengjiachengzhi_3_ = Math.floor(jinengjiachengzhi_3_);
                        this.chufahushisuan_3_ = "" + jinengjiachengzhi_3_;
                    }
                    else if (this.caidejineng4_0 == "20012") {
                        jinengjiachengzhi_3_ = parseInt(Gerenshuxing.jinengbiao[j].chushizhi) + this.zuizhongmazhi_0 * parseFloat(Gerenshuxing.jinengbiao[j].jiacheng);
                        jinengjiachengzhi_3_ = Math.floor(jinengjiachengzhi_3_);
                        this.chufahushima_3_ = "" + jinengjiachengzhi_3_;
                    }
                    else if (this.caidejineng4_0 == "20013") {
                        jinengjiachengzhi_3_ = parseInt(Gerenshuxing.jinengbiao[j].chushizhi) + this.zuizhongsuanzhi_0 * parseFloat(Gerenshuxing.jinengbiao[j].jiacheng);
                        jinengjiachengzhi_3_ = Math.floor(jinengjiachengzhi_3_);
                        this.chufazhenshe_3_ = "" + jinengjiachengzhi_3_;
                    }
                    else if (this.caidejineng4_0 == "20014") {
                        jinengjiachengzhi_3_ = parseInt(Gerenshuxing.jinengbiao[j].chushizhi) + this.zuizhongsuanzhi_0 * parseFloat(Gerenshuxing.jinengbiao[j].jiacheng);
                        jinengjiachengzhi_3_ = Math.floor(jinengjiachengzhi_3_);
                        this.chufaxilan_3_ = "" + jinengjiachengzhi_3_;
                    }
                    else if (this.caidejineng4_0 == "20015") {
                        jinengjiachengzhi_3_ = parseInt(Gerenshuxing.jinengbiao[j].chushizhi) + this.zuizhongsuanzhi_0 * parseFloat(Gerenshuxing.jinengbiao[j].jiacheng);
                        jinengjiachengzhi_3_ = Math.floor(jinengjiachengzhi_3_);
                        this.chufaxilan_3_ = "" + jinengjiachengzhi_3_;
                    }
                    else if (this.caidejineng4_0 == "20016") {
                        jinengjiachengzhi_3_ = parseInt(Gerenshuxing.jinengbiao[j].chushizhi) + this.zuizhongmazhi_0 * parseFloat(Gerenshuxing.jinengbiao[j].jiacheng);
                        jinengjiachengzhi_3_ = Math.floor(jinengjiachengzhi_3_);
                        this.chufajiansu_3_ = "" + jinengjiachengzhi_3_;
                    }
                    else if (this.caidejineng4_0 == "20017") {
                        jinengjiachengzhi_3_ = parseInt(Gerenshuxing.jinengbiao[j].chushizhi) + this.zuizhongmazhi_0 * parseFloat(Gerenshuxing.jinengbiao[j].jiacheng);
                        jinengjiachengzhi_3_ = Math.floor(jinengjiachengzhi_3_);
                        var suijishu = Math.floor(Math.random() * 100);
                        if (suijishu <= jinengjiachengzhi_3_) {
                            this.chufachenmo_3_ = "1";
                        }
                    }
                    else if (this.caidejineng4_0 == "20018") {
                        jinengjiachengzhi_3_ = parseInt(Gerenshuxing.jinengbiao[j].chushizhi) + this.zuizhongtianzhi_0 * parseFloat(Gerenshuxing.jinengbiao[j].jiacheng);
                        jinengjiachengzhi_3_ = Math.floor(jinengjiachengzhi_3_);
                        this.chufahuixue_3_ = "" + jinengjiachengzhi_3_;
                    }
                    else if (this.caidejineng4_0 == "20019") {
                        jinengjiachengzhi_3_ = parseInt(Gerenshuxing.jinengbiao[j].chushizhi) + this.zuizhongsuanzhi_0 * parseFloat(Gerenshuxing.jinengbiao[j].jiacheng);
                        jinengjiachengzhi_3_ = Math.floor(jinengjiachengzhi_3_);
                        this.chufaquanhushi_3_ = "" + jinengjiachengzhi_3_;
                    }
                    else if (this.caidejineng4_0 == "20020") {
                        this.chufahuiling_3_ = "1";
                    }
                    else if (this.caidejineng4_0 == "20021") {
                        jinengjiachengzhi_3_ = parseInt(Gerenshuxing.jinengbiao[j].chushizhi) + this.zuizhongsuanzhi_0 * parseFloat(Gerenshuxing.jinengbiao[j].jiacheng);
                        jinengjiachengzhi_3_ = Math.floor(jinengjiachengzhi_3_);
                        this.chufadu_3_ = "" + jinengjiachengzhi_3_;
                    }
                    else if (this.caidejineng4_0 == "20022") {
                        jinengjiachengzhi_3_ = parseInt(Gerenshuxing.jinengbiao[j].chushizhi) + this.zuizhongmazhi_0 * parseFloat(Gerenshuxing.jinengbiao[j].jiacheng);
                        jinengjiachengzhi_3_ = Math.floor(jinengjiachengzhi_3_);
                        this.chufaxuruo_3_ = "" + jinengjiachengzhi_3_;
                    }
                    else if (this.caidejineng4_0 == "20023") {
                        jinengjiachengzhi_3_ = parseInt(Gerenshuxing.jinengbiao[j].chushizhi) + this.zuizhongtianzhi_0 * parseFloat(Gerenshuxing.jinengbiao[j].jiacheng);
                        jinengjiachengzhi_3_ = Math.floor(jinengjiachengzhi_3_);
                        this.chufajiafang_3_ = "" + jinengjiachengzhi_3_;
                    }
                    else if (this.caidejineng4_0 == "20024") {
                        jinengjiachengzhi_3_ = parseInt(Gerenshuxing.jinengbiao[j].chushizhi) + this.zuizhonglazhi_0 * parseFloat(Gerenshuxing.jinengbiao[j].jiacheng);
                        jinengjiachengzhi_3_ = Math.floor(jinengjiachengzhi_3_);
                        this.chufajiasu_3_ = "" + jinengjiachengzhi_3_;
                    }
                    else if (this.caidejineng4_0 == "20025") {
                        this.chufajianxue_3_ = "1";
                    }
                    else if (this.caidejineng4_0 == "20026") {
                        this.chufajiangong_3_ = "1";
                    }
                    else if (this.caidejineng4_0 == "20027") {
                        this.chufawofangjiansu_3_ = "1";
                    }
                }
            }
        }
        //计算菜品技能2///
        if (this.caidejineng5_0 != "0") {
            for (var j = 0; j < Gerenshuxing.jinengbiao.length; j++) {
                if (Gerenshuxing.jinengbiao[j].id == this.caidejineng5_0) {
                    var jinengjiachengzhi_3_ = 0;
                    if (this.caidejineng5_0 == "20001") {
                        jinengjiachengzhi_3_ = parseInt(Gerenshuxing.jinengbiao[j].chushizhi) + this.zuizhonglazhi_0 * parseFloat(Gerenshuxing.jinengbiao[j].jiacheng);
                        jinengjiachengzhi_3_ = Math.floor(jinengjiachengzhi_3_);
                        var suijishu = Math.floor(Math.random() * 100);
                        if (suijishu <= jinengjiachengzhi_3_) {
                            this.chufalianji_3_ = "1";
                        }
                    }
                    else if (this.caidejineng5_0 == "20002") {
                        jinengjiachengzhi_3_ = parseInt(Gerenshuxing.jinengbiao[j].chushizhi) + this.zuizhonglazhi_0 * parseFloat(Gerenshuxing.jinengbiao[j].jiacheng);
                        jinengjiachengzhi_3_ = Math.floor(jinengjiachengzhi_3_);
                        var suijishu = Math.floor(Math.random() * 100);
                        if (suijishu <= jinengjiachengzhi_3_) {
                            this.chufalianji_3_ = "1";
                        }
                    }
                    else if (this.caidejineng5_0 == "20003") {
                        jinengjiachengzhi_3_ = parseInt(Gerenshuxing.jinengbiao[j].chushizhi) + this.zuizhonglazhi_0 * parseFloat(Gerenshuxing.jinengbiao[j].jiacheng);
                        jinengjiachengzhi_3_ = Math.floor(jinengjiachengzhi_3_);
                        this.chufabisha_3_ = "" + jinengjiachengzhi_3_;
                    }
                    else if (this.caidejineng5_0 == "20004") {
                        jinengjiachengzhi_3_ = parseInt(Gerenshuxing.jinengbiao[j].chushizhi) + this.zuizhonglazhi_0 * parseFloat(Gerenshuxing.jinengbiao[j].jiacheng);
                        jinengjiachengzhi_3_ = Math.floor(jinengjiachengzhi_3_);
                        this.chufabisha_3_ = "" + jinengjiachengzhi_3_;
                    }
                    else if (this.caidejineng5_0 == "20005") {
                        jinengjiachengzhi_3_ = parseInt(Gerenshuxing.jinengbiao[j].chushizhi) + this.zuizhongtianzhi_0 * parseFloat(Gerenshuxing.jinengbiao[j].jiacheng);
                        jinengjiachengzhi_3_ = Math.floor(jinengjiachengzhi_3_);
                        this.chufaxixue_3_ = "" + jinengjiachengzhi_3_;
                    }
                    else if (this.caidejineng5_0 == "20006") {
                        jinengjiachengzhi_3_ = parseInt(Gerenshuxing.jinengbiao[j].chushizhi) + this.zuizhongtianzhi_0 * parseFloat(Gerenshuxing.jinengbiao[j].jiacheng);
                        jinengjiachengzhi_3_ = Math.floor(jinengjiachengzhi_3_);
                        this.chufaxixue_3_ = "" + jinengjiachengzhi_3_;
                    }
                    else if (this.caidejineng5_0 == "20007") {
                        this.chufazhuiji_3_ = "1";
                    }
                    else if (this.caidejineng5_0 == "20008") {
                        this.chufasane_3_ = "1";
                    }
                    else if (this.caidejineng5_0 == "20009") {
                        jinengjiachengzhi_3_ = parseInt(Gerenshuxing.jinengbiao[j].chushizhi) + this.zuizhonglazhi_0 * parseFloat(Gerenshuxing.jinengbiao[j].jiacheng);
                        jinengjiachengzhi_3_ = Math.floor(jinengjiachengzhi_3_);
                        this.chufahushila_3_ = "" + jinengjiachengzhi_3_;
                    }
                    else if (this.caidejineng5_0 == "20010") {
                        jinengjiachengzhi_3_ = parseInt(Gerenshuxing.jinengbiao[j].chushizhi) + this.zuizhongtianzhi_0 * parseFloat(Gerenshuxing.jinengbiao[j].jiacheng);
                        jinengjiachengzhi_3_ = Math.floor(jinengjiachengzhi_3_);
                        this.chufahushitian_3_ = "" + jinengjiachengzhi_3_;
                    }
                    else if (this.caidejineng5_0 == "20011") {
                        jinengjiachengzhi_3_ = parseInt(Gerenshuxing.jinengbiao[j].chushizhi) + this.zuizhongsuanzhi_0 * parseFloat(Gerenshuxing.jinengbiao[j].jiacheng);
                        jinengjiachengzhi_3_ = Math.floor(jinengjiachengzhi_3_);
                        this.chufahushisuan_3_ = "" + jinengjiachengzhi_3_;
                    }
                    else if (this.caidejineng5_0 == "20012") {
                        jinengjiachengzhi_3_ = parseInt(Gerenshuxing.jinengbiao[j].chushizhi) + this.zuizhongmazhi_0 * parseFloat(Gerenshuxing.jinengbiao[j].jiacheng);
                        jinengjiachengzhi_3_ = Math.floor(jinengjiachengzhi_3_);
                        this.chufahushima_3_ = "" + jinengjiachengzhi_3_;
                    }
                    else if (this.caidejineng5_0 == "20013") {
                        jinengjiachengzhi_3_ = parseInt(Gerenshuxing.jinengbiao[j].chushizhi) + this.zuizhongsuanzhi_0 * parseFloat(Gerenshuxing.jinengbiao[j].jiacheng);
                        jinengjiachengzhi_3_ = Math.floor(jinengjiachengzhi_3_);
                        this.chufazhenshe_3_ = "" + jinengjiachengzhi_3_;
                    }
                    else if (this.caidejineng5_0 == "20014") {
                        jinengjiachengzhi_3_ = parseInt(Gerenshuxing.jinengbiao[j].chushizhi) + this.zuizhongsuanzhi_0 * parseFloat(Gerenshuxing.jinengbiao[j].jiacheng);
                        jinengjiachengzhi_3_ = Math.floor(jinengjiachengzhi_3_);
                        this.chufaxilan_3_ = "" + jinengjiachengzhi_3_;
                    }
                    else if (this.caidejineng5_0 == "20015") {
                        jinengjiachengzhi_3_ = parseInt(Gerenshuxing.jinengbiao[j].chushizhi) + this.zuizhongsuanzhi_0 * parseFloat(Gerenshuxing.jinengbiao[j].jiacheng);
                        jinengjiachengzhi_3_ = Math.floor(jinengjiachengzhi_3_);
                        this.chufaxilan_3_ = "" + jinengjiachengzhi_3_;
                    }
                    else if (this.caidejineng5_0 == "20016") {
                        jinengjiachengzhi_3_ = parseInt(Gerenshuxing.jinengbiao[j].chushizhi) + this.zuizhongmazhi_0 * parseFloat(Gerenshuxing.jinengbiao[j].jiacheng);
                        jinengjiachengzhi_3_ = Math.floor(jinengjiachengzhi_3_);
                        this.chufajiansu_3_ = "" + jinengjiachengzhi_3_;
                    }
                    else if (this.caidejineng5_0 == "20017") {
                        jinengjiachengzhi_3_ = parseInt(Gerenshuxing.jinengbiao[j].chushizhi) + this.zuizhongmazhi_0 * parseFloat(Gerenshuxing.jinengbiao[j].jiacheng);
                        jinengjiachengzhi_3_ = Math.floor(jinengjiachengzhi_3_);
                        var suijishu = Math.floor(Math.random() * 100);
                        if (suijishu <= jinengjiachengzhi_3_) {
                            this.chufachenmo_3_ = "1";
                        }
                    }
                    else if (this.caidejineng5_0 == "20018") {
                        jinengjiachengzhi_3_ = parseInt(Gerenshuxing.jinengbiao[j].chushizhi) + this.zuizhongtianzhi_0 * parseFloat(Gerenshuxing.jinengbiao[j].jiacheng);
                        jinengjiachengzhi_3_ = Math.floor(jinengjiachengzhi_3_);
                        this.chufahuixue_3_ = "" + jinengjiachengzhi_3_;
                    }
                    else if (this.caidejineng5_0 == "20019") {
                        jinengjiachengzhi_3_ = parseInt(Gerenshuxing.jinengbiao[j].chushizhi) + this.zuizhongsuanzhi_0 * parseFloat(Gerenshuxing.jinengbiao[j].jiacheng);
                        jinengjiachengzhi_3_ = Math.floor(jinengjiachengzhi_3_);
                        this.chufaquanhushi_3_ = "" + jinengjiachengzhi_3_;
                    }
                    else if (this.caidejineng5_0 == "20020") {
                        this.chufahuiling_3_ = "1";
                    }
                    else if (this.caidejineng5_0 == "20021") {
                        jinengjiachengzhi_3_ = parseInt(Gerenshuxing.jinengbiao[j].chushizhi) + this.zuizhongsuanzhi_0 * parseFloat(Gerenshuxing.jinengbiao[j].jiacheng);
                        jinengjiachengzhi_3_ = Math.floor(jinengjiachengzhi_3_);
                        this.chufadu_3_ = "" + jinengjiachengzhi_3_;
                    }
                    else if (this.caidejineng5_0 == "20022") {
                        jinengjiachengzhi_3_ = parseInt(Gerenshuxing.jinengbiao[j].chushizhi) + this.zuizhongmazhi_0 * parseFloat(Gerenshuxing.jinengbiao[j].jiacheng);
                        jinengjiachengzhi_3_ = Math.floor(jinengjiachengzhi_3_);
                        this.chufaxuruo_3_ = "" + jinengjiachengzhi_3_;
                    }
                    else if (this.caidejineng5_0 == "20023") {
                        jinengjiachengzhi_3_ = parseInt(Gerenshuxing.jinengbiao[j].chushizhi) + this.zuizhongtianzhi_0 * parseFloat(Gerenshuxing.jinengbiao[j].jiacheng);
                        jinengjiachengzhi_3_ = Math.floor(jinengjiachengzhi_3_);
                        this.chufajiafang_3_ = "" + jinengjiachengzhi_3_;
                    }
                    else if (this.caidejineng5_0 == "20024") {
                        jinengjiachengzhi_3_ = parseInt(Gerenshuxing.jinengbiao[j].chushizhi) + this.zuizhonglazhi_0 * parseFloat(Gerenshuxing.jinengbiao[j].jiacheng);
                        jinengjiachengzhi_3_ = Math.floor(jinengjiachengzhi_3_);
                        this.chufajiasu_3_ = "" + jinengjiachengzhi_3_;
                    }
                    else if (this.caidejineng5_0 == "20025") {
                        this.chufajianxue_3_ = "1";
                    }
                    else if (this.caidejineng5_0 == "20026") {
                        this.chufajiangong_3_ = "1";
                    }
                    else if (this.caidejineng5_0 == "20027") {
                        this.chufawofangjiansu_3_ = "1";
                    }
                }
            }
        }
        this.duiguai3shanghai();
    };
    //对人1使用技能判断
    Pvpzhandoujiemian.prototype.duiren1jineng = function () {
        //初始化触发技能数据
        this.chufalianji_1_1 = "0"; //触发连击
        this.chufabisha_1_1 = "0"; //触发必杀
        this.chufaxixue_1_1 = "0"; //触发吸血
        this.chufazhuiji_1_1 = "0"; //触发追击
        this.chufasane_1_1 = "0"; //触发善恶
        this.chufahushila_1_1 = "0"; //触发忽视辣
        this.chufahushima_1_1 = "0"; //触发忽视麻
        this.chufahushisuan_1_1 = "0"; //触发忽视酸
        this.chufahushitian_1_1 = "0"; //触发忽视甜
        this.chufazhenshe_1_1 = "0"; //触发震慑
        this.chufaxilan_1_1 = "0"; //触发吸蓝
        this.chufajiansu_1_1 = "0"; //触发减速
        this.chufachenmo_1_1 = "0"; //触发沉默
        this.chufahuixue_1_1 = "0"; //触发回血
        this.chufaquanhushi_1_1 = "0"; //触发全忽视
        this.chufahuiling_1_1 = "0"; //触发回灵
        this.chufadu_1_1 = "0"; //触发毒
        this.chufaxuruo_1_1 = "0"; //触发虚弱
        this.chufajiafang_1_1 = "0"; //触发加防
        this.chufajiasu_1_1 = "0"; //触发加速
        this.chufajianxue_1_1 = "0"; //触发给我放见血
        this.chufajiangong_1_1 = "0"; //触发给我方减攻
        this.chufawofangjiansu_1_1 = "0"; //触发给我方减速
        //进入正式计算
        if (this.caidejineng1_1 != "0") {
            for (var j = 0; j < Gerenshuxing.jinengbiao.length; j++) {
                if (Gerenshuxing.jinengbiao[j].id == this.caidejineng1_1) {
                    var jinengjiachengzhi_1_1 = 0;
                    if (this.caidejineng1_1 == "20001") {
                        jinengjiachengzhi_1_1 = parseInt(Gerenshuxing.jinengbiao[j].chushizhi) + this.zuizhonglazhi_1 * parseFloat(Gerenshuxing.jinengbiao[j].jiacheng);
                        jinengjiachengzhi_1_1 = Math.floor(jinengjiachengzhi_1_1);
                        var suijishu = Math.floor(Math.random() * 100);
                        if (suijishu <= jinengjiachengzhi_1_1) {
                            this.chufalianji_1_1 = "1";
                        }
                    }
                    else if (this.caidejineng1_1 == "20002") {
                        jinengjiachengzhi_1_1 = parseInt(Gerenshuxing.jinengbiao[j].chushizhi) + this.zuizhonglazhi_1 * parseFloat(Gerenshuxing.jinengbiao[j].jiacheng);
                        jinengjiachengzhi_1_1 = Math.floor(jinengjiachengzhi_1_1);
                        var suijishu = Math.floor(Math.random() * 100);
                        if (suijishu <= jinengjiachengzhi_1_1) {
                            this.chufalianji_1_1 = "1";
                        }
                    }
                    else if (this.caidejineng1_1 == "20003") {
                        jinengjiachengzhi_1_1 = parseInt(Gerenshuxing.jinengbiao[j].chushizhi) + this.zuizhonglazhi_1 * parseFloat(Gerenshuxing.jinengbiao[j].jiacheng);
                        jinengjiachengzhi_1_1 = Math.floor(jinengjiachengzhi_1_1);
                        this.chufabisha_1_1 = "" + jinengjiachengzhi_1_1;
                    }
                    else if (this.caidejineng1_1 == "20004") {
                        jinengjiachengzhi_1_1 = parseInt(Gerenshuxing.jinengbiao[j].chushizhi) + this.zuizhonglazhi_1 * parseFloat(Gerenshuxing.jinengbiao[j].jiacheng);
                        jinengjiachengzhi_1_1 = Math.floor(jinengjiachengzhi_1_1);
                        this.chufabisha_1_1 = "" + jinengjiachengzhi_1_1;
                    }
                    else if (this.caidejineng1_1 == "20005") {
                        jinengjiachengzhi_1_1 = parseInt(Gerenshuxing.jinengbiao[j].chushizhi) + this.zuizhongtianzhi_1 * parseFloat(Gerenshuxing.jinengbiao[j].jiacheng);
                        jinengjiachengzhi_1_1 = Math.floor(jinengjiachengzhi_1_1);
                        this.chufaxixue_1_1 = "" + jinengjiachengzhi_1_1;
                    }
                    else if (this.caidejineng1_1 == "20006") {
                        jinengjiachengzhi_1_1 = parseInt(Gerenshuxing.jinengbiao[j].chushizhi) + this.zuizhongtianzhi_1 * parseFloat(Gerenshuxing.jinengbiao[j].jiacheng);
                        jinengjiachengzhi_1_1 = Math.floor(jinengjiachengzhi_1_1);
                        this.chufaxixue_1_1 = "" + jinengjiachengzhi_1_1;
                    }
                    else if (this.caidejineng1_1 == "20007") {
                        this.chufazhuiji_1_1 = "1";
                    }
                    else if (this.caidejineng1_1 == "20008") {
                        this.chufasane_1_1 = "1";
                    }
                    else if (this.caidejineng1_1 == "20009") {
                        jinengjiachengzhi_1_1 = parseInt(Gerenshuxing.jinengbiao[j].chushizhi) + this.zuizhonglazhi_1 * parseFloat(Gerenshuxing.jinengbiao[j].jiacheng);
                        jinengjiachengzhi_1_1 = Math.floor(jinengjiachengzhi_1_1);
                        this.chufahushila_1_1 = "" + jinengjiachengzhi_1_1;
                    }
                    else if (this.caidejineng1_1 == "20010") {
                        jinengjiachengzhi_1_1 = parseInt(Gerenshuxing.jinengbiao[j].chushizhi) + this.zuizhongtianzhi_1 * parseFloat(Gerenshuxing.jinengbiao[j].jiacheng);
                        jinengjiachengzhi_1_1 = Math.floor(jinengjiachengzhi_1_1);
                        this.chufahushitian_1_1 = "" + jinengjiachengzhi_1_1;
                    }
                    else if (this.caidejineng1_1 == "20011") {
                        jinengjiachengzhi_1_1 = parseInt(Gerenshuxing.jinengbiao[j].chushizhi) + this.zuizhongsuanzhi_1 * parseFloat(Gerenshuxing.jinengbiao[j].jiacheng);
                        jinengjiachengzhi_1_1 = Math.floor(jinengjiachengzhi_1_1);
                        this.chufahushisuan_1_1 = "" + jinengjiachengzhi_1_1;
                    }
                    else if (this.caidejineng1_1 == "20012") {
                        jinengjiachengzhi_1_1 = parseInt(Gerenshuxing.jinengbiao[j].chushizhi) + this.zuizhongmazhi_1 * parseFloat(Gerenshuxing.jinengbiao[j].jiacheng);
                        jinengjiachengzhi_1_1 = Math.floor(jinengjiachengzhi_1_1);
                        this.chufahushima_1_1 = "" + jinengjiachengzhi_1_1;
                    }
                    else if (this.caidejineng1_1 == "20013") {
                        jinengjiachengzhi_1_1 = parseInt(Gerenshuxing.jinengbiao[j].chushizhi) + this.zuizhongsuanzhi_1 * parseFloat(Gerenshuxing.jinengbiao[j].jiacheng);
                        jinengjiachengzhi_1_1 = Math.floor(jinengjiachengzhi_1_1);
                        this.chufazhenshe_1_1 = "" + jinengjiachengzhi_1_1;
                    }
                    else if (this.caidejineng1_1 == "20014") {
                        jinengjiachengzhi_1_1 = parseInt(Gerenshuxing.jinengbiao[j].chushizhi) + this.zuizhongsuanzhi_1 * parseFloat(Gerenshuxing.jinengbiao[j].jiacheng);
                        jinengjiachengzhi_1_1 = Math.floor(jinengjiachengzhi_1_1);
                        this.chufaxilan_1_1 = "" + jinengjiachengzhi_1_1;
                    }
                    else if (this.caidejineng1_1 == "20015") {
                        jinengjiachengzhi_1_1 = parseInt(Gerenshuxing.jinengbiao[j].chushizhi) + this.zuizhongsuanzhi_1 * parseFloat(Gerenshuxing.jinengbiao[j].jiacheng);
                        jinengjiachengzhi_1_1 = Math.floor(jinengjiachengzhi_1_1);
                        this.chufaxilan_1_1 = "" + jinengjiachengzhi_1_1;
                    }
                    else if (this.caidejineng1_1 == "20016") {
                        jinengjiachengzhi_1_1 = parseInt(Gerenshuxing.jinengbiao[j].chushizhi) + this.zuizhongmazhi_1 * parseFloat(Gerenshuxing.jinengbiao[j].jiacheng);
                        jinengjiachengzhi_1_1 = Math.floor(jinengjiachengzhi_1_1);
                        this.chufajiansu_1_1 = "" + jinengjiachengzhi_1_1;
                    }
                    else if (this.caidejineng1_1 == "20017") {
                        jinengjiachengzhi_1_1 = parseInt(Gerenshuxing.jinengbiao[j].chushizhi) + this.zuizhongmazhi_1 * parseFloat(Gerenshuxing.jinengbiao[j].jiacheng);
                        jinengjiachengzhi_1_1 = Math.floor(jinengjiachengzhi_1_1);
                        var suijishu = Math.floor(Math.random() * 100);
                        if (suijishu <= jinengjiachengzhi_1_1) {
                            this.chufachenmo_1_1 = "1";
                        }
                    }
                    else if (this.caidejineng1_1 == "20018") {
                        jinengjiachengzhi_1_1 = parseInt(Gerenshuxing.jinengbiao[j].chushizhi) + this.zuizhongtianzhi_1 * parseFloat(Gerenshuxing.jinengbiao[j].jiacheng);
                        jinengjiachengzhi_1_1 = Math.floor(jinengjiachengzhi_1_1);
                        this.chufahuixue_1_1 = "" + jinengjiachengzhi_1_1;
                    }
                    else if (this.caidejineng1_1 == "20019") {
                        jinengjiachengzhi_1_1 = parseInt(Gerenshuxing.jinengbiao[j].chushizhi) + this.zuizhongsuanzhi_1 * parseFloat(Gerenshuxing.jinengbiao[j].jiacheng);
                        jinengjiachengzhi_1_1 = Math.floor(jinengjiachengzhi_1_1);
                        this.chufaquanhushi_1_1 = "" + jinengjiachengzhi_1_1;
                    }
                    else if (this.caidejineng1_1 == "20020") {
                        this.chufahuiling_1_1 = "1";
                    }
                    else if (this.caidejineng1_1 == "20021") {
                        jinengjiachengzhi_1_1 = parseInt(Gerenshuxing.jinengbiao[j].chushizhi) + this.zuizhongsuanzhi_1 * parseFloat(Gerenshuxing.jinengbiao[j].jiacheng);
                        jinengjiachengzhi_1_1 = Math.floor(jinengjiachengzhi_1_1);
                        this.chufadu_1_1 = "" + jinengjiachengzhi_1_1;
                    }
                    else if (this.caidejineng1_1 == "20022") {
                        jinengjiachengzhi_1_1 = parseInt(Gerenshuxing.jinengbiao[j].chushizhi) + this.zuizhongmazhi_1 * parseFloat(Gerenshuxing.jinengbiao[j].jiacheng);
                        jinengjiachengzhi_1_1 = Math.floor(jinengjiachengzhi_1_1);
                        this.chufaxuruo_1_1 = "" + jinengjiachengzhi_1_1;
                    }
                    else if (this.caidejineng1_1 == "20023") {
                        jinengjiachengzhi_1_1 = parseInt(Gerenshuxing.jinengbiao[j].chushizhi) + this.zuizhongtianzhi_1 * parseFloat(Gerenshuxing.jinengbiao[j].jiacheng);
                        jinengjiachengzhi_1_1 = Math.floor(jinengjiachengzhi_1_1);
                        this.chufajiafang_1_1 = "" + jinengjiachengzhi_1_1;
                    }
                    else if (this.caidejineng1_1 == "20024") {
                        jinengjiachengzhi_1_1 = parseInt(Gerenshuxing.jinengbiao[j].chushizhi) + this.zuizhonglazhi_1 * parseFloat(Gerenshuxing.jinengbiao[j].jiacheng);
                        jinengjiachengzhi_1_1 = Math.floor(jinengjiachengzhi_1_1);
                        this.chufajiasu_1_1 = "" + jinengjiachengzhi_1_1;
                    }
                    else if (this.caidejineng1_1 == "20025") {
                        this.chufajianxue_1_1 = "1";
                    }
                    else if (this.caidejineng1_1 == "20026") {
                        this.chufajiangong_1_1 = "1";
                    }
                    else if (this.caidejineng1_1 == "20027") {
                        this.chufawofangjiansu_1_1 = "1";
                    }
                }
            }
        }
        //计算菜品技能2///
        if (this.caidejineng2_1 != "0") {
            for (var j = 0; j < Gerenshuxing.jinengbiao.length; j++) {
                if (Gerenshuxing.jinengbiao[j].id == this.caidejineng2_1) {
                    var jinengjiachengzhi_1_1 = 0;
                    if (this.caidejineng2_1 == "20001") {
                        jinengjiachengzhi_1_1 = parseInt(Gerenshuxing.jinengbiao[j].chushizhi) + this.zuizhonglazhi_1 * parseFloat(Gerenshuxing.jinengbiao[j].jiacheng);
                        jinengjiachengzhi_1_1 = Math.floor(jinengjiachengzhi_1_1);
                        var suijishu = Math.floor(Math.random() * 100);
                        if (suijishu <= jinengjiachengzhi_1_1) {
                            this.chufalianji_1_1 = "1";
                        }
                    }
                    else if (this.caidejineng2_1 == "20002") {
                        jinengjiachengzhi_1_1 = parseInt(Gerenshuxing.jinengbiao[j].chushizhi) + this.zuizhonglazhi_1 * parseFloat(Gerenshuxing.jinengbiao[j].jiacheng);
                        jinengjiachengzhi_1_1 = Math.floor(jinengjiachengzhi_1_1);
                        var suijishu = Math.floor(Math.random() * 100);
                        if (suijishu <= jinengjiachengzhi_1_1) {
                            this.chufalianji_1_1 = "1";
                        }
                    }
                    else if (this.caidejineng2_1 == "20003") {
                        jinengjiachengzhi_1_1 = parseInt(Gerenshuxing.jinengbiao[j].chushizhi) + this.zuizhonglazhi_1 * parseFloat(Gerenshuxing.jinengbiao[j].jiacheng);
                        jinengjiachengzhi_1_1 = Math.floor(jinengjiachengzhi_1_1);
                        this.chufabisha_1_1 = "" + jinengjiachengzhi_1_1;
                    }
                    else if (this.caidejineng2_1 == "20004") {
                        jinengjiachengzhi_1_1 = parseInt(Gerenshuxing.jinengbiao[j].chushizhi) + this.zuizhonglazhi_1 * parseFloat(Gerenshuxing.jinengbiao[j].jiacheng);
                        jinengjiachengzhi_1_1 = Math.floor(jinengjiachengzhi_1_1);
                        this.chufabisha_1_1 = "" + jinengjiachengzhi_1_1;
                    }
                    else if (this.caidejineng2_1 == "20005") {
                        jinengjiachengzhi_1_1 = parseInt(Gerenshuxing.jinengbiao[j].chushizhi) + this.zuizhongtianzhi_1 * parseFloat(Gerenshuxing.jinengbiao[j].jiacheng);
                        jinengjiachengzhi_1_1 = Math.floor(jinengjiachengzhi_1_1);
                        this.chufaxixue_1_1 = "" + jinengjiachengzhi_1_1;
                    }
                    else if (this.caidejineng2_1 == "20006") {
                        jinengjiachengzhi_1_1 = parseInt(Gerenshuxing.jinengbiao[j].chushizhi) + this.zuizhongtianzhi_1 * parseFloat(Gerenshuxing.jinengbiao[j].jiacheng);
                        jinengjiachengzhi_1_1 = Math.floor(jinengjiachengzhi_1_1);
                        this.chufaxixue_1_1 = "" + jinengjiachengzhi_1_1;
                    }
                    else if (this.caidejineng2_1 == "20007") {
                        this.chufazhuiji_1_1 = "1";
                    }
                    else if (this.caidejineng2_1 == "20008") {
                        this.chufasane_1_1 = "1";
                    }
                    else if (this.caidejineng2_1 == "20009") {
                        jinengjiachengzhi_1_1 = parseInt(Gerenshuxing.jinengbiao[j].chushizhi) + this.zuizhonglazhi_1 * parseFloat(Gerenshuxing.jinengbiao[j].jiacheng);
                        jinengjiachengzhi_1_1 = Math.floor(jinengjiachengzhi_1_1);
                        this.chufahushila_1_1 = "" + jinengjiachengzhi_1_1;
                    }
                    else if (this.caidejineng2_1 == "20010") {
                        jinengjiachengzhi_1_1 = parseInt(Gerenshuxing.jinengbiao[j].chushizhi) + this.zuizhongtianzhi_1 * parseFloat(Gerenshuxing.jinengbiao[j].jiacheng);
                        jinengjiachengzhi_1_1 = Math.floor(jinengjiachengzhi_1_1);
                        this.chufahushitian_1_1 = "" + jinengjiachengzhi_1_1;
                    }
                    else if (this.caidejineng2_1 == "20011") {
                        jinengjiachengzhi_1_1 = parseInt(Gerenshuxing.jinengbiao[j].chushizhi) + this.zuizhongsuanzhi_1 * parseFloat(Gerenshuxing.jinengbiao[j].jiacheng);
                        jinengjiachengzhi_1_1 = Math.floor(jinengjiachengzhi_1_1);
                        this.chufahushisuan_1_1 = "" + jinengjiachengzhi_1_1;
                    }
                    else if (this.caidejineng2_1 == "20012") {
                        jinengjiachengzhi_1_1 = parseInt(Gerenshuxing.jinengbiao[j].chushizhi) + this.zuizhongmazhi_1 * parseFloat(Gerenshuxing.jinengbiao[j].jiacheng);
                        jinengjiachengzhi_1_1 = Math.floor(jinengjiachengzhi_1_1);
                        this.chufahushima_1_1 = "" + jinengjiachengzhi_1_1;
                    }
                    else if (this.caidejineng2_1 == "20013") {
                        jinengjiachengzhi_1_1 = parseInt(Gerenshuxing.jinengbiao[j].chushizhi) + this.zuizhongsuanzhi_1 * parseFloat(Gerenshuxing.jinengbiao[j].jiacheng);
                        jinengjiachengzhi_1_1 = Math.floor(jinengjiachengzhi_1_1);
                        this.chufazhenshe_1_1 = "" + jinengjiachengzhi_1_1;
                    }
                    else if (this.caidejineng2_1 == "20014") {
                        jinengjiachengzhi_1_1 = parseInt(Gerenshuxing.jinengbiao[j].chushizhi) + this.zuizhongsuanzhi_1 * parseFloat(Gerenshuxing.jinengbiao[j].jiacheng);
                        jinengjiachengzhi_1_1 = Math.floor(jinengjiachengzhi_1_1);
                        this.chufaxilan_1_1 = "" + jinengjiachengzhi_1_1;
                    }
                    else if (this.caidejineng2_1 == "20015") {
                        jinengjiachengzhi_1_1 = parseInt(Gerenshuxing.jinengbiao[j].chushizhi) + this.zuizhongsuanzhi_1 * parseFloat(Gerenshuxing.jinengbiao[j].jiacheng);
                        jinengjiachengzhi_1_1 = Math.floor(jinengjiachengzhi_1_1);
                        this.chufaxilan_1_1 = "" + jinengjiachengzhi_1_1;
                    }
                    else if (this.caidejineng2_1 == "20016") {
                        jinengjiachengzhi_1_1 = parseInt(Gerenshuxing.jinengbiao[j].chushizhi) + this.zuizhongmazhi_1 * parseFloat(Gerenshuxing.jinengbiao[j].jiacheng);
                        jinengjiachengzhi_1_1 = Math.floor(jinengjiachengzhi_1_1);
                        this.chufajiansu_1_1 = "" + jinengjiachengzhi_1_1;
                    }
                    else if (this.caidejineng2_1 == "20017") {
                        jinengjiachengzhi_1_1 = parseInt(Gerenshuxing.jinengbiao[j].chushizhi) + this.zuizhongmazhi_1 * parseFloat(Gerenshuxing.jinengbiao[j].jiacheng);
                        jinengjiachengzhi_1_1 = Math.floor(jinengjiachengzhi_1_1);
                        var suijishu = Math.floor(Math.random() * 100);
                        if (suijishu <= jinengjiachengzhi_1_1) {
                            this.chufachenmo_1_1 = "1";
                        }
                    }
                    else if (this.caidejineng2_1 == "20018") {
                        jinengjiachengzhi_1_1 = parseInt(Gerenshuxing.jinengbiao[j].chushizhi) + this.zuizhongtianzhi_1 * parseFloat(Gerenshuxing.jinengbiao[j].jiacheng);
                        jinengjiachengzhi_1_1 = Math.floor(jinengjiachengzhi_1_1);
                        this.chufahuixue_1_1 = "" + jinengjiachengzhi_1_1;
                    }
                    else if (this.caidejineng2_1 == "20019") {
                        jinengjiachengzhi_1_1 = parseInt(Gerenshuxing.jinengbiao[j].chushizhi) + this.zuizhongsuanzhi_1 * parseFloat(Gerenshuxing.jinengbiao[j].jiacheng);
                        jinengjiachengzhi_1_1 = Math.floor(jinengjiachengzhi_1_1);
                        this.chufaquanhushi_1_1 = "" + jinengjiachengzhi_1_1;
                    }
                    else if (this.caidejineng2_1 == "20020") {
                        this.chufahuiling_1_1 = "1";
                    }
                    else if (this.caidejineng2_1 == "20021") {
                        jinengjiachengzhi_1_1 = parseInt(Gerenshuxing.jinengbiao[j].chushizhi) + this.zuizhongsuanzhi_1 * parseFloat(Gerenshuxing.jinengbiao[j].jiacheng);
                        jinengjiachengzhi_1_1 = Math.floor(jinengjiachengzhi_1_1);
                        this.chufadu_1_1 = "" + jinengjiachengzhi_1_1;
                    }
                    else if (this.caidejineng2_1 == "20022") {
                        jinengjiachengzhi_1_1 = parseInt(Gerenshuxing.jinengbiao[j].chushizhi) + this.zuizhongmazhi_1 * parseFloat(Gerenshuxing.jinengbiao[j].jiacheng);
                        jinengjiachengzhi_1_1 = Math.floor(jinengjiachengzhi_1_1);
                        this.chufaxuruo_1_1 = "" + jinengjiachengzhi_1_1;
                    }
                    else if (this.caidejineng2_1 == "20023") {
                        jinengjiachengzhi_1_1 = parseInt(Gerenshuxing.jinengbiao[j].chushizhi) + this.zuizhongtianzhi_1 * parseFloat(Gerenshuxing.jinengbiao[j].jiacheng);
                        jinengjiachengzhi_1_1 = Math.floor(jinengjiachengzhi_1_1);
                        this.chufajiafang_1_1 = "" + jinengjiachengzhi_1_1;
                    }
                    else if (this.caidejineng2_1 == "20024") {
                        jinengjiachengzhi_1_1 = parseInt(Gerenshuxing.jinengbiao[j].chushizhi) + this.zuizhonglazhi_1 * parseFloat(Gerenshuxing.jinengbiao[j].jiacheng);
                        jinengjiachengzhi_1_1 = Math.floor(jinengjiachengzhi_1_1);
                        this.chufajiasu_1_1 = "" + jinengjiachengzhi_1_1;
                    }
                    else if (this.caidejineng2_1 == "20025") {
                        this.chufajianxue_1_1 = "1";
                    }
                    else if (this.caidejineng2_1 == "20026") {
                        this.chufajiangong_1_1 = "1";
                    }
                    else if (this.caidejineng2_1 == "20027") {
                        this.chufawofangjiansu_1_1 = "1";
                    }
                }
            }
        }
        //计算菜品技能2///
        if (this.caidejineng3_1 != "0") {
            for (var j = 0; j < Gerenshuxing.jinengbiao.length; j++) {
                if (Gerenshuxing.jinengbiao[j].id == this.caidejineng3_1) {
                    var jinengjiachengzhi_1_1 = 0;
                    if (this.caidejineng3_1 == "20001") {
                        jinengjiachengzhi_1_1 = parseInt(Gerenshuxing.jinengbiao[j].chushizhi) + this.zuizhonglazhi_1 * parseFloat(Gerenshuxing.jinengbiao[j].jiacheng);
                        jinengjiachengzhi_1_1 = Math.floor(jinengjiachengzhi_1_1);
                        var suijishu = Math.floor(Math.random() * 100);
                        if (suijishu <= jinengjiachengzhi_1_1) {
                            this.chufalianji_1_1 = "1";
                        }
                    }
                    else if (this.caidejineng3_1 == "20002") {
                        jinengjiachengzhi_1_1 = parseInt(Gerenshuxing.jinengbiao[j].chushizhi) + this.zuizhonglazhi_1 * parseFloat(Gerenshuxing.jinengbiao[j].jiacheng);
                        jinengjiachengzhi_1_1 = Math.floor(jinengjiachengzhi_1_1);
                        var suijishu = Math.floor(Math.random() * 100);
                        if (suijishu <= jinengjiachengzhi_1_1) {
                            this.chufalianji_1_1 = "1";
                        }
                    }
                    else if (this.caidejineng3_1 == "20003") {
                        jinengjiachengzhi_1_1 = parseInt(Gerenshuxing.jinengbiao[j].chushizhi) + this.zuizhonglazhi_1 * parseFloat(Gerenshuxing.jinengbiao[j].jiacheng);
                        jinengjiachengzhi_1_1 = Math.floor(jinengjiachengzhi_1_1);
                        this.chufabisha_1_1 = "" + jinengjiachengzhi_1_1;
                    }
                    else if (this.caidejineng3_1 == "20004") {
                        jinengjiachengzhi_1_1 = parseInt(Gerenshuxing.jinengbiao[j].chushizhi) + this.zuizhonglazhi_1 * parseFloat(Gerenshuxing.jinengbiao[j].jiacheng);
                        jinengjiachengzhi_1_1 = Math.floor(jinengjiachengzhi_1_1);
                        this.chufabisha_1_1 = "" + jinengjiachengzhi_1_1;
                    }
                    else if (this.caidejineng3_1 == "20005") {
                        jinengjiachengzhi_1_1 = parseInt(Gerenshuxing.jinengbiao[j].chushizhi) + this.zuizhongtianzhi_1 * parseFloat(Gerenshuxing.jinengbiao[j].jiacheng);
                        jinengjiachengzhi_1_1 = Math.floor(jinengjiachengzhi_1_1);
                        this.chufaxixue_1_1 = "" + jinengjiachengzhi_1_1;
                    }
                    else if (this.caidejineng3_1 == "20006") {
                        jinengjiachengzhi_1_1 = parseInt(Gerenshuxing.jinengbiao[j].chushizhi) + this.zuizhongtianzhi_1 * parseFloat(Gerenshuxing.jinengbiao[j].jiacheng);
                        jinengjiachengzhi_1_1 = Math.floor(jinengjiachengzhi_1_1);
                        this.chufaxixue_1_1 = "" + jinengjiachengzhi_1_1;
                    }
                    else if (this.caidejineng3_1 == "20007") {
                        this.chufazhuiji_1_1 = "1";
                    }
                    else if (this.caidejineng3_1 == "20008") {
                        this.chufasane_1_1 = "1";
                    }
                    else if (this.caidejineng3_1 == "20009") {
                        jinengjiachengzhi_1_1 = parseInt(Gerenshuxing.jinengbiao[j].chushizhi) + this.zuizhonglazhi_1 * parseFloat(Gerenshuxing.jinengbiao[j].jiacheng);
                        jinengjiachengzhi_1_1 = Math.floor(jinengjiachengzhi_1_1);
                        this.chufahushila_1_1 = "" + jinengjiachengzhi_1_1;
                    }
                    else if (this.caidejineng3_1 == "20010") {
                        jinengjiachengzhi_1_1 = parseInt(Gerenshuxing.jinengbiao[j].chushizhi) + this.zuizhongtianzhi_1 * parseFloat(Gerenshuxing.jinengbiao[j].jiacheng);
                        jinengjiachengzhi_1_1 = Math.floor(jinengjiachengzhi_1_1);
                        this.chufahushitian_1_1 = "" + jinengjiachengzhi_1_1;
                    }
                    else if (this.caidejineng3_1 == "20011") {
                        jinengjiachengzhi_1_1 = parseInt(Gerenshuxing.jinengbiao[j].chushizhi) + this.zuizhongsuanzhi_1 * parseFloat(Gerenshuxing.jinengbiao[j].jiacheng);
                        jinengjiachengzhi_1_1 = Math.floor(jinengjiachengzhi_1_1);
                        this.chufahushisuan_1_1 = "" + jinengjiachengzhi_1_1;
                    }
                    else if (this.caidejineng3_1 == "20012") {
                        jinengjiachengzhi_1_1 = parseInt(Gerenshuxing.jinengbiao[j].chushizhi) + this.zuizhongmazhi_1 * parseFloat(Gerenshuxing.jinengbiao[j].jiacheng);
                        jinengjiachengzhi_1_1 = Math.floor(jinengjiachengzhi_1_1);
                        this.chufahushima_1_1 = "" + jinengjiachengzhi_1_1;
                    }
                    else if (this.caidejineng3_1 == "20013") {
                        jinengjiachengzhi_1_1 = parseInt(Gerenshuxing.jinengbiao[j].chushizhi) + this.zuizhongsuanzhi_1 * parseFloat(Gerenshuxing.jinengbiao[j].jiacheng);
                        jinengjiachengzhi_1_1 = Math.floor(jinengjiachengzhi_1_1);
                        this.chufazhenshe_1_1 = "" + jinengjiachengzhi_1_1;
                    }
                    else if (this.caidejineng3_1 == "20014") {
                        jinengjiachengzhi_1_1 = parseInt(Gerenshuxing.jinengbiao[j].chushizhi) + this.zuizhongsuanzhi_1 * parseFloat(Gerenshuxing.jinengbiao[j].jiacheng);
                        jinengjiachengzhi_1_1 = Math.floor(jinengjiachengzhi_1_1);
                        this.chufaxilan_1_1 = "" + jinengjiachengzhi_1_1;
                    }
                    else if (this.caidejineng3_1 == "20015") {
                        jinengjiachengzhi_1_1 = parseInt(Gerenshuxing.jinengbiao[j].chushizhi) + this.zuizhongsuanzhi_1 * parseFloat(Gerenshuxing.jinengbiao[j].jiacheng);
                        jinengjiachengzhi_1_1 = Math.floor(jinengjiachengzhi_1_1);
                        this.chufaxilan_1_1 = "" + jinengjiachengzhi_1_1;
                    }
                    else if (this.caidejineng3_1 == "20016") {
                        jinengjiachengzhi_1_1 = parseInt(Gerenshuxing.jinengbiao[j].chushizhi) + this.zuizhongmazhi_1 * parseFloat(Gerenshuxing.jinengbiao[j].jiacheng);
                        jinengjiachengzhi_1_1 = Math.floor(jinengjiachengzhi_1_1);
                        this.chufajiansu_1_1 = "" + jinengjiachengzhi_1_1;
                    }
                    else if (this.caidejineng3_1 == "20017") {
                        jinengjiachengzhi_1_1 = parseInt(Gerenshuxing.jinengbiao[j].chushizhi) + this.zuizhongmazhi_1 * parseFloat(Gerenshuxing.jinengbiao[j].jiacheng);
                        jinengjiachengzhi_1_1 = Math.floor(jinengjiachengzhi_1_1);
                        var suijishu = Math.floor(Math.random() * 100);
                        if (suijishu <= jinengjiachengzhi_1_1) {
                            this.chufachenmo_1_1 = "1";
                        }
                    }
                    else if (this.caidejineng3_1 == "20018") {
                        jinengjiachengzhi_1_1 = parseInt(Gerenshuxing.jinengbiao[j].chushizhi) + this.zuizhongtianzhi_1 * parseFloat(Gerenshuxing.jinengbiao[j].jiacheng);
                        jinengjiachengzhi_1_1 = Math.floor(jinengjiachengzhi_1_1);
                        this.chufahuixue_1_1 = "" + jinengjiachengzhi_1_1;
                    }
                    else if (this.caidejineng3_1 == "20019") {
                        jinengjiachengzhi_1_1 = parseInt(Gerenshuxing.jinengbiao[j].chushizhi) + this.zuizhongsuanzhi_1 * parseFloat(Gerenshuxing.jinengbiao[j].jiacheng);
                        jinengjiachengzhi_1_1 = Math.floor(jinengjiachengzhi_1_1);
                        this.chufaquanhushi_1_1 = "" + jinengjiachengzhi_1_1;
                    }
                    else if (this.caidejineng3_1 == "20020") {
                        this.chufahuiling_1_1 = "1";
                    }
                    else if (this.caidejineng3_1 == "20021") {
                        jinengjiachengzhi_1_1 = parseInt(Gerenshuxing.jinengbiao[j].chushizhi) + this.zuizhongsuanzhi_1 * parseFloat(Gerenshuxing.jinengbiao[j].jiacheng);
                        jinengjiachengzhi_1_1 = Math.floor(jinengjiachengzhi_1_1);
                        this.chufadu_1_1 = "" + jinengjiachengzhi_1_1;
                    }
                    else if (this.caidejineng3_1 == "20022") {
                        jinengjiachengzhi_1_1 = parseInt(Gerenshuxing.jinengbiao[j].chushizhi) + this.zuizhongmazhi_1 * parseFloat(Gerenshuxing.jinengbiao[j].jiacheng);
                        jinengjiachengzhi_1_1 = Math.floor(jinengjiachengzhi_1_1);
                        this.chufaxuruo_1_1 = "" + jinengjiachengzhi_1_1;
                    }
                    else if (this.caidejineng3_1 == "20023") {
                        jinengjiachengzhi_1_1 = parseInt(Gerenshuxing.jinengbiao[j].chushizhi) + this.zuizhongtianzhi_1 * parseFloat(Gerenshuxing.jinengbiao[j].jiacheng);
                        jinengjiachengzhi_1_1 = Math.floor(jinengjiachengzhi_1_1);
                        this.chufajiafang_1_1 = "" + jinengjiachengzhi_1_1;
                    }
                    else if (this.caidejineng3_1 == "20024") {
                        jinengjiachengzhi_1_1 = parseInt(Gerenshuxing.jinengbiao[j].chushizhi) + this.zuizhonglazhi_1 * parseFloat(Gerenshuxing.jinengbiao[j].jiacheng);
                        jinengjiachengzhi_1_1 = Math.floor(jinengjiachengzhi_1_1);
                        this.chufajiasu_1_1 = "" + jinengjiachengzhi_1_1;
                    }
                    else if (this.caidejineng3_1 == "20025") {
                        this.chufajianxue_1_1 = "1";
                    }
                    else if (this.caidejineng3_1 == "20026") {
                        this.chufajiangong_1_1 = "1";
                    }
                    else if (this.caidejineng3_1 == "20027") {
                        this.chufawofangjiansu_1_1 = "1";
                    }
                }
            }
        }
        //计算菜品技能2///
        if (this.caidejineng4_1 != "0") {
            for (var j = 0; j < Gerenshuxing.jinengbiao.length; j++) {
                if (Gerenshuxing.jinengbiao[j].id == this.caidejineng4_1) {
                    var jinengjiachengzhi_1_1 = 0;
                    if (this.caidejineng4_1 == "20001") {
                        jinengjiachengzhi_1_1 = parseInt(Gerenshuxing.jinengbiao[j].chushizhi) + this.zuizhonglazhi_1 * parseFloat(Gerenshuxing.jinengbiao[j].jiacheng);
                        jinengjiachengzhi_1_1 = Math.floor(jinengjiachengzhi_1_1);
                        var suijishu = Math.floor(Math.random() * 100);
                        if (suijishu <= jinengjiachengzhi_1_1) {
                            this.chufalianji_1_1 = "1";
                        }
                    }
                    else if (this.caidejineng4_1 == "20002") {
                        jinengjiachengzhi_1_1 = parseInt(Gerenshuxing.jinengbiao[j].chushizhi) + this.zuizhonglazhi_1 * parseFloat(Gerenshuxing.jinengbiao[j].jiacheng);
                        jinengjiachengzhi_1_1 = Math.floor(jinengjiachengzhi_1_1);
                        var suijishu = Math.floor(Math.random() * 100);
                        if (suijishu <= jinengjiachengzhi_1_1) {
                            this.chufalianji_1_1 = "1";
                        }
                    }
                    else if (this.caidejineng4_1 == "20003") {
                        jinengjiachengzhi_1_1 = parseInt(Gerenshuxing.jinengbiao[j].chushizhi) + this.zuizhonglazhi_1 * parseFloat(Gerenshuxing.jinengbiao[j].jiacheng);
                        jinengjiachengzhi_1_1 = Math.floor(jinengjiachengzhi_1_1);
                        this.chufabisha_1_1 = "" + jinengjiachengzhi_1_1;
                    }
                    else if (this.caidejineng4_1 == "20004") {
                        jinengjiachengzhi_1_1 = parseInt(Gerenshuxing.jinengbiao[j].chushizhi) + this.zuizhonglazhi_1 * parseFloat(Gerenshuxing.jinengbiao[j].jiacheng);
                        jinengjiachengzhi_1_1 = Math.floor(jinengjiachengzhi_1_1);
                        this.chufabisha_1_1 = "" + jinengjiachengzhi_1_1;
                    }
                    else if (this.caidejineng4_1 == "20005") {
                        jinengjiachengzhi_1_1 = parseInt(Gerenshuxing.jinengbiao[j].chushizhi) + this.zuizhongtianzhi_1 * parseFloat(Gerenshuxing.jinengbiao[j].jiacheng);
                        jinengjiachengzhi_1_1 = Math.floor(jinengjiachengzhi_1_1);
                        this.chufaxixue_1_1 = "" + jinengjiachengzhi_1_1;
                    }
                    else if (this.caidejineng4_1 == "20006") {
                        jinengjiachengzhi_1_1 = parseInt(Gerenshuxing.jinengbiao[j].chushizhi) + this.zuizhongtianzhi_1 * parseFloat(Gerenshuxing.jinengbiao[j].jiacheng);
                        jinengjiachengzhi_1_1 = Math.floor(jinengjiachengzhi_1_1);
                        this.chufaxixue_1_1 = "" + jinengjiachengzhi_1_1;
                    }
                    else if (this.caidejineng4_1 == "20007") {
                        this.chufazhuiji_1_1 = "1";
                    }
                    else if (this.caidejineng4_1 == "20008") {
                        this.chufasane_1_1 = "1";
                    }
                    else if (this.caidejineng4_1 == "20009") {
                        jinengjiachengzhi_1_1 = parseInt(Gerenshuxing.jinengbiao[j].chushizhi) + this.zuizhonglazhi_1 * parseFloat(Gerenshuxing.jinengbiao[j].jiacheng);
                        jinengjiachengzhi_1_1 = Math.floor(jinengjiachengzhi_1_1);
                        this.chufahushila_1_1 = "" + jinengjiachengzhi_1_1;
                    }
                    else if (this.caidejineng4_1 == "20010") {
                        jinengjiachengzhi_1_1 = parseInt(Gerenshuxing.jinengbiao[j].chushizhi) + this.zuizhongtianzhi_1 * parseFloat(Gerenshuxing.jinengbiao[j].jiacheng);
                        jinengjiachengzhi_1_1 = Math.floor(jinengjiachengzhi_1_1);
                        this.chufahushitian_1_1 = "" + jinengjiachengzhi_1_1;
                    }
                    else if (this.caidejineng4_1 == "20011") {
                        jinengjiachengzhi_1_1 = parseInt(Gerenshuxing.jinengbiao[j].chushizhi) + this.zuizhongsuanzhi_1 * parseFloat(Gerenshuxing.jinengbiao[j].jiacheng);
                        jinengjiachengzhi_1_1 = Math.floor(jinengjiachengzhi_1_1);
                        this.chufahushisuan_1_1 = "" + jinengjiachengzhi_1_1;
                    }
                    else if (this.caidejineng4_1 == "20012") {
                        jinengjiachengzhi_1_1 = parseInt(Gerenshuxing.jinengbiao[j].chushizhi) + this.zuizhongmazhi_1 * parseFloat(Gerenshuxing.jinengbiao[j].jiacheng);
                        jinengjiachengzhi_1_1 = Math.floor(jinengjiachengzhi_1_1);
                        this.chufahushima_1_1 = "" + jinengjiachengzhi_1_1;
                    }
                    else if (this.caidejineng4_1 == "20013") {
                        jinengjiachengzhi_1_1 = parseInt(Gerenshuxing.jinengbiao[j].chushizhi) + this.zuizhongsuanzhi_1 * parseFloat(Gerenshuxing.jinengbiao[j].jiacheng);
                        jinengjiachengzhi_1_1 = Math.floor(jinengjiachengzhi_1_1);
                        this.chufazhenshe_1_1 = "" + jinengjiachengzhi_1_1;
                    }
                    else if (this.caidejineng4_1 == "20014") {
                        jinengjiachengzhi_1_1 = parseInt(Gerenshuxing.jinengbiao[j].chushizhi) + this.zuizhongsuanzhi_1 * parseFloat(Gerenshuxing.jinengbiao[j].jiacheng);
                        jinengjiachengzhi_1_1 = Math.floor(jinengjiachengzhi_1_1);
                        this.chufaxilan_1_1 = "" + jinengjiachengzhi_1_1;
                    }
                    else if (this.caidejineng4_1 == "20015") {
                        jinengjiachengzhi_1_1 = parseInt(Gerenshuxing.jinengbiao[j].chushizhi) + this.zuizhongsuanzhi_1 * parseFloat(Gerenshuxing.jinengbiao[j].jiacheng);
                        jinengjiachengzhi_1_1 = Math.floor(jinengjiachengzhi_1_1);
                        this.chufaxilan_1_1 = "" + jinengjiachengzhi_1_1;
                    }
                    else if (this.caidejineng4_1 == "20016") {
                        jinengjiachengzhi_1_1 = parseInt(Gerenshuxing.jinengbiao[j].chushizhi) + this.zuizhongmazhi_1 * parseFloat(Gerenshuxing.jinengbiao[j].jiacheng);
                        jinengjiachengzhi_1_1 = Math.floor(jinengjiachengzhi_1_1);
                        this.chufajiansu_1_1 = "" + jinengjiachengzhi_1_1;
                    }
                    else if (this.caidejineng4_1 == "20017") {
                        jinengjiachengzhi_1_1 = parseInt(Gerenshuxing.jinengbiao[j].chushizhi) + this.zuizhongmazhi_1 * parseFloat(Gerenshuxing.jinengbiao[j].jiacheng);
                        jinengjiachengzhi_1_1 = Math.floor(jinengjiachengzhi_1_1);
                        var suijishu = Math.floor(Math.random() * 100);
                        if (suijishu <= jinengjiachengzhi_1_1) {
                            this.chufachenmo_1_1 = "1";
                        }
                    }
                    else if (this.caidejineng4_1 == "20018") {
                        jinengjiachengzhi_1_1 = parseInt(Gerenshuxing.jinengbiao[j].chushizhi) + this.zuizhongtianzhi_1 * parseFloat(Gerenshuxing.jinengbiao[j].jiacheng);
                        jinengjiachengzhi_1_1 = Math.floor(jinengjiachengzhi_1_1);
                        this.chufahuixue_1_1 = "" + jinengjiachengzhi_1_1;
                    }
                    else if (this.caidejineng4_1 == "20019") {
                        jinengjiachengzhi_1_1 = parseInt(Gerenshuxing.jinengbiao[j].chushizhi) + this.zuizhongsuanzhi_1 * parseFloat(Gerenshuxing.jinengbiao[j].jiacheng);
                        jinengjiachengzhi_1_1 = Math.floor(jinengjiachengzhi_1_1);
                        this.chufaquanhushi_1_1 = "" + jinengjiachengzhi_1_1;
                    }
                    else if (this.caidejineng4_1 == "20020") {
                        this.chufahuiling_1_1 = "1";
                    }
                    else if (this.caidejineng4_1 == "20021") {
                        jinengjiachengzhi_1_1 = parseInt(Gerenshuxing.jinengbiao[j].chushizhi) + this.zuizhongsuanzhi_1 * parseFloat(Gerenshuxing.jinengbiao[j].jiacheng);
                        jinengjiachengzhi_1_1 = Math.floor(jinengjiachengzhi_1_1);
                        this.chufadu_1_1 = "" + jinengjiachengzhi_1_1;
                    }
                    else if (this.caidejineng4_1 == "20022") {
                        jinengjiachengzhi_1_1 = parseInt(Gerenshuxing.jinengbiao[j].chushizhi) + this.zuizhongmazhi_1 * parseFloat(Gerenshuxing.jinengbiao[j].jiacheng);
                        jinengjiachengzhi_1_1 = Math.floor(jinengjiachengzhi_1_1);
                        this.chufaxuruo_1_1 = "" + jinengjiachengzhi_1_1;
                    }
                    else if (this.caidejineng4_1 == "20023") {
                        jinengjiachengzhi_1_1 = parseInt(Gerenshuxing.jinengbiao[j].chushizhi) + this.zuizhongtianzhi_1 * parseFloat(Gerenshuxing.jinengbiao[j].jiacheng);
                        jinengjiachengzhi_1_1 = Math.floor(jinengjiachengzhi_1_1);
                        this.chufajiafang_1_1 = "" + jinengjiachengzhi_1_1;
                    }
                    else if (this.caidejineng4_1 == "20024") {
                        jinengjiachengzhi_1_1 = parseInt(Gerenshuxing.jinengbiao[j].chushizhi) + this.zuizhonglazhi_1 * parseFloat(Gerenshuxing.jinengbiao[j].jiacheng);
                        jinengjiachengzhi_1_1 = Math.floor(jinengjiachengzhi_1_1);
                        this.chufajiasu_1_1 = "" + jinengjiachengzhi_1_1;
                    }
                    else if (this.caidejineng4_1 == "20025") {
                        this.chufajianxue_1_1 = "1";
                    }
                    else if (this.caidejineng4_1 == "20026") {
                        this.chufajiangong_1_1 = "1";
                    }
                    else if (this.caidejineng4_1 == "20027") {
                        this.chufawofangjiansu_1_1 = "1";
                    }
                }
            }
        }
        //计算菜品技能2///
        if (this.caidejineng5_1 != "0") {
            for (var j = 0; j < Gerenshuxing.jinengbiao.length; j++) {
                if (Gerenshuxing.jinengbiao[j].id == this.caidejineng5_1) {
                    var jinengjiachengzhi_1_1 = 0;
                    if (this.caidejineng5_1 == "20001") {
                        jinengjiachengzhi_1_1 = parseInt(Gerenshuxing.jinengbiao[j].chushizhi) + this.zuizhonglazhi_1 * parseFloat(Gerenshuxing.jinengbiao[j].jiacheng);
                        jinengjiachengzhi_1_1 = Math.floor(jinengjiachengzhi_1_1);
                        var suijishu = Math.floor(Math.random() * 100);
                        if (suijishu <= jinengjiachengzhi_1_1) {
                            this.chufalianji_1_1 = "1";
                        }
                    }
                    else if (this.caidejineng5_1 == "20002") {
                        jinengjiachengzhi_1_1 = parseInt(Gerenshuxing.jinengbiao[j].chushizhi) + this.zuizhonglazhi_1 * parseFloat(Gerenshuxing.jinengbiao[j].jiacheng);
                        jinengjiachengzhi_1_1 = Math.floor(jinengjiachengzhi_1_1);
                        var suijishu = Math.floor(Math.random() * 100);
                        if (suijishu <= jinengjiachengzhi_1_1) {
                            this.chufalianji_1_1 = "1";
                        }
                    }
                    else if (this.caidejineng5_1 == "20003") {
                        jinengjiachengzhi_1_1 = parseInt(Gerenshuxing.jinengbiao[j].chushizhi) + this.zuizhonglazhi_1 * parseFloat(Gerenshuxing.jinengbiao[j].jiacheng);
                        jinengjiachengzhi_1_1 = Math.floor(jinengjiachengzhi_1_1);
                        this.chufabisha_1_1 = "" + jinengjiachengzhi_1_1;
                    }
                    else if (this.caidejineng5_1 == "20004") {
                        jinengjiachengzhi_1_1 = parseInt(Gerenshuxing.jinengbiao[j].chushizhi) + this.zuizhonglazhi_1 * parseFloat(Gerenshuxing.jinengbiao[j].jiacheng);
                        jinengjiachengzhi_1_1 = Math.floor(jinengjiachengzhi_1_1);
                        this.chufabisha_1_1 = "" + jinengjiachengzhi_1_1;
                    }
                    else if (this.caidejineng5_1 == "20005") {
                        jinengjiachengzhi_1_1 = parseInt(Gerenshuxing.jinengbiao[j].chushizhi) + this.zuizhongtianzhi_1 * parseFloat(Gerenshuxing.jinengbiao[j].jiacheng);
                        jinengjiachengzhi_1_1 = Math.floor(jinengjiachengzhi_1_1);
                        this.chufaxixue_1_1 = "" + jinengjiachengzhi_1_1;
                    }
                    else if (this.caidejineng5_1 == "20006") {
                        jinengjiachengzhi_1_1 = parseInt(Gerenshuxing.jinengbiao[j].chushizhi) + this.zuizhongtianzhi_1 * parseFloat(Gerenshuxing.jinengbiao[j].jiacheng);
                        jinengjiachengzhi_1_1 = Math.floor(jinengjiachengzhi_1_1);
                        this.chufaxixue_1_1 = "" + jinengjiachengzhi_1_1;
                    }
                    else if (this.caidejineng5_1 == "20007") {
                        this.chufazhuiji_1_1 = "1";
                    }
                    else if (this.caidejineng5_1 == "20008") {
                        this.chufasane_1_1 = "1";
                    }
                    else if (this.caidejineng5_1 == "20009") {
                        jinengjiachengzhi_1_1 = parseInt(Gerenshuxing.jinengbiao[j].chushizhi) + this.zuizhonglazhi_1 * parseFloat(Gerenshuxing.jinengbiao[j].jiacheng);
                        jinengjiachengzhi_1_1 = Math.floor(jinengjiachengzhi_1_1);
                        this.chufahushila_1_1 = "" + jinengjiachengzhi_1_1;
                    }
                    else if (this.caidejineng5_1 == "20010") {
                        jinengjiachengzhi_1_1 = parseInt(Gerenshuxing.jinengbiao[j].chushizhi) + this.zuizhongtianzhi_1 * parseFloat(Gerenshuxing.jinengbiao[j].jiacheng);
                        jinengjiachengzhi_1_1 = Math.floor(jinengjiachengzhi_1_1);
                        this.chufahushitian_1_1 = "" + jinengjiachengzhi_1_1;
                    }
                    else if (this.caidejineng5_1 == "20011") {
                        jinengjiachengzhi_1_1 = parseInt(Gerenshuxing.jinengbiao[j].chushizhi) + this.zuizhongsuanzhi_1 * parseFloat(Gerenshuxing.jinengbiao[j].jiacheng);
                        jinengjiachengzhi_1_1 = Math.floor(jinengjiachengzhi_1_1);
                        this.chufahushisuan_1_1 = "" + jinengjiachengzhi_1_1;
                    }
                    else if (this.caidejineng5_1 == "20012") {
                        jinengjiachengzhi_1_1 = parseInt(Gerenshuxing.jinengbiao[j].chushizhi) + this.zuizhongmazhi_1 * parseFloat(Gerenshuxing.jinengbiao[j].jiacheng);
                        jinengjiachengzhi_1_1 = Math.floor(jinengjiachengzhi_1_1);
                        this.chufahushima_1_1 = "" + jinengjiachengzhi_1_1;
                    }
                    else if (this.caidejineng5_1 == "20013") {
                        jinengjiachengzhi_1_1 = parseInt(Gerenshuxing.jinengbiao[j].chushizhi) + this.zuizhongsuanzhi_1 * parseFloat(Gerenshuxing.jinengbiao[j].jiacheng);
                        jinengjiachengzhi_1_1 = Math.floor(jinengjiachengzhi_1_1);
                        this.chufazhenshe_1_1 = "" + jinengjiachengzhi_1_1;
                    }
                    else if (this.caidejineng5_1 == "20014") {
                        jinengjiachengzhi_1_1 = parseInt(Gerenshuxing.jinengbiao[j].chushizhi) + this.zuizhongsuanzhi_1 * parseFloat(Gerenshuxing.jinengbiao[j].jiacheng);
                        jinengjiachengzhi_1_1 = Math.floor(jinengjiachengzhi_1_1);
                        this.chufaxilan_1_1 = "" + jinengjiachengzhi_1_1;
                    }
                    else if (this.caidejineng5_1 == "20015") {
                        jinengjiachengzhi_1_1 = parseInt(Gerenshuxing.jinengbiao[j].chushizhi) + this.zuizhongsuanzhi_1 * parseFloat(Gerenshuxing.jinengbiao[j].jiacheng);
                        jinengjiachengzhi_1_1 = Math.floor(jinengjiachengzhi_1_1);
                        this.chufaxilan_1_1 = "" + jinengjiachengzhi_1_1;
                    }
                    else if (this.caidejineng5_1 == "20016") {
                        jinengjiachengzhi_1_1 = parseInt(Gerenshuxing.jinengbiao[j].chushizhi) + this.zuizhongmazhi_1 * parseFloat(Gerenshuxing.jinengbiao[j].jiacheng);
                        jinengjiachengzhi_1_1 = Math.floor(jinengjiachengzhi_1_1);
                        this.chufajiansu_1_1 = "" + jinengjiachengzhi_1_1;
                    }
                    else if (this.caidejineng5_1 == "20017") {
                        jinengjiachengzhi_1_1 = parseInt(Gerenshuxing.jinengbiao[j].chushizhi) + this.zuizhongmazhi_1 * parseFloat(Gerenshuxing.jinengbiao[j].jiacheng);
                        jinengjiachengzhi_1_1 = Math.floor(jinengjiachengzhi_1_1);
                        var suijishu = Math.floor(Math.random() * 100);
                        if (suijishu <= jinengjiachengzhi_1_1) {
                            this.chufachenmo_1_1 = "1";
                        }
                    }
                    else if (this.caidejineng5_1 == "20018") {
                        jinengjiachengzhi_1_1 = parseInt(Gerenshuxing.jinengbiao[j].chushizhi) + this.zuizhongtianzhi_1 * parseFloat(Gerenshuxing.jinengbiao[j].jiacheng);
                        jinengjiachengzhi_1_1 = Math.floor(jinengjiachengzhi_1_1);
                        this.chufahuixue_1_1 = "" + jinengjiachengzhi_1_1;
                    }
                    else if (this.caidejineng5_1 == "20019") {
                        jinengjiachengzhi_1_1 = parseInt(Gerenshuxing.jinengbiao[j].chushizhi) + this.zuizhongsuanzhi_1 * parseFloat(Gerenshuxing.jinengbiao[j].jiacheng);
                        jinengjiachengzhi_1_1 = Math.floor(jinengjiachengzhi_1_1);
                        this.chufaquanhushi_1_1 = "" + jinengjiachengzhi_1_1;
                    }
                    else if (this.caidejineng5_1 == "20020") {
                        this.chufahuiling_1_1 = "1";
                    }
                    else if (this.caidejineng5_1 == "20021") {
                        jinengjiachengzhi_1_1 = parseInt(Gerenshuxing.jinengbiao[j].chushizhi) + this.zuizhongsuanzhi_1 * parseFloat(Gerenshuxing.jinengbiao[j].jiacheng);
                        jinengjiachengzhi_1_1 = Math.floor(jinengjiachengzhi_1_1);
                        this.chufadu_1_1 = "" + jinengjiachengzhi_1_1;
                    }
                    else if (this.caidejineng5_1 == "20022") {
                        jinengjiachengzhi_1_1 = parseInt(Gerenshuxing.jinengbiao[j].chushizhi) + this.zuizhongmazhi_1 * parseFloat(Gerenshuxing.jinengbiao[j].jiacheng);
                        jinengjiachengzhi_1_1 = Math.floor(jinengjiachengzhi_1_1);
                        this.chufaxuruo_1_1 = "" + jinengjiachengzhi_1_1;
                    }
                    else if (this.caidejineng5_1 == "20023") {
                        jinengjiachengzhi_1_1 = parseInt(Gerenshuxing.jinengbiao[j].chushizhi) + this.zuizhongtianzhi_1 * parseFloat(Gerenshuxing.jinengbiao[j].jiacheng);
                        jinengjiachengzhi_1_1 = Math.floor(jinengjiachengzhi_1_1);
                        this.chufajiafang_1_1 = "" + jinengjiachengzhi_1_1;
                    }
                    else if (this.caidejineng5_1 == "20024") {
                        jinengjiachengzhi_1_1 = parseInt(Gerenshuxing.jinengbiao[j].chushizhi) + this.zuizhonglazhi_1 * parseFloat(Gerenshuxing.jinengbiao[j].jiacheng);
                        jinengjiachengzhi_1_1 = Math.floor(jinengjiachengzhi_1_1);
                        this.chufajiasu_1_1 = "" + jinengjiachengzhi_1_1;
                    }
                    else if (this.caidejineng5_1 == "20025") {
                        this.chufajianxue_1_1 = "1";
                    }
                    else if (this.caidejineng5_1 == "20026") {
                        this.chufajiangong_1_1 = "1";
                    }
                    else if (this.caidejineng5_1 == "20027") {
                        this.chufawofangjiansu_1_1 = "1";
                    }
                }
            }
        }
        this.duiren1shanghai();
    };
    //队怪物2使用技能判断
    Pvpzhandoujiemian.prototype.duiren2jineng = function () {
        //初始化触发技能数据
        this.chufalianji_2_1 = "0"; //触发连击
        this.chufabisha_2_1 = "0"; //触发必杀
        this.chufaxixue_2_1 = "0"; //触发吸血
        this.chufazhuiji_2_1 = "0"; //触发追击
        this.chufasane_2_1 = "0"; //触发善恶
        this.chufahushila_2_1 = "0"; //触发忽视辣
        this.chufahushima_2_1 = "0"; //触发忽视麻
        this.chufahushisuan_2_1 = "0"; //触发忽视酸
        this.chufahushitian_2_1 = "0"; //触发忽视甜
        this.chufazhenshe_2_1 = "0"; //触发震慑
        this.chufaxilan_2_1 = "0"; //触发吸蓝
        this.chufajiansu_2_1 = "0"; //触发减速
        this.chufachenmo_2_1 = "0"; //触发沉默
        this.chufahuixue_2_1 = "0"; //触发回血
        this.chufaquanhushi_2_1 = "0"; //触发全忽视
        this.chufahuiling_2_1 = "0"; //触发回灵
        this.chufadu_2_1 = "0"; //触发毒
        this.chufaxuruo_2_1 = "0"; //触发虚弱
        this.chufajiafang_2_1 = "0"; //触发加防
        this.chufajiasu_2_1 = "0"; //触发加速
        this.chufajianxue_2_1 = "0"; //触发给我放见血
        this.chufajiangong_2_1 = "0"; //触发给我方减攻
        this.chufawofangjiansu_2_1 = "0"; //触发给我方减速
        //进入正式计算
        if (this.caidejineng1_1 != "0") {
            for (var j = 0; j < Gerenshuxing.jinengbiao.length; j++) {
                if (Gerenshuxing.jinengbiao[j].id == this.caidejineng1_1) {
                    var jinengjiachengzhi_2_1 = 0;
                    if (this.caidejineng1_1 == "20001") {
                        jinengjiachengzhi_2_1 = parseInt(Gerenshuxing.jinengbiao[j].chushizhi) + this.zuizhonglazhi_1 * parseFloat(Gerenshuxing.jinengbiao[j].jiacheng);
                        jinengjiachengzhi_2_1 = Math.floor(jinengjiachengzhi_2_1);
                        var suijishu = Math.floor(Math.random() * 100);
                        if (suijishu <= jinengjiachengzhi_2_1) {
                            this.chufalianji_2_1 = "1";
                        }
                    }
                    else if (this.caidejineng1_1 == "20002") {
                        jinengjiachengzhi_2_1 = parseInt(Gerenshuxing.jinengbiao[j].chushizhi) + this.zuizhonglazhi_1 * parseFloat(Gerenshuxing.jinengbiao[j].jiacheng);
                        jinengjiachengzhi_2_1 = Math.floor(jinengjiachengzhi_2_1);
                        var suijishu = Math.floor(Math.random() * 100);
                        if (suijishu <= jinengjiachengzhi_2_1) {
                            this.chufalianji_2_1 = "1";
                        }
                    }
                    else if (this.caidejineng1_1 == "20003") {
                        jinengjiachengzhi_2_1 = parseInt(Gerenshuxing.jinengbiao[j].chushizhi) + this.zuizhonglazhi_1 * parseFloat(Gerenshuxing.jinengbiao[j].jiacheng);
                        jinengjiachengzhi_2_1 = Math.floor(jinengjiachengzhi_2_1);
                        this.chufabisha_2_1 = "" + jinengjiachengzhi_2_1;
                    }
                    else if (this.caidejineng1_1 == "20004") {
                        jinengjiachengzhi_2_1 = parseInt(Gerenshuxing.jinengbiao[j].chushizhi) + this.zuizhonglazhi_1 * parseFloat(Gerenshuxing.jinengbiao[j].jiacheng);
                        jinengjiachengzhi_2_1 = Math.floor(jinengjiachengzhi_2_1);
                        this.chufabisha_2_1 = "" + jinengjiachengzhi_2_1;
                    }
                    else if (this.caidejineng1_1 == "20005") {
                        jinengjiachengzhi_2_1 = parseInt(Gerenshuxing.jinengbiao[j].chushizhi) + this.zuizhongtianzhi_1 * parseFloat(Gerenshuxing.jinengbiao[j].jiacheng);
                        jinengjiachengzhi_2_1 = Math.floor(jinengjiachengzhi_2_1);
                        this.chufaxixue_2_1 = "" + jinengjiachengzhi_2_1;
                    }
                    else if (this.caidejineng1_1 == "20006") {
                        jinengjiachengzhi_2_1 = parseInt(Gerenshuxing.jinengbiao[j].chushizhi) + this.zuizhongtianzhi_1 * parseFloat(Gerenshuxing.jinengbiao[j].jiacheng);
                        jinengjiachengzhi_2_1 = Math.floor(jinengjiachengzhi_2_1);
                        this.chufaxixue_2_1 = "" + jinengjiachengzhi_2_1;
                    }
                    else if (this.caidejineng1_1 == "20007") {
                        this.chufazhuiji_2_1 = "1";
                    }
                    else if (this.caidejineng1_1 == "20008") {
                        this.chufasane_2_1 = "1";
                    }
                    else if (this.caidejineng1_1 == "20009") {
                        jinengjiachengzhi_2_1 = parseInt(Gerenshuxing.jinengbiao[j].chushizhi) + this.zuizhonglazhi_1 * parseFloat(Gerenshuxing.jinengbiao[j].jiacheng);
                        jinengjiachengzhi_2_1 = Math.floor(jinengjiachengzhi_2_1);
                        this.chufahushila_2_1 = "" + jinengjiachengzhi_2_1;
                    }
                    else if (this.caidejineng1_1 == "20010") {
                        jinengjiachengzhi_2_1 = parseInt(Gerenshuxing.jinengbiao[j].chushizhi) + this.zuizhongtianzhi_1 * parseFloat(Gerenshuxing.jinengbiao[j].jiacheng);
                        jinengjiachengzhi_2_1 = Math.floor(jinengjiachengzhi_2_1);
                        this.chufahushitian_2_1 = "" + jinengjiachengzhi_2_1;
                    }
                    else if (this.caidejineng1_1 == "20011") {
                        jinengjiachengzhi_2_1 = parseInt(Gerenshuxing.jinengbiao[j].chushizhi) + this.zuizhongsuanzhi_1 * parseFloat(Gerenshuxing.jinengbiao[j].jiacheng);
                        jinengjiachengzhi_2_1 = Math.floor(jinengjiachengzhi_2_1);
                        this.chufahushisuan_2_1 = "" + jinengjiachengzhi_2_1;
                    }
                    else if (this.caidejineng1_1 == "20012") {
                        jinengjiachengzhi_2_1 = parseInt(Gerenshuxing.jinengbiao[j].chushizhi) + this.zuizhongmazhi_1 * parseFloat(Gerenshuxing.jinengbiao[j].jiacheng);
                        jinengjiachengzhi_2_1 = Math.floor(jinengjiachengzhi_2_1);
                        this.chufahushima_2_1 = "" + jinengjiachengzhi_2_1;
                    }
                    else if (this.caidejineng1_1 == "20013") {
                        jinengjiachengzhi_2_1 = parseInt(Gerenshuxing.jinengbiao[j].chushizhi) + this.zuizhongsuanzhi_1 * parseFloat(Gerenshuxing.jinengbiao[j].jiacheng);
                        jinengjiachengzhi_2_1 = Math.floor(jinengjiachengzhi_2_1);
                        this.chufazhenshe_2_1 = "" + jinengjiachengzhi_2_1;
                    }
                    else if (this.caidejineng1_1 == "20014") {
                        jinengjiachengzhi_2_1 = parseInt(Gerenshuxing.jinengbiao[j].chushizhi) + this.zuizhongsuanzhi_1 * parseFloat(Gerenshuxing.jinengbiao[j].jiacheng);
                        jinengjiachengzhi_2_1 = Math.floor(jinengjiachengzhi_2_1);
                        this.chufaxilan_2_1 = "" + jinengjiachengzhi_2_1;
                    }
                    else if (this.caidejineng1_1 == "20015") {
                        jinengjiachengzhi_2_1 = parseInt(Gerenshuxing.jinengbiao[j].chushizhi) + this.zuizhongsuanzhi_1 * parseFloat(Gerenshuxing.jinengbiao[j].jiacheng);
                        jinengjiachengzhi_2_1 = Math.floor(jinengjiachengzhi_2_1);
                        this.chufaxilan_2_1 = "" + jinengjiachengzhi_2_1;
                    }
                    else if (this.caidejineng1_1 == "20016") {
                        jinengjiachengzhi_2_1 = parseInt(Gerenshuxing.jinengbiao[j].chushizhi) + this.zuizhongmazhi_1 * parseFloat(Gerenshuxing.jinengbiao[j].jiacheng);
                        jinengjiachengzhi_2_1 = Math.floor(jinengjiachengzhi_2_1);
                        this.chufajiansu_2_1 = "" + jinengjiachengzhi_2_1;
                    }
                    else if (this.caidejineng1_1 == "20017") {
                        jinengjiachengzhi_2_1 = parseInt(Gerenshuxing.jinengbiao[j].chushizhi) + this.zuizhongmazhi_1 * parseFloat(Gerenshuxing.jinengbiao[j].jiacheng);
                        jinengjiachengzhi_2_1 = Math.floor(jinengjiachengzhi_2_1);
                        var suijishu = Math.floor(Math.random() * 100);
                        if (suijishu <= jinengjiachengzhi_2_1) {
                            this.chufachenmo_2_1 = "1";
                        }
                    }
                    else if (this.caidejineng1_1 == "20018") {
                        jinengjiachengzhi_2_1 = parseInt(Gerenshuxing.jinengbiao[j].chushizhi) + this.zuizhongtianzhi_1 * parseFloat(Gerenshuxing.jinengbiao[j].jiacheng);
                        jinengjiachengzhi_2_1 = Math.floor(jinengjiachengzhi_2_1);
                        this.chufahuixue_2_1 = "" + jinengjiachengzhi_2_1;
                    }
                    else if (this.caidejineng1_1 == "20019") {
                        jinengjiachengzhi_2_1 = parseInt(Gerenshuxing.jinengbiao[j].chushizhi) + this.zuizhongsuanzhi_1 * parseFloat(Gerenshuxing.jinengbiao[j].jiacheng);
                        jinengjiachengzhi_2_1 = Math.floor(jinengjiachengzhi_2_1);
                        this.chufaquanhushi_2_1 = "" + jinengjiachengzhi_2_1;
                    }
                    else if (this.caidejineng1_1 == "20020") {
                        this.chufahuiling_2_1 = "1";
                    }
                    else if (this.caidejineng1_1 == "20021") {
                        jinengjiachengzhi_2_1 = parseInt(Gerenshuxing.jinengbiao[j].chushizhi) + this.zuizhongsuanzhi_1 * parseFloat(Gerenshuxing.jinengbiao[j].jiacheng);
                        jinengjiachengzhi_2_1 = Math.floor(jinengjiachengzhi_2_1);
                        this.chufadu_2_1 = "" + jinengjiachengzhi_2_1;
                    }
                    else if (this.caidejineng1_1 == "20022") {
                        jinengjiachengzhi_2_1 = parseInt(Gerenshuxing.jinengbiao[j].chushizhi) + this.zuizhongmazhi_1 * parseFloat(Gerenshuxing.jinengbiao[j].jiacheng);
                        jinengjiachengzhi_2_1 = Math.floor(jinengjiachengzhi_2_1);
                        this.chufaxuruo_2_1 = "" + jinengjiachengzhi_2_1;
                    }
                    else if (this.caidejineng1_1 == "20023") {
                        jinengjiachengzhi_2_1 = parseInt(Gerenshuxing.jinengbiao[j].chushizhi) + this.zuizhongtianzhi_1 * parseFloat(Gerenshuxing.jinengbiao[j].jiacheng);
                        jinengjiachengzhi_2_1 = Math.floor(jinengjiachengzhi_2_1);
                        this.chufajiafang_2_1 = "" + jinengjiachengzhi_2_1;
                    }
                    else if (this.caidejineng1_1 == "20024") {
                        jinengjiachengzhi_2_1 = parseInt(Gerenshuxing.jinengbiao[j].chushizhi) + this.zuizhonglazhi_1 * parseFloat(Gerenshuxing.jinengbiao[j].jiacheng);
                        jinengjiachengzhi_2_1 = Math.floor(jinengjiachengzhi_2_1);
                        this.chufajiasu_2_1 = "" + jinengjiachengzhi_2_1;
                    }
                    else if (this.caidejineng1_1 == "20025") {
                        this.chufajianxue_2_1 = "1";
                    }
                    else if (this.caidejineng1_1 == "20026") {
                        this.chufajiangong_2_1 = "1";
                    }
                    else if (this.caidejineng1_1 == "20027") {
                        this.chufawofangjiansu_2_1 = "1";
                    }
                }
            }
        }
        //计算菜品技能2///
        if (this.caidejineng2_1 != "0") {
            for (var j = 0; j < Gerenshuxing.jinengbiao.length; j++) {
                if (Gerenshuxing.jinengbiao[j].id == this.caidejineng2_1) {
                    var jinengjiachengzhi_2_1 = 0;
                    if (this.caidejineng2_1 == "20001") {
                        jinengjiachengzhi_2_1 = parseInt(Gerenshuxing.jinengbiao[j].chushizhi) + this.zuizhonglazhi_1 * parseFloat(Gerenshuxing.jinengbiao[j].jiacheng);
                        jinengjiachengzhi_2_1 = Math.floor(jinengjiachengzhi_2_1);
                        var suijishu = Math.floor(Math.random() * 100);
                        if (suijishu <= jinengjiachengzhi_2_1) {
                            this.chufalianji_2_1 = "1";
                        }
                    }
                    else if (this.caidejineng2_1 == "20002") {
                        jinengjiachengzhi_2_1 = parseInt(Gerenshuxing.jinengbiao[j].chushizhi) + this.zuizhonglazhi_1 * parseFloat(Gerenshuxing.jinengbiao[j].jiacheng);
                        jinengjiachengzhi_2_1 = Math.floor(jinengjiachengzhi_2_1);
                        var suijishu = Math.floor(Math.random() * 100);
                        if (suijishu <= jinengjiachengzhi_2_1) {
                            this.chufalianji_2_1 = "1";
                        }
                    }
                    else if (this.caidejineng2_1 == "20003") {
                        jinengjiachengzhi_2_1 = parseInt(Gerenshuxing.jinengbiao[j].chushizhi) + this.zuizhonglazhi_1 * parseFloat(Gerenshuxing.jinengbiao[j].jiacheng);
                        jinengjiachengzhi_2_1 = Math.floor(jinengjiachengzhi_2_1);
                        this.chufabisha_2_1 = "" + jinengjiachengzhi_2_1;
                    }
                    else if (this.caidejineng2_1 == "20004") {
                        jinengjiachengzhi_2_1 = parseInt(Gerenshuxing.jinengbiao[j].chushizhi) + this.zuizhonglazhi_1 * parseFloat(Gerenshuxing.jinengbiao[j].jiacheng);
                        jinengjiachengzhi_2_1 = Math.floor(jinengjiachengzhi_2_1);
                        this.chufabisha_2_1 = "" + jinengjiachengzhi_2_1;
                    }
                    else if (this.caidejineng2_1 == "20005") {
                        jinengjiachengzhi_2_1 = parseInt(Gerenshuxing.jinengbiao[j].chushizhi) + this.zuizhongtianzhi_1 * parseFloat(Gerenshuxing.jinengbiao[j].jiacheng);
                        jinengjiachengzhi_2_1 = Math.floor(jinengjiachengzhi_2_1);
                        this.chufaxixue_2_1 = "" + jinengjiachengzhi_2_1;
                    }
                    else if (this.caidejineng2_1 == "20006") {
                        jinengjiachengzhi_2_1 = parseInt(Gerenshuxing.jinengbiao[j].chushizhi) + this.zuizhongtianzhi_1 * parseFloat(Gerenshuxing.jinengbiao[j].jiacheng);
                        jinengjiachengzhi_2_1 = Math.floor(jinengjiachengzhi_2_1);
                        this.chufaxixue_2_1 = "" + jinengjiachengzhi_2_1;
                    }
                    else if (this.caidejineng2_1 == "20007") {
                        this.chufazhuiji_2_1 = "1";
                    }
                    else if (this.caidejineng2_1 == "20008") {
                        this.chufasane_2_1 = "1";
                    }
                    else if (this.caidejineng2_1 == "20009") {
                        jinengjiachengzhi_2_1 = parseInt(Gerenshuxing.jinengbiao[j].chushizhi) + this.zuizhonglazhi_1 * parseFloat(Gerenshuxing.jinengbiao[j].jiacheng);
                        jinengjiachengzhi_2_1 = Math.floor(jinengjiachengzhi_2_1);
                        this.chufahushila_2_1 = "" + jinengjiachengzhi_2_1;
                    }
                    else if (this.caidejineng2_1 == "20010") {
                        jinengjiachengzhi_2_1 = parseInt(Gerenshuxing.jinengbiao[j].chushizhi) + this.zuizhongtianzhi_1 * parseFloat(Gerenshuxing.jinengbiao[j].jiacheng);
                        jinengjiachengzhi_2_1 = Math.floor(jinengjiachengzhi_2_1);
                        this.chufahushitian_2_1 = "" + jinengjiachengzhi_2_1;
                    }
                    else if (this.caidejineng2_1 == "20011") {
                        jinengjiachengzhi_2_1 = parseInt(Gerenshuxing.jinengbiao[j].chushizhi) + this.zuizhongsuanzhi_1 * parseFloat(Gerenshuxing.jinengbiao[j].jiacheng);
                        jinengjiachengzhi_2_1 = Math.floor(jinengjiachengzhi_2_1);
                        this.chufahushisuan_2_1 = "" + jinengjiachengzhi_2_1;
                    }
                    else if (this.caidejineng2_1 == "20012") {
                        jinengjiachengzhi_2_1 = parseInt(Gerenshuxing.jinengbiao[j].chushizhi) + this.zuizhongmazhi_1 * parseFloat(Gerenshuxing.jinengbiao[j].jiacheng);
                        jinengjiachengzhi_2_1 = Math.floor(jinengjiachengzhi_2_1);
                        this.chufahushima_2_1 = "" + jinengjiachengzhi_2_1;
                    }
                    else if (this.caidejineng2_1 == "20013") {
                        jinengjiachengzhi_2_1 = parseInt(Gerenshuxing.jinengbiao[j].chushizhi) + this.zuizhongsuanzhi_1 * parseFloat(Gerenshuxing.jinengbiao[j].jiacheng);
                        jinengjiachengzhi_2_1 = Math.floor(jinengjiachengzhi_2_1);
                        this.chufazhenshe_2_1 = "" + jinengjiachengzhi_2_1;
                    }
                    else if (this.caidejineng2_1 == "20014") {
                        jinengjiachengzhi_2_1 = parseInt(Gerenshuxing.jinengbiao[j].chushizhi) + this.zuizhongsuanzhi_1 * parseFloat(Gerenshuxing.jinengbiao[j].jiacheng);
                        jinengjiachengzhi_2_1 = Math.floor(jinengjiachengzhi_2_1);
                        this.chufaxilan_2_1 = "" + jinengjiachengzhi_2_1;
                    }
                    else if (this.caidejineng2_1 == "20015") {
                        jinengjiachengzhi_2_1 = parseInt(Gerenshuxing.jinengbiao[j].chushizhi) + this.zuizhongsuanzhi_1 * parseFloat(Gerenshuxing.jinengbiao[j].jiacheng);
                        jinengjiachengzhi_2_1 = Math.floor(jinengjiachengzhi_2_1);
                        this.chufaxilan_2_1 = "" + jinengjiachengzhi_2_1;
                    }
                    else if (this.caidejineng2_1 == "20016") {
                        jinengjiachengzhi_2_1 = parseInt(Gerenshuxing.jinengbiao[j].chushizhi) + this.zuizhongmazhi_1 * parseFloat(Gerenshuxing.jinengbiao[j].jiacheng);
                        jinengjiachengzhi_2_1 = Math.floor(jinengjiachengzhi_2_1);
                        this.chufajiansu_2_1 = "" + jinengjiachengzhi_2_1;
                    }
                    else if (this.caidejineng2_1 == "20017") {
                        jinengjiachengzhi_2_1 = parseInt(Gerenshuxing.jinengbiao[j].chushizhi) + this.zuizhongmazhi_1 * parseFloat(Gerenshuxing.jinengbiao[j].jiacheng);
                        jinengjiachengzhi_2_1 = Math.floor(jinengjiachengzhi_2_1);
                        var suijishu = Math.floor(Math.random() * 100);
                        if (suijishu <= jinengjiachengzhi_2_1) {
                            this.chufachenmo_2_1 = "1";
                        }
                    }
                    else if (this.caidejineng2_1 == "20018") {
                        jinengjiachengzhi_2_1 = parseInt(Gerenshuxing.jinengbiao[j].chushizhi) + this.zuizhongtianzhi_1 * parseFloat(Gerenshuxing.jinengbiao[j].jiacheng);
                        jinengjiachengzhi_2_1 = Math.floor(jinengjiachengzhi_2_1);
                        this.chufahuixue_2_1 = "" + jinengjiachengzhi_2_1;
                    }
                    else if (this.caidejineng2_1 == "20019") {
                        jinengjiachengzhi_2_1 = parseInt(Gerenshuxing.jinengbiao[j].chushizhi) + this.zuizhongsuanzhi_1 * parseFloat(Gerenshuxing.jinengbiao[j].jiacheng);
                        jinengjiachengzhi_2_1 = Math.floor(jinengjiachengzhi_2_1);
                        this.chufaquanhushi_2_1 = "" + jinengjiachengzhi_2_1;
                    }
                    else if (this.caidejineng2_1 == "20020") {
                        this.chufahuiling_2_1 = "1";
                    }
                    else if (this.caidejineng2_1 == "20021") {
                        jinengjiachengzhi_2_1 = parseInt(Gerenshuxing.jinengbiao[j].chushizhi) + this.zuizhongsuanzhi_1 * parseFloat(Gerenshuxing.jinengbiao[j].jiacheng);
                        jinengjiachengzhi_2_1 = Math.floor(jinengjiachengzhi_2_1);
                        this.chufadu_2_1 = "" + jinengjiachengzhi_2_1;
                    }
                    else if (this.caidejineng2_1 == "20022") {
                        jinengjiachengzhi_2_1 = parseInt(Gerenshuxing.jinengbiao[j].chushizhi) + this.zuizhongmazhi_1 * parseFloat(Gerenshuxing.jinengbiao[j].jiacheng);
                        jinengjiachengzhi_2_1 = Math.floor(jinengjiachengzhi_2_1);
                        this.chufaxuruo_2_1 = "" + jinengjiachengzhi_2_1;
                    }
                    else if (this.caidejineng2_1 == "20023") {
                        jinengjiachengzhi_2_1 = parseInt(Gerenshuxing.jinengbiao[j].chushizhi) + this.zuizhongtianzhi_1 * parseFloat(Gerenshuxing.jinengbiao[j].jiacheng);
                        jinengjiachengzhi_2_1 = Math.floor(jinengjiachengzhi_2_1);
                        this.chufajiafang_2_1 = "" + jinengjiachengzhi_2_1;
                    }
                    else if (this.caidejineng2_1 == "20024") {
                        jinengjiachengzhi_2_1 = parseInt(Gerenshuxing.jinengbiao[j].chushizhi) + this.zuizhonglazhi_1 * parseFloat(Gerenshuxing.jinengbiao[j].jiacheng);
                        jinengjiachengzhi_2_1 = Math.floor(jinengjiachengzhi_2_1);
                        this.chufajiasu_2_1 = "" + jinengjiachengzhi_2_1;
                    }
                    else if (this.caidejineng2_1 == "20025") {
                        this.chufajianxue_2_1 = "1";
                    }
                    else if (this.caidejineng2_1 == "20026") {
                        this.chufajiangong_2_1 = "1";
                    }
                    else if (this.caidejineng2_1 == "20027") {
                        this.chufawofangjiansu_2_1 = "1";
                    }
                }
            }
        }
        //计算菜品技能2///
        if (this.caidejineng3_1 != "0") {
            for (var j = 0; j < Gerenshuxing.jinengbiao.length; j++) {
                if (Gerenshuxing.jinengbiao[j].id == this.caidejineng3_1) {
                    var jinengjiachengzhi_2_1 = 0;
                    if (this.caidejineng3_1 == "20001") {
                        jinengjiachengzhi_2_1 = parseInt(Gerenshuxing.jinengbiao[j].chushizhi) + this.zuizhonglazhi_1 * parseFloat(Gerenshuxing.jinengbiao[j].jiacheng);
                        jinengjiachengzhi_2_1 = Math.floor(jinengjiachengzhi_2_1);
                        var suijishu = Math.floor(Math.random() * 100);
                        if (suijishu <= jinengjiachengzhi_2_1) {
                            this.chufalianji_2_1 = "1";
                        }
                    }
                    else if (this.caidejineng3_1 == "20002") {
                        jinengjiachengzhi_2_1 = parseInt(Gerenshuxing.jinengbiao[j].chushizhi) + this.zuizhonglazhi_1 * parseFloat(Gerenshuxing.jinengbiao[j].jiacheng);
                        jinengjiachengzhi_2_1 = Math.floor(jinengjiachengzhi_2_1);
                        var suijishu = Math.floor(Math.random() * 100);
                        if (suijishu <= jinengjiachengzhi_2_1) {
                            this.chufalianji_2_1 = "1";
                        }
                    }
                    else if (this.caidejineng3_1 == "20003") {
                        jinengjiachengzhi_2_1 = parseInt(Gerenshuxing.jinengbiao[j].chushizhi) + this.zuizhonglazhi_1 * parseFloat(Gerenshuxing.jinengbiao[j].jiacheng);
                        jinengjiachengzhi_2_1 = Math.floor(jinengjiachengzhi_2_1);
                        this.chufabisha_2_1 = "" + jinengjiachengzhi_2_1;
                    }
                    else if (this.caidejineng3_1 == "20004") {
                        jinengjiachengzhi_2_1 = parseInt(Gerenshuxing.jinengbiao[j].chushizhi) + this.zuizhonglazhi_1 * parseFloat(Gerenshuxing.jinengbiao[j].jiacheng);
                        jinengjiachengzhi_2_1 = Math.floor(jinengjiachengzhi_2_1);
                        this.chufabisha_2_1 = "" + jinengjiachengzhi_2_1;
                    }
                    else if (this.caidejineng3_1 == "20005") {
                        jinengjiachengzhi_2_1 = parseInt(Gerenshuxing.jinengbiao[j].chushizhi) + this.zuizhongtianzhi_1 * parseFloat(Gerenshuxing.jinengbiao[j].jiacheng);
                        jinengjiachengzhi_2_1 = Math.floor(jinengjiachengzhi_2_1);
                        this.chufaxixue_2_1 = "" + jinengjiachengzhi_2_1;
                    }
                    else if (this.caidejineng3_1 == "20006") {
                        jinengjiachengzhi_2_1 = parseInt(Gerenshuxing.jinengbiao[j].chushizhi) + this.zuizhongtianzhi_1 * parseFloat(Gerenshuxing.jinengbiao[j].jiacheng);
                        jinengjiachengzhi_2_1 = Math.floor(jinengjiachengzhi_2_1);
                        this.chufaxixue_2_1 = "" + jinengjiachengzhi_2_1;
                    }
                    else if (this.caidejineng3_1 == "20007") {
                        this.chufazhuiji_2_1 = "1";
                    }
                    else if (this.caidejineng3_1 == "20008") {
                        this.chufasane_2_1 = "1";
                    }
                    else if (this.caidejineng3_1 == "20009") {
                        jinengjiachengzhi_2_1 = parseInt(Gerenshuxing.jinengbiao[j].chushizhi) + this.zuizhonglazhi_1 * parseFloat(Gerenshuxing.jinengbiao[j].jiacheng);
                        jinengjiachengzhi_2_1 = Math.floor(jinengjiachengzhi_2_1);
                        this.chufahushila_2_1 = "" + jinengjiachengzhi_2_1;
                    }
                    else if (this.caidejineng3_1 == "20010") {
                        jinengjiachengzhi_2_1 = parseInt(Gerenshuxing.jinengbiao[j].chushizhi) + this.zuizhongtianzhi_1 * parseFloat(Gerenshuxing.jinengbiao[j].jiacheng);
                        jinengjiachengzhi_2_1 = Math.floor(jinengjiachengzhi_2_1);
                        this.chufahushitian_2_1 = "" + jinengjiachengzhi_2_1;
                    }
                    else if (this.caidejineng3_1 == "20011") {
                        jinengjiachengzhi_2_1 = parseInt(Gerenshuxing.jinengbiao[j].chushizhi) + this.zuizhongsuanzhi_1 * parseFloat(Gerenshuxing.jinengbiao[j].jiacheng);
                        jinengjiachengzhi_2_1 = Math.floor(jinengjiachengzhi_2_1);
                        this.chufahushisuan_2_1 = "" + jinengjiachengzhi_2_1;
                    }
                    else if (this.caidejineng3_1 == "20012") {
                        jinengjiachengzhi_2_1 = parseInt(Gerenshuxing.jinengbiao[j].chushizhi) + this.zuizhongmazhi_1 * parseFloat(Gerenshuxing.jinengbiao[j].jiacheng);
                        jinengjiachengzhi_2_1 = Math.floor(jinengjiachengzhi_2_1);
                        this.chufahushima_2_1 = "" + jinengjiachengzhi_2_1;
                    }
                    else if (this.caidejineng3_1 == "20013") {
                        jinengjiachengzhi_2_1 = parseInt(Gerenshuxing.jinengbiao[j].chushizhi) + this.zuizhongsuanzhi_1 * parseFloat(Gerenshuxing.jinengbiao[j].jiacheng);
                        jinengjiachengzhi_2_1 = Math.floor(jinengjiachengzhi_2_1);
                        this.chufazhenshe_2_1 = "" + jinengjiachengzhi_2_1;
                    }
                    else if (this.caidejineng3_1 == "20014") {
                        jinengjiachengzhi_2_1 = parseInt(Gerenshuxing.jinengbiao[j].chushizhi) + this.zuizhongsuanzhi_1 * parseFloat(Gerenshuxing.jinengbiao[j].jiacheng);
                        jinengjiachengzhi_2_1 = Math.floor(jinengjiachengzhi_2_1);
                        this.chufaxilan_2_1 = "" + jinengjiachengzhi_2_1;
                    }
                    else if (this.caidejineng3_1 == "20015") {
                        jinengjiachengzhi_2_1 = parseInt(Gerenshuxing.jinengbiao[j].chushizhi) + this.zuizhongsuanzhi_1 * parseFloat(Gerenshuxing.jinengbiao[j].jiacheng);
                        jinengjiachengzhi_2_1 = Math.floor(jinengjiachengzhi_2_1);
                        this.chufaxilan_2_1 = "" + jinengjiachengzhi_2_1;
                    }
                    else if (this.caidejineng3_1 == "20016") {
                        jinengjiachengzhi_2_1 = parseInt(Gerenshuxing.jinengbiao[j].chushizhi) + this.zuizhongmazhi_1 * parseFloat(Gerenshuxing.jinengbiao[j].jiacheng);
                        jinengjiachengzhi_2_1 = Math.floor(jinengjiachengzhi_2_1);
                        this.chufajiansu_2_1 = "" + jinengjiachengzhi_2_1;
                    }
                    else if (this.caidejineng3_1 == "20017") {
                        jinengjiachengzhi_2_1 = parseInt(Gerenshuxing.jinengbiao[j].chushizhi) + this.zuizhongmazhi_1 * parseFloat(Gerenshuxing.jinengbiao[j].jiacheng);
                        jinengjiachengzhi_2_1 = Math.floor(jinengjiachengzhi_2_1);
                        var suijishu = Math.floor(Math.random() * 100);
                        if (suijishu <= jinengjiachengzhi_2_1) {
                            this.chufachenmo_2_1 = "1";
                        }
                    }
                    else if (this.caidejineng3_1 == "20018") {
                        jinengjiachengzhi_2_1 = parseInt(Gerenshuxing.jinengbiao[j].chushizhi) + this.zuizhongtianzhi_1 * parseFloat(Gerenshuxing.jinengbiao[j].jiacheng);
                        jinengjiachengzhi_2_1 = Math.floor(jinengjiachengzhi_2_1);
                        this.chufahuixue_2_1 = "" + jinengjiachengzhi_2_1;
                    }
                    else if (this.caidejineng3_1 == "20019") {
                        jinengjiachengzhi_2_1 = parseInt(Gerenshuxing.jinengbiao[j].chushizhi) + this.zuizhongsuanzhi_1 * parseFloat(Gerenshuxing.jinengbiao[j].jiacheng);
                        jinengjiachengzhi_2_1 = Math.floor(jinengjiachengzhi_2_1);
                        this.chufaquanhushi_2_1 = "" + jinengjiachengzhi_2_1;
                    }
                    else if (this.caidejineng3_1 == "20020") {
                        this.chufahuiling_2_1 = "1";
                    }
                    else if (this.caidejineng3_1 == "20021") {
                        jinengjiachengzhi_2_1 = parseInt(Gerenshuxing.jinengbiao[j].chushizhi) + this.zuizhongsuanzhi_1 * parseFloat(Gerenshuxing.jinengbiao[j].jiacheng);
                        jinengjiachengzhi_2_1 = Math.floor(jinengjiachengzhi_2_1);
                        this.chufadu_2_1 = "" + jinengjiachengzhi_2_1;
                    }
                    else if (this.caidejineng3_1 == "20022") {
                        jinengjiachengzhi_2_1 = parseInt(Gerenshuxing.jinengbiao[j].chushizhi) + this.zuizhongmazhi_1 * parseFloat(Gerenshuxing.jinengbiao[j].jiacheng);
                        jinengjiachengzhi_2_1 = Math.floor(jinengjiachengzhi_2_1);
                        this.chufaxuruo_2_1 = "" + jinengjiachengzhi_2_1;
                    }
                    else if (this.caidejineng3_1 == "20023") {
                        jinengjiachengzhi_2_1 = parseInt(Gerenshuxing.jinengbiao[j].chushizhi) + this.zuizhongtianzhi_1 * parseFloat(Gerenshuxing.jinengbiao[j].jiacheng);
                        jinengjiachengzhi_2_1 = Math.floor(jinengjiachengzhi_2_1);
                        this.chufajiafang_2_1 = "" + jinengjiachengzhi_2_1;
                    }
                    else if (this.caidejineng3_1 == "20024") {
                        jinengjiachengzhi_2_1 = parseInt(Gerenshuxing.jinengbiao[j].chushizhi) + this.zuizhonglazhi_1 * parseFloat(Gerenshuxing.jinengbiao[j].jiacheng);
                        jinengjiachengzhi_2_1 = Math.floor(jinengjiachengzhi_2_1);
                        this.chufajiasu_2_1 = "" + jinengjiachengzhi_2_1;
                    }
                    else if (this.caidejineng3_1 == "20025") {
                        this.chufajianxue_2_1 = "1";
                    }
                    else if (this.caidejineng3_1 == "20026") {
                        this.chufajiangong_2_1 = "1";
                    }
                    else if (this.caidejineng3_1 == "20027") {
                        this.chufawofangjiansu_2_1 = "1";
                    }
                }
            }
        }
        //计算菜品技能2///
        if (this.caidejineng4_1 != "0") {
            for (var j = 0; j < Gerenshuxing.jinengbiao.length; j++) {
                if (Gerenshuxing.jinengbiao[j].id == this.caidejineng4_1) {
                    var jinengjiachengzhi_2_1 = 0;
                    if (this.caidejineng4_1 == "20001") {
                        jinengjiachengzhi_2_1 = parseInt(Gerenshuxing.jinengbiao[j].chushizhi) + this.zuizhonglazhi_1 * parseFloat(Gerenshuxing.jinengbiao[j].jiacheng);
                        jinengjiachengzhi_2_1 = Math.floor(jinengjiachengzhi_2_1);
                        var suijishu = Math.floor(Math.random() * 100);
                        if (suijishu <= jinengjiachengzhi_2_1) {
                            this.chufalianji_2_1 = "1";
                        }
                    }
                    else if (this.caidejineng4_1 == "20002") {
                        jinengjiachengzhi_2_1 = parseInt(Gerenshuxing.jinengbiao[j].chushizhi) + this.zuizhonglazhi_1 * parseFloat(Gerenshuxing.jinengbiao[j].jiacheng);
                        jinengjiachengzhi_2_1 = Math.floor(jinengjiachengzhi_2_1);
                        var suijishu = Math.floor(Math.random() * 100);
                        if (suijishu <= jinengjiachengzhi_2_1) {
                            this.chufalianji_2_1 = "1";
                        }
                    }
                    else if (this.caidejineng4_1 == "20003") {
                        jinengjiachengzhi_2_1 = parseInt(Gerenshuxing.jinengbiao[j].chushizhi) + this.zuizhonglazhi_1 * parseFloat(Gerenshuxing.jinengbiao[j].jiacheng);
                        jinengjiachengzhi_2_1 = Math.floor(jinengjiachengzhi_2_1);
                        this.chufabisha_2_1 = "" + jinengjiachengzhi_2_1;
                    }
                    else if (this.caidejineng4_1 == "20004") {
                        jinengjiachengzhi_2_1 = parseInt(Gerenshuxing.jinengbiao[j].chushizhi) + this.zuizhonglazhi_1 * parseFloat(Gerenshuxing.jinengbiao[j].jiacheng);
                        jinengjiachengzhi_2_1 = Math.floor(jinengjiachengzhi_2_1);
                        this.chufabisha_2_1 = "" + jinengjiachengzhi_2_1;
                    }
                    else if (this.caidejineng4_1 == "20005") {
                        jinengjiachengzhi_2_1 = parseInt(Gerenshuxing.jinengbiao[j].chushizhi) + this.zuizhongtianzhi_1 * parseFloat(Gerenshuxing.jinengbiao[j].jiacheng);
                        jinengjiachengzhi_2_1 = Math.floor(jinengjiachengzhi_2_1);
                        this.chufaxixue_2_1 = "" + jinengjiachengzhi_2_1;
                    }
                    else if (this.caidejineng4_1 == "20006") {
                        jinengjiachengzhi_2_1 = parseInt(Gerenshuxing.jinengbiao[j].chushizhi) + this.zuizhongtianzhi_1 * parseFloat(Gerenshuxing.jinengbiao[j].jiacheng);
                        jinengjiachengzhi_2_1 = Math.floor(jinengjiachengzhi_2_1);
                        this.chufaxixue_2_1 = "" + jinengjiachengzhi_2_1;
                    }
                    else if (this.caidejineng4_1 == "20007") {
                        this.chufazhuiji_2_1 = "1";
                    }
                    else if (this.caidejineng4_1 == "20008") {
                        this.chufasane_2_1 = "1";
                    }
                    else if (this.caidejineng4_1 == "20009") {
                        jinengjiachengzhi_2_1 = parseInt(Gerenshuxing.jinengbiao[j].chushizhi) + this.zuizhonglazhi_1 * parseFloat(Gerenshuxing.jinengbiao[j].jiacheng);
                        jinengjiachengzhi_2_1 = Math.floor(jinengjiachengzhi_2_1);
                        this.chufahushila_2_1 = "" + jinengjiachengzhi_2_1;
                    }
                    else if (this.caidejineng4_1 == "20010") {
                        jinengjiachengzhi_2_1 = parseInt(Gerenshuxing.jinengbiao[j].chushizhi) + this.zuizhongtianzhi_1 * parseFloat(Gerenshuxing.jinengbiao[j].jiacheng);
                        jinengjiachengzhi_2_1 = Math.floor(jinengjiachengzhi_2_1);
                        this.chufahushitian_2_1 = "" + jinengjiachengzhi_2_1;
                    }
                    else if (this.caidejineng4_1 == "20011") {
                        jinengjiachengzhi_2_1 = parseInt(Gerenshuxing.jinengbiao[j].chushizhi) + this.zuizhongsuanzhi_1 * parseFloat(Gerenshuxing.jinengbiao[j].jiacheng);
                        jinengjiachengzhi_2_1 = Math.floor(jinengjiachengzhi_2_1);
                        this.chufahushisuan_2_1 = "" + jinengjiachengzhi_2_1;
                    }
                    else if (this.caidejineng4_1 == "20012") {
                        jinengjiachengzhi_2_1 = parseInt(Gerenshuxing.jinengbiao[j].chushizhi) + this.zuizhongmazhi_1 * parseFloat(Gerenshuxing.jinengbiao[j].jiacheng);
                        jinengjiachengzhi_2_1 = Math.floor(jinengjiachengzhi_2_1);
                        this.chufahushima_2_1 = "" + jinengjiachengzhi_2_1;
                    }
                    else if (this.caidejineng4_1 == "20013") {
                        jinengjiachengzhi_2_1 = parseInt(Gerenshuxing.jinengbiao[j].chushizhi) + this.zuizhongsuanzhi_1 * parseFloat(Gerenshuxing.jinengbiao[j].jiacheng);
                        jinengjiachengzhi_2_1 = Math.floor(jinengjiachengzhi_2_1);
                        this.chufazhenshe_2_1 = "" + jinengjiachengzhi_2_1;
                    }
                    else if (this.caidejineng4_1 == "20014") {
                        jinengjiachengzhi_2_1 = parseInt(Gerenshuxing.jinengbiao[j].chushizhi) + this.zuizhongsuanzhi_1 * parseFloat(Gerenshuxing.jinengbiao[j].jiacheng);
                        jinengjiachengzhi_2_1 = Math.floor(jinengjiachengzhi_2_1);
                        this.chufaxilan_2_1 = "" + jinengjiachengzhi_2_1;
                    }
                    else if (this.caidejineng4_1 == "20015") {
                        jinengjiachengzhi_2_1 = parseInt(Gerenshuxing.jinengbiao[j].chushizhi) + this.zuizhongsuanzhi_1 * parseFloat(Gerenshuxing.jinengbiao[j].jiacheng);
                        jinengjiachengzhi_2_1 = Math.floor(jinengjiachengzhi_2_1);
                        this.chufaxilan_2_1 = "" + jinengjiachengzhi_2_1;
                    }
                    else if (this.caidejineng4_1 == "20016") {
                        jinengjiachengzhi_2_1 = parseInt(Gerenshuxing.jinengbiao[j].chushizhi) + this.zuizhongmazhi_1 * parseFloat(Gerenshuxing.jinengbiao[j].jiacheng);
                        jinengjiachengzhi_2_1 = Math.floor(jinengjiachengzhi_2_1);
                        this.chufajiansu_2_1 = "" + jinengjiachengzhi_2_1;
                    }
                    else if (this.caidejineng4_1 == "20017") {
                        jinengjiachengzhi_2_1 = parseInt(Gerenshuxing.jinengbiao[j].chushizhi) + this.zuizhongmazhi_1 * parseFloat(Gerenshuxing.jinengbiao[j].jiacheng);
                        jinengjiachengzhi_2_1 = Math.floor(jinengjiachengzhi_2_1);
                        var suijishu = Math.floor(Math.random() * 100);
                        if (suijishu <= jinengjiachengzhi_2_1) {
                            this.chufachenmo_2_1 = "1";
                        }
                    }
                    else if (this.caidejineng4_1 == "20018") {
                        jinengjiachengzhi_2_1 = parseInt(Gerenshuxing.jinengbiao[j].chushizhi) + this.zuizhongtianzhi_1 * parseFloat(Gerenshuxing.jinengbiao[j].jiacheng);
                        jinengjiachengzhi_2_1 = Math.floor(jinengjiachengzhi_2_1);
                        this.chufahuixue_2_1 = "" + jinengjiachengzhi_2_1;
                    }
                    else if (this.caidejineng4_1 == "20019") {
                        jinengjiachengzhi_2_1 = parseInt(Gerenshuxing.jinengbiao[j].chushizhi) + this.zuizhongsuanzhi_1 * parseFloat(Gerenshuxing.jinengbiao[j].jiacheng);
                        jinengjiachengzhi_2_1 = Math.floor(jinengjiachengzhi_2_1);
                        this.chufaquanhushi_2_1 = "" + jinengjiachengzhi_2_1;
                    }
                    else if (this.caidejineng4_1 == "20020") {
                        this.chufahuiling_2_1 = "1";
                    }
                    else if (this.caidejineng4_1 == "20021") {
                        jinengjiachengzhi_2_1 = parseInt(Gerenshuxing.jinengbiao[j].chushizhi) + this.zuizhongsuanzhi_1 * parseFloat(Gerenshuxing.jinengbiao[j].jiacheng);
                        jinengjiachengzhi_2_1 = Math.floor(jinengjiachengzhi_2_1);
                        this.chufadu_2_1 = "" + jinengjiachengzhi_2_1;
                    }
                    else if (this.caidejineng4_1 == "20022") {
                        jinengjiachengzhi_2_1 = parseInt(Gerenshuxing.jinengbiao[j].chushizhi) + this.zuizhongmazhi_1 * parseFloat(Gerenshuxing.jinengbiao[j].jiacheng);
                        jinengjiachengzhi_2_1 = Math.floor(jinengjiachengzhi_2_1);
                        this.chufaxuruo_2_1 = "" + jinengjiachengzhi_2_1;
                    }
                    else if (this.caidejineng4_1 == "20023") {
                        jinengjiachengzhi_2_1 = parseInt(Gerenshuxing.jinengbiao[j].chushizhi) + this.zuizhongtianzhi_1 * parseFloat(Gerenshuxing.jinengbiao[j].jiacheng);
                        jinengjiachengzhi_2_1 = Math.floor(jinengjiachengzhi_2_1);
                        this.chufajiafang_2_1 = "" + jinengjiachengzhi_2_1;
                    }
                    else if (this.caidejineng4_1 == "20024") {
                        jinengjiachengzhi_2_1 = parseInt(Gerenshuxing.jinengbiao[j].chushizhi) + this.zuizhonglazhi_1 * parseFloat(Gerenshuxing.jinengbiao[j].jiacheng);
                        jinengjiachengzhi_2_1 = Math.floor(jinengjiachengzhi_2_1);
                        this.chufajiasu_2_1 = "" + jinengjiachengzhi_2_1;
                    }
                    else if (this.caidejineng4_1 == "20025") {
                        this.chufajianxue_2_1 = "1";
                    }
                    else if (this.caidejineng4_1 == "20026") {
                        this.chufajiangong_2_1 = "1";
                    }
                    else if (this.caidejineng4_1 == "20027") {
                        this.chufawofangjiansu_2_1 = "1";
                    }
                }
            }
        }
        //计算菜品技能2///
        if (this.caidejineng5_1 != "0") {
            for (var j = 0; j < Gerenshuxing.jinengbiao.length; j++) {
                if (Gerenshuxing.jinengbiao[j].id == this.caidejineng5_1) {
                    var jinengjiachengzhi_2_1 = 0;
                    if (this.caidejineng5_1 == "20001") {
                        jinengjiachengzhi_2_1 = parseInt(Gerenshuxing.jinengbiao[j].chushizhi) + this.zuizhonglazhi_1 * parseFloat(Gerenshuxing.jinengbiao[j].jiacheng);
                        jinengjiachengzhi_2_1 = Math.floor(jinengjiachengzhi_2_1);
                        var suijishu = Math.floor(Math.random() * 100);
                        if (suijishu <= jinengjiachengzhi_2_1) {
                            this.chufalianji_2_1 = "1";
                        }
                    }
                    else if (this.caidejineng5_1 == "20002") {
                        jinengjiachengzhi_2_1 = parseInt(Gerenshuxing.jinengbiao[j].chushizhi) + this.zuizhonglazhi_1 * parseFloat(Gerenshuxing.jinengbiao[j].jiacheng);
                        jinengjiachengzhi_2_1 = Math.floor(jinengjiachengzhi_2_1);
                        var suijishu = Math.floor(Math.random() * 100);
                        if (suijishu <= jinengjiachengzhi_2_1) {
                            this.chufalianji_2_1 = "1";
                        }
                    }
                    else if (this.caidejineng5_1 == "20003") {
                        jinengjiachengzhi_2_1 = parseInt(Gerenshuxing.jinengbiao[j].chushizhi) + this.zuizhonglazhi_1 * parseFloat(Gerenshuxing.jinengbiao[j].jiacheng);
                        jinengjiachengzhi_2_1 = Math.floor(jinengjiachengzhi_2_1);
                        this.chufabisha_2_1 = "" + jinengjiachengzhi_2_1;
                    }
                    else if (this.caidejineng5_1 == "20004") {
                        jinengjiachengzhi_2_1 = parseInt(Gerenshuxing.jinengbiao[j].chushizhi) + this.zuizhonglazhi_1 * parseFloat(Gerenshuxing.jinengbiao[j].jiacheng);
                        jinengjiachengzhi_2_1 = Math.floor(jinengjiachengzhi_2_1);
                        this.chufabisha_2_1 = "" + jinengjiachengzhi_2_1;
                    }
                    else if (this.caidejineng5_1 == "20005") {
                        jinengjiachengzhi_2_1 = parseInt(Gerenshuxing.jinengbiao[j].chushizhi) + this.zuizhongtianzhi_1 * parseFloat(Gerenshuxing.jinengbiao[j].jiacheng);
                        jinengjiachengzhi_2_1 = Math.floor(jinengjiachengzhi_2_1);
                        this.chufaxixue_2_1 = "" + jinengjiachengzhi_2_1;
                    }
                    else if (this.caidejineng5_1 == "20006") {
                        jinengjiachengzhi_2_1 = parseInt(Gerenshuxing.jinengbiao[j].chushizhi) + this.zuizhongtianzhi_1 * parseFloat(Gerenshuxing.jinengbiao[j].jiacheng);
                        jinengjiachengzhi_2_1 = Math.floor(jinengjiachengzhi_2_1);
                        this.chufaxixue_2_1 = "" + jinengjiachengzhi_2_1;
                    }
                    else if (this.caidejineng5_1 == "20007") {
                        this.chufazhuiji_2_1 = "1";
                    }
                    else if (this.caidejineng5_1 == "20008") {
                        this.chufasane_2_1 = "1";
                    }
                    else if (this.caidejineng5_1 == "20009") {
                        jinengjiachengzhi_2_1 = parseInt(Gerenshuxing.jinengbiao[j].chushizhi) + this.zuizhonglazhi_1 * parseFloat(Gerenshuxing.jinengbiao[j].jiacheng);
                        jinengjiachengzhi_2_1 = Math.floor(jinengjiachengzhi_2_1);
                        this.chufahushila_2_1 = "" + jinengjiachengzhi_2_1;
                    }
                    else if (this.caidejineng5_1 == "20010") {
                        jinengjiachengzhi_2_1 = parseInt(Gerenshuxing.jinengbiao[j].chushizhi) + this.zuizhongtianzhi_1 * parseFloat(Gerenshuxing.jinengbiao[j].jiacheng);
                        jinengjiachengzhi_2_1 = Math.floor(jinengjiachengzhi_2_1);
                        this.chufahushitian_2_1 = "" + jinengjiachengzhi_2_1;
                    }
                    else if (this.caidejineng5_1 == "20011") {
                        jinengjiachengzhi_2_1 = parseInt(Gerenshuxing.jinengbiao[j].chushizhi) + this.zuizhongsuanzhi_1 * parseFloat(Gerenshuxing.jinengbiao[j].jiacheng);
                        jinengjiachengzhi_2_1 = Math.floor(jinengjiachengzhi_2_1);
                        this.chufahushisuan_2_1 = "" + jinengjiachengzhi_2_1;
                    }
                    else if (this.caidejineng5_1 == "20012") {
                        jinengjiachengzhi_2_1 = parseInt(Gerenshuxing.jinengbiao[j].chushizhi) + this.zuizhongmazhi_1 * parseFloat(Gerenshuxing.jinengbiao[j].jiacheng);
                        jinengjiachengzhi_2_1 = Math.floor(jinengjiachengzhi_2_1);
                        this.chufahushima_2_1 = "" + jinengjiachengzhi_2_1;
                    }
                    else if (this.caidejineng5_1 == "20013") {
                        jinengjiachengzhi_2_1 = parseInt(Gerenshuxing.jinengbiao[j].chushizhi) + this.zuizhongsuanzhi_1 * parseFloat(Gerenshuxing.jinengbiao[j].jiacheng);
                        jinengjiachengzhi_2_1 = Math.floor(jinengjiachengzhi_2_1);
                        this.chufazhenshe_2_1 = "" + jinengjiachengzhi_2_1;
                    }
                    else if (this.caidejineng5_1 == "20014") {
                        jinengjiachengzhi_2_1 = parseInt(Gerenshuxing.jinengbiao[j].chushizhi) + this.zuizhongsuanzhi_1 * parseFloat(Gerenshuxing.jinengbiao[j].jiacheng);
                        jinengjiachengzhi_2_1 = Math.floor(jinengjiachengzhi_2_1);
                        this.chufaxilan_2_1 = "" + jinengjiachengzhi_2_1;
                    }
                    else if (this.caidejineng5_1 == "20015") {
                        jinengjiachengzhi_2_1 = parseInt(Gerenshuxing.jinengbiao[j].chushizhi) + this.zuizhongsuanzhi_1 * parseFloat(Gerenshuxing.jinengbiao[j].jiacheng);
                        jinengjiachengzhi_2_1 = Math.floor(jinengjiachengzhi_2_1);
                        this.chufaxilan_2_1 = "" + jinengjiachengzhi_2_1;
                    }
                    else if (this.caidejineng5_1 == "20016") {
                        jinengjiachengzhi_2_1 = parseInt(Gerenshuxing.jinengbiao[j].chushizhi) + this.zuizhongmazhi_1 * parseFloat(Gerenshuxing.jinengbiao[j].jiacheng);
                        jinengjiachengzhi_2_1 = Math.floor(jinengjiachengzhi_2_1);
                        this.chufajiansu_2_1 = "" + jinengjiachengzhi_2_1;
                    }
                    else if (this.caidejineng5_1 == "20017") {
                        jinengjiachengzhi_2_1 = parseInt(Gerenshuxing.jinengbiao[j].chushizhi) + this.zuizhongmazhi_1 * parseFloat(Gerenshuxing.jinengbiao[j].jiacheng);
                        jinengjiachengzhi_2_1 = Math.floor(jinengjiachengzhi_2_1);
                        var suijishu = Math.floor(Math.random() * 100);
                        if (suijishu <= jinengjiachengzhi_2_1) {
                            this.chufachenmo_2_1 = "1";
                        }
                    }
                    else if (this.caidejineng5_1 == "20018") {
                        jinengjiachengzhi_2_1 = parseInt(Gerenshuxing.jinengbiao[j].chushizhi) + this.zuizhongtianzhi_1 * parseFloat(Gerenshuxing.jinengbiao[j].jiacheng);
                        jinengjiachengzhi_2_1 = Math.floor(jinengjiachengzhi_2_1);
                        this.chufahuixue_2_1 = "" + jinengjiachengzhi_2_1;
                    }
                    else if (this.caidejineng5_1 == "20019") {
                        jinengjiachengzhi_2_1 = parseInt(Gerenshuxing.jinengbiao[j].chushizhi) + this.zuizhongsuanzhi_1 * parseFloat(Gerenshuxing.jinengbiao[j].jiacheng);
                        jinengjiachengzhi_2_1 = Math.floor(jinengjiachengzhi_2_1);
                        this.chufaquanhushi_2_1 = "" + jinengjiachengzhi_2_1;
                    }
                    else if (this.caidejineng5_1 == "20020") {
                        this.chufahuiling_2_1 = "1";
                    }
                    else if (this.caidejineng5_1 == "20021") {
                        jinengjiachengzhi_2_1 = parseInt(Gerenshuxing.jinengbiao[j].chushizhi) + this.zuizhongsuanzhi_1 * parseFloat(Gerenshuxing.jinengbiao[j].jiacheng);
                        jinengjiachengzhi_2_1 = Math.floor(jinengjiachengzhi_2_1);
                        this.chufadu_2_1 = "" + jinengjiachengzhi_2_1;
                    }
                    else if (this.caidejineng5_1 == "20022") {
                        jinengjiachengzhi_2_1 = parseInt(Gerenshuxing.jinengbiao[j].chushizhi) + this.zuizhongmazhi_1 * parseFloat(Gerenshuxing.jinengbiao[j].jiacheng);
                        jinengjiachengzhi_2_1 = Math.floor(jinengjiachengzhi_2_1);
                        this.chufaxuruo_2_1 = "" + jinengjiachengzhi_2_1;
                    }
                    else if (this.caidejineng5_1 == "20023") {
                        jinengjiachengzhi_2_1 = parseInt(Gerenshuxing.jinengbiao[j].chushizhi) + this.zuizhongtianzhi_1 * parseFloat(Gerenshuxing.jinengbiao[j].jiacheng);
                        jinengjiachengzhi_2_1 = Math.floor(jinengjiachengzhi_2_1);
                        this.chufajiafang_2_1 = "" + jinengjiachengzhi_2_1;
                    }
                    else if (this.caidejineng5_1 == "20024") {
                        jinengjiachengzhi_2_1 = parseInt(Gerenshuxing.jinengbiao[j].chushizhi) + this.zuizhonglazhi_1 * parseFloat(Gerenshuxing.jinengbiao[j].jiacheng);
                        jinengjiachengzhi_2_1 = Math.floor(jinengjiachengzhi_2_1);
                        this.chufajiasu_2_1 = "" + jinengjiachengzhi_2_1;
                    }
                    else if (this.caidejineng5_1 == "20025") {
                        this.chufajianxue_2_1 = "1";
                    }
                    else if (this.caidejineng5_1 == "20026") {
                        this.chufajiangong_2_1 = "1";
                    }
                    else if (this.caidejineng5_1 == "20027") {
                        this.chufawofangjiansu_2_1 = "1";
                    }
                }
            }
        }
        this.duiren2shanghai();
    };
    //队怪物3使用技能判断
    Pvpzhandoujiemian.prototype.duiren3jineng = function () {
        //初始化触发技能数据
        this.chufalianji_3_1 = "0"; //触发连击
        this.chufabisha_3_1 = "0"; //触发必杀
        this.chufaxixue_3_1 = "0"; //触发吸血
        this.chufazhuiji_3_1 = "0"; //触发追击
        this.chufasane_3_1 = "0"; //触发善恶
        this.chufahushila_3_1 = "0"; //触发忽视辣
        this.chufahushima_3_1 = "0"; //触发忽视麻
        this.chufahushisuan_3_1 = "0"; //触发忽视酸
        this.chufahushitian_3_1 = "0"; //触发忽视甜
        this.chufazhenshe_3_1 = "0"; //触发震慑
        this.chufaxilan_3_1 = "0"; //触发吸蓝
        this.chufajiansu_3_1 = "0"; //触发减速
        this.chufachenmo_3_1 = "0"; //触发沉默
        this.chufahuixue_3_1 = "0"; //触发回血
        this.chufaquanhushi_3_1 = "0"; //触发全忽视
        this.chufahuiling_3_1 = "0"; //触发回灵
        this.chufadu_3_1 = "0"; //触发毒
        this.chufaxuruo_3_1 = "0"; //触发虚弱
        this.chufajiafang_3_1 = "0"; //触发加防
        this.chufajiasu_3_1 = "0"; //触发加速
        this.chufajianxue_3_1 = "0"; //触发给我放见血
        this.chufajiangong_3_1 = "0"; //触发给我方减攻
        this.chufawofangjiansu_3_1 = "0"; //触发给我方减速
        //进入正式计算
        if (this.caidejineng1_1 != "0") {
            for (var j = 0; j < Gerenshuxing.jinengbiao.length; j++) {
                if (Gerenshuxing.jinengbiao[j].id == this.caidejineng1_1) {
                    var jinengjiachengzhi_3_1 = 0;
                    if (this.caidejineng1_1 == "20001") {
                        jinengjiachengzhi_3_1 = parseInt(Gerenshuxing.jinengbiao[j].chushizhi) + this.zuizhonglazhi_1 * parseFloat(Gerenshuxing.jinengbiao[j].jiacheng);
                        jinengjiachengzhi_3_1 = Math.floor(jinengjiachengzhi_3_1);
                        var suijishu = Math.floor(Math.random() * 100);
                        if (suijishu <= jinengjiachengzhi_3_1) {
                            this.chufalianji_3_1 = "1";
                        }
                    }
                    else if (this.caidejineng1_1 == "20002") {
                        jinengjiachengzhi_3_1 = parseInt(Gerenshuxing.jinengbiao[j].chushizhi) + this.zuizhonglazhi_1 * parseFloat(Gerenshuxing.jinengbiao[j].jiacheng);
                        jinengjiachengzhi_3_1 = Math.floor(jinengjiachengzhi_3_1);
                        var suijishu = Math.floor(Math.random() * 100);
                        if (suijishu <= jinengjiachengzhi_3_1) {
                            this.chufalianji_3_1 = "1";
                        }
                    }
                    else if (this.caidejineng1_1 == "20003") {
                        jinengjiachengzhi_3_1 = parseInt(Gerenshuxing.jinengbiao[j].chushizhi) + this.zuizhonglazhi_1 * parseFloat(Gerenshuxing.jinengbiao[j].jiacheng);
                        jinengjiachengzhi_3_1 = Math.floor(jinengjiachengzhi_3_1);
                        this.chufabisha_3_1 = "" + jinengjiachengzhi_3_1;
                    }
                    else if (this.caidejineng1_1 == "20004") {
                        jinengjiachengzhi_3_1 = parseInt(Gerenshuxing.jinengbiao[j].chushizhi) + this.zuizhonglazhi_1 * parseFloat(Gerenshuxing.jinengbiao[j].jiacheng);
                        jinengjiachengzhi_3_1 = Math.floor(jinengjiachengzhi_3_1);
                        this.chufabisha_3_1 = "" + jinengjiachengzhi_3_1;
                    }
                    else if (this.caidejineng1_1 == "20005") {
                        jinengjiachengzhi_3_1 = parseInt(Gerenshuxing.jinengbiao[j].chushizhi) + this.zuizhongtianzhi_1 * parseFloat(Gerenshuxing.jinengbiao[j].jiacheng);
                        jinengjiachengzhi_3_1 = Math.floor(jinengjiachengzhi_3_1);
                        this.chufaxixue_3_1 = "" + jinengjiachengzhi_3_1;
                    }
                    else if (this.caidejineng1_1 == "20006") {
                        jinengjiachengzhi_3_1 = parseInt(Gerenshuxing.jinengbiao[j].chushizhi) + this.zuizhongtianzhi_1 * parseFloat(Gerenshuxing.jinengbiao[j].jiacheng);
                        jinengjiachengzhi_3_1 = Math.floor(jinengjiachengzhi_3_1);
                        this.chufaxixue_3_1 = "" + jinengjiachengzhi_3_1;
                    }
                    else if (this.caidejineng1_1 == "20007") {
                        this.chufazhuiji_3_1 = "1";
                    }
                    else if (this.caidejineng1_1 == "20008") {
                        this.chufasane_3_1 = "1";
                    }
                    else if (this.caidejineng1_1 == "20009") {
                        jinengjiachengzhi_3_1 = parseInt(Gerenshuxing.jinengbiao[j].chushizhi) + this.zuizhonglazhi_1 * parseFloat(Gerenshuxing.jinengbiao[j].jiacheng);
                        jinengjiachengzhi_3_1 = Math.floor(jinengjiachengzhi_3_1);
                        this.chufahushila_3_1 = "" + jinengjiachengzhi_3_1;
                    }
                    else if (this.caidejineng1_1 == "20010") {
                        jinengjiachengzhi_3_1 = parseInt(Gerenshuxing.jinengbiao[j].chushizhi) + this.zuizhongtianzhi_1 * parseFloat(Gerenshuxing.jinengbiao[j].jiacheng);
                        jinengjiachengzhi_3_1 = Math.floor(jinengjiachengzhi_3_1);
                        this.chufahushitian_3_1 = "" + jinengjiachengzhi_3_1;
                    }
                    else if (this.caidejineng1_1 == "20011") {
                        jinengjiachengzhi_3_1 = parseInt(Gerenshuxing.jinengbiao[j].chushizhi) + this.zuizhongsuanzhi_1 * parseFloat(Gerenshuxing.jinengbiao[j].jiacheng);
                        jinengjiachengzhi_3_1 = Math.floor(jinengjiachengzhi_3_1);
                        this.chufahushisuan_3_1 = "" + jinengjiachengzhi_3_1;
                    }
                    else if (this.caidejineng1_1 == "20012") {
                        jinengjiachengzhi_3_1 = parseInt(Gerenshuxing.jinengbiao[j].chushizhi) + this.zuizhongmazhi_1 * parseFloat(Gerenshuxing.jinengbiao[j].jiacheng);
                        jinengjiachengzhi_3_1 = Math.floor(jinengjiachengzhi_3_1);
                        this.chufahushima_3_1 = "" + jinengjiachengzhi_3_1;
                    }
                    else if (this.caidejineng1_1 == "20013") {
                        jinengjiachengzhi_3_1 = parseInt(Gerenshuxing.jinengbiao[j].chushizhi) + this.zuizhongsuanzhi_1 * parseFloat(Gerenshuxing.jinengbiao[j].jiacheng);
                        jinengjiachengzhi_3_1 = Math.floor(jinengjiachengzhi_3_1);
                        this.chufazhenshe_3_1 = "" + jinengjiachengzhi_3_1;
                    }
                    else if (this.caidejineng1_1 == "20014") {
                        jinengjiachengzhi_3_1 = parseInt(Gerenshuxing.jinengbiao[j].chushizhi) + this.zuizhongsuanzhi_1 * parseFloat(Gerenshuxing.jinengbiao[j].jiacheng);
                        jinengjiachengzhi_3_1 = Math.floor(jinengjiachengzhi_3_1);
                        this.chufaxilan_3_1 = "" + jinengjiachengzhi_3_1;
                    }
                    else if (this.caidejineng1_1 == "20015") {
                        jinengjiachengzhi_3_1 = parseInt(Gerenshuxing.jinengbiao[j].chushizhi) + this.zuizhongsuanzhi_1 * parseFloat(Gerenshuxing.jinengbiao[j].jiacheng);
                        jinengjiachengzhi_3_1 = Math.floor(jinengjiachengzhi_3_1);
                        this.chufaxilan_3_1 = "" + jinengjiachengzhi_3_1;
                    }
                    else if (this.caidejineng1_1 == "20016") {
                        jinengjiachengzhi_3_1 = parseInt(Gerenshuxing.jinengbiao[j].chushizhi) + this.zuizhongmazhi_1 * parseFloat(Gerenshuxing.jinengbiao[j].jiacheng);
                        jinengjiachengzhi_3_1 = Math.floor(jinengjiachengzhi_3_1);
                        this.chufajiansu_3_1 = "" + jinengjiachengzhi_3_1;
                    }
                    else if (this.caidejineng1_1 == "20017") {
                        jinengjiachengzhi_3_1 = parseInt(Gerenshuxing.jinengbiao[j].chushizhi) + this.zuizhongmazhi_1 * parseFloat(Gerenshuxing.jinengbiao[j].jiacheng);
                        jinengjiachengzhi_3_1 = Math.floor(jinengjiachengzhi_3_1);
                        var suijishu = Math.floor(Math.random() * 100);
                        if (suijishu <= jinengjiachengzhi_3_1) {
                            this.chufachenmo_3_1 = "1";
                        }
                    }
                    else if (this.caidejineng1_1 == "20018") {
                        jinengjiachengzhi_3_1 = parseInt(Gerenshuxing.jinengbiao[j].chushizhi) + this.zuizhongtianzhi_1 * parseFloat(Gerenshuxing.jinengbiao[j].jiacheng);
                        jinengjiachengzhi_3_1 = Math.floor(jinengjiachengzhi_3_1);
                        this.chufahuixue_3_1 = "" + jinengjiachengzhi_3_1;
                    }
                    else if (this.caidejineng1_1 == "20019") {
                        jinengjiachengzhi_3_1 = parseInt(Gerenshuxing.jinengbiao[j].chushizhi) + this.zuizhongsuanzhi_1 * parseFloat(Gerenshuxing.jinengbiao[j].jiacheng);
                        jinengjiachengzhi_3_1 = Math.floor(jinengjiachengzhi_3_1);
                        this.chufaquanhushi_3_1 = "" + jinengjiachengzhi_3_1;
                    }
                    else if (this.caidejineng1_1 == "20020") {
                        this.chufahuiling_3_1 = "1";
                    }
                    else if (this.caidejineng1_1 == "20021") {
                        jinengjiachengzhi_3_1 = parseInt(Gerenshuxing.jinengbiao[j].chushizhi) + this.zuizhongsuanzhi_1 * parseFloat(Gerenshuxing.jinengbiao[j].jiacheng);
                        jinengjiachengzhi_3_1 = Math.floor(jinengjiachengzhi_3_1);
                        this.chufadu_3_1 = "" + jinengjiachengzhi_3_1;
                    }
                    else if (this.caidejineng1_1 == "20022") {
                        jinengjiachengzhi_3_1 = parseInt(Gerenshuxing.jinengbiao[j].chushizhi) + this.zuizhongmazhi_1 * parseFloat(Gerenshuxing.jinengbiao[j].jiacheng);
                        jinengjiachengzhi_3_1 = Math.floor(jinengjiachengzhi_3_1);
                        this.chufaxuruo_3_1 = "" + jinengjiachengzhi_3_1;
                    }
                    else if (this.caidejineng1_1 == "20023") {
                        jinengjiachengzhi_3_1 = parseInt(Gerenshuxing.jinengbiao[j].chushizhi) + this.zuizhongtianzhi_1 * parseFloat(Gerenshuxing.jinengbiao[j].jiacheng);
                        jinengjiachengzhi_3_1 = Math.floor(jinengjiachengzhi_3_1);
                        this.chufajiafang_3_1 = "" + jinengjiachengzhi_3_1;
                    }
                    else if (this.caidejineng1_1 == "20024") {
                        jinengjiachengzhi_3_1 = parseInt(Gerenshuxing.jinengbiao[j].chushizhi) + this.zuizhonglazhi_1 * parseFloat(Gerenshuxing.jinengbiao[j].jiacheng);
                        jinengjiachengzhi_3_1 = Math.floor(jinengjiachengzhi_3_1);
                        this.chufajiasu_3_1 = "" + jinengjiachengzhi_3_1;
                    }
                    else if (this.caidejineng1_1 == "20025") {
                        this.chufajianxue_3_1 = "1";
                    }
                    else if (this.caidejineng1_1 == "20026") {
                        this.chufajiangong_3_1 = "1";
                    }
                    else if (this.caidejineng1_1 == "20027") {
                        this.chufawofangjiansu_3_1 = "1";
                    }
                }
            }
        }
        //计算菜品技能2///
        if (this.caidejineng2_1 != "0") {
            for (var j = 0; j < Gerenshuxing.jinengbiao.length; j++) {
                if (Gerenshuxing.jinengbiao[j].id == this.caidejineng2_1) {
                    var jinengjiachengzhi_3_1 = 0;
                    if (this.caidejineng2_1 == "20001") {
                        jinengjiachengzhi_3_1 = parseInt(Gerenshuxing.jinengbiao[j].chushizhi) + this.zuizhonglazhi_1 * parseFloat(Gerenshuxing.jinengbiao[j].jiacheng);
                        jinengjiachengzhi_3_1 = Math.floor(jinengjiachengzhi_3_1);
                        var suijishu = Math.floor(Math.random() * 100);
                        if (suijishu <= jinengjiachengzhi_3_1) {
                            this.chufalianji_3_1 = "1";
                        }
                    }
                    else if (this.caidejineng2_1 == "20002") {
                        jinengjiachengzhi_3_1 = parseInt(Gerenshuxing.jinengbiao[j].chushizhi) + this.zuizhonglazhi_1 * parseFloat(Gerenshuxing.jinengbiao[j].jiacheng);
                        jinengjiachengzhi_3_1 = Math.floor(jinengjiachengzhi_3_1);
                        var suijishu = Math.floor(Math.random() * 100);
                        if (suijishu <= jinengjiachengzhi_3_1) {
                            this.chufalianji_3_1 = "1";
                        }
                    }
                    else if (this.caidejineng2_1 == "20003") {
                        jinengjiachengzhi_3_1 = parseInt(Gerenshuxing.jinengbiao[j].chushizhi) + this.zuizhonglazhi_1 * parseFloat(Gerenshuxing.jinengbiao[j].jiacheng);
                        jinengjiachengzhi_3_1 = Math.floor(jinengjiachengzhi_3_1);
                        this.chufabisha_3_1 = "" + jinengjiachengzhi_3_1;
                    }
                    else if (this.caidejineng2_1 == "20004") {
                        jinengjiachengzhi_3_1 = parseInt(Gerenshuxing.jinengbiao[j].chushizhi) + this.zuizhonglazhi_1 * parseFloat(Gerenshuxing.jinengbiao[j].jiacheng);
                        jinengjiachengzhi_3_1 = Math.floor(jinengjiachengzhi_3_1);
                        this.chufabisha_3_1 = "" + jinengjiachengzhi_3_1;
                    }
                    else if (this.caidejineng2_1 == "20005") {
                        jinengjiachengzhi_3_1 = parseInt(Gerenshuxing.jinengbiao[j].chushizhi) + this.zuizhongtianzhi_1 * parseFloat(Gerenshuxing.jinengbiao[j].jiacheng);
                        jinengjiachengzhi_3_1 = Math.floor(jinengjiachengzhi_3_1);
                        this.chufaxixue_3_1 = "" + jinengjiachengzhi_3_1;
                    }
                    else if (this.caidejineng2_1 == "20006") {
                        jinengjiachengzhi_3_1 = parseInt(Gerenshuxing.jinengbiao[j].chushizhi) + this.zuizhongtianzhi_1 * parseFloat(Gerenshuxing.jinengbiao[j].jiacheng);
                        jinengjiachengzhi_3_1 = Math.floor(jinengjiachengzhi_3_1);
                        this.chufaxixue_3_1 = "" + jinengjiachengzhi_3_1;
                    }
                    else if (this.caidejineng2_1 == "20007") {
                        this.chufazhuiji_3_1 = "1";
                    }
                    else if (this.caidejineng2_1 == "20008") {
                        this.chufasane_3_1 = "1";
                    }
                    else if (this.caidejineng2_1 == "20009") {
                        jinengjiachengzhi_3_1 = parseInt(Gerenshuxing.jinengbiao[j].chushizhi) + this.zuizhonglazhi_1 * parseFloat(Gerenshuxing.jinengbiao[j].jiacheng);
                        jinengjiachengzhi_3_1 = Math.floor(jinengjiachengzhi_3_1);
                        this.chufahushila_3_1 = "" + jinengjiachengzhi_3_1;
                    }
                    else if (this.caidejineng2_1 == "20010") {
                        jinengjiachengzhi_3_1 = parseInt(Gerenshuxing.jinengbiao[j].chushizhi) + this.zuizhongtianzhi_1 * parseFloat(Gerenshuxing.jinengbiao[j].jiacheng);
                        jinengjiachengzhi_3_1 = Math.floor(jinengjiachengzhi_3_1);
                        this.chufahushitian_3_1 = "" + jinengjiachengzhi_3_1;
                    }
                    else if (this.caidejineng2_1 == "20011") {
                        jinengjiachengzhi_3_1 = parseInt(Gerenshuxing.jinengbiao[j].chushizhi) + this.zuizhongsuanzhi_1 * parseFloat(Gerenshuxing.jinengbiao[j].jiacheng);
                        jinengjiachengzhi_3_1 = Math.floor(jinengjiachengzhi_3_1);
                        this.chufahushisuan_3_1 = "" + jinengjiachengzhi_3_1;
                    }
                    else if (this.caidejineng2_1 == "20012") {
                        jinengjiachengzhi_3_1 = parseInt(Gerenshuxing.jinengbiao[j].chushizhi) + this.zuizhongmazhi_1 * parseFloat(Gerenshuxing.jinengbiao[j].jiacheng);
                        jinengjiachengzhi_3_1 = Math.floor(jinengjiachengzhi_3_1);
                        this.chufahushima_3_1 = "" + jinengjiachengzhi_3_1;
                    }
                    else if (this.caidejineng2_1 == "20013") {
                        jinengjiachengzhi_3_1 = parseInt(Gerenshuxing.jinengbiao[j].chushizhi) + this.zuizhongsuanzhi_1 * parseFloat(Gerenshuxing.jinengbiao[j].jiacheng);
                        jinengjiachengzhi_3_1 = Math.floor(jinengjiachengzhi_3_1);
                        this.chufazhenshe_3_1 = "" + jinengjiachengzhi_3_1;
                    }
                    else if (this.caidejineng2_1 == "20014") {
                        jinengjiachengzhi_3_1 = parseInt(Gerenshuxing.jinengbiao[j].chushizhi) + this.zuizhongsuanzhi_1 * parseFloat(Gerenshuxing.jinengbiao[j].jiacheng);
                        jinengjiachengzhi_3_1 = Math.floor(jinengjiachengzhi_3_1);
                        this.chufaxilan_3_1 = "" + jinengjiachengzhi_3_1;
                    }
                    else if (this.caidejineng2_1 == "20015") {
                        jinengjiachengzhi_3_1 = parseInt(Gerenshuxing.jinengbiao[j].chushizhi) + this.zuizhongsuanzhi_1 * parseFloat(Gerenshuxing.jinengbiao[j].jiacheng);
                        jinengjiachengzhi_3_1 = Math.floor(jinengjiachengzhi_3_1);
                        this.chufaxilan_3_1 = "" + jinengjiachengzhi_3_1;
                    }
                    else if (this.caidejineng2_1 == "20016") {
                        jinengjiachengzhi_3_1 = parseInt(Gerenshuxing.jinengbiao[j].chushizhi) + this.zuizhongmazhi_1 * parseFloat(Gerenshuxing.jinengbiao[j].jiacheng);
                        jinengjiachengzhi_3_1 = Math.floor(jinengjiachengzhi_3_1);
                        this.chufajiansu_3_1 = "" + jinengjiachengzhi_3_1;
                    }
                    else if (this.caidejineng2_1 == "20017") {
                        jinengjiachengzhi_3_1 = parseInt(Gerenshuxing.jinengbiao[j].chushizhi) + this.zuizhongmazhi_1 * parseFloat(Gerenshuxing.jinengbiao[j].jiacheng);
                        jinengjiachengzhi_3_1 = Math.floor(jinengjiachengzhi_3_1);
                        var suijishu = Math.floor(Math.random() * 100);
                        if (suijishu <= jinengjiachengzhi_3_1) {
                            this.chufachenmo_3_1 = "1";
                        }
                    }
                    else if (this.caidejineng2_1 == "20018") {
                        jinengjiachengzhi_3_1 = parseInt(Gerenshuxing.jinengbiao[j].chushizhi) + this.zuizhongtianzhi_1 * parseFloat(Gerenshuxing.jinengbiao[j].jiacheng);
                        jinengjiachengzhi_3_1 = Math.floor(jinengjiachengzhi_3_1);
                        this.chufahuixue_3_1 = "" + jinengjiachengzhi_3_1;
                    }
                    else if (this.caidejineng2_1 == "20019") {
                        jinengjiachengzhi_3_1 = parseInt(Gerenshuxing.jinengbiao[j].chushizhi) + this.zuizhongsuanzhi_1 * parseFloat(Gerenshuxing.jinengbiao[j].jiacheng);
                        jinengjiachengzhi_3_1 = Math.floor(jinengjiachengzhi_3_1);
                        this.chufaquanhushi_3_1 = "" + jinengjiachengzhi_3_1;
                    }
                    else if (this.caidejineng2_1 == "20020") {
                        this.chufahuiling_3_1 = "1";
                    }
                    else if (this.caidejineng2_1 == "20021") {
                        jinengjiachengzhi_3_1 = parseInt(Gerenshuxing.jinengbiao[j].chushizhi) + this.zuizhongsuanzhi_1 * parseFloat(Gerenshuxing.jinengbiao[j].jiacheng);
                        jinengjiachengzhi_3_1 = Math.floor(jinengjiachengzhi_3_1);
                        this.chufadu_3_1 = "" + jinengjiachengzhi_3_1;
                    }
                    else if (this.caidejineng2_1 == "20022") {
                        jinengjiachengzhi_3_1 = parseInt(Gerenshuxing.jinengbiao[j].chushizhi) + this.zuizhongmazhi_1 * parseFloat(Gerenshuxing.jinengbiao[j].jiacheng);
                        jinengjiachengzhi_3_1 = Math.floor(jinengjiachengzhi_3_1);
                        this.chufaxuruo_3_1 = "" + jinengjiachengzhi_3_1;
                    }
                    else if (this.caidejineng2_1 == "20023") {
                        jinengjiachengzhi_3_1 = parseInt(Gerenshuxing.jinengbiao[j].chushizhi) + this.zuizhongtianzhi_1 * parseFloat(Gerenshuxing.jinengbiao[j].jiacheng);
                        jinengjiachengzhi_3_1 = Math.floor(jinengjiachengzhi_3_1);
                        this.chufajiafang_3_1 = "" + jinengjiachengzhi_3_1;
                    }
                    else if (this.caidejineng2_1 == "20024") {
                        jinengjiachengzhi_3_1 = parseInt(Gerenshuxing.jinengbiao[j].chushizhi) + this.zuizhonglazhi_1 * parseFloat(Gerenshuxing.jinengbiao[j].jiacheng);
                        jinengjiachengzhi_3_1 = Math.floor(jinengjiachengzhi_3_1);
                        this.chufajiasu_3_1 = "" + jinengjiachengzhi_3_1;
                    }
                    else if (this.caidejineng2_1 == "20025") {
                        this.chufajianxue_3_1 = "1";
                    }
                    else if (this.caidejineng2_1 == "20026") {
                        this.chufajiangong_3_1 = "1";
                    }
                    else if (this.caidejineng2_1 == "20027") {
                        this.chufawofangjiansu_3_1 = "1";
                    }
                }
            }
        }
        //计算菜品技能2///
        if (this.caidejineng3_1 != "0") {
            for (var j = 0; j < Gerenshuxing.jinengbiao.length; j++) {
                if (Gerenshuxing.jinengbiao[j].id == this.caidejineng3_1) {
                    var jinengjiachengzhi_3_1 = 0;
                    if (this.caidejineng3_1 == "20001") {
                        jinengjiachengzhi_3_1 = parseInt(Gerenshuxing.jinengbiao[j].chushizhi) + this.zuizhonglazhi_1 * parseFloat(Gerenshuxing.jinengbiao[j].jiacheng);
                        jinengjiachengzhi_3_1 = Math.floor(jinengjiachengzhi_3_1);
                        var suijishu = Math.floor(Math.random() * 100);
                        if (suijishu <= jinengjiachengzhi_3_1) {
                            this.chufalianji_3_1 = "1";
                        }
                    }
                    else if (this.caidejineng3_1 == "20002") {
                        jinengjiachengzhi_3_1 = parseInt(Gerenshuxing.jinengbiao[j].chushizhi) + this.zuizhonglazhi_1 * parseFloat(Gerenshuxing.jinengbiao[j].jiacheng);
                        jinengjiachengzhi_3_1 = Math.floor(jinengjiachengzhi_3_1);
                        var suijishu = Math.floor(Math.random() * 100);
                        if (suijishu <= jinengjiachengzhi_3_1) {
                            this.chufalianji_3_1 = "1";
                        }
                    }
                    else if (this.caidejineng3_1 == "20003") {
                        jinengjiachengzhi_3_1 = parseInt(Gerenshuxing.jinengbiao[j].chushizhi) + this.zuizhonglazhi_1 * parseFloat(Gerenshuxing.jinengbiao[j].jiacheng);
                        jinengjiachengzhi_3_1 = Math.floor(jinengjiachengzhi_3_1);
                        this.chufabisha_3_1 = "" + jinengjiachengzhi_3_1;
                    }
                    else if (this.caidejineng3_1 == "20004") {
                        jinengjiachengzhi_3_1 = parseInt(Gerenshuxing.jinengbiao[j].chushizhi) + this.zuizhonglazhi_1 * parseFloat(Gerenshuxing.jinengbiao[j].jiacheng);
                        jinengjiachengzhi_3_1 = Math.floor(jinengjiachengzhi_3_1);
                        this.chufabisha_3_1 = "" + jinengjiachengzhi_3_1;
                    }
                    else if (this.caidejineng3_1 == "20005") {
                        jinengjiachengzhi_3_1 = parseInt(Gerenshuxing.jinengbiao[j].chushizhi) + this.zuizhongtianzhi_1 * parseFloat(Gerenshuxing.jinengbiao[j].jiacheng);
                        jinengjiachengzhi_3_1 = Math.floor(jinengjiachengzhi_3_1);
                        this.chufaxixue_3_1 = "" + jinengjiachengzhi_3_1;
                    }
                    else if (this.caidejineng3_1 == "20006") {
                        jinengjiachengzhi_3_1 = parseInt(Gerenshuxing.jinengbiao[j].chushizhi) + this.zuizhongtianzhi_1 * parseFloat(Gerenshuxing.jinengbiao[j].jiacheng);
                        jinengjiachengzhi_3_1 = Math.floor(jinengjiachengzhi_3_1);
                        this.chufaxixue_3_1 = "" + jinengjiachengzhi_3_1;
                    }
                    else if (this.caidejineng3_1 == "20007") {
                        this.chufazhuiji_3_1 = "1";
                    }
                    else if (this.caidejineng3_1 == "20008") {
                        this.chufasane_3_1 = "1";
                    }
                    else if (this.caidejineng3_1 == "20009") {
                        jinengjiachengzhi_3_1 = parseInt(Gerenshuxing.jinengbiao[j].chushizhi) + this.zuizhonglazhi_1 * parseFloat(Gerenshuxing.jinengbiao[j].jiacheng);
                        jinengjiachengzhi_3_1 = Math.floor(jinengjiachengzhi_3_1);
                        this.chufahushila_3_1 = "" + jinengjiachengzhi_3_1;
                    }
                    else if (this.caidejineng3_1 == "20010") {
                        jinengjiachengzhi_3_1 = parseInt(Gerenshuxing.jinengbiao[j].chushizhi) + this.zuizhongtianzhi_1 * parseFloat(Gerenshuxing.jinengbiao[j].jiacheng);
                        jinengjiachengzhi_3_1 = Math.floor(jinengjiachengzhi_3_1);
                        this.chufahushitian_3_1 = "" + jinengjiachengzhi_3_1;
                    }
                    else if (this.caidejineng3_1 == "20011") {
                        jinengjiachengzhi_3_1 = parseInt(Gerenshuxing.jinengbiao[j].chushizhi) + this.zuizhongsuanzhi_1 * parseFloat(Gerenshuxing.jinengbiao[j].jiacheng);
                        jinengjiachengzhi_3_1 = Math.floor(jinengjiachengzhi_3_1);
                        this.chufahushisuan_3_1 = "" + jinengjiachengzhi_3_1;
                    }
                    else if (this.caidejineng3_1 == "20012") {
                        jinengjiachengzhi_3_1 = parseInt(Gerenshuxing.jinengbiao[j].chushizhi) + this.zuizhongmazhi_1 * parseFloat(Gerenshuxing.jinengbiao[j].jiacheng);
                        jinengjiachengzhi_3_1 = Math.floor(jinengjiachengzhi_3_1);
                        this.chufahushima_3_1 = "" + jinengjiachengzhi_3_1;
                    }
                    else if (this.caidejineng3_1 == "20013") {
                        jinengjiachengzhi_3_1 = parseInt(Gerenshuxing.jinengbiao[j].chushizhi) + this.zuizhongsuanzhi_1 * parseFloat(Gerenshuxing.jinengbiao[j].jiacheng);
                        jinengjiachengzhi_3_1 = Math.floor(jinengjiachengzhi_3_1);
                        this.chufazhenshe_3_1 = "" + jinengjiachengzhi_3_1;
                    }
                    else if (this.caidejineng3_1 == "20014") {
                        jinengjiachengzhi_3_1 = parseInt(Gerenshuxing.jinengbiao[j].chushizhi) + this.zuizhongsuanzhi_1 * parseFloat(Gerenshuxing.jinengbiao[j].jiacheng);
                        jinengjiachengzhi_3_1 = Math.floor(jinengjiachengzhi_3_1);
                        this.chufaxilan_3_1 = "" + jinengjiachengzhi_3_1;
                    }
                    else if (this.caidejineng3_1 == "20015") {
                        jinengjiachengzhi_3_1 = parseInt(Gerenshuxing.jinengbiao[j].chushizhi) + this.zuizhongsuanzhi_1 * parseFloat(Gerenshuxing.jinengbiao[j].jiacheng);
                        jinengjiachengzhi_3_1 = Math.floor(jinengjiachengzhi_3_1);
                        this.chufaxilan_3_1 = "" + jinengjiachengzhi_3_1;
                    }
                    else if (this.caidejineng3_1 == "20016") {
                        jinengjiachengzhi_3_1 = parseInt(Gerenshuxing.jinengbiao[j].chushizhi) + this.zuizhongmazhi_1 * parseFloat(Gerenshuxing.jinengbiao[j].jiacheng);
                        jinengjiachengzhi_3_1 = Math.floor(jinengjiachengzhi_3_1);
                        this.chufajiansu_3_1 = "" + jinengjiachengzhi_3_1;
                    }
                    else if (this.caidejineng3_1 == "20017") {
                        jinengjiachengzhi_3_1 = parseInt(Gerenshuxing.jinengbiao[j].chushizhi) + this.zuizhongmazhi_1 * parseFloat(Gerenshuxing.jinengbiao[j].jiacheng);
                        jinengjiachengzhi_3_1 = Math.floor(jinengjiachengzhi_3_1);
                        var suijishu = Math.floor(Math.random() * 100);
                        if (suijishu <= jinengjiachengzhi_3_1) {
                            this.chufachenmo_3_1 = "1";
                        }
                    }
                    else if (this.caidejineng3_1 == "20018") {
                        jinengjiachengzhi_3_1 = parseInt(Gerenshuxing.jinengbiao[j].chushizhi) + this.zuizhongtianzhi_1 * parseFloat(Gerenshuxing.jinengbiao[j].jiacheng);
                        jinengjiachengzhi_3_1 = Math.floor(jinengjiachengzhi_3_1);
                        this.chufahuixue_3_1 = "" + jinengjiachengzhi_3_1;
                    }
                    else if (this.caidejineng3_1 == "20019") {
                        jinengjiachengzhi_3_1 = parseInt(Gerenshuxing.jinengbiao[j].chushizhi) + this.zuizhongsuanzhi_1 * parseFloat(Gerenshuxing.jinengbiao[j].jiacheng);
                        jinengjiachengzhi_3_1 = Math.floor(jinengjiachengzhi_3_1);
                        this.chufaquanhushi_3_1 = "" + jinengjiachengzhi_3_1;
                    }
                    else if (this.caidejineng3_1 == "20020") {
                        this.chufahuiling_3_1 = "1";
                    }
                    else if (this.caidejineng3_1 == "20021") {
                        jinengjiachengzhi_3_1 = parseInt(Gerenshuxing.jinengbiao[j].chushizhi) + this.zuizhongsuanzhi_1 * parseFloat(Gerenshuxing.jinengbiao[j].jiacheng);
                        jinengjiachengzhi_3_1 = Math.floor(jinengjiachengzhi_3_1);
                        this.chufadu_3_1 = "" + jinengjiachengzhi_3_1;
                    }
                    else if (this.caidejineng3_1 == "20022") {
                        jinengjiachengzhi_3_1 = parseInt(Gerenshuxing.jinengbiao[j].chushizhi) + this.zuizhongmazhi_1 * parseFloat(Gerenshuxing.jinengbiao[j].jiacheng);
                        jinengjiachengzhi_3_1 = Math.floor(jinengjiachengzhi_3_1);
                        this.chufaxuruo_3_1 = "" + jinengjiachengzhi_3_1;
                    }
                    else if (this.caidejineng3_1 == "20023") {
                        jinengjiachengzhi_3_1 = parseInt(Gerenshuxing.jinengbiao[j].chushizhi) + this.zuizhongtianzhi_1 * parseFloat(Gerenshuxing.jinengbiao[j].jiacheng);
                        jinengjiachengzhi_3_1 = Math.floor(jinengjiachengzhi_3_1);
                        this.chufajiafang_3_1 = "" + jinengjiachengzhi_3_1;
                    }
                    else if (this.caidejineng3_1 == "20024") {
                        jinengjiachengzhi_3_1 = parseInt(Gerenshuxing.jinengbiao[j].chushizhi) + this.zuizhonglazhi_1 * parseFloat(Gerenshuxing.jinengbiao[j].jiacheng);
                        jinengjiachengzhi_3_1 = Math.floor(jinengjiachengzhi_3_1);
                        this.chufajiasu_3_1 = "" + jinengjiachengzhi_3_1;
                    }
                    else if (this.caidejineng3_1 == "20025") {
                        this.chufajianxue_3_1 = "1";
                    }
                    else if (this.caidejineng3_1 == "20026") {
                        this.chufajiangong_3_1 = "1";
                    }
                    else if (this.caidejineng3_1 == "20027") {
                        this.chufawofangjiansu_3_1 = "1";
                    }
                }
            }
        }
        //计算菜品技能2///
        if (this.caidejineng4_1 != "0") {
            for (var j = 0; j < Gerenshuxing.jinengbiao.length; j++) {
                if (Gerenshuxing.jinengbiao[j].id == this.caidejineng4_1) {
                    var jinengjiachengzhi_3_1 = 0;
                    if (this.caidejineng4_1 == "20001") {
                        jinengjiachengzhi_3_1 = parseInt(Gerenshuxing.jinengbiao[j].chushizhi) + this.zuizhonglazhi_1 * parseFloat(Gerenshuxing.jinengbiao[j].jiacheng);
                        jinengjiachengzhi_3_1 = Math.floor(jinengjiachengzhi_3_1);
                        var suijishu = Math.floor(Math.random() * 100);
                        if (suijishu <= jinengjiachengzhi_3_1) {
                            this.chufalianji_3_1 = "1";
                        }
                    }
                    else if (this.caidejineng4_1 == "20002") {
                        jinengjiachengzhi_3_1 = parseInt(Gerenshuxing.jinengbiao[j].chushizhi) + this.zuizhonglazhi_1 * parseFloat(Gerenshuxing.jinengbiao[j].jiacheng);
                        jinengjiachengzhi_3_1 = Math.floor(jinengjiachengzhi_3_1);
                        var suijishu = Math.floor(Math.random() * 100);
                        if (suijishu <= jinengjiachengzhi_3_1) {
                            this.chufalianji_3_1 = "1";
                        }
                    }
                    else if (this.caidejineng4_1 == "20003") {
                        jinengjiachengzhi_3_1 = parseInt(Gerenshuxing.jinengbiao[j].chushizhi) + this.zuizhonglazhi_1 * parseFloat(Gerenshuxing.jinengbiao[j].jiacheng);
                        jinengjiachengzhi_3_1 = Math.floor(jinengjiachengzhi_3_1);
                        this.chufabisha_3_1 = "" + jinengjiachengzhi_3_1;
                    }
                    else if (this.caidejineng4_1 == "20004") {
                        jinengjiachengzhi_3_1 = parseInt(Gerenshuxing.jinengbiao[j].chushizhi) + this.zuizhonglazhi_1 * parseFloat(Gerenshuxing.jinengbiao[j].jiacheng);
                        jinengjiachengzhi_3_1 = Math.floor(jinengjiachengzhi_3_1);
                        this.chufabisha_3_1 = "" + jinengjiachengzhi_3_1;
                    }
                    else if (this.caidejineng4_1 == "20005") {
                        jinengjiachengzhi_3_1 = parseInt(Gerenshuxing.jinengbiao[j].chushizhi) + this.zuizhongtianzhi_1 * parseFloat(Gerenshuxing.jinengbiao[j].jiacheng);
                        jinengjiachengzhi_3_1 = Math.floor(jinengjiachengzhi_3_1);
                        this.chufaxixue_3_1 = "" + jinengjiachengzhi_3_1;
                    }
                    else if (this.caidejineng4_1 == "20006") {
                        jinengjiachengzhi_3_1 = parseInt(Gerenshuxing.jinengbiao[j].chushizhi) + this.zuizhongtianzhi_1 * parseFloat(Gerenshuxing.jinengbiao[j].jiacheng);
                        jinengjiachengzhi_3_1 = Math.floor(jinengjiachengzhi_3_1);
                        this.chufaxixue_3_1 = "" + jinengjiachengzhi_3_1;
                    }
                    else if (this.caidejineng4_1 == "20007") {
                        this.chufazhuiji_3_1 = "1";
                    }
                    else if (this.caidejineng4_1 == "20008") {
                        this.chufasane_3_1 = "1";
                    }
                    else if (this.caidejineng4_1 == "20009") {
                        jinengjiachengzhi_3_1 = parseInt(Gerenshuxing.jinengbiao[j].chushizhi) + this.zuizhonglazhi_1 * parseFloat(Gerenshuxing.jinengbiao[j].jiacheng);
                        jinengjiachengzhi_3_1 = Math.floor(jinengjiachengzhi_3_1);
                        this.chufahushila_3_1 = "" + jinengjiachengzhi_3_1;
                    }
                    else if (this.caidejineng4_1 == "20010") {
                        jinengjiachengzhi_3_1 = parseInt(Gerenshuxing.jinengbiao[j].chushizhi) + this.zuizhongtianzhi_1 * parseFloat(Gerenshuxing.jinengbiao[j].jiacheng);
                        jinengjiachengzhi_3_1 = Math.floor(jinengjiachengzhi_3_1);
                        this.chufahushitian_3_1 = "" + jinengjiachengzhi_3_1;
                    }
                    else if (this.caidejineng4_1 == "20011") {
                        jinengjiachengzhi_3_1 = parseInt(Gerenshuxing.jinengbiao[j].chushizhi) + this.zuizhongsuanzhi_1 * parseFloat(Gerenshuxing.jinengbiao[j].jiacheng);
                        jinengjiachengzhi_3_1 = Math.floor(jinengjiachengzhi_3_1);
                        this.chufahushisuan_3_1 = "" + jinengjiachengzhi_3_1;
                    }
                    else if (this.caidejineng4_1 == "20012") {
                        jinengjiachengzhi_3_1 = parseInt(Gerenshuxing.jinengbiao[j].chushizhi) + this.zuizhongmazhi_1 * parseFloat(Gerenshuxing.jinengbiao[j].jiacheng);
                        jinengjiachengzhi_3_1 = Math.floor(jinengjiachengzhi_3_1);
                        this.chufahushima_3_1 = "" + jinengjiachengzhi_3_1;
                    }
                    else if (this.caidejineng4_1 == "20013") {
                        jinengjiachengzhi_3_1 = parseInt(Gerenshuxing.jinengbiao[j].chushizhi) + this.zuizhongsuanzhi_1 * parseFloat(Gerenshuxing.jinengbiao[j].jiacheng);
                        jinengjiachengzhi_3_1 = Math.floor(jinengjiachengzhi_3_1);
                        this.chufazhenshe_3_1 = "" + jinengjiachengzhi_3_1;
                    }
                    else if (this.caidejineng4_1 == "20014") {
                        jinengjiachengzhi_3_1 = parseInt(Gerenshuxing.jinengbiao[j].chushizhi) + this.zuizhongsuanzhi_1 * parseFloat(Gerenshuxing.jinengbiao[j].jiacheng);
                        jinengjiachengzhi_3_1 = Math.floor(jinengjiachengzhi_3_1);
                        this.chufaxilan_3_1 = "" + jinengjiachengzhi_3_1;
                    }
                    else if (this.caidejineng4_1 == "20015") {
                        jinengjiachengzhi_3_1 = parseInt(Gerenshuxing.jinengbiao[j].chushizhi) + this.zuizhongsuanzhi_1 * parseFloat(Gerenshuxing.jinengbiao[j].jiacheng);
                        jinengjiachengzhi_3_1 = Math.floor(jinengjiachengzhi_3_1);
                        this.chufaxilan_3_1 = "" + jinengjiachengzhi_3_1;
                    }
                    else if (this.caidejineng4_1 == "20016") {
                        jinengjiachengzhi_3_1 = parseInt(Gerenshuxing.jinengbiao[j].chushizhi) + this.zuizhongmazhi_1 * parseFloat(Gerenshuxing.jinengbiao[j].jiacheng);
                        jinengjiachengzhi_3_1 = Math.floor(jinengjiachengzhi_3_1);
                        this.chufajiansu_3_1 = "" + jinengjiachengzhi_3_1;
                    }
                    else if (this.caidejineng4_1 == "20017") {
                        jinengjiachengzhi_3_1 = parseInt(Gerenshuxing.jinengbiao[j].chushizhi) + this.zuizhongmazhi_1 * parseFloat(Gerenshuxing.jinengbiao[j].jiacheng);
                        jinengjiachengzhi_3_1 = Math.floor(jinengjiachengzhi_3_1);
                        var suijishu = Math.floor(Math.random() * 100);
                        if (suijishu <= jinengjiachengzhi_3_1) {
                            this.chufachenmo_3_1 = "1";
                        }
                    }
                    else if (this.caidejineng4_1 == "20018") {
                        jinengjiachengzhi_3_1 = parseInt(Gerenshuxing.jinengbiao[j].chushizhi) + this.zuizhongtianzhi_1 * parseFloat(Gerenshuxing.jinengbiao[j].jiacheng);
                        jinengjiachengzhi_3_1 = Math.floor(jinengjiachengzhi_3_1);
                        this.chufahuixue_3_1 = "" + jinengjiachengzhi_3_1;
                    }
                    else if (this.caidejineng4_1 == "20019") {
                        jinengjiachengzhi_3_1 = parseInt(Gerenshuxing.jinengbiao[j].chushizhi) + this.zuizhongsuanzhi_1 * parseFloat(Gerenshuxing.jinengbiao[j].jiacheng);
                        jinengjiachengzhi_3_1 = Math.floor(jinengjiachengzhi_3_1);
                        this.chufaquanhushi_3_1 = "" + jinengjiachengzhi_3_1;
                    }
                    else if (this.caidejineng4_1 == "20020") {
                        this.chufahuiling_3_1 = "1";
                    }
                    else if (this.caidejineng4_1 == "20021") {
                        jinengjiachengzhi_3_1 = parseInt(Gerenshuxing.jinengbiao[j].chushizhi) + this.zuizhongsuanzhi_1 * parseFloat(Gerenshuxing.jinengbiao[j].jiacheng);
                        jinengjiachengzhi_3_1 = Math.floor(jinengjiachengzhi_3_1);
                        this.chufadu_3_1 = "" + jinengjiachengzhi_3_1;
                    }
                    else if (this.caidejineng4_1 == "20022") {
                        jinengjiachengzhi_3_1 = parseInt(Gerenshuxing.jinengbiao[j].chushizhi) + this.zuizhongmazhi_1 * parseFloat(Gerenshuxing.jinengbiao[j].jiacheng);
                        jinengjiachengzhi_3_1 = Math.floor(jinengjiachengzhi_3_1);
                        this.chufaxuruo_3_1 = "" + jinengjiachengzhi_3_1;
                    }
                    else if (this.caidejineng4_1 == "20023") {
                        jinengjiachengzhi_3_1 = parseInt(Gerenshuxing.jinengbiao[j].chushizhi) + this.zuizhongtianzhi_1 * parseFloat(Gerenshuxing.jinengbiao[j].jiacheng);
                        jinengjiachengzhi_3_1 = Math.floor(jinengjiachengzhi_3_1);
                        this.chufajiafang_3_1 = "" + jinengjiachengzhi_3_1;
                    }
                    else if (this.caidejineng4_1 == "20024") {
                        jinengjiachengzhi_3_1 = parseInt(Gerenshuxing.jinengbiao[j].chushizhi) + this.zuizhonglazhi_1 * parseFloat(Gerenshuxing.jinengbiao[j].jiacheng);
                        jinengjiachengzhi_3_1 = Math.floor(jinengjiachengzhi_3_1);
                        this.chufajiasu_3_1 = "" + jinengjiachengzhi_3_1;
                    }
                    else if (this.caidejineng4_1 == "20025") {
                        this.chufajianxue_3_1 = "1";
                    }
                    else if (this.caidejineng4_1 == "20026") {
                        this.chufajiangong_3_1 = "1";
                    }
                    else if (this.caidejineng4_1 == "20027") {
                        this.chufawofangjiansu_3_1 = "1";
                    }
                }
            }
        }
        //计算菜品技能2///
        if (this.caidejineng5_1 != "0") {
            for (var j = 0; j < Gerenshuxing.jinengbiao.length; j++) {
                if (Gerenshuxing.jinengbiao[j].id == this.caidejineng5_1) {
                    var jinengjiachengzhi_3_1 = 0;
                    if (this.caidejineng5_1 == "20001") {
                        jinengjiachengzhi_3_1 = parseInt(Gerenshuxing.jinengbiao[j].chushizhi) + this.zuizhonglazhi_1 * parseFloat(Gerenshuxing.jinengbiao[j].jiacheng);
                        jinengjiachengzhi_3_1 = Math.floor(jinengjiachengzhi_3_1);
                        var suijishu = Math.floor(Math.random() * 100);
                        if (suijishu <= jinengjiachengzhi_3_1) {
                            this.chufalianji_3_1 = "1";
                        }
                    }
                    else if (this.caidejineng5_1 == "20002") {
                        jinengjiachengzhi_3_1 = parseInt(Gerenshuxing.jinengbiao[j].chushizhi) + this.zuizhonglazhi_1 * parseFloat(Gerenshuxing.jinengbiao[j].jiacheng);
                        jinengjiachengzhi_3_1 = Math.floor(jinengjiachengzhi_3_1);
                        var suijishu = Math.floor(Math.random() * 100);
                        if (suijishu <= jinengjiachengzhi_3_1) {
                            this.chufalianji_3_1 = "1";
                        }
                    }
                    else if (this.caidejineng5_1 == "20003") {
                        jinengjiachengzhi_3_1 = parseInt(Gerenshuxing.jinengbiao[j].chushizhi) + this.zuizhonglazhi_1 * parseFloat(Gerenshuxing.jinengbiao[j].jiacheng);
                        jinengjiachengzhi_3_1 = Math.floor(jinengjiachengzhi_3_1);
                        this.chufabisha_3_1 = "" + jinengjiachengzhi_3_1;
                    }
                    else if (this.caidejineng5_1 == "20004") {
                        jinengjiachengzhi_3_1 = parseInt(Gerenshuxing.jinengbiao[j].chushizhi) + this.zuizhonglazhi_1 * parseFloat(Gerenshuxing.jinengbiao[j].jiacheng);
                        jinengjiachengzhi_3_1 = Math.floor(jinengjiachengzhi_3_1);
                        this.chufabisha_3_1 = "" + jinengjiachengzhi_3_1;
                    }
                    else if (this.caidejineng5_1 == "20005") {
                        jinengjiachengzhi_3_1 = parseInt(Gerenshuxing.jinengbiao[j].chushizhi) + this.zuizhongtianzhi_1 * parseFloat(Gerenshuxing.jinengbiao[j].jiacheng);
                        jinengjiachengzhi_3_1 = Math.floor(jinengjiachengzhi_3_1);
                        this.chufaxixue_3_1 = "" + jinengjiachengzhi_3_1;
                    }
                    else if (this.caidejineng5_1 == "20006") {
                        jinengjiachengzhi_3_1 = parseInt(Gerenshuxing.jinengbiao[j].chushizhi) + this.zuizhongtianzhi_1 * parseFloat(Gerenshuxing.jinengbiao[j].jiacheng);
                        jinengjiachengzhi_3_1 = Math.floor(jinengjiachengzhi_3_1);
                        this.chufaxixue_3_1 = "" + jinengjiachengzhi_3_1;
                    }
                    else if (this.caidejineng5_1 == "20007") {
                        this.chufazhuiji_3_1 = "1";
                    }
                    else if (this.caidejineng5_1 == "20008") {
                        this.chufasane_3_1 = "1";
                    }
                    else if (this.caidejineng5_1 == "20009") {
                        jinengjiachengzhi_3_1 = parseInt(Gerenshuxing.jinengbiao[j].chushizhi) + this.zuizhonglazhi_1 * parseFloat(Gerenshuxing.jinengbiao[j].jiacheng);
                        jinengjiachengzhi_3_1 = Math.floor(jinengjiachengzhi_3_1);
                        this.chufahushila_3_1 = "" + jinengjiachengzhi_3_1;
                    }
                    else if (this.caidejineng5_1 == "20010") {
                        jinengjiachengzhi_3_1 = parseInt(Gerenshuxing.jinengbiao[j].chushizhi) + this.zuizhongtianzhi_1 * parseFloat(Gerenshuxing.jinengbiao[j].jiacheng);
                        jinengjiachengzhi_3_1 = Math.floor(jinengjiachengzhi_3_1);
                        this.chufahushitian_3_1 = "" + jinengjiachengzhi_3_1;
                    }
                    else if (this.caidejineng5_1 == "20011") {
                        jinengjiachengzhi_3_1 = parseInt(Gerenshuxing.jinengbiao[j].chushizhi) + this.zuizhongsuanzhi_1 * parseFloat(Gerenshuxing.jinengbiao[j].jiacheng);
                        jinengjiachengzhi_3_1 = Math.floor(jinengjiachengzhi_3_1);
                        this.chufahushisuan_3_1 = "" + jinengjiachengzhi_3_1;
                    }
                    else if (this.caidejineng5_1 == "20012") {
                        jinengjiachengzhi_3_1 = parseInt(Gerenshuxing.jinengbiao[j].chushizhi) + this.zuizhongmazhi_1 * parseFloat(Gerenshuxing.jinengbiao[j].jiacheng);
                        jinengjiachengzhi_3_1 = Math.floor(jinengjiachengzhi_3_1);
                        this.chufahushima_3_1 = "" + jinengjiachengzhi_3_1;
                    }
                    else if (this.caidejineng5_1 == "20013") {
                        jinengjiachengzhi_3_1 = parseInt(Gerenshuxing.jinengbiao[j].chushizhi) + this.zuizhongsuanzhi_1 * parseFloat(Gerenshuxing.jinengbiao[j].jiacheng);
                        jinengjiachengzhi_3_1 = Math.floor(jinengjiachengzhi_3_1);
                        this.chufazhenshe_3_1 = "" + jinengjiachengzhi_3_1;
                    }
                    else if (this.caidejineng5_1 == "20014") {
                        jinengjiachengzhi_3_1 = parseInt(Gerenshuxing.jinengbiao[j].chushizhi) + this.zuizhongsuanzhi_1 * parseFloat(Gerenshuxing.jinengbiao[j].jiacheng);
                        jinengjiachengzhi_3_1 = Math.floor(jinengjiachengzhi_3_1);
                        this.chufaxilan_3_1 = "" + jinengjiachengzhi_3_1;
                    }
                    else if (this.caidejineng5_1 == "20015") {
                        jinengjiachengzhi_3_1 = parseInt(Gerenshuxing.jinengbiao[j].chushizhi) + this.zuizhongsuanzhi_1 * parseFloat(Gerenshuxing.jinengbiao[j].jiacheng);
                        jinengjiachengzhi_3_1 = Math.floor(jinengjiachengzhi_3_1);
                        this.chufaxilan_3_1 = "" + jinengjiachengzhi_3_1;
                    }
                    else if (this.caidejineng5_1 == "20016") {
                        jinengjiachengzhi_3_1 = parseInt(Gerenshuxing.jinengbiao[j].chushizhi) + this.zuizhongmazhi_1 * parseFloat(Gerenshuxing.jinengbiao[j].jiacheng);
                        jinengjiachengzhi_3_1 = Math.floor(jinengjiachengzhi_3_1);
                        this.chufajiansu_3_1 = "" + jinengjiachengzhi_3_1;
                    }
                    else if (this.caidejineng5_1 == "20017") {
                        jinengjiachengzhi_3_1 = parseInt(Gerenshuxing.jinengbiao[j].chushizhi) + this.zuizhongmazhi_1 * parseFloat(Gerenshuxing.jinengbiao[j].jiacheng);
                        jinengjiachengzhi_3_1 = Math.floor(jinengjiachengzhi_3_1);
                        var suijishu = Math.floor(Math.random() * 100);
                        if (suijishu <= jinengjiachengzhi_3_1) {
                            this.chufachenmo_3_1 = "1";
                        }
                    }
                    else if (this.caidejineng5_1 == "20018") {
                        jinengjiachengzhi_3_1 = parseInt(Gerenshuxing.jinengbiao[j].chushizhi) + this.zuizhongtianzhi_1 * parseFloat(Gerenshuxing.jinengbiao[j].jiacheng);
                        jinengjiachengzhi_3_1 = Math.floor(jinengjiachengzhi_3_1);
                        this.chufahuixue_3_1 = "" + jinengjiachengzhi_3_1;
                    }
                    else if (this.caidejineng5_1 == "20019") {
                        jinengjiachengzhi_3_1 = parseInt(Gerenshuxing.jinengbiao[j].chushizhi) + this.zuizhongsuanzhi_1 * parseFloat(Gerenshuxing.jinengbiao[j].jiacheng);
                        jinengjiachengzhi_3_1 = Math.floor(jinengjiachengzhi_3_1);
                        this.chufaquanhushi_3_1 = "" + jinengjiachengzhi_3_1;
                    }
                    else if (this.caidejineng5_1 == "20020") {
                        this.chufahuiling_3_1 = "1";
                    }
                    else if (this.caidejineng5_1 == "20021") {
                        jinengjiachengzhi_3_1 = parseInt(Gerenshuxing.jinengbiao[j].chushizhi) + this.zuizhongsuanzhi_1 * parseFloat(Gerenshuxing.jinengbiao[j].jiacheng);
                        jinengjiachengzhi_3_1 = Math.floor(jinengjiachengzhi_3_1);
                        this.chufadu_3_1 = "" + jinengjiachengzhi_3_1;
                    }
                    else if (this.caidejineng5_1 == "20022") {
                        jinengjiachengzhi_3_1 = parseInt(Gerenshuxing.jinengbiao[j].chushizhi) + this.zuizhongmazhi_1 * parseFloat(Gerenshuxing.jinengbiao[j].jiacheng);
                        jinengjiachengzhi_3_1 = Math.floor(jinengjiachengzhi_3_1);
                        this.chufaxuruo_3_1 = "" + jinengjiachengzhi_3_1;
                    }
                    else if (this.caidejineng5_1 == "20023") {
                        jinengjiachengzhi_3_1 = parseInt(Gerenshuxing.jinengbiao[j].chushizhi) + this.zuizhongtianzhi_1 * parseFloat(Gerenshuxing.jinengbiao[j].jiacheng);
                        jinengjiachengzhi_3_1 = Math.floor(jinengjiachengzhi_3_1);
                        this.chufajiafang_3_1 = "" + jinengjiachengzhi_3_1;
                    }
                    else if (this.caidejineng5_1 == "20024") {
                        jinengjiachengzhi_3_1 = parseInt(Gerenshuxing.jinengbiao[j].chushizhi) + this.zuizhonglazhi_1 * parseFloat(Gerenshuxing.jinengbiao[j].jiacheng);
                        jinengjiachengzhi_3_1 = Math.floor(jinengjiachengzhi_3_1);
                        this.chufajiasu_3_1 = "" + jinengjiachengzhi_3_1;
                    }
                    else if (this.caidejineng5_1 == "20025") {
                        this.chufajianxue_3_1 = "1";
                    }
                    else if (this.caidejineng5_1 == "20026") {
                        this.chufajiangong_3_1 = "1";
                    }
                    else if (this.caidejineng5_1 == "20027") {
                        this.chufawofangjiansu_3_1 = "1";
                    }
                }
            }
        }
        this.duiren3shanghai();
    };
    Pvpzhandoujiemian.prototype.duiguai1shanghai = function () {
        var zhongshanghai_1_ = 0;
        var zuizhongshanghaila_1_ = 0;
        var zuizhongshanghaima_1_ = 0;
        var zuizhongshanghaisuan_1_ = 0;
        var zuizhongshanghaitian_1_ = 0;
        var hushila_1_ = this.direnla_1;
        var hushima_1_ = this.direnma_1;
        var hushisuan_1_ = this.dirensuan_1;
        var hushitian_1_ = this.direntian_1;
        //判断是否触发了忽视
        if (this.chufahushila_1_ != "0") {
            hushila_1_ = hushila_1_ - Math.floor(hushila_1_ * (parseInt(this.chufahushila_1_) / 100));
            if (hushila_1_ < 0) {
                hushila_1_ = 0;
            }
        }
        if (this.chufahushima_1_ != "0") {
            hushima_1_ = hushima_1_ - Math.floor(hushima_1_ * (parseInt(this.chufahushima_1_) / 100));
            if (hushima_1_ < 0) {
                hushima_1_ = 0;
            }
        }
        if (this.chufahushisuan_1_ != "0") {
            hushisuan_1_ = hushisuan_1_ - Math.floor(hushisuan_1_ * (parseInt(this.chufahushisuan_1_) / 100));
            if (hushisuan_1_ < 0) {
                hushisuan_1_ = 0;
            }
        }
        if (this.chufahushitian_1_ != "0") {
            hushitian_1_ = hushitian_1_ - Math.floor(hushitian_1_ * (parseInt(this.chufahushitian_1_) / 100));
            if (hushitian_1_ < 0) {
                hushitian_1_ = 0;
            }
        }
        //判断怪物BUFF是否有忽视
        for (var i = 0; i < this.buff_3.length; i++) {
            if (this.buff_3[i].id == "20019" && parseInt(this.buff_3[i].chixu) > 0 && this.buff_3[i].xiaoguo != "") {
                hushila_1_ = hushila_1_ - Math.floor(hushila_1_ * (parseInt(this.buff_3[i].xiaoguo) / 100));
                if (hushila_1_ < 0) {
                    hushila_1_ = 0;
                }
                hushima_1_ = hushima_1_ - Math.floor(hushima_1_ * (parseInt(this.buff_3[i].xiaoguo) / 100));
                if (hushima_1_ < 0) {
                    hushima_1_ = 0;
                }
                hushisuan_1_ = hushisuan_1_ - Math.floor(hushisuan_1_ * (parseInt(this.buff_3[i].xiaoguo) / 100));
                if (hushisuan_1_ < 0) {
                    hushisuan_1_ = 0;
                }
                hushitian_1_ = hushitian_1_ - Math.floor(hushitian_1_ * (parseInt(this.buff_3[i].xiaoguo) / 100));
                if (hushitian_1_ < 0) {
                    hushitian_1_ = 0;
                }
            }
        }
        //计算怪物所受伤害
        zuizhongshanghaila_1_ = Math.floor(this.shuchulazhi_0 * (1 - hushila_1_ / 1000));
        zuizhongshanghaima_1_ = Math.floor(this.shuchumazhi_0 * (1 - hushima_1_ / 1000));
        zuizhongshanghaisuan_1_ = Math.floor(this.shuchusuanzhi_0 * (1 - hushisuan_1_ / 1000));
        zuizhongshanghaitian_1_ = Math.floor(this.shuchutianzhi_0 * (1 - hushitian_1_ / 1000));
        zhongshanghai_1_ = zuizhongshanghaila_1_ + zuizhongshanghaima_1_ + zuizhongshanghaisuan_1_ + zuizhongshanghaitian_1_;
        //判断是否触发了自身降低攻击
        if (this.chufajiangong_1_ != "0") {
            zhongshanghai_1_ = Math.floor(zhongshanghai_1_ * 0.9);
        }
        //判断是否触发了震慑
        if (this.chufazhenshe_1_ != "0") {
            zhongshanghai_1_ = Math.floor(Math.floor(zhongshanghai_1_ * (1 - this.fangyu_1 / 1000)) + this.qixue_1 * parseInt(this.chufazhenshe_1_) / 100);
            this.zhandoutexiao("zhenshe", this.qixue_1 * parseInt(this.chufazhenshe_1_) / 100, 3);
        }
        //判断是否触发了必杀
        if (this.chufabisha_1_ != "0") {
            zhongshanghai_1_ = Math.floor(zhongshanghai_1_ + zhongshanghai_1_ * parseInt(this.chufabisha_1_) / 100);
            this.zhandoutexiao("bisha", Math.floor(zhongshanghai_1_ * (1 - this.fangyu_1 / 1000)), 3);
        }
        else {
            this.zhandoutexiao("putong", Math.floor(zhongshanghai_1_ * (1 - this.fangyu_1 / 1000)), 3);
        }
        //判断是否触发了吸血
        if (this.chufaxixue_1_ != "0") {
            if (this.chupairen == 0) {
                this.qixue_0 = Math.floor(this.qixue_0 + zhongshanghai_1_ * parseInt(this.chufaxixue_1_) / 100);
                if (this.qixue_0 >= this.qixueshangxian_0) {
                    this.qixue_0 = this.qixueshangxian_0;
                }
                this.zhandoutexiao("xixue", zhongshanghai_1_ * parseInt(this.chufaxixue_1_) / 100, 3);
                this.shuaxinxuetiao_0();
            }
            else if (this.chupairen == 1) {
                this.fuzhu1qixue_0 = Math.floor(this.fuzhu1qixue_0 + zhongshanghai_1_ * parseInt(this.chufaxixue_1_) / 100);
                if (this.fuzhu1qixue_0 >= this.fuzhu1qixueshangxian_0) {
                    this.fuzhu1qixue_0 = this.fuzhu1qixueshangxian_0;
                }
                this.zhandoutexiao("xixue", zhongshanghai_1_ * parseInt(this.chufaxixue_1_) / 100, 3);
                this.shuaxinxuetiao_1();
            }
            else if (this.chupairen == 2) {
                this.fuzhu2qixue_0 = Math.floor(this.fuzhu2qixue_0 + zhongshanghai_1_ * parseInt(this.chufaxixue_1_) / 100);
                if (this.fuzhu2qixue_0 >= this.fuzhu2qixueshangxian_0) {
                    this.fuzhu2qixue_0 = this.fuzhu2qixueshangxian_0;
                }
                this.zhandoutexiao("xixue", zhongshanghai_1_ * parseInt(this.chufaxixue_1_) / 100, 3);
                this.shuaxinxuetiao_2();
            }
        }
        //判断是否触发了善恶
        if (this.chufasane_1_ != "0") {
            var suijisane = Math.floor(Math.random() * 2);
            if (suijisane == 0) {
                this.zhandoutexiao("sanezhie", Math.floor(zhongshanghai_1_ * 1.8 * (1 - this.fangyu_1 / 1000)), 3);
                this.qixue_1 = Math.floor(this.qixue_1 - Math.floor(zhongshanghai_1_ * 1.8 * (1 - this.fangyu_1 / 1000)));
                this.shuaxinxuetiao_3();
                //判断是否触发追击
                if (this.qixue_1 <= 0) {
                    if (this.chufazhuiji_1_ != "0") {
                        if (Math.floor(this.qixue_1 - Math.floor(zhongshanghai_1_ * 1.8 * (1 - this.fangyu_1 / 1000))) < 0) {
                            var zhuijishu = 0 - Math.floor(this.qixue_1 - Math.floor(zhongshanghai_1_ * 1.8 * (1 - this.fangyu_1 / 1000)));
                            if (this.fuzhu1qixue_1 > 0) {
                                this.fuzhu1qixue_1 = this.fuzhu1qixue_1 - Math.floor(zhuijishu * (1 - this.fuzhu1fangyu_1 / 1000));
                                this.zhuijitexiao(this.benhuihechucaiid_0, 3, 4, Math.floor(zhuijishu * (1 - this.fuzhu1fangyu_1 / 1000)));
                                this.shuaxinxuetiao_4();
                            }
                            else if (this.fuzhu2qixue_1 > 0) {
                                this.fuzhu2qixue_1 = this.fuzhu2qixue_1 - Math.floor(zhuijishu * (1 - this.fuzhu2fangyu_1 / 1000));
                                this.zhuijitexiao(this.benhuihechucaiid_0, 3, 5, Math.floor(zhuijishu * (1 - this.fuzhu2fangyu_1 / 1000)));
                                this.shuaxinxuetiao_5();
                            }
                        }
                    }
                }
            }
            else {
                this.zhandoutexiao("sanezhis", zhongshanghai_1_ * 0.5, 3);
                this.qixue_1 = Math.floor(this.qixue_1 + zhongshanghai_1_ * 0.5);
                this.shuaxinxuetiao_3();
            }
        }
        else {
            this.qixue_1 = Math.floor(this.qixue_1 - Math.floor(zhongshanghai_1_ * (1 - this.fangyu_1 / 1000)));
            this.shuaxinxuetiao_3();
        }
        //判断是否触发吸蓝
        if (this.chufaxilan_1_ != "0") {
            this.qidianshu_0 = this.qidianshu_0 + parseInt(this.chufaxilan_1_);
            if (this.qidianshu_0 >= 10) {
                this.qidianshu_0 = 10;
            }
            this.qidianshu_1 = this.qidianshu_1 - parseInt(this.chufaxilan_1_);
            if (this.qidianshu_1 < 0) {
                this.qidianshu_1 = 0;
            }
            this.qidianxianshigengxin();
            this.direnqidianxianshigengxin();
            this.zhandoutexiao("xilan", parseInt(this.chufaxilan_1_), 3);
        }
        //判断是否触发减速
        if (this.chufajiansu_1_ != "0") {
            for (var h = 0; h < this.buff_3.length; h++) {
                if (this.buff_3[h].id == "20016") {
                    this.buff_3.splice(h, 1);
                }
            }
            var jiansubuff_1_ = {
                id: "20016",
                chixu: 2,
                xiaoguo: parseInt(this.chufajiansu_1_)
            };
            this.buff_3.push(jiansubuff_1_);
            //			console.log(this.guai1buff);
            this.zhandoutexiao("jiansu", parseInt(this.chufajiansu_1_), 3);
            this.direnbuffxianshi();
        }
        //判断是否触发沉默
        if (this.chufachenmo_1_ != "0") {
            var chufachengmojilv_1_ = Math.floor(Math.random() * 100);
            if (chufachengmojilv_1_ <= parseInt(this.chufachenmo_1_)) {
                for (var j = 0; j < this.buff_3.length; j++) {
                    if (this.buff_3[j].id == "20017") {
                        this.buff_3.splice(j, 1);
                    }
                }
                var chengmobuff_1_ = {
                    id: "20017",
                    chixu: 1,
                    xiaoguo: 0
                };
                this.buff_3.push(chengmobuff_1_);
                //				console.log(this.guai1buff);
                this.zhandoutexiao("chenmo", 0, 3);
                this.direnbuffxianshi();
            }
        }
        //判断是否触发回血
        if (this.chufahuixue_1_ != "0") {
            if (this.chupairen == 0) {
                this.qixue_0 = Math.floor(this.qixue_0 + this.qixueshangxian_0 * parseInt(this.chufahuixue_1_) / 100);
                if (this.qixue_0 >= this.qixueshangxian_0) {
                    this.qixue_0 = this.qixueshangxian_0;
                }
                this.shuaxinxuetiao_0();
                this.zhandoutexiao("huixue", this.qixueshangxian_0 * parseInt(this.chufahuixue_1_) / 100, 0);
            }
            else if (this.chupairen == 1) {
                this.fuzhu1qixue_0 = Math.floor(this.fuzhu1qixue_0 + this.fuzhu1qixueshangxian_0 * parseInt(this.chufahuixue_1_) / 100);
                if (this.fuzhu1qixue_0 >= this.fuzhu1qixueshangxian_0) {
                    this.fuzhu1qixue_0 = this.fuzhu1qixueshangxian_0;
                }
                this.shuaxinxuetiao_1();
                this.zhandoutexiao("huixue", this.fuzhu1qixueshangxian_0 * parseInt(this.chufahuixue_1_) / 100, 1);
            }
            else if (this.chupairen == 2) {
                this.fuzhu2qixue_0 = Math.floor(this.fuzhu2qixue_0 + this.fuzhu2qixueshangxian_0 * parseInt(this.chufahuixue_1_) / 100);
                if (this.fuzhu2qixue_0 >= this.fuzhu2qixueshangxian_0) {
                    this.fuzhu2qixue_0 = this.fuzhu2qixueshangxian_0;
                }
                this.shuaxinxuetiao_2();
                this.zhandoutexiao("huixue", this.fuzhu2qixueshangxian_0 * parseInt(this.chufahuixue_1_) / 100, 2);
            }
        }
        //判断是否触发减抗
        if (this.chufaquanhushi_1_ != "0") {
            for (var k = 0; k < this.buff_3.length; k++) {
                if (this.buff_3[k].id == "20019") {
                    this.buff_3.splice(k, 1);
                }
            }
            var jiankangbuff_1_ = {
                id: "20019",
                chixu: 3,
                xiaoguo: parseInt(this.chufaquanhushi_1_)
            };
            this.buff_3.push(jiankangbuff_1_);
            //			console.log(this.guai1buff);
            this.zhandoutexiao("jiankang", parseInt(this.chufaquanhushi_1_), 3);
            this.direnbuffxianshi();
        }
        //判断是否触发回灵
        if (this.chufahuiling_1_ != "0") {
            if (this.chupairen == 0) {
                for (var g = 0; g < this.buff_0.length; g++) {
                    if (this.buff_0[g].id == "20020") {
                        this.buff_0.splice(g, 1);
                    }
                }
                var huilingbuff_1_ = {
                    id: "20020",
                    chixu: 3,
                    xiaoguo: 2
                };
                this.buff_0.push(huilingbuff_1_);
                //			console.log(this.zijibuff);
                this.zhandoutexiao("huiling", 2, 0);
                this.zijibuffxianshi();
            }
            else if (this.chupairen == 1) {
                for (var g = 0; g < this.buff_1.length; g++) {
                    if (this.buff_1[g].id == "20020") {
                        this.buff_1.splice(g, 1);
                    }
                }
                var huilingbuff_1_ = {
                    id: "20020",
                    chixu: 3,
                    xiaoguo: 2
                };
                this.buff_1.push(huilingbuff_1_);
                //			console.log(this.zijibuff);
                this.zhandoutexiao("huiling", 2, 1);
                this.zijifuzhu1buffxianshi();
            }
            else if (this.chupairen == 2) {
                for (var g = 0; g < this.buff_2.length; g++) {
                    if (this.buff_2[g].id == "20020") {
                        this.buff_2.splice(g, 1);
                    }
                }
                var huilingbuff_1_ = {
                    id: "20020",
                    chixu: 3,
                    xiaoguo: 2
                };
                this.buff_2.push(huilingbuff_1_);
                //			console.log(this.zijibuff);
                this.zhandoutexiao("huiling", 2, 2);
                this.zijifuzhu2buffxianshi();
            }
        }
        //判断是否触发减攻击
        if (this.chufaxuruo_1_ != "0") {
            for (var l = 0; l < this.buff_3.length; l++) {
                if (this.buff_3[l].id == "20022") {
                    this.buff_3.splice(l, 1);
                }
            }
            var jiangongjibuff_1_ = {
                id: "20022",
                chixu: 3,
                xiaoguo: parseInt(this.chufaxuruo_1_)
            };
            this.buff_3.push(jiangongjibuff_1_);
            //			console.log(this.guai1buff);
            this.zhandoutexiao("jiangongji", parseInt(this.chufaxuruo_1_), 3);
            this.direnbuffxianshi();
        }
        //判断是否触发毒
        if (this.chufadu_1_ != "0") {
            for (var c = 0; c < this.buff_3.length; c++) {
                if (this.buff_3[c].id == "20021") {
                    this.buff_3.splice(c, 1);
                }
            }
            var dubuff_1_ = {
                id: "20021",
                chixu: 3,
                xiaoguo: parseInt(this.chufadu_1_)
            };
            this.buff_3.push(dubuff_1_);
            //			console.log(this.guai1buff);
            this.zhandoutexiao("du", parseInt(this.chufadu_1_), 3);
            this.direnbuffxianshi();
        }
        //判断是否触发加防
        if (this.chufajiafang_1_ != "0") {
            if (this.chupairen == 0) {
                for (var b = 0; b < this.buff_0.length; b++) {
                    if (this.buff_0[b].id == "20023") {
                        this.buff_0.splice(b, 1);
                    }
                }
                var jiafangbuff_1_ = {
                    id: "20023",
                    chixu: 3,
                    xiaoguo: parseInt(this.chufajiafang_1_)
                };
                this.buff_0.push(jiafangbuff_1_);
                //			console.log(this.zijibuff);
                this.zhandoutexiao("jiafang", parseInt(this.chufajiafang_1_), 0);
                this.zijibuffxianshi();
            }
            else if (this.chupairen == 1) {
                for (var b = 0; b < this.buff_1.length; b++) {
                    if (this.buff_1[b].id == "20023") {
                        this.buff_1.splice(b, 1);
                    }
                }
                var jiafangbuff_1_ = {
                    id: "20023",
                    chixu: 3,
                    xiaoguo: parseInt(this.chufajiafang_1_)
                };
                this.buff_1.push(jiafangbuff_1_);
                //			console.log(this.zijibuff);
                this.zhandoutexiao("jiafang", parseInt(this.chufajiafang_1_), 1);
                this.zijifuzhu1buffxianshi();
            }
            else if (this.chupairen == 2) {
                for (var b = 0; b < this.buff_2.length; b++) {
                    if (this.buff_2[b].id == "20023") {
                        this.buff_2.splice(b, 1);
                    }
                }
                var jiafangbuff_1_ = {
                    id: "20023",
                    chixu: 3,
                    xiaoguo: parseInt(this.chufajiafang_1_)
                };
                this.buff_2.push(jiafangbuff_1_);
                //			console.log(this.zijibuff);
                this.zhandoutexiao("jiafang", parseInt(this.chufajiafang_1_), 2);
                this.zijifuzhu2buffxianshi();
            }
        }
        //判断是否触发加速
        if (this.chufajiasu_1_ != "0") {
            if (this.chupairen == 0) {
                for (var v = 0; v < this.buff_0.length; v++) {
                    if (this.buff_0[v].id == "20024") {
                        this.buff_0.splice(v, 1);
                    }
                }
                var jiasubuff_1_ = {
                    id: "20024",
                    chixu: 3,
                    xiaoguo: parseInt(this.chufajiasu_1_)
                };
                this.buff_0.push(jiasubuff_1_);
                //			console.log(this.zijibuff);
                this.zhandoutexiao("jiasu", parseInt(this.chufajiasu_1_), 0);
                this.zijibuffxianshi();
            }
            else if (this.chupairen == 1) {
                for (var v = 0; v < this.buff_1.length; v++) {
                    if (this.buff_1[v].id == "20024") {
                        this.buff_1.splice(v, 1);
                    }
                }
                var jiasubuff_1_ = {
                    id: "20024",
                    chixu: 3,
                    xiaoguo: parseInt(this.chufajiasu_1_)
                };
                this.buff_1.push(jiasubuff_1_);
                //			console.log(this.zijibuff);
                this.zhandoutexiao("jiasu", parseInt(this.chufajiasu_1_), 1);
                this.zijifuzhu1buffxianshi();
            }
            else if (this.chupairen == 2) {
                for (var v = 0; v < this.buff_2.length; v++) {
                    if (this.buff_2[v].id == "20024") {
                        this.buff_2.splice(v, 1);
                    }
                }
                var jiasubuff_1_ = {
                    id: "20024",
                    chixu: 3,
                    xiaoguo: parseInt(this.chufajiasu_1_)
                };
                this.buff_2.push(jiasubuff_1_);
                //			console.log(this.zijibuff);
                this.zhandoutexiao("jiasu", parseInt(this.chufajiasu_1_), 2);
                this.zijifuzhu2buffxianshi();
            }
        }
        //判断是否触发给我方减血
        if (this.chufajianxue_1_ != "0") {
            if (this.chupairen == 0) {
                this.qixue_0 = Math.floor(this.qixue_0 - this.qixueshangxian_0 * 0.1);
                this.zhandoutexiao("zijijianxue", this.qixueshangxian_0 * 0.1, 0);
                this.shuaxinxuetiao_0();
            }
            else if (this.chupairen == 1) {
                this.fuzhu1qixue_0 = Math.floor(this.fuzhu1qixue_0 - this.fuzhu1qixueshangxian_0 * 0.1);
                this.zhandoutexiao("zijijianxue", this.fuzhu1qixueshangxian_0 * 0.1, 1);
                this.shuaxinxuetiao_1();
            }
            else if (this.chupairen == 2) {
                this.fuzhu2qixue_0 = Math.floor(this.fuzhu2qixue_0 - this.fuzhu2qixueshangxian_0 * 0.1);
                this.zhandoutexiao("zijijianxue", this.fuzhu2qixueshangxian_0 * 0.1, 2);
                this.shuaxinxuetiao_2();
            }
        }
        //判断是否给我方减速
        if (this.chufawofangjiansu_1_ != "0") {
            if (this.chupairen == 0) {
                this.jinduzu_pvp_0.y = this.jinduzu_pvp_0.y + 20;
                if (this.jinduzu_pvp_0.y >= this.img_sudujindu_pvp.y + this.img_sudujindu_pvp.height - this.jinduzu_pvp_0.height) {
                    this.jinduzu_pvp_0.y = this.img_sudujindu_pvp.y + this.img_sudujindu_pvp.height - this.jinduzu_pvp_0.height;
                }
            }
            else if (this.chupairen == 1) {
                this.jinduzu_pvp_1.y = this.jinduzu_pvp_1.y + 20;
                if (this.jinduzu_pvp_1.y >= this.img_sudujindu_pvp.y + this.img_sudujindu_pvp.height - this.jinduzu_pvp_1.height) {
                    this.jinduzu_pvp_1.y = this.img_sudujindu_pvp.y + this.img_sudujindu_pvp.height - this.jinduzu_pvp_1.height;
                }
            }
            else if (this.chupairen == 2) {
                this.jinduzu_pvp_2.y = this.jinduzu_pvp_2.y + 20;
                if (this.jinduzu_pvp_2.y >= this.img_sudujindu_pvp.y + this.img_sudujindu_pvp.height - this.jinduzu_pvp_2.height) {
                    this.jinduzu_pvp_2.y = this.img_sudujindu_pvp.y + this.img_sudujindu_pvp.height - this.jinduzu_pvp_2.height;
                }
            }
        }
        //判断是否触发了连击
        if (this.chufalianji_1_ != "0") {
            this.lianjiteshuchuli(Math.floor(zhongshanghai_1_ * (1 - this.fangyu_1 / 1000)), 3);
        }
        //技能释放完毕后，开始新的回合
        this.kaishixinhuihe();
    };
    Pvpzhandoujiemian.prototype.duiguai2shanghai = function () {
        var zhongshanghai_2_ = 0;
        var zuizhongshanghaila_2_ = 0;
        var zuizhongshanghaima_2_ = 0;
        var zuizhongshanghaisuan_2_ = 0;
        var zuizhongshanghaitian_2_ = 0;
        var hushila_2_ = 0;
        var hushima_2_ = 0;
        var hushisuan_2_ = 0;
        var hushitian_2_ = 0;
        //判断是否触发了忽视
        if (this.chufahushila_2_ != "0") {
            hushila_2_ = hushila_2_ - Math.floor(hushila_2_ * (parseInt(this.chufahushila_2_) / 100));
            if (hushila_2_ < 0) {
                hushila_2_ = 0;
            }
        }
        if (this.chufahushima_2_ != "0") {
            hushima_2_ = hushima_2_ - Math.floor(hushima_2_ * (parseInt(this.chufahushima_2_) / 100));
            if (hushima_2_ < 0) {
                hushima_2_ = 0;
            }
        }
        if (this.chufahushisuan_2_ != "0") {
            hushisuan_2_ = hushisuan_2_ - Math.floor(hushisuan_2_ * (parseInt(this.chufahushisuan_2_) / 100));
            if (hushisuan_2_ < 0) {
                hushisuan_2_ = 0;
            }
        }
        if (this.chufahushitian_2_ != "0") {
            hushitian_2_ = hushitian_2_ - Math.floor(hushitian_2_ * (parseInt(this.chufahushitian_2_) / 100));
            if (hushitian_2_ < 0) {
                hushitian_2_ = 0;
            }
        }
        //判断怪物BUFF是否有忽视
        for (var i = 0; i < this.buff_4.length; i++) {
            if (this.buff_4[i].id == "20019" && parseInt(this.buff_4[i].chixu) > 0 && this.buff_4[i].xiaoguo != "") {
                hushila_2_ = hushila_2_ - Math.floor(hushila_2_ * (parseInt(this.buff_4[i].xiaoguo) / 100));
                if (hushila_2_ < 0) {
                    hushila_2_ = 0;
                }
                hushima_2_ = hushima_2_ - Math.floor(hushima_2_ * (parseInt(this.buff_4[i].xiaoguo) / 100));
                if (hushima_2_ < 0) {
                    hushima_2_ = 0;
                }
                hushisuan_2_ = hushisuan_2_ - Math.floor(hushisuan_2_ * (parseInt(this.buff_4[i].xiaoguo) / 100));
                if (hushisuan_2_ < 0) {
                    hushisuan_2_ = 0;
                }
                hushitian_2_ = hushitian_2_ - Math.floor(hushitian_2_ * (parseInt(this.buff_4[i].xiaoguo) / 100));
                if (hushitian_2_ < 0) {
                    hushitian_2_ = 0;
                }
            }
        }
        //计算怪物所受伤害
        zuizhongshanghaila_2_ = Math.floor(this.shuchulazhi_0 * (1 - hushila_2_ / 1000));
        zuizhongshanghaima_2_ = Math.floor(this.shuchumazhi_0 * (1 - hushima_2_ / 1000));
        zuizhongshanghaisuan_2_ = Math.floor(this.shuchusuanzhi_0 * (1 - hushisuan_2_ / 1000));
        zuizhongshanghaitian_2_ = Math.floor(this.shuchutianzhi_0 * (1 - hushitian_2_ / 1000));
        zhongshanghai_2_ = zuizhongshanghaila_2_ + zuizhongshanghaima_2_ + zuizhongshanghaisuan_2_ + zuizhongshanghaitian_2_;
        //判断是否触发了自身降低攻击
        if (this.chufajiangong_2_ != "0") {
            zhongshanghai_2_ = Math.floor(zhongshanghai_2_ * 0.9);
        }
        //判断是否触发了震慑
        if (this.chufazhenshe_2_ != "0") {
            zhongshanghai_2_ = Math.floor(Math.floor(zhongshanghai_2_ * (1 - this.fuzhu1fangyu_1 / 1000)) + this.fuzhu1qixue_1 * parseInt(this.chufazhenshe_2_) / 100);
            this.zhandoutexiao("zhenshe", this.fuzhu1qixue_1 * parseInt(this.chufazhenshe_2_) / 100, 4);
        }
        //判断是否触发了必杀
        if (this.chufabisha_2_ != "0") {
            zhongshanghai_2_ = Math.floor(zhongshanghai_2_ + zhongshanghai_2_ * parseInt(this.chufabisha_2_) / 100);
            this.zhandoutexiao("bisha", Math.floor(zhongshanghai_2_ * (1 - this.fuzhu1fangyu_1 / 1000)), 4);
        }
        else {
            this.zhandoutexiao("putong", Math.floor(zhongshanghai_2_ * (1 - this.fuzhu1fangyu_1 / 1000)), 4);
        }
        //判断是否触发了吸血
        if (this.chufaxixue_2_ != "0") {
            if (this.chupairen == 0) {
                this.qixue_0 = Math.floor(this.qixue_0 + zhongshanghai_2_ * parseInt(this.chufaxixue_2_) / 100);
                if (this.qixue_0 >= this.qixueshangxian_0) {
                    this.qixue_0 = this.qixueshangxian_0;
                }
                this.zhandoutexiao("xixue", zhongshanghai_2_ * parseInt(this.chufaxixue_2_) / 100, 4);
                this.shuaxinxuetiao_0();
            }
            else if (this.chupairen == 1) {
                this.fuzhu1qixue_0 = Math.floor(this.fuzhu1qixue_0 + zhongshanghai_2_ * parseInt(this.chufaxixue_2_) / 100);
                if (this.fuzhu1qixue_0 >= this.fuzhu1qixueshangxian_0) {
                    this.fuzhu1qixue_0 = this.fuzhu1qixueshangxian_0;
                }
                this.zhandoutexiao("xixue", zhongshanghai_2_ * parseInt(this.chufaxixue_2_) / 100, 4);
                this.shuaxinxuetiao_1();
            }
            else if (this.chupairen == 2) {
                this.fuzhu2qixue_0 = Math.floor(this.fuzhu2qixue_0 + zhongshanghai_2_ * parseInt(this.chufaxixue_2_) / 100);
                if (this.fuzhu2qixue_0 >= this.fuzhu2qixueshangxian_0) {
                    this.fuzhu2qixue_0 = this.fuzhu2qixueshangxian_0;
                }
                this.zhandoutexiao("xixue", zhongshanghai_2_ * parseInt(this.chufaxixue_2_) / 100, 4);
                this.shuaxinxuetiao_2();
            }
        }
        //判断是否触发了善恶
        if (this.chufasane_2_ != "0") {
            var suijisane = Math.floor(Math.random() * 2);
            if (suijisane == 0) {
                this.zhandoutexiao("sanezhie", Math.floor(zhongshanghai_2_ * 1.8 * (1 - this.fuzhu1fangyu_1 / 1000)), 4);
                this.fuzhu1qixue_1 = Math.floor(this.fuzhu1qixue_1 - Math.floor(zhongshanghai_2_ * 1.8 * (1 - this.fuzhu1fangyu_1 / 1000)));
                this.shuaxinxuetiao_4();
                //判断是否触发追击
                if (this.fuzhu1qixue_1 <= 0) {
                    if (this.chufazhuiji_2_ != "0") {
                        if (Math.floor(this.fuzhu1qixue_1 - Math.floor(zhongshanghai_2_ * 1.8 * (1 - this.fuzhu1fangyu_1 / 1000))) < 0) {
                            var zhuijishu = 0 - Math.floor(this.fuzhu1qixue_1 - Math.floor(zhongshanghai_2_ * 1.8 * (1 - this.fuzhu1fangyu_1 / 1000)));
                            if (this.qixue_1 > 0) {
                                this.qixue_1 = this.qixue_1 - Math.floor(zhuijishu * (1 - this.fangyu_1 / 1000));
                                this.zhuijitexiao(this.benhuihechucaiid_0, 4, 3, Math.floor(zhuijishu * (1 - this.fangyu_1 / 1000)));
                                this.shuaxinxuetiao_3();
                            }
                            else if (this.fuzhu2qixue_1 > 0) {
                                this.fuzhu2qixue_1 = this.fuzhu2qixue_1 - Math.floor(zhuijishu * (1 - this.fuzhu2fangyu_1 / 1000));
                                this.zhuijitexiao(this.benhuihechucaiid_0, 4, 5, Math.floor(zhuijishu * (1 - this.fuzhu2fangyu_1 / 1000)));
                                this.shuaxinxuetiao_5();
                            }
                        }
                    }
                }
            }
            else {
                this.zhandoutexiao("sanezhis", zhongshanghai_2_ * 0.5, 4);
                this.fuzhu1qixue_1 = Math.floor(this.fuzhu1qixue_1 + zhongshanghai_2_ * 0.5);
                this.shuaxinxuetiao_4();
            }
        }
        else {
            this.fuzhu1qixue_1 = Math.floor(this.fuzhu1qixue_1 - Math.floor(zhongshanghai_2_ * (1 - this.fuzhu1fangyu_1 / 1000)));
            this.shuaxinxuetiao_4();
        }
        //判断是否触发吸蓝
        if (this.chufaxilan_2_ != "0") {
            this.qidianshu_0 = this.qidianshu_0 + parseInt(this.chufaxilan_2_);
            if (this.qidianshu_0 >= 10) {
                this.qidianshu_0 = 10;
            }
            this.qidianshu_1 = this.qidianshu_1 - parseInt(this.chufaxilan_2_);
            if (this.qidianshu_1 < 0) {
                this.qidianshu_1 = 0;
            }
            this.qidianxianshigengxin();
            this.direnqidianxianshigengxin();
            this.zhandoutexiao("xilan", parseInt(this.chufaxilan_2_), 4);
        }
        //判断是否触发减速
        if (this.chufajiansu_2_ != "0") {
            for (var h = 0; h < this.buff_4.length; h++) {
                if (this.buff_4[h].id == "20016") {
                    this.buff_4.splice(h, 1);
                }
            }
            var jiansubuff_2_ = {
                id: "20016",
                chixu: 2,
                xiaoguo: parseInt(this.chufajiansu_2_)
            };
            this.buff_4.push(jiansubuff_2_);
            //			console.log(this.guai1buff);
            this.zhandoutexiao("jiansu", parseInt(this.chufajiansu_2_), 4);
            this.direnfuzhu1buffxianshi();
        }
        //判断是否触发沉默
        if (this.chufachenmo_2_ != "0") {
            var chufachengmojilv_2_ = Math.floor(Math.random() * 100);
            if (chufachengmojilv_2_ <= parseInt(this.chufachenmo_2_)) {
                for (var j = 0; j < this.buff_4.length; j++) {
                    if (this.buff_4[j].id == "20017") {
                        this.buff_4.splice(j, 1);
                    }
                }
                var chengmobuff_2_ = {
                    id: "20017",
                    chixu: 1,
                    xiaoguo: 0
                };
                this.buff_4.push(chengmobuff_2_);
                //				console.log(this.guai1buff);
                this.zhandoutexiao("chenmo", 0, 4);
                this.direnfuzhu1buffxianshi();
            }
        }
        //判断是否触发回血
        if (this.chufahuixue_2_ != "0") {
            if (this.chupairen == 0) {
                this.qixue_0 = Math.floor(this.qixue_0 + this.qixueshangxian_0 * parseInt(this.chufahuixue_2_) / 100);
                if (this.qixue_0 >= this.qixueshangxian_0) {
                    this.qixue_0 = this.qixueshangxian_0;
                }
                this.shuaxinxuetiao_0();
                this.zhandoutexiao("huixue", this.qixueshangxian_0 * parseInt(this.chufahuixue_2_) / 100, 0);
            }
            else if (this.chupairen == 1) {
                this.fuzhu1qixue_0 = Math.floor(this.fuzhu1qixue_0 + this.fuzhu1qixueshangxian_0 * parseInt(this.chufahuixue_2_) / 100);
                if (this.fuzhu1qixue_0 >= this.fuzhu1qixueshangxian_0) {
                    this.fuzhu1qixue_0 = this.fuzhu1qixueshangxian_0;
                }
                this.shuaxinxuetiao_1();
                this.zhandoutexiao("huixue", this.fuzhu1qixueshangxian_0 * parseInt(this.chufahuixue_2_) / 100, 1);
            }
            else if (this.chupairen == 2) {
                this.fuzhu2qixue_0 = Math.floor(this.fuzhu2qixue_0 + this.fuzhu2qixueshangxian_0 * parseInt(this.chufahuixue_2_) / 100);
                if (this.fuzhu2qixue_0 >= this.fuzhu2qixueshangxian_0) {
                    this.fuzhu2qixue_0 = this.fuzhu2qixueshangxian_0;
                }
                this.shuaxinxuetiao_2();
                this.zhandoutexiao("huixue", this.fuzhu2qixueshangxian_0 * parseInt(this.chufahuixue_2_) / 100, 2);
            }
        }
        //判断是否触发减抗
        if (this.chufaquanhushi_2_ != "0") {
            for (var k = 0; k < this.buff_4.length; k++) {
                if (this.buff_4[k].id == "20019") {
                    this.buff_4.splice(k, 1);
                }
            }
            var jiankangbuff_2_ = {
                id: "20019",
                chixu: 3,
                xiaoguo: parseInt(this.chufaquanhushi_2_)
            };
            this.buff_4.push(jiankangbuff_2_);
            //			console.log(this.guai1buff);
            this.zhandoutexiao("jiankang", parseInt(this.chufaquanhushi_2_), 4);
            this.direnfuzhu1buffxianshi();
        }
        //判断是否触发回灵
        if (this.chufahuiling_2_ != "0") {
            if (this.chupairen == 0) {
                for (var g = 0; g < this.buff_0.length; g++) {
                    if (this.buff_0[g].id == "20020") {
                        this.buff_0.splice(g, 1);
                    }
                }
                var huilingbuff_2_ = {
                    id: "20020",
                    chixu: 3,
                    xiaoguo: 2
                };
                this.buff_0.push(huilingbuff_2_);
                //			console.log(this.zijibuff);
                this.zhandoutexiao("huiling", 2, 0);
                this.zijibuffxianshi();
            }
            else if (this.chupairen == 1) {
                for (var g = 0; g < this.buff_1.length; g++) {
                    if (this.buff_1[g].id == "20020") {
                        this.buff_1.splice(g, 1);
                    }
                }
                var huilingbuff_2_ = {
                    id: "20020",
                    chixu: 3,
                    xiaoguo: 2
                };
                this.buff_1.push(huilingbuff_2_);
                //			console.log(this.zijibuff);
                this.zhandoutexiao("huiling", 2, 1);
                this.zijifuzhu1buffxianshi();
            }
            else if (this.chupairen == 2) {
                for (var g = 0; g < this.buff_2.length; g++) {
                    if (this.buff_2[g].id == "20020") {
                        this.buff_2.splice(g, 1);
                    }
                }
                var huilingbuff_2_ = {
                    id: "20020",
                    chixu: 3,
                    xiaoguo: 2
                };
                this.buff_2.push(huilingbuff_2_);
                //			console.log(this.zijibuff);
                this.zhandoutexiao("huiling", 2, 2);
                this.zijifuzhu2buffxianshi();
            }
        }
        //判断是否触发减攻击
        if (this.chufaxuruo_2_ != "0") {
            for (var l = 0; l < this.buff_4.length; l++) {
                if (this.buff_4[l].id == "20022") {
                    this.buff_4.splice(l, 1);
                }
            }
            var jiangongjibuff_2_ = {
                id: "20022",
                chixu: 3,
                xiaoguo: parseInt(this.chufaxuruo_2_)
            };
            this.buff_4.push(jiangongjibuff_2_);
            //			console.log(this.guai1buff);
            this.zhandoutexiao("jiangongji", parseInt(this.chufaxuruo_2_), 4);
            this.direnfuzhu1buffxianshi();
        }
        //判断是否触发毒
        if (this.chufadu_2_ != "0") {
            for (var c = 0; c < this.buff_4.length; c++) {
                if (this.buff_4[c].id == "20021") {
                    this.buff_4.splice(c, 1);
                }
            }
            var dubuff_2_ = {
                id: "20021",
                chixu: 3,
                xiaoguo: parseInt(this.chufadu_2_)
            };
            this.buff_4.push(dubuff_2_);
            //			console.log(this.guai1buff);
            this.zhandoutexiao("du", parseInt(this.chufadu_2_), 4);
            this.direnfuzhu1buffxianshi();
        }
        //判断是否触发加防
        if (this.chufajiafang_2_ != "0") {
            if (this.chupairen == 0) {
                for (var b = 0; b < this.buff_0.length; b++) {
                    if (this.buff_0[b].id == "20023") {
                        this.buff_0.splice(b, 1);
                    }
                }
                var jiafangbuff_2_ = {
                    id: "20023",
                    chixu: 3,
                    xiaoguo: parseInt(this.chufajiafang_2_)
                };
                this.buff_0.push(jiafangbuff_2_);
                //			console.log(this.zijibuff);
                this.zhandoutexiao("jiafang", parseInt(this.chufajiafang_2_), 0);
                this.zijibuffxianshi();
            }
            else if (this.chupairen == 1) {
                for (var b = 0; b < this.buff_1.length; b++) {
                    if (this.buff_1[b].id == "20023") {
                        this.buff_1.splice(b, 1);
                    }
                }
                var jiafangbuff_2_ = {
                    id: "20023",
                    chixu: 3,
                    xiaoguo: parseInt(this.chufajiafang_2_)
                };
                this.buff_1.push(jiafangbuff_2_);
                //			console.log(this.zijibuff);
                this.zhandoutexiao("jiafang", parseInt(this.chufajiafang_2_), 1);
                this.zijifuzhu1buffxianshi();
            }
            else if (this.chupairen == 2) {
                for (var b = 0; b < this.buff_2.length; b++) {
                    if (this.buff_2[b].id == "20023") {
                        this.buff_2.splice(b, 1);
                    }
                }
                var jiafangbuff_2_ = {
                    id: "20023",
                    chixu: 3,
                    xiaoguo: parseInt(this.chufajiafang_2_)
                };
                this.buff_2.push(jiafangbuff_2_);
                //			console.log(this.zijibuff);
                this.zhandoutexiao("jiafang", parseInt(this.chufajiafang_2_), 2);
                this.zijifuzhu2buffxianshi();
            }
        }
        //判断是否触发加速
        if (this.chufajiasu_2_ != "0") {
            if (this.chupairen == 0) {
                for (var v = 0; v < this.buff_0.length; v++) {
                    if (this.buff_0[v].id == "20024") {
                        this.buff_0.splice(v, 1);
                    }
                }
                var jiasubuff_2_ = {
                    id: "20024",
                    chixu: 3,
                    xiaoguo: parseInt(this.chufajiasu_2_)
                };
                this.buff_0.push(jiasubuff_2_);
                //			console.log(this.zijibuff);
                this.zhandoutexiao("jiasu", parseInt(this.chufajiasu_2_), 0);
                this.zijibuffxianshi();
            }
            else if (this.chupairen == 1) {
                for (var v = 0; v < this.buff_1.length; v++) {
                    if (this.buff_1[v].id == "20024") {
                        this.buff_1.splice(v, 1);
                    }
                }
                var jiasubuff_2_ = {
                    id: "20024",
                    chixu: 3,
                    xiaoguo: parseInt(this.chufajiasu_2_)
                };
                this.buff_1.push(jiasubuff_2_);
                //			console.log(this.zijibuff);
                this.zhandoutexiao("jiasu", parseInt(this.chufajiasu_2_), 1);
                this.zijifuzhu1buffxianshi();
            }
            else if (this.chupairen == 2) {
                for (var v = 0; v < this.buff_2.length; v++) {
                    if (this.buff_2[v].id == "20024") {
                        this.buff_2.splice(v, 1);
                    }
                }
                var jiasubuff_2_ = {
                    id: "20024",
                    chixu: 3,
                    xiaoguo: parseInt(this.chufajiasu_2_)
                };
                this.buff_2.push(jiasubuff_2_);
                //			console.log(this.zijibuff);
                this.zhandoutexiao("jiasu", parseInt(this.chufajiasu_2_), 2);
                this.zijifuzhu2buffxianshi();
            }
        }
        //判断是否触发给我方减血
        if (this.chufajianxue_2_ != "0") {
            if (this.chupairen == 0) {
                this.qixue_0 = Math.floor(this.qixue_0 - this.qixueshangxian_0 * 0.1);
                this.zhandoutexiao("zijijianxue", this.qixueshangxian_0 * 0.1, 0);
                this.shuaxinxuetiao_0();
            }
            else if (this.chupairen == 1) {
                this.fuzhu1qixue_0 = Math.floor(this.fuzhu1qixue_0 - this.fuzhu1qixueshangxian_0 * 0.1);
                this.zhandoutexiao("zijijianxue", this.fuzhu1qixueshangxian_0 * 0.1, 1);
                this.shuaxinxuetiao_1();
            }
            else if (this.chupairen == 2) {
                this.fuzhu2qixue_0 = Math.floor(this.fuzhu2qixue_0 - this.fuzhu2qixueshangxian_0 * 0.1);
                this.zhandoutexiao("zijijianxue", this.fuzhu2qixueshangxian_0 * 0.1, 2);
                this.shuaxinxuetiao_2();
            }
        }
        //判断是否给我方减速
        if (this.chufawofangjiansu_2_ != "0") {
            if (this.chupairen == 0) {
                this.jinduzu_pvp_0.y = this.jinduzu_pvp_0.y + 20;
                if (this.jinduzu_pvp_0.y >= this.img_sudujindu_pvp.y + this.img_sudujindu_pvp.height - this.jinduzu_pvp_0.height) {
                    this.jinduzu_pvp_0.y = this.img_sudujindu_pvp.y + this.img_sudujindu_pvp.height - this.jinduzu_pvp_0.height;
                }
            }
            else if (this.chupairen == 1) {
                this.jinduzu_pvp_1.y = this.jinduzu_pvp_1.y + 20;
                if (this.jinduzu_pvp_1.y >= this.img_sudujindu_pvp.y + this.img_sudujindu_pvp.height - this.jinduzu_pvp_1.height) {
                    this.jinduzu_pvp_1.y = this.img_sudujindu_pvp.y + this.img_sudujindu_pvp.height - this.jinduzu_pvp_1.height;
                }
            }
            else if (this.chupairen == 2) {
                this.jinduzu_pvp_2.y = this.jinduzu_pvp_2.y + 20;
                if (this.jinduzu_pvp_2.y >= this.img_sudujindu_pvp.y + this.img_sudujindu_pvp.height - this.jinduzu_pvp_2.height) {
                    this.jinduzu_pvp_2.y = this.img_sudujindu_pvp.y + this.img_sudujindu_pvp.height - this.jinduzu_pvp_2.height;
                }
            }
        }
        //判断是否触发了连击
        if (this.chufalianji_2_ != "0") {
            this.lianjiteshuchuli(Math.floor(zhongshanghai_2_ * (1 - this.fuzhu1fangyu_1 / 1000)), 4);
        }
        //技能释放完毕后，开始新的回合
        this.kaishixinhuihe();
    };
    Pvpzhandoujiemian.prototype.duiguai3shanghai = function () {
        var zhongshanghai_3_ = 0;
        var zuizhongshanghaila_3_ = 0;
        var zuizhongshanghaima_3_ = 0;
        var zuizhongshanghaisuan_3_ = 0;
        var zuizhongshanghaitian_3_ = 0;
        var hushila_3_ = 0;
        var hushima_3_ = 0;
        var hushisuan_3_ = 0;
        var hushitian_3_ = 0;
        //判断是否触发了忽视
        if (this.chufahushila_3_ != "0") {
            hushila_3_ = hushila_3_ - Math.floor(hushila_3_ * (parseInt(this.chufahushila_3_) / 100));
            if (hushila_3_ < 0) {
                hushila_3_ = 0;
            }
        }
        if (this.chufahushima_3_ != "0") {
            hushima_3_ = hushima_3_ - Math.floor(hushima_3_ * (parseInt(this.chufahushima_3_) / 100));
            if (hushima_3_ < 0) {
                hushima_3_ = 0;
            }
        }
        if (this.chufahushisuan_3_ != "0") {
            hushisuan_3_ = hushisuan_3_ - Math.floor(hushisuan_3_ * (parseInt(this.chufahushisuan_3_) / 100));
            if (hushisuan_3_ < 0) {
                hushisuan_3_ = 0;
            }
        }
        if (this.chufahushitian_3_ != "0") {
            hushitian_3_ = hushitian_3_ - Math.floor(hushitian_3_ * (parseInt(this.chufahushitian_3_) / 100));
            if (hushitian_3_ < 0) {
                hushitian_3_ = 0;
            }
        }
        //判断怪物BUFF是否有忽视
        for (var i = 0; i < this.buff_5.length; i++) {
            if (this.buff_5[i].id == "20019" && parseInt(this.buff_5[i].chixu) > 0 && this.buff_5[i].xiaoguo != "") {
                hushila_3_ = hushila_3_ - Math.floor(hushila_3_ * (parseInt(this.buff_5[i].xiaoguo) / 100));
                if (hushila_3_ < 0) {
                    hushila_3_ = 0;
                }
                hushima_3_ = hushima_3_ - Math.floor(hushima_3_ * (parseInt(this.buff_5[i].xiaoguo) / 100));
                if (hushima_3_ < 0) {
                    hushima_3_ = 0;
                }
                hushisuan_3_ = hushisuan_3_ - Math.floor(hushisuan_3_ * (parseInt(this.buff_5[i].xiaoguo) / 100));
                if (hushisuan_3_ < 0) {
                    hushisuan_3_ = 0;
                }
                hushitian_3_ = hushitian_3_ - Math.floor(hushitian_3_ * (parseInt(this.buff_5[i].xiaoguo) / 100));
                if (hushitian_3_ < 0) {
                    hushitian_3_ = 0;
                }
            }
        }
        //计算怪物所受伤害
        zuizhongshanghaila_3_ = Math.floor(this.shuchulazhi_0 * (1 - hushila_3_ / 1000));
        zuizhongshanghaima_3_ = Math.floor(this.shuchumazhi_0 * (1 - hushima_3_ / 1000));
        zuizhongshanghaisuan_3_ = Math.floor(this.shuchusuanzhi_0 * (1 - hushisuan_3_ / 1000));
        zuizhongshanghaitian_3_ = Math.floor(this.shuchutianzhi_0 * (1 - hushitian_3_ / 1000));
        zhongshanghai_3_ = zuizhongshanghaila_3_ + zuizhongshanghaima_3_ + zuizhongshanghaisuan_3_ + zuizhongshanghaitian_3_;
        //判断是否触发了自身降低攻击
        if (this.chufajiangong_3_ != "0") {
            zhongshanghai_3_ = Math.floor(zhongshanghai_3_ * 0.9);
        }
        //判断是否触发了震慑
        if (this.chufazhenshe_3_ != "0") {
            zhongshanghai_3_ = Math.floor(Math.floor(zhongshanghai_3_ * (1 - this.fuzhu2fangyu_1 / 1000)) + this.fuzhu2qixue_1 * parseInt(this.chufazhenshe_3_) / 100);
            this.zhandoutexiao("zhenshe", this.fuzhu2qixue_1 * parseInt(this.chufazhenshe_3_) / 100, 5);
        }
        //判断是否触发了必杀
        if (this.chufabisha_3_ != "0") {
            zhongshanghai_3_ = Math.floor(zhongshanghai_3_ + zhongshanghai_3_ * parseInt(this.chufabisha_3_) / 100);
            this.zhandoutexiao("bisha", Math.floor(zhongshanghai_3_ * (1 - this.fuzhu2fangyu_1 / 1000)), 5);
        }
        else {
            this.zhandoutexiao("putong", Math.floor(zhongshanghai_3_ * (1 - this.fuzhu2fangyu_1 / 1000)), 5);
        }
        //判断是否触发了吸血
        if (this.chufaxixue_3_ != "0") {
            if (this.chupairen == 0) {
                this.qixue_0 = Math.floor(this.qixue_0 + zhongshanghai_3_ * parseInt(this.chufaxixue_3_) / 100);
                if (this.qixue_0 >= this.qixueshangxian_0) {
                    this.qixue_0 = this.qixueshangxian_0;
                }
                this.zhandoutexiao("xixue", zhongshanghai_3_ * parseInt(this.chufaxixue_3_) / 100, 5);
                this.shuaxinxuetiao_0();
            }
            else if (this.chupairen == 1) {
                this.fuzhu1qixue_0 = Math.floor(this.fuzhu1qixue_0 + zhongshanghai_3_ * parseInt(this.chufaxixue_3_) / 100);
                if (this.fuzhu1qixue_0 >= this.fuzhu1qixueshangxian_0) {
                    this.fuzhu1qixue_0 = this.fuzhu1qixueshangxian_0;
                }
                this.zhandoutexiao("xixue", zhongshanghai_3_ * parseInt(this.chufaxixue_3_) / 100, 5);
                this.shuaxinxuetiao_1();
            }
            else if (this.chupairen == 2) {
                this.fuzhu2qixue_0 = Math.floor(this.fuzhu2qixue_0 + zhongshanghai_3_ * parseInt(this.chufaxixue_3_) / 100);
                if (this.fuzhu2qixue_0 >= this.fuzhu2qixueshangxian_0) {
                    this.fuzhu2qixue_0 = this.fuzhu2qixueshangxian_0;
                }
                this.zhandoutexiao("xixue", zhongshanghai_3_ * parseInt(this.chufaxixue_3_) / 100, 5);
                this.shuaxinxuetiao_2();
            }
        }
        //判断是否触发了善恶
        if (this.chufasane_3_ != "0") {
            var suijisane = Math.floor(Math.random() * 2);
            if (suijisane == 0) {
                this.zhandoutexiao("sanezhie", Math.floor(zhongshanghai_3_ * 1.8 * (1 - this.fuzhu2fangyu_1 / 1000)), 5);
                this.fuzhu2qixue_1 = Math.floor(this.fuzhu2qixue_1 - Math.floor(zhongshanghai_3_ * 1.8 * (1 - this.fuzhu2fangyu_1 / 1000)));
                this.shuaxinxuetiao_5();
                //判断是否触发追击
                if (this.fuzhu2qixue_1 <= 0) {
                    if (this.chufazhuiji_3_ != "0") {
                        if (Math.floor(this.fuzhu2qixue_1 - Math.floor(zhongshanghai_3_ * 1.8 * (1 - this.fuzhu2fangyu_1 / 1000))) < 0) {
                            var zhuijishu = 0 - Math.floor(this.fuzhu2qixue_1 - Math.floor(zhongshanghai_3_ * 1.8 * (1 - this.fuzhu2fangyu_1 / 1000)));
                            if (this.qixue_1 > 0) {
                                this.qixue_1 = this.qixue_1 - Math.floor(zhuijishu * (1 - this.fangyu_1 / 1000));
                                this.zhuijitexiao(this.benhuihechucaiid_0, 5, 3, Math.floor(zhuijishu * (1 - this.fangyu_1 / 1000)));
                                this.shuaxinxuetiao_3();
                            }
                            else if (this.fuzhu1qixue_1 > 0) {
                                this.fuzhu1qixue_1 = this.fuzhu1qixue_1 - Math.floor(zhuijishu * (1 - this.fuzhu1fangyu_1 / 1000));
                                this.zhuijitexiao(this.benhuihechucaiid_0, 5, 4, Math.floor(zhuijishu * (1 - this.fuzhu1fangyu_1 / 1000)));
                                this.shuaxinxuetiao_4();
                            }
                        }
                    }
                }
            }
            else {
                this.zhandoutexiao("sanezhis", zhongshanghai_3_ * 0.5, 5);
                this.fuzhu2qixue_1 = Math.floor(this.fuzhu2qixue_1 + zhongshanghai_3_ * 0.5);
                this.shuaxinxuetiao_5();
            }
        }
        else {
            this.fuzhu2qixue_1 = Math.floor(this.fuzhu2qixue_1 - Math.floor(zhongshanghai_3_ * (1 - this.fuzhu2fangyu_1 / 1000)));
            this.shuaxinxuetiao_5();
        }
        //判断是否触发吸蓝
        if (this.chufaxilan_3_ != "0") {
            this.qidianshu_0 = this.qidianshu_0 + parseInt(this.chufaxilan_3_);
            if (this.qidianshu_0 >= 10) {
                this.qidianshu_0 = 10;
            }
            this.qidianshu_1 = this.qidianshu_1 - parseInt(this.chufaxilan_3_);
            if (this.qidianshu_1 < 0) {
                this.qidianshu_1 = 0;
            }
            this.qidianxianshigengxin();
            this.direnqidianxianshigengxin();
            this.zhandoutexiao("xilan", parseInt(this.chufaxilan_3_), 5);
        }
        //判断是否触发减速
        if (this.chufajiansu_3_ != "0") {
            for (var h = 0; h < this.buff_5.length; h++) {
                if (this.buff_5[h].id == "20016") {
                    this.buff_5.splice(h, 1);
                }
            }
            var jiansubuff_3_ = {
                id: "20016",
                chixu: 2,
                xiaoguo: parseInt(this.chufajiansu_3_)
            };
            this.buff_5.push(jiansubuff_3_);
            //			console.log(this.guai1buff);
            this.zhandoutexiao("jiansu", parseInt(this.chufajiansu_3_), 5);
            this.direnfuzhu2buffxianshi();
        }
        //判断是否触发沉默
        if (this.chufachenmo_3_ != "0") {
            var chufachengmojilv_3_ = Math.floor(Math.random() * 100);
            if (chufachengmojilv_3_ <= parseInt(this.chufachenmo_3_)) {
                for (var j = 0; j < this.buff_5.length; j++) {
                    if (this.buff_5[j].id == "20017") {
                        this.buff_5.splice(j, 1);
                    }
                }
                var chengmobuff_3_ = {
                    id: "20017",
                    chixu: 1,
                    xiaoguo: 0
                };
                this.buff_5.push(chengmobuff_3_);
                //				console.log(this.guai1buff);
                this.zhandoutexiao("chenmo", 0, 5);
                this.direnfuzhu2buffxianshi();
            }
        }
        //判断是否触发回血
        if (this.chufahuixue_3_ != "0") {
            if (this.chupairen == 0) {
                this.qixue_0 = Math.floor(this.qixue_0 + this.qixueshangxian_0 * parseInt(this.chufahuixue_3_) / 100);
                if (this.qixue_0 >= this.qixueshangxian_0) {
                    this.qixue_0 = this.qixueshangxian_0;
                }
                this.shuaxinxuetiao_0();
                this.zhandoutexiao("huixue", this.qixueshangxian_0 * parseInt(this.chufahuixue_3_) / 100, 0);
            }
            else if (this.chupairen == 1) {
                this.fuzhu1qixue_0 = Math.floor(this.fuzhu1qixue_0 + this.fuzhu1qixueshangxian_0 * parseInt(this.chufahuixue_3_) / 100);
                if (this.fuzhu1qixue_0 >= this.fuzhu1qixueshangxian_0) {
                    this.fuzhu1qixue_0 = this.fuzhu1qixueshangxian_0;
                }
                this.shuaxinxuetiao_1();
                this.zhandoutexiao("huixue", this.fuzhu1qixueshangxian_0 * parseInt(this.chufahuixue_3_) / 100, 1);
            }
            else if (this.chupairen == 2) {
                this.fuzhu2qixue_0 = Math.floor(this.fuzhu2qixue_0 + this.fuzhu2qixueshangxian_0 * parseInt(this.chufahuixue_3_) / 100);
                if (this.fuzhu2qixue_0 >= this.fuzhu2qixueshangxian_0) {
                    this.fuzhu2qixue_0 = this.fuzhu2qixueshangxian_0;
                }
                this.shuaxinxuetiao_2();
                this.zhandoutexiao("huixue", this.fuzhu2qixueshangxian_0 * parseInt(this.chufahuixue_3_) / 100, 2);
            }
        }
        //判断是否触发减抗
        if (this.chufaquanhushi_3_ != "0") {
            for (var k = 0; k < this.buff_5.length; k++) {
                if (this.buff_5[k].id == "20019") {
                    this.buff_5.splice(k, 1);
                }
            }
            var jiankangbuff_3_ = {
                id: "20019",
                chixu: 3,
                xiaoguo: parseInt(this.chufaquanhushi_3_)
            };
            this.buff_5.push(jiankangbuff_3_);
            //			console.log(this.guai1buff);
            this.zhandoutexiao("jiankang", parseInt(this.chufaquanhushi_3_), 5);
            this.direnfuzhu2buffxianshi();
        }
        //判断是否触发回灵
        if (this.chufahuiling_3_ != "0") {
            if (this.chupairen == 0) {
                for (var g = 0; g < this.buff_0.length; g++) {
                    if (this.buff_0[g].id == "20020") {
                        this.buff_0.splice(g, 1);
                    }
                }
                var huilingbuff_3_ = {
                    id: "20020",
                    chixu: 3,
                    xiaoguo: 2
                };
                this.buff_0.push(huilingbuff_3_);
                //			console.log(this.zijibuff);
                this.zhandoutexiao("huiling", 2, 0);
                this.zijibuffxianshi();
            }
            else if (this.chupairen == 1) {
                for (var g = 0; g < this.buff_1.length; g++) {
                    if (this.buff_1[g].id == "20020") {
                        this.buff_1.splice(g, 1);
                    }
                }
                var huilingbuff_3_ = {
                    id: "20020",
                    chixu: 3,
                    xiaoguo: 2
                };
                this.buff_1.push(huilingbuff_3_);
                //			console.log(this.zijibuff);
                this.zhandoutexiao("huiling", 2, 1);
                this.zijifuzhu1buffxianshi();
            }
            else if (this.chupairen == 2) {
                for (var g = 0; g < this.buff_2.length; g++) {
                    if (this.buff_2[g].id == "20020") {
                        this.buff_2.splice(g, 1);
                    }
                }
                var huilingbuff_3_ = {
                    id: "20020",
                    chixu: 3,
                    xiaoguo: 2
                };
                this.buff_2.push(huilingbuff_3_);
                //			console.log(this.zijibuff);
                this.zhandoutexiao("huiling", 2, 2);
                this.zijifuzhu2buffxianshi();
            }
        }
        //判断是否触发减攻击
        if (this.chufaxuruo_3_ != "0") {
            for (var l = 0; l < this.buff_5.length; l++) {
                if (this.buff_5[l].id == "20022") {
                    this.buff_5.splice(l, 1);
                }
            }
            var jiangongjibuff_3_ = {
                id: "20022",
                chixu: 3,
                xiaoguo: parseInt(this.chufaxuruo_3_)
            };
            this.buff_5.push(jiangongjibuff_3_);
            //			console.log(this.guai1buff);
            this.zhandoutexiao("jiangongji", parseInt(this.chufaxuruo_3_), 5);
            this.direnfuzhu2buffxianshi();
        }
        //判断是否触发毒
        if (this.chufadu_3_ != "0") {
            for (var c = 0; c < this.buff_5.length; c++) {
                if (this.buff_5[c].id == "20021") {
                    this.buff_5.splice(c, 1);
                }
            }
            var dubuff_3_ = {
                id: "20021",
                chixu: 3,
                xiaoguo: parseInt(this.chufadu_3_)
            };
            this.buff_5.push(dubuff_3_);
            //			console.log(this.guai1buff);
            this.zhandoutexiao("du", parseInt(this.chufadu_3_), 5);
            this.direnfuzhu2buffxianshi();
        }
        //判断是否触发加防
        if (this.chufajiafang_3_ != "0") {
            if (this.chupairen == 0) {
                for (var b = 0; b < this.buff_0.length; b++) {
                    if (this.buff_0[b].id == "20023") {
                        this.buff_0.splice(b, 1);
                    }
                }
                var jiafangbuff_3_ = {
                    id: "20023",
                    chixu: 3,
                    xiaoguo: parseInt(this.chufajiafang_3_)
                };
                this.buff_0.push(jiafangbuff_3_);
                //			console.log(this.zijibuff);
                this.zhandoutexiao("jiafang", parseInt(this.chufajiafang_3_), 0);
                this.zijibuffxianshi();
            }
            else if (this.chupairen == 1) {
                for (var b = 0; b < this.buff_1.length; b++) {
                    if (this.buff_1[b].id == "20023") {
                        this.buff_1.splice(b, 1);
                    }
                }
                var jiafangbuff_3_ = {
                    id: "20023",
                    chixu: 3,
                    xiaoguo: parseInt(this.chufajiafang_3_)
                };
                this.buff_1.push(jiafangbuff_3_);
                //			console.log(this.zijibuff);
                this.zhandoutexiao("jiafang", parseInt(this.chufajiafang_3_), 1);
                this.zijifuzhu1buffxianshi();
            }
            else if (this.chupairen == 2) {
                for (var b = 0; b < this.buff_2.length; b++) {
                    if (this.buff_2[b].id == "20023") {
                        this.buff_2.splice(b, 1);
                    }
                }
                var jiafangbuff_3_ = {
                    id: "20023",
                    chixu: 3,
                    xiaoguo: parseInt(this.chufajiafang_3_)
                };
                this.buff_2.push(jiafangbuff_3_);
                //			console.log(this.zijibuff);
                this.zhandoutexiao("jiafang", parseInt(this.chufajiafang_3_), 2);
                this.zijifuzhu2buffxianshi();
            }
        }
        //判断是否触发加速
        if (this.chufajiasu_3_ != "0") {
            if (this.chupairen == 0) {
                for (var v = 0; v < this.buff_0.length; v++) {
                    if (this.buff_0[v].id == "20024") {
                        this.buff_0.splice(v, 1);
                    }
                }
                var jiasubuff_3_ = {
                    id: "20024",
                    chixu: 3,
                    xiaoguo: parseInt(this.chufajiasu_3_)
                };
                this.buff_0.push(jiasubuff_3_);
                //			console.log(this.zijibuff);
                this.zhandoutexiao("jiasu", parseInt(this.chufajiasu_3_), 0);
                this.zijibuffxianshi();
            }
            else if (this.chupairen == 1) {
                for (var v = 0; v < this.buff_1.length; v++) {
                    if (this.buff_1[v].id == "20024") {
                        this.buff_1.splice(v, 1);
                    }
                }
                var jiasubuff_3_ = {
                    id: "20024",
                    chixu: 3,
                    xiaoguo: parseInt(this.chufajiasu_3_)
                };
                this.buff_1.push(jiasubuff_3_);
                //			console.log(this.zijibuff);
                this.zhandoutexiao("jiasu", parseInt(this.chufajiasu_3_), 1);
                this.zijifuzhu1buffxianshi();
            }
            else if (this.chupairen == 2) {
                for (var v = 0; v < this.buff_2.length; v++) {
                    if (this.buff_2[v].id == "20024") {
                        this.buff_2.splice(v, 1);
                    }
                }
                var jiasubuff_3_ = {
                    id: "20024",
                    chixu: 3,
                    xiaoguo: parseInt(this.chufajiasu_3_)
                };
                this.buff_2.push(jiasubuff_3_);
                //			console.log(this.zijibuff);
                this.zhandoutexiao("jiasu", parseInt(this.chufajiasu_3_), 2);
                this.zijifuzhu2buffxianshi();
            }
        }
        //判断是否触发给我方减血
        if (this.chufajianxue_3_ != "0") {
            if (this.chupairen == 0) {
                this.qixue_0 = Math.floor(this.qixue_0 - this.qixueshangxian_0 * 0.1);
                this.zhandoutexiao("zijijianxue", this.qixueshangxian_0 * 0.1, 0);
                this.shuaxinxuetiao_0();
            }
            else if (this.chupairen == 1) {
                this.fuzhu1qixue_0 = Math.floor(this.fuzhu1qixue_0 - this.fuzhu1qixueshangxian_0 * 0.1);
                this.zhandoutexiao("zijijianxue", this.fuzhu1qixueshangxian_0 * 0.1, 1);
                this.shuaxinxuetiao_1();
            }
            else if (this.chupairen == 2) {
                this.fuzhu2qixue_0 = Math.floor(this.fuzhu2qixue_0 - this.fuzhu2qixueshangxian_0 * 0.1);
                this.zhandoutexiao("zijijianxue", this.fuzhu2qixueshangxian_0 * 0.1, 2);
                this.shuaxinxuetiao_2();
            }
        }
        //判断是否给我方减速
        if (this.chufawofangjiansu_3_ != "0") {
            if (this.chupairen == 0) {
                this.jinduzu_pvp_0.y = this.jinduzu_pvp_0.y + 20;
                if (this.jinduzu_pvp_0.y >= this.img_sudujindu_pvp.y + this.img_sudujindu_pvp.height - this.jinduzu_pvp_0.height) {
                    this.jinduzu_pvp_0.y = this.img_sudujindu_pvp.y + this.img_sudujindu_pvp.height - this.jinduzu_pvp_0.height;
                }
            }
            else if (this.chupairen == 1) {
                this.jinduzu_pvp_1.y = this.jinduzu_pvp_1.y + 20;
                if (this.jinduzu_pvp_1.y >= this.img_sudujindu_pvp.y + this.img_sudujindu_pvp.height - this.jinduzu_pvp_1.height) {
                    this.jinduzu_pvp_1.y = this.img_sudujindu_pvp.y + this.img_sudujindu_pvp.height - this.jinduzu_pvp_1.height;
                }
            }
            else if (this.chupairen == 2) {
                this.jinduzu_pvp_2.y = this.jinduzu_pvp_2.y + 20;
                if (this.jinduzu_pvp_2.y >= this.img_sudujindu_pvp.y + this.img_sudujindu_pvp.height - this.jinduzu_pvp_2.height) {
                    this.jinduzu_pvp_2.y = this.img_sudujindu_pvp.y + this.img_sudujindu_pvp.height - this.jinduzu_pvp_2.height;
                }
            }
        }
        //判断是否触发了连击
        if (this.chufalianji_3_ != "0") {
            this.lianjiteshuchuli(Math.floor(zhongshanghai_3_ * (1 - this.fuzhu2fangyu_1 / 1000)), 5);
        }
        //技能释放完毕后，开始新的回合
        this.kaishixinhuihe();
    };
    /*
    以下处理敌人对自己的攻击判断
    */
    /*
    以下处理敌人对自己的攻击判断
    */
    Pvpzhandoujiemian.prototype.duiren1shanghai = function () {
        var zhongshanghai_1_1 = 0;
        var zuizhongshanghaila_1_1 = 0;
        var zuizhongshanghaima_1_1 = 0;
        var zuizhongshanghaisuan_1_1 = 0;
        var zuizhongshanghaitian_1_1 = 0;
        var hushila_1_1 = this.zijila_0;
        var hushima_1_1 = this.zijima_0;
        var hushisuan_1_1 = this.zijisuan_0;
        var hushitian_1_1 = this.zijitian_0;
        //判断是否触发了忽视
        if (this.chufahushila_1_1 != "0") {
            hushila_1_1 = hushila_1_1 - Math.floor(hushila_1_1 * (parseInt(this.chufahushila_1_1) / 100));
            if (hushila_1_1 < 0) {
                hushila_1_1 = 0;
            }
        }
        if (this.chufahushima_1_1 != "0") {
            hushima_1_1 = hushima_1_1 - Math.floor(hushima_1_1 * (parseInt(this.chufahushima_1_1) / 100));
            if (hushima_1_1 < 0) {
                hushima_1_1 = 0;
            }
        }
        if (this.chufahushisuan_1_1 != "0") {
            hushisuan_1_1 = hushisuan_1_1 - Math.floor(hushisuan_1_1 * (parseInt(this.chufahushisuan_1_1) / 100));
            if (hushisuan_1_1 < 0) {
                hushisuan_1_1 = 0;
            }
        }
        if (this.chufahushitian_1_1 != "0") {
            hushitian_1_1 = hushitian_1_1 - Math.floor(hushitian_1_1 * (parseInt(this.chufahushitian_1_1) / 100));
            if (hushitian_1_1 < 0) {
                hushitian_1_1 = 0;
            }
        }
        //判断怪物BUFF是否有忽视
        for (var i = 0; i < this.buff_0.length; i++) {
            if (this.buff_0[i].id == "20019" && parseInt(this.buff_0[i].chixu) > 0 && this.buff_0[i].xiaoguo != "") {
                hushila_1_1 = hushila_1_1 - Math.floor(hushila_1_1 * (parseInt(this.buff_0[i].xiaoguo) / 100));
                if (hushila_1_1 < 0) {
                    hushila_1_1 = 0;
                }
                hushima_1_1 = hushima_1_1 - Math.floor(hushima_1_1 * (parseInt(this.buff_0[i].xiaoguo) / 100));
                if (hushima_1_1 < 0) {
                    hushima_1_1 = 0;
                }
                hushisuan_1_1 = hushisuan_1_1 - Math.floor(hushisuan_1_1 * (parseInt(this.buff_0[i].xiaoguo) / 100));
                if (hushisuan_1_1 < 0) {
                    hushisuan_1_1 = 0;
                }
                hushitian_1_1 = hushitian_1_1 - Math.floor(hushitian_1_1 * (parseInt(this.buff_0[i].xiaoguo) / 100));
                if (hushitian_1_1 < 0) {
                    hushitian_1_1 = 0;
                }
            }
        }
        //计算怪物所受伤害
        zuizhongshanghaila_1_1 = Math.floor(this.shuchulazhi_1 * (1 - hushila_1_1 / 1000));
        zuizhongshanghaima_1_1 = Math.floor(this.shuchumazhi_1 * (1 - hushima_1_1 / 1000));
        zuizhongshanghaisuan_1_1 = Math.floor(this.shuchusuanzhi_1 * (1 - hushisuan_1_1 / 1000));
        zuizhongshanghaitian_1_1 = Math.floor(this.shuchutianzhi_1 * (1 - hushitian_1_1 / 1000));
        zhongshanghai_1_1 = zuizhongshanghaila_1_1 + zuizhongshanghaima_1_1 + zuizhongshanghaisuan_1_1 + zuizhongshanghaitian_1_1;
        //判断是否触发了自身降低攻击
        if (this.chufajiangong_1_1 != "0") {
            zhongshanghai_1_1 = Math.floor(zhongshanghai_1_1 * 0.9);
        }
        //判断是否触发了震慑
        if (this.chufazhenshe_1_1 != "0") {
            zhongshanghai_1_1 = Math.floor(Math.floor(zhongshanghai_1_1 * (1 - this.fangyu_0 / 1000)) + this.qixue_0 * parseInt(this.chufazhenshe_1_1) / 100);
            this.zhandoutexiao("zhenshe", this.qixue_0 * parseInt(this.chufazhenshe_1_1) / 100, 0);
        }
        //判断是否触发了必杀
        if (this.chufabisha_1_1 != "0") {
            zhongshanghai_1_1 = Math.floor(zhongshanghai_1_1 + zhongshanghai_1_1 * parseInt(this.chufabisha_1_1) / 100);
            this.zhandoutexiao("bisha", Math.floor(zhongshanghai_1_1 * (1 - this.fangyu_0 / 1000)), 0);
        }
        else {
            this.zhandoutexiao("putong", Math.floor(zhongshanghai_1_1 * (1 - this.fangyu_0 / 1000)), 0);
        }
        //判断是否触发了吸血
        if (this.chufaxixue_1_1 != "0") {
            if (this.chupairen == 3) {
                this.qixue_1 = Math.floor(this.qixue_1 + zhongshanghai_1_1 * parseInt(this.chufaxixue_1_1) / 100);
                if (this.qixue_1 >= this.qixueshangxian_1) {
                    this.qixue_1 = this.qixueshangxian_1;
                }
                this.zhandoutexiao("xixue", zhongshanghai_1_1 * parseInt(this.chufaxixue_1_1) / 100, 0);
                this.shuaxinxuetiao_3();
            }
            else if (this.chupairen == 4) {
                this.fuzhu1qixue_1 = Math.floor(this.fuzhu1qixue_1 + zhongshanghai_1_1 * parseInt(this.chufaxixue_1_1) / 100);
                if (this.fuzhu1qixue_1 >= this.fuzhu1qixueshangxian_1) {
                    this.fuzhu1qixue_1 = this.fuzhu1qixueshangxian_1;
                }
                this.zhandoutexiao("xixue", zhongshanghai_1_1 * parseInt(this.chufaxixue_1_1) / 100, 0);
                this.shuaxinxuetiao_4();
            }
            else if (this.chupairen == 5) {
                this.fuzhu2qixue_1 = Math.floor(this.fuzhu2qixue_1 + zhongshanghai_1_1 * parseInt(this.chufaxixue_1_1) / 100);
                if (this.fuzhu2qixue_1 >= this.fuzhu2qixueshangxian_1) {
                    this.fuzhu2qixue_1 = this.fuzhu2qixueshangxian_1;
                }
                this.zhandoutexiao("xixue", zhongshanghai_1_1 * parseInt(this.chufaxixue_1_1) / 100, 0);
                this.shuaxinxuetiao_5();
            }
        }
        //判断是否触发了善恶
        if (this.chufasane_1_1 != "0") {
            var suijisane = Math.floor(Math.random() * 2);
            if (suijisane == 0) {
                this.zhandoutexiao("sanezhie", Math.floor(zhongshanghai_1_1 * 1.8 * (1 - this.fangyu_0 / 1000)), 0);
                this.qixue_0 = Math.floor(this.qixue_0 - Math.floor(zhongshanghai_1_1 * 1.8 * (1 - this.fangyu_0 / 1000)));
                this.shuaxinxuetiao_0();
                //判断是否触发追击
                if (this.qixue_0 <= 0) {
                    if (this.chufazhuiji_1_1 != "0") {
                        if (Math.floor(this.qixue_0 - Math.floor(zhongshanghai_1_1 * 1.8 * (1 - this.fangyu_0 / 1000))) < 0) {
                            var zhuijishu = 0 - Math.floor(this.qixue_0 - Math.floor(zhongshanghai_1_1 * 1.8 * (1 - this.fangyu_0 / 1000)));
                            if (this.fuzhu1qixue_0 > 0) {
                                this.fuzhu1qixue_0 = this.fuzhu1qixue_0 - Math.floor(zhuijishu * (1 - this.fuzhu1fangyu_0 / 1000));
                                this.zhuijitexiao(this.benhuihechucaiid_1, 0, 1, Math.floor(zhuijishu * (1 - this.fuzhu1fangyu_0 / 1000)));
                                this.shuaxinxuetiao_1();
                            }
                            else if (this.fuzhu2qixue_0 > 0) {
                                this.fuzhu2qixue_0 = this.fuzhu2qixue_0 - Math.floor(zhuijishu * (1 - this.fuzhu2fangyu_0 / 1000));
                                this.zhuijitexiao(this.benhuihechucaiid_1, 0, 2, Math.floor(zhuijishu * (1 - this.fuzhu2fangyu_0 / 1000)));
                                this.shuaxinxuetiao_2();
                            }
                        }
                    }
                }
            }
            else {
                this.zhandoutexiao("sanezhis", zhongshanghai_1_1 * 0.5, 0);
                this.qixue_0 = Math.floor(this.qixue_0 + zhongshanghai_1_1 * 0.5);
                this.shuaxinxuetiao_0();
            }
        }
        else {
            this.qixue_0 = Math.floor(this.qixue_0 - Math.floor(zhongshanghai_1_1 * (1 - this.fangyu_0 / 1000)));
            this.shuaxinxuetiao_0();
        }
        //判断是否触发吸蓝
        if (this.chufaxilan_1_1 != "0") {
            this.qidianshu_1 = this.qidianshu_1 + parseInt(this.chufaxilan_1_1);
            if (this.qidianshu_1 >= 10) {
                this.qidianshu_1 = 10;
            }
            this.qidianshu_0 = this.qidianshu_0 - parseInt(this.chufaxilan_1_1);
            if (this.qidianshu_0 < 0) {
                this.qidianshu_0 = 0;
            }
            this.qidianxianshigengxin();
            this.direnqidianxianshigengxin();
            this.zhandoutexiao("xilan", parseInt(this.chufaxilan_1_1), 0);
        }
        //判断是否触发减速
        if (this.chufajiansu_1_1 != "0") {
            for (var h = 0; h < this.buff_0.length; h++) {
                if (this.buff_0[h].id == "20016") {
                    this.buff_0.splice(h, 1);
                }
            }
            var jiansubuff_1_1 = {
                id: "20016",
                chixu: 2,
                xiaoguo: parseInt(this.chufajiansu_1_1)
            };
            this.buff_0.push(jiansubuff_1_1);
            //			console.log(this.guai1buff);
            this.zhandoutexiao("jiansu", parseInt(this.chufajiansu_1_1), 0);
            this.zijibuffxianshi();
        }
        //判断是否触发沉默
        if (this.chufachenmo_1_1 != "0") {
            var chufachengmojilv_1_1 = Math.floor(Math.random() * 100);
            if (chufachengmojilv_1_1 <= parseInt(this.chufachenmo_1_1)) {
                for (var j = 0; j < this.buff_0.length; j++) {
                    if (this.buff_0[j].id == "20017") {
                        this.buff_0.splice(j, 1);
                    }
                }
                var chengmobuff_1_1 = {
                    id: "20017",
                    chixu: 1,
                    xiaoguo: 0
                };
                this.buff_0.push(chengmobuff_1_1);
                //				console.log(this.guai1buff);
                this.zhandoutexiao("chenmo", 0, 0);
                this.zijibuffxianshi();
            }
        }
        //判断是否触发回血
        if (this.chufahuixue_1_1 != "0") {
            if (this.chupairen == 3) {
                this.qixue_1 = Math.floor(this.qixue_1 + this.qixueshangxian_1 * parseInt(this.chufahuixue_1_1) / 100);
                if (this.qixue_1 >= this.qixueshangxian_1) {
                    this.qixue_1 = this.qixueshangxian_1;
                }
                this.shuaxinxuetiao_3();
                this.zhandoutexiao("huixue", this.qixueshangxian_1 * parseInt(this.chufahuixue_1_1) / 100, 3);
            }
            else if (this.chupairen == 4) {
                this.fuzhu1qixue_1 = Math.floor(this.fuzhu1qixue_1 + this.fuzhu1qixueshangxian_1 * parseInt(this.chufahuixue_1_1) / 100);
                if (this.fuzhu1qixue_1 >= this.fuzhu1qixueshangxian_1) {
                    this.fuzhu1qixue_1 = this.fuzhu1qixueshangxian_1;
                }
                this.shuaxinxuetiao_4();
                this.zhandoutexiao("huixue", this.fuzhu1qixueshangxian_1 * parseInt(this.chufahuixue_1_1) / 100, 4);
            }
            else if (this.chupairen == 5) {
                this.fuzhu2qixue_1 = Math.floor(this.fuzhu2qixue_1 + this.fuzhu2qixueshangxian_1 * parseInt(this.chufahuixue_1_1) / 100);
                if (this.fuzhu2qixue_1 >= this.fuzhu2qixueshangxian_1) {
                    this.fuzhu2qixue_1 = this.fuzhu2qixueshangxian_1;
                }
                this.shuaxinxuetiao_5();
                this.zhandoutexiao("huixue", this.fuzhu2qixueshangxian_1 * parseInt(this.chufahuixue_1_1) / 100, 5);
            }
        }
        //判断是否触发减抗
        if (this.chufaquanhushi_1_1 != "0") {
            for (var k = 0; k < this.buff_0.length; k++) {
                if (this.buff_0[k].id == "20019") {
                    this.buff_0.splice(k, 1);
                }
            }
            var jiankangbuff_1_1 = {
                id: "20019",
                chixu: 3,
                xiaoguo: parseInt(this.chufaquanhushi_1_1)
            };
            this.buff_0.push(jiankangbuff_1_1);
            //			console.log(this.guai1buff);
            this.zhandoutexiao("jiankang", parseInt(this.chufaquanhushi_1_1), 0);
            this.zijibuffxianshi();
        }
        //判断是否触发回灵
        if (this.chufahuiling_1_1 != "0") {
            if (this.chupairen == 3) {
                for (var g = 0; g < this.buff_3.length; g++) {
                    if (this.buff_3[g].id == "20020") {
                        this.buff_3.splice(g, 1);
                    }
                }
                var huilingbuff_1_1 = {
                    id: "20020",
                    chixu: 3,
                    xiaoguo: 2
                };
                this.buff_3.push(huilingbuff_1_1);
                //			console.log(this.zijibuff);
                this.zhandoutexiao("huiling", 2, 3);
                this.direnbuffxianshi();
            }
            else if (this.chupairen == 4) {
                for (var g = 0; g < this.buff_4.length; g++) {
                    if (this.buff_4[g].id == "20020") {
                        this.buff_4.splice(g, 1);
                    }
                }
                var huilingbuff_1_1 = {
                    id: "20020",
                    chixu: 3,
                    xiaoguo: 2
                };
                this.buff_4.push(huilingbuff_1_1);
                //			console.log(this.zijibuff);
                this.zhandoutexiao("huiling", 2, 4);
                this.direnfuzhu1buffxianshi();
            }
            else if (this.chupairen == 5) {
                for (var g = 0; g < this.buff_5.length; g++) {
                    if (this.buff_5[g].id == "20020") {
                        this.buff_5.splice(g, 1);
                    }
                }
                var huilingbuff_1_1 = {
                    id: "20020",
                    chixu: 3,
                    xiaoguo: 2
                };
                this.buff_5.push(huilingbuff_1_1);
                //			console.log(this.zijibuff);
                this.zhandoutexiao("huiling", 2, 5);
                this.direnfuzhu2buffxianshi();
            }
        }
        //判断是否触发减攻击
        if (this.chufaxuruo_1_1 != "0") {
            for (var l = 0; l < this.buff_0.length; l++) {
                if (this.buff_0[l].id == "20022") {
                    this.buff_0.splice(l, 1);
                }
            }
            var jiangongjibuff_1_1 = {
                id: "20022",
                chixu: 3,
                xiaoguo: parseInt(this.chufaxuruo_1_1)
            };
            this.buff_0.push(jiangongjibuff_1_1);
            //			console.log(this.guai1buff);
            this.zhandoutexiao("jiangongji", parseInt(this.chufaxuruo_1_1), 0);
            this.zijibuffxianshi();
        }
        //判断是否触发毒
        if (this.chufadu_1_1 != "0") {
            for (var c = 0; c < this.buff_0.length; c++) {
                if (this.buff_0[c].id == "20021") {
                    this.buff_0.splice(c, 1);
                }
            }
            var dubuff_1_1 = {
                id: "20021",
                chixu: 3,
                xiaoguo: parseInt(this.chufadu_1_1)
            };
            this.buff_0.push(dubuff_1_1);
            //			console.log(this.guai1buff);
            this.zhandoutexiao("du", parseInt(this.chufadu_1_1), 0);
            this.zijibuffxianshi();
        }
        //判断是否触发加防
        if (this.chufajiafang_1_1 != "0") {
            if (this.chupairen == 3) {
                for (var b = 0; b < this.buff_3.length; b++) {
                    if (this.buff_3[b].id == "20023") {
                        this.buff_3.splice(b, 1);
                    }
                }
                var jiafangbuff_1_1 = {
                    id: "20023",
                    chixu: 3,
                    xiaoguo: parseInt(this.chufajiafang_1_1)
                };
                this.buff_3.push(jiafangbuff_1_1);
                //			console.log(this.zijibuff);
                this.zhandoutexiao("jiafang", parseInt(this.chufajiafang_1_1), 3);
                this.direnbuffxianshi();
            }
            else if (this.chupairen == 4) {
                for (var b = 0; b < this.buff_4.length; b++) {
                    if (this.buff_4[b].id == "20023") {
                        this.buff_4.splice(b, 1);
                    }
                }
                var jiafangbuff_1_1 = {
                    id: "20023",
                    chixu: 3,
                    xiaoguo: parseInt(this.chufajiafang_1_1)
                };
                this.buff_4.push(jiafangbuff_1_1);
                //			console.log(this.zijibuff);
                this.zhandoutexiao("jiafang", parseInt(this.chufajiafang_1_1), 4);
                this.direnfuzhu1buffxianshi();
            }
            else if (this.chupairen == 5) {
                for (var b = 0; b < this.buff_5.length; b++) {
                    if (this.buff_5[b].id == "20023") {
                        this.buff_5.splice(b, 1);
                    }
                }
                var jiafangbuff_1_1 = {
                    id: "20023",
                    chixu: 3,
                    xiaoguo: parseInt(this.chufajiafang_1_1)
                };
                this.buff_5.push(jiafangbuff_1_1);
                //			console.log(this.zijibuff);
                this.zhandoutexiao("jiafang", parseInt(this.chufajiafang_1_1), 5);
                this.direnfuzhu2buffxianshi();
            }
        }
        //判断是否触发加速
        if (this.chufajiasu_1_1 != "0") {
            if (this.chupairen == 3) {
                for (var v = 0; v < this.buff_3.length; v++) {
                    if (this.buff_3[v].id == "20024") {
                        this.buff_3.splice(v, 1);
                    }
                }
                var jiasubuff_1_1 = {
                    id: "20024",
                    chixu: 3,
                    xiaoguo: parseInt(this.chufajiasu_1_1)
                };
                this.buff_3.push(jiasubuff_1_1);
                //			console.log(this.zijibuff);
                this.zhandoutexiao("jiasu", parseInt(this.chufajiasu_1_1), 3);
                this.direnbuffxianshi();
            }
            else if (this.chupairen == 4) {
                for (var v = 0; v < this.buff_4.length; v++) {
                    if (this.buff_4[v].id == "20024") {
                        this.buff_4.splice(v, 1);
                    }
                }
                var jiasubuff_1_1 = {
                    id: "20024",
                    chixu: 3,
                    xiaoguo: parseInt(this.chufajiasu_1_1)
                };
                this.buff_4.push(jiasubuff_1_1);
                //			console.log(this.zijibuff);
                this.zhandoutexiao("jiasu", parseInt(this.chufajiasu_1_1), 4);
                this.direnfuzhu1buffxianshi();
            }
            else if (this.chupairen == 5) {
                for (var v = 0; v < this.buff_5.length; v++) {
                    if (this.buff_5[v].id == "20024") {
                        this.buff_5.splice(v, 1);
                    }
                }
                var jiasubuff_1_1 = {
                    id: "20024",
                    chixu: 3,
                    xiaoguo: parseInt(this.chufajiasu_1_1)
                };
                this.buff_5.push(jiasubuff_1_1);
                //			console.log(this.zijibuff);
                this.zhandoutexiao("jiasu", parseInt(this.chufajiasu_1_1), 5);
                this.direnfuzhu2buffxianshi();
            }
        }
        //判断是否触发给我方减血
        if (this.chufajianxue_1_1 != "0") {
            if (this.chupairen == 3) {
                this.qixue_1 = Math.floor(this.qixue_1 - this.qixueshangxian_1 * 0.1);
                this.zhandoutexiao("zijijianxue", this.qixueshangxian_1 * 0.1, 3);
                this.shuaxinxuetiao_3();
            }
            else if (this.chupairen == 4) {
                this.fuzhu1qixue_1 = Math.floor(this.fuzhu1qixue_1 - this.fuzhu1qixueshangxian_1 * 0.1);
                this.zhandoutexiao("zijijianxue", this.fuzhu1qixueshangxian_0 * 0.1, 4);
                this.shuaxinxuetiao_4();
            }
            else if (this.chupairen == 5) {
                this.fuzhu2qixue_1 = Math.floor(this.fuzhu2qixue_1 - this.fuzhu2qixueshangxian_1 * 0.1);
                this.zhandoutexiao("zijijianxue", this.fuzhu2qixueshangxian_1 * 0.1, 5);
                this.shuaxinxuetiao_5();
            }
        }
        //判断是否给我方减速
        if (this.chufawofangjiansu_1_1 != "0") {
            if (this.chupairen == 3) {
                this.jinduzu_pvp_3.y = this.jinduzu_pvp_3.y + 20;
                if (this.jinduzu_pvp_3.y >= this.img_sudujindu_pvp.y + this.img_sudujindu_pvp.height - this.jinduzu_pvp_3.height) {
                    this.jinduzu_pvp_3.y = this.img_sudujindu_pvp.y + this.img_sudujindu_pvp.height - this.jinduzu_pvp_3.height;
                }
            }
            else if (this.chupairen == 4) {
                this.jinduzu_pvp_4.y = this.jinduzu_pvp_4.y + 20;
                if (this.jinduzu_pvp_4.y >= this.img_sudujindu_pvp.y + this.img_sudujindu_pvp.height - this.jinduzu_pvp_4.height) {
                    this.jinduzu_pvp_4.y = this.img_sudujindu_pvp.y + this.img_sudujindu_pvp.height - this.jinduzu_pvp_4.height;
                }
            }
            else if (this.chupairen == 5) {
                this.jinduzu_pvp_5.y = this.jinduzu_pvp_5.y + 20;
                if (this.jinduzu_pvp_5.y >= this.img_sudujindu_pvp.y + this.img_sudujindu_pvp.height - this.jinduzu_pvp_5.height) {
                    this.jinduzu_pvp_5.y = this.img_sudujindu_pvp.y + this.img_sudujindu_pvp.height - this.jinduzu_pvp_5.height;
                }
            }
        }
        //判断是否触发了连击
        if (this.chufalianji_1_1 != "0") {
            this.lianjiteshuchuli(Math.floor(zhongshanghai_1_1 * (1 - this.fangyu_0 / 1000)), 0);
        }
        //技能释放完毕后，开始新的回合
        this.direnkaishixinhuihe();
    };
    Pvpzhandoujiemian.prototype.duiren2shanghai = function () {
        var zhongshanghai_2_1 = 0;
        var zuizhongshanghaila_2_1 = 0;
        var zuizhongshanghaima_2_1 = 0;
        var zuizhongshanghaisuan_2_1 = 0;
        var zuizhongshanghaitian_2_1 = 0;
        var hushila_2_1 = 0;
        var hushima_2_1 = 0;
        var hushisuan_2_1 = 0;
        var hushitian_2_1 = 0;
        //判断是否触发了忽视
        if (this.chufahushila_2_1 != "0") {
            hushila_2_1 = hushila_2_1 - Math.floor(hushila_2_1 * (parseInt(this.chufahushila_2_1) / 100));
            if (hushila_2_1 < 0) {
                hushila_2_1 = 0;
            }
        }
        if (this.chufahushima_2_1 != "0") {
            hushima_2_1 = hushima_2_1 - Math.floor(hushima_2_1 * (parseInt(this.chufahushima_2_1) / 100));
            if (hushima_2_1 < 0) {
                hushima_2_1 = 0;
            }
        }
        if (this.chufahushisuan_2_1 != "0") {
            hushisuan_2_1 = hushisuan_2_1 - Math.floor(hushisuan_2_1 * (parseInt(this.chufahushisuan_2_1) / 100));
            if (hushisuan_2_1 < 0) {
                hushisuan_2_1 = 0;
            }
        }
        if (this.chufahushitian_2_1 != "0") {
            hushitian_2_1 = hushitian_2_1 - Math.floor(hushitian_2_1 * (parseInt(this.chufahushitian_2_1) / 100));
            if (hushitian_2_1 < 0) {
                hushitian_2_1 = 0;
            }
        }
        //判断怪物BUFF是否有忽视
        for (var i = 0; i < this.buff_1.length; i++) {
            if (this.buff_1[i].id == "20019" && parseInt(this.buff_1[i].chixu) > 0 && this.buff_1[i].xiaoguo != "") {
                hushila_2_1 = hushila_2_1 - Math.floor(hushila_2_1 * (parseInt(this.buff_1[i].xiaoguo) / 100));
                if (hushila_2_1 < 0) {
                    hushila_2_1 = 0;
                }
                hushima_2_1 = hushima_2_1 - Math.floor(hushima_2_1 * (parseInt(this.buff_1[i].xiaoguo) / 100));
                if (hushima_2_1 < 0) {
                    hushima_2_1 = 0;
                }
                hushisuan_2_1 = hushisuan_2_1 - Math.floor(hushisuan_2_1 * (parseInt(this.buff_1[i].xiaoguo) / 100));
                if (hushisuan_2_1 < 0) {
                    hushisuan_2_1 = 0;
                }
                hushitian_2_1 = hushitian_2_1 - Math.floor(hushitian_2_1 * (parseInt(this.buff_1[i].xiaoguo) / 100));
                if (hushitian_2_1 < 0) {
                    hushitian_2_1 = 0;
                }
            }
        }
        //计算怪物所受伤害
        zuizhongshanghaila_2_1 = Math.floor(this.shuchulazhi_1 * (1 - hushila_2_1 / 1000));
        zuizhongshanghaima_2_1 = Math.floor(this.shuchumazhi_1 * (1 - hushima_2_1 / 1000));
        zuizhongshanghaisuan_2_1 = Math.floor(this.shuchusuanzhi_1 * (1 - hushisuan_2_1 / 1000));
        zuizhongshanghaitian_2_1 = Math.floor(this.shuchutianzhi_1 * (1 - hushitian_2_1 / 1000));
        zhongshanghai_2_1 = zuizhongshanghaila_2_1 + zuizhongshanghaima_2_1 + zuizhongshanghaisuan_2_1 + zuizhongshanghaitian_2_1;
        //判断是否触发了自身降低攻击
        if (this.chufajiangong_2_1 != "0") {
            zhongshanghai_2_1 = Math.floor(zhongshanghai_2_1 * 0.9);
        }
        //判断是否触发了震慑
        if (this.chufazhenshe_2_1 != "0") {
            zhongshanghai_2_1 = Math.floor(Math.floor(zhongshanghai_2_1 * (1 - this.fuzhu1fangyu_0 / 1000)) + this.fuzhu1qixue_0 * parseInt(this.chufazhenshe_2_1) / 100);
            this.zhandoutexiao("zhenshe", this.fuzhu1qixue_0 * parseInt(this.chufazhenshe_2_1) / 100, 1);
        }
        //判断是否触发了必杀
        if (this.chufabisha_2_1 != "0") {
            zhongshanghai_2_1 = Math.floor(zhongshanghai_2_1 + zhongshanghai_2_1 * parseInt(this.chufabisha_2_1) / 100);
            this.zhandoutexiao("bisha", Math.floor(zhongshanghai_2_1 * (1 - this.fuzhu1fangyu_0 / 1000)), 1);
        }
        else {
            this.zhandoutexiao("putong", Math.floor(zhongshanghai_2_1 * (1 - this.fuzhu1fangyu_0 / 1000)), 1);
        }
        //判断是否触发了吸血
        if (this.chufaxixue_2_1 != "0") {
            if (this.chupairen == 3) {
                this.qixue_1 = Math.floor(this.qixue_1 + zhongshanghai_2_1 * parseInt(this.chufaxixue_2_1) / 100);
                if (this.qixue_1 >= this.qixueshangxian_1) {
                    this.qixue_1 = this.qixueshangxian_1;
                }
                this.zhandoutexiao("xixue", zhongshanghai_2_1 * parseInt(this.chufaxixue_2_1) / 100, 1);
                this.shuaxinxuetiao_3();
            }
            else if (this.chupairen == 4) {
                this.fuzhu1qixue_1 = Math.floor(this.fuzhu1qixue_1 + zhongshanghai_2_1 * parseInt(this.chufaxixue_2_1) / 100);
                if (this.fuzhu1qixue_1 >= this.fuzhu1qixueshangxian_1) {
                    this.fuzhu1qixue_1 = this.fuzhu1qixueshangxian_1;
                }
                this.zhandoutexiao("xixue", zhongshanghai_2_1 * parseInt(this.chufaxixue_2_1) / 100, 1);
                this.shuaxinxuetiao_4();
            }
            else if (this.chupairen == 5) {
                this.fuzhu2qixue_1 = Math.floor(this.fuzhu2qixue_1 + zhongshanghai_2_1 * parseInt(this.chufaxixue_2_1) / 100);
                if (this.fuzhu2qixue_1 >= this.fuzhu2qixueshangxian_1) {
                    this.fuzhu2qixue_1 = this.fuzhu2qixueshangxian_1;
                }
                this.zhandoutexiao("xixue", zhongshanghai_2_1 * parseInt(this.chufaxixue_2_1) / 100, 1);
                this.shuaxinxuetiao_5();
            }
        }
        //判断是否触发了善恶
        if (this.chufasane_2_1 != "0") {
            var suijisane = Math.floor(Math.random() * 2);
            if (suijisane == 0) {
                this.zhandoutexiao("sanezhie", Math.floor(zhongshanghai_2_1 * 1.8 * (1 - this.fuzhu1fangyu_0 / 1000)), 1);
                this.fuzhu1qixue_0 = Math.floor(this.fuzhu1qixue_0 - Math.floor(zhongshanghai_2_1 * 1.8 * (1 - this.fuzhu1fangyu_0 / 1000)));
                this.shuaxinxuetiao_1();
                //判断是否触发追击
                if (this.fuzhu1qixue_0 <= 0) {
                    if (this.chufazhuiji_2_1 != "0") {
                        if (Math.floor(this.fuzhu1qixue_0 - Math.floor(zhongshanghai_2_1 * 1.8 * (1 - this.fuzhu1fangyu_0 / 1000))) < 0) {
                            var zhuijishu = 0 - Math.floor(this.fuzhu1qixue_0 - Math.floor(zhongshanghai_2_1 * 1.8 * (1 - this.fuzhu1fangyu_0 / 1000)));
                            if (this.qixue_0 > 0) {
                                this.qixue_0 = this.qixue_0 - Math.floor(zhuijishu * (1 - this.fangyu_0 / 1000));
                                this.zhuijitexiao(this.benhuihechucaiid_1, 1, 0, Math.floor(zhuijishu * (1 - this.fangyu_0 / 1000)));
                                this.shuaxinxuetiao_0();
                            }
                            else if (this.fuzhu2qixue_0 > 0) {
                                this.fuzhu2qixue_0 = this.fuzhu2qixue_0 - Math.floor(zhuijishu * (1 - this.fuzhu2fangyu_0 / 1000));
                                this.zhuijitexiao(this.benhuihechucaiid_1, 1, 2, Math.floor(zhuijishu * (1 - this.fuzhu2fangyu_0 / 1000)));
                                this.shuaxinxuetiao_2();
                            }
                        }
                    }
                }
            }
            else {
                this.zhandoutexiao("sanezhis", zhongshanghai_2_1 * 0.5, 1);
                this.fuzhu1qixue_0 = Math.floor(this.fuzhu1qixue_0 + zhongshanghai_2_1 * 0.5);
                this.shuaxinxuetiao_1();
            }
        }
        else {
            this.fuzhu1qixue_0 = Math.floor(this.fuzhu1qixue_0 - Math.floor(zhongshanghai_2_1 * (1 - this.fuzhu1fangyu_0 / 1000)));
            this.shuaxinxuetiao_1();
        }
        //判断是否触发吸蓝
        if (this.chufaxilan_2_1 != "0") {
            this.qidianshu_1 = this.qidianshu_1 + parseInt(this.chufaxilan_2_1);
            if (this.qidianshu_1 >= 10) {
                this.qidianshu_1 = 10;
            }
            this.qidianshu_0 = this.qidianshu_0 - parseInt(this.chufaxilan_2_1);
            if (this.qidianshu_0 < 0) {
                this.qidianshu_0 = 0;
            }
            this.qidianxianshigengxin();
            this.direnqidianxianshigengxin();
            this.zhandoutexiao("xilan", parseInt(this.chufaxilan_2_1), 1);
        }
        //判断是否触发减速
        if (this.chufajiansu_2_1 != "0") {
            for (var h = 0; h < this.buff_1.length; h++) {
                if (this.buff_1[h].id == "20016") {
                    this.buff_1.splice(h, 1);
                }
            }
            var jiansubuff_2_1 = {
                id: "20016",
                chixu: 2,
                xiaoguo: parseInt(this.chufajiansu_2_1)
            };
            this.buff_1.push(jiansubuff_2_1);
            //			console.log(this.guai1buff);
            this.zhandoutexiao("jiansu", parseInt(this.chufajiansu_2_1), 1);
            this.zijifuzhu1buffxianshi();
        }
        //判断是否触发沉默
        if (this.chufachenmo_2_1 != "0") {
            var chufachengmojilv_2_1 = Math.floor(Math.random() * 100);
            if (chufachengmojilv_2_1 <= parseInt(this.chufachenmo_2_1)) {
                for (var j = 0; j < this.buff_1.length; j++) {
                    if (this.buff_1[j].id == "20017") {
                        this.buff_1.splice(j, 1);
                    }
                }
                var chengmobuff_2_1 = {
                    id: "20017",
                    chixu: 1,
                    xiaoguo: 0
                };
                this.buff_1.push(chengmobuff_2_1);
                //				console.log(this.guai1buff);
                this.zhandoutexiao("chenmo", 0, 1);
                this.zijifuzhu1buffxianshi();
            }
        }
        //判断是否触发回血
        if (this.chufahuixue_2_1 != "0") {
            if (this.chupairen == 3) {
                this.qixue_1 = Math.floor(this.qixue_1 + this.qixueshangxian_1 * parseInt(this.chufahuixue_2_1) / 100);
                if (this.qixue_1 >= this.qixueshangxian_1) {
                    this.qixue_1 = this.qixueshangxian_1;
                }
                this.shuaxinxuetiao_3();
                this.zhandoutexiao("huixue", this.qixueshangxian_1 * parseInt(this.chufahuixue_2_1) / 100, 3);
            }
            else if (this.chupairen == 4) {
                this.fuzhu1qixue_1 = Math.floor(this.fuzhu1qixue_1 + this.fuzhu1qixueshangxian_1 * parseInt(this.chufahuixue_2_1) / 100);
                if (this.fuzhu1qixue_1 >= this.fuzhu1qixueshangxian_1) {
                    this.fuzhu1qixue_1 = this.fuzhu1qixueshangxian_1;
                }
                this.shuaxinxuetiao_4();
                this.zhandoutexiao("huixue", this.fuzhu1qixueshangxian_1 * parseInt(this.chufahuixue_2_1) / 100, 4);
            }
            else if (this.chupairen == 5) {
                this.fuzhu2qixue_1 = Math.floor(this.fuzhu2qixue_1 + this.fuzhu2qixueshangxian_1 * parseInt(this.chufahuixue_2_1) / 100);
                if (this.fuzhu2qixue_1 >= this.fuzhu2qixueshangxian_1) {
                    this.fuzhu2qixue_1 = this.fuzhu2qixueshangxian_1;
                }
                this.shuaxinxuetiao_5();
                this.zhandoutexiao("huixue", this.fuzhu2qixueshangxian_1 * parseInt(this.chufahuixue_2_1) / 100, 5);
            }
        }
        //判断是否触发减抗
        if (this.chufaquanhushi_2_1 != "0") {
            for (var k = 0; k < this.buff_1.length; k++) {
                if (this.buff_1[k].id == "20019") {
                    this.buff_1.splice(k, 1);
                }
            }
            var jiankangbuff_2_1 = {
                id: "20019",
                chixu: 3,
                xiaoguo: parseInt(this.chufaquanhushi_2_1)
            };
            this.buff_1.push(jiankangbuff_2_1);
            //			console.log(this.guai1buff);
            this.zhandoutexiao("jiankang", parseInt(this.chufaquanhushi_2_1), 1);
            this.zijifuzhu1buffxianshi();
        }
        //判断是否触发回灵
        if (this.chufahuiling_2_1 != "0") {
            if (this.chupairen == 3) {
                for (var g = 0; g < this.buff_3.length; g++) {
                    if (this.buff_3[g].id == "20020") {
                        this.buff_3.splice(g, 1);
                    }
                }
                var huilingbuff_2_1 = {
                    id: "20020",
                    chixu: 3,
                    xiaoguo: 2
                };
                this.buff_3.push(huilingbuff_2_1);
                //			console.log(this.zijibuff);
                this.zhandoutexiao("huiling", 2, 3);
                this.direnbuffxianshi();
            }
            else if (this.chupairen == 4) {
                for (var g = 0; g < this.buff_4.length; g++) {
                    if (this.buff_4[g].id == "20020") {
                        this.buff_4.splice(g, 1);
                    }
                }
                var huilingbuff_2_1 = {
                    id: "20020",
                    chixu: 3,
                    xiaoguo: 2
                };
                this.buff_4.push(huilingbuff_2_1);
                //			console.log(this.zijibuff);
                this.zhandoutexiao("huiling", 2, 4);
                this.direnfuzhu1buffxianshi();
            }
            else if (this.chupairen == 5) {
                for (var g = 0; g < this.buff_5.length; g++) {
                    if (this.buff_5[g].id == "20020") {
                        this.buff_5.splice(g, 1);
                    }
                }
                var huilingbuff_2_1 = {
                    id: "20020",
                    chixu: 3,
                    xiaoguo: 2
                };
                this.buff_5.push(huilingbuff_2_1);
                //			console.log(this.zijibuff);
                this.zhandoutexiao("huiling", 2, 5);
                this.direnfuzhu2buffxianshi();
            }
        }
        //判断是否触发减攻击
        if (this.chufaxuruo_2_1 != "0") {
            for (var l = 0; l < this.buff_1.length; l++) {
                if (this.buff_1[l].id == "20022") {
                    this.buff_1.splice(l, 1);
                }
            }
            var jiangongjibuff_2_1 = {
                id: "20022",
                chixu: 3,
                xiaoguo: parseInt(this.chufaxuruo_2_1)
            };
            this.buff_1.push(jiangongjibuff_2_1);
            //			console.log(this.guai1buff);
            this.zhandoutexiao("jiangongji", parseInt(this.chufaxuruo_2_1), 1);
            this.zijifuzhu1buffxianshi();
        }
        //判断是否触发毒
        if (this.chufadu_2_1 != "0") {
            for (var c = 0; c < this.buff_1.length; c++) {
                if (this.buff_1[c].id == "20021") {
                    this.buff_1.splice(c, 1);
                }
            }
            var dubuff_2_1 = {
                id: "20021",
                chixu: 3,
                xiaoguo: parseInt(this.chufadu_2_1)
            };
            this.buff_1.push(dubuff_2_1);
            //			console.log(this.guai1buff);
            this.zhandoutexiao("du", parseInt(this.chufadu_2_1), 1);
            this.zijifuzhu1buffxianshi();
        }
        //判断是否触发加防
        if (this.chufajiafang_2_1 != "0") {
            if (this.chupairen == 3) {
                for (var b = 0; b < this.buff_3.length; b++) {
                    if (this.buff_3[b].id == "20023") {
                        this.buff_3.splice(b, 1);
                    }
                }
                var jiafangbuff_2_1 = {
                    id: "20023",
                    chixu: 3,
                    xiaoguo: parseInt(this.chufajiafang_2_1)
                };
                this.buff_3.push(jiafangbuff_2_1);
                //			console.log(this.zijibuff);
                this.zhandoutexiao("jiafang", parseInt(this.chufajiafang_2_1), 3);
                this.direnbuffxianshi();
            }
            else if (this.chupairen == 4) {
                for (var b = 0; b < this.buff_4.length; b++) {
                    if (this.buff_4[b].id == "20023") {
                        this.buff_4.splice(b, 1);
                    }
                }
                var jiafangbuff_2_1 = {
                    id: "20023",
                    chixu: 3,
                    xiaoguo: parseInt(this.chufajiafang_2_1)
                };
                this.buff_4.push(jiafangbuff_2_1);
                //			console.log(this.zijibuff);
                this.zhandoutexiao("jiafang", parseInt(this.chufajiafang_2_1), 4);
                this.direnfuzhu1buffxianshi();
            }
            else if (this.chupairen == 5) {
                for (var b = 0; b < this.buff_5.length; b++) {
                    if (this.buff_5[b].id == "20023") {
                        this.buff_5.splice(b, 1);
                    }
                }
                var jiafangbuff_2_1 = {
                    id: "20023",
                    chixu: 3,
                    xiaoguo: parseInt(this.chufajiafang_2_1)
                };
                this.buff_5.push(jiafangbuff_2_1);
                //			console.log(this.zijibuff);
                this.zhandoutexiao("jiafang", parseInt(this.chufajiafang_2_1), 5);
                this.direnfuzhu2buffxianshi();
            }
        }
        //判断是否触发加速
        if (this.chufajiasu_2_1 != "0") {
            if (this.chupairen == 3) {
                for (var v = 0; v < this.buff_3.length; v++) {
                    if (this.buff_3[v].id == "20024") {
                        this.buff_3.splice(v, 1);
                    }
                }
                var jiasubuff_2_1 = {
                    id: "20024",
                    chixu: 3,
                    xiaoguo: parseInt(this.chufajiasu_2_1)
                };
                this.buff_3.push(jiasubuff_2_1);
                //			console.log(this.zijibuff);
                this.zhandoutexiao("jiasu", parseInt(this.chufajiasu_2_1), 3);
                this.direnbuffxianshi();
            }
            else if (this.chupairen == 4) {
                for (var v = 0; v < this.buff_4.length; v++) {
                    if (this.buff_4[v].id == "20024") {
                        this.buff_4.splice(v, 1);
                    }
                }
                var jiasubuff_2_1 = {
                    id: "20024",
                    chixu: 3,
                    xiaoguo: parseInt(this.chufajiasu_2_1)
                };
                this.buff_4.push(jiasubuff_2_1);
                //			console.log(this.zijibuff);
                this.zhandoutexiao("jiasu", parseInt(this.chufajiasu_2_1), 4);
                this.direnfuzhu1buffxianshi();
            }
            else if (this.chupairen == 5) {
                for (var v = 0; v < this.buff_5.length; v++) {
                    if (this.buff_5[v].id == "20024") {
                        this.buff_5.splice(v, 1);
                    }
                }
                var jiasubuff_2_1 = {
                    id: "20024",
                    chixu: 3,
                    xiaoguo: parseInt(this.chufajiasu_2_1)
                };
                this.buff_5.push(jiasubuff_2_1);
                //			console.log(this.zijibuff);
                this.zhandoutexiao("jiasu", parseInt(this.chufajiasu_2_1), 5);
                this.direnfuzhu2buffxianshi();
            }
        }
        //判断是否触发给我方减血
        if (this.chufajianxue_2_1 != "0") {
            if (this.chupairen == 3) {
                this.qixue_1 = Math.floor(this.qixue_1 - this.qixueshangxian_1 * 0.1);
                this.zhandoutexiao("zijijianxue", this.qixueshangxian_1 * 0.1, 3);
                this.shuaxinxuetiao_3();
            }
            else if (this.chupairen == 4) {
                this.fuzhu1qixue_1 = Math.floor(this.fuzhu1qixue_1 - this.fuzhu1qixueshangxian_1 * 0.1);
                this.zhandoutexiao("zijijianxue", this.fuzhu1qixueshangxian_0 * 0.1, 4);
                this.shuaxinxuetiao_4();
            }
            else if (this.chupairen == 5) {
                this.fuzhu2qixue_1 = Math.floor(this.fuzhu2qixue_1 - this.fuzhu2qixueshangxian_1 * 0.1);
                this.zhandoutexiao("zijijianxue", this.fuzhu2qixueshangxian_1 * 0.1, 5);
                this.shuaxinxuetiao_5();
            }
        }
        //判断是否给我方减速
        if (this.chufawofangjiansu_2_1 != "0") {
            if (this.chupairen == 3) {
                this.jinduzu_pvp_3.y = this.jinduzu_pvp_3.y + 20;
                if (this.jinduzu_pvp_3.y >= this.img_sudujindu_pvp.y + this.img_sudujindu_pvp.height - this.jinduzu_pvp_3.height) {
                    this.jinduzu_pvp_3.y = this.img_sudujindu_pvp.y + this.img_sudujindu_pvp.height - this.jinduzu_pvp_3.height;
                }
            }
            else if (this.chupairen == 4) {
                this.jinduzu_pvp_4.y = this.jinduzu_pvp_4.y + 20;
                if (this.jinduzu_pvp_4.y >= this.img_sudujindu_pvp.y + this.img_sudujindu_pvp.height - this.jinduzu_pvp_4.height) {
                    this.jinduzu_pvp_4.y = this.img_sudujindu_pvp.y + this.img_sudujindu_pvp.height - this.jinduzu_pvp_4.height;
                }
            }
            else if (this.chupairen == 5) {
                this.jinduzu_pvp_5.y = this.jinduzu_pvp_5.y + 20;
                if (this.jinduzu_pvp_5.y >= this.img_sudujindu_pvp.y + this.img_sudujindu_pvp.height - this.jinduzu_pvp_5.height) {
                    this.jinduzu_pvp_5.y = this.img_sudujindu_pvp.y + this.img_sudujindu_pvp.height - this.jinduzu_pvp_5.height;
                }
            }
        }
        //判断是否触发了连击
        if (this.chufalianji_2_1 != "0") {
            this.lianjiteshuchuli(Math.floor(zhongshanghai_2_1 * (1 - this.fuzhu1fangyu_0 / 1000)), 1);
        }
        //技能释放完毕后，开始新的回合
        this.direnkaishixinhuihe();
    };
    Pvpzhandoujiemian.prototype.duiren3shanghai = function () {
        var zhongshanghai_3_1 = 0;
        var zuizhongshanghaila_3_1 = 0;
        var zuizhongshanghaima_3_1 = 0;
        var zuizhongshanghaisuan_3_1 = 0;
        var zuizhongshanghaitian_3_1 = 0;
        var hushila_3_1 = 0;
        var hushima_3_1 = 0;
        var hushisuan_3_1 = 0;
        var hushitian_3_1 = 0;
        //判断是否触发了忽视
        if (this.chufahushila_3_1 != "0") {
            hushila_3_1 = hushila_3_1 - Math.floor(hushila_3_1 * (parseInt(this.chufahushila_3_1) / 100));
            if (hushila_3_1 < 0) {
                hushila_3_1 = 0;
            }
        }
        if (this.chufahushima_3_1 != "0") {
            hushima_3_1 = hushima_3_1 - Math.floor(hushima_3_1 * (parseInt(this.chufahushima_3_1) / 100));
            if (hushima_3_1 < 0) {
                hushima_3_1 = 0;
            }
        }
        if (this.chufahushisuan_3_1 != "0") {
            hushisuan_3_1 = hushisuan_3_1 - Math.floor(hushisuan_3_1 * (parseInt(this.chufahushisuan_3_1) / 100));
            if (hushisuan_3_1 < 0) {
                hushisuan_3_1 = 0;
            }
        }
        if (this.chufahushitian_3_1 != "0") {
            hushitian_3_1 = hushitian_3_1 - Math.floor(hushitian_3_1 * (parseInt(this.chufahushitian_3_1) / 100));
            if (hushitian_3_1 < 0) {
                hushitian_3_1 = 0;
            }
        }
        //判断怪物BUFF是否有忽视
        for (var i = 0; i < this.buff_2.length; i++) {
            if (this.buff_2[i].id == "20019" && parseInt(this.buff_2[i].chixu) > 0 && this.buff_2[i].xiaoguo != "") {
                hushila_3_1 = hushila_3_1 - Math.floor(hushila_3_1 * (parseInt(this.buff_2[i].xiaoguo) / 100));
                if (hushila_3_1 < 0) {
                    hushila_3_1 = 0;
                }
                hushima_3_1 = hushima_3_1 - Math.floor(hushima_3_1 * (parseInt(this.buff_2[i].xiaoguo) / 100));
                if (hushima_3_1 < 0) {
                    hushima_3_1 = 0;
                }
                hushisuan_3_1 = hushisuan_3_1 - Math.floor(hushisuan_3_1 * (parseInt(this.buff_2[i].xiaoguo) / 100));
                if (hushisuan_3_1 < 0) {
                    hushisuan_3_1 = 0;
                }
                hushitian_3_1 = hushitian_3_1 - Math.floor(hushitian_3_1 * (parseInt(this.buff_2[i].xiaoguo) / 100));
                if (hushitian_3_1 < 0) {
                    hushitian_3_1 = 0;
                }
            }
        }
        //计算怪物所受伤害
        zuizhongshanghaila_3_1 = Math.floor(this.shuchulazhi_1 * (1 - hushila_3_1 / 1000));
        zuizhongshanghaima_3_1 = Math.floor(this.shuchumazhi_1 * (1 - hushima_3_1 / 1000));
        zuizhongshanghaisuan_3_1 = Math.floor(this.shuchusuanzhi_1 * (1 - hushisuan_3_1 / 1000));
        zuizhongshanghaitian_3_1 = Math.floor(this.shuchutianzhi_1 * (1 - hushitian_3_1 / 1000));
        zhongshanghai_3_1 = zuizhongshanghaila_3_1 + zuizhongshanghaima_3_1 + zuizhongshanghaisuan_3_1 + zuizhongshanghaitian_3_1;
        //判断是否触发了自身降低攻击
        if (this.chufajiangong_3_1 != "0") {
            zhongshanghai_3_1 = Math.floor(zhongshanghai_3_1 * 0.9);
        }
        //判断是否触发了震慑
        if (this.chufazhenshe_3_1 != "0") {
            zhongshanghai_3_1 = Math.floor(Math.floor(zhongshanghai_3_1 * (1 - this.fuzhu2fangyu_0 / 1000)) + this.fuzhu2qixue_0 * parseInt(this.chufazhenshe_3_1) / 100);
            this.zhandoutexiao("zhenshe", this.fuzhu2qixue_0 * parseInt(this.chufazhenshe_3_1) / 100, 2);
        }
        //判断是否触发了必杀
        if (this.chufabisha_3_1 != "0") {
            zhongshanghai_3_1 = Math.floor(zhongshanghai_3_1 + zhongshanghai_3_1 * parseInt(this.chufabisha_3_1) / 100);
            this.zhandoutexiao("bisha", Math.floor(zhongshanghai_3_1 * (1 - this.fuzhu2fangyu_0 / 1000)), 2);
        }
        else {
            this.zhandoutexiao("putong", Math.floor(zhongshanghai_3_1 * (1 - this.fuzhu2fangyu_0 / 1000)), 2);
        }
        //判断是否触发了吸血
        if (this.chufaxixue_3_1 != "0") {
            if (this.chupairen == 3) {
                this.qixue_1 = Math.floor(this.qixue_1 + zhongshanghai_3_1 * parseInt(this.chufaxixue_3_1) / 100);
                if (this.qixue_1 >= this.qixueshangxian_1) {
                    this.qixue_1 = this.qixueshangxian_1;
                }
                this.zhandoutexiao("xixue", zhongshanghai_3_1 * parseInt(this.chufaxixue_3_1) / 100, 2);
                this.shuaxinxuetiao_3();
            }
            else if (this.chupairen == 4) {
                this.fuzhu1qixue_1 = Math.floor(this.fuzhu1qixue_1 + zhongshanghai_3_1 * parseInt(this.chufaxixue_3_1) / 100);
                if (this.fuzhu1qixue_1 >= this.fuzhu1qixueshangxian_1) {
                    this.fuzhu1qixue_1 = this.fuzhu1qixueshangxian_1;
                }
                this.zhandoutexiao("xixue", zhongshanghai_3_1 * parseInt(this.chufaxixue_3_1) / 100, 2);
                this.shuaxinxuetiao_4();
            }
            else if (this.chupairen == 5) {
                this.fuzhu2qixue_1 = Math.floor(this.fuzhu2qixue_1 + zhongshanghai_3_1 * parseInt(this.chufaxixue_3_1) / 100);
                if (this.fuzhu2qixue_1 >= this.fuzhu2qixueshangxian_1) {
                    this.fuzhu2qixue_1 = this.fuzhu2qixueshangxian_1;
                }
                this.zhandoutexiao("xixue", zhongshanghai_3_1 * parseInt(this.chufaxixue_3_1) / 100, 2);
                this.shuaxinxuetiao_5();
            }
        }
        //判断是否触发了善恶
        if (this.chufasane_3_1 != "0") {
            var suijisane = Math.floor(Math.random() * 2);
            if (suijisane == 0) {
                this.zhandoutexiao("sanezhie", Math.floor(zhongshanghai_3_1 * 1.8 * (1 - this.fuzhu2fangyu_0 / 1000)), 2);
                this.fuzhu2qixue_0 = Math.floor(this.fuzhu2qixue_0 - Math.floor(zhongshanghai_3_1 * 1.8 * (1 - this.fuzhu2fangyu_0 / 1000)));
                this.shuaxinxuetiao_2();
                //判断是否触发追击
                if (this.fuzhu2qixue_0 <= 0) {
                    if (this.chufazhuiji_3_1 != "0") {
                        if (Math.floor(this.fuzhu2qixue_0 - Math.floor(zhongshanghai_3_1 * 1.8 * (1 - this.fuzhu2fangyu_0 / 1000))) < 0) {
                            var zhuijishu = 0 - Math.floor(this.fuzhu2qixue_0 - Math.floor(zhongshanghai_3_1 * 1.8 * (1 - this.fuzhu2fangyu_0 / 1000)));
                            if (this.qixue_0 > 0) {
                                this.qixue_0 = this.qixue_0 - Math.floor(zhuijishu * (1 - this.fangyu_0 / 1000));
                                this.zhuijitexiao(this.benhuihechucaiid_1, 2, 0, Math.floor(zhuijishu * (1 - this.fangyu_0 / 1000)));
                                this.shuaxinxuetiao_0();
                            }
                            else if (this.fuzhu1qixue_0 > 0) {
                                this.fuzhu1qixue_0 = this.fuzhu1qixue_0 - Math.floor(zhuijishu * (1 - this.fuzhu1fangyu_0 / 1000));
                                this.zhuijitexiao(this.benhuihechucaiid_1, 2, 1, Math.floor(zhuijishu * (1 - this.fuzhu1fangyu_0 / 1000)));
                                this.shuaxinxuetiao_1();
                            }
                        }
                    }
                }
            }
            else {
                this.zhandoutexiao("sanezhis", zhongshanghai_3_1 * 0.5, 2);
                this.fuzhu2qixue_0 = Math.floor(this.fuzhu2qixue_0 + zhongshanghai_3_1 * 0.5);
                this.shuaxinxuetiao_2();
            }
        }
        else {
            this.fuzhu2qixue_0 = Math.floor(this.fuzhu2qixue_0 - Math.floor(zhongshanghai_3_1 * (1 - this.fuzhu2fangyu_0 / 1000)));
            this.shuaxinxuetiao_2();
        }
        //判断是否触发吸蓝
        if (this.chufaxilan_3_1 != "0") {
            this.qidianshu_1 = this.qidianshu_1 + parseInt(this.chufaxilan_3_1);
            if (this.qidianshu_1 >= 10) {
                this.qidianshu_1 = 10;
            }
            this.qidianshu_0 = this.qidianshu_0 - parseInt(this.chufaxilan_3_1);
            if (this.qidianshu_0 < 0) {
                this.qidianshu_0 = 0;
            }
            this.qidianxianshigengxin();
            this.direnqidianxianshigengxin();
            this.zhandoutexiao("xilan", parseInt(this.chufaxilan_3_1), 2);
        }
        //判断是否触发减速
        if (this.chufajiansu_3_1 != "0") {
            for (var h = 0; h < this.buff_2.length; h++) {
                if (this.buff_2[h].id == "20016") {
                    this.buff_2.splice(h, 1);
                }
            }
            var jiansubuff_3_1 = {
                id: "20016",
                chixu: 2,
                xiaoguo: parseInt(this.chufajiansu_3_1)
            };
            this.buff_2.push(jiansubuff_3_1);
            //			console.log(this.guai1buff);
            this.zhandoutexiao("jiansu", parseInt(this.chufajiansu_3_1), 2);
            this.zijifuzhu2buffxianshi();
        }
        //判断是否触发沉默
        if (this.chufachenmo_3_1 != "0") {
            var chufachengmojilv_3_1 = Math.floor(Math.random() * 100);
            if (chufachengmojilv_3_1 <= parseInt(this.chufachenmo_3_1)) {
                for (var j = 0; j < this.buff_2.length; j++) {
                    if (this.buff_2[j].id == "20017") {
                        this.buff_2.splice(j, 1);
                    }
                }
                var chengmobuff_3_1 = {
                    id: "20017",
                    chixu: 1,
                    xiaoguo: 0
                };
                this.buff_2.push(chengmobuff_3_1);
                //				console.log(this.guai1buff);
                this.zhandoutexiao("chenmo", 0, 2);
                this.zijifuzhu2buffxianshi();
            }
        }
        //判断是否触发回血
        if (this.chufahuixue_3_1 != "0") {
            if (this.chupairen == 3) {
                this.qixue_1 = Math.floor(this.qixue_1 + this.qixueshangxian_1 * parseInt(this.chufahuixue_3_1) / 100);
                if (this.qixue_1 >= this.qixueshangxian_1) {
                    this.qixue_1 = this.qixueshangxian_1;
                }
                this.shuaxinxuetiao_3();
                this.zhandoutexiao("huixue", this.qixueshangxian_1 * parseInt(this.chufahuixue_3_1) / 100, 3);
            }
            else if (this.chupairen == 4) {
                this.fuzhu1qixue_1 = Math.floor(this.fuzhu1qixue_1 + this.fuzhu1qixueshangxian_1 * parseInt(this.chufahuixue_3_1) / 100);
                if (this.fuzhu1qixue_1 >= this.fuzhu1qixueshangxian_1) {
                    this.fuzhu1qixue_1 = this.fuzhu1qixueshangxian_1;
                }
                this.shuaxinxuetiao_4();
                this.zhandoutexiao("huixue", this.fuzhu1qixueshangxian_1 * parseInt(this.chufahuixue_3_1) / 100, 4);
            }
            else if (this.chupairen == 5) {
                this.fuzhu2qixue_1 = Math.floor(this.fuzhu2qixue_1 + this.fuzhu2qixueshangxian_1 * parseInt(this.chufahuixue_3_1) / 100);
                if (this.fuzhu2qixue_1 >= this.fuzhu2qixueshangxian_1) {
                    this.fuzhu2qixue_1 = this.fuzhu2qixueshangxian_1;
                }
                this.shuaxinxuetiao_5();
                this.zhandoutexiao("huixue", this.fuzhu2qixueshangxian_1 * parseInt(this.chufahuixue_3_1) / 100, 5);
            }
        }
        //判断是否触发减抗
        if (this.chufaquanhushi_3_1 != "0") {
            for (var k = 0; k < this.buff_2.length; k++) {
                if (this.buff_2[k].id == "20019") {
                    this.buff_2.splice(k, 1);
                }
            }
            var jiankangbuff_3_1 = {
                id: "20019",
                chixu: 3,
                xiaoguo: parseInt(this.chufaquanhushi_3_1)
            };
            this.buff_2.push(jiankangbuff_3_1);
            //			console.log(this.guai1buff);
            this.zhandoutexiao("jiankang", parseInt(this.chufaquanhushi_3_1), 2);
            this.zijifuzhu2buffxianshi();
        }
        //判断是否触发回灵
        if (this.chufahuiling_3_1 != "0") {
            if (this.chupairen == 3) {
                for (var g = 0; g < this.buff_3.length; g++) {
                    if (this.buff_3[g].id == "20020") {
                        this.buff_3.splice(g, 1);
                    }
                }
                var huilingbuff_3_1 = {
                    id: "20020",
                    chixu: 3,
                    xiaoguo: 2
                };
                this.buff_3.push(huilingbuff_3_1);
                //			console.log(this.zijibuff);
                this.zhandoutexiao("huiling", 2, 3);
                this.direnbuffxianshi();
            }
            else if (this.chupairen == 4) {
                for (var g = 0; g < this.buff_4.length; g++) {
                    if (this.buff_4[g].id == "20020") {
                        this.buff_4.splice(g, 1);
                    }
                }
                var huilingbuff_3_1 = {
                    id: "20020",
                    chixu: 3,
                    xiaoguo: 2
                };
                this.buff_4.push(huilingbuff_3_1);
                //			console.log(this.zijibuff);
                this.zhandoutexiao("huiling", 2, 4);
                this.direnfuzhu1buffxianshi();
            }
            else if (this.chupairen == 5) {
                for (var g = 0; g < this.buff_5.length; g++) {
                    if (this.buff_5[g].id == "20020") {
                        this.buff_5.splice(g, 1);
                    }
                }
                var huilingbuff_3_1 = {
                    id: "20020",
                    chixu: 3,
                    xiaoguo: 2
                };
                this.buff_5.push(huilingbuff_3_1);
                //			console.log(this.zijibuff);
                this.zhandoutexiao("huiling", 2, 5);
                this.direnfuzhu2buffxianshi();
            }
        }
        //判断是否触发减攻击
        if (this.chufaxuruo_3_1 != "0") {
            for (var l = 0; l < this.buff_2.length; l++) {
                if (this.buff_2[l].id == "20022") {
                    this.buff_2.splice(l, 1);
                }
            }
            var jiangongjibuff_3_1 = {
                id: "20022",
                chixu: 3,
                xiaoguo: parseInt(this.chufaxuruo_3_1)
            };
            this.buff_2.push(jiangongjibuff_3_1);
            //			console.log(this.guai1buff);
            this.zhandoutexiao("jiangongji", parseInt(this.chufaxuruo_3_1), 2);
            this.zijifuzhu2buffxianshi();
        }
        //判断是否触发毒
        if (this.chufadu_3_1 != "0") {
            for (var c = 0; c < this.buff_2.length; c++) {
                if (this.buff_2[c].id == "20021") {
                    this.buff_2.splice(c, 1);
                }
            }
            var dubuff_3_1 = {
                id: "20021",
                chixu: 3,
                xiaoguo: parseInt(this.chufadu_3_1)
            };
            this.buff_2.push(dubuff_3_1);
            //			console.log(this.guai1buff);
            this.zhandoutexiao("du", parseInt(this.chufadu_3_1), 2);
            this.zijifuzhu2buffxianshi();
        }
        //判断是否触发加防
        if (this.chufajiafang_3_1 != "0") {
            if (this.chupairen == 3) {
                for (var b = 0; b < this.buff_3.length; b++) {
                    if (this.buff_3[b].id == "20023") {
                        this.buff_3.splice(b, 1);
                    }
                }
                var jiafangbuff_3_1 = {
                    id: "20023",
                    chixu: 3,
                    xiaoguo: parseInt(this.chufajiafang_3_1)
                };
                this.buff_3.push(jiafangbuff_3_1);
                //			console.log(this.zijibuff);
                this.zhandoutexiao("jiafang", parseInt(this.chufajiafang_3_1), 3);
                this.direnbuffxianshi();
            }
            else if (this.chupairen == 4) {
                for (var b = 0; b < this.buff_4.length; b++) {
                    if (this.buff_4[b].id == "20023") {
                        this.buff_4.splice(b, 1);
                    }
                }
                var jiafangbuff_3_1 = {
                    id: "20023",
                    chixu: 3,
                    xiaoguo: parseInt(this.chufajiafang_3_1)
                };
                this.buff_4.push(jiafangbuff_3_1);
                //			console.log(this.zijibuff);
                this.zhandoutexiao("jiafang", parseInt(this.chufajiafang_3_1), 4);
                this.direnfuzhu1buffxianshi();
            }
            else if (this.chupairen == 5) {
                for (var b = 0; b < this.buff_5.length; b++) {
                    if (this.buff_5[b].id == "20023") {
                        this.buff_5.splice(b, 1);
                    }
                }
                var jiafangbuff_3_1 = {
                    id: "20023",
                    chixu: 3,
                    xiaoguo: parseInt(this.chufajiafang_3_1)
                };
                this.buff_5.push(jiafangbuff_3_1);
                //			console.log(this.zijibuff);
                this.zhandoutexiao("jiafang", parseInt(this.chufajiafang_3_1), 5);
                this.direnfuzhu2buffxianshi();
            }
        }
        //判断是否触发加速
        if (this.chufajiasu_3_1 != "0") {
            if (this.chupairen == 3) {
                for (var v = 0; v < this.buff_3.length; v++) {
                    if (this.buff_3[v].id == "20024") {
                        this.buff_3.splice(v, 1);
                    }
                }
                var jiasubuff_3_1 = {
                    id: "20024",
                    chixu: 3,
                    xiaoguo: parseInt(this.chufajiasu_3_1)
                };
                this.buff_3.push(jiasubuff_3_1);
                //			console.log(this.zijibuff);
                this.zhandoutexiao("jiasu", parseInt(this.chufajiasu_3_1), 3);
                this.direnbuffxianshi();
            }
            else if (this.chupairen == 4) {
                for (var v = 0; v < this.buff_4.length; v++) {
                    if (this.buff_4[v].id == "20024") {
                        this.buff_4.splice(v, 1);
                    }
                }
                var jiasubuff_3_1 = {
                    id: "20024",
                    chixu: 3,
                    xiaoguo: parseInt(this.chufajiasu_3_1)
                };
                this.buff_4.push(jiasubuff_3_1);
                //			console.log(this.zijibuff);
                this.zhandoutexiao("jiasu", parseInt(this.chufajiasu_3_1), 4);
                this.direnfuzhu1buffxianshi();
            }
            else if (this.chupairen == 5) {
                for (var v = 0; v < this.buff_5.length; v++) {
                    if (this.buff_5[v].id == "20024") {
                        this.buff_5.splice(v, 1);
                    }
                }
                var jiasubuff_3_1 = {
                    id: "20024",
                    chixu: 3,
                    xiaoguo: parseInt(this.chufajiasu_3_1)
                };
                this.buff_5.push(jiasubuff_3_1);
                //			console.log(this.zijibuff);
                this.zhandoutexiao("jiasu", parseInt(this.chufajiasu_3_1), 5);
                this.direnfuzhu2buffxianshi();
            }
        }
        //判断是否触发给我方减血
        if (this.chufajianxue_3_1 != "0") {
            if (this.chupairen == 3) {
                this.qixue_1 = Math.floor(this.qixue_1 - this.qixueshangxian_1 * 0.1);
                this.zhandoutexiao("zijijianxue", this.qixueshangxian_1 * 0.1, 3);
                this.shuaxinxuetiao_3();
            }
            else if (this.chupairen == 4) {
                this.fuzhu1qixue_1 = Math.floor(this.fuzhu1qixue_1 - this.fuzhu1qixueshangxian_1 * 0.1);
                this.zhandoutexiao("zijijianxue", this.fuzhu1qixueshangxian_0 * 0.1, 4);
                this.shuaxinxuetiao_4();
            }
            else if (this.chupairen == 5) {
                this.fuzhu2qixue_1 = Math.floor(this.fuzhu2qixue_1 - this.fuzhu2qixueshangxian_1 * 0.1);
                this.zhandoutexiao("zijijianxue", this.fuzhu2qixueshangxian_1 * 0.1, 5);
                this.shuaxinxuetiao_5();
            }
        }
        //判断是否给我方减速
        if (this.chufawofangjiansu_3_1 != "0") {
            if (this.chupairen == 3) {
                this.jinduzu_pvp_3.y = this.jinduzu_pvp_3.y + 20;
                if (this.jinduzu_pvp_3.y >= this.img_sudujindu_pvp.y + this.img_sudujindu_pvp.height - this.jinduzu_pvp_3.height) {
                    this.jinduzu_pvp_3.y = this.img_sudujindu_pvp.y + this.img_sudujindu_pvp.height - this.jinduzu_pvp_3.height;
                }
            }
            else if (this.chupairen == 4) {
                this.jinduzu_pvp_4.y = this.jinduzu_pvp_4.y + 20;
                if (this.jinduzu_pvp_4.y >= this.img_sudujindu_pvp.y + this.img_sudujindu_pvp.height - this.jinduzu_pvp_4.height) {
                    this.jinduzu_pvp_4.y = this.img_sudujindu_pvp.y + this.img_sudujindu_pvp.height - this.jinduzu_pvp_4.height;
                }
            }
            else if (this.chupairen == 5) {
                this.jinduzu_pvp_5.y = this.jinduzu_pvp_5.y + 20;
                if (this.jinduzu_pvp_5.y >= this.img_sudujindu_pvp.y + this.img_sudujindu_pvp.height - this.jinduzu_pvp_5.height) {
                    this.jinduzu_pvp_5.y = this.img_sudujindu_pvp.y + this.img_sudujindu_pvp.height - this.jinduzu_pvp_5.height;
                }
            }
        }
        //判断是否触发了连击
        if (this.chufalianji_3_1 != "0") {
            this.lianjiteshuchuli(Math.floor(zhongshanghai_3_1 * (1 - this.fuzhu2fangyu_0 / 1000)), 2);
        }
        //技能释放完毕后，开始新的回合
        this.direnkaishixinhuihe();
    };
    //连击特殊处理
    Pvpzhandoujiemian.prototype.lianjiteshuchuli = function (shanghai, duixiang) {
        var _this = this;
        shanghai = Math.floor(shanghai / 2);
        this.zhandoutexiao("lianji", 0, 10);
        if (duixiang == 3) {
            var shipubiao1 = Gerenshuxing.shipubiao;
            var xianshishangcaitu1 = "";
            for (var h = 0; h < shipubiao1.length; h++) {
                if (shipubiao1[h].id == this.benhuihechucaiid_0) {
                    xianshishangcaitu1 = shipubiao1[h].id + "_png";
                    break;
                }
            }
            var zhandoushangcai1_1 = new egret.Bitmap();
            var zhandoutupian1 = RES.getRes(xianshishangcaitu1);
            zhandoushangcai1_1.texture = zhandoutupian1;
            this.addChild(zhandoushangcai1_1);
            zhandoushangcai1_1.x = this.zhandouxianshizu_pvp.x;
            zhandoushangcai1_1.y = this.zhandouxianshizu_pvp.y;
            zhandoushangcai1_1.scaleX = 1;
            zhandoushangcai1_1.scaleY = 1;
            egret.Tween.get(zhandoushangcai1_1).to({ scaleX: 0, scaleY: 0, x: this.diduizu.x + this.diduizu.width / 2 - zhandoushangcai1_1.width / 2, y: this.diduizu.y + this.diduizu.height / 2 - zhandoushangcai1_1.height / 2 }, 1000).call(function () {
                if (_this.parent) {
                    _this.removeChild(zhandoushangcai1_1);
                    _this.qixue_1 = Math.floor(_this.qixue_1 - shanghai);
                    _this.zhandoutexiao("pugong", shanghai, 3);
                    _this.shuaxinxuetiao_3();
                }
            });
        }
        else if (duixiang == 4) {
            var shipubiao1 = Gerenshuxing.shipubiao;
            var xianshishangcaitu1 = "";
            for (var h = 0; h < shipubiao1.length; h++) {
                if (shipubiao1[h].id == this.benhuihechucaiid_0) {
                    xianshishangcaitu1 = shipubiao1[h].id + "_png";
                    break;
                }
            }
            var zhandoushangcai1_2 = new egret.Bitmap();
            var zhandoutupian1 = RES.getRes(xianshishangcaitu1);
            zhandoushangcai1_2.texture = zhandoutupian1;
            this.addChild(zhandoushangcai1_2);
            zhandoushangcai1_2.x = this.zhandouxianshizu_pvp.x;
            zhandoushangcai1_2.y = this.zhandouxianshizu_pvp.y;
            zhandoushangcai1_2.scaleX = 1;
            zhandoushangcai1_2.scaleY = 1;
            egret.Tween.get(zhandoushangcai1_2).to({ scaleX: 0, scaleY: 0, x: this.fuzhuzu1.x + this.fuzhuzu1.width / 2 - zhandoushangcai1_2.width / 2, y: this.fuzhuzu1.y + this.fuzhuzu1.height / 2 - zhandoushangcai1_2.height / 2 }, 1000).call(function () {
                if (_this.parent) {
                    _this.removeChild(zhandoushangcai1_2);
                    _this.fuzhu1qixue_1 = Math.floor(_this.fuzhu1qixue_1 - shanghai);
                    _this.zhandoutexiao("pugong", shanghai, 4);
                    _this.shuaxinxuetiao_4();
                }
            });
        }
        else if (duixiang == 5) {
            var shipubiao1 = Gerenshuxing.shipubiao;
            var xianshishangcaitu1 = "";
            for (var h = 0; h < shipubiao1.length; h++) {
                if (shipubiao1[h].id == this.benhuihechucaiid_0) {
                    xianshishangcaitu1 = shipubiao1[h].id + "_png";
                    break;
                }
            }
            var zhandoushangcai1_3 = new egret.Bitmap();
            var zhandoutupian1 = RES.getRes(xianshishangcaitu1);
            zhandoushangcai1_3.texture = zhandoutupian1;
            this.addChild(zhandoushangcai1_3);
            zhandoushangcai1_3.x = this.zhandouxianshizu_pvp.x;
            zhandoushangcai1_3.y = this.zhandouxianshizu_pvp.y;
            zhandoushangcai1_3.scaleX = 1;
            zhandoushangcai1_3.scaleY = 1;
            egret.Tween.get(zhandoushangcai1_3).to({ scaleX: 0, scaleY: 0, x: this.fuzhuzu2.x + this.fuzhuzu2.width / 2 - zhandoushangcai1_3.width / 2, y: this.fuzhuzu2.y + this.fuzhuzu2.height / 2 - zhandoushangcai1_3.height / 2 }, 1000).call(function () {
                if (_this.parent) {
                    _this.removeChild(zhandoushangcai1_3);
                    _this.fuzhu2qixue_1 = Math.floor(_this.fuzhu2qixue_1 - shanghai);
                    _this.zhandoutexiao("pugong", shanghai, 5);
                    _this.shuaxinxuetiao_5();
                }
            });
        }
        else if (duixiang == 0) {
            var shipubiao1 = Gerenshuxing.shipubiao;
            var xianshishangcaitu1 = "";
            for (var h = 0; h < shipubiao1.length; h++) {
                if (shipubiao1[h].id == this.benhuihechucaiid_1) {
                    xianshishangcaitu1 = shipubiao1[h].id + "_png";
                    break;
                }
            }
            var zhandoushangcai1_4 = new egret.Bitmap();
            var zhandoutupian1 = RES.getRes(xianshishangcaitu1);
            zhandoushangcai1_4.texture = zhandoutupian1;
            this.addChild(zhandoushangcai1_4);
            zhandoushangcai1_4.x = this.zhandouxianshizu_pvp.x;
            zhandoushangcai1_4.y = this.zhandouxianshizu_pvp.y;
            zhandoushangcai1_4.scaleX = 1;
            zhandoushangcai1_4.scaleY = 1;
            egret.Tween.get(zhandoushangcai1_4).to({ scaleX: 0, scaleY: 0, x: this.zijizu_pvp.x + this.zijizu_pvp.width / 2 - zhandoushangcai1_4.width / 2, y: this.zijizu_pvp.y + this.zijizu_pvp.height / 2 - zhandoushangcai1_4.height / 2 }, 1000).call(function () {
                if (_this.parent) {
                    _this.removeChild(zhandoushangcai1_4);
                    _this.qixue_0 = Math.floor(_this.qixue_0 - shanghai);
                    _this.zhandoutexiao("pugong", shanghai, 0);
                    _this.shuaxinxuetiao_0();
                }
            });
        }
        else if (duixiang == 1) {
            var shipubiao1 = Gerenshuxing.shipubiao;
            var xianshishangcaitu1 = "";
            for (var h = 0; h < shipubiao1.length; h++) {
                if (shipubiao1[h].id == this.benhuihechucaiid_0) {
                    xianshishangcaitu1 = shipubiao1[h].id + "_png";
                    break;
                }
            }
            var zhandoushangcai1_5 = new egret.Bitmap();
            var zhandoutupian1 = RES.getRes(xianshishangcaitu1);
            zhandoushangcai1_5.texture = zhandoutupian1;
            this.addChild(zhandoushangcai1_5);
            zhandoushangcai1_5.x = this.zhandouxianshizu_pvp.x;
            zhandoushangcai1_5.y = this.zhandouxianshizu_pvp.y;
            zhandoushangcai1_5.scaleX = 1;
            zhandoushangcai1_5.scaleY = 1;
            egret.Tween.get(zhandoushangcai1_5).to({ scaleX: 0, scaleY: 0, x: this.fuzhuzu.x + this.fuzhuzu.width / 2 - zhandoushangcai1_5.width / 2, y: this.fuzhuzu.y + this.fuzhuzu.height / 2 - zhandoushangcai1_5.height / 2 }, 1000).call(function () {
                if (_this.parent) {
                    _this.removeChild(zhandoushangcai1_5);
                    _this.fuzhu1qixue_0 = Math.floor(_this.fuzhu1qixue_0 - shanghai);
                    _this.zhandoutexiao("pugong", shanghai, 1);
                    _this.shuaxinxuetiao_1();
                }
            });
        }
        else if (duixiang == 2) {
            var shipubiao1 = Gerenshuxing.shipubiao;
            var xianshishangcaitu1 = "";
            for (var h = 0; h < shipubiao1.length; h++) {
                if (shipubiao1[h].id == this.benhuihechucaiid_0) {
                    xianshishangcaitu1 = shipubiao1[h].id + "_png";
                    break;
                }
            }
            var zhandoushangcai1_6 = new egret.Bitmap();
            var zhandoutupian1 = RES.getRes(xianshishangcaitu1);
            zhandoushangcai1_6.texture = zhandoutupian1;
            this.addChild(zhandoushangcai1_6);
            zhandoushangcai1_6.x = this.zhandouxianshizu_pvp.x;
            zhandoushangcai1_6.y = this.zhandouxianshizu_pvp.y;
            zhandoushangcai1_6.scaleX = 1;
            zhandoushangcai1_6.scaleY = 1;
            egret.Tween.get(zhandoushangcai1_6).to({ scaleX: 0, scaleY: 0, x: this.fuzhuzu0.x + this.fuzhuzu0.width / 2 - zhandoushangcai1_6.width / 2, y: this.fuzhuzu0.y + this.fuzhuzu0.height / 2 - zhandoushangcai1_6.height / 2 }, 1000).call(function () {
                if (_this.parent) {
                    _this.removeChild(zhandoushangcai1_6);
                    _this.fuzhu2qixue_0 = Math.floor(_this.fuzhu2qixue_0 - shanghai);
                    _this.zhandoutexiao("pugong", shanghai, 2);
                    _this.shuaxinxuetiao_2();
                }
            });
        }
    };
    //判断特效显示
    Pvpzhandoujiemian.prototype.zhandoutexiao = function (leixing, shuzhi, duixiang) {
        //开始判断呈现的技能动画效果
        if (leixing == "sanezhie" || leixing == "bisha" || leixing == "putong") {
            switch (leixing) {
                case "sanezhie":
                    this.xianshidonghua("shuziyiweisan", "shanezhishanlonggu", "shaneyoubaoshan_ske_json", "shaneyoubaoshan_tex_json", "shaneyoubaoshan_tex_png", duixiang); //动作名称，骨架名称，资源1，资源2，资源3，作用对象;
                    this.piaoxuewenzi("耐心(殊)", "-" + shuzhi, duixiang, "F41809");
                    break;
                case "bisha":
                    this.xianshidonghua("meiwei", "bishalonggu", "meiwei_ske_json", "meiwei_tex_json", "meiwei_tex_png", duixiang); //动作名称，骨架名称，资源1，资源2，资源3，作用对象;
                    this.piaoxuewenzi("耐心(美)", "-" + shuzhi, duixiang, "F41809");
                    break;
                case "putong":
                    this.xianshidonghua("pugong", "pugonglonggu", "pugong_ske_json", "pugong_tex_json", "pugong_tex_png", duixiang); //动作名称，骨架名称，资源1，资源2，资源3，作用对象;
                    this.piaoxuewenzi("耐心", "-" + shuzhi, duixiang, "F41809");
                    break;
            }
        }
        if (leixing == "zhenshe") {
            this.xianshidonghua("shizhidadong", "shizhidadonglonggu", "shizhidadong_ske_json", "shizhidadong_tex_json", "shizhidadong_tex_png", duixiang); //动作名称，骨架名称，资源1，资源2，资源3，作用对象;
            this.piaoxuewenzi("耐心(食)", "-" + shuzhi, duixiang, "F41809");
        }
        if (leixing == "xixue") {
            this.xianshidonghua("huixue", "tianmilonggu", "tianmi_ske_json", "tianmi_tex_json", "tianmi_tex_png", duixiang); //动作名称，骨架名称，资源1，资源2，资源3，作用对象;
            if (duixiang == 0) {
                this.piaoxuewenzi("耐心(甜)", "+" + shuzhi, 3, "42F409");
            }
            else if (duixiang == 1) {
                this.piaoxuewenzi("耐心(甜)", "+" + shuzhi, 4, "42F409");
            }
            else if (duixiang == 2) {
                this.piaoxuewenzi("耐心(甜)", "+" + shuzhi, 5, "42F409");
            }
            else if (duixiang == 3) {
                this.piaoxuewenzi("耐心(甜)", "+" + shuzhi, 0, "42F409");
            }
            else if (duixiang == 4) {
                this.piaoxuewenzi("耐心(甜)", "+" + shuzhi, 1, "42F409");
            }
            else if (duixiang == 5) {
                this.piaoxuewenzi("耐心(甜)", "+" + shuzhi, 2, "42F409");
            }
        }
        if (leixing == "sanezhis") {
            this.xianshidonghua("shuzhiyiweiyi", "shaneelonggu", "shuzhiyiweiyi_ske_json", "shuzhiyiweiyi_tex_json", "shuzhiyiweiyi_tex_png", duixiang); //动作名称，骨架名称，资源1，资源2，资源3，作用对象;
            this.piaoxuewenzi("耐心(异)", "+" + shuzhi, duixiang, "42F409");
        }
        if (leixing == "xilan") {
            this.xianshidonghua("suanshaungwubi", "suanshuanglonggu", "suanchuangwubi_ske_json", "suanchuangwubi_tex_json", "suanchuangwubi_tex_png", duixiang); //动作名称，骨架名称，资源1，资源2，资源3，作用对象;
            if (duixiang == 0) {
                this.piaoxuewenzi("配料", "+" + shuzhi, 3, "42F409");
            }
            else if (duixiang == 1) {
                this.piaoxuewenzi("配料", "+" + shuzhi, 4, "42F409");
            }
            else if (duixiang == 2) {
                this.piaoxuewenzi("配料", "+" + shuzhi, 5, "42F409");
            }
            else if (duixiang == 3) {
                this.piaoxuewenzi("配料", "+" + shuzhi, 0, "42F409");
            }
            else if (duixiang == 4) {
                this.piaoxuewenzi("配料", "+" + shuzhi, 1, "42F409");
            }
            else if (duixiang == 5) {
                this.piaoxuewenzi("配料", "+" + shuzhi, 2, "42F409");
            }
        }
        if (leixing == "jiansu") {
            this.xianshidonghua("dapengwudiong", "dapengwudinglonggu", "dapengwuding_ske_json", "dapengwuding_tex_json", "dapengwuding_tex_png", duixiang); //动作名称，骨架名称，资源1，资源2，资源3，作用对象;
            this.piaoxuewenzi("兴致", "-" + shuzhi, duixiang, "F41809");
        }
        if (leixing == "chenmo") {
            this.xianshidonghua("fenxianglieding", "fenxianglonggu", "fengxianglieding_ske_json", "fengxianglieding_tex_json", "fengxianglieding_tex_png", duixiang); //动作名称，骨架名称，资源1，资源2，资源3，作用对象;
            this.piaoxuewenzi("无法行动", "", duixiang, "F41809");
        }
        if (leixing == "huixue") {
            this.xianshidonghua("fengsuilonggan", "longganlonggu", "fengsuilonggan_ske_json", "fengsuilonggan_tex_json", "fengsuilonggan_tex_png", duixiang); //动作名称，骨架名称，资源1，资源2，资源3，作用对象;
            this.piaoxuewenzi("耐心(凤)", "+" + shuzhi, duixiang, "42F409");
        }
        if (leixing == "jiankang") {
            this.xianshidonghua("ganzhifeilong", "feilonglonggu", "ganzhifeilong_ske_json", "ganzhifeilong_tex_json", "ganzhifeilong_tex_png", duixiang); //动作名称，骨架名称，资源1，资源2，资源3，作用对象;
            this.piaoxuewenzi("四抗", "-" + shuzhi, duixiang, "F41809");
        }
        if (leixing == "huiling") {
            this.xianshidonghua("shanzhenghaiwei", "shanzhenlonggu", "shanzhenhaiwei_ske_json", "shanzhenhaiwei_tex_json", "shanzhenhaiwei_tex_png", duixiang); //动作名称，骨架名称，资源1，资源2，资源3，作用对象;
            this.piaoxuewenzi("配料", "+" + shuzhi, duixiang, "42F409");
        }
        if (leixing == "jiangongji") {
            this.xianshidonghua("yuweiwuqiong", "yuweilonggu", "yuweiwuqiong_ske_json", "yuweiwuqiong_tex_json", "yuweiwuqiong_tex_png", duixiang); //动作名称，骨架名称，资源1，资源2，资源3，作用对象;
            this.piaoxuewenzi("输出", "-" + shuzhi, duixiang, "F41809");
        }
        if (leixing == "du") {
            this.xianshidonghua("zhenyuweiwuqiong", "dulonggu", "wuweiwuqiongzhen_ske_json", "wuweiwuqiongzhen_tex_json", "wuweiwuqiongzhen_tex_png", duixiang); //动作名称，骨架名称，资源1，资源2，资源3，作用对象;
            this.piaoxuewenzi("耐心", "-" + shuzhi, duixiang, "F41809");
        }
        if (leixing == "jiafang") {
            this.xianshidonghua("bazhenyushi", "bazhenyushilonggu", "bazhenyushi_ske_json", "bazhenyushi_tex_json", "bazhenyushi_tex_png", duixiang); //动作名称，骨架名称，资源1，资源2，资源3，作用对象;
            this.piaoxuewenzi("意志", "+" + shuzhi, duixiang, "42F409");
        }
        if (leixing == "jiasu") {
            this.xianshidonghua("haicuojiangyao", "jiangyaolonggu", "haicuojiangyao_ske_json", "haicuojiangyao_tex_json", "haicuojiangyao_tex_png", duixiang); //动作名称，骨架名称，资源1，资源2，资源3，作用对象;
            this.piaoxuewenzi("兴致", "+" + shuzhi, duixiang, "42F409");
        }
        if (leixing == "zijijianxue") {
            this.piaoxuewenzi("耐心", "-" + shuzhi, duixiang, "F41809");
        }
        if (leixing == "zhuiji") {
            this.xianshidonghua("zhuiji", "zhuijilonggu", "zhuiji_ske_json", "zhuiji_tex_json", "zhuiji_tex_png", duixiang); //动作名称，骨架名称，资源1，资源2，资源3，作用对象;
        }
        if (leixing == "lianji") {
            this.xianshidonghua("huiwei", "huiweilonggu", "huiwei_ske_json", "huiwei_tex_json", "huiwei_tex_png", duixiang); //动作名称，骨架名称，资源1，资源2，资源3，作用对象;
        }
    };
    //飘血文字显示
    Pvpzhandoujiemian.prototype.piaoxuewenzi = function (wenzi1, wenzi2, duixiang, yanse) {
        if (this.zhandoujiesu == false) {
            if (duixiang == 0) {
                this.zijipiaozi(wenzi1, wenzi2, yanse);
            }
            else if (duixiang == 3) {
                this.guai1piaozi(wenzi1, wenzi2, yanse);
            }
            else if (duixiang == 4) {
                this.guai2piaozi(wenzi1, wenzi2, yanse);
            }
            else if (duixiang == 5) {
                this.guai3piaozi(wenzi1, wenzi2, yanse);
            }
            else if (duixiang == 1) {
                this.zijipiaozi1(wenzi1, wenzi2, yanse);
            }
            else if (duixiang == 2) {
                this.zijipiaozi2(wenzi1, wenzi2, yanse);
            }
        }
    };
    //自己瓢字
    Pvpzhandoujiemian.prototype.zijipiaozi = function (wenzi1, wenzi2, yanse) {
        var _this = this;
        var wenzixianshi = new Zhandoupiaozi();
        this.addChild(wenzixianshi);
        if (this.jinlaicishu1[0] == 1) {
            this.jinlaicishu1[0] = 0;
            wenzixianshi.x = this.zijizu_pvp.x + this.zijizu_pvp.width / 3 * 1;
            wenzixianshi.y = this.zijizu_pvp.y + this.zijizu_pvp.height;
            wenzixianshi.qianmianwenzi.text = wenzi1;
            wenzixianshi.qianmianwenzi0.text = wenzi2;
            wenzixianshi.qianmianwenzi0.textColor = yanse;
            egret.Tween.get(wenzixianshi).to({ y: this.zijizu_pvp.y }, 3000)
                .call(function () {
                _this.jinlaicishu1[0] = 1;
                if (_this.parent) {
                    _this.removeChild(wenzixianshi);
                }
            });
        }
        else if (this.jinlaicishu1[1] == 1) {
            this.jinlaicishu1[1] = 0;
            wenzixianshi.x = this.zijizu_pvp.x + this.zijizu_pvp.width / 3 * 1;
            wenzixianshi.y = this.zijizu_pvp.y + this.zijizu_pvp.height + wenzixianshi.height;
            wenzixianshi.qianmianwenzi.text = wenzi1;
            wenzixianshi.qianmianwenzi0.text = wenzi2;
            wenzixianshi.qianmianwenzi0.textColor = yanse;
            egret.Tween.get(wenzixianshi).to({ y: this.zijizu_pvp.y + wenzixianshi.height }, 3000)
                .call(function () {
                _this.jinlaicishu1[1] = 1;
                if (_this.parent) {
                    _this.removeChild(wenzixianshi);
                }
            });
        }
        else if (this.jinlaicishu1[2] == 1) {
            this.jinlaicishu1[2] = 0;
            wenzixianshi.x = this.zijizu_pvp.x + this.zijizu_pvp.width / 3 * 1;
            wenzixianshi.y = this.zijizu_pvp.y + this.zijizu_pvp.height + wenzixianshi.height * 2;
            wenzixianshi.qianmianwenzi.text = wenzi1;
            wenzixianshi.qianmianwenzi0.text = wenzi2;
            wenzixianshi.qianmianwenzi0.textColor = yanse;
            egret.Tween.get(wenzixianshi).to({ y: this.zijizu_pvp.y + wenzixianshi.height * 2 }, 3000)
                .call(function () {
                _this.jinlaicishu1[2] = 1;
                if (_this.parent) {
                    _this.removeChild(wenzixianshi);
                }
            });
        }
        else if (this.jinlaicishu1[3] == 1) {
            this.jinlaicishu1[3] = 0;
            wenzixianshi.x = this.zijizu_pvp.x + this.zijizu_pvp.width / 3 * 1;
            wenzixianshi.y = this.zijizu_pvp.y + this.zijizu_pvp.height + wenzixianshi.height * 3;
            wenzixianshi.qianmianwenzi.text = wenzi1;
            wenzixianshi.qianmianwenzi0.text = wenzi2;
            wenzixianshi.qianmianwenzi0.textColor = yanse;
            egret.Tween.get(wenzixianshi).to({ y: this.zijizu_pvp.y + wenzixianshi.height * 3 }, 3000)
                .call(function () {
                _this.jinlaicishu1[3] = 1;
                if (_this.parent) {
                    _this.removeChild(wenzixianshi);
                }
            });
        }
        else if (this.jinlaicishu1[4] == 1) {
            this.jinlaicishu1[4] = 0;
            wenzixianshi.x = this.zijizu_pvp.x + this.zijizu_pvp.width / 3 * 1;
            wenzixianshi.y = this.zijizu_pvp.y + this.zijizu_pvp.height + wenzixianshi.height * 4;
            wenzixianshi.qianmianwenzi.text = wenzi1;
            wenzixianshi.qianmianwenzi0.text = wenzi2;
            wenzixianshi.qianmianwenzi0.textColor = yanse;
            egret.Tween.get(wenzixianshi).to({ y: this.zijizu_pvp.y + wenzixianshi.height * 4 }, 3000)
                .call(function () {
                _this.jinlaicishu1[4] = 1;
                if (_this.parent) {
                    _this.removeChild(wenzixianshi);
                }
            });
        }
        else if (this.jinlaicishu1[5] == 1) {
            this.jinlaicishu1[5] = 0;
            wenzixianshi.x = this.zijizu_pvp.x + this.zijizu_pvp.width / 3 * 1;
            wenzixianshi.y = this.zijizu_pvp.y + this.zijizu_pvp.height + wenzixianshi.height * 5;
            wenzixianshi.qianmianwenzi.text = wenzi1;
            wenzixianshi.qianmianwenzi0.text = wenzi2;
            wenzixianshi.qianmianwenzi0.textColor = yanse;
            egret.Tween.get(wenzixianshi).to({ y: this.zijizu_pvp.y + wenzixianshi.height * 5 }, 3000)
                .call(function () {
                _this.jinlaicishu1[5] = 1;
                if (_this.parent) {
                    _this.removeChild(wenzixianshi);
                }
            });
        }
        else if (this.jinlaicishu1[6] == 1) {
            this.jinlaicishu1[6] = 0;
            wenzixianshi.x = this.zijizu_pvp.x + this.zijizu_pvp.width / 3 * 1;
            wenzixianshi.y = this.zijizu_pvp.y + this.zijizu_pvp.height + wenzixianshi.height * 6;
            wenzixianshi.qianmianwenzi.text = wenzi1;
            wenzixianshi.qianmianwenzi0.text = wenzi2;
            wenzixianshi.qianmianwenzi0.textColor = yanse;
            egret.Tween.get(wenzixianshi).to({ y: this.zijizu_pvp.y + wenzixianshi.height * 6 }, 3000)
                .call(function () {
                _this.jinlaicishu1[6] = 1;
                if (_this.parent) {
                    _this.removeChild(wenzixianshi);
                }
            });
        }
        else if (this.jinlaicishu1[7] == 1) {
            this.jinlaicishu1[7] = 0;
            wenzixianshi.x = this.zijizu_pvp.x + this.zijizu_pvp.width / 3 * 1;
            wenzixianshi.y = this.zijizu_pvp.y + this.zijizu_pvp.height + wenzixianshi.height * 7;
            wenzixianshi.qianmianwenzi.text = wenzi1;
            wenzixianshi.qianmianwenzi0.text = wenzi2;
            wenzixianshi.qianmianwenzi0.textColor = yanse;
            egret.Tween.get(wenzixianshi).to({ y: this.zijizu_pvp.y + wenzixianshi.height * 7 }, 3000)
                .call(function () {
                _this.jinlaicishu1[7] = 1;
                if (_this.parent) {
                    _this.removeChild(wenzixianshi);
                }
            });
        }
        else if (this.jinlaicishu1[8] == 1) {
            this.jinlaicishu1[8] = 0;
            wenzixianshi.x = this.zijizu_pvp.x + this.zijizu_pvp.width / 3 * 1;
            wenzixianshi.y = this.zijizu_pvp.y + this.zijizu_pvp.height + wenzixianshi.height * 8;
            wenzixianshi.qianmianwenzi.text = wenzi1;
            wenzixianshi.qianmianwenzi0.text = wenzi2;
            wenzixianshi.qianmianwenzi0.textColor = yanse;
            egret.Tween.get(wenzixianshi).to({ y: this.zijizu_pvp.y + wenzixianshi.height * 8 }, 3000)
                .call(function () {
                _this.jinlaicishu1[8] = 1;
                if (_this.parent) {
                    _this.removeChild(wenzixianshi);
                }
            });
        }
        else if (this.jinlaicishu1[9] == 1) {
            this.jinlaicishu1[9] = 0;
            wenzixianshi.x = this.zijizu_pvp.x + this.zijizu_pvp.width / 3 * 1;
            wenzixianshi.y = this.zijizu_pvp.y + this.zijizu_pvp.height + wenzixianshi.height * 9;
            wenzixianshi.qianmianwenzi.text = wenzi1;
            wenzixianshi.qianmianwenzi0.text = wenzi2;
            wenzixianshi.qianmianwenzi0.textColor = yanse;
            egret.Tween.get(wenzixianshi).to({ y: this.zijizu_pvp.y + wenzixianshi.height * 9 }, 3000)
                .call(function () {
                _this.jinlaicishu1[9] = 1;
                if (_this.parent) {
                    _this.removeChild(wenzixianshi);
                }
            });
        }
        else if (this.jinlaicishu1[10] == 1) {
            this.jinlaicishu1[10] = 0;
            wenzixianshi.x = this.zijizu_pvp.x + this.zijizu_pvp.width / 3 * 1;
            wenzixianshi.y = this.zijizu_pvp.y + this.zijizu_pvp.height + wenzixianshi.height * 10;
            wenzixianshi.qianmianwenzi.text = wenzi1;
            wenzixianshi.qianmianwenzi0.text = wenzi2;
            wenzixianshi.qianmianwenzi0.textColor = yanse;
            egret.Tween.get(wenzixianshi).to({ y: this.zijizu_pvp.y + wenzixianshi.height * 10 }, 3000)
                .call(function () {
                _this.jinlaicishu1[10] = 1;
                if (_this.parent) {
                    _this.removeChild(wenzixianshi);
                }
            });
        }
        else if (this.jinlaicishu1[11] == 1) {
            this.jinlaicishu1[11] = 0;
            wenzixianshi.x = this.zijizu_pvp.x + this.zijizu_pvp.width / 3 * 1;
            wenzixianshi.y = this.zijizu_pvp.y + this.zijizu_pvp.height + wenzixianshi.height * 11;
            wenzixianshi.qianmianwenzi.text = wenzi1;
            wenzixianshi.qianmianwenzi0.text = wenzi2;
            wenzixianshi.qianmianwenzi0.textColor = yanse;
            egret.Tween.get(wenzixianshi).to({ y: this.zijizu_pvp.y + wenzixianshi.height * 11 }, 3000)
                .call(function () {
                _this.jinlaicishu1[11] = 1;
                if (_this.parent) {
                    _this.removeChild(wenzixianshi);
                }
            });
        }
        else if (this.jinlaicishu1[12] == 1) {
            this.jinlaicishu1[12] = 0;
            wenzixianshi.x = this.zijizu_pvp.x + this.zijizu_pvp.width / 3 * 1;
            wenzixianshi.y = this.zijizu_pvp.y + this.zijizu_pvp.height + wenzixianshi.height * 12;
            wenzixianshi.qianmianwenzi.text = wenzi1;
            wenzixianshi.qianmianwenzi0.text = wenzi2;
            wenzixianshi.qianmianwenzi0.textColor = yanse;
            egret.Tween.get(wenzixianshi).to({ y: this.zijizu_pvp.y + wenzixianshi.height * 12 }, 3000)
                .call(function () {
                _this.jinlaicishu1[12] = 1;
                if (_this.parent) {
                    _this.removeChild(wenzixianshi);
                }
            });
        }
        else if (this.jinlaicishu1[13] == 1) {
            this.jinlaicishu1[13] = 0;
            wenzixianshi.x = this.zijizu_pvp.x + this.zijizu_pvp.width / 3 * 1;
            wenzixianshi.y = this.zijizu_pvp.y + this.zijizu_pvp.height + wenzixianshi.height * 13;
            wenzixianshi.qianmianwenzi.text = wenzi1;
            wenzixianshi.qianmianwenzi0.text = wenzi2;
            wenzixianshi.qianmianwenzi0.textColor = yanse;
            egret.Tween.get(wenzixianshi).to({ y: this.zijizu_pvp.y + wenzixianshi.height * 13 }, 3000)
                .call(function () {
                _this.jinlaicishu1[13] = 1;
                if (_this.parent) {
                    _this.removeChild(wenzixianshi);
                }
            });
        }
        else if (this.jinlaicishu1[14] == 1) {
            this.jinlaicishu1[14] = 0;
            wenzixianshi.x = this.zijizu_pvp.x + this.zijizu_pvp.width / 3 * 1;
            wenzixianshi.y = this.zijizu_pvp.y + this.zijizu_pvp.height + wenzixianshi.height * 14;
            wenzixianshi.qianmianwenzi.text = wenzi1;
            wenzixianshi.qianmianwenzi0.text = wenzi2;
            wenzixianshi.qianmianwenzi0.textColor = yanse;
            egret.Tween.get(wenzixianshi).to({ y: this.zijizu_pvp.y + wenzixianshi.height * 14 }, 3000)
                .call(function () {
                _this.jinlaicishu1[14] = 1;
                if (_this.parent) {
                    _this.removeChild(wenzixianshi);
                }
            });
        }
    };
    //怪2瓢字
    Pvpzhandoujiemian.prototype.guai1piaozi = function (wenzi1, wenzi2, yanse) {
        var _this = this;
        var wenzixianshi = new Zhandoupiaozi();
        this.addChild(wenzixianshi);
        if (this.jinlaicishu2[0] == 1) {
            this.jinlaicishu2[0] = 0;
            wenzixianshi.x = this.diduizu.x + this.diduizu.width / 3 * 1;
            wenzixianshi.y = this.diduizu.y + this.diduizu.height;
            wenzixianshi.qianmianwenzi.text = wenzi1;
            wenzixianshi.qianmianwenzi0.text = wenzi2;
            wenzixianshi.qianmianwenzi0.textColor = yanse;
            egret.Tween.get(wenzixianshi).to({ y: this.diduizu.y }, 3000)
                .call(function () {
                _this.jinlaicishu2[0] = 1;
                if (_this.parent) {
                    _this.removeChild(wenzixianshi);
                }
            });
        }
        else if (this.jinlaicishu2[1] == 1) {
            this.jinlaicishu2[1] = 0;
            wenzixianshi.x = this.diduizu.x + this.diduizu.width / 3 * 1;
            wenzixianshi.y = this.diduizu.y + this.diduizu.height + wenzixianshi.height;
            wenzixianshi.qianmianwenzi.text = wenzi1;
            wenzixianshi.qianmianwenzi0.text = wenzi2;
            wenzixianshi.qianmianwenzi0.textColor = yanse;
            egret.Tween.get(wenzixianshi).to({ y: this.diduizu.y + wenzixianshi.height }, 3000)
                .call(function () {
                _this.jinlaicishu2[1] = 1;
                if (_this.parent) {
                    _this.removeChild(wenzixianshi);
                }
            });
        }
        else if (this.jinlaicishu2[2] == 1) {
            this.jinlaicishu2[2] = 0;
            wenzixianshi.x = this.diduizu.x + this.diduizu.width / 3 * 1;
            wenzixianshi.y = this.diduizu.y + this.diduizu.height + wenzixianshi.height * 2;
            wenzixianshi.qianmianwenzi.text = wenzi1;
            wenzixianshi.qianmianwenzi0.text = wenzi2;
            wenzixianshi.qianmianwenzi0.textColor = yanse;
            egret.Tween.get(wenzixianshi).to({ y: this.diduizu.y + wenzixianshi.height * 2 }, 3000)
                .call(function () {
                _this.jinlaicishu2[2] = 1;
                if (_this.parent) {
                    _this.removeChild(wenzixianshi);
                }
            });
        }
        else if (this.jinlaicishu2[3] == 1) {
            this.jinlaicishu2[3] = 0;
            wenzixianshi.x = this.diduizu.x + this.diduizu.width / 3 * 1;
            wenzixianshi.y = this.diduizu.y + this.diduizu.height + wenzixianshi.height * 3;
            wenzixianshi.qianmianwenzi.text = wenzi1;
            wenzixianshi.qianmianwenzi0.text = wenzi2;
            wenzixianshi.qianmianwenzi0.textColor = yanse;
            egret.Tween.get(wenzixianshi).to({ y: this.diduizu.y + wenzixianshi.height * 3 }, 3000)
                .call(function () {
                _this.jinlaicishu2[3] = 1;
                if (_this.parent) {
                    _this.removeChild(wenzixianshi);
                }
            });
        }
        else if (this.jinlaicishu2[4] == 1) {
            this.jinlaicishu2[4] = 0;
            wenzixianshi.x = this.diduizu.x + this.diduizu.width / 3 * 1;
            wenzixianshi.y = this.diduizu.y + this.diduizu.height + wenzixianshi.height * 4;
            wenzixianshi.qianmianwenzi.text = wenzi1;
            wenzixianshi.qianmianwenzi0.text = wenzi2;
            wenzixianshi.qianmianwenzi0.textColor = yanse;
            egret.Tween.get(wenzixianshi).to({ y: this.diduizu.y + wenzixianshi.height * 4 }, 3000)
                .call(function () {
                _this.jinlaicishu2[4] = 1;
                if (_this.parent) {
                    _this.removeChild(wenzixianshi);
                }
            });
        }
        else if (this.jinlaicishu2[5] == 1) {
            this.jinlaicishu2[5] = 0;
            wenzixianshi.x = this.diduizu.x + this.diduizu.width / 3 * 1;
            wenzixianshi.y = this.diduizu.y + this.diduizu.height + wenzixianshi.height * 5;
            wenzixianshi.qianmianwenzi.text = wenzi1;
            wenzixianshi.qianmianwenzi0.text = wenzi2;
            wenzixianshi.qianmianwenzi0.textColor = yanse;
            egret.Tween.get(wenzixianshi).to({ y: this.diduizu.y + wenzixianshi.height * 5 }, 3000)
                .call(function () {
                _this.jinlaicishu2[5] = 1;
                if (_this.parent) {
                    _this.removeChild(wenzixianshi);
                }
            });
        }
        else if (this.jinlaicishu2[6] == 1) {
            this.jinlaicishu2[6] = 0;
            wenzixianshi.x = this.diduizu.x + this.diduizu.width / 3 * 1;
            wenzixianshi.y = this.diduizu.y + this.diduizu.height + wenzixianshi.height * 6;
            wenzixianshi.qianmianwenzi.text = wenzi1;
            wenzixianshi.qianmianwenzi0.text = wenzi2;
            wenzixianshi.qianmianwenzi0.textColor = yanse;
            egret.Tween.get(wenzixianshi).to({ y: this.diduizu.y + wenzixianshi.height * 6 }, 3000)
                .call(function () {
                _this.jinlaicishu2[6] = 1;
                if (_this.parent) {
                    _this.removeChild(wenzixianshi);
                }
            });
        }
        else if (this.jinlaicishu2[7] == 1) {
            this.jinlaicishu2[7] = 0;
            wenzixianshi.x = this.diduizu.x + this.diduizu.width / 3 * 1;
            wenzixianshi.y = this.diduizu.y + this.diduizu.height + wenzixianshi.height * 7;
            wenzixianshi.qianmianwenzi.text = wenzi1;
            wenzixianshi.qianmianwenzi0.text = wenzi2;
            wenzixianshi.qianmianwenzi0.textColor = yanse;
            egret.Tween.get(wenzixianshi).to({ y: this.diduizu.y + wenzixianshi.height * 7 }, 3000)
                .call(function () {
                _this.jinlaicishu2[7] = 1;
                if (_this.parent) {
                    _this.removeChild(wenzixianshi);
                }
            });
        }
        else if (this.jinlaicishu2[8] == 1) {
            this.jinlaicishu2[8] = 0;
            wenzixianshi.x = this.diduizu.x + this.diduizu.width / 3 * 1;
            wenzixianshi.y = this.diduizu.y + this.diduizu.height + wenzixianshi.height * 8;
            wenzixianshi.qianmianwenzi.text = wenzi1;
            wenzixianshi.qianmianwenzi0.text = wenzi2;
            wenzixianshi.qianmianwenzi0.textColor = yanse;
            egret.Tween.get(wenzixianshi).to({ y: this.diduizu.y + wenzixianshi.height * 8 }, 3000)
                .call(function () {
                _this.jinlaicishu2[8] = 1;
                if (_this.parent) {
                    _this.removeChild(wenzixianshi);
                }
            });
        }
        else if (this.jinlaicishu2[9] == 1) {
            this.jinlaicishu2[9] = 0;
            wenzixianshi.x = this.diduizu.x + this.diduizu.width / 3 * 1;
            wenzixianshi.y = this.diduizu.y + this.diduizu.height + wenzixianshi.height * 9;
            wenzixianshi.qianmianwenzi.text = wenzi1;
            wenzixianshi.qianmianwenzi0.text = wenzi2;
            wenzixianshi.qianmianwenzi0.textColor = yanse;
            egret.Tween.get(wenzixianshi).to({ y: this.diduizu.y + wenzixianshi.height * 9 }, 3000)
                .call(function () {
                _this.jinlaicishu2[9] = 1;
                if (_this.parent) {
                    _this.removeChild(wenzixianshi);
                }
            });
        }
        else if (this.jinlaicishu2[10] == 1) {
            this.jinlaicishu2[10] = 0;
            wenzixianshi.x = this.diduizu.x + this.diduizu.width / 3 * 1;
            wenzixianshi.y = this.diduizu.y + this.diduizu.height + wenzixianshi.height * 10;
            wenzixianshi.qianmianwenzi.text = wenzi1;
            wenzixianshi.qianmianwenzi0.text = wenzi2;
            wenzixianshi.qianmianwenzi0.textColor = yanse;
            egret.Tween.get(wenzixianshi).to({ y: this.diduizu.y + wenzixianshi.height * 10 }, 3000)
                .call(function () {
                _this.jinlaicishu2[10] = 1;
                if (_this.parent) {
                    _this.removeChild(wenzixianshi);
                }
            });
        }
        else if (this.jinlaicishu2[11] == 1) {
            this.jinlaicishu2[11] = 0;
            wenzixianshi.x = this.diduizu.x + this.diduizu.width / 3 * 1;
            wenzixianshi.y = this.diduizu.y + this.diduizu.height + wenzixianshi.height * 11;
            wenzixianshi.qianmianwenzi.text = wenzi1;
            wenzixianshi.qianmianwenzi0.text = wenzi2;
            wenzixianshi.qianmianwenzi0.textColor = yanse;
            egret.Tween.get(wenzixianshi).to({ y: this.diduizu.y + wenzixianshi.height * 11 }, 3000)
                .call(function () {
                _this.jinlaicishu2[11] = 1;
                if (_this.parent) {
                    _this.removeChild(wenzixianshi);
                }
            });
        }
        else if (this.jinlaicishu2[12] == 1) {
            this.jinlaicishu2[12] = 0;
            wenzixianshi.x = this.diduizu.x + this.diduizu.width / 3 * 1;
            wenzixianshi.y = this.diduizu.y + this.diduizu.height + wenzixianshi.height * 12;
            wenzixianshi.qianmianwenzi.text = wenzi1;
            wenzixianshi.qianmianwenzi0.text = wenzi2;
            wenzixianshi.qianmianwenzi0.textColor = yanse;
            egret.Tween.get(wenzixianshi).to({ y: this.diduizu.y + wenzixianshi.height * 12 }, 3000)
                .call(function () {
                _this.jinlaicishu2[12] = 1;
                if (_this.parent) {
                    _this.removeChild(wenzixianshi);
                }
            });
        }
        else if (this.jinlaicishu2[13] == 1) {
            this.jinlaicishu2[13] = 0;
            wenzixianshi.x = this.diduizu.x + this.diduizu.width / 3 * 1;
            wenzixianshi.y = this.diduizu.y + this.diduizu.height + wenzixianshi.height * 13;
            wenzixianshi.qianmianwenzi.text = wenzi1;
            wenzixianshi.qianmianwenzi0.text = wenzi2;
            wenzixianshi.qianmianwenzi0.textColor = yanse;
            egret.Tween.get(wenzixianshi).to({ y: this.diduizu.y + wenzixianshi.height * 13 }, 3000)
                .call(function () {
                _this.jinlaicishu2[13] = 1;
                if (_this.parent) {
                    _this.removeChild(wenzixianshi);
                }
            });
        }
        else if (this.jinlaicishu2[14] == 1) {
            this.jinlaicishu2[14] = 0;
            wenzixianshi.x = this.diduizu.x + this.diduizu.width / 3 * 1;
            wenzixianshi.y = this.diduizu.y + this.diduizu.height + wenzixianshi.height * 14;
            wenzixianshi.qianmianwenzi.text = wenzi1;
            wenzixianshi.qianmianwenzi0.text = wenzi2;
            wenzixianshi.qianmianwenzi0.textColor = yanse;
            egret.Tween.get(wenzixianshi).to({ y: this.diduizu.y + wenzixianshi.height * 14 }, 3000)
                .call(function () {
                _this.jinlaicishu2[14] = 1;
                if (_this.parent) {
                    _this.removeChild(wenzixianshi);
                }
            });
        }
    };
    //怪1瓢字
    Pvpzhandoujiemian.prototype.guai2piaozi = function (wenzi1, wenzi2, yanse) {
        var _this = this;
        var wenzixianshi = new Zhandoupiaozi();
        this.addChild(wenzixianshi);
        if (this.jinlaicishu3[0] == 1) {
            this.jinlaicishu3[0] = 0;
            wenzixianshi.x = this.fuzhuzu1.x + this.fuzhuzu1.width / 3 * 1;
            wenzixianshi.y = this.fuzhuzu1.y + this.fuzhuzu1.height;
            wenzixianshi.qianmianwenzi.text = wenzi1;
            wenzixianshi.qianmianwenzi0.text = wenzi2;
            wenzixianshi.qianmianwenzi0.textColor = yanse;
            egret.Tween.get(wenzixianshi).to({ y: this.fuzhuzu1.y }, 3000)
                .call(function () {
                _this.jinlaicishu3[0] = 1;
                if (_this.parent) {
                    _this.removeChild(wenzixianshi);
                }
            });
        }
        else if (this.jinlaicishu3[1] == 1) {
            this.jinlaicishu3[1] = 0;
            wenzixianshi.x = this.fuzhuzu1.x + this.fuzhuzu1.width / 3 * 1;
            wenzixianshi.y = this.fuzhuzu1.y + this.fuzhuzu1.height + wenzixianshi.height;
            wenzixianshi.qianmianwenzi.text = wenzi1;
            wenzixianshi.qianmianwenzi0.text = wenzi2;
            wenzixianshi.qianmianwenzi0.textColor = yanse;
            egret.Tween.get(wenzixianshi).to({ y: this.fuzhuzu1.y + wenzixianshi.height }, 3000)
                .call(function () {
                _this.jinlaicishu3[1] = 1;
                if (_this.parent) {
                    _this.removeChild(wenzixianshi);
                }
            });
        }
        else if (this.jinlaicishu3[2] == 1) {
            this.jinlaicishu3[2] = 0;
            wenzixianshi.x = this.fuzhuzu1.x + this.fuzhuzu1.width / 3 * 1;
            wenzixianshi.y = this.fuzhuzu1.y + this.fuzhuzu1.height + wenzixianshi.height * 2;
            wenzixianshi.qianmianwenzi.text = wenzi1;
            wenzixianshi.qianmianwenzi0.text = wenzi2;
            wenzixianshi.qianmianwenzi0.textColor = yanse;
            egret.Tween.get(wenzixianshi).to({ y: this.fuzhuzu1.y + wenzixianshi.height * 2 }, 3000)
                .call(function () {
                _this.jinlaicishu3[2] = 1;
                if (_this.parent) {
                    _this.removeChild(wenzixianshi);
                }
            });
        }
        else if (this.jinlaicishu3[3] == 1) {
            this.jinlaicishu3[3] = 0;
            wenzixianshi.x = this.fuzhuzu1.x + this.fuzhuzu1.width / 3 * 1;
            wenzixianshi.y = this.fuzhuzu1.y + this.fuzhuzu1.height + wenzixianshi.height * 3;
            wenzixianshi.qianmianwenzi.text = wenzi1;
            wenzixianshi.qianmianwenzi0.text = wenzi2;
            wenzixianshi.qianmianwenzi0.textColor = yanse;
            egret.Tween.get(wenzixianshi).to({ y: this.fuzhuzu1.y + wenzixianshi.height * 3 }, 3000)
                .call(function () {
                _this.jinlaicishu3[3] = 1;
                if (_this.parent) {
                    _this.removeChild(wenzixianshi);
                }
            });
        }
        else if (this.jinlaicishu3[4] == 1) {
            this.jinlaicishu3[4] = 0;
            wenzixianshi.x = this.fuzhuzu1.x + this.fuzhuzu1.width / 3 * 1;
            wenzixianshi.y = this.fuzhuzu1.y + this.fuzhuzu1.height + wenzixianshi.height * 4;
            wenzixianshi.qianmianwenzi.text = wenzi1;
            wenzixianshi.qianmianwenzi0.text = wenzi2;
            wenzixianshi.qianmianwenzi0.textColor = yanse;
            egret.Tween.get(wenzixianshi).to({ y: this.fuzhuzu1.y + wenzixianshi.height * 4 }, 3000)
                .call(function () {
                _this.jinlaicishu3[4] = 1;
                if (_this.parent) {
                    _this.removeChild(wenzixianshi);
                }
            });
        }
        else if (this.jinlaicishu3[5] == 1) {
            this.jinlaicishu3[5] = 0;
            wenzixianshi.x = this.fuzhuzu1.x + this.fuzhuzu1.width / 3 * 1;
            wenzixianshi.y = this.fuzhuzu1.y + this.fuzhuzu1.height + wenzixianshi.height * 5;
            wenzixianshi.qianmianwenzi.text = wenzi1;
            wenzixianshi.qianmianwenzi0.text = wenzi2;
            wenzixianshi.qianmianwenzi0.textColor = yanse;
            egret.Tween.get(wenzixianshi).to({ y: this.fuzhuzu1.y + wenzixianshi.height * 5 }, 3000)
                .call(function () {
                _this.jinlaicishu3[5] = 1;
                if (_this.parent) {
                    _this.removeChild(wenzixianshi);
                }
            });
        }
        else if (this.jinlaicishu3[6] == 1) {
            this.jinlaicishu3[6] = 0;
            wenzixianshi.x = this.fuzhuzu1.x + this.fuzhuzu1.width / 3 * 1;
            wenzixianshi.y = this.fuzhuzu1.y + this.fuzhuzu1.height + wenzixianshi.height * 6;
            wenzixianshi.qianmianwenzi.text = wenzi1;
            wenzixianshi.qianmianwenzi0.text = wenzi2;
            wenzixianshi.qianmianwenzi0.textColor = yanse;
            egret.Tween.get(wenzixianshi).to({ y: this.fuzhuzu1.y + wenzixianshi.height * 6 }, 3000)
                .call(function () {
                _this.jinlaicishu3[6] = 1;
                if (_this.parent) {
                    _this.removeChild(wenzixianshi);
                }
            });
        }
        else if (this.jinlaicishu3[7] == 1) {
            this.jinlaicishu3[7] = 0;
            wenzixianshi.x = this.fuzhuzu1.x + this.fuzhuzu1.width / 3 * 1;
            wenzixianshi.y = this.fuzhuzu1.y + this.fuzhuzu1.height + wenzixianshi.height * 7;
            wenzixianshi.qianmianwenzi.text = wenzi1;
            wenzixianshi.qianmianwenzi0.text = wenzi2;
            wenzixianshi.qianmianwenzi0.textColor = yanse;
            egret.Tween.get(wenzixianshi).to({ y: this.fuzhuzu1.y + wenzixianshi.height * 7 }, 3000)
                .call(function () {
                _this.jinlaicishu3[7] = 1;
                if (_this.parent) {
                    _this.removeChild(wenzixianshi);
                }
            });
        }
        else if (this.jinlaicishu3[8] == 1) {
            this.jinlaicishu3[8] = 0;
            wenzixianshi.x = this.fuzhuzu1.x + this.fuzhuzu1.width / 3 * 1;
            wenzixianshi.y = this.fuzhuzu1.y + this.fuzhuzu1.height + wenzixianshi.height * 8;
            wenzixianshi.qianmianwenzi.text = wenzi1;
            wenzixianshi.qianmianwenzi0.text = wenzi2;
            wenzixianshi.qianmianwenzi0.textColor = yanse;
            egret.Tween.get(wenzixianshi).to({ y: this.fuzhuzu1.y + wenzixianshi.height * 8 }, 3000)
                .call(function () {
                _this.jinlaicishu3[8] = 1;
                if (_this.parent) {
                    _this.removeChild(wenzixianshi);
                }
            });
        }
        else if (this.jinlaicishu3[9] == 1) {
            this.jinlaicishu3[9] = 0;
            wenzixianshi.x = this.fuzhuzu1.x + this.fuzhuzu1.width / 3 * 1;
            wenzixianshi.y = this.fuzhuzu1.y + this.fuzhuzu1.height + wenzixianshi.height * 9;
            wenzixianshi.qianmianwenzi.text = wenzi1;
            wenzixianshi.qianmianwenzi0.text = wenzi2;
            wenzixianshi.qianmianwenzi0.textColor = yanse;
            egret.Tween.get(wenzixianshi).to({ y: this.fuzhuzu1.y + wenzixianshi.height * 9 }, 3000)
                .call(function () {
                _this.jinlaicishu3[9] = 1;
                if (_this.parent) {
                    _this.removeChild(wenzixianshi);
                }
            });
        }
        else if (this.jinlaicishu3[10] == 1) {
            this.jinlaicishu3[10] = 0;
            wenzixianshi.x = this.fuzhuzu1.x + this.fuzhuzu1.width / 3 * 1;
            wenzixianshi.y = this.fuzhuzu1.y + this.fuzhuzu1.height + wenzixianshi.height * 10;
            wenzixianshi.qianmianwenzi.text = wenzi1;
            wenzixianshi.qianmianwenzi0.text = wenzi2;
            wenzixianshi.qianmianwenzi0.textColor = yanse;
            egret.Tween.get(wenzixianshi).to({ y: this.fuzhuzu1.y + wenzixianshi.height * 10 }, 3000)
                .call(function () {
                _this.jinlaicishu3[10] = 1;
                if (_this.parent) {
                    _this.removeChild(wenzixianshi);
                }
            });
        }
        else if (this.jinlaicishu3[11] == 1) {
            this.jinlaicishu3[11] = 0;
            wenzixianshi.x = this.fuzhuzu1.x + this.fuzhuzu1.width / 3 * 1;
            wenzixianshi.y = this.fuzhuzu1.y + this.fuzhuzu1.height + wenzixianshi.height * 11;
            wenzixianshi.qianmianwenzi.text = wenzi1;
            wenzixianshi.qianmianwenzi0.text = wenzi2;
            wenzixianshi.qianmianwenzi0.textColor = yanse;
            egret.Tween.get(wenzixianshi).to({ y: this.fuzhuzu1.y + wenzixianshi.height * 11 }, 3000)
                .call(function () {
                _this.jinlaicishu3[11] = 1;
                if (_this.parent) {
                    _this.removeChild(wenzixianshi);
                }
            });
        }
        else if (this.jinlaicishu3[12] == 1) {
            this.jinlaicishu3[12] = 0;
            wenzixianshi.x = this.fuzhuzu1.x + this.fuzhuzu1.width / 3 * 1;
            wenzixianshi.y = this.fuzhuzu1.y + this.fuzhuzu1.height + wenzixianshi.height * 12;
            wenzixianshi.qianmianwenzi.text = wenzi1;
            wenzixianshi.qianmianwenzi0.text = wenzi2;
            wenzixianshi.qianmianwenzi0.textColor = yanse;
            egret.Tween.get(wenzixianshi).to({ y: this.fuzhuzu1.y + wenzixianshi.height * 12 }, 3000)
                .call(function () {
                _this.jinlaicishu3[12] = 1;
                if (_this.parent) {
                    _this.removeChild(wenzixianshi);
                }
            });
        }
        else if (this.jinlaicishu3[13] == 1) {
            this.jinlaicishu3[13] = 0;
            wenzixianshi.x = this.fuzhuzu1.x + this.fuzhuzu1.width / 3 * 1;
            wenzixianshi.y = this.fuzhuzu1.y + this.fuzhuzu1.height + wenzixianshi.height * 13;
            wenzixianshi.qianmianwenzi.text = wenzi1;
            wenzixianshi.qianmianwenzi0.text = wenzi2;
            wenzixianshi.qianmianwenzi0.textColor = yanse;
            egret.Tween.get(wenzixianshi).to({ y: this.fuzhuzu1.y + wenzixianshi.height * 13 }, 3000)
                .call(function () {
                _this.jinlaicishu3[13] = 1;
                if (_this.parent) {
                    _this.removeChild(wenzixianshi);
                }
            });
        }
        else if (this.jinlaicishu3[14] == 1) {
            this.jinlaicishu3[14] = 0;
            wenzixianshi.x = this.fuzhuzu1.x + this.fuzhuzu1.width / 3 * 1;
            wenzixianshi.y = this.fuzhuzu1.y + this.fuzhuzu1.height + wenzixianshi.height * 14;
            wenzixianshi.qianmianwenzi.text = wenzi1;
            wenzixianshi.qianmianwenzi0.text = wenzi2;
            wenzixianshi.qianmianwenzi0.textColor = yanse;
            egret.Tween.get(wenzixianshi).to({ y: this.fuzhuzu1.y + wenzixianshi.height * 14 }, 3000)
                .call(function () {
                _this.jinlaicishu3[14] = 1;
                if (_this.parent) {
                    _this.removeChild(wenzixianshi);
                }
            });
        }
    };
    //怪3瓢字
    Pvpzhandoujiemian.prototype.guai3piaozi = function (wenzi1, wenzi2, yanse) {
        var _this = this;
        var wenzixianshi = new Zhandoupiaozi();
        this.addChild(wenzixianshi);
        if (this.jinlaicishu4[0] == 1) {
            this.jinlaicishu4[0] = 0;
            wenzixianshi.x = this.fuzhuzu2.x + this.fuzhuzu2.width / 3 * 1;
            wenzixianshi.y = this.fuzhuzu2.y + this.fuzhuzu2.height;
            wenzixianshi.qianmianwenzi.text = wenzi1;
            wenzixianshi.qianmianwenzi0.text = wenzi2;
            wenzixianshi.qianmianwenzi0.textColor = yanse;
            egret.Tween.get(wenzixianshi).to({ y: this.fuzhuzu2.y }, 3000)
                .call(function () {
                _this.jinlaicishu4[0] = 1;
                if (_this.parent) {
                    _this.removeChild(wenzixianshi);
                }
            });
        }
        else if (this.jinlaicishu4[1] == 1) {
            this.jinlaicishu4[1] = 0;
            wenzixianshi.x = this.fuzhuzu2.x + this.fuzhuzu2.width / 3 * 1;
            wenzixianshi.y = this.fuzhuzu2.y + this.fuzhuzu2.height + wenzixianshi.height;
            wenzixianshi.qianmianwenzi.text = wenzi1;
            wenzixianshi.qianmianwenzi0.text = wenzi2;
            wenzixianshi.qianmianwenzi0.textColor = yanse;
            egret.Tween.get(wenzixianshi).to({ y: this.fuzhuzu2.y + wenzixianshi.height }, 3000)
                .call(function () {
                _this.jinlaicishu4[1] = 1;
                if (_this.parent) {
                    _this.removeChild(wenzixianshi);
                }
            });
        }
        else if (this.jinlaicishu4[2] == 1) {
            this.jinlaicishu4[2] = 0;
            wenzixianshi.x = this.fuzhuzu2.x + this.fuzhuzu2.width / 3 * 1;
            wenzixianshi.y = this.fuzhuzu2.y + this.fuzhuzu2.height + wenzixianshi.height * 2;
            wenzixianshi.qianmianwenzi.text = wenzi1;
            wenzixianshi.qianmianwenzi0.text = wenzi2;
            wenzixianshi.qianmianwenzi0.textColor = yanse;
            egret.Tween.get(wenzixianshi).to({ y: this.fuzhuzu2.y + wenzixianshi.height * 2 }, 3000)
                .call(function () {
                _this.jinlaicishu4[2] = 1;
                if (_this.parent) {
                    _this.removeChild(wenzixianshi);
                }
            });
        }
        else if (this.jinlaicishu4[3] == 1) {
            this.jinlaicishu4[3] = 0;
            wenzixianshi.x = this.fuzhuzu2.x + this.fuzhuzu2.width / 3 * 1;
            wenzixianshi.y = this.fuzhuzu2.y + this.fuzhuzu2.height + wenzixianshi.height * 3;
            wenzixianshi.qianmianwenzi.text = wenzi1;
            wenzixianshi.qianmianwenzi0.text = wenzi2;
            wenzixianshi.qianmianwenzi0.textColor = yanse;
            egret.Tween.get(wenzixianshi).to({ y: this.fuzhuzu2.y + wenzixianshi.height * 3 }, 3000)
                .call(function () {
                _this.jinlaicishu4[3] = 1;
                if (_this.parent) {
                    _this.removeChild(wenzixianshi);
                }
            });
        }
        else if (this.jinlaicishu4[4] == 1) {
            this.jinlaicishu4[4] = 0;
            wenzixianshi.x = this.fuzhuzu2.x + this.fuzhuzu2.width / 3 * 1;
            wenzixianshi.y = this.fuzhuzu2.y + this.fuzhuzu2.height + wenzixianshi.height * 4;
            wenzixianshi.qianmianwenzi.text = wenzi1;
            wenzixianshi.qianmianwenzi0.text = wenzi2;
            wenzixianshi.qianmianwenzi0.textColor = yanse;
            egret.Tween.get(wenzixianshi).to({ y: this.fuzhuzu2.y + wenzixianshi.height * 4 }, 3000)
                .call(function () {
                _this.jinlaicishu4[4] = 1;
                if (_this.parent) {
                    _this.removeChild(wenzixianshi);
                }
            });
        }
        else if (this.jinlaicishu4[5] == 1) {
            this.jinlaicishu4[5] = 0;
            wenzixianshi.x = this.fuzhuzu2.x + this.fuzhuzu2.width / 3 * 1;
            wenzixianshi.y = this.fuzhuzu2.y + this.fuzhuzu2.height + wenzixianshi.height * 5;
            wenzixianshi.qianmianwenzi.text = wenzi1;
            wenzixianshi.qianmianwenzi0.text = wenzi2;
            wenzixianshi.qianmianwenzi0.textColor = yanse;
            egret.Tween.get(wenzixianshi).to({ y: this.fuzhuzu2.y + wenzixianshi.height * 5 }, 3000)
                .call(function () {
                _this.jinlaicishu4[5] = 1;
                if (_this.parent) {
                    _this.removeChild(wenzixianshi);
                }
            });
        }
        else if (this.jinlaicishu4[6] == 1) {
            this.jinlaicishu4[6] = 0;
            wenzixianshi.x = this.fuzhuzu2.x + this.fuzhuzu2.width / 3 * 1;
            wenzixianshi.y = this.fuzhuzu2.y + this.fuzhuzu2.height + wenzixianshi.height * 6;
            wenzixianshi.qianmianwenzi.text = wenzi1;
            wenzixianshi.qianmianwenzi0.text = wenzi2;
            wenzixianshi.qianmianwenzi0.textColor = yanse;
            egret.Tween.get(wenzixianshi).to({ y: this.fuzhuzu2.y + wenzixianshi.height * 6 }, 3000)
                .call(function () {
                _this.jinlaicishu4[6] = 1;
                if (_this.parent) {
                    _this.removeChild(wenzixianshi);
                }
            });
        }
        else if (this.jinlaicishu4[7] == 1) {
            this.jinlaicishu4[7] = 0;
            wenzixianshi.x = this.fuzhuzu2.x + this.fuzhuzu2.width / 3 * 1;
            wenzixianshi.y = this.fuzhuzu2.y + this.fuzhuzu2.height + wenzixianshi.height * 7;
            wenzixianshi.qianmianwenzi.text = wenzi1;
            wenzixianshi.qianmianwenzi0.text = wenzi2;
            wenzixianshi.qianmianwenzi0.textColor = yanse;
            egret.Tween.get(wenzixianshi).to({ y: this.fuzhuzu2.y + wenzixianshi.height * 7 }, 3000)
                .call(function () {
                _this.jinlaicishu4[7] = 1;
                if (_this.parent) {
                    _this.removeChild(wenzixianshi);
                }
            });
        }
        else if (this.jinlaicishu4[8] == 1) {
            this.jinlaicishu4[8] = 0;
            wenzixianshi.x = this.fuzhuzu2.x + this.fuzhuzu2.width / 3 * 1;
            wenzixianshi.y = this.fuzhuzu2.y + this.fuzhuzu2.height + wenzixianshi.height * 8;
            wenzixianshi.qianmianwenzi.text = wenzi1;
            wenzixianshi.qianmianwenzi0.text = wenzi2;
            wenzixianshi.qianmianwenzi0.textColor = yanse;
            egret.Tween.get(wenzixianshi).to({ y: this.fuzhuzu2.y + wenzixianshi.height * 8 }, 3000)
                .call(function () {
                _this.jinlaicishu4[8] = 1;
                if (_this.parent) {
                    _this.removeChild(wenzixianshi);
                }
            });
        }
        else if (this.jinlaicishu4[9] == 1) {
            this.jinlaicishu4[9] = 0;
            wenzixianshi.x = this.fuzhuzu2.x + this.fuzhuzu2.width / 3 * 1;
            wenzixianshi.y = this.fuzhuzu2.y + this.fuzhuzu2.height + wenzixianshi.height * 9;
            wenzixianshi.qianmianwenzi.text = wenzi1;
            wenzixianshi.qianmianwenzi0.text = wenzi2;
            wenzixianshi.qianmianwenzi0.textColor = yanse;
            egret.Tween.get(wenzixianshi).to({ y: this.fuzhuzu2.y + wenzixianshi.height * 9 }, 3000)
                .call(function () {
                _this.jinlaicishu4[9] = 1;
                if (_this.parent) {
                    _this.removeChild(wenzixianshi);
                }
            });
        }
        else if (this.jinlaicishu4[10] == 1) {
            this.jinlaicishu4[10] = 0;
            wenzixianshi.x = this.fuzhuzu2.x + this.fuzhuzu2.width / 3 * 1;
            wenzixianshi.y = this.fuzhuzu2.y + this.fuzhuzu2.height + wenzixianshi.height * 10;
            wenzixianshi.qianmianwenzi.text = wenzi1;
            wenzixianshi.qianmianwenzi0.text = wenzi2;
            wenzixianshi.qianmianwenzi0.textColor = yanse;
            egret.Tween.get(wenzixianshi).to({ y: this.fuzhuzu2.y + wenzixianshi.height * 10 }, 3000)
                .call(function () {
                _this.jinlaicishu4[10] = 1;
                if (_this.parent) {
                    _this.removeChild(wenzixianshi);
                }
            });
        }
        else if (this.jinlaicishu4[11] == 1) {
            this.jinlaicishu4[11] = 0;
            wenzixianshi.x = this.fuzhuzu2.x + this.fuzhuzu2.width / 3 * 1;
            wenzixianshi.y = this.fuzhuzu2.y + this.fuzhuzu2.height + wenzixianshi.height * 11;
            wenzixianshi.qianmianwenzi.text = wenzi1;
            wenzixianshi.qianmianwenzi0.text = wenzi2;
            wenzixianshi.qianmianwenzi0.textColor = yanse;
            egret.Tween.get(wenzixianshi).to({ y: this.fuzhuzu2.y + wenzixianshi.height * 11 }, 3000)
                .call(function () {
                _this.jinlaicishu4[11] = 1;
                if (_this.parent) {
                    _this.removeChild(wenzixianshi);
                }
            });
        }
        else if (this.jinlaicishu4[12] == 1) {
            this.jinlaicishu4[12] = 0;
            wenzixianshi.x = this.fuzhuzu2.x + this.fuzhuzu2.width / 3 * 1;
            wenzixianshi.y = this.fuzhuzu2.y + this.fuzhuzu2.height + wenzixianshi.height * 12;
            wenzixianshi.qianmianwenzi.text = wenzi1;
            wenzixianshi.qianmianwenzi0.text = wenzi2;
            wenzixianshi.qianmianwenzi0.textColor = yanse;
            egret.Tween.get(wenzixianshi).to({ y: this.fuzhuzu2.y + wenzixianshi.height * 12 }, 3000)
                .call(function () {
                _this.jinlaicishu4[12] = 1;
                if (_this.parent) {
                    _this.removeChild(wenzixianshi);
                }
            });
        }
        else if (this.jinlaicishu4[13] == 1) {
            this.jinlaicishu4[13] = 0;
            wenzixianshi.x = this.fuzhuzu2.x + this.fuzhuzu2.width / 3 * 1;
            wenzixianshi.y = this.fuzhuzu2.y + this.fuzhuzu2.height + wenzixianshi.height * 13;
            wenzixianshi.qianmianwenzi.text = wenzi1;
            wenzixianshi.qianmianwenzi0.text = wenzi2;
            wenzixianshi.qianmianwenzi0.textColor = yanse;
            egret.Tween.get(wenzixianshi).to({ y: this.fuzhuzu2.y + wenzixianshi.height * 13 }, 3000)
                .call(function () {
                _this.jinlaicishu4[13] = 1;
                if (_this.parent) {
                    _this.removeChild(wenzixianshi);
                }
            });
        }
        else if (this.jinlaicishu4[14] == 1) {
            this.jinlaicishu4[14] = 0;
            wenzixianshi.x = this.fuzhuzu2.x + this.fuzhuzu2.width / 3 * 1;
            wenzixianshi.y = this.fuzhuzu2.y + this.fuzhuzu2.height + wenzixianshi.height * 14;
            wenzixianshi.qianmianwenzi.text = wenzi1;
            wenzixianshi.qianmianwenzi0.text = wenzi2;
            wenzixianshi.qianmianwenzi0.textColor = yanse;
            egret.Tween.get(wenzixianshi).to({ y: this.fuzhuzu2.y + wenzixianshi.height * 14 }, 3000)
                .call(function () {
                _this.jinlaicishu4[14] = 1;
                if (_this.parent) {
                    _this.removeChild(wenzixianshi);
                }
            });
        }
    };
    //怪3瓢字
    Pvpzhandoujiemian.prototype.zijipiaozi1 = function (wenzi1, wenzi2, yanse) {
        var _this = this;
        var wenzixianshi = new Zhandoupiaozi();
        this.addChild(wenzixianshi);
        if (this.jinlaicishu5[0] == 1) {
            this.jinlaicishu5[0] = 0;
            wenzixianshi.x = this.fuzhuzu.x + this.fuzhuzu.width / 3 * 1;
            wenzixianshi.y = this.fuzhuzu.y + this.fuzhuzu.height;
            wenzixianshi.qianmianwenzi.text = wenzi1;
            wenzixianshi.qianmianwenzi0.text = wenzi2;
            wenzixianshi.qianmianwenzi0.textColor = yanse;
            egret.Tween.get(wenzixianshi).to({ y: this.fuzhuzu.y }, 3000)
                .call(function () {
                _this.jinlaicishu5[0] = 1;
                if (_this.parent) {
                    _this.removeChild(wenzixianshi);
                }
            });
        }
        else if (this.jinlaicishu5[1] == 1) {
            this.jinlaicishu5[1] = 0;
            wenzixianshi.x = this.fuzhuzu.x + this.fuzhuzu.width / 3 * 1;
            wenzixianshi.y = this.fuzhuzu.y + this.fuzhuzu.height + wenzixianshi.height;
            wenzixianshi.qianmianwenzi.text = wenzi1;
            wenzixianshi.qianmianwenzi0.text = wenzi2;
            wenzixianshi.qianmianwenzi0.textColor = yanse;
            egret.Tween.get(wenzixianshi).to({ y: this.fuzhuzu.y + wenzixianshi.height }, 3000)
                .call(function () {
                _this.jinlaicishu5[1] = 1;
                if (_this.parent) {
                    _this.removeChild(wenzixianshi);
                }
            });
        }
        else if (this.jinlaicishu5[2] == 1) {
            this.jinlaicishu5[2] = 0;
            wenzixianshi.x = this.fuzhuzu.x + this.fuzhuzu.width / 3 * 1;
            wenzixianshi.y = this.fuzhuzu.y + this.fuzhuzu.height + wenzixianshi.height * 2;
            wenzixianshi.qianmianwenzi.text = wenzi1;
            wenzixianshi.qianmianwenzi0.text = wenzi2;
            wenzixianshi.qianmianwenzi0.textColor = yanse;
            egret.Tween.get(wenzixianshi).to({ y: this.fuzhuzu.y + wenzixianshi.height * 2 }, 3000)
                .call(function () {
                _this.jinlaicishu5[2] = 1;
                if (_this.parent) {
                    _this.removeChild(wenzixianshi);
                }
            });
        }
        else if (this.jinlaicishu5[3] == 1) {
            this.jinlaicishu5[3] = 0;
            wenzixianshi.x = this.fuzhuzu.x + this.fuzhuzu.width / 3 * 1;
            wenzixianshi.y = this.fuzhuzu.y + this.fuzhuzu.height + wenzixianshi.height * 3;
            wenzixianshi.qianmianwenzi.text = wenzi1;
            wenzixianshi.qianmianwenzi0.text = wenzi2;
            wenzixianshi.qianmianwenzi0.textColor = yanse;
            egret.Tween.get(wenzixianshi).to({ y: this.fuzhuzu.y + wenzixianshi.height * 3 }, 3000)
                .call(function () {
                _this.jinlaicishu5[3] = 1;
                if (_this.parent) {
                    _this.removeChild(wenzixianshi);
                }
            });
        }
        else if (this.jinlaicishu5[4] == 1) {
            this.jinlaicishu5[4] = 0;
            wenzixianshi.x = this.fuzhuzu.x + this.fuzhuzu.width / 3 * 1;
            wenzixianshi.y = this.fuzhuzu.y + this.fuzhuzu.height + wenzixianshi.height * 4;
            wenzixianshi.qianmianwenzi.text = wenzi1;
            wenzixianshi.qianmianwenzi0.text = wenzi2;
            wenzixianshi.qianmianwenzi0.textColor = yanse;
            egret.Tween.get(wenzixianshi).to({ y: this.fuzhuzu.y + wenzixianshi.height * 4 }, 3000)
                .call(function () {
                _this.jinlaicishu5[4] = 1;
                if (_this.parent) {
                    _this.removeChild(wenzixianshi);
                }
            });
        }
        else if (this.jinlaicishu5[5] == 1) {
            this.jinlaicishu5[5] = 0;
            wenzixianshi.x = this.fuzhuzu.x + this.fuzhuzu.width / 3 * 1;
            wenzixianshi.y = this.fuzhuzu.y + this.fuzhuzu.height + wenzixianshi.height * 5;
            wenzixianshi.qianmianwenzi.text = wenzi1;
            wenzixianshi.qianmianwenzi0.text = wenzi2;
            wenzixianshi.qianmianwenzi0.textColor = yanse;
            egret.Tween.get(wenzixianshi).to({ y: this.fuzhuzu.y + wenzixianshi.height * 5 }, 3000)
                .call(function () {
                _this.jinlaicishu5[5] = 1;
                if (_this.parent) {
                    _this.removeChild(wenzixianshi);
                }
            });
        }
        else if (this.jinlaicishu5[6] == 1) {
            this.jinlaicishu5[6] = 0;
            wenzixianshi.x = this.fuzhuzu.x + this.fuzhuzu.width / 3 * 1;
            wenzixianshi.y = this.fuzhuzu.y + this.fuzhuzu.height + wenzixianshi.height * 6;
            wenzixianshi.qianmianwenzi.text = wenzi1;
            wenzixianshi.qianmianwenzi0.text = wenzi2;
            wenzixianshi.qianmianwenzi0.textColor = yanse;
            egret.Tween.get(wenzixianshi).to({ y: this.fuzhuzu.y + wenzixianshi.height * 6 }, 3000)
                .call(function () {
                _this.jinlaicishu5[6] = 1;
                if (_this.parent) {
                    _this.removeChild(wenzixianshi);
                }
            });
        }
        else if (this.jinlaicishu5[7] == 1) {
            this.jinlaicishu5[7] = 0;
            wenzixianshi.x = this.fuzhuzu.x + this.fuzhuzu.width / 3 * 1;
            wenzixianshi.y = this.fuzhuzu.y + this.fuzhuzu.height + wenzixianshi.height * 7;
            wenzixianshi.qianmianwenzi.text = wenzi1;
            wenzixianshi.qianmianwenzi0.text = wenzi2;
            wenzixianshi.qianmianwenzi0.textColor = yanse;
            egret.Tween.get(wenzixianshi).to({ y: this.fuzhuzu.y + wenzixianshi.height * 7 }, 3000)
                .call(function () {
                _this.jinlaicishu5[7] = 1;
                if (_this.parent) {
                    _this.removeChild(wenzixianshi);
                }
            });
        }
        else if (this.jinlaicishu5[8] == 1) {
            this.jinlaicishu5[8] = 0;
            wenzixianshi.x = this.fuzhuzu.x + this.fuzhuzu.width / 3 * 1;
            wenzixianshi.y = this.fuzhuzu.y + this.fuzhuzu.height + wenzixianshi.height * 8;
            wenzixianshi.qianmianwenzi.text = wenzi1;
            wenzixianshi.qianmianwenzi0.text = wenzi2;
            wenzixianshi.qianmianwenzi0.textColor = yanse;
            egret.Tween.get(wenzixianshi).to({ y: this.fuzhuzu.y + wenzixianshi.height * 8 }, 3000)
                .call(function () {
                _this.jinlaicishu5[8] = 1;
                if (_this.parent) {
                    _this.removeChild(wenzixianshi);
                }
            });
        }
        else if (this.jinlaicishu5[9] == 1) {
            this.jinlaicishu5[9] = 0;
            wenzixianshi.x = this.fuzhuzu.x + this.fuzhuzu.width / 3 * 1;
            wenzixianshi.y = this.fuzhuzu.y + this.fuzhuzu.height + wenzixianshi.height * 9;
            wenzixianshi.qianmianwenzi.text = wenzi1;
            wenzixianshi.qianmianwenzi0.text = wenzi2;
            wenzixianshi.qianmianwenzi0.textColor = yanse;
            egret.Tween.get(wenzixianshi).to({ y: this.fuzhuzu.y + wenzixianshi.height * 9 }, 3000)
                .call(function () {
                _this.jinlaicishu5[9] = 1;
                if (_this.parent) {
                    _this.removeChild(wenzixianshi);
                }
            });
        }
        else if (this.jinlaicishu5[10] == 1) {
            this.jinlaicishu5[10] = 0;
            wenzixianshi.x = this.fuzhuzu.x + this.fuzhuzu.width / 3 * 1;
            wenzixianshi.y = this.fuzhuzu.y + this.fuzhuzu.height + wenzixianshi.height * 10;
            wenzixianshi.qianmianwenzi.text = wenzi1;
            wenzixianshi.qianmianwenzi0.text = wenzi2;
            wenzixianshi.qianmianwenzi0.textColor = yanse;
            egret.Tween.get(wenzixianshi).to({ y: this.fuzhuzu.y + wenzixianshi.height * 10 }, 3000)
                .call(function () {
                _this.jinlaicishu5[10] = 1;
                if (_this.parent) {
                    _this.removeChild(wenzixianshi);
                }
            });
        }
        else if (this.jinlaicishu5[11] == 1) {
            this.jinlaicishu5[11] = 0;
            wenzixianshi.x = this.fuzhuzu.x + this.fuzhuzu.width / 3 * 1;
            wenzixianshi.y = this.fuzhuzu.y + this.fuzhuzu.height + wenzixianshi.height * 11;
            wenzixianshi.qianmianwenzi.text = wenzi1;
            wenzixianshi.qianmianwenzi0.text = wenzi2;
            wenzixianshi.qianmianwenzi0.textColor = yanse;
            egret.Tween.get(wenzixianshi).to({ y: this.fuzhuzu.y + wenzixianshi.height * 11 }, 3000)
                .call(function () {
                _this.jinlaicishu5[11] = 1;
                if (_this.parent) {
                    _this.removeChild(wenzixianshi);
                }
            });
        }
        else if (this.jinlaicishu5[12] == 1) {
            this.jinlaicishu5[12] = 0;
            wenzixianshi.x = this.fuzhuzu.x + this.fuzhuzu.width / 3 * 1;
            wenzixianshi.y = this.fuzhuzu.y + this.fuzhuzu.height + wenzixianshi.height * 12;
            wenzixianshi.qianmianwenzi.text = wenzi1;
            wenzixianshi.qianmianwenzi0.text = wenzi2;
            wenzixianshi.qianmianwenzi0.textColor = yanse;
            egret.Tween.get(wenzixianshi).to({ y: this.fuzhuzu.y + wenzixianshi.height * 12 }, 3000)
                .call(function () {
                _this.jinlaicishu5[12] = 1;
                if (_this.parent) {
                    _this.removeChild(wenzixianshi);
                }
            });
        }
        else if (this.jinlaicishu5[13] == 1) {
            this.jinlaicishu5[13] = 0;
            wenzixianshi.x = this.fuzhuzu.x + this.fuzhuzu.width / 3 * 1;
            wenzixianshi.y = this.fuzhuzu.y + this.fuzhuzu.height + wenzixianshi.height * 13;
            wenzixianshi.qianmianwenzi.text = wenzi1;
            wenzixianshi.qianmianwenzi0.text = wenzi2;
            wenzixianshi.qianmianwenzi0.textColor = yanse;
            egret.Tween.get(wenzixianshi).to({ y: this.fuzhuzu.y + wenzixianshi.height * 13 }, 3000)
                .call(function () {
                _this.jinlaicishu5[13] = 1;
                if (_this.parent) {
                    _this.removeChild(wenzixianshi);
                }
            });
        }
        else if (this.jinlaicishu5[14] == 1) {
            this.jinlaicishu5[14] = 0;
            wenzixianshi.x = this.fuzhuzu.x + this.fuzhuzu.width / 3 * 1;
            wenzixianshi.y = this.fuzhuzu.y + this.fuzhuzu.height + wenzixianshi.height * 14;
            wenzixianshi.qianmianwenzi.text = wenzi1;
            wenzixianshi.qianmianwenzi0.text = wenzi2;
            wenzixianshi.qianmianwenzi0.textColor = yanse;
            egret.Tween.get(wenzixianshi).to({ y: this.fuzhuzu.y + wenzixianshi.height * 14 }, 3000)
                .call(function () {
                _this.jinlaicishu5[14] = 1;
                if (_this.parent) {
                    _this.removeChild(wenzixianshi);
                }
            });
        }
    };
    //怪3瓢字
    Pvpzhandoujiemian.prototype.zijipiaozi2 = function (wenzi1, wenzi2, yanse) {
        var _this = this;
        var wenzixianshi = new Zhandoupiaozi();
        this.addChild(wenzixianshi);
        if (this.jinlaicishu6[0] == 1) {
            this.jinlaicishu6[0] = 0;
            wenzixianshi.x = this.fuzhuzu0.x + this.fuzhuzu0.width / 3 * 1;
            wenzixianshi.y = this.fuzhuzu0.y + this.fuzhuzu0.height;
            wenzixianshi.qianmianwenzi.text = wenzi1;
            wenzixianshi.qianmianwenzi0.text = wenzi2;
            wenzixianshi.qianmianwenzi0.textColor = yanse;
            egret.Tween.get(wenzixianshi).to({ y: this.fuzhuzu0.y }, 3000)
                .call(function () {
                _this.jinlaicishu6[0] = 1;
                if (_this.parent) {
                    _this.removeChild(wenzixianshi);
                }
            });
        }
        else if (this.jinlaicishu6[1] == 1) {
            this.jinlaicishu6[1] = 0;
            wenzixianshi.x = this.fuzhuzu0.x + this.fuzhuzu0.width / 3 * 1;
            wenzixianshi.y = this.fuzhuzu0.y + this.fuzhuzu0.height + wenzixianshi.height;
            wenzixianshi.qianmianwenzi.text = wenzi1;
            wenzixianshi.qianmianwenzi0.text = wenzi2;
            wenzixianshi.qianmianwenzi0.textColor = yanse;
            egret.Tween.get(wenzixianshi).to({ y: this.fuzhuzu0.y + wenzixianshi.height }, 3000)
                .call(function () {
                _this.jinlaicishu6[1] = 1;
                if (_this.parent) {
                    _this.removeChild(wenzixianshi);
                }
            });
        }
        else if (this.jinlaicishu6[2] == 1) {
            this.jinlaicishu6[2] = 0;
            wenzixianshi.x = this.fuzhuzu0.x + this.fuzhuzu0.width / 3 * 1;
            wenzixianshi.y = this.fuzhuzu0.y + this.fuzhuzu0.height + wenzixianshi.height * 2;
            wenzixianshi.qianmianwenzi.text = wenzi1;
            wenzixianshi.qianmianwenzi0.text = wenzi2;
            wenzixianshi.qianmianwenzi0.textColor = yanse;
            egret.Tween.get(wenzixianshi).to({ y: this.fuzhuzu0.y + wenzixianshi.height * 2 }, 3000)
                .call(function () {
                _this.jinlaicishu6[2] = 1;
                if (_this.parent) {
                    _this.removeChild(wenzixianshi);
                }
            });
        }
        else if (this.jinlaicishu6[3] == 1) {
            this.jinlaicishu6[3] = 0;
            wenzixianshi.x = this.fuzhuzu0.x + this.fuzhuzu0.width / 3 * 1;
            wenzixianshi.y = this.fuzhuzu0.y + this.fuzhuzu0.height + wenzixianshi.height * 3;
            wenzixianshi.qianmianwenzi.text = wenzi1;
            wenzixianshi.qianmianwenzi0.text = wenzi2;
            wenzixianshi.qianmianwenzi0.textColor = yanse;
            egret.Tween.get(wenzixianshi).to({ y: this.fuzhuzu0.y + wenzixianshi.height * 3 }, 3000)
                .call(function () {
                _this.jinlaicishu6[3] = 1;
                if (_this.parent) {
                    _this.removeChild(wenzixianshi);
                }
            });
        }
        else if (this.jinlaicishu6[4] == 1) {
            this.jinlaicishu6[4] = 0;
            wenzixianshi.x = this.fuzhuzu0.x + this.fuzhuzu0.width / 3 * 1;
            wenzixianshi.y = this.fuzhuzu0.y + this.fuzhuzu0.height + wenzixianshi.height * 4;
            wenzixianshi.qianmianwenzi.text = wenzi1;
            wenzixianshi.qianmianwenzi0.text = wenzi2;
            wenzixianshi.qianmianwenzi0.textColor = yanse;
            egret.Tween.get(wenzixianshi).to({ y: this.fuzhuzu0.y + wenzixianshi.height * 4 }, 3000)
                .call(function () {
                _this.jinlaicishu6[4] = 1;
                if (_this.parent) {
                    _this.removeChild(wenzixianshi);
                }
            });
        }
        else if (this.jinlaicishu6[5] == 1) {
            this.jinlaicishu6[5] = 0;
            wenzixianshi.x = this.fuzhuzu0.x + this.fuzhuzu0.width / 3 * 1;
            wenzixianshi.y = this.fuzhuzu0.y + this.fuzhuzu0.height + wenzixianshi.height * 5;
            wenzixianshi.qianmianwenzi.text = wenzi1;
            wenzixianshi.qianmianwenzi0.text = wenzi2;
            wenzixianshi.qianmianwenzi0.textColor = yanse;
            egret.Tween.get(wenzixianshi).to({ y: this.fuzhuzu0.y + wenzixianshi.height * 5 }, 3000)
                .call(function () {
                _this.jinlaicishu6[5] = 1;
                if (_this.parent) {
                    _this.removeChild(wenzixianshi);
                }
            });
        }
        else if (this.jinlaicishu6[6] == 1) {
            this.jinlaicishu6[6] = 0;
            wenzixianshi.x = this.fuzhuzu0.x + this.fuzhuzu0.width / 3 * 1;
            wenzixianshi.y = this.fuzhuzu0.y + this.fuzhuzu0.height + wenzixianshi.height * 6;
            wenzixianshi.qianmianwenzi.text = wenzi1;
            wenzixianshi.qianmianwenzi0.text = wenzi2;
            wenzixianshi.qianmianwenzi0.textColor = yanse;
            egret.Tween.get(wenzixianshi).to({ y: this.fuzhuzu0.y + wenzixianshi.height * 6 }, 3000)
                .call(function () {
                _this.jinlaicishu6[6] = 1;
                if (_this.parent) {
                    _this.removeChild(wenzixianshi);
                }
            });
        }
        else if (this.jinlaicishu6[7] == 1) {
            this.jinlaicishu6[7] = 0;
            wenzixianshi.x = this.fuzhuzu0.x + this.fuzhuzu0.width / 3 * 1;
            wenzixianshi.y = this.fuzhuzu0.y + this.fuzhuzu0.height + wenzixianshi.height * 7;
            wenzixianshi.qianmianwenzi.text = wenzi1;
            wenzixianshi.qianmianwenzi0.text = wenzi2;
            wenzixianshi.qianmianwenzi0.textColor = yanse;
            egret.Tween.get(wenzixianshi).to({ y: this.fuzhuzu0.y + wenzixianshi.height * 7 }, 3000)
                .call(function () {
                _this.jinlaicishu6[7] = 1;
                if (_this.parent) {
                    _this.removeChild(wenzixianshi);
                }
            });
        }
        else if (this.jinlaicishu6[8] == 1) {
            this.jinlaicishu6[8] = 0;
            wenzixianshi.x = this.fuzhuzu0.x + this.fuzhuzu0.width / 3 * 1;
            wenzixianshi.y = this.fuzhuzu0.y + this.fuzhuzu0.height + wenzixianshi.height * 8;
            wenzixianshi.qianmianwenzi.text = wenzi1;
            wenzixianshi.qianmianwenzi0.text = wenzi2;
            wenzixianshi.qianmianwenzi0.textColor = yanse;
            egret.Tween.get(wenzixianshi).to({ y: this.fuzhuzu0.y + wenzixianshi.height * 8 }, 3000)
                .call(function () {
                _this.jinlaicishu6[8] = 1;
                if (_this.parent) {
                    _this.removeChild(wenzixianshi);
                }
            });
        }
        else if (this.jinlaicishu6[9] == 1) {
            this.jinlaicishu6[9] = 0;
            wenzixianshi.x = this.fuzhuzu0.x + this.fuzhuzu0.width / 3 * 1;
            wenzixianshi.y = this.fuzhuzu0.y + this.fuzhuzu0.height + wenzixianshi.height * 9;
            wenzixianshi.qianmianwenzi.text = wenzi1;
            wenzixianshi.qianmianwenzi0.text = wenzi2;
            wenzixianshi.qianmianwenzi0.textColor = yanse;
            egret.Tween.get(wenzixianshi).to({ y: this.fuzhuzu0.y + wenzixianshi.height * 9 }, 3000)
                .call(function () {
                _this.jinlaicishu6[9] = 1;
                if (_this.parent) {
                    _this.removeChild(wenzixianshi);
                }
            });
        }
        else if (this.jinlaicishu6[10] == 1) {
            this.jinlaicishu6[10] = 0;
            wenzixianshi.x = this.fuzhuzu0.x + this.fuzhuzu0.width / 3 * 1;
            wenzixianshi.y = this.fuzhuzu0.y + this.fuzhuzu0.height + wenzixianshi.height * 10;
            wenzixianshi.qianmianwenzi.text = wenzi1;
            wenzixianshi.qianmianwenzi0.text = wenzi2;
            wenzixianshi.qianmianwenzi0.textColor = yanse;
            egret.Tween.get(wenzixianshi).to({ y: this.fuzhuzu0.y + wenzixianshi.height * 10 }, 3000)
                .call(function () {
                _this.jinlaicishu6[10] = 1;
                if (_this.parent) {
                    _this.removeChild(wenzixianshi);
                }
            });
        }
        else if (this.jinlaicishu6[11] == 1) {
            this.jinlaicishu6[11] = 0;
            wenzixianshi.x = this.fuzhuzu0.x + this.fuzhuzu0.width / 3 * 1;
            wenzixianshi.y = this.fuzhuzu0.y + this.fuzhuzu0.height + wenzixianshi.height * 11;
            wenzixianshi.qianmianwenzi.text = wenzi1;
            wenzixianshi.qianmianwenzi0.text = wenzi2;
            wenzixianshi.qianmianwenzi0.textColor = yanse;
            egret.Tween.get(wenzixianshi).to({ y: this.fuzhuzu0.y + wenzixianshi.height * 11 }, 3000)
                .call(function () {
                _this.jinlaicishu6[11] = 1;
                if (_this.parent) {
                    _this.removeChild(wenzixianshi);
                }
            });
        }
        else if (this.jinlaicishu6[12] == 1) {
            this.jinlaicishu6[12] = 0;
            wenzixianshi.x = this.fuzhuzu0.x + this.fuzhuzu0.width / 3 * 1;
            wenzixianshi.y = this.fuzhuzu0.y + this.fuzhuzu0.height + wenzixianshi.height * 12;
            wenzixianshi.qianmianwenzi.text = wenzi1;
            wenzixianshi.qianmianwenzi0.text = wenzi2;
            wenzixianshi.qianmianwenzi0.textColor = yanse;
            egret.Tween.get(wenzixianshi).to({ y: this.fuzhuzu0.y + wenzixianshi.height * 12 }, 3000)
                .call(function () {
                _this.jinlaicishu6[12] = 1;
                if (_this.parent) {
                    _this.removeChild(wenzixianshi);
                }
            });
        }
        else if (this.jinlaicishu6[13] == 1) {
            this.jinlaicishu6[13] = 0;
            wenzixianshi.x = this.fuzhuzu0.x + this.fuzhuzu0.width / 3 * 1;
            wenzixianshi.y = this.fuzhuzu0.y + this.fuzhuzu0.height + wenzixianshi.height * 13;
            wenzixianshi.qianmianwenzi.text = wenzi1;
            wenzixianshi.qianmianwenzi0.text = wenzi2;
            wenzixianshi.qianmianwenzi0.textColor = yanse;
            egret.Tween.get(wenzixianshi).to({ y: this.fuzhuzu0.y + wenzixianshi.height * 13 }, 3000)
                .call(function () {
                _this.jinlaicishu6[13] = 1;
                if (_this.parent) {
                    _this.removeChild(wenzixianshi);
                }
            });
        }
        else if (this.jinlaicishu6[14] == 1) {
            this.jinlaicishu6[14] = 0;
            wenzixianshi.x = this.fuzhuzu0.x + this.fuzhuzu0.width / 3 * 1;
            wenzixianshi.y = this.fuzhuzu0.y + this.fuzhuzu0.height + wenzixianshi.height * 14;
            wenzixianshi.qianmianwenzi.text = wenzi1;
            wenzixianshi.qianmianwenzi0.text = wenzi2;
            wenzixianshi.qianmianwenzi0.textColor = yanse;
            egret.Tween.get(wenzixianshi).to({ y: this.fuzhuzu0.y + wenzixianshi.height * 14 }, 3000)
                .call(function () {
                _this.jinlaicishu6[14] = 1;
                if (_this.parent) {
                    _this.removeChild(wenzixianshi);
                }
            });
        }
    };
    //显示技能动画特效
    Pvpzhandoujiemian.prototype.xianshidonghua = function (mingcheng, gujiamingcheng, ziyuan1, ziyuan2, ziyuan3, duixiang) {
        var _this = this;
        //获取坐标位置
        if (duixiang == 0) {
            var zuobiaox = this.zijizu_pvp.x + this.zijizu_pvp.width / 3 * 1;
            var zuobiaoy = this.zijizu_pvp.y + this.zijizu_pvp.height / 2;
            var xianshitexiao = new Zhandoutexiaomokuai(mingcheng, gujiamingcheng, ziyuan1, ziyuan2, ziyuan3, duixiang, zuobiaox, zuobiaoy);
            this.addChild(xianshitexiao);
            egret.Tween.get(this.zijizu_pvp).to({ scaleX: 0.9, scaleY: 0.9 }, 200).call(function () {
                egret.Tween.get(_this.zijizu_pvp).to({ scaleX: 1, scaleY: 1 }, 200);
            });
        }
        else if (duixiang == 1) {
            var zuobiaox = this.fuzhuzu.x + this.fuzhuzu.width / 3 * 1;
            var zuobiaoy = this.fuzhuzu.y + this.fuzhuzu.height / 2;
            var xianshitexiao = new Zhandoutexiaomokuai(mingcheng, gujiamingcheng, ziyuan1, ziyuan2, ziyuan3, duixiang, zuobiaox, zuobiaoy);
            this.addChild(xianshitexiao);
            egret.Tween.get(this.fuzhuzu).to({ scaleX: 0.9, scaleY: 0.9 }, 200).call(function () {
                egret.Tween.get(_this.fuzhuzu).to({ scaleX: 1, scaleY: 1 }, 200);
            });
        }
        else if (duixiang == 2) {
            var zuobiaox = this.fuzhuzu0.x + this.fuzhuzu0.width / 3 * 1;
            var zuobiaoy = this.fuzhuzu0.y + this.fuzhuzu0.height / 2;
            var xianshitexiao = new Zhandoutexiaomokuai(mingcheng, gujiamingcheng, ziyuan1, ziyuan2, ziyuan3, duixiang, zuobiaox, zuobiaoy);
            this.addChild(xianshitexiao);
            egret.Tween.get(this.fuzhuzu0).to({ scaleX: 0.9, scaleY: 0.9 }, 200).call(function () {
                egret.Tween.get(_this.fuzhuzu0).to({ scaleX: 1, scaleY: 1 }, 200);
            });
        }
        else if (duixiang == 3) {
            var zuobiaox = this.diduizu.x + this.diduizu.width / 3 * 1;
            var zuobiaoy = this.diduizu.y + this.diduizu.height / 2;
            var xianshitexiao = new Zhandoutexiaomokuai(mingcheng, gujiamingcheng, ziyuan1, ziyuan2, ziyuan3, duixiang, zuobiaox, zuobiaoy);
            this.addChild(xianshitexiao);
            egret.Tween.get(this.diduizu).to({ scaleX: 0.9, scaleY: 0.9 }, 200).call(function () {
                egret.Tween.get(_this.diduizu).to({ scaleX: 1, scaleY: 1 }, 200);
            });
        }
        else if (duixiang == 4) {
            var zuobiaox = this.fuzhuzu1.x + this.fuzhuzu1.width / 3 * 1;
            var zuobiaoy = this.fuzhuzu1.y + this.fuzhuzu1.height / 2;
            var xianshitexiao = new Zhandoutexiaomokuai(mingcheng, gujiamingcheng, ziyuan1, ziyuan2, ziyuan3, duixiang, zuobiaox, zuobiaoy);
            this.addChild(xianshitexiao);
            egret.Tween.get(this.fuzhuzu1).to({ scaleX: 0.9, scaleY: 0.9 }, 200).call(function () {
                egret.Tween.get(_this.fuzhuzu1).to({ scaleX: 1, scaleY: 1 }, 200);
            });
        }
        else if (duixiang == 5) {
            var zuobiaox = this.fuzhuzu2.x + this.fuzhuzu2.width / 3 * 1;
            var zuobiaoy = this.fuzhuzu2.y + this.fuzhuzu2.height / 2;
            var xianshitexiao = new Zhandoutexiaomokuai(mingcheng, gujiamingcheng, ziyuan1, ziyuan2, ziyuan3, duixiang, zuobiaox, zuobiaoy);
            this.addChild(xianshitexiao);
            egret.Tween.get(this.fuzhuzu2).to({ scaleX: 0.9, scaleY: 0.9 }, 200).call(function () {
                egret.Tween.get(_this.fuzhuzu2).to({ scaleX: 1, scaleY: 1 }, 200);
            });
        }
        else if (duixiang == 10) {
            var zuobiaox = this.zhandouxianshizu_pvp.x;
            var zuobiaoy = this.zhandouxianshizu_pvp.y;
            var xianshitexiao = new Zhandoutexiaomokuai(mingcheng, gujiamingcheng, ziyuan1, ziyuan2, ziyuan3, duixiang, zuobiaox, zuobiaoy);
            this.addChild(xianshitexiao);
        }
    };
    Pvpzhandoujiemian.prototype.kaishixinhuihe = function () {
        //开始新的回合
        if (this.renwuhuihekaishi == true) {
            this.renwuhuihekaishi = false;
            this.daojishigundong = new egret.Timer(2000, 1);
            this.daojishigundong.addEventListener(egret.TimerEvent.TIMER, this.shuaxinhuihe, this);
            this.daojishigundong.start();
        }
    };
    Pvpzhandoujiemian.prototype.direnkaishixinhuihe = function () {
        //开始新的回合
        if (this.direnhuihekaishi == true) {
            this.direnhuihekaishi = false;
            this.daojishigundong = new egret.Timer(2000, 1);
            this.daojishigundong.addEventListener(egret.TimerEvent.TIMER, this.shuaxinhuihe, this);
            this.daojishigundong.start();
        }
    };
    //刷新回合
    Pvpzhandoujiemian.prototype.shuaxinhuihe = function () {
        if (this.zhandoujiesu == false) {
            this.yincangchuzhao();
            this.zhizhengundong();
            this.shangmiantishixianshi("等待上菜顺序...");
            this.xiamiantishizu_pvp.alpha = 0;
            this.zhandouxianshizu_pvp.alpha = 0;
            this.zhandounierong_pvp.source = "";
        }
    };
    //刷新自己的血条
    Pvpzhandoujiemian.prototype.shuaxinxuetiao_0 = function () {
        var _this = this;
        if (this.qixue_0 > this.qixueshangxian_0) {
            this.qixue_0 = this.qixueshangxian_0;
        }
        var xuetiaokuan = this.qixue_0 * this.zijixuetiaokuan / this.qixueshangxian_0;
        egret.Tween.get(this.qixuetiao_pvp_0).wait(500).call(function () {
            if (_this.parent) {
                egret.Tween.get(_this.qixuetiao_pvp_0).to({ width: xuetiaokuan }, 1000);
            }
        });
        this.panduansiwang_0();
    };
    //刷新自己的血条
    Pvpzhandoujiemian.prototype.shuaxinxuetiao_1 = function () {
        var _this = this;
        if (this.fuzhu1qixue_0 > this.fuzhu1qixueshangxian_0) {
            this.fuzhu1qixue_0 = this.fuzhu1qixueshangxian_0;
        }
        var xuetiaokuan = this.fuzhu1qixue_0 * this.zijifuzhu1kuan / this.fuzhu1qixueshangxian_0;
        egret.Tween.get(this.fuzhuxuetiao).wait(500).call(function () {
            if (_this.parent) {
                egret.Tween.get(_this.fuzhuxuetiao).to({ width: xuetiaokuan }, 1000);
            }
        });
        this.panduansiwang_1();
    };
    //刷新自己的血条
    Pvpzhandoujiemian.prototype.shuaxinxuetiao_2 = function () {
        var _this = this;
        if (this.fuzhu2qixue_0 > this.fuzhu2qixueshangxian_0) {
            this.fuzhu2qixue_0 = this.fuzhu2qixueshangxian_0;
        }
        var xuetiaokuan = this.fuzhu2qixue_0 * this.zijifuzhu2kuan / this.fuzhu2qixueshangxian_0;
        egret.Tween.get(this.fuzhuxuetiao0).wait(500).call(function () {
            if (_this.parent) {
                egret.Tween.get(_this.fuzhuxuetiao0).to({ width: xuetiaokuan }, 1000);
            }
        });
        this.panduansiwang_2();
    };
    //刷新自己的血条
    Pvpzhandoujiemian.prototype.shuaxinxuetiao_3 = function () {
        var _this = this;
        if (this.qixue_1 > this.qixueshangxian_1) {
            this.qixue_1 = this.qixueshangxian_1;
        }
        var xuetiaokuan = this.qixue_1 * this.guai1xuetiaokuan / this.qixueshangxian_1;
        egret.Tween.get(this.qixuetiao_pvp_1).wait(500).call(function () {
            if (_this.parent) {
                egret.Tween.get(_this.qixuetiao_pvp_1).to({ width: xuetiaokuan }, 1000);
            }
        });
        this.panduansiwang_3();
    };
    Pvpzhandoujiemian.prototype.shuaxinxuetiao_4 = function () {
        var _this = this;
        if (this.fuzhu1qixue_1 > this.fuzhu1qixueshangxian_1) {
            this.fuzhu1qixue_1 = this.fuzhu1qixueshangxian_1;
        }
        var xuetiaokuan = this.fuzhu1qixue_1 * this.guai2xuetiaokuan / this.fuzhu1qixueshangxian_1;
        egret.Tween.get(this.fuzhuxuetiao1).wait(500).call(function () {
            if (_this.parent) {
                egret.Tween.get(_this.fuzhuxuetiao1).to({ width: xuetiaokuan }, 1000);
            }
        });
        this.panduansiwang_4();
    };
    Pvpzhandoujiemian.prototype.shuaxinxuetiao_5 = function () {
        var _this = this;
        if (this.fuzhu2qixue_1 > this.fuzhu2qixueshangxian_1) {
            this.fuzhu2qixue_1 = this.fuzhu2qixueshangxian_1;
        }
        var xuetiaokuan = this.fuzhu2qixue_1 * this.guai3xuetiaokuan / this.fuzhu2qixueshangxian_1;
        egret.Tween.get(this.fuzhuxuetiao2).wait(500).call(function () {
            if (_this.parent) {
                egret.Tween.get(_this.fuzhuxuetiao2).to({ width: xuetiaokuan }, 1000);
            }
        });
        this.panduansiwang_5();
    };
    //判断自己是否死亡
    Pvpzhandoujiemian.prototype.panduansiwang_0 = function () {
        if (this.qixue_0 <= 0) {
            this.jinduzu_pvp_0.alpha = 0;
            this.siwangbiaozhi_0.alpha = 1;
        }
        this.panduanjiesuan();
    };
    //判断自己是否死亡
    Pvpzhandoujiemian.prototype.panduansiwang_1 = function () {
        if (this.fuzhu1qixue_0 <= 0) {
            this.jinduzu_pvp_1.alpha = 0;
            this.siwangbiaozhi_1.alpha = 1;
        }
        this.panduanjiesuan();
    };
    //判断自己是否死亡
    Pvpzhandoujiemian.prototype.panduansiwang_2 = function () {
        if (this.fuzhu2qixue_0 <= 0) {
            this.jinduzu_pvp_2.alpha = 0;
            this.siwangbiaozhi_2.alpha = 1;
        }
        this.panduanjiesuan();
    };
    //判断自己是否死亡
    Pvpzhandoujiemian.prototype.panduansiwang_3 = function () {
        if (this.qixue_1 <= 0) {
            this.jinduzu_pvp_3.alpha = 0;
            this.siwangbiaozhi_3.alpha = 1;
        }
        this.panduanjiesuan();
    };
    //判断自己是否死亡
    Pvpzhandoujiemian.prototype.panduansiwang_4 = function () {
        if (this.fuzhu1qixue_1 <= 0) {
            this.jinduzu_pvp_4.alpha = 0;
            this.siwangbiaozhi_4.alpha = 1;
        }
        this.panduanjiesuan();
    };
    //判断自己是否死亡
    Pvpzhandoujiemian.prototype.panduansiwang_5 = function () {
        if (this.fuzhu2qixue_1 <= 0) {
            this.jinduzu_pvp_5.alpha = 0;
            this.siwangbiaozhi_5.alpha = 1;
        }
        this.panduanjiesuan();
    };
    //自身BUFF显示
    Pvpzhandoujiemian.prototype.zijibuffxianshi = function () {
        //先初始化各项BUFF数据
        this.buff_1_1_pvp_0.source = "";
        this.buff_1_wenzi_pvp_0.text = "";
        this.buff_2_1_pvp_0.source = "";
        this.buff_2_wenzi_pvp_0.text = "";
        this.buff_3_1_pvp_0.source = "";
        this.buff_3_wenzi_pvp_0.text = "";
        this.buff_4_1_pvp_0.source = "";
        this.buff_4_wenzi_pvp_0.text = "";
        //显示BUFF逻辑
        if (this.buff_0.length > 0) {
            for (var i = 0; i < Gerenshuxing.jinengbiao.length; i++) {
                for (var k = 0; k < this.buff_0.length; k++) {
                    switch (k) {
                        case 0:
                            if (this.buff_0[0].id == Gerenshuxing.jinengbiao[i].id) {
                                this.buff_1_1_pvp_0.source = Gerenshuxing.jinengbiao[i].jinengicon;
                                this.buff_1_wenzi_pvp_0.text = this.buff_0[0].chixu;
                            }
                            break;
                        case 1:
                            if (this.buff_0[1].id == Gerenshuxing.jinengbiao[i].id) {
                                this.buff_2_1_pvp_0.source = Gerenshuxing.jinengbiao[i].jinengicon;
                                this.buff_2_wenzi_pvp_0.text = this.buff_0[1].chixu;
                            }
                            break;
                        case 2:
                            if (this.buff_0[2].id == Gerenshuxing.jinengbiao[i].id) {
                                this.buff_3_1_pvp_0.source = Gerenshuxing.jinengbiao[i].jinengicon;
                                this.buff_3_wenzi_pvp_0.text = this.buff_0[2].chixu;
                            }
                            break;
                        case 3:
                            if (this.buff_0[3].id == Gerenshuxing.jinengbiao[i].id) {
                                this.buff_4_1_pvp_0.source = Gerenshuxing.jinengbiao[i].jinengicon;
                                this.buff_4_wenzi_pvp_0.text = this.buff_0[3].chixu;
                            }
                            break;
                    }
                }
            }
        }
    };
    //自身辅助1BUFF显示
    Pvpzhandoujiemian.prototype.zijifuzhu1buffxianshi = function () {
        //先初始化各项BUFF数据
        this.buff_1_1_pvp_2.source = "";
        this.buff_2_1_pvp_2.source = "";
        this.buff_3_1_pvp_2.source = "";
        this.buff_4_1_pvp_2.source = "";
        //显示BUFF逻辑
        if (this.buff_1.length > 0) {
            for (var i = 0; i < Gerenshuxing.jinengbiao.length; i++) {
                for (var k = 0; k < this.buff_1.length; k++) {
                    switch (k) {
                        case 0:
                            if (this.buff_1[0].id == Gerenshuxing.jinengbiao[i].id) {
                                this.buff_1_1_pvp_2.source = Gerenshuxing.jinengbiao[i].jinengicon;
                            }
                            break;
                        case 1:
                            if (this.buff_1[1].id == Gerenshuxing.jinengbiao[i].id) {
                                this.buff_2_1_pvp_2.source = Gerenshuxing.jinengbiao[i].jinengicon;
                            }
                            break;
                        case 2:
                            if (this.buff_1[2].id == Gerenshuxing.jinengbiao[i].id) {
                                this.buff_3_1_pvp_2.source = Gerenshuxing.jinengbiao[i].jinengicon;
                            }
                            break;
                        case 3:
                            if (this.buff_1[3].id == Gerenshuxing.jinengbiao[i].id) {
                                this.buff_4_1_pvp_2.source = Gerenshuxing.jinengbiao[i].jinengicon;
                            }
                            break;
                    }
                }
            }
        }
    };
    //自身辅助2BUFF显示
    Pvpzhandoujiemian.prototype.zijifuzhu2buffxianshi = function () {
        //先初始化各项BUFF数据
        this.buff_1_1_pvp_3.source = "";
        this.buff_2_1_pvp_3.source = "";
        this.buff_3_1_pvp_3.source = "";
        this.buff_4_1_pvp_3.source = "";
        //显示BUFF逻辑
        if (this.buff_2.length > 0) {
            for (var i = 0; i < Gerenshuxing.jinengbiao.length; i++) {
                for (var k = 0; k < this.buff_2.length; k++) {
                    switch (k) {
                        case 0:
                            if (this.buff_2[0].id == Gerenshuxing.jinengbiao[i].id) {
                                this.buff_1_1_pvp_3.source = Gerenshuxing.jinengbiao[i].jinengicon;
                            }
                            break;
                        case 1:
                            if (this.buff_2[1].id == Gerenshuxing.jinengbiao[i].id) {
                                this.buff_2_1_pvp_3.source = Gerenshuxing.jinengbiao[i].jinengicon;
                            }
                            break;
                        case 2:
                            if (this.buff_2[2].id == Gerenshuxing.jinengbiao[i].id) {
                                this.buff_3_1_pvp_3.source = Gerenshuxing.jinengbiao[i].jinengicon;
                            }
                            break;
                        case 3:
                            if (this.buff_2[3].id == Gerenshuxing.jinengbiao[i].id) {
                                this.buff_4_1_pvp_3.source = Gerenshuxing.jinengbiao[i].jinengicon;
                            }
                            break;
                    }
                }
            }
        }
    };
    //敌人BUFF显示
    Pvpzhandoujiemian.prototype.direnbuffxianshi = function () {
        //先初始化各项BUFF数据
        this.buff_1_0_pvp_1.source = "";
        this.buff_1_wenzi_pvp_1.text = "";
        this.buff_2_0_pvp_1.source = "";
        this.buff_2_wenzi_pvp_1.text = "";
        this.buff_3_0_pvp_1.source = "";
        this.buff_3_wenzi_pvp_1.text = "";
        this.buff_4_0_pvp_1.source = "";
        this.buff_4_wenzi_pvp_1.text = "";
        //显示BUFF逻辑
        if (this.buff_3.length > 0) {
            for (var i = 0; i < Gerenshuxing.jinengbiao.length; i++) {
                for (var k = 0; k < this.buff_3.length; k++) {
                    switch (k) {
                        case 0:
                            if (this.buff_3[0].id == Gerenshuxing.jinengbiao[i].id) {
                                this.buff_1_0_pvp_1.source = Gerenshuxing.jinengbiao[i].jinengicon;
                                this.buff_1_wenzi_pvp_1.text = this.buff_3[0].chixu;
                            }
                            break;
                        case 1:
                            if (this.buff_3[1].id == Gerenshuxing.jinengbiao[i].id) {
                                this.buff_2_0_pvp_1.source = Gerenshuxing.jinengbiao[i].jinengicon;
                                this.buff_2_wenzi_pvp_1.text = this.buff_3[1].chixu;
                            }
                            break;
                        case 2:
                            if (this.buff_3[2].id == Gerenshuxing.jinengbiao[i].id) {
                                this.buff_3_0_pvp_1.source = Gerenshuxing.jinengbiao[i].jinengicon;
                                this.buff_3_wenzi_pvp_1.text = this.buff_3[2].chixu;
                            }
                            break;
                        case 3:
                            if (this.buff_3[3].id == Gerenshuxing.jinengbiao[i].id) {
                                this.buff_4_0_pvp_1.source = Gerenshuxing.jinengbiao[i].jinengicon;
                                this.buff_4_wenzi_pvp_1.text = this.buff_3[3].chixu;
                            }
                            break;
                    }
                }
            }
        }
    };
    //敌人辅助1BUFF显示
    Pvpzhandoujiemian.prototype.direnfuzhu1buffxianshi = function () {
        //先初始化各项BUFF数据
        this.buff_1_1_pvp_4.source = "";
        this.buff_2_1_pvp_4.source = "";
        this.buff_3_1_pvp_4.source = "";
        this.buff_4_1_pvp_4.source = "";
        //显示BUFF逻辑
        if (this.buff_4.length > 0) {
            for (var i = 0; i < Gerenshuxing.jinengbiao.length; i++) {
                for (var k = 0; k < this.buff_4.length; k++) {
                    switch (k) {
                        case 0:
                            if (this.buff_4[0].id == Gerenshuxing.jinengbiao[i].id) {
                                this.buff_1_1_pvp_4.source = Gerenshuxing.jinengbiao[i].jinengicon;
                            }
                            break;
                        case 1:
                            if (this.buff_4[1].id == Gerenshuxing.jinengbiao[i].id) {
                                this.buff_2_1_pvp_4.source = Gerenshuxing.jinengbiao[i].jinengicon;
                            }
                            break;
                        case 2:
                            if (this.buff_4[2].id == Gerenshuxing.jinengbiao[i].id) {
                                this.buff_3_1_pvp_4.source = Gerenshuxing.jinengbiao[i].jinengicon;
                            }
                            break;
                        case 3:
                            if (this.buff_4[3].id == Gerenshuxing.jinengbiao[i].id) {
                                this.buff_4_1_pvp_4.source = Gerenshuxing.jinengbiao[i].jinengicon;
                            }
                            break;
                    }
                }
            }
        }
    };
    //敌人辅助2BUFF显示
    Pvpzhandoujiemian.prototype.direnfuzhu2buffxianshi = function () {
        //先初始化各项BUFF数据
        this.buff_1_1_pvp_5.source = "";
        this.buff_2_1_pvp_5.source = "";
        this.buff_3_1_pvp_5.source = "";
        this.buff_4_1_pvp_5.source = "";
        //显示BUFF逻辑
        if (this.buff_5.length > 0) {
            for (var i = 0; i < Gerenshuxing.jinengbiao.length; i++) {
                for (var k = 0; k < this.buff_5.length; k++) {
                    switch (k) {
                        case 0:
                            if (this.buff_5[0].id == Gerenshuxing.jinengbiao[i].id) {
                                this.buff_1_1_pvp_5.source = Gerenshuxing.jinengbiao[i].jinengicon;
                            }
                            break;
                        case 1:
                            if (this.buff_5[1].id == Gerenshuxing.jinengbiao[i].id) {
                                this.buff_2_1_pvp_5.source = Gerenshuxing.jinengbiao[i].jinengicon;
                            }
                            break;
                        case 2:
                            if (this.buff_5[2].id == Gerenshuxing.jinengbiao[i].id) {
                                this.buff_3_1_pvp_5.source = Gerenshuxing.jinengbiao[i].jinengicon;
                            }
                            break;
                        case 3:
                            if (this.buff_5[3].id == Gerenshuxing.jinengbiao[i].id) {
                                this.buff_4_1_pvp_5.source = Gerenshuxing.jinengbiao[i].jinengicon;
                            }
                            break;
                    }
                }
            }
        }
    };
    //处理自己的buff效果
    Pvpzhandoujiemian.prototype.chulizijidebuff = function () {
        //		console.log(this.zijibuff);
        //速度值需要重新初始化，否则会被减速BUFF影响
        this.sudu_0 = this.chushisudu_0;
        this.fangyu_0 = this.chushifangyu_0;
        //因为降低四抗，所以四抗属性也需要初始化
        if (this.buff_0.length > 0) {
            //到回合开始，先触发BUFF
            for (var i = 0; i < this.buff_0.length; i++) {
                if (this.buff_0[i].id == "20016") {
                    this.sudu_0 = Math.floor(this.sudu_0 - parseInt(this.buff_0[i].xiaoguo));
                    this.zhandoutexiao("jiansu", parseInt(this.buff_0[i].xiaoguo), 0);
                }
                if (this.buff_0[i].id == "20017") {
                    this.zhandoutexiao("chenmo", 0, 0);
                    this.zhizhengundong();
                }
                if (this.buff_0[i].id == "20020") {
                    this.zhandoutexiao("huiling", 2, 0);
                    this.qidianshu_0 += 2;
                }
                if (this.buff_0[i].id == "20023") {
                    this.fangyu_0 = Math.floor(this.fangyu_0 + this.fangyu_0 * parseInt(this.buff_0[i].xiaoguo) / 100);
                    this.zhandoutexiao("jiafang", parseInt(this.buff_0[i].xiaoguo), 0);
                    this.zijiyizhilishua();
                }
                if (this.buff_0[i].id == "20024") {
                    this.sudu_0 = Math.floor(this.sudu_0 + this.sudu_0 * parseInt(this.buff_0[i].xiaoguo) / 100);
                    this.zhandoutexiao("jiasu", parseInt(this.buff_0[i].xiaoguo), 0);
                }
                if (this.buff_0[i].id == "20022") {
                    this.zijila_0 = Math.floor(this.zijila_0 - this.zijila_0 * parseInt(this.buff_0[i].xiaoguo) / 100);
                    this.zijima_0 = Math.floor(this.zijima_0 - this.zijima_0 * parseInt(this.buff_0[i].xiaoguo) / 100);
                    this.zijisuan_0 = Math.floor(this.zijisuan_0 - this.zijisuan_0 * parseInt(this.buff_0[i].xiaoguo) / 100);
                    this.zijitian_0 = Math.floor(this.zijitian_0 - this.zijitian_0 * parseInt(this.buff_0[i].xiaoguo) / 100);
                    this.zhandoutexiao("jiangongji", parseInt(this.buff_0[i].xiaoguo), 0);
                }
                if (this.buff_0[i].id == "20021") {
                    this.qixue_0 = Math.floor(this.qixue_0 - this.qixueshangxian_0 * parseInt(this.buff_0[i].xiaoguo) / 100);
                    this.zhandoutexiao("du", parseInt(this.buff_0[i].xiaoguo), 0);
                    this.shuaxinxuetiao_0();
                }
            }
            //BUFF到期需要拿掉
            for (var i = 0; i < this.buff_0.length; i++) {
                this.buff_0[i].chixu = parseInt(this.buff_0[i].chixu) - 1;
                if (this.buff_0[i].chixu <= 0) {
                    this.buff_0.splice(i, 1);
                    i = i - 1;
                }
            }
        }
        this.zijibuffxianshi();
    };
    //处理自己辅助1的buff效果
    Pvpzhandoujiemian.prototype.chulizijifuzhu1debuff = function () {
        //		console.log(this.zijibuff);
        //速度值需要重新初始化，否则会被减速BUFF影响
        this.fuzhu1sudu_0 = this.fuzhu1chushisudu_0;
        this.fuzhu1fangyu_0 = this.fuzhu1chushifangyu_0;
        //因为降低四抗，所以四抗属性也需要初始化
        if (this.buff_1.length > 0) {
            //到回合开始，先触发BUFF
            for (var i = 0; i < this.buff_1.length; i++) {
                if (this.buff_1[i].id == "20016") {
                    this.fuzhu1sudu_0 = Math.floor(this.fuzhu1sudu_0 - parseInt(this.buff_1[i].xiaoguo));
                    this.zhandoutexiao("jiansu", parseInt(this.buff_1[i].xiaoguo), 1);
                }
                if (this.buff_1[i].id == "20017") {
                    this.zhandoutexiao("chenmo", 0, 1);
                    this.zhizhengundong();
                }
                if (this.buff_1[i].id == "20020") {
                    this.zhandoutexiao("huiling", 2, 1);
                    this.qidianshu_0 += 2;
                }
                if (this.buff_1[i].id == "20023") {
                    this.fuzhu1fangyu_0 = Math.floor(this.fuzhu1fangyu_0 + this.fuzhu1fangyu_0 * parseInt(this.buff_1[i].xiaoguo) / 100);
                    this.zhandoutexiao("jiafang", parseInt(this.buff_1[i].xiaoguo), 1);
                }
                if (this.buff_1[i].id == "20024") {
                    this.fuzhu1sudu_0 = Math.floor(this.fuzhu1sudu_0 + this.fuzhu1sudu_0 * parseInt(this.buff_1[i].xiaoguo) / 100);
                    this.zhandoutexiao("jiasu", parseInt(this.buff_1[i].xiaoguo), 1);
                }
                if (this.buff_1[i].id == "20022") {
                    this.fuzhu1gongji_0 = Math.floor(this.fuzhu1gongji_0 - this.fuzhu1gongji_0 * parseInt(this.buff_1[i].xiaoguo) / 100);
                    this.zhandoutexiao("jiangongji", parseInt(this.buff_1[i].xiaoguo), 1);
                }
                if (this.buff_1[i].id == "20021") {
                    this.fuzhu1qixue_0 = Math.floor(this.fuzhu1qixue_0 - this.fuzhu1qixueshangxian_0 * parseInt(this.buff_1[i].xiaoguo) / 100);
                    this.zhandoutexiao("du", parseInt(this.buff_1[i].xiaoguo), 1);
                    this.shuaxinxuetiao_1();
                }
            }
            //BUFF到期需要拿掉
            for (var i = 0; i < this.buff_1.length; i++) {
                this.buff_1[i].chixu = parseInt(this.buff_1[i].chixu) - 1;
                if (this.buff_1[i].chixu <= 0) {
                    this.buff_1.splice(i, 1);
                    i = i - 1;
                }
            }
        }
        this.zijifuzhu1buffxianshi();
    };
    //处理自己辅助2的buff效果
    Pvpzhandoujiemian.prototype.chulizijifuzhu2debuff = function () {
        //		console.log(this.zijibuff);
        //速度值需要重新初始化，否则会被减速BUFF影响
        this.fuzhu2sudu_0 = this.fuzhu2chushisudu_0;
        this.fuzhu2fangyu_0 = this.fuzhu2chushifangyu_0;
        //因为降低四抗，所以四抗属性也需要初始化
        if (this.buff_2.length > 0) {
            //到回合开始，先触发BUFF
            for (var i = 0; i < this.buff_2.length; i++) {
                if (this.buff_2[i].id == "20016") {
                    this.fuzhu2sudu_0 = Math.floor(this.fuzhu2sudu_0 - parseInt(this.buff_2[i].xiaoguo));
                    this.zhandoutexiao("jiansu", parseInt(this.buff_2[i].xiaoguo), 2);
                }
                if (this.buff_2[i].id == "20017") {
                    this.zhandoutexiao("chenmo", 0, 2);
                    this.zhizhengundong();
                }
                if (this.buff_2[i].id == "20020") {
                    this.zhandoutexiao("huiling", 2, 2);
                    this.qidianshu_0 += 2;
                }
                if (this.buff_2[i].id == "20023") {
                    this.fuzhu2fangyu_0 = Math.floor(this.fuzhu2fangyu_0 + this.fuzhu2fangyu_0 * parseInt(this.buff_2[i].xiaoguo) / 100);
                    this.zhandoutexiao("jiafang", parseInt(this.buff_2[i].xiaoguo), 2);
                }
                if (this.buff_2[i].id == "20024") {
                    this.fuzhu2sudu_0 = Math.floor(this.fuzhu2sudu_0 + this.fuzhu2sudu_0 * parseInt(this.buff_2[i].xiaoguo) / 100);
                    this.zhandoutexiao("jiasu", parseInt(this.buff_2[i].xiaoguo), 2);
                }
                if (this.buff_2[i].id == "20022") {
                    this.fuzhu2gongji_0 = Math.floor(this.fuzhu2gongji_0 - this.fuzhu2gongji_0 * parseInt(this.buff_2[i].xiaoguo) / 100);
                    this.zhandoutexiao("jiangongji", parseInt(this.buff_2[i].xiaoguo), 2);
                }
                if (this.buff_2[i].id == "20021") {
                    this.fuzhu2qixue_0 = Math.floor(this.fuzhu2qixue_0 - this.fuzhu2qixueshangxian_0 * parseInt(this.buff_2[i].xiaoguo) / 100);
                    this.zhandoutexiao("du", parseInt(this.buff_2[i].xiaoguo), 2);
                    this.shuaxinxuetiao_2();
                }
            }
            //BUFF到期需要拿掉
            for (var i = 0; i < this.buff_2.length; i++) {
                this.buff_2[i].chixu = parseInt(this.buff_2[i].chixu) - 1;
                if (this.buff_2[i].chixu <= 0) {
                    this.buff_2.splice(i, 1);
                    i = i - 1;
                }
            }
        }
        this.zijifuzhu2buffxianshi();
    };
    //处理敌人的buff效果
    Pvpzhandoujiemian.prototype.chuliderendebuff = function () {
        //		console.log(this.zijibuff);
        //速度值需要重新初始化，否则会被减速BUFF影响
        this.sudu_1 = this.chushisudu_1;
        this.fangyu_1 = this.chushifangyu_1;
        //因为降低四抗，所以四抗属性也需要初始化
        if (this.buff_3.length > 0) {
            //到回合开始，先触发BUFF
            for (var i = 0; i < this.buff_3.length; i++) {
                if (this.buff_3[i].id == "20016") {
                    this.sudu_1 = Math.floor(this.sudu_1 - parseInt(this.buff_3[i].xiaoguo));
                    this.zhandoutexiao("jiansu", parseInt(this.buff_3[i].xiaoguo), 3);
                }
                if (this.buff_3[i].id == "20017") {
                    this.zhandoutexiao("chenmo", 0, 3);
                    this.zhizhengundong();
                }
                if (this.buff_3[i].id == "20020") {
                    this.zhandoutexiao("huiling", 2, 3);
                    this.qidianshu_1 += 2;
                }
                if (this.buff_3[i].id == "20023") {
                    this.fangyu_1 = Math.floor(this.fangyu_1 + this.fangyu_1 * parseInt(this.buff_3[i].xiaoguo) / 100);
                    this.zhandoutexiao("jiafang", parseInt(this.buff_3[i].xiaoguo), 3);
                    this.direnyizhilishua();
                }
                if (this.buff_3[i].id == "20024") {
                    this.sudu_1 = Math.floor(this.sudu_1 + this.sudu_1 * parseInt(this.buff_3[i].xiaoguo) / 100);
                    this.zhandoutexiao("jiasu", parseInt(this.buff_3[i].xiaoguo), 3);
                }
                if (this.buff_3[i].id == "20022") {
                    this.direnla_1 = Math.floor(this.direnla_1 - this.direnla_1 * parseInt(this.buff_3[i].xiaoguo) / 100);
                    this.direnma_1 = Math.floor(this.direnma_1 - this.direnma_1 * parseInt(this.buff_3[i].xiaoguo) / 100);
                    this.dirensuan_1 = Math.floor(this.dirensuan_1 - this.dirensuan_1 * parseInt(this.buff_3[i].xiaoguo) / 100);
                    this.direntian_1 = Math.floor(this.direntian_1 - this.direntian_1 * parseInt(this.buff_3[i].xiaoguo) / 100);
                    this.zhandoutexiao("jiangongji", parseInt(this.buff_3[i].xiaoguo), 3);
                }
                if (this.buff_3[i].id == "20021") {
                    this.qixue_1 = Math.floor(this.qixue_1 - this.qixueshangxian_1 * parseInt(this.buff_3[i].xiaoguo) / 100);
                    this.zhandoutexiao("du", parseInt(this.buff_3[i].xiaoguo), 3);
                    this.shuaxinxuetiao_3();
                }
            }
            //BUFF到期需要拿掉
            for (var i = 0; i < this.buff_3.length; i++) {
                this.buff_3[i].chixu = parseInt(this.buff_3[i].chixu) - 1;
                if (this.buff_3[i].chixu <= 0) {
                    this.buff_3.splice(i, 1);
                    i = i - 1;
                }
            }
        }
        this.direnbuffxianshi();
    };
    //处理敌人的buff效果
    Pvpzhandoujiemian.prototype.chulidirenfuzhu1debuff = function () {
        //		console.log(this.zijibuff);
        //速度值需要重新初始化，否则会被减速BUFF影响
        this.fuzhu1sudu_1 = this.fuzhu1chushisudu_1;
        this.fuzhu1fangyu_1 = this.fuzhu1chushifangyu_1;
        //因为降低四抗，所以四抗属性也需要初始化
        if (this.buff_4.length > 0) {
            //到回合开始，先触发BUFF
            for (var i = 0; i < this.buff_4.length; i++) {
                if (this.buff_4[i].id == "20016") {
                    this.fuzhu1sudu_1 = Math.floor(this.fuzhu1sudu_1 - parseInt(this.buff_4[i].xiaoguo));
                    this.zhandoutexiao("jiansu", parseInt(this.buff_4[i].xiaoguo), 4);
                }
                if (this.buff_4[i].id == "20017") {
                    this.zhandoutexiao("chenmo", 0, 4);
                    this.zhizhengundong();
                }
                if (this.buff_4[i].id == "20020") {
                    this.zhandoutexiao("huiling", 2, 4);
                    this.qidianshu_1 += 2;
                }
                if (this.buff_4[i].id == "20023") {
                    this.fuzhu1fangyu_1 = Math.floor(this.fuzhu1fangyu_1 + this.fuzhu1fangyu_1 * parseInt(this.buff_4[i].xiaoguo) / 100);
                    this.zhandoutexiao("jiafang", parseInt(this.buff_4[i].xiaoguo), 4);
                }
                if (this.buff_4[i].id == "20024") {
                    this.fuzhu1sudu_1 = Math.floor(this.fuzhu1sudu_1 + this.fuzhu1sudu_1 * parseInt(this.buff_4[i].xiaoguo) / 100);
                    this.zhandoutexiao("jiasu", parseInt(this.buff_4[i].xiaoguo), 4);
                }
                if (this.buff_4[i].id == "20022") {
                    this.fuzhu1gongji_1 = Math.floor(this.fuzhu1gongji_1 - this.fuzhu1gongji_1 * parseInt(this.buff_4[i].xiaoguo) / 100);
                    this.zhandoutexiao("jiangongji", parseInt(this.buff_4[i].xiaoguo), 4);
                }
                if (this.buff_4[i].id == "20021") {
                    this.fuzhu1qixue_1 = Math.floor(this.fuzhu1qixue_1 - this.fuzhu1qixueshangxian_1 * parseInt(this.buff_4[i].xiaoguo) / 100);
                    this.zhandoutexiao("du", parseInt(this.buff_4[i].xiaoguo), 4);
                    this.shuaxinxuetiao_4();
                }
            }
            //BUFF到期需要拿掉
            for (var i = 0; i < this.buff_4.length; i++) {
                this.buff_4[i].chixu = parseInt(this.buff_4[i].chixu) - 1;
                if (this.buff_4[i].chixu <= 0) {
                    this.buff_4.splice(i, 1);
                    i = i - 1;
                }
            }
        }
        this.direnfuzhu1buffxianshi();
    };
    //处理敌人的buff效果
    Pvpzhandoujiemian.prototype.chulidirenfuzhu2debuff = function () {
        //		console.log(this.zijibuff);
        //速度值需要重新初始化，否则会被减速BUFF影响
        this.fuzhu2sudu_1 = this.fuzhu2chushisudu_1;
        this.fuzhu2fangyu_1 = this.fuzhu2chushifangyu_1;
        //因为降低四抗，所以四抗属性也需要初始化
        if (this.buff_5.length > 0) {
            //到回合开始，先触发BUFF
            for (var i = 0; i < this.buff_5.length; i++) {
                if (this.buff_5[i].id == "20016") {
                    this.fuzhu2sudu_1 = Math.floor(this.fuzhu2sudu_1 - parseInt(this.buff_5[i].xiaoguo));
                    this.zhandoutexiao("jiansu", parseInt(this.buff_5[i].xiaoguo), 5);
                }
                if (this.buff_5[i].id == "20017") {
                    this.zhandoutexiao("chenmo", 0, 5);
                    this.zhizhengundong();
                }
                if (this.buff_5[i].id == "20020") {
                    this.zhandoutexiao("huiling", 2, 5);
                    this.qidianshu_1 += 2;
                }
                if (this.buff_5[i].id == "20023") {
                    this.fuzhu2fangyu_1 = Math.floor(this.fuzhu2fangyu_1 + this.fuzhu2fangyu_1 * parseInt(this.buff_5[i].xiaoguo) / 100);
                    this.zhandoutexiao("jiafang", parseInt(this.buff_5[i].xiaoguo), 5);
                }
                if (this.buff_5[i].id == "20024") {
                    this.fuzhu2sudu_1 = Math.floor(this.fuzhu2sudu_1 + this.fuzhu2sudu_1 * parseInt(this.buff_5[i].xiaoguo) / 100);
                    this.zhandoutexiao("jiasu", parseInt(this.buff_5[i].xiaoguo), 5);
                }
                if (this.buff_5[i].id == "20022") {
                    this.fuzhu2gongji_1 = Math.floor(this.fuzhu2gongji_1 - this.fuzhu2gongji_1 * parseInt(this.buff_5[i].xiaoguo) / 100);
                    this.zhandoutexiao("jiangongji", parseInt(this.buff_5[i].xiaoguo), 5);
                }
                if (this.buff_5[i].id == "20021") {
                    this.fuzhu2qixue_1 = Math.floor(this.fuzhu2qixue_1 - this.fuzhu2qixueshangxian_1 * parseInt(this.buff_5[i].xiaoguo) / 100);
                    this.zhandoutexiao("du", parseInt(this.buff_5[i].xiaoguo), 5);
                    this.shuaxinxuetiao_5();
                }
            }
            //BUFF到期需要拿掉
            for (var i = 0; i < this.buff_5.length; i++) {
                this.buff_5[i].chixu = parseInt(this.buff_5[i].chixu) - 1;
                if (this.buff_5[i].chixu <= 0) {
                    this.buff_5.splice(i, 1);
                    i = i - 1;
                }
            }
        }
        this.direnfuzhu2buffxianshi();
    };
    //追击特效特殊处理
    Pvpzhandoujiemian.prototype.zhuijitexiao = function (caiid, qishiren, shoujiren, shanghai) {
        var _this = this;
        this.zhandoutexiao("zhuiji", 0, 10);
        var shipubiao = Gerenshuxing.shipubiao;
        var xianshishangcaitu = "";
        for (var h = 0; h < shipubiao.length; h++) {
            if (shipubiao[h].id == caiid) {
                xianshishangcaitu = shipubiao[h].id + "_png";
                break;
            }
        }
        var zhandoushangcai = new egret.Bitmap();
        var zhandoutupian = RES.getRes(xianshishangcaitu);
        zhandoushangcai.texture = zhandoutupian;
        this.addChild(zhandoushangcai);
        if (qishiren == 0) {
            zhandoushangcai.x = this.zijizu_pvp.x + this.zijizu_pvp.width / 3 * 1;
            zhandoushangcai.y = this.zijizu_pvp.y + this.zijizu_pvp.height / 2;
        }
        else if (qishiren == 1) {
            zhandoushangcai.x = this.fuzhuzu.x + this.fuzhuzu.width / 3 * 1;
            zhandoushangcai.y = this.fuzhuzu.y + this.fuzhuzu.height / 2;
        }
        else if (qishiren == 2) {
            zhandoushangcai.x = this.fuzhuzu0.x + this.fuzhuzu0.width / 3 * 1;
            zhandoushangcai.y = this.fuzhuzu0.y + this.fuzhuzu0.height / 2;
        }
        else if (qishiren == 3) {
            zhandoushangcai.x = this.diduizu.x + this.diduizu.width / 3 * 1;
            zhandoushangcai.y = this.diduizu.y + this.diduizu.height / 2;
        }
        else if (qishiren == 4) {
            zhandoushangcai.x = this.fuzhuzu1.x + this.fuzhuzu1.width / 3 * 1;
            zhandoushangcai.y = this.fuzhuzu1.y + this.fuzhuzu1.height / 2;
        }
        else if (qishiren == 5) {
            zhandoushangcai.x = this.fuzhuzu2.x + this.fuzhuzu2.width / 3 * 1;
            zhandoushangcai.y = this.fuzhuzu2.y + this.fuzhuzu2.height / 2;
        }
        if (shoujiren == 0) {
            zhandoushangcai.scaleX = 0.4;
            zhandoushangcai.scaleY = 0.4;
            egret.Tween.get(zhandoushangcai).to({ scaleX: 0.6, scaleY: 0.6, x: this.zijizu_pvp.x + this.zijizu_pvp.width / 3 * 1, y: this.zijizu_pvp.y + this.zijizu_pvp.height / 2 }, 1000).call(function () {
                if (_this.parent) {
                    _this.removeChild(zhandoushangcai);
                    _this.zhandoutexiao("pugong", shanghai, 0);
                }
            });
        }
        else if (shoujiren == 1) {
            zhandoushangcai.scaleX = 0.4;
            zhandoushangcai.scaleY = 0.4;
            egret.Tween.get(zhandoushangcai).to({ scaleX: 0.6, scaleY: 0.6, x: this.fuzhuzu.x + this.fuzhuzu.width / 3 * 1, y: this.fuzhuzu.y + this.fuzhuzu.height / 2 }, 1000).call(function () {
                if (_this.parent) {
                    _this.removeChild(zhandoushangcai);
                    _this.zhandoutexiao("pugong", shanghai, 1);
                }
            });
        }
        else if (shoujiren == 2) {
            zhandoushangcai.scaleX = 0.4;
            zhandoushangcai.scaleY = 0.4;
            egret.Tween.get(zhandoushangcai).to({ scaleX: 0.6, scaleY: 0.6, x: this.fuzhuzu0.x + this.fuzhuzu0.width / 3 * 1, y: this.fuzhuzu0.y + this.fuzhuzu0.height / 2 }, 1000).call(function () {
                if (_this.parent) {
                    _this.removeChild(zhandoushangcai);
                    _this.zhandoutexiao("pugong", shanghai, 2);
                }
            });
        }
        else if (shoujiren == 3) {
            zhandoushangcai.scaleX = 0.4;
            zhandoushangcai.scaleY = 0.4;
            egret.Tween.get(zhandoushangcai).to({ scaleX: 0.6, scaleY: 0.6, x: this.diduizu.x + this.diduizu.width / 3 * 1, y: this.diduizu.y + this.diduizu.height / 2 }, 1000).call(function () {
                if (_this.parent) {
                    _this.removeChild(zhandoushangcai);
                    _this.zhandoutexiao("pugong", shanghai, 3);
                }
            });
        }
        else if (shoujiren == 4) {
            zhandoushangcai.scaleX = 0.4;
            zhandoushangcai.scaleY = 0.4;
            egret.Tween.get(zhandoushangcai).to({ scaleX: 0.6, scaleY: 0.6, x: this.fuzhuzu1.x + this.fuzhuzu1.width / 3 * 1, y: this.fuzhuzu1.y + this.fuzhuzu1.height / 2 }, 1000).call(function () {
                if (_this.parent) {
                    _this.removeChild(zhandoushangcai);
                    _this.zhandoutexiao("pugong", shanghai, 4);
                }
            });
        }
        else if (shoujiren == 5) {
            zhandoushangcai.scaleX = 0.4;
            zhandoushangcai.scaleY = 0.4;
            egret.Tween.get(zhandoushangcai).to({ scaleX: 0.6, scaleY: 0.6, x: this.fuzhuzu2.x + this.fuzhuzu2.width / 3 * 1, y: this.fuzhuzu2.y + this.fuzhuzu2.height / 2 }, 1000).call(function () {
                if (_this.parent) {
                    _this.removeChild(zhandoushangcai);
                    _this.zhandoutexiao("pugong", shanghai, 5);
                }
            });
        }
    };
    //自己的回合数显示
    Pvpzhandoujiemian.prototype.huiheshuxianshi = function () {
        this.huiheshu_pvp.text = "" + this.zijihuiheshu;
    };
    //判断结算输赢
    Pvpzhandoujiemian.prototype.panduanjiesuan = function () {
        var _this = this;
        if (this.zhandoujiesu == false) {
            if (this.qixue_1 <= 0 && this.fuzhu1qixue_1 <= 0 && this.fuzhu2qixue_1 <= 0) {
                //怪物全部死亡，自己获胜
                this.shangmiantishizu_pvp.alpha = 0;
                this.xiamiantishizu_pvp.alpha = 0;
                this.bisaizhuangtaitu_pvp.alpha = 1;
                this.bisaizhuangtaitu_pvp.source = "img_bipinjiesu_png";
                this.zhandoujiesu = true;
                this.tishixuanzexianshi("对方已全部臣服！");
                egret.Tween.get(this.bisaizhuangtaitu_pvp).to({ alpha: 0.6 }, 3000).call(function () {
                    _this.bisaizhuangtaitu_pvp.alpha = 0;
                    _this.bisaizhuangtaitu_pvp.source = "";
                    _this.shenglijiemian = new Duojianglijiemian();
                    _this.addChild(_this.shenglijiemian);
                    _this.shenglijiemian.img_jianglibiaoti001.source = "img_zhandoushenli_png";
                    _this.shenglijiemian.yitiaojianglizu.alpha = 0;
                    _this.shenglijiemian.yitiaojianglizu0.alpha = 0;
                    _this.shenglijiemian.yitiaojianglizu1.alpha = 0;
                    _this.shenglijiemian.yitiaojianglizu2.alpha = 0;
                    _this.shenglijiemian.yitiaojianglizu3.alpha = 0;
                    _this.shenglijiemian.yitiaojianglizu4.alpha = 0;
                    _this.shenglijiemian.jiangliicon0.source = "";
                    _this.shenglijiemian.jianglishuliang0.text = "";
                    _this.shenglijiemian.jiangliicon1.source = "";
                    _this.shenglijiemian.jianglishuliang1.text = "";
                    _this.shenglijiemian.jiangliicon2.source = "";
                    _this.shenglijiemian.jianglishuliang2.text = "";
                    _this.shenglijiemian.jiangliicon3.source = "";
                    _this.shenglijiemian.jianglishuliang3.text = "";
                    _this.shenglijiemian.jiangliicon4.source = "";
                    _this.shenglijiemian.jianglishuliang4.text = "";
                    _this.shenglijiemian.jiangliicon5.source = "";
                    _this.shenglijiemian.jianglishuliang5.text = "";
                    _this.shenglijiemian.qudinganniu001.enabled = false;
                    _this.shenglijiemian.qudinganniu001.alpha = 0;
                    _this.shenglijianglidaoju();
                });
            }
            else if (this.qixue_0 <= 0 && this.fuzhu1qixue_0 <= 0 && this.fuzhu2qixue_0 <= 0) {
                //自己所有角色死亡，战斗失败
                this.shangmiantishizu_pvp.alpha = 0;
                this.xiamiantishizu_pvp.alpha = 0;
                this.bisaizhuangtaitu_pvp.alpha = 1;
                this.bisaizhuangtaitu_pvp.source = "img_bipinjiesu_png";
                this.zhandoujiesu = true;
                this.tishixuanzexianshi("我方已全部臣服！");
                egret.Tween.get(this.bisaizhuangtaitu_pvp).to({ alpha: 0.6 }, 3000).call(function () {
                    _this.bisaizhuangtaitu_pvp.alpha = 0;
                    _this.bisaizhuangtaitu_pvp.source = "";
                    _this.shenglijiemian = new Pengrenfankuiui();
                    _this.addChild(_this.shenglijiemian);
                    _this.shenglijiemian.img_jindutiaogundong.source = "";
                    _this.shenglijiemian.levelwenzi.text = "";
                    _this.shenglijiemian.img_jindutiaobeijing.source = "";
                    _this.shenglijiemian.huodejingyanwenzi.text = "";
                    _this.shenglijiemian.img_jianglibiaoti0.source = "img_zhandoushibai_png";
                    _this.shenglijiemian.dengjitishi.text = "很遗憾，战斗失败！";
                    _this.shibaijianglidaoju();
                    _this.shenglijiemian.qudinganniu0.enabled = true;
                    _this.shenglijiemian.qudinganniu0.addEventListener(egret.TouchEvent.TOUCH_TAP, _this.guanbishengli, _this);
                });
            }
            else if (this.houxuancaizu_1.length <= 0 && this.di1caiid_1 == "0" && this.di2caiid_1 == "0" && this.di3caiid_1 == "0" && this.di4caiid_1 == "0") {
                //敌人食盒没有菜品，并且克操作菜品也没有，则自己胜利
                this.shangmiantishizu_pvp.alpha = 0;
                this.xiamiantishizu_pvp.alpha = 0;
                this.bisaizhuangtaitu_pvp.alpha = 1;
                this.bisaizhuangtaitu_pvp.source = "img_bipinjiesu_png";
                this.zhandoujiesu = true;
                this.tishixuanzexianshi("对方已无可上菜品！");
                egret.Tween.get(this.bisaizhuangtaitu_pvp).to({ alpha: 0.6 }, 3000).call(function () {
                    _this.bisaizhuangtaitu_pvp.alpha = 0;
                    _this.bisaizhuangtaitu_pvp.source = "";
                    _this.shenglijiemian = new Duojianglijiemian();
                    _this.addChild(_this.shenglijiemian);
                    _this.shenglijiemian.img_jianglibiaoti001.source = "img_zhandoushenli_png";
                    _this.shenglijiemian.yitiaojianglizu.alpha = 0;
                    _this.shenglijiemian.yitiaojianglizu0.alpha = 0;
                    _this.shenglijiemian.yitiaojianglizu1.alpha = 0;
                    _this.shenglijiemian.yitiaojianglizu2.alpha = 0;
                    _this.shenglijiemian.yitiaojianglizu3.alpha = 0;
                    _this.shenglijiemian.yitiaojianglizu4.alpha = 0;
                    _this.shenglijiemian.jiangliicon0.source = "";
                    _this.shenglijiemian.jianglishuliang0.text = "";
                    _this.shenglijiemian.jiangliicon1.source = "";
                    _this.shenglijiemian.jianglishuliang1.text = "";
                    _this.shenglijiemian.jiangliicon2.source = "";
                    _this.shenglijiemian.jianglishuliang2.text = "";
                    _this.shenglijiemian.jiangliicon3.source = "";
                    _this.shenglijiemian.jianglishuliang3.text = "";
                    _this.shenglijiemian.jiangliicon4.source = "";
                    _this.shenglijiemian.jianglishuliang4.text = "";
                    _this.shenglijiemian.jiangliicon5.source = "";
                    _this.shenglijiemian.jianglishuliang5.text = "";
                    _this.shenglijiemian.qudinganniu001.enabled = false;
                    _this.shenglijiemian.qudinganniu001.alpha = 0;
                    _this.shenglijianglidaoju();
                });
            }
            else if (this.houxuancaizu_0.length <= 0 && this.di1caiid_0 == "0" && this.di2caiid_0 == "0" && this.di3caiid_0 == "0" && this.di4caiid_0 == "0") {
                //自己食盒没有菜品，并且克操作菜品也没有，则自己失败
                this.shangmiantishizu_pvp.alpha = 0;
                this.xiamiantishizu_pvp.alpha = 0;
                this.bisaizhuangtaitu_pvp.alpha = 1;
                this.bisaizhuangtaitu_pvp.source = "img_bipinjiesu_png";
                this.zhandoujiesu = true;
                this.tishixuanzexianshi("我方已无可上菜品！");
                egret.Tween.get(this.bisaizhuangtaitu_pvp).to({ alpha: 0.6 }, 3000).call(function () {
                    _this.bisaizhuangtaitu_pvp.alpha = 0;
                    _this.bisaizhuangtaitu_pvp.source = "";
                    _this.shenglijiemian = new Pengrenfankuiui();
                    _this.addChild(_this.shenglijiemian);
                    _this.shenglijiemian.img_jindutiaogundong.source = "";
                    _this.shenglijiemian.levelwenzi.text = "";
                    _this.shenglijiemian.img_jindutiaobeijing.source = "";
                    _this.shenglijiemian.huodejingyanwenzi.text = "";
                    _this.shenglijiemian.img_jianglibiaoti0.source = "img_zhandoushibai_png";
                    _this.shenglijiemian.dengjitishi.text = "很遗憾，战斗失败！!";
                    _this.shibaijianglidaoju();
                    _this.shenglijiemian.qudinganniu0.enabled = true;
                    _this.shenglijiemian.qudinganniu0.addEventListener(egret.TouchEvent.TOUCH_TAP, _this.guanbishengli, _this);
                });
            }
        }
    };
    //关闭输赢界面
    Pvpzhandoujiemian.prototype.guanbishengli = function () {
        this.removeChild(this.shenglijiemian);
        this.guanbijiemian();
    };
    //拆解奖励，判断奖励类型和数量
    Pvpzhandoujiemian.prototype.shenglijianglidaoju = function () {
        if (this.jianglileixing == "putongjiangli") {
            this.jiangliidzu = ["0", "0", "0", "0", "0", "0"];
            this.jianglishuliangzu = ["0", "0", "0", "0", "0", "0"];
            for (var k = 0; k < 6; k++) {
                var suijishengchengshu = Math.floor(Math.random() * 100000) + 1;
                var jiangliid = "1";
                var jianglishuliang = 1;
                for (var i = 0; i < Gerenshuxing.putongjiangchi.length; i++) {
                    if (suijishengchengshu >= parseInt(Gerenshuxing.putongjiangchi[Gerenshuxing.putongjiangchi.length - 1].jilv)) {
                        jiangliid = Gerenshuxing.putongjiangchi[Gerenshuxing.putongjiangchi.length - 1].id;
                        break;
                    }
                    else {
                        if (suijishengchengshu >= parseInt(Gerenshuxing.putongjiangchi[i].jilv) && suijishengchengshu < parseInt(Gerenshuxing.putongjiangchi[i + 1].jilv)) {
                            jiangliid = Gerenshuxing.putongjiangchi[i].id;
                            break;
                        }
                    }
                }
                if (jiangliid == "1") {
                    var suijishi = Math.floor(Math.random() * (this.direndengji) * 200) + 500;
                    jianglishuliang = suijishi * this.jianglibeishu;
                }
                else if (jiangliid == "5") {
                    var suijishi = Math.floor(Math.random() * (this.direndengji) * 20) + 20;
                    jianglishuliang = suijishi * this.jianglibeishu;
                }
                else {
                    jianglishuliang = 1;
                }
                for (var r = 0; r < this.jiangliidzu.length; r++) {
                    if (this.jiangliidzu[r] == "0") {
                        this.jiangliidzu[r] = jiangliid;
                        this.jianglishuliangzu[r] = "" + jianglishuliang;
                        break;
                    }
                    else if (this.jiangliidzu[r] == jiangliid) {
                        this.jianglishuliangzu[r] = parseInt(this.jianglishuliangzu[r]) + jianglishuliang;
                        break;
                    }
                }
            }
            this.jianglixianshiluoji();
        }
    };
    //失败奖励道具
    Pvpzhandoujiemian.prototype.shibaijianglidaoju = function () {
        var jianglileixing = "1";
        var jianglishuliang = 1;
        var suijishi = Math.floor(Math.random() * (this.direndengji) * 100) + 500;
        jianglishuliang = suijishi * this.jianglibeishu;
        var jianglitubiao = Gameguanli.Kongzhitai().daojuxianshiicon("1");
        console.log(jianglitubiao);
        this.shenglijiemian.jiangliicon0.source = jianglitubiao;
        this.shenglijiemian.jianglishuliang0.text = "+ " + jianglishuliang;
        Weblianjie.fasongshuju("code:085", "{" + '"uid"' + ":" + '"' + Gerenshuxing.uid + '"' + ","
            + '"kouchuleixing"' + ":" + '"0"' + ","
            + '"kouchushuliang"' + ":" + '"0"' + ","
            + '"leixing"' + ":" + '"' + jianglileixing + '"' + ","
            + '"shuliang"' + ":" + '"' + jianglishuliang + '"' + ","
            + '"beishu"' + ":" + '"1"' + "}");
    };
    //胜利奖励一组道具逻辑
    Pvpzhandoujiemian.prototype.jianglixianshiluoji = function () {
        var _this = this;
        if (this.jiangliidzu[0] != undefined && this.jiangliidzu[0] != "0") {
            var jiangli1icon = Gameguanli.Kongzhitai().daojuxianshiicon(this.jiangliidzu[0]);
            this.shenglijiemian.jiangliicon0.source = jiangli1icon;
            this.shenglijiemian.jianglishuliang0.text = "+ " + this.jianglishuliangzu[0];
            Weblianjie.fasongshuju("code:085", "{" + '"uid"' + ":" + '"' + Gerenshuxing.uid + '"' + ","
                + '"kouchuleixing"' + ":" + '"0"' + ","
                + '"kouchushuliang"' + ":" + '"0"' + ","
                + '"leixing"' + ":" + '"' + this.jiangliidzu[0] + '"' + ","
                + '"shuliang"' + ":" + '"' + this.jianglishuliangzu[0] + '"' + ","
                + '"beishu"' + ":" + '"1"' + "}");
            egret.Tween.get(this.shenglijiemian.yitiaojianglizu).to({ alpha: 1 }, 500).call(function () {
                if (_this.jiangliidzu[1] != undefined && _this.jiangliidzu[1] != "0") {
                    var jiangli2icon = Gameguanli.Kongzhitai().daojuxianshiicon(_this.jiangliidzu[1]);
                    _this.shenglijiemian.jiangliicon1.source = jiangli2icon;
                    _this.shenglijiemian.jianglishuliang1.text = "+ " + _this.jianglishuliangzu[1];
                    Weblianjie.fasongshuju("code:085", "{" + '"uid"' + ":" + '"' + Gerenshuxing.uid + '"' + ","
                        + '"kouchuleixing"' + ":" + '"0"' + ","
                        + '"kouchushuliang"' + ":" + '"0"' + ","
                        + '"leixing"' + ":" + '"' + _this.jiangliidzu[1] + '"' + ","
                        + '"shuliang"' + ":" + '"' + _this.jianglishuliangzu[1] + '"' + ","
                        + '"beishu"' + ":" + '"1"' + "}");
                    egret.Tween.get(_this.shenglijiemian.yitiaojianglizu0).to({ alpha: 1 }, 500).call(function () {
                        if (_this.jiangliidzu[2] != undefined && _this.jiangliidzu[2] != "0") {
                            var jiangli3icon = Gameguanli.Kongzhitai().daojuxianshiicon(_this.jiangliidzu[2]);
                            _this.shenglijiemian.jiangliicon2.source = jiangli3icon;
                            _this.shenglijiemian.jianglishuliang2.text = "+ " + _this.jianglishuliangzu[2];
                            Weblianjie.fasongshuju("code:085", "{" + '"uid"' + ":" + '"' + Gerenshuxing.uid + '"' + ","
                                + '"kouchuleixing"' + ":" + '"0"' + ","
                                + '"kouchushuliang"' + ":" + '"0"' + ","
                                + '"leixing"' + ":" + '"' + _this.jiangliidzu[2] + '"' + ","
                                + '"shuliang"' + ":" + '"' + _this.jianglishuliangzu[2] + '"' + ","
                                + '"beishu"' + ":" + '"1"' + "}");
                            egret.Tween.get(_this.shenglijiemian.yitiaojianglizu1).to({ alpha: 1 }, 500).call(function () {
                                if (_this.jiangliidzu[3] != undefined && _this.jiangliidzu[3] != "0") {
                                    var jiangli4icon = Gameguanli.Kongzhitai().daojuxianshiicon(_this.jiangliidzu[3]);
                                    _this.shenglijiemian.jiangliicon3.source = jiangli4icon;
                                    _this.shenglijiemian.jianglishuliang3.text = "+ " + _this.jianglishuliangzu[3];
                                    Weblianjie.fasongshuju("code:085", "{" + '"uid"' + ":" + '"' + Gerenshuxing.uid + '"' + ","
                                        + '"kouchuleixing"' + ":" + '"0"' + ","
                                        + '"kouchushuliang"' + ":" + '"0"' + ","
                                        + '"leixing"' + ":" + '"' + _this.jiangliidzu[3] + '"' + ","
                                        + '"shuliang"' + ":" + '"' + _this.jianglishuliangzu[3] + '"' + ","
                                        + '"beishu"' + ":" + '"1"' + "}");
                                    egret.Tween.get(_this.shenglijiemian.yitiaojianglizu2).to({ alpha: 1 }, 500).call(function () {
                                        if (_this.jiangliidzu[4] != undefined && _this.jiangliidzu[4] != "0") {
                                            var jiangli5icon = Gameguanli.Kongzhitai().daojuxianshiicon(_this.jiangliidzu[4]);
                                            _this.shenglijiemian.jiangliicon4.source = jiangli5icon;
                                            _this.shenglijiemian.jianglishuliang4.text = "+ " + _this.jianglishuliangzu[4];
                                            Weblianjie.fasongshuju("code:085", "{" + '"uid"' + ":" + '"' + Gerenshuxing.uid + '"' + ","
                                                + '"kouchuleixing"' + ":" + '"0"' + ","
                                                + '"kouchushuliang"' + ":" + '"0"' + ","
                                                + '"leixing"' + ":" + '"' + _this.jiangliidzu[4] + '"' + ","
                                                + '"shuliang"' + ":" + '"' + _this.jianglishuliangzu[4] + '"' + ","
                                                + '"beishu"' + ":" + '"1"' + "}");
                                            egret.Tween.get(_this.shenglijiemian.yitiaojianglizu3).to({ alpha: 1 }, 500).call(function () {
                                                if (_this.jiangliidzu[5] != undefined && _this.jiangliidzu[5] != "0") {
                                                    var jiangli6icon = Gameguanli.Kongzhitai().daojuxianshiicon(_this.jiangliidzu[5]);
                                                    _this.shenglijiemian.jiangliicon5.source = jiangli6icon;
                                                    _this.shenglijiemian.jianglishuliang5.text = "+ " + _this.jianglishuliangzu[5];
                                                    Weblianjie.fasongshuju("code:085", "{" + '"uid"' + ":" + '"' + Gerenshuxing.uid + '"' + ","
                                                        + '"kouchuleixing"' + ":" + '"0"' + ","
                                                        + '"kouchushuliang"' + ":" + '"0"' + ","
                                                        + '"leixing"' + ":" + '"' + _this.jiangliidzu[5] + '"' + ","
                                                        + '"shuliang"' + ":" + '"' + _this.jianglishuliangzu[5] + '"' + ","
                                                        + '"beishu"' + ":" + '"1"' + "}");
                                                    egret.Tween.get(_this.shenglijiemian.yitiaojianglizu4).to({ alpha: 1 }, 500).call(function () {
                                                        _this.shenglijiemian.qudinganniu001.alpha = 1;
                                                        _this.shenglijiemian.qudinganniu001.enabled = true;
                                                        _this.shenglijiemian.qudinganniu001.addEventListener(egret.TouchEvent.TOUCH_TAP, _this.guanbishengli, _this);
                                                    });
                                                }
                                                else {
                                                    _this.shenglijiemian.qudinganniu001.alpha = 1;
                                                    _this.shenglijiemian.qudinganniu001.enabled = true;
                                                    _this.shenglijiemian.qudinganniu001.addEventListener(egret.TouchEvent.TOUCH_TAP, _this.guanbishengli, _this);
                                                }
                                            });
                                        }
                                        else {
                                            _this.shenglijiemian.qudinganniu001.alpha = 1;
                                            _this.shenglijiemian.qudinganniu001.enabled = true;
                                            _this.shenglijiemian.qudinganniu001.addEventListener(egret.TouchEvent.TOUCH_TAP, _this.guanbishengli, _this);
                                        }
                                    });
                                }
                                else {
                                    _this.shenglijiemian.qudinganniu001.alpha = 1;
                                    _this.shenglijiemian.qudinganniu001.enabled = true;
                                    _this.shenglijiemian.qudinganniu001.addEventListener(egret.TouchEvent.TOUCH_TAP, _this.guanbishengli, _this);
                                }
                            });
                        }
                        else {
                            _this.shenglijiemian.qudinganniu001.alpha = 1;
                            _this.shenglijiemian.qudinganniu001.enabled = true;
                            _this.shenglijiemian.qudinganniu001.addEventListener(egret.TouchEvent.TOUCH_TAP, _this.guanbishengli, _this);
                        }
                    });
                }
                else {
                    _this.shenglijiemian.qudinganniu001.alpha = 1;
                    _this.shenglijiemian.qudinganniu001.enabled = true;
                    _this.shenglijiemian.qudinganniu001.addEventListener(egret.TouchEvent.TOUCH_TAP, _this.guanbishengli, _this);
                }
            });
        }
        else {
            this.shenglijiemian.qudinganniu001.alpha = 1;
            this.shenglijiemian.qudinganniu001.enabled = true;
            this.shenglijiemian.qudinganniu001.addEventListener(egret.TouchEvent.TOUCH_TAP, this.guanbishengli, this);
        }
    };
    //放弃出牌
    Pvpzhandoujiemian.prototype.fangqichupai = function () {
        Gamesound.Soundkongzhi().anniuyinxiao();
        this.zidongzhandouanniu_pvp.alpha = 0;
        this.zidongzhandouanniu_pvp.enabled = false;
        this.xiamiantishizu_pvp.alpha = 0;
        this.daojishitishizu_pvp.alpha = 0;
        this.shangmiantishizu_pvp.alpha = 0;
        //隐藏上菜按钮
        this.shangcai1anniu_pvp.enabled = false;
        this.shangcai2anniu_pvp.enabled = false;
        this.shangcai3anniu_pvp.enabled = false;
        this.shangcai4anniu_pvp.enabled = false;
        this.kaishixinhuihe();
    };
    //点击个人属性查看BUFF界面
    Pvpzhandoujiemian.prototype.chakanzijibuff = function () {
        Gamesound.Soundkongzhi().anniuyinxiao();
        if (this.buff_0.length > 0) {
            this.buffjiemian = new Zhandoubuffui();
            this.addChild(this.buffjiemian);
            for (var i = 0; i < this.buff_0.length; i++) {
                for (var h = 0; h < Gerenshuxing.jinengbiao.length; h++) {
                    if (this.buff_0[i].id == Gerenshuxing.jinengbiao[h].id) {
                        this.buffjiemian.chushihua(i, Gerenshuxing.jinengbiao[h].mingcheng, this.buff_0[i].chixu, Gerenshuxing.jinengbiao[h].jinengicon, Gerenshuxing.jinengbiao[h].bufftishi);
                    }
                }
            }
            this.buffjiemian.guanbianniu0.enabled = true;
            this.buffjiemian.guanbianniu0.addEventListener(egret.TouchEvent.TOUCH_TAP, this.guanbijiemain, this);
            this.buffjiemian.img_heisezhezao0.touchEnabled = true;
            this.buffjiemian.img_heisezhezao0.addEventListener(egret.TouchEvent.TOUCH_TAP, this.guanbijiemain, this);
        }
    };
    //点击怪物1属性查看BUFF界面
    Pvpzhandoujiemian.prototype.chakanguai1buff = function () {
        Gamesound.Soundkongzhi().anniuyinxiao();
        if (this.buff_3.length > 0) {
            this.buffjiemian = new Zhandoubuffui();
            this.addChild(this.buffjiemian);
            for (var i = 0; i < this.buff_3.length; i++) {
                for (var h = 0; h < Gerenshuxing.jinengbiao.length; h++) {
                    if (this.buff_3[i].id == Gerenshuxing.jinengbiao[h].id) {
                        this.buffjiemian.chushihua(i, Gerenshuxing.jinengbiao[h].mingcheng, this.buff_3[i].chixu, Gerenshuxing.jinengbiao[h].jinengicon, Gerenshuxing.jinengbiao[h].bufftishi);
                    }
                }
            }
            this.buffjiemian.guanbianniu0.enabled = true;
            this.buffjiemian.guanbianniu0.addEventListener(egret.TouchEvent.TOUCH_TAP, this.guanbijiemain, this);
            this.buffjiemian.img_heisezhezao0.touchEnabled = true;
            this.buffjiemian.img_heisezhezao0.addEventListener(egret.TouchEvent.TOUCH_TAP, this.guanbijiemain, this);
        }
    };
    //点击怪物2属性查看BUFF界面
    Pvpzhandoujiemian.prototype.chakanguai2buff = function () {
        Gamesound.Soundkongzhi().anniuyinxiao();
        if (this.buff_4.length > 0) {
            this.buffjiemian = new Zhandoubuffui();
            this.addChild(this.buffjiemian);
            for (var i = 0; i < this.buff_4.length; i++) {
                for (var h = 0; h < Gerenshuxing.jinengbiao.length; h++) {
                    if (this.buff_4[i].id == Gerenshuxing.jinengbiao[h].id) {
                        this.buffjiemian.chushihua(i, Gerenshuxing.jinengbiao[h].mingcheng, this.buff_4[i].chixu, Gerenshuxing.jinengbiao[h].jinengicon, Gerenshuxing.jinengbiao[h].bufftishi);
                    }
                }
            }
            this.buffjiemian.guanbianniu0.enabled = true;
            this.buffjiemian.guanbianniu0.addEventListener(egret.TouchEvent.TOUCH_TAP, this.guanbijiemain, this);
            this.buffjiemian.img_heisezhezao0.touchEnabled = true;
            this.buffjiemian.img_heisezhezao0.addEventListener(egret.TouchEvent.TOUCH_TAP, this.guanbijiemain, this);
        }
    };
    //点击怪物3属性查看BUFF界面
    Pvpzhandoujiemian.prototype.chakanguai3buff = function () {
        Gamesound.Soundkongzhi().anniuyinxiao();
        if (this.buff_5.length > 0) {
            this.buffjiemian = new Zhandoubuffui();
            this.addChild(this.buffjiemian);
            for (var i = 0; i < this.buff_5.length; i++) {
                for (var h = 0; h < Gerenshuxing.jinengbiao.length; h++) {
                    if (this.buff_5[i].id == Gerenshuxing.jinengbiao[h].id) {
                        this.buffjiemian.chushihua(i, Gerenshuxing.jinengbiao[h].mingcheng, this.buff_5[i].chixu, Gerenshuxing.jinengbiao[h].jinengicon, Gerenshuxing.jinengbiao[h].bufftishi);
                    }
                }
            }
            this.buffjiemian.guanbianniu0.enabled = true;
            this.buffjiemian.guanbianniu0.addEventListener(egret.TouchEvent.TOUCH_TAP, this.guanbijiemain, this);
            this.buffjiemian.img_heisezhezao0.touchEnabled = true;
            this.buffjiemian.img_heisezhezao0.addEventListener(egret.TouchEvent.TOUCH_TAP, this.guanbijiemain, this);
        }
    };
    //点击自己辅助属性查看BUFF界面
    Pvpzhandoujiemian.prototype.chakanzijifuzhu1buff = function () {
        Gamesound.Soundkongzhi().anniuyinxiao();
        if (this.buff_1.length > 0) {
            this.buffjiemian = new Zhandoubuffui();
            this.addChild(this.buffjiemian);
            for (var i = 0; i < this.buff_1.length; i++) {
                for (var h = 0; h < Gerenshuxing.jinengbiao.length; h++) {
                    if (this.buff_1[i].id == Gerenshuxing.jinengbiao[h].id) {
                        this.buffjiemian.chushihua(i, Gerenshuxing.jinengbiao[h].mingcheng, this.buff_1[i].chixu, Gerenshuxing.jinengbiao[h].jinengicon, Gerenshuxing.jinengbiao[h].bufftishi);
                    }
                }
            }
            this.buffjiemian.guanbianniu0.enabled = true;
            this.buffjiemian.guanbianniu0.addEventListener(egret.TouchEvent.TOUCH_TAP, this.guanbijiemain, this);
            this.buffjiemian.img_heisezhezao0.touchEnabled = true;
            this.buffjiemian.img_heisezhezao0.addEventListener(egret.TouchEvent.TOUCH_TAP, this.guanbijiemain, this);
        }
    };
    //点击自己辅助属性查看BUFF界面
    Pvpzhandoujiemian.prototype.chakanzijifuzhu2buff = function () {
        Gamesound.Soundkongzhi().anniuyinxiao();
        if (this.buff_2.length > 0) {
            this.buffjiemian = new Zhandoubuffui();
            this.addChild(this.buffjiemian);
            for (var i = 0; i < this.buff_2.length; i++) {
                for (var h = 0; h < Gerenshuxing.jinengbiao.length; h++) {
                    if (this.buff_2[i].id == Gerenshuxing.jinengbiao[h].id) {
                        this.buffjiemian.chushihua(i, Gerenshuxing.jinengbiao[h].mingcheng, this.buff_2[i].chixu, Gerenshuxing.jinengbiao[h].jinengicon, Gerenshuxing.jinengbiao[h].bufftishi);
                    }
                }
            }
            this.buffjiemian.guanbianniu0.enabled = true;
            this.buffjiemian.guanbianniu0.addEventListener(egret.TouchEvent.TOUCH_TAP, this.guanbijiemain, this);
            this.buffjiemian.img_heisezhezao0.touchEnabled = true;
            this.buffjiemian.img_heisezhezao0.addEventListener(egret.TouchEvent.TOUCH_TAP, this.guanbijiemain, this);
        }
    };
    //点击查看菜1tips
    Pvpzhandoujiemian.prototype.chakancai1tips = function () {
        Gamesound.Soundkongzhi().anniuyinxiao();
        if (this.di1caiid_0 != "0") {
            this.zhandoucaipintips = new Zhandoucaipinshuxingui();
            this.addChild(this.zhandoucaipintips);
            this.zhandoucaipintips.chushihua(this.di1caiid_0, this.di1caiqidian_0);
            this.zhandoucaipintips.guanbianniu0.enabled = true;
            this.zhandoucaipintips.guanbianniu0.addEventListener(egret.TouchEvent.TOUCH_TAP, this.guanbicaitips, this);
            this.zhandoucaipintips.img_heisezhezao0.touchEnabled = true;
            this.zhandoucaipintips.img_heisezhezao0.addEventListener(egret.TouchEvent.TOUCH_TAP, this.guanbicaitips, this);
        }
    };
    //点击查看菜2tips
    Pvpzhandoujiemian.prototype.chakancai2tips = function () {
        Gamesound.Soundkongzhi().anniuyinxiao();
        if (this.di2caiid_0 != "0") {
            this.zhandoucaipintips = new Zhandoucaipinshuxingui();
            this.addChild(this.zhandoucaipintips);
            this.zhandoucaipintips.chushihua(this.di2caiid_0, this.di2caiqidian_0);
            this.zhandoucaipintips.guanbianniu0.enabled = true;
            this.zhandoucaipintips.guanbianniu0.addEventListener(egret.TouchEvent.TOUCH_TAP, this.guanbicaitips, this);
            this.zhandoucaipintips.img_heisezhezao0.touchEnabled = true;
            this.zhandoucaipintips.img_heisezhezao0.addEventListener(egret.TouchEvent.TOUCH_TAP, this.guanbicaitips, this);
        }
    };
    //点击查看菜3tips
    Pvpzhandoujiemian.prototype.chakancai3tips = function () {
        Gamesound.Soundkongzhi().anniuyinxiao();
        if (this.di3caiid_0 != "0") {
            this.zhandoucaipintips = new Zhandoucaipinshuxingui();
            this.addChild(this.zhandoucaipintips);
            this.zhandoucaipintips.chushihua(this.di3caiid_0, this.di3caiqidian_0);
            this.zhandoucaipintips.guanbianniu0.enabled = true;
            this.zhandoucaipintips.guanbianniu0.addEventListener(egret.TouchEvent.TOUCH_TAP, this.guanbicaitips, this);
            this.zhandoucaipintips.img_heisezhezao0.touchEnabled = true;
            this.zhandoucaipintips.img_heisezhezao0.addEventListener(egret.TouchEvent.TOUCH_TAP, this.guanbicaitips, this);
        }
    };
    //点击查看菜4tips
    Pvpzhandoujiemian.prototype.chakancai4tips = function () {
        Gamesound.Soundkongzhi().anniuyinxiao();
        if (this.di4caiid_0 != "0") {
            this.zhandoucaipintips = new Zhandoucaipinshuxingui();
            this.addChild(this.zhandoucaipintips);
            this.zhandoucaipintips.chushihua(this.di4caiid_0, this.di4caiqidian_0);
            this.zhandoucaipintips.guanbianniu0.enabled = true;
            this.zhandoucaipintips.guanbianniu0.addEventListener(egret.TouchEvent.TOUCH_TAP, this.guanbicaitips, this);
            this.zhandoucaipintips.img_heisezhezao0.touchEnabled = true;
            this.zhandoucaipintips.img_heisezhezao0.addEventListener(egret.TouchEvent.TOUCH_TAP, this.guanbicaitips, this);
        }
    };
    //关闭BUFF界面
    Pvpzhandoujiemian.prototype.guanbijiemain = function () {
        Gamesound.Soundkongzhi().anniuyinxiao();
        this.removeChild(this.buffjiemian);
    };
    //关闭菜品查看界面
    Pvpzhandoujiemian.prototype.guanbicaitips = function () {
        Gamesound.Soundkongzhi().anniuyinxiao();
        this.removeChild(this.zhandoucaipintips);
    };
    //自己意志力刷新
    Pvpzhandoujiemian.prototype.zijiyizhilishua = function () {
        this.yizhixing_pvp_0.text = "" + this.fangyu_0;
    };
    //敌人意志力刷新
    Pvpzhandoujiemian.prototype.direnyizhilishua = function () {
        this.yizhixing_pvp_1.text = "" + this.fangyu_1;
    };
    //初始隐藏所有出招标志
    Pvpzhandoujiemian.prototype.yincangchuzhao = function () {
        this.chuzhaobiaozhi_0.alpha = 0;
        this.chuzhaobiaozhi_1.alpha = 0;
        this.chuzhaobiaozhi_2.alpha = 0;
        this.chuzhaobiaozhi_3.alpha = 0;
        this.chuzhaobiaozhi_4.alpha = 0;
        this.chuzhaobiaozhi_5.alpha = 0;
    };
    //初始隐藏所有死亡标志
    Pvpzhandoujiemian.prototype.yincangsiwang = function () {
        this.siwangbiaozhi_0.alpha = 0;
        this.siwangbiaozhi_1.alpha = 0;
        this.siwangbiaozhi_2.alpha = 0;
        this.siwangbiaozhi_3.alpha = 0;
        this.siwangbiaozhi_4.alpha = 0;
        this.siwangbiaozhi_5.alpha = 0;
    };
    return Pvpzhandoujiemian;
}(eui.Component));
__reflect(Pvpzhandoujiemian.prototype, "Pvpzhandoujiemian", ["eui.UIComponent", "egret.DisplayObject"]);
