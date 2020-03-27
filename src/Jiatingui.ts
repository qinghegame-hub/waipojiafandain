class Jiatingui extends eui.Component implements  eui.UIComponent {
	public jiatingzu:eui.Group;
	public img_jiatingbeijing:eui.Image;
	public but_chuang:eui.Image;
	public but_guizi:eui.Image;
	public but_shuzhuo:eui.Image;
	public but_dianshi:eui.Image;
	public but_chaji:eui.Image;
	public but_shafa:eui.Image;
	public but_maowo:eui.Image;
	public butun_shafa:eui.Button;
	public butun_shafa0:eui.Button;
	public butun_chaji:eui.Button;
	public butun_dianshi:eui.Button;
	public butun_maowo:eui.Button;
	public butun_shuzhuo:eui.Button;
	public butun_guizi:eui.Button;
	public butun_chuang:eui.Button;
	public butun_chuang0:eui.Button;
	public img_daerzi:eui.Image;
	public img_ererzi:eui.Image;
	public img_daerxi:eui.Image;
	public img_xiaosunnv:eui.Image;







	public constructor() {
		super();
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
		this.butun_chuang.touchEnabled = true;
		this.butun_chuang.addEventListener(egret.TouchEvent.TOUCH_TAP,this.dianjichuang,this);
		this.butun_chuang0.touchEnabled = true;
		this.butun_chuang0.addEventListener(egret.TouchEvent.TOUCH_TAP,this.dianjichuang,this);
		this.butun_guizi.touchEnabled = true;
		this.butun_guizi.addEventListener(egret.TouchEvent.TOUCH_TAP,this.dianjiguizi,this);
		this.butun_shuzhuo.touchEnabled = true;
		this.butun_shuzhuo.addEventListener(egret.TouchEvent.TOUCH_TAP,this.dianjishuzhuo,this);
		this.butun_dianshi.touchEnabled = true;
		this.butun_dianshi.addEventListener(egret.TouchEvent.TOUCH_TAP,this.dianjidianshi,this);
		this.butun_chaji.touchEnabled = true;
		this.butun_chaji.addEventListener(egret.TouchEvent.TOUCH_TAP,this.dianjichaji,this);
		this.butun_shafa.touchEnabled = true;
		this.butun_shafa.addEventListener(egret.TouchEvent.TOUCH_TAP,this.dianjishafa,this);
		this.butun_shafa0.touchEnabled = true;
		this.butun_shafa0.addEventListener(egret.TouchEvent.TOUCH_TAP,this.dianjishafa,this);
		this.butun_maowo.touchEnabled = true;
		this.butun_maowo.addEventListener(egret.TouchEvent.TOUCH_TAP,this.dianjimaowo,this);
		this.jiatingchengyuanxianshi();
	}

	public dianjichuang(){
		Gameguanli.Kongzhitai().cuowutishixinxi("点击成功");
		egret.Tween.get(this.but_chuang).to({scaleX:1.2,scaleY:1.2},1000).call(()=>{
			egret.Tween.get(this.but_chuang).to({scaleX:1,scaleY:1},1000);
		})
	}

	public dianjiguizi(){
		egret.Tween.get(this.but_guizi).to({scaleX:1.2,scaleY:1.2},1000).call(()=>{
			egret.Tween.get(this.but_guizi).to({scaleX:1,scaleY:1},1000);
			Gameguanli.Kongzhitai().cuowutishixinxi("点击成功");
		})
	}

	public dianjishuzhuo(){
		egret.Tween.get(this.but_shuzhuo).to({scaleX:1.2,scaleY:1.2},1000).call(()=>{
			egret.Tween.get(this.but_shuzhuo).to({scaleX:1,scaleY:1},1000);
			Gameguanli.Kongzhitai().cuowutishixinxi("点击成功");
		})
	}

	public dianjidianshi(){
		egret.Tween.get(this.but_dianshi).to({scaleX:1.2,scaleY:1.2},1000).call(()=>{
			egret.Tween.get(this.but_dianshi).to({scaleX:1,scaleY:1},1000);
			Gameguanli.Kongzhitai().cuowutishixinxi("点击成功");
		})
	}

	public dianjichaji(){
		egret.Tween.get(this.but_chaji).to({scaleX:1.2,scaleY:1.2},1000).call(()=>{
			egret.Tween.get(this.but_chaji).to({scaleX:1,scaleY:1},1000);
			Gameguanli.Kongzhitai().cuowutishixinxi("点击成功");
		})
	}

	public dianjishafa(){
		egret.Tween.get(this.but_shafa).to({scaleX:1.2,scaleY:1.2},1000).call(()=>{
			egret.Tween.get(this.but_shafa).to({scaleX:1,scaleY:1},1000);
			Gameguanli.Kongzhitai().cuowutishixinxi("点击成功");
		})
	}

	public dianjimaowo(){
		egret.Tween.get(this.but_maowo).to({scaleX:1.2,scaleY:1.2},1000).call(()=>{
			egret.Tween.get(this.but_maowo).to({scaleX:1,scaleY:1},1000);
			Gameguanli.Kongzhitai().cuowutishixinxi("点击成功");
		})
	}

	public jiatingchengyuanxianshi(){
		if(Gerenshuxing.daerzixinxi[5] == 1){
			this.img_daerzi.alpha = 1;
			this.img_daerzi.touchEnabled = true;
			this.img_daerzi.addEventListener(egret.TouchEvent.TOUCH_TAP,this.dianjidaerzi,this);
			if(Gerenshuxing.daerzixinxi[4] == 0){
				Weblianjie.fasongshuju("code:058","{" + '"uid"' + ":"+ '"' + Gerenshuxing.uid + '"' + "}");
				let daerzihuijiahanhua = new Toudingwenzi();
				Gameguanli.Kongzhitai().jiatingjiemian.addChild(daerzihuijiahanhua);
				daerzihuijiahanhua.x = this.img_daerzi.x - daerzihuijiahanhua.width / 2 + daerzihuijiahanhua.toudingwenzizu.width + this.img_daerzi.width;
				daerzihuijiahanhua.y = this.img_daerzi.y - daerzihuijiahanhua.height / 2 + daerzihuijiahanhua.toudingwenzizu.height + this.img_daerzi.height / 6;
				daerzihuijiahanhua.wenzineirong.text = "妈，我回家了..."
				egret.Tween.get(daerzihuijiahanhua).to({alpha:0.5},3000).call(()=>{
					Gameguanli.Kongzhitai().jiatingjiemian.removeChild(daerzihuijiahanhua);
				})
			}
		}else{
			this.img_daerzi.alpha = 0;
			this.img_daerzi.touchEnabled = false;
		}
		if(Gerenshuxing.ererzixinxi[5] == 1){
			this.img_ererzi.alpha = 1;
			this.img_ererzi.touchEnabled = true;
			this.img_ererzi.addEventListener(egret.TouchEvent.TOUCH_TAP,this.dianjiererzi,this);
			if(Gerenshuxing.ererzixinxi[4] == 0){
				Weblianjie.fasongshuju("code:059","{" + '"uid"' + ":"+ '"' + Gerenshuxing.uid + '"' + "}");
				let ererzihuijiahanhua = new Toudingwenzi();
				Gameguanli.Kongzhitai().jiatingjiemian.addChild(ererzihuijiahanhua);
				ererzihuijiahanhua.x = this.img_ererzi.x - ererzihuijiahanhua.width / 2  + ererzihuijiahanhua.toudingwenzizu.width + this.img_ererzi.width;
				ererzihuijiahanhua.y = this.img_ererzi.y - ererzihuijiahanhua.height / 2 + ererzihuijiahanhua.toudingwenzizu.height + this.img_ererzi.height / 6;
				ererzihuijiahanhua.wenzineirong.text = "亲爱的老妈，我回家了..."
				egret.Tween.get(ererzihuijiahanhua).to({alpha:0.5},3000).call(()=>{
					Gameguanli.Kongzhitai().jiatingjiemian.removeChild(ererzihuijiahanhua);
				})
			}
		}else{
			this.img_ererzi.alpha = 0;
			this.img_ererzi.touchEnabled = false;
		}
		if(Gerenshuxing.xifuxinxi[5] == 1){
			this.img_daerxi.alpha = 1;
			this.img_daerxi.touchEnabled = true;
			this.img_daerxi.addEventListener(egret.TouchEvent.TOUCH_TAP,this.dianjixifu,this);
			if(Gerenshuxing.xifuxinxi[4] == 0){
				Weblianjie.fasongshuju("code:060","{" + '"uid"' + ":"+ '"' + Gerenshuxing.uid + '"' + "}");
				let xifuhuijiahanhua = new Toudingwenzi();
				Gameguanli.Kongzhitai().jiatingjiemian.addChild(xifuhuijiahanhua);
				xifuhuijiahanhua.img_toudingwenzikuang.skewY = 180
				xifuhuijiahanhua.x = this.img_daerxi.x - xifuhuijiahanhua.width / 2 + xifuhuijiahanhua.toudingwenzizu.width - this.img_daerxi.width * 2.5;
				xifuhuijiahanhua.y = this.img_daerxi.y - xifuhuijiahanhua.height / 2 + xifuhuijiahanhua.toudingwenzizu.height + this.img_daerxi.height / 6;
				xifuhuijiahanhua.wenzineirong.text = "婆婆，我回家了..."
				egret.Tween.get(xifuhuijiahanhua).to({alpha:0.5},3000).call(()=>{
					Gameguanli.Kongzhitai().jiatingjiemian.removeChild(xifuhuijiahanhua);
				})
			}
		}else{
			this.img_daerxi.alpha = 0;
			this.img_daerxi.touchEnabled = false;
		}
		if(Gerenshuxing.sunnvxinxi[5] == 1){
			this.img_xiaosunnv.alpha = 1;
			this.img_xiaosunnv.touchEnabled = true;
			this.img_xiaosunnv.addEventListener(egret.TouchEvent.TOUCH_TAP,this.dianjixiaosunnv,this);
			if(Gerenshuxing.sunnvxinxi[4] == 0){
				Weblianjie.fasongshuju("code:061","{" + '"uid"' + ":"+ '"' + Gerenshuxing.uid + '"' + "}");
				let sunnvhuijiahanhua = new Toudingwenzi();
				Gameguanli.Kongzhitai().jiatingjiemian.addChild(sunnvhuijiahanhua);
				sunnvhuijiahanhua.x = this.img_xiaosunnv.x - sunnvhuijiahanhua.width / 2 + sunnvhuijiahanhua.toudingwenzizu.width + this.img_xiaosunnv.width;
				sunnvhuijiahanhua.y = this.img_xiaosunnv.y - sunnvhuijiahanhua.height / 2 + sunnvhuijiahanhua.toudingwenzizu.height + this.img_xiaosunnv.height / 6;
				sunnvhuijiahanhua.wenzineirong.text = "奶奶，我回家了..."
				egret.Tween.get(sunnvhuijiahanhua).to({alpha:0.5},3000).call(()=>{
					Gameguanli.Kongzhitai().jiatingjiemian.removeChild(sunnvhuijiahanhua);
				})
			}
		}else{
			this.img_xiaosunnv.alpha = 0;
			this.img_xiaosunnv.touchEnabled = false;
		}
	}

	public dianjidaerzi(){
		egret.Tween.get(this.img_daerzi).to({scaleX:1.2,scaleY:1.2},1000).call(()=>{
			egret.Tween.get(this.img_daerzi).to({scaleX:1,scaleY:1},1000);
			Gameguanli.Kongzhitai().cuowutishixinxi("点击成功");
		})
	}

	public dianjiererzi(){
		egret.Tween.get(this.img_ererzi).to({scaleX:1.2,scaleY:1.2},1000).call(()=>{
			egret.Tween.get(this.img_ererzi).to({scaleX:1,scaleY:1},1000);
			Gameguanli.Kongzhitai().cuowutishixinxi("点击成功");
		})
	}

	public dianjixifu(){
		egret.Tween.get(this.img_daerxi).to({scaleX:1.2,scaleY:1.2},1000).call(()=>{
			egret.Tween.get(this.img_daerxi).to({scaleX:1,scaleY:1},1000);
			Gameguanli.Kongzhitai().cuowutishixinxi("点击成功");
		})
	}

	public dianjixiaosunnv(){
		egret.Tween.get(this.img_xiaosunnv).to({scaleX:1.2,scaleY:1.2},1000).call(()=>{
			egret.Tween.get(this.img_xiaosunnv).to({scaleX:1,scaleY:1},1000);
			Gameguanli.Kongzhitai().cuowutishixinxi("点击成功");
		})
	}

	
	
}