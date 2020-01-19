class Zhujiemianshangceng extends eui.Component implements  eui.UIComponent {
	public zhuyaozu:eui.Group;
	public img_tiziqianduan:eui.Image;
	public zhongbuzu1:eui.Group;
	public but_caipu1:eui.Button;
	public but_liuyan1:eui.Button;
	public but_guanli1:eui.Button;
	public but_jingyinbaobiao1:eui.Button;
	public zhuangatizu:eui.Group;
	public img_zhuangtaixianshibg:eui.Image;
	public shicaiwenzi:eui.Label;
	public img_shicai:eui.Image;
	public but_tianjia:eui.Button;
	public img_zhuangtaixianshibg0:eui.Image;
	public weishengwenzi:eui.Label;
	public img_saoba:eui.Image;





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
		this.anniuchuli();
	}

	public anniuchuli():void{
		this.chushihua();
		//点击菜谱按钮时，触发
		this.but_caipu1.addEventListener(egret.TouchEvent.TOUCH_TAP,this.openCaipu,this);
		//点击管理按钮时，触发
		this.but_guanli1.addEventListener(egret.TouchEvent.TOUCH_TAP,this.openGuanli,this);
		//点击食材添加按钮时触发
		this.but_tianjia.addEventListener(egret.TouchEvent.TOUCH_TAP,this.dianjishicai,this);
		//点击经营报表按钮时，触发
		this.but_jingyinbaobiao1.addEventListener(egret.TouchEvent.TOUCH_TAP,this.dianjijingying,this);
		

		
	}

	public openCaipu(){
		Gameguanli.Kongzhitai().caipujiemian("fandian","kai");
	}

	public openGuanli(){
		Gameguanli.Kongzhitai().caipujiemian("guanli","kai");

	}

	public dianjijingying(){
		Gameguanli.Kongzhitai().caipujiemian("jingying","kai");
	}

	public dianjishicai(){
		console.log("点击增加食材");
	}

	public chushihua(){
		this.shicaiwenzi.text = "" + Gerenshuxing.yongyouyuanliao;
		this.weishengwenzi.text = "" + Gerenshuxing.zzweishengzhi;
	}
	
}