class Gerenshuxing extends egret.DisplayObjectContainer{
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
    public static uid:string = "1050";
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

    public static dangqiantianqi:number = 1;  //1为晴天，2为雨天，3为雪天

    public static xianshishijian:number;  //显示的时间值;

    public static riqi:number;//当前日期
    public static nian:number;//当前已过年份

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

    //通过时间控制的客流量增加
    public static sjkeliuliang:number = 100;

    //通过天气控制的客流量增加
    public static tqkeliuliang:number = 100;


    public constructor (){
        super();
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
        console.log(Gerenshuxing.zzkeliuliang);
        //最终的口碑值
        Gerenshuxing.zzkoubeizhi =  Gerenshuxing.koubeizhi + tuiguangkoubei;



        /*console.log("当前客容量：" +Gerenshuxing.zzkerongliang + "增加的客容量: " +jiajukerong);
        console.log("当前客流量：" +Gerenshuxing.zzkeliuliang + "增加的客流量: " +tuiguangkeliu);
        console.log("当前口碑值：" +Gerenshuxing.zzkoubeizhi + "增加的口碑值： " +tuiguangkoubei);
        console.log("当前卫生值: " +Gerenshuxing.zzweishengzhi + "增加的卫生值: " +yuangongjiasu);
        console.log("当前上菜速度: " +Gerenshuxing.zzchushishangcaisudu + "增加的上菜速度: " +yuangongjiasu);
        console.log("当前安宝值: " +Gerenshuxing.zzanbaozhi + "增加的安宝值: " +yuangongjiaanbao);
        console.log("当前原材料减少: " +Gerenshuxing.zzyuanliaoxiaohao + "增加的原材料减少: " +yuangongcailiao);*/
    }


}