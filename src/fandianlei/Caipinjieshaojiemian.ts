class Caipinjieshaojiemian extends eui.Component implements  eui.UIComponent {
	public caipinjiemainzu:eui.Group;
	public img_caipujieshaobg:eui.Image;
	public biaotizu:eui.Group;
	public img_biaoticaipujieshao:eui.Image;
	public caipinmingcheng:eui.Label;
	public but_zhuanfa:eui.Button;
	public but_zhizuo:eui.Button;
	public caipinshuxingzu:eui.Group;
	public jianjie:eui.Label;
	public jinengshuoming:eui.Label;
	public jinengmingzi:eui.Label;
	public caipindeicon:eui.Image;
	public chushoudanjia:eui.Label;
	public lashuxing:eui.Label;
	public mashuxing:eui.Label;
	public suanshuxing:eui.Label;
	public tianshuxing:eui.Label;
	public xiaohaoshicai:eui.Label;
	public img_jindutiaobeijing:eui.Image;
	public img_jindutiaogundong:eui.Image;
	public jinduwenzi:eui.Label;
	public lengjiwenzi:eui.Label;
	public img_laicon:eui.Image;
	public img_maicon:eui.Image;
	public img_suanicon:eui.Image;
	public img_tianicon:eui.Image;
	public jineng1:eui.Image;
	public jineng2:eui.Image;
	public jineng3:eui.Image;
	public jineng4:eui.Image;
	public jineng5:eui.Image;
	public guanbianniu:eui.Button;
	public img_qian:eui.Image;
	public img_shicai:eui.Image;






	public constructor() {
		super();
	//	this.chushihua();
	}

	protected partAdded(partName:string,instance:any):void
	{
		super.partAdded(partName,instance);
	}


	protected childrenCreated():void
	{
		super.childrenCreated();
	}

	public chushihua(){
		this.but_zhuanfa.enabled = true;
		this.but_zhuanfa.addEventListener(egret.TouchEvent.TOUCH_TAP,this.zhudongzhuanfa,this);
	}

	public async zhudongzhuanfa(){
		const zhudongzhuanfa = await platform.shareAppMessage("第六十四年",Gerenshuxing.fenxianglianjiedizhi,11);
		console.log("主动转发回调函数:" + zhudongzhuanfa);
	}
	
}