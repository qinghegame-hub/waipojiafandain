class Gerenshuxingjiemian extends eui.Component implements  eui.UIComponent {
	public guanbianniu:eui.Button;
	public shuominganniu:eui.Button;
	public shuominganniu0:eui.Button;
	public shuominganniu1:eui.Button;
	public shuominganniu2:eui.Button;
	public shuominganniu3:eui.Button;
	public shuominganniu4:eui.Button;
	public shuominganniu5:eui.Button;
	public shuominganniu6:eui.Button;
	public gerenshuxingjieshaozu:eui.Group;
	public img_heisezhezao:eui.Image;
	public img_tongyongpinghejiemianpng:eui.Image;
	public wanjiatouxiang:eui.Group;
	public img_shangxiangkuang:eui.Image;
	public biaotiwenzi:eui.Label;
	public nicheng:eui.Label;
	public nichengwenzi:eui.Label;
	public cunhuo:eui.Label;
	public cunhuoshijian:eui.Label;
	public xingfudengji:eui.Label;
	public dengjineirong:eui.Label;
	public xingfuzhi:eui.Label;
	public shuxingzhi:eui.Label;
	public xingfuzhishu:eui.Label;
	public naixin:eui.Label;
	public naixinzhi:eui.Label;
	public yizhi:eui.Label;
	public yizhizhi:eui.Label;
	public xingzhi:eui.Label;
	public xingzhizhi:eui.Label;
	public jingyanjinduzu:eui.Group;
	public jindubaifenbi:eui.Label;
	public img_jindutiaobeijing:eui.Image;
	public jindutiao:eui.Image;
	public laxijingtong:eui.Image;
	public laxizhi:eui.Label;
	public maxijingtong:eui.Image;
	public maxizhi:eui.Label;
	public suanxijingtong:eui.Image;
	public suanxizhi:eui.Label;
	public tianxijingtong:eui.Image;
	public tianxizhi:eui.Label;
	public jinxiuanniuzu:eui.Group;
	public jinxinganniu:eui.Button;
	public jinxiuanniuwenzi:eui.Label;

	public youxitishibiao:any;



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
		this.shuomingtishi();
	}

	public shuomingtishi(){
		this.youxitishibiao = RES.getRes("youxitishibiao_json");
		/*
		增加小提示按钮点击事件，点击后弹出介绍界面
		*/
		this.shuominganniu.addEventListener(egret.TouchEvent.TOUCH_TAP,this.shuoming1,this);
		this.shuominganniu0.addEventListener(egret.TouchEvent.TOUCH_TAP,this.shuoming2,this);
		this.shuominganniu1.addEventListener(egret.TouchEvent.TOUCH_TAP,this.shuoming3,this);
		this.shuominganniu2.addEventListener(egret.TouchEvent.TOUCH_TAP,this.shuoming4,this);
		this.shuominganniu3.addEventListener(egret.TouchEvent.TOUCH_TAP,this.shuoming5,this);
		this.shuominganniu4.addEventListener(egret.TouchEvent.TOUCH_TAP,this.shuoming6,this);
		this.shuominganniu5.addEventListener(egret.TouchEvent.TOUCH_TAP,this.shuoming7,this);
		this.shuominganniu6.addEventListener(egret.TouchEvent.TOUCH_TAP,this.shuoming8,this);
	}

	public shuoming1(){
		for(var i = 0;i<this.youxitishibiao.length;i++){
			if(this.youxitishibiao[i].id == "19"){
				this.youxitishijiemian(this.youxitishibiao[i].neirong);
				break;
			}
		}
	}

	public shuoming2(){
		for(var i = 0;i<this.youxitishibiao.length;i++){
			if(this.youxitishibiao[i].id == "20"){
				this.youxitishijiemian(this.youxitishibiao[i].neirong);
				break;
			}
		}
	}

	public shuoming3(){
		for(var i = 0;i<this.youxitishibiao.length;i++){
			if(this.youxitishibiao[i].id == "21"){
				this.youxitishijiemian(this.youxitishibiao[i].neirong);
				break;
			}
		}
	}

	public shuoming4(){
		for(var i = 0;i<this.youxitishibiao.length;i++){
			if(this.youxitishibiao[i].id == "22"){
				this.youxitishijiemian(this.youxitishibiao[i].neirong);
				break;
			}
		}
	}

	public shuoming5(){
		for(var i = 0;i<this.youxitishibiao.length;i++){
			if(this.youxitishibiao[i].id == "23"){
				this.youxitishijiemian(this.youxitishibiao[i].neirong);
				break;
			}
		}
	}

	public shuoming6(){
		for(var i = 0;i<this.youxitishibiao.length;i++){
			if(this.youxitishibiao[i].id == "24"){
				this.youxitishijiemian(this.youxitishibiao[i].neirong);
				break;
			}
		}
	}

	public shuoming7(){
		for(var i = 0;i<this.youxitishibiao.length;i++){
			if(this.youxitishibiao[i].id == "25"){
				this.youxitishijiemian(this.youxitishibiao[i].neirong);
				break;
			}
		}
	}

	public shuoming8(){
		for(var i = 0;i<this.youxitishibiao.length;i++){
			if(this.youxitishibiao[i].id == "26"){
				this.youxitishijiemian(this.youxitishibiao[i].neirong);
				break;
			}
		}
	}

	public youxitishijiemian(neirong){
		let tishijiemian = new Youxitishiui();
		this.addChild(tishijiemian);
		tishijiemian.xianshineirong(neirong);
	}


	
}