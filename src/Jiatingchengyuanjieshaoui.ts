class Jiatingchengyuanjieshaoui extends eui.Component implements  eui.UIComponent {
	public guanbiananniu:eui.Button;
	public xinxijiemianzu:eui.Group;
	public img_tanchubeijing:eui.Image;
	public biaotiwenzi:eui.Label;
	public guanxibiaoqian:eui.Label;
	public guanxineirong:eui.Label;
	public qinhelibiaoqian:eui.Label;
	public qinghelizhi:eui.Label;
	public gongzuobiaoqian:eui.Label;
	public gongzuozhi:eui.Label;
	public jiesaobiaoqian:eui.Label;
	public jiesaoneirong:eui.Label;



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