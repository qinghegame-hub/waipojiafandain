class Fandianjisuan extends egret.DisplayObjectContainer{
    public static jinlairenshu:number;
    public static shangcaisudu:number = 0;
//    public static xunhuankaishi:egret.Timer;

    public constructor(){
        super();

    }

    public static chushihuajisuan(opendingshi?:number){
        //调用员工属性计算
        Gerenshuxing.yuangongshuxing();
//设定一个循环定时器
        let xunhuankaishi = new egret.Timer(Gerenshuxing.jiesuantime,1);
        xunhuankaishi.start();
		xunhuankaishi.addEventListener(egret.TimerEvent.TIMER_COMPLETE,this.jisuanfandianshuju,this);
    }


    public static jisuanfandianshuju(){
        Fandianjisuan.chushihuajisuan();
        this.jinlairenshu = 0;
        let zuidakeren:number = 0;
        if(Gerenshuxing.zzkeliuliang <= Gerenshuxing.zzkerongliang){
            zuidakeren = Math.floor(Gerenshuxing.zzkeliuliang / 10);
        }else{
            zuidakeren = Math.floor(Gerenshuxing.zzkerongliang / 10);
        }
        for (var i = 0;i<zuidakeren;i++){
            let shuiji:number = Math.floor(Math.random() * 100);
            if(shuiji <= Gerenshuxing.zzkoubeizhi){
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