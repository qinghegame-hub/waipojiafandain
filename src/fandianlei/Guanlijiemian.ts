class Guanlijiemian extends eui.Component implements  eui.UIComponent {
	public guanlizu:eui.Group;
	public img_heisezhezao0:eui.Image;
	public guanlizu0:eui.Group;
	public guanlikongjian:eui.Group;
	public img_guanlibeijing:eui.Image;
	public img_biaotiguanli:eui.Image;
	public but_zhuangxiu:eui.Button;
	public but_yuangong:eui.Button;
	public but_yinxiao:eui.Button;
	public but_danju:eui.Button;
	public but_guanbiguanli:eui.Button;
	public but_gaunliup:eui.Button;
	public but_guanlidown:eui.Button;
	public guanliyemianwenzi:eui.Label;

	public neiRongZhanShi:Jiajugoumai;

	public static dangqianyeqianshu:number = 1;
	public static dangqianyeshu:number = 1;
	public static dangqianleixing:number = 1;

	public yuanGongJieMian:Yuangongjiemian;
	public tuiguangchuandan:Tuiguangchuandan;
	public tuiguangdianshi:Tuiguangdianshi;
	public tuiguangpinglun:Tuiguangpinglun;
	public tuiguangdaiyan:Tuiguangdaiyan;
	public danjuJieMian:Danjujiemian;


	public constructor() {
		super();
		this.neiRongZhanShi = new Jiajugoumai();
		this.yuanGongJieMian = new Yuangongjiemian();
		this.tuiguangchuandan = new Tuiguangchuandan();
		this.tuiguangdianshi = new Tuiguangdianshi();
		this.tuiguangpinglun = new Tuiguangpinglun();
		this.tuiguangdaiyan = new Tuiguangdaiyan();
		this.danjuJieMian = new Danjujiemian();


	}

	protected partAdded(partName:string,instance:any):void
	{
		super.partAdded(partName,instance);
	}


	protected childrenCreated():void
	{
		super.childrenCreated();
		this.guanlijiemiandianjirukou();
	}

	protected guanlijiemiandianjirukou(){
		this.chushihuagaunli();
		//点击界面的关闭按钮时触发
		this.but_guanbiguanli.addEventListener(egret.TouchEvent.TOUCH_TAP,this.guanbianniu,this);
		//点击上翻页界面时触发
		this.but_gaunliup.addEventListener(egret.TouchEvent.TOUCH_TAP,this.dianjishangfanye,this);
		//点击下翻页界面时触发
		this.but_guanlidown.addEventListener(egret.TouchEvent.TOUCH_TAP,this.dianjixiafanye,this);
		//点击装修按钮时触发
		this.but_zhuangxiu.addEventListener(egret.TouchEvent.TOUCH_TAP,this.dianjizhuangxiu,this);
		//点击员工按钮时触发
		this.but_yuangong.addEventListener(egret.TouchEvent.TOUCH_TAP,this.dianjiyuangong,this);
		//点击营销按钮时触发
		this.but_yinxiao.addEventListener(egret.TouchEvent.TOUCH_TAP,this.dianjiyinxiao,this);
		//点击单据按钮时触发
		this.but_danju.addEventListener(egret.TouchEvent.TOUCH_TAP,this.dianjidanju,this);
	}

	

	


	public dianjishangfanye(){
		switch(Guanlijiemian.dangqianleixing){
			case 1:
				if(Guanlijiemian.dangqianyeshu > 1){
				Guanlijiemian.dangqianyeshu = Guanlijiemian.dangqianyeshu - 1;
				this.but_guanlidown.enabled = true;
				if(Guanlijiemian.dangqianyeshu <= 1){
					this.but_gaunliup.enabled = false;
				}
				this.neiRongZhanShi.chulishujujiajujiegou(Guanlijiemian.dangqianyeqianshu,Guanlijiemian.dangqianyeshu);
				this.fanyeyehaoshuaxin();
				}	
				break;
			case 2:
				if(Guanlijiemian.dangqianyeshu > 1){
					Guanlijiemian.dangqianyeshu = Guanlijiemian.dangqianyeshu - 1;
					this.but_guanlidown.enabled = true;
				if(Guanlijiemian.dangqianyeshu <= 1){
					this.but_gaunliup.enabled = false;
				}
				this.yuanGongJieMian.chulishujujiajujiegou(Guanlijiemian.dangqianyeqianshu,Guanlijiemian.dangqianyeshu);
				this.fanyeyehaoshuaxin();
				}
				break;
			case 3:
				if(Guanlijiemian.dangqianyeshu > 1){
					Guanlijiemian.dangqianyeshu = Guanlijiemian.dangqianyeshu - 1;
					this.but_guanlidown.enabled = true;
					if(Guanlijiemian.dangqianyeshu <= 1){
						this.but_gaunliup.enabled = false;
					}
					switch(Guanlijiemian.dangqianyeshu){
						case 1:
							this.yichujiajuneirong();
							this.addChild(this.tuiguangchuandan);
							this.tuiguangchuandan.chulishujuluoji(Guanlijiemian.dangqianyeqianshu,Guanlijiemian.dangqianyeshu);
							this.fanyeyehaoshuaxin();
							break;
						case 2:
							this.yichujiajuneirong();
							this.addChild(this.tuiguangdianshi);
							this.tuiguangdianshi.chulishujuluoji(Guanlijiemian.dangqianyeqianshu,Guanlijiemian.dangqianyeshu);
							this.fanyeyehaoshuaxin();
							break;
						case 3:
							this.yichujiajuneirong();
							this.addChild(this.tuiguangpinglun);
							this.tuiguangpinglun.chulishujuluoji(Guanlijiemian.dangqianyeqianshu,Guanlijiemian.dangqianyeshu);
							this.fanyeyehaoshuaxin();
							break;
						case 4:
							this.yichujiajuneirong();
							this.addChild(this.tuiguangdaiyan);
							this.tuiguangdaiyan.chulishujuluoji(Guanlijiemian.dangqianyeqianshu,Guanlijiemian.dangqianyeshu);
							this.fanyeyehaoshuaxin();
							break;
					}
				}
				break;
			case 4:
				if(Guanlijiemian.dangqianyeshu > 1){
					Guanlijiemian.dangqianyeshu = Guanlijiemian.dangqianyeshu - 1;
					this.but_guanlidown.enabled = true;
				if(Guanlijiemian.dangqianyeshu <= 1){
					this.but_gaunliup.enabled = false;
				}
				this.danjuJieMian.chulishujujiajujiegou(Guanlijiemian.dangqianyeqianshu,Guanlijiemian.dangqianyeshu);
				this.fanyeyehaoshuaxin();
				}
				break;
		}
	}

	public dianjixiafanye(){
		switch(Guanlijiemian.dangqianleixing){
			case 1:
				if(Guanlijiemian.dangqianyeqianshu == 1 && Guanlijiemian.dangqianyeshu < this.neiRongZhanShi.xiaochaoyeshu){
					Guanlijiemian.dangqianyeshu += 1;
					this.but_gaunliup.enabled = true;
					if(Guanlijiemian.dangqianyeqianshu == 1 && Guanlijiemian.dangqianyeshu >= this.neiRongZhanShi.xiaochaoyeshu){
						this.but_guanlidown.enabled = false;
					}
					this.neiRongZhanShi.chulishujujiajujiegou(Guanlijiemian.dangqianyeqianshu,Guanlijiemian.dangqianyeshu);
				}else if(Guanlijiemian.dangqianyeqianshu == 2 && Guanlijiemian.dangqianyeshu < this.neiRongZhanShi.huoguoyeshu){
					Guanlijiemian.dangqianyeshu += 1;
					this.but_gaunliup.enabled = true;
					if(Guanlijiemian.dangqianyeqianshu == 2 && Guanlijiemian.dangqianyeshu >= this.neiRongZhanShi.huoguoyeshu){
						this.but_guanlidown.enabled = false;
					}
					this.neiRongZhanShi.chulishujujiajujiegou(Guanlijiemian.dangqianyeqianshu,Guanlijiemian.dangqianyeshu);
				}else if(Guanlijiemian.dangqianyeqianshu == 3 && Guanlijiemian.dangqianyeshu < this.neiRongZhanShi.xiaochiyeshu){
					Guanlijiemian.dangqianyeshu += 1;
					this.but_gaunliup.enabled = true;
					if(Guanlijiemian.dangqianyeqianshu == 3 && Guanlijiemian.dangqianyeshu >= this.neiRongZhanShi.xiaochiyeshu){
						this.but_guanlidown.enabled = false;
					}
					this.neiRongZhanShi.chulishujujiajujiegou(Guanlijiemian.dangqianyeqianshu,Guanlijiemian.dangqianyeshu);
				}else if(Guanlijiemian.dangqianyeqianshu == 4 && Guanlijiemian.dangqianyeshu < this.neiRongZhanShi.dianxinyeshu){
					Guanlijiemian.dangqianyeshu += 1;
					this.but_gaunliup.enabled = true;
					if(Guanlijiemian.dangqianyeqianshu == 4 && Guanlijiemian.dangqianyeshu >= this.neiRongZhanShi.dianxinyeshu){
						this.but_guanlidown.enabled = false;
					}
					this.neiRongZhanShi.chulishujujiajujiegou(Guanlijiemian.dangqianyeqianshu,Guanlijiemian.dangqianyeshu);
				}
					this.fanyeyehaoshuaxin();
					break;
			case 2:
				if(Guanlijiemian.dangqianyeqianshu == 1 && Guanlijiemian.dangqianyeshu < this.yuanGongJieMian.yuangongyeshu){
					Guanlijiemian.dangqianyeshu += 1;
					this.but_gaunliup.enabled = true;
					if(Guanlijiemian.dangqianyeqianshu == 1 && Guanlijiemian.dangqianyeshu >= this.yuanGongJieMian.yuangongyeshu){
						this.but_guanlidown.enabled = false;
					}
					this.yuanGongJieMian.chulishujujiajujiegou(Guanlijiemian.dangqianyeqianshu,Guanlijiemian.dangqianyeshu);
				}
				this.fanyeyehaoshuaxin();
				break;
			case 3:
				if(Guanlijiemian.dangqianyeqianshu == 1 && Guanlijiemian.dangqianyeshu < 4 ){
					Guanlijiemian.dangqianyeshu += 1;
					this.but_gaunliup.enabled = true;
					if(Guanlijiemian.dangqianyeshu >= 4){
						this.but_guanlidown.enabled = false;
					};
					switch(Guanlijiemian.dangqianyeshu){
						case 1:
							this.yichujiajuneirong();
							this.addChild(this.tuiguangchuandan);
							this.tuiguangchuandan.chulishujuluoji(Guanlijiemian.dangqianyeqianshu,Guanlijiemian.dangqianyeshu);
							this.fanyeyehaoshuaxin();
							break;
						case 2:
							this.yichujiajuneirong();
							this.addChild(this.tuiguangdianshi);
							this.tuiguangdianshi.chulishujuluoji(Guanlijiemian.dangqianyeqianshu,Guanlijiemian.dangqianyeshu);
							this.fanyeyehaoshuaxin();
							break;
						case 3:
							this.yichujiajuneirong();
							this.addChild(this.tuiguangpinglun);
							this.tuiguangpinglun.chulishujuluoji(Guanlijiemian.dangqianyeqianshu,Guanlijiemian.dangqianyeshu);
							this.fanyeyehaoshuaxin();
							break;
						case 4:
							this.yichujiajuneirong();
							this.addChild(this.tuiguangdaiyan);
							this.tuiguangdaiyan.chulishujuluoji(Guanlijiemian.dangqianyeqianshu,Guanlijiemian.dangqianyeshu);
							this.fanyeyehaoshuaxin();
							break;
					}
				}
				break;
			case 4:
				if(Guanlijiemian.dangqianyeqianshu == 1 && Guanlijiemian.dangqianyeshu < this.danjuJieMian.danjuyeshu){
					Guanlijiemian.dangqianyeshu += 1;
					this.but_gaunliup.enabled = true;
					if(Guanlijiemian.dangqianyeqianshu == 1 && Guanlijiemian.dangqianyeshu >= this.danjuJieMian.danjuyeshu){
						this.but_guanlidown.enabled = false;
					}
					this.danjuJieMian.chulishujujiajujiegou(Guanlijiemian.dangqianyeqianshu,Guanlijiemian.dangqianyeshu);
				}
				this.fanyeyehaoshuaxin();
				break;
		}
	}

//处理翻页文字
	protected fanyeyehaoshuaxin(){
		switch(Guanlijiemian.dangqianleixing){
			case 1:
				switch(Guanlijiemian.dangqianyeqianshu){
					case 1:
					this.guanliyemianwenzi.text = "第 " + Guanlijiemian.dangqianyeshu + " / " + this.neiRongZhanShi.xiaochaoyeshu + " 页";
					break;
					case 2:
					this.guanliyemianwenzi.text = "第 " + Guanlijiemian.dangqianyeshu + " / " + this.neiRongZhanShi.huoguoyeshu + " 页";
					break;
					case 3:
					this.guanliyemianwenzi.text = "第 " + Guanlijiemian.dangqianyeshu + " / " + this.neiRongZhanShi.xiaochiyeshu + " 页";
					break;
					case 4:
					this.guanliyemianwenzi.text = "第 " + Guanlijiemian.dangqianyeshu + " / " + this.neiRongZhanShi.dianxinyeshu + " 页";
					break;
					default:
					this.guanliyemianwenzi.text = "第未知页";
				}	
				break;
			case 2:
				this.guanliyemianwenzi.text = "第 " + Guanlijiemian.dangqianyeshu + " / " + this.yuanGongJieMian.yuangongyeshu + " 页";
				break;
			case 3:
				this.guanliyemianwenzi.text = "第 " + Guanlijiemian.dangqianyeshu + " / " + "4" + " 页";
				break;
			case 4:
				this.guanliyemianwenzi.text = "第 " + Guanlijiemian.dangqianyeshu + " / " + this.danjuJieMian.danjuyeshu + " 页";
				break;

		}
		
	}

//关闭按钮处理
	protected guanbianniu(){
		Gameguanli.Kongzhitai().caipujiemian("guanli","guan");
	}


//初始化管理界面
	protected chushihuagaunli(){
		this.but_yuangong.enabled = true;
		this.but_yinxiao.enabled = true;
		this.but_danju.enabled = true;
		this.but_zhuangxiu.enabled = false;
		/*this.addChild(this.neiRongZhanShi);
		this.neiRongZhanShi.but_kuaican.enabled = false;
//		console.log(this.neiRongZhanShi.jiajuicon0.source);
		this.neiRongZhanShi.chulishujujiajujiegou(1,1);	
		Guanlijiemian.dangqianyeqianshu = 1;
		Guanlijiemian.dangqianyeshu = 1;
		Guanlijiemian.dangqianleixing = 1;
		this.but_guanlidown.enabled = true;	*/
		this.dianjizhuangxiu();
		this.fanyeyehaoshuaxin();
	}

//点击装修按钮时触发
	protected dianjizhuangxiu() {
		this.but_yuangong.enabled = true;
		this.but_yinxiao.enabled = true;
		this.but_danju.enabled = true;
		this.but_zhuangxiu.enabled = false;
		this.yichujiajuneirong();
		this.addChild(this.neiRongZhanShi);
		this.neiRongZhanShi.but_kuaican.enabled = false;
		this.neiRongZhanShi.but_huoguo.enabled = true;
		this.neiRongZhanShi.but_xiaochi.enabled =true;
		this.neiRongZhanShi.but_tiandian.enabled = true;
//		console.log(this.neiRongZhanShi.jiajuicon0.source);
		this.zhuangxiuxiaoyeqianguanli();
		this.neiRongZhanShi.chulishujujiajujiegou(1,1);	
		Guanlijiemian.dangqianyeqianshu = 1;
		Guanlijiemian.dangqianyeshu = 1;
		Guanlijiemian.dangqianleixing = 1;
		this.but_guanlidown.enabled = true;
		this.but_gaunliup.enabled = false;
		this.fanyeyehaoshuaxin();
	};

//装修界面的翻页处理逻辑
	protected zhuangxiuxiaoyeqianguanli(){
		//点击界面的小炒页签按钮时触发
		this.neiRongZhanShi.but_kuaican.addEventListener(egret.TouchEvent.TOUCH_TAP,this.dianjixiaocai,this);
		//点击界面的火锅页签按钮时触发
		this.neiRongZhanShi.but_huoguo.addEventListener(egret.TouchEvent.TOUCH_TAP,this.dianjihuoguo,this);
		//点击界面的小吃页签按钮时触发
		this.neiRongZhanShi.but_xiaochi.addEventListener(egret.TouchEvent.TOUCH_TAP,this.dianjixiaochi,this);
		//点击界面的点心页签按钮时触发
		this.neiRongZhanShi.but_tiandian.addEventListener(egret.TouchEvent.TOUCH_TAP,this.dianjidianxin,this);
	}

	protected dianjixiaocai(){
		//调用移除当前已显示界面内容；
		if(Gerenshuxing.jiesuoxiaochao == "1"){
			this.neiRongZhanShi.but_kuaican.enabled = false;
			this.neiRongZhanShi.but_huoguo.enabled = true;
			this.neiRongZhanShi.but_xiaochi.enabled = true;
			this.neiRongZhanShi.but_tiandian.enabled =true;
			this.neiRongZhanShi.chulishujujiajujiegou(1,1);
			Guanlijiemian.dangqianyeqianshu = 1;
			Guanlijiemian.dangqianyeshu = 1;
			Guanlijiemian.dangqianleixing = 1;
			this.but_gaunliup.enabled = false;
			this.but_guanlidown.enabled = true;
		}else{
			Gameguanli.Kongzhitai().cuowutishixinxi("小炒区域未解锁，无法查看装修内容！");
		}
	}

	protected dianjihuoguo(){
		//调用移除当前已显示界面内容；
		if(Gerenshuxing.jiesuohuoguo == "1"){
			this.neiRongZhanShi.but_kuaican.enabled = true;
			this.neiRongZhanShi.but_huoguo.enabled = false;
			this.neiRongZhanShi.but_xiaochi.enabled = true;
			this.neiRongZhanShi.but_tiandian.enabled =true;
			this.neiRongZhanShi.chulishujujiajujiegou(2,1);
			Guanlijiemian.dangqianyeqianshu = 2;
			Guanlijiemian.dangqianyeshu = 1;
			Guanlijiemian.dangqianleixing = 1;
			this.but_gaunliup.enabled = false;
			this.but_guanlidown.enabled = true;
		}else{
			Gameguanli.Kongzhitai().cuowutishixinxi("火锅区域未解锁，无法查看装修内容！");
		}
	}

	protected dianjixiaochi(){
		//调用移除当前已显示界面内容；
		if(Gerenshuxing.jiesuoxiaochi == "1"){
			this.neiRongZhanShi.but_kuaican.enabled = true;
			this.neiRongZhanShi.but_huoguo.enabled = true;
			this.neiRongZhanShi.but_xiaochi.enabled = false;
			this.neiRongZhanShi.but_tiandian.enabled =true;
			this.neiRongZhanShi.chulishujujiajujiegou(3,1);
			Guanlijiemian.dangqianyeqianshu = 3;
			Guanlijiemian.dangqianyeshu = 1;
			Guanlijiemian.dangqianleixing = 1;
			this.but_gaunliup.enabled = false;
			this.but_guanlidown.enabled = true;
		}else{
			Gameguanli.Kongzhitai().cuowutishixinxi("小吃区域未解锁，无法查看装修内容！");
		}
	}

	protected dianjidianxin(){
		//调用移除当前已显示界面内容；
		if(Gerenshuxing.jiesuozaocan == "1"){
			this.neiRongZhanShi.but_kuaican.enabled = true;
			this.neiRongZhanShi.but_huoguo.enabled = true;
			this.neiRongZhanShi.but_xiaochi.enabled = true;
			this.neiRongZhanShi.but_tiandian.enabled =false;
			this.neiRongZhanShi.chulishujujiajujiegou(4,1);
			Guanlijiemian.dangqianyeqianshu = 4;
			Guanlijiemian.dangqianyeshu = 1;
			Guanlijiemian.dangqianleixing = 1;
			this.but_gaunliup.enabled = false;
			this.but_guanlidown.enabled = true;
		}else{
			Gameguanli.Kongzhitai().cuowutishixinxi("早餐区域未解锁，无法查看装修内容！");
		}
	}

//点击员工按钮时触发
	protected dianjiyuangong(){
		this.but_yuangong.enabled = false;
		this.but_yinxiao.enabled = true;
		this.but_danju.enabled = true;
		this.but_zhuangxiu.enabled = true;
		this.yichujiajuneirong();
		this.addChild(this.yuanGongJieMian);
		this.yuanGongJieMian.chulishujujiajujiegou(1,1);	
		Guanlijiemian.dangqianyeqianshu = 1;
		Guanlijiemian.dangqianyeshu = 1;
		Guanlijiemian.dangqianleixing = 2;
		this.but_guanlidown.enabled = true;
		this.but_gaunliup.enabled = false;
		this.fanyeyehaoshuaxin();
	};

//点击营销按钮时触发
	protected dianjiyinxiao(){
		this.but_yuangong.enabled = true;
		this.but_yinxiao.enabled = false;
		this.but_danju.enabled = true;
		this.but_zhuangxiu.enabled = true;
		this.yichujiajuneirong();
		this.addChild(this.tuiguangchuandan);
		this.tuiguangchuandan.chulishujuluoji(0,0);	
		Guanlijiemian.dangqianyeqianshu = 1;
		Guanlijiemian.dangqianyeshu = 1;
		Guanlijiemian.dangqianleixing = 3;
		this.but_guanlidown.enabled = true;
		this.but_gaunliup.enabled = false;
		this.fanyeyehaoshuaxin();
	};

//点击单据按钮时触发
	protected dianjidanju(){
		this.but_yuangong.enabled = true;
		this.but_yinxiao.enabled = true;
		this.but_danju.enabled = false;
		this.but_zhuangxiu.enabled = true;
		this.yichujiajuneirong();
		this.addChild(this.danjuJieMian);
		this.danjuJieMian.chulishujujiajujiegou(1,1);
		Guanlijiemian.dangqianyeqianshu = 1;
		Guanlijiemian.dangqianyeshu = 1;
		Guanlijiemian.dangqianleixing = 4;
		this.but_guanlidown.enabled = true;
		this.but_gaunliup.enabled = false;
		this.fanyeyehaoshuaxin();
	};

//移除家具显示列表内容；
	public yichujiajuneirong(){
		if(this.neiRongZhanShi.parent){
			this.removeChild(this.neiRongZhanShi);
		}
		if(this.yuanGongJieMian.parent){
			this.removeChild(this.yuanGongJieMian);
		}
		if(this.tuiguangchuandan.parent){
			this.removeChild(this.tuiguangchuandan);
		}
		if(this.tuiguangdianshi.parent){
			this.removeChild(this.tuiguangdianshi);
		}
		if(this.tuiguangpinglun.parent){
			this.removeChild(this.tuiguangpinglun);
		}
		if(this.tuiguangdaiyan.parent){
			this.removeChild(this.tuiguangdaiyan);
		}
		if(this.danjuJieMian.parent){
			this.removeChild(this.danjuJieMian);
		}
	}
}