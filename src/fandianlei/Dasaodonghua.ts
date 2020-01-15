class Dasaodonghua extends egret.DisplayObjectContainer{
	public donghuaid;
    //动画动作的名称
    public jinbimingcheng ;
    //动画资源的结构
    public jinbijiegou;
    //动画资源的指向文件
    public jinbizhixiang;
    //动画资源的资源文件
    public jinbiziyuan;
    //创建的龙骨工厂
    public jinbigongchang:dragonBones.EgretFactory;
    //创建的骨架
    public jinbigujia:dragonBones.Armature;
    //创建的龙骨动画显示对象
    public jinbixianshi;
    //创建一个存放龙骨和文字的容器
	public cunfangrongqisb:egret.DisplayObjectContainer;
	//获取世界坐标的X,y 
	public zongX;
	public zongY;
	//创建一个头顶金币数字显示文本
	public jinbinumber;
	//给显示对象添加缓动动画
	public donghuadingshi;

	public constructor(num1,num2) {
		super();
		this.kaishidonghua(num1,num2);
	}

	public kaishidonghua(num1,num2){
		//创建一个显示动画的容器
		this.cunfangrongqisb = new egret.DisplayObjectContainer();
		Gameguanli.Kongzhitai().zhujiemian.addChild(this.cunfangrongqisb);

		//使用动画资源的动作名称
        this.jinbimingcheng = "saodi";
        //动画资源获取
        this.jinbijiegou = RES.getRes("saobadonghua_ske_json");
        this.jinbizhixiang = RES.getRes("saobadonghua_tex_json");
        this.jinbiziyuan = RES.getRes("saobadonghua_tex_png");
        //创建龙骨工厂
        this.jinbigongchang = dragonBones.EgretFactory.factory;
        //对动画资源进行工厂的解析
        this.jinbigongchang.parseDragonBonesData(this.jinbijiegou);
        this.jinbigongchang.parseTextureAtlasData(this.jinbizhixiang,this.jinbiziyuan);
        //对动画资源的纹理内容进行解析
        //建立骨架
        this.jinbigujia = this.jinbigongchang.buildArmature("saobagujia");
        //创建一个显示对象
        this.jinbixianshi = this.jinbigujia.display;
        //给对象添加相应的样式，并添加到舞台
        this.cunfangrongqisb.addChild(this.jinbixianshi);
        //获取坐标位置
        this.zongX = num1 + this.jinbixianshi.width / 2;
        this.zongY = num2 + this.jinbixianshi.height / 2;
        this.cunfangrongqisb.x = this.zongX;
        this.cunfangrongqisb.y = this.zongY;
        //启动骨骼动画播放
        this.jinbigujia.animation.play(this.jinbimingcheng);
		this.jinbigujia.animation.timeScale = 1.5;
       //添加到世界时钟里
        dragonBones.WorldClock.clock.add(this.jinbigujia);

		egret.Tween.get(this.cunfangrongqisb).wait(1000).call(()=>{
			dragonBones.WorldClock.clock.remove(this.jinbigujia);
            if(this.jinbixianshi.parent){
                this.cunfangrongqisb.removeChild(this.jinbixianshi);
            }
            if(this.cunfangrongqisb.parent){
                Gameguanli.Kongzhitai().zhujiemian.removeChild(this.cunfangrongqisb);
            }
			this.jinbixianshi = null;
            this.jinbigujia = null;
		})
	}
	
}