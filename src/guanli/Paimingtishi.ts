class Paimingtishi extends egret.DisplayObjectContainer{
	public  shangshengui:Paimingbiangengshang;
	public  xiajiangui:Paimingbiangengxia;

	public shangshengy:number;
	public xiajiangy:number;

	public constructor() {
		super();
		this.chushihua();
	}

	public  chushihua(){
		if(Gerenshuxing.paiming <= 50){
			this.zhenpaiming();
		}else{
			this.jiapaiming();
		}
	}

	public  jiapaiming(){
		let suijizengjiashu = Math.floor(Math.random() * 100) + 1;
		let jiapaimingshu = Gerenshuxing.paiming - suijizengjiashu ;
		this.shangshengui = new Paimingbiangengshang();
		Gameguanli.Kongzhitai().addChild(this.shangshengui);
		this.shangshengy = this.shangshengui.paimingshangshengzu.y;
		this.xiajiangy = this.shangshengui.paimingshangshengzu0.y;
		this.shangshengtouxiang();
		this.shangshengui.paiming.text = "当前排名:" + jiapaimingshu;
		this.shangshengui.xingfuzhi.text = "" + Gerenshuxing.xingfuzhi;
		egret.Tween.get(this.shangshengui.paimingshangshengzu).to({y:this.xiajiangy},2000).wait(3000);
		let suijixingfuzhi = Math.floor(Math.random() * 100) + 1;
		let suijicaoguopaiming = Math.floor(Math.random() * 10) + 1;
		suijixingfuzhi = Gerenshuxing.xingfuzhi - suijixingfuzhi;
		let jiapaimingzhi = Gerenshuxing.paiming - suijicaoguopaiming;
		this.shangshengui.paiming1.text = "当前排名:" + jiapaimingzhi;
		this.shangshengui.xingfuzhi1.text = "" + suijixingfuzhi;
		this.jiqirenleixing();
		egret.Tween.get(this.shangshengui.paimingshangshengzu0).to({y:this.shangshengy},2000).wait(3000).call(()=>{
			Gameguanli.Kongzhitai().removeChild(this.shangshengui);
		})

	}

	public  zhenpaiming(){
		if(Gerenshuxing.paiming > 1 && Gerenshuxing.paihangbangshuju.length >= Gerenshuxing.paiming && 
		Gerenshuxing.xingfuzhi > parseInt(Gerenshuxing.paihangbangshuju[Gerenshuxing.paiming - 2].fenshu)
		&& Gerenshuxing.paiming <= 50){
			let jiapaimingshu = Gerenshuxing.paiming - 1 ;
			this.shangshengui = new Paimingbiangengshang();
			Gameguanli.Kongzhitai().addChild(this.shangshengui);
			this.shangshengy = this.shangshengui.paimingshangshengzu.y;
			this.xiajiangy = this.shangshengui.paimingshangshengzu0.y;
			this.shangshengtouxiang();
			this.shangshengui.paiming.text = "当前排名:" + jiapaimingshu;
			this.shangshengui.xingfuzhi.text = "" + Gerenshuxing.xingfuzhi;
			egret.Tween.get(this.shangshengui.paimingshangshengzu).to({y:this.xiajiangy},2000).wait(3000);
			let suijixingfuzhi = Gerenshuxing.paihangbangshuju[Gerenshuxing.paiming - 2].fenshu;
			let suijicaoguopaiming = Gerenshuxing.paiming;
			this.shangshengui.paiming1.text = "当前排名:" + suijicaoguopaiming;
			this.shangshengui.xingfuzhi1.text = "" + suijixingfuzhi;
			this.zhenpaimingtouxiang();
			egret.Tween.get(this.shangshengui.paimingshangshengzu0).to({y:this.shangshengy},2000).wait(3000).call(()=>{
				Gameguanli.Kongzhitai().removeChild(this.shangshengui);
				Gerenshuxing.paiming -= 1; 
			})
		}
		
	}

	public jiqirenleixing(){
		let npcbiao = RES.getRes("gukehanhuabiao_json");
		let suijinpc = Math.floor(Math.random() * npcbiao.length);
		let wenli = npcbiao[suijinpc].gktouxiang + "_png"
		let touxiang:egret.Bitmap = new egret.Bitmap();
		touxiang.texture =  RES.getRes(wenli);
		touxiang.x = 0;
		touxiang.y = 0;
		touxiang.width=this.shangshengui.xiangpianzu1.width;
		touxiang.height=this.shangshengui.xiangpianzu1.height;
		this.shangshengui.xiangpianzu1.addChild(touxiang);
	}

	public  shangshengtouxiang(){
		var youbiaoLoader: egret.ImageLoader = new egret.ImageLoader;
		/*if(Gerenshuxing.touxiangbaocunzhuangtai == true){
			imgLoader.load(Gerenshuxing.touxiang);
			imgLoader.once(egret.Event.COMPLETE, this.xianshigerentouxiang, this);
		}else{
			imgLoader.load("http://192.168.1.2/res/resource/resource/wxtx/undefined.png");
			imgLoader.once(egret.Event.COMPLETE, this.xianshigerentouxiang, this);
		}*/
		youbiaoLoader.load(Gerenshuxing.touxiang);
		youbiaoLoader.once(egret.Event.COMPLETE, this.shangshengxianshitouxiang, this);
		
	}

	public  shangshengxianshitouxiang(evt: egret.Event):void{
			if (evt.currentTarget.data) {
//			egret.log("加载头像成功: " + evt.currentTarget.data);
			let texture = new egret.Texture();
			texture.bitmapData = evt.currentTarget.data;
			let head = new egret.Bitmap(texture);
            head.x = 0;
            head.y = 0;
            head.width=this.shangshengui.xiangpianzu.width;
            head.height=this.shangshengui.xiangpianzu.height;
            this.shangshengui.xiangpianzu.addChild(head);
			}
		}

		public  zhenpaimingtouxiang(){
		var youbiaoLoader: egret.ImageLoader = new egret.ImageLoader;
		/*if(Gerenshuxing.touxiangbaocunzhuangtai == true){
			imgLoader.load(Gerenshuxing.touxiang);
			imgLoader.once(egret.Event.COMPLETE, this.xianshigerentouxiang, this);
		}else{
			imgLoader.load("http://192.168.1.2/res/resource/resource/wxtx/undefined.png");
			imgLoader.once(egret.Event.COMPLETE, this.xianshigerentouxiang, this);
		}*/
		let touxiangdizhi = Gerenshuxing.paihangbangshuju[Gerenshuxing.paiming - 2].url;
		youbiaoLoader.load(touxiangdizhi);
		youbiaoLoader.once(egret.Event.COMPLETE, this.xianshizhentouxiang, this);
		
	}

	public  xianshizhentouxiang(evt: egret.Event):void{
			if (evt.currentTarget.data) {
//			egret.log("加载头像成功: " + evt.currentTarget.data);
			let texture = new egret.Texture();
			texture.bitmapData = evt.currentTarget.data;
			let head = new egret.Bitmap(texture);
            head.x = 0;
            head.y = 0;
            head.width=this.shangshengui.xiangpianzu1.width;
            head.height=this.shangshengui.xiangpianzu1.height;
            this.shangshengui.xiangpianzu1.addChild(head);
			}
		}
}