class Shafadianshidengjiaohuui extends eui.Component implements  eui.UIComponent {
	public zhaxiangxinxi:eui.Group;
	public heiseguanbi:eui.Image;
	public zhuyaoxianshizu:eui.Group;
	public img_tanchubeijing0:eui.Image;
	public zhezaodikuang:eui.Image;
	public zhezaodikuang0:eui.Image;
	public zhezaodikuang1:eui.Image;
	public biaotiwenzi0:eui.Label;
	public guanxibiaoqian0:eui.Label;
	public guanxineirong0:eui.Label;
	public qinhelibiaoqian0:eui.Label;
	public qinghelizhi0:eui.Label;
	public jiesaobiaoqian0:eui.Label;
	public jiesaoneirong0:eui.Label;
	public qurenanniu:eui.Button;
	public qurenanniu0:eui.Button;
	public qurenanniu1:eui.Button;
	public guanbianniu:eui.Button;





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
//		this.guanbianniujiaohu();
	}
	

	public guanbianniujiaohu(){
		this.heiseguanbi.touchEnabled = true;
		this.heiseguanbi.addEventListener(egret.TouchEvent.TOUCH_TAP,()=>{
			Gamesound.Soundkongzhi().anniuyinxiao();
			this.parent.removeChild(this);
		},this);		
	}
}