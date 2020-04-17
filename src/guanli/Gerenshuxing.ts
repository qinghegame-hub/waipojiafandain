class Gerenshuxing extends egret.DisplayObjectContainer{
    public static gerencode:any;//个人登录code；
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
    public static uid:string = "weichuangjian";
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
    public static mingzi:string;//个人名字;
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
        let yuangongbiao:any = RES.getRes("yuangongbiao_json");
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
        let jiajubiaobianli:any = RES.getRes("jiajubiao_json");
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
        let yinxiaobiao:any = RES.getRes("yinxiaobiao_json");
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
        Gerenshuxing.zzkeliuliang =  Math.floor((Gerenshuxing.keliuliang + tuiguangkeliu) * (Gerenshuxing.sjkeliuliang / 100) * (Gerenshuxing.tqkeliuliang / 100));
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
                    let zengjialixian = Math.floor(parseInt(Gerenshuxing.daerzixinxi[1]) / 20);
                    let xiajieduanshijian1 = xianzaishijian6 + 60000;
                    let chaochushijian1 = xianzaishijian6 - parseInt(Gerenshuxing.lixianjiangli[2]);
                    chaochushijian1 = Math.floor(chaochushijian1 / 60000) + 1;
                    if(chaochushijian1 + parseInt(Gerenshuxing.lixianjiangli[0]) >= parseInt(Gerenshuxing.lixianjiangli[1])){
                        chaochushijian1 = parseInt(Gerenshuxing.lixianjiangli[1]);
                    }else{
                        chaochushijian1 = parseInt(Gerenshuxing.lixianjiangli[0]) + chaochushijian1;
                    }
                    console.log(chaochushijian1);
                    zengjialixian = zengjialixian * chaochushijian1;
                    console.log(zengjialixian);
                    console.log(Gerenshuxing.lixianjiangli[2]);
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


}