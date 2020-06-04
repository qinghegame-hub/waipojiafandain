class Youxitishiui extends eui.Component implements  eui.UIComponent {
	public shuomingzu:eui.Group;
	public heisezhezao:eui.Image;
	public tishibeijing:eui.Image;
	public shuomingjieshao:eui.Label;
	public shuomingneirong:eui.Label;
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
		this.chushihua();
	}

	public chushihua(){
		this.heisezhezao.touchEnabled = true;
		this.heisezhezao.addEventListener(egret.TouchEvent.TOUCH_TAP,()=>{
			this.parent.removeChild(this);
		},this);
		this.guanbianniu.addEventListener(egret.TouchEvent.TOUCH_TAP,()=>{
			this.parent.removeChild(this);
		},this);
	}

	public xianshineirong(neirong:string){
		this.shuomingneirong.text = neirong;
	}
	
}