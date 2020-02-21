class dibuxinxi extends eui.Component implements  eui.UIComponent {
	public dibuzu0:eui.Group;
	public img_bottombg1:eui.Image;
	public but_hotel1:eui.Button;
	public but_gongyuan1:eui.Button;
	public but_licai1:eui.Button;
	public but_huijia1:eui.Button;


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

	private dibuchushihua() {
		this.but_hotel1.addEventListener(egret.TouchEvent.TOUCH_TAP,this.openfandian,this);
		this.but_gongyuan1.addEventListener(egret.TouchEvent.TOUCH_TAP,this.opendajie,this);
	}

	private openfandian(){
		Gameguanli.Kongzhitai().dibuui.but_hotel1.enabled = false;
		Gameguanli.Kongzhitai().dibuui.but_gongyuan1.enabled = true;
//		向界面管理中加入打开主界面参数;
		Gameguanli.Kongzhitai().jiemianxianshi("zhujiemian");
		
		
	}

	private opendajie(){
		Gameguanli.Kongzhitai().dibuui.but_hotel1.enabled = true;
		Gameguanli.Kongzhitai().dibuui.but_gongyuan1.enabled = false;
//		向界面管理中加入打开主界面参数;
		Gameguanli.Kongzhitai().jiemianxianshi("shangjie");
	}
	
}

