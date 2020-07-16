class Donghuabifang extends egret.DisplayObjectContainer{
    public donghuaid;
    //动画动作的名称
    public dongzuomingcheng ;
    //动画资源的结构
    public skeletonData;
    //动画资源的指向文件
    public textureData;
    //动画资源的资源文件
    public texture;
    //创建的龙骨工厂
    public donghuagongchang:dragonBones.EgretFactory;
    //创建的骨架
    public dongzuoshiti:dragonBones.Armature;
    //创建的龙骨动画显示对象
    public donghuaxianshi;
    //获取当前屏幕所需的动画出现初始位置参照
    public zongX;
    public zongY;
    //角色每一步所行走的距离x
    public bujinchangdux:number = 0.03;
    //角色每一步所行走的距离Y
    public bujinchangduy:number = 0.03;
    //创建的定时行走
    public chongfudingshi;
    //暂停定时行走行定时器
    public zantingjishi;
    //需求的菜品id
    public xuqiucaiid;
    //创建的头顶显示对象容器
    public toudinggruop:any;
    //创建一个动画和头顶的显示容器
    public juesexianshi;
    //头顶容器的底框
    public toudingdikuang;
    //头顶容器的图片
    public toudingimg;
    //第2层初始化
    public di2cengpoint:Boolean = false;
    public panduan2cengzx:number;

    //是否进入卫生通过
    public weishengtongguo:Boolean = false;

    //是否进入原料通过
    public yuanliaozugou:Boolean = false;

    //Ai行为状态初始化
    public xingzoustep:number = 0;
    public di1zuocai:Boolean = false;

    //头顶文字显示内容状态
    public tdWenzi:number = 0;
    public tdWenzi0 = [];
    public tdWenzi1 = [];
    public tdWenzi2 = [];
    public tdWenzi3 = [];
    public tdWenzi4 = [];
    public toudingdingshi;
    public tdWenziduixiang:Toudingwenzi;
    public caipinmingcheng:string;

    //手动上菜开关
    public shoudong:Boolean = false;
    public panduandingshi:any;

    //新手引导ui
    public putongxinshouyindao:Xinshouyindaodakuang;

    //PVE寻路ai
    public pvexunluai:number;


    public constructor(num1,mun2){
        super();
        this.kaishidonghua(num1,mun2);
    }


    private kaishidonghua(num1,mun2) {
        let donghuaming:string = "xingzou";
        let gugeming:string = "1001";
        let texpng:string = "1001_tex_png";
        let skeming:string = "1001_ske_json";
        let texjson:string = "1001_tex_json";
        let donghuapeizhi = RES.getRes("longgudonghuapeizhi_json");
        let suijidonghua = Math.floor(Math.random() * donghuapeizhi.length);
        let shiyongpeizhi = donghuapeizhi[suijidonghua];
        donghuaming = shiyongpeizhi.donghua;
        gugeming = shiyongpeizhi.gugeming;
        texpng = shiyongpeizhi.tujiming;
        skeming = shiyongpeizhi.skeming;
        texjson = shiyongpeizhi.texming;
        if(num1 == "pve"){
            this.pveshangcai(num1,mun2,donghuaming,gugeming,texpng,skeming,texjson);
        }else{
            this.putongshangcai(num1,mun2,donghuaming,gugeming,texpng,skeming,texjson);
        }
     }

    private pveshangcai(num1,mun2,donghuaming,gugeming,texpng,skeming,texjson){
        this.juesexianshi = new egret.DisplayObjectContainer();
        Gameguanli.Kongzhitai().zhujiemian.addChild(this.juesexianshi);
         //获取坐标位置
        this.zongX = Gameguanli.Kongzhitai().zhujiemian.img_fandianyuanhuabg0.width;
        this.zongY = Gameguanli.Kongzhitai().zhujiemian.img_fandianyuanhuabg0.height;
        this.juesexianshi.x = this.zongX * 0.088 - this.juesexianshi.width / 2;
        this.juesexianshi.y = this.zongY * 0.865 - this.juesexianshi.height;
        //使用动画资源的动作名称
        this.dongzuomingcheng = donghuaming;
        //动画资源获取
        this.skeletonData = RES.getRes(skeming);
        this.textureData = RES.getRes(texjson);
        this.texture = RES.getRes(texpng);
        //创建龙骨工厂
        this.donghuagongchang = dragonBones.EgretFactory.factory;
        //对动画资源进行工厂的解析
        this.donghuagongchang.parseDragonBonesData(this.skeletonData);
        this.donghuagongchang.parseTextureAtlasData(this.textureData,this.texture);
        //对动画资源的纹理内容进行解析
        //建立骨架
        this.dongzuoshiti = this.donghuagongchang.buildArmature(gugeming);
        //创建一个显示对象
        this.donghuaxianshi = this.dongzuoshiti.display;
        //给对象添加相应的样式，并添加到舞台
        this.juesexianshi.addChild(this.donghuaxianshi);
        //启动骨骼动画播放
        this.dongzuoshiti.animation.play(this.dongzuomingcheng);
       //添加到世界时钟里
        dragonBones.WorldClock.clock.add(this.dongzuoshiti);
        //创建头顶容器和显示内容
        this.toudinggruop = new Pvebiaozhiui();
        this.juesexianshi.addChild(this.toudinggruop);
//        this.toudinggruop.but_pveqipaoanniu.enabled = true;
        this.toudinggruop.x = 0 - this.donghuaxianshi.width / 2 - this.toudinggruop.width / 4;
        this.toudinggruop.y = 0 - this.toudinggruop.height - this.donghuaxianshi.height;

        //改变动画的播放速度
        dragonBones.WorldClock.clock.timeScale = 1.3;

        this.chongfudingshi = new egret.Timer(1000,0);
        //初始化怪物寻路AI
        if(Gerenshuxing.guideuiyindao == 16){
            this.pvexunluai = 0;
        }else{
            this.pvexunluai = Math.floor(Math.random() * 4);
        }
        //给显示对象添加缓动动画
        this.chongfudingshi.addEventListener(egret.TimerEvent.TIMER,this.bofangdonghuapve,this);
        this.chongfudingshi.start();

        //给头顶气泡增加点击效果
        this.toudinggruop.but_pveqipaoanniu.addEventListener(egret.TouchEvent.TOUCH_TAP,this.pvezhandoumokuai,this);


    }

    private pvezhandoumokuai(){
        Gamesound.Soundkongzhi().anniuyinxiao();
        //角色消失时，移除相应的显示内容；
        this.yichujuesepve();
        /*
        战斗模块，这时候应该刷新怪物，进入战斗模式
        */
        let suijizuidazhi =  Gerenshuxing.xingfudengji * 10;
        let zhuguaishuiji = Math.floor(Math.random() * suijizuidazhi);
        if(zhuguaishuiji == 0){
            zhuguaishuiji = 1;
        }
        let xiaoguai1shuiji =  Math.floor(Math.random() * suijizuidazhi);
        if(xiaoguai1shuiji == 0){
            xiaoguai1shuiji = 1;
        }
        let xiaoguai2shuiji =  Math.floor(Math.random() * suijizuidazhi);
        if(xiaoguai2shuiji == 0){
            xiaoguai2shuiji = 1;
        }
        if(Gerenshuxing.guideuiyindao == 16){
            zhuguaishuiji = 1;
            xiaoguai1shuiji = 2;
            xiaoguai2shuiji = 3;
        }
        Gameguanli.Kongzhitai().zhandoujiemianui("kai",zhuguaishuiji + "",xiaoguai1shuiji + "",xiaoguai2shuiji + "");
    }

    private bofangdonghuapve(){
         if(this.pvexunluai == 0){
             switch(this.xingzoustep){
                case 0:
                    this.xingzoupindi(1);
                    if(Gerenshuxing.guideuiyindao == 16){
                        if(this.juesexianshi.x >= this.zongX * 0.56){
                            Gameguanli.Kongzhitai().dingbuui.removeChild(Xinshouyindao.yindaojiemian);
                            this.chongfudingshi.stop();
                            this.putongxinshouyindao = new Xinshouyindaodakuang();
                            Gameguanli.Kongzhitai().zhujiemiandingbu.addChild(this.putongxinshouyindao);
                            this.putongxinshouyindao.dakuangzu.x = Gameguanli.Kongzhitai().width / 2 - this.putongxinshouyindao.dakuangzu.width / 2;
                            this.putongxinshouyindao.dakuangzu.y = Gameguanli.Kongzhitai().height / 2 - this.putongxinshouyindao.dakuangzu.height / 2;
                            this.putongxinshouyindao.xiaokuangzu.alpha = 0;
                            this.putongxinshouyindao.dakuangzu.alpha = 1;
                            this.putongxinshouyindao.yindaoshouzhi.alpha = 0;
                            this.putongxinshouyindao.xiaokuangzu.touchEnabled = false;
                            this.putongxinshouyindao.dakuangzu.touchEnabled = false;
                            this.putongxinshouyindao.yindaoshouzhi.touchEnabled = false;
                            this.putongxinshouyindao.dakuangwenzi.text = "食客到达就餐区域，可以开始上菜了！！";
                            this.putongxinshouyindao.heisezhezhaodianji.touchEnabled = true;
                            this.putongxinshouyindao.heisezhezhaodianji.addEventListener(egret.TouchEvent.TOUCH_TAP,this.yindao_1_1,this);
                        }
                    }else{
                        if(this.juesexianshi.x >= this.zongX * 0.96){
                            this.xingzoupindi(-1);
                            this.xingzoustep = 1;
                        }
                    }
                    break;
                case 1:
                    this.xingzoupindi(-1);
                    if(this.juesexianshi.x <= this.zongX * 0.088){
                        //角色消失时，移除相应的显示内容；
                        this.yichujuesepve();
                    }
                    break;
            }
         }else if(this.pvexunluai == 1){
             switch(this.xingzoustep){
                case 0:
                    if(this.juesexianshi.x < this.zongX * 0.96 ){
                        this.xingzoupindi(1);
                    }else{
                        this.juesexianshi.x = this.zongX * 0.98 + this.donghuaxianshi.width / 2;
                        this.xingzoustep = 1;
                        this.xinzoulouti(-1);
                    }
                    break;
                case 1:
                    if(this.juesexianshi.y < this.zongY * 0.620 + this.juesexianshi.height / 5 * 2){
                        this.xingzoustep = 2;
                        this.xinzoulouti(-1);
                    }else{
                        this.xinzoulouti(-1);
                    }
                    break;
                case 2:
                    let panduan2cengzxjl = Math.floor(Math.random() * 2);
                    if(panduan2cengzxjl < 1){
                        this.panduan2cengzx = 0;
                    }else{
                        this.panduan2cengzx = 1;
                    }
                    if(this.panduan2cengzx == 0){
                        this.xingzoustep = 3;
                        this.juesexianshi.x = this.zongX * 0.760 - this.donghuaxianshi.width / 2;
                        this.juesexianshi.y = this.zongY * 0.620;
                        this.xingzoupindi(-1);
                    }else{
                        this.xingzoustep = 4;
                        this.juesexianshi.x = this.zongX * 0.760 - this.donghuaxianshi.width / 2;
                        this.juesexianshi.y = this.zongY * 0.620;
                        this.xingzoupindi(1);
                    }
                    break;
                case 3:
                    if(this.juesexianshi.x <= this.zongX * 0.210){
                            this.xingzoustep = 5;
                            this.xingzoupindi(1);
                    }else{
                        this.xingzoupindi(-1);
                    }
                    break;
                case 4:
                    if(this.juesexianshi.x >= this.zongX * 0.960){
                            this.xingzoustep = 6;
                            this.xingzoupindi(-1)
                    }else{
                        this.xingzoupindi(1);
                    }
                    break;
                case 5:
                    if(this.juesexianshi.x >= this.zongX * 0.760){
                            this.juesexianshi.x = this.zongX * 0.760 ;
                            this.xingzoustep = 7;
                            this.xinzoulouti(1);
                    }else{
                        this.xingzoupindi(1);
                    }
                    break;
                case 6:
                    if(this.juesexianshi.x <= this.zongX * 0.760){
                            this.juesexianshi.x = this.zongX * 0.760 ;
                            this.xingzoustep = 7;
                            this.xinzoulouti(1);       
                    }else{
                        this.xingzoupindi(-1);
                    }
                    break;
                case 7:
                    if(this.juesexianshi.y >= this.zongY * 0.865 - this.juesexianshi.height / 5 * 2){
                            this.juesexianshi.x = this.zongX * 0.980;
                            this.juesexianshi.y = this.zongY * 0.865;
                            this.xingzoustep = 8;
                            this.xingzoupindi(-1);
                    }else{
                        this.xinzoulouti(1);
                    }
                    break;
                case 8:
                    this.xingzoupindi(-1);
                    if(this.juesexianshi.x <= this.zongX * 0.088){
                        //角色消失时，移除相应的显示内容；
                        this.yichujuesepve();
                    }else{
                        this.xingzoupindi(-1);
                    }
                    break;
            }
         }else if(this.pvexunluai == 2){
             switch(this.xingzoustep){
                case 0:
                    if(this.juesexianshi.x < this.zongX * 0.96 ){
                        this.xingzoupindi(1);
                    }else{
                        this.juesexianshi.x = this.zongX * 0.98 + this.donghuaxianshi.width / 2;
                        this.xingzoustep = 1;
                        this.xinzoulouti(-1);
                    }
                    break;
                case 1:
                    if(this.juesexianshi.y < this.zongY * 0.620 + this.juesexianshi.height / 5 * 2){
                        this.xingzoustep = 2;
                        this.juesexianshi.x = this.zongX * 0.760 - this.donghuaxianshi.width / 2;
                        this.juesexianshi.y = this.zongY * 0.620;
                        this.xingzoupindi(-1);
                    }else{
                        this.xinzoulouti(-1);
                    }
                    break;
                case 2:
                    if(this.juesexianshi.x <= this.zongX * 0.376){
                        this.juesexianshi.x = this.zongX * 0.376 - this.donghuaxianshi.width / 2;
                        this.xingzoustep = 3;
                        this.xinzouloutisan(1);
                    }else{
                        this.xingzoupindi(-1);
                    }
                    break;
                case 3:
                    if(this.juesexianshi.y < this.zongY * 0.374 + this.juesexianshi.height / 5 * 2){
                        this.juesexianshi.x = this.zongX * 0.6;
                        this.juesexianshi.y = this.zongY * 0.374;
                        this.xingzoustep = 4;
                        this.xingzoupindi(-1);
                    }else{
                        this.xinzouloutisan(1);
                    }
                    break;
                case 4:
                    if(this.juesexianshi.x <= this.zongX * 0.210){
                            this.xingzoustep = 5;
                            this.xingzoupindi(1)
                    }else{
                        this.xingzoupindi(-1);
                    }
                    break;
                case 5:
                    if(this.juesexianshi.x >= this.zongX * 0.6){
                            this.juesexianshi.x = this.zongX * 0.6 ;
                            this.xingzoustep = 6;
                            this.xinzouloutisan(-1);
                    }else{
                        this.xingzoupindi(1);
                    }
                    break;
                case 6:
                    if(this.juesexianshi.y >= this.zongY * 0.62 -this.juesexianshi.height / 5 * 2){
                        this.juesexianshi.x = this.zongX * 0.376;
                        this.juesexianshi.y = this.zongY * 0.620;
                        this.xingzoustep = 7;
                        this.xingzoupindi(1);
                    }else{
                        this.xinzouloutisan(-1);
                    }
                    break;
                case 7:
                    if(this.juesexianshi.x >= this.zongX * 0.760){
                        this.juesexianshi.x = this.zongX * 0.760 ;
                        this.xingzoustep = 8;
                        this.xinzoulouti(1);
                    }else{
                        this.xingzoupindi(1);
                    }
                    break;
                case 8:
                    if(this.juesexianshi.y >= this.zongY * 0.865 - this.juesexianshi.height / 5 * 2){
                        this.juesexianshi.x = this.zongX * 0.980;
                        this.juesexianshi.y = this.zongY * 0.865;
                        this.xingzoustep = 9;
                        this.xingzoupindi(-1);
                    }else{
                        this.xinzoulouti(1);
                    }
                    break;
                case 9:
                    this.xingzoupindi(-1);
                    if(this.juesexianshi.x <= this.zongX * 0.088){
                        //角色消失时，移除相应的显示内容；
                        this.yichujuesepve();
                    }else{
                        this.xingzoupindi(-1);
                    }
                    break;
            }
         }else if(this.pvexunluai == 3){
             switch(this.xingzoustep){
                case 0:
                    if(this.juesexianshi.x < this.zongX * 0.96 ){
                        this.xingzoupindi(1);
                    }else{
                        this.juesexianshi.x = this.zongX * 0.98 + this.donghuaxianshi.width / 2;
                        this.xingzoustep = 1;
                        this.xinzoulouti(-1);
                    }
                    break;
                case 1:
                    if(this.juesexianshi.y < this.zongY * 0.620 +this.juesexianshi.height / 5 * 2){
                        this.xingzoustep = 2;
                        this.juesexianshi.x = this.zongX * 0.760 - this.donghuaxianshi.width / 2;
                        this.juesexianshi.y = this.zongY * 0.620;
                        this.xingzoupindi(-1);
                    }else{
                        this.xinzoulouti(-1);
                    }
                    break;
                case 2:
                    if(this.juesexianshi.x <= this.zongX * 0.376){
                        this.juesexianshi.x = this.zongX * 0.376 - this.donghuaxianshi.width / 2;
                        this.xingzoustep = 3;
                        this.xinzouloutisan(1);
                    }else{
                        this.xingzoupindi(-1);
                    }
                    break;
                case 3:
                    if(this.juesexianshi.y < this.zongY * 0.374 + this.juesexianshi.height / 5 * 2){
                        this.juesexianshi.x = this.zongX * 0.6;
                        this.juesexianshi.y = this.zongY * 0.374;
                        this.xingzoustep = 4;
                        this.xingzoupindi(1);
                    }else{
                        this.xinzouloutisan(1);
                    }
                    break;
                case 4:
                    if(this.juesexianshi.x >= this.zongX * 0.96){
                            this.xingzoustep = 5;
                            this.xingzoupindi(-1)
                    }else{
                        this.xingzoupindi(1);
                    }
                    break;
                case 5:
                    if(this.juesexianshi.x <= this.zongX * 0.6){
                            this.juesexianshi.x = this.zongX * 0.6 ;
                            this.xingzoustep = 6;
                            this.xinzouloutisan(-1);
                    }else{
                        this.xingzoupindi(-1);
                    }
                    break;
                case 6:
                    if(this.juesexianshi.y >= this.zongY * 0.62 - this.juesexianshi.height / 5 * 2){
                        this.juesexianshi.x = this.zongX * 0.376;
                        this.juesexianshi.y = this.zongY * 0.620;
                        this.xingzoustep = 7;
                        this.xingzoupindi(1);
                    }else{
                        this.xinzouloutisan(-1);
                    }
                    break;
                case 7:
                    if(this.juesexianshi.x >= this.zongX * 0.760){
                        this.juesexianshi.x = this.zongX * 0.760 ;
                        this.xingzoustep = 8;
                        this.xinzoulouti(1);
                    }else{
                        this.xingzoupindi(1);
                    }
                    break;
                case 8:
                    if(this.juesexianshi.y >= this.zongY * 0.865 - this.juesexianshi.height / 5 * 2){
                        this.juesexianshi.x = this.zongX * 0.980;
                        this.juesexianshi.y = this.zongY * 0.865;
                        this.xingzoustep = 9;
                        this.xingzoupindi(-1);
                    }else{
                        this.xinzoulouti(1);
                    }
                    break;
                case 9:
                    this.xingzoupindi(-1);
                    if(this.juesexianshi.x <= this.zongX * 0.088){
                        //角色消失时，移除相应的显示内容；
                        this.yichujuesepve();
                    }else{
                        this.xingzoupindi(-1);
                    }
                    break;
            }
         }
    }

    private putongshangcai(num1,mun2,donghuaming,gugeming,texpng,skeming,texjson){
        this.juesexianshi = new egret.DisplayObjectContainer();
        Gameguanli.Kongzhitai().zhujiemian.addChild(this.juesexianshi);
        //获取坐标位置
        this.zongX = Gameguanli.Kongzhitai().zhujiemian.img_fandianyuanhuabg0.width;
        this.zongY = Gameguanli.Kongzhitai().zhujiemian.img_fandianyuanhuabg0.height;
        this.juesexianshi.x = this.zongX * 0.088 - this.juesexianshi.width / 2;
        this.juesexianshi.y = this.zongY * 0.865 - this.juesexianshi.height;
        //设置需求的菜品ID
        this.xuqiucaiid = num1;
        //设置需求的菜品名称
        this.caipinmingcheng = mun2;
        //遍历头顶文字表，拿取文字内容
        let toudingwenzibiao = RES.getRes("toudingwenzi_json");
        for (var w = 0;w<toudingwenzibiao.length;w++){
            if(toudingwenzibiao[w].texttype == 0){
                this.tdWenzi0[this.tdWenzi0.length] = toudingwenzibiao[w];
            }
            if(toudingwenzibiao[w].texttype == 1){
                this.tdWenzi1[this.tdWenzi1.length] = toudingwenzibiao[w];
            }
            if(toudingwenzibiao[w].texttype == 2){
                this.tdWenzi2[this.tdWenzi2.length] = toudingwenzibiao[w];
            }
            if(toudingwenzibiao[w].texttype == 3){
                this.tdWenzi3[this.tdWenzi3.length] = toudingwenzibiao[w];
            }
            if(toudingwenzibiao[w].texttype == 4){
                this.tdWenzi4[this.tdWenzi4.length] = toudingwenzibiao[w];
            }
        }

        //使用动画资源的动作名称
        this.dongzuomingcheng = donghuaming;
        //动画资源获取
        this.skeletonData = RES.getRes(skeming);
        this.textureData = RES.getRes(texjson);
        this.texture = RES.getRes(texpng);
        //创建龙骨工厂
        this.donghuagongchang = dragonBones.EgretFactory.factory;
        //对动画资源进行工厂的解析
        this.donghuagongchang.parseDragonBonesData(this.skeletonData);
        this.donghuagongchang.parseTextureAtlasData(this.textureData,this.texture);
        //对动画资源的纹理内容进行解析
        //建立骨架
        this.dongzuoshiti = this.donghuagongchang.buildArmature(gugeming);
        //创建一个显示对象
        this.donghuaxianshi = this.dongzuoshiti.display;
        //给对象添加相应的样式，并添加到舞台
        this.juesexianshi.addChild(this.donghuaxianshi);
        /*this.donghuaxianshi.x = this.juesexianshi.width / 2 - this.donghuaxianshi.width / 2;
        this.donghuaxianshi.y = this.juesexianshi.height - this.donghuaxianshi.height;*/
        //启动骨骼动画播放
        this.dongzuoshiti.animation.play(this.dongzuomingcheng);
       //添加到世界时钟里
        dragonBones.WorldClock.clock.add(this.dongzuoshiti);
        //创建头顶容器和显示内容
        this.toudinggruop = new Ttoudingqipaojiemian();
        //创建头顶容器显示内容
        let xuqiucai = Gerenshuxing.shipubiao;
        for (var i = 0;i<xuqiucai.length;i++){
            if(xuqiucai[i].id == num1){
                this.xuqiucaiid = xuqiucai[i];
            }
        }
        this.juesexianshi.addChild(this.toudinggruop);
        this.toudinggruop.xianshitupian0.source = this.xuqiucaiid.id + "_png";
        this.toudinggruop.but_xuqiucaiqipao0.enabled = false;
        this.toudinggruop.x = 0 - this.donghuaxianshi.width / 2 - this.toudinggruop.width / 4;
        this.toudinggruop.y = 0 - this.toudinggruop.height - this.donghuaxianshi.height;

        //改变动画的播放速度
        dragonBones.WorldClock.clock.timeScale = 1.3;

        this.chongfudingshi = new egret.Timer(1000,0);
        //给显示对象添加缓动动画
        this.chongfudingshi.addEventListener(egret.TimerEvent.TIMER,this.bofangdonghua,this);
        this.chongfudingshi.start();

        //调用头顶文字显示
        this.doudingwenzixianshi();
        //查询卫生值，判断会不会需求菜品
        if(Gerenshuxing.guideuiyindao == 15){
            this.weishengtongguo = true;
        }else{
            let jianceweisheng = Math.floor(Math.random() * 120);
            if(jianceweisheng <= Gerenshuxing.zzweishengzhi){
                this.weishengtongguo = true;
            }
        }   
        //查询当前原料值，判断够不够
        if(Gerenshuxing.yongyouyuanliao >= parseInt(this.xuqiucaiid.foodMaterials) - Gerenshuxing.yuanliaoxiaohao){
            this.yuanliaozugou = true;
        }

        //给头顶气泡增加点击效果
        this.toudinggruop.but_xuqiucaiqipao0.addEventListener(egret.TouchEvent.TOUCH_TAP,this.shoudongshangcai,this);
    }


    public yindao_0_1(){
        Gamesound.Soundkongzhi().anniuyinxiao();
		this.putongxinshouyindao.dakuangzu.alpha = 0;
		this.putongxinshouyindao.xiaokuangzu.alpha = 1;
		this.putongxinshouyindao.yindaoshouzhi.alpha = 1;
		this.putongxinshouyindao.yindaoshouzhi.source = "img_yindaoxiashouzhi_png";
		this.putongxinshouyindao.yindaoshouzhi.x = this.zongX * 0.56;
		this.putongxinshouyindao.yindaoshouzhi.y = Gameguanli.Kongzhitai().height * 0.743 - this.putongxinshouyindao.yindaoshouzhi.height;
		this.putongxinshouyindao.xiaokuangzu.x = this.putongxinshouyindao.yindaoshouzhi.x + this.putongxinshouyindao.yindaoshouzhi.width / 2 - this.putongxinshouyindao.xiaokuangzu.width / 2;
		this.putongxinshouyindao.xiaokuangzu.y = this.putongxinshouyindao.yindaoshouzhi.y - this.putongxinshouyindao.yindaoshouzhi.height;
		this.putongxinshouyindao.xiaokuanwenzi.text = "点击顾客头顶的绿色气泡，则可对其上菜。";
		this.putongxinshouyindao.heisezhezhaodianji.touchEnabled = true;
		this.putongxinshouyindao.heisezhezhaodianji.addEventListener(egret.TouchEvent.TOUCH_TAP,this.yindao_0_2,this);
    }

    public yindao_0_2(){
        Gamesound.Soundkongzhi().anniuyinxiao();
		 Gameguanli.Kongzhitai().zhujiemiandingbu.removeChild(this.putongxinshouyindao);
        this.shoudongshangcai();
    }

    public yindao_1_1(){
        Gamesound.Soundkongzhi().anniuyinxiao();
		this.putongxinshouyindao.dakuangzu.alpha = 0;
		this.putongxinshouyindao.xiaokuangzu.alpha = 1;
		this.putongxinshouyindao.yindaoshouzhi.alpha = 1;
		this.putongxinshouyindao.yindaoshouzhi.source = "img_yindaoxiashouzhi_png";
		this.putongxinshouyindao.yindaoshouzhi.x = this.zongX * 0.56;
		this.putongxinshouyindao.yindaoshouzhi.y = Gameguanli.Kongzhitai().height * 0.743 - this.putongxinshouyindao.yindaoshouzhi.height;
		this.putongxinshouyindao.xiaokuangzu.x = this.putongxinshouyindao.yindaoshouzhi.x + this.putongxinshouyindao.yindaoshouzhi.width / 2 - this.putongxinshouyindao.xiaokuangzu.width / 2;
		this.putongxinshouyindao.xiaokuangzu.y = this.putongxinshouyindao.yindaoshouzhi.y - this.putongxinshouyindao.yindaoshouzhi.height;
		this.putongxinshouyindao.xiaokuanwenzi.text = "点击顾客头顶的金色气泡，则可对其上菜。";
		this.putongxinshouyindao.heisezhezhaodianji.touchEnabled = true;
		this.putongxinshouyindao.heisezhezhaodianji.addEventListener(egret.TouchEvent.TOUCH_TAP,this.yindao_1_2,this);
    }

    public yindao_1_2(){
        Gamesound.Soundkongzhi().anniuyinxiao();
		 Gameguanli.Kongzhitai().zhujiemiandingbu.removeChild(this.putongxinshouyindao);
         this.pvezhandoumokuai();

    }


    private bofangdonghua() {
        if(this.di1zuocai == false){
            this.shoudong = false;
        }
        this.xuqiucaiid.id = parseInt(this.xuqiucaiid.id);
        //小炒客户行为判断
        if(this.xuqiucaiid.id >= 1000 && this.xuqiucaiid.id < 2000){
            switch(this.xingzoustep){
                case 0:
                    this.xingzoupindi(1);
                    if(this.juesexianshi.x >= this.zongX * 0.56 && this.di1zuocai == false){
                        if(Gerenshuxing.guideuiyindao == 15){
                            Gameguanli.Kongzhitai().dingbuui.removeChild(Xinshouyindao.yindaojiemian);
                            this.toudinggruop.but_xuqiucaiqipao0.enabled = true;
                            this.chongfudingshi.stop();
                            this.putongxinshouyindao = new Xinshouyindaodakuang();
                            Gameguanli.Kongzhitai().zhujiemiandingbu.addChild(this.putongxinshouyindao);
                            this.putongxinshouyindao.dakuangzu.x = Gameguanli.Kongzhitai().width / 2 - this.putongxinshouyindao.dakuangzu.width / 2;
                            this.putongxinshouyindao.dakuangzu.y = Gameguanli.Kongzhitai().height / 2 - this.putongxinshouyindao.dakuangzu.height / 2;
                            this.putongxinshouyindao.xiaokuangzu.alpha = 0;
                            this.putongxinshouyindao.dakuangzu.alpha = 1;
                            this.putongxinshouyindao.yindaoshouzhi.alpha = 0;
                            this.putongxinshouyindao.xiaokuangzu.touchEnabled = false;
                            this.putongxinshouyindao.dakuangzu.touchEnabled = false;
                            this.putongxinshouyindao.yindaoshouzhi.touchEnabled = false;
                            this.putongxinshouyindao.dakuangwenzi.text = "食客到达就餐区域，可以开始上菜了！！";
                            this.putongxinshouyindao.heisezhezhaodianji.touchEnabled = true;
                            this.putongxinshouyindao.heisezhezhaodianji.addEventListener(egret.TouchEvent.TOUCH_TAP,this.yindao_0_1,this);
                        }else{
                            if(this.weishengtongguo == true){
                                if(this.yuanliaozugou == true){
                                    this.toudinggruop.but_xuqiucaiqipao0.enabled = true;
                                    let jilvpeizhi1 = Math.floor(Math.random() * 10000);
                                    if(jilvpeizhi1 <= Gerenshuxing.zzchushishangcaisudu && this.shoudong == false){
                                        this.di1zuocai = true;
                                        this.tdWenzi = 1;
                                        this.xingzoustep = 1;
                                        this.toudinggruop.xianshitupian0.source = "img_xiaolian_png";
                                        this.toudinggruop.but_xuqiucaiqipao0.enabled = false;
                                        this.dingshiqistop();
                                        this.kouchuyuanliao();
                                    }
                                }else{
                                    this.tdWenzi = 4;
                                    this.toudinggruop.xianshitupian0.source = "img_fennulian_png";
                                    this.toudinggruop.but_xuqiucaiqipao0.enabled = false;
                                }
                            }else{
                                this.tdWenzi = 3
                                this.xingzoustep = 1;
                                this.toudinggruop.but_xuqiucaiqipao0.enabled = false;
                                this.toudinggruop.xianshitupian0.source = "img_fennulian_png";
                                this.dingshiqistop();
                            }
                        }
                    }
                    if(this.juesexianshi.x >= this.zongX * 0.96){
                        this.xingzoustep = 1;
                    }
                    break;
                case 1:
                    this.xingzoupindi(-1);
                    if(this.juesexianshi.x >= this.zongX * 0.56 && this.di1zuocai == false && this.tdWenzi != 3){
                        if(this.yuanliaozugou == true){
                            this.toudinggruop.but_xuqiucaiqipao0.enabled = true;
                            let jilvpeizhi2 = Math.floor(Math.random() * 10000);
                            if(jilvpeizhi2 <= Gerenshuxing.zzchushishangcaisudu && this.shoudong == false){
                                this.di1zuocai = true;
                                this.tdWenzi = 1;
                                this.toudinggruop.xianshitupian0.source = "img_xiaolian_png";
                                this.toudinggruop.but_xuqiucaiqipao0.enabled = false;
                                this.dingshiqistop();
                                this.kouchuyuanliao();
                            }
                        }else{
                                this.tdWenzi = 4;
                                this.toudinggruop.xianshitupian0.source = "img_fennulian_png";
                                this.toudinggruop.but_xuqiucaiqipao0.enabled = false;
                            }
                    }
                    if(this.juesexianshi.x < this.zongX * 0.56){
                        if(this.di1zuocai == false){
                                this.toudinggruop.xianshitupian0.source = "img_fennulian_png";
                                this.toudinggruop.but_xuqiucaiqipao0.enabled = false;
                                if(this.tdWenzi != 3 && this.tdWenzi != 4){
                                    this.tdWenzi = 2;
                                }
                                this.xingzoustep = 2;
                        }else{
                            this.xingzoustep = 2;
                        }
                    }
                    break;
                case 2:
                    this.xingzoupindi(-1);
                    if(this.juesexianshi.x < this.zongX * 0.352){
                        this.xingzoustep = 3;
                        if(this.di1zuocai == true){
                            this.jinxinjiezhang();
                        }else{
                            this.kehubumanyi();
                        }
                    }
                    break;
                case 3:
                    if(this.juesexianshi.x <= this.zongX * 0.088){
                        //角色消失时，移除相应的显示内容；
                    this.yichujuese();
                    }else{
                        this.xingzoupindi(-1);
                    }
                    break;
            }
        }
        //火锅客户行为判断
        else if(this.xuqiucaiid.id >= 2000 && this.xuqiucaiid.id < 3000){
            switch(this.xingzoustep){
                case 0:
                    if(this.juesexianshi.x < this.zongX * 0.96 ){
                        this.xingzoupindi(1);
                    }else{
                        this.juesexianshi.x = this.zongX * 0.98 + this.donghuaxianshi.width / 2;
                        this.xingzoustep = 1;
                        this.xinzoulouti(-1);
                    }
                    break;
                case 1:
                    if(this.juesexianshi.y < this.zongY * 0.620 + this.juesexianshi.height / 5 * 2){
                        this.xingzoustep = 2;
                        this.xinzoulouti(-1);
                    }else{
                        this.xinzoulouti(-1);
                    }
                    break;
                case 2:
                    let panduan2cengzxjl = Math.floor(Math.random() * 2);
                    if(panduan2cengzxjl < 1){
                        this.panduan2cengzx = 0;
                    }else{
                        this.panduan2cengzx = 1;
                    }
                    if(this.panduan2cengzx == 0){
                        this.xingzoustep = 3;
                        this.juesexianshi.x = this.zongX * 0.760 - this.donghuaxianshi.width / 2;
                        this.juesexianshi.y = this.zongY * 0.620;
                        this.xingzoupindi(-1);
                    }else{
                        this.xingzoustep = 4;
                        this.juesexianshi.x = this.zongX * 0.760 - this.donghuaxianshi.width / 2;
                        this.juesexianshi.y = this.zongY * 0.620;
                        this.xingzoupindi(1);
                    }
                    break;
                case 3:
                    if(this.di1zuocai == false){
                        if(this.weishengtongguo == true){
                            if(this.yuanliaozugou == true){
                                this.toudinggruop.but_xuqiucaiqipao0.enabled = true;
                                let jilvpeizhi3 = Math.floor(Math.random() * 10000);
                                if(jilvpeizhi3 <= Gerenshuxing.zzchushishangcaisudu && this.shoudong == false){
                                this.di1zuocai = true;
                                this.tdWenzi = 1;
                                this.xingzoustep = 5;
                                this.toudinggruop.xianshitupian0.source = "img_xiaolian_png";
                                this.toudinggruop.but_xuqiucaiqipao0.enabled = false;
                                this.dingshiqistop();
                                this.kouchuyuanliao();
                                }
                            }else{
                                this.tdWenzi = 4;
                                this.toudinggruop.xianshitupian0.source = "img_fennulian_png";
                                this.toudinggruop.but_xuqiucaiqipao0.enabled = false;
                            }
                        }else{
                            this.tdWenzi = 3;
                            this.xingzoustep = 5;
                            this.toudinggruop.xianshitupian0.source = "img_fennulian_png";
                            this.toudinggruop.but_xuqiucaiqipao0.enabled = false;
                            this.dingshiqistop();
                        }
                    }
                    if(this.juesexianshi.x <= this.zongX * 0.210){
                            this.xingzoustep = 5;
                            this.xingzoupindi(1);
                    }else{
                        this.xingzoupindi(-1);
                    }
                    break;
                case 4:
                    if(this.di1zuocai == false){
                        if(this.weishengtongguo == true){
                            if(this.yuanliaozugou == true){
                                this.toudinggruop.but_xuqiucaiqipao0.enabled = true;
                                let jilvpeizhi3 = Math.floor(Math.random() * 10000);
                                if(jilvpeizhi3 <= Gerenshuxing.zzchushishangcaisudu && this.shoudong == false){
                                this.di1zuocai = true;
                                this.tdWenzi = 1;
                                this.xingzoustep = 6;
                                this.toudinggruop.xianshitupian0.source = "img_xiaolian_png";
                                this.toudinggruop.but_xuqiucaiqipao0.enabled = false;
                                this.dingshiqistop();
                                this.kouchuyuanliao();
                                }
                            }else{
                                this.tdWenzi = 4;
                                this.toudinggruop.xianshitupian0.source = "img_fennulian_png";
                                this.toudinggruop.but_xuqiucaiqipao0.enabled = false;
                            }
                        }else{
                            this.tdWenzi = 3;
                            this.xingzoustep = 6;
                            this.toudinggruop.xianshitupian0.source = "img_fennulian_png";
                            this.toudinggruop.but_xuqiucaiqipao0.enabled = false;
                            this.dingshiqistop();
                        }
                        
                    }
                    if(this.juesexianshi.x >= this.zongX * 0.960){
                            this.xingzoustep = 6;
                            this.xingzoupindi(-1)
                    }else{
                        this.xingzoupindi(1);
                    }
                    break;
                case 5:
                    if(this.di1zuocai == false && this.tdWenzi != 3){
                        if(this.yuanliaozugou == true){
                            this.toudinggruop.but_xuqiucaiqipao0.enabled = true;
                            let jilvpeizhi3 = Math.floor(Math.random() * 10000);
                            if(jilvpeizhi3 <= Gerenshuxing.zzchushishangcaisudu && this.shoudong == false){
                                this.di1zuocai = true;
                                this.tdWenzi = 1;
                                this.toudinggruop.xianshitupian0.source = "img_xiaolian_png";
                                this.toudinggruop.but_xuqiucaiqipao0.enabled = false;
                                this.dingshiqistop();
                                this.kouchuyuanliao();
                            }
                        }else{
                                this.tdWenzi = 4;
                                this.toudinggruop.xianshitupian0.source = "img_fennulian_png";
                                this.toudinggruop.but_xuqiucaiqipao0.enabled = false;
                            }
                    }
                    if(this.juesexianshi.x >= this.zongX * 0.760){
                            this.juesexianshi.x = this.zongX * 0.760 ;
                            this.xingzoustep = 7;
                            this.xinzoulouti(1);
                            if(this.di1zuocai == false){
                                this.toudinggruop.xianshitupian0.source = "img_fennulian_png";
                                this.toudinggruop.but_xuqiucaiqipao0.enabled = false;
                                if(this.tdWenzi != 3 && this.tdWenzi != 4){
                                    this.tdWenzi = 2;
                                }
                            }
                    }else{
                        this.xingzoupindi(1);
                    }
                    break;
                case 6:
                    if(this.di1zuocai == false && this.tdWenzi != 3){
                        if(this.yuanliaozugou == true){
                            this.toudinggruop.but_xuqiucaiqipao0.enabled = true;
                            let jilvpeizhi3 = Math.floor(Math.random() * 10000);
                            if(jilvpeizhi3 <= Gerenshuxing.zzchushishangcaisudu && this.shoudong == false){
                                this.di1zuocai = true;
                                this.tdWenzi = 1;
                                this.toudinggruop.xianshitupian0.source = "img_xiaolian_png";
                                this.toudinggruop.but_xuqiucaiqipao0.enabled = false;
                                this.dingshiqistop();
                                this.kouchuyuanliao();
                            }
                        }else{
                                this.tdWenzi = 4;
                                this.toudinggruop.xianshitupian0.source = "img_fennulian_png";
                                this.toudinggruop.but_xuqiucaiqipao0.enabled = false;
                            }
                    }
                    if(this.juesexianshi.x <= this.zongX * 0.760){
                            this.juesexianshi.x = this.zongX * 0.760 ;
                            this.xingzoustep = 7;
                            this.xinzoulouti(1);
                            if(this.di1zuocai == false){
                                this.toudinggruop.xianshitupian0.source = "img_fennulian_png";
                                this.toudinggruop.but_xuqiucaiqipao0.enabled = false;
                                if(this.tdWenzi != 3 && this.tdWenzi != 4){
                                    this.tdWenzi = 2;
                                }
                            }       
                    }else{
                        this.xingzoupindi(-1);
                    }
                    break;
                case 7:
                    if(this.juesexianshi.y >= this.zongY * 0.865 - this.juesexianshi.height / 5 * 2){
                            this.juesexianshi.x = this.zongX * 0.980;
                            this.juesexianshi.y = this.zongY * 0.865;
                            this.xingzoustep = 8;
                            this.xingzoupindi(-1);
                    }else{
                        this.xinzoulouti(1);
                    }
                    break;
                case 8:
                    this.xingzoupindi(-1);
                    if(this.juesexianshi.x < this.zongX * 0.352 ){
                        this.xingzoustep = 9;
                        if(this.di1zuocai == true){
                            this.jinxinjiezhang();
                        }else{
                            this.kehubumanyi();
                        }
                    }
                    break;
                case 9:
                    if(this.juesexianshi.x <= this.zongX * 0.088){
                        //角色消失时，移除相应的显示内容；
                    this.yichujuese();
                    }else{
                        this.xingzoupindi(-1);
                    }
                    break;

            }
        }
        //小吃客户行为判断
        else if(this.xuqiucaiid.id >= 3000 && this.xuqiucaiid.id < 4000){
            switch(this.xingzoustep){
                case 0:
                    if(this.juesexianshi.x < this.zongX * 0.96 ){
                        this.xingzoupindi(1);
                    }else{
                        this.juesexianshi.x = this.zongX * 0.98 + this.donghuaxianshi.width / 2;
                        this.xingzoustep = 1;
                        this.xinzoulouti(-1);
                    }
                    break;
                case 1:
                    if(this.juesexianshi.y < this.zongY * 0.620 + this.juesexianshi.height / 5 * 2){
                        this.xingzoustep = 2;
                        this.juesexianshi.x = this.zongX * 0.760 - this.donghuaxianshi.width / 2;
                        this.juesexianshi.y = this.zongY * 0.620;
                        this.xingzoupindi(-1);
                    }else{
                        this.xinzoulouti(-1);
                    }
                    break;
                case 2:
                    if(this.juesexianshi.x <= this.zongX * 0.376){
                        this.juesexianshi.x = this.zongX * 0.376 - this.donghuaxianshi.width / 2;
                        this.xingzoustep = 3;
                        this.xinzouloutisan(1);
                    }else{
                        this.xingzoupindi(-1);
                    }
                    break;
                case 3:
                    if(this.juesexianshi.y < this.zongY * 0.3740 + this.juesexianshi.height / 5 * 2){
                        this.juesexianshi.x = this.zongX * 0.6;
                        this.juesexianshi.y = this.zongY * 0.374;
                        this.xingzoustep = 4;
                        this.xingzoupindi(-1);
                    }else{
                        this.xinzouloutisan(1);
                    }
                    break;
                case 4:
                    if(this.di1zuocai == false){
                        if(this.weishengtongguo == true){
                            if(this.yuanliaozugou == true){
                                this.toudinggruop.but_xuqiucaiqipao0.enabled = true;
                                let jilvpeizhi3 = Math.floor(Math.random() * 10000);
                                if(jilvpeizhi3 <= Gerenshuxing.zzchushishangcaisudu && this.shoudong == false){
                                this.di1zuocai = true;
                                this.tdWenzi = 1;
                                this.xingzoustep = 5;
                                this.toudinggruop.xianshitupian0.source = "img_xiaolian_png";
                                this.toudinggruop.but_xuqiucaiqipao0.enabled = false;
                                this.dingshiqistop();
                                this.kouchuyuanliao();
                                }
                            }else{
                                this.tdWenzi = 4;
                                this.toudinggruop.xianshitupian0.source = "img_fennulian_png";
                                this.toudinggruop.but_xuqiucaiqipao0.enabled = false;
                            }
                        }else{
                            this.tdWenzi = 3;
                            this.xingzoustep = 5;
                            this.toudinggruop.xianshitupian0.source = "img_fennulian_png";
                            this.toudinggruop.but_xuqiucaiqipao0.enabled = false;
                            this.dingshiqistop();
                        }
                    }
                    if(this.juesexianshi.x <= this.zongX * 0.210){
                            this.xingzoustep = 5;
                            this.xingzoupindi(1)
                    }else{
                        this.xingzoupindi(-1);
                    }
                    break;
                case 5:
                    if(this.di1zuocai == false && this.tdWenzi != 3){
                        if(this.yuanliaozugou == true){
                            this.toudinggruop.but_xuqiucaiqipao0.enabled = true;
                            let jilvpeizhi3 = Math.floor(Math.random() * 10000);
                            if(jilvpeizhi3 <= Gerenshuxing.zzchushishangcaisudu && this.shoudong == false){
                                this.di1zuocai = true;
                                this.tdWenzi = 1;
                                this.toudinggruop.xianshitupian0.source = "img_xiaolian_png";
                                this.toudinggruop.but_xuqiucaiqipao0.enabled = false;
                                this.dingshiqistop();
                                this.kouchuyuanliao();
                            }
                        }else{
                                this.tdWenzi = 4;
                                this.toudinggruop.xianshitupian0.source = "img_fennulian_png";
                                this.toudinggruop.but_xuqiucaiqipao0.enabled = false;
                            }
                    }
                    if(this.juesexianshi.x >= this.zongX * 0.6){
                            this.juesexianshi.x = this.zongX * 0.6 ;
                            this.xingzoustep = 6;
                            this.xinzouloutisan(-1);
                            if(this.di1zuocai == false){
                                this.toudinggruop.xianshitupian0.source = "img_fennulian_png";
                                this.toudinggruop.but_xuqiucaiqipao0.enabled = false;
                                if(this.tdWenzi != 3 && this.tdWenzi != 4){
                                    this.tdWenzi = 2;
                                }
                            }
                    }else{
                        this.xingzoupindi(1);
                    }
                    break;
                case 6:
                    if(this.juesexianshi.y >= this.zongY * 0.62 - this.juesexianshi.height / 5 * 2){
                        this.juesexianshi.x = this.zongX * 0.376;
                        this.juesexianshi.y = this.zongY * 0.620;
                        this.xingzoustep = 7;
                        this.xingzoupindi(1);
                    }else{
                        this.xinzouloutisan(-1);
                    }
                    break;
                case 7:
                    if(this.juesexianshi.x >= this.zongX * 0.760 - this.juesexianshi.height / 5 * 2){
                        this.juesexianshi.x = this.zongX * 0.760 ;
                        this.xingzoustep = 8;
                        this.xinzoulouti(1);
                    }else{
                        this.xingzoupindi(1);
                    }
                    break;
                case 8:
                    if(this.juesexianshi.y >= this.zongY * 0.865 - this.juesexianshi.height / 5 * 2){
                        this.juesexianshi.x = this.zongX * 0.980;
                        this.juesexianshi.y = this.zongY * 0.865;
                        this.xingzoustep = 9;
                        this.xingzoupindi(-1);
                    }else{
                        this.xinzoulouti(1);
                    }
                    break;
                case 9:
                    this.xingzoupindi(-1);
                    if(this.juesexianshi.x < this.zongX * 0.352 ){
                        this.xingzoustep = 10;
                        if(this.di1zuocai == true){
                            this.jinxinjiezhang();
                        }else{
                            this.kehubumanyi();
                        }
                    }
                    break;
                case 10:
                    if(this.juesexianshi.x <= this.zongX * 0.088){
                        //角色消失时，移除相应的显示内容；
                    this.yichujuese();
                    }else{
                        this.xingzoupindi(-1);
                    }
                    break;
            }
        }
        //早餐客户行为判断
        else if(this.xuqiucaiid.id >= 4000 && this.xuqiucaiid.id < 5000){
            switch(this.xingzoustep){
                case 0:
                    if(this.juesexianshi.x < this.zongX * 0.96 ){
                        this.xingzoupindi(1);
                    }else{
                        this.juesexianshi.x = this.zongX * 0.98 + this.donghuaxianshi.width / 2;
                        this.xingzoustep = 1;
                        this.xinzoulouti(-1);
                    }
                    break;
                case 1:
                    if(this.juesexianshi.y < this.zongY * 0.620 + this.juesexianshi.height / 5 * 2){
                        this.xingzoustep = 2;
                        this.juesexianshi.x = this.zongX * 0.760 - this.donghuaxianshi.width / 2;
                        this.juesexianshi.y = this.zongY * 0.620;
                        this.xingzoupindi(-1);
                    }else{
                        this.xinzoulouti(-1);
                    }
                    break;
                case 2:
                    if(this.juesexianshi.x <= this.zongX * 0.376){
                        this.juesexianshi.x = this.zongX * 0.376 - this.donghuaxianshi.width / 2;
                        this.xingzoustep = 3;
                        this.xinzouloutisan(1);
                    }else{
                        this.xingzoupindi(-1);
                    }
                    break;
                case 3:
                    if(this.juesexianshi.y < this.zongY * 0.374 + this.juesexianshi.height / 5 * 2){
                        this.juesexianshi.x = this.zongX * 0.6;
                        this.juesexianshi.y = this.zongY * 0.374;
                        this.xingzoustep = 4;
                        this.xingzoupindi(1);
                    }else{
                        this.xinzouloutisan(1);
                    }
                    break;
                case 4:
                    if(this.di1zuocai == false){
                        if(this.weishengtongguo == true){
                            if(this.yuanliaozugou == true){
                                this.toudinggruop.but_xuqiucaiqipao0.enabled = true;
                                let jilvpeizhi3 = Math.floor(Math.random() * 10000);
                                if(jilvpeizhi3 <= Gerenshuxing.zzchushishangcaisudu && this.shoudong == false){
                                this.di1zuocai = true;
                                this.tdWenzi = 1;
                                this.xingzoustep = 5;
                                this.toudinggruop.xianshitupian0.source = "img_xiaolian_png";
                                this.toudinggruop.but_xuqiucaiqipao0.enabled = false;
                                this.dingshiqistop();
                                this.kouchuyuanliao();
                                }
                            }else{
                                this.tdWenzi = 4;
                                this.toudinggruop.xianshitupian0.source = "img_fennulian_png";
                                this.toudinggruop.but_xuqiucaiqipao0.enabled = false;
                            }
                        }else{
                            this.tdWenzi = 3;
                            this.xingzoustep = 5;
                            this.toudinggruop.xianshitupian0.source = "img_fennulian_png";
                            this.toudinggruop.but_xuqiucaiqipao0.enabled = false;
                            this.dingshiqistop();
                        }
                    }
                    if(this.juesexianshi.x >= this.zongX * 0.96){
                            this.xingzoustep = 5;
                            this.xingzoupindi(-1)
                    }else{
                        this.xingzoupindi(1);
                    }
                    break;
                case 5:
                    if(this.di1zuocai == false && this.tdWenzi != 3){
                        if(this.yuanliaozugou == true){
                            this.toudinggruop.but_xuqiucaiqipao0.enabled = true;
                            let jilvpeizhi3 = Math.floor(Math.random() * 10000);
                            if(jilvpeizhi3 <= Gerenshuxing.zzchushishangcaisudu && this.shoudong == false){
                                this.di1zuocai = true;
                                this.tdWenzi = 1;
                                this.toudinggruop.xianshitupian0.source = "img_xiaolian_png";
                                this.toudinggruop.but_xuqiucaiqipao0.enabled = false;
                                this.dingshiqistop();
                                this.kouchuyuanliao();
                            }
                        }else{
                                this.tdWenzi = 4;
                                this.toudinggruop.xianshitupian0.source = "img_fennulian_png";
                                this.toudinggruop.but_xuqiucaiqipao0.enabled = false;
                            }
                    }
                    if(this.juesexianshi.x <= this.zongX * 0.6 ){
                            this.juesexianshi.x = this.zongX * 0.6 ;
                            this.xingzoustep = 6;
                            this.xinzouloutisan(-1);
                            if(this.di1zuocai == false){
                                this.toudinggruop.xianshitupian0.source = "img_fennulian_png";
                                this.toudinggruop.but_xuqiucaiqipao0.enabled = false;
                                if(this.tdWenzi != 3 && this.tdWenzi != 4){
                                    this.tdWenzi = 2;
                                }
                            }
                    }else{
                        this.xingzoupindi(-1);
                    }
                    break;
                case 6:
                    if(this.juesexianshi.y >= this.zongY * 0.62 - this.juesexianshi.height / 5 * 2){
                        this.juesexianshi.x = this.zongX * 0.376;
                        this.juesexianshi.y = this.zongY * 0.620;
                        this.xingzoustep = 7;
                        this.xingzoupindi(1);
                    }else{
                        this.xinzouloutisan(-1);
                    }
                    break;
                case 7:
                    if(this.juesexianshi.x >= this.zongX * 0.760){
                        this.juesexianshi.x = this.zongX * 0.760 ;
                        this.xingzoustep = 8;
                        this.xinzoulouti(1);
                    }else{
                        this.xingzoupindi(1);
                    }
                    break;
                case 8:
                    if(this.juesexianshi.y >= this.zongY * 0.865 - this.juesexianshi.height / 5 * 2){
                        this.juesexianshi.x = this.zongX * 0.980;
                        this.juesexianshi.y = this.zongY * 0.865;
                        this.xingzoustep = 9;
                        this.xingzoupindi(-1);
                    }else{
                        this.xinzoulouti(1);
                    }
                    break;
                case 9:
                    this.xingzoupindi(-1);
                    if(this.juesexianshi.x < this.zongX * 0.352 ){
                        this.xingzoustep = 10;
                        if(this.di1zuocai == true){
                            this.jinxinjiezhang();
                        }else{
                            this.kehubumanyi();
                        }
                    }
                    break;
                case 10:
                    if(this.juesexianshi.x <= this.zongX * 0.088){
                        //角色消失时，移除相应的显示内容；
                    this.yichujuese();
                    }else{
                        this.xingzoupindi(-1);
                    }
                    break;
            }
        }

    }


    private xingzoupindi(zhuangtai1:number){
        this.donghuaxianshi.scaleX = zhuangtai1;
        if(zhuangtai1 == 1){
            egret.Tween.get(this.juesexianshi).to({x : this.juesexianshi.x + (this.zongX * this.bujinchangdux),y : this.juesexianshi.y + this.bujinchangduy},1000);
        }else{
            egret.Tween.get(this.juesexianshi).to({x : this.juesexianshi.x - (this.zongX * this.bujinchangdux),y : this.juesexianshi.y + this.bujinchangduy},1000);
        }
    }

    private xinzoulouti(zhuangtai2:number){
        this.donghuaxianshi.scaleX = zhuangtai2;
        if(zhuangtai2 == 1){
            egret.Tween.get(this.juesexianshi).to({x : this.juesexianshi.x + (this.zongX * this.bujinchangdux),y : this.juesexianshi.y + (this.zongY * this.bujinchangduy)},1000);
        }else{
            egret.Tween.get(this.juesexianshi).to({x : this.juesexianshi.x - (this.zongX * this.bujinchangdux),y : this.juesexianshi.y - (this.zongY * this.bujinchangduy)},1000);
        }
    }

    private xinzouloutisan(zhuangtai2:number){
        this.donghuaxianshi.scaleX = zhuangtai2;
        if(zhuangtai2 == 1){
            egret.Tween.get(this.juesexianshi).to({x : this.juesexianshi.x + (this.zongX * this.bujinchangdux),y : this.juesexianshi.y - (this.zongY * this.bujinchangduy)},1000);
        }else{
            egret.Tween.get(this.juesexianshi).to({x : this.juesexianshi.x - (this.zongX * this.bujinchangdux),y : this.juesexianshi.y + (this.zongY * this.bujinchangduy)},1000);
        }
    }


    private dingshiqistop() {
        this.chongfudingshi.stop();
        this.zantingjishi = new egret.Timer(3000,1); 
        this.zantingjishi.addEventListener(egret.TimerEvent.TIMER,this.chongxinbofangdonghua,this);
        this.zantingjishi.start();
    }

    private chongxinbofangdonghua() {
        this.chongfudingshi.start();
    }

    private jinxinjiezhang(){
        let taodanlv = Math.floor(Math.random() * 100);
        if(taodanlv <= Gerenshuxing.zzanbaozhi){
            Weblianjie.fasongshuju("code:024","{" + '"caipin"' +":"+ '"' + this.xuqiucaiid.id + '"' +"," + '"uid"' + ":"+ '"' + Gerenshuxing.uid + '"' + "}");         
        }else{
           // Gameguanli.Kongzhitai().cuowutishixinxi("客户趁你不备，逃单了！快加强店里的安保吧！");
            this.bujinchangdux = 0.1;
            this.dongzuoshiti.animation.timeScale = 6;
        }
        let weishengchanchu = Math.floor(Math.random() * 10);
        if(weishengchanchu >= Gerenshuxing.weishengjilv){
            //减少卫生值,开始丢垃圾
            if(Gerenshuxing.dangqiankesaoweisheng < Gerenshuxing.kesaochuweisheng){
                Gerenshuxing.dangqiankesaoweisheng = Gerenshuxing.dangqiankesaoweisheng + 1;
                Chuangzaolaji.shengchenglaji(1);
                Gerenshuxing.yuangongshuxing();
                Weishenqipao.weishengbiangeng("- 1");
                Gameguanli.Kongzhitai().zhujiemiandingbu.chushihua();          
            }
        }
        let jilvshuzi1 = Math.floor(Math.random() * 10);
        if(jilvshuzi1 <= 5){
            let gukebiao1 = RES.getRes("gukehanhuabiao_json");
            let mingzi1:string;
            let neirong1:string;
            let touxiang1:string;
            let suijixiabiaomingzi1 = Math.floor(Math.random() * gukebiao1.length);
            mingzi1 = gukebiao1[suijixiabiaomingzi1].name;
            touxiang1 = gukebiao1[suijixiabiaomingzi1].gktouxiang;
            let suijixiabiaoneirong1 = Math.floor(Math.random() * gukebiao1.length);
            neirong1 = gukebiao1[suijixiabiaoneirong1].texuelchengong;
            let pingfen1 = Math.floor(Math.random() * 3) + 3;
            Gerenshuxing.gukeliuyan(pingfen1);
            Gameguanli.Kongzhitai().danmuxinxi(neirong1,mingzi1,pingfen1,touxiang1);
            Liuyanjiemian.liuyanneirong(neirong1,mingzi1,pingfen1,touxiang1);
            if(Gameguanli.Kongzhitai().liuyan.parent){
                Gameguanli.Kongzhitai().caipujiemian("liuyan","kai");
            }
        }
    }

    private kehubumanyi(){
        let jilvshuzi = Math.floor(Math.random() * 10);
        if(jilvshuzi <= 5){
            let gukebiao = RES.getRes("gukehanhuabiao_json");
            let mingzi:string;
            let neirong:string;
            let touxiang:string;
            let suijixiabiaomingzi = Math.floor(Math.random() * gukebiao.length);
            mingzi = gukebiao[suijixiabiaomingzi].name;
            touxiang = gukebiao[suijixiabiaomingzi].gktouxiang;
            let suijixiabiaoneirong = Math.floor(Math.random() * gukebiao.length);
            neirong = gukebiao[suijixiabiaoneirong].texuelshibai;
            let pingfen = Math.floor(Math.random() * 2) + 1;
            Gerenshuxing.gukeliuyan(pingfen);
            Gameguanli.Kongzhitai().danmuxinxi(neirong,mingzi,pingfen,touxiang);
            Liuyanjiemian.liuyanneirong(neirong,mingzi,pingfen,touxiang);
            if(Gameguanli.Kongzhitai().liuyan.parent){
                Gameguanli.Kongzhitai().caipujiemian("liuyan","kai");
            }
        }
    }

    private kouchuyuanliao(){
         Weblianjie.fasongshuju("code:026","{" + '"caipin"' +":"+ '"' + this.xuqiucaiid.id + '"' +"," + '"uid"' + ":"+ '"' + Gerenshuxing.uid + '"' + "}");
    }


     private yichujuesepve(){
            dragonBones.WorldClock.clock.remove(this.dongzuoshiti);
            this.chongfudingshi.stop();
            this.chongfudingshi.removeEventListener(egret.TimerEvent.TIMER,this.bofangdonghua,this);
            if(this.donghuaxianshi.parent){
                this.juesexianshi.removeChild(this.donghuaxianshi);
            }
            if(this.toudinggruop.parent){
                this.juesexianshi.removeChild(this.toudinggruop);
            }
            if(this.juesexianshi.parent){
                Gameguanli.Kongzhitai().zhujiemian.removeChild(this.juesexianshi);
            }
            this.donghuaxianshi = null;
            this.chongfudingshi = null;
            this.dongzuoshiti = null;
        
    }


    private yichujuese(){
            dragonBones.WorldClock.clock.remove(this.dongzuoshiti);
            this.toudingdingshi.removeEventListener(egret.TimerEvent.TIMER,this.toudinghanhua,this);
            this.chongfudingshi.removeEventListener(egret.TimerEvent.TIMER,this.bofangdonghua,this);
            if(this.donghuaxianshi.parent){
                this.juesexianshi.removeChild(this.donghuaxianshi);
            }
            if(this.toudinggruop.parent){
                this.juesexianshi.removeChild(this.toudinggruop);
            }
            if(this.tdWenziduixiang.parent){
                this.juesexianshi.removeChild(this.tdWenziduixiang)
            }
            if(this.juesexianshi.parent){
                Gameguanli.Kongzhitai().zhujiemian.removeChild(this.juesexianshi);
            }
            this.donghuaxianshi = null;
            this.toudingdingshi = null;
            this.zantingjishi = null;
            this.chongfudingshi = null;
            this.dongzuoshiti = null;
        
    }

    private doudingwenzixianshi(){
        if(Gameguanli.Kongzhitai().zhujiemian.parent){
            this.toudingdingshi = new egret.Timer(3000,0);
            this.tdWenziduixiang = new Toudingwenzi();
            this.juesexianshi.addChild(this.tdWenziduixiang);
            this.tdWenziduixiang.img_toudingwenzikuang.alpha = 0;
            this.tdWenziduixiang.wenzineirong.text = "";
            this.toudingdingshi.addEventListener(egret.TimerEvent.TIMER,this.toudinghanhua,this);
            this.toudingdingshi.start();
        }
    }

    private toudinghanhua(){
        let chufajilv = Math.floor(Math.random() * 10);
        if(chufajilv < 3){
            if(this.tdWenziduixiang.parent){
                this.juesexianshi.removeChild(this.tdWenziduixiang);
            }
            this.juesexianshi.addChild(this.tdWenziduixiang);
            this.wenziweizhi();         
        }else{
            if(this.tdWenziduixiang.parent){
                this.juesexianshi.removeChild(this.tdWenziduixiang);
            }
        }
    }

    private shoudongshangcai(){
        Gamesound.Soundkongzhi().anniuyinxiao();
        if(Gerenshuxing.jiatingzhi > 0){
            Weblianjie.fasongshuju("code:037","{" + '"kouchushu"' +":"+ "1" +"," + '"uid"' + ":"+ '"' + Gerenshuxing.uid + '"' + "}");
            let kouchudonghua = new Cailiaoxiaohao();
			Gameguanli.Kongzhitai().zhujiemian.addChild(kouchudonghua);
			kouchudonghua.wenzizu.x = Gameguanli.Kongzhitai().zhujiemian.width / 2 - kouchudonghua.wenzizu.width /2;
			kouchudonghua.wenzizu.y = Gameguanli.Kongzhitai().zhujiemian.height / 2 - kouchudonghua.wenzizu.height;
			kouchudonghua.wenzineirong.text = " - 1";
			kouchudonghua.img_shicai.source = "img_jiating_png";
			egret.Tween.get(kouchudonghua).to({x:kouchudonghua.x,y:kouchudonghua.y - 60},2000).call(()=>{
				Gameguanli.Kongzhitai().zhujiemian.removeChild(kouchudonghua);
            });
            this.chongfudingshi.stop();
            this.shoudong = true;
            this.kouchuyuanliao();
            Gameguanli.Kongzhitai().zuofanjiemian("kai",this.xuqiucaiid.id);
            Gerenshuxing.zuocaichenggong = "";
            this.panduandingshi = new egret.Timer(1000,0);
            this.panduandingshi.addEventListener(egret.TimerEvent.TIMER,this.panduanzuofan,this);
            this.panduandingshi.start();
        }else{
            Gameguanli.Kongzhitai().cuowutishixinxi("当前您的行动力已不足1点");
        }
    }

    private panduanzuofan(){
        if(Gerenshuxing.zuocaichenggong == "true"){
            this.toudinggruop.xianshitupian0.source = "img_xiaolian_png";
            this.toudinggruop.but_xuqiucaiqipao0.enabled = false;
            this.di1zuocai = true;
            this.tdWenzi = 1;
            this.dingshiqistop();
            this.panduandingshi.stop();
            this.panduandingshi = null;
        }
        if(Gerenshuxing.zuocaichenggong == "false"){
            console.log(Gerenshuxing.zuocaichenggong)
            this.dingshiqistop();
            this.panduandingshi.stop();
            this.panduandingshi = null;
        }
    }


    private wenziweizhi(){
        if(this.donghuaxianshi.scaleX == 1){
            this.tdWenziduixiang.toudingwenzizu.x = this.donghuaxianshi.x + this.donghuaxianshi.width / 3 ;
            this.tdWenziduixiang.toudingwenzizu.y = this.donghuaxianshi.y - this.donghuaxianshi.height;
            this.tdWenziduixiang.img_toudingwenzikuang.alpha = 1;
            this.tdWenziduixiang.img_toudingwenzikuang.skewY = 0;
        }else{
            this.tdWenziduixiang.toudingwenzizu.x = this.donghuaxianshi.x - this.donghuaxianshi.width / 3 - this.tdWenziduixiang.toudingwenzizu.width;
            this.tdWenziduixiang.toudingwenzizu.y = this.donghuaxianshi.y - this.donghuaxianshi.height;
            this.tdWenziduixiang.img_toudingwenzikuang.alpha = 1;
            this.tdWenziduixiang.img_toudingwenzikuang.skewY = 180; 
        }
        switch(this.tdWenzi){
                case 0:
                    let suiji1 = Math.floor(Math.random() * this.tdWenzi0.length);
                    this.tdWenziduixiang.wenzineirong.text = this.tdWenzi0[suiji1].texuel + "[" +this.caipinmingcheng + "]";
                    break;
                case 1:
                    let suiji2 = Math.floor(Math.random() * this.tdWenzi1.length);
                    this.tdWenziduixiang.wenzineirong.text = this.tdWenzi1[suiji2].texuel;
                    break;
                case 2:
                    let suiji3 = Math.floor(Math.random() * this.tdWenzi2.length);
                    this.tdWenziduixiang.wenzineirong.text = this.tdWenzi2[suiji3].texuel;
                    break;
                case 3:
                    let suiji4 = Math.floor(Math.random() * this.tdWenzi3.length);
                    this.tdWenziduixiang.wenzineirong.text = this.tdWenzi3[suiji4].texuel;
                    break;
                case 4:
                    let suiji5 = Math.floor(Math.random() * this.tdWenzi4.length);
                    this.tdWenziduixiang.wenzineirong.text = this.tdWenzi4[suiji5].texuel;
                    break;
                default:
                    this.tdWenziduixiang.wenzineirong.text = this.tdWenzi0[suiji1].texuel + "[" +this.caipinmingcheng + "]";
                    break;          
            }
    }

    
}