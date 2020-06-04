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
var Zhandoujiemian = (function (_super) {
    __extends(Zhandoujiemian, _super);
    function Zhandoujiemian() {
        var _this = _super.call(this) || this;
        _this.houxuancaizu = []; //当前的候选菜库
        //瓢字控制
        _this.jinlaicishu1 = [1, 1, 1, 1, 1, 1, 1, 1];
        _this.jinlaicishu2 = [1, 1, 1, 1, 1, 1, 1, 1];
        _this.jinlaicishu3 = [1, 1, 1, 1, 1, 1, 1, 1];
        _this.jinlaicishu4 = [1, 1, 1, 1, 1, 1, 1, 1];
        //战斗BUFF
        _this.guai1buff = []; //怪物1的BUFF列表;
        _this.guai2buff = []; //怪物1的BUFF列表;
        _this.guai3buff = []; //怪物1的BUFF列表;
        _this.zijibuff = []; //自己的BUFF列表;
        //菜的各项数据
        //获取当前菜的属性值
        _this.chushilazhi = 0; //菜的初始辣值
        _this.zuizhonglazhi = 0; //菜的最终辣值
        _this.fujialazhi = 0; //菜的附加辣值
        _this.chushimazhi = 0; //菜的初始辣值
        _this.zuizhongmazhi = 0; //菜的初始辣值
        _this.fujiamazhi = 0; //菜的初始辣值
        _this.chushisuanzhi = 0; //菜的初始辣值
        _this.zuizhongsuanzhi = 0; //菜的初始辣值
        _this.fujiasuanzhi = 0; //菜的初始辣值
        _this.chushitianzhi = 0; //菜的初始辣值
        _this.zuizhongtianzhi = 0; //菜的初始辣值
        _this.fujiatianzhi = 0; //菜的初始辣值
        _this.caidejineng1 = "0"; //菜的技能1
        _this.caidejineng2 = "0"; //菜的技能2
        _this.caidejineng3 = "0"; //菜的技能3
        _this.caidejineng4 = "0"; //菜的技能4
        _this.caidejineng5 = "0"; //菜的技能5
        _this.caidedengji = 0; //当前菜的等级
        _this.shuchulazhi = 0;
        _this.shuchumazhi = 0;
        _this.shuchusuanzhi = 0;
        _this.shuchutianzhi = 0;
        //是否触发技能
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
        return _this;
    }
    Zhandoujiemian.prototype.partAdded = function (partName, instance) {
        _super.prototype.partAdded.call(this, partName, instance);
    };
    Zhandoujiemian.prototype.childrenCreated = function () {
        _super.prototype.childrenCreated.call(this);
    };
    Zhandoujiemian.prototype.chushihua = function (id1, id2, id3) {
        var _this = this;
        //初始化战斗是否结束控件
        this.zhandoujiesu = false;
        //认输按钮，关闭界面
        this.renshuanniu.addEventListener(egret.TouchEvent.TOUCH_TAP, this.guanbijiemian, this);
        //初始隐藏技能出牌显示
        this.zhandouxianshizu.alpha = 0;
        this.zhandouhanhuazu.alpha = 0;
        //初始隐藏自动按钮的取消按钮
        this.quxiaozidonganniu.alpha = 0;
        this.quxiaozidonganniu.enabled = false;
        this.zidongzhandouanniu.alpha = 0;
        this.zidongzhandouanniu.enabled = false;
        //初始隐藏所有上菜按钮
        this.shangcai1anniu.enabled = false;
        this.shangcai2anniu.enabled = false;
        this.shangcai3anniu.enabled = false;
        this.shangcai4anniu.enabled = false;
        //初始隐藏所有初始菜品
        this.caiicon.source = "";
        this.caiicon0.source = "";
        this.caiicon1.source = "";
        this.caiicon2.source = "";
        //隐藏菜品所需气点
        this.xiaohao_1_.alpha = 0;
        this.xiaohao_2_.alpha = 0;
        this.xiaohao_3_.alpha = 0;
        this.xiaohao_4_.alpha = 0;
        this.xiaohao_1_0.alpha = 0;
        this.xiaohao_2_0.alpha = 0;
        this.xiaohao_3_0.alpha = 0;
        this.xiaohao_4_0.alpha = 0;
        this.xiaohao_1_1.alpha = 0;
        this.xiaohao_2_1.alpha = 0;
        this.xiaohao_3_1.alpha = 0;
        this.xiaohao_4_1.alpha = 0;
        this.xiaohao_1_2.alpha = 0;
        this.xiaohao_2_2.alpha = 0;
        this.xiaohao_3_2.alpha = 0;
        this.xiaohao_4_2.alpha = 0;
        //初始气点数
        this.tiaoliao.alpha = 0;
        this.tiaoliao0.alpha = 0;
        this.tiaoliao1.alpha = 0;
        this.tiaoliao2.alpha = 0;
        this.tiaoliao3.alpha = 0;
        this.tiaoliao4.alpha = 0;
        this.tiaoliao5.alpha = 0;
        this.tiaoliao6.alpha = 0;
        this.tiaoliao7.alpha = 0;
        this.tiaoliao8.alpha = 0;
        this.qidianshu = 0;
        /*		//初始化人物数据
                this.chushihuarenwu();*/
        //初始隐藏4个行动条组
        this.jinduzu.alpha = 0;
        this.jinduzu0.alpha = 0;
        this.jinduzu1.alpha = 0;
        this.jinduzu2.alpha = 0;
        //初始化怪物数据
        this.chushihuaguaiwu(id1, id2, id3);
        //初始隐藏闹钟
        this.daojishitishizu.alpha = 0;
        /*//初始显示食盒的数量
        this.shihexianshi();*/
        //初始化记录四根血条的宽度
        this.zijixuetiaokuan = this.qixuetiao2.width;
        this.guai1xuetiaokuan = this.qixuetiao.width;
        this.guai2xuetiaokuan = this.qixuetiao0.width;
        this.guai3xuetiaokuan = this.qixuetiao1.width;
        //初始化隐藏上面显示提示信息
        this.shangmiantishizu.alpha = 0;
        //隐藏下面的显示提示信息
        this.xiamiantishizu.alpha = 0;
        //倒计时动画
        this.bisaizhuangtaitu.alpha = 1;
        this.bisaizhuangtaitu.source = "img_daojishi3_png";
        egret.Tween.get(this.bisaizhuangtaitu).to({ alpha: 0.5 }, 1000).call(function () {
            _this.bisaizhuangtaitu.alpha = 1;
            _this.bisaizhuangtaitu.source = "img_daojishi2_png";
            egret.Tween.get(_this.bisaizhuangtaitu).to({ alpha: 0.5 }, 1000).call(function () {
                _this.bisaizhuangtaitu.alpha = 1;
                _this.bisaizhuangtaitu.source = "img_daojishi1_png";
                egret.Tween.get(_this.bisaizhuangtaitu).to({ alpha: 0.5 }, 1000).call(function () {
                    _this.bisaizhuangtaitu.alpha = 1;
                    _this.bisaizhuangtaitu.source = "img_bipingkaishi_png";
                    egret.Tween.get(_this.bisaizhuangtaitu).to({ alpha: 0.5 }, 2000).call(function () {
                        _this.bisaizhuangtaitu.alpha = 0;
                        _this.bisaizhuangtaitu.source = "";
                        //初始化滚动指针显示内容
                        _this.gundongzhizhen();
                        _this.shangmiantishixianshi("等待客人发布需求...");
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
    };
    //初始化人物数据
    Zhandoujiemian.prototype.chushihuarenwu = function () {
        this.guaiwudengji2.text = "" + Gerenshuxing.xingfudengji;
        this.mingzi2.text = Gerenshuxing.mingzi;
        this.lashuxing2.text = "" + Gerenshuxing.gerenla;
        this.mashuxing2.text = "" + Gerenshuxing.gerenma;
        this.suanshuxing2.text = "" + Gerenshuxing.gerensuan;
        this.tianshuxing2.text = "" + Gerenshuxing.gerentian;
        //		this.buffxianshizu2.alpha = 0;
        //自己buff显示刷新
        this.zijibuff = [];
        this.zijibuffxianshi();
        //显示自己的头像
        this.xianshizijitouxiang();
        //计算自己当前的可使用食盒
        this.houxuancaizu = Gerenshuxing.jiesuocaipin;
        //		console.log(this.houxuancaizu,Gerenshuxing.jiesuocaipin);
        this.di1caiid = "0";
        this.di2caiid = "0";
        this.di3caiid = "0";
        this.di4caiid = "0";
        //计算自己的气血值
        this.zijideqixue = Gerenshuxing.gerenaixin;
        this.zijideqixueshangxian = Gerenshuxing.gerenaixin;
        this.zijidesudu = Gerenshuxing.gerenxingzhi;
        this.zijidefangyu = Gerenshuxing.gerenyizhi;
        //自己的回合数初始为0；
        this.zijihuiheshu = 0;
        this.huiheshuxianshi();
        //刷新自己的意志力
        this.zijiyizhilishua();
        //初始显示食盒的数量
        this.shihexianshi();
        //开放自己和怪物头像点击查看BUFF界面
        this.zijizu.touchEnabled = true;
        this.zijizu.addEventListener(egret.TouchEvent.TOUCH_TAP, this.chakanzijibuff, this);
        this.bosszu.touchEnabled = true;
        this.bosszu.addEventListener(egret.TouchEvent.TOUCH_TAP, this.chakanguai1buff, this);
        this.bosszu0.touchEnabled = true;
        this.bosszu0.addEventListener(egret.TouchEvent.TOUCH_TAP, this.chakanguai2buff, this);
        this.bosszu1.touchEnabled = true;
        this.bosszu1.addEventListener(egret.TouchEvent.TOUCH_TAP, this.chakanguai3buff, this);
        //开放下面的四个菜品点击查看菜品TIPS界面
        this.caixuanxiang.touchEnabled = true;
        this.caixuanxiang.addEventListener(egret.TouchEvent.TOUCH_TAP, this.chakancai1tips, this);
        this.caixuanxiang0.touchEnabled = true;
        this.caixuanxiang0.addEventListener(egret.TouchEvent.TOUCH_TAP, this.chakancai2tips, this);
        this.caixuanxiang1.touchEnabled = true;
        this.caixuanxiang1.addEventListener(egret.TouchEvent.TOUCH_TAP, this.chakancai3tips, this);
        this.caixuanxiang2.touchEnabled = true;
        this.caixuanxiang2.addEventListener(egret.TouchEvent.TOUCH_TAP, this.chakancai4tips, this);
    };
    //初始化怪物数据
    Zhandoujiemian.prototype.chushihuaguaiwu = function (id1, id2, id3) {
        for (var i = 0; i < Gerenshuxing.guaiwubiao.length; i++) {
            //怪物1初始化
            if (Gerenshuxing.guaiwubiao[i].id == id1) {
                this.guai1la = parseInt(Gerenshuxing.guaiwubiao[i].dikangla);
                this.guai1ma = parseInt(Gerenshuxing.guaiwubiao[i].dikangma);
                this.guai1suan = parseInt(Gerenshuxing.guaiwubiao[i].dikangsuan);
                this.guai1tian = parseInt(Gerenshuxing.guaiwubiao[i].dikangtian);
                this.guai1qixue = parseInt(Gerenshuxing.guaiwubiao[i].qixue);
                this.guai1qixuechushi = parseInt(Gerenshuxing.guaiwubiao[i].qixue);
                this.guai1gongjichushi = parseInt(Gerenshuxing.guaiwubiao[i].gongji);
                this.guai1gongji = parseInt(Gerenshuxing.guaiwubiao[i].gongji);
                this.guai1suduchushi = parseInt(Gerenshuxing.guaiwubiao[i].sudu);
                this.guai1sudu = parseInt(Gerenshuxing.guaiwubiao[i].sudu);
                this.guai1dengji = Gerenshuxing.guaiwubiao[i].level;
                this.guai1mingzi = Gerenshuxing.guaiwubiao[i].mingzi;
                this.guai1touxiang = Gerenshuxing.guaiwubiao[i].waixing;
                this.guai1jineng = Gerenshuxing.guaiwubiao[i].jineng;
                this.guai1jineng = this.guai1jineng.split(":");
                this.jianglileixing = Gerenshuxing.guaiwubiao[i].jiangchibianhao;
            }
            //怪物2初始化
            if (Gerenshuxing.guaiwubiao[i].id == id2) {
                this.guai2la = parseInt(Gerenshuxing.guaiwubiao[i].dikangla);
                this.guai2ma = parseInt(Gerenshuxing.guaiwubiao[i].dikangma);
                this.guai2suan = parseInt(Gerenshuxing.guaiwubiao[i].dikangsuan);
                this.guai2tian = parseInt(Gerenshuxing.guaiwubiao[i].dikangtian);
                this.guai2qixue = parseInt(Gerenshuxing.guaiwubiao[i].qixue);
                this.guai2qixuechushi = parseInt(Gerenshuxing.guaiwubiao[i].qixue);
                this.guai2gongjichushi = parseInt(Gerenshuxing.guaiwubiao[i].gongji);
                this.guai2gongji = parseInt(Gerenshuxing.guaiwubiao[i].gongji);
                this.guai2suduchushi = parseInt(Gerenshuxing.guaiwubiao[i].sudu);
                this.guai2sudu = parseInt(Gerenshuxing.guaiwubiao[i].sudu);
                this.guai2dengji = Gerenshuxing.guaiwubiao[i].level;
                this.guai2mingzi = Gerenshuxing.guaiwubiao[i].mingzi;
                this.guai2touxiang = Gerenshuxing.guaiwubiao[i].waixing;
                this.guai2jineng = Gerenshuxing.guaiwubiao[i].jineng;
                this.guai2jineng = this.guai2jineng.split(":");
            }
            //怪物3初始化
            if (Gerenshuxing.guaiwubiao[i].id == id3) {
                this.guai3la = parseInt(Gerenshuxing.guaiwubiao[i].dikangla);
                this.guai3ma = parseInt(Gerenshuxing.guaiwubiao[i].dikangma);
                this.guai3suan = parseInt(Gerenshuxing.guaiwubiao[i].dikangsuan);
                this.guai3tian = parseInt(Gerenshuxing.guaiwubiao[i].dikangtian);
                this.guai3qixue = parseInt(Gerenshuxing.guaiwubiao[i].qixue);
                this.guai3qixuechushi = parseInt(Gerenshuxing.guaiwubiao[i].qixue);
                this.guai3gongjichushi = parseInt(Gerenshuxing.guaiwubiao[i].gongji);
                this.guai3gongji = parseInt(Gerenshuxing.guaiwubiao[i].gongji);
                this.guai3suduchushi = parseInt(Gerenshuxing.guaiwubiao[i].sudu);
                this.guai3sudu = parseInt(Gerenshuxing.guaiwubiao[i].sudu);
                this.guai3dengji = Gerenshuxing.guaiwubiao[i].level;
                this.guai3mingzi = Gerenshuxing.guaiwubiao[i].mingzi;
                this.guai3touxiang = Gerenshuxing.guaiwubiao[i].waixing;
                this.guai3jineng = Gerenshuxing.guaiwubiao[i].jineng;
                this.guai3jineng = this.guai3jineng.split(":");
            }
        }
        //怪物1显示内容
        this.guaiwudengji.text = this.guai1dengji;
        this.mingzi.text = this.guai1mingzi;
        this.lashuxing.text = "" + this.guai1la;
        this.mashuxing.text = "" + this.guai1ma;
        this.suanshuxing.text = "" + this.guai1suan;
        this.tianshuxing.text = "" + this.guai1tian;
        this.npctouxiang.source = this.guai1touxiang + "_png";
        this.yimanzu.alpha = 0;
        //		this.buffxianshizu.alpha = 0;
        //怪1buff显示刷新
        this.guai1buff = [];
        this.guai1buffxianshi();
        //怪物2显示内容
        this.guaiwudengji0.text = this.guai2dengji;
        this.mingzi0.text = this.guai2mingzi;
        this.lashuxing0.text = "" + this.guai2la;
        this.mashuxing0.text = "" + this.guai2ma;
        this.suanshuxing0.text = "" + this.guai2suan;
        this.tianshuxing0.text = "" + this.guai2tian;
        this.npctouxiang0.source = this.guai2touxiang + "_png";
        this.yimanzu0.alpha = 0;
        //		this.buffxianshizu0.alpha = 0;
        //怪1buff显示刷新
        this.guai2buff = [];
        this.guai2buffxianshi();
        //怪物3显示内容
        this.guaiwudengji1.text = this.guai3dengji;
        this.mingzi1.text = this.guai3mingzi;
        this.lashuxing1.text = "" + this.guai3la;
        this.mashuxing1.text = "" + this.guai3ma;
        this.suanshuxing1.text = "" + this.guai3suan;
        this.tianshuxing1.text = "" + this.guai3tian;
        this.npctouxiang1.source = this.guai3touxiang + "_png";
        this.yimanzu1.alpha = 0;
        //		this.buffxianshizu1.alpha = 0;
        //怪1buff显示刷新
        this.guai3buff = [];
        this.guai3buffxianshi();
        //初始化人物数据
        this.chushihuarenwu();
    };
    Zhandoujiemian.prototype.guanbijiemian = function () {
        this.zhandoujiesu = true;
        Gameguanli.Kongzhitai().zhandoujiemianui("guan", "1", "2", "3");
        //		this.zhizhendingshi.stop();
        this.zhizhendingshi = null;
        //		this.huihejishiqi.stop();
        this.huihejishiqi = null;
        //		this.daojishigundong.stop();
        this.daojishigundong = null;
    };
    //初始显示食盒的数量
    Zhandoujiemian.prototype.shihexianshi = function () {
        if (this.houxuancaizu.length >= 10) {
            this.shihewenzishu.text = "9+";
        }
        else {
            if (this.houxuancaizu.length <= 0) {
                this.shihewenzishu.text = "空";
            }
            else {
                this.shihewenzishu.text = "" + this.houxuancaizu.length;
            }
        }
    };
    //初始化滚动指针位置
    Zhandoujiemian.prototype.gundongzhizhen = function () {
        //打开4个行动条组
        this.jinduzu.alpha = 1;
        this.jinduzu0.alpha = 1;
        this.jinduzu1.alpha = 1;
        this.jinduzu2.alpha = 1;
        //怪物1滚动指针
        this.jinduzu.y = this.img_sudujindu.y + this.img_sudujindu.height - this.jinduzu.height;
        this.zhizhen2y = this.jinduzu.y;
        //怪物2滚动指针
        this.jinduzu0.y = this.img_sudujindu.y + this.img_sudujindu.height - this.jinduzu0.height;
        this.zhizhen3y = this.jinduzu0.y;
        //怪物3滚动指针
        this.jinduzu1.y = this.img_sudujindu.y + this.img_sudujindu.height - this.jinduzu1.height;
        this.zhizhen4y = this.jinduzu1.y;
        //自己滚动指针
        this.jinduzu2.y = this.img_sudujindu.y + this.img_sudujindu.height - this.jinduzu2.height;
        this.zhizhen1y = this.jinduzu2.y;
        //怪物1滚动指针显示头像
        this.touxiangtu.source = this.guai1touxiang + "_png";
        //怪物2滚动指针显示头像
        this.touxiangtu0.source = this.guai2touxiang + "_png";
        //怪物3滚动指针显示头像
        this.touxiangtu1.source = this.guai3touxiang + "_png";
        //自己滚动指针显示头像
        this.zijizhizhentouxiang();
        //开始进行指针的滚动
        this.zhizhengundong();
    };
    //指针开始滚动,这是每一回合进行的开始步骤
    Zhandoujiemian.prototype.zhizhengundong = function () {
        //启动一个循环定时器
        //判断战斗是否已经结束
        if (this.zhandoujiesu == false) {
            this.zhizhendingshi = new egret.Timer(1000, 1);
            this.zhizhendingshi.addEventListener(egret.TimerEvent.TIMER, this.kaishizhizhenxingjin, this);
            this.zhizhendingshi.start();
        }
    };
    //开始指针行进
    Zhandoujiemian.prototype.kaishizhizhenxingjin = function () {
        this.shangmiantishixianshi("等待客人发布需求...");
        if (this.zhizhen1y <= this.img_sudujindu.y) {
            this.zijixingdong();
        }
        else if (this.zhizhen2y <= this.img_sudujindu.y) {
            this.guai1xingdong();
        }
        else if (this.zhizhen3y <= this.img_sudujindu.y) {
            this.guai2xingdong();
        }
        else if (this.zhizhen4y <= this.img_sudujindu.y) {
            this.guai3xingdong();
        }
        else {
            if (this.jinduzu2.alpha == 1) {
                this.zhizhen1y = this.zhizhen1y - this.zijidesudu;
                egret.Tween.get(this.jinduzu2).to({ y: this.zhizhen1y }, 1000);
            }
            if (this.jinduzu.alpha == 1) {
                this.zhizhen2y = this.zhizhen2y - this.guai1sudu;
                egret.Tween.get(this.jinduzu).to({ y: this.zhizhen2y }, 1000);
            }
            if (this.jinduzu0.alpha == 1) {
                this.zhizhen3y = this.zhizhen3y - this.guai2sudu;
                egret.Tween.get(this.jinduzu0).to({ y: this.zhizhen3y }, 1000);
            }
            if (this.jinduzu1.alpha == 1) {
                this.zhizhen4y = this.zhizhen4y - this.guai3sudu;
                egret.Tween.get(this.jinduzu1).to({ y: this.zhizhen4y }, 1000);
            }
            this.zhizhengundong();
        }
    };
    //自己行动时计算
    Zhandoujiemian.prototype.zijixingdong = function () {
        //行动指针归零
        this.jinduzu2.y = this.img_sudujindu.y + this.img_sudujindu.height - this.jinduzu2.height;
        this.zhizhen1y = this.jinduzu2.y;
        //上面提示文字
        this.shangmiantishixianshi("快给顾客呈上合适的菜品吧！");
        //开始生成气点
        this.qidianshu += 2;
        //处理自己的buff效果
        this.chulizijidebuff();
        if (this.qidianshu >= 10) {
            this.qidianshu = 10;
        }
        this.qidianshuxianshi();
        this.zijihuiheshu += 1;
        this.huiheshuxianshi();
        this.renwuhuihekaishi = true;
    };
    //怪物1行动时计算
    Zhandoujiemian.prototype.guai1xingdong = function () {
        var _this = this;
        //行动指针归零
        this.jinduzu.y = this.img_sudujindu.y + this.img_sudujindu.height - this.jinduzu.height;
        this.zhizhen2y = this.jinduzu.y;
        this.xiamiantishizu.alpha = 0;
        this.shangmiantishixianshi("看看[" + this.guai1mingzi + "]有什么烦恼吧！");
        this.renwuhuihekaishi = true;
        //处理怪物的buff效果
        this.chuliguai1debuff();
        //		this.zhizhengundong();
        //随机出一个技能
        this.guai1zuizhonggongji = this.guai1gongji;
        var gongjipupian = "img_hourenjineeng_png";
        var jinenghanhua = "快点上菜呀!";
        var suijijineng = Math.floor(Math.random() * this.guai1jineng.length);
        for (var i = 0; i < Gerenshuxing.jinengbiao.length; i++) {
            if (this.guai1jineng[suijijineng] == Gerenshuxing.jinengbiao[i].id) {
                this.guai1zuizhonggongji = Math.floor(this.guai1zuizhonggongji + this.guai1zuizhonggongji * parseInt(Gerenshuxing.jinengbiao[i].chushizhi) / 100);
                gongjipupian = Gerenshuxing.jinengbiao[i].jinengicon;
                jinenghanhua = Gerenshuxing.jinengbiao[i].hanhua;
            }
        }
        //		console.log(this.guai1zuizhonggongji,this.guai1gongji)
        var guai1gongjistart = new egret.Bitmap();
        var gaui1gongjitu = RES.getRes(gongjipupian);
        guai1gongjistart.texture = gaui1gongjitu;
        this.addChild(guai1gongjistart);
        guai1gongjistart.x = this.bosszu.x;
        guai1gongjistart.y = this.bosszu.y;
        guai1gongjistart.scaleX = 0.3;
        guai1gongjistart.scaleY = 0.3;
        egret.Tween.get(guai1gongjistart).to({ scaleX: 1, scaleY: 1, x: this.zhandouxianshizu.x, y: this.zhandouxianshizu.y }, 1000).call(function () {
            _this.zhandouxianshizu.alpha = 1;
            _this.zhandounierong.source = gongjipupian;
            _this.zhandouhanhuazu.alpha = 1;
            _this.zhandouhanhua.text = jinenghanhua;
            guai1gongjistart.alpha = 0;
            egret.Tween.get(guai1gongjistart).wait(2000).call(function () {
                guai1gongjistart.alpha = 1;
                egret.Tween.get(guai1gongjistart).to({ scaleX: 0, scaleY: 0, x: _this.zijizu.x + _this.zijizu.width / 3 * 1, y: _this.zijizu.y + _this.zijizu.height / 2 }, 500).call(function () {
                    _this.removeChild(guai1gongjistart);
                    //正式计算数据
                    _this.zhandouxianshizu.alpha = 0;
                    _this.zhandounierong.source = "";
                    _this.zhandouhanhuazu.alpha = 0;
                    _this.zhandouhanhua.text = "";
                    _this.zijideqixue = Math.floor(_this.zijideqixue - _this.guai1zuizhonggongji * (1 - _this.zijidefangyu / 1000));
                    if (_this.zijideqixue <= 0) {
                        _this.zijideqixue = 0;
                    }
                    _this.zhandoutexiao("putong", Math.floor(_this.guai1zuizhonggongji * (1 - _this.zijidefangyu / 1000)), 0);
                    _this.shuaxinzijixuetiao();
                    egret.Tween.get(guai1gongjistart).wait(2000).call(function () {
                        _this.zhizhengundong();
                    });
                });
            });
        });
    };
    //怪物2行动时计算
    Zhandoujiemian.prototype.guai2xingdong = function () {
        var _this = this;
        //行动指针归零
        this.jinduzu0.y = this.img_sudujindu.y + this.img_sudujindu.height - this.jinduzu0.height;
        this.zhizhen3y = this.jinduzu0.y;
        this.xiamiantishizu.alpha = 0;
        this.shangmiantishixianshi("看看[" + this.guai2mingzi + "]有什么烦恼吧！");
        this.renwuhuihekaishi = true;
        //处理怪物的buff效果
        this.chuliguai2debuff();
        //		this.zhizhengundong();
        //随机出一个技能
        this.guai2zuizhonggongji = this.guai2gongji;
        var gongjipupian = "img_hourenjineeng_png";
        var jinenghanhua = "快点上菜呀!";
        var suijijineng = Math.floor(Math.random() * this.guai2jineng.length);
        for (var i = 0; i < Gerenshuxing.jinengbiao.length; i++) {
            if (this.guai2jineng[suijijineng] == Gerenshuxing.jinengbiao[i].id) {
                this.guai2zuizhonggongji = Math.floor(this.guai2zuizhonggongji + this.guai2zuizhonggongji * parseInt(Gerenshuxing.jinengbiao[i].chushizhi) / 100);
                gongjipupian = Gerenshuxing.jinengbiao[i].jinengicon;
                jinenghanhua = Gerenshuxing.jinengbiao[i].hanhua;
            }
        }
        //		console.log(this.guai2zuizhonggongji,this.guai2gongji)
        var guai2gongjistart = new egret.Bitmap();
        var gaui2gongjitu = RES.getRes(gongjipupian);
        guai2gongjistart.texture = gaui2gongjitu;
        this.addChild(guai2gongjistart);
        guai2gongjistart.x = this.bosszu0.x;
        guai2gongjistart.y = this.bosszu0.y;
        guai2gongjistart.scaleX = 0.3;
        guai2gongjistart.scaleY = 0.3;
        egret.Tween.get(guai2gongjistart).to({ scaleX: 1, scaleY: 1, x: this.zhandouxianshizu.x, y: this.zhandouxianshizu.y }, 1000).call(function () {
            _this.zhandouxianshizu.alpha = 1;
            _this.zhandounierong.source = gongjipupian;
            _this.zhandouhanhuazu.alpha = 1;
            _this.zhandouhanhua.text = jinenghanhua;
            guai2gongjistart.alpha = 0;
            egret.Tween.get(guai2gongjistart).wait(2000).call(function () {
                guai2gongjistart.alpha = 1;
                egret.Tween.get(guai2gongjistart).to({ scaleX: 0, scaleY: 0, x: _this.zijizu.x + _this.zijizu.width / 3 * 1, y: _this.zijizu.y + _this.zijizu.height / 2 }, 500).call(function () {
                    _this.removeChild(guai2gongjistart);
                    //正式计算数据
                    _this.zhandouxianshizu.alpha = 0;
                    _this.zhandounierong.source = "";
                    _this.zhandouhanhuazu.alpha = 0;
                    _this.zhandouhanhua.text = "";
                    _this.zijideqixue = Math.floor(_this.zijideqixue - _this.guai2zuizhonggongji * (1 - _this.zijidefangyu / 1000));
                    if (_this.zijideqixue <= 0) {
                        _this.zijideqixue = 0;
                    }
                    _this.zhandoutexiao("putong", Math.floor(_this.guai2zuizhonggongji * (1 - _this.zijidefangyu / 1000)), 0);
                    _this.shuaxinzijixuetiao();
                    egret.Tween.get(guai2gongjistart).wait(2000).call(function () {
                        _this.zhizhengundong();
                    });
                });
            });
        });
    };
    //怪物3行动时计算
    Zhandoujiemian.prototype.guai3xingdong = function () {
        var _this = this;
        //行动指针归零
        this.jinduzu1.y = this.img_sudujindu.y + this.img_sudujindu.height - this.jinduzu1.height;
        this.zhizhen4y = this.jinduzu1.y;
        this.xiamiantishizu.alpha = 0;
        this.shangmiantishixianshi("看看[" + this.guai3mingzi + "]有什么烦恼吧！");
        this.renwuhuihekaishi = true;
        //处理怪物的buff效果
        this.chuliguai3debuff();
        //		this.zhizhengundong();
        //随机出一个技能
        this.guai3zuizhonggongji = this.guai3gongji;
        var gongjipupian = "img_hourenjineeng_png";
        var jinenghanhua = "快点上菜呀!";
        var suijijineng = Math.floor(Math.random() * this.guai3jineng.length);
        for (var i = 0; i < Gerenshuxing.jinengbiao.length; i++) {
            if (this.guai3jineng[suijijineng] == Gerenshuxing.jinengbiao[i].id) {
                this.guai3zuizhonggongji = Math.floor(this.guai3zuizhonggongji + this.guai3zuizhonggongji * parseInt(Gerenshuxing.jinengbiao[i].chushizhi) / 100);
                gongjipupian = Gerenshuxing.jinengbiao[i].jinengicon;
                jinenghanhua = Gerenshuxing.jinengbiao[i].hanhua;
            }
        }
        //		console.log(this.guai3zuizhonggongji,this.guai3gongji)
        var guai3gongjistart = new egret.Bitmap();
        var gaui3gongjitu = RES.getRes(gongjipupian);
        guai3gongjistart.texture = gaui3gongjitu;
        this.addChild(guai3gongjistart);
        guai3gongjistart.x = this.bosszu1.x;
        guai3gongjistart.y = this.bosszu1.y;
        guai3gongjistart.scaleX = 0.3;
        guai3gongjistart.scaleY = 0.3;
        egret.Tween.get(guai3gongjistart).to({ scaleX: 1, scaleY: 1, x: this.zhandouxianshizu.x, y: this.zhandouxianshizu.y }, 1000).call(function () {
            _this.zhandouxianshizu.alpha = 1;
            _this.zhandounierong.source = gongjipupian;
            _this.zhandouhanhuazu.alpha = 1;
            _this.zhandouhanhua.text = jinenghanhua;
            guai3gongjistart.alpha = 0;
            egret.Tween.get(guai3gongjistart).wait(2000).call(function () {
                guai3gongjistart.alpha = 1;
                egret.Tween.get(guai3gongjistart).to({ scaleX: 0, scaleY: 0, x: _this.zijizu.x + _this.zijizu.width / 3 * 1, y: _this.zijizu.y + _this.zijizu.height / 2 }, 500).call(function () {
                    _this.removeChild(guai3gongjistart);
                    //正式计算数据
                    _this.zhandouxianshizu.alpha = 0;
                    _this.zhandounierong.source = "";
                    _this.zhandouhanhuazu.alpha = 0;
                    _this.zhandouhanhua.text = "";
                    _this.zijideqixue = Math.floor(_this.zijideqixue - _this.guai3zuizhonggongji * (1 - _this.zijidefangyu / 1000));
                    if (_this.zijideqixue <= 0) {
                        _this.zijideqixue = 0;
                    }
                    _this.zhandoutexiao("putong", Math.floor(_this.guai3zuizhonggongji * (1 - _this.zijidefangyu / 1000)), 0);
                    _this.shuaxinzijixuetiao();
                    egret.Tween.get(guai3gongjistart).wait(2000).call(function () {
                        _this.zhizhengundong();
                    });
                });
            });
        });
    };
    //显示气点数量
    Zhandoujiemian.prototype.qidianshuxianshi = function () {
        var _this = this;
        this.benhuihechucaiid = "0";
        switch (this.qidianshu) {
            case 0:
                this.tiaoliao.alpha = 0;
                this.tiaoliao0.alpha = 0;
                this.tiaoliao1.alpha = 0;
                this.tiaoliao2.alpha = 0;
                this.tiaoliao3.alpha = 0;
                this.tiaoliao4.alpha = 0;
                this.tiaoliao5.alpha = 0;
                this.tiaoliao6.alpha = 0;
                this.tiaoliao7.alpha = 0;
                this.tiaoliao8.alpha = 0;
                this.tishixuanzexianshi("配料不足！无法上菜");
                break;
            case 1:
                this.tishixuanzexianshi("正在补充配料");
                egret.Tween.get(this.tiaoliao).to({ alpha: 1 }, 200).call(function () {
                    _this.tishixuanzexianshi("配料补充完毕！");
                    _this.kaifangshangcai();
                });
                this.tiaoliao0.alpha = 0;
                this.tiaoliao1.alpha = 0;
                this.tiaoliao2.alpha = 0;
                this.tiaoliao3.alpha = 0;
                this.tiaoliao4.alpha = 0;
                this.tiaoliao5.alpha = 0;
                this.tiaoliao6.alpha = 0;
                this.tiaoliao7.alpha = 0;
                this.tiaoliao8.alpha = 0;
                break;
            case 2:
                this.tishixuanzexianshi("正在补充配料");
                egret.Tween.get(this.tiaoliao).to({ alpha: 1 }, 200).call(function () {
                    egret.Tween.get(_this.tiaoliao0).to({ alpha: 1 }, 200).call(function () {
                        _this.tishixuanzexianshi("配料补充完毕！");
                        _this.kaifangshangcai();
                    });
                });
                this.tiaoliao1.alpha = 0;
                this.tiaoliao2.alpha = 0;
                this.tiaoliao3.alpha = 0;
                this.tiaoliao4.alpha = 0;
                this.tiaoliao5.alpha = 0;
                this.tiaoliao6.alpha = 0;
                this.tiaoliao7.alpha = 0;
                this.tiaoliao8.alpha = 0;
                break;
            case 3:
                this.tishixuanzexianshi("正在补充配料");
                egret.Tween.get(this.tiaoliao).to({ alpha: 1 }, 200).call(function () {
                    egret.Tween.get(_this.tiaoliao0).to({ alpha: 1 }, 200).call(function () {
                        egret.Tween.get(_this.tiaoliao1).to({ alpha: 1 }, 200).call(function () {
                            _this.tishixuanzexianshi("配料补充完毕！");
                            _this.kaifangshangcai();
                        });
                    });
                });
                this.tiaoliao2.alpha = 0;
                this.tiaoliao3.alpha = 0;
                this.tiaoliao4.alpha = 0;
                this.tiaoliao5.alpha = 0;
                this.tiaoliao6.alpha = 0;
                this.tiaoliao7.alpha = 0;
                this.tiaoliao8.alpha = 0;
                break;
            case 4:
                this.tishixuanzexianshi("正在补充配料");
                egret.Tween.get(this.tiaoliao).to({ alpha: 1 }, 200).call(function () {
                    egret.Tween.get(_this.tiaoliao0).to({ alpha: 1 }, 200).call(function () {
                        egret.Tween.get(_this.tiaoliao1).to({ alpha: 1 }, 200).call(function () {
                            egret.Tween.get(_this.tiaoliao2).to({ alpha: 1 }, 200).call(function () {
                                _this.tishixuanzexianshi("配料补充完毕！");
                                _this.kaifangshangcai();
                            });
                        });
                    });
                });
                this.tiaoliao3.alpha = 0;
                this.tiaoliao4.alpha = 0;
                this.tiaoliao5.alpha = 0;
                this.tiaoliao6.alpha = 0;
                this.tiaoliao7.alpha = 0;
                this.tiaoliao8.alpha = 0;
                break;
            case 5:
                this.tishixuanzexianshi("正在补充配料");
                egret.Tween.get(this.tiaoliao).to({ alpha: 1 }, 200).call(function () {
                    egret.Tween.get(_this.tiaoliao0).to({ alpha: 1 }, 200).call(function () {
                        egret.Tween.get(_this.tiaoliao1).to({ alpha: 1 }, 200).call(function () {
                            egret.Tween.get(_this.tiaoliao2).to({ alpha: 1 }, 200).call(function () {
                                egret.Tween.get(_this.tiaoliao3).to({ alpha: 1 }, 200).call(function () {
                                    _this.tishixuanzexianshi("配料补充完毕！");
                                    _this.kaifangshangcai();
                                });
                            });
                        });
                    });
                });
                this.tiaoliao4.alpha = 0;
                this.tiaoliao5.alpha = 0;
                this.tiaoliao6.alpha = 0;
                this.tiaoliao7.alpha = 0;
                this.tiaoliao8.alpha = 0;
                break;
            case 6:
                this.tishixuanzexianshi("正在补充配料");
                egret.Tween.get(this.tiaoliao).to({ alpha: 1 }, 200).call(function () {
                    egret.Tween.get(_this.tiaoliao0).to({ alpha: 1 }, 200).call(function () {
                        egret.Tween.get(_this.tiaoliao1).to({ alpha: 1 }, 200).call(function () {
                            egret.Tween.get(_this.tiaoliao2).to({ alpha: 1 }, 200).call(function () {
                                egret.Tween.get(_this.tiaoliao3).to({ alpha: 1 }, 200).call(function () {
                                    egret.Tween.get(_this.tiaoliao4).to({ alpha: 1 }, 200).call(function () {
                                        _this.tishixuanzexianshi("配料补充完毕！");
                                        _this.kaifangshangcai();
                                    });
                                });
                            });
                        });
                    });
                });
                this.tiaoliao5.alpha = 0;
                this.tiaoliao6.alpha = 0;
                this.tiaoliao7.alpha = 0;
                this.tiaoliao8.alpha = 0;
                break;
            case 7:
                this.tishixuanzexianshi("正在补充配料");
                egret.Tween.get(this.tiaoliao).to({ alpha: 1 }, 200).call(function () {
                    egret.Tween.get(_this.tiaoliao0).to({ alpha: 1 }, 200).call(function () {
                        egret.Tween.get(_this.tiaoliao1).to({ alpha: 1 }, 200).call(function () {
                            egret.Tween.get(_this.tiaoliao2).to({ alpha: 1 }, 200).call(function () {
                                egret.Tween.get(_this.tiaoliao3).to({ alpha: 1 }, 200).call(function () {
                                    egret.Tween.get(_this.tiaoliao4).to({ alpha: 1 }, 200).call(function () {
                                        egret.Tween.get(_this.tiaoliao5).to({ alpha: 1 }, 200).call(function () {
                                            _this.tishixuanzexianshi("配料补充完毕！");
                                            _this.kaifangshangcai();
                                        });
                                    });
                                });
                            });
                        });
                    });
                });
                this.tiaoliao6.alpha = 0;
                this.tiaoliao7.alpha = 0;
                this.tiaoliao8.alpha = 0;
                break;
            case 8:
                this.tishixuanzexianshi("正在补充配料");
                egret.Tween.get(this.tiaoliao).to({ alpha: 1 }, 200).call(function () {
                    egret.Tween.get(_this.tiaoliao0).to({ alpha: 1 }, 200).call(function () {
                        egret.Tween.get(_this.tiaoliao1).to({ alpha: 1 }, 200).call(function () {
                            egret.Tween.get(_this.tiaoliao2).to({ alpha: 1 }, 200).call(function () {
                                egret.Tween.get(_this.tiaoliao3).to({ alpha: 1 }, 200).call(function () {
                                    egret.Tween.get(_this.tiaoliao4).to({ alpha: 1 }, 200).call(function () {
                                        egret.Tween.get(_this.tiaoliao5).to({ alpha: 1 }, 200).call(function () {
                                            egret.Tween.get(_this.tiaoliao6).to({ alpha: 1 }, 200).call(function () {
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
                this.tiaoliao7.alpha = 0;
                this.tiaoliao8.alpha = 0;
                break;
            case 9:
                this.tishixuanzexianshi("正在补充配料");
                egret.Tween.get(this.tiaoliao).to({ alpha: 1 }, 200).call(function () {
                    egret.Tween.get(_this.tiaoliao0).to({ alpha: 1 }, 200).call(function () {
                        egret.Tween.get(_this.tiaoliao1).to({ alpha: 1 }, 200).call(function () {
                            egret.Tween.get(_this.tiaoliao2).to({ alpha: 1 }, 200).call(function () {
                                egret.Tween.get(_this.tiaoliao3).to({ alpha: 1 }, 200).call(function () {
                                    egret.Tween.get(_this.tiaoliao4).to({ alpha: 1 }, 200).call(function () {
                                        egret.Tween.get(_this.tiaoliao5).to({ alpha: 1 }, 200).call(function () {
                                            egret.Tween.get(_this.tiaoliao6).to({ alpha: 1 }, 200).call(function () {
                                                egret.Tween.get(_this.tiaoliao7).to({ alpha: 1 }, 200).call(function () {
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
                this.tiaoliao8.alpha = 0;
                break;
            case 10:
                this.tishixuanzexianshi("正在补充配料");
                egret.Tween.get(this.tiaoliao).to({ alpha: 1 }, 200).call(function () {
                    egret.Tween.get(_this.tiaoliao0).to({ alpha: 1 }, 200).call(function () {
                        egret.Tween.get(_this.tiaoliao1).to({ alpha: 1 }, 200).call(function () {
                            egret.Tween.get(_this.tiaoliao2).to({ alpha: 1 }, 200).call(function () {
                                egret.Tween.get(_this.tiaoliao3).to({ alpha: 1 }, 200).call(function () {
                                    egret.Tween.get(_this.tiaoliao4).to({ alpha: 1 }, 200).call(function () {
                                        egret.Tween.get(_this.tiaoliao5).to({ alpha: 1 }, 200).call(function () {
                                            egret.Tween.get(_this.tiaoliao6).to({ alpha: 1 }, 200).call(function () {
                                                egret.Tween.get(_this.tiaoliao7).to({ alpha: 1 }, 200).call(function () {
                                                    egret.Tween.get(_this.tiaoliao8).to({ alpha: 1 }, 200).call(function () {
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
    //下面的提示显示
    Zhandoujiemian.prototype.tishixuanzexianshi = function (shuoming) {
        this.xiamiantishizu.alpha = 1;
        this.chupaitishiwenzi.text = shuoming;
    };
    //上面的提示显示
    Zhandoujiemian.prototype.shangmiantishixianshi = function (shuoming) {
        this.shangmiantishizu.alpha = 1;
        this.shangmiantishiwenzi.text = shuoming;
    };
    //显示自己的头像
    Zhandoujiemian.prototype.xianshizijitouxiang = function () {
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
    Zhandoujiemian.prototype.xianshizijidetouxiang = function (evt) {
        if (evt.currentTarget.data) {
            //			egret.log("加载头像成功: " + evt.currentTarget.data);
            var texture = new egret.Texture();
            texture.bitmapData = evt.currentTarget.data;
            var head = new egret.Bitmap(texture);
            head.x = 0;
            head.y = 0;
            head.width = this.touxiangzu2.width;
            head.height = this.touxiangzu2.height;
            this.touxiangzu2.addChild(head);
        }
    };
    //显示自己的指针头像
    Zhandoujiemian.prototype.zijizhizhentouxiang = function () {
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
    Zhandoujiemian.prototype.zijizhizhentouxiangxianshi = function (evt) {
        if (evt.currentTarget.data) {
            //			egret.log("加载头像成功: " + evt.currentTarget.data);
            var texture = new egret.Texture();
            texture.bitmapData = evt.currentTarget.data;
            var head = new egret.Bitmap(texture);
            head.x = 0;
            head.y = 0;
            head.width = this.jindutouxiang2.width;
            head.height = this.jindutouxiang2.height;
            this.jindutouxiang2.addChild(head);
        }
    };
    Zhandoujiemian.prototype.kaifangshangcai = function () {
        var _this = this;
        var shipubiao = RES.getRes("shipubiao_json");
        if (this.di1caiid == "0") {
            if (this.houxuancaizu.length > 0) {
                this.tishixuanzexianshi("从食盒中取出菜品");
                var suijidi1cai = Math.floor(Math.random() * this.houxuancaizu.length);
                this.di1caiid = this.houxuancaizu[suijidi1cai];
                var xiugaihoushuzu = [];
                for (var i = 0; i < this.houxuancaizu.length; i++) {
                    if (this.houxuancaizu[i] != this.di1caiid) {
                        xiugaihoushuzu.push(this.houxuancaizu[i]);
                    }
                }
                this.houxuancaizu = xiugaihoushuzu;
                this.shihexianshi();
                if (parseInt(this.di1caiid) >= 1000 && parseInt(this.di1caiid) < 2000) {
                    this.di1caiqidian = 2;
                }
                else if (parseInt(this.di1caiid) >= 2000 && parseInt(this.di1caiid) < 3000) {
                    this.di1caiqidian = 4;
                }
                else if (parseInt(this.di1caiid) >= 3000 && parseInt(this.di1caiid) < 4000) {
                    this.di1caiqidian = 3;
                }
                else if (parseInt(this.di1caiid) >= 4000 && parseInt(this.di1caiid) < 5000) {
                    this.di1caiqidian = 1;
                }
                var shicaiicon1_1 = "";
                for (var di1 = 0; di1 < shipubiao.length; di1++) {
                    if (shipubiao[di1].id == this.di1caiid) {
                        shicaiicon1_1 = shipubiao[di1].id + "_png";
                        break;
                    }
                }
                var xianshitupian1_1 = new egret.Bitmap();
                var texture1 = RES.getRes(shicaiicon1_1);
                xianshitupian1_1.texture = texture1;
                this.addChild(xianshitupian1_1);
                xianshitupian1_1.x = this.shihezu.x;
                xianshitupian1_1.y = this.shihezu.y;
                xianshitupian1_1.scaleX = 0.2;
                xianshitupian1_1.scaleY = 0.2;
                egret.Tween.get(xianshitupian1_1).to({ scaleX: 0.8, scaleY: 0.8, x: this.caixuanxiang.x, y: this.caixuanxiang.y }, 2000).call(function () {
                    _this.removeChild(xianshitupian1_1);
                    _this.caiicon.source = shicaiicon1_1;
                    if (parseInt(_this.di1caiid) >= 1000 && parseInt(_this.di1caiid) < 2000) {
                        _this.xiaohao_1_.alpha = 1;
                        _this.xiaohao_2_.alpha = 1;
                        _this.xiaohao_3_.alpha = 0;
                        _this.xiaohao_4_.alpha = 0;
                    }
                    else if (parseInt(_this.di1caiid) >= 2000 && parseInt(_this.di1caiid) < 3000) {
                        _this.xiaohao_1_.alpha = 1;
                        _this.xiaohao_2_.alpha = 1;
                        _this.xiaohao_3_.alpha = 1;
                        _this.xiaohao_4_.alpha = 1;
                    }
                    else if (parseInt(_this.di1caiid) >= 3000 && parseInt(_this.di1caiid) < 4000) {
                        _this.xiaohao_1_.alpha = 1;
                        _this.xiaohao_2_.alpha = 1;
                        _this.xiaohao_3_.alpha = 1;
                        _this.xiaohao_4_.alpha = 0;
                    }
                    else if (parseInt(_this.di1caiid) >= 4000 && parseInt(_this.di1caiid) < 5000) {
                        _this.xiaohao_1_.alpha = 1;
                        _this.xiaohao_2_.alpha = 0;
                        _this.xiaohao_3_.alpha = 0;
                        _this.xiaohao_4_.alpha = 0;
                    }
                    _this.tishixuanzexianshi("菜品已上新！");
                });
            }
            else {
                this.tishixuanzexianshi("食盒空空如也!");
            }
        }
        if (this.di2caiid == "0") {
            if (this.houxuancaizu.length > 0) {
                this.tishixuanzexianshi("从食盒中取出菜品");
                var suijidi2cai = Math.floor(Math.random() * this.houxuancaizu.length);
                this.di2caiid = this.houxuancaizu[suijidi2cai];
                var xiugaihoushuzu = [];
                for (var i = 0; i < this.houxuancaizu.length; i++) {
                    if (this.houxuancaizu[i] != this.di2caiid) {
                        xiugaihoushuzu.push(this.houxuancaizu[i]);
                    }
                }
                this.houxuancaizu = xiugaihoushuzu;
                this.shihexianshi();
                if (parseInt(this.di2caiid) >= 1000 && parseInt(this.di2caiid) < 2000) {
                    this.di2caiqidian = 2;
                }
                else if (parseInt(this.di2caiid) >= 2000 && parseInt(this.di2caiid) < 3000) {
                    this.di2caiqidian = 4;
                }
                else if (parseInt(this.di2caiid) >= 3000 && parseInt(this.di2caiid) < 4000) {
                    this.di2caiqidian = 3;
                }
                else if (parseInt(this.di2caiid) >= 4000 && parseInt(this.di2caiid) < 5000) {
                    this.di2caiqidian = 1;
                }
                var shicaiicon2_1 = "";
                for (var di2 = 0; di2 < shipubiao.length; di2++) {
                    if (shipubiao[di2].id == this.di2caiid) {
                        shicaiicon2_1 = shipubiao[di2].id + "_png";
                        break;
                    }
                }
                var xianshitupian2_1 = new egret.Bitmap();
                var texture2 = RES.getRes(shicaiicon2_1);
                xianshitupian2_1.texture = texture2;
                this.addChild(xianshitupian2_1);
                xianshitupian2_1.x = this.shihezu.x;
                xianshitupian2_1.y = this.shihezu.y;
                xianshitupian2_1.scaleX = 0.2;
                xianshitupian2_1.scaleY = 0.2;
                egret.Tween.get(xianshitupian2_1).to({ scaleX: 0.8, scaleY: 0.8, x: this.caixuanxiang0.x, y: this.caixuanxiang0.y }, 2000).call(function () {
                    _this.removeChild(xianshitupian2_1);
                    _this.caiicon0.source = shicaiicon2_1;
                    if (parseInt(_this.di2caiid) >= 1000 && parseInt(_this.di2caiid) < 2000) {
                        _this.xiaohao_1_0.alpha = 1;
                        _this.xiaohao_2_0.alpha = 1;
                        _this.xiaohao_3_0.alpha = 0;
                        _this.xiaohao_4_0.alpha = 0;
                    }
                    else if (parseInt(_this.di2caiid) >= 2000 && parseInt(_this.di2caiid) < 3000) {
                        _this.xiaohao_1_0.alpha = 1;
                        _this.xiaohao_2_0.alpha = 1;
                        _this.xiaohao_3_0.alpha = 1;
                        _this.xiaohao_4_0.alpha = 1;
                    }
                    else if (parseInt(_this.di2caiid) >= 3000 && parseInt(_this.di2caiid) < 4000) {
                        _this.xiaohao_1_0.alpha = 1;
                        _this.xiaohao_2_0.alpha = 1;
                        _this.xiaohao_3_0.alpha = 1;
                        _this.xiaohao_4_0.alpha = 0;
                    }
                    else if (parseInt(_this.di2caiid) >= 4000 && parseInt(_this.di2caiid) < 5000) {
                        _this.xiaohao_1_0.alpha = 1;
                        _this.xiaohao_2_0.alpha = 0;
                        _this.xiaohao_3_0.alpha = 0;
                        _this.xiaohao_4_0.alpha = 0;
                    }
                    _this.tishixuanzexianshi("菜品已上新！");
                });
            }
            else {
                this.tishixuanzexianshi("食盒空空如也!");
            }
        }
        if (this.di3caiid == "0") {
            if (this.houxuancaizu.length > 0) {
                this.tishixuanzexianshi("从食盒中取出菜品");
                var suijidi3cai = Math.floor(Math.random() * this.houxuancaizu.length);
                this.di3caiid = this.houxuancaizu[suijidi3cai];
                var xiugaihoushuzu = [];
                for (var i = 0; i < this.houxuancaizu.length; i++) {
                    if (this.houxuancaizu[i] != this.di3caiid) {
                        xiugaihoushuzu.push(this.houxuancaizu[i]);
                    }
                }
                this.houxuancaizu = xiugaihoushuzu;
                this.shihexianshi();
                if (parseInt(this.di3caiid) >= 1000 && parseInt(this.di3caiid) < 2000) {
                    this.di3caiqidian = 2;
                }
                else if (parseInt(this.di3caiid) >= 2000 && parseInt(this.di3caiid) < 3000) {
                    this.di3caiqidian = 4;
                }
                else if (parseInt(this.di3caiid) >= 3000 && parseInt(this.di3caiid) < 4000) {
                    this.di3caiqidian = 3;
                }
                else if (parseInt(this.di3caiid) >= 4000 && parseInt(this.di3caiid) < 5000) {
                    this.di3caiqidian = 1;
                }
                var shicaiicon3_1 = "";
                for (var di3 = 0; di3 < shipubiao.length; di3++) {
                    if (shipubiao[di3].id == this.di3caiid) {
                        shicaiicon3_1 = shipubiao[di3].id + "_png";
                        break;
                    }
                }
                var xianshitupian3_1 = new egret.Bitmap();
                var texture3 = RES.getRes(shicaiicon3_1);
                xianshitupian3_1.texture = texture3;
                this.addChild(xianshitupian3_1);
                xianshitupian3_1.x = this.shihezu.x;
                xianshitupian3_1.y = this.shihezu.y;
                xianshitupian3_1.scaleX = 0.2;
                xianshitupian3_1.scaleY = 0.2;
                egret.Tween.get(xianshitupian3_1).to({ scaleX: 0.8, scaleY: 0.8, x: this.caixuanxiang1.x, y: this.caixuanxiang1.y }, 2000).call(function () {
                    _this.removeChild(xianshitupian3_1);
                    _this.caiicon1.source = shicaiicon3_1;
                    if (parseInt(_this.di3caiid) >= 1000 && parseInt(_this.di3caiid) < 2000) {
                        _this.xiaohao_1_1.alpha = 1;
                        _this.xiaohao_2_1.alpha = 1;
                        _this.xiaohao_3_1.alpha = 0;
                        _this.xiaohao_4_1.alpha = 0;
                    }
                    else if (parseInt(_this.di3caiid) >= 2000 && parseInt(_this.di3caiid) < 3000) {
                        _this.xiaohao_1_1.alpha = 1;
                        _this.xiaohao_2_1.alpha = 1;
                        _this.xiaohao_3_1.alpha = 1;
                        _this.xiaohao_4_1.alpha = 1;
                    }
                    else if (parseInt(_this.di3caiid) >= 3000 && parseInt(_this.di3caiid) < 4000) {
                        _this.xiaohao_1_1.alpha = 1;
                        _this.xiaohao_2_1.alpha = 1;
                        _this.xiaohao_3_1.alpha = 1;
                        _this.xiaohao_4_1.alpha = 0;
                    }
                    else if (parseInt(_this.di3caiid) >= 4000 && parseInt(_this.di3caiid) < 5000) {
                        _this.xiaohao_1_1.alpha = 1;
                        _this.xiaohao_2_1.alpha = 0;
                        _this.xiaohao_3_1.alpha = 0;
                        _this.xiaohao_4_1.alpha = 0;
                    }
                    _this.tishixuanzexianshi("菜品已上新！");
                });
            }
            else {
                this.tishixuanzexianshi("食盒空空如也!");
            }
        }
        if (this.di4caiid == "0") {
            //			console.log(this.houxuancaizu);
            if (this.houxuancaizu.length > 0) {
                this.tishixuanzexianshi("从食盒中取出菜品");
                var suijidi4cai = Math.floor(Math.random() * this.houxuancaizu.length);
                this.di4caiid = this.houxuancaizu[suijidi4cai];
                var xiugaihoushuzu = [];
                for (var i = 0; i < this.houxuancaizu.length; i++) {
                    if (this.houxuancaizu[i] != this.di4caiid) {
                        xiugaihoushuzu.push(this.houxuancaizu[i]);
                    }
                }
                this.houxuancaizu = xiugaihoushuzu;
                //				console.log(this.houxuancaizu);
                this.shihexianshi();
                if (parseInt(this.di4caiid) >= 1000 && parseInt(this.di4caiid) < 2000) {
                    this.di4caiqidian = 2;
                }
                else if (parseInt(this.di4caiid) >= 2000 && parseInt(this.di4caiid) < 3000) {
                    this.di4caiqidian = 4;
                }
                else if (parseInt(this.di4caiid) >= 3000 && parseInt(this.di4caiid) < 4000) {
                    this.di4caiqidian = 3;
                }
                else if (parseInt(this.di4caiid) >= 4000 && parseInt(this.di4caiid) < 5000) {
                    this.di4caiqidian = 1;
                }
                var shicaiicon4_1 = "";
                for (var di4 = 0; di4 < shipubiao.length; di4++) {
                    if (shipubiao[di4].id == this.di4caiid) {
                        shicaiicon4_1 = shipubiao[di4].id + "_png";
                        break;
                    }
                }
                var xianshitupian4_1 = new egret.Bitmap();
                var texture4 = RES.getRes(shicaiicon4_1);
                xianshitupian4_1.texture = texture4;
                this.addChild(xianshitupian4_1);
                xianshitupian4_1.x = this.shihezu.x;
                xianshitupian4_1.y = this.shihezu.y;
                xianshitupian4_1.scaleX = 0.2;
                xianshitupian4_1.scaleY = 0.2;
                egret.Tween.get(xianshitupian4_1).to({ scaleX: 0.8, scaleY: 0.8, x: this.caixuanxiang2.x, y: this.caixuanxiang2.y }, 2000).call(function () {
                    _this.removeChild(xianshitupian4_1);
                    _this.caiicon2.source = shicaiicon4_1;
                    if (parseInt(_this.di4caiid) >= 1000 && parseInt(_this.di4caiid) < 2000) {
                        _this.xiaohao_1_2.alpha = 1;
                        _this.xiaohao_2_2.alpha = 1;
                        _this.xiaohao_3_2.alpha = 0;
                        _this.xiaohao_4_2.alpha = 0;
                    }
                    else if (parseInt(_this.di4caiid) >= 2000 && parseInt(_this.di4caiid) < 3000) {
                        _this.xiaohao_1_2.alpha = 1;
                        _this.xiaohao_2_2.alpha = 1;
                        _this.xiaohao_3_2.alpha = 1;
                        _this.xiaohao_4_2.alpha = 1;
                    }
                    else if (parseInt(_this.di4caiid) >= 3000 && parseInt(_this.di4caiid) < 4000) {
                        _this.xiaohao_1_2.alpha = 1;
                        _this.xiaohao_2_2.alpha = 1;
                        _this.xiaohao_3_2.alpha = 1;
                        _this.xiaohao_4_2.alpha = 0;
                    }
                    else if (parseInt(_this.di4caiid) >= 4000 && parseInt(_this.di4caiid) < 5000) {
                        _this.xiaohao_1_2.alpha = 1;
                        _this.xiaohao_2_2.alpha = 0;
                        _this.xiaohao_3_2.alpha = 0;
                        _this.xiaohao_4_2.alpha = 0;
                    }
                    _this.tishixuanzexianshi("菜品已上新！");
                });
            }
            else {
                this.tishixuanzexianshi("食盒空空如也!");
            }
        }
        //菜品补充完毕，开始提示上菜
        this.shangcaipanduan();
    };
    Zhandoujiemian.prototype.shangcaipanduan = function () {
        var _this = this;
        var di1caikechu = false;
        var di2caikechu = false;
        var di3caikechu = false;
        var di4caikechu = false;
        if (this.qidianshu >= this.di1caiqidian && this.di1caiid != "0") {
            di1caikechu = true;
        }
        if (this.qidianshu >= this.di2caiqidian && this.di2caiid != "0") {
            di2caikechu = true;
        }
        if (this.qidianshu >= this.di3caiqidian && this.di3caiid != "0") {
            di3caikechu = true;
        }
        if (this.qidianshu >= this.di4caiqidian && this.di4caiid != "0") {
            di4caikechu = true;
        }
        this.daojishitishizu.alpha = 1;
        this.naozhongdaojishi.text = "3";
        egret.Tween.get(this.naozhongdaojishi).to({ text: "2" }, 1000).call(function () {
            egret.Tween.get(_this.naozhongdaojishi).to({ text: "1" }, 1000).call(function () {
                if (di1caikechu == false && di2caikechu == false && di3caikechu == false && di4caikechu == false) {
                    _this.tishixuanzexianshi("配料或者菜品不足");
                    //直接开始滚动
                    egret.Tween.get(_this.naozhongdaojishi).to({ text: "0" }, 1000).call(function () {
                        _this.daojishitishizu.alpha = 0;
                        _this.kaishixinhuihe();
                    });
                }
                else {
                    egret.Tween.get(_this.naozhongdaojishi).to({ text: "0" }, 1000).call(function () {
                        if (di1caikechu == true) {
                            _this.shangcai1anniu.enabled = true;
                            _this.shangcai1anniu.addEventListener(egret.TouchEvent.TOUCH_TAP, _this.chupai1, _this);
                        }
                        if (di2caikechu == true) {
                            _this.shangcai2anniu.enabled = true;
                            _this.shangcai2anniu.addEventListener(egret.TouchEvent.TOUCH_TAP, _this.chupai2, _this);
                        }
                        if (di3caikechu == true) {
                            _this.shangcai3anniu.enabled = true;
                            _this.shangcai3anniu.addEventListener(egret.TouchEvent.TOUCH_TAP, _this.chupai3, _this);
                        }
                        if (di4caikechu == true) {
                            _this.shangcai4anniu.enabled = true;
                            _this.shangcai4anniu.addEventListener(egret.TouchEvent.TOUCH_TAP, _this.chupai4, _this);
                        }
                        _this.tishixuanzexianshi("请选择菜品上菜!");
                        _this.zidongzhandouanniu.alpha = 1;
                        _this.zidongzhandouanniu.enabled = true;
                        _this.zidongzhandouanniu.addEventListener(egret.TouchEvent.TOUCH_TAP, _this.fangqichupai, _this);
                        _this.huihedaojishi = 30;
                        _this.zuidongdaojishikaishi();
                    });
                }
            });
        });
    };
    Zhandoujiemian.prototype.zuidongdaojishikaishi = function () {
        if (this.benhuihechucaiid == "0" && this.renwuhuihekaishi == true) {
            if (this.huihedaojishi <= 0) {
                if (this.qidianshu >= this.di1caiqidian && this.di1caiid != "0") {
                    this.chupai1();
                }
                else if (this.qidianshu >= this.di2caiqidian && this.di2caiid != "0") {
                    this.chupai2();
                }
                else if (this.qidianshu >= this.di3caiqidian && this.di3caiid != "0") {
                    this.chupai3();
                }
                else if (this.qidianshu >= this.di4caiqidian && this.di4caiid != "0") {
                    this.chupai4();
                }
            }
            else {
                this.huihejishiqi = new egret.Timer(1000, 1);
                this.huihejishiqi.addEventListener(egret.TimerEvent.TIMER, this.kaishihuihejishi, this);
                this.huihejishiqi.start();
            }
        }
    };
    Zhandoujiemian.prototype.kaishihuihejishi = function () {
        this.huihedaojishi -= 1;
        this.naozhongdaojishi.text = "" + this.huihedaojishi;
        this.zuidongdaojishikaishi();
    };
    Zhandoujiemian.prototype.chupai1 = function () {
        var _this = this;
        this.benhuihechucaiid = this.di1caiid;
        this.di1caiid = "0";
        this.caiicon.source = "";
        this.xiaohao_1_.alpha = 0;
        this.xiaohao_2_.alpha = 0;
        this.xiaohao_3_.alpha = 0;
        this.xiaohao_4_.alpha = 0;
        //隐藏闹钟
        this.xiamiantishizu.alpha = 0;
        this.daojishitishizu.alpha = 0;
        this.shangmiantishizu.alpha = 0;
        this.shangcai1anniu.enabled = false;
        this.shangcai2anniu.enabled = false;
        this.shangcai3anniu.enabled = false;
        this.shangcai4anniu.enabled = false;
        //隐藏自动按钮
        this.zidongzhandouanniu.alpha = 0;
        this.zidongzhandouanniu.enabled = false;
        //扣除气点数
        this.qidianshu = this.qidianshu - this.di1caiqidian;
        if (this.qidianshu < 0) {
            this.qidianshu = 0;
        }
        this.qidianxianshigengxin();
        var shipubiao = RES.getRes("shipubiao_json");
        var xianshishangcaitu = "";
        for (var h = 0; h < shipubiao.length; h++) {
            if (shipubiao[h].id == this.benhuihechucaiid) {
                xianshishangcaitu = shipubiao[h].id + "_png";
                break;
            }
        }
        var zhandoushangcai = new egret.Bitmap();
        var zhandoutupian = RES.getRes(xianshishangcaitu);
        zhandoushangcai.texture = zhandoutupian;
        this.addChild(zhandoushangcai);
        zhandoushangcai.x = this.caixuanxiang.x;
        zhandoushangcai.y = this.caixuanxiang.y;
        zhandoushangcai.scaleX = 0.7;
        zhandoushangcai.scaleY = 0.7;
        egret.Tween.get(zhandoushangcai).to({ scaleX: 0.2, scaleY: 0.2, x: this.zhandouxianshizu.x + this.zhandouxianshizu.width / 2, y: this.zhandouxianshizu.y }, 2000).call(function () {
            _this.removeChild(zhandoushangcai);
            _this.zhandouxianshizu.alpha = 1;
            _this.zhandounierong.source = xianshishangcaitu;
            egret.Tween.get(zhandoushangcai).to({}).wait(2000).call(function () {
                _this.kaishizhandou();
            });
        });
    };
    Zhandoujiemian.prototype.chupai2 = function () {
        var _this = this;
        this.benhuihechucaiid = this.di2caiid;
        this.di2caiid = "0";
        this.caiicon0.source = "";
        this.xiaohao_1_0.alpha = 0;
        this.xiaohao_2_0.alpha = 0;
        this.xiaohao_3_0.alpha = 0;
        this.xiaohao_4_0.alpha = 0;
        //隐藏闹钟
        this.xiamiantishizu.alpha = 0;
        this.daojishitishizu.alpha = 0;
        this.shangmiantishizu.alpha = 0;
        this.shangcai1anniu.enabled = false;
        this.shangcai2anniu.enabled = false;
        this.shangcai3anniu.enabled = false;
        this.shangcai4anniu.enabled = false;
        //隐藏自动按钮
        this.zidongzhandouanniu.alpha = 0;
        this.zidongzhandouanniu.enabled = false;
        //扣除气点数
        this.qidianshu = this.qidianshu - this.di2caiqidian;
        if (this.qidianshu < 0) {
            this.qidianshu = 0;
        }
        this.qidianxianshigengxin();
        var shipubiao = RES.getRes("shipubiao_json");
        var xianshishangcaitu = "";
        for (var h = 0; h < shipubiao.length; h++) {
            if (shipubiao[h].id == this.benhuihechucaiid) {
                xianshishangcaitu = shipubiao[h].id + "_png";
                break;
            }
        }
        var zhandoushangcai = new egret.Bitmap();
        var zhandoutupian = RES.getRes(xianshishangcaitu);
        zhandoushangcai.texture = zhandoutupian;
        this.addChild(zhandoushangcai);
        zhandoushangcai.x = this.caixuanxiang0.x;
        zhandoushangcai.y = this.caixuanxiang0.y;
        zhandoushangcai.scaleX = 0.7;
        zhandoushangcai.scaleY = 0.7;
        egret.Tween.get(zhandoushangcai).to({ scaleX: 0.2, scaleY: 0.2, x: this.zhandouxianshizu.x + this.zhandouxianshizu.width / 2, y: this.zhandouxianshizu.y }, 2000).call(function () {
            _this.removeChild(zhandoushangcai);
            _this.zhandouxianshizu.alpha = 1;
            _this.zhandounierong.source = xianshishangcaitu;
            egret.Tween.get(zhandoushangcai).to({}).wait(2000).call(function () {
                _this.kaishizhandou();
            });
        });
    };
    Zhandoujiemian.prototype.chupai3 = function () {
        var _this = this;
        this.benhuihechucaiid = this.di3caiid;
        this.di3caiid = "0";
        this.caiicon1.source = "";
        this.xiaohao_1_1.alpha = 0;
        this.xiaohao_2_1.alpha = 0;
        this.xiaohao_3_1.alpha = 0;
        this.xiaohao_4_1.alpha = 0;
        //隐藏闹钟
        this.xiamiantishizu.alpha = 0;
        this.daojishitishizu.alpha = 0;
        this.shangmiantishizu.alpha = 0;
        this.shangcai1anniu.enabled = false;
        this.shangcai2anniu.enabled = false;
        this.shangcai3anniu.enabled = false;
        this.shangcai4anniu.enabled = false;
        //隐藏自动按钮
        this.zidongzhandouanniu.alpha = 0;
        this.zidongzhandouanniu.enabled = false;
        //扣除气点数
        this.qidianshu = this.qidianshu - this.di3caiqidian;
        if (this.qidianshu < 0) {
            this.qidianshu = 0;
        }
        this.qidianxianshigengxin();
        var shipubiao = RES.getRes("shipubiao_json");
        var xianshishangcaitu = "";
        for (var h = 0; h < shipubiao.length; h++) {
            if (shipubiao[h].id == this.benhuihechucaiid) {
                xianshishangcaitu = shipubiao[h].id + "_png";
                break;
            }
        }
        var zhandoushangcai = new egret.Bitmap();
        var zhandoutupian = RES.getRes(xianshishangcaitu);
        zhandoushangcai.texture = zhandoutupian;
        this.addChild(zhandoushangcai);
        zhandoushangcai.x = this.caixuanxiang1.x;
        zhandoushangcai.y = this.caixuanxiang1.y;
        zhandoushangcai.scaleX = 0.7;
        zhandoushangcai.scaleY = 0.7;
        egret.Tween.get(zhandoushangcai).to({ scaleX: 0.2, scaleY: 0.2, x: this.zhandouxianshizu.x + this.zhandouxianshizu.width / 2, y: this.zhandouxianshizu.y }, 2000).call(function () {
            _this.removeChild(zhandoushangcai);
            _this.zhandouxianshizu.alpha = 1;
            _this.zhandounierong.source = xianshishangcaitu;
            egret.Tween.get(zhandoushangcai).to({}).wait(2000).call(function () {
                _this.kaishizhandou();
            });
        });
    };
    Zhandoujiemian.prototype.chupai4 = function () {
        var _this = this;
        this.benhuihechucaiid = this.di4caiid;
        this.di4caiid = "0";
        this.caiicon2.source = "";
        this.xiaohao_1_2.alpha = 0;
        this.xiaohao_2_2.alpha = 0;
        this.xiaohao_3_2.alpha = 0;
        this.xiaohao_4_2.alpha = 0;
        //隐藏闹钟
        this.xiamiantishizu.alpha = 0;
        this.daojishitishizu.alpha = 0;
        this.shangmiantishizu.alpha = 0;
        this.shangcai1anniu.enabled = false;
        this.shangcai2anniu.enabled = false;
        this.shangcai3anniu.enabled = false;
        this.shangcai4anniu.enabled = false;
        //隐藏自动按钮
        this.zidongzhandouanniu.alpha = 0;
        this.zidongzhandouanniu.enabled = false;
        //扣除气点数
        this.qidianshu = this.qidianshu - this.di4caiqidian;
        if (this.qidianshu < 0) {
            this.qidianshu = 0;
        }
        this.qidianxianshigengxin();
        var shipubiao = RES.getRes("shipubiao_json");
        var xianshishangcaitu = "";
        for (var h = 0; h < shipubiao.length; h++) {
            if (shipubiao[h].id == this.benhuihechucaiid) {
                xianshishangcaitu = shipubiao[h].id + "_png";
                break;
            }
        }
        var zhandoushangcai = new egret.Bitmap();
        var zhandoutupian = RES.getRes(xianshishangcaitu);
        zhandoushangcai.texture = zhandoutupian;
        this.addChild(zhandoushangcai);
        zhandoushangcai.x = this.caixuanxiang2.x;
        zhandoushangcai.y = this.caixuanxiang2.y;
        zhandoushangcai.scaleX = 0.7;
        zhandoushangcai.scaleY = 0.7;
        egret.Tween.get(zhandoushangcai).to({ scaleX: 0.2, scaleY: 0.2, x: this.zhandouxianshizu.x + this.zhandouxianshizu.width / 2, y: this.zhandouxianshizu.y }, 2000).call(function () {
            _this.removeChild(zhandoushangcai);
            _this.zhandouxianshizu.alpha = 1;
            _this.zhandounierong.source = xianshishangcaitu;
            egret.Tween.get(zhandoushangcai).to({}).wait(2000).call(function () {
                _this.kaishizhandou();
            });
        });
    };
    Zhandoujiemian.prototype.qidianxianshigengxin = function () {
        switch (this.qidianshu) {
            case 0:
                this.tiaoliao.alpha = 0;
                this.tiaoliao0.alpha = 0;
                this.tiaoliao1.alpha = 0;
                this.tiaoliao2.alpha = 0;
                this.tiaoliao3.alpha = 0;
                this.tiaoliao4.alpha = 0;
                this.tiaoliao5.alpha = 0;
                this.tiaoliao6.alpha = 0;
                this.tiaoliao7.alpha = 0;
                this.tiaoliao8.alpha = 0;
                break;
            case 1:
                this.tiaoliao.alpha = 1;
                this.tiaoliao0.alpha = 0;
                this.tiaoliao1.alpha = 0;
                this.tiaoliao2.alpha = 0;
                this.tiaoliao3.alpha = 0;
                this.tiaoliao4.alpha = 0;
                this.tiaoliao5.alpha = 0;
                this.tiaoliao6.alpha = 0;
                this.tiaoliao7.alpha = 0;
                this.tiaoliao8.alpha = 0;
                break;
            case 2:
                this.tiaoliao.alpha = 1;
                this.tiaoliao0.alpha = 1;
                this.tiaoliao1.alpha = 0;
                this.tiaoliao2.alpha = 0;
                this.tiaoliao3.alpha = 0;
                this.tiaoliao4.alpha = 0;
                this.tiaoliao5.alpha = 0;
                this.tiaoliao6.alpha = 0;
                this.tiaoliao7.alpha = 0;
                this.tiaoliao8.alpha = 0;
                break;
            case 3:
                this.tiaoliao.alpha = 1;
                this.tiaoliao0.alpha = 1;
                this.tiaoliao1.alpha = 1;
                this.tiaoliao2.alpha = 0;
                this.tiaoliao3.alpha = 0;
                this.tiaoliao4.alpha = 0;
                this.tiaoliao5.alpha = 0;
                this.tiaoliao6.alpha = 0;
                this.tiaoliao7.alpha = 0;
                this.tiaoliao8.alpha = 0;
                break;
            case 4:
                this.tiaoliao.alpha = 1;
                this.tiaoliao0.alpha = 1;
                this.tiaoliao1.alpha = 1;
                this.tiaoliao2.alpha = 1;
                this.tiaoliao3.alpha = 0;
                this.tiaoliao4.alpha = 0;
                this.tiaoliao5.alpha = 0;
                this.tiaoliao6.alpha = 0;
                this.tiaoliao7.alpha = 0;
                this.tiaoliao8.alpha = 0;
                break;
            case 5:
                this.tiaoliao.alpha = 1;
                this.tiaoliao0.alpha = 1;
                this.tiaoliao1.alpha = 1;
                this.tiaoliao2.alpha = 1;
                this.tiaoliao3.alpha = 1;
                this.tiaoliao4.alpha = 0;
                this.tiaoliao5.alpha = 0;
                this.tiaoliao6.alpha = 0;
                this.tiaoliao7.alpha = 0;
                this.tiaoliao8.alpha = 0;
                break;
            case 6:
                this.tiaoliao.alpha = 1;
                this.tiaoliao0.alpha = 1;
                this.tiaoliao1.alpha = 1;
                this.tiaoliao2.alpha = 1;
                this.tiaoliao3.alpha = 1;
                this.tiaoliao4.alpha = 1;
                this.tiaoliao5.alpha = 0;
                this.tiaoliao6.alpha = 0;
                this.tiaoliao7.alpha = 0;
                this.tiaoliao8.alpha = 0;
                break;
            case 7:
                this.tiaoliao.alpha = 1;
                this.tiaoliao0.alpha = 1;
                this.tiaoliao1.alpha = 1;
                this.tiaoliao2.alpha = 1;
                this.tiaoliao3.alpha = 1;
                this.tiaoliao4.alpha = 1;
                this.tiaoliao5.alpha = 1;
                this.tiaoliao6.alpha = 0;
                this.tiaoliao7.alpha = 0;
                this.tiaoliao8.alpha = 0;
                break;
            case 8:
                this.tiaoliao.alpha = 1;
                this.tiaoliao0.alpha = 1;
                this.tiaoliao1.alpha = 1;
                this.tiaoliao2.alpha = 1;
                this.tiaoliao3.alpha = 1;
                this.tiaoliao4.alpha = 1;
                this.tiaoliao5.alpha = 1;
                this.tiaoliao6.alpha = 1;
                this.tiaoliao7.alpha = 0;
                this.tiaoliao8.alpha = 0;
                break;
            case 9:
                this.tiaoliao.alpha = 1;
                this.tiaoliao0.alpha = 1;
                this.tiaoliao1.alpha = 1;
                this.tiaoliao2.alpha = 1;
                this.tiaoliao3.alpha = 1;
                this.tiaoliao4.alpha = 1;
                this.tiaoliao5.alpha = 1;
                this.tiaoliao6.alpha = 1;
                this.tiaoliao7.alpha = 1;
                this.tiaoliao8.alpha = 0;
                break;
            case 10:
                this.tiaoliao.alpha = 1;
                this.tiaoliao0.alpha = 1;
                this.tiaoliao1.alpha = 1;
                this.tiaoliao2.alpha = 1;
                this.tiaoliao3.alpha = 1;
                this.tiaoliao4.alpha = 1;
                this.tiaoliao5.alpha = 1;
                this.tiaoliao6.alpha = 1;
                this.tiaoliao7.alpha = 1;
                this.tiaoliao8.alpha = 1;
                break;
        }
    };
    //自己出招，开始战斗模块
    Zhandoujiemian.prototype.kaishizhandou = function () {
        this.jisuanduiguaishanghai();
        //确定攻击对象
        var gongjiduixiangzu = [];
        if (this.guai1qixue > 0) {
            gongjiduixiangzu.push("1");
        }
        if (this.guai2qixue > 0) {
            gongjiduixiangzu.push("2");
        }
        if (this.guai3qixue > 0) {
            gongjiduixiangzu.push("3");
        }
        //		console.log("进攻候选组:" + gongjiduixiangzu);
        if (parseInt(this.benhuihechucaiid) >= 1000 && parseInt(this.benhuihechucaiid) < 2000) {
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
        else if (parseInt(this.benhuihechucaiid) >= 2000 && parseInt(this.benhuihechucaiid) < 3000) {
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
        else if (parseInt(this.benhuihechucaiid) >= 4000 && parseInt(this.benhuihechucaiid) < 5000) {
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
        else if (parseInt(this.benhuihechucaiid) >= 3000 && parseInt(this.benhuihechucaiid) < 4000) {
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
    };
    Zhandoujiemian.prototype.jingongguaiwu1 = function () {
        var _this = this;
        var shipubiao1 = RES.getRes("shipubiao_json");
        var xianshishangcaitu1 = "";
        for (var h = 0; h < shipubiao1.length; h++) {
            if (shipubiao1[h].id == this.benhuihechucaiid) {
                xianshishangcaitu1 = shipubiao1[h].id + "_png";
                break;
            }
        }
        var zhandoushangcai1 = new egret.Bitmap();
        var zhandoutupian1 = RES.getRes(xianshishangcaitu1);
        zhandoushangcai1.texture = zhandoutupian1;
        this.addChild(zhandoushangcai1);
        zhandoushangcai1.x = this.zhandouxianshizu.x;
        zhandoushangcai1.y = this.zhandouxianshizu.y;
        zhandoushangcai1.scaleX = 1;
        zhandoushangcai1.scaleY = 1;
        egret.Tween.get(zhandoushangcai1).to({ scaleX: 0, scaleY: 0, x: this.bosszu.x + this.bosszu.width / 3 * 1, y: this.bosszu.y + this.bosszu.height / 2 }, 1000).call(function () {
            _this.removeChild(zhandoushangcai1);
            //正式计算数据
            _this.duiguai1jineng();
        });
    };
    Zhandoujiemian.prototype.jingongguaiwu2 = function () {
        var _this = this;
        var shipubiao2 = RES.getRes("shipubiao_json");
        var xianshishangcaitu2 = "";
        for (var h = 0; h < shipubiao2.length; h++) {
            if (shipubiao2[h].id == this.benhuihechucaiid) {
                xianshishangcaitu2 = shipubiao2[h].id + "_png";
                break;
            }
        }
        var zhandoushangcai2 = new egret.Bitmap();
        var zhandoutupian2 = RES.getRes(xianshishangcaitu2);
        zhandoushangcai2.texture = zhandoutupian2;
        this.addChild(zhandoushangcai2);
        zhandoushangcai2.x = this.zhandouxianshizu.x;
        zhandoushangcai2.y = this.zhandouxianshizu.y;
        zhandoushangcai2.scaleX = 1;
        zhandoushangcai2.scaleY = 1;
        egret.Tween.get(zhandoushangcai2).to({ scaleX: 0, scaleY: 0, x: this.bosszu0.x + this.bosszu0.width / 3 * 1, y: this.bosszu0.y + this.bosszu0.height / 2 }, 1000).call(function () {
            _this.removeChild(zhandoushangcai2);
            //正式计算数据
            _this.duiguai2jineng();
        });
    };
    Zhandoujiemian.prototype.jingongguaiwu3 = function () {
        var _this = this;
        var shipubiao3 = RES.getRes("shipubiao_json");
        var xianshishangcaitu3 = "";
        for (var h = 0; h < shipubiao3.length; h++) {
            if (shipubiao3[h].id == this.benhuihechucaiid) {
                xianshishangcaitu3 = shipubiao3[h].id + "_png";
                break;
            }
        }
        var zhandoushangcai3 = new egret.Bitmap();
        var zhandoutupian3 = RES.getRes(xianshishangcaitu3);
        zhandoushangcai3.texture = zhandoutupian3;
        this.addChild(zhandoushangcai3);
        zhandoushangcai3.x = this.zhandouxianshizu.x;
        zhandoushangcai3.y = this.zhandouxianshizu.y;
        zhandoushangcai3.scaleX = 1;
        zhandoushangcai3.scaleY = 1;
        egret.Tween.get(zhandoushangcai3).to({ scaleX: 0, scaleY: 0, x: this.bosszu1.x + this.bosszu1.width / 3 * 1, y: this.bosszu1.y + this.bosszu1.height / 2 }, 1000).call(function () {
            _this.removeChild(zhandoushangcai3);
            //正式计算数据
            _this.duiguai3jineng();
        });
    };
    Zhandoujiemian.prototype.jisuanduiguaishanghai = function () {
        //先得到当前菜品的等级
        var duqudengji1 = Gerencaipudengji.caipulevel;
        var caipudengjishuju = RES.getRes("shipulevel_json");
        //先初始化各项菜的数据
        this.chushilazhi = 0; //菜的初始辣值
        this.zuizhonglazhi = 0; //菜的最终辣值
        this.fujialazhi = 0; //菜的附加辣值
        this.chushimazhi = 0; //菜的初始辣值
        this.zuizhongmazhi = 0; //菜的初始辣值
        this.fujiamazhi = 0; //菜的初始辣值
        this.chushisuanzhi = 0; //菜的初始辣值
        this.zuizhongsuanzhi = 0; //菜的初始辣值
        this.fujiasuanzhi = 0; //菜的初始辣值
        this.chushitianzhi = 0; //菜的初始辣值
        this.zuizhongtianzhi = 0; //菜的初始辣值
        this.fujiatianzhi = 0; //菜的初始辣值
        this.caidejineng1 = "0"; //菜的技能1
        this.caidejineng2 = "0"; //菜的技能2
        this.caidejineng3 = "0"; //菜的技能3
        this.caidejineng4 = "0"; //菜的技能4
        this.caidejineng5 = "0"; //菜的技能5
        this.caidedengji = 0; //当前菜的等级
        this.shuchulazhi = 0;
        this.shuchumazhi = 0;
        this.shuchusuanzhi = 0;
        this.shuchutianzhi = 0;
        //进入正式计算
        for (var g in duqudengji1) {
            if (g == this.benhuihechucaiid) {
                this.caidedengji = parseInt(duqudengji1[g][0]);
                break;
            }
        }
        for (var h = 0; h < Gerenshuxing.caipushuxingbiao.length; h++) {
            if (Gerenshuxing.caipushuxingbiao[h].id == this.benhuihechucaiid) {
                this.chushilazhi = parseInt(Gerenshuxing.caipushuxingbiao[h].laxi) + parseInt(Gerenshuxing.caipushuxingbiao[h].laxi) * parseFloat(Gerenshuxing.caipushuxingbiao[h].chengzhanglv) * this.caidedengji;
                this.chushimazhi = parseInt(Gerenshuxing.caipushuxingbiao[h].maxi) + parseInt(Gerenshuxing.caipushuxingbiao[h].maxi) * parseFloat(Gerenshuxing.caipushuxingbiao[h].chengzhanglv) * this.caidedengji;
                this.chushisuanzhi = parseInt(Gerenshuxing.caipushuxingbiao[h].suanxi) + parseInt(Gerenshuxing.caipushuxingbiao[h].suanxi) * parseFloat(Gerenshuxing.caipushuxingbiao[h].chengzhanglv) * this.caidedengji;
                this.chushitianzhi = parseInt(Gerenshuxing.caipushuxingbiao[h].tianxi) + parseInt(Gerenshuxing.caipushuxingbiao[h].tianxi) * parseFloat(Gerenshuxing.caipushuxingbiao[h].chengzhanglv) * this.caidedengji;
                for (var o in Gerencaipudengji.caipulevel) {
                    if (o == this.benhuihechucaiid) {
                        this.caidejineng1 = Gerencaipudengji.caipulevel[o][6];
                        this.caidejineng2 = Gerencaipudengji.caipulevel[o][7];
                        this.caidejineng3 = Gerencaipudengji.caipulevel[o][8];
                        this.caidejineng4 = Gerencaipudengji.caipulevel[o][9];
                        this.caidejineng5 = Gerencaipudengji.caipulevel[o][10];
                        this.fujialazhi = Math.floor(this.chushilazhi * parseInt(Gerencaipudengji.caipulevel[o][2]) / 100);
                        this.fujiamazhi = Math.floor(this.chushimazhi * parseInt(Gerencaipudengji.caipulevel[o][3]) / 100);
                        this.fujiasuanzhi = Math.floor(this.chushisuanzhi * parseInt(Gerencaipudengji.caipulevel[o][4]) / 100);
                        this.fujiatianzhi = Math.floor(this.chushitianzhi * parseInt(Gerencaipudengji.caipulevel[o][5]) / 100);
                        break;
                    }
                }
                break;
            }
        }
        this.chushilazhi = Math.floor(this.chushilazhi);
        this.chushimazhi = Math.floor(this.chushimazhi);
        this.chushisuanzhi = Math.floor(this.chushisuanzhi);
        this.chushitianzhi = Math.floor(this.chushitianzhi);
        this.zuizhonglazhi = this.chushilazhi + this.fujialazhi;
        this.zuizhongmazhi = this.chushimazhi + this.fujiamazhi;
        this.zuizhongsuanzhi = this.chushisuanzhi + this.fujiasuanzhi;
        this.zuizhongtianzhi = this.chushitianzhi + this.fujiatianzhi;
        //计算附加上角色的酸甜苦辣值，得到最终的输出能力
        this.shuchulazhi = Gerenshuxing.gerenla + this.zuizhonglazhi;
        this.shuchumazhi = Gerenshuxing.gerenma + this.zuizhongmazhi;
        this.shuchusuanzhi = Gerenshuxing.gerensuan + this.zuizhongsuanzhi;
        this.shuchutianzhi = Gerenshuxing.gerentian + this.zuizhongtianzhi;
        //		console.log(this.caidejineng1,this.caidejineng2,this.caidejineng3,this.caidejineng4,this.caidejineng5);
    };
    //对怪物1使用技能判断
    Zhandoujiemian.prototype.duiguai1jineng = function () {
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
        if (this.caidejineng1 != "0") {
            for (var j = 0; j < Gerenshuxing.jinengbiao.length; j++) {
                if (Gerenshuxing.jinengbiao[j].id == this.caidejineng1) {
                    var jinengjiachengzhi_1_ = 0;
                    if (this.caidejineng1 == "20001") {
                        jinengjiachengzhi_1_ = parseInt(Gerenshuxing.jinengbiao[j].chushizhi) + this.zuizhonglazhi * parseFloat(Gerenshuxing.jinengbiao[j].jiacheng);
                        jinengjiachengzhi_1_ = Math.floor(jinengjiachengzhi_1_);
                        var suijishu = Math.floor(Math.random() * 100);
                        if (suijishu <= jinengjiachengzhi_1_) {
                            this.chufalianji_1_ = "1";
                        }
                    }
                    else if (this.caidejineng1 == "20002") {
                        jinengjiachengzhi_1_ = parseInt(Gerenshuxing.jinengbiao[j].chushizhi) + this.zuizhonglazhi * parseFloat(Gerenshuxing.jinengbiao[j].jiacheng);
                        jinengjiachengzhi_1_ = Math.floor(jinengjiachengzhi_1_);
                        var suijishu = Math.floor(Math.random() * 100);
                        if (suijishu <= jinengjiachengzhi_1_) {
                            this.chufalianji_1_ = "1";
                        }
                    }
                    else if (this.caidejineng1 == "20003") {
                        jinengjiachengzhi_1_ = parseInt(Gerenshuxing.jinengbiao[j].chushizhi) + this.zuizhonglazhi * parseFloat(Gerenshuxing.jinengbiao[j].jiacheng);
                        jinengjiachengzhi_1_ = Math.floor(jinengjiachengzhi_1_);
                        this.chufabisha_1_ = "" + jinengjiachengzhi_1_;
                    }
                    else if (this.caidejineng1 == "20004") {
                        jinengjiachengzhi_1_ = parseInt(Gerenshuxing.jinengbiao[j].chushizhi) + this.zuizhonglazhi * parseFloat(Gerenshuxing.jinengbiao[j].jiacheng);
                        jinengjiachengzhi_1_ = Math.floor(jinengjiachengzhi_1_);
                        this.chufabisha_1_ = "" + jinengjiachengzhi_1_;
                    }
                    else if (this.caidejineng1 == "20005") {
                        jinengjiachengzhi_1_ = parseInt(Gerenshuxing.jinengbiao[j].chushizhi) + this.zuizhongtianzhi * parseFloat(Gerenshuxing.jinengbiao[j].jiacheng);
                        jinengjiachengzhi_1_ = Math.floor(jinengjiachengzhi_1_);
                        this.chufaxixue_1_ = "" + jinengjiachengzhi_1_;
                    }
                    else if (this.caidejineng1 == "20006") {
                        jinengjiachengzhi_1_ = parseInt(Gerenshuxing.jinengbiao[j].chushizhi) + this.zuizhongtianzhi * parseFloat(Gerenshuxing.jinengbiao[j].jiacheng);
                        jinengjiachengzhi_1_ = Math.floor(jinengjiachengzhi_1_);
                        this.chufaxixue_1_ = "" + jinengjiachengzhi_1_;
                    }
                    else if (this.caidejineng1 == "20007") {
                        this.chufazhuiji_1_ = "1";
                    }
                    else if (this.caidejineng1 == "20008") {
                        this.chufasane_1_ = "1";
                    }
                    else if (this.caidejineng1 == "20009") {
                        jinengjiachengzhi_1_ = parseInt(Gerenshuxing.jinengbiao[j].chushizhi) + this.zuizhonglazhi * parseFloat(Gerenshuxing.jinengbiao[j].jiacheng);
                        jinengjiachengzhi_1_ = Math.floor(jinengjiachengzhi_1_);
                        this.chufahushila_1_ = "" + jinengjiachengzhi_1_;
                    }
                    else if (this.caidejineng1 == "20010") {
                        jinengjiachengzhi_1_ = parseInt(Gerenshuxing.jinengbiao[j].chushizhi) + this.zuizhongtianzhi * parseFloat(Gerenshuxing.jinengbiao[j].jiacheng);
                        jinengjiachengzhi_1_ = Math.floor(jinengjiachengzhi_1_);
                        this.chufahushitian_1_ = "" + jinengjiachengzhi_1_;
                    }
                    else if (this.caidejineng1 == "20011") {
                        jinengjiachengzhi_1_ = parseInt(Gerenshuxing.jinengbiao[j].chushizhi) + this.zuizhongsuanzhi * parseFloat(Gerenshuxing.jinengbiao[j].jiacheng);
                        jinengjiachengzhi_1_ = Math.floor(jinengjiachengzhi_1_);
                        this.chufahushisuan_1_ = "" + jinengjiachengzhi_1_;
                    }
                    else if (this.caidejineng1 == "20012") {
                        jinengjiachengzhi_1_ = parseInt(Gerenshuxing.jinengbiao[j].chushizhi) + this.zuizhongmazhi * parseFloat(Gerenshuxing.jinengbiao[j].jiacheng);
                        jinengjiachengzhi_1_ = Math.floor(jinengjiachengzhi_1_);
                        this.chufahushima_1_ = "" + jinengjiachengzhi_1_;
                    }
                    else if (this.caidejineng1 == "20013") {
                        jinengjiachengzhi_1_ = parseInt(Gerenshuxing.jinengbiao[j].chushizhi) + this.zuizhongsuanzhi * parseFloat(Gerenshuxing.jinengbiao[j].jiacheng);
                        jinengjiachengzhi_1_ = Math.floor(jinengjiachengzhi_1_);
                        this.chufazhenshe_1_ = "" + jinengjiachengzhi_1_;
                    }
                    else if (this.caidejineng1 == "20014") {
                        jinengjiachengzhi_1_ = parseInt(Gerenshuxing.jinengbiao[j].chushizhi) + this.zuizhongsuanzhi * parseFloat(Gerenshuxing.jinengbiao[j].jiacheng);
                        jinengjiachengzhi_1_ = Math.floor(jinengjiachengzhi_1_);
                        this.chufaxilan_1_ = "" + jinengjiachengzhi_1_;
                    }
                    else if (this.caidejineng1 == "20015") {
                        jinengjiachengzhi_1_ = parseInt(Gerenshuxing.jinengbiao[j].chushizhi) + this.zuizhongsuanzhi * parseFloat(Gerenshuxing.jinengbiao[j].jiacheng);
                        jinengjiachengzhi_1_ = Math.floor(jinengjiachengzhi_1_);
                        this.chufaxilan_1_ = "" + jinengjiachengzhi_1_;
                    }
                    else if (this.caidejineng1 == "20016") {
                        jinengjiachengzhi_1_ = parseInt(Gerenshuxing.jinengbiao[j].chushizhi) + this.zuizhongmazhi * parseFloat(Gerenshuxing.jinengbiao[j].jiacheng);
                        jinengjiachengzhi_1_ = Math.floor(jinengjiachengzhi_1_);
                        this.chufajiansu_1_ = "" + jinengjiachengzhi_1_;
                    }
                    else if (this.caidejineng1 == "20017") {
                        jinengjiachengzhi_1_ = parseInt(Gerenshuxing.jinengbiao[j].chushizhi) + this.zuizhongmazhi * parseFloat(Gerenshuxing.jinengbiao[j].jiacheng);
                        jinengjiachengzhi_1_ = Math.floor(jinengjiachengzhi_1_);
                        var suijishu = Math.floor(Math.random() * 100);
                        if (suijishu <= jinengjiachengzhi_1_) {
                            this.chufachenmo_1_ = "1";
                        }
                    }
                    else if (this.caidejineng1 == "20018") {
                        jinengjiachengzhi_1_ = parseInt(Gerenshuxing.jinengbiao[j].chushizhi) + this.zuizhongtianzhi * parseFloat(Gerenshuxing.jinengbiao[j].jiacheng);
                        jinengjiachengzhi_1_ = Math.floor(jinengjiachengzhi_1_);
                        this.chufahuixue_1_ = "" + jinengjiachengzhi_1_;
                    }
                    else if (this.caidejineng1 == "20019") {
                        jinengjiachengzhi_1_ = parseInt(Gerenshuxing.jinengbiao[j].chushizhi) + this.zuizhongsuanzhi * parseFloat(Gerenshuxing.jinengbiao[j].jiacheng);
                        jinengjiachengzhi_1_ = Math.floor(jinengjiachengzhi_1_);
                        this.chufaquanhushi_1_ = "" + jinengjiachengzhi_1_;
                    }
                    else if (this.caidejineng1 == "20020") {
                        this.chufahuiling_1_ = "1";
                    }
                    else if (this.caidejineng1 == "20021") {
                        jinengjiachengzhi_1_ = parseInt(Gerenshuxing.jinengbiao[j].chushizhi) + this.zuizhongsuanzhi * parseFloat(Gerenshuxing.jinengbiao[j].jiacheng);
                        jinengjiachengzhi_1_ = Math.floor(jinengjiachengzhi_1_);
                        this.chufadu_1_ = "" + jinengjiachengzhi_1_;
                    }
                    else if (this.caidejineng1 == "20022") {
                        jinengjiachengzhi_1_ = parseInt(Gerenshuxing.jinengbiao[j].chushizhi) + this.zuizhongmazhi * parseFloat(Gerenshuxing.jinengbiao[j].jiacheng);
                        jinengjiachengzhi_1_ = Math.floor(jinengjiachengzhi_1_);
                        this.chufaxuruo_1_ = "" + jinengjiachengzhi_1_;
                    }
                    else if (this.caidejineng1 == "20023") {
                        jinengjiachengzhi_1_ = parseInt(Gerenshuxing.jinengbiao[j].chushizhi) + this.zuizhongtianzhi * parseFloat(Gerenshuxing.jinengbiao[j].jiacheng);
                        jinengjiachengzhi_1_ = Math.floor(jinengjiachengzhi_1_);
                        this.chufajiafang_1_ = "" + jinengjiachengzhi_1_;
                    }
                    else if (this.caidejineng1 == "20024") {
                        jinengjiachengzhi_1_ = parseInt(Gerenshuxing.jinengbiao[j].chushizhi) + this.zuizhonglazhi * parseFloat(Gerenshuxing.jinengbiao[j].jiacheng);
                        jinengjiachengzhi_1_ = Math.floor(jinengjiachengzhi_1_);
                        this.chufajiasu_1_ = "" + jinengjiachengzhi_1_;
                    }
                    else if (this.caidejineng1 == "20025") {
                        this.chufajianxue_1_ = "1";
                    }
                    else if (this.caidejineng1 == "20026") {
                        this.chufajiangong_1_ = "1";
                    }
                    else if (this.caidejineng1 == "20027") {
                        this.chufawofangjiansu_1_ = "1";
                    }
                }
            }
        }
        //计算菜品技能2///
        if (this.caidejineng2 != "0") {
            for (var j = 0; j < Gerenshuxing.jinengbiao.length; j++) {
                if (Gerenshuxing.jinengbiao[j].id == this.caidejineng2) {
                    var jinengjiachengzhi_1_ = 0;
                    if (this.caidejineng2 == "20001") {
                        jinengjiachengzhi_1_ = parseInt(Gerenshuxing.jinengbiao[j].chushizhi) + this.zuizhonglazhi * parseFloat(Gerenshuxing.jinengbiao[j].jiacheng);
                        jinengjiachengzhi_1_ = Math.floor(jinengjiachengzhi_1_);
                        var suijishu = Math.floor(Math.random() * 100);
                        if (suijishu <= jinengjiachengzhi_1_) {
                            this.chufalianji_1_ = "1";
                        }
                    }
                    else if (this.caidejineng2 == "20002") {
                        jinengjiachengzhi_1_ = parseInt(Gerenshuxing.jinengbiao[j].chushizhi) + this.zuizhonglazhi * parseFloat(Gerenshuxing.jinengbiao[j].jiacheng);
                        jinengjiachengzhi_1_ = Math.floor(jinengjiachengzhi_1_);
                        var suijishu = Math.floor(Math.random() * 100);
                        if (suijishu <= jinengjiachengzhi_1_) {
                            this.chufalianji_1_ = "1";
                        }
                    }
                    else if (this.caidejineng2 == "20003") {
                        jinengjiachengzhi_1_ = parseInt(Gerenshuxing.jinengbiao[j].chushizhi) + this.zuizhonglazhi * parseFloat(Gerenshuxing.jinengbiao[j].jiacheng);
                        jinengjiachengzhi_1_ = Math.floor(jinengjiachengzhi_1_);
                        this.chufabisha_1_ = "" + jinengjiachengzhi_1_;
                    }
                    else if (this.caidejineng2 == "20004") {
                        jinengjiachengzhi_1_ = parseInt(Gerenshuxing.jinengbiao[j].chushizhi) + this.zuizhonglazhi * parseFloat(Gerenshuxing.jinengbiao[j].jiacheng);
                        jinengjiachengzhi_1_ = Math.floor(jinengjiachengzhi_1_);
                        this.chufabisha_1_ = "" + jinengjiachengzhi_1_;
                    }
                    else if (this.caidejineng2 == "20005") {
                        jinengjiachengzhi_1_ = parseInt(Gerenshuxing.jinengbiao[j].chushizhi) + this.zuizhongtianzhi * parseFloat(Gerenshuxing.jinengbiao[j].jiacheng);
                        jinengjiachengzhi_1_ = Math.floor(jinengjiachengzhi_1_);
                        this.chufaxixue_1_ = "" + jinengjiachengzhi_1_;
                    }
                    else if (this.caidejineng2 == "20006") {
                        jinengjiachengzhi_1_ = parseInt(Gerenshuxing.jinengbiao[j].chushizhi) + this.zuizhongtianzhi * parseFloat(Gerenshuxing.jinengbiao[j].jiacheng);
                        jinengjiachengzhi_1_ = Math.floor(jinengjiachengzhi_1_);
                        this.chufaxixue_1_ = "" + jinengjiachengzhi_1_;
                    }
                    else if (this.caidejineng2 == "20007") {
                        this.chufazhuiji_1_ = "1";
                    }
                    else if (this.caidejineng2 == "20008") {
                        this.chufasane_1_ = "1";
                    }
                    else if (this.caidejineng2 == "20009") {
                        jinengjiachengzhi_1_ = parseInt(Gerenshuxing.jinengbiao[j].chushizhi) + this.zuizhonglazhi * parseFloat(Gerenshuxing.jinengbiao[j].jiacheng);
                        jinengjiachengzhi_1_ = Math.floor(jinengjiachengzhi_1_);
                        this.chufahushila_1_ = "" + jinengjiachengzhi_1_;
                    }
                    else if (this.caidejineng2 == "20010") {
                        jinengjiachengzhi_1_ = parseInt(Gerenshuxing.jinengbiao[j].chushizhi) + this.zuizhongtianzhi * parseFloat(Gerenshuxing.jinengbiao[j].jiacheng);
                        jinengjiachengzhi_1_ = Math.floor(jinengjiachengzhi_1_);
                        this.chufahushitian_1_ = "" + jinengjiachengzhi_1_;
                    }
                    else if (this.caidejineng2 == "20011") {
                        jinengjiachengzhi_1_ = parseInt(Gerenshuxing.jinengbiao[j].chushizhi) + this.zuizhongsuanzhi * parseFloat(Gerenshuxing.jinengbiao[j].jiacheng);
                        jinengjiachengzhi_1_ = Math.floor(jinengjiachengzhi_1_);
                        this.chufahushisuan_1_ = "" + jinengjiachengzhi_1_;
                    }
                    else if (this.caidejineng2 == "20012") {
                        jinengjiachengzhi_1_ = parseInt(Gerenshuxing.jinengbiao[j].chushizhi) + this.zuizhongmazhi * parseFloat(Gerenshuxing.jinengbiao[j].jiacheng);
                        jinengjiachengzhi_1_ = Math.floor(jinengjiachengzhi_1_);
                        this.chufahushima_1_ = "" + jinengjiachengzhi_1_;
                    }
                    else if (this.caidejineng2 == "20013") {
                        jinengjiachengzhi_1_ = parseInt(Gerenshuxing.jinengbiao[j].chushizhi) + this.zuizhongsuanzhi * parseFloat(Gerenshuxing.jinengbiao[j].jiacheng);
                        jinengjiachengzhi_1_ = Math.floor(jinengjiachengzhi_1_);
                        this.chufazhenshe_1_ = "" + jinengjiachengzhi_1_;
                    }
                    else if (this.caidejineng2 == "20014") {
                        jinengjiachengzhi_1_ = parseInt(Gerenshuxing.jinengbiao[j].chushizhi) + this.zuizhongsuanzhi * parseFloat(Gerenshuxing.jinengbiao[j].jiacheng);
                        jinengjiachengzhi_1_ = Math.floor(jinengjiachengzhi_1_);
                        this.chufaxilan_1_ = "" + jinengjiachengzhi_1_;
                    }
                    else if (this.caidejineng2 == "20015") {
                        jinengjiachengzhi_1_ = parseInt(Gerenshuxing.jinengbiao[j].chushizhi) + this.zuizhongsuanzhi * parseFloat(Gerenshuxing.jinengbiao[j].jiacheng);
                        jinengjiachengzhi_1_ = Math.floor(jinengjiachengzhi_1_);
                        this.chufaxilan_1_ = "" + jinengjiachengzhi_1_;
                    }
                    else if (this.caidejineng2 == "20016") {
                        jinengjiachengzhi_1_ = parseInt(Gerenshuxing.jinengbiao[j].chushizhi) + this.zuizhongmazhi * parseFloat(Gerenshuxing.jinengbiao[j].jiacheng);
                        jinengjiachengzhi_1_ = Math.floor(jinengjiachengzhi_1_);
                        this.chufajiansu_1_ = "" + jinengjiachengzhi_1_;
                    }
                    else if (this.caidejineng2 == "20017") {
                        jinengjiachengzhi_1_ = parseInt(Gerenshuxing.jinengbiao[j].chushizhi) + this.zuizhongmazhi * parseFloat(Gerenshuxing.jinengbiao[j].jiacheng);
                        jinengjiachengzhi_1_ = Math.floor(jinengjiachengzhi_1_);
                        var suijishu = Math.floor(Math.random() * 100);
                        if (suijishu <= jinengjiachengzhi_1_) {
                            this.chufachenmo_1_ = "1";
                        }
                    }
                    else if (this.caidejineng2 == "20018") {
                        jinengjiachengzhi_1_ = parseInt(Gerenshuxing.jinengbiao[j].chushizhi) + this.zuizhongtianzhi * parseFloat(Gerenshuxing.jinengbiao[j].jiacheng);
                        jinengjiachengzhi_1_ = Math.floor(jinengjiachengzhi_1_);
                        this.chufahuixue_1_ = "" + jinengjiachengzhi_1_;
                    }
                    else if (this.caidejineng2 == "20019") {
                        jinengjiachengzhi_1_ = parseInt(Gerenshuxing.jinengbiao[j].chushizhi) + this.zuizhongsuanzhi * parseFloat(Gerenshuxing.jinengbiao[j].jiacheng);
                        jinengjiachengzhi_1_ = Math.floor(jinengjiachengzhi_1_);
                        this.chufaquanhushi_1_ = "" + jinengjiachengzhi_1_;
                    }
                    else if (this.caidejineng2 == "20020") {
                        this.chufahuiling_1_ = "1";
                    }
                    else if (this.caidejineng2 == "20021") {
                        jinengjiachengzhi_1_ = parseInt(Gerenshuxing.jinengbiao[j].chushizhi) + this.zuizhongsuanzhi * parseFloat(Gerenshuxing.jinengbiao[j].jiacheng);
                        jinengjiachengzhi_1_ = Math.floor(jinengjiachengzhi_1_);
                        this.chufadu_1_ = "" + jinengjiachengzhi_1_;
                    }
                    else if (this.caidejineng2 == "20022") {
                        jinengjiachengzhi_1_ = parseInt(Gerenshuxing.jinengbiao[j].chushizhi) + this.zuizhongmazhi * parseFloat(Gerenshuxing.jinengbiao[j].jiacheng);
                        jinengjiachengzhi_1_ = Math.floor(jinengjiachengzhi_1_);
                        this.chufaxuruo_1_ = "" + jinengjiachengzhi_1_;
                    }
                    else if (this.caidejineng2 == "20023") {
                        jinengjiachengzhi_1_ = parseInt(Gerenshuxing.jinengbiao[j].chushizhi) + this.zuizhongtianzhi * parseFloat(Gerenshuxing.jinengbiao[j].jiacheng);
                        jinengjiachengzhi_1_ = Math.floor(jinengjiachengzhi_1_);
                        this.chufajiafang_1_ = "" + jinengjiachengzhi_1_;
                    }
                    else if (this.caidejineng2 == "20024") {
                        jinengjiachengzhi_1_ = parseInt(Gerenshuxing.jinengbiao[j].chushizhi) + this.zuizhonglazhi * parseFloat(Gerenshuxing.jinengbiao[j].jiacheng);
                        jinengjiachengzhi_1_ = Math.floor(jinengjiachengzhi_1_);
                        this.chufajiasu_1_ = "" + jinengjiachengzhi_1_;
                    }
                    else if (this.caidejineng2 == "20025") {
                        this.chufajianxue_1_ = "1";
                    }
                    else if (this.caidejineng2 == "20026") {
                        this.chufajiangong_1_ = "1";
                    }
                    else if (this.caidejineng2 == "20027") {
                        this.chufawofangjiansu_1_ = "1";
                    }
                }
            }
        }
        //计算菜品技能2///
        if (this.caidejineng3 != "0") {
            for (var j = 0; j < Gerenshuxing.jinengbiao.length; j++) {
                if (Gerenshuxing.jinengbiao[j].id == this.caidejineng3) {
                    var jinengjiachengzhi_1_ = 0;
                    if (this.caidejineng3 == "20001") {
                        jinengjiachengzhi_1_ = parseInt(Gerenshuxing.jinengbiao[j].chushizhi) + this.zuizhonglazhi * parseFloat(Gerenshuxing.jinengbiao[j].jiacheng);
                        jinengjiachengzhi_1_ = Math.floor(jinengjiachengzhi_1_);
                        var suijishu = Math.floor(Math.random() * 100);
                        if (suijishu <= jinengjiachengzhi_1_) {
                            this.chufalianji_1_ = "1";
                        }
                    }
                    else if (this.caidejineng3 == "20002") {
                        jinengjiachengzhi_1_ = parseInt(Gerenshuxing.jinengbiao[j].chushizhi) + this.zuizhonglazhi * parseFloat(Gerenshuxing.jinengbiao[j].jiacheng);
                        jinengjiachengzhi_1_ = Math.floor(jinengjiachengzhi_1_);
                        var suijishu = Math.floor(Math.random() * 100);
                        if (suijishu <= jinengjiachengzhi_1_) {
                            this.chufalianji_1_ = "1";
                        }
                    }
                    else if (this.caidejineng3 == "20003") {
                        jinengjiachengzhi_1_ = parseInt(Gerenshuxing.jinengbiao[j].chushizhi) + this.zuizhonglazhi * parseFloat(Gerenshuxing.jinengbiao[j].jiacheng);
                        jinengjiachengzhi_1_ = Math.floor(jinengjiachengzhi_1_);
                        this.chufabisha_1_ = "" + jinengjiachengzhi_1_;
                    }
                    else if (this.caidejineng3 == "20004") {
                        jinengjiachengzhi_1_ = parseInt(Gerenshuxing.jinengbiao[j].chushizhi) + this.zuizhonglazhi * parseFloat(Gerenshuxing.jinengbiao[j].jiacheng);
                        jinengjiachengzhi_1_ = Math.floor(jinengjiachengzhi_1_);
                        this.chufabisha_1_ = "" + jinengjiachengzhi_1_;
                    }
                    else if (this.caidejineng3 == "20005") {
                        jinengjiachengzhi_1_ = parseInt(Gerenshuxing.jinengbiao[j].chushizhi) + this.zuizhongtianzhi * parseFloat(Gerenshuxing.jinengbiao[j].jiacheng);
                        jinengjiachengzhi_1_ = Math.floor(jinengjiachengzhi_1_);
                        this.chufaxixue_1_ = "" + jinengjiachengzhi_1_;
                    }
                    else if (this.caidejineng3 == "20006") {
                        jinengjiachengzhi_1_ = parseInt(Gerenshuxing.jinengbiao[j].chushizhi) + this.zuizhongtianzhi * parseFloat(Gerenshuxing.jinengbiao[j].jiacheng);
                        jinengjiachengzhi_1_ = Math.floor(jinengjiachengzhi_1_);
                        this.chufaxixue_1_ = "" + jinengjiachengzhi_1_;
                    }
                    else if (this.caidejineng3 == "20007") {
                        this.chufazhuiji_1_ = "1";
                    }
                    else if (this.caidejineng3 == "20008") {
                        this.chufasane_1_ = "1";
                    }
                    else if (this.caidejineng3 == "20009") {
                        jinengjiachengzhi_1_ = parseInt(Gerenshuxing.jinengbiao[j].chushizhi) + this.zuizhonglazhi * parseFloat(Gerenshuxing.jinengbiao[j].jiacheng);
                        jinengjiachengzhi_1_ = Math.floor(jinengjiachengzhi_1_);
                        this.chufahushila_1_ = "" + jinengjiachengzhi_1_;
                    }
                    else if (this.caidejineng3 == "20010") {
                        jinengjiachengzhi_1_ = parseInt(Gerenshuxing.jinengbiao[j].chushizhi) + this.zuizhongtianzhi * parseFloat(Gerenshuxing.jinengbiao[j].jiacheng);
                        jinengjiachengzhi_1_ = Math.floor(jinengjiachengzhi_1_);
                        this.chufahushitian_1_ = "" + jinengjiachengzhi_1_;
                    }
                    else if (this.caidejineng3 == "20011") {
                        jinengjiachengzhi_1_ = parseInt(Gerenshuxing.jinengbiao[j].chushizhi) + this.zuizhongsuanzhi * parseFloat(Gerenshuxing.jinengbiao[j].jiacheng);
                        jinengjiachengzhi_1_ = Math.floor(jinengjiachengzhi_1_);
                        this.chufahushisuan_1_ = "" + jinengjiachengzhi_1_;
                    }
                    else if (this.caidejineng3 == "20012") {
                        jinengjiachengzhi_1_ = parseInt(Gerenshuxing.jinengbiao[j].chushizhi) + this.zuizhongmazhi * parseFloat(Gerenshuxing.jinengbiao[j].jiacheng);
                        jinengjiachengzhi_1_ = Math.floor(jinengjiachengzhi_1_);
                        this.chufahushima_1_ = "" + jinengjiachengzhi_1_;
                    }
                    else if (this.caidejineng3 == "20013") {
                        jinengjiachengzhi_1_ = parseInt(Gerenshuxing.jinengbiao[j].chushizhi) + this.zuizhongsuanzhi * parseFloat(Gerenshuxing.jinengbiao[j].jiacheng);
                        jinengjiachengzhi_1_ = Math.floor(jinengjiachengzhi_1_);
                        this.chufazhenshe_1_ = "" + jinengjiachengzhi_1_;
                    }
                    else if (this.caidejineng3 == "20014") {
                        jinengjiachengzhi_1_ = parseInt(Gerenshuxing.jinengbiao[j].chushizhi) + this.zuizhongsuanzhi * parseFloat(Gerenshuxing.jinengbiao[j].jiacheng);
                        jinengjiachengzhi_1_ = Math.floor(jinengjiachengzhi_1_);
                        this.chufaxilan_1_ = "" + jinengjiachengzhi_1_;
                    }
                    else if (this.caidejineng3 == "20015") {
                        jinengjiachengzhi_1_ = parseInt(Gerenshuxing.jinengbiao[j].chushizhi) + this.zuizhongsuanzhi * parseFloat(Gerenshuxing.jinengbiao[j].jiacheng);
                        jinengjiachengzhi_1_ = Math.floor(jinengjiachengzhi_1_);
                        this.chufaxilan_1_ = "" + jinengjiachengzhi_1_;
                    }
                    else if (this.caidejineng3 == "20016") {
                        jinengjiachengzhi_1_ = parseInt(Gerenshuxing.jinengbiao[j].chushizhi) + this.zuizhongmazhi * parseFloat(Gerenshuxing.jinengbiao[j].jiacheng);
                        jinengjiachengzhi_1_ = Math.floor(jinengjiachengzhi_1_);
                        this.chufajiansu_1_ = "" + jinengjiachengzhi_1_;
                    }
                    else if (this.caidejineng3 == "20017") {
                        jinengjiachengzhi_1_ = parseInt(Gerenshuxing.jinengbiao[j].chushizhi) + this.zuizhongmazhi * parseFloat(Gerenshuxing.jinengbiao[j].jiacheng);
                        jinengjiachengzhi_1_ = Math.floor(jinengjiachengzhi_1_);
                        var suijishu = Math.floor(Math.random() * 100);
                        if (suijishu <= jinengjiachengzhi_1_) {
                            this.chufachenmo_1_ = "1";
                        }
                    }
                    else if (this.caidejineng3 == "20018") {
                        jinengjiachengzhi_1_ = parseInt(Gerenshuxing.jinengbiao[j].chushizhi) + this.zuizhongtianzhi * parseFloat(Gerenshuxing.jinengbiao[j].jiacheng);
                        jinengjiachengzhi_1_ = Math.floor(jinengjiachengzhi_1_);
                        this.chufahuixue_1_ = "" + jinengjiachengzhi_1_;
                    }
                    else if (this.caidejineng3 == "20019") {
                        jinengjiachengzhi_1_ = parseInt(Gerenshuxing.jinengbiao[j].chushizhi) + this.zuizhongsuanzhi * parseFloat(Gerenshuxing.jinengbiao[j].jiacheng);
                        jinengjiachengzhi_1_ = Math.floor(jinengjiachengzhi_1_);
                        this.chufaquanhushi_1_ = "" + jinengjiachengzhi_1_;
                    }
                    else if (this.caidejineng3 == "20020") {
                        this.chufahuiling_1_ = "1";
                    }
                    else if (this.caidejineng3 == "20021") {
                        jinengjiachengzhi_1_ = parseInt(Gerenshuxing.jinengbiao[j].chushizhi) + this.zuizhongsuanzhi * parseFloat(Gerenshuxing.jinengbiao[j].jiacheng);
                        jinengjiachengzhi_1_ = Math.floor(jinengjiachengzhi_1_);
                        this.chufadu_1_ = "" + jinengjiachengzhi_1_;
                    }
                    else if (this.caidejineng3 == "20022") {
                        jinengjiachengzhi_1_ = parseInt(Gerenshuxing.jinengbiao[j].chushizhi) + this.zuizhongmazhi * parseFloat(Gerenshuxing.jinengbiao[j].jiacheng);
                        jinengjiachengzhi_1_ = Math.floor(jinengjiachengzhi_1_);
                        this.chufaxuruo_1_ = "" + jinengjiachengzhi_1_;
                    }
                    else if (this.caidejineng3 == "20023") {
                        jinengjiachengzhi_1_ = parseInt(Gerenshuxing.jinengbiao[j].chushizhi) + this.zuizhongtianzhi * parseFloat(Gerenshuxing.jinengbiao[j].jiacheng);
                        jinengjiachengzhi_1_ = Math.floor(jinengjiachengzhi_1_);
                        this.chufajiafang_1_ = "" + jinengjiachengzhi_1_;
                    }
                    else if (this.caidejineng3 == "20024") {
                        jinengjiachengzhi_1_ = parseInt(Gerenshuxing.jinengbiao[j].chushizhi) + this.zuizhonglazhi * parseFloat(Gerenshuxing.jinengbiao[j].jiacheng);
                        jinengjiachengzhi_1_ = Math.floor(jinengjiachengzhi_1_);
                        this.chufajiasu_1_ = "" + jinengjiachengzhi_1_;
                    }
                    else if (this.caidejineng3 == "20025") {
                        this.chufajianxue_1_ = "1";
                    }
                    else if (this.caidejineng3 == "20026") {
                        this.chufajiangong_1_ = "1";
                    }
                    else if (this.caidejineng3 == "20027") {
                        this.chufawofangjiansu_1_ = "1";
                    }
                }
            }
        }
        //计算菜品技能2///
        if (this.caidejineng4 != "0") {
            for (var j = 0; j < Gerenshuxing.jinengbiao.length; j++) {
                if (Gerenshuxing.jinengbiao[j].id == this.caidejineng4) {
                    var jinengjiachengzhi_1_ = 0;
                    if (this.caidejineng4 == "20001") {
                        jinengjiachengzhi_1_ = parseInt(Gerenshuxing.jinengbiao[j].chushizhi) + this.zuizhonglazhi * parseFloat(Gerenshuxing.jinengbiao[j].jiacheng);
                        jinengjiachengzhi_1_ = Math.floor(jinengjiachengzhi_1_);
                        var suijishu = Math.floor(Math.random() * 100);
                        if (suijishu <= jinengjiachengzhi_1_) {
                            this.chufalianji_1_ = "1";
                        }
                    }
                    else if (this.caidejineng4 == "20002") {
                        jinengjiachengzhi_1_ = parseInt(Gerenshuxing.jinengbiao[j].chushizhi) + this.zuizhonglazhi * parseFloat(Gerenshuxing.jinengbiao[j].jiacheng);
                        jinengjiachengzhi_1_ = Math.floor(jinengjiachengzhi_1_);
                        var suijishu = Math.floor(Math.random() * 100);
                        if (suijishu <= jinengjiachengzhi_1_) {
                            this.chufalianji_1_ = "1";
                        }
                    }
                    else if (this.caidejineng4 == "20003") {
                        jinengjiachengzhi_1_ = parseInt(Gerenshuxing.jinengbiao[j].chushizhi) + this.zuizhonglazhi * parseFloat(Gerenshuxing.jinengbiao[j].jiacheng);
                        jinengjiachengzhi_1_ = Math.floor(jinengjiachengzhi_1_);
                        this.chufabisha_1_ = "" + jinengjiachengzhi_1_;
                    }
                    else if (this.caidejineng4 == "20004") {
                        jinengjiachengzhi_1_ = parseInt(Gerenshuxing.jinengbiao[j].chushizhi) + this.zuizhonglazhi * parseFloat(Gerenshuxing.jinengbiao[j].jiacheng);
                        jinengjiachengzhi_1_ = Math.floor(jinengjiachengzhi_1_);
                        this.chufabisha_1_ = "" + jinengjiachengzhi_1_;
                    }
                    else if (this.caidejineng4 == "20005") {
                        jinengjiachengzhi_1_ = parseInt(Gerenshuxing.jinengbiao[j].chushizhi) + this.zuizhongtianzhi * parseFloat(Gerenshuxing.jinengbiao[j].jiacheng);
                        jinengjiachengzhi_1_ = Math.floor(jinengjiachengzhi_1_);
                        this.chufaxixue_1_ = "" + jinengjiachengzhi_1_;
                    }
                    else if (this.caidejineng4 == "20006") {
                        jinengjiachengzhi_1_ = parseInt(Gerenshuxing.jinengbiao[j].chushizhi) + this.zuizhongtianzhi * parseFloat(Gerenshuxing.jinengbiao[j].jiacheng);
                        jinengjiachengzhi_1_ = Math.floor(jinengjiachengzhi_1_);
                        this.chufaxixue_1_ = "" + jinengjiachengzhi_1_;
                    }
                    else if (this.caidejineng4 == "20007") {
                        this.chufazhuiji_1_ = "1";
                    }
                    else if (this.caidejineng4 == "20008") {
                        this.chufasane_1_ = "1";
                    }
                    else if (this.caidejineng4 == "20009") {
                        jinengjiachengzhi_1_ = parseInt(Gerenshuxing.jinengbiao[j].chushizhi) + this.zuizhonglazhi * parseFloat(Gerenshuxing.jinengbiao[j].jiacheng);
                        jinengjiachengzhi_1_ = Math.floor(jinengjiachengzhi_1_);
                        this.chufahushila_1_ = "" + jinengjiachengzhi_1_;
                    }
                    else if (this.caidejineng4 == "20010") {
                        jinengjiachengzhi_1_ = parseInt(Gerenshuxing.jinengbiao[j].chushizhi) + this.zuizhongtianzhi * parseFloat(Gerenshuxing.jinengbiao[j].jiacheng);
                        jinengjiachengzhi_1_ = Math.floor(jinengjiachengzhi_1_);
                        this.chufahushitian_1_ = "" + jinengjiachengzhi_1_;
                    }
                    else if (this.caidejineng4 == "20011") {
                        jinengjiachengzhi_1_ = parseInt(Gerenshuxing.jinengbiao[j].chushizhi) + this.zuizhongsuanzhi * parseFloat(Gerenshuxing.jinengbiao[j].jiacheng);
                        jinengjiachengzhi_1_ = Math.floor(jinengjiachengzhi_1_);
                        this.chufahushisuan_1_ = "" + jinengjiachengzhi_1_;
                    }
                    else if (this.caidejineng4 == "20012") {
                        jinengjiachengzhi_1_ = parseInt(Gerenshuxing.jinengbiao[j].chushizhi) + this.zuizhongmazhi * parseFloat(Gerenshuxing.jinengbiao[j].jiacheng);
                        jinengjiachengzhi_1_ = Math.floor(jinengjiachengzhi_1_);
                        this.chufahushima_1_ = "" + jinengjiachengzhi_1_;
                    }
                    else if (this.caidejineng4 == "20013") {
                        jinengjiachengzhi_1_ = parseInt(Gerenshuxing.jinengbiao[j].chushizhi) + this.zuizhongsuanzhi * parseFloat(Gerenshuxing.jinengbiao[j].jiacheng);
                        jinengjiachengzhi_1_ = Math.floor(jinengjiachengzhi_1_);
                        this.chufazhenshe_1_ = "" + jinengjiachengzhi_1_;
                    }
                    else if (this.caidejineng4 == "20014") {
                        jinengjiachengzhi_1_ = parseInt(Gerenshuxing.jinengbiao[j].chushizhi) + this.zuizhongsuanzhi * parseFloat(Gerenshuxing.jinengbiao[j].jiacheng);
                        jinengjiachengzhi_1_ = Math.floor(jinengjiachengzhi_1_);
                        this.chufaxilan_1_ = "" + jinengjiachengzhi_1_;
                    }
                    else if (this.caidejineng4 == "20015") {
                        jinengjiachengzhi_1_ = parseInt(Gerenshuxing.jinengbiao[j].chushizhi) + this.zuizhongsuanzhi * parseFloat(Gerenshuxing.jinengbiao[j].jiacheng);
                        jinengjiachengzhi_1_ = Math.floor(jinengjiachengzhi_1_);
                        this.chufaxilan_1_ = "" + jinengjiachengzhi_1_;
                    }
                    else if (this.caidejineng4 == "20016") {
                        jinengjiachengzhi_1_ = parseInt(Gerenshuxing.jinengbiao[j].chushizhi) + this.zuizhongmazhi * parseFloat(Gerenshuxing.jinengbiao[j].jiacheng);
                        jinengjiachengzhi_1_ = Math.floor(jinengjiachengzhi_1_);
                        this.chufajiansu_1_ = "" + jinengjiachengzhi_1_;
                    }
                    else if (this.caidejineng4 == "20017") {
                        jinengjiachengzhi_1_ = parseInt(Gerenshuxing.jinengbiao[j].chushizhi) + this.zuizhongmazhi * parseFloat(Gerenshuxing.jinengbiao[j].jiacheng);
                        jinengjiachengzhi_1_ = Math.floor(jinengjiachengzhi_1_);
                        var suijishu = Math.floor(Math.random() * 100);
                        if (suijishu <= jinengjiachengzhi_1_) {
                            this.chufachenmo_1_ = "1";
                        }
                    }
                    else if (this.caidejineng4 == "20018") {
                        jinengjiachengzhi_1_ = parseInt(Gerenshuxing.jinengbiao[j].chushizhi) + this.zuizhongtianzhi * parseFloat(Gerenshuxing.jinengbiao[j].jiacheng);
                        jinengjiachengzhi_1_ = Math.floor(jinengjiachengzhi_1_);
                        this.chufahuixue_1_ = "" + jinengjiachengzhi_1_;
                    }
                    else if (this.caidejineng4 == "20019") {
                        jinengjiachengzhi_1_ = parseInt(Gerenshuxing.jinengbiao[j].chushizhi) + this.zuizhongsuanzhi * parseFloat(Gerenshuxing.jinengbiao[j].jiacheng);
                        jinengjiachengzhi_1_ = Math.floor(jinengjiachengzhi_1_);
                        this.chufaquanhushi_1_ = "" + jinengjiachengzhi_1_;
                    }
                    else if (this.caidejineng4 == "20020") {
                        this.chufahuiling_1_ = "1";
                    }
                    else if (this.caidejineng4 == "20021") {
                        jinengjiachengzhi_1_ = parseInt(Gerenshuxing.jinengbiao[j].chushizhi) + this.zuizhongsuanzhi * parseFloat(Gerenshuxing.jinengbiao[j].jiacheng);
                        jinengjiachengzhi_1_ = Math.floor(jinengjiachengzhi_1_);
                        this.chufadu_1_ = "" + jinengjiachengzhi_1_;
                    }
                    else if (this.caidejineng4 == "20022") {
                        jinengjiachengzhi_1_ = parseInt(Gerenshuxing.jinengbiao[j].chushizhi) + this.zuizhongmazhi * parseFloat(Gerenshuxing.jinengbiao[j].jiacheng);
                        jinengjiachengzhi_1_ = Math.floor(jinengjiachengzhi_1_);
                        this.chufaxuruo_1_ = "" + jinengjiachengzhi_1_;
                    }
                    else if (this.caidejineng4 == "20023") {
                        jinengjiachengzhi_1_ = parseInt(Gerenshuxing.jinengbiao[j].chushizhi) + this.zuizhongtianzhi * parseFloat(Gerenshuxing.jinengbiao[j].jiacheng);
                        jinengjiachengzhi_1_ = Math.floor(jinengjiachengzhi_1_);
                        this.chufajiafang_1_ = "" + jinengjiachengzhi_1_;
                    }
                    else if (this.caidejineng4 == "20024") {
                        jinengjiachengzhi_1_ = parseInt(Gerenshuxing.jinengbiao[j].chushizhi) + this.zuizhonglazhi * parseFloat(Gerenshuxing.jinengbiao[j].jiacheng);
                        jinengjiachengzhi_1_ = Math.floor(jinengjiachengzhi_1_);
                        this.chufajiasu_1_ = "" + jinengjiachengzhi_1_;
                    }
                    else if (this.caidejineng4 == "20025") {
                        this.chufajianxue_1_ = "1";
                    }
                    else if (this.caidejineng4 == "20026") {
                        this.chufajiangong_1_ = "1";
                    }
                    else if (this.caidejineng4 == "20027") {
                        this.chufawofangjiansu_1_ = "1";
                    }
                }
            }
        }
        //计算菜品技能2///
        if (this.caidejineng5 != "0") {
            for (var j = 0; j < Gerenshuxing.jinengbiao.length; j++) {
                if (Gerenshuxing.jinengbiao[j].id == this.caidejineng5) {
                    var jinengjiachengzhi_1_ = 0;
                    if (this.caidejineng5 == "20001") {
                        jinengjiachengzhi_1_ = parseInt(Gerenshuxing.jinengbiao[j].chushizhi) + this.zuizhonglazhi * parseFloat(Gerenshuxing.jinengbiao[j].jiacheng);
                        jinengjiachengzhi_1_ = Math.floor(jinengjiachengzhi_1_);
                        var suijishu = Math.floor(Math.random() * 100);
                        if (suijishu <= jinengjiachengzhi_1_) {
                            this.chufalianji_1_ = "1";
                        }
                    }
                    else if (this.caidejineng5 == "20002") {
                        jinengjiachengzhi_1_ = parseInt(Gerenshuxing.jinengbiao[j].chushizhi) + this.zuizhonglazhi * parseFloat(Gerenshuxing.jinengbiao[j].jiacheng);
                        jinengjiachengzhi_1_ = Math.floor(jinengjiachengzhi_1_);
                        var suijishu = Math.floor(Math.random() * 100);
                        if (suijishu <= jinengjiachengzhi_1_) {
                            this.chufalianji_1_ = "1";
                        }
                    }
                    else if (this.caidejineng5 == "20003") {
                        jinengjiachengzhi_1_ = parseInt(Gerenshuxing.jinengbiao[j].chushizhi) + this.zuizhonglazhi * parseFloat(Gerenshuxing.jinengbiao[j].jiacheng);
                        jinengjiachengzhi_1_ = Math.floor(jinengjiachengzhi_1_);
                        this.chufabisha_1_ = "" + jinengjiachengzhi_1_;
                    }
                    else if (this.caidejineng5 == "20004") {
                        jinengjiachengzhi_1_ = parseInt(Gerenshuxing.jinengbiao[j].chushizhi) + this.zuizhonglazhi * parseFloat(Gerenshuxing.jinengbiao[j].jiacheng);
                        jinengjiachengzhi_1_ = Math.floor(jinengjiachengzhi_1_);
                        this.chufabisha_1_ = "" + jinengjiachengzhi_1_;
                    }
                    else if (this.caidejineng5 == "20005") {
                        jinengjiachengzhi_1_ = parseInt(Gerenshuxing.jinengbiao[j].chushizhi) + this.zuizhongtianzhi * parseFloat(Gerenshuxing.jinengbiao[j].jiacheng);
                        jinengjiachengzhi_1_ = Math.floor(jinengjiachengzhi_1_);
                        this.chufaxixue_1_ = "" + jinengjiachengzhi_1_;
                    }
                    else if (this.caidejineng5 == "20006") {
                        jinengjiachengzhi_1_ = parseInt(Gerenshuxing.jinengbiao[j].chushizhi) + this.zuizhongtianzhi * parseFloat(Gerenshuxing.jinengbiao[j].jiacheng);
                        jinengjiachengzhi_1_ = Math.floor(jinengjiachengzhi_1_);
                        this.chufaxixue_1_ = "" + jinengjiachengzhi_1_;
                    }
                    else if (this.caidejineng5 == "20007") {
                        this.chufazhuiji_1_ = "1";
                    }
                    else if (this.caidejineng5 == "20008") {
                        this.chufasane_1_ = "1";
                    }
                    else if (this.caidejineng5 == "20009") {
                        jinengjiachengzhi_1_ = parseInt(Gerenshuxing.jinengbiao[j].chushizhi) + this.zuizhonglazhi * parseFloat(Gerenshuxing.jinengbiao[j].jiacheng);
                        jinengjiachengzhi_1_ = Math.floor(jinengjiachengzhi_1_);
                        this.chufahushila_1_ = "" + jinengjiachengzhi_1_;
                    }
                    else if (this.caidejineng5 == "20010") {
                        jinengjiachengzhi_1_ = parseInt(Gerenshuxing.jinengbiao[j].chushizhi) + this.zuizhongtianzhi * parseFloat(Gerenshuxing.jinengbiao[j].jiacheng);
                        jinengjiachengzhi_1_ = Math.floor(jinengjiachengzhi_1_);
                        this.chufahushitian_1_ = "" + jinengjiachengzhi_1_;
                    }
                    else if (this.caidejineng5 == "20011") {
                        jinengjiachengzhi_1_ = parseInt(Gerenshuxing.jinengbiao[j].chushizhi) + this.zuizhongsuanzhi * parseFloat(Gerenshuxing.jinengbiao[j].jiacheng);
                        jinengjiachengzhi_1_ = Math.floor(jinengjiachengzhi_1_);
                        this.chufahushisuan_1_ = "" + jinengjiachengzhi_1_;
                    }
                    else if (this.caidejineng5 == "20012") {
                        jinengjiachengzhi_1_ = parseInt(Gerenshuxing.jinengbiao[j].chushizhi) + this.zuizhongmazhi * parseFloat(Gerenshuxing.jinengbiao[j].jiacheng);
                        jinengjiachengzhi_1_ = Math.floor(jinengjiachengzhi_1_);
                        this.chufahushima_1_ = "" + jinengjiachengzhi_1_;
                    }
                    else if (this.caidejineng5 == "20013") {
                        jinengjiachengzhi_1_ = parseInt(Gerenshuxing.jinengbiao[j].chushizhi) + this.zuizhongsuanzhi * parseFloat(Gerenshuxing.jinengbiao[j].jiacheng);
                        jinengjiachengzhi_1_ = Math.floor(jinengjiachengzhi_1_);
                        this.chufazhenshe_1_ = "" + jinengjiachengzhi_1_;
                    }
                    else if (this.caidejineng5 == "20014") {
                        jinengjiachengzhi_1_ = parseInt(Gerenshuxing.jinengbiao[j].chushizhi) + this.zuizhongsuanzhi * parseFloat(Gerenshuxing.jinengbiao[j].jiacheng);
                        jinengjiachengzhi_1_ = Math.floor(jinengjiachengzhi_1_);
                        this.chufaxilan_1_ = "" + jinengjiachengzhi_1_;
                    }
                    else if (this.caidejineng5 == "20015") {
                        jinengjiachengzhi_1_ = parseInt(Gerenshuxing.jinengbiao[j].chushizhi) + this.zuizhongsuanzhi * parseFloat(Gerenshuxing.jinengbiao[j].jiacheng);
                        jinengjiachengzhi_1_ = Math.floor(jinengjiachengzhi_1_);
                        this.chufaxilan_1_ = "" + jinengjiachengzhi_1_;
                    }
                    else if (this.caidejineng5 == "20016") {
                        jinengjiachengzhi_1_ = parseInt(Gerenshuxing.jinengbiao[j].chushizhi) + this.zuizhongmazhi * parseFloat(Gerenshuxing.jinengbiao[j].jiacheng);
                        jinengjiachengzhi_1_ = Math.floor(jinengjiachengzhi_1_);
                        this.chufajiansu_1_ = "" + jinengjiachengzhi_1_;
                    }
                    else if (this.caidejineng5 == "20017") {
                        jinengjiachengzhi_1_ = parseInt(Gerenshuxing.jinengbiao[j].chushizhi) + this.zuizhongmazhi * parseFloat(Gerenshuxing.jinengbiao[j].jiacheng);
                        jinengjiachengzhi_1_ = Math.floor(jinengjiachengzhi_1_);
                        var suijishu = Math.floor(Math.random() * 100);
                        if (suijishu <= jinengjiachengzhi_1_) {
                            this.chufachenmo_1_ = "1";
                        }
                    }
                    else if (this.caidejineng5 == "20018") {
                        jinengjiachengzhi_1_ = parseInt(Gerenshuxing.jinengbiao[j].chushizhi) + this.zuizhongtianzhi * parseFloat(Gerenshuxing.jinengbiao[j].jiacheng);
                        jinengjiachengzhi_1_ = Math.floor(jinengjiachengzhi_1_);
                        this.chufahuixue_1_ = "" + jinengjiachengzhi_1_;
                    }
                    else if (this.caidejineng5 == "20019") {
                        jinengjiachengzhi_1_ = parseInt(Gerenshuxing.jinengbiao[j].chushizhi) + this.zuizhongsuanzhi * parseFloat(Gerenshuxing.jinengbiao[j].jiacheng);
                        jinengjiachengzhi_1_ = Math.floor(jinengjiachengzhi_1_);
                        this.chufaquanhushi_1_ = "" + jinengjiachengzhi_1_;
                    }
                    else if (this.caidejineng5 == "20020") {
                        this.chufahuiling_1_ = "1";
                    }
                    else if (this.caidejineng5 == "20021") {
                        jinengjiachengzhi_1_ = parseInt(Gerenshuxing.jinengbiao[j].chushizhi) + this.zuizhongsuanzhi * parseFloat(Gerenshuxing.jinengbiao[j].jiacheng);
                        jinengjiachengzhi_1_ = Math.floor(jinengjiachengzhi_1_);
                        this.chufadu_1_ = "" + jinengjiachengzhi_1_;
                    }
                    else if (this.caidejineng5 == "20022") {
                        jinengjiachengzhi_1_ = parseInt(Gerenshuxing.jinengbiao[j].chushizhi) + this.zuizhongmazhi * parseFloat(Gerenshuxing.jinengbiao[j].jiacheng);
                        jinengjiachengzhi_1_ = Math.floor(jinengjiachengzhi_1_);
                        this.chufaxuruo_1_ = "" + jinengjiachengzhi_1_;
                    }
                    else if (this.caidejineng5 == "20023") {
                        jinengjiachengzhi_1_ = parseInt(Gerenshuxing.jinengbiao[j].chushizhi) + this.zuizhongtianzhi * parseFloat(Gerenshuxing.jinengbiao[j].jiacheng);
                        jinengjiachengzhi_1_ = Math.floor(jinengjiachengzhi_1_);
                        this.chufajiafang_1_ = "" + jinengjiachengzhi_1_;
                    }
                    else if (this.caidejineng5 == "20024") {
                        jinengjiachengzhi_1_ = parseInt(Gerenshuxing.jinengbiao[j].chushizhi) + this.zuizhonglazhi * parseFloat(Gerenshuxing.jinengbiao[j].jiacheng);
                        jinengjiachengzhi_1_ = Math.floor(jinengjiachengzhi_1_);
                        this.chufajiasu_1_ = "" + jinengjiachengzhi_1_;
                    }
                    else if (this.caidejineng5 == "20025") {
                        this.chufajianxue_1_ = "1";
                    }
                    else if (this.caidejineng5 == "20026") {
                        this.chufajiangong_1_ = "1";
                    }
                    else if (this.caidejineng5 == "20027") {
                        this.chufawofangjiansu_1_ = "1";
                    }
                }
            }
        }
        this.duiguai1shanghai();
    };
    //队怪物2使用技能判断
    Zhandoujiemian.prototype.duiguai2jineng = function () {
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
        if (this.caidejineng1 != "0") {
            for (var j = 0; j < Gerenshuxing.jinengbiao.length; j++) {
                if (Gerenshuxing.jinengbiao[j].id == this.caidejineng1) {
                    var jinengjiachengzhi_2_ = 0;
                    if (this.caidejineng1 == "20001") {
                        jinengjiachengzhi_2_ = parseInt(Gerenshuxing.jinengbiao[j].chushizhi) + this.zuizhonglazhi * parseFloat(Gerenshuxing.jinengbiao[j].jiacheng);
                        jinengjiachengzhi_2_ = Math.floor(jinengjiachengzhi_2_);
                        var suijishu = Math.floor(Math.random() * 100);
                        if (suijishu <= jinengjiachengzhi_2_) {
                            this.chufalianji_2_ = "1";
                        }
                    }
                    else if (this.caidejineng1 == "20002") {
                        jinengjiachengzhi_2_ = parseInt(Gerenshuxing.jinengbiao[j].chushizhi) + this.zuizhonglazhi * parseFloat(Gerenshuxing.jinengbiao[j].jiacheng);
                        jinengjiachengzhi_2_ = Math.floor(jinengjiachengzhi_2_);
                        var suijishu = Math.floor(Math.random() * 100);
                        if (suijishu <= jinengjiachengzhi_2_) {
                            this.chufalianji_2_ = "1";
                        }
                    }
                    else if (this.caidejineng1 == "20003") {
                        jinengjiachengzhi_2_ = parseInt(Gerenshuxing.jinengbiao[j].chushizhi) + this.zuizhonglazhi * parseFloat(Gerenshuxing.jinengbiao[j].jiacheng);
                        jinengjiachengzhi_2_ = Math.floor(jinengjiachengzhi_2_);
                        this.chufabisha_2_ = "" + jinengjiachengzhi_2_;
                    }
                    else if (this.caidejineng1 == "20004") {
                        jinengjiachengzhi_2_ = parseInt(Gerenshuxing.jinengbiao[j].chushizhi) + this.zuizhonglazhi * parseFloat(Gerenshuxing.jinengbiao[j].jiacheng);
                        jinengjiachengzhi_2_ = Math.floor(jinengjiachengzhi_2_);
                        this.chufabisha_2_ = "" + jinengjiachengzhi_2_;
                    }
                    else if (this.caidejineng1 == "20005") {
                        jinengjiachengzhi_2_ = parseInt(Gerenshuxing.jinengbiao[j].chushizhi) + this.zuizhongtianzhi * parseFloat(Gerenshuxing.jinengbiao[j].jiacheng);
                        jinengjiachengzhi_2_ = Math.floor(jinengjiachengzhi_2_);
                        this.chufaxixue_2_ = "" + jinengjiachengzhi_2_;
                    }
                    else if (this.caidejineng1 == "20006") {
                        jinengjiachengzhi_2_ = parseInt(Gerenshuxing.jinengbiao[j].chushizhi) + this.zuizhongtianzhi * parseFloat(Gerenshuxing.jinengbiao[j].jiacheng);
                        jinengjiachengzhi_2_ = Math.floor(jinengjiachengzhi_2_);
                        this.chufaxixue_2_ = "" + jinengjiachengzhi_2_;
                    }
                    else if (this.caidejineng1 == "20007") {
                        this.chufazhuiji_2_ = "1";
                    }
                    else if (this.caidejineng1 == "20008") {
                        this.chufasane_2_ = "1";
                    }
                    else if (this.caidejineng1 == "20009") {
                        jinengjiachengzhi_2_ = parseInt(Gerenshuxing.jinengbiao[j].chushizhi) + this.zuizhonglazhi * parseFloat(Gerenshuxing.jinengbiao[j].jiacheng);
                        jinengjiachengzhi_2_ = Math.floor(jinengjiachengzhi_2_);
                        this.chufahushila_2_ = "" + jinengjiachengzhi_2_;
                    }
                    else if (this.caidejineng1 == "20010") {
                        jinengjiachengzhi_2_ = parseInt(Gerenshuxing.jinengbiao[j].chushizhi) + this.zuizhongtianzhi * parseFloat(Gerenshuxing.jinengbiao[j].jiacheng);
                        jinengjiachengzhi_2_ = Math.floor(jinengjiachengzhi_2_);
                        this.chufahushitian_2_ = "" + jinengjiachengzhi_2_;
                    }
                    else if (this.caidejineng1 == "20011") {
                        jinengjiachengzhi_2_ = parseInt(Gerenshuxing.jinengbiao[j].chushizhi) + this.zuizhongsuanzhi * parseFloat(Gerenshuxing.jinengbiao[j].jiacheng);
                        jinengjiachengzhi_2_ = Math.floor(jinengjiachengzhi_2_);
                        this.chufahushisuan_2_ = "" + jinengjiachengzhi_2_;
                    }
                    else if (this.caidejineng1 == "20012") {
                        jinengjiachengzhi_2_ = parseInt(Gerenshuxing.jinengbiao[j].chushizhi) + this.zuizhongmazhi * parseFloat(Gerenshuxing.jinengbiao[j].jiacheng);
                        jinengjiachengzhi_2_ = Math.floor(jinengjiachengzhi_2_);
                        this.chufahushima_2_ = "" + jinengjiachengzhi_2_;
                    }
                    else if (this.caidejineng1 == "20013") {
                        jinengjiachengzhi_2_ = parseInt(Gerenshuxing.jinengbiao[j].chushizhi) + this.zuizhongsuanzhi * parseFloat(Gerenshuxing.jinengbiao[j].jiacheng);
                        jinengjiachengzhi_2_ = Math.floor(jinengjiachengzhi_2_);
                        this.chufazhenshe_2_ = "" + jinengjiachengzhi_2_;
                    }
                    else if (this.caidejineng1 == "20014") {
                        jinengjiachengzhi_2_ = parseInt(Gerenshuxing.jinengbiao[j].chushizhi) + this.zuizhongsuanzhi * parseFloat(Gerenshuxing.jinengbiao[j].jiacheng);
                        jinengjiachengzhi_2_ = Math.floor(jinengjiachengzhi_2_);
                        this.chufaxilan_2_ = "" + jinengjiachengzhi_2_;
                    }
                    else if (this.caidejineng1 == "20015") {
                        jinengjiachengzhi_2_ = parseInt(Gerenshuxing.jinengbiao[j].chushizhi) + this.zuizhongsuanzhi * parseFloat(Gerenshuxing.jinengbiao[j].jiacheng);
                        jinengjiachengzhi_2_ = Math.floor(jinengjiachengzhi_2_);
                        this.chufaxilan_2_ = "" + jinengjiachengzhi_2_;
                    }
                    else if (this.caidejineng1 == "20016") {
                        jinengjiachengzhi_2_ = parseInt(Gerenshuxing.jinengbiao[j].chushizhi) + this.zuizhongmazhi * parseFloat(Gerenshuxing.jinengbiao[j].jiacheng);
                        jinengjiachengzhi_2_ = Math.floor(jinengjiachengzhi_2_);
                        this.chufajiansu_2_ = "" + jinengjiachengzhi_2_;
                    }
                    else if (this.caidejineng1 == "20017") {
                        jinengjiachengzhi_2_ = parseInt(Gerenshuxing.jinengbiao[j].chushizhi) + this.zuizhongmazhi * parseFloat(Gerenshuxing.jinengbiao[j].jiacheng);
                        jinengjiachengzhi_2_ = Math.floor(jinengjiachengzhi_2_);
                        var suijishu = Math.floor(Math.random() * 100);
                        if (suijishu <= jinengjiachengzhi_2_) {
                            this.chufachenmo_2_ = "1";
                        }
                    }
                    else if (this.caidejineng1 == "20018") {
                        jinengjiachengzhi_2_ = parseInt(Gerenshuxing.jinengbiao[j].chushizhi) + this.zuizhongtianzhi * parseFloat(Gerenshuxing.jinengbiao[j].jiacheng);
                        jinengjiachengzhi_2_ = Math.floor(jinengjiachengzhi_2_);
                        this.chufahuixue_2_ = "" + jinengjiachengzhi_2_;
                    }
                    else if (this.caidejineng1 == "20019") {
                        jinengjiachengzhi_2_ = parseInt(Gerenshuxing.jinengbiao[j].chushizhi) + this.zuizhongsuanzhi * parseFloat(Gerenshuxing.jinengbiao[j].jiacheng);
                        jinengjiachengzhi_2_ = Math.floor(jinengjiachengzhi_2_);
                        this.chufaquanhushi_2_ = "" + jinengjiachengzhi_2_;
                    }
                    else if (this.caidejineng1 == "20020") {
                        this.chufahuiling_2_ = "1";
                    }
                    else if (this.caidejineng1 == "20021") {
                        jinengjiachengzhi_2_ = parseInt(Gerenshuxing.jinengbiao[j].chushizhi) + this.zuizhongsuanzhi * parseFloat(Gerenshuxing.jinengbiao[j].jiacheng);
                        jinengjiachengzhi_2_ = Math.floor(jinengjiachengzhi_2_);
                        this.chufadu_2_ = "" + jinengjiachengzhi_2_;
                    }
                    else if (this.caidejineng1 == "20022") {
                        jinengjiachengzhi_2_ = parseInt(Gerenshuxing.jinengbiao[j].chushizhi) + this.zuizhongmazhi * parseFloat(Gerenshuxing.jinengbiao[j].jiacheng);
                        jinengjiachengzhi_2_ = Math.floor(jinengjiachengzhi_2_);
                        this.chufaxuruo_2_ = "" + jinengjiachengzhi_2_;
                    }
                    else if (this.caidejineng1 == "20023") {
                        jinengjiachengzhi_2_ = parseInt(Gerenshuxing.jinengbiao[j].chushizhi) + this.zuizhongtianzhi * parseFloat(Gerenshuxing.jinengbiao[j].jiacheng);
                        jinengjiachengzhi_2_ = Math.floor(jinengjiachengzhi_2_);
                        this.chufajiafang_2_ = "" + jinengjiachengzhi_2_;
                    }
                    else if (this.caidejineng1 == "20024") {
                        jinengjiachengzhi_2_ = parseInt(Gerenshuxing.jinengbiao[j].chushizhi) + this.zuizhonglazhi * parseFloat(Gerenshuxing.jinengbiao[j].jiacheng);
                        jinengjiachengzhi_2_ = Math.floor(jinengjiachengzhi_2_);
                        this.chufajiasu_2_ = "" + jinengjiachengzhi_2_;
                    }
                    else if (this.caidejineng1 == "20025") {
                        this.chufajianxue_2_ = "1";
                    }
                    else if (this.caidejineng1 == "20026") {
                        this.chufajiangong_2_ = "1";
                    }
                    else if (this.caidejineng1 == "20027") {
                        this.chufawofangjiansu_2_ = "1";
                    }
                }
            }
        }
        //计算菜品技能2///
        if (this.caidejineng2 != "0") {
            for (var j = 0; j < Gerenshuxing.jinengbiao.length; j++) {
                if (Gerenshuxing.jinengbiao[j].id == this.caidejineng2) {
                    var jinengjiachengzhi_2_ = 0;
                    if (this.caidejineng2 == "20001") {
                        jinengjiachengzhi_2_ = parseInt(Gerenshuxing.jinengbiao[j].chushizhi) + this.zuizhonglazhi * parseFloat(Gerenshuxing.jinengbiao[j].jiacheng);
                        jinengjiachengzhi_2_ = Math.floor(jinengjiachengzhi_2_);
                        var suijishu = Math.floor(Math.random() * 100);
                        if (suijishu <= jinengjiachengzhi_2_) {
                            this.chufalianji_2_ = "1";
                        }
                    }
                    else if (this.caidejineng2 == "20002") {
                        jinengjiachengzhi_2_ = parseInt(Gerenshuxing.jinengbiao[j].chushizhi) + this.zuizhonglazhi * parseFloat(Gerenshuxing.jinengbiao[j].jiacheng);
                        jinengjiachengzhi_2_ = Math.floor(jinengjiachengzhi_2_);
                        var suijishu = Math.floor(Math.random() * 100);
                        if (suijishu <= jinengjiachengzhi_2_) {
                            this.chufalianji_2_ = "1";
                        }
                    }
                    else if (this.caidejineng2 == "20003") {
                        jinengjiachengzhi_2_ = parseInt(Gerenshuxing.jinengbiao[j].chushizhi) + this.zuizhonglazhi * parseFloat(Gerenshuxing.jinengbiao[j].jiacheng);
                        jinengjiachengzhi_2_ = Math.floor(jinengjiachengzhi_2_);
                        this.chufabisha_2_ = "" + jinengjiachengzhi_2_;
                    }
                    else if (this.caidejineng2 == "20004") {
                        jinengjiachengzhi_2_ = parseInt(Gerenshuxing.jinengbiao[j].chushizhi) + this.zuizhonglazhi * parseFloat(Gerenshuxing.jinengbiao[j].jiacheng);
                        jinengjiachengzhi_2_ = Math.floor(jinengjiachengzhi_2_);
                        this.chufabisha_2_ = "" + jinengjiachengzhi_2_;
                    }
                    else if (this.caidejineng2 == "20005") {
                        jinengjiachengzhi_2_ = parseInt(Gerenshuxing.jinengbiao[j].chushizhi) + this.zuizhongtianzhi * parseFloat(Gerenshuxing.jinengbiao[j].jiacheng);
                        jinengjiachengzhi_2_ = Math.floor(jinengjiachengzhi_2_);
                        this.chufaxixue_2_ = "" + jinengjiachengzhi_2_;
                    }
                    else if (this.caidejineng2 == "20006") {
                        jinengjiachengzhi_2_ = parseInt(Gerenshuxing.jinengbiao[j].chushizhi) + this.zuizhongtianzhi * parseFloat(Gerenshuxing.jinengbiao[j].jiacheng);
                        jinengjiachengzhi_2_ = Math.floor(jinengjiachengzhi_2_);
                        this.chufaxixue_2_ = "" + jinengjiachengzhi_2_;
                    }
                    else if (this.caidejineng2 == "20007") {
                        this.chufazhuiji_2_ = "1";
                    }
                    else if (this.caidejineng2 == "20008") {
                        this.chufasane_2_ = "1";
                    }
                    else if (this.caidejineng2 == "20009") {
                        jinengjiachengzhi_2_ = parseInt(Gerenshuxing.jinengbiao[j].chushizhi) + this.zuizhonglazhi * parseFloat(Gerenshuxing.jinengbiao[j].jiacheng);
                        jinengjiachengzhi_2_ = Math.floor(jinengjiachengzhi_2_);
                        this.chufahushila_2_ = "" + jinengjiachengzhi_2_;
                    }
                    else if (this.caidejineng2 == "20010") {
                        jinengjiachengzhi_2_ = parseInt(Gerenshuxing.jinengbiao[j].chushizhi) + this.zuizhongtianzhi * parseFloat(Gerenshuxing.jinengbiao[j].jiacheng);
                        jinengjiachengzhi_2_ = Math.floor(jinengjiachengzhi_2_);
                        this.chufahushitian_2_ = "" + jinengjiachengzhi_2_;
                    }
                    else if (this.caidejineng2 == "20011") {
                        jinengjiachengzhi_2_ = parseInt(Gerenshuxing.jinengbiao[j].chushizhi) + this.zuizhongsuanzhi * parseFloat(Gerenshuxing.jinengbiao[j].jiacheng);
                        jinengjiachengzhi_2_ = Math.floor(jinengjiachengzhi_2_);
                        this.chufahushisuan_2_ = "" + jinengjiachengzhi_2_;
                    }
                    else if (this.caidejineng2 == "20012") {
                        jinengjiachengzhi_2_ = parseInt(Gerenshuxing.jinengbiao[j].chushizhi) + this.zuizhongmazhi * parseFloat(Gerenshuxing.jinengbiao[j].jiacheng);
                        jinengjiachengzhi_2_ = Math.floor(jinengjiachengzhi_2_);
                        this.chufahushima_2_ = "" + jinengjiachengzhi_2_;
                    }
                    else if (this.caidejineng2 == "20013") {
                        jinengjiachengzhi_2_ = parseInt(Gerenshuxing.jinengbiao[j].chushizhi) + this.zuizhongsuanzhi * parseFloat(Gerenshuxing.jinengbiao[j].jiacheng);
                        jinengjiachengzhi_2_ = Math.floor(jinengjiachengzhi_2_);
                        this.chufazhenshe_2_ = "" + jinengjiachengzhi_2_;
                    }
                    else if (this.caidejineng2 == "20014") {
                        jinengjiachengzhi_2_ = parseInt(Gerenshuxing.jinengbiao[j].chushizhi) + this.zuizhongsuanzhi * parseFloat(Gerenshuxing.jinengbiao[j].jiacheng);
                        jinengjiachengzhi_2_ = Math.floor(jinengjiachengzhi_2_);
                        this.chufaxilan_2_ = "" + jinengjiachengzhi_2_;
                    }
                    else if (this.caidejineng2 == "20015") {
                        jinengjiachengzhi_2_ = parseInt(Gerenshuxing.jinengbiao[j].chushizhi) + this.zuizhongsuanzhi * parseFloat(Gerenshuxing.jinengbiao[j].jiacheng);
                        jinengjiachengzhi_2_ = Math.floor(jinengjiachengzhi_2_);
                        this.chufaxilan_2_ = "" + jinengjiachengzhi_2_;
                    }
                    else if (this.caidejineng2 == "20016") {
                        jinengjiachengzhi_2_ = parseInt(Gerenshuxing.jinengbiao[j].chushizhi) + this.zuizhongmazhi * parseFloat(Gerenshuxing.jinengbiao[j].jiacheng);
                        jinengjiachengzhi_2_ = Math.floor(jinengjiachengzhi_2_);
                        this.chufajiansu_2_ = "" + jinengjiachengzhi_2_;
                    }
                    else if (this.caidejineng2 == "20017") {
                        jinengjiachengzhi_2_ = parseInt(Gerenshuxing.jinengbiao[j].chushizhi) + this.zuizhongmazhi * parseFloat(Gerenshuxing.jinengbiao[j].jiacheng);
                        jinengjiachengzhi_2_ = Math.floor(jinengjiachengzhi_2_);
                        var suijishu = Math.floor(Math.random() * 100);
                        if (suijishu <= jinengjiachengzhi_2_) {
                            this.chufachenmo_2_ = "1";
                        }
                    }
                    else if (this.caidejineng2 == "20018") {
                        jinengjiachengzhi_2_ = parseInt(Gerenshuxing.jinengbiao[j].chushizhi) + this.zuizhongtianzhi * parseFloat(Gerenshuxing.jinengbiao[j].jiacheng);
                        jinengjiachengzhi_2_ = Math.floor(jinengjiachengzhi_2_);
                        this.chufahuixue_2_ = "" + jinengjiachengzhi_2_;
                    }
                    else if (this.caidejineng2 == "20019") {
                        jinengjiachengzhi_2_ = parseInt(Gerenshuxing.jinengbiao[j].chushizhi) + this.zuizhongsuanzhi * parseFloat(Gerenshuxing.jinengbiao[j].jiacheng);
                        jinengjiachengzhi_2_ = Math.floor(jinengjiachengzhi_2_);
                        this.chufaquanhushi_2_ = "" + jinengjiachengzhi_2_;
                    }
                    else if (this.caidejineng2 == "20020") {
                        this.chufahuiling_2_ = "1";
                    }
                    else if (this.caidejineng2 == "20021") {
                        jinengjiachengzhi_2_ = parseInt(Gerenshuxing.jinengbiao[j].chushizhi) + this.zuizhongsuanzhi * parseFloat(Gerenshuxing.jinengbiao[j].jiacheng);
                        jinengjiachengzhi_2_ = Math.floor(jinengjiachengzhi_2_);
                        this.chufadu_2_ = "" + jinengjiachengzhi_2_;
                    }
                    else if (this.caidejineng2 == "20022") {
                        jinengjiachengzhi_2_ = parseInt(Gerenshuxing.jinengbiao[j].chushizhi) + this.zuizhongmazhi * parseFloat(Gerenshuxing.jinengbiao[j].jiacheng);
                        jinengjiachengzhi_2_ = Math.floor(jinengjiachengzhi_2_);
                        this.chufaxuruo_2_ = "" + jinengjiachengzhi_2_;
                    }
                    else if (this.caidejineng2 == "20023") {
                        jinengjiachengzhi_2_ = parseInt(Gerenshuxing.jinengbiao[j].chushizhi) + this.zuizhongtianzhi * parseFloat(Gerenshuxing.jinengbiao[j].jiacheng);
                        jinengjiachengzhi_2_ = Math.floor(jinengjiachengzhi_2_);
                        this.chufajiafang_2_ = "" + jinengjiachengzhi_2_;
                    }
                    else if (this.caidejineng2 == "20024") {
                        jinengjiachengzhi_2_ = parseInt(Gerenshuxing.jinengbiao[j].chushizhi) + this.zuizhonglazhi * parseFloat(Gerenshuxing.jinengbiao[j].jiacheng);
                        jinengjiachengzhi_2_ = Math.floor(jinengjiachengzhi_2_);
                        this.chufajiasu_2_ = "" + jinengjiachengzhi_2_;
                    }
                    else if (this.caidejineng2 == "20025") {
                        this.chufajianxue_2_ = "1";
                    }
                    else if (this.caidejineng2 == "20026") {
                        this.chufajiangong_2_ = "1";
                    }
                    else if (this.caidejineng2 == "20027") {
                        this.chufawofangjiansu_2_ = "1";
                    }
                }
            }
        }
        //计算菜品技能2///
        if (this.caidejineng3 != "0") {
            for (var j = 0; j < Gerenshuxing.jinengbiao.length; j++) {
                if (Gerenshuxing.jinengbiao[j].id == this.caidejineng3) {
                    var jinengjiachengzhi_2_ = 0;
                    if (this.caidejineng3 == "20001") {
                        jinengjiachengzhi_2_ = parseInt(Gerenshuxing.jinengbiao[j].chushizhi) + this.zuizhonglazhi * parseFloat(Gerenshuxing.jinengbiao[j].jiacheng);
                        jinengjiachengzhi_2_ = Math.floor(jinengjiachengzhi_2_);
                        var suijishu = Math.floor(Math.random() * 100);
                        if (suijishu <= jinengjiachengzhi_2_) {
                            this.chufalianji_2_ = "1";
                        }
                    }
                    else if (this.caidejineng3 == "20002") {
                        jinengjiachengzhi_2_ = parseInt(Gerenshuxing.jinengbiao[j].chushizhi) + this.zuizhonglazhi * parseFloat(Gerenshuxing.jinengbiao[j].jiacheng);
                        jinengjiachengzhi_2_ = Math.floor(jinengjiachengzhi_2_);
                        var suijishu = Math.floor(Math.random() * 100);
                        if (suijishu <= jinengjiachengzhi_2_) {
                            this.chufalianji_2_ = "1";
                        }
                    }
                    else if (this.caidejineng3 == "20003") {
                        jinengjiachengzhi_2_ = parseInt(Gerenshuxing.jinengbiao[j].chushizhi) + this.zuizhonglazhi * parseFloat(Gerenshuxing.jinengbiao[j].jiacheng);
                        jinengjiachengzhi_2_ = Math.floor(jinengjiachengzhi_2_);
                        this.chufabisha_2_ = "" + jinengjiachengzhi_2_;
                    }
                    else if (this.caidejineng3 == "20004") {
                        jinengjiachengzhi_2_ = parseInt(Gerenshuxing.jinengbiao[j].chushizhi) + this.zuizhonglazhi * parseFloat(Gerenshuxing.jinengbiao[j].jiacheng);
                        jinengjiachengzhi_2_ = Math.floor(jinengjiachengzhi_2_);
                        this.chufabisha_2_ = "" + jinengjiachengzhi_2_;
                    }
                    else if (this.caidejineng3 == "20005") {
                        jinengjiachengzhi_2_ = parseInt(Gerenshuxing.jinengbiao[j].chushizhi) + this.zuizhongtianzhi * parseFloat(Gerenshuxing.jinengbiao[j].jiacheng);
                        jinengjiachengzhi_2_ = Math.floor(jinengjiachengzhi_2_);
                        this.chufaxixue_2_ = "" + jinengjiachengzhi_2_;
                    }
                    else if (this.caidejineng3 == "20006") {
                        jinengjiachengzhi_2_ = parseInt(Gerenshuxing.jinengbiao[j].chushizhi) + this.zuizhongtianzhi * parseFloat(Gerenshuxing.jinengbiao[j].jiacheng);
                        jinengjiachengzhi_2_ = Math.floor(jinengjiachengzhi_2_);
                        this.chufaxixue_2_ = "" + jinengjiachengzhi_2_;
                    }
                    else if (this.caidejineng3 == "20007") {
                        this.chufazhuiji_2_ = "1";
                    }
                    else if (this.caidejineng3 == "20008") {
                        this.chufasane_2_ = "1";
                    }
                    else if (this.caidejineng3 == "20009") {
                        jinengjiachengzhi_2_ = parseInt(Gerenshuxing.jinengbiao[j].chushizhi) + this.zuizhonglazhi * parseFloat(Gerenshuxing.jinengbiao[j].jiacheng);
                        jinengjiachengzhi_2_ = Math.floor(jinengjiachengzhi_2_);
                        this.chufahushila_2_ = "" + jinengjiachengzhi_2_;
                    }
                    else if (this.caidejineng3 == "20010") {
                        jinengjiachengzhi_2_ = parseInt(Gerenshuxing.jinengbiao[j].chushizhi) + this.zuizhongtianzhi * parseFloat(Gerenshuxing.jinengbiao[j].jiacheng);
                        jinengjiachengzhi_2_ = Math.floor(jinengjiachengzhi_2_);
                        this.chufahushitian_2_ = "" + jinengjiachengzhi_2_;
                    }
                    else if (this.caidejineng3 == "20011") {
                        jinengjiachengzhi_2_ = parseInt(Gerenshuxing.jinengbiao[j].chushizhi) + this.zuizhongsuanzhi * parseFloat(Gerenshuxing.jinengbiao[j].jiacheng);
                        jinengjiachengzhi_2_ = Math.floor(jinengjiachengzhi_2_);
                        this.chufahushisuan_2_ = "" + jinengjiachengzhi_2_;
                    }
                    else if (this.caidejineng3 == "20012") {
                        jinengjiachengzhi_2_ = parseInt(Gerenshuxing.jinengbiao[j].chushizhi) + this.zuizhongmazhi * parseFloat(Gerenshuxing.jinengbiao[j].jiacheng);
                        jinengjiachengzhi_2_ = Math.floor(jinengjiachengzhi_2_);
                        this.chufahushima_2_ = "" + jinengjiachengzhi_2_;
                    }
                    else if (this.caidejineng3 == "20013") {
                        jinengjiachengzhi_2_ = parseInt(Gerenshuxing.jinengbiao[j].chushizhi) + this.zuizhongsuanzhi * parseFloat(Gerenshuxing.jinengbiao[j].jiacheng);
                        jinengjiachengzhi_2_ = Math.floor(jinengjiachengzhi_2_);
                        this.chufazhenshe_2_ = "" + jinengjiachengzhi_2_;
                    }
                    else if (this.caidejineng3 == "20014") {
                        jinengjiachengzhi_2_ = parseInt(Gerenshuxing.jinengbiao[j].chushizhi) + this.zuizhongsuanzhi * parseFloat(Gerenshuxing.jinengbiao[j].jiacheng);
                        jinengjiachengzhi_2_ = Math.floor(jinengjiachengzhi_2_);
                        this.chufaxilan_2_ = "" + jinengjiachengzhi_2_;
                    }
                    else if (this.caidejineng3 == "20015") {
                        jinengjiachengzhi_2_ = parseInt(Gerenshuxing.jinengbiao[j].chushizhi) + this.zuizhongsuanzhi * parseFloat(Gerenshuxing.jinengbiao[j].jiacheng);
                        jinengjiachengzhi_2_ = Math.floor(jinengjiachengzhi_2_);
                        this.chufaxilan_2_ = "" + jinengjiachengzhi_2_;
                    }
                    else if (this.caidejineng3 == "20016") {
                        jinengjiachengzhi_2_ = parseInt(Gerenshuxing.jinengbiao[j].chushizhi) + this.zuizhongmazhi * parseFloat(Gerenshuxing.jinengbiao[j].jiacheng);
                        jinengjiachengzhi_2_ = Math.floor(jinengjiachengzhi_2_);
                        this.chufajiansu_2_ = "" + jinengjiachengzhi_2_;
                    }
                    else if (this.caidejineng3 == "20017") {
                        jinengjiachengzhi_2_ = parseInt(Gerenshuxing.jinengbiao[j].chushizhi) + this.zuizhongmazhi * parseFloat(Gerenshuxing.jinengbiao[j].jiacheng);
                        jinengjiachengzhi_2_ = Math.floor(jinengjiachengzhi_2_);
                        var suijishu = Math.floor(Math.random() * 100);
                        if (suijishu <= jinengjiachengzhi_2_) {
                            this.chufachenmo_2_ = "1";
                        }
                    }
                    else if (this.caidejineng3 == "20018") {
                        jinengjiachengzhi_2_ = parseInt(Gerenshuxing.jinengbiao[j].chushizhi) + this.zuizhongtianzhi * parseFloat(Gerenshuxing.jinengbiao[j].jiacheng);
                        jinengjiachengzhi_2_ = Math.floor(jinengjiachengzhi_2_);
                        this.chufahuixue_2_ = "" + jinengjiachengzhi_2_;
                    }
                    else if (this.caidejineng3 == "20019") {
                        jinengjiachengzhi_2_ = parseInt(Gerenshuxing.jinengbiao[j].chushizhi) + this.zuizhongsuanzhi * parseFloat(Gerenshuxing.jinengbiao[j].jiacheng);
                        jinengjiachengzhi_2_ = Math.floor(jinengjiachengzhi_2_);
                        this.chufaquanhushi_2_ = "" + jinengjiachengzhi_2_;
                    }
                    else if (this.caidejineng3 == "20020") {
                        this.chufahuiling_2_ = "1";
                    }
                    else if (this.caidejineng3 == "20021") {
                        jinengjiachengzhi_2_ = parseInt(Gerenshuxing.jinengbiao[j].chushizhi) + this.zuizhongsuanzhi * parseFloat(Gerenshuxing.jinengbiao[j].jiacheng);
                        jinengjiachengzhi_2_ = Math.floor(jinengjiachengzhi_2_);
                        this.chufadu_2_ = "" + jinengjiachengzhi_2_;
                    }
                    else if (this.caidejineng3 == "20022") {
                        jinengjiachengzhi_2_ = parseInt(Gerenshuxing.jinengbiao[j].chushizhi) + this.zuizhongmazhi * parseFloat(Gerenshuxing.jinengbiao[j].jiacheng);
                        jinengjiachengzhi_2_ = Math.floor(jinengjiachengzhi_2_);
                        this.chufaxuruo_2_ = "" + jinengjiachengzhi_2_;
                    }
                    else if (this.caidejineng3 == "20023") {
                        jinengjiachengzhi_2_ = parseInt(Gerenshuxing.jinengbiao[j].chushizhi) + this.zuizhongtianzhi * parseFloat(Gerenshuxing.jinengbiao[j].jiacheng);
                        jinengjiachengzhi_2_ = Math.floor(jinengjiachengzhi_2_);
                        this.chufajiafang_2_ = "" + jinengjiachengzhi_2_;
                    }
                    else if (this.caidejineng3 == "20024") {
                        jinengjiachengzhi_2_ = parseInt(Gerenshuxing.jinengbiao[j].chushizhi) + this.zuizhonglazhi * parseFloat(Gerenshuxing.jinengbiao[j].jiacheng);
                        jinengjiachengzhi_2_ = Math.floor(jinengjiachengzhi_2_);
                        this.chufajiasu_2_ = "" + jinengjiachengzhi_2_;
                    }
                    else if (this.caidejineng3 == "20025") {
                        this.chufajianxue_2_ = "1";
                    }
                    else if (this.caidejineng3 == "20026") {
                        this.chufajiangong_2_ = "1";
                    }
                    else if (this.caidejineng3 == "20027") {
                        this.chufawofangjiansu_2_ = "1";
                    }
                }
            }
        }
        //计算菜品技能2///
        if (this.caidejineng4 != "0") {
            for (var j = 0; j < Gerenshuxing.jinengbiao.length; j++) {
                if (Gerenshuxing.jinengbiao[j].id == this.caidejineng4) {
                    var jinengjiachengzhi_2_ = 0;
                    if (this.caidejineng4 == "20001") {
                        jinengjiachengzhi_2_ = parseInt(Gerenshuxing.jinengbiao[j].chushizhi) + this.zuizhonglazhi * parseFloat(Gerenshuxing.jinengbiao[j].jiacheng);
                        jinengjiachengzhi_2_ = Math.floor(jinengjiachengzhi_2_);
                        var suijishu = Math.floor(Math.random() * 100);
                        if (suijishu <= jinengjiachengzhi_2_) {
                            this.chufalianji_2_ = "1";
                        }
                    }
                    else if (this.caidejineng4 == "20002") {
                        jinengjiachengzhi_2_ = parseInt(Gerenshuxing.jinengbiao[j].chushizhi) + this.zuizhonglazhi * parseFloat(Gerenshuxing.jinengbiao[j].jiacheng);
                        jinengjiachengzhi_2_ = Math.floor(jinengjiachengzhi_2_);
                        var suijishu = Math.floor(Math.random() * 100);
                        if (suijishu <= jinengjiachengzhi_2_) {
                            this.chufalianji_2_ = "1";
                        }
                    }
                    else if (this.caidejineng4 == "20003") {
                        jinengjiachengzhi_2_ = parseInt(Gerenshuxing.jinengbiao[j].chushizhi) + this.zuizhonglazhi * parseFloat(Gerenshuxing.jinengbiao[j].jiacheng);
                        jinengjiachengzhi_2_ = Math.floor(jinengjiachengzhi_2_);
                        this.chufabisha_2_ = "" + jinengjiachengzhi_2_;
                    }
                    else if (this.caidejineng4 == "20004") {
                        jinengjiachengzhi_2_ = parseInt(Gerenshuxing.jinengbiao[j].chushizhi) + this.zuizhonglazhi * parseFloat(Gerenshuxing.jinengbiao[j].jiacheng);
                        jinengjiachengzhi_2_ = Math.floor(jinengjiachengzhi_2_);
                        this.chufabisha_2_ = "" + jinengjiachengzhi_2_;
                    }
                    else if (this.caidejineng4 == "20005") {
                        jinengjiachengzhi_2_ = parseInt(Gerenshuxing.jinengbiao[j].chushizhi) + this.zuizhongtianzhi * parseFloat(Gerenshuxing.jinengbiao[j].jiacheng);
                        jinengjiachengzhi_2_ = Math.floor(jinengjiachengzhi_2_);
                        this.chufaxixue_2_ = "" + jinengjiachengzhi_2_;
                    }
                    else if (this.caidejineng4 == "20006") {
                        jinengjiachengzhi_2_ = parseInt(Gerenshuxing.jinengbiao[j].chushizhi) + this.zuizhongtianzhi * parseFloat(Gerenshuxing.jinengbiao[j].jiacheng);
                        jinengjiachengzhi_2_ = Math.floor(jinengjiachengzhi_2_);
                        this.chufaxixue_2_ = "" + jinengjiachengzhi_2_;
                    }
                    else if (this.caidejineng4 == "20007") {
                        this.chufazhuiji_2_ = "1";
                    }
                    else if (this.caidejineng4 == "20008") {
                        this.chufasane_2_ = "1";
                    }
                    else if (this.caidejineng4 == "20009") {
                        jinengjiachengzhi_2_ = parseInt(Gerenshuxing.jinengbiao[j].chushizhi) + this.zuizhonglazhi * parseFloat(Gerenshuxing.jinengbiao[j].jiacheng);
                        jinengjiachengzhi_2_ = Math.floor(jinengjiachengzhi_2_);
                        this.chufahushila_2_ = "" + jinengjiachengzhi_2_;
                    }
                    else if (this.caidejineng4 == "20010") {
                        jinengjiachengzhi_2_ = parseInt(Gerenshuxing.jinengbiao[j].chushizhi) + this.zuizhongtianzhi * parseFloat(Gerenshuxing.jinengbiao[j].jiacheng);
                        jinengjiachengzhi_2_ = Math.floor(jinengjiachengzhi_2_);
                        this.chufahushitian_2_ = "" + jinengjiachengzhi_2_;
                    }
                    else if (this.caidejineng4 == "20011") {
                        jinengjiachengzhi_2_ = parseInt(Gerenshuxing.jinengbiao[j].chushizhi) + this.zuizhongsuanzhi * parseFloat(Gerenshuxing.jinengbiao[j].jiacheng);
                        jinengjiachengzhi_2_ = Math.floor(jinengjiachengzhi_2_);
                        this.chufahushisuan_2_ = "" + jinengjiachengzhi_2_;
                    }
                    else if (this.caidejineng4 == "20012") {
                        jinengjiachengzhi_2_ = parseInt(Gerenshuxing.jinengbiao[j].chushizhi) + this.zuizhongmazhi * parseFloat(Gerenshuxing.jinengbiao[j].jiacheng);
                        jinengjiachengzhi_2_ = Math.floor(jinengjiachengzhi_2_);
                        this.chufahushima_2_ = "" + jinengjiachengzhi_2_;
                    }
                    else if (this.caidejineng4 == "20013") {
                        jinengjiachengzhi_2_ = parseInt(Gerenshuxing.jinengbiao[j].chushizhi) + this.zuizhongsuanzhi * parseFloat(Gerenshuxing.jinengbiao[j].jiacheng);
                        jinengjiachengzhi_2_ = Math.floor(jinengjiachengzhi_2_);
                        this.chufazhenshe_2_ = "" + jinengjiachengzhi_2_;
                    }
                    else if (this.caidejineng4 == "20014") {
                        jinengjiachengzhi_2_ = parseInt(Gerenshuxing.jinengbiao[j].chushizhi) + this.zuizhongsuanzhi * parseFloat(Gerenshuxing.jinengbiao[j].jiacheng);
                        jinengjiachengzhi_2_ = Math.floor(jinengjiachengzhi_2_);
                        this.chufaxilan_2_ = "" + jinengjiachengzhi_2_;
                    }
                    else if (this.caidejineng4 == "20015") {
                        jinengjiachengzhi_2_ = parseInt(Gerenshuxing.jinengbiao[j].chushizhi) + this.zuizhongsuanzhi * parseFloat(Gerenshuxing.jinengbiao[j].jiacheng);
                        jinengjiachengzhi_2_ = Math.floor(jinengjiachengzhi_2_);
                        this.chufaxilan_2_ = "" + jinengjiachengzhi_2_;
                    }
                    else if (this.caidejineng4 == "20016") {
                        jinengjiachengzhi_2_ = parseInt(Gerenshuxing.jinengbiao[j].chushizhi) + this.zuizhongmazhi * parseFloat(Gerenshuxing.jinengbiao[j].jiacheng);
                        jinengjiachengzhi_2_ = Math.floor(jinengjiachengzhi_2_);
                        this.chufajiansu_2_ = "" + jinengjiachengzhi_2_;
                    }
                    else if (this.caidejineng4 == "20017") {
                        jinengjiachengzhi_2_ = parseInt(Gerenshuxing.jinengbiao[j].chushizhi) + this.zuizhongmazhi * parseFloat(Gerenshuxing.jinengbiao[j].jiacheng);
                        jinengjiachengzhi_2_ = Math.floor(jinengjiachengzhi_2_);
                        var suijishu = Math.floor(Math.random() * 100);
                        if (suijishu <= jinengjiachengzhi_2_) {
                            this.chufachenmo_2_ = "1";
                        }
                    }
                    else if (this.caidejineng4 == "20018") {
                        jinengjiachengzhi_2_ = parseInt(Gerenshuxing.jinengbiao[j].chushizhi) + this.zuizhongtianzhi * parseFloat(Gerenshuxing.jinengbiao[j].jiacheng);
                        jinengjiachengzhi_2_ = Math.floor(jinengjiachengzhi_2_);
                        this.chufahuixue_2_ = "" + jinengjiachengzhi_2_;
                    }
                    else if (this.caidejineng4 == "20019") {
                        jinengjiachengzhi_2_ = parseInt(Gerenshuxing.jinengbiao[j].chushizhi) + this.zuizhongsuanzhi * parseFloat(Gerenshuxing.jinengbiao[j].jiacheng);
                        jinengjiachengzhi_2_ = Math.floor(jinengjiachengzhi_2_);
                        this.chufaquanhushi_2_ = "" + jinengjiachengzhi_2_;
                    }
                    else if (this.caidejineng4 == "20020") {
                        this.chufahuiling_2_ = "1";
                    }
                    else if (this.caidejineng4 == "20021") {
                        jinengjiachengzhi_2_ = parseInt(Gerenshuxing.jinengbiao[j].chushizhi) + this.zuizhongsuanzhi * parseFloat(Gerenshuxing.jinengbiao[j].jiacheng);
                        jinengjiachengzhi_2_ = Math.floor(jinengjiachengzhi_2_);
                        this.chufadu_2_ = "" + jinengjiachengzhi_2_;
                    }
                    else if (this.caidejineng4 == "20022") {
                        jinengjiachengzhi_2_ = parseInt(Gerenshuxing.jinengbiao[j].chushizhi) + this.zuizhongmazhi * parseFloat(Gerenshuxing.jinengbiao[j].jiacheng);
                        jinengjiachengzhi_2_ = Math.floor(jinengjiachengzhi_2_);
                        this.chufaxuruo_2_ = "" + jinengjiachengzhi_2_;
                    }
                    else if (this.caidejineng4 == "20023") {
                        jinengjiachengzhi_2_ = parseInt(Gerenshuxing.jinengbiao[j].chushizhi) + this.zuizhongtianzhi * parseFloat(Gerenshuxing.jinengbiao[j].jiacheng);
                        jinengjiachengzhi_2_ = Math.floor(jinengjiachengzhi_2_);
                        this.chufajiafang_2_ = "" + jinengjiachengzhi_2_;
                    }
                    else if (this.caidejineng4 == "20024") {
                        jinengjiachengzhi_2_ = parseInt(Gerenshuxing.jinengbiao[j].chushizhi) + this.zuizhonglazhi * parseFloat(Gerenshuxing.jinengbiao[j].jiacheng);
                        jinengjiachengzhi_2_ = Math.floor(jinengjiachengzhi_2_);
                        this.chufajiasu_2_ = "" + jinengjiachengzhi_2_;
                    }
                    else if (this.caidejineng4 == "20025") {
                        this.chufajianxue_2_ = "1";
                    }
                    else if (this.caidejineng4 == "20026") {
                        this.chufajiangong_2_ = "1";
                    }
                    else if (this.caidejineng4 == "20027") {
                        this.chufawofangjiansu_2_ = "1";
                    }
                }
            }
        }
        //计算菜品技能2///
        if (this.caidejineng5 != "0") {
            for (var j = 0; j < Gerenshuxing.jinengbiao.length; j++) {
                if (Gerenshuxing.jinengbiao[j].id == this.caidejineng5) {
                    var jinengjiachengzhi_2_ = 0;
                    if (this.caidejineng5 == "20001") {
                        jinengjiachengzhi_2_ = parseInt(Gerenshuxing.jinengbiao[j].chushizhi) + this.zuizhonglazhi * parseFloat(Gerenshuxing.jinengbiao[j].jiacheng);
                        jinengjiachengzhi_2_ = Math.floor(jinengjiachengzhi_2_);
                        var suijishu = Math.floor(Math.random() * 100);
                        if (suijishu <= jinengjiachengzhi_2_) {
                            this.chufalianji_2_ = "1";
                        }
                    }
                    else if (this.caidejineng5 == "20002") {
                        jinengjiachengzhi_2_ = parseInt(Gerenshuxing.jinengbiao[j].chushizhi) + this.zuizhonglazhi * parseFloat(Gerenshuxing.jinengbiao[j].jiacheng);
                        jinengjiachengzhi_2_ = Math.floor(jinengjiachengzhi_2_);
                        var suijishu = Math.floor(Math.random() * 100);
                        if (suijishu <= jinengjiachengzhi_2_) {
                            this.chufalianji_2_ = "1";
                        }
                    }
                    else if (this.caidejineng5 == "20003") {
                        jinengjiachengzhi_2_ = parseInt(Gerenshuxing.jinengbiao[j].chushizhi) + this.zuizhonglazhi * parseFloat(Gerenshuxing.jinengbiao[j].jiacheng);
                        jinengjiachengzhi_2_ = Math.floor(jinengjiachengzhi_2_);
                        this.chufabisha_2_ = "" + jinengjiachengzhi_2_;
                    }
                    else if (this.caidejineng5 == "20004") {
                        jinengjiachengzhi_2_ = parseInt(Gerenshuxing.jinengbiao[j].chushizhi) + this.zuizhonglazhi * parseFloat(Gerenshuxing.jinengbiao[j].jiacheng);
                        jinengjiachengzhi_2_ = Math.floor(jinengjiachengzhi_2_);
                        this.chufabisha_2_ = "" + jinengjiachengzhi_2_;
                    }
                    else if (this.caidejineng5 == "20005") {
                        jinengjiachengzhi_2_ = parseInt(Gerenshuxing.jinengbiao[j].chushizhi) + this.zuizhongtianzhi * parseFloat(Gerenshuxing.jinengbiao[j].jiacheng);
                        jinengjiachengzhi_2_ = Math.floor(jinengjiachengzhi_2_);
                        this.chufaxixue_2_ = "" + jinengjiachengzhi_2_;
                    }
                    else if (this.caidejineng5 == "20006") {
                        jinengjiachengzhi_2_ = parseInt(Gerenshuxing.jinengbiao[j].chushizhi) + this.zuizhongtianzhi * parseFloat(Gerenshuxing.jinengbiao[j].jiacheng);
                        jinengjiachengzhi_2_ = Math.floor(jinengjiachengzhi_2_);
                        this.chufaxixue_2_ = "" + jinengjiachengzhi_2_;
                    }
                    else if (this.caidejineng5 == "20007") {
                        this.chufazhuiji_2_ = "1";
                    }
                    else if (this.caidejineng5 == "20008") {
                        this.chufasane_2_ = "1";
                    }
                    else if (this.caidejineng5 == "20009") {
                        jinengjiachengzhi_2_ = parseInt(Gerenshuxing.jinengbiao[j].chushizhi) + this.zuizhonglazhi * parseFloat(Gerenshuxing.jinengbiao[j].jiacheng);
                        jinengjiachengzhi_2_ = Math.floor(jinengjiachengzhi_2_);
                        this.chufahushila_2_ = "" + jinengjiachengzhi_2_;
                    }
                    else if (this.caidejineng5 == "20010") {
                        jinengjiachengzhi_2_ = parseInt(Gerenshuxing.jinengbiao[j].chushizhi) + this.zuizhongtianzhi * parseFloat(Gerenshuxing.jinengbiao[j].jiacheng);
                        jinengjiachengzhi_2_ = Math.floor(jinengjiachengzhi_2_);
                        this.chufahushitian_2_ = "" + jinengjiachengzhi_2_;
                    }
                    else if (this.caidejineng5 == "20011") {
                        jinengjiachengzhi_2_ = parseInt(Gerenshuxing.jinengbiao[j].chushizhi) + this.zuizhongsuanzhi * parseFloat(Gerenshuxing.jinengbiao[j].jiacheng);
                        jinengjiachengzhi_2_ = Math.floor(jinengjiachengzhi_2_);
                        this.chufahushisuan_2_ = "" + jinengjiachengzhi_2_;
                    }
                    else if (this.caidejineng5 == "20012") {
                        jinengjiachengzhi_2_ = parseInt(Gerenshuxing.jinengbiao[j].chushizhi) + this.zuizhongmazhi * parseFloat(Gerenshuxing.jinengbiao[j].jiacheng);
                        jinengjiachengzhi_2_ = Math.floor(jinengjiachengzhi_2_);
                        this.chufahushima_2_ = "" + jinengjiachengzhi_2_;
                    }
                    else if (this.caidejineng5 == "20013") {
                        jinengjiachengzhi_2_ = parseInt(Gerenshuxing.jinengbiao[j].chushizhi) + this.zuizhongsuanzhi * parseFloat(Gerenshuxing.jinengbiao[j].jiacheng);
                        jinengjiachengzhi_2_ = Math.floor(jinengjiachengzhi_2_);
                        this.chufazhenshe_2_ = "" + jinengjiachengzhi_2_;
                    }
                    else if (this.caidejineng5 == "20014") {
                        jinengjiachengzhi_2_ = parseInt(Gerenshuxing.jinengbiao[j].chushizhi) + this.zuizhongsuanzhi * parseFloat(Gerenshuxing.jinengbiao[j].jiacheng);
                        jinengjiachengzhi_2_ = Math.floor(jinengjiachengzhi_2_);
                        this.chufaxilan_2_ = "" + jinengjiachengzhi_2_;
                    }
                    else if (this.caidejineng5 == "20015") {
                        jinengjiachengzhi_2_ = parseInt(Gerenshuxing.jinengbiao[j].chushizhi) + this.zuizhongsuanzhi * parseFloat(Gerenshuxing.jinengbiao[j].jiacheng);
                        jinengjiachengzhi_2_ = Math.floor(jinengjiachengzhi_2_);
                        this.chufaxilan_2_ = "" + jinengjiachengzhi_2_;
                    }
                    else if (this.caidejineng5 == "20016") {
                        jinengjiachengzhi_2_ = parseInt(Gerenshuxing.jinengbiao[j].chushizhi) + this.zuizhongmazhi * parseFloat(Gerenshuxing.jinengbiao[j].jiacheng);
                        jinengjiachengzhi_2_ = Math.floor(jinengjiachengzhi_2_);
                        this.chufajiansu_2_ = "" + jinengjiachengzhi_2_;
                    }
                    else if (this.caidejineng5 == "20017") {
                        jinengjiachengzhi_2_ = parseInt(Gerenshuxing.jinengbiao[j].chushizhi) + this.zuizhongmazhi * parseFloat(Gerenshuxing.jinengbiao[j].jiacheng);
                        jinengjiachengzhi_2_ = Math.floor(jinengjiachengzhi_2_);
                        var suijishu = Math.floor(Math.random() * 100);
                        if (suijishu <= jinengjiachengzhi_2_) {
                            this.chufachenmo_2_ = "1";
                        }
                    }
                    else if (this.caidejineng5 == "20018") {
                        jinengjiachengzhi_2_ = parseInt(Gerenshuxing.jinengbiao[j].chushizhi) + this.zuizhongtianzhi * parseFloat(Gerenshuxing.jinengbiao[j].jiacheng);
                        jinengjiachengzhi_2_ = Math.floor(jinengjiachengzhi_2_);
                        this.chufahuixue_2_ = "" + jinengjiachengzhi_2_;
                    }
                    else if (this.caidejineng5 == "20019") {
                        jinengjiachengzhi_2_ = parseInt(Gerenshuxing.jinengbiao[j].chushizhi) + this.zuizhongsuanzhi * parseFloat(Gerenshuxing.jinengbiao[j].jiacheng);
                        jinengjiachengzhi_2_ = Math.floor(jinengjiachengzhi_2_);
                        this.chufaquanhushi_2_ = "" + jinengjiachengzhi_2_;
                    }
                    else if (this.caidejineng5 == "20020") {
                        this.chufahuiling_2_ = "1";
                    }
                    else if (this.caidejineng5 == "20021") {
                        jinengjiachengzhi_2_ = parseInt(Gerenshuxing.jinengbiao[j].chushizhi) + this.zuizhongsuanzhi * parseFloat(Gerenshuxing.jinengbiao[j].jiacheng);
                        jinengjiachengzhi_2_ = Math.floor(jinengjiachengzhi_2_);
                        this.chufadu_2_ = "" + jinengjiachengzhi_2_;
                    }
                    else if (this.caidejineng5 == "20022") {
                        jinengjiachengzhi_2_ = parseInt(Gerenshuxing.jinengbiao[j].chushizhi) + this.zuizhongmazhi * parseFloat(Gerenshuxing.jinengbiao[j].jiacheng);
                        jinengjiachengzhi_2_ = Math.floor(jinengjiachengzhi_2_);
                        this.chufaxuruo_2_ = "" + jinengjiachengzhi_2_;
                    }
                    else if (this.caidejineng5 == "20023") {
                        jinengjiachengzhi_2_ = parseInt(Gerenshuxing.jinengbiao[j].chushizhi) + this.zuizhongtianzhi * parseFloat(Gerenshuxing.jinengbiao[j].jiacheng);
                        jinengjiachengzhi_2_ = Math.floor(jinengjiachengzhi_2_);
                        this.chufajiafang_2_ = "" + jinengjiachengzhi_2_;
                    }
                    else if (this.caidejineng5 == "20024") {
                        jinengjiachengzhi_2_ = parseInt(Gerenshuxing.jinengbiao[j].chushizhi) + this.zuizhonglazhi * parseFloat(Gerenshuxing.jinengbiao[j].jiacheng);
                        jinengjiachengzhi_2_ = Math.floor(jinengjiachengzhi_2_);
                        this.chufajiasu_2_ = "" + jinengjiachengzhi_2_;
                    }
                    else if (this.caidejineng5 == "20025") {
                        this.chufajianxue_2_ = "1";
                    }
                    else if (this.caidejineng5 == "20026") {
                        this.chufajiangong_2_ = "1";
                    }
                    else if (this.caidejineng5 == "20027") {
                        this.chufawofangjiansu_2_ = "1";
                    }
                }
            }
        }
        this.duiguai2shanghai();
    };
    //队怪物3使用技能判断
    Zhandoujiemian.prototype.duiguai3jineng = function () {
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
        if (this.caidejineng1 != "0") {
            for (var j = 0; j < Gerenshuxing.jinengbiao.length; j++) {
                if (Gerenshuxing.jinengbiao[j].id == this.caidejineng1) {
                    var jinengjiachengzhi_3_ = 0;
                    if (this.caidejineng1 == "20001") {
                        jinengjiachengzhi_3_ = parseInt(Gerenshuxing.jinengbiao[j].chushizhi) + this.zuizhonglazhi * parseFloat(Gerenshuxing.jinengbiao[j].jiacheng);
                        jinengjiachengzhi_3_ = Math.floor(jinengjiachengzhi_3_);
                        var suijishu = Math.floor(Math.random() * 100);
                        if (suijishu <= jinengjiachengzhi_3_) {
                            this.chufalianji_3_ = "1";
                        }
                    }
                    else if (this.caidejineng1 == "20002") {
                        jinengjiachengzhi_3_ = parseInt(Gerenshuxing.jinengbiao[j].chushizhi) + this.zuizhonglazhi * parseFloat(Gerenshuxing.jinengbiao[j].jiacheng);
                        jinengjiachengzhi_3_ = Math.floor(jinengjiachengzhi_3_);
                        var suijishu = Math.floor(Math.random() * 100);
                        if (suijishu <= jinengjiachengzhi_3_) {
                            this.chufalianji_3_ = "1";
                        }
                    }
                    else if (this.caidejineng1 == "20003") {
                        jinengjiachengzhi_3_ = parseInt(Gerenshuxing.jinengbiao[j].chushizhi) + this.zuizhonglazhi * parseFloat(Gerenshuxing.jinengbiao[j].jiacheng);
                        jinengjiachengzhi_3_ = Math.floor(jinengjiachengzhi_3_);
                        this.chufabisha_3_ = "" + jinengjiachengzhi_3_;
                    }
                    else if (this.caidejineng1 == "20004") {
                        jinengjiachengzhi_3_ = parseInt(Gerenshuxing.jinengbiao[j].chushizhi) + this.zuizhonglazhi * parseFloat(Gerenshuxing.jinengbiao[j].jiacheng);
                        jinengjiachengzhi_3_ = Math.floor(jinengjiachengzhi_3_);
                        this.chufabisha_3_ = "" + jinengjiachengzhi_3_;
                    }
                    else if (this.caidejineng1 == "20005") {
                        jinengjiachengzhi_3_ = parseInt(Gerenshuxing.jinengbiao[j].chushizhi) + this.zuizhongtianzhi * parseFloat(Gerenshuxing.jinengbiao[j].jiacheng);
                        jinengjiachengzhi_3_ = Math.floor(jinengjiachengzhi_3_);
                        this.chufaxixue_3_ = "" + jinengjiachengzhi_3_;
                    }
                    else if (this.caidejineng1 == "20006") {
                        jinengjiachengzhi_3_ = parseInt(Gerenshuxing.jinengbiao[j].chushizhi) + this.zuizhongtianzhi * parseFloat(Gerenshuxing.jinengbiao[j].jiacheng);
                        jinengjiachengzhi_3_ = Math.floor(jinengjiachengzhi_3_);
                        this.chufaxixue_3_ = "" + jinengjiachengzhi_3_;
                    }
                    else if (this.caidejineng1 == "20007") {
                        this.chufazhuiji_3_ = "1";
                    }
                    else if (this.caidejineng1 == "20008") {
                        this.chufasane_3_ = "1";
                    }
                    else if (this.caidejineng1 == "20009") {
                        jinengjiachengzhi_3_ = parseInt(Gerenshuxing.jinengbiao[j].chushizhi) + this.zuizhonglazhi * parseFloat(Gerenshuxing.jinengbiao[j].jiacheng);
                        jinengjiachengzhi_3_ = Math.floor(jinengjiachengzhi_3_);
                        this.chufahushila_3_ = "" + jinengjiachengzhi_3_;
                    }
                    else if (this.caidejineng1 == "20010") {
                        jinengjiachengzhi_3_ = parseInt(Gerenshuxing.jinengbiao[j].chushizhi) + this.zuizhongtianzhi * parseFloat(Gerenshuxing.jinengbiao[j].jiacheng);
                        jinengjiachengzhi_3_ = Math.floor(jinengjiachengzhi_3_);
                        this.chufahushitian_3_ = "" + jinengjiachengzhi_3_;
                    }
                    else if (this.caidejineng1 == "20011") {
                        jinengjiachengzhi_3_ = parseInt(Gerenshuxing.jinengbiao[j].chushizhi) + this.zuizhongsuanzhi * parseFloat(Gerenshuxing.jinengbiao[j].jiacheng);
                        jinengjiachengzhi_3_ = Math.floor(jinengjiachengzhi_3_);
                        this.chufahushisuan_3_ = "" + jinengjiachengzhi_3_;
                    }
                    else if (this.caidejineng1 == "20012") {
                        jinengjiachengzhi_3_ = parseInt(Gerenshuxing.jinengbiao[j].chushizhi) + this.zuizhongmazhi * parseFloat(Gerenshuxing.jinengbiao[j].jiacheng);
                        jinengjiachengzhi_3_ = Math.floor(jinengjiachengzhi_3_);
                        this.chufahushima_3_ = "" + jinengjiachengzhi_3_;
                    }
                    else if (this.caidejineng1 == "20013") {
                        jinengjiachengzhi_3_ = parseInt(Gerenshuxing.jinengbiao[j].chushizhi) + this.zuizhongsuanzhi * parseFloat(Gerenshuxing.jinengbiao[j].jiacheng);
                        jinengjiachengzhi_3_ = Math.floor(jinengjiachengzhi_3_);
                        this.chufazhenshe_3_ = "" + jinengjiachengzhi_3_;
                    }
                    else if (this.caidejineng1 == "20014") {
                        jinengjiachengzhi_3_ = parseInt(Gerenshuxing.jinengbiao[j].chushizhi) + this.zuizhongsuanzhi * parseFloat(Gerenshuxing.jinengbiao[j].jiacheng);
                        jinengjiachengzhi_3_ = Math.floor(jinengjiachengzhi_3_);
                        this.chufaxilan_3_ = "" + jinengjiachengzhi_3_;
                    }
                    else if (this.caidejineng1 == "20015") {
                        jinengjiachengzhi_3_ = parseInt(Gerenshuxing.jinengbiao[j].chushizhi) + this.zuizhongsuanzhi * parseFloat(Gerenshuxing.jinengbiao[j].jiacheng);
                        jinengjiachengzhi_3_ = Math.floor(jinengjiachengzhi_3_);
                        this.chufaxilan_3_ = "" + jinengjiachengzhi_3_;
                    }
                    else if (this.caidejineng1 == "20016") {
                        jinengjiachengzhi_3_ = parseInt(Gerenshuxing.jinengbiao[j].chushizhi) + this.zuizhongmazhi * parseFloat(Gerenshuxing.jinengbiao[j].jiacheng);
                        jinengjiachengzhi_3_ = Math.floor(jinengjiachengzhi_3_);
                        this.chufajiansu_3_ = "" + jinengjiachengzhi_3_;
                    }
                    else if (this.caidejineng1 == "20017") {
                        jinengjiachengzhi_3_ = parseInt(Gerenshuxing.jinengbiao[j].chushizhi) + this.zuizhongmazhi * parseFloat(Gerenshuxing.jinengbiao[j].jiacheng);
                        jinengjiachengzhi_3_ = Math.floor(jinengjiachengzhi_3_);
                        var suijishu = Math.floor(Math.random() * 100);
                        if (suijishu <= jinengjiachengzhi_3_) {
                            this.chufachenmo_3_ = "1";
                        }
                    }
                    else if (this.caidejineng1 == "20018") {
                        jinengjiachengzhi_3_ = parseInt(Gerenshuxing.jinengbiao[j].chushizhi) + this.zuizhongtianzhi * parseFloat(Gerenshuxing.jinengbiao[j].jiacheng);
                        jinengjiachengzhi_3_ = Math.floor(jinengjiachengzhi_3_);
                        this.chufahuixue_3_ = "" + jinengjiachengzhi_3_;
                    }
                    else if (this.caidejineng1 == "20019") {
                        jinengjiachengzhi_3_ = parseInt(Gerenshuxing.jinengbiao[j].chushizhi) + this.zuizhongsuanzhi * parseFloat(Gerenshuxing.jinengbiao[j].jiacheng);
                        jinengjiachengzhi_3_ = Math.floor(jinengjiachengzhi_3_);
                        this.chufaquanhushi_3_ = "" + jinengjiachengzhi_3_;
                    }
                    else if (this.caidejineng1 == "20020") {
                        this.chufahuiling_3_ = "1";
                    }
                    else if (this.caidejineng1 == "20021") {
                        jinengjiachengzhi_3_ = parseInt(Gerenshuxing.jinengbiao[j].chushizhi) + this.zuizhongsuanzhi * parseFloat(Gerenshuxing.jinengbiao[j].jiacheng);
                        jinengjiachengzhi_3_ = Math.floor(jinengjiachengzhi_3_);
                        this.chufadu_3_ = "" + jinengjiachengzhi_3_;
                    }
                    else if (this.caidejineng1 == "20022") {
                        jinengjiachengzhi_3_ = parseInt(Gerenshuxing.jinengbiao[j].chushizhi) + this.zuizhongmazhi * parseFloat(Gerenshuxing.jinengbiao[j].jiacheng);
                        jinengjiachengzhi_3_ = Math.floor(jinengjiachengzhi_3_);
                        this.chufaxuruo_3_ = "" + jinengjiachengzhi_3_;
                    }
                    else if (this.caidejineng1 == "20023") {
                        jinengjiachengzhi_3_ = parseInt(Gerenshuxing.jinengbiao[j].chushizhi) + this.zuizhongtianzhi * parseFloat(Gerenshuxing.jinengbiao[j].jiacheng);
                        jinengjiachengzhi_3_ = Math.floor(jinengjiachengzhi_3_);
                        this.chufajiafang_3_ = "" + jinengjiachengzhi_3_;
                    }
                    else if (this.caidejineng1 == "20024") {
                        jinengjiachengzhi_3_ = parseInt(Gerenshuxing.jinengbiao[j].chushizhi) + this.zuizhonglazhi * parseFloat(Gerenshuxing.jinengbiao[j].jiacheng);
                        jinengjiachengzhi_3_ = Math.floor(jinengjiachengzhi_3_);
                        this.chufajiasu_3_ = "" + jinengjiachengzhi_3_;
                    }
                    else if (this.caidejineng1 == "20025") {
                        this.chufajianxue_3_ = "1";
                    }
                    else if (this.caidejineng1 == "20026") {
                        this.chufajiangong_3_ = "1";
                    }
                    else if (this.caidejineng1 == "20027") {
                        this.chufawofangjiansu_3_ = "1";
                    }
                }
            }
        }
        //计算菜品技能2///
        if (this.caidejineng2 != "0") {
            for (var j = 0; j < Gerenshuxing.jinengbiao.length; j++) {
                if (Gerenshuxing.jinengbiao[j].id == this.caidejineng2) {
                    var jinengjiachengzhi_3_ = 0;
                    if (this.caidejineng2 == "20001") {
                        jinengjiachengzhi_3_ = parseInt(Gerenshuxing.jinengbiao[j].chushizhi) + this.zuizhonglazhi * parseFloat(Gerenshuxing.jinengbiao[j].jiacheng);
                        jinengjiachengzhi_3_ = Math.floor(jinengjiachengzhi_3_);
                        var suijishu = Math.floor(Math.random() * 100);
                        if (suijishu <= jinengjiachengzhi_3_) {
                            this.chufalianji_3_ = "1";
                        }
                    }
                    else if (this.caidejineng2 == "20002") {
                        jinengjiachengzhi_3_ = parseInt(Gerenshuxing.jinengbiao[j].chushizhi) + this.zuizhonglazhi * parseFloat(Gerenshuxing.jinengbiao[j].jiacheng);
                        jinengjiachengzhi_3_ = Math.floor(jinengjiachengzhi_3_);
                        var suijishu = Math.floor(Math.random() * 100);
                        if (suijishu <= jinengjiachengzhi_3_) {
                            this.chufalianji_3_ = "1";
                        }
                    }
                    else if (this.caidejineng2 == "20003") {
                        jinengjiachengzhi_3_ = parseInt(Gerenshuxing.jinengbiao[j].chushizhi) + this.zuizhonglazhi * parseFloat(Gerenshuxing.jinengbiao[j].jiacheng);
                        jinengjiachengzhi_3_ = Math.floor(jinengjiachengzhi_3_);
                        this.chufabisha_3_ = "" + jinengjiachengzhi_3_;
                    }
                    else if (this.caidejineng2 == "20004") {
                        jinengjiachengzhi_3_ = parseInt(Gerenshuxing.jinengbiao[j].chushizhi) + this.zuizhonglazhi * parseFloat(Gerenshuxing.jinengbiao[j].jiacheng);
                        jinengjiachengzhi_3_ = Math.floor(jinengjiachengzhi_3_);
                        this.chufabisha_3_ = "" + jinengjiachengzhi_3_;
                    }
                    else if (this.caidejineng2 == "20005") {
                        jinengjiachengzhi_3_ = parseInt(Gerenshuxing.jinengbiao[j].chushizhi) + this.zuizhongtianzhi * parseFloat(Gerenshuxing.jinengbiao[j].jiacheng);
                        jinengjiachengzhi_3_ = Math.floor(jinengjiachengzhi_3_);
                        this.chufaxixue_3_ = "" + jinengjiachengzhi_3_;
                    }
                    else if (this.caidejineng2 == "20006") {
                        jinengjiachengzhi_3_ = parseInt(Gerenshuxing.jinengbiao[j].chushizhi) + this.zuizhongtianzhi * parseFloat(Gerenshuxing.jinengbiao[j].jiacheng);
                        jinengjiachengzhi_3_ = Math.floor(jinengjiachengzhi_3_);
                        this.chufaxixue_3_ = "" + jinengjiachengzhi_3_;
                    }
                    else if (this.caidejineng2 == "20007") {
                        this.chufazhuiji_3_ = "1";
                    }
                    else if (this.caidejineng2 == "20008") {
                        this.chufasane_3_ = "1";
                    }
                    else if (this.caidejineng2 == "20009") {
                        jinengjiachengzhi_3_ = parseInt(Gerenshuxing.jinengbiao[j].chushizhi) + this.zuizhonglazhi * parseFloat(Gerenshuxing.jinengbiao[j].jiacheng);
                        jinengjiachengzhi_3_ = Math.floor(jinengjiachengzhi_3_);
                        this.chufahushila_3_ = "" + jinengjiachengzhi_3_;
                    }
                    else if (this.caidejineng2 == "20010") {
                        jinengjiachengzhi_3_ = parseInt(Gerenshuxing.jinengbiao[j].chushizhi) + this.zuizhongtianzhi * parseFloat(Gerenshuxing.jinengbiao[j].jiacheng);
                        jinengjiachengzhi_3_ = Math.floor(jinengjiachengzhi_3_);
                        this.chufahushitian_3_ = "" + jinengjiachengzhi_3_;
                    }
                    else if (this.caidejineng2 == "20011") {
                        jinengjiachengzhi_3_ = parseInt(Gerenshuxing.jinengbiao[j].chushizhi) + this.zuizhongsuanzhi * parseFloat(Gerenshuxing.jinengbiao[j].jiacheng);
                        jinengjiachengzhi_3_ = Math.floor(jinengjiachengzhi_3_);
                        this.chufahushisuan_3_ = "" + jinengjiachengzhi_3_;
                    }
                    else if (this.caidejineng2 == "20012") {
                        jinengjiachengzhi_3_ = parseInt(Gerenshuxing.jinengbiao[j].chushizhi) + this.zuizhongmazhi * parseFloat(Gerenshuxing.jinengbiao[j].jiacheng);
                        jinengjiachengzhi_3_ = Math.floor(jinengjiachengzhi_3_);
                        this.chufahushima_3_ = "" + jinengjiachengzhi_3_;
                    }
                    else if (this.caidejineng2 == "20013") {
                        jinengjiachengzhi_3_ = parseInt(Gerenshuxing.jinengbiao[j].chushizhi) + this.zuizhongsuanzhi * parseFloat(Gerenshuxing.jinengbiao[j].jiacheng);
                        jinengjiachengzhi_3_ = Math.floor(jinengjiachengzhi_3_);
                        this.chufazhenshe_3_ = "" + jinengjiachengzhi_3_;
                    }
                    else if (this.caidejineng2 == "20014") {
                        jinengjiachengzhi_3_ = parseInt(Gerenshuxing.jinengbiao[j].chushizhi) + this.zuizhongsuanzhi * parseFloat(Gerenshuxing.jinengbiao[j].jiacheng);
                        jinengjiachengzhi_3_ = Math.floor(jinengjiachengzhi_3_);
                        this.chufaxilan_3_ = "" + jinengjiachengzhi_3_;
                    }
                    else if (this.caidejineng2 == "20015") {
                        jinengjiachengzhi_3_ = parseInt(Gerenshuxing.jinengbiao[j].chushizhi) + this.zuizhongsuanzhi * parseFloat(Gerenshuxing.jinengbiao[j].jiacheng);
                        jinengjiachengzhi_3_ = Math.floor(jinengjiachengzhi_3_);
                        this.chufaxilan_3_ = "" + jinengjiachengzhi_3_;
                    }
                    else if (this.caidejineng2 == "20016") {
                        jinengjiachengzhi_3_ = parseInt(Gerenshuxing.jinengbiao[j].chushizhi) + this.zuizhongmazhi * parseFloat(Gerenshuxing.jinengbiao[j].jiacheng);
                        jinengjiachengzhi_3_ = Math.floor(jinengjiachengzhi_3_);
                        this.chufajiansu_3_ = "" + jinengjiachengzhi_3_;
                    }
                    else if (this.caidejineng2 == "20017") {
                        jinengjiachengzhi_3_ = parseInt(Gerenshuxing.jinengbiao[j].chushizhi) + this.zuizhongmazhi * parseFloat(Gerenshuxing.jinengbiao[j].jiacheng);
                        jinengjiachengzhi_3_ = Math.floor(jinengjiachengzhi_3_);
                        var suijishu = Math.floor(Math.random() * 100);
                        if (suijishu <= jinengjiachengzhi_3_) {
                            this.chufachenmo_3_ = "1";
                        }
                    }
                    else if (this.caidejineng2 == "20018") {
                        jinengjiachengzhi_3_ = parseInt(Gerenshuxing.jinengbiao[j].chushizhi) + this.zuizhongtianzhi * parseFloat(Gerenshuxing.jinengbiao[j].jiacheng);
                        jinengjiachengzhi_3_ = Math.floor(jinengjiachengzhi_3_);
                        this.chufahuixue_3_ = "" + jinengjiachengzhi_3_;
                    }
                    else if (this.caidejineng2 == "20019") {
                        jinengjiachengzhi_3_ = parseInt(Gerenshuxing.jinengbiao[j].chushizhi) + this.zuizhongsuanzhi * parseFloat(Gerenshuxing.jinengbiao[j].jiacheng);
                        jinengjiachengzhi_3_ = Math.floor(jinengjiachengzhi_3_);
                        this.chufaquanhushi_3_ = "" + jinengjiachengzhi_3_;
                    }
                    else if (this.caidejineng2 == "20020") {
                        this.chufahuiling_3_ = "1";
                    }
                    else if (this.caidejineng2 == "20021") {
                        jinengjiachengzhi_3_ = parseInt(Gerenshuxing.jinengbiao[j].chushizhi) + this.zuizhongsuanzhi * parseFloat(Gerenshuxing.jinengbiao[j].jiacheng);
                        jinengjiachengzhi_3_ = Math.floor(jinengjiachengzhi_3_);
                        this.chufadu_3_ = "" + jinengjiachengzhi_3_;
                    }
                    else if (this.caidejineng2 == "20022") {
                        jinengjiachengzhi_3_ = parseInt(Gerenshuxing.jinengbiao[j].chushizhi) + this.zuizhongmazhi * parseFloat(Gerenshuxing.jinengbiao[j].jiacheng);
                        jinengjiachengzhi_3_ = Math.floor(jinengjiachengzhi_3_);
                        this.chufaxuruo_3_ = "" + jinengjiachengzhi_3_;
                    }
                    else if (this.caidejineng2 == "20023") {
                        jinengjiachengzhi_3_ = parseInt(Gerenshuxing.jinengbiao[j].chushizhi) + this.zuizhongtianzhi * parseFloat(Gerenshuxing.jinengbiao[j].jiacheng);
                        jinengjiachengzhi_3_ = Math.floor(jinengjiachengzhi_3_);
                        this.chufajiafang_3_ = "" + jinengjiachengzhi_3_;
                    }
                    else if (this.caidejineng2 == "20024") {
                        jinengjiachengzhi_3_ = parseInt(Gerenshuxing.jinengbiao[j].chushizhi) + this.zuizhonglazhi * parseFloat(Gerenshuxing.jinengbiao[j].jiacheng);
                        jinengjiachengzhi_3_ = Math.floor(jinengjiachengzhi_3_);
                        this.chufajiasu_3_ = "" + jinengjiachengzhi_3_;
                    }
                    else if (this.caidejineng2 == "20025") {
                        this.chufajianxue_3_ = "1";
                    }
                    else if (this.caidejineng2 == "20026") {
                        this.chufajiangong_3_ = "1";
                    }
                    else if (this.caidejineng2 == "20027") {
                        this.chufawofangjiansu_3_ = "1";
                    }
                }
            }
        }
        //计算菜品技能2///
        if (this.caidejineng3 != "0") {
            for (var j = 0; j < Gerenshuxing.jinengbiao.length; j++) {
                if (Gerenshuxing.jinengbiao[j].id == this.caidejineng3) {
                    var jinengjiachengzhi_3_ = 0;
                    if (this.caidejineng3 == "20001") {
                        jinengjiachengzhi_3_ = parseInt(Gerenshuxing.jinengbiao[j].chushizhi) + this.zuizhonglazhi * parseFloat(Gerenshuxing.jinengbiao[j].jiacheng);
                        jinengjiachengzhi_3_ = Math.floor(jinengjiachengzhi_3_);
                        var suijishu = Math.floor(Math.random() * 100);
                        if (suijishu <= jinengjiachengzhi_3_) {
                            this.chufalianji_3_ = "1";
                        }
                    }
                    else if (this.caidejineng3 == "20002") {
                        jinengjiachengzhi_3_ = parseInt(Gerenshuxing.jinengbiao[j].chushizhi) + this.zuizhonglazhi * parseFloat(Gerenshuxing.jinengbiao[j].jiacheng);
                        jinengjiachengzhi_3_ = Math.floor(jinengjiachengzhi_3_);
                        var suijishu = Math.floor(Math.random() * 100);
                        if (suijishu <= jinengjiachengzhi_3_) {
                            this.chufalianji_3_ = "1";
                        }
                    }
                    else if (this.caidejineng3 == "20003") {
                        jinengjiachengzhi_3_ = parseInt(Gerenshuxing.jinengbiao[j].chushizhi) + this.zuizhonglazhi * parseFloat(Gerenshuxing.jinengbiao[j].jiacheng);
                        jinengjiachengzhi_3_ = Math.floor(jinengjiachengzhi_3_);
                        this.chufabisha_3_ = "" + jinengjiachengzhi_3_;
                    }
                    else if (this.caidejineng3 == "20004") {
                        jinengjiachengzhi_3_ = parseInt(Gerenshuxing.jinengbiao[j].chushizhi) + this.zuizhonglazhi * parseFloat(Gerenshuxing.jinengbiao[j].jiacheng);
                        jinengjiachengzhi_3_ = Math.floor(jinengjiachengzhi_3_);
                        this.chufabisha_3_ = "" + jinengjiachengzhi_3_;
                    }
                    else if (this.caidejineng3 == "20005") {
                        jinengjiachengzhi_3_ = parseInt(Gerenshuxing.jinengbiao[j].chushizhi) + this.zuizhongtianzhi * parseFloat(Gerenshuxing.jinengbiao[j].jiacheng);
                        jinengjiachengzhi_3_ = Math.floor(jinengjiachengzhi_3_);
                        this.chufaxixue_3_ = "" + jinengjiachengzhi_3_;
                    }
                    else if (this.caidejineng3 == "20006") {
                        jinengjiachengzhi_3_ = parseInt(Gerenshuxing.jinengbiao[j].chushizhi) + this.zuizhongtianzhi * parseFloat(Gerenshuxing.jinengbiao[j].jiacheng);
                        jinengjiachengzhi_3_ = Math.floor(jinengjiachengzhi_3_);
                        this.chufaxixue_3_ = "" + jinengjiachengzhi_3_;
                    }
                    else if (this.caidejineng3 == "20007") {
                        this.chufazhuiji_3_ = "1";
                    }
                    else if (this.caidejineng3 == "20008") {
                        this.chufasane_3_ = "1";
                    }
                    else if (this.caidejineng3 == "20009") {
                        jinengjiachengzhi_3_ = parseInt(Gerenshuxing.jinengbiao[j].chushizhi) + this.zuizhonglazhi * parseFloat(Gerenshuxing.jinengbiao[j].jiacheng);
                        jinengjiachengzhi_3_ = Math.floor(jinengjiachengzhi_3_);
                        this.chufahushila_3_ = "" + jinengjiachengzhi_3_;
                    }
                    else if (this.caidejineng3 == "20010") {
                        jinengjiachengzhi_3_ = parseInt(Gerenshuxing.jinengbiao[j].chushizhi) + this.zuizhongtianzhi * parseFloat(Gerenshuxing.jinengbiao[j].jiacheng);
                        jinengjiachengzhi_3_ = Math.floor(jinengjiachengzhi_3_);
                        this.chufahushitian_3_ = "" + jinengjiachengzhi_3_;
                    }
                    else if (this.caidejineng3 == "20011") {
                        jinengjiachengzhi_3_ = parseInt(Gerenshuxing.jinengbiao[j].chushizhi) + this.zuizhongsuanzhi * parseFloat(Gerenshuxing.jinengbiao[j].jiacheng);
                        jinengjiachengzhi_3_ = Math.floor(jinengjiachengzhi_3_);
                        this.chufahushisuan_3_ = "" + jinengjiachengzhi_3_;
                    }
                    else if (this.caidejineng3 == "20012") {
                        jinengjiachengzhi_3_ = parseInt(Gerenshuxing.jinengbiao[j].chushizhi) + this.zuizhongmazhi * parseFloat(Gerenshuxing.jinengbiao[j].jiacheng);
                        jinengjiachengzhi_3_ = Math.floor(jinengjiachengzhi_3_);
                        this.chufahushima_3_ = "" + jinengjiachengzhi_3_;
                    }
                    else if (this.caidejineng3 == "20013") {
                        jinengjiachengzhi_3_ = parseInt(Gerenshuxing.jinengbiao[j].chushizhi) + this.zuizhongsuanzhi * parseFloat(Gerenshuxing.jinengbiao[j].jiacheng);
                        jinengjiachengzhi_3_ = Math.floor(jinengjiachengzhi_3_);
                        this.chufazhenshe_3_ = "" + jinengjiachengzhi_3_;
                    }
                    else if (this.caidejineng3 == "20014") {
                        jinengjiachengzhi_3_ = parseInt(Gerenshuxing.jinengbiao[j].chushizhi) + this.zuizhongsuanzhi * parseFloat(Gerenshuxing.jinengbiao[j].jiacheng);
                        jinengjiachengzhi_3_ = Math.floor(jinengjiachengzhi_3_);
                        this.chufaxilan_3_ = "" + jinengjiachengzhi_3_;
                    }
                    else if (this.caidejineng3 == "20015") {
                        jinengjiachengzhi_3_ = parseInt(Gerenshuxing.jinengbiao[j].chushizhi) + this.zuizhongsuanzhi * parseFloat(Gerenshuxing.jinengbiao[j].jiacheng);
                        jinengjiachengzhi_3_ = Math.floor(jinengjiachengzhi_3_);
                        this.chufaxilan_3_ = "" + jinengjiachengzhi_3_;
                    }
                    else if (this.caidejineng3 == "20016") {
                        jinengjiachengzhi_3_ = parseInt(Gerenshuxing.jinengbiao[j].chushizhi) + this.zuizhongmazhi * parseFloat(Gerenshuxing.jinengbiao[j].jiacheng);
                        jinengjiachengzhi_3_ = Math.floor(jinengjiachengzhi_3_);
                        this.chufajiansu_3_ = "" + jinengjiachengzhi_3_;
                    }
                    else if (this.caidejineng3 == "20017") {
                        jinengjiachengzhi_3_ = parseInt(Gerenshuxing.jinengbiao[j].chushizhi) + this.zuizhongmazhi * parseFloat(Gerenshuxing.jinengbiao[j].jiacheng);
                        jinengjiachengzhi_3_ = Math.floor(jinengjiachengzhi_3_);
                        var suijishu = Math.floor(Math.random() * 100);
                        if (suijishu <= jinengjiachengzhi_3_) {
                            this.chufachenmo_3_ = "1";
                        }
                    }
                    else if (this.caidejineng3 == "20018") {
                        jinengjiachengzhi_3_ = parseInt(Gerenshuxing.jinengbiao[j].chushizhi) + this.zuizhongtianzhi * parseFloat(Gerenshuxing.jinengbiao[j].jiacheng);
                        jinengjiachengzhi_3_ = Math.floor(jinengjiachengzhi_3_);
                        this.chufahuixue_3_ = "" + jinengjiachengzhi_3_;
                    }
                    else if (this.caidejineng3 == "20019") {
                        jinengjiachengzhi_3_ = parseInt(Gerenshuxing.jinengbiao[j].chushizhi) + this.zuizhongsuanzhi * parseFloat(Gerenshuxing.jinengbiao[j].jiacheng);
                        jinengjiachengzhi_3_ = Math.floor(jinengjiachengzhi_3_);
                        this.chufaquanhushi_3_ = "" + jinengjiachengzhi_3_;
                    }
                    else if (this.caidejineng3 == "20020") {
                        this.chufahuiling_3_ = "1";
                    }
                    else if (this.caidejineng3 == "20021") {
                        jinengjiachengzhi_3_ = parseInt(Gerenshuxing.jinengbiao[j].chushizhi) + this.zuizhongsuanzhi * parseFloat(Gerenshuxing.jinengbiao[j].jiacheng);
                        jinengjiachengzhi_3_ = Math.floor(jinengjiachengzhi_3_);
                        this.chufadu_3_ = "" + jinengjiachengzhi_3_;
                    }
                    else if (this.caidejineng3 == "20022") {
                        jinengjiachengzhi_3_ = parseInt(Gerenshuxing.jinengbiao[j].chushizhi) + this.zuizhongmazhi * parseFloat(Gerenshuxing.jinengbiao[j].jiacheng);
                        jinengjiachengzhi_3_ = Math.floor(jinengjiachengzhi_3_);
                        this.chufaxuruo_3_ = "" + jinengjiachengzhi_3_;
                    }
                    else if (this.caidejineng3 == "20023") {
                        jinengjiachengzhi_3_ = parseInt(Gerenshuxing.jinengbiao[j].chushizhi) + this.zuizhongtianzhi * parseFloat(Gerenshuxing.jinengbiao[j].jiacheng);
                        jinengjiachengzhi_3_ = Math.floor(jinengjiachengzhi_3_);
                        this.chufajiafang_3_ = "" + jinengjiachengzhi_3_;
                    }
                    else if (this.caidejineng3 == "20024") {
                        jinengjiachengzhi_3_ = parseInt(Gerenshuxing.jinengbiao[j].chushizhi) + this.zuizhonglazhi * parseFloat(Gerenshuxing.jinengbiao[j].jiacheng);
                        jinengjiachengzhi_3_ = Math.floor(jinengjiachengzhi_3_);
                        this.chufajiasu_3_ = "" + jinengjiachengzhi_3_;
                    }
                    else if (this.caidejineng3 == "20025") {
                        this.chufajianxue_3_ = "1";
                    }
                    else if (this.caidejineng3 == "20026") {
                        this.chufajiangong_3_ = "1";
                    }
                    else if (this.caidejineng3 == "20027") {
                        this.chufawofangjiansu_3_ = "1";
                    }
                }
            }
        }
        //计算菜品技能2///
        if (this.caidejineng4 != "0") {
            for (var j = 0; j < Gerenshuxing.jinengbiao.length; j++) {
                if (Gerenshuxing.jinengbiao[j].id == this.caidejineng4) {
                    var jinengjiachengzhi_3_ = 0;
                    if (this.caidejineng4 == "20001") {
                        jinengjiachengzhi_3_ = parseInt(Gerenshuxing.jinengbiao[j].chushizhi) + this.zuizhonglazhi * parseFloat(Gerenshuxing.jinengbiao[j].jiacheng);
                        jinengjiachengzhi_3_ = Math.floor(jinengjiachengzhi_3_);
                        var suijishu = Math.floor(Math.random() * 100);
                        if (suijishu <= jinengjiachengzhi_3_) {
                            this.chufalianji_3_ = "1";
                        }
                    }
                    else if (this.caidejineng4 == "20002") {
                        jinengjiachengzhi_3_ = parseInt(Gerenshuxing.jinengbiao[j].chushizhi) + this.zuizhonglazhi * parseFloat(Gerenshuxing.jinengbiao[j].jiacheng);
                        jinengjiachengzhi_3_ = Math.floor(jinengjiachengzhi_3_);
                        var suijishu = Math.floor(Math.random() * 100);
                        if (suijishu <= jinengjiachengzhi_3_) {
                            this.chufalianji_3_ = "1";
                        }
                    }
                    else if (this.caidejineng4 == "20003") {
                        jinengjiachengzhi_3_ = parseInt(Gerenshuxing.jinengbiao[j].chushizhi) + this.zuizhonglazhi * parseFloat(Gerenshuxing.jinengbiao[j].jiacheng);
                        jinengjiachengzhi_3_ = Math.floor(jinengjiachengzhi_3_);
                        this.chufabisha_3_ = "" + jinengjiachengzhi_3_;
                    }
                    else if (this.caidejineng4 == "20004") {
                        jinengjiachengzhi_3_ = parseInt(Gerenshuxing.jinengbiao[j].chushizhi) + this.zuizhonglazhi * parseFloat(Gerenshuxing.jinengbiao[j].jiacheng);
                        jinengjiachengzhi_3_ = Math.floor(jinengjiachengzhi_3_);
                        this.chufabisha_3_ = "" + jinengjiachengzhi_3_;
                    }
                    else if (this.caidejineng4 == "20005") {
                        jinengjiachengzhi_3_ = parseInt(Gerenshuxing.jinengbiao[j].chushizhi) + this.zuizhongtianzhi * parseFloat(Gerenshuxing.jinengbiao[j].jiacheng);
                        jinengjiachengzhi_3_ = Math.floor(jinengjiachengzhi_3_);
                        this.chufaxixue_3_ = "" + jinengjiachengzhi_3_;
                    }
                    else if (this.caidejineng4 == "20006") {
                        jinengjiachengzhi_3_ = parseInt(Gerenshuxing.jinengbiao[j].chushizhi) + this.zuizhongtianzhi * parseFloat(Gerenshuxing.jinengbiao[j].jiacheng);
                        jinengjiachengzhi_3_ = Math.floor(jinengjiachengzhi_3_);
                        this.chufaxixue_3_ = "" + jinengjiachengzhi_3_;
                    }
                    else if (this.caidejineng4 == "20007") {
                        this.chufazhuiji_3_ = "1";
                    }
                    else if (this.caidejineng4 == "20008") {
                        this.chufasane_3_ = "1";
                    }
                    else if (this.caidejineng4 == "20009") {
                        jinengjiachengzhi_3_ = parseInt(Gerenshuxing.jinengbiao[j].chushizhi) + this.zuizhonglazhi * parseFloat(Gerenshuxing.jinengbiao[j].jiacheng);
                        jinengjiachengzhi_3_ = Math.floor(jinengjiachengzhi_3_);
                        this.chufahushila_3_ = "" + jinengjiachengzhi_3_;
                    }
                    else if (this.caidejineng4 == "20010") {
                        jinengjiachengzhi_3_ = parseInt(Gerenshuxing.jinengbiao[j].chushizhi) + this.zuizhongtianzhi * parseFloat(Gerenshuxing.jinengbiao[j].jiacheng);
                        jinengjiachengzhi_3_ = Math.floor(jinengjiachengzhi_3_);
                        this.chufahushitian_3_ = "" + jinengjiachengzhi_3_;
                    }
                    else if (this.caidejineng4 == "20011") {
                        jinengjiachengzhi_3_ = parseInt(Gerenshuxing.jinengbiao[j].chushizhi) + this.zuizhongsuanzhi * parseFloat(Gerenshuxing.jinengbiao[j].jiacheng);
                        jinengjiachengzhi_3_ = Math.floor(jinengjiachengzhi_3_);
                        this.chufahushisuan_3_ = "" + jinengjiachengzhi_3_;
                    }
                    else if (this.caidejineng4 == "20012") {
                        jinengjiachengzhi_3_ = parseInt(Gerenshuxing.jinengbiao[j].chushizhi) + this.zuizhongmazhi * parseFloat(Gerenshuxing.jinengbiao[j].jiacheng);
                        jinengjiachengzhi_3_ = Math.floor(jinengjiachengzhi_3_);
                        this.chufahushima_3_ = "" + jinengjiachengzhi_3_;
                    }
                    else if (this.caidejineng4 == "20013") {
                        jinengjiachengzhi_3_ = parseInt(Gerenshuxing.jinengbiao[j].chushizhi) + this.zuizhongsuanzhi * parseFloat(Gerenshuxing.jinengbiao[j].jiacheng);
                        jinengjiachengzhi_3_ = Math.floor(jinengjiachengzhi_3_);
                        this.chufazhenshe_3_ = "" + jinengjiachengzhi_3_;
                    }
                    else if (this.caidejineng4 == "20014") {
                        jinengjiachengzhi_3_ = parseInt(Gerenshuxing.jinengbiao[j].chushizhi) + this.zuizhongsuanzhi * parseFloat(Gerenshuxing.jinengbiao[j].jiacheng);
                        jinengjiachengzhi_3_ = Math.floor(jinengjiachengzhi_3_);
                        this.chufaxilan_3_ = "" + jinengjiachengzhi_3_;
                    }
                    else if (this.caidejineng4 == "20015") {
                        jinengjiachengzhi_3_ = parseInt(Gerenshuxing.jinengbiao[j].chushizhi) + this.zuizhongsuanzhi * parseFloat(Gerenshuxing.jinengbiao[j].jiacheng);
                        jinengjiachengzhi_3_ = Math.floor(jinengjiachengzhi_3_);
                        this.chufaxilan_3_ = "" + jinengjiachengzhi_3_;
                    }
                    else if (this.caidejineng4 == "20016") {
                        jinengjiachengzhi_3_ = parseInt(Gerenshuxing.jinengbiao[j].chushizhi) + this.zuizhongmazhi * parseFloat(Gerenshuxing.jinengbiao[j].jiacheng);
                        jinengjiachengzhi_3_ = Math.floor(jinengjiachengzhi_3_);
                        this.chufajiansu_3_ = "" + jinengjiachengzhi_3_;
                    }
                    else if (this.caidejineng4 == "20017") {
                        jinengjiachengzhi_3_ = parseInt(Gerenshuxing.jinengbiao[j].chushizhi) + this.zuizhongmazhi * parseFloat(Gerenshuxing.jinengbiao[j].jiacheng);
                        jinengjiachengzhi_3_ = Math.floor(jinengjiachengzhi_3_);
                        var suijishu = Math.floor(Math.random() * 100);
                        if (suijishu <= jinengjiachengzhi_3_) {
                            this.chufachenmo_3_ = "1";
                        }
                    }
                    else if (this.caidejineng4 == "20018") {
                        jinengjiachengzhi_3_ = parseInt(Gerenshuxing.jinengbiao[j].chushizhi) + this.zuizhongtianzhi * parseFloat(Gerenshuxing.jinengbiao[j].jiacheng);
                        jinengjiachengzhi_3_ = Math.floor(jinengjiachengzhi_3_);
                        this.chufahuixue_3_ = "" + jinengjiachengzhi_3_;
                    }
                    else if (this.caidejineng4 == "20019") {
                        jinengjiachengzhi_3_ = parseInt(Gerenshuxing.jinengbiao[j].chushizhi) + this.zuizhongsuanzhi * parseFloat(Gerenshuxing.jinengbiao[j].jiacheng);
                        jinengjiachengzhi_3_ = Math.floor(jinengjiachengzhi_3_);
                        this.chufaquanhushi_3_ = "" + jinengjiachengzhi_3_;
                    }
                    else if (this.caidejineng4 == "20020") {
                        this.chufahuiling_3_ = "1";
                    }
                    else if (this.caidejineng4 == "20021") {
                        jinengjiachengzhi_3_ = parseInt(Gerenshuxing.jinengbiao[j].chushizhi) + this.zuizhongsuanzhi * parseFloat(Gerenshuxing.jinengbiao[j].jiacheng);
                        jinengjiachengzhi_3_ = Math.floor(jinengjiachengzhi_3_);
                        this.chufadu_3_ = "" + jinengjiachengzhi_3_;
                    }
                    else if (this.caidejineng4 == "20022") {
                        jinengjiachengzhi_3_ = parseInt(Gerenshuxing.jinengbiao[j].chushizhi) + this.zuizhongmazhi * parseFloat(Gerenshuxing.jinengbiao[j].jiacheng);
                        jinengjiachengzhi_3_ = Math.floor(jinengjiachengzhi_3_);
                        this.chufaxuruo_3_ = "" + jinengjiachengzhi_3_;
                    }
                    else if (this.caidejineng4 == "20023") {
                        jinengjiachengzhi_3_ = parseInt(Gerenshuxing.jinengbiao[j].chushizhi) + this.zuizhongtianzhi * parseFloat(Gerenshuxing.jinengbiao[j].jiacheng);
                        jinengjiachengzhi_3_ = Math.floor(jinengjiachengzhi_3_);
                        this.chufajiafang_3_ = "" + jinengjiachengzhi_3_;
                    }
                    else if (this.caidejineng4 == "20024") {
                        jinengjiachengzhi_3_ = parseInt(Gerenshuxing.jinengbiao[j].chushizhi) + this.zuizhonglazhi * parseFloat(Gerenshuxing.jinengbiao[j].jiacheng);
                        jinengjiachengzhi_3_ = Math.floor(jinengjiachengzhi_3_);
                        this.chufajiasu_3_ = "" + jinengjiachengzhi_3_;
                    }
                    else if (this.caidejineng4 == "20025") {
                        this.chufajianxue_3_ = "1";
                    }
                    else if (this.caidejineng4 == "20026") {
                        this.chufajiangong_3_ = "1";
                    }
                    else if (this.caidejineng4 == "20027") {
                        this.chufawofangjiansu_3_ = "1";
                    }
                }
            }
        }
        //计算菜品技能2///
        if (this.caidejineng5 != "0") {
            for (var j = 0; j < Gerenshuxing.jinengbiao.length; j++) {
                if (Gerenshuxing.jinengbiao[j].id == this.caidejineng5) {
                    var jinengjiachengzhi_3_ = 0;
                    if (this.caidejineng5 == "20001") {
                        jinengjiachengzhi_3_ = parseInt(Gerenshuxing.jinengbiao[j].chushizhi) + this.zuizhonglazhi * parseFloat(Gerenshuxing.jinengbiao[j].jiacheng);
                        jinengjiachengzhi_3_ = Math.floor(jinengjiachengzhi_3_);
                        var suijishu = Math.floor(Math.random() * 100);
                        if (suijishu <= jinengjiachengzhi_3_) {
                            this.chufalianji_3_ = "1";
                        }
                    }
                    else if (this.caidejineng5 == "20002") {
                        jinengjiachengzhi_3_ = parseInt(Gerenshuxing.jinengbiao[j].chushizhi) + this.zuizhonglazhi * parseFloat(Gerenshuxing.jinengbiao[j].jiacheng);
                        jinengjiachengzhi_3_ = Math.floor(jinengjiachengzhi_3_);
                        var suijishu = Math.floor(Math.random() * 100);
                        if (suijishu <= jinengjiachengzhi_3_) {
                            this.chufalianji_3_ = "1";
                        }
                    }
                    else if (this.caidejineng5 == "20003") {
                        jinengjiachengzhi_3_ = parseInt(Gerenshuxing.jinengbiao[j].chushizhi) + this.zuizhonglazhi * parseFloat(Gerenshuxing.jinengbiao[j].jiacheng);
                        jinengjiachengzhi_3_ = Math.floor(jinengjiachengzhi_3_);
                        this.chufabisha_3_ = "" + jinengjiachengzhi_3_;
                    }
                    else if (this.caidejineng5 == "20004") {
                        jinengjiachengzhi_3_ = parseInt(Gerenshuxing.jinengbiao[j].chushizhi) + this.zuizhonglazhi * parseFloat(Gerenshuxing.jinengbiao[j].jiacheng);
                        jinengjiachengzhi_3_ = Math.floor(jinengjiachengzhi_3_);
                        this.chufabisha_3_ = "" + jinengjiachengzhi_3_;
                    }
                    else if (this.caidejineng5 == "20005") {
                        jinengjiachengzhi_3_ = parseInt(Gerenshuxing.jinengbiao[j].chushizhi) + this.zuizhongtianzhi * parseFloat(Gerenshuxing.jinengbiao[j].jiacheng);
                        jinengjiachengzhi_3_ = Math.floor(jinengjiachengzhi_3_);
                        this.chufaxixue_3_ = "" + jinengjiachengzhi_3_;
                    }
                    else if (this.caidejineng5 == "20006") {
                        jinengjiachengzhi_3_ = parseInt(Gerenshuxing.jinengbiao[j].chushizhi) + this.zuizhongtianzhi * parseFloat(Gerenshuxing.jinengbiao[j].jiacheng);
                        jinengjiachengzhi_3_ = Math.floor(jinengjiachengzhi_3_);
                        this.chufaxixue_3_ = "" + jinengjiachengzhi_3_;
                    }
                    else if (this.caidejineng5 == "20007") {
                        this.chufazhuiji_3_ = "1";
                    }
                    else if (this.caidejineng5 == "20008") {
                        this.chufasane_3_ = "1";
                    }
                    else if (this.caidejineng5 == "20009") {
                        jinengjiachengzhi_3_ = parseInt(Gerenshuxing.jinengbiao[j].chushizhi) + this.zuizhonglazhi * parseFloat(Gerenshuxing.jinengbiao[j].jiacheng);
                        jinengjiachengzhi_3_ = Math.floor(jinengjiachengzhi_3_);
                        this.chufahushila_3_ = "" + jinengjiachengzhi_3_;
                    }
                    else if (this.caidejineng5 == "20010") {
                        jinengjiachengzhi_3_ = parseInt(Gerenshuxing.jinengbiao[j].chushizhi) + this.zuizhongtianzhi * parseFloat(Gerenshuxing.jinengbiao[j].jiacheng);
                        jinengjiachengzhi_3_ = Math.floor(jinengjiachengzhi_3_);
                        this.chufahushitian_3_ = "" + jinengjiachengzhi_3_;
                    }
                    else if (this.caidejineng5 == "20011") {
                        jinengjiachengzhi_3_ = parseInt(Gerenshuxing.jinengbiao[j].chushizhi) + this.zuizhongsuanzhi * parseFloat(Gerenshuxing.jinengbiao[j].jiacheng);
                        jinengjiachengzhi_3_ = Math.floor(jinengjiachengzhi_3_);
                        this.chufahushisuan_3_ = "" + jinengjiachengzhi_3_;
                    }
                    else if (this.caidejineng5 == "20012") {
                        jinengjiachengzhi_3_ = parseInt(Gerenshuxing.jinengbiao[j].chushizhi) + this.zuizhongmazhi * parseFloat(Gerenshuxing.jinengbiao[j].jiacheng);
                        jinengjiachengzhi_3_ = Math.floor(jinengjiachengzhi_3_);
                        this.chufahushima_3_ = "" + jinengjiachengzhi_3_;
                    }
                    else if (this.caidejineng5 == "20013") {
                        jinengjiachengzhi_3_ = parseInt(Gerenshuxing.jinengbiao[j].chushizhi) + this.zuizhongsuanzhi * parseFloat(Gerenshuxing.jinengbiao[j].jiacheng);
                        jinengjiachengzhi_3_ = Math.floor(jinengjiachengzhi_3_);
                        this.chufazhenshe_3_ = "" + jinengjiachengzhi_3_;
                    }
                    else if (this.caidejineng5 == "20014") {
                        jinengjiachengzhi_3_ = parseInt(Gerenshuxing.jinengbiao[j].chushizhi) + this.zuizhongsuanzhi * parseFloat(Gerenshuxing.jinengbiao[j].jiacheng);
                        jinengjiachengzhi_3_ = Math.floor(jinengjiachengzhi_3_);
                        this.chufaxilan_3_ = "" + jinengjiachengzhi_3_;
                    }
                    else if (this.caidejineng5 == "20015") {
                        jinengjiachengzhi_3_ = parseInt(Gerenshuxing.jinengbiao[j].chushizhi) + this.zuizhongsuanzhi * parseFloat(Gerenshuxing.jinengbiao[j].jiacheng);
                        jinengjiachengzhi_3_ = Math.floor(jinengjiachengzhi_3_);
                        this.chufaxilan_3_ = "" + jinengjiachengzhi_3_;
                    }
                    else if (this.caidejineng5 == "20016") {
                        jinengjiachengzhi_3_ = parseInt(Gerenshuxing.jinengbiao[j].chushizhi) + this.zuizhongmazhi * parseFloat(Gerenshuxing.jinengbiao[j].jiacheng);
                        jinengjiachengzhi_3_ = Math.floor(jinengjiachengzhi_3_);
                        this.chufajiansu_3_ = "" + jinengjiachengzhi_3_;
                    }
                    else if (this.caidejineng5 == "20017") {
                        jinengjiachengzhi_3_ = parseInt(Gerenshuxing.jinengbiao[j].chushizhi) + this.zuizhongmazhi * parseFloat(Gerenshuxing.jinengbiao[j].jiacheng);
                        jinengjiachengzhi_3_ = Math.floor(jinengjiachengzhi_3_);
                        var suijishu = Math.floor(Math.random() * 100);
                        if (suijishu <= jinengjiachengzhi_3_) {
                            this.chufachenmo_3_ = "1";
                        }
                    }
                    else if (this.caidejineng5 == "20018") {
                        jinengjiachengzhi_3_ = parseInt(Gerenshuxing.jinengbiao[j].chushizhi) + this.zuizhongtianzhi * parseFloat(Gerenshuxing.jinengbiao[j].jiacheng);
                        jinengjiachengzhi_3_ = Math.floor(jinengjiachengzhi_3_);
                        this.chufahuixue_3_ = "" + jinengjiachengzhi_3_;
                    }
                    else if (this.caidejineng5 == "20019") {
                        jinengjiachengzhi_3_ = parseInt(Gerenshuxing.jinengbiao[j].chushizhi) + this.zuizhongsuanzhi * parseFloat(Gerenshuxing.jinengbiao[j].jiacheng);
                        jinengjiachengzhi_3_ = Math.floor(jinengjiachengzhi_3_);
                        this.chufaquanhushi_3_ = "" + jinengjiachengzhi_3_;
                    }
                    else if (this.caidejineng5 == "20020") {
                        this.chufahuiling_3_ = "1";
                    }
                    else if (this.caidejineng5 == "20021") {
                        jinengjiachengzhi_3_ = parseInt(Gerenshuxing.jinengbiao[j].chushizhi) + this.zuizhongsuanzhi * parseFloat(Gerenshuxing.jinengbiao[j].jiacheng);
                        jinengjiachengzhi_3_ = Math.floor(jinengjiachengzhi_3_);
                        this.chufadu_3_ = "" + jinengjiachengzhi_3_;
                    }
                    else if (this.caidejineng5 == "20022") {
                        jinengjiachengzhi_3_ = parseInt(Gerenshuxing.jinengbiao[j].chushizhi) + this.zuizhongmazhi * parseFloat(Gerenshuxing.jinengbiao[j].jiacheng);
                        jinengjiachengzhi_3_ = Math.floor(jinengjiachengzhi_3_);
                        this.chufaxuruo_3_ = "" + jinengjiachengzhi_3_;
                    }
                    else if (this.caidejineng5 == "20023") {
                        jinengjiachengzhi_3_ = parseInt(Gerenshuxing.jinengbiao[j].chushizhi) + this.zuizhongtianzhi * parseFloat(Gerenshuxing.jinengbiao[j].jiacheng);
                        jinengjiachengzhi_3_ = Math.floor(jinengjiachengzhi_3_);
                        this.chufajiafang_3_ = "" + jinengjiachengzhi_3_;
                    }
                    else if (this.caidejineng5 == "20024") {
                        jinengjiachengzhi_3_ = parseInt(Gerenshuxing.jinengbiao[j].chushizhi) + this.zuizhonglazhi * parseFloat(Gerenshuxing.jinengbiao[j].jiacheng);
                        jinengjiachengzhi_3_ = Math.floor(jinengjiachengzhi_3_);
                        this.chufajiasu_3_ = "" + jinengjiachengzhi_3_;
                    }
                    else if (this.caidejineng5 == "20025") {
                        this.chufajianxue_3_ = "1";
                    }
                    else if (this.caidejineng5 == "20026") {
                        this.chufajiangong_3_ = "1";
                    }
                    else if (this.caidejineng5 == "20027") {
                        this.chufawofangjiansu_3_ = "1";
                    }
                }
            }
        }
        this.duiguai3shanghai();
    };
    Zhandoujiemian.prototype.duiguai1shanghai = function () {
        var zhongshanghai_1_ = 0;
        var zuizhongshanghaila_1_ = 0;
        var zuizhongshanghaima_1_ = 0;
        var zuizhongshanghaisuan_1_ = 0;
        var zuizhongshanghaitian_1_ = 0;
        var hushila_1_ = this.guai1la;
        var hushima_1_ = this.guai1ma;
        var hushisuan_1_ = this.guai1suan;
        var hushitian_1_ = this.guai1tian;
        //判断是否触发了忽视
        if (this.chufahushila_1_ != "0") {
            hushila_1_ = hushila_1_ - parseInt(this.chufahushila_1_);
        }
        if (this.chufahushima_1_ != "0") {
            hushima_1_ = hushima_1_ - parseInt(this.chufahushima_1_);
        }
        if (this.chufahushisuan_1_ != "0") {
            hushisuan_1_ = hushisuan_1_ - parseInt(this.chufahushisuan_1_);
        }
        if (this.chufahushitian_1_ != "0") {
            hushitian_1_ = hushitian_1_ - parseInt(this.chufahushitian_1_);
        }
        //判断怪物BUFF是否有忽视
        for (var i = 0; i < this.guai1buff.length; i++) {
            if (this.guai1buff[i].id == "20019" && parseInt(this.guai1buff[i].chixu) > 0 && this.guai1buff[i].xiaoguo != "") {
                hushila_1_ = hushila_1_ - parseInt(this.guai1buff[i].xiaoguo);
                hushima_1_ = hushima_1_ - parseInt(this.guai1buff[i].xiaoguo);
                hushisuan_1_ = hushisuan_1_ - parseInt(this.guai1buff[i].xiaoguo);
                hushitian_1_ = hushitian_1_ - parseInt(this.guai1buff[i].xiaoguo);
            }
        }
        //计算怪物所受伤害
        zuizhongshanghaila_1_ = Math.floor(this.shuchulazhi * (1 - hushila_1_ / 1000));
        zuizhongshanghaima_1_ = Math.floor(this.shuchumazhi * (1 - hushima_1_ / 1000));
        zuizhongshanghaisuan_1_ = Math.floor(this.shuchusuanzhi * (1 - hushisuan_1_ / 1000));
        zuizhongshanghaitian_1_ = Math.floor(this.shuchutianzhi * (1 - hushitian_1_ / 1000));
        zhongshanghai_1_ = zuizhongshanghaila_1_ + zuizhongshanghaima_1_ + zuizhongshanghaisuan_1_ + zuizhongshanghaitian_1_;
        //判断是否触发了自身降低攻击
        if (this.chufajiangong_1_ != "0") {
            zhongshanghai_1_ = Math.floor(zhongshanghai_1_ * 0.9);
        }
        //判断是否触发了震慑
        if (this.chufazhenshe_1_ != "0") {
            zhongshanghai_1_ = Math.floor(zhongshanghai_1_ + this.guai1qixuechushi * parseInt(this.chufazhenshe_1_) / 100);
            this.zhandoutexiao("zhenshe", this.guai1qixuechushi * parseInt(this.chufazhenshe_1_) / 100, 1);
        }
        //判断是否触发了必杀
        if (this.chufabisha_1_ != "0") {
            zhongshanghai_1_ = Math.floor(zhongshanghai_1_ + zhongshanghai_1_ * parseInt(this.chufabisha_1_) / 100);
            this.zhandoutexiao("bisha", zhongshanghai_1_, 1);
        }
        else {
            this.zhandoutexiao("putong", zhongshanghai_1_, 1);
        }
        //判断是否触发了吸血
        if (this.chufaxixue_1_ != "0") {
            this.zijideqixue = Math.floor(this.zijideqixue + zhongshanghai_1_ * parseInt(this.chufaxixue_1_) / 100);
            if (this.zijideqixue >= this.zijideqixueshangxian) {
                this.zijideqixue = this.zijideqixueshangxian;
            }
            this.zhandoutexiao("xixue", zhongshanghai_1_ * parseInt(this.chufaxixue_1_) / 100, 1);
            this.shuaxinzijixuetiao();
        }
        //判断是否触发了善恶
        if (this.chufasane_1_ != "0") {
            var suijisane = Math.floor(Math.random() * 2);
            if (suijisane == 0) {
                this.zhandoutexiao("sanezhie", zhongshanghai_1_ * 1.8, 1);
                this.guai1qixue = Math.floor(this.guai1qixue - zhongshanghai_1_ * 1.8);
                this.panduanguai1siwang();
                //判断是否触发追击
                if (this.guai1qixue <= 0) {
                    if (this.chufazhuiji_1_ != "0") {
                        if (this.guai1qixue < 0) {
                            var zhuijishu = 0 - this.guai1qixue;
                            if (this.guai2qixue > 0) {
                                this.guai2qixue = this.guai2qixue - zhuijishu;
                                this.zhuijitexiao(this.benhuihechucaiid, 1, 2, zhuijishu);
                                this.panduanguai2siwang();
                            }
                            else if (this.guai3qixue > 0) {
                                this.guai3qixue = this.guai3qixue - zhuijishu;
                                this.zhuijitexiao(this.benhuihechucaiid, 1, 3, zhuijishu);
                                this.panduanguai3siwang();
                            }
                        }
                    }
                }
            }
            else {
                this.zhandoutexiao("sanezhis", zhongshanghai_1_ * 0.5, 1);
                this.guai1qixue = Math.floor(this.guai1qixue + zhongshanghai_1_ * 0.5);
            }
        }
        else {
            this.guai1qixue = Math.floor(this.guai1qixue - zhongshanghai_1_);
            this.panduanguai1siwang();
        }
        //判断是否触发吸蓝
        if (this.chufaxilan_1_ != "0") {
            this.qidianshu = this.qidianshu + parseInt(this.chufaxilan_1_);
            if (this.qidianshu >= 10) {
                this.qidianshu = 10;
            }
            this.qidianxianshigengxin();
            this.zhandoutexiao("xilan", parseInt(this.chufaxilan_1_), 1);
        }
        //判断是否触发减速
        if (this.chufajiansu_1_ != "0") {
            for (var h = 0; h < this.guai1buff.length; h++) {
                if (this.guai1buff[h].id == "20016") {
                    this.guai1buff.splice(h, 1);
                }
            }
            var jiansubuff_1_ = {
                id: "20016",
                chixu: 2,
                xiaoguo: parseInt(this.chufajiansu_1_)
            };
            this.guai1buff.push(jiansubuff_1_);
            //			console.log(this.guai1buff);
            this.zhandoutexiao("jiansu", parseInt(this.chufajiansu_1_), 1);
            this.guai1buffxianshi();
        }
        //判断是否触发沉默
        if (this.chufachenmo_1_ != "0") {
            var chufachengmojilv_1_ = Math.floor(Math.random() * 100);
            if (chufachengmojilv_1_ <= parseInt(this.chufachenmo_1_)) {
                for (var j = 0; j < this.guai1buff.length; j++) {
                    if (this.guai1buff[j].id == "20017") {
                        this.guai1buff.splice(j, 1);
                    }
                }
                var chengmobuff_1_ = {
                    id: "20017",
                    chixu: 1,
                    xiaoguo: 0
                };
                this.guai1buff.push(chengmobuff_1_);
                //				console.log(this.guai1buff);
                this.zhandoutexiao("chenmo", 0, 1);
                this.guai1buffxianshi();
            }
        }
        //判断是否触发回血
        if (this.chufahuixue_1_ != "0") {
            this.zijideqixue = Math.floor(this.zijideqixue + this.zijideqixueshangxian * parseInt(this.chufahuixue_1_) / 100);
            if (this.zijideqixue >= this.zijideqixueshangxian) {
                this.zijideqixue = this.zijideqixueshangxian;
            }
            this.shuaxinzijixuetiao();
            this.zhandoutexiao("huixue", this.zijideqixueshangxian * parseInt(this.chufahuixue_1_) / 100, 1);
        }
        //判断是否触发减抗
        if (this.chufaquanhushi_1_ != "0") {
            for (var k = 0; k < this.guai1buff.length; k++) {
                if (this.guai1buff[k].id == "20019") {
                    this.guai1buff.splice(k, 1);
                }
            }
            var jiankangbuff_1_ = {
                id: "20019",
                chixu: 3,
                xiaoguo: parseInt(this.chufaquanhushi_1_)
            };
            this.guai1buff.push(jiankangbuff_1_);
            //			console.log(this.guai1buff);
            this.zhandoutexiao("jiankang", parseInt(this.chufaquanhushi_1_), 1);
            this.guai1buffxianshi();
        }
        //判断是否触发回灵
        if (this.chufahuiling_1_ != "0") {
            for (var g = 0; g < this.zijibuff.length; g++) {
                if (this.zijibuff[g].id == "20020") {
                    this.zijibuff.splice(g, 1);
                }
            }
            var huilingbuff_1_ = {
                id: "20020",
                chixu: 3,
                xiaoguo: 2
            };
            this.zijibuff.push(huilingbuff_1_);
            //			console.log(this.zijibuff);
            this.zhandoutexiao("huiling", 0, 0);
            this.zijibuffxianshi();
        }
        //判断是否触发减攻击
        if (this.chufajiangong_1_ != "0") {
            for (var l = 0; l < this.guai1buff.length; l++) {
                if (this.guai1buff[l].id == "20022") {
                    this.guai1buff.splice(l, 1);
                }
            }
            var jiangongjibuff_1_ = {
                id: "20022",
                chixu: 3,
                xiaoguo: parseInt(this.chufajiangong_1_)
            };
            this.guai1buff.push(jiangongjibuff_1_);
            //			console.log(this.guai1buff);
            this.zhandoutexiao("jiangongji", parseInt(this.chufajiangong_1_), 1);
            this.guai1buffxianshi();
        }
        //判断是否触发毒
        if (this.chufadu_1_ != "0") {
            for (var c = 0; c < this.guai1buff.length; c++) {
                if (this.guai1buff[c].id == "20021") {
                    this.guai1buff.splice(c, 1);
                }
            }
            var dubuff_1_ = {
                id: "20021",
                chixu: 3,
                xiaoguo: parseInt(this.chufadu_1_)
            };
            this.guai1buff.push(dubuff_1_);
            //			console.log(this.guai1buff);
            this.zhandoutexiao("du", parseInt(this.chufadu_1_), 1);
            this.guai1buffxianshi();
        }
        //判断是否触发加防
        if (this.chufajiafang_1_ != "0") {
            for (var b = 0; b < this.zijibuff.length; b++) {
                if (this.zijibuff[b].id == "20023") {
                    this.zijibuff.splice(b, 1);
                }
            }
            var jiafangbuff_1_ = {
                id: "20023",
                chixu: 3,
                xiaoguo: parseInt(this.chufajiafang_1_)
            };
            this.zijibuff.push(jiafangbuff_1_);
            //			console.log(this.zijibuff);
            this.zhandoutexiao("jiafang", parseInt(this.chufajiafang_1_), 0);
            this.zijibuffxianshi();
        }
        //判断是否触发加速
        if (this.chufajiasu_1_ != "0") {
            for (var v = 0; v < this.zijibuff.length; v++) {
                if (this.zijibuff[v].id == "20024") {
                    this.zijibuff.splice(v, 1);
                }
            }
            var jiasubuff_1_ = {
                id: "20024",
                chixu: 3,
                xiaoguo: parseInt(this.chufajiasu_1_)
            };
            this.zijibuff.push(jiasubuff_1_);
            //			console.log(this.zijibuff);
            this.zhandoutexiao("jiasu", parseInt(this.chufajiasu_1_), 0);
            this.zijibuffxianshi();
        }
        //判断是否触发给我方减血
        if (this.chufajianxue_1_ != "0") {
            this.zijideqixue = Math.floor(this.zijideqixue - this.zijideqixueshangxian * 0.1);
            this.zhandoutexiao("zijijianxue", this.zijideqixueshangxian * 0.1, 0);
            this.panduanzijisiwang();
        }
        //判断是否给我方减速
        if (this.chufawofangjiansu_1_ != "0") {
            this.jinduzu2.y = this.jinduzu2.y - 20;
            if (this.jinduzu2.y >= this.img_sudujindu.y + this.img_sudujindu.height - this.jinduzu2.height) {
                this.jinduzu2.y = this.img_sudujindu.y + this.img_sudujindu.height - this.jinduzu2.height;
            }
        }
        //判断是否触发了连击
        if (this.chufalianji_1_ != "0") {
            this.lianjiteshuchuli(zhongshanghai_1_, 1);
        }
        //技能释放完毕后，开始新的回合
        this.kaishixinhuihe();
    };
    Zhandoujiemian.prototype.duiguai2shanghai = function () {
        var zhongshanghai_2_ = 0;
        var zuizhongshanghaila_2_ = 0;
        var zuizhongshanghaima_2_ = 0;
        var zuizhongshanghaisuan_2_ = 0;
        var zuizhongshanghaitian_2_ = 0;
        var hushila_2_ = this.guai2la;
        var hushima_2_ = this.guai2ma;
        var hushisuan_2_ = this.guai2suan;
        var hushitian_2_ = this.guai2tian;
        //判断是否触发了忽视
        if (this.chufahushila_2_ != "0") {
            hushila_2_ = hushila_2_ - parseInt(this.chufahushila_2_);
        }
        if (this.chufahushima_2_ != "0") {
            hushima_2_ = hushima_2_ - parseInt(this.chufahushima_2_);
        }
        if (this.chufahushisuan_2_ != "0") {
            hushisuan_2_ = hushisuan_2_ - parseInt(this.chufahushisuan_2_);
        }
        if (this.chufahushitian_2_ != "0") {
            hushitian_2_ = hushitian_2_ - parseInt(this.chufahushitian_2_);
        }
        //判断怪物BUFF是否有忽视
        for (var i = 0; i < this.guai2buff.length; i++) {
            if (this.guai2buff[i].id == "20019" && parseInt(this.guai2buff[i].chixu) > 0 && this.guai2buff[i].xiaoguo != "") {
                hushila_2_ = hushila_2_ - parseInt(this.guai2buff[i].xiaoguo);
                hushima_2_ = hushima_2_ - parseInt(this.guai2buff[i].xiaoguo);
                hushisuan_2_ = hushisuan_2_ - parseInt(this.guai2buff[i].xiaoguo);
                hushitian_2_ = hushitian_2_ - parseInt(this.guai2buff[i].xiaoguo);
            }
        }
        //计算怪物所受伤害
        zuizhongshanghaila_2_ = Math.floor(this.shuchulazhi * (1 - hushila_2_ / 1000));
        zuizhongshanghaima_2_ = Math.floor(this.shuchumazhi * (1 - hushima_2_ / 1000));
        zuizhongshanghaisuan_2_ = Math.floor(this.shuchusuanzhi * (1 - hushisuan_2_ / 1000));
        zuizhongshanghaitian_2_ = Math.floor(this.shuchutianzhi * (1 - hushitian_2_ / 1000));
        zhongshanghai_2_ = zuizhongshanghaila_2_ + zuizhongshanghaima_2_ + zuizhongshanghaisuan_2_ + zuizhongshanghaitian_2_;
        //判断是否触发了自身降低攻击
        if (this.chufajiangong_2_ != "0") {
            zhongshanghai_2_ = Math.floor(zhongshanghai_2_ * 0.9);
        }
        //判断是否触发了震慑
        if (this.chufazhenshe_2_ != "0") {
            zhongshanghai_2_ = Math.floor(zhongshanghai_2_ + this.guai2qixuechushi * parseInt(this.chufazhenshe_2_) / 100);
            this.zhandoutexiao("zhenshe", this.guai2qixuechushi * parseInt(this.chufazhenshe_2_) / 100, 2);
        }
        //判断是否触发了必杀
        if (this.chufabisha_2_ != "0") {
            zhongshanghai_2_ = Math.floor(zhongshanghai_2_ + zhongshanghai_2_ * parseInt(this.chufabisha_2_) / 100);
            this.zhandoutexiao("bisha", zhongshanghai_2_, 2);
        }
        else {
            this.zhandoutexiao("putong", zhongshanghai_2_, 2);
        }
        //判断是否触发了吸血
        if (this.chufaxixue_2_ != "0") {
            this.zijideqixue = Math.floor(this.zijideqixue + zhongshanghai_2_ * parseInt(this.chufaxixue_2_) / 100);
            if (this.zijideqixue >= this.zijideqixueshangxian) {
                this.zijideqixue = this.zijideqixueshangxian;
            }
            this.zhandoutexiao("xixue", zhongshanghai_2_ * parseInt(this.chufaxixue_2_) / 100, 2);
            this.shuaxinzijixuetiao();
        }
        //判断是否触发了善恶
        if (this.chufasane_2_ != "0") {
            var suijisane = Math.floor(Math.random() * 2);
            if (suijisane == 0) {
                this.zhandoutexiao("sanezhie", zhongshanghai_2_ * 1.8, 2);
                this.guai2qixue = Math.floor(this.guai2qixue - zhongshanghai_2_ * 1.8);
                this.panduanguai2siwang();
                //判断是否触发追击
                if (this.guai2qixue <= 0) {
                    if (this.chufazhuiji_2_ != "0") {
                        if (this.guai2qixue < 0) {
                            var zhuijishu = 0 - this.guai2qixue;
                            if (this.guai1qixue > 0) {
                                this.guai1qixue = this.guai1qixue - zhuijishu;
                                this.zhuijitexiao(this.benhuihechucaiid, 2, 1, zhuijishu);
                                this.panduanguai1siwang();
                            }
                            else if (this.guai3qixue > 0) {
                                this.guai3qixue = this.guai3qixue - zhuijishu;
                                this.zhuijitexiao(this.benhuihechucaiid, 2, 3, zhuijishu);
                                this.panduanguai3siwang();
                            }
                        }
                    }
                }
            }
            else {
                this.zhandoutexiao("sanezhis", zhongshanghai_2_ * 0.5, 2);
                this.guai2qixue = Math.floor(this.guai2qixue + zhongshanghai_2_ * 0.5);
            }
        }
        else {
            this.guai2qixue = Math.floor(this.guai2qixue - zhongshanghai_2_);
            this.panduanguai2siwang();
        }
        //判断是否触发吸蓝
        if (this.chufaxilan_2_ != "0") {
            this.qidianshu = this.qidianshu + parseInt(this.chufaxilan_2_);
            if (this.qidianshu >= 10) {
                this.qidianshu = 10;
            }
            this.zhandoutexiao("xilan", parseInt(this.chufaxilan_2_), 2);
        }
        //判断是否触发减速
        if (this.chufajiansu_2_ != "0") {
            for (var h = 0; h < this.guai2buff.length; h++) {
                if (this.guai2buff[h].id == "20016") {
                    this.guai2buff.splice(h, 1);
                }
            }
            var jiansubuff_2_ = {
                id: "20016",
                chixu: 2,
                xiaoguo: parseInt(this.chufajiansu_2_)
            };
            this.guai2buff.push(jiansubuff_2_);
            //			console.log(this.guai2buff);
            this.zhandoutexiao("jiansu", parseInt(this.chufajiansu_2_), 2);
            this.guai2buffxianshi();
        }
        //判断是否触发沉默
        if (this.chufachenmo_2_ != "0") {
            var chufachengmojilv_2_ = Math.floor(Math.random() * 100);
            if (chufachengmojilv_2_ <= parseInt(this.chufachenmo_2_)) {
                for (var j = 0; j < this.guai2buff.length; j++) {
                    if (this.guai2buff[j].id == "20017") {
                        this.guai2buff.splice(j, 1);
                    }
                }
                var chengmobuff_2_ = {
                    id: "20017",
                    chixu: 1,
                    xiaoguo: 0
                };
                this.guai2buff.push(chengmobuff_2_);
                //				console.log(this.guai2buff);
                this.zhandoutexiao("chenmo", 0, 2);
                this.guai2buffxianshi();
            }
        }
        //判断是否触发回血
        if (this.chufahuixue_2_ != "0") {
            this.zijideqixue = Math.floor(this.zijideqixue + this.zijideqixueshangxian * parseInt(this.chufahuixue_2_) / 100);
            if (this.zijideqixue >= this.zijideqixueshangxian) {
                this.zijideqixue = this.zijideqixueshangxian;
            }
            this.zhandoutexiao("huixue", this.zijideqixueshangxian * parseInt(this.chufahuixue_2_) / 100, 2);
        }
        //判断是否触发减抗
        if (this.chufaquanhushi_2_ != "0") {
            for (var k = 0; k < this.guai2buff.length; k++) {
                if (this.guai2buff[k].id == "20019") {
                    this.guai2buff.splice(k, 1);
                }
            }
            var jiankangbuff_2_ = {
                id: "20019",
                chixu: 3,
                xiaoguo: parseInt(this.chufaquanhushi_2_)
            };
            this.guai2buff.push(jiankangbuff_2_);
            //			console.log(this.guai2buff);
            this.zhandoutexiao("jiankang", parseInt(this.chufaquanhushi_2_), 2);
            this.guai2buffxianshi();
        }
        //判断是否触发回灵
        if (this.chufahuiling_2_ != "0") {
            for (var g = 0; g < this.zijibuff.length; g++) {
                if (this.zijibuff[g].id == "20020") {
                    this.zijibuff.splice(g, 1);
                }
            }
            var huilingbuff_2_ = {
                id: "20020",
                chixu: 3,
                xiaoguo: 2
            };
            this.zijibuff.push(huilingbuff_2_);
            //			console.log(this.zijibuff);
            this.zhandoutexiao("huiling", 0, 0);
            this.zijibuffxianshi();
        }
        //判断是否触发减攻击
        if (this.chufajiangong_2_ != "0") {
            for (var l = 0; l < this.guai2buff.length; l++) {
                if (this.guai2buff[l].id == "20022") {
                    this.guai2buff.splice(l, 1);
                }
            }
            var jiangongjibuff_2_ = {
                id: "20022",
                chixu: 3,
                xiaoguo: parseInt(this.chufajiangong_2_)
            };
            this.guai2buff.push(jiangongjibuff_2_);
            //			console.log(this.guai2buff);
            this.zhandoutexiao("jiangongji", parseInt(this.chufajiangong_2_), 2);
            this.guai2buffxianshi();
        }
        //判断是否触发毒
        if (this.chufadu_2_ != "0") {
            for (var c = 0; c < this.guai2buff.length; c++) {
                if (this.guai2buff[c].id == "20021") {
                    this.guai2buff.splice(c, 1);
                }
            }
            var dubuff_2_ = {
                id: "20021",
                chixu: 3,
                xiaoguo: parseInt(this.chufadu_2_)
            };
            this.guai2buff.push(dubuff_2_);
            //			console.log(this.guai2buff);
            this.zhandoutexiao("du", parseInt(this.chufadu_2_), 2);
            this.guai2buffxianshi();
        }
        //判断是否触发加防
        if (this.chufajiafang_2_ != "0") {
            for (var b = 0; b < this.zijibuff.length; b++) {
                if (this.zijibuff[b].id == "20023") {
                    this.zijibuff.splice(b, 1);
                }
            }
            var jiafangbuff_2_ = {
                id: "20023",
                chixu: 3,
                xiaoguo: parseInt(this.chufajiafang_2_)
            };
            this.zijibuff.push(jiafangbuff_2_);
            //			console.log(this.zijibuff);
            this.zhandoutexiao("jiafang", parseInt(this.chufajiafang_2_), 0);
            this.zijibuffxianshi();
        }
        //判断是否触发加速
        if (this.chufajiasu_2_ != "0") {
            for (var v = 0; v < this.zijibuff.length; v++) {
                if (this.zijibuff[v].id == "20024") {
                    this.zijibuff.splice(v, 1);
                }
            }
            var jiasubuff_2_ = {
                id: "20024",
                chixu: 3,
                xiaoguo: parseInt(this.chufajiasu_2_)
            };
            this.zijibuff.push(jiasubuff_2_);
            //			console.log(this.zijibuff);
            this.zhandoutexiao("jiasu", parseInt(this.chufajiasu_2_), 0);
            this.zijibuffxianshi();
        }
        //判断是否触发给我方减血
        if (this.chufajianxue_2_ != "0") {
            this.zijideqixue = Math.floor(this.zijideqixue - this.zijideqixueshangxian * 0.1);
            this.zhandoutexiao("zijijianxue", this.zijideqixueshangxian * 0.1, 0);
            this.panduanzijisiwang();
        }
        //判断是否给我方减速
        if (this.chufawofangjiansu_2_ != "0") {
            this.jinduzu2.y = this.jinduzu2.y - 20;
            if (this.jinduzu2.y >= this.img_sudujindu.y + this.img_sudujindu.height - this.jinduzu2.height) {
                this.jinduzu2.y = this.img_sudujindu.y + this.img_sudujindu.height - this.jinduzu2.height;
            }
        }
        //判断是否触发了连击
        if (this.chufalianji_2_ != "0") {
            this.lianjiteshuchuli(zhongshanghai_2_, 2);
        }
        //技能释放完毕后，开始新的回合
        this.kaishixinhuihe();
    };
    Zhandoujiemian.prototype.duiguai3shanghai = function () {
        var zhongshanghai_3_ = 0;
        var zuizhongshanghaila_3_ = 0;
        var zuizhongshanghaima_3_ = 0;
        var zuizhongshanghaisuan_3_ = 0;
        var zuizhongshanghaitian_3_ = 0;
        var hushila_3_ = this.guai3la;
        var hushima_3_ = this.guai3ma;
        var hushisuan_3_ = this.guai3suan;
        var hushitian_3_ = this.guai3tian;
        //判断是否触发了忽视
        if (this.chufahushila_3_ != "0") {
            hushila_3_ = hushila_3_ - parseInt(this.chufahushila_3_);
        }
        if (this.chufahushima_3_ != "0") {
            hushima_3_ = hushima_3_ - parseInt(this.chufahushima_3_);
        }
        if (this.chufahushisuan_3_ != "0") {
            hushisuan_3_ = hushisuan_3_ - parseInt(this.chufahushisuan_3_);
        }
        if (this.chufahushitian_3_ != "0") {
            hushitian_3_ = hushitian_3_ - parseInt(this.chufahushitian_3_);
        }
        //判断怪物BUFF是否有忽视
        for (var i = 0; i < this.guai3buff.length; i++) {
            if (this.guai3buff[i].id == "20019" && parseInt(this.guai3buff[i].chixu) > 0 && this.guai3buff[i].xiaoguo != "") {
                hushila_3_ = hushila_3_ - parseInt(this.guai3buff[i].xiaoguo);
                hushima_3_ = hushima_3_ - parseInt(this.guai3buff[i].xiaoguo);
                hushisuan_3_ = hushisuan_3_ - parseInt(this.guai3buff[i].xiaoguo);
                hushitian_3_ = hushitian_3_ - parseInt(this.guai3buff[i].xiaoguo);
            }
        }
        //计算怪物所受伤害
        zuizhongshanghaila_3_ = Math.floor(this.shuchulazhi * (1 - hushila_3_ / 1000));
        zuizhongshanghaima_3_ = Math.floor(this.shuchumazhi * (1 - hushima_3_ / 1000));
        zuizhongshanghaisuan_3_ = Math.floor(this.shuchusuanzhi * (1 - hushisuan_3_ / 1000));
        zuizhongshanghaitian_3_ = Math.floor(this.shuchutianzhi * (1 - hushitian_3_ / 1000));
        zhongshanghai_3_ = zuizhongshanghaila_3_ + zuizhongshanghaima_3_ + zuizhongshanghaisuan_3_ + zuizhongshanghaitian_3_;
        //判断是否触发了自身降低攻击
        if (this.chufajiangong_3_ != "0") {
            zhongshanghai_3_ = Math.floor(zhongshanghai_3_ * 0.9);
        }
        //判断是否触发了震慑
        if (this.chufazhenshe_3_ != "0") {
            zhongshanghai_3_ = Math.floor(zhongshanghai_3_ + this.guai3qixuechushi * parseInt(this.chufazhenshe_3_) / 100);
            this.zhandoutexiao("zhenshe", this.guai3qixuechushi * parseInt(this.chufazhenshe_3_) / 100, 3);
        }
        //判断是否触发了必杀
        if (this.chufabisha_3_ != "0") {
            zhongshanghai_3_ = Math.floor(zhongshanghai_3_ + zhongshanghai_3_ * parseInt(this.chufabisha_3_) / 100);
            this.zhandoutexiao("bisha", zhongshanghai_3_, 3);
        }
        else {
            this.zhandoutexiao("putong", zhongshanghai_3_, 3);
        }
        //判断是否触发了吸血
        if (this.chufaxixue_3_ != "0") {
            this.zijideqixue = Math.floor(this.zijideqixue + zhongshanghai_3_ * parseInt(this.chufaxixue_3_) / 100);
            if (this.zijideqixue >= this.zijideqixueshangxian) {
                this.zijideqixue = this.zijideqixueshangxian;
            }
            this.zhandoutexiao("xixue", zhongshanghai_3_ * parseInt(this.chufaxixue_3_) / 100, 3);
            this.shuaxinzijixuetiao();
        }
        //判断是否触发了善恶
        if (this.chufasane_3_ != "0") {
            var suijisane = Math.floor(Math.random() * 2);
            if (suijisane == 0) {
                this.zhandoutexiao("sanezhie", zhongshanghai_3_ * 1.8, 3);
                this.guai3qixue = Math.floor(this.guai3qixue - zhongshanghai_3_ * 1.8);
                this.panduanguai3siwang();
                //判断是否触发追击
                if (this.guai3qixue <= 0) {
                    if (this.chufazhuiji_3_ != "0") {
                        if (this.guai3qixue < 0) {
                            var zhuijishu = 0 - this.guai3qixue;
                            if (this.guai1qixue > 0) {
                                this.guai1qixue = this.guai1qixue - zhuijishu;
                                this.zhuijitexiao(this.benhuihechucaiid, 3, 1, zhuijishu);
                                this.panduanguai1siwang();
                            }
                            else if (this.guai2qixue > 0) {
                                this.guai2qixue = this.guai2qixue - zhuijishu;
                                this.zhuijitexiao(this.benhuihechucaiid, 3, 2, zhuijishu);
                                this.panduanguai2siwang();
                            }
                        }
                    }
                }
            }
            else {
                this.zhandoutexiao("sanezhis", zhongshanghai_3_ * 0.5, 3);
                this.guai3qixue = Math.floor(this.guai3qixue + zhongshanghai_3_ * 0.5);
            }
        }
        else {
            this.guai3qixue = Math.floor(this.guai3qixue - zhongshanghai_3_);
            this.panduanguai3siwang();
        }
        //判断是否触发吸蓝
        if (this.chufaxilan_3_ != "0") {
            this.qidianshu = this.qidianshu + parseInt(this.chufaxilan_3_);
            if (this.qidianshu >= 10) {
                this.qidianshu = 10;
            }
            this.zhandoutexiao("xilan", parseInt(this.chufaxilan_3_), 3);
        }
        //判断是否触发减速
        if (this.chufajiansu_3_ != "0") {
            for (var h = 0; h < this.guai3buff.length; h++) {
                if (this.guai3buff[h].id == "20016") {
                    this.guai3buff.splice(h, 1);
                }
            }
            var jiansubuff_3_ = {
                id: "20016",
                chixu: 2,
                xiaoguo: parseInt(this.chufajiansu_3_)
            };
            this.guai3buff.push(jiansubuff_3_);
            //			console.log(this.guai3buff);
            this.zhandoutexiao("jiansu", parseInt(this.chufajiansu_3_), 3);
            this.guai3buffxianshi();
        }
        //判断是否触发沉默
        if (this.chufachenmo_3_ != "0") {
            var chufachengmojilv_3_ = Math.floor(Math.random() * 100);
            if (chufachengmojilv_3_ <= parseInt(this.chufachenmo_3_)) {
                for (var j = 0; j < this.guai3buff.length; j++) {
                    if (this.guai3buff[j].id == "20017") {
                        this.guai3buff.splice(j, 1);
                    }
                }
                var chengmobuff_3_ = {
                    id: "20017",
                    chixu: 1,
                    xiaoguo: 0
                };
                this.guai3buff.push(chengmobuff_3_);
                //				console.log(this.guai3buff);
                this.zhandoutexiao("chenmo", 0, 3);
                this.guai3buffxianshi();
            }
        }
        //判断是否触发回血
        if (this.chufahuixue_3_ != "0") {
            this.zijideqixue = Math.floor(this.zijideqixue + this.zijideqixueshangxian * parseInt(this.chufahuixue_3_) / 100);
            if (this.zijideqixue >= this.zijideqixueshangxian) {
                this.zijideqixue = this.zijideqixueshangxian;
            }
            this.zhandoutexiao("huixue", this.zijideqixueshangxian * parseInt(this.chufahuixue_3_) / 100, 3);
        }
        //判断是否触发减抗
        if (this.chufaquanhushi_3_ != "0") {
            for (var k = 0; k < this.guai3buff.length; k++) {
                if (this.guai3buff[k].id == "20019") {
                    this.guai3buff.splice(k, 1);
                }
            }
            var jiankangbuff_3_ = {
                id: "20019",
                chixu: 3,
                xiaoguo: parseInt(this.chufaquanhushi_3_)
            };
            this.guai3buff.push(jiankangbuff_3_);
            //			console.log(this.guai3buff);
            this.zhandoutexiao("jiankang", parseInt(this.chufaquanhushi_3_), 3);
            this.guai3buffxianshi();
        }
        //判断是否触发回灵
        if (this.chufahuiling_3_ != "0") {
            for (var g = 0; g < this.zijibuff.length; g++) {
                if (this.zijibuff[g].id == "20020") {
                    this.zijibuff.splice(g, 1);
                }
            }
            var huilingbuff_3_ = {
                id: "20020",
                chixu: 3,
                xiaoguo: 2
            };
            this.zijibuff.push(huilingbuff_3_);
            //			console.log(this.zijibuff);
            this.zhandoutexiao("huiling", 0, 0);
            this.zijibuffxianshi();
        }
        //判断是否触发减攻击
        if (this.chufajiangong_3_ != "0") {
            for (var l = 0; l < this.guai3buff.length; l++) {
                if (this.guai3buff[l].id == "20022") {
                    this.guai3buff.splice(l, 1);
                }
            }
            var jiangongjibuff_3_ = {
                id: "20022",
                chixu: 3,
                xiaoguo: parseInt(this.chufajiangong_3_)
            };
            this.guai3buff.push(jiangongjibuff_3_);
            //			console.log(this.guai3buff);
            this.zhandoutexiao("jiangongji", parseInt(this.chufajiangong_3_), 3);
            this.guai3buffxianshi();
        }
        //判断是否触发毒
        if (this.chufadu_3_ != "0") {
            for (var c = 0; c < this.guai3buff.length; c++) {
                if (this.guai3buff[c].id == "20021") {
                    this.guai3buff.splice(c, 1);
                }
            }
            var dubuff_3_ = {
                id: "20021",
                chixu: 3,
                xiaoguo: parseInt(this.chufadu_3_)
            };
            this.guai3buff.push(dubuff_3_);
            //			console.log(this.guai3buff);
            this.zhandoutexiao("du", parseInt(this.chufadu_3_), 3);
            this.guai3buffxianshi();
        }
        //判断是否触发加防
        if (this.chufajiafang_3_ != "0") {
            for (var b = 0; b < this.zijibuff.length; b++) {
                if (this.zijibuff[b].id == "20023") {
                    this.zijibuff.splice(b, 1);
                }
            }
            var jiafangbuff_3_ = {
                id: "20023",
                chixu: 3,
                xiaoguo: parseInt(this.chufajiafang_3_)
            };
            this.zijibuff.push(jiafangbuff_3_);
            //		console.log(this.zijibuff);
            this.zhandoutexiao("jiafang", parseInt(this.chufajiafang_3_), 0);
            this.zijibuffxianshi();
        }
        //判断是否触发加速
        if (this.chufajiasu_3_ != "0") {
            for (var v = 0; v < this.zijibuff.length; v++) {
                if (this.zijibuff[v].id == "20024") {
                    this.zijibuff.splice(v, 1);
                }
            }
            var jiasubuff_3_ = {
                id: "20024",
                chixu: 3,
                xiaoguo: parseInt(this.chufajiasu_3_)
            };
            this.zijibuff.push(jiasubuff_3_);
            //		console.log(this.zijibuff);
            this.zhandoutexiao("jiasu", parseInt(this.chufajiasu_3_), 0);
            this.zijibuffxianshi();
        }
        //判断是否触发给我方减血
        if (this.chufajianxue_3_ != "0") {
            this.zijideqixue = Math.floor(this.zijideqixue - this.zijideqixueshangxian * 0.1);
            this.zhandoutexiao("zijijianxue", this.zijideqixueshangxian * 0.1, 0);
            this.panduanzijisiwang();
        }
        //判断是否给我方减速
        if (this.chufawofangjiansu_3_ != "0") {
            this.jinduzu2.y = this.jinduzu2.y - 20;
            if (this.jinduzu2.y >= this.img_sudujindu.y + this.img_sudujindu.height - this.jinduzu2.height) {
                this.jinduzu2.y = this.img_sudujindu.y + this.img_sudujindu.height - this.jinduzu2.height;
            }
        }
        //判断是否触发了连击
        if (this.chufalianji_3_ != "0") {
            this.lianjiteshuchuli(zhongshanghai_3_, 3);
        }
        //技能释放完毕后，开始新的回合
        this.kaishixinhuihe();
    };
    //连击特殊处理
    Zhandoujiemian.prototype.lianjiteshuchuli = function (shanghai, duixiang) {
        var _this = this;
        shanghai = Math.floor(shanghai / 2);
        this.zhandoutexiao("lianji", 0, 4);
        if (duixiang == 1) {
            var shipubiao1 = RES.getRes("shipubiao_json");
            var xianshishangcaitu1 = "";
            for (var h = 0; h < shipubiao1.length; h++) {
                if (shipubiao1[h].id == this.benhuihechucaiid) {
                    xianshishangcaitu1 = shipubiao1[h].id + "_png";
                    break;
                }
            }
            var zhandoushangcai1_1 = new egret.Bitmap();
            var zhandoutupian1 = RES.getRes(xianshishangcaitu1);
            zhandoushangcai1_1.texture = zhandoutupian1;
            this.addChild(zhandoushangcai1_1);
            zhandoushangcai1_1.x = this.zhandouxianshizu.x;
            zhandoushangcai1_1.y = this.zhandouxianshizu.y;
            zhandoushangcai1_1.scaleX = 1;
            zhandoushangcai1_1.scaleY = 1;
            egret.Tween.get(zhandoushangcai1_1).to({ scaleX: 0, scaleY: 0, x: this.bosszu.x + this.bosszu.width / 3 * 1, y: this.bosszu.y + this.bosszu.height / 2 }, 1000).call(function () {
                _this.removeChild(zhandoushangcai1_1);
                _this.guai1qixue = Math.floor(_this.guai1qixue - shanghai);
                _this.zhandoutexiao("pugong", shanghai, 1);
                _this.panduanguai1siwang();
            });
        }
        else if (duixiang == 2) {
            var shipubiao1 = RES.getRes("shipubiao_json");
            var xianshishangcaitu1 = "";
            for (var h = 0; h < shipubiao1.length; h++) {
                if (shipubiao1[h].id == this.benhuihechucaiid) {
                    xianshishangcaitu1 = shipubiao1[h].id + "_png";
                    break;
                }
            }
            var zhandoushangcai1_2 = new egret.Bitmap();
            var zhandoutupian1 = RES.getRes(xianshishangcaitu1);
            zhandoushangcai1_2.texture = zhandoutupian1;
            this.addChild(zhandoushangcai1_2);
            zhandoushangcai1_2.x = this.zhandouxianshizu.x;
            zhandoushangcai1_2.y = this.zhandouxianshizu.y;
            zhandoushangcai1_2.scaleX = 1;
            zhandoushangcai1_2.scaleY = 1;
            egret.Tween.get(zhandoushangcai1_2).to({ scaleX: 0, scaleY: 0, x: this.bosszu0.x + this.bosszu0.width / 3 * 1, y: this.bosszu0.y + this.bosszu0.height / 2 }, 1000).call(function () {
                _this.removeChild(zhandoushangcai1_2);
                _this.guai2qixue = Math.floor(_this.guai2qixue - shanghai);
                _this.zhandoutexiao("pugong", shanghai, 2);
                _this.panduanguai2siwang();
            });
        }
        else if (duixiang == 3) {
            var shipubiao1 = RES.getRes("shipubiao_json");
            var xianshishangcaitu1 = "";
            for (var h = 0; h < shipubiao1.length; h++) {
                if (shipubiao1[h].id == this.benhuihechucaiid) {
                    xianshishangcaitu1 = shipubiao1[h].id + "_png";
                    break;
                }
            }
            var zhandoushangcai1_3 = new egret.Bitmap();
            var zhandoutupian1 = RES.getRes(xianshishangcaitu1);
            zhandoushangcai1_3.texture = zhandoutupian1;
            this.addChild(zhandoushangcai1_3);
            zhandoushangcai1_3.x = this.zhandouxianshizu.x;
            zhandoushangcai1_3.y = this.zhandouxianshizu.y;
            zhandoushangcai1_3.scaleX = 1;
            zhandoushangcai1_3.scaleY = 1;
            egret.Tween.get(zhandoushangcai1_3).to({ scaleX: 0, scaleY: 0, x: this.bosszu1.x + this.bosszu1.width / 3 * 1, y: this.bosszu1.y + this.bosszu1.height / 2 }, 1000).call(function () {
                _this.removeChild(zhandoushangcai1_3);
                _this.guai3qixue = Math.floor(_this.guai3qixue - shanghai);
                _this.zhandoutexiao("pugong", shanghai, 3);
                _this.panduanguai2siwang();
            });
        }
    };
    //判断特效显示
    Zhandoujiemian.prototype.zhandoutexiao = function (leixing, shuzhi, duixiang) {
        //开始判断呈现的技能动画效果
        if (leixing == "sanezhie" || leixing == "bisha" || leixing == "putong") {
            switch (leixing) {
                case "sanezhie":
                    this.xianshidonghua("shuziyiweisan", "shanezhishanlonggu", "shaneyoubaoshan_ske_json", "shaneyoubaoshan_tex_json", "shaneyoubaoshan_tex_png", duixiang); //动作名称，骨架名称，资源1，资源2，资源3，作用对象;
                    if (duixiang == 0) {
                        this.piaoxuewenzi("耐心(殊)", "-" + shuzhi, duixiang, "F41809");
                    }
                    else {
                        this.piaoxuewenzi("负面(殊)", "-" + shuzhi, duixiang, "F41809");
                    }
                    break;
                case "bisha":
                    this.xianshidonghua("meiwei", "bishalonggu", "meiwei_ske_json", "meiwei_tex_json", "meiwei_tex_png", duixiang); //动作名称，骨架名称，资源1，资源2，资源3，作用对象;
                    if (duixiang == 0) {
                        this.piaoxuewenzi("耐心(美)", "-" + shuzhi, duixiang, "F41809");
                    }
                    else {
                        this.piaoxuewenzi("负面(美)", "-" + shuzhi, duixiang, "F41809");
                    }
                    break;
                case "putong":
                    this.xianshidonghua("pugong", "pugonglonggu", "pugong_ske_json", "pugong_tex_json", "pugong_tex_png", duixiang); //动作名称，骨架名称，资源1，资源2，资源3，作用对象;
                    if (duixiang == 0) {
                        this.piaoxuewenzi("耐心", "-" + shuzhi, duixiang, "F41809");
                    }
                    else {
                        this.piaoxuewenzi("负面", "-" + shuzhi, duixiang, "F41809");
                    }
                    break;
            }
        }
        if (leixing == "zhenshe") {
            this.xianshidonghua("shizhidadong", "shizhidadonglonggu", "shizhidadong_ske_json", "shizhidadong_tex_json", "shizhidadong_tex_png", duixiang); //动作名称，骨架名称，资源1，资源2，资源3，作用对象;
            this.piaoxuewenzi("负面(食)", "-" + shuzhi, duixiang, "F41809");
        }
        if (leixing == "xixue") {
            this.xianshidonghua("huixue", "tianmilonggu", "tianmi_ske_json", "tianmi_tex_json", "tianmi_tex_png", duixiang); //动作名称，骨架名称，资源1，资源2，资源3，作用对象;
            this.piaoxuewenzi("耐心(甜)", "+" + shuzhi, 0, "42F409");
        }
        if (leixing == "sanezhis") {
            this.xianshidonghua("shuzhiyiweiyi", "shaneelonggu", "shuzhiyiweiyi_ske_json", "shuzhiyiweiyi_tex_json", "shuzhiyiweiyi_tex_png", duixiang); //动作名称，骨架名称，资源1，资源2，资源3，作用对象;
            this.piaoxuewenzi("负面(异)", "+" + shuzhi, duixiang, "42F409");
        }
        if (leixing == "xilan") {
            this.xianshidonghua("suanshaungwubi", "suanshuanglonggu", "suanchuangwubi_ske_json", "suanchuangwubi_tex_json", "suanchuangwubi_tex_png", 0); //动作名称，骨架名称，资源1，资源2，资源3，作用对象;
            this.piaoxuewenzi("配料", "+" + shuzhi, 0, "42F409");
        }
        if (leixing == "jiansu") {
            this.xianshidonghua("dapengwudiong", "dapengwudinglonggu", "dapengwuding_ske_json", "dapengwuding_tex_json", "dapengwuding_tex_png", duixiang); //动作名称，骨架名称，资源1，资源2，资源3，作用对象;
            this.piaoxuewenzi("急迫", "-" + shuzhi, duixiang, "F41809");
        }
        if (leixing == "chenmo") {
            this.xianshidonghua("fenxianglieding", "fenxianglonggu", "fengxianglieding_ske_json", "fengxianglieding_tex_json", "fengxianglieding_tex_png", duixiang); //动作名称，骨架名称，资源1，资源2，资源3，作用对象;
            this.piaoxuewenzi("无法行动", "", duixiang, "F41809");
        }
        if (leixing == "huixue") {
            this.xianshidonghua("fengsuilonggan", "longganlonggu", "fengsuilonggan_ske_json", "fengsuilonggan_tex_json", "fengsuilonggan_tex_png", 0); //动作名称，骨架名称，资源1，资源2，资源3，作用对象;
            this.piaoxuewenzi("耐心(凤)", "+" + shuzhi, 0, "42F409");
        }
        if (leixing == "jiankang") {
            this.xianshidonghua("ganzhifeilong", "feilonglonggu", "ganzhifeilong_ske_json", "ganzhifeilong_tex_json", "ganzhifeilong_tex_png", duixiang); //动作名称，骨架名称，资源1，资源2，资源3，作用对象;
            this.piaoxuewenzi("四抗", "-" + shuzhi, duixiang, "F41809");
        }
        if (leixing == "huiling") {
            this.xianshidonghua("shanzhenghaiwei", "shanzhenlonggu", "shanzhenhaiwei_ske_json", "shanzhenhaiwei_tex_json", "shanzhenhaiwei_tex_png", 0); //动作名称，骨架名称，资源1，资源2，资源3，作用对象;
            this.piaoxuewenzi("配料", "+" + shuzhi, 0, "42F409");
        }
        if (leixing == "jiangongji") {
            this.xianshidonghua("yuweiwuqiong", "yuweilonggu", "yuweiwuqiong_ske_json", "yuweiwuqiong_tex_json", "yuweiwuqiong_tex_png", duixiang); //动作名称，骨架名称，资源1，资源2，资源3，作用对象;
            this.piaoxuewenzi("愤怒", "-" + shuzhi, duixiang, "F41809");
        }
        if (leixing == "du") {
            this.xianshidonghua("zhenyuweiwuqiong", "dulonggu", "wuweiwuqiongzhen_ske_json", "wuweiwuqiongzhen_tex_json", "wuweiwuqiongzhen_tex_png", duixiang); //动作名称，骨架名称，资源1，资源2，资源3，作用对象;
            this.piaoxuewenzi("负面", "-" + shuzhi, duixiang, "F41809");
        }
        if (leixing == "jiafang") {
            this.xianshidonghua("bazhenyushi", "bazhenyushilonggu", "bazhenyushi_ske_json", "bazhenyushi_tex_json", "bazhenyushi_tex_png", 0); //动作名称，骨架名称，资源1，资源2，资源3，作用对象;
            this.piaoxuewenzi("意志", "+" + shuzhi, 0, "42F409");
        }
        if (leixing == "jiasu") {
            this.xianshidonghua("haicuojiangyao", "jiangyaolonggu", "haicuojiangyao_ske_json", "haicuojiangyao_tex_json", "haicuojiangyao_tex_png", 0); //动作名称，骨架名称，资源1，资源2，资源3，作用对象;
            this.piaoxuewenzi("兴致", "+" + shuzhi, 0, "42F409");
        }
        if (leixing == "zijijianxue") {
            this.piaoxuewenzi("耐心", "-" + shuzhi, duixiang, "F41809");
        }
        if (leixing == "zhuiji") {
            this.xianshidonghua("zhuiji", "zhuijilonggu", "zhuiji_ske_json", "zhuiji_tex_json", "zhuiji_tex_png", 4); //动作名称，骨架名称，资源1，资源2，资源3，作用对象;
        }
        if (leixing == "lianji") {
            this.xianshidonghua("huiwei", "huiweilonggu", "huiwei_ske_json", "huiwei_tex_json", "huiwei_tex_png", 4); //动作名称，骨架名称，资源1，资源2，资源3，作用对象;
        }
    };
    //飘血文字显示
    Zhandoujiemian.prototype.piaoxuewenzi = function (wenzi1, wenzi2, duixiang, yanse) {
        if (duixiang == 0) {
            this.zijipiaozi(wenzi1, wenzi2, yanse);
        }
        else if (duixiang == 1) {
            this.guai1piaozi(wenzi1, wenzi2, yanse);
        }
        else if (duixiang == 2) {
            this.guai2piaozi(wenzi1, wenzi2, yanse);
        }
        else if (duixiang == 3) {
            this.guai3piaozi(wenzi1, wenzi2, yanse);
        }
    };
    //自己瓢字
    Zhandoujiemian.prototype.zijipiaozi = function (wenzi1, wenzi2, yanse) {
        var _this = this;
        var wenzixianshi = new Zhandoupiaozi();
        this.addChild(wenzixianshi);
        if (this.jinlaicishu1[0] == 1) {
            this.jinlaicishu1[0] = 0;
            wenzixianshi.x = this.zijizu.x + this.zijizu.width / 3 * 1;
            wenzixianshi.y = this.zijizu.y + this.zijizu.height;
            wenzixianshi.qianmianwenzi.text = wenzi1;
            wenzixianshi.qianmianwenzi0.text = wenzi2;
            wenzixianshi.qianmianwenzi0.textColor = yanse;
            egret.Tween.get(wenzixianshi).to({ y: this.zijizu.y }, 3000)
                .call(function () {
                _this.jinlaicishu1[0] = 1;
                _this.removeChild(wenzixianshi);
            });
        }
        else if (this.jinlaicishu1[1] == 1) {
            this.jinlaicishu1[1] = 0;
            wenzixianshi.x = this.zijizu.x + this.zijizu.width / 3 * 1;
            wenzixianshi.y = this.zijizu.y + this.zijizu.height + wenzixianshi.height;
            wenzixianshi.qianmianwenzi.text = wenzi1;
            wenzixianshi.qianmianwenzi0.text = wenzi2;
            wenzixianshi.qianmianwenzi0.textColor = yanse;
            egret.Tween.get(wenzixianshi).to({ y: this.zijizu.y + wenzixianshi.height }, 3000)
                .call(function () {
                _this.jinlaicishu1[1] = 1;
                _this.removeChild(wenzixianshi);
            });
        }
        else if (this.jinlaicishu1[2] == 1) {
            this.jinlaicishu1[2] = 0;
            wenzixianshi.x = this.zijizu.x + this.zijizu.width / 3 * 1;
            wenzixianshi.y = this.zijizu.y + this.zijizu.height + wenzixianshi.height * 2;
            wenzixianshi.qianmianwenzi.text = wenzi1;
            wenzixianshi.qianmianwenzi0.text = wenzi2;
            wenzixianshi.qianmianwenzi0.textColor = yanse;
            egret.Tween.get(wenzixianshi).to({ y: this.zijizu.y + wenzixianshi.height * 2 }, 3000)
                .call(function () {
                _this.jinlaicishu1[2] = 1;
                _this.removeChild(wenzixianshi);
            });
        }
        else if (this.jinlaicishu1[3] == 1) {
            this.jinlaicishu1[3] = 0;
            wenzixianshi.x = this.zijizu.x + this.zijizu.width / 3 * 1;
            wenzixianshi.y = this.zijizu.y + this.zijizu.height + wenzixianshi.height * 3;
            wenzixianshi.qianmianwenzi.text = wenzi1;
            wenzixianshi.qianmianwenzi0.text = wenzi2;
            wenzixianshi.qianmianwenzi0.textColor = yanse;
            egret.Tween.get(wenzixianshi).to({ y: this.zijizu.y + wenzixianshi.height * 3 }, 3000)
                .call(function () {
                _this.jinlaicishu1[3] = 1;
                _this.removeChild(wenzixianshi);
            });
        }
        else if (this.jinlaicishu1[4] == 1) {
            this.jinlaicishu1[4] = 0;
            wenzixianshi.x = this.zijizu.x + this.zijizu.width / 3 * 1;
            wenzixianshi.y = this.zijizu.y + this.zijizu.height + wenzixianshi.height * 4;
            wenzixianshi.qianmianwenzi.text = wenzi1;
            wenzixianshi.qianmianwenzi0.text = wenzi2;
            wenzixianshi.qianmianwenzi0.textColor = yanse;
            egret.Tween.get(wenzixianshi).to({ y: this.zijizu.y + wenzixianshi.height * 4 }, 3000)
                .call(function () {
                _this.jinlaicishu1[4] = 1;
                _this.removeChild(wenzixianshi);
            });
        }
        else if (this.jinlaicishu1[5] == 1) {
            this.jinlaicishu1[5] = 0;
            wenzixianshi.x = this.zijizu.x + this.zijizu.width / 3 * 1;
            wenzixianshi.y = this.zijizu.y + this.zijizu.height + wenzixianshi.height * 5;
            wenzixianshi.qianmianwenzi.text = wenzi1;
            wenzixianshi.qianmianwenzi0.text = wenzi2;
            wenzixianshi.qianmianwenzi0.textColor = yanse;
            egret.Tween.get(wenzixianshi).to({ y: this.zijizu.y + wenzixianshi.height * 5 }, 3000)
                .call(function () {
                _this.jinlaicishu1[5] = 1;
                _this.removeChild(wenzixianshi);
            });
        }
        else if (this.jinlaicishu1[6] == 1) {
            this.jinlaicishu1[6] = 0;
            wenzixianshi.x = this.zijizu.x + this.zijizu.width / 3 * 1;
            wenzixianshi.y = this.zijizu.y + this.zijizu.height + wenzixianshi.height * 6;
            wenzixianshi.qianmianwenzi.text = wenzi1;
            wenzixianshi.qianmianwenzi0.text = wenzi2;
            wenzixianshi.qianmianwenzi0.textColor = yanse;
            egret.Tween.get(wenzixianshi).to({ y: this.zijizu.y + wenzixianshi.height * 6 }, 3000)
                .call(function () {
                _this.jinlaicishu1[6] = 1;
                _this.removeChild(wenzixianshi);
            });
        }
    };
    //怪2瓢字
    Zhandoujiemian.prototype.guai1piaozi = function (wenzi1, wenzi2, yanse) {
        var _this = this;
        var wenzixianshi = new Zhandoupiaozi();
        this.addChild(wenzixianshi);
        if (this.jinlaicishu2[0] == 1) {
            this.jinlaicishu2[0] = 0;
            wenzixianshi.x = this.bosszu.x + this.bosszu.width / 3 * 1;
            wenzixianshi.y = this.bosszu.y + this.bosszu.height;
            wenzixianshi.qianmianwenzi.text = wenzi1;
            wenzixianshi.qianmianwenzi0.text = wenzi2;
            wenzixianshi.qianmianwenzi0.textColor = yanse;
            egret.Tween.get(wenzixianshi).to({ y: this.bosszu.y }, 3000)
                .call(function () {
                _this.jinlaicishu2[0] = 1;
                _this.removeChild(wenzixianshi);
            });
        }
        else if (this.jinlaicishu2[1] == 1) {
            this.jinlaicishu2[1] = 0;
            wenzixianshi.x = this.bosszu.x + this.bosszu.width / 3 * 1;
            wenzixianshi.y = this.bosszu.y + this.bosszu.height + wenzixianshi.height;
            wenzixianshi.qianmianwenzi.text = wenzi1;
            wenzixianshi.qianmianwenzi0.text = wenzi2;
            wenzixianshi.qianmianwenzi0.textColor = yanse;
            egret.Tween.get(wenzixianshi).to({ y: this.bosszu.y + wenzixianshi.height }, 3000)
                .call(function () {
                _this.jinlaicishu2[1] = 1;
                _this.removeChild(wenzixianshi);
            });
        }
        else if (this.jinlaicishu2[2] == 1) {
            this.jinlaicishu2[2] = 0;
            wenzixianshi.x = this.bosszu.x + this.bosszu.width / 3 * 1;
            wenzixianshi.y = this.bosszu.y + this.bosszu.height + wenzixianshi.height * 2;
            wenzixianshi.qianmianwenzi.text = wenzi1;
            wenzixianshi.qianmianwenzi0.text = wenzi2;
            wenzixianshi.qianmianwenzi0.textColor = yanse;
            egret.Tween.get(wenzixianshi).to({ y: this.bosszu.y + wenzixianshi.height * 2 }, 3000)
                .call(function () {
                _this.jinlaicishu2[2] = 1;
                _this.removeChild(wenzixianshi);
            });
        }
        else if (this.jinlaicishu2[3] == 1) {
            this.jinlaicishu2[3] = 0;
            wenzixianshi.x = this.bosszu.x + this.bosszu.width / 3 * 1;
            wenzixianshi.y = this.bosszu.y + this.bosszu.height + wenzixianshi.height * 3;
            wenzixianshi.qianmianwenzi.text = wenzi1;
            wenzixianshi.qianmianwenzi0.text = wenzi2;
            wenzixianshi.qianmianwenzi0.textColor = yanse;
            egret.Tween.get(wenzixianshi).to({ y: this.bosszu.y + wenzixianshi.height * 3 }, 3000)
                .call(function () {
                _this.jinlaicishu2[3] = 1;
                _this.removeChild(wenzixianshi);
            });
        }
        else if (this.jinlaicishu2[4] == 1) {
            this.jinlaicishu2[4] = 0;
            wenzixianshi.x = this.bosszu.x + this.bosszu.width / 3 * 1;
            wenzixianshi.y = this.bosszu.y + this.bosszu.height + wenzixianshi.height * 4;
            wenzixianshi.qianmianwenzi.text = wenzi1;
            wenzixianshi.qianmianwenzi0.text = wenzi2;
            wenzixianshi.qianmianwenzi0.textColor = yanse;
            egret.Tween.get(wenzixianshi).to({ y: this.bosszu.y + wenzixianshi.height * 4 }, 3000)
                .call(function () {
                _this.jinlaicishu2[4] = 1;
                _this.removeChild(wenzixianshi);
            });
        }
        else if (this.jinlaicishu2[5] == 1) {
            this.jinlaicishu2[5] = 0;
            wenzixianshi.x = this.bosszu.x + this.bosszu.width / 3 * 1;
            wenzixianshi.y = this.bosszu.y + this.bosszu.height + wenzixianshi.height * 5;
            wenzixianshi.qianmianwenzi.text = wenzi1;
            wenzixianshi.qianmianwenzi0.text = wenzi2;
            wenzixianshi.qianmianwenzi0.textColor = yanse;
            egret.Tween.get(wenzixianshi).to({ y: this.bosszu.y + wenzixianshi.height * 5 }, 3000)
                .call(function () {
                _this.jinlaicishu2[5] = 1;
                _this.removeChild(wenzixianshi);
            });
        }
        else if (this.jinlaicishu2[6] == 1) {
            this.jinlaicishu2[6] = 0;
            wenzixianshi.x = this.bosszu.x + this.bosszu.width / 3 * 1;
            wenzixianshi.y = this.bosszu.y + this.bosszu.height + wenzixianshi.height * 6;
            wenzixianshi.qianmianwenzi.text = wenzi1;
            wenzixianshi.qianmianwenzi0.text = wenzi2;
            wenzixianshi.qianmianwenzi0.textColor = yanse;
            egret.Tween.get(wenzixianshi).to({ y: this.bosszu.y + wenzixianshi.height * 6 }, 3000)
                .call(function () {
                _this.jinlaicishu2[6] = 1;
                _this.removeChild(wenzixianshi);
            });
        }
    };
    //怪1瓢字
    Zhandoujiemian.prototype.guai2piaozi = function (wenzi1, wenzi2, yanse) {
        var _this = this;
        var wenzixianshi = new Zhandoupiaozi();
        this.addChild(wenzixianshi);
        if (this.jinlaicishu3[0] == 1) {
            this.jinlaicishu3[0] = 0;
            wenzixianshi.x = this.bosszu0.x + this.bosszu0.width / 3 * 1;
            wenzixianshi.y = this.bosszu0.y + this.bosszu0.height;
            wenzixianshi.qianmianwenzi.text = wenzi1;
            wenzixianshi.qianmianwenzi0.text = wenzi2;
            wenzixianshi.qianmianwenzi0.textColor = yanse;
            egret.Tween.get(wenzixianshi).to({ y: this.bosszu0.y }, 3000)
                .call(function () {
                _this.jinlaicishu3[0] = 1;
                _this.removeChild(wenzixianshi);
            });
        }
        else if (this.jinlaicishu3[1] == 1) {
            this.jinlaicishu3[1] = 0;
            wenzixianshi.x = this.bosszu0.x + this.bosszu0.width / 3 * 1;
            wenzixianshi.y = this.bosszu0.y + this.bosszu0.height + wenzixianshi.height;
            wenzixianshi.qianmianwenzi.text = wenzi1;
            wenzixianshi.qianmianwenzi0.text = wenzi2;
            wenzixianshi.qianmianwenzi0.textColor = yanse;
            egret.Tween.get(wenzixianshi).to({ y: this.bosszu0.y + wenzixianshi.height }, 3000)
                .call(function () {
                _this.jinlaicishu3[1] = 1;
                _this.removeChild(wenzixianshi);
            });
        }
        else if (this.jinlaicishu3[2] == 1) {
            this.jinlaicishu3[2] = 0;
            wenzixianshi.x = this.bosszu0.x + this.bosszu0.width / 3 * 1;
            wenzixianshi.y = this.bosszu0.y + this.bosszu0.height + wenzixianshi.height * 2;
            wenzixianshi.qianmianwenzi.text = wenzi1;
            wenzixianshi.qianmianwenzi0.text = wenzi2;
            wenzixianshi.qianmianwenzi0.textColor = yanse;
            egret.Tween.get(wenzixianshi).to({ y: this.bosszu0.y + wenzixianshi.height * 2 }, 3000)
                .call(function () {
                _this.jinlaicishu3[2] = 1;
                _this.removeChild(wenzixianshi);
            });
        }
        else if (this.jinlaicishu3[3] == 1) {
            this.jinlaicishu3[3] = 0;
            wenzixianshi.x = this.bosszu0.x + this.bosszu0.width / 3 * 1;
            wenzixianshi.y = this.bosszu0.y + this.bosszu0.height + wenzixianshi.height * 3;
            wenzixianshi.qianmianwenzi.text = wenzi1;
            wenzixianshi.qianmianwenzi0.text = wenzi2;
            wenzixianshi.qianmianwenzi0.textColor = yanse;
            egret.Tween.get(wenzixianshi).to({ y: this.bosszu0.y + wenzixianshi.height * 3 }, 3000)
                .call(function () {
                _this.jinlaicishu3[3] = 1;
                _this.removeChild(wenzixianshi);
            });
        }
        else if (this.jinlaicishu3[4] == 1) {
            this.jinlaicishu3[4] = 0;
            wenzixianshi.x = this.bosszu0.x + this.bosszu0.width / 3 * 1;
            wenzixianshi.y = this.bosszu0.y + this.bosszu0.height + wenzixianshi.height * 4;
            wenzixianshi.qianmianwenzi.text = wenzi1;
            wenzixianshi.qianmianwenzi0.text = wenzi2;
            wenzixianshi.qianmianwenzi0.textColor = yanse;
            egret.Tween.get(wenzixianshi).to({ y: this.bosszu0.y + wenzixianshi.height * 4 }, 3000)
                .call(function () {
                _this.jinlaicishu3[4] = 1;
                _this.removeChild(wenzixianshi);
            });
        }
        else if (this.jinlaicishu3[5] == 1) {
            this.jinlaicishu3[5] = 0;
            wenzixianshi.x = this.bosszu0.x + this.bosszu0.width / 3 * 1;
            wenzixianshi.y = this.bosszu0.y + this.bosszu0.height + wenzixianshi.height * 5;
            wenzixianshi.qianmianwenzi.text = wenzi1;
            wenzixianshi.qianmianwenzi0.text = wenzi2;
            wenzixianshi.qianmianwenzi0.textColor = yanse;
            egret.Tween.get(wenzixianshi).to({ y: this.bosszu0.y + wenzixianshi.height * 5 }, 3000)
                .call(function () {
                _this.jinlaicishu3[5] = 1;
                _this.removeChild(wenzixianshi);
            });
        }
        else if (this.jinlaicishu3[6] == 1) {
            this.jinlaicishu3[6] = 0;
            wenzixianshi.x = this.bosszu0.x + this.bosszu0.width / 3 * 1;
            wenzixianshi.y = this.bosszu0.y + this.bosszu0.height + wenzixianshi.height * 6;
            wenzixianshi.qianmianwenzi.text = wenzi1;
            wenzixianshi.qianmianwenzi0.text = wenzi2;
            wenzixianshi.qianmianwenzi0.textColor = yanse;
            egret.Tween.get(wenzixianshi).to({ y: this.bosszu0.y + wenzixianshi.height * 6 }, 3000)
                .call(function () {
                _this.jinlaicishu3[6] = 1;
                _this.removeChild(wenzixianshi);
            });
        }
    };
    //怪3瓢字
    Zhandoujiemian.prototype.guai3piaozi = function (wenzi1, wenzi2, yanse) {
        var _this = this;
        var wenzixianshi = new Zhandoupiaozi();
        this.addChild(wenzixianshi);
        if (this.jinlaicishu4[0] == 1) {
            this.jinlaicishu4[0] = 0;
            wenzixianshi.x = this.bosszu1.x + this.bosszu1.width / 3 * 1;
            wenzixianshi.y = this.bosszu1.y + this.bosszu1.height;
            wenzixianshi.qianmianwenzi.text = wenzi1;
            wenzixianshi.qianmianwenzi0.text = wenzi2;
            wenzixianshi.qianmianwenzi0.textColor = yanse;
            egret.Tween.get(wenzixianshi).to({ y: this.bosszu1.y }, 3000)
                .call(function () {
                _this.jinlaicishu4[0] = 1;
                _this.removeChild(wenzixianshi);
            });
        }
        else if (this.jinlaicishu4[1] == 1) {
            this.jinlaicishu4[1] = 0;
            wenzixianshi.x = this.bosszu1.x + this.bosszu1.width / 3 * 1;
            wenzixianshi.y = this.bosszu1.y + this.bosszu1.height + wenzixianshi.height;
            wenzixianshi.qianmianwenzi.text = wenzi1;
            wenzixianshi.qianmianwenzi0.text = wenzi2;
            wenzixianshi.qianmianwenzi0.textColor = yanse;
            egret.Tween.get(wenzixianshi).to({ y: this.bosszu1.y + wenzixianshi.height }, 3000)
                .call(function () {
                _this.jinlaicishu4[1] = 1;
                _this.removeChild(wenzixianshi);
            });
        }
        else if (this.jinlaicishu4[2] == 1) {
            this.jinlaicishu4[2] = 0;
            wenzixianshi.x = this.bosszu1.x + this.bosszu1.width / 3 * 1;
            wenzixianshi.y = this.bosszu1.y + this.bosszu1.height + wenzixianshi.height * 2;
            wenzixianshi.qianmianwenzi.text = wenzi1;
            wenzixianshi.qianmianwenzi0.text = wenzi2;
            wenzixianshi.qianmianwenzi0.textColor = yanse;
            egret.Tween.get(wenzixianshi).to({ y: this.bosszu1.y + wenzixianshi.height * 2 }, 3000)
                .call(function () {
                _this.jinlaicishu4[2] = 1;
                _this.removeChild(wenzixianshi);
            });
        }
        else if (this.jinlaicishu4[3] == 1) {
            this.jinlaicishu4[3] = 0;
            wenzixianshi.x = this.bosszu1.x + this.bosszu1.width / 3 * 1;
            wenzixianshi.y = this.bosszu1.y + this.bosszu1.height + wenzixianshi.height * 3;
            wenzixianshi.qianmianwenzi.text = wenzi1;
            wenzixianshi.qianmianwenzi0.text = wenzi2;
            wenzixianshi.qianmianwenzi0.textColor = yanse;
            egret.Tween.get(wenzixianshi).to({ y: this.bosszu1.y + wenzixianshi.height * 3 }, 3000)
                .call(function () {
                _this.jinlaicishu4[3] = 1;
                _this.removeChild(wenzixianshi);
            });
        }
        else if (this.jinlaicishu4[4] == 1) {
            this.jinlaicishu4[4] = 0;
            wenzixianshi.x = this.bosszu1.x + this.bosszu1.width / 3 * 1;
            wenzixianshi.y = this.bosszu1.y + this.bosszu1.height + wenzixianshi.height * 4;
            wenzixianshi.qianmianwenzi.text = wenzi1;
            wenzixianshi.qianmianwenzi0.text = wenzi2;
            wenzixianshi.qianmianwenzi0.textColor = yanse;
            egret.Tween.get(wenzixianshi).to({ y: this.bosszu1.y + wenzixianshi.height * 4 }, 3000)
                .call(function () {
                _this.jinlaicishu4[4] = 1;
                _this.removeChild(wenzixianshi);
            });
        }
        else if (this.jinlaicishu4[5] == 1) {
            this.jinlaicishu4[5] = 0;
            wenzixianshi.x = this.bosszu1.x + this.bosszu1.width / 3 * 1;
            wenzixianshi.y = this.bosszu1.y + this.bosszu1.height + wenzixianshi.height * 5;
            wenzixianshi.qianmianwenzi.text = wenzi1;
            wenzixianshi.qianmianwenzi0.text = wenzi2;
            wenzixianshi.qianmianwenzi0.textColor = yanse;
            egret.Tween.get(wenzixianshi).to({ y: this.bosszu1.y + wenzixianshi.height * 5 }, 3000)
                .call(function () {
                _this.jinlaicishu4[5] = 1;
                _this.removeChild(wenzixianshi);
            });
        }
        else if (this.jinlaicishu4[6] == 1) {
            this.jinlaicishu4[6] = 0;
            wenzixianshi.x = this.bosszu1.x + this.bosszu1.width / 3 * 1;
            wenzixianshi.y = this.bosszu1.y + this.bosszu1.height + wenzixianshi.height * 6;
            wenzixianshi.qianmianwenzi.text = wenzi1;
            wenzixianshi.qianmianwenzi0.text = wenzi2;
            wenzixianshi.qianmianwenzi0.textColor = yanse;
            egret.Tween.get(wenzixianshi).to({ y: this.bosszu1.y + wenzixianshi.height * 6 }, 3000)
                .call(function () {
                _this.jinlaicishu4[6] = 1;
                _this.removeChild(wenzixianshi);
            });
        }
    };
    //显示技能动画特效
    Zhandoujiemian.prototype.xianshidonghua = function (mingcheng, gujiamingcheng, ziyuan1, ziyuan2, ziyuan3, duixiang) {
        var _this = this;
        //获取坐标位置
        if (duixiang == 0) {
            var zuobiaox = this.zijizu.x + this.zijizu.width / 3 * 1;
            var zuobiaoy = this.zijizu.y + this.zijizu.height / 2;
            var xianshitexiao = new Zhandoutexiaomokuai(mingcheng, gujiamingcheng, ziyuan1, ziyuan2, ziyuan3, duixiang, zuobiaox, zuobiaoy);
            this.addChild(xianshitexiao);
            egret.Tween.get(this.zijizu).to({ scaleX: 0.9, scaleY: 0.9 }, 200).call(function () {
                egret.Tween.get(_this.zijizu).to({ scaleX: 1, scaleY: 1 }, 200);
            });
        }
        else if (duixiang == 1) {
            var zuobiaox = this.bosszu.x + this.bosszu.width / 3 * 1;
            var zuobiaoy = this.bosszu.y + this.bosszu.height / 2;
            var xianshitexiao = new Zhandoutexiaomokuai(mingcheng, gujiamingcheng, ziyuan1, ziyuan2, ziyuan3, duixiang, zuobiaox, zuobiaoy);
            this.addChild(xianshitexiao);
            egret.Tween.get(this.bosszu).to({ scaleX: 0.9, scaleY: 0.9 }, 200).call(function () {
                egret.Tween.get(_this.bosszu).to({ scaleX: 1, scaleY: 1 }, 200);
            });
        }
        else if (duixiang == 2) {
            var zuobiaox = this.bosszu0.x + this.bosszu0.width / 3 * 1;
            var zuobiaoy = this.bosszu0.y + this.bosszu0.height / 2;
            var xianshitexiao = new Zhandoutexiaomokuai(mingcheng, gujiamingcheng, ziyuan1, ziyuan2, ziyuan3, duixiang, zuobiaox, zuobiaoy);
            this.addChild(xianshitexiao);
            egret.Tween.get(this.bosszu0).to({ scaleX: 0.9, scaleY: 0.9 }, 200).call(function () {
                egret.Tween.get(_this.bosszu0).to({ scaleX: 1, scaleY: 1 }, 200);
            });
        }
        else if (duixiang == 3) {
            var zuobiaox = this.bosszu1.x + this.bosszu1.width / 3 * 1;
            var zuobiaoy = this.bosszu1.y + this.bosszu1.height / 2;
            var xianshitexiao = new Zhandoutexiaomokuai(mingcheng, gujiamingcheng, ziyuan1, ziyuan2, ziyuan3, duixiang, zuobiaox, zuobiaoy);
            this.addChild(xianshitexiao);
            egret.Tween.get(this.bosszu1).to({ scaleX: 0.9, scaleY: 0.9 }, 200).call(function () {
                egret.Tween.get(_this.bosszu1).to({ scaleX: 1, scaleY: 1 }, 200);
            });
        }
        else if (duixiang == 4) {
            var zuobiaox = this.zhandouxianshizu.x;
            var zuobiaoy = this.zhandouxianshizu.y;
            var xianshitexiao = new Zhandoutexiaomokuai(mingcheng, gujiamingcheng, ziyuan1, ziyuan2, ziyuan3, duixiang, zuobiaox, zuobiaoy);
            this.addChild(xianshitexiao);
        }
    };
    Zhandoujiemian.prototype.kaishixinhuihe = function () {
        //开始新的回合
        if (this.renwuhuihekaishi == true) {
            this.renwuhuihekaishi = false;
            this.daojishigundong = new egret.Timer(2000, 1);
            this.daojishigundong.addEventListener(egret.TimerEvent.TIMER, this.shuaxinhuihe, this);
            this.daojishigundong.start();
        }
    };
    //刷新回合
    Zhandoujiemian.prototype.shuaxinhuihe = function () {
        this.zhizhengundong();
        this.shangmiantishixianshi("等待客人发布需求...");
        this.zhandouxianshizu.alpha = 0;
        this.zhandounierong.source = "";
    };
    //刷新自己的血条
    Zhandoujiemian.prototype.shuaxinzijixuetiao = function () {
        var xuetiaokuan = this.zijideqixue * this.zijixuetiaokuan / this.zijideqixueshangxian;
        egret.Tween.get(this.qixuetiao2).to({ width: xuetiaokuan }, 1000);
        this.panduanzijisiwang();
    };
    //判断怪物1是否死亡
    Zhandoujiemian.prototype.panduanguai1siwang = function () {
        var xuetiaokuan = this.guai1qixue * this.guai1xuetiaokuan / this.guai1qixuechushi;
        egret.Tween.get(this.qixuetiao).to({ width: xuetiaokuan }, 1000);
        if (this.guai1qixue <= 0) {
            this.yimanzu.alpha = 1;
            this.jinduzu.alpha = 0;
        }
        this.panduanjiesuan();
    };
    //判断怪物2是否死亡
    Zhandoujiemian.prototype.panduanguai2siwang = function () {
        var xuetiaokuan = this.guai2qixue * this.guai2xuetiaokuan / this.guai2qixuechushi;
        egret.Tween.get(this.qixuetiao0).to({ width: xuetiaokuan }, 1000);
        if (this.guai2qixue <= 0) {
            this.yimanzu0.alpha = 1;
            this.jinduzu0.alpha = 0;
        }
        this.panduanjiesuan();
    };
    //判断怪物3是否死亡
    Zhandoujiemian.prototype.panduanguai3siwang = function () {
        var xuetiaokuan = this.guai3qixue * this.guai3xuetiaokuan / this.guai3qixuechushi;
        egret.Tween.get(this.qixuetiao1).to({ width: xuetiaokuan }, 1000);
        if (this.guai3qixue <= 0) {
            this.yimanzu1.alpha = 1;
            this.jinduzu1.alpha = 0;
        }
        this.panduanjiesuan();
    };
    //判断自己是否死亡
    Zhandoujiemian.prototype.panduanzijisiwang = function () {
        if (this.zijideqixue <= 0) {
            this.jinduzu2.alpha = 0;
        }
        this.panduanjiesuan();
    };
    //自身BUFF显示
    Zhandoujiemian.prototype.zijibuffxianshi = function () {
        //先初始化各项BUFF数据
        this.buff_1_2.source = "";
        this.buff_1_wenzi2.text = "";
        this.buff_2_2.source = "";
        this.buff_2_wenzi2.text = "";
        this.buff_3_2.source = "";
        this.buff_3_wenzi2.text = "";
        this.buff_4_2.source = "";
        this.buff_4_wenzi2.text = "";
        //显示BUFF逻辑
        if (this.zijibuff.length > 0) {
            for (var i = 0; i < Gerenshuxing.jinengbiao.length; i++) {
                for (var k = 0; k < this.zijibuff.length; k++) {
                    switch (k) {
                        case 0:
                            if (this.zijibuff[0].id == Gerenshuxing.jinengbiao[i].id) {
                                this.buff_1_2.source = Gerenshuxing.jinengbiao[i].jinengicon;
                                this.buff_1_wenzi2.text = this.zijibuff[0].chixu;
                            }
                            break;
                        case 1:
                            if (this.zijibuff[1].id == Gerenshuxing.jinengbiao[i].id) {
                                this.buff_2_2.source = Gerenshuxing.jinengbiao[i].jinengicon;
                                this.buff_2_wenzi2.text = this.zijibuff[1].chixu;
                            }
                            break;
                        case 2:
                            if (this.zijibuff[2].id == Gerenshuxing.jinengbiao[i].id) {
                                this.buff_3_2.source = Gerenshuxing.jinengbiao[i].jinengicon;
                                this.buff_3_wenzi2.text = this.zijibuff[2].chixu;
                            }
                            break;
                        case 3:
                            if (this.zijibuff[3].id == Gerenshuxing.jinengbiao[i].id) {
                                this.buff_4_2.source = Gerenshuxing.jinengbiao[i].jinengicon;
                                this.buff_4_wenzi2.text = this.zijibuff[3].chixu;
                            }
                            break;
                    }
                }
            }
        }
    };
    //怪物1buff显示
    Zhandoujiemian.prototype.guai1buffxianshi = function () {
        //先初始化各项BUFF数据
        this.buff_1_.source = "";
        this.buff_1_wenzi.text = "";
        this.buff_2_.source = "";
        this.buff_2_wenzi.text = "";
        this.buff_3_.source = "";
        this.buff_3_wenzi.text = "";
        this.buff_4_.source = "";
        this.buff_4_wenzi.text = "";
        //显示BUFF逻辑
        if (this.guai1buff.length > 0) {
            for (var i = 0; i < Gerenshuxing.jinengbiao.length; i++) {
                for (var k = 0; k < this.guai1buff.length; k++) {
                    switch (k) {
                        case 0:
                            if (this.guai1buff[0].id == Gerenshuxing.jinengbiao[i].id) {
                                this.buff_1_.source = Gerenshuxing.jinengbiao[i].jinengicon;
                                this.buff_1_wenzi.text = this.guai1buff[0].chixu;
                            }
                            break;
                        case 1:
                            if (this.guai1buff[1].id == Gerenshuxing.jinengbiao[i].id) {
                                this.buff_2_.source = Gerenshuxing.jinengbiao[i].jinengicon;
                                this.buff_2_wenzi.text = this.guai1buff[1].chixu;
                            }
                            break;
                        case 2:
                            if (this.guai1buff[2].id == Gerenshuxing.jinengbiao[i].id) {
                                this.buff_3_.source = Gerenshuxing.jinengbiao[i].jinengicon;
                                this.buff_3_wenzi.text = this.guai1buff[2].chixu;
                            }
                            break;
                        case 3:
                            if (this.guai1buff[3].id == Gerenshuxing.jinengbiao[i].id) {
                                this.buff_4_.source = Gerenshuxing.jinengbiao[i].jinengicon;
                                this.buff_4_wenzi.text = this.guai1buff[3].chixu;
                            }
                            break;
                    }
                }
            }
        }
    };
    //怪物2buff显示
    Zhandoujiemian.prototype.guai2buffxianshi = function () {
        //先初始化各项BUFF数据
        this.buff_1_0.source = "";
        this.buff_1_wenzi0.text = "";
        this.buff_2_0.source = "";
        this.buff_2_wenzi0.text = "";
        this.buff_3_0.source = "";
        this.buff_3_wenzi0.text = "";
        this.buff_4_0.source = "";
        this.buff_4_wenzi0.text = "";
        //显示BUFF逻辑
        if (this.guai2buff.length > 0) {
            for (var i = 0; i < Gerenshuxing.jinengbiao.length; i++) {
                for (var k = 0; k < this.guai2buff.length; k++) {
                    switch (k) {
                        case 0:
                            if (this.guai2buff[0].id == Gerenshuxing.jinengbiao[i].id) {
                                this.buff_1_0.source = Gerenshuxing.jinengbiao[i].jinengicon;
                                this.buff_1_wenzi0.text = this.guai2buff[0].chixu;
                            }
                            break;
                        case 1:
                            if (this.guai2buff[1].id == Gerenshuxing.jinengbiao[i].id) {
                                this.buff_2_0.source = Gerenshuxing.jinengbiao[i].jinengicon;
                                this.buff_2_wenzi0.text = this.guai2buff[1].chixu;
                            }
                            break;
                        case 2:
                            if (this.guai2buff[2].id == Gerenshuxing.jinengbiao[i].id) {
                                this.buff_3_0.source = Gerenshuxing.jinengbiao[i].jinengicon;
                                this.buff_3_wenzi0.text = this.guai2buff[2].chixu;
                            }
                            break;
                        case 3:
                            if (this.guai2buff[3].id == Gerenshuxing.jinengbiao[i].id) {
                                this.buff_4_0.source = Gerenshuxing.jinengbiao[i].jinengicon;
                                this.buff_4_wenzi0.text = this.guai2buff[3].chixu;
                            }
                            break;
                    }
                }
            }
        }
    };
    //怪物3buff显示
    Zhandoujiemian.prototype.guai3buffxianshi = function () {
        //先初始化各项BUFF数据
        this.buff_1_1.source = "";
        this.buff_1_wenzi1.text = "";
        this.buff_2_1.source = "";
        this.buff_2_wenzi1.text = "";
        this.buff_3_1.source = "";
        this.buff_3_wenzi1.text = "";
        this.buff_4_1.source = "";
        this.buff_4_wenzi1.text = "";
        //显示BUFF逻辑
        if (this.guai3buff.length > 0) {
            for (var i = 0; i < Gerenshuxing.jinengbiao.length; i++) {
                for (var k = 0; k < this.guai3buff.length; k++) {
                    switch (k) {
                        case 0:
                            if (this.guai3buff[0].id == Gerenshuxing.jinengbiao[i].id) {
                                this.buff_1_1.source = Gerenshuxing.jinengbiao[i].jinengicon;
                                this.buff_1_wenzi1.text = this.guai3buff[0].chixu;
                            }
                            break;
                        case 1:
                            if (this.guai3buff[1].id == Gerenshuxing.jinengbiao[i].id) {
                                this.buff_2_1.source = Gerenshuxing.jinengbiao[i].jinengicon;
                                this.buff_2_wenzi1.text = this.guai3buff[1].chixu;
                            }
                            break;
                        case 2:
                            if (this.guai3buff[2].id == Gerenshuxing.jinengbiao[i].id) {
                                this.buff_3_1.source = Gerenshuxing.jinengbiao[i].jinengicon;
                                this.buff_3_wenzi1.text = this.guai3buff[2].chixu;
                            }
                            break;
                        case 3:
                            if (this.guai3buff[3].id == Gerenshuxing.jinengbiao[i].id) {
                                this.buff_4_1.source = Gerenshuxing.jinengbiao[i].jinengicon;
                                this.buff_4_wenzi1.text = this.guai3buff[3].chixu;
                            }
                            break;
                    }
                }
            }
        }
    };
    //处理自己的buff效果
    Zhandoujiemian.prototype.chulizijidebuff = function () {
        //		console.log(this.zijibuff);
        //速度值需要重新初始化，否则会被减速BUFF影响
        this.zijidesudu = Gerenshuxing.gerenxingzhi;
        this.zijidefangyu = Gerenshuxing.gerenyizhi;
        //因为降低四抗，所以四抗属性也需要初始化
        if (this.zijibuff.length > 0) {
            //到回合开始，先触发BUFF
            for (var i = 0; i < this.zijibuff.length; i++) {
                if (this.zijibuff[i].id == "20016") {
                    this.zijidesudu = Math.floor(this.zijidesudu - parseInt(this.zijibuff[i].xiaoguo));
                    this.zhandoutexiao("jiansu", parseInt(this.zijibuff[i].xiaoguo), 0);
                }
                if (this.zijibuff[i].id == "20017") {
                    this.zhandoutexiao("chenmo", 0, 0);
                    this.zhizhengundong();
                }
                if (this.zijibuff[i].id == "20020") {
                    this.zhandoutexiao("huiling", 0, 0);
                    this.qidianshu += 2;
                }
                if (this.zijibuff[i].id == "20023") {
                    this.zijidefangyu = Math.floor(this.zijidefangyu + this.zijidefangyu * parseInt(this.zijibuff[i].xiaoguo) / 100);
                    this.zhandoutexiao("jiafang", parseInt(this.zijibuff[i].xiaoguo), 0);
                    this.zijiyizhilishua();
                }
                if (this.zijibuff[i].id == "20024") {
                    this.zijidesudu = Math.floor(this.zijidesudu + this.zijidesudu * parseInt(this.zijibuff[i].xiaoguo) / 100);
                    this.zhandoutexiao("jiasu", parseInt(this.zijibuff[i].xiaoguo), 0);
                }
            }
            //BUFF到期需要拿掉
            for (var i = 0; i < this.zijibuff.length; i++) {
                this.zijibuff[i].chixu = parseInt(this.zijibuff[i].chixu) - 1;
                if (this.zijibuff[i].chixu <= 0) {
                    this.zijibuff.splice(i, 1);
                    i = i - 1;
                }
            }
        }
        this.zijibuffxianshi();
    };
    //处理怪物1的buff效果
    Zhandoujiemian.prototype.chuliguai1debuff = function () {
        //		console.log(this.guai1buff);
        //速度值需要重新初始化，否则会被减速BUFF影响
        this.guai1sudu = this.guai1suduchushi;
        this.guai1gongji = this.guai1gongjichushi;
        if (this.guai1buff.length > 0) {
            //到回合开始，先触发BUFF
            for (var i = 0; i < this.guai1buff.length; i++) {
                if (this.guai1buff[i].id == "20016") {
                    this.guai1sudu = Math.floor(this.guai1sudu - parseInt(this.guai1buff[i].xiaoguo));
                    this.zhandoutexiao("jiansu", parseInt(this.guai1buff[i].xiaoguo), 1);
                }
                if (this.guai1buff[i].id == "20017") {
                    this.zhandoutexiao("chenmo", 0, 1);
                    this.zhizhengundong();
                }
                if (this.guai1buff[i].id == "20022") {
                    this.guai1gongji = Math.floor(this.guai1gongji - this.guai1gongji * parseInt(this.guai1buff[i].xiaoguo) / 100);
                    this.zhandoutexiao("jiangongji", parseInt(this.guai1buff[i].xiaoguo), 1);
                }
                if (this.guai1buff[i].id == "20021") {
                    this.guai1qixue = Math.floor(this.guai1qixue - this.guai1qixue * parseInt(this.guai1buff[i].xiaoguo) / 100);
                    this.zhandoutexiao("du", parseInt(this.guai1buff[i].xiaoguo), 1);
                    this.panduanguai1siwang();
                }
            }
            //BUFF到期需要拿掉
            for (var i = 0; i < this.guai1buff.length; i++) {
                this.guai1buff[i].chixu = parseInt(this.guai1buff[i].chixu) - 1;
                if (this.guai1buff[i].chixu <= 0) {
                    this.guai1buff.splice(i, 1);
                    i = i - 1;
                }
            }
        }
        this.guai1buffxianshi();
    };
    //处理怪物2的buff效果
    Zhandoujiemian.prototype.chuliguai2debuff = function () {
        //		console.log(this.guai2buff);
        //速度值需要重新初始化，否则会被减速BUFF影响
        this.guai2sudu = this.guai2suduchushi;
        this.guai2gongji = this.guai2gongjichushi;
        if (this.guai2buff.length > 0) {
            //到回合开始，先触发BUFF
            for (var i = 0; i < this.guai2buff.length; i++) {
                if (this.guai2buff[i].id == "20016") {
                    this.guai2sudu = Math.floor(this.guai2sudu - parseInt(this.guai2buff[i].xiaoguo));
                    this.zhandoutexiao("jiansu", parseInt(this.guai2buff[i].xiaoguo), 2);
                }
                if (this.guai2buff[i].id == "20017") {
                    this.zhandoutexiao("chenmo", 0, 2);
                    this.zhizhengundong();
                }
                if (this.guai2buff[i].id == "20022") {
                    this.guai2gongji = Math.floor(this.guai2gongji - this.guai2gongji * parseInt(this.guai2buff[i].xiaoguo) / 100);
                    this.zhandoutexiao("jiangongji", parseInt(this.guai2buff[i].xiaoguo), 2);
                }
                if (this.guai2buff[i].id == "20021") {
                    this.guai2qixue = Math.floor(this.guai2qixue - this.guai2qixue * parseInt(this.guai2buff[i].xiaoguo) / 100);
                    this.zhandoutexiao("du", parseInt(this.guai2buff[i].xiaoguo), 2);
                    this.panduanguai2siwang();
                }
            }
            //BUFF到期需要拿掉
            for (var i = 0; i < this.guai2buff.length; i++) {
                this.guai2buff[i].chixu = parseInt(this.guai2buff[i].chixu) - 1;
                if (this.guai2buff[i].chixu <= 0) {
                    this.guai2buff.splice(i, 1);
                    i = i - 1;
                }
            }
        }
        this.guai2buffxianshi();
    };
    //处理怪物3的buff效果
    Zhandoujiemian.prototype.chuliguai3debuff = function () {
        //		console.log(this.guai3buff);
        //速度值需要重新初始化，否则会被减速BUFF影响
        this.guai3sudu = this.guai3suduchushi;
        this.guai3gongji = this.guai3gongjichushi;
        if (this.guai3buff.length > 0) {
            //到回合开始，先触发BUFF
            for (var i = 0; i < this.guai3buff.length; i++) {
                if (this.guai3buff[i].id == "20016") {
                    this.guai3sudu = Math.floor(this.guai3sudu - parseInt(this.guai3buff[i].xiaoguo));
                    this.zhandoutexiao("jiansu", parseInt(this.guai3buff[i].xiaoguo), 3);
                }
                if (this.guai3buff[i].id == "20017") {
                    this.zhandoutexiao("chenmo", 0, 3);
                    this.zhizhengundong();
                }
                if (this.guai3buff[i].id == "20022") {
                    this.guai3gongji = Math.floor(this.guai3gongji - this.guai3gongji * parseInt(this.guai3buff[i].xiaoguo) / 100);
                    this.zhandoutexiao("jiangongji", parseInt(this.guai3buff[i].xiaoguo), 3);
                }
                if (this.guai3buff[i].id == "20021") {
                    this.guai3qixue = Math.floor(this.guai3qixue - this.guai3qixue * parseInt(this.guai3buff[i].xiaoguo) / 100);
                    this.zhandoutexiao("du", parseInt(this.guai3buff[i].xiaoguo), 3);
                    this.panduanguai3siwang();
                }
            }
            //BUFF到期需要拿掉
            for (var i = 0; i < this.guai3buff.length; i++) {
                this.guai3buff[i].chixu = parseInt(this.guai3buff[i].chixu) - 1;
                if (this.guai3buff[i].chixu <= 0) {
                    this.guai3buff.splice(i, 1);
                    i = i - 1;
                }
            }
        }
        this.guai3buffxianshi();
    };
    //追击特效特殊处理
    Zhandoujiemian.prototype.zhuijitexiao = function (caiid, qishiren, shoujiren, shanghai) {
        var _this = this;
        this.zhandoutexiao("zhuiji", 0, 4);
        var shipubiao = RES.getRes("shipubiao_json");
        var xianshishangcaitu = "";
        for (var h = 0; h < shipubiao.length; h++) {
            if (shipubiao[h].id == this.benhuihechucaiid) {
                xianshishangcaitu = shipubiao[h].id + "_png";
                break;
            }
        }
        var zhandoushangcai = new egret.Bitmap();
        var zhandoutupian = RES.getRes(xianshishangcaitu);
        zhandoushangcai.texture = zhandoutupian;
        this.addChild(zhandoushangcai);
        if (qishiren == 1) {
            zhandoushangcai.x = this.bosszu.x + this.bosszu.width / 3 * 1;
            zhandoushangcai.y = this.bosszu.y + this.bosszu.height / 2;
        }
        else if (qishiren == 2) {
            zhandoushangcai.x = this.bosszu0.x + this.bosszu0.width / 3 * 1;
            zhandoushangcai.y = this.bosszu0.y + this.bosszu0.height / 2;
        }
        else if (qishiren == 3) {
            zhandoushangcai.x = this.bosszu1.x + this.bosszu1.width / 3 * 1;
            zhandoushangcai.y = this.bosszu1.y + this.bosszu1.height / 2;
        }
        if (shoujiren == 1) {
            zhandoushangcai.scaleX = 0.4;
            zhandoushangcai.scaleY = 0.4;
            egret.Tween.get(zhandoushangcai).to({ scaleX: 0.6, scaleY: 0.6, x: this.bosszu.x + this.bosszu.width / 3 * 1, y: this.bosszu.y + this.bosszu.height / 2 }, 1000).call(function () {
                _this.removeChild(zhandoushangcai);
                _this.zhandoutexiao("pugong", shanghai, 1);
            });
        }
        else if (shoujiren == 2) {
            zhandoushangcai.scaleX = 0.4;
            zhandoushangcai.scaleY = 0.4;
            egret.Tween.get(zhandoushangcai).to({ scaleX: 0.6, scaleY: 0.6, x: this.bosszu0.x + this.bosszu0.width / 3 * 1, y: this.bosszu0.y + this.bosszu0.height / 2 }, 1000).call(function () {
                _this.removeChild(zhandoushangcai);
                _this.zhandoutexiao("pugong", shanghai, 2);
            });
        }
        else if (shoujiren == 3) {
            zhandoushangcai.scaleX = 0.4;
            zhandoushangcai.scaleY = 0.4;
            egret.Tween.get(zhandoushangcai).to({ scaleX: 0.6, scaleY: 0.6, x: this.bosszu1.x + this.bosszu1.width / 3 * 1, y: this.bosszu1.y + this.bosszu1.height / 2 }, 1000).call(function () {
                _this.removeChild(zhandoushangcai);
                _this.zhandoutexiao("pugong", shanghai, 3);
            });
        }
    };
    //自己的回合数显示
    Zhandoujiemian.prototype.huiheshuxianshi = function () {
        this.huiheshu.text = "" + this.zijihuiheshu;
    };
    //判断结算输赢
    Zhandoujiemian.prototype.panduanjiesuan = function () {
        var _this = this;
        if (this.guai1qixue <= 0 && this.guai2qixue <= 0 && this.guai3qixue <= 0) {
            //怪物全部死亡，自己获胜
            this.shangmiantishizu.alpha = 0;
            this.xiamiantishizu.alpha = 0;
            this.bisaizhuangtaitu.alpha = 1;
            this.bisaizhuangtaitu.source = "img_bipinjiesu_png";
            egret.Tween.get(this.bisaizhuangtaitu).to({ alpha: 0.6 }, 3000).call(function () {
                _this.bisaizhuangtaitu.alpha = 0;
                _this.bisaizhuangtaitu.source = "";
                _this.zhandoujiesu = true;
                _this.shenglijiemian = new Pengrenfankuiui();
                _this.addChild(_this.shenglijiemian);
                _this.shenglijiemian.img_jindutiaogundong.source = "";
                _this.shenglijiemian.levelwenzi.text = "";
                _this.shenglijiemian.img_jindutiaobeijing.source = "";
                _this.shenglijiemian.huodejingyanwenzi.text = "";
                _this.shenglijiemian.img_jianglibiaoti0.source = "img_pengrenchenggong_png";
                _this.shenglijiemian.dengjitishi.text = "食客非常满意，获得奖励！";
                _this.shenglijianglidaoju();
                _this.shenglijiemian.qudinganniu0.enabled = true;
                _this.shenglijiemian.qudinganniu0.addEventListener(egret.TouchEvent.TOUCH_TAP, _this.guanbishengli, _this);
            });
        }
        else if (this.guai1qixue >= 0 || this.guai2qixue >= 0 || this.guai3qixue >= 0) {
            if (this.zijideqixue <= 0) {
                //怪物没有死，但自己已经没有血量，则自己失败
                this.shangmiantishizu.alpha = 0;
                this.xiamiantishizu.alpha = 0;
                this.bisaizhuangtaitu.alpha = 1;
                this.bisaizhuangtaitu.source = "img_bipinjiesu_png";
                egret.Tween.get(this.bisaizhuangtaitu).to({ alpha: 0.6 }, 3000).call(function () {
                    _this.bisaizhuangtaitu.alpha = 0;
                    _this.bisaizhuangtaitu.source = "";
                    _this.zhandoujiesu = true;
                    _this.shenglijiemian = new Pengrenfankuiui();
                    _this.addChild(_this.shenglijiemian);
                    _this.shenglijiemian.img_jindutiaogundong.source = "";
                    _this.shenglijiemian.levelwenzi.text = "";
                    _this.shenglijiemian.img_jindutiaobeijing.source = "";
                    _this.shenglijiemian.huodejingyanwenzi.text = "";
                    _this.shenglijiemian.img_jianglibiaoti0.source = "img_pengrenshibai_png";
                    _this.shenglijiemian.dengjitishi.text = "未能让食客得到满足!";
                    _this.shibaijianglidaoju();
                    _this.shenglijiemian.qudinganniu0.enabled = true;
                    _this.shenglijiemian.qudinganniu0.addEventListener(egret.TouchEvent.TOUCH_TAP, _this.guanbishengli, _this);
                });
            }
        }
        else if (this.houxuancaizu.length <= 0 && this.di1caiid == "0" && this.di2caiid == "0" && this.di3caiid == "0" && this.di4caiid == "0") {
            //自己食盒没有菜品，并且克操作菜品也没有，则自己失败
            this.shangmiantishizu.alpha = 0;
            this.xiamiantishizu.alpha = 0;
            this.bisaizhuangtaitu.alpha = 1;
            this.bisaizhuangtaitu.source = "img_bipinjiesu_png";
            egret.Tween.get(this.bisaizhuangtaitu).to({ alpha: 0.6 }, 3000).call(function () {
                _this.bisaizhuangtaitu.alpha = 0;
                _this.bisaizhuangtaitu.source = "";
                _this.zhandoujiesu = true;
                _this.shenglijiemian = new Pengrenfankuiui();
                _this.addChild(_this.shenglijiemian);
                _this.shenglijiemian.img_jindutiaogundong.source = "";
                _this.shenglijiemian.levelwenzi.text = "";
                _this.shenglijiemian.img_jindutiaobeijing.source = "";
                _this.shenglijiemian.huodejingyanwenzi.text = "";
                _this.shenglijiemian.img_jianglibiaoti0.source = "img_pengrenshibai_png";
                _this.shenglijiemian.dengjitishi.text = "未能让食客得到满足!";
                _this.shibaijianglidaoju();
                _this.shenglijiemian.qudinganniu0.enabled = true;
                _this.shenglijiemian.qudinganniu0.addEventListener(egret.TouchEvent.TOUCH_TAP, _this.guanbishengli, _this);
            });
        }
    };
    //关闭输赢界面
    Zhandoujiemian.prototype.guanbishengli = function () {
        this.removeChild(this.shenglijiemian);
        this.guanbijiemian();
    };
    //拆解奖励，判断奖励类型和数量
    Zhandoujiemian.prototype.shenglijianglidaoju = function () {
        if (this.jianglileixing == "putongjiangli") {
            var suijishengchengshu = Math.floor(Math.random() * 10000) + 1;
            var jiangliid = "1";
            var jianglishuliang = 1;
            for (var i = 0; i < Gerenshuxing.putongjiangchi.length; i++) {
                if (suijishengchengshu >= parseInt(Gerenshuxing.putongjiangchi[Gerenshuxing.putongjiangchi.length - 1].jilv)) {
                    jiangliid = Gerenshuxing.putongjiangchi[Gerenshuxing.putongjiangchi.length - 1].id;
                    break;
                }
                else {
                    if (i == 0 && suijishengchengshu < parseInt(Gerenshuxing.putongjiangchi[i].jilv)) {
                        jiangliid = Gerenshuxing.putongjiangchi[i].id;
                        break;
                    }
                    else {
                        if (suijishengchengshu >= parseInt(Gerenshuxing.putongjiangchi[i].jilv) && suijishengchengshu < parseInt(Gerenshuxing.putongjiangchi[i + 1].jilv)) {
                            jiangliid = Gerenshuxing.putongjiangchi[i].id;
                            break;
                        }
                    }
                }
            }
            if (jiangliid == "1") {
                var suijishi = Math.floor(Math.random() * (parseInt(this.guai1dengji) * 10)) + 100;
                jianglishuliang = suijishi;
            }
            else if (jiangliid == "5") {
                var suijishi = Math.floor(Math.random() * (parseInt(this.guai1dengji) * 2)) + 20;
                jianglishuliang = suijishi;
            }
            else {
                jianglishuliang = 1;
            }
            this.jianglixianshiluoji(jiangliid, jianglishuliang);
        }
    };
    //失败奖励道具
    Zhandoujiemian.prototype.shibaijianglidaoju = function () {
        var jianglileixing = "1";
        var jianglishuliang = 1;
        var suijishi = Math.floor(Math.random() * (parseInt(this.guai1dengji) * 3)) + 30;
        jianglishuliang = suijishi;
        this.jianglixianshiluoji(jianglileixing, jianglishuliang);
    };
    //胜利奖励道具
    Zhandoujiemian.prototype.jianglixianshiluoji = function (leixing, shuliang) {
        console.log(leixing, shuliang);
        Weblianjie.fasongshuju("code:085", "{" + '"uid"' + ":" + '"' + Gerenshuxing.uid + '"' + ","
            + '"kouchuleixing"' + ":" + '"0"' + ","
            + '"kouchushuliang"' + ":" + '"0"' + ","
            + '"leixing"' + ":" + '"' + leixing + '"' + ","
            + '"shuliang"' + ":" + '"' + shuliang + '"' + ","
            + '"beishu"' + ":" + '"1"' + "}");
        switch (leixing) {
            case "0":
                this.shenglijiemian.jiangliicon0.source = "";
                this.shenglijiemian.jianglishuliang0.text = "";
                break;
            case "1":
                this.shenglijiemian.jiangliicon0.source = "img_qian_png";
                this.shenglijiemian.jianglishuliang0.text = "+ " + shuliang;
                break;
            case "2":
                this.shenglijiemian.jiangliicon0.source = "img_jiating_png";
                this.shenglijiemian.jianglishuliang0.text = "+ " + shuliang;
                break;
            case "3":
                this.shenglijiemian.jiangliicon0.source = "img_jiankang_png";
                this.shenglijiemian.jianglishuliang0.text = "+ " + shuliang;
                break;
            case "4":
                this.shenglijiemian.jiangliicon0.source = "img_xinqing_png";
                this.shenglijiemian.jianglishuliang0.text = "+ " + shuliang;
                break;
            case "5":
                this.shenglijiemian.jiangliicon0.source = "img_xingfu_png";
                this.shenglijiemian.jianglishuliang0.text = "+ " + shuliang;
                break;
            case "6":
                this.shenglijiemian.jiangliicon0.source = "img_daerzibiaoshi_png";
                this.shenglijiemian.jianglishuliang0.text = "+ " + shuliang;
                break;
            case "7":
                this.shenglijiemian.jiangliicon0.source = "img_xiaoerzibiaoshi_png";
                this.shenglijiemian.jianglishuliang0.text = "+ " + shuliang;
                break;
            case "8":
                this.shenglijiemian.jiangliicon0.source = "img_xifubiaoshi_png";
                this.shenglijiemian.jianglishuliang0.text = "+ " + shuliang;
                break;
            case "9":
                this.shenglijiemian.jiangliicon0.source = "img_sunnvbiaoshi_png";
                this.shenglijiemian.jianglishuliang0.text = "+ " + shuliang;
                break;
            case "10":
                this.shenglijiemian.jiangliicon0.source = "img_daerzibiaoshi_png";
                this.shenglijiemian.jianglishuliang0.text = "+ " + shuliang;
                break;
            case "11":
                this.shenglijiemian.jiangliicon0.source = "img_xiaoerzibiaoshi_png";
                this.shenglijiemian.jianglishuliang0.text = "+ " + shuliang;
                break;
            case "12":
                this.shenglijiemian.jiangliicon0.source = "img_xifubiaoshi_png";
                this.shenglijiemian.jianglishuliang0.text = "+ " + shuliang;
                break;
            case "13":
                this.shenglijiemian.jiangliicon0.source = "img_sunnvbiaoshi_png";
                this.shenglijiemian.jianglishuliang0.text = "+ " + shuliang;
                break;
            default:
                if (parseInt(leixing) >= 1000 && parseInt(leixing) < 10000) {
                    this.dajianglipuxianshi(leixing, shuliang);
                }
                else if (parseInt(leixing) >= 10000) {
                    this.dajianglidaojuxianshi(leixing, shuliang);
                }
                ;
                break;
        }
    };
    Zhandoujiemian.prototype.dajianglipuxianshi = function (leixing, shuliang) {
        var caipubiao = RES.getRes("shipubiao_json");
        for (var i = 0; i < caipubiao.length; i++) {
            if (caipubiao[i].id == leixing) {
                this.shenglijiemian.jiangliicon0.source = caipubiao[i].id + "_png";
                this.shenglijiemian.jianglishuliang0.text = "熟练度 + " + shuliang;
                break;
            }
        }
    };
    Zhandoujiemian.prototype.dajianglidaojuxianshi = function (leixing, shuliang) {
        var daojubiao = Gerenshuxing.daojubiao;
        for (var i = 0; i < daojubiao.length; i++) {
            if (daojubiao[i].id == leixing) {
                this.shenglijiemian.jiangliicon0.source = daojubiao[i].xianshiicon;
                this.shenglijiemian.jianglishuliang0.text = "X " + shuliang;
                break;
            }
        }
    };
    //放弃出牌
    Zhandoujiemian.prototype.fangqichupai = function () {
        this.zidongzhandouanniu.alpha = 0;
        this.zidongzhandouanniu.enabled = false;
        this.xiamiantishizu.alpha = 0;
        this.daojishitishizu.alpha = 0;
        this.shangmiantishizu.alpha = 0;
        //隐藏上菜按钮
        this.shangcai1anniu.enabled = false;
        this.shangcai2anniu.enabled = false;
        this.shangcai3anniu.enabled = false;
        this.shangcai4anniu.enabled = false;
        this.kaishixinhuihe();
    };
    //点击个人属性查看BUFF界面
    Zhandoujiemian.prototype.chakanzijibuff = function () {
        if (this.zijibuff.length > 0) {
            this.buffjiemian = new Zhandoubuffui();
            this.addChild(this.buffjiemian);
            for (var i = 0; i < this.zijibuff.length; i++) {
                for (var h = 0; h < Gerenshuxing.jinengbiao.length; h++) {
                    if (this.zijibuff[i].id == Gerenshuxing.jinengbiao[h].id) {
                        this.buffjiemian.chushihua(i, Gerenshuxing.jinengbiao[h].mingcheng, this.zijibuff[i].chixu, Gerenshuxing.jinengbiao[h].jinengicon, Gerenshuxing.jinengbiao[h].bufftishi);
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
    Zhandoujiemian.prototype.chakanguai1buff = function () {
        if (this.guai1buff.length > 0) {
            this.buffjiemian = new Zhandoubuffui();
            this.addChild(this.buffjiemian);
            for (var i = 0; i < this.guai1buff.length; i++) {
                for (var h = 0; h < Gerenshuxing.jinengbiao.length; h++) {
                    if (this.guai1buff[i].id == Gerenshuxing.jinengbiao[h].id) {
                        this.buffjiemian.chushihua(i, Gerenshuxing.jinengbiao[h].mingcheng, this.guai1buff[i].chixu, Gerenshuxing.jinengbiao[h].jinengicon, Gerenshuxing.jinengbiao[h].bufftishi);
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
    Zhandoujiemian.prototype.chakanguai2buff = function () {
        if (this.guai2buff.length > 0) {
            this.buffjiemian = new Zhandoubuffui();
            this.addChild(this.buffjiemian);
            for (var i = 0; i < this.guai2buff.length; i++) {
                for (var h = 0; h < Gerenshuxing.jinengbiao.length; h++) {
                    if (this.guai2buff[i].id == Gerenshuxing.jinengbiao[h].id) {
                        this.buffjiemian.chushihua(i, Gerenshuxing.jinengbiao[h].mingcheng, this.guai2buff[i].chixu, Gerenshuxing.jinengbiao[h].jinengicon, Gerenshuxing.jinengbiao[h].bufftishi);
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
    Zhandoujiemian.prototype.chakanguai3buff = function () {
        if (this.guai3buff.length > 0) {
            this.buffjiemian = new Zhandoubuffui();
            this.addChild(this.buffjiemian);
            for (var i = 0; i < this.guai3buff.length; i++) {
                for (var h = 0; h < Gerenshuxing.jinengbiao.length; h++) {
                    if (this.guai3buff[i].id == Gerenshuxing.jinengbiao[h].id) {
                        this.buffjiemian.chushihua(i, Gerenshuxing.jinengbiao[h].mingcheng, this.guai3buff[i].chixu, Gerenshuxing.jinengbiao[h].jinengicon, Gerenshuxing.jinengbiao[h].bufftishi);
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
    Zhandoujiemian.prototype.chakancai1tips = function () {
        if (this.di1caiid != "0") {
            this.zhandoucaipintips = new Zhandoucaipinshuxingui();
            this.addChild(this.zhandoucaipintips);
            this.zhandoucaipintips.chushihua(this.di1caiid, this.di1caiqidian);
            this.zhandoucaipintips.guanbianniu0.enabled = true;
            this.zhandoucaipintips.guanbianniu0.addEventListener(egret.TouchEvent.TOUCH_TAP, this.guanbicaitips, this);
            this.zhandoucaipintips.img_heisezhezao0.touchEnabled = true;
            this.zhandoucaipintips.img_heisezhezao0.addEventListener(egret.TouchEvent.TOUCH_TAP, this.guanbicaitips, this);
        }
    };
    //点击查看菜2tips
    Zhandoujiemian.prototype.chakancai2tips = function () {
        if (this.di2caiid != "0") {
            this.zhandoucaipintips = new Zhandoucaipinshuxingui();
            this.addChild(this.zhandoucaipintips);
            this.zhandoucaipintips.chushihua(this.di2caiid, this.di2caiqidian);
            this.zhandoucaipintips.guanbianniu0.enabled = true;
            this.zhandoucaipintips.guanbianniu0.addEventListener(egret.TouchEvent.TOUCH_TAP, this.guanbicaitips, this);
            this.zhandoucaipintips.img_heisezhezao0.touchEnabled = true;
            this.zhandoucaipintips.img_heisezhezao0.addEventListener(egret.TouchEvent.TOUCH_TAP, this.guanbicaitips, this);
        }
    };
    //点击查看菜3tips
    Zhandoujiemian.prototype.chakancai3tips = function () {
        if (this.di3caiid != "0") {
            this.zhandoucaipintips = new Zhandoucaipinshuxingui();
            this.addChild(this.zhandoucaipintips);
            this.zhandoucaipintips.chushihua(this.di3caiid, this.di3caiqidian);
            this.zhandoucaipintips.guanbianniu0.enabled = true;
            this.zhandoucaipintips.guanbianniu0.addEventListener(egret.TouchEvent.TOUCH_TAP, this.guanbicaitips, this);
            this.zhandoucaipintips.img_heisezhezao0.touchEnabled = true;
            this.zhandoucaipintips.img_heisezhezao0.addEventListener(egret.TouchEvent.TOUCH_TAP, this.guanbicaitips, this);
        }
    };
    //点击查看菜4tips
    Zhandoujiemian.prototype.chakancai4tips = function () {
        if (this.di4caiid != "0") {
            this.zhandoucaipintips = new Zhandoucaipinshuxingui();
            this.addChild(this.zhandoucaipintips);
            this.zhandoucaipintips.chushihua(this.di4caiid, this.di4caiqidian);
            this.zhandoucaipintips.guanbianniu0.enabled = true;
            this.zhandoucaipintips.guanbianniu0.addEventListener(egret.TouchEvent.TOUCH_TAP, this.guanbicaitips, this);
            this.zhandoucaipintips.img_heisezhezao0.touchEnabled = true;
            this.zhandoucaipintips.img_heisezhezao0.addEventListener(egret.TouchEvent.TOUCH_TAP, this.guanbicaitips, this);
        }
    };
    //关闭BUFF界面
    Zhandoujiemian.prototype.guanbijiemain = function () {
        this.removeChild(this.buffjiemian);
    };
    //关闭菜品查看界面
    Zhandoujiemian.prototype.guanbicaitips = function () {
        this.removeChild(this.zhandoucaipintips);
    };
    //自己意志力刷新
    Zhandoujiemian.prototype.zijiyizhilishua = function () {
        this.yizhixing2.text = "" + this.zijidefangyu;
    };
    return Zhandoujiemian;
}(eui.Component));
__reflect(Zhandoujiemian.prototype, "Zhandoujiemian", ["eui.UIComponent", "egret.DisplayObject"]);
//# sourceMappingURL=Zhandoujiemian.js.map