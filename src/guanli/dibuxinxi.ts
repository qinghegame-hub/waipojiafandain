class dibuxinxi extends eui.Component implements  eui.UIComponent {
	public dibuzu0:eui.Group;
	public img_bottombg1:eui.Image;
	public but_hotel1:eui.Button;
	public but_gongyuan1:eui.Button;
	public but_licai1:eui.Button;
	public but_huijia1:eui.Button;
	public fandiansuo:eui.Image;
	public dajiesuo:eui.Image;
	public paihangsuo:eui.Image;
	public huijiasuo:eui.Image;



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
		this.dibuchushihua();//初始化入口
	}

	public dibuchushihua() {
		this.jiesuokongzhi();
		Gameguanli.Kongzhitai().dibuui.but_hotel1.enabled = true;
		this.but_hotel1.addEventListener(egret.TouchEvent.TOUCH_TAP,this.openfandian,this);
		Gameguanli.Kongzhitai().dibuui.but_huijia1.enabled = false;
		this.but_huijia1.addEventListener(egret.TouchEvent.TOUCH_TAP,this.openhuijia,this);
		Gameguanli.Kongzhitai().dibuui.but_gongyuan1.enabled = true;
		this.but_gongyuan1.addEventListener(egret.TouchEvent.TOUCH_TAP,this.opendajie,this);
		Gameguanli.Kongzhitai().dibuui.but_licai1.enabled = true;
		this.but_licai1.addEventListener(egret.TouchEvent.TOUCH_TAP,this.openpaihang,this);
	}

	public jiesuokongzhi(){
		if(Gerenshuxing.guideuiyindao < 11){
			this.fandiansuo.source = "img_xiamiandaisuoanniu_png";
		}else{
			this.fandiansuo.source = "";
		}
		if(Gerenshuxing.guideuiyindao < 21){
			this.dajiesuo.source = "img_xiamiandaisuoanniu_png";
		}else{
			this.dajiesuo.source = "";
		}
		if(Gerenshuxing.guideuiyindao < 19){
			this.paihangsuo.source = "img_xiamiandaisuoanniu_png";
		}else{
			this.paihangsuo.source = "";
		}
		this.huijiasuo.source = "";

	}

	private openfandian(){
		Gamesound.Soundkongzhi().anniuyinxiao();
		Gameguanli.Kongzhitai().dibuui.but_hotel1.enabled = false;
		Gameguanli.Kongzhitai().dibuui.but_gongyuan1.enabled = true;
		Gameguanli.Kongzhitai().dibuui.but_huijia1.enabled = true;
		Gameguanli.Kongzhitai().dibuui.but_licai1.enabled = true;
		//关闭家庭界面
		Gameguanli.Kongzhitai().jiatingjiemianguanbi();
//		向界面管理中加入打开主界面参数;
		Gameguanli.Kongzhitai().jiemianxianshi("zhujiemian");
		
		
		
	}

	private opendajie(){
		Gamesound.Soundkongzhi().anniuyinxiao();
//		向界面管理中加入打开主界面参数;
		Gameguanli.Kongzhitai().jiemianxianshi("shangjie");
	}

	private openhuijia(){
		Gamesound.Soundkongzhi().anniuyinxiao();
		Gameguanli.Kongzhitai().dibuui.but_hotel1.enabled = true;
		Gameguanli.Kongzhitai().dibuui.but_gongyuan1.enabled = true;
		Gameguanli.Kongzhitai().dibuui.but_huijia1.enabled = false;
		Gameguanli.Kongzhitai().dibuui.but_licai1.enabled = true;
		//关闭家庭界面
		Gameguanli.Kongzhitai().jiatingjiemianguanbi();
//		向界面管理中加入打开主界面参数;
		Gameguanli.Kongzhitai().jiemianxianshi("huijia");
	}

	private openpaihang(){
		Gamesound.Soundkongzhi().anniuyinxiao();
		Gameguanli.Kongzhitai().dibuui.but_hotel1.enabled = true;
		Gameguanli.Kongzhitai().dibuui.but_gongyuan1.enabled = true;
		Gameguanli.Kongzhitai().dibuui.but_huijia1.enabled = true;
		Gameguanli.Kongzhitai().dibuui.but_licai1.enabled = false;
		//关闭家庭界面
		Gameguanli.Kongzhitai().jiatingjiemianguanbi();
//		向界面管理中加入打开主界面参数;
		Gameguanli.Kongzhitai().jiemianxianshi("gonggao");

	}


	
}

