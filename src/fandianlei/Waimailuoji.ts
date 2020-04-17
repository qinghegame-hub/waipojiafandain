class Waimailuoji extends egret.DisplayObjectContainer{
	public static di1gekeng:boolean = false;
	public static di2gekeng:boolean = false;
	public static di3gekeng:boolean = false;

	public static di1gecaiui:Waimaitishi;
	public static di2gecaiui:Waimaitishi;
	public static di3gecaiui:Waimaitishi;

	public static di1gecaiid:string;
	public static di2gecaiid:string;
	public static di3gecaiid:string;

	public static shipubiao:any;


	public constructor() {
		super();
	}

	public static zhujiemianluoji(caiid){
		this.shipubiao = RES.getRes("shipubiao_json");
		if(this.di1gekeng == false){
			this.di1gekeng = true;
			this.di1gecaiui = new Waimaitishi();
			Gameguanli.Kongzhitai().zhujiemiandingbu.addChild(this.di1gecaiui);
			this.di1gecaiui.x = Gameguanli.Kongzhitai().zhujiemiandingbu.width;
			this.di1gecaiui.y = Gameguanli.Kongzhitai().zhujiemiandingbu.height / 11 * 5;
			this.di1gecaiid = caiid;
			for(var i = 0;i<this.shipubiao.length;i++){
				if(this.shipubiao[i].id == caiid){
					this.di1gecaiui.caiicon.source = this.shipubiao[i].id + "_png";
					this.di1gecaiui.caiming.text = this.shipubiao[i].foodName;
					break;
				}
			}
			egret.Tween.get(this.di1gecaiui).to({x:Gameguanli.Kongzhitai().zhujiemiandingbu.width - this.di1gecaiui.width},1000).call(()=>{
				this.di1gecaiui.tanchucaizu.touchEnabled = true;
				this.di1gecaiui.tanchucaizu.addEventListener(egret.TouchEvent.TOUCH_TAP,this.dianji1waimai,this);
			})

		}else if(this.di2gekeng == false){
			this.di2gekeng = true;
			this.di2gecaiui = new Waimaitishi();
			Gameguanli.Kongzhitai().zhujiemiandingbu.addChild(this.di2gecaiui);
			this.di2gecaiui.x = Gameguanli.Kongzhitai().zhujiemiandingbu.width;
			this.di2gecaiui.y = Gameguanli.Kongzhitai().zhujiemiandingbu.height / 11 * 4;
			this.di2gecaiid = caiid;
			for(var i = 0;i<this.shipubiao.length;i++){
				if(this.shipubiao[i].id == caiid){
					console.log(this.shipubiao[i].id + "_png");
					this.di2gecaiui.caiicon.source = "" + this.shipubiao[i].id + "_png";
					this.di2gecaiui.caiming.text = this.shipubiao[i].foodName;
					break;
				}
			}
			egret.Tween.get(this.di2gecaiui).to({x:Gameguanli.Kongzhitai().zhujiemiandingbu.width - this.di2gecaiui.width},1000).call(()=>{
				this.di2gecaiui.tanchucaizu.touchEnabled = true;
				this.di2gecaiui.tanchucaizu.addEventListener(egret.TouchEvent.TOUCH_TAP,this.dianji2waimai,this);
			})

		}else if(this.di3gekeng == false){
			this.di3gekeng = true;
			this.di3gecaiui = new Waimaitishi();
			Gameguanli.Kongzhitai().zhujiemiandingbu.addChild(this.di3gecaiui);
			this.di3gecaiui.x = Gameguanli.Kongzhitai().zhujiemiandingbu.width;
			this.di3gecaiui.y = Gameguanli.Kongzhitai().zhujiemiandingbu.height / 11 * 3;
			this.di3gecaiid = caiid;
			for(var i = 0;i<this.shipubiao.length;i++){
				if(this.shipubiao[i].id == caiid){
					console.log(this.shipubiao[i].id + "_png");
					this.di3gecaiui.caiicon.source = "" + this.shipubiao[i].id + "_png";
					this.di3gecaiui.caiming.text = this.shipubiao[i].foodName;
					break;
				}
			}
			egret.Tween.get(this.di3gecaiui).to({x:Gameguanli.Kongzhitai().zhujiemiandingbu.width - this.di3gecaiui.width},1000).call(()=>{
				this.di3gecaiui.tanchucaizu.touchEnabled = true;
				this.di3gecaiui.tanchucaizu.addEventListener(egret.TouchEvent.TOUCH_TAP,this.dianji3waimai,this);
			})
		}
	}

	public static dianji1waimai(){
		egret.Tween.get(this.di1gecaiui).to({scaleX:1.1,scaleY:1.1},500).call(()=>{
				egret.Tween.get(this.di1gecaiui).to({scaleX:1,scaleY:1},500).call(()=>{
					Gameguanli.Kongzhitai().zhujiemiandingbu.removeChild(this.di1gecaiui);
					this.di1gekeng = false;
					let waimaisongdaui = new Waimaijiemianluoji(this.di1gecaiid);
				});
			})
		
	}

	public static dianji2waimai(){
		egret.Tween.get(this.di2gecaiui).to({scaleX:1.1,scaleY:1.1},500).call(()=>{
				egret.Tween.get(this.di2gecaiui).to({scaleX:1,scaleY:1},500).call(()=>{
					Gameguanli.Kongzhitai().zhujiemiandingbu.removeChild(this.di2gecaiui);
					this.di2gekeng = false;
					let waimaisongdaui = new Waimaijiemianluoji(this.di2gecaiid);
				});
			})
		
	}

	public static dianji3waimai(){
		egret.Tween.get(this.di3gecaiui).to({scaleX:1.1,scaleY:1.1},500).call(()=>{
				egret.Tween.get(this.di3gecaiui).to({scaleX:1,scaleY:1},500).call(()=>{
					Gameguanli.Kongzhitai().zhujiemiandingbu.removeChild(this.di3gecaiui);
					this.di3gekeng = false;
					let waimaisongdaui = new Waimaijiemianluoji(this.di3gecaiid);
				});
			})
		
	}
}