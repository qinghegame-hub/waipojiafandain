class Jianglijiesuanui extends eui.Component implements  eui.UIComponent {
	public jianglizu:eui.Group;
	public img_huodebeijing:eui.Image;
	public jiangliicon:eui.Image;
	public jianglishuliang:eui.Label;
	public qudinganniu:eui.Button;


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
		this.chushihua();
	}

	public chushihua(){
//		this.qudinganniu.addEventListener(egret.TouchEvent.TOUCH_TAP,this.guanbi,this);
	}

	public guanbi(){
//		Gameguanli.Kongzhitai().guanbimaicai();
//		Gameguanli.Kongzhitai().jianglijiemian("guan");
	}
	
}