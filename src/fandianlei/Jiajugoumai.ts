class Jiajugoumai extends eui.Component implements  eui.UIComponent {
	public guanlizu:eui.Group;
	public jiajuliebiaozu:eui.Group;
	public jiajufenlanzu0:eui.Group;
	public img_jiajudiban0:eui.Image;
	public jiajuicon0:eui.Image;
	public jiajumingzi0:eui.Label;
	public jiajujiage0:eui.Label;
	public jiajujiagetubiao0:eui.Image;
	public but_jiajushiyong0:eui.Button;
	public but_jiajugoumai0:eui.Button;
	public img_jiajuweihuode0:eui.Image;
	public jiajufenlanzu1:eui.Group;
	public img_jiajudiban1:eui.Image;
	public jiajuicon1:eui.Image;
	public jiajumingzi1:eui.Label;
	public jiajujiage1:eui.Label;
	public jiajujiagetubiao1:eui.Image;
	public but_jiajushiyong1:eui.Button;
	public but_jiajugoumai1:eui.Button;
	public img_jiajuweihuode1:eui.Image;
	public jiajufenlanzu2:eui.Group;
	public img_jiajudiban2:eui.Image;
	public jiajuicon2:eui.Image;
	public jiajumingzi2:eui.Label;
	public jiajujiage2:eui.Label;
	public jiajujiagetubiao2:eui.Image;
	public but_jiajushiyong2:eui.Button;
	public but_jiajugoumai2:eui.Button;
	public img_jiajuweihuode2:eui.Image;
	public jiajufenlanzu3:eui.Group;
	public img_jiajudiban3:eui.Image;
	public jiajuicon3:eui.Image;
	public jiajumingzi3:eui.Label;
	public jiajujiage3:eui.Label;
	public jiajujiagetubiao3:eui.Image;
	public but_jiajushiyong3:eui.Button;
	public but_jiajugoumai3:eui.Button;
	public img_jiajuweihuode3:eui.Image;
	public jiajubiaotizu:eui.Group;
	public but_kuaican:eui.Button;
	public but_huoguo:eui.Button;
	public but_xiaochi:eui.Button;
	public but_tiandian:eui.Button;

	public xiaochiyeshu:number;
	public huoguoyeshu:number;
	public xiaochaoyeshu:number;
	public dianxinyeshu:number;




	public panduanyeqian:number;


	public di1caiid:string;
	public di2caiid:string;
	public di3caiid:string;
	public di4caiid:string;

	public di1geid:string;
	public di2geid:string;
	public di3geid:string;
	public di4geid:string;

	public di1getupian:string;
	public di2getupian:string;
	public di3getupian:string;
	public di4getupian:string;


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
		this.chushihuaxianshiliebiao();
	}

	public chushihuaxianshiliebiao(){
		//点击装修界面的第一个坑的使用时触发
		this.but_jiajushiyong0.addEventListener(egret.TouchEvent.TOUCH_TAP,this.dianjidi1geshiyong,this);
		//点击装修界面的第2个坑的使用时触发
		this.but_jiajushiyong1.addEventListener(egret.TouchEvent.TOUCH_TAP,this.dianjidi2geshiyong,this);
		//点击装修界面的第3个坑的使用时触发
		this.but_jiajushiyong2.addEventListener(egret.TouchEvent.TOUCH_TAP,this.dianjidi3geshiyong,this);
		//点击装修界面的第4个坑的使用时触发
		this.but_jiajushiyong3.addEventListener(egret.TouchEvent.TOUCH_TAP,this.dianjidi4geshiyong,this);
		//点击装修界面的第一个坑的解锁时触发
		this.but_jiajugoumai0.addEventListener(egret.TouchEvent.TOUCH_TAP,this.dianjidi1gejiesuo,this);
		//点击装修界面的第2个坑的解锁时触发
		this.but_jiajugoumai1.addEventListener(egret.TouchEvent.TOUCH_TAP,this.dianjidi2gejiesuo,this);
		//点击装修界面的第3个坑的解锁时触发
		this.but_jiajugoumai2.addEventListener(egret.TouchEvent.TOUCH_TAP,this.dianjidi3gejiesuo,this);
		//点击装修界面的第4个坑的解锁时触发
		this.but_jiajugoumai3.addEventListener(egret.TouchEvent.TOUCH_TAP,this.dianjidi4gejiesuo,this);
	}

	protected dianjidi1geshiyong(){
		Gamesound.Soundkongzhi().anniuyinxiao();
		Weblianjie.fasongshuju("code:004","{" + '"jiajuid"' +":"+ '"' + this.di1geid + '"' +"," + '"uid"' + ":"+ '"' + Gerenshuxing.uid + '"' + "}");
		switch(this.panduanyeqian){
			case 1:
			Gameguanli.Kongzhitai().zhujiemian.img_jiaju_xiaochao.source = this.di1getupian;
			this.but_jiajushiyong0.enabled = false;
			this.but_jiajushiyong1.enabled = true;
			this.but_jiajushiyong2.enabled = true;
			this.but_jiajushiyong3.enabled = true;
			break;
			case 2:
			Gameguanli.Kongzhitai().zhujiemian.img_jiaju_huoguo.source = this.di1getupian;
			this.but_jiajushiyong0.enabled = false;
			this.but_jiajushiyong1.enabled = true;
			this.but_jiajushiyong2.enabled = true;
			this.but_jiajushiyong3.enabled = true;
			break;
			case 3:
			Gameguanli.Kongzhitai().zhujiemian.img_jiaju_xiaochi.source = this.di1getupian;
			this.but_jiajushiyong0.enabled = false;
			this.but_jiajushiyong1.enabled = true;
			this.but_jiajushiyong2.enabled = true;
			this.but_jiajushiyong3.enabled = true;
			break;
			case 4:
			Gameguanli.Kongzhitai().zhujiemian.img_jiaju_dianxin.source = this.di1getupian;
			this.but_jiajushiyong0.enabled = false;
			this.but_jiajushiyong1.enabled = true;
			this.but_jiajushiyong2.enabled = true;
			this.but_jiajushiyong3.enabled = true;
			break;
		}
	}

	protected dianjidi2geshiyong(){
		Gamesound.Soundkongzhi().anniuyinxiao();
		Weblianjie.fasongshuju("code:004","{" + '"jiajuid"' +":"+ '"' + this.di2geid + '"' +"," + '"uid"' + ":"+ '"' + Gerenshuxing.uid + '"' + "}");
		switch(this.panduanyeqian){
			case 1:
			Gameguanli.Kongzhitai().zhujiemian.img_jiaju_xiaochao.source = this.di2getupian;
			this.but_jiajushiyong1.enabled = false;
			this.but_jiajushiyong0.enabled = true;
			this.but_jiajushiyong2.enabled = true;
			this.but_jiajushiyong3.enabled = true;
			break;
			case 2:
			Gameguanli.Kongzhitai().zhujiemian.img_jiaju_huoguo.source = this.di2getupian;
			this.but_jiajushiyong1.enabled = false;
			this.but_jiajushiyong0.enabled = true;
			this.but_jiajushiyong2.enabled = true;
			this.but_jiajushiyong3.enabled = true;
			break;
			case 3:
			Gameguanli.Kongzhitai().zhujiemian.img_jiaju_xiaochi.source = this.di2getupian;
			this.but_jiajushiyong1.enabled = false;
			this.but_jiajushiyong0.enabled = true;
			this.but_jiajushiyong2.enabled = true;
			this.but_jiajushiyong3.enabled = true;
			break;
			case 4:
			Gameguanli.Kongzhitai().zhujiemian.img_jiaju_dianxin.source = this.di2getupian;
			this.but_jiajushiyong1.enabled = false;
			this.but_jiajushiyong0.enabled = true;
			this.but_jiajushiyong2.enabled = true;
			this.but_jiajushiyong3.enabled = true;
			break;
		}
	}

	protected dianjidi3geshiyong(){
		Gamesound.Soundkongzhi().anniuyinxiao();
		Weblianjie.fasongshuju("code:004","{" + '"jiajuid"' +":"+ '"' + this.di3geid + '"' +"," + '"uid"' + ":"+ '"' + Gerenshuxing.uid + '"' + "}");
		switch(this.panduanyeqian){
			case 1:
			Gameguanli.Kongzhitai().zhujiemian.img_jiaju_xiaochao.source = this.di3getupian;
			this.but_jiajushiyong2.enabled = false;
			this.but_jiajushiyong0.enabled = true;
			this.but_jiajushiyong1.enabled = true;
			this.but_jiajushiyong3.enabled = true;
			break;
			case 2:
			Gameguanli.Kongzhitai().zhujiemian.img_jiaju_huoguo.source = this.di3getupian;
			this.but_jiajushiyong2.enabled = false;
			this.but_jiajushiyong0.enabled = true;
			this.but_jiajushiyong1.enabled = true;
			this.but_jiajushiyong3.enabled = true;
			break;
			case 3:
			Gameguanli.Kongzhitai().zhujiemian.img_jiaju_xiaochi.source = this.di3getupian;
			this.but_jiajushiyong2.enabled = false;
			this.but_jiajushiyong0.enabled = true;
			this.but_jiajushiyong1.enabled = true;
			this.but_jiajushiyong3.enabled = true;
			break;
			case 4:
			Gameguanli.Kongzhitai().zhujiemian.img_jiaju_dianxin.source = this.di3getupian;
			this.but_jiajushiyong2.enabled = false;
			this.but_jiajushiyong0.enabled = true;
			this.but_jiajushiyong1.enabled = true;
			this.but_jiajushiyong3.enabled = true;
			break;
		}
	}

	protected dianjidi4geshiyong(){
		Gamesound.Soundkongzhi().anniuyinxiao();
		Weblianjie.fasongshuju("code:004","{" + '"jiajuid"' +":"+ '"' + this.di4geid + '"' +"," + '"uid"' + ":"+ '"' + Gerenshuxing.uid + '"' + "}");
		switch(this.panduanyeqian){
			case 1:
			Gameguanli.Kongzhitai().zhujiemian.img_jiaju_xiaochao.source = this.di4getupian;
			this.but_jiajushiyong3.enabled = false;
			this.but_jiajushiyong0.enabled = true;
			this.but_jiajushiyong1.enabled = true;
			this.but_jiajushiyong2.enabled = true;
			break;
			case 2:
			Gameguanli.Kongzhitai().zhujiemian.img_jiaju_huoguo.source = this.di4getupian;
			this.but_jiajushiyong3.enabled = false;
			this.but_jiajushiyong0.enabled = true;
			this.but_jiajushiyong1.enabled = true;
			this.but_jiajushiyong2.enabled = true;
			break;
			case 3:
			Gameguanli.Kongzhitai().zhujiemian.img_jiaju_xiaochi.source = this.di4getupian;
			this.but_jiajushiyong3.enabled = false;
			this.but_jiajushiyong0.enabled = true;
			this.but_jiajushiyong1.enabled = true;
			this.but_jiajushiyong2.enabled = true;
			break;
			case 4:
			Gameguanli.Kongzhitai().zhujiemian.img_jiaju_dianxin.source = this.di4getupian;
			this.but_jiajushiyong3.enabled = false;
			this.but_jiajushiyong0.enabled = true;
			this.but_jiajushiyong1.enabled = true;
			this.but_jiajushiyong2.enabled = true;
			break;
		}
	}


	protected dianjidi1gejiesuo(){
		Gamesound.Soundkongzhi().anniuyinxiao();
		Weblianjie.fasongshuju("code:008","{" + '"jiajuid"' +":"+ '"' + this.di1geid + '"' +"," + '"uid"' + ":"+ '"' + Gerenshuxing.uid + '"' + "}");
	}

	protected dianjidi2gejiesuo(){
		Gamesound.Soundkongzhi().anniuyinxiao();
		Weblianjie.fasongshuju("code:008","{" + '"jiajuid"' +":"+ '"' + this.di2geid + '"' +"," + '"uid"' + ":"+ '"' + Gerenshuxing.uid + '"' + "}");
	}

	protected dianjidi3gejiesuo(){
		Gamesound.Soundkongzhi().anniuyinxiao();
		Weblianjie.fasongshuju("code:008","{" + '"jiajuid"' +":"+ '"' + this.di3geid + '"' +"," + '"uid"' + ":"+ '"' + Gerenshuxing.uid + '"' + "}");
	}

	protected dianjidi4gejiesuo(){
		Gamesound.Soundkongzhi().anniuyinxiao();
		Weblianjie.fasongshuju("code:008","{" + '"jiajuid"' +":"+ '"' + this.di4geid + '"' +"," + '"uid"' + ":"+ '"' + Gerenshuxing.uid + '"' + "}");
	}

	

	//修改饭店界面的家具的小吃区域显示内容和判断使用是否成功
	public  tongzhizhujiemain1(xiugaitubiao:string,id:string){
		this.di1getupian = xiugaitubiao;
		this.di1geid = id;
	}

	public  tongzhizhujiemain2(xiugaitubiao:string,id:string){
		this.di2getupian = xiugaitubiao;
		this.di2geid = id;
	}

	public  tongzhizhujiemain3(xiugaitubiao:string,id:string){
		this.di3getupian = xiugaitubiao;
		this.di3geid = id;
	}

	public  tongzhizhujiemain4(xiugaitubiao:string,id:string){
		this.di4getupian = xiugaitubiao;
		this.di4geid = id;
	}
	//判断每个显示格子的具体显示内容
	protected panduanxianshineirong (leixingxuhao:number,leixingdizhi:any,leixingxiabiao:any){
			if(leixingxuhao == 1){
//				console.log(leixingxuhao,leixingdizhi,leixingxiabiao);
				if(leixingdizhi[leixingxiabiao] !== undefined){
					if(leixingdizhi[leixingxiabiao].jiajuislock == 1){
						this.jiajuicon0.source = leixingdizhi[leixingxiabiao].imgname + "_png";
						this.jiajumingzi0.text = leixingdizhi[leixingxiabiao].jiajuName;
						this.jiajujiage0.text = "已获得";
						this.jiajujiage0.textColor = 0x3EE016;
						this.img_jiajudiban0.source = "img_jiajudiban_png";
						this.jiajujiagetubiao0.source = "img_qian_png";
						this.but_jiajushiyong0.alpha = 1;
						this.but_jiajushiyong0.enabled = true;
						this.but_jiajushiyong0.touchEnabled = true;
						this.but_jiajushiyong0.touchChildren = true;
						this.but_jiajugoumai0.alpha = 0;
						this.but_jiajugoumai0.enabled = false;
						this.but_jiajugoumai0.touchEnabled = false;
						this.but_jiajugoumai0.touchChildren = false;
						this.img_jiajuweihuode0.source = "";
						this.di1caiid = leixingdizhi[leixingxiabiao].imgname;
						this.tongzhizhujiemain1(leixingdizhi[leixingxiabiao].imgname + "_png",leixingdizhi[leixingxiabiao].id);
					}else if(leixingdizhi[leixingxiabiao].jiajuislock == 0){
						this.jiajuicon0.source = leixingdizhi[leixingxiabiao].imgname + "_png";
						this.jiajumingzi0.text = leixingdizhi[leixingxiabiao].jiajuName;
						this.jiajujiage0.text = "- " + leixingdizhi[leixingxiabiao].jiajuacrtivatePrice;
						this.jiajujiage0.textColor = 0xDB1515;
						this.img_jiajudiban0.source = "img_jiajudiban_png";
						this.jiajujiagetubiao0.source = "img_qian_png";
						this.but_jiajushiyong0.alpha = 0;
						this.but_jiajushiyong0.enabled = false;
						this.but_jiajushiyong0.touchEnabled = false;
						this.but_jiajushiyong0.touchChildren = false;
						this.but_jiajugoumai0.alpha = 1;
						this.but_jiajugoumai0.enabled = true;
						this.but_jiajugoumai0.touchEnabled = true;
						this.but_jiajugoumai0.touchChildren = true;
						this.img_jiajuweihuode0.source = "img_weihuode_png";
						this.di1caiid = leixingdizhi[leixingxiabiao].imgname;
						this.tongzhizhujiemain1(leixingdizhi[leixingxiabiao].imgname + "_png",leixingdizhi[leixingxiabiao].id);
					}else{
						this.jiajuicon0.source = leixingdizhi[leixingxiabiao].imgname + "_png";
						this.jiajumingzi0.text = leixingdizhi[leixingxiabiao].jiajuName;
						this.jiajujiage0.text = "特殊途径获取";
						this.jiajujiage0.textColor = 0x092BF7;
						this.img_jiajudiban0.source = "img_jiajudiban_png";
						this.jiajujiagetubiao0.source = "";
						this.but_jiajushiyong0.alpha = 0;
						this.but_jiajushiyong0.enabled = false;
						this.but_jiajugoumai0.alpha = 1;
						this.but_jiajugoumai0.enabled = false;
						this.but_jiajushiyong0.enabled = false;
						this.img_jiajuweihuode0.source = "img_weihuode_png";
						this.di1caiid = leixingdizhi[leixingxiabiao].imgname;
						this.tongzhizhujiemain1(leixingdizhi[leixingxiabiao].imgname + "_png",leixingdizhi[leixingxiabiao].id);
					}

				}else{
						this.jiajuicon0.source = "";
						this.jiajumingzi0.text = "";
						this.jiajujiage0.text = "";
						this.img_jiajudiban0.source = "";
						this.jiajujiagetubiao0.source = "";
						this.but_jiajushiyong0.alpha = 0;
						this.but_jiajushiyong0.enabled = false;
						this.img_jiajuweihuode0.source = "";
						this.but_jiajugoumai0.alpha = 0;
						this.but_jiajugoumai0.enabled = false;
				}
				
			}

			if(leixingxuhao == 2){
				if(leixingdizhi[leixingxiabiao] !== undefined){
					if(leixingdizhi[leixingxiabiao].jiajuislock == 1){
						this.jiajuicon1.source = leixingdizhi[leixingxiabiao].imgname + "_png";
						this.jiajumingzi1.text = leixingdizhi[leixingxiabiao].jiajuName;
						this.jiajujiage1.text = "已获得";
						this.jiajujiage1.textColor = 0x3EE016;
						this.img_jiajudiban1.source = "img_jiajudiban_png";
						this.jiajujiagetubiao1.source = "img_qian_png";
						this.but_jiajushiyong1.alpha = 1;
						this.but_jiajushiyong1.enabled = true;
						this.but_jiajushiyong1.touchEnabled = true;
						this.but_jiajushiyong1.touchChildren = true;
						this.but_jiajugoumai1.alpha = 0;
						this.but_jiajugoumai1.enabled = false;
						this.but_jiajugoumai1.touchEnabled = false;
						this.but_jiajugoumai1.touchChildren = false;
						this.img_jiajuweihuode1.source = "";
						this.di2caiid = leixingdizhi[leixingxiabiao].imgname;
						this.tongzhizhujiemain2(leixingdizhi[leixingxiabiao].imgname + "_png",leixingdizhi[leixingxiabiao].id);
					}else if(leixingdizhi[leixingxiabiao].jiajuislock == 0){
						this.jiajuicon1.source = leixingdizhi[leixingxiabiao].imgname + "_png";
						this.jiajumingzi1.text = leixingdizhi[leixingxiabiao].jiajuName;
						this.jiajujiage1.text = "- " + leixingdizhi[leixingxiabiao].jiajuacrtivatePrice;
						this.jiajujiage1.textColor = 0xDB1515;
						this.img_jiajudiban1.source = "img_jiajudiban_png";
						this.jiajujiagetubiao1.source = "img_qian_png";
						this.but_jiajushiyong1.alpha = 0;
						this.but_jiajushiyong1.enabled = false;
						this.but_jiajushiyong1.touchEnabled = false;
						this.but_jiajushiyong1.touchChildren = false;
						this.but_jiajugoumai1.alpha = 1;
						this.but_jiajugoumai1.enabled = true;
						this.but_jiajugoumai1.touchEnabled = true;
						this.but_jiajugoumai1.touchChildren = true;
						this.img_jiajuweihuode1.source = "img_weihuode_png";
						this.di2caiid = leixingdizhi[leixingxiabiao].imgname;
						this.tongzhizhujiemain2(leixingdizhi[leixingxiabiao].imgname + "_png",leixingdizhi[leixingxiabiao].id);
					}else{
						this.jiajuicon1.source = leixingdizhi[leixingxiabiao].imgname + "_png";
						this.jiajumingzi1.text = leixingdizhi[leixingxiabiao].jiajuName;
						this.jiajujiage1.text = "特殊途径获取";
						this.jiajujiage1.textColor = 0x092BF7;
						this.img_jiajudiban1.source = "img_jiajudiban_png";
						this.jiajujiagetubiao1.source = "";
						this.but_jiajushiyong1.alpha = 0;
						this.but_jiajushiyong1.enabled = false;
						this.but_jiajugoumai1.alpha = 1;
						this.but_jiajugoumai1.enabled = false;
						this.but_jiajushiyong1.enabled = false;
						this.img_jiajuweihuode1.source = "img_weihuode_png";
						this.di2caiid = leixingdizhi[leixingxiabiao].imgname;
						this.tongzhizhujiemain2(leixingdizhi[leixingxiabiao].imgname + "_png",leixingdizhi[leixingxiabiao].id);
					}

				}else{
						this.jiajuicon1.source = "";
						this.jiajumingzi1.text = "";
						this.jiajujiage1.text = "";
						this.img_jiajudiban1.source = "";
						this.jiajujiagetubiao1.source = "";
						this.but_jiajushiyong1.alpha = 0;
						this.but_jiajushiyong1.enabled = false;
						this.img_jiajuweihuode1.source = "";
						this.but_jiajugoumai1.alpha = 0;
						this.but_jiajugoumai1.enabled = false;
				}
				
			}

			if(leixingxuhao == 3){
				if(leixingdizhi[leixingxiabiao] !== undefined){
					if(leixingdizhi[leixingxiabiao].jiajuislock == 1){
						this.jiajuicon2.source = leixingdizhi[leixingxiabiao].imgname + "_png";
						this.jiajumingzi2.text = leixingdizhi[leixingxiabiao].jiajuName;
						this.jiajujiage2.text = "已获得";
						this.jiajujiage2.textColor = 0x3EE016;
						this.img_jiajudiban2.source = "img_jiajudiban_png";
						this.jiajujiagetubiao2.source = "img_qian_png";
						this.but_jiajushiyong2.alpha = 1;
						this.but_jiajushiyong2.enabled = true;
						this.but_jiajushiyong2.touchEnabled = true;
						this.but_jiajushiyong2.touchChildren = true;
						this.but_jiajugoumai2.alpha = 0;
						this.but_jiajugoumai2.enabled = false;
						this.but_jiajugoumai2.touchEnabled = false;
						this.but_jiajugoumai2.touchChildren = false;
						this.img_jiajuweihuode2.source = "";
						this.di3caiid = leixingdizhi[leixingxiabiao].imgname;
						this.tongzhizhujiemain3(leixingdizhi[leixingxiabiao].imgname + "_png",leixingdizhi[leixingxiabiao].id);
					}else if(leixingdizhi[leixingxiabiao].jiajuislock == 0){
						this.jiajuicon2.source = leixingdizhi[leixingxiabiao].imgname + "_png";
						this.jiajumingzi2.text = leixingdizhi[leixingxiabiao].jiajuName;
						this.jiajujiage2.text = "- " + leixingdizhi[leixingxiabiao].jiajuacrtivatePrice;
						this.jiajujiage2.textColor = 0xDB1515;
						this.img_jiajudiban2.source = "img_jiajudiban_png";
						this.jiajujiagetubiao2.source = "img_qian_png";
						this.but_jiajushiyong2.alpha = 0;
						this.but_jiajushiyong2.enabled = false;
						this.but_jiajushiyong2.touchEnabled = false;
						this.but_jiajushiyong2.touchChildren = false;
						this.but_jiajugoumai2.alpha = 1;
						this.but_jiajugoumai2.enabled = true;
						this.but_jiajugoumai2.touchEnabled = true;
						this.but_jiajugoumai2.touchChildren = true;
						this.img_jiajuweihuode2.source = "img_weihuode_png";
						this.di3caiid = leixingdizhi[leixingxiabiao].imgname;
						this.tongzhizhujiemain3(leixingdizhi[leixingxiabiao].imgname + "_png",leixingdizhi[leixingxiabiao].id);
					}else{
						this.jiajuicon2.source = leixingdizhi[leixingxiabiao].imgname + "_png";
						this.jiajumingzi2.text = leixingdizhi[leixingxiabiao].jiajuName;
						this.jiajujiage2.text = "特殊途径获取";
						this.jiajujiage2.textColor = 0x092BF7;
						this.img_jiajudiban2.source = "img_jiajudiban_png";
						this.jiajujiagetubiao2.source = "";
						this.but_jiajushiyong2.alpha = 0;
						this.but_jiajushiyong2.enabled = false;
						this.but_jiajugoumai2.alpha = 1;
						this.but_jiajugoumai2.enabled = false;
						this.but_jiajushiyong2.enabled = false;
						this.img_jiajuweihuode2.source = "img_weihuode_png";
						this.di3caiid = leixingdizhi[leixingxiabiao].imgname;
						this.tongzhizhujiemain3(leixingdizhi[leixingxiabiao].imgname + "_png",leixingdizhi[leixingxiabiao].id);
					}

				}else{
						this.jiajuicon2.source = "";
						this.jiajumingzi2.text = "";
						this.jiajujiage2.text = "";
						this.img_jiajudiban2.source = "";
						this.jiajujiagetubiao2.source = "";
						this.but_jiajushiyong2.alpha = 0;
						this.but_jiajushiyong2.enabled = false;
						this.img_jiajuweihuode2.source = "";
						this.but_jiajugoumai2.alpha = 0;
						this.but_jiajugoumai2.enabled = false;
				}
				
			}

			if(leixingxuhao == 4){
				if(leixingdizhi[leixingxiabiao] !== undefined){
					if(leixingdizhi[leixingxiabiao].jiajuislock == 1){
						this.jiajuicon3.source = leixingdizhi[leixingxiabiao].imgname + "_png";
						this.jiajumingzi3.text = leixingdizhi[leixingxiabiao].jiajuName;
						this.jiajujiage3.text = "已获得";
						this.jiajujiage3.textColor = 0x3EE016;
						this.img_jiajudiban3.source = "img_jiajudiban_png";
						this.jiajujiagetubiao3.source = "img_qian_png";
						this.but_jiajushiyong3.alpha = 1;
						this.but_jiajushiyong3.enabled = true;
						this.but_jiajushiyong3.touchEnabled = true;
						this.but_jiajushiyong3.touchChildren = true;
						this.but_jiajugoumai3.alpha = 0;
						this.but_jiajugoumai3.enabled = false;
						this.but_jiajugoumai3.touchEnabled = false;
						this.but_jiajugoumai3.touchChildren = false;
						this.img_jiajuweihuode3.source = "";
						this.di4caiid = leixingdizhi[leixingxiabiao].imgname;
						this.tongzhizhujiemain4(leixingdizhi[leixingxiabiao].imgname + "_png",leixingdizhi[leixingxiabiao].id);
					}else if(leixingdizhi[leixingxiabiao].jiajuislock == 0){
						this.jiajuicon3.source = leixingdizhi[leixingxiabiao].imgname + "_png";
						this.jiajumingzi3.text = leixingdizhi[leixingxiabiao].jiajuName;
						this.jiajujiage3.text = "- " + leixingdizhi[leixingxiabiao].jiajuacrtivatePrice;
						this.jiajujiage3.textColor = 0xDB1515;
						this.img_jiajudiban3.source = "img_jiajudiban_png";
						this.jiajujiagetubiao3.source = "img_qian_png";
						this.but_jiajushiyong3.alpha = 0;
						this.but_jiajushiyong3.enabled = false;
						this.but_jiajushiyong3.touchEnabled = false;
						this.but_jiajushiyong3.touchChildren = false;
						this.but_jiajugoumai3.alpha = 1;
						this.but_jiajugoumai3.enabled = true;
						this.but_jiajugoumai3.touchEnabled = true;
						this.but_jiajugoumai3.touchChildren = true;
						this.img_jiajuweihuode3.source = "img_weihuode_png";
						this.di4caiid = leixingdizhi[leixingxiabiao].imgname;
						this.tongzhizhujiemain4(leixingdizhi[leixingxiabiao].imgname + "_png",leixingdizhi[leixingxiabiao].id);
					}else{
						this.jiajuicon3.source = leixingdizhi[leixingxiabiao].imgname + "_png";
						this.jiajumingzi3.text = leixingdizhi[leixingxiabiao].jiajuName;
						this.jiajujiage3.text = "特殊途径获取";
						this.jiajujiage3.textColor = 0x092BF7;
						this.img_jiajudiban3.source = "img_jiajudiban_png";
						this.jiajujiagetubiao3.source = "";
						this.but_jiajushiyong3.alpha = 0;
						this.but_jiajushiyong3.enabled = false;
						this.but_jiajugoumai3.alpha = 1;
						this.but_jiajugoumai3.enabled = false;
						this.but_jiajushiyong3.enabled = false;
						this.img_jiajuweihuode3.source = "img_weihuode_png";
						this.di4caiid = leixingdizhi[leixingxiabiao].imgname;
						this.tongzhizhujiemain4(leixingdizhi[leixingxiabiao].imgname + "_png",leixingdizhi[leixingxiabiao].id);
					}

				}else{
						this.jiajuicon3.source = "";
						this.jiajumingzi3.text = "";
						this.jiajujiage3.text = "";
						this.img_jiajudiban3.source = "";
						this.jiajujiagetubiao3.source = "";
						this.but_jiajushiyong3.alpha = 0;
						this.but_jiajushiyong3.enabled = false;
						this.img_jiajuweihuode3.source = "";
						this.but_jiajugoumai3.alpha = 0;
						this.but_jiajugoumai3.enabled = false;
				}
				
			}
	}

	//管理界面数据逻辑的处理
	public chulishujujiajujiegou(yeqian?:number,yeshu?:number){
		let guanlileixingleibiao:any = Gerenshuxing.jiajubiao;
//		console.log(guanlileixingleibiao);
//		console.log(this.dangqianyeqianshu);
//接收服务端数据后，处理家具信息
		for(var bi = 0;bi<guanlileixingleibiao.length;bi ++){
			for(var ki = 0;ki<Gerenshuxing.jiesuojiaju.length;ki ++){
				if(guanlileixingleibiao[bi].id == Gerenshuxing.jiesuojiaju[ki]){
					guanlileixingleibiao[bi].jiajuislock = 1;
					break;
				};
			}
		}
		if(yeqian){
			this.panduanyeqian = yeqian;
		}
		let xiaocaoquyuxianshi:any[] = [];
		let huoguoquyuxianshi:any[] = [];
		let xiaochiquyuxianshi:any[] = [];
		let dianxinquyuxianshi:any[] = [];
		let xiaocaoj:number = 0;
		let huoguoj:number = 0;
		let xiaochij:number = 0;
		let dianxinj:number = 0;
//遍历json表格，将所有菜品分类;
		for (var i:number = 0;i < guanlileixingleibiao.length;i ++ ){
			if(guanlileixingleibiao[i].jiajuType == 1){
				xiaocaoquyuxianshi[xiaocaoj] = guanlileixingleibiao[i];
				xiaocaoj ++;				
			}
			if(guanlileixingleibiao[i].jiajuType == 2){
				huoguoquyuxianshi[huoguoj] = guanlileixingleibiao[i];
				huoguoj ++;
			}
			if(guanlileixingleibiao[i].jiajuType == 3){
				xiaochiquyuxianshi[xiaochij] = guanlileixingleibiao[i];
				xiaochij ++;
			}
			if(guanlileixingleibiao[i].jiajuType == 4){
				dianxinquyuxianshi[dianxinj] = guanlileixingleibiao[i];
				dianxinj ++;
			}
		}
//		console.log(xiaocaoquyuxianshi.length)
//判断需要的页面长度	
		if(xiaocaoquyuxianshi.length % 4 > 1){
			this.xiaochaoyeshu = Math.floor(xiaocaoquyuxianshi.length / 4) + 1;
		}else{
			this.xiaochaoyeshu = xiaocaoquyuxianshi.length / 4;
		}

		if(huoguoquyuxianshi.length % 4 > 1){
 			this.huoguoyeshu = Math.floor(huoguoquyuxianshi.length / 4) + 1;
		}else{
			this.huoguoyeshu = huoguoquyuxianshi.length / 4;
		}

		if(xiaochiquyuxianshi.length % 4 > 1){
			this.xiaochiyeshu = Math.floor(xiaochiquyuxianshi.length / 4) + 1;
		}else{
			this.xiaochiyeshu = xiaochiquyuxianshi.length / 4;
		}

		if(dianxinquyuxianshi.length % 4 > 1){
			this.dianxinyeshu = Math.floor(dianxinquyuxianshi.length / 4) + 1;
		}else{
			this.dianxinyeshu = dianxinquyuxianshi.length / 4;
		}
//		console.log(this.neiRongZhanShi);

//判断每夜的显示内容
		if(yeqian == 1 && yeshu == 1){
			var k = 4;
			for (var i = k * yeshu - 4,j = 1;i< k * yeshu ;i++,j++){
				this.panduanxianshineirong(j,xiaocaoquyuxianshi,i);	
			}
		}

		if(yeqian == 1 && yeshu == 2){
			var k = 4;
			for (var i = k * yeshu - 4,j = 1;i< k * yeshu ;i++,j++){
				this.panduanxianshineirong(j,xiaocaoquyuxianshi,i);	
			}
		}

		if(yeqian == 1 && yeshu == 3){
			var k = 4;
			for (var i = k * yeshu - 4,j = 1;i< k * yeshu ;i++,j++){
				this.panduanxianshineirong(j,xiaocaoquyuxianshi,i);	
			}
		}

		if(yeqian == 1 && yeshu == 4){
			var k = 4;
			for (var i = k * yeshu - 4,j = 1;i< k * yeshu ;i++,j++){
				this.panduanxianshineirong(j,xiaocaoquyuxianshi,i);	
			}
		}

		if(yeqian == 1 && yeshu == 5){
			var k = 4;
			for (var i = k * yeshu - 4,j = 1;i< k * yeshu ;i++,j++){
				this.panduanxianshineirong(j,xiaocaoquyuxianshi,i);	
			}
		}

		if(yeqian == 1 && yeshu == 6){
			var k = 4;
			for (var i = k * yeshu - 4,j = 1;i< k * yeshu ;i++,j++){
				this.panduanxianshineirong(j,xiaocaoquyuxianshi,i);	
			}
		}

		if(yeqian == 1 && yeshu == 7){
			var k = 4;
			for (var i = k * yeshu - 4,j = 1;i< k * yeshu ;i++,j++){
				this.panduanxianshineirong(j,xiaocaoquyuxianshi,i);	
			}
		}

		if(yeqian == 1 && yeshu == 8){
			var k = 4;
			for (var i = k * yeshu - 4,j = 1;i< k * yeshu ;i++,j++){
				this.panduanxianshineirong(j,xiaocaoquyuxianshi,i);	
			}
		}

		if(yeqian == 1 && yeshu == 9){
			var k = 4;
			for (var i = k * yeshu - 4,j = 1;i< k * yeshu ;i++,j++){
				this.panduanxianshineirong(j,xiaocaoquyuxianshi,i);	
			}
		}

		if(yeqian == 1 && yeshu == 10){
			var k = 4;
			for (var i = k * yeshu - 4,j = 1;i< k * yeshu ;i++,j++){
				this.panduanxianshineirong(j,xiaocaoquyuxianshi,i);	
			}
		}

		if(yeqian == 2 && yeshu == 1){
			var k = 4;
			for (var i = k * yeshu - 4,j = 1;i< k * yeshu ;i++,j++){
				this.panduanxianshineirong(j,huoguoquyuxianshi,i);	
			}
		}

		if(yeqian == 2 && yeshu == 2){
			var k = 4;
			for (var i = k * yeshu - 4,j = 1;i< k * yeshu ;i++,j++){
				this.panduanxianshineirong(j,huoguoquyuxianshi,i);	
			}
		}

		if(yeqian == 2 && yeshu == 3){
			var k = 4;
			for (var i = k * yeshu - 4,j = 1;i< k * yeshu ;i++,j++){
				this.panduanxianshineirong(j,huoguoquyuxianshi,i);	
			}
		}

		if(yeqian == 2 && yeshu == 4){
			var k = 4;
			for (var i = k * yeshu - 4,j = 1;i< k * yeshu ;i++,j++){
				this.panduanxianshineirong(j,huoguoquyuxianshi,i);	
			}
		}

		if(yeqian == 2 && yeshu == 5){
			var k = 4;
			for (var i = k * yeshu - 4,j = 1;i< k * yeshu ;i++,j++){
				this.panduanxianshineirong(j,huoguoquyuxianshi,i);	
			}
		}

		if(yeqian == 2 && yeshu == 6){
			var k = 4;
			for (var i = k * yeshu - 4,j = 1;i< k * yeshu ;i++,j++){
				this.panduanxianshineirong(j,huoguoquyuxianshi,i);	
			}
		}

		if(yeqian == 2 && yeshu == 7){
			var k = 4;
			for (var i = k * yeshu - 4,j = 1;i< k * yeshu ;i++,j++){
				this.panduanxianshineirong(j,huoguoquyuxianshi,i);	
			}
		}

		if(yeqian == 2 && yeshu == 8){
			var k = 4;
			for (var i = k * yeshu - 4,j = 1;i< k * yeshu ;i++,j++){
				this.panduanxianshineirong(j,huoguoquyuxianshi,i);	
			}
		}

		if(yeqian == 2 && yeshu == 9){
			var k = 4;
			for (var i = k * yeshu - 4,j = 1;i< k * yeshu ;i++,j++){
				this.panduanxianshineirong(j,huoguoquyuxianshi,i);	
			}
		}

		if(yeqian == 2 && yeshu == 10){
			var k = 4;
			for (var i = k * yeshu - 4,j = 1;i< k * yeshu ;i++,j++){
				this.panduanxianshineirong(j,huoguoquyuxianshi,i);	
			}
		}

		if(yeqian == 3 && yeshu == 1){
			var k = 4;
			for (var i = k * yeshu - 4,j = 1;i< k * yeshu ;i++,j++){
				this.panduanxianshineirong(j,xiaochiquyuxianshi,i);	
			}
		}

		if(yeqian == 3 && yeshu == 2){
			var k = 4;
			for (var i = k * yeshu - 4,j = 1;i< k * yeshu ;i++,j++){
				this.panduanxianshineirong(j,xiaochiquyuxianshi,i);	
			}
		}

		if(yeqian == 3 && yeshu == 3){
			var k = 4;
			for (var i = k * yeshu - 4,j = 1;i< k * yeshu ;i++,j++){
				this.panduanxianshineirong(j,xiaochiquyuxianshi,i);	
			}
		}

		if(yeqian == 3 && yeshu == 4){
			var k = 4;
			for (var i = k * yeshu - 4,j = 1;i< k * yeshu ;i++,j++){
				this.panduanxianshineirong(j,xiaochiquyuxianshi,i);	
			}
		}

		if(yeqian == 3 && yeshu == 5){
			var k = 4;
			for (var i = k * yeshu - 4,j = 1;i< k * yeshu ;i++,j++){
				this.panduanxianshineirong(j,xiaochiquyuxianshi,i);	
			}
		}

		if(yeqian == 3 && yeshu == 6){
			var k = 4;
			for (var i = k * yeshu - 4,j = 1;i< k * yeshu ;i++,j++){
				this.panduanxianshineirong(j,xiaochiquyuxianshi,i);	
			}
		}

		if(yeqian == 3 && yeshu == 7){
			var k = 4;
			for (var i = k * yeshu - 4,j = 1;i< k * yeshu ;i++,j++){
				this.panduanxianshineirong(j,xiaochiquyuxianshi,i);	
			}
		}

		if(yeqian == 3 && yeshu == 8){
			var k = 4;
			for (var i = k * yeshu - 4,j = 1;i< k * yeshu ;i++,j++){
				this.panduanxianshineirong(j,xiaochiquyuxianshi,i);	
			}
		}

		if(yeqian == 3 && yeshu == 9){
			var k = 4;
			for (var i = k * yeshu - 4,j = 1;i< k * yeshu ;i++,j++){
				this.panduanxianshineirong(j,xiaochiquyuxianshi,i);	
			}
		}

		if(yeqian == 3 && yeshu == 10){
			var k = 4;
			for (var i = k * yeshu - 4,j = 1;i< k * yeshu ;i++,j++){
				this.panduanxianshineirong(j,xiaochiquyuxianshi,i);	
			}
		}

		if(yeqian == 4 && yeshu == 1){
			var k = 4;
			for (var i = k * yeshu - 4,j = 1;i< k * yeshu ;i++,j++){
				this.panduanxianshineirong(j,dianxinquyuxianshi,i);	
			}
		}

		if(yeqian == 4 && yeshu == 2){
			var k = 4;
			for (var i = k * yeshu - 4,j = 1;i< k * yeshu ;i++,j++){
				this.panduanxianshineirong(j,dianxinquyuxianshi,i);	
			}
		}

		if(yeqian == 4 && yeshu == 3){
			var k = 4;
			for (var i = k * yeshu - 4,j = 1;i< k * yeshu ;i++,j++){
				this.panduanxianshineirong(j,dianxinquyuxianshi,i);	
			}
		}

		if(yeqian == 4 && yeshu == 4){
			var k = 4;
			for (var i = k * yeshu - 4,j = 1;i< k * yeshu ;i++,j++){
				this.panduanxianshineirong(j,dianxinquyuxianshi,i);	
			}
		}

		if(yeqian == 4 && yeshu == 5){
			var k = 4;
			for (var i = k * yeshu - 4,j = 1;i< k * yeshu ;i++,j++){
				this.panduanxianshineirong(j,dianxinquyuxianshi,i);	
			}
		}

		if(yeqian == 4 && yeshu == 6){
			var k = 4;
			for (var i = k * yeshu - 4,j = 1;i< k * yeshu ;i++,j++){
				this.panduanxianshineirong(j,dianxinquyuxianshi,i);	
			}
		}

		if(yeqian == 4 && yeshu == 7){
			var k = 4;
			for (var i = k * yeshu - 4,j = 1;i< k * yeshu ;i++,j++){
				this.panduanxianshineirong(j,dianxinquyuxianshi,i);	
			}
		}

		if(yeqian == 4 && yeshu == 8){
			var k = 4;
			for (var i = k * yeshu - 4,j = 1;i< k * yeshu ;i++,j++){
				this.panduanxianshineirong(j,dianxinquyuxianshi,i);	
			}
		}

		if(yeqian == 4 && yeshu == 9){
			var k = 4;
			for (var i = k * yeshu - 4,j = 1;i< k * yeshu ;i++,j++){
				this.panduanxianshineirong(j,dianxinquyuxianshi,i);	
			}
		}

		if(yeqian == 4 && yeshu == 10){
			var k = 4;
			for (var i = k * yeshu - 4,j = 1;i< k * yeshu ;i++,j++){
				this.panduanxianshineirong(j,dianxinquyuxianshi,i);	
			}
		}

		
		
	}







	
}