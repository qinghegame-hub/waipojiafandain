class Weblianjie extends egret.DisplayObjectContainer {
    public static lianjieserver:egret.WebSocket;

    public constructor() {   
        super();
        Weblianjie.lianjieserver = new egret.WebSocket();
        
    }
   public kaishilianjie (){
       
       //设置数据格式为二进制，默认为字符串
       Weblianjie.lianjieserver.type = egret.WebSocket.TYPE_STRING;
       console.log(Weblianjie.lianjieserver.type);
       //连接服务器
       Weblianjie.lianjieserver.connect("192.168.1.2", 3010);
       //添加收到数据侦听，收到数据会调用此方法
        Weblianjie.lianjieserver.addEventListener(egret.ProgressEvent.SOCKET_DATA, this.shoudaofushuju, this);
        //添加链接打开侦听，连接成功会调用此方法
       Weblianjie.lianjieserver.addEventListener(egret.Event.CONNECT, this.lianjiechenggong, this);
        //添加链接关闭侦听，手动关闭或者服务器关闭连接会调用此方法
       Weblianjie.lianjieserver.addEventListener(egret.Event.CLOSE, this.lianjieguanbi, this);
        //添加异常侦听，出现异常会调用此方法
       Weblianjie.lianjieserver.addEventListener(egret.IOErrorEvent.IO_ERROR, this.lianjieyichang, this);
   }

   public shoudaofushuju(msg){
        console.log("收到传入数据")
        var bianyi = Weblianjie.lianjieserver.readUTF();
        let jiexishujutou = bianyi.substr(0,8);
        let jiexishujuneirong = bianyi.replace(jiexishujutou,"");
        let jiexijsongeshi = JSON.parse(jiexishujuneirong);
        switch(jiexishujutou){
    //初始化个人数据
            case "code:100":
                console.log("开始初始化个人数据")
                Gerenshuxing.jiankangzhi=jiexijsongeshi[0].healthnum;  //个人属性：健康值
                Gerenshuxing.xingfuzhi=jiexijsongeshi[0].felicitynum;    //个人属性：幸福值
                Gerenshuxing.kaixinzhi=jiexijsongeshi[0].happinessnum;    //个人属性：开心值
                Gerenshuxing.jinbizhi=jiexijsongeshi[0].goldnum;  //个人属性：金币值
                Gerenshuxing.jiatingzhi=jiexijsongeshi[0].familynum;   //个人属性：家庭值
                Gerenshuxing.shijian="1213"; //个人属性：当前时间
                Gerenshuxing.yuefen = "630";   //个人属性：当前月份
                Gerenshuxing.jiesuocaipin = jiexijsongeshi[0].jiesuocai;   //已解锁菜品
                Gerenshuxing.usexiaochao=jiexijsongeshi[0].usexiaochao;
                Gerenshuxing.usehuoguo=jiexijsongeshi[0].usehuoguo;
                Gerenshuxing.usexiaochi=jiexijsongeshi[0].usexiaochi;
                Gerenshuxing.usezaocan=jiexijsongeshi[0].usezaocan;
                Gerenshuxing.jiesuoxiaochao=jiexijsongeshi[0].jiesuoxiaochao;
                Gerenshuxing.jiesuohuoguo=jiexijsongeshi[0].jiesuohuoguo;
                Gerenshuxing.jiesuoxiaochi=jiexijsongeshi[0].jiesuoxiaochi;
                Gerenshuxing.jiesuozaocan=jiexijsongeshi[0].jiesuozaocan;
                Gerenshuxing.jiesuojiaju=jiexijsongeshi[0].jiesuojiaju;
                Gerenshuxing.jiesuoyuangong=jiexijsongeshi[0].jiesuoyuangong;
                Gerenshuxing.shiyongyuangong=jiexijsongeshi[0].shiyongyuangong;
                Gerenshuxing.shengyuchuandan=jiexijsongeshi[0].shengyuchuandan;
                Gerenshuxing.shengyudianshi=jiexijsongeshi[0].shengyudianshi;
                Gerenshuxing.shengyupinglun=jiexijsongeshi[0].shengyupinglun;
                Gerenshuxing.shengyudaiyan=jiexijsongeshi[0].shengyudaiyan;
                Gerenshuxing.yongyoudanju=jiexijsongeshi[0].yongyoudanju;
                Gerenshuxing.yongyouyuanliao=jiexijsongeshi[0].yongyouyuanliao; //拥有的原材料数量
                Gerenshuxing.weishengzhi=jiexijsongeshi[0].weishengzhi;//当前饭店卫生值;
                Gerenshuxing.anbaozhi=jiexijsongeshi[0].anbaozhi;//当前饭店安保值;
                Gerenshuxing.keliuliang=jiexijsongeshi[0].keliuliang;//当前饭店客流量
                Gerenshuxing.kerongliang=jiexijsongeshi[0].kerongliang;//当前饭店客容量
                Gerenshuxing.koubeizhi=jiexijsongeshi[0].koubeizhi;//当前饭店口碑值
                Gerenshuxing.jiesuantime=jiexijsongeshi[0].jiesuantime;//当前饭店结算时间
                Gerenshuxing.chushishangcaisudu=jiexijsongeshi[0].chushishangcaisudu;//初始上菜速度;
                Gerenshuxing.kesaochuweisheng=jiexijsongeshi[0].kesaochuweisheng;//可扫除卫生值;


                Gameguanli.Kongzhitai().dingbuui.dingbuchushihua();
                Gameguanli.Kongzhitai().zhujiemian.chushihuaui();
                Gameguanli.Kongzhitai().zhujiemiandingbu.anniuchuli();
                break;
    //解锁菜品时反馈
            case "code:003":
                Gerenshuxing.jiesuocaipin = jiexijsongeshi.genxin;
                Gerenshuxing.jinbizhi = jiexijsongeshi.youjinbi;
                Gameguanli.Kongzhitai().dingbuui.dingbuchushihua();
                Gameguanli.Kongzhitai().caiPuUi.chulishujujiegou();
                let guanlileixingleibiaoshipu:any = RES.getRes("shipubiao_json");
                let jiesuonameshipu;
                for(var i = 0;i<guanlileixingleibiaoshipu.length;i++){
                    if(guanlileixingleibiaoshipu[i].id == jiexijsongeshi.caipinid){
                        jiesuonameshipu = guanlileixingleibiaoshipu[i].foodName;
                    }
                }
                Gameguanli.Kongzhitai().cuowutishixinxi("您已学会：【" + jiesuonameshipu + "】，消耗钱币：" +jiexijsongeshi.jianjinbi);
                break;
    //解锁家具时反馈
            case "code:009":
                Gerenshuxing.jiesuojiaju = jiexijsongeshi.genxin;
                Gerenshuxing.jinbizhi = jiexijsongeshi.youjinbi;
                Gameguanli.Kongzhitai().dingbuui.dingbuchushihua();
                Gameguanli.Kongzhitai().guanLiui.neiRongZhanShi.chulishujujiajujiegou(Guanlijiemian.dangqianyeqianshu,Guanlijiemian.dangqianyeshu);
                let guanlileixingleibiaojiaju:any = RES.getRes("jiajubiao_json");
                let jiesuonamejiaju;
                for(var i = 0;i<guanlileixingleibiaojiaju.length;i++){
                    if(guanlileixingleibiaojiaju[i].id == jiexijsongeshi.jiajuid){
                        jiesuonamejiaju = guanlileixingleibiaojiaju[i].jiajuName;
                    }
                }
                Gameguanli.Kongzhitai().cuowutishixinxi("您已获得：【" + jiesuonamejiaju + "】，消耗钱币：" +jiexijsongeshi.jianjinbi);
                break;
    //收到家具使用更新时反馈
            case "code:005":
                if(jiexijsongeshi.jiajuid >= 1000 && jiexijsongeshi.jiajuid < 2000){
                Gerenshuxing.usexiaochao = jiexijsongeshi.jiajuid;
                Gameguanli.Kongzhitai().cuowutishixinxi("饭店小炒区使用家具已替换！");
                Gameguanli.Kongzhitai().guanLiui.neiRongZhanShi.chulishujujiajujiegou();
                }
                if(jiexijsongeshi.jiajuid >= 2000 && jiexijsongeshi.jiajuid < 3000){
                Gerenshuxing.usehuoguo = jiexijsongeshi.jiajuid;
                Gameguanli.Kongzhitai().cuowutishixinxi("饭店火锅区使用家具已替换！");
                Gameguanli.Kongzhitai().guanLiui.neiRongZhanShi.chulishujujiajujiegou();
                }
                if(jiexijsongeshi.jiajuid >= 3000 && jiexijsongeshi.jiajuid < 4000){
                Gerenshuxing.usexiaochi = jiexijsongeshi.jiajuid;
                Gameguanli.Kongzhitai().cuowutishixinxi("饭店小吃区使用家具已替换！");
                Gameguanli.Kongzhitai().guanLiui.neiRongZhanShi.chulishujujiajujiegou();
                }
                if(jiexijsongeshi.jiajuid >= 4000 && jiexijsongeshi.jiajuid < 5000){
                Gerenshuxing.usezaocan = jiexijsongeshi.jiajuid;
                Gameguanli.Kongzhitai().cuowutishixinxi("饭店早餐区使用家具已替换！");
                Gameguanli.Kongzhitai().guanLiui.neiRongZhanShi.chulishujujiajujiegou();
                }
                break;
    //收到大厅区域解锁成功时反馈
            case "code:007":
                switch(jiexijsongeshi.jiesuoquyu){
                    case "1":
                        Gerenshuxing.jiesuoxiaochao= "1";
                        Gerenshuxing.usexiaochao=jiexijsongeshi.quyujiajuid;
                        Gerenshuxing.jinbizhi = jiexijsongeshi.jinbizhi;
                        Gameguanli.Kongzhitai().cuowutishixinxi("成功解锁饭店小炒区");
                        Gameguanli.Kongzhitai().dingbuui.dingbuchushihua();
                        Gameguanli.Kongzhitai().zhujiemian.chushihuaui();
                        break;
                    case "2":
                        Gerenshuxing.jiesuohuoguo= "1";
                        Gerenshuxing.usehuoguo=jiexijsongeshi.quyujiajuid;
                        Gerenshuxing.jinbizhi = jiexijsongeshi.jinbizhi;
                        Gameguanli.Kongzhitai().cuowutishixinxi("成功解锁饭店火锅区");
                        Gameguanli.Kongzhitai().dingbuui.dingbuchushihua();
                        Gameguanli.Kongzhitai().zhujiemian.chushihuaui();
                        break;
                    case "3":
                        Gerenshuxing.jiesuoxiaochi= "1";
                        Gerenshuxing.usexiaochi=jiexijsongeshi.quyujiajuid;
                        Gerenshuxing.jinbizhi = jiexijsongeshi.jinbizhi;
                        Gameguanli.Kongzhitai().cuowutishixinxi("成功解锁饭店小吃区");
                        Gameguanli.Kongzhitai().dingbuui.dingbuchushihua();
                        Gameguanli.Kongzhitai().zhujiemian.chushihuaui();
                        break;
                    case "4":
                        Gerenshuxing.jiesuozaocan= "1";
                        Gerenshuxing.usezaocan=jiexijsongeshi.quyujiajuid;
                        Gerenshuxing.jinbizhi = jiexijsongeshi.jinbizhi;
                        Gameguanli.Kongzhitai().cuowutishixinxi("成功解锁饭店早餐区");
                        Gameguanli.Kongzhitai().dingbuui.dingbuchushihua();
                        Gameguanli.Kongzhitai().zhujiemian.chushihuaui();
                        break;          
                }
                break;
    //聘用员工时反馈
            case "code:011":
                Gerenshuxing.shiyongyuangong = jiexijsongeshi.genxin;
                Gerenshuxing.jinbizhi = jiexijsongeshi.youjinbi;
                Gameguanli.Kongzhitai().dingbuui.dingbuchushihua();
                Gameguanli.Kongzhitai().guanLiui.yuanGongJieMian.chulishujujiajujiegou(Guanlijiemian.dangqianyeqianshu,Guanlijiemian.dangqianyeshu);
                let guanlileixingleibiaoyuangongpy:any = RES.getRes("yuangongbiao_json");
                let jiesuonameyuangongpy;
                for(var i = 0;i<guanlileixingleibiaoyuangongpy.length;i++){
                    if(guanlileixingleibiaoyuangongpy[i].id == jiexijsongeshi.yuangongid){
                        jiesuonameyuangongpy = guanlileixingleibiaoyuangongpy[i].name;
                    }
                }
                Gameguanli.Kongzhitai().cuowutishixinxi("您已聘用：【" + jiesuonameyuangongpy + "】，消耗钱币：" +jiexijsongeshi.jianjinbi);
                break;
    //解聘员工时反馈
            case "code:013":
                Gerenshuxing.shiyongyuangong = jiexijsongeshi.genxin;
                Gameguanli.Kongzhitai().guanLiui.yuanGongJieMian.chulishujujiajujiegou(Guanlijiemian.dangqianyeqianshu,Guanlijiemian.dangqianyeshu);
                let guanlileixingleibiaoyuangongjp:any = RES.getRes("yuangongbiao_json");
                let jiesuonameyuangongjp;
                for(var i = 0;i<guanlileixingleibiaoyuangongjp.length;i++){
                    if(guanlileixingleibiaoyuangongjp[i].id == jiexijsongeshi.yuangongid){
                        jiesuonameyuangongjp = guanlileixingleibiaoyuangongjp[i].name;
                    }
                }
                Gameguanli.Kongzhitai().cuowutishixinxi("您已解聘：【" + jiesuonameyuangongjp + "】");
                break;
            case "code:018":
                Gerenshuxing.shengyuchuandan = jiexijsongeshi.tuiguangtime;
                Gerenshuxing.jinbizhi = jiexijsongeshi.jinbizhi;
                Gameguanli.Kongzhitai().dingbuui.dingbuchushihua();
                Gameguanli.Kongzhitai().guanLiui.tuiguangchuandan.chulishujuluoji(Guanlijiemian.dangqianyeqianshu,Guanlijiemian.dangqianyeshu);
                Gameguanli.Kongzhitai().cuowutishixinxi("传单推广成功，剩余时间：" + jiexijsongeshi.tuiguangtime + "天，消耗钱币：" + jiexijsongeshi.koujinbi);
                break;
            case "code:019":
                Gerenshuxing.shengyudianshi = jiexijsongeshi.tuiguangtime;
                Gerenshuxing.jinbizhi = jiexijsongeshi.jinbizhi;
                Gameguanli.Kongzhitai().dingbuui.dingbuchushihua();
                Gameguanli.Kongzhitai().guanLiui.tuiguangdianshi.chulishujuluoji(Guanlijiemian.dangqianyeqianshu,Guanlijiemian.dangqianyeshu);
                Gameguanli.Kongzhitai().cuowutishixinxi("电视推广成功，剩余时间：" + jiexijsongeshi.tuiguangtime + "天，消耗钱币：" + jiexijsongeshi.koujinbi);
                break;
            case "code:020":
                Gerenshuxing.shengyupinglun = jiexijsongeshi.tuiguangtime;
                Gerenshuxing.jinbizhi = jiexijsongeshi.jinbizhi;
                Gameguanli.Kongzhitai().dingbuui.dingbuchushihua();
                Gameguanli.Kongzhitai().guanLiui.tuiguangpinglun.chulishujuluoji(Guanlijiemian.dangqianyeqianshu,Guanlijiemian.dangqianyeshu);
                Gameguanli.Kongzhitai().cuowutishixinxi("评论推广成功，剩余时间：" + jiexijsongeshi.tuiguangtime + "天，消耗钱币：" + jiexijsongeshi.koujinbi);
                break;
            case "code:021":
                Gerenshuxing.shengyudaiyan = jiexijsongeshi.tuiguangtime;
                Gerenshuxing.jinbizhi = jiexijsongeshi.jinbizhi;
                Gameguanli.Kongzhitai().dingbuui.dingbuchushihua();
                Gameguanli.Kongzhitai().guanLiui.tuiguangdaiyan.chulishujuluoji(Guanlijiemian.dangqianyeqianshu,Guanlijiemian.dangqianyeshu);
                Gameguanli.Kongzhitai().cuowutishixinxi("代言推广成功，剩余时间：" + jiexijsongeshi.tuiguangtime + "天，消耗钱币：" + jiexijsongeshi.koujinbi);
                break;
    //单据缴费成功时反馈
            case "code:023":
                Gerenshuxing.yongyoudanju = jiexijsongeshi.genxin;
                Gerenshuxing.jinbizhi = jiexijsongeshi.youjinbi;
                Gameguanli.Kongzhitai().dingbuui.dingbuchushihua();
                Gameguanli.Kongzhitai().guanLiui.danjuJieMian.chulishujujiajujiegou(Guanlijiemian.dangqianyeqianshu,Guanlijiemian.dangqianyeshu);
                Gameguanli.Kongzhitai().cuowutishixinxi("缴费成功！消耗钱币：" +jiexijsongeshi.jianjinbi);
                break;
    //饭店成功卖出菜时反馈
            case "code:025":
                Gerenshuxing.jinbizhi = jiexijsongeshi.shuaxinjinbi;
                Gameguanli.Kongzhitai().dingbuui.dingbuchushihua();
                Gameguanli.Kongzhitai().cuowutishixinxi("出售成功，获得钱币：" +jiexijsongeshi.sjhuodejinbi);
                let xianshijinbidonghua = new Jinbidonghua(jiexijsongeshi.sjhuodejinbi);
                break; 
    //扣除原材料时反馈
            case "code:027":
                Gerenshuxing.yongyouyuanliao = jiexijsongeshi.shuaxinjinbi;
                Gameguanli.Kongzhitai().dingbuui.dingbuchushihua();
                Gameguanli.Kongzhitai().cuowutishixinxi("上菜成功，食材 -：" +jiexijsongeshi.sjhuodejinbi);
                Gameguanli.Kongzhitai().zhujiemiandingbu.anniuchuli();
                console.log("当前拥有食材数：" + Gerenshuxing.yongyouyuanliao);
                break;              
    //非法操作
            case "code:202":
                Gameguanli.Kongzhitai().cuowutishixinxi("非法操作！");
                break;
    //金币不足
            case "code:200":
                Gameguanli.Kongzhitai().cuowutishixinxi("钱币不足！");
                break;
    //解锁方式错误
            case "code:201":
                Gameguanli.Kongzhitai().cuowutishixinxi("解锁方式错误！");
                break;
            case "code:205":
                Gameguanli.Kongzhitai().cuowutishixinxi(jiexijsongeshi.tishi + "进入了游戏！");
                break;
            default:
                console.log("非法服务器参数")
        }

   }

   public lianjiechenggong(){
       console.log("服务器连接成功")
       Weblianjie.fasongshuju("code:001",'"' + Gerenshuxing.uid + '"');

   }

   public lianjieguanbi(){
       Gameguanli.Kongzhitai().cuowutishixinxi("服务器连接已关闭！");
   }

   public lianjieyichang(){
       Gameguanli.Kongzhitai().cuowutishixinxi("服务器连接异常！");
   }

   static fasongshuju(code,message){
        //调用登录接口
        Weblianjie.lianjieserver.writeUTF(code + message);
        Weblianjie.lianjieserver.flush();
   }


}