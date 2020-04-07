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


	public daerzijiaohu:Daerzijiaohuui;
	public ererzijiaohu:Ererzijiaohuui;
	public xifujiaohu:Xifujiaohuui;
	public sunnvjiaohu:Sunnvjiaohuui;

	public erjitanchuui:any;
	public renwujiemian:any;
	public jinxiuquerenui:any;

	public jiatingchengyuanbiao:any;
	public chengyuanhudongbiao:any;







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
			if(this.img_daerzi.alpha == 1){
				this.img_daerzi.touchEnabled = false;
				let daerzihuijiahanhua = new Toudingwenzi();
				Gameguanli.Kongzhitai().jiatingjiemian.addChild(daerzihuijiahanhua);
				daerzihuijiahanhua.x = this.img_daerzi.x - daerzihuijiahanhua.width / 2 + daerzihuijiahanhua.toudingwenzizu.width + this.img_daerzi.width;
				daerzihuijiahanhua.y = this.img_daerzi.y - daerzihuijiahanhua.height / 2 + daerzihuijiahanhua.toudingwenzizu.height + this.img_daerzi.height / 6;
				daerzihuijiahanhua.wenzineirong.text = "妈，我去饭店了..."
				egret.Tween.get(daerzihuijiahanhua).to({alpha:0.5},3000).call(()=>{
					Gameguanli.Kongzhitai().jiatingjiemian.removeChild(daerzihuijiahanhua);
					egret.Tween.get(this.img_daerzi).to({alpha:0},3000).call(()=>{
					this.img_daerzi.alpha = 0;
					})
				})

			}else{
				this.img_daerzi.alpha = 0;
				this.img_daerzi.touchEnabled = false;
			}
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
			if(this.img_ererzi.alpha == 1){
				this.img_ererzi.touchEnabled = false;
				let ererzihuijiahanhua = new Toudingwenzi();
				Gameguanli.Kongzhitai().jiatingjiemian.addChild(ererzihuijiahanhua);
				ererzihuijiahanhua.x = this.img_ererzi.x - ererzihuijiahanhua.width / 2  + ererzihuijiahanhua.toudingwenzizu.width + this.img_ererzi.width;
				ererzihuijiahanhua.y = this.img_ererzi.y - ererzihuijiahanhua.height / 2 + ererzihuijiahanhua.toudingwenzizu.height + this.img_ererzi.height / 6;
				ererzihuijiahanhua.wenzineirong.text = "亲爱的老妈，我出去工作啦，您别太挂念我，照顾好自己..."
				egret.Tween.get(ererzihuijiahanhua).to({alpha:0.5},3000).call(()=>{
					Gameguanli.Kongzhitai().jiatingjiemian.removeChild(ererzihuijiahanhua);
					egret.Tween.get(this.img_ererzi).to({alpha:0},3000).call(()=>{
					this.img_ererzi.alpha = 0;
					})
				})
			}else{
				this.img_ererzi.alpha = 0;
				this.img_ererzi.touchEnabled = false;
			}
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
			if(this.img_daerxi.alpha == 1){
				this.img_daerxi.touchEnabled = false;
				let xifuhuijiahanhua = new Toudingwenzi();
				Gameguanli.Kongzhitai().jiatingjiemian.addChild(xifuhuijiahanhua);
				xifuhuijiahanhua.img_toudingwenzikuang.skewY = 180
				xifuhuijiahanhua.x = this.img_daerxi.x - xifuhuijiahanhua.width / 2 + xifuhuijiahanhua.toudingwenzizu.width - this.img_daerxi.width * 2.5;
				xifuhuijiahanhua.y = this.img_daerxi.y - xifuhuijiahanhua.height / 2 + xifuhuijiahanhua.toudingwenzizu.height + this.img_daerxi.height / 6;
				xifuhuijiahanhua.wenzineirong.text = "婆婆，我上班去啦..."
				egret.Tween.get(xifuhuijiahanhua).to({alpha:0.5},3000).call(()=>{
					Gameguanli.Kongzhitai().jiatingjiemian.removeChild(xifuhuijiahanhua);
					egret.Tween.get(this.img_daerxi).to({alpha:0},3000).call(()=>{
					this.img_daerxi.alpha = 0;
					})
				})
			}else{
				this.img_daerxi.alpha = 0;
				this.img_daerxi.touchEnabled = false;
			}
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
			if(this.img_xiaosunnv.alpha == 1){
				this.img_xiaosunnv.touchEnabled = false;
				let sunnvhuijiahanhua = new Toudingwenzi();
				Gameguanli.Kongzhitai().jiatingjiemian.addChild(sunnvhuijiahanhua);
				sunnvhuijiahanhua.x = this.img_xiaosunnv.x - sunnvhuijiahanhua.width / 2 + sunnvhuijiahanhua.toudingwenzizu.width + this.img_xiaosunnv.width;
				sunnvhuijiahanhua.y = this.img_xiaosunnv.y - sunnvhuijiahanhua.height / 2 + sunnvhuijiahanhua.toudingwenzizu.height + this.img_xiaosunnv.height / 6;
				sunnvhuijiahanhua.wenzineirong.text = "奶奶，我去上学了..."
				egret.Tween.get(sunnvhuijiahanhua).to({alpha:0.5},3000).call(()=>{
					Gameguanli.Kongzhitai().jiatingjiemian.removeChild(sunnvhuijiahanhua);
					egret.Tween.get(this.img_xiaosunnv).to({alpha:0},3000).call(()=>{
					this.img_xiaosunnv.alpha = 0;
					})
				})
			}else{
				this.img_xiaosunnv.alpha = 0;
				this.img_xiaosunnv.touchEnabled = false;
			}
		}
	}

	public dianjidaerzi(){
		egret.Tween.get(this.img_daerzi).to({scaleX:1.2,scaleY:1.2},1000).call(()=>{
			egret.Tween.get(this.img_daerzi).to({scaleX:1,scaleY:1},1000);
		})
		this.daerzijiaohu = new Daerzijiaohuui();
		Gameguanli.Kongzhitai().jiatingjiemian.addChild(this.daerzijiaohu);
		this.daerzijiaohu.daerziguanbi.touchEnabled = true;
		this.daerzijiaohu.daerziguanbi.addEventListener(egret.TouchEvent.TOUCH_TAP,this.guanbidaerzi,this);
		this.daerzijiaohu.daerzichakan.enabled = true;
		if(Gerenshuxing.daerzijiaotan > 0){
			this.daerzijiaohu.daerzijiaotan.enabled = true;
		}else{
			this.daerzijiaohu.daerzijiaotan.enabled = false;
		}
		this.daerzijiaohu.daerzijinxiu.enabled = true;
		this.daerzijiaohu.daerzizengsong.enabled = true;
		this.daerzijiaohu.daerzichakan.addEventListener(egret.TouchEvent.TOUCH_TAP,this.daerzick,this);
		this.daerzijiaohu.daerzijiaotan.addEventListener(egret.TouchEvent.TOUCH_TAP,this.daerzijt,this);
		this.daerzijiaohu.daerzijinxiu.addEventListener(egret.TouchEvent.TOUCH_TAP,this.daerzigz,this);
		this.daerzijiaohu.daerzizengsong.addEventListener(egret.TouchEvent.TOUCH_TAP,this.daerzizs,this);
		this.jiatingchengyuanbiao = RES.getRes("jiatingchengyuanbiao_json");

	}

	public daerzick(){
		if(this.daerzijiaohu.daerzichakan.enabled == false || this.daerzijiaohu.daerzijinxiu.enabled == false || this.daerzijiaohu.daerzizengsong.enabled == false){
			Gameguanli.Kongzhitai().jiatingjiemian.daerzijiaohu.removeChild(this.erjitanchuui);
		}
		this.erjitanchuui = new Jiatingchengyuanjieshaoui();
		Gameguanli.Kongzhitai().jiatingjiemian.daerzijiaohu.addChild(this.erjitanchuui);
		this.daerzijiaohu.daerzichakan.enabled = false;
		if(Gerenshuxing.daerzijiaotan > 0){
			this.daerzijiaohu.daerzijiaotan.enabled = true;
		}else{
			this.daerzijiaohu.daerzijiaotan.enabled = false;
		}
		this.daerzijiaohu.daerzijinxiu.enabled = true;
		this.daerzijiaohu.daerzizengsong.enabled = true;
		this.erjitanchuui.x = this.daerzijiaohu.daerzibeijing.x + this.daerzijiaohu.daerzibeijing.width;
		this.erjitanchuui.y = this.daerzijiaohu.daerzibeijing.y;
		this.erjitanchuui.biaotiwenzi.text = "介绍";
		this.erjitanchuui.guanxibiaoqian.text = "关系";
		this.erjitanchuui.qinhelibiaoqian.text = "亲和值";
		this.erjitanchuui.gongzuobiaoqian.text = "工作能力";
		this.erjitanchuui.jiesaobiaoqian.text = "说明";
		for(var i = 0 ;i<this.jiatingchengyuanbiao.length;i++){
			if(this.jiatingchengyuanbiao[i].id == "1"){
				this.erjitanchuui.guanxineirong.text = "" + this.jiatingchengyuanbiao[i].chengyuanming;
				this.erjitanchuui.qinghelizhi.text = "" + Gerenshuxing.daerzixinxi[0];
				this.erjitanchuui.gongzuozhi.text = "" + Gerenshuxing.daerzixinxi[1];
				this.erjitanchuui.jiesaoneirong.text = "" + this.jiatingchengyuanbiao[i].shuoming;
				break;
			}
		} 
	}

	public daerzijt(){
		Gerenshuxing.daerzijiaotan -= 1;
		this.renwujiemian = new Npcduihuaui();
		if(this.daerzijiaohu.daerzichakan.enabled == false){
			Gameguanli.Kongzhitai().jiatingjiemian.daerzijiaohu.removeChild(this.erjitanchuui);
		}
		Gameguanli.Kongzhitai().dingbuui.addChild(this.renwujiemian);
		this.renwujiemian.chushihua("1");
		this.daerzijiaohu.daerzichakan.enabled = true;
		if(Gerenshuxing.daerzijiaotan > 0){
			this.daerzijiaohu.daerzijiaotan.enabled = true;
		}else{
			this.daerzijiaohu.daerzijiaotan.enabled = false;
		}
		this.daerzijiaohu.daerzijinxiu.enabled = true;
		this.daerzijiaohu.daerzizengsong.enabled = true;

	}

	public daerzigz(){
		if(this.daerzijiaohu.daerzichakan.enabled == false || this.daerzijiaohu.daerzijinxiu.enabled == false || this.daerzijiaohu.daerzizengsong.enabled == false){
			Gameguanli.Kongzhitai().jiatingjiemian.daerzijiaohu.removeChild(this.erjitanchuui);
		}
		if(Gerenshuxing.daerzixinxi[2] != "0"){
			this.erjitanchuui = new Jiatingjinxiuui();
			Gameguanli.Kongzhitai().jiatingjiemian.daerzijiaohu.addChild(this.erjitanchuui);
			this.erjitanchuui.x = this.daerzijiaohu.daerzibeijing.x + this.daerzijiaohu.daerzibeijing.width;
			this.erjitanchuui.y = this.daerzijiaohu.daerzibeijing.y;
			this.chengyuanhudongbiao = RES.getRes("chengyuanhudongbiao_json");
			this.daerzijiaohu.daerzichakan.enabled = true;
			if(Gerenshuxing.daerzijiaotan > 0){
				this.daerzijiaohu.daerzijiaotan.enabled = true;
			}else{
				this.daerzijiaohu.daerzijiaotan.enabled = false;
			}
			this.daerzijiaohu.daerzijinxiu.enabled = false;
			this.daerzijiaohu.daerzizengsong.enabled = true;
			for(var i = 0;i<this.chengyuanhudongbiao.length;i++){
				if(this.chengyuanhudongbiao[i].id == Gerenshuxing.daerzixinxi[2]){
					this.erjitanchuui.jinxiubiaoti.text = this.chengyuanhudongbiao[i].xingdongming;
					this.erjitanchuui.jinxiutupian.source = this.chengyuanhudongbiao[i].xianshiicon;
				}
			}
			if(Gerenshuxing.daerzixinxi[3] == "0"){
				this.erjitanchuui.shengyushijian0.text = "已完成";
				this.erjitanchuui.quedinganniu.enabled = true;
				this.erjitanchuui.quedinganniu.label = "确定";
				this.erjitanchuui.quedinganniu.addEventListener(egret.TouchEvent.TOUCH_TAP,this.daerzijinxiulinjiang,this);
			}else{
				let dangqianshijian = (new Date()).valueOf();
				let shengyushijian = parseInt(Gerenshuxing.daerzixinxi[3]) - dangqianshijian;
				this.erjitanchuui.shengyushijian0.text = Math.floor((shengyushijian / 60000) % 60) + ":" + Math.floor((shengyushijian  / 1000) % 60) ;
				this.erjitanchuui.quedinganniu.enabled = true;
				this.erjitanchuui.quedinganniu.label = "加速（广告）";
				this.erjitanchuui.quedinganniu.addEventListener(egret.TouchEvent.TOUCH_TAP,this.daerzijinxiusuoduan,this);
				let dingshiqi = new egret.Timer(1000,1);
				dingshiqi.addEventListener(egret.TimerEvent.TIMER,this.panduandaerzijinxiu,this);
				dingshiqi.start();
			}
		}else{
			this.erjitanchuui = new Jiatingchengyuanzengsong();
			Gameguanli.Kongzhitai().jiatingjiemian.daerzijiaohu.addChild(this.erjitanchuui);
			this.erjitanchuui.x = this.daerzijiaohu.daerzibeijing.x + this.daerzijiaohu.daerzibeijing.width;
			this.erjitanchuui.y = this.daerzijiaohu.daerzibeijing.y;
			this.chengyuanhudongbiao = RES.getRes("chengyuanhudongbiao_json");
			this.daerzigzkeng1();
			this.daerzigzkeng2();
			this.daerzigzkeng3();
			this.daerzigzkeng4();
			this.daerzigzkeng5();
		}
		this.daerzijiaohu.daerzichakan.enabled = true;
		if(Gerenshuxing.daerzijiaotan > 0){
			this.daerzijiaohu.daerzijiaotan.enabled = true;
		}else{
			this.daerzijiaohu.daerzijiaotan.enabled = false;
		}
		this.daerzijiaohu.daerzijinxiu.enabled = false;
		this.daerzijiaohu.daerzizengsong.enabled = true;
		
	}

	public daerzijinxiulinjiang(){
		let idshuju = Gerenshuxing.daerzixinxi[2];
		let jianglileixing = 0;
		let jianglishuliang = 0;
		let beishu = 1;
		for(var j = 0;j<this.chengyuanhudongbiao.length;j++){
			if(this.chengyuanhudongbiao[j].id == idshuju){
				jianglileixing = this.chengyuanhudongbiao[j].jiangli;
				jianglishuliang = this.chengyuanhudongbiao[j].jianglishuliang;
				break;
			}
		}
		Gerenshuxing.daerzixinxi[2] = "0";
		Weblianjie.fasongshuju("code:077","{" + '"uid"' + ":"+ '"' + Gerenshuxing.uid + '"' + ","
		+ '"leixing"' +":"+ '"' + jianglileixing + '"' +","
			+ '"shuliang"' +":"+ '"' + jianglishuliang + '"' +","
			+ '"beishu"' +":"+ '"' + beishu + '"' +"}");
		this.daerzigz();
		

	}

	public daerzijinxiusuoduan(){

	}

	public panduandaerzijinxiu(){
		if(this.daerzijiaohu.daerzijinxiu.enabled == false){
			this.daerzigz();
		}
	}

	public daerzigzkeng1(){
		let duihua1jiesuo = false;
		for(var i = 0;i<Gerenshuxing.daerzixuexi.length;i++){
			if(Gerenshuxing.daerzixuexi[i] == "1"){
				duihua1jiesuo = true;
				break;
			}
		}
		if(duihua1jiesuo == true){
			this.erjitanchuui.anniudibu.source = "img_jiaohuanniudibu_png";
			this.erjitanchuui.daojuzu0.enabled = true;
			this.erjitanchuui.daojuzu0.addEventListener(egret.TouchEvent.TOUCH_TAP,this.daerzigzkeng1jiesuo,this);			
		}else{
			this.erjitanchuui.anniudibu.source = "img_jiaohuanniudibu1_png";
			this.erjitanchuui.daojuzu0.enabled = true;
			this.erjitanchuui.daojuzu0.addEventListener(egret.TouchEvent.TOUCH_TAP,this.daerzigzkeng1weijiesuo,this);
		}
		for(var j = 0;j<this.chengyuanhudongbiao.length;j++){
			if(this.chengyuanhudongbiao[j].id == "1"){
				this.erjitanchuui.wenzineirong.text = this.chengyuanhudongbiao[j].xingdongming;
				this.erjitanchuui.daojutubiao.source = this.chengyuanhudongbiao[j].xianshiicon;
				break;
			}
		}
	}

	public daerzigzkeng2(){
		let duihua2jiesuo = false;
		for(var i = 0;i<Gerenshuxing.daerzixuexi.length;i++){
			if(Gerenshuxing.daerzixuexi[i] == "2"){
				duihua2jiesuo = true;
				break;
			}
		}
		if(duihua2jiesuo == true){
			this.erjitanchuui.anniudibu0.source = "img_jiaohuanniudibu_png";
			this.erjitanchuui.daojuzu1.enabled = true;
			this.erjitanchuui.daojuzu1.addEventListener(egret.TouchEvent.TOUCH_TAP,this.daerzigzkeng2jiesuo,this);			
		}else{
			this.erjitanchuui.anniudibu0.source = "img_jiaohuanniudibu1_png";
			this.erjitanchuui.daojuzu1.enabled = true;
			this.erjitanchuui.daojuzu1.addEventListener(egret.TouchEvent.TOUCH_TAP,this.daerzigzkeng2weijiesuo,this);
		}
		for(var j = 0;j<this.chengyuanhudongbiao.length;j++){
			if(this.chengyuanhudongbiao[j].id == "2"){
				this.erjitanchuui.wenzineirong0.text = this.chengyuanhudongbiao[j].xingdongming;
				this.erjitanchuui.daojutubiao0.source = this.chengyuanhudongbiao[j].xianshiicon;
				break;
			}
		}
	}

	public daerzigzkeng3(){
		let duihua3jiesuo = false;
		for(var i = 0;i<Gerenshuxing.daerzixuexi.length;i++){
			if(Gerenshuxing.daerzixuexi[i] == "3"){
				duihua3jiesuo = true;
				break;
			}
		}
		if(duihua3jiesuo == true){
			this.erjitanchuui.anniudibu1.source = "img_jiaohuanniudibu_png";
			this.erjitanchuui.daojuzu2.enabled = true;
			this.erjitanchuui.daojuzu2.addEventListener(egret.TouchEvent.TOUCH_TAP,this.daerzigzkeng3jiesuo,this);			
		}else{
			this.erjitanchuui.anniudibu1.source = "img_jiaohuanniudibu1_png";
			this.erjitanchuui.daojuzu2.enabled = true;
			this.erjitanchuui.daojuzu2.addEventListener(egret.TouchEvent.TOUCH_TAP,this.daerzigzkeng3weijiesuo,this);
		}
		for(var j = 0;j<this.chengyuanhudongbiao.length;j++){
			if(this.chengyuanhudongbiao[j].id == "3"){
				this.erjitanchuui.wenzineirong1.text = this.chengyuanhudongbiao[j].xingdongming;
				this.erjitanchuui.daojutubiao1.source = this.chengyuanhudongbiao[j].xianshiicon;
				break;
			}
		}
	}

	public daerzigzkeng4(){
		let duihua4jiesuo = false;
		for(var i = 0;i<Gerenshuxing.daerzixuexi.length;i++){
			if(Gerenshuxing.daerzixuexi[i] == "4"){
				duihua4jiesuo = true;
				break;
			}
		}
		if(duihua4jiesuo == true){
			this.erjitanchuui.anniudibu2.source = "img_jiaohuanniudibu_png";
			this.erjitanchuui.daojuzu3.enabled = true;
			this.erjitanchuui.daojuzu3.addEventListener(egret.TouchEvent.TOUCH_TAP,this.daerzigzkeng4jiesuo,this);			
		}else{
			this.erjitanchuui.anniudibu2.source = "img_jiaohuanniudibu1_png";
			this.erjitanchuui.daojuzu3.enabled = true;
			this.erjitanchuui.daojuzu3.addEventListener(egret.TouchEvent.TOUCH_TAP,this.daerzigzkeng4weijiesuo,this);
		}
		for(var j = 0;j<this.chengyuanhudongbiao.length;j++){
			if(this.chengyuanhudongbiao[j].id == "4"){
				this.erjitanchuui.wenzineirong2.text = this.chengyuanhudongbiao[j].xingdongming;
				this.erjitanchuui.daojutubiao2.source = this.chengyuanhudongbiao[j].xianshiicon;
				break;
			}
		}
	}

	public daerzigzkeng5(){
		let duihua5jiesuo = false;
		for(var i = 0;i<Gerenshuxing.daerzixuexi.length;i++){
			if(Gerenshuxing.daerzixuexi[i] == "5"){
				duihua5jiesuo = true;
				break;
			}
		}
		if(duihua5jiesuo == true){
			this.erjitanchuui.anniudibu3.source = "img_jiaohuanniudibu_png";
			this.erjitanchuui.daojuzu4.enabled = true;
			this.erjitanchuui.daojuzu4.addEventListener(egret.TouchEvent.TOUCH_TAP,this.daerzigzkeng5jiesuo,this);			
		}else{
			this.erjitanchuui.anniudibu3.source = "img_jiaohuanniudibu1_png";
			this.erjitanchuui.daojuzu4.enabled = true;
			this.erjitanchuui.daojuzu4.addEventListener(egret.TouchEvent.TOUCH_TAP,this.daerzigzkeng5weijiesuo,this);
		}
		for(var j = 0;j<this.chengyuanhudongbiao.length;j++){
			if(this.chengyuanhudongbiao[j].id == "5"){
				this.erjitanchuui.wenzineirong3.text = this.chengyuanhudongbiao[j].xingdongming;
				this.erjitanchuui.daojutubiao3.source = this.chengyuanhudongbiao[j].xianshiicon;
				break;
			}
		}
	}

	public daerzigzkeng1jiesuo(){
		this.jinxiuquerenui = new Tongyongquerenkuang();
		Gameguanli.Kongzhitai().dingbuui.addChild(this.jinxiuquerenui);
		for(var g = 0;g<this.chengyuanhudongbiao.length;g++){
			if(this.chengyuanhudongbiao[g].id == "1"){
				this.jinxiuquerenui.tishiwenzi.text = "您已选择进修：【" + this.chengyuanhudongbiao[g].xingdongming + "】。\n此次进修消耗时间为：【" + this.chengyuanhudongbiao[g].shijian + "】分钟（现实时间）。";
				this.querenjinxiujiangliqueren(this.chengyuanhudongbiao[g].jiangli,this.chengyuanhudongbiao[g].jianglishuliang);
				this.querenjinxiuxiaohaoqueren(this.chengyuanhudongbiao[g].xiaohao,this.chengyuanhudongbiao[g].xiaohaoshuliang);
				break;
			}
		}
		this.jinxiuquerenui.but_queding.enabled = false;
		this.jinxiuquerenui.but_shuangbei.enabled = false;
		this.jinxiuquerenui.but_queding.alpha = 0;
		this.jinxiuquerenui.but_shuangbei.alpha = 0;
		this.jinxiuquerenui.but_queding0.enabled = true;
		this.jinxiuquerenui.but_queding0.alpha = 1;
		this.jinxiuquerenui.but_queding0.addEventListener(egret.TouchEvent.TOUCH_TAP,this.daerzijinxiu1queren,this);
	}

	public daerzigzkeng2jiesuo(){
		this.jinxiuquerenui = new Tongyongquerenkuang();
		Gameguanli.Kongzhitai().dingbuui.addChild(this.jinxiuquerenui);
		for(var g = 0;g<this.chengyuanhudongbiao.length;g++){
			if(this.chengyuanhudongbiao[g].id == "2"){
				this.jinxiuquerenui.tishiwenzi.text = "您已选择进修：【" + this.chengyuanhudongbiao[g].xingdongming + "】。\n此次进修消耗时间为：【" + this.chengyuanhudongbiao[g].shijian + "】分钟（现实时间）。";
				this.querenjinxiujiangliqueren(this.chengyuanhudongbiao[g].jiangli,this.chengyuanhudongbiao[g].jianglishuliang);
				this.querenjinxiuxiaohaoqueren(this.chengyuanhudongbiao[g].xiaohao,this.chengyuanhudongbiao[g].xiaohaoshuliang);
				break;
			}
		}
		this.jinxiuquerenui.but_queding.enabled = false;
		this.jinxiuquerenui.but_shuangbei.enabled = false;
		this.jinxiuquerenui.but_queding.alpha = 0;
		this.jinxiuquerenui.but_shuangbei.alpha = 0;
		this.jinxiuquerenui.but_queding0.enabled = true;
		this.jinxiuquerenui.but_queding0.alpha = 1;
		this.jinxiuquerenui.but_queding0.addEventListener(egret.TouchEvent.TOUCH_TAP,this.daerzijinxiu2queren,this);
	}

	public daerzigzkeng3jiesuo(){
		this.jinxiuquerenui = new Tongyongquerenkuang();
		Gameguanli.Kongzhitai().dingbuui.addChild(this.jinxiuquerenui);
		for(var g = 0;g<this.chengyuanhudongbiao.length;g++){
			if(this.chengyuanhudongbiao[g].id == "3"){
				this.jinxiuquerenui.tishiwenzi.text = "您已选择进修：【" + this.chengyuanhudongbiao[g].xingdongming + "】。\n此次进修消耗时间为：【" + this.chengyuanhudongbiao[g].shijian + "】分钟（现实时间）。";
				this.querenjinxiujiangliqueren(this.chengyuanhudongbiao[g].jiangli,this.chengyuanhudongbiao[g].jianglishuliang);
				this.querenjinxiuxiaohaoqueren(this.chengyuanhudongbiao[g].xiaohao,this.chengyuanhudongbiao[g].xiaohaoshuliang);
				break;
			}
		}
		this.jinxiuquerenui.but_queding.enabled = false;
		this.jinxiuquerenui.but_shuangbei.enabled = false;
		this.jinxiuquerenui.but_queding.alpha = 0;
		this.jinxiuquerenui.but_shuangbei.alpha = 0;
		this.jinxiuquerenui.but_queding0.enabled = true;
		this.jinxiuquerenui.but_queding0.alpha = 1;
		this.jinxiuquerenui.but_queding0.addEventListener(egret.TouchEvent.TOUCH_TAP,this.daerzijinxiu3queren,this);
	}

	public daerzigzkeng4jiesuo(){
		this.jinxiuquerenui = new Tongyongquerenkuang();
		Gameguanli.Kongzhitai().dingbuui.addChild(this.jinxiuquerenui);
		for(var g = 0;g<this.chengyuanhudongbiao.length;g++){
			if(this.chengyuanhudongbiao[g].id == "4"){
				this.jinxiuquerenui.tishiwenzi.text = "您已选择进修：【" + this.chengyuanhudongbiao[g].xingdongming + "】。\n此次进修消耗时间为：【" + this.chengyuanhudongbiao[g].shijian + "】分钟（现实时间）。";
				this.querenjinxiujiangliqueren(this.chengyuanhudongbiao[g].jiangli,this.chengyuanhudongbiao[g].jianglishuliang);
				this.querenjinxiuxiaohaoqueren(this.chengyuanhudongbiao[g].xiaohao,this.chengyuanhudongbiao[g].xiaohaoshuliang);
				break;
			}
		}
		this.jinxiuquerenui.but_queding.enabled = false;
		this.jinxiuquerenui.but_shuangbei.enabled = false;
		this.jinxiuquerenui.but_queding.alpha = 0;
		this.jinxiuquerenui.but_shuangbei.alpha = 0;
		this.jinxiuquerenui.but_queding0.enabled = true;
		this.jinxiuquerenui.but_queding0.alpha = 1;
		this.jinxiuquerenui.but_queding0.addEventListener(egret.TouchEvent.TOUCH_TAP,this.daerzijinxiu4queren,this);
	}

	public daerzigzkeng5jiesuo(){
		this.jinxiuquerenui = new Tongyongquerenkuang();
		Gameguanli.Kongzhitai().dingbuui.addChild(this.jinxiuquerenui);
		for(var g = 0;g<this.chengyuanhudongbiao.length;g++){
			if(this.chengyuanhudongbiao[g].id == "5"){
				this.jinxiuquerenui.tishiwenzi.text = "您已选择进修：【" + this.chengyuanhudongbiao[g].xingdongming + "】。\n此次进修消耗时间为：【" + this.chengyuanhudongbiao[g].shijian + "】分钟（现实时间）。";
				this.querenjinxiujiangliqueren(this.chengyuanhudongbiao[g].jiangli,this.chengyuanhudongbiao[g].jianglishuliang);
				this.querenjinxiuxiaohaoqueren(this.chengyuanhudongbiao[g].xiaohao,this.chengyuanhudongbiao[g].xiaohaoshuliang);
				break;
			}
		}
		this.jinxiuquerenui.but_queding.enabled = false;
		this.jinxiuquerenui.but_shuangbei.enabled = false;
		this.jinxiuquerenui.but_queding.alpha = 0;
		this.jinxiuquerenui.but_shuangbei.alpha = 0;
		this.jinxiuquerenui.but_queding0.enabled = true;
		this.jinxiuquerenui.but_queding0.alpha = 1;
		this.jinxiuquerenui.but_queding0.addEventListener(egret.TouchEvent.TOUCH_TAP,this.daerzijinxiu5queren,this);
	}

	public daerzijinxiu1queren(){
		Gameguanli.Kongzhitai().dingbuui.removeChild(this.jinxiuquerenui);
		this.fasongqurenshuju("1","1","1");
	}

	

	public daerzijinxiu2queren(){
		Gameguanli.Kongzhitai().dingbuui.removeChild(this.jinxiuquerenui);
		this.fasongqurenshuju("2","1","1");
	}

	public daerzijinxiu3queren(){
		Gameguanli.Kongzhitai().dingbuui.removeChild(this.jinxiuquerenui);
		this.fasongqurenshuju("3","1","1");
	}

	public daerzijinxiu4queren(){
		Gameguanli.Kongzhitai().dingbuui.removeChild(this.jinxiuquerenui);
		this.fasongqurenshuju("4","1","1");
	}

	public daerzijinxiu5queren(){
		Gameguanli.Kongzhitai().dingbuui.removeChild(this.jinxiuquerenui);
		this.fasongqurenshuju("5","1","1");
	}


	public daerzigzkeng1weijiesuo(){
		this.jinxiuquerenui = new Tongyongquerenkuang();
		Gameguanli.Kongzhitai().dingbuui.addChild(this.jinxiuquerenui);
		this.jinxiuquerenui.jiangliicon1.source = "";
		this.jinxiuquerenui.jiangli1.text = "";
		this.jinxiuquerenui.jiangliicon2.source = "";
		this.jinxiuquerenui.jiangli2.text = "";
		this.jinxiuquerenui.but_queding.enabled = false;
		this.jinxiuquerenui.but_shuangbei.enabled = false;
		this.jinxiuquerenui.but_queding.alpha = 0;
		this.jinxiuquerenui.but_shuangbei.alpha = 0;
		this.jinxiuquerenui.but_queding0.enabled = true;
		this.jinxiuquerenui.but_queding0.alpha = 1;
		this.jinxiuquerenui.but_queding0.addEventListener(egret.TouchEvent.TOUCH_TAP,this.guanbijinxiuquerenui,this);
		this.jinxiuquerenui.tishiwenzi.text = "上街到访【书店】时，有几率解锁该进修内容。";
	}

	public daerzigzkeng2weijiesuo(){
		this.jinxiuquerenui = new Tongyongquerenkuang();
		Gameguanli.Kongzhitai().dingbuui.addChild(this.jinxiuquerenui);
		this.jinxiuquerenui.jiangliicon1.source = "";
		this.jinxiuquerenui.jiangli1.text = "";
		this.jinxiuquerenui.jiangliicon2.source = "";
		this.jinxiuquerenui.jiangli2.text = "";
		this.jinxiuquerenui.but_queding.enabled = false;
		this.jinxiuquerenui.but_shuangbei.enabled = false;
		this.jinxiuquerenui.but_queding.alpha = 0;
		this.jinxiuquerenui.but_shuangbei.alpha = 0;
		this.jinxiuquerenui.but_queding0.enabled = true;
		this.jinxiuquerenui.but_queding0.alpha = 1;
		this.jinxiuquerenui.but_queding0.addEventListener(egret.TouchEvent.TOUCH_TAP,this.guanbijinxiuquerenui,this);
		this.jinxiuquerenui.tishiwenzi.text = "上街到访【书店】时，有几率解锁该进修内容。";
		
	}

	public daerzigzkeng3weijiesuo(){
		this.jinxiuquerenui = new Tongyongquerenkuang();
		Gameguanli.Kongzhitai().dingbuui.addChild(this.jinxiuquerenui);
		this.jinxiuquerenui.jiangliicon1.source = "";
		this.jinxiuquerenui.jiangli1.text = "";
		this.jinxiuquerenui.jiangliicon2.source = "";
		this.jinxiuquerenui.jiangli2.text = "";
		this.jinxiuquerenui.but_queding.enabled = false;
		this.jinxiuquerenui.but_shuangbei.enabled = false;
		this.jinxiuquerenui.but_queding.alpha = 0;
		this.jinxiuquerenui.but_shuangbei.alpha = 0;
		this.jinxiuquerenui.but_queding0.enabled = true;
		this.jinxiuquerenui.but_queding0.alpha = 1;
		this.jinxiuquerenui.but_queding0.addEventListener(egret.TouchEvent.TOUCH_TAP,this.guanbijinxiuquerenui,this);
		this.jinxiuquerenui.tishiwenzi.text = "上街到访【书店】时，有几率解锁该进修内容。";
		
	}

	public daerzigzkeng4weijiesuo(){
		this.jinxiuquerenui = new Tongyongquerenkuang();
		Gameguanli.Kongzhitai().dingbuui.addChild(this.jinxiuquerenui);
		this.jinxiuquerenui.jiangliicon1.source = "";
		this.jinxiuquerenui.jiangli1.text = "";
		this.jinxiuquerenui.jiangliicon2.source = "";
		this.jinxiuquerenui.jiangli2.text = "";
		this.jinxiuquerenui.but_queding.enabled = false;
		this.jinxiuquerenui.but_shuangbei.enabled = false;
		this.jinxiuquerenui.but_queding.alpha = 0;
		this.jinxiuquerenui.but_shuangbei.alpha = 0;
		this.jinxiuquerenui.but_queding0.enabled = true;
		this.jinxiuquerenui.but_queding0.alpha = 1;
		this.jinxiuquerenui.but_queding0.addEventListener(egret.TouchEvent.TOUCH_TAP,this.guanbijinxiuquerenui,this);
		this.jinxiuquerenui.tishiwenzi.text = "上街到访【书店】时，有几率解锁该进修内容。";
		
	}

	public daerzigzkeng5weijiesuo(){
		this.jinxiuquerenui = new Tongyongquerenkuang();
		Gameguanli.Kongzhitai().dingbuui.addChild(this.jinxiuquerenui);
		this.jinxiuquerenui.jiangliicon1.source = "";
		this.jinxiuquerenui.jiangli1.text = "";
		this.jinxiuquerenui.jiangliicon2.source = "";
		this.jinxiuquerenui.jiangli2.text = "";
		this.jinxiuquerenui.but_queding.enabled = false;
		this.jinxiuquerenui.but_shuangbei.enabled = false;
		this.jinxiuquerenui.but_queding.alpha = 0;
		this.jinxiuquerenui.but_shuangbei.alpha = 0;
		this.jinxiuquerenui.but_queding0.enabled = true;
		this.jinxiuquerenui.but_queding0.alpha = 1;
		this.jinxiuquerenui.but_queding0.addEventListener(egret.TouchEvent.TOUCH_TAP,this.guanbijinxiuquerenui,this);
		this.jinxiuquerenui.tishiwenzi.text = "上街到访【书店】时，有几率解锁该进修内容。";
		
	}



	public daerzizs(){

	}

	public guanbidaerzi(){
		Gameguanli.Kongzhitai().jiatingjiemian.removeChild(this.daerzijiaohu);
	}

	public dianjiererzi(){
		egret.Tween.get(this.img_ererzi).to({scaleX:1.2,scaleY:1.2},1000).call(()=>{
			egret.Tween.get(this.img_ererzi).to({scaleX:1,scaleY:1},1000);
		})
		this.ererzijiaohu = new Ererzijiaohuui();
		Gameguanli.Kongzhitai().jiatingjiemian.addChild(this.ererzijiaohu);
		this.ererzijiaohu.ererziguanbi.touchEnabled = true;
		this.ererzijiaohu.ererziguanbi.addEventListener(egret.TouchEvent.TOUCH_TAP,this.guanbiererzi,this);
		this.ererzijiaohu.ererzichakan.enabled = true;
		if(Gerenshuxing.ererzijiaotan > 0){
			this.ererzijiaohu.ererzijiaotan.enabled = true;
		}else{
			this.ererzijiaohu.ererzijiaotan.enabled = false;
		}
		this.ererzijiaohu.ererzijinxiu.enabled = true;
		this.ererzijiaohu.ererzizengsong.enabled = true;
		this.ererzijiaohu.ererzichakan.addEventListener(egret.TouchEvent.TOUCH_TAP,this.ererzick,this);
		this.ererzijiaohu.ererzijiaotan.addEventListener(egret.TouchEvent.TOUCH_TAP,this.ererzijt,this);
		this.ererzijiaohu.ererzijinxiu.addEventListener(egret.TouchEvent.TOUCH_TAP,this.ererzigz,this);
		this.ererzijiaohu.ererzizengsong.addEventListener(egret.TouchEvent.TOUCH_TAP,this.ererzizs,this);
		this.jiatingchengyuanbiao = RES.getRes("jiatingchengyuanbiao_json");

	}

	public ererzick(){
		if(this.ererzijiaohu.ererzichakan.enabled == false || this.ererzijiaohu.ererzijinxiu.enabled == false || this.ererzijiaohu.ererzizengsong.enabled == false){
			Gameguanli.Kongzhitai().jiatingjiemian.ererzijiaohu.removeChild(this.erjitanchuui);
		}
		this.erjitanchuui = new Jiatingchengyuanjieshaoui();
		Gameguanli.Kongzhitai().jiatingjiemian.ererzijiaohu.addChild(this.erjitanchuui);
		this.ererzijiaohu.ererzichakan.enabled = false;
		if(Gerenshuxing.ererzijiaotan > 0){
			this.ererzijiaohu.ererzijiaotan.enabled = true;
		}else{
			this.ererzijiaohu.ererzijiaotan.enabled = false;
		}
		this.ererzijiaohu.ererzijinxiu.enabled = true;
		this.ererzijiaohu.ererzizengsong.enabled = true;
		this.erjitanchuui.x = this.ererzijiaohu.ererzibeijing.x - this.erjitanchuui.width;
		this.erjitanchuui.y = this.ererzijiaohu.ererzibeijing.y;
		this.erjitanchuui.biaotiwenzi.text = "介绍";
		this.erjitanchuui.guanxibiaoqian.text = "关系";
		this.erjitanchuui.qinhelibiaoqian.text = "亲和值";
		this.erjitanchuui.gongzuobiaoqian.text = "工作能力";
		this.erjitanchuui.jiesaobiaoqian.text = "说明";
		for(var i = 0 ;i<this.jiatingchengyuanbiao.length;i++){
			if(this.jiatingchengyuanbiao[i].id == "2"){
				this.erjitanchuui.guanxineirong.text = "" + this.jiatingchengyuanbiao[i].chengyuanming;
				this.erjitanchuui.qinghelizhi.text = "" + Gerenshuxing.ererzixinxi[0];
				this.erjitanchuui.gongzuozhi.text = "" + Gerenshuxing.ererzixinxi[1];
				this.erjitanchuui.jiesaoneirong.text = "" + this.jiatingchengyuanbiao[i].shuoming;
				break;
			}
		} 
	}

	public ererzijt(){
		Gerenshuxing.ererzijiaotan -= 1;
		this.renwujiemian = new Npcduihuaui();
		if(this.ererzijiaohu.ererzichakan.enabled == false){
			Gameguanli.Kongzhitai().jiatingjiemian.ererzijiaohu.removeChild(this.erjitanchuui);
		}
		Gameguanli.Kongzhitai().dingbuui.addChild(this.renwujiemian);
		this.renwujiemian.chushihua("2");
		this.ererzijiaohu.ererzichakan.enabled = true;
		if(Gerenshuxing.ererzijiaotan > 0){
			this.ererzijiaohu.ererzijiaotan.enabled = true;
		}else{
			this.ererzijiaohu.ererzijiaotan.enabled = false;
		}
		this.ererzijiaohu.ererzijinxiu.enabled = true;
		this.ererzijiaohu.ererzizengsong.enabled = true;

	}

	public ererzigz(){
		if(this.ererzijiaohu.ererzichakan.enabled == false || this.ererzijiaohu.ererzijinxiu.enabled == false || this.ererzijiaohu.ererzizengsong.enabled == false){
			Gameguanli.Kongzhitai().jiatingjiemian.ererzijiaohu.removeChild(this.erjitanchuui);
		}
		if(Gerenshuxing.ererzixinxi[2] != "0"){
			this.erjitanchuui = new Jiatingjinxiuui();
			Gameguanli.Kongzhitai().jiatingjiemian.ererzijiaohu.addChild(this.erjitanchuui);
			this.erjitanchuui.x = this.ererzijiaohu.ererzibeijing.x - this.erjitanchuui.width;
			this.erjitanchuui.y = this.ererzijiaohu.ererzibeijing.y;
			this.chengyuanhudongbiao = RES.getRes("chengyuanhudongbiao_json");
			this.ererzijiaohu.ererzichakan.enabled = true;
			if(Gerenshuxing.ererzijiaotan > 0){
				this.ererzijiaohu.ererzijiaotan.enabled = true;
			}else{
				this.ererzijiaohu.ererzijiaotan.enabled = false;
			}
			this.ererzijiaohu.ererzijinxiu.enabled = false;
			this.ererzijiaohu.ererzizengsong.enabled = true;
			for(var i = 0;i<this.chengyuanhudongbiao.length;i++){
				if(this.chengyuanhudongbiao[i].id == Gerenshuxing.ererzixinxi[2]){
					this.erjitanchuui.jinxiubiaoti.text = this.chengyuanhudongbiao[i].xingdongming;
					this.erjitanchuui.jinxiutupian.source = this.chengyuanhudongbiao[i].xianshiicon;
				}
			}
			if(Gerenshuxing.ererzixinxi[3] == "0"){
				this.erjitanchuui.shengyushijian0.text = "已完成";
				this.erjitanchuui.quedinganniu.enabled = true;
				this.erjitanchuui.quedinganniu.label = "确定";
				this.erjitanchuui.quedinganniu.addEventListener(egret.TouchEvent.TOUCH_TAP,this.ererzijinxiulinjiang,this);
			}else{
				let dangqianshijian = (new Date()).valueOf();
				let shengyushijian = parseInt(Gerenshuxing.ererzixinxi[3]) - dangqianshijian;
				this.erjitanchuui.shengyushijian0.text = Math.floor((shengyushijian / 60000) % 60) + ":" + Math.floor((shengyushijian  / 1000) % 60) ;
				this.erjitanchuui.quedinganniu.enabled = true;
				this.erjitanchuui.quedinganniu.label = "加速（广告）";
				this.erjitanchuui.quedinganniu.addEventListener(egret.TouchEvent.TOUCH_TAP,this.ererzijinxiusuoduan,this);
				let dingshiqi = new egret.Timer(1000,1);
				dingshiqi.addEventListener(egret.TimerEvent.TIMER,this.panduanererzijinxiu,this);
				dingshiqi.start();
			}
		}else{
			this.erjitanchuui = new Jiatingchengyuanzengsong();
			Gameguanli.Kongzhitai().jiatingjiemian.ererzijiaohu.addChild(this.erjitanchuui);
			this.erjitanchuui.x = this.ererzijiaohu.ererzibeijing.x - this.erjitanchuui.width;
			this.erjitanchuui.y = this.ererzijiaohu.ererzibeijing.y;
			this.chengyuanhudongbiao = RES.getRes("chengyuanhudongbiao_json");
			this.ererzigzkeng1();
			this.ererzigzkeng2();
			this.ererzigzkeng3();
			this.ererzigzkeng4();
			this.ererzigzkeng5();
		}
		this.ererzijiaohu.ererzichakan.enabled = true;
		if(Gerenshuxing.ererzijiaotan > 0){
			this.ererzijiaohu.ererzijiaotan.enabled = true;
		}else{
			this.ererzijiaohu.ererzijiaotan.enabled = false;
		}
		this.ererzijiaohu.ererzijinxiu.enabled = false;
		this.ererzijiaohu.ererzizengsong.enabled = true;
		
	}

	public ererzijinxiulinjiang(){
		let idshuju = Gerenshuxing.ererzixinxi[2];
		let jianglileixing = 0;
		let jianglishuliang = 0;
		let beishu = 1;
		for(var j = 0;j<this.chengyuanhudongbiao.length;j++){
			if(this.chengyuanhudongbiao[j].id == idshuju){
				jianglileixing = this.chengyuanhudongbiao[j].jiangli;
				jianglishuliang = this.chengyuanhudongbiao[j].jianglishuliang;
				break;
			}
		}
		Gerenshuxing.ererzixinxi[2] = "0";
		Weblianjie.fasongshuju("code:078","{" + '"uid"' + ":"+ '"' + Gerenshuxing.uid + '"' + ","
		+ '"leixing"' +":"+ '"' + jianglileixing + '"' +","
			+ '"shuliang"' +":"+ '"' + jianglishuliang + '"' +","
			+ '"beishu"' +":"+ '"' + beishu + '"' +"}");
		this.ererzigz();
		

	}

	public ererzijinxiusuoduan(){

	}

	public panduanererzijinxiu(){
		if(this.ererzijiaohu.ererzijinxiu.enabled == false){
			this.ererzigz();
		}
	}

	public ererzigzkeng1(){
		let duihua1jiesuo = false;
		for(var i = 0;i<Gerenshuxing.ererzixuexi.length;i++){
			if(Gerenshuxing.ererzixuexi[i] == "21"){
				duihua1jiesuo = true;
				break;
			}
		}
		if(duihua1jiesuo == true){
			this.erjitanchuui.anniudibu.source = "img_jiaohuanniudibu_png";
			this.erjitanchuui.daojuzu0.enabled = true;
			this.erjitanchuui.daojuzu0.addEventListener(egret.TouchEvent.TOUCH_TAP,this.ererzigzkeng1jiesuo,this);			
		}else{
			this.erjitanchuui.anniudibu.source = "img_jiaohuanniudibu1_png";
			this.erjitanchuui.daojuzu0.enabled = true;
			this.erjitanchuui.daojuzu0.addEventListener(egret.TouchEvent.TOUCH_TAP,this.ererzigzkeng1weijiesuo,this);
		}
		for(var j = 0;j<this.chengyuanhudongbiao.length;j++){
			if(this.chengyuanhudongbiao[j].id == "21"){
				this.erjitanchuui.wenzineirong.text = this.chengyuanhudongbiao[j].xingdongming;
				this.erjitanchuui.daojutubiao.source = this.chengyuanhudongbiao[j].xianshiicon;
				break;
			}
		}
	}

	public ererzigzkeng2(){
		let duihua2jiesuo = false;
		for(var i = 0;i<Gerenshuxing.ererzixuexi.length;i++){
			if(Gerenshuxing.ererzixuexi[i] == "22"){
				duihua2jiesuo = true;
				break;
			}
		}
		if(duihua2jiesuo == true){
			this.erjitanchuui.anniudibu0.source = "img_jiaohuanniudibu_png";
			this.erjitanchuui.daojuzu1.enabled = true;
			this.erjitanchuui.daojuzu1.addEventListener(egret.TouchEvent.TOUCH_TAP,this.ererzigzkeng2jiesuo,this);			
		}else{
			this.erjitanchuui.anniudibu0.source = "img_jiaohuanniudibu1_png";
			this.erjitanchuui.daojuzu1.enabled = true;
			this.erjitanchuui.daojuzu1.addEventListener(egret.TouchEvent.TOUCH_TAP,this.ererzigzkeng2weijiesuo,this);
		}
		for(var j = 0;j<this.chengyuanhudongbiao.length;j++){
			if(this.chengyuanhudongbiao[j].id == "22"){
				this.erjitanchuui.wenzineirong0.text = this.chengyuanhudongbiao[j].xingdongming;
				this.erjitanchuui.daojutubiao0.source = this.chengyuanhudongbiao[j].xianshiicon;
				break;
			}
		}
	}

	public ererzigzkeng3(){
		let duihua3jiesuo = false;
		for(var i = 0;i<Gerenshuxing.ererzixuexi.length;i++){
			if(Gerenshuxing.ererzixuexi[i] == "23"){
				duihua3jiesuo = true;
				break;
			}
		}
		if(duihua3jiesuo == true){
			this.erjitanchuui.anniudibu1.source = "img_jiaohuanniudibu_png";
			this.erjitanchuui.daojuzu2.enabled = true;
			this.erjitanchuui.daojuzu2.addEventListener(egret.TouchEvent.TOUCH_TAP,this.ererzigzkeng3jiesuo,this);			
		}else{
			this.erjitanchuui.anniudibu1.source = "img_jiaohuanniudibu1_png";
			this.erjitanchuui.daojuzu2.enabled = true;
			this.erjitanchuui.daojuzu2.addEventListener(egret.TouchEvent.TOUCH_TAP,this.ererzigzkeng3weijiesuo,this);
		}
		for(var j = 0;j<this.chengyuanhudongbiao.length;j++){
			if(this.chengyuanhudongbiao[j].id == "23"){
				this.erjitanchuui.wenzineirong1.text = this.chengyuanhudongbiao[j].xingdongming;
				this.erjitanchuui.daojutubiao1.source = this.chengyuanhudongbiao[j].xianshiicon;
				break;
			}
		}
	}

	public ererzigzkeng4(){
		let duihua4jiesuo = false;
		for(var i = 0;i<Gerenshuxing.ererzixuexi.length;i++){
			if(Gerenshuxing.ererzixuexi[i] == "24"){
				duihua4jiesuo = true;
				break;
			}
		}
		if(duihua4jiesuo == true){
			this.erjitanchuui.anniudibu2.source = "img_jiaohuanniudibu_png";
			this.erjitanchuui.daojuzu3.enabled = true;
			this.erjitanchuui.daojuzu3.addEventListener(egret.TouchEvent.TOUCH_TAP,this.ererzigzkeng4jiesuo,this);			
		}else{
			this.erjitanchuui.anniudibu2.source = "img_jiaohuanniudibu1_png";
			this.erjitanchuui.daojuzu3.enabled = true;
			this.erjitanchuui.daojuzu3.addEventListener(egret.TouchEvent.TOUCH_TAP,this.ererzigzkeng4weijiesuo,this);
		}
		for(var j = 0;j<this.chengyuanhudongbiao.length;j++){
			if(this.chengyuanhudongbiao[j].id == "24"){
				this.erjitanchuui.wenzineirong2.text = this.chengyuanhudongbiao[j].xingdongming;
				this.erjitanchuui.daojutubiao2.source = this.chengyuanhudongbiao[j].xianshiicon;
				break;
			}
		}
	}

	public ererzigzkeng5(){
		let duihua5jiesuo = false;
		for(var i = 0;i<Gerenshuxing.ererzixuexi.length;i++){
			if(Gerenshuxing.ererzixuexi[i] == "25"){
				duihua5jiesuo = true;
				break;
			}
		}
		if(duihua5jiesuo == true){
			this.erjitanchuui.anniudibu3.source = "img_jiaohuanniudibu_png";
			this.erjitanchuui.daojuzu4.enabled = true;
			this.erjitanchuui.daojuzu4.addEventListener(egret.TouchEvent.TOUCH_TAP,this.ererzigzkeng5jiesuo,this);			
		}else{
			this.erjitanchuui.anniudibu3.source = "img_jiaohuanniudibu1_png";
			this.erjitanchuui.daojuzu4.enabled = true;
			this.erjitanchuui.daojuzu4.addEventListener(egret.TouchEvent.TOUCH_TAP,this.ererzigzkeng5weijiesuo,this);
		}
		for(var j = 0;j<this.chengyuanhudongbiao.length;j++){
			if(this.chengyuanhudongbiao[j].id == "25"){
				this.erjitanchuui.wenzineirong3.text = this.chengyuanhudongbiao[j].xingdongming;
				this.erjitanchuui.daojutubiao3.source = this.chengyuanhudongbiao[j].xianshiicon;
				break;
			}
		}
	}

	public ererzigzkeng1jiesuo(){
		this.jinxiuquerenui = new Tongyongquerenkuang();
		Gameguanli.Kongzhitai().dingbuui.addChild(this.jinxiuquerenui);
		for(var g = 0;g<this.chengyuanhudongbiao.length;g++){
			if(this.chengyuanhudongbiao[g].id == "21"){
				this.jinxiuquerenui.tishiwenzi.text = "您已选择进修：【" + this.chengyuanhudongbiao[g].xingdongming + "】。\n此次进修消耗时间为：【" + this.chengyuanhudongbiao[g].shijian + "】分钟（现实时间）。";
				this.querenjinxiujiangliqueren(this.chengyuanhudongbiao[g].jiangli,this.chengyuanhudongbiao[g].jianglishuliang);
				this.querenjinxiuxiaohaoqueren(this.chengyuanhudongbiao[g].xiaohao,this.chengyuanhudongbiao[g].xiaohaoshuliang);
				break;
			}
		}
		this.jinxiuquerenui.but_queding.enabled = false;
		this.jinxiuquerenui.but_shuangbei.enabled = false;
		this.jinxiuquerenui.but_queding.alpha = 0;
		this.jinxiuquerenui.but_shuangbei.alpha = 0;
		this.jinxiuquerenui.but_queding0.enabled = true;
		this.jinxiuquerenui.but_queding0.alpha = 1;
		this.jinxiuquerenui.but_queding0.addEventListener(egret.TouchEvent.TOUCH_TAP,this.ererzijinxiu1queren,this);
	}

	public ererzigzkeng2jiesuo(){
		this.jinxiuquerenui = new Tongyongquerenkuang();
		Gameguanli.Kongzhitai().dingbuui.addChild(this.jinxiuquerenui);
		for(var g = 0;g<this.chengyuanhudongbiao.length;g++){
			if(this.chengyuanhudongbiao[g].id == "22"){
				this.jinxiuquerenui.tishiwenzi.text = "您已选择进修：【" + this.chengyuanhudongbiao[g].xingdongming + "】。\n此次进修消耗时间为：【" + this.chengyuanhudongbiao[g].shijian + "】分钟（现实时间）。";
				this.querenjinxiujiangliqueren(this.chengyuanhudongbiao[g].jiangli,this.chengyuanhudongbiao[g].jianglishuliang);
				this.querenjinxiuxiaohaoqueren(this.chengyuanhudongbiao[g].xiaohao,this.chengyuanhudongbiao[g].xiaohaoshuliang);
				break;
			}
		}
		this.jinxiuquerenui.but_queding.enabled = false;
		this.jinxiuquerenui.but_shuangbei.enabled = false;
		this.jinxiuquerenui.but_queding.alpha = 0;
		this.jinxiuquerenui.but_shuangbei.alpha = 0;
		this.jinxiuquerenui.but_queding0.enabled = true;
		this.jinxiuquerenui.but_queding0.alpha = 1;
		this.jinxiuquerenui.but_queding0.addEventListener(egret.TouchEvent.TOUCH_TAP,this.ererzijinxiu2queren,this);
	}

	public ererzigzkeng3jiesuo(){
		this.jinxiuquerenui = new Tongyongquerenkuang();
		Gameguanli.Kongzhitai().dingbuui.addChild(this.jinxiuquerenui);
		for(var g = 0;g<this.chengyuanhudongbiao.length;g++){
			if(this.chengyuanhudongbiao[g].id == "23"){
				this.jinxiuquerenui.tishiwenzi.text = "您已选择进修：【" + this.chengyuanhudongbiao[g].xingdongming + "】。\n此次进修消耗时间为：【" + this.chengyuanhudongbiao[g].shijian + "】分钟（现实时间）。";
				this.querenjinxiujiangliqueren(this.chengyuanhudongbiao[g].jiangli,this.chengyuanhudongbiao[g].jianglishuliang);
				this.querenjinxiuxiaohaoqueren(this.chengyuanhudongbiao[g].xiaohao,this.chengyuanhudongbiao[g].xiaohaoshuliang);
				break;
			}
		}
		this.jinxiuquerenui.but_queding.enabled = false;
		this.jinxiuquerenui.but_shuangbei.enabled = false;
		this.jinxiuquerenui.but_queding.alpha = 0;
		this.jinxiuquerenui.but_shuangbei.alpha = 0;
		this.jinxiuquerenui.but_queding0.enabled = true;
		this.jinxiuquerenui.but_queding0.alpha = 1;
		this.jinxiuquerenui.but_queding0.addEventListener(egret.TouchEvent.TOUCH_TAP,this.ererzijinxiu3queren,this);
	}

	public ererzigzkeng4jiesuo(){
		this.jinxiuquerenui = new Tongyongquerenkuang();
		Gameguanli.Kongzhitai().dingbuui.addChild(this.jinxiuquerenui);
		for(var g = 0;g<this.chengyuanhudongbiao.length;g++){
			if(this.chengyuanhudongbiao[g].id == "24"){
				this.jinxiuquerenui.tishiwenzi.text = "您已选择进修：【" + this.chengyuanhudongbiao[g].xingdongming + "】。\n此次进修消耗时间为：【" + this.chengyuanhudongbiao[g].shijian + "】分钟（现实时间）。";
				this.querenjinxiujiangliqueren(this.chengyuanhudongbiao[g].jiangli,this.chengyuanhudongbiao[g].jianglishuliang);
				this.querenjinxiuxiaohaoqueren(this.chengyuanhudongbiao[g].xiaohao,this.chengyuanhudongbiao[g].xiaohaoshuliang);
				break;
			}
		}
		this.jinxiuquerenui.but_queding.enabled = false;
		this.jinxiuquerenui.but_shuangbei.enabled = false;
		this.jinxiuquerenui.but_queding.alpha = 0;
		this.jinxiuquerenui.but_shuangbei.alpha = 0;
		this.jinxiuquerenui.but_queding0.enabled = true;
		this.jinxiuquerenui.but_queding0.alpha = 1;
		this.jinxiuquerenui.but_queding0.addEventListener(egret.TouchEvent.TOUCH_TAP,this.ererzijinxiu4queren,this);
	}

	public ererzigzkeng5jiesuo(){
		this.jinxiuquerenui = new Tongyongquerenkuang();
		Gameguanli.Kongzhitai().dingbuui.addChild(this.jinxiuquerenui);
		for(var g = 0;g<this.chengyuanhudongbiao.length;g++){
			if(this.chengyuanhudongbiao[g].id == "25"){
				this.jinxiuquerenui.tishiwenzi.text = "您已选择进修：【" + this.chengyuanhudongbiao[g].xingdongming + "】。\n此次进修消耗时间为：【" + this.chengyuanhudongbiao[g].shijian + "】分钟（现实时间）。";
				this.querenjinxiujiangliqueren(this.chengyuanhudongbiao[g].jiangli,this.chengyuanhudongbiao[g].jianglishuliang);
				this.querenjinxiuxiaohaoqueren(this.chengyuanhudongbiao[g].xiaohao,this.chengyuanhudongbiao[g].xiaohaoshuliang);
				break;
			}
		}
		this.jinxiuquerenui.but_queding.enabled = false;
		this.jinxiuquerenui.but_shuangbei.enabled = false;
		this.jinxiuquerenui.but_queding.alpha = 0;
		this.jinxiuquerenui.but_shuangbei.alpha = 0;
		this.jinxiuquerenui.but_queding0.enabled = true;
		this.jinxiuquerenui.but_queding0.alpha = 1;
		this.jinxiuquerenui.but_queding0.addEventListener(egret.TouchEvent.TOUCH_TAP,this.ererzijinxiu5queren,this);
	}

	public ererzijinxiu1queren(){
		Gameguanli.Kongzhitai().dingbuui.removeChild(this.jinxiuquerenui);
		this.fasongqurenshuju("21","2","1");
	}

	

	public ererzijinxiu2queren(){
		Gameguanli.Kongzhitai().dingbuui.removeChild(this.jinxiuquerenui);
		this.fasongqurenshuju("22","2","1");
	}

	public ererzijinxiu3queren(){
		Gameguanli.Kongzhitai().dingbuui.removeChild(this.jinxiuquerenui);
		this.fasongqurenshuju("23","2","1");
	}

	public ererzijinxiu4queren(){
		Gameguanli.Kongzhitai().dingbuui.removeChild(this.jinxiuquerenui);
		this.fasongqurenshuju("24","2","1");
	}

	public ererzijinxiu5queren(){
		Gameguanli.Kongzhitai().dingbuui.removeChild(this.jinxiuquerenui);
		this.fasongqurenshuju("25","2","1");
	}


	public ererzigzkeng1weijiesuo(){
		this.jinxiuquerenui = new Tongyongquerenkuang();
		Gameguanli.Kongzhitai().dingbuui.addChild(this.jinxiuquerenui);
		this.jinxiuquerenui.jiangliicon1.source = "";
		this.jinxiuquerenui.jiangli1.text = "";
		this.jinxiuquerenui.jiangliicon2.source = "";
		this.jinxiuquerenui.jiangli2.text = "";
		this.jinxiuquerenui.but_queding.enabled = false;
		this.jinxiuquerenui.but_shuangbei.enabled = false;
		this.jinxiuquerenui.but_queding.alpha = 0;
		this.jinxiuquerenui.but_shuangbei.alpha = 0;
		this.jinxiuquerenui.but_queding0.enabled = true;
		this.jinxiuquerenui.but_queding0.alpha = 1;
		this.jinxiuquerenui.but_queding0.addEventListener(egret.TouchEvent.TOUCH_TAP,this.guanbijinxiuquerenui,this);
		this.jinxiuquerenui.tishiwenzi.text = "上街到访【书店】时，有几率解锁该进修内容。";
	}

	public ererzigzkeng2weijiesuo(){
		this.jinxiuquerenui = new Tongyongquerenkuang();
		Gameguanli.Kongzhitai().dingbuui.addChild(this.jinxiuquerenui);
		this.jinxiuquerenui.jiangliicon1.source = "";
		this.jinxiuquerenui.jiangli1.text = "";
		this.jinxiuquerenui.jiangliicon2.source = "";
		this.jinxiuquerenui.jiangli2.text = "";
		this.jinxiuquerenui.but_queding.enabled = false;
		this.jinxiuquerenui.but_shuangbei.enabled = false;
		this.jinxiuquerenui.but_queding.alpha = 0;
		this.jinxiuquerenui.but_shuangbei.alpha = 0;
		this.jinxiuquerenui.but_queding0.enabled = true;
		this.jinxiuquerenui.but_queding0.alpha = 1;
		this.jinxiuquerenui.but_queding0.addEventListener(egret.TouchEvent.TOUCH_TAP,this.guanbijinxiuquerenui,this);
		this.jinxiuquerenui.tishiwenzi.text = "上街到访【书店】时，有几率解锁该进修内容。";
		
	}

	public ererzigzkeng3weijiesuo(){
		this.jinxiuquerenui = new Tongyongquerenkuang();
		Gameguanli.Kongzhitai().dingbuui.addChild(this.jinxiuquerenui);
		this.jinxiuquerenui.jiangliicon1.source = "";
		this.jinxiuquerenui.jiangli1.text = "";
		this.jinxiuquerenui.jiangliicon2.source = "";
		this.jinxiuquerenui.jiangli2.text = "";
		this.jinxiuquerenui.but_queding.enabled = false;
		this.jinxiuquerenui.but_shuangbei.enabled = false;
		this.jinxiuquerenui.but_queding.alpha = 0;
		this.jinxiuquerenui.but_shuangbei.alpha = 0;
		this.jinxiuquerenui.but_queding0.enabled = true;
		this.jinxiuquerenui.but_queding0.alpha = 1;
		this.jinxiuquerenui.but_queding0.addEventListener(egret.TouchEvent.TOUCH_TAP,this.guanbijinxiuquerenui,this);
		this.jinxiuquerenui.tishiwenzi.text = "上街到访【书店】时，有几率解锁该进修内容。";
		
	}

	public ererzigzkeng4weijiesuo(){
		this.jinxiuquerenui = new Tongyongquerenkuang();
		Gameguanli.Kongzhitai().dingbuui.addChild(this.jinxiuquerenui);
		this.jinxiuquerenui.jiangliicon1.source = "";
		this.jinxiuquerenui.jiangli1.text = "";
		this.jinxiuquerenui.jiangliicon2.source = "";
		this.jinxiuquerenui.jiangli2.text = "";
		this.jinxiuquerenui.but_queding.enabled = false;
		this.jinxiuquerenui.but_shuangbei.enabled = false;
		this.jinxiuquerenui.but_queding.alpha = 0;
		this.jinxiuquerenui.but_shuangbei.alpha = 0;
		this.jinxiuquerenui.but_queding0.enabled = true;
		this.jinxiuquerenui.but_queding0.alpha = 1;
		this.jinxiuquerenui.but_queding0.addEventListener(egret.TouchEvent.TOUCH_TAP,this.guanbijinxiuquerenui,this);
		this.jinxiuquerenui.tishiwenzi.text = "上街到访【书店】时，有几率解锁该进修内容。";
		
	}

	public ererzigzkeng5weijiesuo(){
		this.jinxiuquerenui = new Tongyongquerenkuang();
		Gameguanli.Kongzhitai().dingbuui.addChild(this.jinxiuquerenui);
		this.jinxiuquerenui.jiangliicon1.source = "";
		this.jinxiuquerenui.jiangli1.text = "";
		this.jinxiuquerenui.jiangliicon2.source = "";
		this.jinxiuquerenui.jiangli2.text = "";
		this.jinxiuquerenui.but_queding.enabled = false;
		this.jinxiuquerenui.but_shuangbei.enabled = false;
		this.jinxiuquerenui.but_queding.alpha = 0;
		this.jinxiuquerenui.but_shuangbei.alpha = 0;
		this.jinxiuquerenui.but_queding0.enabled = true;
		this.jinxiuquerenui.but_queding0.alpha = 1;
		this.jinxiuquerenui.but_queding0.addEventListener(egret.TouchEvent.TOUCH_TAP,this.guanbijinxiuquerenui,this);
		this.jinxiuquerenui.tishiwenzi.text = "上街到访【书店】时，有几率解锁该进修内容。";
		
	}

	public ererzizs(){

	}

	public guanbiererzi(){
		Gameguanli.Kongzhitai().jiatingjiemian.removeChild(this.ererzijiaohu);
	}

	public dianjixifu(){
		egret.Tween.get(this.img_daerxi).to({scaleX:1.2,scaleY:1.2},1000).call(()=>{
			egret.Tween.get(this.img_daerxi).to({scaleX:1,scaleY:1},1000);
		})
		this.xifujiaohu = new Xifujiaohuui();
		Gameguanli.Kongzhitai().jiatingjiemian.addChild(this.xifujiaohu);
		this.xifujiaohu.xifuguanbi.touchEnabled = true;
		this.xifujiaohu.xifuguanbi.addEventListener(egret.TouchEvent.TOUCH_TAP,this.guanbixifu,this);
		this.xifujiaohu.xifuchakan.enabled = true;
		if(Gerenshuxing.xifujiaotan > 0){
			this.xifujiaohu.xifujiaotan.enabled = true;
		}else{
			this.xifujiaohu.xifujiaotan.enabled = false;
		}
		this.xifujiaohu.xifujinxiu.enabled = true;
		this.xifujiaohu.xifuzengsong.enabled = true;
		this.xifujiaohu.xifuchakan.addEventListener(egret.TouchEvent.TOUCH_TAP,this.xifuck,this);
		this.xifujiaohu.xifujiaotan.addEventListener(egret.TouchEvent.TOUCH_TAP,this.xifujt,this);
		this.xifujiaohu.xifujinxiu.addEventListener(egret.TouchEvent.TOUCH_TAP,this.xifugz,this);
		this.xifujiaohu.xifuzengsong.addEventListener(egret.TouchEvent.TOUCH_TAP,this.xifuzs,this);
		this.jiatingchengyuanbiao = RES.getRes("jiatingchengyuanbiao_json");

	}

	public xifuck(){
		if(this.xifujiaohu.xifuchakan.enabled == false || this.xifujiaohu.xifujinxiu.enabled == false || this.xifujiaohu.xifuzengsong.enabled == false){
			Gameguanli.Kongzhitai().jiatingjiemian.xifujiaohu.removeChild(this.erjitanchuui);
		}
		this.erjitanchuui = new Jiatingchengyuanjieshaoui();
		Gameguanli.Kongzhitai().jiatingjiemian.xifujiaohu.addChild(this.erjitanchuui);
		this.xifujiaohu.xifuchakan.enabled = false;
		if(Gerenshuxing.xifujiaotan > 0){
			this.xifujiaohu.xifujiaotan.enabled = true;
		}else{
			this.xifujiaohu.xifujiaotan.enabled = false;
		}
		this.xifujiaohu.xifujinxiu.enabled = true;
		this.xifujiaohu.xifuzengsong.enabled = true;
		this.erjitanchuui.x = this.xifujiaohu.xifubeijing.x - this.erjitanchuui.width - this.xifujiaohu.xifubeijing.width;
		this.erjitanchuui.y = this.xifujiaohu.xifubeijing.y - this.erjitanchuui.height;
		this.erjitanchuui.biaotiwenzi.text = "介绍";
		this.erjitanchuui.guanxibiaoqian.text = "关系";
		this.erjitanchuui.qinhelibiaoqian.text = "亲和值";
		this.erjitanchuui.gongzuobiaoqian.text = "家务能力";
		this.erjitanchuui.jiesaobiaoqian.text = "说明";
		for(var i = 0 ;i<this.jiatingchengyuanbiao.length;i++){
			if(this.jiatingchengyuanbiao[i].id == "3"){
				this.erjitanchuui.guanxineirong.text = "" + this.jiatingchengyuanbiao[i].chengyuanming;
				this.erjitanchuui.qinghelizhi.text = "" + Gerenshuxing.xifuxinxi[0];
				this.erjitanchuui.gongzuozhi.text = "" + Gerenshuxing.xifuxinxi[1];
				this.erjitanchuui.jiesaoneirong.text = "" + this.jiatingchengyuanbiao[i].shuoming;
				break;
			}
		} 
	}

	public xifujt(){
		Gerenshuxing.xifujiaotan -= 1;
		this.renwujiemian = new Npcduihuaui();
		if(this.xifujiaohu.xifuchakan.enabled == false){
			Gameguanli.Kongzhitai().jiatingjiemian.xifujiaohu.removeChild(this.erjitanchuui);
		}
		Gameguanli.Kongzhitai().dingbuui.addChild(this.renwujiemian);
		this.renwujiemian.chushihua("3");
		this.xifujiaohu.xifuchakan.enabled = true;
		if(Gerenshuxing.xifujiaotan > 0){
			this.xifujiaohu.xifujiaotan.enabled = true;
		}else{
			this.xifujiaohu.xifujiaotan.enabled = false;
		}
		this.xifujiaohu.xifujinxiu.enabled = true;
		this.xifujiaohu.xifuzengsong.enabled = true;

	}

	public xifugz(){
		if(this.xifujiaohu.xifuchakan.enabled == false || this.xifujiaohu.xifujinxiu.enabled == false || this.xifujiaohu.xifuzengsong.enabled == false){
			Gameguanli.Kongzhitai().jiatingjiemian.xifujiaohu.removeChild(this.erjitanchuui);
		}
		if(Gerenshuxing.xifuxinxi[2] != "0"){
			this.erjitanchuui = new Jiatingjinxiuui();
			Gameguanli.Kongzhitai().jiatingjiemian.xifujiaohu.addChild(this.erjitanchuui);
			this.erjitanchuui.x = this.xifujiaohu.xifubeijing.x - this.erjitanchuui.width - this.xifujiaohu.xifubeijing.width;
			this.erjitanchuui.y = this.xifujiaohu.xifubeijing.y - this.erjitanchuui.height;
			this.chengyuanhudongbiao = RES.getRes("chengyuanhudongbiao_json");
			this.xifujiaohu.xifuchakan.enabled = true;
			if(Gerenshuxing.xifujiaotan > 0){
				this.xifujiaohu.xifujiaotan.enabled = true;
			}else{
				this.xifujiaohu.xifujiaotan.enabled = false;
			}
			this.xifujiaohu.xifujinxiu.enabled = false;
			this.xifujiaohu.xifuzengsong.enabled = true;
			for(var i = 0;i<this.chengyuanhudongbiao.length;i++){
				if(this.chengyuanhudongbiao[i].id == Gerenshuxing.xifuxinxi[2]){
					this.erjitanchuui.jinxiubiaoti.text = this.chengyuanhudongbiao[i].xingdongming;
					this.erjitanchuui.jinxiutupian.source = this.chengyuanhudongbiao[i].xianshiicon;
				}
			}
			if(Gerenshuxing.xifuxinxi[3] == "0"){
				this.erjitanchuui.shengyushijian0.text = "已完成";
				this.erjitanchuui.quedinganniu.enabled = true;
				this.erjitanchuui.quedinganniu.label = "确定";
				this.erjitanchuui.quedinganniu.addEventListener(egret.TouchEvent.TOUCH_TAP,this.xifujinxiulinjiang,this);
			}else{
				let dangqianshijian = (new Date()).valueOf();
				let shengyushijian = parseInt(Gerenshuxing.xifuxinxi[3]) - dangqianshijian;
				this.erjitanchuui.shengyushijian0.text = Math.floor((shengyushijian / 60000) % 60) + ":" + Math.floor((shengyushijian  / 1000) % 60) ;
				this.erjitanchuui.quedinganniu.enabled = true;
				this.erjitanchuui.quedinganniu.label = "加速（广告）";
				this.erjitanchuui.quedinganniu.addEventListener(egret.TouchEvent.TOUCH_TAP,this.xifujinxiusuoduan,this);
				let dingshiqi = new egret.Timer(1000,1);
				dingshiqi.addEventListener(egret.TimerEvent.TIMER,this.panduanxifujinxiu,this);
				dingshiqi.start();
			}
		}else{
			this.erjitanchuui = new Jiatingchengyuanzengsong();
			Gameguanli.Kongzhitai().jiatingjiemian.xifujiaohu.addChild(this.erjitanchuui);
			this.erjitanchuui.x = this.xifujiaohu.xifubeijing.x - this.erjitanchuui.width - this.xifujiaohu.xifubeijing.width;
			this.erjitanchuui.y = this.xifujiaohu.xifubeijing.y - this.erjitanchuui.height;
			this.chengyuanhudongbiao = RES.getRes("chengyuanhudongbiao_json");
			this.xifugzkeng1();
			this.xifugzkeng2();
			this.xifugzkeng3();
			this.xifugzkeng4();
			this.xifugzkeng5();
		}
		this.xifujiaohu.xifuchakan.enabled = true;
		if(Gerenshuxing.xifujiaotan > 0){
			this.xifujiaohu.xifujiaotan.enabled = true;
		}else{
			this.xifujiaohu.xifujiaotan.enabled = false;
		}
		this.xifujiaohu.xifujinxiu.enabled = false;
		this.xifujiaohu.xifuzengsong.enabled = true;
		
	}

	public xifujinxiulinjiang(){
		let idshuju = Gerenshuxing.xifuxinxi[2];
		let jianglileixing = 0;
		let jianglishuliang = 0;
		let beishu = 1;
		for(var j = 0;j<this.chengyuanhudongbiao.length;j++){
			if(this.chengyuanhudongbiao[j].id == idshuju){
				jianglileixing = this.chengyuanhudongbiao[j].jiangli;
				jianglishuliang = this.chengyuanhudongbiao[j].jianglishuliang;
				break;
			}
		}
		Gerenshuxing.xifuxinxi[2] = "0";
		Weblianjie.fasongshuju("code:079","{" + '"uid"' + ":"+ '"' + Gerenshuxing.uid + '"' + ","
		+ '"leixing"' +":"+ '"' + jianglileixing + '"' +","
			+ '"shuliang"' +":"+ '"' + jianglishuliang + '"' +","
			+ '"beishu"' +":"+ '"' + beishu + '"' +"}");
		this.xifugz();
		

	}

	public xifujinxiusuoduan(){

	}

	public panduanxifujinxiu(){
		if(this.xifujiaohu.xifujinxiu.enabled == false){
			this.xifugz();
		}
	}

	public xifugzkeng1(){
		let duihua1jiesuo = false;
		for(var i = 0;i<Gerenshuxing.xifuxuexi.length;i++){
			if(Gerenshuxing.xifuxuexi[i] == "11"){
				duihua1jiesuo = true;
				break;
			}
		}
		if(duihua1jiesuo == true){
			this.erjitanchuui.anniudibu.source = "img_jiaohuanniudibu_png";
			this.erjitanchuui.daojuzu0.enabled = true;
			this.erjitanchuui.daojuzu0.addEventListener(egret.TouchEvent.TOUCH_TAP,this.xifugzkeng1jiesuo,this);			
		}else{
			this.erjitanchuui.anniudibu.source = "img_jiaohuanniudibu1_png";
			this.erjitanchuui.daojuzu0.enabled = true;
			this.erjitanchuui.daojuzu0.addEventListener(egret.TouchEvent.TOUCH_TAP,this.xifugzkeng1weijiesuo,this);
		}
		for(var j = 0;j<this.chengyuanhudongbiao.length;j++){
			if(this.chengyuanhudongbiao[j].id == "11"){
				this.erjitanchuui.wenzineirong.text = this.chengyuanhudongbiao[j].xingdongming;
				this.erjitanchuui.daojutubiao.source = this.chengyuanhudongbiao[j].xianshiicon;
				break;
			}
		}
	}

	public xifugzkeng2(){
		let duihua2jiesuo = false;
		for(var i = 0;i<Gerenshuxing.xifuxuexi.length;i++){
			if(Gerenshuxing.xifuxuexi[i] == "12"){
				duihua2jiesuo = true;
				break;
			}
		}
		if(duihua2jiesuo == true){
			this.erjitanchuui.anniudibu0.source = "img_jiaohuanniudibu_png";
			this.erjitanchuui.daojuzu1.enabled = true;
			this.erjitanchuui.daojuzu1.addEventListener(egret.TouchEvent.TOUCH_TAP,this.xifugzkeng2jiesuo,this);			
		}else{
			this.erjitanchuui.anniudibu0.source = "img_jiaohuanniudibu1_png";
			this.erjitanchuui.daojuzu1.enabled = true;
			this.erjitanchuui.daojuzu1.addEventListener(egret.TouchEvent.TOUCH_TAP,this.xifugzkeng2weijiesuo,this);
		}
		for(var j = 0;j<this.chengyuanhudongbiao.length;j++){
			if(this.chengyuanhudongbiao[j].id == "12"){
				this.erjitanchuui.wenzineirong0.text = this.chengyuanhudongbiao[j].xingdongming;
				this.erjitanchuui.daojutubiao0.source = this.chengyuanhudongbiao[j].xianshiicon;
				break;
			}
		}
	}

	public xifugzkeng3(){
		let duihua3jiesuo = false;
		for(var i = 0;i<Gerenshuxing.xifuxuexi.length;i++){
			if(Gerenshuxing.xifuxuexi[i] == "13"){
				duihua3jiesuo = true;
				break;
			}
		}
		if(duihua3jiesuo == true){
			this.erjitanchuui.anniudibu1.source = "img_jiaohuanniudibu_png";
			this.erjitanchuui.daojuzu2.enabled = true;
			this.erjitanchuui.daojuzu2.addEventListener(egret.TouchEvent.TOUCH_TAP,this.xifugzkeng3jiesuo,this);			
		}else{
			this.erjitanchuui.anniudibu1.source = "img_jiaohuanniudibu1_png";
			this.erjitanchuui.daojuzu2.enabled = true;
			this.erjitanchuui.daojuzu2.addEventListener(egret.TouchEvent.TOUCH_TAP,this.xifugzkeng3weijiesuo,this);
		}
		for(var j = 0;j<this.chengyuanhudongbiao.length;j++){
			if(this.chengyuanhudongbiao[j].id == "13"){
				this.erjitanchuui.wenzineirong1.text = this.chengyuanhudongbiao[j].xingdongming;
				this.erjitanchuui.daojutubiao1.source = this.chengyuanhudongbiao[j].xianshiicon;
				break;
			}
		}
	}

	public xifugzkeng4(){
		let duihua4jiesuo = false;
		for(var i = 0;i<Gerenshuxing.xifuxuexi.length;i++){
			if(Gerenshuxing.xifuxuexi[i] == "14"){
				duihua4jiesuo = true;
				break;
			}
		}
		if(duihua4jiesuo == true){
			this.erjitanchuui.anniudibu2.source = "img_jiaohuanniudibu_png";
			this.erjitanchuui.daojuzu3.enabled = true;
			this.erjitanchuui.daojuzu3.addEventListener(egret.TouchEvent.TOUCH_TAP,this.xifugzkeng4jiesuo,this);			
		}else{
			this.erjitanchuui.anniudibu2.source = "img_jiaohuanniudibu1_png";
			this.erjitanchuui.daojuzu3.enabled = true;
			this.erjitanchuui.daojuzu3.addEventListener(egret.TouchEvent.TOUCH_TAP,this.xifugzkeng4weijiesuo,this);
		}
		for(var j = 0;j<this.chengyuanhudongbiao.length;j++){
			if(this.chengyuanhudongbiao[j].id == "14"){
				this.erjitanchuui.wenzineirong2.text = this.chengyuanhudongbiao[j].xingdongming;
				this.erjitanchuui.daojutubiao2.source = this.chengyuanhudongbiao[j].xianshiicon;
				break;
			}
		}
	}

	public xifugzkeng5(){
		let duihua5jiesuo = false;
		for(var i = 0;i<Gerenshuxing.xifuxuexi.length;i++){
			if(Gerenshuxing.xifuxuexi[i] == "15"){
				duihua5jiesuo = true;
				break;
			}
		}
		if(duihua5jiesuo == true){
			this.erjitanchuui.anniudibu3.source = "img_jiaohuanniudibu_png";
			this.erjitanchuui.daojuzu4.enabled = true;
			this.erjitanchuui.daojuzu4.addEventListener(egret.TouchEvent.TOUCH_TAP,this.xifugzkeng5jiesuo,this);			
		}else{
			this.erjitanchuui.anniudibu3.source = "img_jiaohuanniudibu1_png";
			this.erjitanchuui.daojuzu4.enabled = true;
			this.erjitanchuui.daojuzu4.addEventListener(egret.TouchEvent.TOUCH_TAP,this.xifugzkeng5weijiesuo,this);
		}
		for(var j = 0;j<this.chengyuanhudongbiao.length;j++){
			if(this.chengyuanhudongbiao[j].id == "15"){
				this.erjitanchuui.wenzineirong3.text = this.chengyuanhudongbiao[j].xingdongming;
				this.erjitanchuui.daojutubiao3.source = this.chengyuanhudongbiao[j].xianshiicon;
				break;
			}
		}
	}

	public xifugzkeng1jiesuo(){
		this.jinxiuquerenui = new Tongyongquerenkuang();
		Gameguanli.Kongzhitai().dingbuui.addChild(this.jinxiuquerenui);
		for(var g = 0;g<this.chengyuanhudongbiao.length;g++){
			if(this.chengyuanhudongbiao[g].id == "11"){
				this.jinxiuquerenui.tishiwenzi.text = "您已选择进修：【" + this.chengyuanhudongbiao[g].xingdongming + "】。\n此次进修消耗时间为：【" + this.chengyuanhudongbiao[g].shijian + "】分钟（现实时间）。";
				this.querenjinxiujiangliqueren(this.chengyuanhudongbiao[g].jiangli,this.chengyuanhudongbiao[g].jianglishuliang);
				this.querenjinxiuxiaohaoqueren(this.chengyuanhudongbiao[g].xiaohao,this.chengyuanhudongbiao[g].xiaohaoshuliang);
				break;
			}
		}
		this.jinxiuquerenui.but_queding.enabled = false;
		this.jinxiuquerenui.but_shuangbei.enabled = false;
		this.jinxiuquerenui.but_queding.alpha = 0;
		this.jinxiuquerenui.but_shuangbei.alpha = 0;
		this.jinxiuquerenui.but_queding0.enabled = true;
		this.jinxiuquerenui.but_queding0.alpha = 1;
		this.jinxiuquerenui.but_queding0.addEventListener(egret.TouchEvent.TOUCH_TAP,this.xifujinxiu1queren,this);
	}

	public xifugzkeng2jiesuo(){
		this.jinxiuquerenui = new Tongyongquerenkuang();
		Gameguanli.Kongzhitai().dingbuui.addChild(this.jinxiuquerenui);
		for(var g = 0;g<this.chengyuanhudongbiao.length;g++){
			if(this.chengyuanhudongbiao[g].id == "12"){
				this.jinxiuquerenui.tishiwenzi.text = "您已选择进修：【" + this.chengyuanhudongbiao[g].xingdongming + "】。\n此次进修消耗时间为：【" + this.chengyuanhudongbiao[g].shijian + "】分钟（现实时间）。";
				this.querenjinxiujiangliqueren(this.chengyuanhudongbiao[g].jiangli,this.chengyuanhudongbiao[g].jianglishuliang);
				this.querenjinxiuxiaohaoqueren(this.chengyuanhudongbiao[g].xiaohao,this.chengyuanhudongbiao[g].xiaohaoshuliang);
				break;
			}
		}
		this.jinxiuquerenui.but_queding.enabled = false;
		this.jinxiuquerenui.but_shuangbei.enabled = false;
		this.jinxiuquerenui.but_queding.alpha = 0;
		this.jinxiuquerenui.but_shuangbei.alpha = 0;
		this.jinxiuquerenui.but_queding0.enabled = true;
		this.jinxiuquerenui.but_queding0.alpha = 1;
		this.jinxiuquerenui.but_queding0.addEventListener(egret.TouchEvent.TOUCH_TAP,this.xifujinxiu2queren,this);
	}

	public xifugzkeng3jiesuo(){
		this.jinxiuquerenui = new Tongyongquerenkuang();
		Gameguanli.Kongzhitai().dingbuui.addChild(this.jinxiuquerenui);
		for(var g = 0;g<this.chengyuanhudongbiao.length;g++){
			if(this.chengyuanhudongbiao[g].id == "13"){
				this.jinxiuquerenui.tishiwenzi.text = "您已选择进修：【" + this.chengyuanhudongbiao[g].xingdongming + "】。\n此次进修消耗时间为：【" + this.chengyuanhudongbiao[g].shijian + "】分钟（现实时间）。";
				this.querenjinxiujiangliqueren(this.chengyuanhudongbiao[g].jiangli,this.chengyuanhudongbiao[g].jianglishuliang);
				this.querenjinxiuxiaohaoqueren(this.chengyuanhudongbiao[g].xiaohao,this.chengyuanhudongbiao[g].xiaohaoshuliang);
				break;
			}
		}
		this.jinxiuquerenui.but_queding.enabled = false;
		this.jinxiuquerenui.but_shuangbei.enabled = false;
		this.jinxiuquerenui.but_queding.alpha = 0;
		this.jinxiuquerenui.but_shuangbei.alpha = 0;
		this.jinxiuquerenui.but_queding0.enabled = true;
		this.jinxiuquerenui.but_queding0.alpha = 1;
		this.jinxiuquerenui.but_queding0.addEventListener(egret.TouchEvent.TOUCH_TAP,this.xifujinxiu3queren,this);
	}

	public xifugzkeng4jiesuo(){
		this.jinxiuquerenui = new Tongyongquerenkuang();
		Gameguanli.Kongzhitai().dingbuui.addChild(this.jinxiuquerenui);
		for(var g = 0;g<this.chengyuanhudongbiao.length;g++){
			if(this.chengyuanhudongbiao[g].id == "14"){
				this.jinxiuquerenui.tishiwenzi.text = "您已选择进修：【" + this.chengyuanhudongbiao[g].xingdongming + "】。\n此次进修消耗时间为：【" + this.chengyuanhudongbiao[g].shijian + "】分钟（现实时间）。";
				this.querenjinxiujiangliqueren(this.chengyuanhudongbiao[g].jiangli,this.chengyuanhudongbiao[g].jianglishuliang);
				this.querenjinxiuxiaohaoqueren(this.chengyuanhudongbiao[g].xiaohao,this.chengyuanhudongbiao[g].xiaohaoshuliang);
				break;
			}
		}
		this.jinxiuquerenui.but_queding.enabled = false;
		this.jinxiuquerenui.but_shuangbei.enabled = false;
		this.jinxiuquerenui.but_queding.alpha = 0;
		this.jinxiuquerenui.but_shuangbei.alpha = 0;
		this.jinxiuquerenui.but_queding0.enabled = true;
		this.jinxiuquerenui.but_queding0.alpha = 1;
		this.jinxiuquerenui.but_queding0.addEventListener(egret.TouchEvent.TOUCH_TAP,this.xifujinxiu4queren,this);
	}

	public xifugzkeng5jiesuo(){
		this.jinxiuquerenui = new Tongyongquerenkuang();
		Gameguanli.Kongzhitai().dingbuui.addChild(this.jinxiuquerenui);
		for(var g = 0;g<this.chengyuanhudongbiao.length;g++){
			if(this.chengyuanhudongbiao[g].id == "15"){
				this.jinxiuquerenui.tishiwenzi.text = "您已选择进修：【" + this.chengyuanhudongbiao[g].xingdongming + "】。\n此次进修消耗时间为：【" + this.chengyuanhudongbiao[g].shijian + "】分钟（现实时间）。";
				this.querenjinxiujiangliqueren(this.chengyuanhudongbiao[g].jiangli,this.chengyuanhudongbiao[g].jianglishuliang);
				this.querenjinxiuxiaohaoqueren(this.chengyuanhudongbiao[g].xiaohao,this.chengyuanhudongbiao[g].xiaohaoshuliang);
				break;
			}
		}
		this.jinxiuquerenui.but_queding.enabled = false;
		this.jinxiuquerenui.but_shuangbei.enabled = false;
		this.jinxiuquerenui.but_queding.alpha = 0;
		this.jinxiuquerenui.but_shuangbei.alpha = 0;
		this.jinxiuquerenui.but_queding0.enabled = true;
		this.jinxiuquerenui.but_queding0.alpha = 1;
		this.jinxiuquerenui.but_queding0.addEventListener(egret.TouchEvent.TOUCH_TAP,this.xifujinxiu5queren,this);
	}

	public xifujinxiu1queren(){
		Gameguanli.Kongzhitai().dingbuui.removeChild(this.jinxiuquerenui);
		this.fasongqurenshuju("11","3","1");
	}

	

	public xifujinxiu2queren(){
		Gameguanli.Kongzhitai().dingbuui.removeChild(this.jinxiuquerenui);
		this.fasongqurenshuju("12","3","1");
	}

	public xifujinxiu3queren(){
		Gameguanli.Kongzhitai().dingbuui.removeChild(this.jinxiuquerenui);
		this.fasongqurenshuju("13","3","1");
	}

	public xifujinxiu4queren(){
		Gameguanli.Kongzhitai().dingbuui.removeChild(this.jinxiuquerenui);
		this.fasongqurenshuju("14","3","1");
	}

	public xifujinxiu5queren(){
		Gameguanli.Kongzhitai().dingbuui.removeChild(this.jinxiuquerenui);
		this.fasongqurenshuju("15","3","1");
	}


	public xifugzkeng1weijiesuo(){
		this.jinxiuquerenui = new Tongyongquerenkuang();
		Gameguanli.Kongzhitai().dingbuui.addChild(this.jinxiuquerenui);
		this.jinxiuquerenui.jiangliicon1.source = "";
		this.jinxiuquerenui.jiangli1.text = "";
		this.jinxiuquerenui.jiangliicon2.source = "";
		this.jinxiuquerenui.jiangli2.text = "";
		this.jinxiuquerenui.but_queding.enabled = false;
		this.jinxiuquerenui.but_shuangbei.enabled = false;
		this.jinxiuquerenui.but_queding.alpha = 0;
		this.jinxiuquerenui.but_shuangbei.alpha = 0;
		this.jinxiuquerenui.but_queding0.enabled = true;
		this.jinxiuquerenui.but_queding0.alpha = 1;
		this.jinxiuquerenui.but_queding0.addEventListener(egret.TouchEvent.TOUCH_TAP,this.guanbijinxiuquerenui,this);
		this.jinxiuquerenui.tishiwenzi.text = "上街到访【书店】时，有几率解锁该进修内容。";
	}

	public xifugzkeng2weijiesuo(){
		this.jinxiuquerenui = new Tongyongquerenkuang();
		Gameguanli.Kongzhitai().dingbuui.addChild(this.jinxiuquerenui);
		this.jinxiuquerenui.jiangliicon1.source = "";
		this.jinxiuquerenui.jiangli1.text = "";
		this.jinxiuquerenui.jiangliicon2.source = "";
		this.jinxiuquerenui.jiangli2.text = "";
		this.jinxiuquerenui.but_queding.enabled = false;
		this.jinxiuquerenui.but_shuangbei.enabled = false;
		this.jinxiuquerenui.but_queding.alpha = 0;
		this.jinxiuquerenui.but_shuangbei.alpha = 0;
		this.jinxiuquerenui.but_queding0.enabled = true;
		this.jinxiuquerenui.but_queding0.alpha = 1;
		this.jinxiuquerenui.but_queding0.addEventListener(egret.TouchEvent.TOUCH_TAP,this.guanbijinxiuquerenui,this);
		this.jinxiuquerenui.tishiwenzi.text = "上街到访【书店】时，有几率解锁该进修内容。";
		
	}

	public xifugzkeng3weijiesuo(){
		this.jinxiuquerenui = new Tongyongquerenkuang();
		Gameguanli.Kongzhitai().dingbuui.addChild(this.jinxiuquerenui);
		this.jinxiuquerenui.jiangliicon1.source = "";
		this.jinxiuquerenui.jiangli1.text = "";
		this.jinxiuquerenui.jiangliicon2.source = "";
		this.jinxiuquerenui.jiangli2.text = "";
		this.jinxiuquerenui.but_queding.enabled = false;
		this.jinxiuquerenui.but_shuangbei.enabled = false;
		this.jinxiuquerenui.but_queding.alpha = 0;
		this.jinxiuquerenui.but_shuangbei.alpha = 0;
		this.jinxiuquerenui.but_queding0.enabled = true;
		this.jinxiuquerenui.but_queding0.alpha = 1;
		this.jinxiuquerenui.but_queding0.addEventListener(egret.TouchEvent.TOUCH_TAP,this.guanbijinxiuquerenui,this);
		this.jinxiuquerenui.tishiwenzi.text = "上街到访【书店】时，有几率解锁该进修内容。";
		
	}

	public xifugzkeng4weijiesuo(){
		this.jinxiuquerenui = new Tongyongquerenkuang();
		Gameguanli.Kongzhitai().dingbuui.addChild(this.jinxiuquerenui);
		this.jinxiuquerenui.jiangliicon1.source = "";
		this.jinxiuquerenui.jiangli1.text = "";
		this.jinxiuquerenui.jiangliicon2.source = "";
		this.jinxiuquerenui.jiangli2.text = "";
		this.jinxiuquerenui.but_queding.enabled = false;
		this.jinxiuquerenui.but_shuangbei.enabled = false;
		this.jinxiuquerenui.but_queding.alpha = 0;
		this.jinxiuquerenui.but_shuangbei.alpha = 0;
		this.jinxiuquerenui.but_queding0.enabled = true;
		this.jinxiuquerenui.but_queding0.alpha = 1;
		this.jinxiuquerenui.but_queding0.addEventListener(egret.TouchEvent.TOUCH_TAP,this.guanbijinxiuquerenui,this);
		this.jinxiuquerenui.tishiwenzi.text = "上街到访【书店】时，有几率解锁该进修内容。";
		
	}

	public xifugzkeng5weijiesuo(){
		this.jinxiuquerenui = new Tongyongquerenkuang();
		Gameguanli.Kongzhitai().dingbuui.addChild(this.jinxiuquerenui);
		this.jinxiuquerenui.jiangliicon1.source = "";
		this.jinxiuquerenui.jiangli1.text = "";
		this.jinxiuquerenui.jiangliicon2.source = "";
		this.jinxiuquerenui.jiangli2.text = "";
		this.jinxiuquerenui.but_queding.enabled = false;
		this.jinxiuquerenui.but_shuangbei.enabled = false;
		this.jinxiuquerenui.but_queding.alpha = 0;
		this.jinxiuquerenui.but_shuangbei.alpha = 0;
		this.jinxiuquerenui.but_queding0.enabled = true;
		this.jinxiuquerenui.but_queding0.alpha = 1;
		this.jinxiuquerenui.but_queding0.addEventListener(egret.TouchEvent.TOUCH_TAP,this.guanbijinxiuquerenui,this);
		this.jinxiuquerenui.tishiwenzi.text = "上街到访【书店】时，有几率解锁该进修内容。";
		
	}

	public xifuzs(){

	}

	public guanbixifu(){
		Gameguanli.Kongzhitai().jiatingjiemian.removeChild(this.xifujiaohu);
	}

	public dianjixiaosunnv(){
		egret.Tween.get(this.img_xiaosunnv).to({scaleX:1.2,scaleY:1.2},1000).call(()=>{
			egret.Tween.get(this.img_xiaosunnv).to({scaleX:1,scaleY:1},1000);
		})
		this.sunnvjiaohu = new Sunnvjiaohuui();
		Gameguanli.Kongzhitai().jiatingjiemian.addChild(this.sunnvjiaohu);
		this.sunnvjiaohu.sunnvguanbi.touchEnabled = true;
		this.sunnvjiaohu.sunnvguanbi.addEventListener(egret.TouchEvent.TOUCH_TAP,this.guanbisunvn,this);
		this.sunnvjiaohu.sunnvchakan.enabled = true;
		if(Gerenshuxing.sunnvjiaotan > 0){
			this.sunnvjiaohu.sunnvjiaotan.enabled = true;
		}else{
			this.sunnvjiaohu.sunnvjiaotan.enabled = false;
		}
		this.sunnvjiaohu.sunnvjinxiu.enabled = true;
		this.sunnvjiaohu.sunnvzengsong.enabled = true;
		this.sunnvjiaohu.sunnvchakan.addEventListener(egret.TouchEvent.TOUCH_TAP,this.sunnvck,this);
		this.sunnvjiaohu.sunnvjiaotan.addEventListener(egret.TouchEvent.TOUCH_TAP,this.sunnvjt,this);
		this.sunnvjiaohu.sunnvjinxiu.addEventListener(egret.TouchEvent.TOUCH_TAP,this.sunnvgz,this);
		this.sunnvjiaohu.sunnvzengsong.addEventListener(egret.TouchEvent.TOUCH_TAP,this.sunnvzs,this);
		this.jiatingchengyuanbiao = RES.getRes("jiatingchengyuanbiao_json");

	}

	public sunnvck(){
		if(this.sunnvjiaohu.sunnvchakan.enabled == false || this.sunnvjiaohu.sunnvjinxiu.enabled == false || this.sunnvjiaohu.sunnvzengsong.enabled == false){
			Gameguanli.Kongzhitai().jiatingjiemian.sunnvjiaohu.removeChild(this.erjitanchuui);
		}
		this.erjitanchuui = new Jiatingchengyuanjieshaoui();
		Gameguanli.Kongzhitai().jiatingjiemian.sunnvjiaohu.addChild(this.erjitanchuui);
		this.sunnvjiaohu.sunnvchakan.enabled = false;
		if(Gerenshuxing.sunnvjiaotan > 0){
			this.sunnvjiaohu.sunnvjiaotan.enabled = true;
		}else{
			this.sunnvjiaohu.sunnvjiaotan.enabled = false;
		}
		this.sunnvjiaohu.sunnvjinxiu.enabled = true;
		this.sunnvjiaohu.sunnvzengsong.enabled = true;
		this.erjitanchuui.x = this.sunnvjiaohu.sunnvbeijing.x - this.erjitanchuui.width - this.sunnvjiaohu.sunnvbeijing.width;
		this.erjitanchuui.y = this.sunnvjiaohu.sunnvbeijing.y - this.erjitanchuui.height;
		this.erjitanchuui.biaotiwenzi.text = "介绍";
		this.erjitanchuui.guanxibiaoqian.text = "关系";
		this.erjitanchuui.qinhelibiaoqian.text = "亲和值";
		this.erjitanchuui.gongzuobiaoqian.text = "乖巧值";
		this.erjitanchuui.jiesaobiaoqian.text = "说明";
		for(var i = 0 ;i<this.jiatingchengyuanbiao.length;i++){
			if(this.jiatingchengyuanbiao[i].id == "4"){
				this.erjitanchuui.guanxineirong.text = "" + this.jiatingchengyuanbiao[i].chengyuanming;
				this.erjitanchuui.qinghelizhi.text = "" + Gerenshuxing.sunnvxinxi[0];
				this.erjitanchuui.gongzuozhi.text = "" + Gerenshuxing.sunnvxinxi[1];
				this.erjitanchuui.jiesaoneirong.text = "" + this.jiatingchengyuanbiao[i].shuoming;
				break;
			}
		} 
	}

	public sunnvjt(){
		Gerenshuxing.sunnvjiaotan -= 1;
		this.renwujiemian = new Npcduihuaui();
		if(this.sunnvjiaohu.sunnvchakan.enabled == false){
			Gameguanli.Kongzhitai().jiatingjiemian.sunnvjiaohu.removeChild(this.erjitanchuui);
		}
		Gameguanli.Kongzhitai().dingbuui.addChild(this.renwujiemian);
		this.renwujiemian.chushihua("4");
		this.sunnvjiaohu.sunnvchakan.enabled = true;
		if(Gerenshuxing.sunnvjiaotan > 0){
			this.sunnvjiaohu.sunnvjiaotan.enabled = true;
		}else{
			this.sunnvjiaohu.sunnvjiaotan.enabled = false;
		}
		this.sunnvjiaohu.sunnvjinxiu.enabled = true;
		this.sunnvjiaohu.sunnvzengsong.enabled = true;

	}

	public sunnvgz(){
	if(this.sunnvjiaohu.sunnvchakan.enabled == false || this.sunnvjiaohu.sunnvjinxiu.enabled == false || this.sunnvjiaohu.sunnvzengsong.enabled == false){
			Gameguanli.Kongzhitai().jiatingjiemian.sunnvjiaohu.removeChild(this.erjitanchuui);
		}
		if(Gerenshuxing.sunnvxinxi[2] != "0"){
			this.erjitanchuui = new Jiatingjinxiuui();
			Gameguanli.Kongzhitai().jiatingjiemian.sunnvjiaohu.addChild(this.erjitanchuui);
			this.erjitanchuui.x = this.sunnvjiaohu.sunnvbeijing.x - this.erjitanchuui.width - this.sunnvjiaohu.sunnvbeijing.width;
			this.erjitanchuui.y = this.sunnvjiaohu.sunnvbeijing.y - this.erjitanchuui.height;
			this.chengyuanhudongbiao = RES.getRes("chengyuanhudongbiao_json");
			this.sunnvjiaohu.sunnvchakan.enabled = true;
			if(Gerenshuxing.sunnvjiaotan > 0){
				this.sunnvjiaohu.sunnvjiaotan.enabled = true;
			}else{
				this.sunnvjiaohu.sunnvjiaotan.enabled = false;
			}
			this.sunnvjiaohu.sunnvjinxiu.enabled = false;
			this.sunnvjiaohu.sunnvzengsong.enabled = true;
			for(var i = 0;i<this.chengyuanhudongbiao.length;i++){
				if(this.chengyuanhudongbiao[i].id == Gerenshuxing.sunnvxinxi[2]){
					this.erjitanchuui.jinxiubiaoti.text = this.chengyuanhudongbiao[i].xingdongming;
					this.erjitanchuui.jinxiutupian.source = this.chengyuanhudongbiao[i].xianshiicon;
				}
			}
			if(Gerenshuxing.sunnvxinxi[3] == "0"){
				this.erjitanchuui.shengyushijian0.text = "已完成";
				this.erjitanchuui.quedinganniu.enabled = true;
				this.erjitanchuui.quedinganniu.label = "确定";
				this.erjitanchuui.quedinganniu.addEventListener(egret.TouchEvent.TOUCH_TAP,this.sunnvjinxiulinjiang,this);
			}else{
				let dangqianshijian = (new Date()).valueOf();
				let shengyushijian = parseInt(Gerenshuxing.sunnvxinxi[3]) - dangqianshijian;
				this.erjitanchuui.shengyushijian0.text = Math.floor((shengyushijian / 60000) % 60) + ":" + Math.floor((shengyushijian  / 1000) % 60) ;
				this.erjitanchuui.quedinganniu.enabled = true;
				this.erjitanchuui.quedinganniu.label = "加速（广告）";
				this.erjitanchuui.quedinganniu.addEventListener(egret.TouchEvent.TOUCH_TAP,this.sunnvjinxiusuoduan,this);
				let dingshiqi = new egret.Timer(1000,1);
				dingshiqi.addEventListener(egret.TimerEvent.TIMER,this.panduansunnvjinxiu,this);
				dingshiqi.start();
			}
		}else{
			this.erjitanchuui = new Jiatingchengyuanzengsong();
			Gameguanli.Kongzhitai().jiatingjiemian.sunnvjiaohu.addChild(this.erjitanchuui);
			this.erjitanchuui.x = this.sunnvjiaohu.sunnvbeijing.x - this.erjitanchuui.width - this.sunnvjiaohu.sunnvbeijing.width;
			this.erjitanchuui.y = this.sunnvjiaohu.sunnvbeijing.y - this.erjitanchuui.height;
			this.chengyuanhudongbiao = RES.getRes("chengyuanhudongbiao_json");
			this.sunnvgzkeng1();
			this.sunnvgzkeng2();
			this.sunnvgzkeng3();
			this.sunnvgzkeng4();
			this.sunnvgzkeng5();
		}
		this.sunnvjiaohu.sunnvchakan.enabled = true;
		if(Gerenshuxing.sunnvjiaotan > 0){
			this.sunnvjiaohu.sunnvjiaotan.enabled = true;
		}else{
			this.sunnvjiaohu.sunnvjiaotan.enabled = false;
		}
		this.sunnvjiaohu.sunnvjinxiu.enabled = false;
		this.sunnvjiaohu.sunnvzengsong.enabled = true;
		
	}

	public sunnvjinxiulinjiang(){
		let idshuju = Gerenshuxing.sunnvxinxi[2];
		let jianglileixing = 0;
		let jianglishuliang = 0;
		let beishu = 1;
		for(var j = 0;j<this.chengyuanhudongbiao.length;j++){
			if(this.chengyuanhudongbiao[j].id == idshuju){
				jianglileixing = this.chengyuanhudongbiao[j].jiangli;
				jianglishuliang = this.chengyuanhudongbiao[j].jianglishuliang;
				break;
			}
		}
		Gerenshuxing.sunnvxinxi[2] = "0";
		Weblianjie.fasongshuju("code:080","{" + '"uid"' + ":"+ '"' + Gerenshuxing.uid + '"' + ","
		+ '"leixing"' +":"+ '"' + jianglileixing + '"' +","
			+ '"shuliang"' +":"+ '"' + jianglishuliang + '"' +","
			+ '"beishu"' +":"+ '"' + beishu + '"' +"}");
		this.sunnvgz();
		

	}

	public sunnvjinxiusuoduan(){

	}

	public panduansunnvjinxiu(){
		if(this.sunnvjiaohu.sunnvjinxiu.enabled == false){
			this.sunnvgz();
		}
	}

	public sunnvgzkeng1(){
		let duihua1jiesuo = false;
		for(var i = 0;i<Gerenshuxing.sunnvxuexi.length;i++){
			if(Gerenshuxing.sunnvxuexi[i] == "31"){
				duihua1jiesuo = true;
				break;
			}
		}
		if(duihua1jiesuo == true){
			this.erjitanchuui.anniudibu.source = "img_jiaohuanniudibu_png";
			this.erjitanchuui.daojuzu0.enabled = true;
			this.erjitanchuui.daojuzu0.addEventListener(egret.TouchEvent.TOUCH_TAP,this.sunnvgzkeng1jiesuo,this);			
		}else{
			this.erjitanchuui.anniudibu.source = "img_jiaohuanniudibu1_png";
			this.erjitanchuui.daojuzu0.enabled = true;
			this.erjitanchuui.daojuzu0.addEventListener(egret.TouchEvent.TOUCH_TAP,this.sunnvgzkeng1weijiesuo,this);
		}
		for(var j = 0;j<this.chengyuanhudongbiao.length;j++){
			if(this.chengyuanhudongbiao[j].id == "31"){
				this.erjitanchuui.wenzineirong.text = this.chengyuanhudongbiao[j].xingdongming;
				this.erjitanchuui.daojutubiao.source = this.chengyuanhudongbiao[j].xianshiicon;
				break;
			}
		}
	}

	public sunnvgzkeng2(){
		let duihua2jiesuo = false;
		for(var i = 0;i<Gerenshuxing.sunnvxuexi.length;i++){
			if(Gerenshuxing.sunnvxuexi[i] == "32"){
				duihua2jiesuo = true;
				break;
			}
		}
		if(duihua2jiesuo == true){
			this.erjitanchuui.anniudibu0.source = "img_jiaohuanniudibu_png";
			this.erjitanchuui.daojuzu1.enabled = true;
			this.erjitanchuui.daojuzu1.addEventListener(egret.TouchEvent.TOUCH_TAP,this.sunnvgzkeng2jiesuo,this);			
		}else{
			this.erjitanchuui.anniudibu0.source = "img_jiaohuanniudibu1_png";
			this.erjitanchuui.daojuzu1.enabled = true;
			this.erjitanchuui.daojuzu1.addEventListener(egret.TouchEvent.TOUCH_TAP,this.sunnvgzkeng2weijiesuo,this);
		}
		for(var j = 0;j<this.chengyuanhudongbiao.length;j++){
			if(this.chengyuanhudongbiao[j].id == "32"){
				this.erjitanchuui.wenzineirong0.text = this.chengyuanhudongbiao[j].xingdongming;
				this.erjitanchuui.daojutubiao0.source = this.chengyuanhudongbiao[j].xianshiicon;
				break;
			}
		}
	}

	public sunnvgzkeng3(){
		let duihua3jiesuo = false;
		for(var i = 0;i<Gerenshuxing.sunnvxuexi.length;i++){
			if(Gerenshuxing.sunnvxuexi[i] == "33"){
				duihua3jiesuo = true;
				break;
			}
		}
		if(duihua3jiesuo == true){
			this.erjitanchuui.anniudibu1.source = "img_jiaohuanniudibu_png";
			this.erjitanchuui.daojuzu2.enabled = true;
			this.erjitanchuui.daojuzu2.addEventListener(egret.TouchEvent.TOUCH_TAP,this.sunnvgzkeng3jiesuo,this);			
		}else{
			this.erjitanchuui.anniudibu1.source = "img_jiaohuanniudibu1_png";
			this.erjitanchuui.daojuzu2.enabled = true;
			this.erjitanchuui.daojuzu2.addEventListener(egret.TouchEvent.TOUCH_TAP,this.sunnvgzkeng3weijiesuo,this);
		}
		for(var j = 0;j<this.chengyuanhudongbiao.length;j++){
			if(this.chengyuanhudongbiao[j].id == "33"){
				this.erjitanchuui.wenzineirong1.text = this.chengyuanhudongbiao[j].xingdongming;
				this.erjitanchuui.daojutubiao1.source = this.chengyuanhudongbiao[j].xianshiicon;
				break;
			}
		}
	}

	public sunnvgzkeng4(){
		let duihua4jiesuo = false;
		for(var i = 0;i<Gerenshuxing.sunnvxuexi.length;i++){
			if(Gerenshuxing.sunnvxuexi[i] == "34"){
				duihua4jiesuo = true;
				break;
			}
		}
		if(duihua4jiesuo == true){
			this.erjitanchuui.anniudibu2.source = "img_jiaohuanniudibu_png";
			this.erjitanchuui.daojuzu3.enabled = true;
			this.erjitanchuui.daojuzu3.addEventListener(egret.TouchEvent.TOUCH_TAP,this.sunnvgzkeng4jiesuo,this);			
		}else{
			this.erjitanchuui.anniudibu2.source = "img_jiaohuanniudibu1_png";
			this.erjitanchuui.daojuzu3.enabled = true;
			this.erjitanchuui.daojuzu3.addEventListener(egret.TouchEvent.TOUCH_TAP,this.sunnvgzkeng4weijiesuo,this);
		}
		for(var j = 0;j<this.chengyuanhudongbiao.length;j++){
			if(this.chengyuanhudongbiao[j].id == "34"){
				this.erjitanchuui.wenzineirong2.text = this.chengyuanhudongbiao[j].xingdongming;
				this.erjitanchuui.daojutubiao2.source = this.chengyuanhudongbiao[j].xianshiicon;
				break;
			}
		}
	}

	public sunnvgzkeng5(){
		let duihua5jiesuo = false;
		for(var i = 0;i<Gerenshuxing.sunnvxuexi.length;i++){
			if(Gerenshuxing.sunnvxuexi[i] == "35"){
				duihua5jiesuo = true;
				break;
			}
		}
		if(duihua5jiesuo == true){
			this.erjitanchuui.anniudibu3.source = "img_jiaohuanniudibu_png";
			this.erjitanchuui.daojuzu4.enabled = true;
			this.erjitanchuui.daojuzu4.addEventListener(egret.TouchEvent.TOUCH_TAP,this.sunnvgzkeng5jiesuo,this);			
		}else{
			this.erjitanchuui.anniudibu3.source = "img_jiaohuanniudibu1_png";
			this.erjitanchuui.daojuzu4.enabled = true;
			this.erjitanchuui.daojuzu4.addEventListener(egret.TouchEvent.TOUCH_TAP,this.sunnvgzkeng5weijiesuo,this);
		}
		for(var j = 0;j<this.chengyuanhudongbiao.length;j++){
			if(this.chengyuanhudongbiao[j].id == "35"){
				this.erjitanchuui.wenzineirong3.text = this.chengyuanhudongbiao[j].xingdongming;
				this.erjitanchuui.daojutubiao3.source = this.chengyuanhudongbiao[j].xianshiicon;
				break;
			}
		}
	}

	public sunnvgzkeng1jiesuo(){
		this.jinxiuquerenui = new Tongyongquerenkuang();
		Gameguanli.Kongzhitai().dingbuui.addChild(this.jinxiuquerenui);
		for(var g = 0;g<this.chengyuanhudongbiao.length;g++){
			if(this.chengyuanhudongbiao[g].id == "31"){
				this.jinxiuquerenui.tishiwenzi.text = "您已选择进修：【" + this.chengyuanhudongbiao[g].xingdongming + "】。\n此次进修消耗时间为：【" + this.chengyuanhudongbiao[g].shijian + "】分钟（现实时间）。";
				this.querenjinxiujiangliqueren(this.chengyuanhudongbiao[g].jiangli,this.chengyuanhudongbiao[g].jianglishuliang);
				this.querenjinxiuxiaohaoqueren(this.chengyuanhudongbiao[g].xiaohao,this.chengyuanhudongbiao[g].xiaohaoshuliang);
				break;
			}
		}
		this.jinxiuquerenui.but_queding.enabled = false;
		this.jinxiuquerenui.but_shuangbei.enabled = false;
		this.jinxiuquerenui.but_queding.alpha = 0;
		this.jinxiuquerenui.but_shuangbei.alpha = 0;
		this.jinxiuquerenui.but_queding0.enabled = true;
		this.jinxiuquerenui.but_queding0.alpha = 1;
		this.jinxiuquerenui.but_queding0.addEventListener(egret.TouchEvent.TOUCH_TAP,this.sunnvjinxiu1queren,this);
	}

	public sunnvgzkeng2jiesuo(){
		this.jinxiuquerenui = new Tongyongquerenkuang();
		Gameguanli.Kongzhitai().dingbuui.addChild(this.jinxiuquerenui);
		for(var g = 0;g<this.chengyuanhudongbiao.length;g++){
			if(this.chengyuanhudongbiao[g].id == "32"){
				this.jinxiuquerenui.tishiwenzi.text = "您已选择进修：【" + this.chengyuanhudongbiao[g].xingdongming + "】。\n此次进修消耗时间为：【" + this.chengyuanhudongbiao[g].shijian + "】分钟（现实时间）。";
				this.querenjinxiujiangliqueren(this.chengyuanhudongbiao[g].jiangli,this.chengyuanhudongbiao[g].jianglishuliang);
				this.querenjinxiuxiaohaoqueren(this.chengyuanhudongbiao[g].xiaohao,this.chengyuanhudongbiao[g].xiaohaoshuliang);
				break;
			}
		}
		this.jinxiuquerenui.but_queding.enabled = false;
		this.jinxiuquerenui.but_shuangbei.enabled = false;
		this.jinxiuquerenui.but_queding.alpha = 0;
		this.jinxiuquerenui.but_shuangbei.alpha = 0;
		this.jinxiuquerenui.but_queding0.enabled = true;
		this.jinxiuquerenui.but_queding0.alpha = 1;
		this.jinxiuquerenui.but_queding0.addEventListener(egret.TouchEvent.TOUCH_TAP,this.sunnvjinxiu2queren,this);
	}

	public sunnvgzkeng3jiesuo(){
		this.jinxiuquerenui = new Tongyongquerenkuang();
		Gameguanli.Kongzhitai().dingbuui.addChild(this.jinxiuquerenui);
		for(var g = 0;g<this.chengyuanhudongbiao.length;g++){
			if(this.chengyuanhudongbiao[g].id == "33"){
				this.jinxiuquerenui.tishiwenzi.text = "您已选择进修：【" + this.chengyuanhudongbiao[g].xingdongming + "】。\n此次进修消耗时间为：【" + this.chengyuanhudongbiao[g].shijian + "】分钟（现实时间）。";
				this.querenjinxiujiangliqueren(this.chengyuanhudongbiao[g].jiangli,this.chengyuanhudongbiao[g].jianglishuliang);
				this.querenjinxiuxiaohaoqueren(this.chengyuanhudongbiao[g].xiaohao,this.chengyuanhudongbiao[g].xiaohaoshuliang);
				break;
			}
		}
		this.jinxiuquerenui.but_queding.enabled = false;
		this.jinxiuquerenui.but_shuangbei.enabled = false;
		this.jinxiuquerenui.but_queding.alpha = 0;
		this.jinxiuquerenui.but_shuangbei.alpha = 0;
		this.jinxiuquerenui.but_queding0.enabled = true;
		this.jinxiuquerenui.but_queding0.alpha = 1;
		this.jinxiuquerenui.but_queding0.addEventListener(egret.TouchEvent.TOUCH_TAP,this.sunnvjinxiu3queren,this);
	}

	public sunnvgzkeng4jiesuo(){
		this.jinxiuquerenui = new Tongyongquerenkuang();
		Gameguanli.Kongzhitai().dingbuui.addChild(this.jinxiuquerenui);
		for(var g = 0;g<this.chengyuanhudongbiao.length;g++){
			if(this.chengyuanhudongbiao[g].id == "34"){
				this.jinxiuquerenui.tishiwenzi.text = "您已选择进修：【" + this.chengyuanhudongbiao[g].xingdongming + "】。\n此次进修消耗时间为：【" + this.chengyuanhudongbiao[g].shijian + "】分钟（现实时间）。";
				this.querenjinxiujiangliqueren(this.chengyuanhudongbiao[g].jiangli,this.chengyuanhudongbiao[g].jianglishuliang);
				this.querenjinxiuxiaohaoqueren(this.chengyuanhudongbiao[g].xiaohao,this.chengyuanhudongbiao[g].xiaohaoshuliang);
				break;
			}
		}
		this.jinxiuquerenui.but_queding.enabled = false;
		this.jinxiuquerenui.but_shuangbei.enabled = false;
		this.jinxiuquerenui.but_queding.alpha = 0;
		this.jinxiuquerenui.but_shuangbei.alpha = 0;
		this.jinxiuquerenui.but_queding0.enabled = true;
		this.jinxiuquerenui.but_queding0.alpha = 1;
		this.jinxiuquerenui.but_queding0.addEventListener(egret.TouchEvent.TOUCH_TAP,this.sunnvjinxiu4queren,this);
	}

	public sunnvgzkeng5jiesuo(){
		this.jinxiuquerenui = new Tongyongquerenkuang();
		Gameguanli.Kongzhitai().dingbuui.addChild(this.jinxiuquerenui);
		for(var g = 0;g<this.chengyuanhudongbiao.length;g++){
			if(this.chengyuanhudongbiao[g].id == "35"){
				this.jinxiuquerenui.tishiwenzi.text = "您已选择进修：【" + this.chengyuanhudongbiao[g].xingdongming + "】。\n此次进修消耗时间为：【" + this.chengyuanhudongbiao[g].shijian + "】分钟（现实时间）。";
				this.querenjinxiujiangliqueren(this.chengyuanhudongbiao[g].jiangli,this.chengyuanhudongbiao[g].jianglishuliang);
				this.querenjinxiuxiaohaoqueren(this.chengyuanhudongbiao[g].xiaohao,this.chengyuanhudongbiao[g].xiaohaoshuliang);
				break;
			}
		}
		this.jinxiuquerenui.but_queding.enabled = false;
		this.jinxiuquerenui.but_shuangbei.enabled = false;
		this.jinxiuquerenui.but_queding.alpha = 0;
		this.jinxiuquerenui.but_shuangbei.alpha = 0;
		this.jinxiuquerenui.but_queding0.enabled = true;
		this.jinxiuquerenui.but_queding0.alpha = 1;
		this.jinxiuquerenui.but_queding0.addEventListener(egret.TouchEvent.TOUCH_TAP,this.sunnvjinxiu5queren,this);
	}

	public sunnvjinxiu1queren(){
		Gameguanli.Kongzhitai().dingbuui.removeChild(this.jinxiuquerenui);
		this.fasongqurenshuju("31","4","1");
	}

	

	public sunnvjinxiu2queren(){
		Gameguanli.Kongzhitai().dingbuui.removeChild(this.jinxiuquerenui);
		this.fasongqurenshuju("32","4","1");
	}

	public sunnvjinxiu3queren(){
		Gameguanli.Kongzhitai().dingbuui.removeChild(this.jinxiuquerenui);
		this.fasongqurenshuju("33","4","1");
	}

	public sunnvjinxiu4queren(){
		Gameguanli.Kongzhitai().dingbuui.removeChild(this.jinxiuquerenui);
		this.fasongqurenshuju("34","4","1");
	}

	public sunnvjinxiu5queren(){
		Gameguanli.Kongzhitai().dingbuui.removeChild(this.jinxiuquerenui);
		this.fasongqurenshuju("35","4","1");
	}


	public sunnvgzkeng1weijiesuo(){
		this.jinxiuquerenui = new Tongyongquerenkuang();
		Gameguanli.Kongzhitai().dingbuui.addChild(this.jinxiuquerenui);
		this.jinxiuquerenui.jiangliicon1.source = "";
		this.jinxiuquerenui.jiangli1.text = "";
		this.jinxiuquerenui.jiangliicon2.source = "";
		this.jinxiuquerenui.jiangli2.text = "";
		this.jinxiuquerenui.but_queding.enabled = false;
		this.jinxiuquerenui.but_shuangbei.enabled = false;
		this.jinxiuquerenui.but_queding.alpha = 0;
		this.jinxiuquerenui.but_shuangbei.alpha = 0;
		this.jinxiuquerenui.but_queding0.enabled = true;
		this.jinxiuquerenui.but_queding0.alpha = 1;
		this.jinxiuquerenui.but_queding0.addEventListener(egret.TouchEvent.TOUCH_TAP,this.guanbijinxiuquerenui,this);
		this.jinxiuquerenui.tishiwenzi.text = "上街到访【书店】时，有几率解锁该进修内容。";
	}

	public sunnvgzkeng2weijiesuo(){
		this.jinxiuquerenui = new Tongyongquerenkuang();
		Gameguanli.Kongzhitai().dingbuui.addChild(this.jinxiuquerenui);
		this.jinxiuquerenui.jiangliicon1.source = "";
		this.jinxiuquerenui.jiangli1.text = "";
		this.jinxiuquerenui.jiangliicon2.source = "";
		this.jinxiuquerenui.jiangli2.text = "";
		this.jinxiuquerenui.but_queding.enabled = false;
		this.jinxiuquerenui.but_shuangbei.enabled = false;
		this.jinxiuquerenui.but_queding.alpha = 0;
		this.jinxiuquerenui.but_shuangbei.alpha = 0;
		this.jinxiuquerenui.but_queding0.enabled = true;
		this.jinxiuquerenui.but_queding0.alpha = 1;
		this.jinxiuquerenui.but_queding0.addEventListener(egret.TouchEvent.TOUCH_TAP,this.guanbijinxiuquerenui,this);
		this.jinxiuquerenui.tishiwenzi.text = "上街到访【书店】时，有几率解锁该进修内容。";
		
	}

	public sunnvgzkeng3weijiesuo(){
		this.jinxiuquerenui = new Tongyongquerenkuang();
		Gameguanli.Kongzhitai().dingbuui.addChild(this.jinxiuquerenui);
		this.jinxiuquerenui.jiangliicon1.source = "";
		this.jinxiuquerenui.jiangli1.text = "";
		this.jinxiuquerenui.jiangliicon2.source = "";
		this.jinxiuquerenui.jiangli2.text = "";
		this.jinxiuquerenui.but_queding.enabled = false;
		this.jinxiuquerenui.but_shuangbei.enabled = false;
		this.jinxiuquerenui.but_queding.alpha = 0;
		this.jinxiuquerenui.but_shuangbei.alpha = 0;
		this.jinxiuquerenui.but_queding0.enabled = true;
		this.jinxiuquerenui.but_queding0.alpha = 1;
		this.jinxiuquerenui.but_queding0.addEventListener(egret.TouchEvent.TOUCH_TAP,this.guanbijinxiuquerenui,this);
		this.jinxiuquerenui.tishiwenzi.text = "上街到访【书店】时，有几率解锁该进修内容。";
		
	}

	public sunnvgzkeng4weijiesuo(){
		this.jinxiuquerenui = new Tongyongquerenkuang();
		Gameguanli.Kongzhitai().dingbuui.addChild(this.jinxiuquerenui);
		this.jinxiuquerenui.jiangliicon1.source = "";
		this.jinxiuquerenui.jiangli1.text = "";
		this.jinxiuquerenui.jiangliicon2.source = "";
		this.jinxiuquerenui.jiangli2.text = "";
		this.jinxiuquerenui.but_queding.enabled = false;
		this.jinxiuquerenui.but_shuangbei.enabled = false;
		this.jinxiuquerenui.but_queding.alpha = 0;
		this.jinxiuquerenui.but_shuangbei.alpha = 0;
		this.jinxiuquerenui.but_queding0.enabled = true;
		this.jinxiuquerenui.but_queding0.alpha = 1;
		this.jinxiuquerenui.but_queding0.addEventListener(egret.TouchEvent.TOUCH_TAP,this.guanbijinxiuquerenui,this);
		this.jinxiuquerenui.tishiwenzi.text = "上街到访【书店】时，有几率解锁该进修内容。";
		
	}

	public sunnvgzkeng5weijiesuo(){
		this.jinxiuquerenui = new Tongyongquerenkuang();
		Gameguanli.Kongzhitai().dingbuui.addChild(this.jinxiuquerenui);
		this.jinxiuquerenui.jiangliicon1.source = "";
		this.jinxiuquerenui.jiangli1.text = "";
		this.jinxiuquerenui.jiangliicon2.source = "";
		this.jinxiuquerenui.jiangli2.text = "";
		this.jinxiuquerenui.but_queding.enabled = false;
		this.jinxiuquerenui.but_shuangbei.enabled = false;
		this.jinxiuquerenui.but_queding.alpha = 0;
		this.jinxiuquerenui.but_shuangbei.alpha = 0;
		this.jinxiuquerenui.but_queding0.enabled = true;
		this.jinxiuquerenui.but_queding0.alpha = 1;
		this.jinxiuquerenui.but_queding0.addEventListener(egret.TouchEvent.TOUCH_TAP,this.guanbijinxiuquerenui,this);
		this.jinxiuquerenui.tishiwenzi.text = "上街到访【书店】时，有几率解锁该进修内容。";
		
	}

	public sunnvzs(){

	}

	public guanbisunvn(){
		Gameguanli.Kongzhitai().jiatingjiemian.removeChild(this.sunnvjiaohu);
	}


	public guanbijinxiuquerenui(){
		Gameguanli.Kongzhitai().dingbuui.removeChild(this.jinxiuquerenui);
	}


	public fasongqurenshuju(idhao,fasongren,beishu){
		for(var h = 0;h<this.chengyuanhudongbiao.length;h++){
			if(this.chengyuanhudongbiao[h].id == idhao){
				let shijian = (new Date()).valueOf() + parseInt(this.chengyuanhudongbiao[h].shijian) * 60000;
				switch(this.chengyuanhudongbiao[h].xiaohao){
					case "1":
						if(Gerenshuxing.jinbizhi >= parseInt(this.chengyuanhudongbiao[h].xiaohaoshuliang)){
							switch(fasongren){
								case "1":
									Gerenshuxing.daerzixinxi[2] = "1";
									Gerenshuxing.daerzixinxi[3] = "100000000";
									this.daerzigz();
									break;
								case "2":
									Gerenshuxing.ererzixinxi[2] = "21";
									Gerenshuxing.ererzixinxi[3] = "100000000";
									this.ererzigz();
									break;
								case "3":
									Gerenshuxing.xifuxinxi[2] = "11";
									Gerenshuxing.xifuxinxi[3] = "100000000";
									this.xifugz();
									break;
								case "4":
									Gerenshuxing.sunnvxinxi[2] = "31";
									Gerenshuxing.sunnvxinxi[3] = "100000000";
									this.sunnvgz();
									break;
							}
							Weblianjie.fasongshuju("code:066","{" + '"uid"' + ":"+ '"' + Gerenshuxing.uid + '"' + 
							"," +'"xiaohaoleixing"' + ":"+ '"'+ this.chengyuanhudongbiao[h].xiaohao +'"' +
							"," +'"xiaohaoshuliang"' + ":"+ '"'+ this.chengyuanhudongbiao[h].xiaohaoshuliang +'"' +
							"," +'"jinxiuid"' + ":"+ '"'+ idhao +'"' + 
							"," +'"beishu"' + ":"+ '"'+ beishu +'"' +
							"," +'"geishuijia"' + ":"+ '"'+ fasongren +'"' + 
							"," +'"jinxiushijian"' + ":"+ '"'+ shijian +'"' +"}");
							Gameguanli.Kongzhitai().cuowutishixinxi("开始进修，请耐心等待...");
						}else{
							Gameguanli.Kongzhitai().cuowutishixinxi("进修失败，需要消耗" + this.chengyuanhudongbiao[h].xiaohaoshuliang + "金钱");
						}
						break;
					case "2":
						if(Gerenshuxing.jiatingzhi >= parseInt(this.chengyuanhudongbiao[h].xiaohaoshuliang)){
							switch(fasongren){
								case "1":
									Gerenshuxing.daerzixinxi[2] = "1";
									Gerenshuxing.daerzixinxi[3] = "100000000";
									this.daerzigz();
									break;
								case "2":
									Gerenshuxing.ererzixinxi[2] = "21";
									Gerenshuxing.ererzixinxi[3] = "100000000";
									this.ererzigz();
									break;
								case "3":
									Gerenshuxing.xifuxinxi[2] = "11";
									Gerenshuxing.xifuxinxi[3] = "100000000";
									this.xifugz();
									break;
								case "4":
									Gerenshuxing.sunnvxinxi[2] = "31";
									Gerenshuxing.sunnvxinxi[3] = "100000000";
									this.sunnvgz();
									break;
							}
							Weblianjie.fasongshuju("code:066","{" + '"uid"' + ":"+ '"' + Gerenshuxing.uid + '"' + 
							"," +'"xiaohaoleixing"' + ":"+ '"'+ this.chengyuanhudongbiao[h].xiaohao +'"' +
							"," +'"xiaohaoshuliang"' + ":"+ '"'+ this.chengyuanhudongbiao[h].xiaohaoshuliang +'"' +
							"," +'"jinxiuid"' + ":"+ '"'+ idhao +'"' + 
							"," +'"beishu"' + ":"+ '"'+ beishu +'"' +
							"," +'"geishuijia"' + ":"+ '"'+ fasongren +'"' + 
							"," +'"jinxiushijian"' + ":"+ '"'+ shijian +'"' +"}");
							Gameguanli.Kongzhitai().cuowutishixinxi("开始进修，请耐心等待...");
						}else{
							Gameguanli.Kongzhitai().cuowutishixinxi("进修失败，需要消耗" + this.chengyuanhudongbiao[h].xiaohaoshuliang + "体力");
						}
						break;
					case "3":
						if(Gerenshuxing.jiankangzhi >= parseInt(this.chengyuanhudongbiao[h].xiaohaoshuliang)){
							switch(fasongren){
								case "1":
									Gerenshuxing.daerzixinxi[2] = "1";
									Gerenshuxing.daerzixinxi[3] = "100000000";
									this.daerzigz();
									break;
								case "2":
									Gerenshuxing.ererzixinxi[2] = "21";
									Gerenshuxing.ererzixinxi[3] = "100000000";
									this.ererzigz();
									break;
								case "3":
									Gerenshuxing.xifuxinxi[2] = "11";
									Gerenshuxing.xifuxinxi[3] = "100000000";
									this.xifugz();
									break;
								case "4":
									Gerenshuxing.sunnvxinxi[2] = "31";
									Gerenshuxing.sunnvxinxi[3] = "100000000";
									this.sunnvgz();
									break;
							}
							Weblianjie.fasongshuju("code:066","{" + '"uid"' + ":"+ '"' + Gerenshuxing.uid + '"' + 
							"," +'"xiaohaoleixing"' + ":"+ '"'+ this.chengyuanhudongbiao[h].xiaohao +'"' +
							"," +'"xiaohaoshuliang"' + ":"+ '"'+ this.chengyuanhudongbiao[h].xiaohaoshuliang +'"' +
							"," +'"jinxiuid"' + ":"+ '"'+ idhao +'"' + 
							"," +'"beishu"' + ":"+ '"'+ beishu +'"' +
							"," +'"geishuijia"' + ":"+ '"'+ fasongren +'"' + 
							"," +'"jinxiushijian"' + ":"+ '"'+ shijian +'"' +"}");
							Gameguanli.Kongzhitai().cuowutishixinxi("开始进修，请耐心等待...");
						}else{
							Gameguanli.Kongzhitai().cuowutishixinxi("进修失败，需要消耗" + this.chengyuanhudongbiao[h].xiaohaoshuliang + "健康值");
						}
						break;
					case "4":
						if(Gerenshuxing.kaixinzhi >= parseInt(this.chengyuanhudongbiao[h].xiaohaoshuliang)){
							switch(fasongren){
								case "1":
									Gerenshuxing.daerzixinxi[2] = "1";
									Gerenshuxing.daerzixinxi[3] = "100000000";
									this.daerzigz();
									break;
								case "2":
									Gerenshuxing.ererzixinxi[2] = "21";
									Gerenshuxing.ererzixinxi[3] = "100000000";
									this.ererzigz();
									break;
								case "3":
									Gerenshuxing.xifuxinxi[2] = "11";
									Gerenshuxing.xifuxinxi[3] = "100000000";
									this.xifugz();
									break;
								case "4":
									Gerenshuxing.sunnvxinxi[2] = "31";
									Gerenshuxing.sunnvxinxi[3] = "100000000";
									this.sunnvgz();
									break;
							}
							Weblianjie.fasongshuju("code:066","{" + '"uid"' + ":"+ '"' + Gerenshuxing.uid + '"' + 
							"," +'"xiaohaoleixing"' + ":"+ '"'+ this.chengyuanhudongbiao[h].xiaohao +'"' +
							"," +'"xiaohaoshuliang"' + ":"+ '"'+ this.chengyuanhudongbiao[h].xiaohaoshuliang +'"' +
							"," +'"jinxiuid"' + ":"+ '"'+ idhao +'"' + 
							"," +'"beishu"' + ":"+ '"'+ beishu +'"' +
							"," +'"geishuijia"' + ":"+ '"'+ fasongren +'"' + 
							"," +'"jinxiushijian"' + ":"+ '"'+ shijian +'"' +"}");
							Gameguanli.Kongzhitai().cuowutishixinxi("开始进修，请耐心等待...");
						}else{
							Gameguanli.Kongzhitai().cuowutishixinxi("进修失败，需要消耗" + this.chengyuanhudongbiao[h].xiaohaoshuliang + "心情值");
						}
						break;
					case "5":
						if(Gerenshuxing.xingfuzhi >= parseInt(this.chengyuanhudongbiao[h].xiaohaoshuliang)){
							switch(fasongren){
								case "1":
									Gerenshuxing.daerzixinxi[2] = "1";
									Gerenshuxing.daerzixinxi[3] = "100000000";
									this.daerzigz();
									break;
								case "2":
									Gerenshuxing.ererzixinxi[2] = "21";
									Gerenshuxing.ererzixinxi[3] = "100000000";
									this.ererzigz();
									break;
								case "3":
									Gerenshuxing.xifuxinxi[2] = "11";
									Gerenshuxing.xifuxinxi[3] = "100000000";
									this.xifugz();
									break;
								case "4":
									Gerenshuxing.sunnvxinxi[2] = "31";
									Gerenshuxing.sunnvxinxi[3] = "100000000";
									this.sunnvgz();
									break;
							}
							Weblianjie.fasongshuju("code:066","{" + '"uid"' + ":"+ '"' + Gerenshuxing.uid + '"' + 
							"," +'"xiaohaoleixing"' + ":"+ '"'+ this.chengyuanhudongbiao[h].xiaohao +'"' +
							"," +'"xiaohaoshuliang"' + ":"+ '"'+ this.chengyuanhudongbiao[h].xiaohaoshuliang +'"' +
							"," +'"jinxiuid"' + ":"+ '"'+ idhao +'"' + 
							"," +'"beishu"' + ":"+ '"'+ beishu +'"' +
							"," +'"geishuijia"' + ":"+ '"'+ fasongren +'"' + 
							"," +'"jinxiushijian"' + ":"+ '"'+ shijian +'"' +"}");
							Gameguanli.Kongzhitai().cuowutishixinxi("开始进修，请耐心等待...");
						}else{
							Gameguanli.Kongzhitai().cuowutishixinxi("进修失败，需要消耗" + this.chengyuanhudongbiao[h].xiaohaoshuliang + "幸福值");
						}
						break;
					case "6":
						if(parseInt(Gerenshuxing.daerzixinxi[0]) >= parseInt(this.chengyuanhudongbiao[h].xiaohaoshuliang)){
							switch(fasongren){
								case "1":
									Gerenshuxing.daerzixinxi[2] = "1";
									Gerenshuxing.daerzixinxi[3] = "100000000";
									this.daerzigz();
									break;
								case "2":
									Gerenshuxing.ererzixinxi[2] = "21";
									Gerenshuxing.ererzixinxi[3] = "100000000";
									this.ererzigz();
									break;
								case "3":
									Gerenshuxing.xifuxinxi[2] = "11";
									Gerenshuxing.xifuxinxi[3] = "100000000";
									this.xifugz();
									break;
								case "4":
									Gerenshuxing.sunnvxinxi[2] = "31";
									Gerenshuxing.sunnvxinxi[3] = "100000000";
									this.sunnvgz();
									break;
							}
							Weblianjie.fasongshuju("code:066","{" + '"uid"' + ":"+ '"' + Gerenshuxing.uid + '"' + 
							"," +'"xiaohaoleixing"' + ":"+ '"'+ this.chengyuanhudongbiao[h].xiaohao +'"' +
							"," +'"xiaohaoshuliang"' + ":"+ '"'+ this.chengyuanhudongbiao[h].xiaohaoshuliang +'"' +
							"," +'"jinxiuid"' + ":"+ '"'+ idhao +'"' + 
							"," +'"beishu"' + ":"+ '"'+ beishu +'"' +
							"," +'"geishuijia"' + ":"+ '"'+ fasongren +'"' + 
							"," +'"jinxiushijian"' + ":"+ '"'+ shijian +'"' +"}");
							Gameguanli.Kongzhitai().cuowutishixinxi("开始进修，请耐心等待...");
						}else{
							Gameguanli.Kongzhitai().cuowutishixinxi("进修失败，需要消耗" + this.chengyuanhudongbiao[h].xiaohaoshuliang + "大儿子亲和值");
						}
						break;
					case "7":
						if(parseInt(Gerenshuxing.ererzixinxi[0]) >= parseInt(this.chengyuanhudongbiao[h].xiaohaoshuliang)){
							switch(fasongren){
								case "1":
									Gerenshuxing.daerzixinxi[2] = "1";
									Gerenshuxing.daerzixinxi[3] = "100000000";
									this.daerzigz();
									break;
								case "2":
									Gerenshuxing.ererzixinxi[2] = "21";
									Gerenshuxing.ererzixinxi[3] = "100000000";
									this.ererzigz();
									break;
								case "3":
									Gerenshuxing.xifuxinxi[2] = "11";
									Gerenshuxing.xifuxinxi[3] = "100000000";
									this.xifugz();
									break;
								case "4":
									Gerenshuxing.sunnvxinxi[2] = "31";
									Gerenshuxing.sunnvxinxi[3] = "100000000";
									this.sunnvgz();
									break;
							}
							Weblianjie.fasongshuju("code:066","{" + '"uid"' + ":"+ '"' + Gerenshuxing.uid + '"' + 
							"," +'"xiaohaoleixing"' + ":"+ '"'+ this.chengyuanhudongbiao[h].xiaohao +'"' +
							"," +'"xiaohaoshuliang"' + ":"+ '"'+ this.chengyuanhudongbiao[h].xiaohaoshuliang +'"' +
							"," +'"jinxiuid"' + ":"+ '"'+ idhao +'"' + 
							"," +'"beishu"' + ":"+ '"'+ beishu +'"' +
							"," +'"geishuijia"' + ":"+ '"'+ fasongren +'"' + 
							"," +'"jinxiushijian"' + ":"+ '"'+ shijian +'"' +"}");
							Gameguanli.Kongzhitai().cuowutishixinxi("开始进修，请耐心等待...");
						}else{
							Gameguanli.Kongzhitai().cuowutishixinxi("进修失败，需要消耗" + this.chengyuanhudongbiao[h].xiaohaoshuliang + "二儿子亲和值");
						}
						break;
					case "8":
						if(parseInt(Gerenshuxing.xifuxinxi[0]) >= parseInt(this.chengyuanhudongbiao[h].xiaohaoshuliang)){
							switch(fasongren){
								case "1":
									Gerenshuxing.daerzixinxi[2] = "1";
									Gerenshuxing.daerzixinxi[3] = "100000000";
									this.daerzigz();
									break;
								case "2":
									Gerenshuxing.ererzixinxi[2] = "21";
									Gerenshuxing.ererzixinxi[3] = "100000000";
									this.ererzigz();
									break;
								case "3":
									Gerenshuxing.xifuxinxi[2] = "11";
									Gerenshuxing.xifuxinxi[3] = "100000000";
									this.xifugz();
									break;
								case "4":
									Gerenshuxing.sunnvxinxi[2] = "31";
									Gerenshuxing.sunnvxinxi[3] = "100000000";
									this.sunnvgz();
									break;
							}
							Weblianjie.fasongshuju("code:066","{" + '"uid"' + ":"+ '"' + Gerenshuxing.uid + '"' + 
							"," +'"xiaohaoleixing"' + ":"+ '"'+ this.chengyuanhudongbiao[h].xiaohao +'"' +
							"," +'"xiaohaoshuliang"' + ":"+ '"'+ this.chengyuanhudongbiao[h].xiaohaoshuliang +'"' +
							"," +'"jinxiuid"' + ":"+ '"'+ idhao +'"' + 
							"," +'"beishu"' + ":"+ '"'+ beishu +'"' +
							"," +'"geishuijia"' + ":"+ '"'+ fasongren +'"' + 
							"," +'"jinxiushijian"' + ":"+ '"'+ shijian +'"' +"}");
							Gameguanli.Kongzhitai().cuowutishixinxi("开始进修，请耐心等待...");
						}else{
							Gameguanli.Kongzhitai().cuowutishixinxi("进修失败，需要消耗" + this.chengyuanhudongbiao[h].xiaohaoshuliang + "大儿媳亲和值");
						}
						break;
					case "9":
						if(parseInt(Gerenshuxing.sunnvxinxi[0]) >= parseInt(this.chengyuanhudongbiao[h].xiaohaoshuliang)){
							switch(fasongren){
								case "1":
									Gerenshuxing.daerzixinxi[2] = "1";
									Gerenshuxing.daerzixinxi[3] = "100000000";
									this.daerzigz();
									break;
								case "2":
									Gerenshuxing.ererzixinxi[2] = "21";
									Gerenshuxing.ererzixinxi[3] = "100000000";
									this.ererzigz();
									break;
								case "3":
									Gerenshuxing.xifuxinxi[2] = "11";
									Gerenshuxing.xifuxinxi[3] = "100000000";
									this.xifugz();
									break;
								case "4":
									Gerenshuxing.sunnvxinxi[2] = "31";
									Gerenshuxing.sunnvxinxi[3] = "100000000";
									this.sunnvgz();
									break;
							}
							Weblianjie.fasongshuju("code:066","{" + '"uid"' + ":"+ '"' + Gerenshuxing.uid + '"' + 
							"," +'"xiaohaoleixing"' + ":"+ '"'+ this.chengyuanhudongbiao[h].xiaohao +'"' +
							"," +'"xiaohaoshuliang"' + ":"+ '"'+ this.chengyuanhudongbiao[h].xiaohaoshuliang +'"' +
							"," +'"jinxiuid"' + ":"+ '"'+ idhao +'"' + 
							"," +'"beishu"' + ":"+ '"'+ beishu +'"' +
							"," +'"geishuijia"' + ":"+ '"'+ fasongren +'"' + 
							"," +'"jinxiushijian"' + ":"+ '"'+ shijian +'"' +"}");
							Gameguanli.Kongzhitai().cuowutishixinxi("开始进修，请耐心等待...");
						}else{
							Gameguanli.Kongzhitai().cuowutishixinxi("进修失败，需要消耗" + this.chengyuanhudongbiao[h].xiaohaoshuliang + "孙女亲和值");
						}
						break;
					case "10":
						if(parseInt(Gerenshuxing.daerzixinxi[1]) >= parseInt(this.chengyuanhudongbiao[h].xiaohaoshuliang)){
							switch(fasongren){
								case "1":
									Gerenshuxing.daerzixinxi[2] = "1";
									Gerenshuxing.daerzixinxi[3] = "100000000";
									this.daerzigz();
									break;
								case "2":
									Gerenshuxing.ererzixinxi[2] = "21";
									Gerenshuxing.ererzixinxi[3] = "100000000";
									this.ererzigz();
									break;
								case "3":
									Gerenshuxing.xifuxinxi[2] = "11";
									Gerenshuxing.xifuxinxi[3] = "100000000";
									this.xifugz();
									break;
								case "4":
									Gerenshuxing.sunnvxinxi[2] = "31";
									Gerenshuxing.sunnvxinxi[3] = "100000000";
									this.sunnvgz();
									break;
							}
							Weblianjie.fasongshuju("code:066","{" + '"uid"' + ":"+ '"' + Gerenshuxing.uid + '"' + 
							"," +'"xiaohaoleixing"' + ":"+ '"'+ this.chengyuanhudongbiao[h].xiaohao +'"' +
							"," +'"xiaohaoshuliang"' + ":"+ '"'+ this.chengyuanhudongbiao[h].xiaohaoshuliang +'"' +
							"," +'"jinxiuid"' + ":"+ '"'+ idhao +'"' + 
							"," +'"beishu"' + ":"+ '"'+ beishu +'"' +
							"," +'"geishuijia"' + ":"+ '"'+ fasongren +'"' + 
							"," +'"jinxiushijian"' + ":"+ '"'+ shijian +'"' +"}");
							Gameguanli.Kongzhitai().cuowutishixinxi("开始进修，请耐心等待...");
						}else{
							Gameguanli.Kongzhitai().cuowutishixinxi("进修失败，需要消耗" + this.chengyuanhudongbiao[h].xiaohaoshuliang + "大儿子工作能力");
						}
						break;
					case "11":
						if(parseInt(Gerenshuxing.ererzixinxi[1]) >= parseInt(this.chengyuanhudongbiao[h].xiaohaoshuliang)){
							switch(fasongren){
								case "1":
									Gerenshuxing.daerzixinxi[2] = "1";
									Gerenshuxing.daerzixinxi[3] = "100000000";
									this.daerzigz();
									break;
								case "2":
									Gerenshuxing.ererzixinxi[2] = "21";
									Gerenshuxing.ererzixinxi[3] = "100000000";
									this.ererzigz();
									break;
								case "3":
									Gerenshuxing.xifuxinxi[2] = "11";
									Gerenshuxing.xifuxinxi[3] = "100000000";
									this.xifugz();
									break;
								case "4":
									Gerenshuxing.sunnvxinxi[2] = "31";
									Gerenshuxing.sunnvxinxi[3] = "100000000";
									this.sunnvgz();
									break;
							}
							Weblianjie.fasongshuju("code:066","{" + '"uid"' + ":"+ '"' + Gerenshuxing.uid + '"' + 
							"," +'"xiaohaoleixing"' + ":"+ '"'+ this.chengyuanhudongbiao[h].xiaohao +'"' +
							"," +'"xiaohaoshuliang"' + ":"+ '"'+ this.chengyuanhudongbiao[h].xiaohaoshuliang +'"' +
							"," +'"jinxiuid"' + ":"+ '"'+ idhao +'"' + 
							"," +'"beishu"' + ":"+ '"'+ beishu +'"' +
							"," +'"geishuijia"' + ":"+ '"'+ fasongren +'"' + 
							"," +'"jinxiushijian"' + ":"+ '"'+ shijian +'"' +"}");
							Gameguanli.Kongzhitai().cuowutishixinxi("开始进修，请耐心等待...");
						}else{
							Gameguanli.Kongzhitai().cuowutishixinxi("进修失败，需要消耗" + this.chengyuanhudongbiao[h].xiaohaoshuliang + "二儿子工作能力");
						}
						break;
					case "12":
						if(parseInt(Gerenshuxing.xifuxinxi[1]) >= parseInt(this.chengyuanhudongbiao[h].xiaohaoshuliang)){
							switch(fasongren){
								case "1":
									Gerenshuxing.daerzixinxi[2] = "1";
									Gerenshuxing.daerzixinxi[3] = "100000000";
									this.daerzigz();
									break;
								case "2":
									Gerenshuxing.ererzixinxi[2] = "21";
									Gerenshuxing.ererzixinxi[3] = "100000000";
									this.ererzigz();
									break;
								case "3":
									Gerenshuxing.xifuxinxi[2] = "11";
									Gerenshuxing.xifuxinxi[3] = "100000000";
									this.xifugz();
									break;
								case "4":
									Gerenshuxing.sunnvxinxi[2] = "31";
									Gerenshuxing.sunnvxinxi[3] = "100000000";
									this.sunnvgz();
									break;
							}
							Weblianjie.fasongshuju("code:066","{" + '"uid"' + ":"+ '"' + Gerenshuxing.uid + '"' + 
							"," +'"xiaohaoleixing"' + ":"+ '"'+ this.chengyuanhudongbiao[h].xiaohao +'"' +
							"," +'"xiaohaoshuliang"' + ":"+ '"'+ this.chengyuanhudongbiao[h].xiaohaoshuliang +'"' +
							"," +'"jinxiuid"' + ":"+ '"'+ idhao +'"' + 
							"," +'"beishu"' + ":"+ '"'+ beishu +'"' +
							"," +'"geishuijia"' + ":"+ '"'+ fasongren +'"' + 
							"," +'"jinxiushijian"' + ":"+ '"'+ shijian +'"' +"}");
							Gameguanli.Kongzhitai().cuowutishixinxi("开始进修，请耐心等待...");
						}else{
							Gameguanli.Kongzhitai().cuowutishixinxi("进修失败，需要消耗" + this.chengyuanhudongbiao[h].xiaohaoshuliang + "大儿媳家务能力");
						}
						break;
					case "13":
						if(parseInt(Gerenshuxing.sunnvxinxi[1]) >= parseInt(this.chengyuanhudongbiao[h].xiaohaoshuliang)){
							switch(fasongren){
								case "1":
									Gerenshuxing.daerzixinxi[2] = "1";
									Gerenshuxing.daerzixinxi[3] = "100000000";
									this.daerzigz();
									break;
								case "2":
									Gerenshuxing.ererzixinxi[2] = "21";
									Gerenshuxing.ererzixinxi[3] = "100000000";
									this.ererzigz();
									break;
								case "3":
									Gerenshuxing.xifuxinxi[2] = "11";
									Gerenshuxing.xifuxinxi[3] = "100000000";
									this.xifugz();
									break;
								case "4":
									Gerenshuxing.sunnvxinxi[2] = "31";
									Gerenshuxing.sunnvxinxi[3] = "100000000";
									this.sunnvgz();
									break;
							}
							Weblianjie.fasongshuju("code:066","{" + '"uid"' + ":"+ '"' + Gerenshuxing.uid + '"' + 
							"," +'"xiaohaoleixing"' + ":"+ '"'+ this.chengyuanhudongbiao[h].xiaohao +'"' +
							"," +'"xiaohaoshuliang"' + ":"+ '"'+ this.chengyuanhudongbiao[h].xiaohaoshuliang +'"' +
							"," +'"jinxiuid"' + ":"+ '"'+ idhao +'"' + 
							"," +'"beishu"' + ":"+ '"'+ beishu +'"' +
							"," +'"geishuijia"' + ":"+ '"'+ fasongren +'"' + 
							"," +'"jinxiushijian"' + ":"+ '"'+ shijian +'"' +"}");
							Gameguanli.Kongzhitai().cuowutishixinxi("开始进修，请耐心等待...");
						}else{
							Gameguanli.Kongzhitai().cuowutishixinxi("进修失败，需要消耗" + this.chengyuanhudongbiao[h].xiaohaoshuliang + "孙女乖巧值");
						}
						break;	
				}
			}
		}
	}

	public querenjinxiujiangliqueren(leixing,shuliang){
		switch(leixing){
			case "0":
				this.jinxiuquerenui.jiangliicon1.source = "";
				this.jinxiuquerenui.jiangli1.text = "";
				break;
			case "1":
				this.jinxiuquerenui.jiangliicon1.source = "img_qian_png";
				this.jinxiuquerenui.jiangli1.text = "+ " + shuliang;
				break;
			case "2":
				this.jinxiuquerenui.jiangliicon1.source = "img_jiating_png";
				this.jinxiuquerenui.jiangli1.text = "+ " + shuliang;
				break;
			case "3":
				this.jinxiuquerenui.jiangliicon1.source = "img_jiankang_png";
				this.jinxiuquerenui.jiangli1.text = "+ " + shuliang;
				break;
			case "4":
				this.jinxiuquerenui.jiangliicon1.source = "img_xinqing_png";
				this.jinxiuquerenui.jiangli1.text = "+ " + shuliang;
				break;
			case "5":
				this.jinxiuquerenui.jiangliicon1.source = "img_xingfu_png";
				this.jinxiuquerenui.jiangli1.text = "+ " + shuliang;
				break;
			case "6":
				this.jinxiuquerenui.jiangliicon1.source = "img_daerzibiaoshi_png";
				this.jinxiuquerenui.jiangli1.text = "+ " + shuliang;
				break;
			case "7":
				this.jinxiuquerenui.jiangliicon1.source = "img_xiaoerzibiaoshi_png";
				this.jinxiuquerenui.jiangli1.text = "+ " + shuliang;
				break;
			case "8":
				this.jinxiuquerenui.jiangliicon1.source = "img_xifubiaoshi_png";
				this.jinxiuquerenui.jiangli1.text = "+ " + shuliang;
				break;
			case "9":
				this.jinxiuquerenui.jiangliicon1.source = "img_sunnvbiaoshi_png";
				this.jinxiuquerenui.jiangli1.text = "+ " + shuliang;
				break;
			case "10":
				this.jinxiuquerenui.jiangliicon1.source = "img_daerzibiaoshi_png";
				this.jinxiuquerenui.jiangli1.text = "+ " + shuliang;
				break;
			case "11":
				this.jinxiuquerenui.jiangliicon1.source = "img_xiaoerzibiaoshi_png";
				this.jinxiuquerenui.jiangli1.text = "+ " + shuliang;
				break;
			case "12":
				this.jinxiuquerenui.jiangliicon1.source = "img_xifubiaoshi_png";
				this.jinxiuquerenui.jiangli1.text = "+ " + shuliang;
				break;
			case "13":
				this.jinxiuquerenui.jiangliicon1.source = "img_sunnvbiaoshi_png";
				this.jinxiuquerenui.jiangli1.text = "+ " + shuliang;
				break;
		}
	}

	public querenjinxiuxiaohaoqueren(leixing,shuliang){
		switch(leixing){
			case "0":
				this.jinxiuquerenui.jiangliicon2.source = "";
				this.jinxiuquerenui.jiangli2.text = "";
				break;
			case "1":
				this.jinxiuquerenui.jiangliicon2.source = "img_qian_png";
				this.jinxiuquerenui.jiangli2.text = "- " + shuliang;
				break;
			case "2":
				this.jinxiuquerenui.jiangliicon2.source = "img_jiating_png";
				this.jinxiuquerenui.jiangli2.text = "- " + shuliang;
				break;
			case "3":
				this.jinxiuquerenui.jiangliicon2.source = "img_jiankang_png";
				this.jinxiuquerenui.jiangli2.text = "- " + shuliang;
				break;
			case "4":
				this.jinxiuquerenui.jiangliicon2.source = "img_xinqing_png";
				this.jinxiuquerenui.jiangli2.text = "- " + shuliang;
				break;
			case "5":
				this.jinxiuquerenui.jiangliicon2.source = "img_xingfu_png";
				this.jinxiuquerenui.jiangli2.text = "- " + shuliang;
				break;
			case "6":
				this.jinxiuquerenui.jiangliicon2.source = "img_daerzibiaoshi_png";
				this.jinxiuquerenui.jiangli2.text = "- " + shuliang;
				break;
			case "7":
				this.jinxiuquerenui.jiangliicon2.source = "img_xiaoerzibiaoshi_png";
				this.jinxiuquerenui.jiangli2.text = "- " + shuliang;
				break;
			case "8":
				this.jinxiuquerenui.jiangliicon2.source = "img_xifubiaoshi_png";
				this.jinxiuquerenui.jiangli2.text = "- " + shuliang;
				break;
			case "9":
				this.jinxiuquerenui.jiangliicon2.source = "img_sunnvbiaoshi_png";
				this.jinxiuquerenui.jiangli2.text = "- " + shuliang;
				break;
			case "10":
				this.jinxiuquerenui.jiangliicon2.source = "img_daerzibiaoshi_png";
				this.jinxiuquerenui.jiangli2.text = "- " + shuliang;
				break;
			case "11":
				this.jinxiuquerenui.jiangliicon2.source = "img_xiaoerzibiaoshi_png";
				this.jinxiuquerenui.jiangli2.text = "- " + shuliang;
				break;
			case "12":
				this.jinxiuquerenui.jiangliicon2.source = "img_xifubiaoshi_png";
				this.jinxiuquerenui.jiangli2.text = "- " + shuliang;
				break;
			case "13":
				this.jinxiuquerenui.jiangliicon2.source = "img_sunnvbiaoshi_png";
				this.jinxiuquerenui.jiangli2.text = "- " + shuliang;
				break;
		}
	}

	

	

	
	
}