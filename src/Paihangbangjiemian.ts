class Paihangbangjiemian extends eui.Component implements  eui.UIComponent {
	public paihangbangzu:eui.Group;
	public img_paihangbg:eui.Image;
	public biaotitupian:eui.Image;
	public but_shijie:eui.Button;
	public but_haoyou:eui.Button;
	public but_shangyiye:eui.Button;
	public but_xiayiye:eui.Button;
	public xiaoxizu:eui.Group;
	public img_mingciditu:eui.Image;
	public nicheng:eui.Label;
	public fenshu:eui.Label;
	public touxiang:eui.Group;
	public xiangkuang:eui.Image;
	public paiming:eui.Label;
	public xiaoxizu0:eui.Group;
	public img_mingciditu0:eui.Image;
	public nicheng0:eui.Label;
	public fenshu0:eui.Label;
	public touxiang0:eui.Group;
	public xiangkuang0:eui.Image;
	public paiming0:eui.Label;
	public xiaoxizu1:eui.Group;
	public img_mingciditu1:eui.Image;
	public nicheng1:eui.Label;
	public fenshu1:eui.Label;
	public touxiang1:eui.Group;
	public xiangkuang1:eui.Image;
	public paiming1:eui.Label;
	public xiaoxizu2:eui.Group;
	public img_mingciditu2:eui.Image;
	public nicheng2:eui.Label;
	public fenshu2:eui.Label;
	public touxiang2:eui.Group;
	public xiangkuang2:eui.Image;
	public paiming2:eui.Label;



	//排行榜界面实例
	public paihangbangui:egret.Bitmap;

	//世界排行榜分数排序后的数据表
	public totalGroup:any = [];

	//当前页数
	public dangqianyeshu:number;
	//最大页数
	public zuidayeshu:number;

	public dakaijiemian:number = 1;//1为世界排行榜，2为好友排行榜


	public constructor() {
		super();
		this.paihangbangui = new egret.Bitmap();
	}

	protected partAdded(partName:string,instance:any):void
	{
		super.partAdded(partName,instance);
	}


	protected childrenCreated():void
	{
		super.childrenCreated();
		this.chushihua();
	}

	public chushihua(){
		this.but_haoyou.enabled = true;
		this.but_haoyou.addEventListener(egret.TouchEvent.TOUCH_TAP,this.dianjihaoyoujiemian,this);
		this.but_shijie.enabled = true;
		this.but_shijie.addEventListener(egret.TouchEvent.TOUCH_TAP,this.dianjishijiejiemian,this);
		//默认打开世界排行榜界面
		this.dianjishijiejiemian();
	}

	public dianjihaoyoujiemian(){
		this.dakaijiemian = 2;
		if(this.paihangbangui.parent){
			this.removeChild(this.paihangbangui)
		}
		this.but_haoyou.enabled = false;
		this.but_shijie.enabled = true;
		this.biaotitupian.source = "img_biaotihaoyou_png";
		this.xiaoxizu.alpha = 0;
		this.xiaoxizu0.alpha = 0;
		this.xiaoxizu1.alpha = 0;
		this.xiaoxizu2.alpha = 0;
		this.but_shangyiye.enabled = false;
		this.but_shangyiye.alpha = 0;
		this.but_xiayiye.enabled = false;
		this.but_xiayiye.alpha = 0;
		var platform = window.platform;
		this.paihangbangui =platform.openDataContext.createDisplayObject(null,this.stage.stageWidth, this.stage.stageHeight);
		this.addChild(this.paihangbangui);
		this.chushihuapaihangbang();

		
	}

	//排行榜显示内容逻辑
	public async chushihuapaihangbang(){
		await platform.openDataContext.postMessage({
			time:(new Date()).getFullYear() + 2,
			uid:Gerenshuxing.uid,
			command:"open"
		})
		/*await platform.openDataContext.postMessage({
			time:(new Date()).getFullYear() + 2,
			command:"haoyoushuju"
		})*/
	}


	public dianjishijiejiemian(){
		this.dakaijiemian = 1;
		if(Gerenshuxing.paihangbangshuju.length > 0){
			if(Gerenshuxing.xingfuzhi >= parseInt(Gerenshuxing.paihangbangshuju[Gerenshuxing.paihangbangshuju.length - 1].fenshu) && 
			Gerenshuxing.xingfuzhi != Gerenshuxing.qingqiupaihangfenshu){
				Gerenshuxing.qingqiupaihangfenshu = Gerenshuxing.xingfuzhi;
				Weblianjie.fasongshuju("code:096","{" + '"uid"' + ":"+ '"' + Gerenshuxing.uid + '"' + "}");
			}
		}else{
			Gerenshuxing.qingqiupaihangfenshu = Gerenshuxing.xingfuzhi;
			Weblianjie.fasongshuju("code:096","{" + '"uid"' + ":"+ '"' + Gerenshuxing.uid + '"' + "}");
		}
		if(this.paihangbangui.parent){
			this.removeChild(this.paihangbangui)
		}
		this.but_haoyou.enabled = true;
		this.but_shijie.enabled = false;
		this.biaotitupian.source = "img_biaotishijie_png";
		this.xiaoxizu.alpha = 0;
		this.xiaoxizu0.alpha = 0;
		this.xiaoxizu1.alpha = 0;
		this.xiaoxizu2.alpha = 0;
		this.but_xiayiye.alpha = 1;
		this.but_shangyiye.alpha = 1;
		this.dangqianyeshu = 0;
		this.paixufenshu();
		

	}

	public paixufenshu(){
		let data = Gerenshuxing.paihangbangshuju;
		let key = 0;
		let xinpaimingzu = [];
		for(var i = 0;i<data.length-1;i++) {
			for(var j = 0;j<data.length-i-1;j++){
				if(parseInt(data[j].fenshu) <= parseInt(data[j+1].fenshu)){
					//把小的数字放到后面
					var swap = data[j];
					data[j] = data[j+1];
					data[j+1] = swap;
				}
			}
		}
		xinpaimingzu = data;
		for(var h = 0;h<xinpaimingzu.length;h++){
			this.totalGroup[h] = {
				openid:xinpaimingzu[h].openid,
				key:h + 1,
				name:xinpaimingzu[h].nickname,
				url:xinpaimingzu[h].url,
				scroes:xinpaimingzu[h].fenshu
			}
			console.log(this.totalGroup);
		}
		this.zuidayeshu = Math.ceil(this.totalGroup.length / 3);
		this.xianshizishen();
		this.zhuyaoxianshi(0);  
	}

	public zhuyaoxianshi(yeshu){
		if(this.totalGroup.length >= yeshu * 3 + 1){
			this.xiaoxizu.alpha = 1;
			if(yeshu == 0){
				this.img_mingciditu.source = "img_diyiming_png";
			}else if(yeshu > 0 && yeshu <= 3){
				this.img_mingciditu.source = "img_qitaming_png";
			}else{
				this.img_mingciditu.source = "img_wuming_png";
			}
			this.nicheng.text = this.totalGroup[yeshu * 3 + 0].name;
			this.fenshu.text = this.totalGroup[yeshu * 3 + 0].scroes;
			this.paiming.text = "" + (yeshu * 3 + 1);
			this.jiazaidiyigetuoxiang(this.totalGroup[yeshu * 3 + 0].url);
		}else{
			this.xiaoxizu.alpha = 0;
		}
		if(this.totalGroup.length >= yeshu * 3 + 2){
			this.xiaoxizu0.alpha = 1;
			if(yeshu == 0){
				this.img_mingciditu0.source = "img_dierming_png";
			}else if(yeshu > 0 && yeshu < 3){
				this.img_mingciditu0.source = "img_qitaming_png";
			}else{
				this.img_mingciditu0.source = "img_wuming_png";
			}
			this.nicheng0.text = this.totalGroup[yeshu * 3 + 1].name;
			this.fenshu0.text = this.totalGroup[yeshu * 3 + 1].scroes;
			this.paiming0.text = "" + (yeshu * 3 + 2);
			this.jiazaidiergetuoxiang(this.totalGroup[yeshu * 3 + 1].url);
		}else{
			this.xiaoxizu0.alpha = 0;
		}
		if(this.totalGroup.length >= yeshu * 3 + 3){
			this.xiaoxizu1.alpha = 1;
			if(yeshu == 0){
				this.img_mingciditu1.source = "img_disanming_png";
			}else if(yeshu > 0 && yeshu < 3){
				this.img_mingciditu1.source = "img_qitaming_png";
			}else{
				this.img_mingciditu1.source = "img_wuming_png";
			}
			this.nicheng1.text = this.totalGroup[yeshu * 3 + 2].name;
			this.fenshu1.text = this.totalGroup[yeshu * 3 + 2].scroes;
			this.paiming1.text = "" + (yeshu * 3 + 3);
			this.jiazaidisangetuoxiang(this.totalGroup[yeshu * 3 + 2].url);
		}else{
			this.xiaoxizu1.alpha = 0;
		}
		if(this.dangqianyeshu <= 0){
			this.but_shangyiye.enabled = false;
		}else{
			this.but_shangyiye.enabled = true;
			this.but_shangyiye.addEventListener(egret.TouchEvent.TOUCH_TAP,this.shangyiye,this);
		}
		if(this.dangqianyeshu >= this.zuidayeshu){
			this.but_xiayiye.enabled = false;
		}else{
			this.but_xiayiye.enabled = true;
			this.but_xiayiye.addEventListener(egret.TouchEvent.TOUCH_TAP,this.xiayiye,this);
		}
	}

	public shangyiye(){
		this.dangqianyeshu -= 1;
		this.zhuyaoxianshi(this.dangqianyeshu);
	}

	public xiayiye(){
		this.dangqianyeshu += 1;
		this.zhuyaoxianshi(this.dangqianyeshu);
	}

	public jiazaidiyigetuoxiang(url){
		var youbiaoLoader: egret.ImageLoader = new egret.ImageLoader;
		youbiaoLoader.load(url);
		youbiaoLoader.once(egret.Event.COMPLETE, this.xianshidiyigetouxiang, this);
		
	}

	public xianshidiyigetouxiang(evt: egret.Event):void{
		if (evt.currentTarget.data) {
//			egret.log("加载头像成功: " + evt.currentTarget.data);
			let texture = new egret.Texture();
			texture.bitmapData = evt.currentTarget.data;
			let head = new egret.Bitmap(texture);
			head.x = 0;
			head.y = 0;
			head.width=this.touxiang.width;
			head.height=this.touxiang.height;
			this.touxiang.addChild(head);
		}
	}

	public jiazaidiergetuoxiang(url){
		var youbiaoLoader: egret.ImageLoader = new egret.ImageLoader;
		youbiaoLoader.load(url);
		youbiaoLoader.once(egret.Event.COMPLETE, this.xianshidiergetouxiang, this);
		
	}

	public xianshidiergetouxiang(evt: egret.Event):void{
		if (evt.currentTarget.data) {
//			egret.log("加载头像成功: " + evt.currentTarget.data);
			let texture = new egret.Texture();
			texture.bitmapData = evt.currentTarget.data;
			let head = new egret.Bitmap(texture);
			head.x = 0;
			head.y = 0;
			head.width=this.touxiang.width;
			head.height=this.touxiang.height;
			this.touxiang0.addChild(head);
		}
	}

	public jiazaidisangetuoxiang(url){
		var youbiaoLoader: egret.ImageLoader = new egret.ImageLoader;
		youbiaoLoader.load(url);
		youbiaoLoader.once(egret.Event.COMPLETE, this.xianshidisangetouxiang, this);
		
	}

	public xianshidisangetouxiang(evt: egret.Event):void{
		if (evt.currentTarget.data) {
//			egret.log("加载头像成功: " + evt.currentTarget.data);
			let texture = new egret.Texture();
			texture.bitmapData = evt.currentTarget.data;
			let head = new egret.Bitmap(texture);
			head.x = 0;
			head.y = 0;
			head.width=this.touxiang.width;
			head.height=this.touxiang.height;
			this.touxiang1.addChild(head);
		}
	}

	public xianshizishen(){
		this.xiaoxizu2.alpha = 1;
		this.nicheng2.text = Gerenshuxing.mingzi;
		this.fenshu2.text ="" + Gerenshuxing.xingfuzhi;
		for(var j = 0;j<Gerenshuxing.paihangbangshuju.length;j++){
			if(Gerenshuxing.paihangbangshuju[j].openid == Gerenshuxing.uid){
				Gerenshuxing.paiming = j + 1;
				break;
			}
		}
		if(Gerenshuxing.paiming == 1){
			this.img_mingciditu2.source = "img_diyiming_png";
			this.paiming2.text = "" + Gerenshuxing.paiming;
		}else if(Gerenshuxing.paiming == 2){
			this.img_mingciditu2.source = "img_dierming_png";
			this.paiming2.text = "" + Gerenshuxing.paiming;
		}else if(Gerenshuxing.paiming == 3){
			this.img_mingciditu2.source = "img_disanming_png";
			this.paiming2.text = "" + Gerenshuxing.paiming;
		}else if(Gerenshuxing.paiming > 3 && Gerenshuxing.paiming <= 50){
			this.img_mingciditu2.source = "img_qitaming_png";
			this.paiming2.text = "" + Gerenshuxing.paiming;
		}else{
			this.img_mingciditu2.source = "img_wuming_png";
			this.paiming2.text = "无";
		}
		this.zishengtouxiang(Gerenshuxing.touxiang);
	}

	public zishengtouxiang(url){
		var youbiaoLoader: egret.ImageLoader = new egret.ImageLoader;
		youbiaoLoader.load(url);
		youbiaoLoader.once(egret.Event.COMPLETE, this.xianshizijitouxiang, this);
		
	}

	public xianshizijitouxiang(evt: egret.Event):void{
		if (evt.currentTarget.data) {
//			egret.log("加载头像成功: " + evt.currentTarget.data);
			let texture = new egret.Texture();
			texture.bitmapData = evt.currentTarget.data;
			let head = new egret.Bitmap(texture);
			head.x = 0;
			head.y = 0;
			head.width=this.touxiang.width;
			head.height=this.touxiang.height;
			this.touxiang2.addChild(head);
		}
	}
	
}