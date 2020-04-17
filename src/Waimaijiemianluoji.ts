class Waimaijiemianluoji extends egret.DisplayObjectContainer {
	public zhuyaojiemian:Waimaijiemian;
	public motuojiemian:Motuoche;
	public shipubiao:any;
	public zhengquexuanze:number;
	public di1geid:string;
	public di2geid:string;
	public di3geid:string;
	public di4geid:string;
	public xuqiucai:string;


	public constructor(caideid) {
		super();
		this.chushihua(caideid);
	}

	public chushihua(caideid){
		this.shipubiao = RES.getRes("shipubiao_json");
		this.xuqiucai = caideid;
		this.zhuyaojiemian = new Waimaijiemian();
		Gameguanli.Kongzhitai().dingbuui.addChild(this.zhuyaojiemian);
		this.zhuyaojiemian.qipaowenzizu.alpha = 0;
		this.zhuyaojiemian.dibuzu.alpha = 0;
		this.motuojiemian = new Motuoche();
		this.zhuyaojiemian.addChild(this.motuojiemian);
		this.motuojiemian.x = this.zhuyaojiemian.width;
		this.motuojiemian.y = this.zhuyaojiemian.height / 2 - this.motuojiemian.height / 10 * 7;
		this.motuojiemian.scaleX = 0.5;
		this.motuojiemian.scaleY = 0.5;
		this.zhuyaojiemian.img_jiemiandabeijing.source = "img_jiemiandabeijing_png";
		egret.Tween.get(this.motuojiemian).to({x:this.zhuyaojiemian.width / 2 - this.motuojiemian.width / 11 * 4,scaleX:1,scaleY:1},2000).call(()=>{
			this.zhuyaojiemian.img_jiemiandabeijing.source = "img_jiemiandabeijing1_png";
			this.zhuyaojiemian.qipaowenzizu.alpha = 1;
			this.zhuyaojiemian.dibuzu.alpha = 1;
			for(var i = 0;i<this.shipubiao.length;i++){
				if(this.shipubiao[i].id == caideid){
					this.zhuyaojiemian.shouhuowenzi.text = "顾客这次点的是[" + this.shipubiao[i].foodName + "],麻烦快点送上来！";
					break;
				}
			}
			let suijihaoma = Math.floor(Math.random() * 4) + 1;
			this.zhengquexuanze = suijihaoma;
			this.panduanxiamian(caideid);

		})
	}

	public panduanxiamian(caideid){
		switch(this.zhengquexuanze){
			case 1:
				this.zhengquewei1(caideid);
				break;
			case 2:
				this.zhengquewei2(caideid);
				break;
			case 3:
				this.zhengquewei3(caideid);
				break;
			case 4:
				this.zhengquewei4(caideid);
				break;
		}
	}

	public zhengquewei1(caideid){
		for(var i = 0;i<this.shipubiao.length;i++){
			if(this.shipubiao[i].id == caideid){
				this.di1geid = this.shipubiao[i].id;
				this.zhuyaojiemian.tupianres1.source = this.shipubiao[i].id + "_png";
				this.zhuyaojiemian.caizu1.touchEnabled = true;
				this.zhuyaojiemian.caizu1.addEventListener(egret.TouchEvent.TOUCH_TAP,this.dianji1geanniu,this);
				break;
			}
		}
		let suijixianshi2 = Math.floor(Math.random() * 120);
		this.di2geid = this.shipubiao[suijixianshi2].id;
		while(this.di2geid == this.di1geid){
			let suijixianshi3 = Math.floor(Math.random() * 120);
			this.di2geid = this.shipubiao[suijixianshi3].id;
		}
		for(var h = 0;h<this.shipubiao.length;h++){
			if(this.shipubiao[h].id == this.di2geid){
				this.zhuyaojiemian.tupianres0.source = this.shipubiao[h].id + "_png";
				this.zhuyaojiemian.caizu0.touchEnabled = true;
				this.zhuyaojiemian.caizu0.addEventListener(egret.TouchEvent.TOUCH_TAP,this.dianji2geanniu,this);
				break;
			}
		}
		let suijixianshi4 = Math.floor(Math.random() * 120);
		this.di3geid = this.shipubiao[suijixianshi4].id;
		while(this.di3geid == this.di1geid || this.di3geid == this.di2geid){
			let suijixianshi5 = Math.floor(Math.random() * 120);
			this.di3geid = this.shipubiao[suijixianshi5].id;
		}
		for(var h = 0;h<this.shipubiao.length;h++){
			if(this.shipubiao[h].id == this.di3geid){
				this.zhuyaojiemian.tupianres2.source = this.shipubiao[h].id + "_png";
				this.zhuyaojiemian.caizu2.touchEnabled = true;
				this.zhuyaojiemian.caizu2.addEventListener(egret.TouchEvent.TOUCH_TAP,this.dianji3geanniu,this);
				break;
			}
		}
		let suijixianshi6 = Math.floor(Math.random() * 120);
		this.di4geid = this.shipubiao[suijixianshi6].id;
		while(this.di4geid == this.di1geid || this.di4geid == this.di2geid || this.di4geid == this.di3geid){
			let suijixianshi7 = Math.floor(Math.random() * 120);
			this.di4geid = this.shipubiao[suijixianshi7].id;
		}
		for(var h = 0;h<this.shipubiao.length;h++){
			if(this.shipubiao[h].id == this.di4geid){
				this.zhuyaojiemian.tupianres3.source = this.shipubiao[h].id + "_png";
				this.zhuyaojiemian.caizu3.touchEnabled = true;
				this.zhuyaojiemian.caizu3.addEventListener(egret.TouchEvent.TOUCH_TAP,this.dianji4geanniu,this);
				break;
			}
		}
		


	}

	public zhengquewei2(caideid){
		for(var i = 0;i<this.shipubiao.length;i++){
			if(this.shipubiao[i].id == caideid){
				this.di2geid = this.shipubiao[i].id;
				this.zhuyaojiemian.tupianres0.source = this.shipubiao[i].id + "_png";
				this.zhuyaojiemian.caizu0.touchEnabled = true;
				this.zhuyaojiemian.caizu0.addEventListener(egret.TouchEvent.TOUCH_TAP,this.dianji2geanniu,this);
				break;
			}
		}
		let suijixianshi2 = Math.floor(Math.random() * 120);
		this.di1geid = this.shipubiao[suijixianshi2].id;
		while(this.di1geid == this.di2geid){
			let suijixianshi3 = Math.floor(Math.random() * 120);
			this.di1geid = this.shipubiao[suijixianshi3].id;
		}
		for(var h = 0;h<this.shipubiao.length;h++){
			if(this.shipubiao[h].id == this.di1geid){
				this.zhuyaojiemian.tupianres1.source = this.shipubiao[h].id + "_png";
				this.zhuyaojiemian.caizu1.touchEnabled = true;
				this.zhuyaojiemian.caizu1.addEventListener(egret.TouchEvent.TOUCH_TAP,this.dianji1geanniu,this);
				break;
			}
		}
		let suijixianshi4 = Math.floor(Math.random() * 120);
		this.di3geid = this.shipubiao[suijixianshi4].id;
		while(this.di3geid == this.di1geid || this.di3geid == this.di2geid){
			let suijixianshi5 = Math.floor(Math.random() * 120);
			this.di3geid = this.shipubiao[suijixianshi5].id;
		}
		for(var h = 0;h<this.shipubiao.length;h++){
			if(this.shipubiao[h].id == this.di3geid){
				this.zhuyaojiemian.tupianres2.source = this.shipubiao[h].id + "_png";
				this.zhuyaojiemian.caizu2.touchEnabled = true;
				this.zhuyaojiemian.caizu2.addEventListener(egret.TouchEvent.TOUCH_TAP,this.dianji3geanniu,this);
				break;
			}
		}
		let suijixianshi6 = Math.floor(Math.random() * 120);
		this.di4geid = this.shipubiao[suijixianshi6].id;
		while(this.di4geid == this.di1geid || this.di4geid == this.di2geid || this.di4geid == this.di3geid){
			let suijixianshi7 = Math.floor(Math.random() * 120);
			this.di4geid = this.shipubiao[suijixianshi7].id;
		}
		for(var h = 0;h<this.shipubiao.length;h++){
			if(this.shipubiao[h].id == this.di4geid){
				this.zhuyaojiemian.tupianres3.source = this.shipubiao[h].id + "_png";
				this.zhuyaojiemian.caizu3.touchEnabled = true;
				this.zhuyaojiemian.caizu3.addEventListener(egret.TouchEvent.TOUCH_TAP,this.dianji4geanniu,this);
				break;
			}
		}
		


	}

	public zhengquewei3(caideid){
		for(var i = 0;i<this.shipubiao.length;i++){
			if(this.shipubiao[i].id == caideid){
				this.di3geid = this.shipubiao[i].id;
				this.zhuyaojiemian.tupianres2.source = this.shipubiao[i].id + "_png";
				this.zhuyaojiemian.caizu2.touchEnabled = true;
				this.zhuyaojiemian.caizu2.addEventListener(egret.TouchEvent.TOUCH_TAP,this.dianji3geanniu,this);
				break;
			}
		}
		let suijixianshi2 = Math.floor(Math.random() * 120);
		this.di1geid = this.shipubiao[suijixianshi2].id;
		while(this.di1geid == this.di3geid){
			let suijixianshi3 = Math.floor(Math.random() * 120);
			this.di1geid = this.shipubiao[suijixianshi3].id;
		}
		for(var h = 0;h<this.shipubiao.length;h++){
			if(this.shipubiao[h].id == this.di1geid){
				this.zhuyaojiemian.tupianres1.source = this.shipubiao[h].id + "_png";
				this.zhuyaojiemian.caizu1.touchEnabled = true;
				this.zhuyaojiemian.caizu1.addEventListener(egret.TouchEvent.TOUCH_TAP,this.dianji1geanniu,this);
				break;
			}
		}
		let suijixianshi4 = Math.floor(Math.random() * 120);
		this.di2geid = this.shipubiao[suijixianshi4].id;
		while(this.di2geid == this.di1geid || this.di2geid == this.di3geid){
			let suijixianshi5 = Math.floor(Math.random() * 120);
			this.di2geid = this.shipubiao[suijixianshi5].id;
		}
		for(var h = 0;h<this.shipubiao.length;h++){
			if(this.shipubiao[h].id == this.di2geid){
				this.zhuyaojiemian.tupianres0.source = this.shipubiao[h].id + "_png";
				this.zhuyaojiemian.caizu0.touchEnabled = true;
				this.zhuyaojiemian.caizu0.addEventListener(egret.TouchEvent.TOUCH_TAP,this.dianji2geanniu,this);
				break;
			}
		}
		let suijixianshi6 = Math.floor(Math.random() * 120);
		this.di4geid = this.shipubiao[suijixianshi6].id;
		while(this.di4geid == this.di1geid || this.di4geid == this.di2geid || this.di4geid == this.di3geid){
			let suijixianshi7 = Math.floor(Math.random() * 120);
			this.di4geid = this.shipubiao[suijixianshi7].id;
		}
		for(var h = 0;h<this.shipubiao.length;h++){
			if(this.shipubiao[h].id == this.di4geid){
				this.zhuyaojiemian.tupianres3.source = this.shipubiao[h].id + "_png";
				this.zhuyaojiemian.caizu3.touchEnabled = true;
				this.zhuyaojiemian.caizu3.addEventListener(egret.TouchEvent.TOUCH_TAP,this.dianji4geanniu,this);
				break;
			}
		}
		


	}

	public zhengquewei4(caideid){
		for(var i = 0;i<this.shipubiao.length;i++){
			if(this.shipubiao[i].id == caideid){
				this.di4geid = this.shipubiao[i].id;
				this.zhuyaojiemian.tupianres3.source = this.shipubiao[i].id + "_png";
				this.zhuyaojiemian.caizu3.touchEnabled = true;
				this.zhuyaojiemian.caizu3.addEventListener(egret.TouchEvent.TOUCH_TAP,this.dianji4geanniu,this);
				break;
			}
		}
		let suijixianshi2 = Math.floor(Math.random() * 120);
		this.di1geid = this.shipubiao[suijixianshi2].id;
		while(this.di1geid == this.di4geid){
			let suijixianshi3 = Math.floor(Math.random() * 120);
			this.di1geid = this.shipubiao[suijixianshi3].id;
		}
		for(var h = 0;h<this.shipubiao.length;h++){
			if(this.shipubiao[h].id == this.di1geid){
				this.zhuyaojiemian.tupianres1.source = this.shipubiao[h].id + "_png";
				this.zhuyaojiemian.caizu1.touchEnabled = true;
				this.zhuyaojiemian.caizu1.addEventListener(egret.TouchEvent.TOUCH_TAP,this.dianji1geanniu,this);
				break;
			}
		}
		let suijixianshi4 = Math.floor(Math.random() * 120);
		this.di2geid = this.shipubiao[suijixianshi4].id;
		while(this.di2geid == this.di1geid || this.di2geid == this.di3geid){
			let suijixianshi5 = Math.floor(Math.random() * 120);
			this.di2geid = this.shipubiao[suijixianshi5].id;
		}
		for(var h = 0;h<this.shipubiao.length;h++){
			if(this.shipubiao[h].id == this.di2geid){
				this.zhuyaojiemian.tupianres0.source = this.shipubiao[h].id + "_png";
				this.zhuyaojiemian.caizu0.touchEnabled = true;
				this.zhuyaojiemian.caizu0.addEventListener(egret.TouchEvent.TOUCH_TAP,this.dianji2geanniu,this);
				break;
			}
		}
		let suijixianshi6 = Math.floor(Math.random() * 120);
		this.di3geid = this.shipubiao[suijixianshi6].id;
		while(this.di3geid == this.di1geid || this.di3geid == this.di2geid || this.di3geid == this.di4geid){
			let suijixianshi7 = Math.floor(Math.random() * 120);
			this.di3geid = this.shipubiao[suijixianshi7].id;
		}
		for(var h = 0;h<this.shipubiao.length;h++){
			if(this.shipubiao[h].id == this.di3geid){
				this.zhuyaojiemian.tupianres2.source = this.shipubiao[h].id + "_png";
				this.zhuyaojiemian.caizu2.touchEnabled = true;
				this.zhuyaojiemian.caizu2.addEventListener(egret.TouchEvent.TOUCH_TAP,this.dianji3geanniu,this);
				break;
			}
		}
		


	}

	public dianji1geanniu(){
		this.zhuyaojiemian.caizu0.touchEnabled = false;
		this.zhuyaojiemian.caizu1.touchEnabled = false;
		this.zhuyaojiemian.caizu2.touchEnabled = false;
		this.zhuyaojiemian.caizu3.touchEnabled = false;
		this.zhuyaojiemian.caizu1.removeEventListener(egret.TouchEvent.TOUCH_TAP,this.dianji1geanniu,this);
		this.zhuyaojiemian.caizu0.removeEventListener(egret.TouchEvent.TOUCH_TAP,this.dianji2geanniu,this);
		this.zhuyaojiemian.caizu2.removeEventListener(egret.TouchEvent.TOUCH_TAP,this.dianji3geanniu,this);
		this.zhuyaojiemian.caizu3.removeEventListener(egret.TouchEvent.TOUCH_TAP,this.dianji4geanniu,this);
		egret.Tween.get(this.zhuyaojiemian.caizu1).to({scaleX:1.1,scaleY:1.1},500).call(()=>{
			egret.Tween.get(this.zhuyaojiemian.caizu1).to({scaleX:1,scaleY:1},500).call(()=>{
				if(this.zhengquexuanze == 1){
					this.zhengquedexuanze();
				}else{
					this.cuowudexuanze();
				}
			})
		})
	}

	public dianji2geanniu(){
		this.zhuyaojiemian.caizu0.touchEnabled = false;
		this.zhuyaojiemian.caizu1.touchEnabled = false;
		this.zhuyaojiemian.caizu2.touchEnabled = false;
		this.zhuyaojiemian.caizu3.touchEnabled = false;
		this.zhuyaojiemian.caizu1.removeEventListener(egret.TouchEvent.TOUCH_TAP,this.dianji1geanniu,this);
		this.zhuyaojiemian.caizu0.removeEventListener(egret.TouchEvent.TOUCH_TAP,this.dianji2geanniu,this);
		this.zhuyaojiemian.caizu2.removeEventListener(egret.TouchEvent.TOUCH_TAP,this.dianji3geanniu,this);
		this.zhuyaojiemian.caizu3.removeEventListener(egret.TouchEvent.TOUCH_TAP,this.dianji4geanniu,this);
		egret.Tween.get(this.zhuyaojiemian.caizu0).to({scaleX:1.1,scaleY:1.1},500).call(()=>{
			egret.Tween.get(this.zhuyaojiemian.caizu0).to({scaleX:1,scaleY:1},500).call(()=>{
				if(this.zhengquexuanze == 2){
					this.zhengquedexuanze();
				}else{
					this.cuowudexuanze();
				}
			})
		})
	}

	public dianji3geanniu(){
		this.zhuyaojiemian.caizu0.touchEnabled = false;
		this.zhuyaojiemian.caizu1.touchEnabled = false;
		this.zhuyaojiemian.caizu2.touchEnabled = false;
		this.zhuyaojiemian.caizu3.touchEnabled = false;
		this.zhuyaojiemian.caizu1.removeEventListener(egret.TouchEvent.TOUCH_TAP,this.dianji1geanniu,this);
		this.zhuyaojiemian.caizu0.removeEventListener(egret.TouchEvent.TOUCH_TAP,this.dianji2geanniu,this);
		this.zhuyaojiemian.caizu2.removeEventListener(egret.TouchEvent.TOUCH_TAP,this.dianji3geanniu,this);
		this.zhuyaojiemian.caizu3.removeEventListener(egret.TouchEvent.TOUCH_TAP,this.dianji4geanniu,this);
		egret.Tween.get(this.zhuyaojiemian.caizu2).to({scaleX:1.1,scaleY:1.1},500).call(()=>{
			egret.Tween.get(this.zhuyaojiemian.caizu2).to({scaleX:1,scaleY:1},500).call(()=>{
				if(this.zhengquexuanze == 3){
					this.zhengquedexuanze();
				}else{
					this.cuowudexuanze();
				}
			})
		})
	}

	public dianji4geanniu(){
		this.zhuyaojiemian.caizu0.touchEnabled = false;
		this.zhuyaojiemian.caizu1.touchEnabled = false;
		this.zhuyaojiemian.caizu2.touchEnabled = false;
		this.zhuyaojiemian.caizu3.touchEnabled = false;
		this.zhuyaojiemian.caizu1.removeEventListener(egret.TouchEvent.TOUCH_TAP,this.dianji1geanniu,this);
		this.zhuyaojiemian.caizu0.removeEventListener(egret.TouchEvent.TOUCH_TAP,this.dianji2geanniu,this);
		this.zhuyaojiemian.caizu2.removeEventListener(egret.TouchEvent.TOUCH_TAP,this.dianji3geanniu,this);
		this.zhuyaojiemian.caizu3.removeEventListener(egret.TouchEvent.TOUCH_TAP,this.dianji4geanniu,this);
		egret.Tween.get(this.zhuyaojiemian.caizu3).to({scaleX:1.1,scaleY:1.1},500).call(()=>{
			egret.Tween.get(this.zhuyaojiemian.caizu3).to({scaleX:1,scaleY:1},500).call(()=>{
				if(this.zhengquexuanze == 4){
					this.zhengquedexuanze();
				}else{
					this.cuowudexuanze();
				}
			})
		})
	}

	public zhengquedexuanze(){
		this.zhuyaojiemian.shouhuowenzi.text = "对喽，老板手脚挺麻利的嘛！";
		let tishiduihua = new Waimaiduihuakuang();
		Gameguanli.Kongzhitai().dingbuui.addChild(tishiduihua);
		tishiduihua.x = this.zhuyaojiemian.width / 2 - tishiduihua.width / 2;
		tishiduihua.y = this.zhuyaojiemian.height / 11 * 6;
		tishiduihua.dikuangbj.source = "img_zhengqueduihuakuang_png";
		tishiduihua.shuohuawenzi.text = "对喽，老板手脚挺麻利的嘛！我去送货啦！";
		egret.Tween.get(tishiduihua).to({y:this.zhuyaojiemian.height / 11 * 4},2000).wait(1000).call(()=>{
			Gameguanli.Kongzhitai().dingbuui.removeChild(tishiduihua);
			for(var i = 0;i<this.shipubiao.length;i++){
				if(this.shipubiao[i].id == this.xuqiucai){
					Weblianjie.fasongshuju("code:085","{" + '"kouchuleixing"' +":"+ '"0"' +","
					+ '"kouchushuliang"' +":"+ '"0"' +"," 
					+ '"leixing"' +":"+ '"1"' +","
					+ '"shuliang"' +":"+ '"' + this.shipubiao[i].foodPrice + '"' +","
					+ '"beishu"' +":"+ '"1"' +","
					+ '"uid"' + ":"+ '"' + Gerenshuxing.uid + '"' + "}");
					break;
				}
			}
			this.zhuyaojiemian.img_jiemiandabeijing.source = "img_jiemiandabeijing1_png";
			this.zhuyaojiemian.qipaowenzizu.alpha = 0;
			this.zhuyaojiemian.dibuzu.alpha = 0;
			egret.Tween.get(this.motuojiemian).to({x:0 - this.zhuyaojiemian.width,scaleX:0.5,scaleY:0.5},2000).call(()=>{
				Gameguanli.Kongzhitai().dingbuui.removeChild(this.zhuyaojiemian);
			})
		})
	}

	public cuowudexuanze(){
		let tishiduihua = new Waimaiduihuakuang();
		Gameguanli.Kongzhitai().dingbuui.addChild(tishiduihua);
		tishiduihua.x = this.zhuyaojiemian.width / 2 - tishiduihua.width / 2;
		tishiduihua.y = this.zhuyaojiemian.height / 11 * 6;
		tishiduihua.dikuangbj.source = "img_cuowuduihuakuang_png";
		for(var i = 0;i<this.shipubiao.length;i++){
			if(this.shipubiao[i].id == this.xuqiucai){
				this.zhuyaojiemian.shouhuowenzi.text = "不对不对，顾客点的是[" + this.shipubiao[i].foodName + "],再好好看看！";
				tishiduihua.shuohuawenzi.text = "不对不对，顾客点的是[" + this.shipubiao[i].foodName + "],再好好看看！";
				break;
			}
		}
		egret.Tween.get(tishiduihua).to({y:this.zhuyaojiemian.height / 11 * 4},2000).wait(1000).call(()=>{
			Gameguanli.Kongzhitai().dingbuui.removeChild(tishiduihua);
			this.zhuyaojiemian.caizu0.touchEnabled = true;
			this.zhuyaojiemian.caizu1.touchEnabled = true;
			this.zhuyaojiemian.caizu2.touchEnabled = true;
			this.zhuyaojiemian.caizu3.touchEnabled = true;
			this.zhuyaojiemian.caizu1.addEventListener(egret.TouchEvent.TOUCH_TAP,this.dianji1geanniu,this);
			this.zhuyaojiemian.caizu0.addEventListener(egret.TouchEvent.TOUCH_TAP,this.dianji2geanniu,this);
			this.zhuyaojiemian.caizu2.addEventListener(egret.TouchEvent.TOUCH_TAP,this.dianji3geanniu,this);
			this.zhuyaojiemian.caizu3.addEventListener(egret.TouchEvent.TOUCH_TAP,this.dianji4geanniu,this);
		})
	}

	


}