class Jiatingchengyuanjieshaoui extends eui.Component implements  eui.UIComponent {
	public xinxijiemianzu:eui.Group;
	public img_tanchubeijing:eui.Image;
	public beijingdiban:eui.Image;
	public beijingdiban2:eui.Image;
	public beijingdiban1:eui.Image;
	public beijingdiban0:eui.Image;
	public biaotiwenzi:eui.Label;
	public guanxibiaoqian:eui.Label;
	public guanxineirong:eui.Label;
	public qinhelibiaoqian:eui.Label;
	public qinghelizhi:eui.Label;
	public gongzuobiaoqian:eui.Label;
	public gongzuozhi:eui.Label;
	public jiesaobiaoqian:eui.Label;
	public jiesaoneirong:eui.Label;
	public guanbiananniu:eui.Button;
	public renwutouxiang:eui.Image;




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
		this.guanbiananniu.addEventListener(egret.TouchEvent.TOUCH_TAP,()=>{
			this.parent.removeChild(this);
		},this)
	}
	
}