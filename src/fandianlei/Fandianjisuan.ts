class Fandianjisuan extends egret.DisplayObjectContainer{
    public static jinlairenshu:number;
    public static shangcaisudu:number = 0;

    public constructor(){
        super();

    }

    public static chushihuajisuan(opendingshi?:number){
    let yuangongbiao:any = RES.getRes("yuangongbiao_json");
    for (var y = 0;y<yuangongbiao.length;y++){
        if(yuangongbiao[y].id == Gerenshuxing.shiyongyuangong[y]){
            if(yuangongbiao[y].skill == 5){
                Gerenshuxing.chushishangcaisudu += yuangongbiao[y].skillparameter;
            }
            if(yuangongbiao[y].skill == 6){
                Gerenshuxing.weishengzhi += yuangongbiao[y].skillparameter;
            }
            if(yuangongbiao[y].skill == 8){
                Gerenshuxing.anbaozhi += yuangongbiao[y].skillparameter;
            }
            if(yuangongbiao[y].skill == 7){
                Gerenshuxing.yuanliaoxiaohao += yuangongbiao[y].skillparameter;
            }
        }
    }

//当前客容量计算
        let jiajubiaobianli:any = RES.getRes("jiajubiao_json");
        for(var i = 0 ;i<jiajubiaobianli.length;i++){
            if(jiajubiaobianli[i].id == Gerenshuxing.usexiaochao || jiajubiaobianli[i].id == Gerenshuxing.usehuoguo
            || jiajubiaobianli[i].id == Gerenshuxing.usexiaochi || jiajubiaobianli[i].id == Gerenshuxing.usezaocan){
                Gerenshuxing.kerongliang += parseInt(jiajubiaobianli[i].onkeliushu);
            }
            for(var j = 0;j<Gerenshuxing.jiesuojiaju.length;j++){
                if(jiajubiaobianli[i].id == Gerenshuxing.jiesuojiaju[j]){
                    Gerenshuxing.kerongliang = Gerenshuxing.kerongliang + parseInt(jiajubiaobianli[i].keliushu);
                }
            }
        } 
 //       console.log("当前客容量：" +Fandianjisuan.rongkeliang);

//当前客流量计算
        let yinxiaobiao:any = RES.getRes("yinxiaobiao_json");
        if(Gerenshuxing.shengyuchuandan > 0){
            Gerenshuxing.keliuliang += parseInt(yinxiaobiao[0].sellachievement);
        }
        if(Gerenshuxing.shengyudianshi > 0){
            Gerenshuxing.keliuliang += parseInt(yinxiaobiao[1].sellachievement);
        }
//        console.log("当前客流量：" +Fandianjisuan.keliuliang);

//当前口碑值计算
        if(Gerenshuxing.shengyupinglun > 0){
            Gerenshuxing.koubeizhi += parseInt(yinxiaobiao[2].sellachievement);
        }
        if(Gerenshuxing.shengyudaiyan > 0){
            Gerenshuxing.koubeizhi += parseInt(yinxiaobiao[3].sellachievement);
        }
//        console.log("当前口碑值：" +Fandianjisuan.koubeizhi);

//推送数据进行计算

//设定一个循环定时器
        var xunhuankaishi:egret.Timer = new egret.Timer(Gerenshuxing.jiesuantime,1);
        xunhuankaishi.start();
		xunhuankaishi.addEventListener(egret.TimerEvent.TIMER_COMPLETE,Fandianjisuan.jisuanfandianshuju,this);
    }


    public static jisuanfandianshuju(){
        Fandianjisuan.chushihuajisuan();
        this.jinlairenshu = 0;
        let zuidakeren:number = 0;
        if(Gerenshuxing.keliuliang <= Gerenshuxing.kerongliang){
            zuidakeren = Math.floor(Gerenshuxing.keliuliang / 10);
        }else{
            zuidakeren = Math.floor(Gerenshuxing.kerongliang / 10);
        }
        for (var i = 0;i<zuidakeren;i++){
            let shuiji:number = Math.floor(Math.random() * 100);
            if(shuiji <= Gerenshuxing.koubeizhi){
                this.jinlairenshu += 1;
            }
        }
        console.log("进来人数：" + this.jinlairenshu); 
        Fandianjisuan.chuangjianrenwu();

    }


    public static chuangjianrenwu(){
        if(this.jinlairenshu > 0){
            let yanchisuiji = Math.random() * 10000 + 1;
            let dingshichuren = new egret.Timer(yanchisuiji,1);
            dingshichuren.addEventListener(egret.TimerEvent.TIMER,this.kaishishengchengjuese,this);
            dingshichuren.start();
        }
    }

    public static kaishishengchengjuese(){
        this.jinlairenshu = this.jinlairenshu - 1;
        let caipuliebiao:any = RES.getRes("shipubiao_json");
        let gukexuqiucai:any;
        let caipinming:string;
        var xuqiucaiid = Math.floor( Math.random() * Gerenshuxing.jiesuocaipin.length);
        for (var o = 0;o < caipuliebiao.length;o++){
            if(caipuliebiao[o].id == Gerenshuxing.jiesuocaipin[xuqiucaiid]){
                gukexuqiucai = caipuliebiao[o].id;
                caipinming = caipuliebiao[o].foodName;
                break;
            }
        }
        if(gukexuqiucai >= 1000 && gukexuqiucai < 2000 && Gerenshuxing.jiesuoxiaochao == "1"){
            Fandianjisuan.chuangjianrenwu();
            let kaishichuren = new Donghuabifang(gukexuqiucai,caipinming);  
        }else if(gukexuqiucai >= 2000 && gukexuqiucai < 3000 && Gerenshuxing.jiesuohuoguo == "1"){
            Fandianjisuan.chuangjianrenwu();
            let kaishichuren = new Donghuabifang(gukexuqiucai,caipinming);
        }else if(gukexuqiucai >= 3000 && gukexuqiucai < 4000 && Gerenshuxing.jiesuoxiaochi == "1"){
            Fandianjisuan.chuangjianrenwu();
            let kaishichuren = new Donghuabifang(gukexuqiucai,caipinming);
        }else if(gukexuqiucai >= 4000 && gukexuqiucai < 5000 && Gerenshuxing.jiesuozaocan == "1"){
            Fandianjisuan.chuangjianrenwu();
            let kaishichuren = new Donghuabifang(gukexuqiucai,caipinming);
        }
    }


















}