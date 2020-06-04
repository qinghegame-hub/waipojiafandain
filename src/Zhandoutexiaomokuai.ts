class Zhandoutexiaomokuai extends  egret.DisplayObjectContainer{

	public dongzuomingcheng:string;//龙骨动画名称
	public skeletonData:string;//龙骨动画资源1
	public textureData:string;//龙骨动画名称
	public texture:string;//龙骨动画名称
	public donghuagongchang:dragonBones.EgretFactory;//龙骨动画工厂
	public dongzuoshiti:any;//龙骨骨架
	public donghuaxianshi:any;//龙骨显示对象
	public donghuaxinashirongqi:egret.DisplayObjectContainer;//龙骨显示容器名称

	public constructor(mingcheng,gujiamingcheng,ziyuan1,ziyuan2,ziyuan3,duixiang,zuobiaox,zuobiaoy) {
		super();
		this.chushihua(mingcheng,gujiamingcheng,ziyuan1,ziyuan2,ziyuan3,duixiang,zuobiaox,zuobiaoy);
	}

	public chushihua(mingcheng,gujiamingcheng,ziyuan1,ziyuan2,ziyuan3,duixiang,zuobiaox,zuobiaoy){
		//使用动画资源的动作名称
		this.dongzuomingcheng = mingcheng;
		//动画资源获取
		this.skeletonData = RES.getRes(ziyuan1);//ske
		this.textureData = RES.getRes(ziyuan2);//tex
		this.texture = RES.getRes(ziyuan3);//png
		//创建龙骨工厂
		this.donghuagongchang = dragonBones.EgretFactory.factory;
		//对动画资源进行工厂的解析
		this.donghuagongchang.parseDragonBonesData(this.skeletonData);
		this.donghuagongchang.parseTextureAtlasData(this.textureData,this.texture);
		//对动画资源的纹理内容进行解析
		//建立骨架
		this.dongzuoshiti = this.donghuagongchang.buildArmature(gujiamingcheng);//骨架名字
		//创建一个显示对象
		this.donghuaxianshi = this.dongzuoshiti.display;
		//创建一个显示容器
		this.donghuaxinashirongqi = new egret.DisplayObjectContainer();
		this.addChild(this.donghuaxinashirongqi);
		//给对象添加相应的样式，并添加到舞台
		this.donghuaxinashirongqi.addChild(this.donghuaxianshi);
		//获取坐标位置
		this.donghuaxinashirongqi.x = zuobiaox;
		this.donghuaxinashirongqi.y = zuobiaoy;

		//设置动画大小
//		this.dongzuoshiti.scale  = 40;

		
		//启动骨骼动画播放
		this.dongzuoshiti.animation.play(this.dongzuomingcheng,1);
		//监听龙骨动画是否播放完毕
		this.dongzuoshiti.addEventListener(egret.Event.LOOP_COMPLETE,this.jinengbofangwanbi,this);
		//添加到世界时钟里
		dragonBones.WorldClock.clock.add(this.dongzuoshiti);
		//改变动画的播放速度
        dragonBones.WorldClock.clock.timeScale = 1;
	}

	public jinengbofangwanbi(){
		dragonBones.WorldClock.clock.remove(this.dongzuoshiti);
		if(this.donghuaxinashirongqi.parent){
			this.removeChild(this.donghuaxinashirongqi);
		}
		this.donghuaxianshi = null;
		this.dongzuoshiti = null;
	}

}