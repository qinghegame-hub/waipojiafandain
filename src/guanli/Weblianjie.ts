class Weblianjie extends egret.DisplayObjectContainer {
    public static lianjieserver:egret.WebSocket;

    public constructor() {   
        super();
        Weblianjie.lianjieserver = new egret.WebSocket();
        
    }
   public kaishilianjie (){
       
       //设置数据格式为二进制，默认为字符串
      //Weblianjie.lianjieserver.type = egret.WebSocket.TYPE_STRING;
       Weblianjie.lianjieserver.type = egret.WebSocket.TYPE_BINARY;
       //连接服务器
       //Weblianjie.lianjieserver.connect("192.168.1.4", 3010);
       Weblianjie.lianjieserver.connectByUrl("wss://www.qinghegame.com:3010/");
       //添加收到数据侦听，收到数据会调用此方法
        Weblianjie.lianjieserver.addEventListener(egret.ProgressEvent.SOCKET_DATA, this.shoudaofushuju, this);
        //添加链接打开侦听，连接成功会调用此方法
       Weblianjie.lianjieserver.addEventListener(egret.Event.CONNECT, this.lianjiechenggong, this);
        //添加链接关闭侦听，手动关闭或者服务器关闭连接会调用此方法
       Weblianjie.lianjieserver.addEventListener(egret.Event.CLOSE, this.lianjieguanbi, this);
        //添加异常侦听，出现异常会调用此方法
       Weblianjie.lianjieserver.addEventListener(egret.IOErrorEvent.IO_ERROR, this.lianjieyichang, this);
   }


   public shoudaofushuju(){
        var byte:egret.ByteArray = new egret.ByteArray();
        Weblianjie.lianjieserver.readBytes(byte);
   //      var bianyi = Weblianjie.lianjieserver.readUTF();
        
        let bianyi = byte.readUTFBytes(byte.bytesAvailable);
        let jiexishujutou =bianyi.substr(0,8);
        let jiexishujuneirong = bianyi.replace(jiexishujutou,"");
        let jiexijsongeshi = JSON.parse(jiexishujuneirong);
        switch(jiexishujutou){
    //初始化个人数据
            case "code:998":
                Gerenshuxing.uid = jiexijsongeshi.openid;
                console.log("服务器下发的个人id:" +Gerenshuxing.uid);
                var openid:string = "openid";
                var value:string = Gerenshuxing.uid;
                egret.localStorage.setItem(openid,value);
                Gerenshuxing.shouci = "false";
                Weblianjie.fasongshuju("code:001","{" + '"uid"' +":"+ '"' + Gerenshuxing.uid + '"' +"}");
                break;
            case "code:100":
                console.log("开始初始化个人数据")
                Gerenshuxing.jiankangzhi=jiexijsongeshi[0].healthnum;  //个人属性：健康值
                Gerenshuxing.xingfuzhi=jiexijsongeshi[0].felicitynum;    //个人属性：幸福值
                Gerenshuxing.kaixinzhi=jiexijsongeshi[0].happinessnum;    //个人属性：开心值
                Gerenshuxing.jinbizhi=jiexijsongeshi[0].goldnum;  //个人属性：金币值
                Gerenshuxing.jiatingzhi=jiexijsongeshi[0].familynum;   //个人属性：家庭值
                Gerenshuxing.shijian=parseInt(jiexijsongeshi[0].shijian); //个人属性：当前时间
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
                Gerenshuxing.mingzi = jiexijsongeshi[0].mingzi;
                Gerenshuxing.touxiang = jiexijsongeshi[0].touxiang;
                Gerenshuxing.xingbie = jiexijsongeshi[0].xingbie;
                Gerenshuxing.shengfen = jiexijsongeshi[0].shenfen;
                Gerenshuxing.daerzixinxi = jiexijsongeshi[0].daerzixinxi;
                Gerenshuxing.ererzixinxi = jiexijsongeshi[0].ererzixinxi;
                Gerenshuxing.xifuxinxi = jiexijsongeshi[0].xifuxinxi;
                Gerenshuxing.sunnvxinxi = jiexijsongeshi[0].sunnvxinxi;
                Gerenshuxing.daerzixuexi = jiexijsongeshi[0].daerzixuexi;
                Gerenshuxing.ererzixuexi = jiexijsongeshi[0].ererzixuexi;
                Gerenshuxing.xifuxuexi = jiexijsongeshi[0].xifuxuexi;
                Gerenshuxing.sunnvxuexi = jiexijsongeshi[0].sunnvxuexi;
                Gerenshuxing.dianshixinxi = jiexijsongeshi[0].dianshixinxi;
                Gerenshuxing.shafaxinxi = jiexijsongeshi[0].shafaxinxi;
                Gerenshuxing.lixianjiangli = jiexijsongeshi[0].lixianjiangli;
                Gerenshuxing.chaoshishangdianbiao = jiexijsongeshi[0].chaoshibiao;
                Gerenshuxing.tishengxingfula = parseInt(jiexijsongeshi[0].lafujiazhi);
                Gerenshuxing.tishengxingfuma = parseInt(jiexijsongeshi[0].mafujiazhi);
                Gerenshuxing.tishengxingfusuan = parseInt(jiexijsongeshi[0].suanfujiazhi);
                Gerenshuxing.tishengxingfutian = parseInt(jiexijsongeshi[0].tianfujiazhi);
                Gerenshuxing.dibaokeliushijian = parseInt(jiexijsongeshi[0].dibaokeliushijian);
                Gerenshuxing.guideuiyindao = parseInt(jiexijsongeshi[0].guideyinado);
                Gerenshuxing.meirirenwuone = jiexijsongeshi[0].meirirenwuone;
                Gerenshuxing.meirirenwutwo = jiexijsongeshi[0].meirirenwutwo;
                Gerenshuxing.meirirenwutre = jiexijsongeshi[0].meirirenwutre;
                Gerenshuxing.meirirenwufor = jiexijsongeshi[0].meirirenwufor;
                Gerenshuxing.tiaozhanbeishu = jiexijsongeshi[0].tiaozhanbeishu;
                Gerenshuxing.jisuanlixian();
 //               console.log(Gerenshuxing.daerzixinxi,Gerenshuxing.ererzixinxi,Gerenshuxing.xifuxinxi,Gerenshuxing.sunnvxinxi);
  //              console.log(Gerenshuxing.daerzixinxi[5],Gerenshuxing.ererzixinxi[5],Gerenshuxing.xifuxinxi[5],Gerenshuxing.sunnvxinxi[5]);

                Gameguanli.Kongzhitai().dingbuui.dingbuchushihua();
                if(Gameguanli.Kongzhitai().zhujiemian.parent){
                    Gameguanli.Kongzhitai().zhujiemian.chushihuaui();
                    Gameguanli.Kongzhitai().zhujiemiandingbu.anniuchuli();
                    Gameguanli.Kongzhitai().zhujiemiandingbu.chushihua();
                }
                if(Gameguanli.Kongzhitai().jiatingjiemian.parent){
                    Gameguanli.Kongzhitai().jiatingjiemian.chushihua();
                }
                if(Gameguanli.Kongzhitai().dibuui.parent){
                    Gameguanli.Kongzhitai().dibuui.dibuchushihua();
                }
                //调用员工等数据计算
                Gerenshuxing.yuangongshuxing();
                //调用家庭成员进修进度倒计时
                Gerenshuxing.daerzijinxiudingshi();
                Gerenshuxing.ererzijinxiudingshi();
                Gerenshuxing.xifujinxiudingshi();
                Gerenshuxing.sunnvjinxiudingshi();
                Gerenshuxing.shafatilihuifu();
                //上传平台的个人数据内容
                this.gerenshujushangchuan();
                //向平台传送数据，打开公共开防御
                this.kaifangyupaiming();
                //进行幸福等级计算
                Gerenshuxing.xingfudengjishujujisuan();
                //显示营销提示图片
                Gameguanli.Kongzhitai().zhujiemiandingbu.yinxiaotishixianshi();
                //刷新新手引导状态
                Xinshouyindao.chushihua();
                break;
    //初始化个人菜谱等级、街道信息
            case "code:035":
                Gerencaipudengji.caipulevel = jiexijsongeshi[0].jingyan[0];
                Gerencaipudengji.jiedaoshuju = jiexijsongeshi[0].jiedao[0];
                Gerencaipudengji.daoju = jiexijsongeshi[0].daoju[0];
                break;
    //解锁菜品时反馈
            case "code:003":
                Gerenshuxing.jiesuocaipin = jiexijsongeshi.genxin;
                Gerenshuxing.jinbizhi = jiexijsongeshi.youjinbi;
                Gameguanli.Kongzhitai().dingbuui.dingbuchushihua();
                Gameguanli.Kongzhitai().caiPuUi.chulishujujiegou();
                let guanlileixingleibiaoshipu:any = Gerenshuxing.shipubiao;
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
                Gerenshuxing.yuangongshuxing();
                Gameguanli.Kongzhitai().dingbuui.dingbuchushihua();
                Gameguanli.Kongzhitai().guanLiui.neiRongZhanShi.chulishujujiajujiegou(Guanlijiemian.dangqianyeqianshu,Guanlijiemian.dangqianyeshu);
                let guanlileixingleibiaojiaju:any = Gerenshuxing.jiajubiao;
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
                Gerenshuxing.yuangongshuxing();
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
                Gerenshuxing.yuangongshuxing();
                break;
    //聘用员工时反馈
            case "code:011":
                Gerenshuxing.shiyongyuangong = jiexijsongeshi.genxin;
                Gerenshuxing.jinbizhi = jiexijsongeshi.youjinbi;
                Gerenshuxing.yuangongshuxing();
                Gameguanli.Kongzhitai().zhujiemiandingbu.chushihua();
                Gameguanli.Kongzhitai().dingbuui.dingbuchushihua();
                Gameguanli.Kongzhitai().guanLiui.yuanGongJieMian.chulishujujiajujiegou(Guanlijiemian.dangqianyeqianshu,Guanlijiemian.dangqianyeshu);
                let guanlileixingleibiaoyuangongpy:any = Gerenshuxing.yuangongbiao;
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
                Gerenshuxing.yuangongshuxing();
                Gameguanli.Kongzhitai().zhujiemiandingbu.chushihua();
                Gameguanli.Kongzhitai().guanLiui.yuanGongJieMian.chulishujujiajujiegou(Guanlijiemian.dangqianyeqianshu,Guanlijiemian.dangqianyeshu);
                let guanlileixingleibiaoyuangongjp:any = Gerenshuxing.yuangongbiao;
                let jiesuonameyuangongjp;
                for(var i = 0;i<guanlileixingleibiaoyuangongjp.length;i++){
                    if(guanlileixingleibiaoyuangongjp[i].id == jiexijsongeshi.yuangongid){
                        jiesuonameyuangongjp = guanlileixingleibiaoyuangongjp[i].name;
                    }
                }
                Gameguanli.Kongzhitai().cuowutishixinxi("您已解聘：【" + jiesuonameyuangongjp + "】");
                break;
    //进行传单推广成功时反馈
            case "code:018":
                Gerenshuxing.shengyuchuandan = jiexijsongeshi.tuiguangtime;
                Gerenshuxing.jinbizhi = jiexijsongeshi.jinbizhi;
                Gerenshuxing.yuangongshuxing();
                Gameguanli.Kongzhitai().dingbuui.dingbuchushihua();
                Gameguanli.Kongzhitai().guanLiui.tuiguangchuandan.chulishujuluoji(Guanlijiemian.dangqianyeqianshu,Guanlijiemian.dangqianyeshu);
                Gameguanli.Kongzhitai().zhujiemiandingbu.yinxiaotishixianshi();
                Gameguanli.Kongzhitai().cuowutishixinxi("传单推广成功，剩余时间：" + jiexijsongeshi.tuiguangtime + "天，消耗钱币：" + jiexijsongeshi.koujinbi);
                break;
    //进行电视推广成功时反馈
            case "code:019":
                Gerenshuxing.shengyudianshi = jiexijsongeshi.tuiguangtime;
                Gerenshuxing.jinbizhi = jiexijsongeshi.jinbizhi;
                Gerenshuxing.yuangongshuxing();
                Gerenshuxing.yuangongshuxing();
                Gameguanli.Kongzhitai().dingbuui.dingbuchushihua();
                Gameguanli.Kongzhitai().zhujiemiandingbu.yinxiaotishixianshi();
                Gameguanli.Kongzhitai().guanLiui.tuiguangdianshi.chulishujuluoji(Guanlijiemian.dangqianyeqianshu,Guanlijiemian.dangqianyeshu);
                Gameguanli.Kongzhitai().cuowutishixinxi("电视推广成功，剩余时间：" + jiexijsongeshi.tuiguangtime + "天，消耗钱币：" + jiexijsongeshi.koujinbi);
                break;
    //进行评论推广成功时反馈
            case "code:020":
                Gerenshuxing.shengyupinglun = jiexijsongeshi.tuiguangtime;
                Gerenshuxing.jinbizhi = jiexijsongeshi.jinbizhi;
                Gerenshuxing.yuangongshuxing();
                Gameguanli.Kongzhitai().dingbuui.dingbuchushihua();
                Gameguanli.Kongzhitai().zhujiemiandingbu.yinxiaotishixianshi();
                Gameguanli.Kongzhitai().guanLiui.tuiguangpinglun.chulishujuluoji(Guanlijiemian.dangqianyeqianshu,Guanlijiemian.dangqianyeshu);
                Gameguanli.Kongzhitai().cuowutishixinxi("评论推广成功，剩余时间：" + jiexijsongeshi.tuiguangtime + "天，消耗钱币：" + jiexijsongeshi.koujinbi);
                break;
    //进行代言推广成功时反馈
            case "code:021":
                Gerenshuxing.shengyudaiyan = jiexijsongeshi.tuiguangtime;
                Gerenshuxing.jinbizhi = jiexijsongeshi.jinbizhi;
                Gerenshuxing.yuangongshuxing();
                Gameguanli.Kongzhitai().dingbuui.dingbuchushihua();
                Gameguanli.Kongzhitai().zhujiemiandingbu.yinxiaotishixianshi();
                Gameguanli.Kongzhitai().guanLiui.tuiguangdaiyan.chulishujuluoji(Guanlijiemian.dangqianyeqianshu,Guanlijiemian.dangqianyeshu);
                Gameguanli.Kongzhitai().cuowutishixinxi("代言推广成功，剩余时间：" + jiexijsongeshi.tuiguangtime + "天，消耗钱币：" + jiexijsongeshi.koujinbi);
                break;
    //单据缴费成功时反馈
            case "code:023":
                Gerenshuxing.yongyoudanju = jiexijsongeshi.genxin;
                Gerenshuxing.jinbizhi = parseInt(jiexijsongeshi.youjinbi);
                Gameguanli.Kongzhitai().dingbuui.dingbuchushihua();
                Gameguanli.Kongzhitai().guanLiui.danjuJieMian.chulishujujiajujiegou(Guanlijiemian.dangqianyeqianshu,Guanlijiemian.dangqianyeshu);
                Gameguanli.Kongzhitai().cuowutishixinxi("缴费成功！消耗钱币：" +jiexijsongeshi.jianjinbi);
                break;
    //饭店成功卖出菜时反馈
            case "code:025":
                Gerenshuxing.jinbizhi = parseInt(jiexijsongeshi.shuaxinjinbi);
                Gameguanli.Kongzhitai().dingbuui.dingbuchushihua();
               // Gameguanli.Kongzhitai().cuowutishixinxi("出售成功，获得钱币：" +jiexijsongeshi.sjhuodejinbi);
                let xianshijinbidonghua = new Jinbidonghua(jiexijsongeshi.sjhuodejinbi);
                break; 
    //扣除原材料时反馈
            case "code:027":
                Gerenshuxing.yongyouyuanliao = parseInt(jiexijsongeshi.shuaxinjinbi);
                Gameguanli.Kongzhitai().dingbuui.dingbuchushihua();
                Gameguanli.Kongzhitai().zhujiemiandingbu.anniuchuli();
                if(Gameguanli.Kongzhitai().zhujiemian.parent){
                    let shicaikouchu = new Cailiaoxiaohao();
                    Gameguanli.Kongzhitai().zhujiemian.addChild(shicaikouchu);
                    let zongx = Gameguanli.Kongzhitai().zhujiemiandingbu.zhuangatizu.x;
                    let zongy = Gameguanli.Kongzhitai().zhujiemiandingbu.zhuangatizu.y - Gameguanli.Kongzhitai().zhujiemiandingbu.img_zhuangtaixianshibg.height-shicaikouchu.height /2;
                    shicaikouchu.x = zongx;
                    shicaikouchu.y = zongy;
                    shicaikouchu.wenzineirong.text = "- " + jiexijsongeshi.sjhuodejinbi;
                    egret.Tween.get(shicaikouchu).wait(1000).to({x:zongx,y:zongy - 50},2000).call(()=>{
                                Gameguanli.Kongzhitai().zhujiemian.removeChild(shicaikouchu);
                        })
                }
                break; 
    //增加时间成功时反馈 
            case "code:029":
                 Gerenshuxing.shijian = parseInt(jiexijsongeshi.xiaoshishu);
                 Timeguanli.jisuanshijian();
                 break; 
    //每天刷新时反馈
            case "code:030":
                 Gerenshuxing.shengyuchuandan = parseInt(jiexijsongeshi.shengyuchuandan);
                 Gerenshuxing.shengyudianshi = parseInt(jiexijsongeshi.shengyudianshi);
                 Gerenshuxing.shengyupinglun = parseInt(jiexijsongeshi.shengyupinglun);
                 Gerenshuxing.shengyudaiyan = parseInt(jiexijsongeshi.shengyudaiyan);
                 Gerenshuxing.teshushijian = jiexijsongeshi.teshuchufa;
                 Gerenshuxing.dibaokeliushijian = parseInt(jiexijsongeshi.dibaoshi);
                 if(Gameguanli.Kongzhitai().guanLiui.tuiguangchuandan.parent){
                     Gameguanli.Kongzhitai().guanLiui.tuiguangchuandan.chulishujuluoji(Guanlijiemian.dangqianyeqianshu,Guanlijiemian.dangqianyeshu);
                 }
                 Gerenshuxing.jinbizhi = parseInt(jiexijsongeshi.goldnum);
                 if(Gameguanli.Kongzhitai().dingbuui.parent){
                    Gameguanli.Kongzhitai().dingbuui.dingbuchushihua();
                 }
                 let laoyuangong = Gerenshuxing.shiyongyuangong;
                 Gerenshuxing.shiyongyuangong = jiexijsongeshi.shiyongyuangong;
                 Gerenshuxing.yuangongshuxing();
                 if(Gameguanli.Kongzhitai().zhujiemiandingbu.parent){
                     Gameguanli.Kongzhitai().zhujiemiandingbu.chushihua();
                 }
                 if(Gameguanli.Kongzhitai().guanLiui.yuanGongJieMian.parent){
                     Gameguanli.Kongzhitai().guanLiui.yuanGongJieMian.chulishujujiajujiegou(Guanlijiemian.dangqianyeqianshu,Guanlijiemian.dangqianyeshu);
                 }
                 let jixupinyongyuangong = [];
                 let fangqipinyongyuangong = laoyuangong;
                 for(var yg = 0;yg<Gerenshuxing.shiyongyuangong.length;yg++){
                     for(var ygb = 0;ygb<laoyuangong.length;ygb++){
                         if(Gerenshuxing.shiyongyuangong[yg] == laoyuangong[ygb]){
                             jixupinyongyuangong[jixupinyongyuangong.length] = Gerenshuxing.shiyongyuangong[yg];
                             fangqipinyongyuangong.splice(ygb,1);
                             break;
                         }
                     }
                 }
                Gerenshuxing.yuangongxupin = jixupinyongyuangong;
                Gerenshuxing.yuangongjiepin = fangqipinyongyuangong;
                Gameguanli.Kongzhitai().meirijiesuanjiemian("kai",Gerenshuxing.yuangongxupin,Gerenshuxing.yuangongjiepin);
/*               console.log("剩余传单："+ Gerenshuxing.shengyuchuandan);
                 console.log("剩余电视："+ Gerenshuxing.shengyudianshi);
                 console.log("剩余评论："+ Gerenshuxing.shengyupinglun);
                 console.log("剩余代言："+ Gerenshuxing.shengyudaiyan);
                 console.log("剩余金币："+ Gerenshuxing.jinbizhi);*/
                 break;
    //买菜时增加原材料成功时反馈
            case "code:032":
                Gerenshuxing.yongyouyuanliao = parseInt(jiexijsongeshi.shuaxincailiao);
                Gameguanli.Kongzhitai().zhujiemiandingbu.anniuchuli();
                break;
    //进入菜市场成功
            case "code:034":
                Gerenshuxing.jinbizhi = jiexijsongeshi.jinbi;
                Gerenshuxing.cailanzishu = parseInt(jiexijsongeshi.lanzishu);
                Gerenshuxing.shuaxincishu = parseInt(jiexijsongeshi.shuaxinshu);
                Gameguanli.Kongzhitai().dingbuui.dingbuchushihua();
                Gameguanli.Kongzhitai().changjingrukou("caishichang","guan");
                Gameguanli.Kongzhitai().maicaijiemian("kai");
                break;
    //扣除体力成功时反馈
            case "code:038":
                Gerenshuxing.jiatingzhi = parseInt(jiexijsongeshi.tilizhi);
                if(Gameguanli.Kongzhitai().dingbuui.parent){
                    Gameguanli.Kongzhitai().dingbuui.dingbuchushihua();
                };
                break;
    //体力不足时反馈
            case "code:039":
                Gameguanli.Kongzhitai().cuowutishixinxi("行动力不足");
                break;
    //街道奖励扣除时反馈
            case "code:041":
                switch(jiexijsongeshi.kouchuleixing){
                    case "1":
                        Gerenshuxing.jinbizhi = parseInt(jiexijsongeshi.kouchushuliang);
                        break;
                    case "2":
                        Gerenshuxing.jiatingzhi = parseInt(jiexijsongeshi.kouchushuliang);
                        break;
                    case "3":
                        Gerenshuxing.jiankangzhi = parseInt(jiexijsongeshi.kouchushuliang);
                        //进行幸福等级计算
                        Gerenshuxing.xingfudengjishujujisuan();
                        break;
                    case "4":
                        Gerenshuxing.kaixinzhi = parseInt(jiexijsongeshi.kouchushuliang);
                        //进行幸福等级计算
                        Gerenshuxing.xingfudengjishujujisuan();
                        break;
                    case "5":
                        Gerenshuxing.xingfuzhi = parseInt(jiexijsongeshi.kouchushuliang);
                        break;
                }
                switch(jiexijsongeshi.jianglileixing){
                    case "1":
                        Gerenshuxing.jinbizhi = parseInt(jiexijsongeshi.jianglishuliang);
                        break;
                    case "2":
                        Gerenshuxing.jiatingzhi = parseInt(jiexijsongeshi.jianglishuliang);
                        break;
                    case "3":
                        Gerenshuxing.jiankangzhi = parseInt(jiexijsongeshi.jianglishuliang);
                        //进行幸福等级计算
                        Gerenshuxing.xingfudengjishujujisuan();
                        break;
                    case "4":
                        Gerenshuxing.kaixinzhi = parseInt(jiexijsongeshi.jianglishuliang);
                        //进行幸福等级计算
                        Gerenshuxing.xingfudengjishujujisuan();
                        break;
                    case "5":
                        Gerenshuxing.xingfuzhi = parseInt(jiexijsongeshi.jianglishuliang);
                        break;
                }
                if(Gameguanli.Kongzhitai().dingbuui.parent){
                    Gameguanli.Kongzhitai().dingbuui.dingbuchushihua();
                };
                break;
    ////街道奖励增加时反馈
             case "code:042":
                switch(jiexijsongeshi.jianglileixing){
                    case "1":
                        Gerenshuxing.jinbizhi = parseInt(jiexijsongeshi.jianglishuliang);
                        break;
                    case "2":
                        Gerenshuxing.jiatingzhi = parseInt(jiexijsongeshi.jianglishuliang);
                        break;
                    case "3":
                        Gerenshuxing.jiankangzhi = parseInt(jiexijsongeshi.jianglishuliang);
                        //进行幸福等级计算
                        Gerenshuxing.xingfudengjishujujisuan();
                        break;
                    case "4":
                        Gerenshuxing.kaixinzhi = parseInt(jiexijsongeshi.jianglishuliang);
                        //进行幸福等级计算
                        Gerenshuxing.xingfudengjishujujisuan();
                        break;
                    case "5":
                        Gerenshuxing.xingfuzhi = parseInt(jiexijsongeshi.jianglishuliang);
                        break;
                }
                if(Gameguanli.Kongzhitai().dingbuui.parent){
                    Gameguanli.Kongzhitai().dingbuui.dingbuchushihua();
                };
                break;
    //金币刷新时反馈
            case "code:044":
                Gerenshuxing.jinbizhi =  parseInt(jiexijsongeshi.shuaxinjinbi);
                if(Gameguanli.Kongzhitai().dingbuui.parent){
                    Gameguanli.Kongzhitai().dingbuui.dingbuchushihua();
                };
                break;
    //店铺自动发送结款信息时反馈
            case "code:047":
                Gerenshuxing.jinbizhi =  parseInt(jiexijsongeshi.shuaxinjinbi);
                if(Gameguanli.Kongzhitai().dingbuui.parent){
                    Gameguanli.Kongzhitai().dingbuui.dingbuchushihua();
                };
                let dianpubiao = Gerenshuxing.jiedaobiao;
                let diapuming:string;
                for(var i =0;i<dianpubiao.length;i++){
                    if(dianpubiao[i].id == jiexijsongeshi.id){
                        diapuming = dianpubiao[i].name;
                        Gameguanli.Kongzhitai().cuowutishixinxi("您租用的店铺[" + dianpubiao[i].name + "]已到期，未取出的营业额已自动汇入您的资金账户!");
                        break;
                   }
                }
                break;
    //大儿子回家时数据变更
            case "code:053":
                Gerenshuxing.daerzixinxi = jiexijsongeshi.chengyuan;
                if(Gameguanli.Kongzhitai().jiatingjiemian.parent){
					Gameguanli.Kongzhitai().jiatingjiemian.daerzihuijiashi();
				}
                break;
    //二儿子回家时数据变更
            case "code:054":
                Gerenshuxing.ererzixinxi = jiexijsongeshi.chengyuan;
                if(Gameguanli.Kongzhitai().jiatingjiemian.parent){
					Gameguanli.Kongzhitai().jiatingjiemian.ererzihuijiashi();
				}
                break;
    //媳妇回家时数据变更
            case "code:055":
                Gerenshuxing.xifuxinxi = jiexijsongeshi.chengyuan;
                if(Gameguanli.Kongzhitai().jiatingjiemian.parent){
					Gameguanli.Kongzhitai().jiatingjiemian.xifuhuijiashi();
				}
                break;
    //孙女回家时数据变更
            case "code:056":
                Gerenshuxing.sunnvxinxi = jiexijsongeshi.chengyuan;
                if(Gameguanli.Kongzhitai().jiatingjiemian.parent){
					Gameguanli.Kongzhitai().jiatingjiemian.sunnvhuijiashi();
				}
                break;
    //成员离家时数据变更
            case "code:057":
                Gerenshuxing.sunnvxinxi = jiexijsongeshi.sunnv;
                Gerenshuxing.xifuxinxi = jiexijsongeshi.xifu;
                Gerenshuxing.ererzixinxi = jiexijsongeshi.ererzi;
                Gerenshuxing.daerzixinxi = jiexijsongeshi.daerzi;
                if(Gameguanli.Kongzhitai().jiatingjiemian.parent){
					Gameguanli.Kongzhitai().jiatingjiemian.chengyuanlikaijiashi();
				}
                break;
    //大儿子增加心情数据变更
            case "code:062":
                Gerenshuxing.daerzixinxi = jiexijsongeshi.chengyuan;
                if(Gameguanli.Kongzhitai().jiatingjiemian.parent){
					Gameguanli.Kongzhitai().jiatingjiemian.jiatingchengyuanxianshi();
                    Gameguanli.Kongzhitai().cuowutishixinxi("大儿子回家了，你的心情稍微好了点...");
				};
                if(Gameguanli.Kongzhitai().dingbuui.parent){
                    Gameguanli.Kongzhitai().dingbuui.dingbuchushihua();
                };
                break;
            //二儿子增加心情数据变更
            case "code:063":
                Gerenshuxing.ererzixinxi = jiexijsongeshi.chengyuan;
                if(Gameguanli.Kongzhitai().jiatingjiemian.parent){
					Gameguanli.Kongzhitai().jiatingjiemian.jiatingchengyuanxianshi();
                    Gameguanli.Kongzhitai().cuowutishixinxi("二儿子回家了，上交了一天的工资...");
				};
                if(Gameguanli.Kongzhitai().dingbuui.parent){
                    Gameguanli.Kongzhitai().dingbuui.dingbuchushihua();
                };
                break;
            //大儿媳增加心情数据变更
            case "code:064":
                Gerenshuxing.xifuxinxi = jiexijsongeshi.chengyuan;
                if(Gameguanli.Kongzhitai().jiatingjiemian.parent){
					Gameguanli.Kongzhitai().jiatingjiemian.jiatingchengyuanxianshi();
                    Gameguanli.Kongzhitai().cuowutishixinxi("大儿媳回家了，为你做了不少家务...");
				};
                if(Gameguanli.Kongzhitai().dingbuui.parent){
                    Gameguanli.Kongzhitai().dingbuui.dingbuchushihua();
                };
                break;
            //孙女增加心情数据变更
            case "code:065":
                Gerenshuxing.sunnvxinxi = jiexijsongeshi.chengyuan;
                if(Gameguanli.Kongzhitai().jiatingjiemian.parent){
					Gameguanli.Kongzhitai().jiatingjiemian.jiatingchengyuanxianshi();
                    Gameguanli.Kongzhitai().cuowutishixinxi("乖孙女回家了，你的心情好了不少...");
				};
                if(Gameguanli.Kongzhitai().dingbuui.parent){
                    Gameguanli.Kongzhitai().dingbuui.dingbuchushihua();
                };
                break;
            //添加家庭成员工作成功
            case "code:067":
                switch(jiexijsongeshi.jianglileixing){
                    case "1":
                        Gerenshuxing.daerzixinxi = jiexijsongeshi.shijishuliang;
                        Gerenshuxing.daerzijinxiudingshi();
                        break;
                    case "2":
                        Gerenshuxing.ererzixinxi = jiexijsongeshi.shijishuliang;
                        Gerenshuxing.ererzijinxiudingshi();
                        break;
                    case "3":
                        Gerenshuxing.xifuxinxi = jiexijsongeshi.shijishuliang;
                        Gerenshuxing.xifujinxiudingshi();
                        break;
                    case "4":
                        Gerenshuxing.sunnvxinxi = jiexijsongeshi.shijishuliang;
                        Gerenshuxing.sunnvjinxiudingshi();
                        break;
                }
                console.log(Gerenshuxing.daerzixinxi,Gerenshuxing.ererzixinxi,Gerenshuxing.xifuxinxi,Gerenshuxing.sunnvxinxi);
                break;
    //家庭成员进修扣除成功
            case "code:068":
                switch(jiexijsongeshi.jianglileixing){
                    case "1":
                        Gerenshuxing.jinbizhi = parseInt(jiexijsongeshi.shijishuliang[0]);
                        Gameguanli.Kongzhitai().jianglitanchuui("img_qian_png",jiexijsongeshi.jianglishuliang,"-");
                        break;
                    case "2":
                        Gerenshuxing.jiatingzhi = parseInt(jiexijsongeshi.shijishuliang[0]);
                        Gameguanli.Kongzhitai().jianglitanchuui("img_jiating_png",jiexijsongeshi.jianglishuliang,"-");
                        break;
                    case "3":
                        Gerenshuxing.jiankangzhi = parseInt(jiexijsongeshi.shijishuliang[0]);
                        //进行幸福等级计算
                        Gerenshuxing.xingfudengjishujujisuan();
                        Gameguanli.Kongzhitai().jianglitanchuui("img_jiankang_png",jiexijsongeshi.jianglishuliang,"-");
                        break;
                    case "4":
                        Gerenshuxing.kaixinzhi = parseInt(jiexijsongeshi.shijishuliang[0]);
                        //进行幸福等级计算
                        Gerenshuxing.xingfudengjishujujisuan();
                        Gameguanli.Kongzhitai().jianglitanchuui("img_xinqing_png",jiexijsongeshi.jianglishuliang,"-");
                        break;
                    case "5":
                        Gerenshuxing.xingfuzhi = parseInt(jiexijsongeshi.shijishuliang[0]);
                        Gameguanli.Kongzhitai().jianglitanchuui("img_xingfu_png",jiexijsongeshi.jianglishuliang,"-");
                        break;
                    case "6":
                        Gerenshuxing.daerzixinxi = jiexijsongeshi.shijishuliang;
                        Gameguanli.Kongzhitai().jianglitanchuui("img_daerzixinqinicon_png",jiexijsongeshi.jianglishuliang,"-");
                        break;
                    case "7":
                        Gerenshuxing.ererzixinxi = jiexijsongeshi.shijishuliang;
                        Gameguanli.Kongzhitai().jianglitanchuui("img_ererzixinqinicon_png",jiexijsongeshi.jianglishuliang,"-");
                        break;
                    case "8":
                        Gerenshuxing.xifuxinxi = jiexijsongeshi.shijishuliang;
                        Gameguanli.Kongzhitai().jianglitanchuui("img_xifuxinqingicon_png",jiexijsongeshi.jianglishuliang,"-");
                        break;
                    case "9":
                        Gerenshuxing.sunnvxinxi = jiexijsongeshi.shijishuliang;
                        Gameguanli.Kongzhitai().jianglitanchuui("img_sunnvxinqingicon_png",jiexijsongeshi.jianglishuliang,"-");
                        break;
                    case "10":
                        Gerenshuxing.daerzixinxi = jiexijsongeshi.shijishuliang;
                        Gameguanli.Kongzhitai().jianglitanchuui("img_daerzinengliicon_png",jiexijsongeshi.jianglishuliang,"-");
                        break;
                    case "11":
                        Gerenshuxing.ererzixinxi = jiexijsongeshi.shijishuliang;
                        Gameguanli.Kongzhitai().jianglitanchuui("img_ererzinengliicon_png",jiexijsongeshi.jianglishuliang,"-");
                        break;
                    case "12":
                        Gerenshuxing.xifuxinxi = jiexijsongeshi.shijishuliang;
                        Gameguanli.Kongzhitai().jianglitanchuui("img_xifunengliicon_png",jiexijsongeshi.jianglishuliang,"-");
                        break;
                    case "13":
                        Gerenshuxing.sunnvxinxi = jiexijsongeshi.shijishuliang;
                        Gameguanli.Kongzhitai().jianglitanchuui("img_sunnvnengliicon_png",jiexijsongeshi.jianglishuliang,"-");
                        break;
                    default:
                        this.kouchujingyandaopupanduan(jiexijsongeshi);
                        break;
                }
                if(Gameguanli.Kongzhitai().dingbuui.parent){
                    Gameguanli.Kongzhitai().dingbuui.dingbuchushihua();
                };
                break;
            case "code:073":
                Gerenshuxing.daerzixinxi = jiexijsongeshi.chengyuan;
                break;
            case "code:074":
                Gerenshuxing.ererzixinxi = jiexijsongeshi.chengyuan;
                break;
            case "code:075":
                Gerenshuxing.xifuxinxi = jiexijsongeshi.chengyuan;
                break;
            case "code:076":
                Gerenshuxing.sunnvxinxi = jiexijsongeshi.chengyuan;
                break;
            case "code:081":
                Gerenshuxing.daerzixinxi = jiexijsongeshi.chengyuan;
                break;
            case "code:082":
                Gerenshuxing.ererzixinxi = jiexijsongeshi.chengyuan;
                break;
            case "code:083":
                Gerenshuxing.xifuxinxi = jiexijsongeshi.chengyuan;
                break;
            case "code:084":
                Gerenshuxing.sunnvxinxi = jiexijsongeshi.chengyuan;
                break;
            case "code:088":
                Gerenshuxing.dianshixinxi = jiexijsongeshi.zhuangtai;
                break;
            case "code:090":
                Gerenshuxing.shafaxinxi = jiexijsongeshi.shafaxinxi;
                Gerenshuxing.shafatilihuifu();
                break;
            case "code:093":
                Gerenshuxing.lixianjiangli = jiexijsongeshi.lixianxinxi;
                if(Gameguanli.Kongzhitai().zhujiemian.parent){
                    Gameguanli.Kongzhitai().lixianjiangli();
                }
                break;
            case "code:097":
                Gerenshuxing.paihangbangshuju = jiexijsongeshi;
                /*if(Gameguanli.Kongzhitai().gonggaoui.parent){
                    Gameguanli.Kongzhitai().paihangbangdaui.paixufenshu();
                }*/
                break;
            case "code:099":
                let jiedao = Gerenshuxing.jiedaobiao;
                let dianpuming:string = "";
                for(var i = 0;i < jiedao.length;i++){
                    if(jiedao[i].id == jiexijsongeshi.dianid){
                        dianpuming = jiedao[i].name;
                    }
                }
                Gameguanli.Kongzhitai().paomadengui( "恭喜“"+ jiexijsongeshi.dianzhuren +"”成功收购["+ dianpuming +"]！期待饭店生意红红火火！");
                break;
            case "code:104":
                Gerenshuxing.caipushuxingbiao = jiexijsongeshi;
                break;
            case "code:105":
                Gerenshuxing.jinengbiao = jiexijsongeshi;
                break;
            case "code:106":
                Gerenshuxing.gerendengjibiao = jiexijsongeshi;
                Gerenshuxing.xingfudengjishujujisuan();
                break;
            case "code:107":
                Gerenshuxing.guaiwubiao = jiexijsongeshi;
                break;
            case "code:108":
                Gerenshuxing.putongjiangchi = jiexijsongeshi;
                break;
            case "code:110":
                Gerenshuxing.jiatingzhi=jiexijsongeshi.yongyoutili;
                Gameguanli.Kongzhitai().jianglitanchuui("img_jiating_png",jiexijsongeshi.kouchushu,"-");
                Gameguanli.Kongzhitai().shangjiechenggong();
                if(Gameguanli.Kongzhitai().dingbuui.parent){
                    Gameguanli.Kongzhitai().dingbuui.dingbuchushihua();
                };
                break;
            case "code:121":
                Gerenshuxing.daojubiao = jiexijsongeshi;
                break;
            case "code:122":
                Gerenshuxing.daojushiyongbiao = jiexijsongeshi;
                break;
            case "code:103":
                Gameguanli.Kongzhitai().paomadengui(jiexijsongeshi.neirong);
                break;
            case "code:123":
                Gerenshuxing.tishengxingfula = parseInt(jiexijsongeshi.shuxingzhi);
                Gerenshuxing.xingfudengjishujujisuan();
                break;
            case "code:124":
                Gerenshuxing.tishengxingfuma = parseInt(jiexijsongeshi.shuxingzhi);
                 Gerenshuxing.xingfudengjishujujisuan();
                break;
            case "code:125":
                Gerenshuxing.tishengxingfusuan = parseInt(jiexijsongeshi.shuxingzhi);
                 Gerenshuxing.xingfudengjishujujisuan();
                break;
            case "code:126":
                Gerenshuxing.tishengxingfutian = parseInt(jiexijsongeshi.shuxingzhi);
                 Gerenshuxing.xingfudengjishujujisuan();
                break;
            case "code:128":
                Gerenshuxing.jiesuojiaju = jiexijsongeshi.genxin;
                Gerenshuxing.yuangongshuxing();
                break;
            case "code:130":
                Gerenshuxing.sunnvxuexi = jiexijsongeshi.genxin;
                break;
            case "code:132":
                Gerenshuxing.daerzixuexi = jiexijsongeshi.genxin;
                break;
            case "code:134":
                Gerenshuxing.ererzixuexi = jiexijsongeshi.genxin;
                break;
            case "code:136":
                Gerenshuxing.xifuxuexi = jiexijsongeshi.genxin;
                break;
            case "code:138":
                Gerenshuxing.jiesuoyuangong = jiexijsongeshi.genxin;
                break;
            case "code:140":
                Gerenshuxing.jinbizhi = parseInt(jiexijsongeshi.genxin);
                if(Gameguanli.Kongzhitai().dingbuui.parent){
                    Gameguanli.Kongzhitai().dingbuui.dingbuchushihua();
                };
                break;
            case "code:142":
                Gerenshuxing.jiesuocaipin = jiexijsongeshi.genxin;
                break;
            case "code:144":
                Gerenshuxing.jiankangzhi = jiexijsongeshi.genxin;
                //进行幸福等级计算
                Gerenshuxing.xingfudengjishujujisuan();
                if(Gameguanli.Kongzhitai().dingbuui.parent){
                    Gameguanli.Kongzhitai().dingbuui.dingbuchushihua();
                };
                break;
            case "code:145":
                Gerenshuxing.chaoshishangdianbiao = jiexijsongeshi;
                break;
            case "code:150":
                Gerenshuxing.daerzixinxi = jiexijsongeshi.chengyuan;
                break;
            case "code:151":
                Gerenshuxing.ererzixinxi = jiexijsongeshi.chengyuan;
                break;
            case "code:152":
                Gerenshuxing.xifuxinxi = jiexijsongeshi.chengyuan;
                break;
            case "code:153":
                Gerenshuxing.sunnvxinxi = jiexijsongeshi.chengyuan;
                break;
            case "code:154":
                Gerenshuxing.yongyoudanju = jiexijsongeshi.danju;
                Gameguanli.Kongzhitai().daitutanchukuang("fangzu");
                break;
            case "code:155":
                Gerenshuxing.yongyoudanju = jiexijsongeshi.danju;
                Gameguanli.Kongzhitai().daitutanchukuang("shuidian");
                break;
            case "code:157":
                Gerenshuxing.dibaokeliushijian = jiexijsongeshi.dibaoshi;
                Gerenshuxing.yuangongshuxing();
                Gameguanli.Kongzhitai().zhujiemiandingbu.yinxiaotishixianshi();
                break;
            case "code:159":
                Gerenshuxing.guideuiyindao = parseInt(jiexijsongeshi.genxin);
                Xinshouyindao.chushihua();
                break;
            case "code:160":
                Gerenshuxing.meirirenwuone = jiexijsongeshi.renwu1;
                Gerenshuxing.meirirenwutwo = jiexijsongeshi.renwu2;
                Gerenshuxing.meirirenwutre = jiexijsongeshi.renwu3;
                Gerenshuxing.meirirenwufor = jiexijsongeshi.renwu4;
                Gerenshuxing.tiaozhanbeishu = jiexijsongeshi.tiaozhan;
                break;
            case "code:162":
                if(jiexijsongeshi.zengjialeixing == "1"){
                    Gerenshuxing.meirirenwuone = jiexijsongeshi.zengjiasu;
                    Gameguanli.Kongzhitai().renwuwanchengjindu("1");
                }else if(jiexijsongeshi.zengjialeixing == "2"){
                    Gerenshuxing.meirirenwutwo = jiexijsongeshi.zengjiasu;
                    Gameguanli.Kongzhitai().renwuwanchengjindu("2");
                }else if(jiexijsongeshi.zengjialeixing == "3"){
                    Gerenshuxing.meirirenwutre = jiexijsongeshi.zengjiasu;
                    Gameguanli.Kongzhitai().renwuwanchengjindu("3");
                }else if(jiexijsongeshi.zengjialeixing == "4"){
                    Gerenshuxing.meirirenwufor = jiexijsongeshi.zengjiasu;
                    Gameguanli.Kongzhitai().renwuwanchengjindu("4");
                }
                break;
            case "code:164":
                if(jiexijsongeshi.zengjialeixing == "1"){
                    Gerenshuxing.meirirenwuone = jiexijsongeshi.zengjiasu;
                }else if(jiexijsongeshi.zengjialeixing == "2"){
                    Gerenshuxing.meirirenwutwo = jiexijsongeshi.zengjiasu;
                }else if(jiexijsongeshi.zengjialeixing == "3"){
                    Gerenshuxing.meirirenwutre = jiexijsongeshi.zengjiasu;
                }else if(jiexijsongeshi.zengjialeixing == "4"){
                    Gerenshuxing.meirirenwufor = jiexijsongeshi.zengjiasu;
                }
                break;
            case "code:166":
                let pvpduishouxin = jiexijsongeshi;
                let caipujiagong = pvpduishouxin.caipulevel[0];
                pvpduishouxin.caipulevel = caipujiagong;
                if(Gameguanli.Kongzhitai().pvppipeijiemian.parent){
                    Gameguanli.Kongzhitai().pvppipeijiemian.pipeichenggong(pvpduishouxin);
                }else{
                    Gameguanli.Kongzhitai().pvpzhandoujiemian("kai",pvpduishouxin,"1");
                }
                break;
            case "code:168":
                Gerenshuxing.tiaozhanbeishu = jiexijsongeshi.zengjiasu;
                if(Gameguanli.Kongzhitai().pvppipeijiemian.parent){
                    Gameguanli.Kongzhitai().pvppipeijiemian.fanbeianniuchushi();
                }
                if(Gameguanli.Kongzhitai().gonggaoui.parent){
                    Gameguanli.Kongzhitai().gonggaoui.tiaozhanchushihua();
                }
                break;
            case "code:171":
                let pvpsanrenxin = jiexijsongeshi;
                let sanrencaipujiagong = pvpsanrenxin.caipulevel[0];
                pvpsanrenxin.caipulevel = sanrencaipujiagong;
                if(Gameguanli.Kongzhitai().waichudajie.parent){
                    Gameguanli.Kongzhitai().waichudajie.buchongsanrenzhanwei(pvpsanrenxin);
                }
                break;
            case "code:172":
                Gerenshuxing.changshubiao = jiexijsongeshi;
                //console.log("常数表获取成功" + Gerenshuxing.changshubiao);
                break;
            case "code:173":
                Gerenshuxing.jiedaobiao = jiexijsongeshi;
                //console.log("街道表获取成功" + Gerenshuxing.jiedaobiao);
                break;
            case "code:174":
                Gerenshuxing.jiedaosuijibiao = jiexijsongeshi;
                //console.log("街道随机表获取成功" + Gerenshuxing.jiedaosuijibiao);
                break;
            case "code:175":
                Gerenshuxing.jiatingchengyuanhudongbiao = jiexijsongeshi;
                //console.log("家庭成员互动表获取成功" + Gerenshuxing.jiatingchengyuanhudongbiao);
                break;
            case "code:176":
                Gerenshuxing.danjubiao = jiexijsongeshi;
                //console.log("单据表获取成功" + Gerenshuxing.danjubiao);
                break;
            case "code:177":
                Gerenshuxing.jiajubiao = jiexijsongeshi;
                //console.log("家具表获取成功" + Gerenshuxing.jiajubiao);
                break;
            case "code:178":
                Gerenshuxing.jiatingchengyuan = jiexijsongeshi;
                //console.log("家庭成员表获取成功" + Gerenshuxing.jiatingchengyuan);
                break;
            case "code:179":
                Gerenshuxing.zhuozijiesuobiao = jiexijsongeshi;
                //console.log("桌子解锁表获取成功" + Gerenshuxing.zhuozijiesuobiao);
                break;
            case "code:180":
                Gerenshuxing.meirirenwubiao = jiexijsongeshi;
                //console.log("每日任务表获取成功" + Gerenshuxing.meirirenwubiao);
                break;
            case "code:181":
                Gerenshuxing.shipudengjibiao = jiexijsongeshi;
                //console.log("食谱等级表获取成功" + Gerenshuxing.shipudengjibiao);
                break;
            case "code:182":
                Gerenshuxing.shipubiao = jiexijsongeshi;
                //console.log("食谱表获取成功" + Gerenshuxing.shipubiao);
                break;
            case "code:183":
                Gerenshuxing.teshushijianbiao = jiexijsongeshi;
                //console.log("特殊触发表获取成功" + Gerenshuxing.teshushijianbiao);
                break;
            case "code:184":
                Gerenshuxing.yinxiaobiao = jiexijsongeshi;
                //console.log("营销表获取成功" + Gerenshuxing.yinxiaobiao);
                break;
            case "code:185":
                Gerenshuxing.yuangongbiao = jiexijsongeshi;
                //console.log("员工表获取成功" + Gerenshuxing.yuangongbiao);
                break;
            case "code:187":
                Gerenshuxing.tiaozhanbeishu = jiexijsongeshi.zengjiasu;
                if(Gameguanli.Kongzhitai().gonggaoui.parent){
                    Gameguanli.Kongzhitai().gonggaoui.paihangchushihua();
                }
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
            case "code:997":
//                Gerenshuxing.touxiangbaocunzhuangtai = true;
//                Gerenshuxing.touxiang = `http://192.168.1.2/res/resource/resource/wxtx/${Gerenshuxing.uid}.png`;
                break;
            case "code:995":
                Gerenshuxing.mingzi = jiexijsongeshi.mingzi;
                Gerenshuxing.touxiang = jiexijsongeshi.touxiang;
                Gerenshuxing.xingbie = jiexijsongeshi.xingbie;
                Gerenshuxing.shengfen = jiexijsongeshi.shenfen;
                break;
            case "code:994":
                switch(jiexijsongeshi.jianglileixing){
                    case "1":
                        Gerenshuxing.jinbizhi = parseInt(jiexijsongeshi.shijishuliang[0]);
                        Gameguanli.Kongzhitai().jianglitanchuui("img_qian_png",jiexijsongeshi.jianglishuliang,"+");
                        break;
                    case "2":
                        Gerenshuxing.jiatingzhi = parseInt(jiexijsongeshi.shijishuliang[0]);
                        Gameguanli.Kongzhitai().jianglitanchuui("img_jiating_png",jiexijsongeshi.jianglishuliang,"+");
                        break;
                    case "3":
                        Gerenshuxing.jiankangzhi = parseInt(jiexijsongeshi.shijishuliang[0]);
                        //进行幸福等级计算
                        Gerenshuxing.xingfudengjishujujisuan();
                        Gameguanli.Kongzhitai().jianglitanchuui("img_jiankang_png",jiexijsongeshi.jianglishuliang,"+");
                        break;
                    case "4":
                        Gerenshuxing.kaixinzhi = parseInt(jiexijsongeshi.shijishuliang[0]);
                        //进行幸福等级计算
                        Gerenshuxing.xingfudengjishujujisuan();
                        Gameguanli.Kongzhitai().jianglitanchuui("img_xinqing_png",jiexijsongeshi.jianglishuliang,"+");
                        break;
                    case "5":
                        Gerenshuxing.xingfuzhi = parseInt(jiexijsongeshi.shijishuliang[0]);
                        Gameguanli.Kongzhitai().jianglitanchuui("img_xingfu_png",jiexijsongeshi.jianglishuliang,"+");
                        let shangchaun = new Wxjiekoulei(Gerenshuxing.xingfuzhi);
                        let paimingtishi = new Paimingtishi();
                        Gerenshuxing.xingfudengjishujujisuan();//计算一次幸福值等级
                        break;
                    case "6":
                        Gerenshuxing.daerzixinxi = jiexijsongeshi.shijishuliang;
                        Gameguanli.Kongzhitai().jianglitanchuui("img_daerzixinqinicon_png",jiexijsongeshi.jianglishuliang,"+");
                        break;
                    case "7":
                        Gerenshuxing.ererzixinxi = jiexijsongeshi.shijishuliang;
                        Gameguanli.Kongzhitai().jianglitanchuui("img_ererzixinqinicon_png",jiexijsongeshi.jianglishuliang,"+");
                        break;
                    case "8":
                        Gerenshuxing.xifuxinxi = jiexijsongeshi.shijishuliang;
                        Gameguanli.Kongzhitai().jianglitanchuui("img_xifuxinqingicon_png",jiexijsongeshi.jianglishuliang,"+");
                        break;
                    case "9":
                        Gerenshuxing.sunnvxinxi = jiexijsongeshi.shijishuliang;
                        Gameguanli.Kongzhitai().jianglitanchuui("img_sunnvxinqingicon_png",jiexijsongeshi.jianglishuliang,"+");
                        break;
                    case "10":
                        Gerenshuxing.daerzixinxi = jiexijsongeshi.shijishuliang;
                        Gameguanli.Kongzhitai().jianglitanchuui("img_daerzinengliicon_png",jiexijsongeshi.jianglishuliang,"+");
                        break;
                    case "11":
                        Gerenshuxing.ererzixinxi = jiexijsongeshi.shijishuliang;
                        Gameguanli.Kongzhitai().jianglitanchuui("img_ererzinengliicon_png",jiexijsongeshi.jianglishuliang,"+");
                        break;
                    case "12":
                        Gerenshuxing.xifuxinxi = jiexijsongeshi.shijishuliang;
                        Gameguanli.Kongzhitai().jianglitanchuui("img_xifunengliicon_png",jiexijsongeshi.jianglishuliang,"+");
                        break;
                    case "13":
                        Gerenshuxing.sunnvxinxi = jiexijsongeshi.shijishuliang;
                        Gameguanli.Kongzhitai().jianglitanchuui("img_sunnvnengliicon_png",jiexijsongeshi.jianglishuliang,"+");
                        break;
                    default:
                        this.zengjiajingyandaopupanduan(jiexijsongeshi);
                        break;
                }
                if(Gameguanli.Kongzhitai().dingbuui.parent){
                    Gameguanli.Kongzhitai().dingbuui.dingbuchushihua();
                };
                break;
            default:
                console.log("非法服务器参数")
                break;
        }

   }

   public lianjiechenggong(){
       console.log("服务器连接成功:我自己的CODE" + Gerenshuxing.gerencode);
       Gerenshuxing.wangluolianjie = true;
       Gameguanli.Kongzhitai().dingbuui.wangluolianjietishi();
       let openid:string = "openid";
        var score:string = egret.localStorage.getItem(openid);
        console.log("本地记录的uid:" + score);
       if(score != undefined && score != "undefined"){
            Gerenshuxing.uid = score;
        }
       Weblianjie.fasongshuju("code:999","{" + '"id"' +":"+ '"' + Gerenshuxing.gerencode + '"' +","
				+ '"touxaing"' + ":"+ '"' + Gerenshuxing.touxiang + '"' + ","
                + '"uid"' + ":"+ '"' + Gerenshuxing.uid + '"' +","
				+ '"shouci"' + ":"+ '"' + Gerenshuxing.shouci + '"'+  "}");

   }

   public lianjieguanbi(){
  //     Gameguanli.Kongzhitai().cuowutishixinxi("服务器连接已关闭！");
       console.log("服务器连接已断开！");
       Gerenshuxing.wangluolianjie = false;
        Gameguanli.Kongzhitai().dingbuui.wangluolianjietishi();
   }

   public lianjieyichang(){
  //     Gameguanli.Kongzhitai().cuowutishixinxi("服务器连接异常！");
       console.log("服务器连接已断开！2");
       Gerenshuxing.wangluolianjie = false;
       Gameguanli.Kongzhitai().dingbuui.wangluolianjietishi();
       /*
       尝试重新连接服务器
       */
   }

//向服务器发送数据接口
   public static fasongshuju(code,message){
       /*
       检测网络状态，如果已经断开，则需要重新申请连接
       */
      if(Gerenshuxing.wangluolianjie == false){
          //Weblianjie.lianjieserver.connect("192.168.1.4", 3010);
          Weblianjie.lianjieserver.connectByUrl("wss://www.qinghegame.com:3010/");
      }else{
          //调用登录接口
        Weblianjie.lianjieserver.writeUTF(code+message);
        Weblianjie.lianjieserver.flush();
      }
   }


   //统一扣除经验道具回调
   public kouchujingyandaopupanduan(jiexijsongeshi){
       if(parseInt(jiexijsongeshi.jianglileixing) >= 1000 && parseInt(jiexijsongeshi.jianglileixing) < 10000){
        let caipubiao = Gerenshuxing.shipubiao;
        for(var i = 0;i<caipubiao.length;i++){
            if(caipubiao[i].id == jiexijsongeshi.jianglileixing){
               Gameguanli.Kongzhitai().jianglitanchuui(caipubiao[i].id + "_png",jiexijsongeshi.jianglishuliang,"-");
               break; 
            }
        }
      }else if(parseInt(jiexijsongeshi.jianglileixing) >= 10000){
          for(var j =0;j<Gerenshuxing.daojubiao.length;j++){
            if(Gerenshuxing.daojubiao[j].id == jiexijsongeshi.jianglileixing){
               Gameguanli.Kongzhitai().jianglitanchuui(Gerenshuxing.daojubiao[j].xianshiicon,jiexijsongeshi.jianglishuliang,"-");
               break; 
            }  
          }
      }
   }

   //统一增加经验道具回调
   public zengjiajingyandaopupanduan(jiexijsongeshi){
       if(parseInt(jiexijsongeshi.jianglileixing) >= 1000 && parseInt(jiexijsongeshi.jianglileixing) < 10000){
        let caipubiao = Gerenshuxing.shipubiao;
        for(var i = 0;i<caipubiao.length;i++){
            if(caipubiao[i].id == jiexijsongeshi.jianglileixing){
               Gameguanli.Kongzhitai().jianglitanchuui(caipubiao[i].id + "_png",jiexijsongeshi.jianglishuliang,"+");
               break; 
            }
        }
      }else if(parseInt(jiexijsongeshi.jianglileixing) >= 10000){
          
          for(var j =0;j<Gerenshuxing.daojubiao.length;j++){0
            if(Gerenshuxing.daojubiao[j].id == jiexijsongeshi.jianglileixing){
               Gameguanli.Kongzhitai().jianglitanchuui(Gerenshuxing.daojubiao[j].xianshiicon,jiexijsongeshi.jianglishuliang,"+");
               break; 
            }  
          }
      }
   }

   public gerenshujushangchuan(){
  //      Gerenshuxing.mingzi = user.nickName;
 //       Gerenshuxing.touxiang = "https://wx.qlogo.cn/mmopen/vi_32/MF7PLicF44H0djnvbeGDWKKPu60fbrbLKfx8jATpsN9d6paWg0ictyCnY8uAqiaXPcfDLAI1q7IQGHI22ZQZAV4HQ/132";
 //       Gerenshuxing.touxiang = user.avatarUrl;
 //       Gerenshuxing.shengfen = user.province;
 //       console.log("名字：" + Gerenshuxing.mingzi,"头像：" + Gerenshuxing.touxiang,"省份:" + Gerenshuxing.shengfen);
        if(Gerenshuxing.gerenshuju != "jujue" && Gerenshuxing.gerenshuju != null){
            Weblianjie.fasongshuju("code:996","{" + '"mingzi"' +":"+ '"' + Gerenshuxing.gerenshuju.nickName + '"' +","
				+ '"touxiang"' +":"+ '"' + Gerenshuxing.gerenshuju.avatarUrl + '"' +"," 
				+ '"xingbie"' +":"+ '"' + Gerenshuxing.gerenshuju.gender + '"' +","
                + '"shengfen"' +":"+ '"' + Gerenshuxing.gerenshuju.province + '"' +","
				+ '"uid"' + ":"+ '"' + Gerenshuxing.uid + '"' + "}");
        }
   }

   public async kaifangyupaiming(){
        await platform.openDataContext.postMessage({
                title:"nihao",
                text:"你好",
                time:(new Date()).getFullYear() + 1,
                command:"loadRes"
        })
        await platform.openDataContext.postMessage({
            time:(new Date()).getFullYear() + 2,
            uid:Gerenshuxing.uid
        })
   }


}