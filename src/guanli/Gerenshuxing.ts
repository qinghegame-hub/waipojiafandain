class Gerenshuxing extends egret.DisplayObjectContainer{
    public static jiankangzhi:number = 0;  //个人属性：健康值
    public static xingfuzhi:number =0;    //个人属性：幸福值
    public static kaixinzhi:number=0;    //个人属性：开心值
    public static jinbizhi:number=0;  //个人属性：金币值
    public static jiatingzhi:number=0;   //个人属性：家庭值
    public static shijian:string = "1213"; //个人属性：当前时间
    public static yuefen:string = "630";   //个人属性：当前月份
    public static jiesuocaipin = [];   //已解锁菜品
    public static usexiaochao:string;
    public static usehuoguo:string;
    public static usexiaochi:string;
    public static usezaocan:string;
    public static jiesuoxiaochao:string;
    public static jiesuohuoguo:string;
    public static jiesuoxiaochi:string;
    public static jiesuozaocan:string;
    public static uid:string = "1044";
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


    public constructor (){
        super();
    }


}