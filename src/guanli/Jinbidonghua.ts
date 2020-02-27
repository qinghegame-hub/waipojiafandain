class Jinbidonghua extends egret.DisplayObjectContainer{
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
	public cunfangrongqi:egret.DisplayObjectContainer;
	//获取世界坐标的X,y 
	public zongX;
	public zongY;
	//创建一个头顶金币数字显示文本
	public jinbinumber;
	//给显示对象添加缓动动画
	public donghuadingshi;


	public constructor(num1) {
		super();
		this.kaishidonghua(num1);
	}

	private kaishidonghua(num1){
		//创建一个显示动画的容器
        if(Gameguanli.Kongzhitai().zhujiemian.parent){
            this.cunfangrongqi = new egret.DisplayObjectContainer();
            Gameguanli.Kongzhitai().zhujiemian.addChild(this.cunfangrongqi);

            //使用动画资源的动作名称
            this.jinbimingcheng = "tiaodong";
            //动画资源获取
            this.jinbijiegou = RES.getRes("getjinbi_ske_json");
            this.jinbizhixiang = RES.getRes("getjinbi_tex_json");
            this.jinbiziyuan = RES.getRes("getjinbi_tex_png");
            //创建龙骨工厂
            this.jinbigongchang = dragonBones.EgretFactory.factory;
            //对动画资源进行工厂的解析
            this.jinbigongchang.parseDragonBonesData(this.jinbijiegou);
            this.jinbigongchang.parseTextureAtlasData(this.jinbizhixiang,this.jinbiziyuan);
            //对动画资源的纹理内容进行解析
            //建立骨架
            this.jinbigujia = this.jinbigongchang.buildArmature("jinbitiaodong");
            //创建一个显示对象
            this.jinbixianshi = this.jinbigujia.display;
            //给对象添加相应的样式，并添加到舞台
            this.cunfangrongqi.addChild(this.jinbixianshi);
            //获取坐标位置
            this.zongX = Gameguanli.Kongzhitai().zhujiemian.img_fandianyuanhuabg0.width;
            this.zongY = Gameguanli.Kongzhitai().zhujiemian.img_fandianyuanhuabg0.height;
            this.cunfangrongqi.x = this.zongX * 0.352 - this.jinbixianshi.width / 2;
            this.cunfangrongqi.y = this.zongY * 0.722 - this.jinbixianshi.height /2;
            let dongzuosuoyin = 0;
            //启动骨骼动画播放
            this.jinbigujia.animation.play(this.jinbimingcheng);
        //添加到世界时钟里
            dragonBones.WorldClock.clock.add(this.jinbigujia);
            //创建头顶的显示金币加成文字内容
            this.jinbinumber = new Jinbiwenben();
            this.cunfangrongqi.addChild(this.jinbinumber);
            this.jinbinumber.x = this.jinbixianshi.x + this.jinbixianshi.width / 2;
            this.jinbinumber.y = this.jinbixianshi.y - this.jinbixianshi.height / 2 + this.jinbinumber.height / 5 * 1;
            this.jinbinumber.wenzineirong.text = "+ " + num1;

            //给显示对象添加缓动动画
            egret.Tween.get(this.cunfangrongqi).wait(1000).to({x:this.cunfangrongqi.x,y:this.cunfangrongqi.y - this.zongY * 0.08},2000)
            .call(()=>{
                dragonBones.WorldClock.clock.remove(this.jinbigujia);
                if(this.jinbixianshi.parent){
                    this.cunfangrongqi.removeChild(this.jinbixianshi);
                }
                if(this.jinbinumber.parent){
                    this.cunfangrongqi.removeChild(this.jinbinumber);
                }
                if(this.cunfangrongqi.parent){
                    Gameguanli.Kongzhitai().zhujiemian.removeChild(this.cunfangrongqi);
                }
                this.jinbixianshi = null;
                this.jinbigujia = null;
            })
        }
		

	}


}