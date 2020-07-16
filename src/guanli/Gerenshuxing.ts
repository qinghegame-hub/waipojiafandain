class Gerenshuxing extends egret.DisplayObjectContainer{
    public static gerencode:any = "undefined";//个人登录code；
    public static shouci:string = "true";//主要用于微信用户，记录是否首次登记;
    public static jiankangzhi:number = 0;  //个人属性：健康值
    public static xingfuzhi:number =0;    //个人属性：幸福值
    public static kaixinzhi:number=0;    //个人属性：开心值
    public static jinbizhi:number=0;  //个人属性：金币值
    public static jiatingzhi:number=0;   //个人属性：家庭值
    public static shijian:number = 12; //个人属性：当前时间
    public static yuefen:number = 1;   //个人属性：当前月份
    public static jiesuocaipin = [];   //已解锁菜品
    public static usexiaochao:string;
    public static usehuoguo:string;
    public static usexiaochi:string;
    public static usezaocan:string;
    public static jiesuoxiaochao:string;
    public static jiesuohuoguo:string;
    public static jiesuoxiaochi:string;
    public static jiesuozaocan:string;
    public static uid:string = "undefined";
    public static jiesuojiaju = [];  //已解锁家具
    public static jiesuoyuangong = []; //已解锁员工
    public static shiyongyuangong = []; //已使用员工
    public static shengyuchuandan:number = 0;  //传单推广剩余时间
    public static shengyudianshi:number = 0; //电视推广剩余时间
    public static shengyupinglun:number = 0;//评论推广剩余时间
    public static shengyudaiyan:number = 0;//代言人推广剩余时间
    public static yongyoudanju:any = []; //当前拥有的未处理单据列表
    public static yongyouyuanliao:number =0; //拥有的原材料数量
    public static weishengzhi:number = 0;//当前饭店卫生值;
    public static kesaochuweisheng:number = 0;//会生成可扫除的卫生值;
    public static dangqiankesaoweisheng:number = 20;//当前可扫除的卫生值;
    public static anbaozhi:number= 0;//当前饭店安保值;
    public static keliuliang:number=0;//当前饭店客流量
    public static kerongliang:number=0;//当前饭店客容量
    public static koubeizhi:number=0;//当前饭店口碑值
    public static jiesuantime:number=30000;//当前饭店结算时间
    public static chushishangcaisudu:number=30000;//初始上菜速度
    public static yuanliaoxiaohao:number = 0;//原材料消耗减少
    public static weishengjilv:number = 0;//有清洁工时，每个清洁工控制的垃圾的产出几率
    public static mingzi:string = "罗英";//个人名字;
    public static touxiang:string = "https://wx.qlogo.cn/mmopen/vi_32/MF7PLicF44H0djnvbeGDWKKPu60fbrbLKfx8jATpsN9d6paWg0ictyCnY8uAqiaXPcfDLAI1q7IQGHI22ZQZAV4HQ/132";//个人头像服务器;
    public static shengfen:string;//个人省份;
    public static xingbie:string;//个人性别;
    public static daerzixinxi:any = [];//大儿子信息(亲和值，工作能力，当前进行学习，学习剩余时间，是否已领取回家奖励)
    public static ererzixinxi:any = [];//二儿子信息(亲和值，工作能力，当前进行学习，学习剩余时间，是否已领取回家奖励)
    public static xifuxinxi:any = [];//大儿媳信息(亲和值，工作能力，当前进行学习，学习剩余时间，是否已领取回家奖励)
    public static sunnvxinxi:any = [];//孙女信息(亲和值，工作能力，当前进行学习，学习剩余时间，是否已领取回家奖励)
    public static daerzijiaotan:number = 0;//大儿子可交谈次数
    public static ererzijiaotan:number = 0;//二儿子可交谈次数
    public static xifujiaotan:number = 0;//媳妇可交谈次数
    public static sunnvjiaotan:number = 0;//孙女可交谈次数
    public static daerzixuexi:any = [];//大儿子学习解锁信息
    public static ererzixuexi:any = [];//二儿子学习解锁信息
    public static xifuxuexi:any = [];//大儿媳学习解锁信息
    public static sunnvxuexi:any = [];//孙女学习解锁信息
    public static dianshixinxi:any = 0;//电视已观看次数
    public static shafaxinxi:any = [];//沙发信息(当前已积累次数，当前可积累上限次数,下次增加时间戳,当前已累积体力数)
    public static lixianjiangli:any = [];//离线奖励(当前累积次数，当前可累积上限次数,当前时间戳，当前已累积金币值)
    public static paiming:number = 100001;//当前世界排名
    public static paihangbangshuju:any = [];//排行榜数据
    public static qingqiupaihangfenshu:number;//上次请求的排行榜分数
    public static teshushijian:string = "0";//当前特殊事件
    public static chaoshishangdianbiao:any = [];//从服务器获取超市商店表
    public static caipushuxingbiao:any = [];//从服务器获取菜谱属性表
    public static jinengbiao:any = [];//从服务器获取技能表
    public static gerendengjibiao:any = [];//从服务器获取个人等级表
    public static guaiwubiao:any = [];//从服务器获取怪物表

    public static changshubiao:any = [];//从服务器获取常数表
    //RES.getRes("changshubiao_json")
    public static jiedaobiao:any = [];//从服务器获取街道表
    //RES.getRes("jiedaobiao_json");
    public static jiedaosuijibiao:any = [];//从服务器获取街道随机表
    //RES.getRes("jiedaosuijibiao_json");
    public static jiatingchengyuanhudongbiao:any = [];//从服务器获取家庭成员互动表
    //RES.getRes("chengyuanhudongbiao_json");
    public static danjubiao:any = [];//从服务器获取单据表
    //RES.getRes("danjubiao_json")
    public static jiajubiao:any = [];//从服务器获取家具表
    //RES.getRes("jiajubiao_json")
    public static jiatingchengyuan:any = [];//从服务器获取家庭成员表
    //RES.getRes("jiatingchengyuanbiao_json")
    public static zhuozijiesuobiao:any = [];//从服务器获取桌子解锁表
    //RES.getRes("lobbyzhuozi_json")
    public static meirirenwubiao:any = [];//从服务器获取每日任务表
    //RES.getRes("meirirenwubiao_json")
    public static shipudengjibiao:any = [];//从服务器获取食谱等级表
    //RES.getRes("shipulevel_json")
    public static shipubiao:any = [];//从服务器获取食谱表
    //RES.getRes("shipubiao_json")
    public static teshushijianbiao:any = [];//从服务器获取特殊事件表
    //RES.getRes("teshushijianbiao_json")
    public static yinxiaobiao:any = [];//从服务器获取营销表
    //RES.getRes("yinxiaobiao_json")
    public static yuangongbiao:any = [];//从服务器获取员工表

    public static xingfudengji:number = 1;//个人等级;
    public static xingfunaixin:number = 0;//个人耐心值;
    public static xingfuyizhi:number = 0;//个人意志值;
    public static xingfuxingzhi:number = 0;//个人兴致值;
    public static xingfula:number = 0;//个人辣值;
    public static xingfuma:number = 0;//个人麻值;
    public static xingfusuan:number = 0;//个人酸值;
    public static xingfutian:number = 0;//个人甜值;
    public static tishengxingfunaixin:number = 0;//进修个人耐心值;
    public static tishengxingfuyizhi:number = 0;//进修个人意志值;
    public static tishengxingfuxingzhi:number = 0;//进修个人兴致值;
    public static tishengxingfula:number = 0;//进修个人辣值;
    public static tishengxingfuma:number = 0;//进修个人麻值;
    public static tishengxingfusuan:number = 0;//进修个人酸值;
    public static tishengxingfutian:number = 0;//进修个人甜值;
    public static gerenaixin:number = 0;//最终个人耐心值;
    public static gerenyizhi:number = 0;//最终个人意志值;
    public static gerenxingzhi:number = 0;//最终个人兴致值;
    public static gerenla:number = 0;//最终个人辣值;
    public static gerenma:number = 0;//最终个人麻值;
    public static gerensuan:number = 0;//最终个人酸值;
    public static gerentian:number = 0;//最终个人甜值;
    public static putongjiangchi:any = [];//从服务器获取普通奖池表
    public static daojubiao:any = [];//从服务器获取道具表
    public static daojushiyongbiao:any = [];//从服务器获取道具使用表
    public static jiajushangdianbiao:any = [];//从服务器获取家具商店表
    public static wangluolianjie:boolean;//服务器连接状态;
    public static gerenshuju:any = null;//从平台处取得的个人数据;
    public static dibaokeliushijian:number;//通过低保获得的客流量增加;
    public static fenxianglianjiedizhi:string = "https://www.qinghegame.com/loading/fenxiangtutu.png";
    public static weishengyidasao:boolean = true;//初始卫生是否已加载;
    public static guideuiyindao:number = -1;//当前新手引导步骤
    public static kaiqiguanggao:boolean = true;//是否开启视频广告
    public static meirirenwuone:any = [1,1,0,0];//每日任务1（任务id,需要完成个数，已完成个数，是否已领取）
    public static meirirenwutwo:any = [2,1,0,0];//每日任务2（任务id,需要完成个数，已完成个数，是否已领取）
    public static meirirenwutre:any = [3,1,0,0];//每日任务3（任务id,需要完成个数，已完成个数，是否已领取）
    public static meirirenwufor:any = [4,1,0,0];//每日任务4（任务id,需要完成个数，已完成个数，是否已领取）
    public static tiaozhanbeishu:any = [0,1,0];//每日匹配奖励状态（剩余翻倍次数，当前翻倍倍数,排行榜奖励是否已领取）;


    public static touxiangbaocunzhuangtai:boolean = false;

    public static cailanzishu:number = 5;//个人才菜篮子数;
    public static shuaxincishu:number = 2;//个人买菜刷新次数;

    public static dangqiantianqi:number = 1;  //1为晴天，2为雨天，3为雪天

    public static xianshishijian:number;  //显示的时间值;

    public static riqi:number;//当前日期
    public static nian:number;//当前已过年份

    public static zuocaichenggong:string;

//每日结算时，员工的解聘和续聘内容
    public static yuangongxupin = [];
    public static yuangongjiepin = [];

//顾客留言营销的属性值
    public static pingjunpinlun:number = 0;
    public static pinglunkoubei:number;
    public static pinglun1:number = 0;
    public static pinglun2:number = 0;
    public static pinglun3:number = 0;
    public static pinglun4:number = 0;
    public static pinglun5:number = 0;
    public static pinglun6:number = 0;
    public static pinglun7:number = 0;
    public static pinglun8:number = 0;
    public static pinglun9:number = 0;
    public static pinglun10:number = 0;
    public static dangqiandiji:number = 0;

    //下面是通过计算后的最终数据
        //最终的上菜速度
    public static zzchushishangcaisudu:number; 
        //最终的卫生值
    public static zzweishengzhi:number;
        //最终的安保值
    public static zzanbaozhi:number;
        //最终的原材料消耗减少
    public static zzyuanliaoxiaohao:number;
        //最终的客容量
    public static zzkerongliang:number;
        //最终的客流量
    public static zzkeliuliang:number;
        //最终的口碑值
    public static zzkoubeizhi:number;
        //最终外卖效率
    public static waimaixiaolv:number;

    //通过时间控制的客流量增加
    public static sjkeliuliang:number = 100;

    //通过时间控制的外卖订单增加值
    public static sjwaimai:number = 100;

    //通过天气控制的客流量增加
    public static tqkeliuliang:number = 100;

    //通过天气控制的外卖订单增加值
    public static tqwaimai:number = 100;


    public constructor (){
        super();
    }

    public static gukeliuyan(pingfenshu){
        if(Gerenshuxing.dangqiandiji > 10){
			Gerenshuxing.dangqiandiji = 0;
		}
        Gerenshuxing.dangqiandiji ++;
        switch(Gerenshuxing.dangqiandiji){
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
    }

    public static yuangongshuxing(){
        //每次进来都要初始化该计算数据
        let yuangongbiao:any = Gerenshuxing.yuangongbiao;
        let yuangongjiasu:number = 0;       //员工增加的上菜速度
        let yuangongjiaweisheng:number = 0; //员工增加的卫生值
        let yuangongjiaanbao:number = 0;    //员工增加的安宝值
        let yuangongcailiao:number = 0;     //员工增加的原材料减少
        let jiajukerong:number = 0;         //家具增加的容客量
        let tuiguangkeliu:number = 0;       //推广增加的客流量
        let tuiguangkoubei:number = 0;      //推广增加的口碑值
        Gerenshuxing.weishengjilv = 0;
        for (var y = 0;y<yuangongbiao.length;y++){
            for(var k = 0;k<Gerenshuxing.shiyongyuangong.length;k++){
                if(yuangongbiao[y].id == Gerenshuxing.shiyongyuangong[k]){
                    if(yuangongbiao[y].skill == 5){
                        yuangongjiasu += parseInt(yuangongbiao[y].skillparameter);
                    }
                    if(yuangongbiao[y].skill == 6){
                        yuangongjiaweisheng += parseInt(yuangongbiao[y].skillparameter);
                        Gerenshuxing.weishengjilv += 4;
                    }
                    if(yuangongbiao[y].skill == 8){
                        yuangongjiaanbao += parseInt(yuangongbiao[y].skillparameter);
                    }
                    if(yuangongbiao[y].skill == 7){
                        yuangongcailiao += parseInt(yuangongbiao[y].skillparameter);
                    }
                }
            }
        }

//当前客容量计算
        let jiajubiaobianli:any = Gerenshuxing.jiajubiao;
        for(var i = 0 ;i<jiajubiaobianli.length;i++){
            if(jiajubiaobianli[i].id == Gerenshuxing.usexiaochao || jiajubiaobianli[i].id == Gerenshuxing.usehuoguo
            || jiajubiaobianli[i].id == Gerenshuxing.usexiaochi || jiajubiaobianli[i].id == Gerenshuxing.usezaocan){
                jiajukerong += parseInt(jiajubiaobianli[i].onkeliushu);
            }
            for(var j = 0;j<Gerenshuxing.jiesuojiaju.length;j++){
                if(jiajubiaobianli[i].id == Gerenshuxing.jiesuojiaju[j]){
                    jiajukerong += parseInt(jiajubiaobianli[i].keliushu);
                }
            }
        } 

//当前客流量计算
        let yinxiaobiao:any = Gerenshuxing.yinxiaobiao;
        if(Gerenshuxing.shengyuchuandan > 0){
            tuiguangkeliu += parseInt(yinxiaobiao[0].sellachievement);
        }
        if(Gerenshuxing.shengyudianshi > 0){
            tuiguangkeliu += parseInt(yinxiaobiao[1].sellachievement);
        }

//当前口碑值计算
        if(Gerenshuxing.shengyupinglun > 0){
            tuiguangkoubei += parseInt(yinxiaobiao[2].sellachievement);
        }
        if(Gerenshuxing.shengyudaiyan > 0){
            tuiguangkoubei += parseInt(yinxiaobiao[3].sellachievement);
        }

        //低保客流量
        let dibaokeliu:number = 0;
        if(Gerenshuxing.dibaokeliushijian > 0){
            dibaokeliu = 50; 
        }
        //评论增加的口碑值计算
        Gerenshuxing.pingjunpinlun = (Gerenshuxing.pinglun1 + Gerenshuxing.pinglun2+Gerenshuxing.pinglun3+
        Gerenshuxing.pinglun4+Gerenshuxing.pinglun5+Gerenshuxing.pinglun6+Gerenshuxing.pinglun7+Gerenshuxing.pinglun8
        +Gerenshuxing.pinglun9+Gerenshuxing.pinglun10) / 10;
        Gerenshuxing.pinglunkoubei = Math.floor(Gerenshuxing.pingjunpinlun * 4);

//最终用于计算的各项数值
        //最终的上菜速度
        Gerenshuxing.zzchushishangcaisudu = Gerenshuxing.chushishangcaisudu + yuangongjiasu; 
        //最终的卫生值
        Gerenshuxing.zzweishengzhi = Gerenshuxing.weishengzhi + yuangongjiaweisheng  + Gerenshuxing.kesaochuweisheng - Gerenshuxing.dangqiankesaoweisheng;
        //最终的安保值
        Gerenshuxing.zzanbaozhi = Gerenshuxing.anbaozhi + yuangongjiaanbao;
        //最终的原材料消耗减少
        Gerenshuxing.zzyuanliaoxiaohao = Gerenshuxing.yuanliaoxiaohao + yuangongcailiao;
        //最终的客容量
        Gerenshuxing.zzkerongliang = Gerenshuxing.kerongliang + jiajukerong;
        //最终的客流量
        Gerenshuxing.zzkeliuliang =  Math.floor((Gerenshuxing.keliuliang + tuiguangkeliu + dibaokeliu ) * (Gerenshuxing.sjkeliuliang / 100) * (Gerenshuxing.tqkeliuliang / 100));
        //最终的口碑值
        Gerenshuxing.zzkoubeizhi =  Gerenshuxing.koubeizhi + tuiguangkoubei + Gerenshuxing.pinglunkoubei;
        //最终外卖效率
        Gerenshuxing.waimaixiaolv = Math.floor(Gerenshuxing.zzkoubeizhi * (Gerenshuxing.sjwaimai / 100) * (Gerenshuxing.tqwaimai / 100));



        /*console.log("当前客容量：" +Gerenshuxing.zzkerongliang + "增加的客容量: " +jiajukerong);
        console.log("当前客流量：" +Gerenshuxing.zzkeliuliang + "增加的客流量: " +tuiguangkeliu);
        console.log("当前口碑值：" +Gerenshuxing.zzkoubeizhi + "增加的口碑值： " +tuiguangkoubei);
        console.log("当前卫生值: " +Gerenshuxing.zzweishengzhi + "增加的卫生值: " +yuangongjiasu);
        console.log("当前上菜速度: " +Gerenshuxing.zzchushishangcaisudu + "增加的上菜速度: " +yuangongjiasu);
        console.log("当前安宝值: " +Gerenshuxing.zzanbaozhi + "增加的安宝值: " +yuangongjiaanbao);
        console.log("当前原材料减少: " +Gerenshuxing.zzyuanliaoxiaohao + "增加的原材料减少: " +yuangongcailiao);*/
    }

    //开始家庭成员进修倒计时
    public static daerzijinxiudingshi(){
		let xianzaishijian = (new Date()).valueOf();
		if(Gerenshuxing.daerzixinxi[2] != "0" && Gerenshuxing.daerzixinxi[3] != "0"){
			if(xianzaishijian < parseInt(Gerenshuxing.daerzixinxi[3])){
				let daerzidingshi = new egret.Timer(1000,1);
				daerzidingshi.addEventListener(egret.TimerEvent.TIMER,this.daerzijinxiudingshi,this)
				daerzidingshi.start();
			}else{
				Weblianjie.fasongshuju("code:069","{" + '"uid"' + ":"+ '"' + Gerenshuxing.uid + '"' + "}");
			}
		}
	}

	public static ererzijinxiudingshi(){
		let xianzaishijian2 = (new Date()).valueOf();
		if(Gerenshuxing.ererzixinxi[2] != "0" && Gerenshuxing.ererzixinxi[3] != "0"){
			if(xianzaishijian2 < parseInt(Gerenshuxing.ererzixinxi[3])){
				let ererzidingshi = new egret.Timer(1000,1);
				ererzidingshi.addEventListener(egret.TimerEvent.TIMER,this.ererzijinxiudingshi,this)
				ererzidingshi.start();
			}else{
				Weblianjie.fasongshuju("code:070","{" + '"uid"' + ":"+ '"' + Gerenshuxing.uid + '"' + "}");
			}
		}
	}

	public static xifujinxiudingshi(){
		let xianzaishijian3 = (new Date()).valueOf();
		if(Gerenshuxing.xifuxinxi[2] != "0" && Gerenshuxing.xifuxinxi[3] != "0"){
			if(xianzaishijian3 < parseInt(Gerenshuxing.xifuxinxi[3])){
				let xifudingshi = new egret.Timer(1000,1);
				xifudingshi.addEventListener(egret.TimerEvent.TIMER,this.xifujinxiudingshi,this)
				xifudingshi.start();
			}else{
				Weblianjie.fasongshuju("code:071","{" + '"uid"' + ":"+ '"' + Gerenshuxing.uid + '"' + "}");
			}
		}
	}

	public static sunnvjinxiudingshi(){
		let xianzaishijian4 = (new Date()).valueOf();
		if(Gerenshuxing.sunnvxinxi[2] != "0" && Gerenshuxing.sunnvxinxi[3] != "0"){
			if(xianzaishijian4 < parseInt(Gerenshuxing.sunnvxinxi[3])){
				let sunnvdingshi = new egret.Timer(1000,1);
				sunnvdingshi.addEventListener(egret.TimerEvent.TIMER,this.sunnvjinxiudingshi,this)
				sunnvdingshi.start();
			}else{
				Weblianjie.fasongshuju("code:072","{" + '"uid"' + ":"+ '"' + Gerenshuxing.uid + '"' + "}");
			}
		}
	}

    //开始沙发体力恢复倒计时
    public static shafatilihuifu(){
		let xianzaishijian5 = (new Date()).valueOf();
		if(parseInt(Gerenshuxing.shafaxinxi[0]) < parseInt(Gerenshuxing.shafaxinxi[1])){
            if(xianzaishijian5 < parseInt(Gerenshuxing.shafaxinxi[2])){
				let shafadingshi = new egret.Timer(1000,1);
				shafadingshi.addEventListener(egret.TimerEvent.TIMER,this.shafatilihuifu,this)
				shafadingshi.start();
			}else{
				let zengjiatili = Math.floor(Gerenshuxing.kaixinzhi / 100) + 1;
                let xiajieduanshijian = xianzaishijian5 + 120000;
                let chaochushijian = xianzaishijian5 - parseInt(Gerenshuxing.shafaxinxi[2]);
                chaochushijian = Math.floor(chaochushijian / 120000) + 1;
                if(chaochushijian + parseInt(Gerenshuxing.shafaxinxi[0]) >= parseInt(Gerenshuxing.shafaxinxi[1])){
                    chaochushijian = parseInt(Gerenshuxing.shafaxinxi[1]);
                }else{
                    chaochushijian = parseInt(Gerenshuxing.shafaxinxi[0]) + chaochushijian;
                }
                zengjiatili = zengjiatili * chaochushijian;
                Weblianjie.fasongshuju("code:089","{" + '"uid"' + ":"+ '"' + Gerenshuxing.uid + '"' + ","
                + '"dangqiancishu"' +":"+ '"' + chaochushijian + '"' +","
                + '"xiacishijian"' +":"+ '"' + xiajieduanshijian + '"' +","
                + '"leijitili"' +":"+ '"' + zengjiatili + '"' +"}");

			}
		}
	}

    //离线奖励计算定时
    public static lixianjianglidingshi(){
        if(Gameguanli.Kongzhitai().zhujiemian.parent){

        }else{
            this.jisuanlixian();
        }
	}

    public static jisuanlixian(){
        let xianzaishijian6 = (new Date()).valueOf();
            if(parseInt(Gerenshuxing.lixianjiangli[0]) < parseInt(Gerenshuxing.lixianjiangli[1])){
                if(xianzaishijian6 >= parseInt(Gerenshuxing.lixianjiangli[2])){
                    let zengjialixian = Math.floor(parseInt(Gerenshuxing.daerzixinxi[1]) / 100) + 1;
                    let xiajieduanshijian1 = xianzaishijian6 + 60000;
                    let chaochushijian1 = xianzaishijian6 - parseInt(Gerenshuxing.lixianjiangli[2]);
                    chaochushijian1 = Math.floor(chaochushijian1 / 60000) + 1;
                    if(chaochushijian1 + parseInt(Gerenshuxing.lixianjiangli[0]) >= parseInt(Gerenshuxing.lixianjiangli[1])){
                        chaochushijian1 = parseInt(Gerenshuxing.lixianjiangli[1]);
                    }else{
                        chaochushijian1 = parseInt(Gerenshuxing.lixianjiangli[0]) + chaochushijian1;
                    }
                    zengjialixian = zengjialixian * chaochushijian1;
                    Weblianjie.fasongshuju("code:092","{" + '"uid"' + ":"+ '"' + Gerenshuxing.uid + '"' + ","
                    + '"dangqiancishu"' +":"+ '"' + chaochushijian1 + '"' +","
                    + '"xiacishijian"' +":"+ '"' + xiajieduanshijian1 + '"' +","
                    + '"leijitili"' +":"+ '"' + zengjialixian + '"' +"}");
                }
            }else{
                if(Gameguanli.Kongzhitai().zhujiemian.parent){
                    Gameguanli.Kongzhitai().lixianjiangli();
                }
            }
    }


    //个人对应的等级数据计算
    public static xingfudengjishujujisuan(){
        for(var i = 0;i<Gerenshuxing.gerendengjibiao.length;i++){
            if(Gerenshuxing.xingfuzhi >= parseInt(Gerenshuxing.gerendengjibiao[Gerenshuxing.gerendengjibiao.length -1].levelexp)){
                Gerenshuxing.xingfudengji = parseInt(Gerenshuxing.gerendengjibiao[Gerenshuxing.gerendengjibiao.length -1].id);
                Gerenshuxing.xingfunaixin = parseInt(Gerenshuxing.gerendengjibiao[Gerenshuxing.gerendengjibiao.length -1].naixinadd);
                Gerenshuxing.xingfuyizhi = parseInt(Gerenshuxing.gerendengjibiao[Gerenshuxing.gerendengjibiao.length -1].yizhiadd);
                Gerenshuxing.xingfuxingzhi = parseInt(Gerenshuxing.gerendengjibiao[Gerenshuxing.gerendengjibiao.length -1].xingzhiadd);
                Gerenshuxing.xingfula = parseInt(Gerenshuxing.gerendengjibiao[Gerenshuxing.gerendengjibiao.length -1].laxiadd);
                Gerenshuxing.xingfuma = parseInt(Gerenshuxing.gerendengjibiao[Gerenshuxing.gerendengjibiao.length -1].maxiadd);
                Gerenshuxing.xingfusuan = parseInt(Gerenshuxing.gerendengjibiao[Gerenshuxing.gerendengjibiao.length -1].suanxiadd);
                Gerenshuxing.xingfutian = parseInt(Gerenshuxing.gerendengjibiao[Gerenshuxing.gerendengjibiao.length -1].tianxiadd);
                break;
            }else{
                if(Gerenshuxing.xingfuzhi >= parseInt(Gerenshuxing.gerendengjibiao[i].levelexp) && Gerenshuxing.xingfuzhi < parseInt(Gerenshuxing.gerendengjibiao[i + 1].levelexp)){
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
        let xingzhishangxian = Gerenshuxing.kaixinzhi;
        if(xingzhishangxian > 1000){
            xingzhishangxian = 1000;
        }
        Gerenshuxing.gerenaixin = Gerenshuxing.xingfunaixin + Math.floor(Gerenshuxing.xingfunaixin * Gerenshuxing.jiankangzhi / 1000);
        Gerenshuxing.gerenyizhi = Gerenshuxing.xingfuyizhi + Math.floor(Gerenshuxing.xingfuyizhi * xingzhishangxian / 1000);
        Gerenshuxing.gerenxingzhi = Gerenshuxing.xingfuxingzhi;
        Gerenshuxing.gerenla = Gerenshuxing.xingfula + Gerenshuxing.tishengxingfula;
        Gerenshuxing.gerenma = Gerenshuxing.xingfuma + Gerenshuxing.tishengxingfuma;
        Gerenshuxing.gerensuan = Gerenshuxing.xingfusuan + Gerenshuxing.tishengxingfusuan;
        Gerenshuxing.gerentian = Gerenshuxing.xingfutian + Gerenshuxing.tishengxingfutian;
        console.log( Gerenshuxing.gerenaixin,Gerenshuxing.xingfunaixin,Gerenshuxing.tishengxingfunaixin);
        //这里每次变更，应该告诉主界面刷新一次个人等级
    }


}