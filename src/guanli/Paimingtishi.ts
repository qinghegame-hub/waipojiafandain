class Paimingtishi extends egret.DisplayObjectContainer{
	public static shangshengui:Paimingbiangengshang;
	public static xiajiangui:Paimingbiangengxia;

	public constructor() {
		super();
	}

	public static chushihua(){
		if(Gerenshuxing.paiming >= 100){
			this.jiapaiming();
		}else{
			this.zhenpaiming();
		}
	}

	public static jiapaiming(){
		let suijizengjiashu = Math.floor(Math.random() * 100) + 1;
		let jiapaimingshu = Gerenshuxing.paiming - suijizengjiashu ;
		this.shangshengui = new Paimingbiangengshang();
		Gameguanli.Kongzhitai().addChild(this.shangshengui);
		this.shangshengtouxiang();
		this.shangshengui.paiming.text = "当前排名:" + jiapaimingshu;
		this.shangshengui.xingfuzhi.text = "" + Gerenshuxing.xingfuzhi;
		this.shangshengui.x = Gameguanli.Kongzhitai().width / 2 - (this.shangshengui.width / 1.5);
		this.shangshengui.y = Gameguanli.Kongzhitai().height / 11 * 5 - this.shangshengui.height;
		egret.Tween.get(this.shangshengui).to({y:Gameguanli.Kongzhitai().height / 11 * 4 - this.shangshengui.height},2000).wait(3000).call(()=>{
			Gameguanli.Kongzhitai().removeChild(this.shangshengui);
		})
		let suijixingfuzhi = Math.floor(Math.random() * 100) + 1;
		let suijicaoguopaiming = Math.floor(Math.random() * 10) + 1;
		suijixingfuzhi = Gerenshuxing.xingfuzhi - suijixingfuzhi;
		let jiapaimingzhi = Gerenshuxing.paiming - suijicaoguopaiming;
		this.xiajiangui = new Paimingbiangengxia();
		Gameguanli.Kongzhitai().addChild(this.xiajiangui);
//		this.xiajiangtouxiang();
		this.xiajiangui.paiming0.text = "当前排名:" + jiapaimingzhi;
		this.xiajiangui.xingfuzhi0.text = "" + suijixingfuzhi;
		this.xiajiangui.x = Gameguanli.Kongzhitai().width / 2 - (this.xiajiangui.width / 1.5);
		this.xiajiangui.y = Gameguanli.Kongzhitai().height / 11 * 4 - this.xiajiangui.height;
		egret.Tween.get(this.xiajiangui).to({y:Gameguanli.Kongzhitai().height / 11 * 5 - this.xiajiangui.height},2000).wait(3000).call(()=>{
			Gameguanli.Kongzhitai().removeChild(this.xiajiangui);
		})

	}

	public static zhenpaiming(){
		
	}

	public static shangshengtouxiang(){
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

	public static shangshengxianshitouxiang(evt: egret.Event):void{
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
}