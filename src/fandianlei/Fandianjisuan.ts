class Fandianjisuan extends egret.DisplayObjectContainer{
    public static jinlairenshu:number;
    public static shangcaisudu:number = 0;

    public static xunhuankaishi:egret.Timer;
//    public static xunhuankaishi:egret.Timer;

    public constructor(){
        super();

    }

    public static chushihuajisuan(opendingshi?:number){
        //调用员工属性计算
        if(opendingshi == 1){
            Gerenshuxing.yuangongshuxing();
//设定一个循环定时器
            this.xunhuankaishi = new egret.Timer(Gerenshuxing.jiesuantime,1);
            this.xunhuankaishi.addEventListener(egret.TimerEvent.TIMER,this.jisuanfandianshuju,this);
            this.xunhuankaishi.start();
        }else if(opendingshi == 0){
            if(this.xunhuankaishi != null){
                this.xunhuankaishi.stop();
                this.xunhuankaishi.removeEventListener(egret.TimerEvent.TIMER,this.jisuanfandianshuju,this);
                this.xunhuankaishi = null;
            }
        }
    }


    public static jisuanfandianshuju(){
        Fandianjisuan.chushihuajisuan(1);
        this.kaishijisuanwaimai();
        this.jinlairenshu = 1;
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
            let yanchisuiji = Math.random() * 5000 + 1;
            let dingshichuren = new egret.Timer(yanchisuiji,1);
            dingshichuren.addEventListener(egret.TimerEvent.TIMER,this.kaishishengchengjuese,this);
            dingshichuren.start();
        }
    }

    public static kaishishengchengjuese(){
        this.jinlairenshu = this.jinlairenshu - 1;
        let suijichupve = Math.floor(Math.random() * 100);
        if(suijichupve >= 95){
            if(Gameguanli.Kongzhitai().zhujiemian.parent){
                let kaishichuren = new Donghuabifang("pve","0");
            }
        }else{
            let caipuliebiao:any = Gerenshuxing.shipubiao;
            let gukexuqiucai:any;
            let caipinming:string;
            let kexuanyongzu:any = [];
            for(var r = 0;r < Gerenshuxing.jiesuocaipin.length;r++){
                if(Gerenshuxing.jiesuoxiaochao == "1" && parseInt(Gerenshuxing.jiesuocaipin[r]) >= 1000 && parseInt(Gerenshuxing.jiesuocaipin[r]) < 2000){
                    kexuanyongzu.push(Gerenshuxing.jiesuocaipin[r]);
                }
                if(Gerenshuxing.jiesuohuoguo == "1" && parseInt(Gerenshuxing.jiesuocaipin[r]) >= 2000 && parseInt(Gerenshuxing.jiesuocaipin[r]) < 3000){
                    kexuanyongzu.push(Gerenshuxing.jiesuocaipin[r]);
                }
                if(Gerenshuxing.jiesuoxiaochi == "1" && parseInt(Gerenshuxing.jiesuocaipin[r]) >= 3000 && parseInt(Gerenshuxing.jiesuocaipin[r]) < 4000){
                    kexuanyongzu.push(Gerenshuxing.jiesuocaipin[r]);
                }
                if(Gerenshuxing.jiesuozaocan == "1" && parseInt(Gerenshuxing.jiesuocaipin[r]) >= 4000 && parseInt(Gerenshuxing.jiesuocaipin[r]) < 5000){
                    kexuanyongzu.push(Gerenshuxing.jiesuocaipin[r]);
                }
            }
            var xuqiucaiid = Math.floor( Math.random() * kexuanyongzu.length);
            for (var o = 0;o < caipuliebiao.length;o++){
                if(parseInt(caipuliebiao[o].id) == parseInt(kexuanyongzu[xuqiucaiid])){
                    //这里可以按照天气和日期设置客户需求的用餐类型和几率
                    gukexuqiucai = parseInt(caipuliebiao[o].id);
                    caipinming = caipuliebiao[o].foodName;
                    break;
                }
            }
            if(gukexuqiucai >= 1000 && gukexuqiucai < 2000 && Gerenshuxing.jiesuoxiaochao == "1"){
                Fandianjisuan.chuangjianrenwu();
                if(Gameguanli.Kongzhitai().zhujiemian.parent){
                    let kaishichuren = new Donghuabifang(gukexuqiucai,caipinming);
                }  
            }else if(gukexuqiucai >= 2000 && gukexuqiucai < 3000 && Gerenshuxing.jiesuohuoguo == "1"){
                Fandianjisuan.chuangjianrenwu();
                if(Gameguanli.Kongzhitai().zhujiemian.parent){
                    let kaishichuren = new Donghuabifang(gukexuqiucai,caipinming);
                } 
            }else if(gukexuqiucai >= 3000 && gukexuqiucai < 4000 && Gerenshuxing.jiesuoxiaochi == "1"){
                Fandianjisuan.chuangjianrenwu();
                if(Gameguanli.Kongzhitai().zhujiemian.parent){
                    let kaishichuren = new Donghuabifang(gukexuqiucai,caipinming);
                } 
            }else if(gukexuqiucai >= 4000 && gukexuqiucai < 5000 && Gerenshuxing.jiesuozaocan == "1"){
                Fandianjisuan.chuangjianrenwu();
                if(Gameguanli.Kongzhitai().zhujiemian.parent){
                    let kaishichuren = new Donghuabifang(gukexuqiucai,caipinming);
                } 
            }

        }
    }

    public static kaishijisuanwaimai(){
        let waimaicaijilv = Math.floor(Math.random() * 100);
        if(Gerenshuxing.waimaixiaolv >= waimaicaijilv){
            let caipubiao:any = Gerenshuxing.shipubiao;
            let dingdancaiid:any;
            let tiaoxuancai = Math.floor( Math.random() * Gerenshuxing.jiesuocaipin.length);
            dingdancaiid = Gerenshuxing.jiesuocaipin[tiaoxuancai];
            Waimailuoji.zhujiemianluoji(dingdancaiid);
        }

    }


















}